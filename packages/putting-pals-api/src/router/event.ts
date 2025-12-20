import { LeaderboardService } from "@putting-pals/putting-pals-core/leaderboard";
import { TournamentService } from "@putting-pals/putting-pals-core/tournament";
import type { db } from "@putting-pals/putting-pals-db/client";
import {
  type LeaderboardSnapshotV1,
  leaderboardSnapshotBaseTable,
  leaderboardSnapshotPatchTable,
} from "@putting-pals/putting-pals-db/schema";
import { and, asc, desc, eq } from "drizzle-orm";
import patch from "fast-json-patch";
import z from "zod";
import { publicProcedure, router } from "../trpc";

type Ctx = {
  db: typeof db;
};

export const eventRouter = router({
  processEvent: publicProcedure
    .input(
      z.object({
        cron: z.string(),
        scheduledTime: z.number(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      // biome-ignore lint/suspicious/noConsole: testing
      console.log("processing event", input.cron, input.scheduledTime);
      return processEvent(ctx);
    }),
});

async function processEvent(ctx: Ctx) {
  const tourCode = "R";

  const [tournament, leaderboard] = await Promise.all([
    getTournament(),
    getLeaderboard(),
  ]);

  const newSnapshot = normalizeNewSnapshot(tournament, leaderboard);

  const db = ctx.db;

  const base = await db
    .select()
    .from(leaderboardSnapshotBaseTable)
    .where(
      and(
        eq(leaderboardSnapshotBaseTable.tournamentId, tournament.id),
        eq(leaderboardSnapshotBaseTable.tourCode, tourCode),
      ),
    )
    .orderBy(desc(leaderboardSnapshotBaseTable.createdAt))
    .limit(1);

  const baseSnapshot = base[0]?.snapshot;

  if (baseSnapshot === undefined || baseSnapshot === null) {
    await db.insert(leaderboardSnapshotBaseTable).values({
      tournamentId: tournament.id,
      tourCode: tourCode,
      snapshot: newSnapshot,
    });
    return;
  }

  const patches = await db
    .select()
    .from(leaderboardSnapshotPatchTable)
    .where(
      and(
        eq(leaderboardSnapshotPatchTable.tournamentId, tournament.id),
        eq(leaderboardSnapshotPatchTable.tourCode, tourCode),
      ),
    )
    .orderBy(asc(leaderboardSnapshotPatchTable.createdAt));

  const materialized = normalizeExistingSnapshot(
    patch.applyPatch(
      structuredClone(baseSnapshot),
      patches.flatMap((patch) => patch.patch.operations),
      false,
    ).newDocument,
  );

  const diff = patch.compare(materialized, newSnapshot);
  if (diff.length > 0) {
    // Use a transaction to atomically read and insert to avoid race conditions
    return await db.transaction(async (tx) => {
      const lastStreamVersion = await tx
        .select()
        .from(leaderboardSnapshotPatchTable)
        .where(
          and(
            eq(leaderboardSnapshotPatchTable.tournamentId, tournament.id),
            eq(leaderboardSnapshotPatchTable.tourCode, tourCode),
          ),
        )
        .orderBy(desc(leaderboardSnapshotPatchTable.streamVersion))
        .limit(1);

      const streamVersion = lastStreamVersion[0]?.streamVersion ?? 0;

      try {
        return await tx
          .insert(leaderboardSnapshotPatchTable)
          .values({
            tournamentId: tournament.id,
            tourCode: tourCode,
            patch: {
              __typename: "JsonPatchV1" as const,
              operations: diff,
            },
            streamVersion: streamVersion + 1,
          })
          .returning();
      } catch (error) {
        // Log the full error structure for debugging
        // biome-ignore lint/suspicious/noConsole: error logging
        console.error("Database insert error:", {
          error,
          errorType: error?.constructor?.name,
          errorCode:
            error && typeof error === "object" && "code" in error
              ? error.code
              : undefined,
          causeCode:
            error &&
            typeof error === "object" &&
            "cause" in error &&
            error.cause &&
            typeof error.cause === "object" &&
            "code" in error.cause
              ? error.cause.code
              : undefined,
          message:
            error && typeof error === "object" && "message" in error
              ? error.message
              : String(error),
        });

        // Check for unique constraint violation in multiple places
        // PostgreSQL error code 23505 = unique_violation
        // The error code might be in error.code, error.cause?.code, or nested deeper
        const getErrorCode = (err: unknown): string | undefined => {
          if (!err || typeof err !== "object") return undefined;
          if ("code" in err && typeof err.code === "string") return err.code;
          if ("cause" in err) return getErrorCode(err.cause);
          return undefined;
        };

        const errorCode = getErrorCode(error);
        const isUniqueViolation =
          errorCode === "23505" ||
          (error &&
            typeof error === "object" &&
            "message" in error &&
            typeof error.message === "string" &&
            error.message.includes("unique") &&
            error.message.includes("constraint"));

        if (isUniqueViolation) {
          // biome-ignore lint/suspicious/noConsole: error logging
          console.log(
            "Unique constraint violation detected, retrying with fresh stream version",
          );

          // Retry: get the latest stream version again (this will see committed changes from other transactions)
          const retryStreamVersion = await tx
            .select()
            .from(leaderboardSnapshotPatchTable)
            .where(
              and(
                eq(leaderboardSnapshotPatchTable.tournamentId, tournament.id),
                eq(leaderboardSnapshotPatchTable.tourCode, tourCode),
              ),
            )
            .orderBy(desc(leaderboardSnapshotPatchTable.streamVersion))
            .limit(1);

          const newStreamVersion = retryStreamVersion[0]?.streamVersion ?? 0;

          // biome-ignore lint/suspicious/noConsole: error logging
          console.log(
            `Retry: old streamVersion=${streamVersion}, new streamVersion=${newStreamVersion}`,
          );

          if (newStreamVersion === streamVersion) {
            // If the stream version hasn't changed, the other transaction hasn't committed yet
            // or there's still a conflict. Throw a more descriptive error.
            throw new Error(
              `Failed to insert patch: unique constraint violation. Tournament: ${tournament.id}, TourCode: ${tourCode}, Attempted streamVersion: ${streamVersion + 1}, Current max streamVersion: ${newStreamVersion}`,
            );
          }

          try {
            return await tx
              .insert(leaderboardSnapshotPatchTable)
              .values({
                tournamentId: tournament.id,
                tourCode: tourCode,
                patch: {
                  __typename: "JsonPatchV1" as const,
                  operations: diff,
                },
                streamVersion: newStreamVersion + 1,
              })
              .returning();
          } catch (retryError) {
            // If retry also fails, log and throw
            // biome-ignore lint/suspicious/noConsole: error logging
            console.error("Retry insert also failed:", retryError);
            const retryErrorCode = getErrorCode(retryError);
            throw new Error(
              `Failed to insert patch after retry. Tournament: ${tournament.id}, TourCode: ${tourCode}, Error code: ${retryErrorCode || "unknown"}`,
            );
          }
        }

        // Re-throw if it's not a unique constraint violation, with better error context
        const errorMessage =
          error && typeof error === "object" && "message" in error
            ? String(error.message)
            : "Unknown database error";
        throw new Error(
          `Database error inserting patch: ${errorMessage}. Tournament: ${tournament.id}, TourCode: ${tourCode}, Error code: ${errorCode || "unknown"}`,
        );
      }
    });
  } else {
    return {
      message: "No changes detected",
    };
  }
}

function normalizeNewSnapshot(
  tournament: Tournament,
  leaderboard: Leaderboard,
) {
  return {
    __typename: "LeaderboardSnapshotV1" as const,
    tournamentStatus: tournament.tournamentStatus,
    roundDisplay: tournament.roundDisplay,
    roundStatus: tournament.roundStatus,
    roundStatusColor: tournament.roundStatusColor,
    roundStatusDisplay: tournament.roundStatusDisplay,
    leaderboardRoundHeader: leaderboard.leaderboardRoundHeader,
    rows: leaderboard.rows
      .flatMap((row) => {
        if (row.__typename === "PlayerRowV3") {
          return {
            __typename: "PlayerRowV3" as const,
            leaderboardSortOrder: row.leaderboardSortOrder,
            player: {
              abbreviations: row.player.abbreviations,
              amateur: row.player.amateur,
              countryFlag: row.player.countryFlag,
              displayName: row.player.displayName,
              id: row.player.id,
              shortName: row.player.shortName,
            },
            scoringData: {
              position: row.scoringData.position,
              score: row.scoringData.score,
              scoreSort: row.scoringData.scoreSort,
              teeTime: row.scoringData.teeTime
                ? row.scoringData.teeTime.toISOString()
                : undefined,
              thru: row.scoringData.thru,
              thruSort: row.scoringData.thruSort,
              total: row.scoringData.total,
              totalSort: row.scoringData.totalSort,
            },
          } satisfies LeaderboardSnapshotV1["rows"][number];
        } else {
          return [];
        }
      })
      .sort((a, b) => a.leaderboardSortOrder - b.leaderboardSortOrder),
  } satisfies LeaderboardSnapshotV1; // required for stricter type checking
}

function normalizeExistingSnapshot(snapshot: LeaderboardSnapshotV1) {
  return {
    __typename: "LeaderboardSnapshotV1" as const,
    tournamentStatus: snapshot.tournamentStatus,
    roundDisplay: snapshot.roundDisplay,
    roundStatus: snapshot.roundStatus,
    roundStatusColor: snapshot.roundStatusColor,
    roundStatusDisplay: snapshot.roundStatusDisplay,
    leaderboardRoundHeader: snapshot.leaderboardRoundHeader,
    rows: snapshot.rows.sort(
      (a, b) => a.leaderboardSortOrder - b.leaderboardSortOrder,
    ),
  } satisfies LeaderboardSnapshotV1; // required for stricter type checking
}

type Leaderboard = Awaited<ReturnType<typeof getLeaderboard>>;

function getLeaderboard() {
  return new LeaderboardService().getLeaderboard("R");
}

type Tournament = Awaited<ReturnType<typeof getTournament>>;

function getTournament() {
  return new TournamentService().getTournament("R");
}

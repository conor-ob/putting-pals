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
        eq(leaderboardSnapshotBaseTable.tournamentId, tournament.id),
        eq(leaderboardSnapshotBaseTable.tourCode, tourCode),
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
    const lastStreamVersion = await db
      .select()
      .from(leaderboardSnapshotPatchTable)
      .where(
        and(
          eq(leaderboardSnapshotBaseTable.tournamentId, tournament.id),
          eq(leaderboardSnapshotBaseTable.tourCode, tourCode),
        ),
      )
      .orderBy(desc(leaderboardSnapshotPatchTable.streamVersion))
      .limit(1);

    const streamVersion = lastStreamVersion[0]?.streamVersion ?? 0;

    return await db
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

import { LeaderboardService } from "@putting-pals/putting-pals-core/leaderboard";
import { TournamentService } from "@putting-pals/putting-pals-core/tournament";
import type { db } from "@putting-pals/putting-pals-db/client";
import {
  type LeaderboardSnapshotV1,
  leaderboardSnapshotBaseTable,
  leaderboardSnapshotPatchTable,
} from "@putting-pals/putting-pals-db/schema";
import { asc, desc, eq } from "drizzle-orm";
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
  const tourCode = "S";
  const tournamentId = "S2025600";

  const [tournament, leaderboard] = await Promise.all([
    new TournamentService().getTournament("R", tournamentId),
    new LeaderboardService().getLeaderboard("R", tournamentId),
  ]);

  const newSnapshot = {
    __typename: "LeaderboardSnapshotV1" as const,
    ...tournament,
    ...leaderboard,
  } satisfies LeaderboardSnapshotV1; // required for stricter type checking

  const db = ctx.db;

  const base = await db
    .select()
    .from(leaderboardSnapshotBaseTable)
    .where(eq(leaderboardSnapshotBaseTable.tournamentId, tournamentId))
    .orderBy(desc(leaderboardSnapshotBaseTable.createdAt))
    .limit(1);

  const baseSnapshot = base[0]?.snapshot;

  if (baseSnapshot === undefined || baseSnapshot === null) {
    await db.insert(leaderboardSnapshotBaseTable).values({
      tournamentId: tournamentId,
      tourCode: tourCode,
      snapshot: newSnapshot,
    });
    return;
  }

  const patches = await db
    .select()
    .from(leaderboardSnapshotPatchTable)
    .where(eq(leaderboardSnapshotPatchTable.tournamentId, tournamentId))
    .orderBy(asc(leaderboardSnapshotPatchTable.createdAt));

  const materialized = patch.applyPatch(
    structuredClone(baseSnapshot),
    patches.flatMap((patch) => patch.patch.operations),
    false,
  ).newDocument;

  const diff = patch.compare(materialized, newSnapshot);
  if (diff.length > 0) {
    const lastStreamVersion = await db
      .select()
      .from(leaderboardSnapshotPatchTable)
      .where(eq(leaderboardSnapshotPatchTable.tournamentId, tournamentId))
      .orderBy(desc(leaderboardSnapshotPatchTable.streamVersion))
      .limit(1);

    const streamVersion = lastStreamVersion[0]?.streamVersion ?? 0;

    return await db
      .insert(leaderboardSnapshotPatchTable)
      .values({
        tournamentId: tournamentId,
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

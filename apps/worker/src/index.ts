/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * This is a template for a Scheduled Worker: a Worker that can run on a
 * configurable interval:
 * https://developers.cloudflare.com/workers/platform/triggers/cron-triggers/
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `curl "http://localhost:8787/__scheduled?cron=*+*+*+*+*"` to see your Worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Bind resources to your worker in `wrangler.jsonc`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */
import { LeaderboardService } from "@putting-pals/putting-pals-core/leaderboard";
import { TournamentService } from "@putting-pals/putting-pals-core/tournament";
import { asc, desc, eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/d1";
import { applyPatch, compare } from "fast-json-patch";
import {
  type LeaderboardSnapshotV1,
  leaderboardSnapshotBaseTable,
  leaderboardSnapshotPatchTable,
} from "./db/schema";

const tourCode = "S";
const tournamentId = "S2025600";

export default {
  async fetch(request, env, _ctx): Promise<Response> {
    const { pathname } = new URL(request.url);
    if (pathname === "/patch") {
      const db = drizzle(env.DB);

      const base = await db
        .select()
        .from(leaderboardSnapshotBaseTable)
        .where(eq(leaderboardSnapshotBaseTable.tournamentId, tournamentId))
        .orderBy(desc(leaderboardSnapshotBaseTable.createdAt))
        .limit(1);

      const baseSnapshot = base[0]?.snapshot;

      const patches = await db
        .select()
        .from(leaderboardSnapshotPatchTable)
        .where(eq(leaderboardSnapshotPatchTable.tournamentId, tournamentId))
        .orderBy(asc(leaderboardSnapshotPatchTable.createdAt));

      const materialized = applyPatch(
        structuredClone(baseSnapshot),
        patches.flatMap((patch) => patch.patch.operations),
        false,
      ).newDocument;

      return Response.json(
        {
          baseSnapshot,
          patches,
          materialized,
        },
        {
          status: 200,
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
    }
    return Response.json({ message: "OK" }, { status: 200 });
  },

  async scheduled(_controller, env, _ctx): Promise<void> {
    const [tournament, leaderboard] = await Promise.all([
      new TournamentService().getTournament("R", tournamentId),
      new LeaderboardService().getLeaderboard("R", tournamentId),
    ]);

    const newSnapshot = {
      __typename: "LeaderboardSnapshotV1" as const,
      ...tournament,
      ...leaderboard,
    } satisfies LeaderboardSnapshotV1; // required for stricter type checking

    const db = drizzle(env.DB);

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

    const materialized = applyPatch(
      structuredClone(baseSnapshot),
      patches.flatMap((patch) => patch.patch.operations),
      false,
    ).newDocument;

    const diff = compare(materialized, newSnapshot);
    if (diff.length > 0) {
      const db = drizzle(env.DB);

      const lastStreamVersion = await db
        .select()
        .from(leaderboardSnapshotPatchTable)
        .where(eq(leaderboardSnapshotPatchTable.tournamentId, tournamentId))
        .orderBy(desc(leaderboardSnapshotPatchTable.streamVersion))
        .limit(1);

      const streamVersion = lastStreamVersion[0]?.streamVersion ?? 0;

      await db.insert(leaderboardSnapshotPatchTable).values({
        tournamentId: tournamentId,
        tourCode: tourCode,
        patch: {
          __typename: "JsonPatchV1" as const,
          operations: diff,
        },
        streamVersion: streamVersion + 1,
      });
    }
  },
} satisfies ExportedHandler<Env>;

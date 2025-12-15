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
    const db = drizzle(env.DB);

    const base = await db
      .select()
      .from(leaderboardSnapshotBaseTable)
      .where(eq(leaderboardSnapshotBaseTable.tournamentId, tournamentId))
      .orderBy(desc(leaderboardSnapshotBaseTable.createdAt))
      .limit(1);

    const baseSnapshot = base[0]?.snapshot;

    const [tournament, leaderboard] = await Promise.all([
      new TournamentService().getTournament("R", tournamentId),
      new LeaderboardService().getLeaderboard("R", tournamentId),
    ]);

    const newSnapshot = {
      __typename: "PgaTourLeaderboardSnapshotV1" as const,
      leaderboard: {
        tournamentStatus: leaderboard.tournamentStatus,
      },
      tournament: {
        roundDisplay: tournament.roundDisplay,
        roundStatus: tournament.roundStatus,
        roundStatusColor: tournament.roundStatusColor,
        roundStatusDisplay: tournament.roundStatusDisplay,
      },
    };

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

      await db.insert(leaderboardSnapshotPatchTable).values({
        tournamentId: tournamentId,
        tourCode: tourCode,
        patch: {
          __typename: "JsonPatchV1" as const,
          operations: diff,
        },
      });
    }
  },
} satisfies ExportedHandler<Env>;

// /**
//  * Welcome to Cloudflare Workers! This is your first worker.
//  *
//  * This is a template for a Scheduled Worker: a Worker that can run on a
//  * configurable interval:
//  * https://developers.cloudflare.com/workers/platform/triggers/cron-triggers/
//  *
//  * - Run `npm run dev` in your terminal to start a development server
//  * - Open a browser tab at http://localhost:8787/ to see your worker in action
//  * - Run `curl "http://localhost:8787/__scheduled?cron=*+*+*+*+*"` to see your Worker in action
//  * - Run `npm run deploy` to publish your worker
//  *
//  * Bind resources to your worker in `wrangler.jsonc`. After adding bindings, a type definition for the
//  * `Env` object can be regenerated with `npm run cf-typegen`.
//  *
//  * Learn more at https://developers.cloudflare.com/workers/
//  */

// import { LeaderboardService } from "@putting-pals/putting-pals-core/leaderboard";
// import { TournamentService } from "@putting-pals/putting-pals-core/tournament";
// import { desc, lt } from "drizzle-orm";
// import { drizzle } from "drizzle-orm/d1";
// import { applyPatch, compare, Operation } from "fast-json-patch";
// import {
//   leaderboardFeedTable,
//   leaderboardSnapshotPatchTable,
//   leaderboardSnapshotTable,
// } from "./db/schema";

// export default {
//   async fetch(request, env, _ctx): Promise<Response> {
//     const { pathname, searchParams } = new URL(request.url);
//     if (pathname === "/leaderboard-feed") {
//       const limit = searchParams.get("limit");
//       const cursor = searchParams.get("cursor");

//       const feed = await getLeaderboardFeed(env, {
//         limit: limit ? parseInt(limit, 10) : undefined,
//         cursor: cursor ?? undefined,
//       });

//       return Response.json(feed, {
//         status: 200,
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
//     }
//     return Response.json({ message: "OK" }, { status: 200 });
//   },

//   async scheduled(_controller, env, _ctx): Promise<void> {
//     const existingSnapshot = {
//       __typename: "PgaTourLeaderboardSnapshotV1" as const,
//       leaderboard: {
//         tournamentStatus: "IN_PROGRESS",
//       },
//       tournament: {
//         roundDisplay: "R2",
//         roundStatus: "IN_PROGRESS",
//         roundStatusColor: "RED",
//         roundStatusDisplay: "In Progress",
//       },
//     };

//     const newSnapshot = {
//       __typename: "PgaTourLeaderboardSnapshotV1" as const,
//       leaderboard: {
//         tournamentStatus: "IN_PROGRESS",
//       },
//       tournament: {
//         roundDisplay: "R2",
//         roundStatus: "SUSPENDED",
//         roundStatusColor: "YELLOW",
//         roundStatusDisplay: "Suspended",
//       },
//     };

//     const diff = compare(existingSnapshot, newSnapshot);
//     console.log("diff", diff);
//   },

//   // async scheduled(_controller, env, _ctx): Promise<void> {
//   //   const db = drizzle(env.DB);
//   //   const tourCode = "R";

//   //   const [tournament, leaderboard] = await Promise.all([
//   //     new TournamentService().getTournament(tourCode, "R2025088"),
//   //     new LeaderboardService().getLeaderboard(tourCode, "R2025088"),
//   //   ]);

//   //   const results = await db
//   //     .select()
//   //     .from(leaderboardSnapshotTable)
//   //     .orderBy(desc(leaderboardSnapshotTable.createdAt))
//   //     .limit(1);

//   //   const existingSnapshot = results[0]?.snapshot;

//   //   const newSnapshot = {
//   //     __typename: "PgaTourLeaderboardSnapshotV1" as const,
//   //     leaderboard: {
//   //       tournamentStatus: leaderboard.tournamentStatus,
//   //     },
//   //     tournament: {
//   //       roundDisplay: tournament.roundDisplay,
//   //       roundStatus: tournament.roundStatus,
//   //       roundStatusColor: tournament.roundStatusColor,
//   //       roundStatusDisplay: tournament.roundStatusDisplay,
//   //     },
//   //   };

//   //   if (
//   //     existingSnapshot !== undefined &&
//   //     existingSnapshot.__typename === newSnapshot.__typename
//   //   ) {
//   //     const diff = compare(existingSnapshot, newSnapshot);
//   //     if (diff.length > 0) {
//   //       await db.insert(leaderboardSnapshotPatchTable).values({
//   //         tournamentId: leaderboard.id,
//   //         tourCode: tourCode,
//   //         patch: {
//   //           __typename: "JsonPatchV1" as const,
//   //           operations: diff,
//   //         },
//   //       });
//   //     }
//   //   }

//   //   if (
//   //     existingSnapshot === undefined ||
//   //     existingSnapshot.__typename !== newSnapshot.__typename ||
//   //     existingSnapshot.leaderboard.tournamentStatus !==
//   //       newSnapshot.leaderboard.tournamentStatus ||
//   //     existingSnapshot.tournament.roundDisplay !==
//   //       newSnapshot.tournament.roundDisplay ||
//   //     existingSnapshot.tournament.roundStatus !==
//   //       newSnapshot.tournament.roundStatus ||
//   //     existingSnapshot.tournament.roundStatusColor !==
//   //       newSnapshot.tournament.roundStatusColor ||
//   //     existingSnapshot.tournament.roundStatusDisplay !==
//   //       newSnapshot.tournament.roundStatusDisplay
//   //   ) {
//   //     await db.insert(leaderboardSnapshotTable).values({
//   //       tournamentId: leaderboard.id,
//   //       tourCode: tourCode,
//   //       snapshot: newSnapshot,
//   //     });
//   //   }
//   // },
// } satisfies ExportedHandler<Env>;

// export async function getLeaderboardFeed(
//   env: Env,
//   query: {
//     limit?: number;
//     cursor?: string;
//   },
// ) {
//   const db = drizzle(env.DB);
//   const limit = query.limit ?? 10;

//   const items = await db
//     .select()
//     .from(leaderboardFeedTable)
//     .where(
//       query.cursor
//         ? lt(leaderboardFeedTable.createdAt, query.cursor)
//         : undefined,
//     )
//     .orderBy(desc(leaderboardFeedTable.createdAt))
//     .limit(limit);

//   const nextCursor = items.length ? items[items.length - 1].createdAt : null;

//   return { items, nextCursor };
// }

import { createId } from "@paralleldrive/cuid2";
import type {
  RoundStatus,
  RoundStatusColor,
  TournamentStatus,
} from "@putting-pals/pga-tour-schema/types";
import {
  integer,
  sqliteTable,
  text,
  uniqueIndex,
} from "drizzle-orm/sqlite-core";
import type { Operation } from "fast-json-patch";

// type RoundStatusChangedV1 = {
//   __typename: "RoundStatusChangedV1";
//   roundDisplay: string;
//   roundStatus: RoundStatus;
//   roundStatusColor: RoundStatusColor;
//   roundStatusDisplay: string;
// };

// type TournamentWinnerV1 = {
//   __typename: "TournamentWinnerV1";
//   winner: string;
// };

// export const leaderboardFeedTable = sqliteTable("leaderboard_feed", {
//   id: text("id")
//     .primaryKey()
//     .$defaultFn(() => createId()),
//   tournamentId: text("tournament_id").notNull(),
//   tourCode: text("tour_code", { enum: ["P", "R", "S"] }).notNull(),
//   feed_item: text("feed_item", { mode: "json" })
//     .notNull()
//     .$type<RoundStatusChangedV1 | TournamentWinnerV1>(),
//   createdAt: integer("created_at")
//     .notNull()
//     .$defaultFn(() => Date.now()),
// });

export type LeaderboardSnapshotV1 = {
  __typename: "LeaderboardSnapshotV1";
  tournamentStatus: TournamentStatus;
  roundDisplay: string;
  roundStatus: RoundStatus;
  roundStatusColor: RoundStatusColor;
  roundStatusDisplay: string;
};

// type PuttingPalsLeaderboardSnapshotV1 = {
//   __typename: "PuttingPalsLeaderboardSnapshotV1";
//   leaderboard: {
//     tournamentStatus: TournamentStatus;
//   };
//   tournament: {
//     roundDisplay: string;
//     roundStatus: RoundStatus;
//     roundStatusColor: RoundStatusColor;
//     roundStatusDisplay: string;
//   };
// };

// export const leaderboardSnapshotTable = sqliteTable("leaderboard_snapshot", {
//   id: text("id")
//     .primaryKey()
//     .$defaultFn(() => createId()),
//   tournamentId: text("tournament_id").notNull(),
//   tourCode: text("tour_code", { enum: ["P", "R", "S"] }).notNull(),
//   snapshot: text("snapshot", { mode: "json" })
//     .notNull()
//     .$type<LeaderboardSnapshotV1>(),
//   createdAt: integer("created_at")
//     .notNull()
//     .$defaultFn(() => Date.now()),
// });

// TODO: should the primary key be the tournamentId? Only one snapshot per tournament? ans: no because we could have a new snapshot type in the same tournament
export const leaderboardSnapshotBaseTable = sqliteTable(
  "leaderboard_snapshot_base",
  {
    id: text("id")
      .primaryKey()
      .$defaultFn(() => createId()),
    tournamentId: text("tournament_id").notNull(),
    tourCode: text("tour_code", { enum: ["P", "R", "S"] }).notNull(),
    snapshot: text("snapshot", { mode: "json" })
      .notNull()
      .$type<LeaderboardSnapshotV1>(),
    createdAt: integer("created_at")
      .notNull()
      .$defaultFn(() => Date.now()),
  },
);

type JsonPatchV1 = {
  __typename: "JsonPatchV1";
  operations: Operation[];
};

export const leaderboardSnapshotPatchTable = sqliteTable(
  "leaderboard_snapshot_patch",
  {
    id: text("id")
      .primaryKey()
      .$defaultFn(() => createId()),
    tournamentId: text("tournament_id").notNull(),
    tourCode: text("tour_code", { enum: ["P", "R", "S"] }).notNull(),
    patch: text("patch", { mode: "json" }).notNull().$type<JsonPatchV1>(),
    // type: // e.g: | "TOURNAMENT_STARTED" | "SCORE_RECORDED"
    streamVersion: integer("stream_version").notNull(),
    createdAt: integer("created_at")
      .notNull()
      .$defaultFn(() => Date.now()),
  },
  (t) => [
    uniqueIndex("unique_tournament_stream_version").on(
      t.tournamentId,
      t.streamVersion,
    ),
  ],
);

export const leaderboardSnapshotMaterializedTable = sqliteTable(
  "leaderboard_snapshot_materialized",
  {
    id: text("id")
      .primaryKey()
      .$defaultFn(() => createId()),
    tournamentId: text("tournament_id").notNull(),
    tourCode: text("tour_code", { enum: ["P", "R", "S"] }).notNull(),
    snapshot: text("snapshot", { mode: "json" })
      .notNull()
      .$type<LeaderboardSnapshotV1>(),
    patchStreamVersion: integer("patch_stream_version").notNull(),
    createdAt: integer("created_at")
      .notNull()
      .$defaultFn(() => Date.now()),
  },
);

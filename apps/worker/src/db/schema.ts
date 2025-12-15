import type {
  RoundStatus,
  RoundStatusColor,
  TournamentStatus,
} from "@putting-pals/pga-tour-schema/types";
import { sqliteTable, text } from "drizzle-orm/sqlite-core";
import type { Operation } from "fast-json-patch";

type RoundStatusChangedV1 = {
  __typename: "RoundStatusChangedV1";
  roundDisplay: string;
  roundStatus: RoundStatus;
  roundStatusColor: RoundStatusColor;
  roundStatusDisplay: string;
};

type TournamentWinnerV1 = {
  __typename: "TournamentWinnerV1";
  winner: string;
};

export const leaderboardFeedTable = sqliteTable("leaderboard_feed", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  tournamentId: text("tournament_id").notNull(),
  tourCode: text("tour_code", { enum: ["P", "R", "S"] }).notNull(),
  feed_item: text("feed_item", { mode: "json" })
    .notNull()
    .$type<RoundStatusChangedV1 | TournamentWinnerV1>(),
  createdAt: text("created_at")
    .notNull()
    .$defaultFn(() => new Date().toISOString()),
});

type PgaTourLeaderboardSnapshotV1 = {
  __typename: "PgaTourLeaderboardSnapshotV1";
  leaderboard: {
    tournamentStatus: TournamentStatus;
  };
  tournament: {
    roundDisplay: string;
    roundStatus: RoundStatus;
    roundStatusColor: RoundStatusColor;
    roundStatusDisplay: string;
  };
};

type PuttingPalsLeaderboardSnapshotV1 = {
  __typename: "PuttingPalsLeaderboardSnapshotV1";
  leaderboard: {
    tournamentStatus: TournamentStatus;
  };
  tournament: {
    roundDisplay: string;
    roundStatus: RoundStatus;
    roundStatusColor: RoundStatusColor;
    roundStatusDisplay: string;
  };
};

export const leaderboardSnapshotTable = sqliteTable("leaderboard_snapshot", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  tournamentId: text("tournament_id").notNull(),
  tourCode: text("tour_code", { enum: ["P", "R", "S"] }).notNull(),
  snapshot: text("snapshot", { mode: "json" })
    .notNull()
    .$type<PgaTourLeaderboardSnapshotV1 | PuttingPalsLeaderboardSnapshotV1>(),
  createdAt: text("created_at")
    .notNull()
    .$defaultFn(() => new Date().toISOString()),
});

// TODO: should the primary key be the tournamentId? Only one snapshot per tournament?
export const leaderboardSnapshotBaseTable = sqliteTable(
  "leaderboard_snapshot_base",
  {
    id: text("id")
      .primaryKey()
      .$defaultFn(() => crypto.randomUUID()),
    tournamentId: text("tournament_id").notNull(),
    tourCode: text("tour_code", { enum: ["P", "R", "S"] }).notNull(),
    snapshot: text("snapshot", { mode: "json" })
      .notNull()
      .$type<PgaTourLeaderboardSnapshotV1 | PuttingPalsLeaderboardSnapshotV1>(),
    createdAt: text("created_at")
      .notNull()
      .$defaultFn(() => new Date().toISOString()),
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
      .$defaultFn(() => crypto.randomUUID()),
    tournamentId: text("tournament_id").notNull(),
    tourCode: text("tour_code", { enum: ["P", "R", "S"] }).notNull(),
    patch: text("patch", { mode: "json" }).notNull().$type<JsonPatchV1>(),
    createdAt: text("created_at")
      .notNull()
      .$defaultFn(() => new Date().toISOString()),
  },
);

export const leaderboardSnapshotMaterializedTable = sqliteTable(
  "leaderboard_snapshot_materialized",
  {
    id: text("id")
      .primaryKey()
      .$defaultFn(() => crypto.randomUUID()),
    tournamentId: text("tournament_id").notNull(),
    tourCode: text("tour_code", { enum: ["P", "R", "S"] }).notNull(),
    snapshot: text("snapshot", { mode: "json" })
      .notNull()
      .$type<PgaTourLeaderboardSnapshotV1 | PuttingPalsLeaderboardSnapshotV1>(),
    upToPatchCreatedAt: text("up_to_patch_created_at").notNull(),
    createdAt: text("created_at")
      .notNull()
      .$defaultFn(() => new Date().toISOString()),
  },
);

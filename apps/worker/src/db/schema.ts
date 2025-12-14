import type {
  RoundStatus,
  RoundStatusColor,
  TournamentStatus,
} from "@putting-pals/pga-tour-schema/types";
import { sqliteTable, text } from "drizzle-orm/sqlite-core";

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
  tourCode: text("tour_code", { enum: ["P", "R"] }).notNull(),
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
  tourCode: text("tour_code", { enum: ["P", "R"] }).notNull(),
  snapshot: text("snapshot", { mode: "json" })
    .notNull()
    .$type<PgaTourLeaderboardSnapshotV1 | PuttingPalsLeaderboardSnapshotV1>(),
  createdAt: text("created_at")
    .notNull()
    .$defaultFn(() => new Date().toISOString()),
});

import type {
  RoundStatus,
  RoundStatusColor,
  TournamentStatus,
} from "@putting-pals/pga-tour-schema/types";
import {
  index,
  json,
  pgTable,
  timestamp,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";

export const leaderboardSnapshotTable = pgTable(
  "leaderboard_snapshot",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    tourCode: varchar("tour_code", { enum: ["P", "R"] }).notNull(),
    tournamentId: varchar("tournament_id").notNull(),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at")
      .notNull()
      .defaultNow()
      .$onUpdate(() => new Date()),
    deletedAt: timestamp("deleted_at"),
    snapshot: json("snapshot").notNull().$type<LeaderboardSnapshotV1>(),
  },
  (table) => [
    index("leaderboard_snapshot_tournament_idx").on(
      table.tourCode,
      table.tournamentId,
    ),
  ],
);

export const leaderboardFeedTable = pgTable(
  "leaderboard_feed",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    tourCode: varchar("tour_code", { enum: ["P", "R"] }).notNull(),
    tournamentId: varchar("tournament_id").notNull(),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at")
      .notNull()
      .defaultNow()
      .$onUpdate(() => new Date()),
    deletedAt: timestamp("deleted_at"),
    feedItem: json("feed_item")
      .notNull()
      .$type<RoundStatusChangedV1 | TournamentStatusChangedV1>(),
  },
  (table) => [
    index("leaderboard_feed_tournament_idx").on(
      table.tourCode,
      table.tournamentId,
    ),
    index("leaderboard_feed_created_at_idx").on(table.createdAt),
  ],
);

export type LeaderboardSnapshotV1 = {
  __typename: "LeaderboardSnapshotV1";
  tournamentName: string;
  tournamentStatus: TournamentStatus;
  roundDisplay: string;
  roundStatus: RoundStatus;
  roundStatusColor: RoundStatusColor;
  roundStatusDisplay: string;
  rows: {
    __typename: "PlayerRowV3";
    id: string;
    leaderboardSortOrder: number;
    player: {
      abbreviations: string;
      amateur: boolean;
      countryFlag: string;
      displayName: string;
      id: string;
      shortName: string;
    };
    scoringData: {
      position: string;
      score: string;
      scoreSort: number;
      teeTime: Date | undefined;
      thru: string;
      thruSort: number;
      total: string;
      totalSort: number;
    };
  }[];
};

export type RoundStatusChangedV1 = {
  __typename: "RoundStatusChangedV1";
  roundDisplay: string;
  roundStatus: RoundStatus;
  roundStatusColor: RoundStatusColor;
  roundStatusDisplay: string;
};

export type TournamentStatusChangedV1 = {
  __typename: "TournamentStatusChangedV1";
  tournamentName: string;
  tournamentStatus: TournamentStatus;
  customText: string;
};

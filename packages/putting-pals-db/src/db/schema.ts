import type {
  RoundStatus,
  RoundStatusColor,
  TournamentStatus,
} from "@putting-pals/pga-tour-schema/types";
import {
  index,
  jsonb,
  pgTable,
  serial,
  text,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";

const defaultColumns = {
  id: uuid("id").primaryKey().defaultRandom(),
  createdAt: timestamp("created_at", {
    withTimezone: true,
    precision: 3,
  })
    .notNull()
    .defaultNow(),
  updatedAt: timestamp("updated_at", {
    withTimezone: true,
    precision: 3,
  })
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),
  deletedAt: timestamp("deleted_at", {
    withTimezone: true,
    precision: 3,
  }),
};

const tournamentIdentifierColumns = {
  tourCode: text("tour_code", { enum: ["P", "R"] }).notNull(),
  tournamentId: text("tournament_id").notNull(),
};

export const leaderboardSnapshotTable = pgTable(
  "leaderboard_snapshot",
  {
    ...defaultColumns,
    ...tournamentIdentifierColumns,
    type: text("type").notNull(),
    snapshot: jsonb("snapshot").notNull().$type<LeaderboardSnapshotV1>(),
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
    ...defaultColumns,
    ...tournamentIdentifierColumns,
    seq: serial("seq").notNull(),
    type: text("type").notNull(),
    feedItem: jsonb("feed_item")
      .notNull()
      .$type<RoundStatusChangedV1 | TournamentStatusChangedV1>(),
  },
  (table) => [
    index("leaderboard_feed_tournament_idx").on(
      table.tourCode,
      table.tournamentId,
    ),
    index("leaderboard_feed_seq_idx").on(table.seq),
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

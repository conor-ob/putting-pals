import type {
  LeaderboardFeed,
  LeaderboardFeedType,
  LeaderboardSnapshot,
  LeaderboardSnapshotType,
} from "@putting-pals/putting-pals-core";
import {
  type TourCode,
  TourCodeSchema,
} from "@putting-pals/putting-pals-schema";
import {
  index,
  jsonb,
  pgTable,
  serial,
  text,
  timestamp,
  uniqueIndex,
  uuid,
} from "drizzle-orm/pg-core";

const identifierColumns = {
  id: uuid("id").primaryKey().defaultRandom(),
};

const timestampColumns = {
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
  tourCode: text("tour_code", {
    enum: [...TourCodeSchema.options] as [TourCode, ...TourCode[]],
  }).notNull(),
  tournamentId: text("tournament_id").notNull(),
};

export const activeTournamentTable = pgTable(
  "active_tournament",
  {
    ...identifierColumns,
    ...timestampColumns,
    ...tournamentIdentifierColumns,
  },
  (table) => [
    uniqueIndex("active_tournament_tour_code_idx").on(table.tourCode),
  ],
);

export const leaderboardSnapshotTable = pgTable(
  "leaderboard_snapshot",
  {
    ...identifierColumns,
    ...timestampColumns,
    ...tournamentIdentifierColumns,
    type: text("type").notNull().$type<LeaderboardSnapshotType>(),
    payload: jsonb("payload").notNull().$type<LeaderboardSnapshot>(),
  },
  (table) => [
    uniqueIndex("leaderboard_snapshot_tournament_idx").on(
      table.tourCode,
      table.tournamentId,
      table.type,
    ),
  ],
);

export const leaderboardFeedTable = pgTable(
  "leaderboard_feed",
  {
    ...identifierColumns,
    ...timestampColumns,
    ...tournamentIdentifierColumns,
    type: text("type").notNull().$type<LeaderboardFeedType>(),
    payload: jsonb("payload").notNull().$type<LeaderboardFeed>(),
    sequence: serial("sequence").notNull(),
  },
  (table) => [
    index("leaderboard_feed_tournament_idx").on(
      table.tourCode,
      table.tournamentId,
    ),
    index("leaderboard_feed_sequence_idx").on(table.sequence),
  ],
);

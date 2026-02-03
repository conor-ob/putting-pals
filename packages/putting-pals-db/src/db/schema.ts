import type {
  FeatureFlagKey,
  LeaderboardFeedEvent,
  LeaderboardSnapshot,
} from "@putting-pals/putting-pals-core";
import type { TourCode } from "@putting-pals/putting-pals-schema";
import {
  boolean,
  index,
  jsonb,
  pgTable,
  primaryKey,
  serial,
  text,
  timestamp,
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
  tourCode: text("tour_code").notNull().$type<TourCode>(),
  tournamentId: text("tournament_id").notNull(),
};

export const activeTournamentTable = pgTable("active_tournament", {
  tourCode: text("tour_code").primaryKey().notNull().$type<TourCode>(),
  tournamentId: text("tournament_id").notNull(),
  ...timestampColumns,
});

export const featureFlagTable = pgTable("feature_flag", {
  flagKey: text("flag_key").primaryKey().notNull().$type<FeatureFlagKey>(),
  enabled: boolean("enabled").notNull().default(false),
  ...timestampColumns,
});

export const leaderboardSnapshotTable = pgTable(
  "leaderboard_snapshot",
  {
    ...tournamentIdentifierColumns,
    type: text("type").notNull().$type<LeaderboardSnapshot["__typename"]>(),
    payload: jsonb("payload").notNull().$type<LeaderboardSnapshot>(),
    ...timestampColumns,
  },
  (table) => [
    primaryKey({ columns: [table.tourCode, table.tournamentId, table.type] }),
  ],
);

export const leaderboardFeedTable = pgTable(
  "leaderboard_feed",
  {
    ...identifierColumns,
    ...tournamentIdentifierColumns,
    type: text("type").notNull().$type<LeaderboardFeedEvent["__typename"]>(),
    payload: jsonb("payload").notNull().$type<LeaderboardFeedEvent>(),
    sequence: serial("sequence").notNull(),
    ...timestampColumns,
  },
  (table) => [
    index("leaderboard_feed_tour_code_tournament_id_idx").on(
      table.tourCode,
      table.tournamentId,
    ),
    index("leaderboard_feed_sequence_idx").on(table.sequence),
  ],
);

import type {
  FeatureFlagKey,
  LeaderboardFeedEvent,
  LeaderboardSnapshot,
} from "@putting-pals/putting-pals-core";
import {
  type TourCode,
  TourCodeSchema,
} from "@putting-pals/putting-pals-schema";
import {
  boolean,
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
    uniqueIndex("active_tournament_tour_code_uniq").on(table.tourCode),
  ],
);

export const featureFlagTable = pgTable(
  "feature_flag",
  {
    ...identifierColumns,
    ...timestampColumns,
    flagKey: text("flag_key").notNull().$type<FeatureFlagKey>(),
    enabled: boolean("enabled").notNull().default(false),
  },
  (table) => [uniqueIndex("feature_flag_flag_key_uniq").on(table.flagKey)],
);

export const leaderboardSnapshotTable = pgTable(
  "leaderboard_snapshot",
  {
    ...identifierColumns,
    ...timestampColumns,
    ...tournamentIdentifierColumns,
    type: text("type").notNull().$type<LeaderboardSnapshot["__typename"]>(),
    payload: jsonb("payload").notNull().$type<LeaderboardSnapshot>(),
  },
  (table) => [
    uniqueIndex("leaderboard_snapshot_tour_code_tournament_id_type_uniq").on(
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
    type: text("type").notNull().$type<LeaderboardFeedEvent["__typename"]>(),
    payload: jsonb("payload").notNull().$type<LeaderboardFeedEvent>(),
    sequence: serial("sequence").notNull(),
  },
  (table) => [
    index("leaderboard_feed_tour_code_tournament_id_idx").on(
      table.tourCode,
      table.tournamentId,
    ),
    index("leaderboard_feed_sequence_idx").on(table.sequence),
  ],
);

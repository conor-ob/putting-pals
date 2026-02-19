import type {
  FeatureFlagKey,
  InferenceType,
  InferredSchema,
  LeaderboardFeedEvent,
  LeaderboardSnapshot,
  TourCode,
} from "@putting-pals/putting-pals-core";
import {
  boolean,
  index,
  jsonb,
  pgTable,
  primaryKey,
  serial,
  text,
  timestamp,
} from "drizzle-orm/pg-core";

const createdAtColumn = {
  createdAt: timestamp("created_at", {
    withTimezone: true,
    precision: 3,
  })
    .notNull()
    .defaultNow(),
};

const timestampColumns = {
  ...createdAtColumn,
  updatedAt: timestamp("updated_at", {
    withTimezone: true,
    precision: 3,
  })
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),
};

const tournamentIdentifierColumns = {
  tourCode: text("tour_code").notNull().$type<TourCode>(),
  tournamentId: text("tournament_id").notNull(),
};

export const activeTournamentTable = pgTable("active_tournament", {
  tourCode: text("tour_code").primaryKey().$type<TourCode>(),
  tournamentId: text("tournament_id").notNull(),
  ...timestampColumns,
});

export const featureFlagTable = pgTable("feature_flag", {
  flagKey: text("flag_key").primaryKey().$type<FeatureFlagKey>(),
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
    sequence: serial("sequence").primaryKey(),
    ...tournamentIdentifierColumns,
    type: text("type").notNull().$type<LeaderboardFeedEvent["__typename"]>(),
    payload: jsonb("payload").notNull().$type<LeaderboardFeedEvent>(),
    ...createdAtColumn,
  },
  (table) => [
    index("leaderboard_feed_tour_code_tournament_id_sequence_idx").on(
      table.tourCode,
      table.tournamentId,
      table.sequence,
    ),
  ],
);

export const inferredSchemaTable = pgTable("inferred_schema", {
  type: text("type").primaryKey().$type<InferenceType>(),
  payload: jsonb("payload").notNull().$type<InferredSchema>(),
  ...timestampColumns,
});

// export const inferredSchemaChangeTable = pgTable("inferred_schema_change", {
//   sequence: serial("sequence").primaryKey(),
//   payload: jsonb("payload").notNull().$type<InferredSchemaChange>(),
//   ...timestampColumns,
// });

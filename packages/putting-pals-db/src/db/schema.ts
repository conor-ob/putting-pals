import {
  type LeaderboardEvent,
  type LeaderboardSnapshot,
  type TourCode,
  TourCodeSchema,
  type TournamentSnapshot,
} from "@putting-pals/putting-pals-api";
import {
  index,
  integer,
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

export const tournamentSnapshotTable = pgTable(
  "tournament_snapshot",
  {
    ...identifierColumns,
    ...timestampColumns,
    ...tournamentIdentifierColumns,
    version: integer("version").notNull(),
    snapshot: jsonb("snapshot").notNull().$type<TournamentSnapshot>(),
  },
  (table) => [
    uniqueIndex("tournament_snapshot_tournament_idx").on(
      table.tourCode,
      table.tournamentId,
    ),
  ],
);

export const leaderboardSnapshotTable = pgTable(
  "leaderboard_snapshot",
  {
    ...identifierColumns,
    ...timestampColumns,
    ...tournamentIdentifierColumns,
    version: integer("version").notNull(),
    snapshot: jsonb("snapshot").notNull().$type<LeaderboardSnapshot>(),
  },
  (table) => [
    uniqueIndex("leaderboard_snapshot_tournament_idx").on(
      table.tourCode,
      table.tournamentId,
    ),
  ],
);

export const leaderboardFeedTable = pgTable(
  "leaderboard_feed",
  {
    ...identifierColumns,
    ...timestampColumns,
    ...tournamentIdentifierColumns,
    seq: serial("seq").notNull(),
    type: text("type").notNull(),
    feedItem: jsonb("feed_item").notNull().$type<LeaderboardEvent>(),
  },
  (table) => [
    index("leaderboard_feed_tournament_idx").on(
      table.tourCode,
      table.tournamentId,
    ),
    index("leaderboard_feed_seq_idx").on(table.seq),
  ],
);

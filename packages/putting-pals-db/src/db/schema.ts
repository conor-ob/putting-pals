import type {
  LeaderboardEvent,
  LeaderboardSnapshot,
} from "@putting-pals/putting-pals-schema/types";
import {
  index,
  jsonb,
  pgTable,
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
  tourCode: text("tour_code", { enum: ["P", "R"] }).notNull(),
  tournamentId: text("tournament_id").notNull(),
};

export const leaderboardSnapshotTable = pgTable(
  "leaderboard_snapshot",
  {
    ...identifierColumns,
    ...timestampColumns,
    ...tournamentIdentifierColumns,
    type: text("type").notNull(),
    snapshot: jsonb("snapshot").notNull().$type<LeaderboardSnapshot>(),
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

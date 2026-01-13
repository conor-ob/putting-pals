import {
  type AggregateType,
  type LeaderboardEvent,
  type LeaderboardEventType,
  type TourCode,
  TourCodeSchema,
} from "@putting-pals/putting-pals-api";
import {
  index,
  integer,
  jsonb,
  pgTable,
  serial,
  text,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";
import type { Operation } from "fast-json-patch";

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

export const aggregateSnapshotTable = pgTable(
  "aggregate_snapshot",
  {
    ...identifierColumns,
    ...timestampColumns,
    ...tournamentIdentifierColumns,
    type: text("type").notNull().$type<AggregateType>(),
    patchSeq: integer("patch_seq").notNull().default(0),
    aggregate: jsonb("aggregate").notNull().$type<object>(),
  },
  (table) => [
    index("aggregate_snapshot_tournament_type_idx").on(
      table.tourCode,
      table.tournamentId,
      table.type,
    ),
  ],
);

export const aggregatePatchTable = pgTable(
  "aggregate_patch",
  {
    ...identifierColumns,
    ...timestampColumns,
    ...tournamentIdentifierColumns,
    type: text("type").notNull().$type<AggregateType>(),
    seq: serial("seq").notNull(),
    patch: jsonb("patch").notNull().$type<Operation[]>(),
  },
  (table) => [
    index("aggregate_patch_tournament_type_seq_idx").on(
      table.tourCode,
      table.tournamentId,
      table.type,
      table.seq,
    ),
  ],
);

export const leaderboardFeedTable = pgTable(
  "leaderboard_feed",
  {
    ...identifierColumns,
    ...timestampColumns,
    ...tournamentIdentifierColumns,
    type: text("type").notNull().$type<LeaderboardEventType>(),
    seq: serial("seq").notNull(),
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

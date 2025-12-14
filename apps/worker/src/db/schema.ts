import { sqliteTable, text } from "drizzle-orm/sqlite-core";

export const leaderboardFeedTable = sqliteTable("leaderboard_feed", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  tournamentId: text("tournament_id").notNull(),
  tourCode: text("tour_code", { enum: ["P", "R"] }).notNull(),
  createdAt: text("created_at")
    .notNull()
    .$defaultFn(() => new Date().toISOString()),
});

export const leaderboardSnapshotTable = sqliteTable("leaderboard_snapshot", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  tournamentId: text("tournament_id").notNull(),
  tourCode: text("tour_code", { enum: ["P", "R"] }).notNull(),
  snapshot: text("snapshot", { mode: "json" }).notNull(),
  createdAt: text("created_at")
    .notNull()
    .$defaultFn(() => new Date().toISOString()),
});

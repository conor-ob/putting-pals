CREATE TABLE "leaderboard_feed" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"tour_code" varchar NOT NULL,
	"tournament_id" varchar NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp,
	"feed_item" json NOT NULL
);
--> statement-breakpoint
CREATE TABLE "leaderboard_snapshot" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"tour_code" varchar NOT NULL,
	"tournament_id" varchar NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp,
	"snapshot" json NOT NULL
);
--> statement-breakpoint
CREATE INDEX "leaderboard_feed_tournament_idx" ON "leaderboard_feed" USING btree ("tour_code","tournament_id");--> statement-breakpoint
CREATE INDEX "leaderboard_feed_created_at_idx" ON "leaderboard_feed" USING btree ("created_at");--> statement-breakpoint
CREATE INDEX "leaderboard_snapshot_tournament_idx" ON "leaderboard_snapshot" USING btree ("tour_code","tournament_id");
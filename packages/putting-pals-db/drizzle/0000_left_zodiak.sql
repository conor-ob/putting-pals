CREATE TABLE "leaderboard_feed" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"tour_code" varchar NOT NULL,
	"tournament_id" varchar NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp,
	"seq" serial NOT NULL,
	"type" varchar NOT NULL,
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
	"type" varchar NOT NULL,
	"snapshot" json NOT NULL
);
--> statement-breakpoint
CREATE INDEX "leaderboard_feed_tournament_idx" ON "leaderboard_feed" USING btree ("tour_code","tournament_id");--> statement-breakpoint
CREATE INDEX "leaderboard_feed_seq_idx" ON "leaderboard_feed" USING btree ("seq");--> statement-breakpoint
CREATE INDEX "leaderboard_snapshot_tournament_idx" ON "leaderboard_snapshot" USING btree ("tour_code","tournament_id");
CREATE TABLE "leaderboard_feed" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"tour_code" text NOT NULL,
	"tournament_id" text NOT NULL,
	"created_at" timestamp (3) with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp (3) with time zone DEFAULT now() NOT NULL,
	"deleted_at" timestamp (3) with time zone,
	"seq" serial NOT NULL,
	"type" text NOT NULL,
	"feed_item" jsonb NOT NULL
);
--> statement-breakpoint
CREATE TABLE "leaderboard_snapshot" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"tour_code" text NOT NULL,
	"tournament_id" text NOT NULL,
	"created_at" timestamp (3) with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp (3) with time zone DEFAULT now() NOT NULL,
	"deleted_at" timestamp (3) with time zone,
	"type" text NOT NULL,
	"snapshot" jsonb NOT NULL
);
--> statement-breakpoint
CREATE INDEX "leaderboard_feed_tournament_idx" ON "leaderboard_feed" USING btree ("tour_code","tournament_id");--> statement-breakpoint
CREATE INDEX "leaderboard_feed_seq_idx" ON "leaderboard_feed" USING btree ("seq");--> statement-breakpoint
CREATE INDEX "leaderboard_snapshot_tournament_idx" ON "leaderboard_snapshot" USING btree ("tour_code","tournament_id");
CREATE TABLE "active_tournament" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp (3) with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp (3) with time zone DEFAULT now() NOT NULL,
	"deleted_at" timestamp (3) with time zone,
	"tour_code" text NOT NULL,
	"tournament_id" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "feature_flag" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp (3) with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp (3) with time zone DEFAULT now() NOT NULL,
	"deleted_at" timestamp (3) with time zone,
	"flag_key" text NOT NULL,
	"enabled" boolean DEFAULT false NOT NULL
);
--> statement-breakpoint
CREATE TABLE "leaderboard_feed" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp (3) with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp (3) with time zone DEFAULT now() NOT NULL,
	"deleted_at" timestamp (3) with time zone,
	"tour_code" text NOT NULL,
	"tournament_id" text NOT NULL,
	"type" text NOT NULL,
	"payload" jsonb NOT NULL,
	"sequence" serial NOT NULL
);
--> statement-breakpoint
CREATE TABLE "leaderboard_snapshot" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp (3) with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp (3) with time zone DEFAULT now() NOT NULL,
	"deleted_at" timestamp (3) with time zone,
	"tour_code" text NOT NULL,
	"tournament_id" text NOT NULL,
	"type" text NOT NULL,
	"payload" jsonb NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX "active_tournament_tour_code_uniq" ON "active_tournament" USING btree ("tour_code");--> statement-breakpoint
CREATE UNIQUE INDEX "feature_flag_flag_key_uniq" ON "feature_flag" USING btree ("flag_key");--> statement-breakpoint
CREATE INDEX "leaderboard_feed_tour_code_tournament_id_idx" ON "leaderboard_feed" USING btree ("tour_code","tournament_id");--> statement-breakpoint
CREATE INDEX "leaderboard_feed_sequence_idx" ON "leaderboard_feed" USING btree ("sequence");--> statement-breakpoint
CREATE UNIQUE INDEX "leaderboard_snapshot_tour_code_tournament_id_type_uniq" ON "leaderboard_snapshot" USING btree ("tour_code","tournament_id","type");
CREATE TABLE "aggregate_patch" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp (3) with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp (3) with time zone DEFAULT now() NOT NULL,
	"deleted_at" timestamp (3) with time zone,
	"tour_code" text NOT NULL,
	"tournament_id" text NOT NULL,
	"type" text NOT NULL,
	"seq" serial NOT NULL,
	"patch" jsonb NOT NULL
);
--> statement-breakpoint
CREATE TABLE "aggregate_snapshot" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp (3) with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp (3) with time zone DEFAULT now() NOT NULL,
	"deleted_at" timestamp (3) with time zone,
	"tour_code" text NOT NULL,
	"tournament_id" text NOT NULL,
	"type" text NOT NULL,
	"aggregate" jsonb NOT NULL
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
	"event" text NOT NULL,
	"seq" serial NOT NULL,
	"prev_seq" integer NOT NULL,
	"next_seq" integer NOT NULL
);
--> statement-breakpoint
CREATE INDEX "aggregate_patch_tournament_type_seq_idx" ON "aggregate_patch" USING btree ("tour_code","tournament_id","type","seq");--> statement-breakpoint
CREATE INDEX "aggregate_snapshot_tournament_type_idx" ON "aggregate_snapshot" USING btree ("tour_code","tournament_id","type");--> statement-breakpoint
CREATE INDEX "leaderboard_feed_tournament_idx" ON "leaderboard_feed" USING btree ("tour_code","tournament_id");--> statement-breakpoint
CREATE INDEX "leaderboard_feed_seq_idx" ON "leaderboard_feed" USING btree ("seq");
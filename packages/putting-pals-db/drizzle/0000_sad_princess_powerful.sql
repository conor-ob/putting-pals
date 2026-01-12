CREATE TABLE "leaderboard_aggregate_patch" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp (3) with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp (3) with time zone DEFAULT now() NOT NULL,
	"deleted_at" timestamp (3) with time zone,
	"tour_code" text NOT NULL,
	"tournament_id" text NOT NULL,
	"seq" serial NOT NULL,
	"patch" jsonb NOT NULL
);
--> statement-breakpoint
CREATE TABLE "leaderboard_aggregate" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp (3) with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp (3) with time zone DEFAULT now() NOT NULL,
	"deleted_at" timestamp (3) with time zone,
	"tour_code" text NOT NULL,
	"tournament_id" text NOT NULL,
	"patch_seq" integer DEFAULT 0 NOT NULL,
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
	"seq" serial NOT NULL,
	"type" text NOT NULL,
	"feed_item" jsonb NOT NULL
);
--> statement-breakpoint
CREATE TABLE "leaderboard_snapshot" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp (3) with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp (3) with time zone DEFAULT now() NOT NULL,
	"deleted_at" timestamp (3) with time zone,
	"tour_code" text NOT NULL,
	"tournament_id" text NOT NULL,
	"version" integer NOT NULL,
	"snapshot" jsonb NOT NULL
);
--> statement-breakpoint
CREATE TABLE "tournament_aggregate_patch" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp (3) with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp (3) with time zone DEFAULT now() NOT NULL,
	"deleted_at" timestamp (3) with time zone,
	"tour_code" text NOT NULL,
	"tournament_id" text NOT NULL,
	"seq" serial NOT NULL,
	"patch" jsonb NOT NULL
);
--> statement-breakpoint
CREATE TABLE "tournament_aggregate" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp (3) with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp (3) with time zone DEFAULT now() NOT NULL,
	"deleted_at" timestamp (3) with time zone,
	"tour_code" text NOT NULL,
	"tournament_id" text NOT NULL,
	"patch_seq" integer DEFAULT 0 NOT NULL,
	"aggregate" jsonb NOT NULL
);
--> statement-breakpoint
CREATE TABLE "tournament_snapshot" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp (3) with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp (3) with time zone DEFAULT now() NOT NULL,
	"deleted_at" timestamp (3) with time zone,
	"tour_code" text NOT NULL,
	"tournament_id" text NOT NULL,
	"version" integer NOT NULL,
	"snapshot" jsonb NOT NULL
);
--> statement-breakpoint
CREATE INDEX "leaderboard_aggregate_tournament_idx" ON "leaderboard_aggregate" USING btree ("tour_code","tournament_id");--> statement-breakpoint
CREATE INDEX "leaderboard_aggregate_patch_seq_idx" ON "leaderboard_aggregate" USING btree ("patch_seq");--> statement-breakpoint
CREATE INDEX "leaderboard_feed_tournament_idx" ON "leaderboard_feed" USING btree ("tour_code","tournament_id");--> statement-breakpoint
CREATE INDEX "leaderboard_feed_seq_idx" ON "leaderboard_feed" USING btree ("seq");--> statement-breakpoint
CREATE UNIQUE INDEX "leaderboard_snapshot_tournament_idx" ON "leaderboard_snapshot" USING btree ("tour_code","tournament_id");--> statement-breakpoint
CREATE INDEX "tournament_aggregate_tournament_idx" ON "tournament_aggregate" USING btree ("tour_code","tournament_id");--> statement-breakpoint
CREATE INDEX "tournament_aggregate_patch_seq_idx" ON "tournament_aggregate" USING btree ("patch_seq");--> statement-breakpoint
CREATE UNIQUE INDEX "tournament_snapshot_tournament_idx" ON "tournament_snapshot" USING btree ("tour_code","tournament_id");
CREATE TABLE "active_tournament" (
	"tour_code" text PRIMARY KEY NOT NULL,
	"tournament_id" text NOT NULL,
	"created_at" timestamp (3) with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp (3) with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "feature_flag" (
	"flag_key" text PRIMARY KEY NOT NULL,
	"enabled" boolean DEFAULT false NOT NULL,
	"created_at" timestamp (3) with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp (3) with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "leaderboard_feed" (
	"sequence" serial PRIMARY KEY NOT NULL,
	"tour_code" text NOT NULL,
	"tournament_id" text NOT NULL,
	"type" text NOT NULL,
	"payload" jsonb NOT NULL,
	"created_at" timestamp (3) with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "leaderboard_snapshot" (
	"tour_code" text NOT NULL,
	"tournament_id" text NOT NULL,
	"type" text NOT NULL,
	"payload" jsonb NOT NULL,
	"created_at" timestamp (3) with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp (3) with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "leaderboard_snapshot_tour_code_tournament_id_type_pk" PRIMARY KEY("tour_code","tournament_id","type")
);
--> statement-breakpoint
CREATE INDEX "leaderboard_feed_tour_code_tournament_id_sequence_idx" ON "leaderboard_feed" USING btree ("tour_code","tournament_id","sequence");
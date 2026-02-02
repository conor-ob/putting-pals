CREATE TABLE "active_tournament" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp (3) with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp (3) with time zone DEFAULT now() NOT NULL,
	"deleted_at" timestamp (3) with time zone,
	"tour_code" text NOT NULL,
	"tournament_id" text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX "active_tournament_tour_code_idx" ON "active_tournament" USING btree ("tour_code");
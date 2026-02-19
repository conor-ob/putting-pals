CREATE TABLE "inferred_schema_change" (
	"sequence" serial PRIMARY KEY NOT NULL,
	"payload" jsonb NOT NULL,
	"created_at" timestamp (3) with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp (3) with time zone DEFAULT now() NOT NULL
);

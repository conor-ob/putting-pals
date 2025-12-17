CREATE TABLE `leaderboard_snapshot_base` (
	`id` text PRIMARY KEY NOT NULL,
	`tournament_id` text NOT NULL,
	`tour_code` text NOT NULL,
	`snapshot` text NOT NULL,
	`created_at` integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE `leaderboard_snapshot_materialized` (
	`id` text PRIMARY KEY NOT NULL,
	`tournament_id` text NOT NULL,
	`tour_code` text NOT NULL,
	`snapshot` text NOT NULL,
	`patch_stream_version` integer NOT NULL,
	`created_at` integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE `leaderboard_snapshot_patch` (
	`id` text PRIMARY KEY NOT NULL,
	`tournament_id` text NOT NULL,
	`tour_code` text NOT NULL,
	`patch` text NOT NULL,
	`stream_version` integer NOT NULL,
	`created_at` integer NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `unique_tournament_stream_version` ON `leaderboard_snapshot_patch` (`tournament_id`,`stream_version`);
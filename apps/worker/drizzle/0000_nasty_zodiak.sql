CREATE TABLE `leaderboard_feed` (
	`id` text PRIMARY KEY NOT NULL,
	`tournament_id` text NOT NULL,
	`tour_code` text NOT NULL,
	`created_at` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `leaderboard_snapshot` (
	`id` text PRIMARY KEY NOT NULL,
	`tournament_id` text NOT NULL,
	`tour_code` text NOT NULL,
	`snapshot` text NOT NULL,
	`created_at` text NOT NULL
);

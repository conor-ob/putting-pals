CREATE TABLE IF NOT EXISTS leaderboard_v3 (
    id TEXT PRIMARY KEY NOT NULL,
    leaderboard_v3 TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS leaderboard_feed (
    id INTEGER PRIMARY KEY NOT NULL AUTOINCREMENT,
    leaderboard_v3_id TEXT NOT NULL REFERENCES leaderboard_v3(id),
    timestamp TEXT NOT NULL,
    text TEXT NOT NULL
);

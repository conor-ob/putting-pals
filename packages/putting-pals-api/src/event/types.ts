export type LeaderboardEventType =
  | "LeaderChanged"
  | "HotStreak"
  | "PlayerDisqualified"
  | "PlayerMissedCut"
  | "PlayerWithdrawn"
  | "PlayerPositionChanged"
  | "RoundStatusChanged"
  | "TournamentStatusChanged"
  | "TournamentWinner";

export interface EventEmitter {
  emit(): LeaderboardEventType[];
  getPriority(): number;
}

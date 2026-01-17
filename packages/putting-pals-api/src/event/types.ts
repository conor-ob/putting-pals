export type LeaderboardEventType =
  | "CutLineChanged"
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
  getPrevPatchSeq(): number;
  getNextPatchSeq(): number;
}

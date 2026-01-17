import type { AggregateType } from "../repository/aggregate-repository";

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
  getAggregateType(): AggregateType;
  getPrevPatchSeq(): number;
  getNextPatchSeq(): number;
}

import type {
  NewLeaderV1,
  RoundStatusChangedV1,
  TournamentStatusChangedV1,
} from "../db/types";

export type LeaderboardEvent =
  | RoundStatusChangedV1
  | TournamentStatusChangedV1
  | NewLeaderV1;

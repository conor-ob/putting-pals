import type {
  NewLeaderV1,
  PlayerDisqualifiedV1,
  PlayerMissedCutV1,
  PlayerWithdrawnV1,
  RoundStatusChangedV1,
  TournamentStatusChangedV1,
} from "../db/types";

export type LeaderboardEvent =
  | NewLeaderV1
  | PlayerDisqualifiedV1
  | PlayerMissedCutV1
  | PlayerWithdrawnV1
  | RoundStatusChangedV1
  | TournamentStatusChangedV1;

import type {
  LeaderChangedV1,
  PlayerDisqualifiedV1,
  PlayerMissedCutV1,
  PlayerWithdrawnV1,
  RoundStatusChangedV1,
  TournamentStatusChangedV1,
} from "../db/types";

export type LeaderboardEvent =
  | LeaderChangedV1
  | PlayerDisqualifiedV1
  | PlayerMissedCutV1
  | PlayerWithdrawnV1
  | RoundStatusChangedV1
  | TournamentStatusChangedV1;

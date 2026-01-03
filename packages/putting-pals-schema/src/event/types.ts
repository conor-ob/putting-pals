import type {
  RoundStatusChangedV1,
  TournamentStatusChangedV1,
} from "../db/types";

export type LeaderboardEventTypes =
  | RoundStatusChangedV1
  | TournamentStatusChangedV1;

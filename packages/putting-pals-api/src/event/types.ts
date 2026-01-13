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

export type LeaderboardEventType = LeaderboardEvent["__typename"];

export interface EventEmitter {
  emit(): LeaderboardEvent[];

  getPriority(): number;
}

import type {
  LeaderChangedV1,
  PlayerDisqualifiedV1,
  PlayerMissedCutV1,
  PlayerWithdrawnV1,
  RoundStatusChangedV1,
  TournamentStatusChangedV1,
} from "../db/types";

export type LeaderboardFeed =
  | LeaderChangedV1
  | PlayerDisqualifiedV1
  | PlayerMissedCutV1
  | PlayerWithdrawnV1
  | RoundStatusChangedV1
  | TournamentStatusChangedV1;

export type LeaderboardFeedType = LeaderboardFeed["__typename"];

export interface EventEmitter {
  emit(): LeaderboardFeed[];

  getPriority(): number;
}

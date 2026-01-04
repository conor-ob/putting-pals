import type {
  LeaderboardEvent,
  LeaderboardSnapshotV1,
  TourCode,
} from "@putting-pals/putting-pals-schema/types";

export interface EventEmitter {
  filter(): boolean;

  emit(): LeaderboardEvent[];

  getPriority(): number;
}

export abstract class AbstractEventEmitter implements EventEmitter {
  constructor(
    protected readonly tourCode: TourCode,
    protected readonly before: LeaderboardSnapshotV1,
    protected readonly after: LeaderboardSnapshotV1,
  ) {
    this.tourCode = tourCode;
    this.before = before;
    this.after = after;
  }

  filter(): boolean {
    return true;
  }

  abstract emit(): LeaderboardEvent[];

  abstract getPriority(): number;
}

export const EventPriority = {
  TOURNAMENT_STARTING_EVENT: 0,
  ROUND_STARTING_EVENT: 1,
  PLAYER_WITHDRAWN_EVENT: 2,
  PLAYER_DISQUALIFIED_EVENT: 3,
  PLAYER_POSITION_DECREASED_EVENT: 4,
  PLAYER_POSITION_INCREASED_EVENT: 5,
  BIRDIE_STREAK_EVENT: 6,
  NEW_LEADER_EVENT: 7,
  TOURNAMENT_WINNER_EVENT: 8,
  ROUND_STOPPING_EVENT: 9,
  TOURNAMENT_STOPPING_EVENT: 10,
} as const;

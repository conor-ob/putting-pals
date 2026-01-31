import type {
  EventEmitter,
  LeaderboardFeed,
  TourCode,
} from "@putting-pals/putting-pals-api";

export abstract class AbstractEventEmitter<T> implements EventEmitter {
  constructor(
    protected readonly tourCode: TourCode,
    protected readonly before: T,
    protected readonly after: T,
  ) {
    this.tourCode = tourCode;
    this.before = before;
    this.after = after;
  }

  abstract emit(): LeaderboardFeed[];

  abstract getPriority(): number;
}

export const EventPriority = {
  TOURNAMENT_STARTING_EVENT: 0,
  ROUND_STARTING_EVENT: 1,
  PLAYER_WITHDRAWN_EVENT: 2,
  PLAYER_DISQUALIFIED_EVENT: 3,
  PLAYER_POSITION_DECREASED_EVENT: 4,
  PLAYER_POSITION_INCREASED_EVENT: 5,
  PLAYER_MISSED_CUT_EVENT: 6,
  BIRDIE_STREAK_EVENT: 7,
  LEADER_CHANGED_EVENT: 8,
  ROUND_STOPPING_EVENT: 9,
  TOURNAMENT_STOPPING_EVENT: 10,
  TOURNAMENT_WINNER_EVENT: 11,
} as const;

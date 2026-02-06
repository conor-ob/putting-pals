import type { TourCode } from "../tour/domain/types";
import type { EventEmitter, LeaderboardFeedEvent } from "./domain/types";

export abstract class AbstractEventEmitter<T> implements EventEmitter {
  constructor(
    protected readonly tourCode: TourCode,
    protected readonly prev: T,
    protected readonly next: T,
  ) {
    this.tourCode = tourCode;
    this.prev = prev;
    this.next = next;
  }

  abstract emit(): LeaderboardFeedEvent[];

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
  HOT_STREAK_EVENT: 7,
  LEADER_CHANGED_EVENT: 8,
  ROUND_STOPPING_EVENT: 9,
  TOURNAMENT_STOPPING_EVENT: 10,
  TOURNAMENT_WINNER_EVENT: 11,
} as const;

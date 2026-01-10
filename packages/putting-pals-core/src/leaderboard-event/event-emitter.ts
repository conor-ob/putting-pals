import type {
  DomainTourCode,
  LeaderboardEvent,
  LeaderboardSnapshot,
} from "@putting-pals/putting-pals-schema";

export interface EventEmitter {
  emit(): LeaderboardEvent[];

  getPriority(): number;
}

export abstract class AbstractEventEmitter implements EventEmitter {
  constructor(
    protected readonly tourCode: DomainTourCode,
    protected readonly before: LeaderboardSnapshot,
    protected readonly after: LeaderboardSnapshot,
  ) {
    this.tourCode = tourCode;
    this.before = before;
    this.after = after;
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
  PLAYER_MISSED_CUT_EVENT: 6,
  BIRDIE_STREAK_EVENT: 7,
  LEADER_CHANGED_EVENT: 8,
  TOURNAMENT_WINNER_EVENT: 9,
  ROUND_STOPPING_EVENT: 10,
  TOURNAMENT_STOPPING_EVENT: 11,
} as const;

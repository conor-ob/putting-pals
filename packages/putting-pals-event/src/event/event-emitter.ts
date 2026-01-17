import type {
  EventEmitter,
  LeaderboardEventType,
  TourCode,
} from "@putting-pals/putting-pals-api";
import type { Operation } from "fast-json-patch";

export abstract class AbstractEventEmitter implements EventEmitter {
  constructor(
    protected readonly tourCode: TourCode,
    protected readonly operations: Operation[],
  ) {
    this.tourCode = tourCode;
    this.operations = operations;
  }

  abstract emit(): LeaderboardEventType[];

  abstract getPriority(): number;
}

export const EventPriority = {
  TOURNAMENT_STARTING_EVENT: 0,
  ROUND_STARTING_EVENT: 1,
  PLAYER_WITHDRAWN_EVENT: 2,
  PLAYER_DISQUALIFIED_EVENT: 3,
  PLAYER_POSITION_CHANGED_EVENT: 4,
  PLAYER_MISSED_CUT_EVENT: 5,
  HOT_STREAK_EVENT: 6,
  LEADER_CHANGED_EVENT: 7,
  ROUND_STOPPING_EVENT: 8,
  TOURNAMENT_STOPPING_EVENT: 9,
  TOURNAMENT_WINNER_EVENT: 10,
} as const;

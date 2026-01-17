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
    protected readonly prevPatchSeq: number,
    protected readonly nextPatchSeq: number,
  ) {
    this.tourCode = tourCode;
    this.operations = operations;
    this.prevPatchSeq = prevPatchSeq;
    this.nextPatchSeq = nextPatchSeq;
  }

  abstract emit(): LeaderboardEventType[];

  abstract getPriority(): number;

  getPrevPatchSeq(): number {
    return this.prevPatchSeq;
  }

  getNextPatchSeq(): number {
    return this.nextPatchSeq;
  }
}

export const EventPriority = {
  TOURNAMENT_STARTING_EVENT: 0,
  ROUND_STARTING_EVENT: 1,
  PLAYER_WITHDRAWN_EVENT: 2,
  PLAYER_DISQUALIFIED_EVENT: 3,
  PLAYER_POSITION_CHANGED_EVENT: 4,
  PLAYER_MISSED_CUT_EVENT: 5,
  CUT_LINE_CHANGED_EVENT: 6,
  HOT_STREAK_EVENT: 7,
  LEADER_CHANGED_EVENT: 8,
  ROUND_STOPPING_EVENT: 9,
  TOURNAMENT_STOPPING_EVENT: 10,
  TOURNAMENT_WINNER_EVENT: 11,
} as const;

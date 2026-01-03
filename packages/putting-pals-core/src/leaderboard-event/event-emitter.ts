import type {
  LeaderboardEventTypes,
  LeaderboardSnapshotV1,
  TourCode,
} from "@putting-pals/putting-pals-schema/types";

export type LeaderboardEvent = {
  event: LeaderboardEventTypes;
  order: number;
};

export interface EventEmitter {
  filter(): boolean;
  emit(): LeaderboardEvent[];
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
}

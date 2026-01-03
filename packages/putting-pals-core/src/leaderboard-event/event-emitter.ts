import type {
  LeaderboardSnapshotV1,
  RoundStatusChangedV1,
  TournamentStatusChangedV1,
} from "@putting-pals/putting-pals-db/schema";
import type { TourCode } from "@putting-pals/putting-pals-schema/types";

export type Event = RoundStatusChangedV1 | TournamentStatusChangedV1;

export type LeaderboardEvent = {
  event: Event;
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

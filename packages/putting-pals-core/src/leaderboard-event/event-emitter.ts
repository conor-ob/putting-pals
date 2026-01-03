import type {
  LeaderboardSnapshotV1,
  RoundStatusChangedV1,
  TournamentStatusChangedV1,
} from "@putting-pals/putting-pals-db/schema";
import type { TourCode } from "@putting-pals/putting-pals-schema/types";

export type Event = RoundStatusChangedV1 | TournamentStatusChangedV1;

export type EventEmitter = {
  filter(
    tourCode: TourCode,
    before: LeaderboardSnapshotV1,
    after: LeaderboardSnapshotV1,
  ): boolean;
  emit(
    tourCode: TourCode,
    before: LeaderboardSnapshotV1,
    after: LeaderboardSnapshotV1,
  ): Event[];
};

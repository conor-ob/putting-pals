import type {
  LeaderboardSnapshotV1,
  RoundStatusChangedV1,
  TournamentStatusChangedV1,
} from "@putting-pals/putting-pals-db/schema";

type Event = RoundStatusChangedV1 | TournamentStatusChangedV1;

export type EventEmitter = {
  filter(before: LeaderboardSnapshotV1, after: LeaderboardSnapshotV1): boolean;
  emit(before: LeaderboardSnapshotV1, after: LeaderboardSnapshotV1): Event[];
};

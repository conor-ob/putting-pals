import type {
  LeaderboardV3,
  TourCode,
  Tournament,
} from "../graphql/putting-pals/generated/graphql";

export type LeaderboardSnapshot = LeaderboardV3 | Tournament;

export type LeaderboardSnapshotType = LeaderboardSnapshot["__typename"];

export type LeaderboardSnapshotTypeMap = {
  [T in LeaderboardSnapshotType]: Extract<
    LeaderboardSnapshot,
    { __typename: T }
  >;
};

export interface LeaderboardSnapshotRepository {
  getSnapshot<T extends LeaderboardSnapshotType>(
    tourCode: TourCode,
    tournamentId: string,
    type: T,
  ): Promise<LeaderboardSnapshotTypeMap[T] | undefined>;

  createSnapshot(
    tourCode: TourCode,
    tournamentId: string,
    snapshot: LeaderboardSnapshot,
  ): Promise<void>;

  updateSnapshot(
    tourCode: TourCode,
    tournamentId: string,
    snapshot: LeaderboardSnapshot,
  ): Promise<void>;
}

import type { Leaderboard } from "../../../leaderboard/domain/types";
import type { TourCode } from "../../../tour/domain/types";
import type { Tournament } from "../../../tournament/domain/types";

export type LeaderboardSnapshot = Leaderboard | Tournament;

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

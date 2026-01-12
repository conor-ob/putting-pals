import type { TourCode } from "@putting-pals/putting-pals-api";
import type { LeaderboardSnapshot } from "../db/types";

export interface LeaderboardSnapshotRepository {
  getLeaderboardSnapshot(
    tourCode: TourCode,
    tournamentId: string,
  ): Promise<LeaderboardSnapshot | undefined>;

  createLeaderboardSnapshot(
    tourCode: TourCode,
    tournamentId: string,
    snapshot: LeaderboardSnapshot,
  ): Promise<void>;

  updateLeaderboardSnapshot(
    tourCode: TourCode,
    tournamentId: string,
    snapshot: LeaderboardSnapshot,
  ): Promise<void>;
}

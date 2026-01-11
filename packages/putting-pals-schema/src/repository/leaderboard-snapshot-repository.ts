import type { LeaderboardSnapshot } from "../db/types";
import type { DomainTourCode } from "../generated/graphql";

export interface LeaderboardSnapshotRepository {
  getLeaderboardSnapshot(
    tourCode: DomainTourCode,
    tournamentId: string,
  ): Promise<LeaderboardSnapshot | undefined>;

  createLeaderboardSnapshot(
    tourCode: DomainTourCode,
    tournamentId: string,
    snapshot: LeaderboardSnapshot,
  ): Promise<void>;

  updateLeaderboardSnapshot(
    tourCode: DomainTourCode,
    tournamentId: string,
    snapshot: LeaderboardSnapshot,
  ): Promise<void>;
}

import type { LeaderboardEvent } from "../event/types";
import type { DomainTourCode } from "../generated/graphql";
import type { LeaderboardSnapshot } from "./types";

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

export interface LeaderboardFeedRepository {
  getLeaderboardFeed(
    tourCode: DomainTourCode,
    tournamentId: string,
    pageSize: number,
    cursor?: number,
  ): Promise<
    {
      seq: number;
      type: string;
      feedItem: LeaderboardEvent;
      tourCode: "P" | "R" | "C" | "E" | "H" | "I" | "M" | "S" | "U" | "Y";
      tournamentId: string;
      createdAt: Date;
      updatedAt: Date;
      deletedAt: Date | null;
      id: string;
    }[]
  >;

  createLeaderboardFeedItems(
    tourCode: DomainTourCode,
    tournamentId: string,
    events: LeaderboardEvent[],
  ): Promise<void>;
}

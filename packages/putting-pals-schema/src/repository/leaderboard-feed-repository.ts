import type { LeaderboardEvent } from "../event/types";
import type { DomainTourCode } from "../generated/graphql";

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
      tourCode: DomainTourCode;
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

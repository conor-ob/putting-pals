import type { LeaderboardEvent } from "../event/types";
import type { DomainTourCode } from "../generated/graphql";

export interface FeedService {
  getFeed(
    tourCode: DomainTourCode,
    id?: string,
    cursor?: number,
  ): Promise<{
    items: {
      seq: number;
      type: string;
      feedItem: LeaderboardEvent;
      tourCode: DomainTourCode;
      tournamentId: string;
      createdAt: Date;
      updatedAt: Date;
      deletedAt: Date | null;
      id: string;
    }[];
    nextCursor?: number;
  }>;
}

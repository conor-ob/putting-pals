import type { TourCode } from "@putting-pals/putting-pals-schema";
import type { LeaderboardFeedEvent } from "../../../event/domain/types";

export interface FeedService {
  getFeed(
    tourCode: TourCode,
    id?: string,
    cursor?: number,
  ): Promise<{
    events: {
      sequence: number;
      type: string;
      payload: LeaderboardFeedEvent;
      tourCode: TourCode;
      tournamentId: string;
      createdAt: Date;
      updatedAt: Date;
      deletedAt: Date | null;
      id: string;
    }[];
    nextCursor?: number;
  }>;
}

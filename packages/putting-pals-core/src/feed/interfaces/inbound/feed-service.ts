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
      tourCode: TourCode;
      tournamentId: string;
      type: string;
      payload: LeaderboardFeedEvent;
      createdAt: Date;
      updatedAt: Date;
    }[];
    nextCursor?: number;
  }>;
}

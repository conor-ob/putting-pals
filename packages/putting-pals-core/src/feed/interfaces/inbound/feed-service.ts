import type { LeaderboardFeedEvent } from "../../../event/domain/types";
import type { TourCode } from "../../../tour/domain/types";

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
    }[];
    nextCursor?: number;
  }>;
}

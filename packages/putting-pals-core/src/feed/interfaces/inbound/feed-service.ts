import type { TourCode } from "@putting-pals/putting-pals-api";
import type { LeaderboardFeed } from "../../../event/domain/types";

export interface FeedService {
  getFeed(
    tourCode: TourCode,
    id?: string,
    cursor?: number,
  ): Promise<{
    items: {
      sequence: number;
      type: string;
      payload: LeaderboardFeed;
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

import type { AggregateType, TourCode } from "@putting-pals/putting-pals-api";
import type { LeaderboardEventType } from "../event/types";

export interface FeedService {
  getFeed(
    tourCode: TourCode,
    id?: string,
    cursor?: number,
  ): Promise<{
    items: {
      seq: number;
      event: LeaderboardEventType;
      type: AggregateType;
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

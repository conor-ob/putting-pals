import type { TourCode } from "@putting-pals/putting-pals-api";
import type { LeaderboardEvent } from "../event/types";

export interface LeaderboardFeedRepository {
  getLeaderboardFeed(
    tourCode: TourCode,
    tournamentId: string,
    pageSize: number,
    cursor?: number,
  ): Promise<
    {
      seq: number;
      type: string;
      feedItem: LeaderboardEvent;
      tourCode: TourCode;
      tournamentId: string;
      createdAt: Date;
      updatedAt: Date;
      deletedAt: Date | null;
      id: string;
    }[]
  >;

  createLeaderboardFeedItems(
    tourCode: TourCode,
    tournamentId: string,
    events: LeaderboardEvent[],
  ): Promise<void>;
}

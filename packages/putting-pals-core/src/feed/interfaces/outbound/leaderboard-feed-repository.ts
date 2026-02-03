import type { TourCode } from "@putting-pals/putting-pals-schema";
import type { LeaderboardFeedEvent } from "../../../event/domain/types";

export interface LeaderboardFeedRepository {
  getLeaderboardFeed(
    tourCode: TourCode,
    tournamentId: string,
    pageSize: number,
    cursor?: number,
  ): Promise<
    {
      sequence: number;
      type: string;
      payload: LeaderboardFeedEvent;
      tourCode: TourCode;
      tournamentId: string;
      createdAt: Date;
      updatedAt: Date;
      deletedAt: Date | null;
      id: string;
    }[]
  >;

  createLeaderboardFeedEvents(
    tourCode: TourCode,
    tournamentId: string,
    events: LeaderboardFeedEvent[],
  ): Promise<void>;
}

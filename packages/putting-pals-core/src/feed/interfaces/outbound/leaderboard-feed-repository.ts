import type { LeaderboardFeedEvent } from "../../../event/domain/types";
import type { TourCode } from "../../../tour/domain/types";

export interface LeaderboardFeedRepository {
  getLeaderboardFeed(
    tourCode: TourCode,
    tournamentId: string,
    pageSize: number,
    cursor?: number,
  ): Promise<
    {
      sequence: number;
      tourCode: TourCode;
      tournamentId: string;
      type: string;
      payload: LeaderboardFeedEvent;
      createdAt: Date;
    }[]
  >;

  createLeaderboardFeedEvents(
    tourCode: TourCode,
    tournamentId: string,
    events: LeaderboardFeedEvent[],
  ): Promise<void>;
}

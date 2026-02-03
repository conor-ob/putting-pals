import type { TourCode } from "@putting-pals/putting-pals-api";
import type { LeaderboardFeed } from "../../../event/domain/types";

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
      payload: LeaderboardFeed;
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
    payloads: LeaderboardFeed[],
  ): Promise<void>;
}

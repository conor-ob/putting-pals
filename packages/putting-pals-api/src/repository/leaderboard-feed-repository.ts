import type { AggregateType, TourCode } from "@putting-pals/putting-pals-api";
import type { LeaderboardEventType } from "../event/types";

export interface LeaderboardFeedRepository {
  getLeaderboardFeed(
    tourCode: TourCode,
    tournamentId: string,
    pageSize: number,
    cursor?: number,
  ): Promise<
    {
      seq: number;
      event: LeaderboardEventType;
      type: AggregateType;
      patchSeq: number;
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
    events: {
      type: LeaderboardEventType[];
      patchSeq: number;
      aggregateType: AggregateType;
    }[],
  ): Promise<void>;
}

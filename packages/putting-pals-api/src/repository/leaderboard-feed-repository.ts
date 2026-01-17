import type { TourCode } from "@putting-pals/putting-pals-api";
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
      type: LeaderboardEventType;
      patchSeq: number;
      prevPatchSeq: number;
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
      prevPatchSeq: number;
      nextPatchSeq: number;
    }[],
  ): Promise<void>;
}

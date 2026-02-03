import type {
  LeaderboardFeed,
  LeaderboardFeedRepository,
} from "@putting-pals/putting-pals-core";
import type { TourCode } from "@putting-pals/putting-pals-schema";
import { and, desc, eq, isNull, lt } from "drizzle-orm";
import { leaderboardFeedTable } from "../db/schema";
import type { Database } from "../db/types";

export class LeaderboardFeedPostgresRepository
  implements LeaderboardFeedRepository
{
  constructor(private readonly db: Database) {
    this.db = db;
  }

  async getLeaderboardFeed(
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
  > {
    return this.db
      .select()
      .from(leaderboardFeedTable)
      .where(
        and(
          eq(leaderboardFeedTable.tourCode, tourCode),
          eq(leaderboardFeedTable.tournamentId, tournamentId),
          isNull(leaderboardFeedTable.deletedAt),
          cursor ? lt(leaderboardFeedTable.sequence, cursor) : undefined,
        ),
      )
      .orderBy(desc(leaderboardFeedTable.sequence))
      .limit(pageSize + 1);
  }

  async createLeaderboardFeedItems(
    tourCode: TourCode,
    tournamentId: string,
    payloads: LeaderboardFeed[],
  ): Promise<void> {
    await this.db.insert(leaderboardFeedTable).values(
      payloads.map((payload) => ({
        tourCode,
        tournamentId,
        type: payload.__typename,
        payload,
      })),
    );
  }
}

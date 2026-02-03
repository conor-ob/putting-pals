import type {
  LeaderboardFeedEvent,
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
      payload: LeaderboardFeedEvent;
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

  async createLeaderboardFeedEvents(
    tourCode: TourCode,
    tournamentId: string,
    events: LeaderboardFeedEvent[],
  ): Promise<void> {
    await this.db.insert(leaderboardFeedTable).values(
      events.map((event) => ({
        tourCode,
        tournamentId,
        type: event.__typename,
        payload: event,
      })),
    );
  }
}

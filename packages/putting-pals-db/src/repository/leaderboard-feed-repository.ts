import type {
  LeaderboardFeedEvent,
  LeaderboardFeedRepository,
} from "@putting-pals/putting-pals-core";
import type { TourCode } from "@putting-pals/putting-pals-schema";
import { and, desc, eq, lt } from "drizzle-orm";
import type { leaderboardFeedTable } from "../db/schema";
import type { Database } from "../db/types";

export class LeaderboardFeedPostgresRepository
  implements LeaderboardFeedRepository
{
  constructor(
    private readonly db: Database,
    private readonly table: typeof leaderboardFeedTable,
  ) {
    this.db = db;
    this.table = table;
  }

  async getLeaderboardFeed(
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
  > {
    return this.db
      .select()
      .from(this.table)
      .where(
        and(
          eq(this.table.tourCode, tourCode),
          eq(this.table.tournamentId, tournamentId),
          cursor ? lt(this.table.sequence, cursor) : undefined,
        ),
      )
      .orderBy(desc(this.table.sequence))
      .limit(pageSize + 1);
  }

  async createLeaderboardFeedEvents(
    tourCode: TourCode,
    tournamentId: string,
    events: LeaderboardFeedEvent[],
  ): Promise<void> {
    await this.db.insert(this.table).values(
      events.map((event) => ({
        tourCode,
        tournamentId,
        type: event.__typename,
        payload: event,
      })),
    );
  }
}

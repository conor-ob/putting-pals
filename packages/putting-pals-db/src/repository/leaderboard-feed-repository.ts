import type {
  AggregateType,
  LeaderboardEventType,
  LeaderboardFeedRepository,
  TourCode,
} from "@putting-pals/putting-pals-api";
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
  > {
    return this.db
      .select()
      .from(leaderboardFeedTable)
      .where(
        and(
          eq(leaderboardFeedTable.tourCode, tourCode),
          eq(leaderboardFeedTable.tournamentId, tournamentId),
          isNull(leaderboardFeedTable.deletedAt),
          cursor ? lt(leaderboardFeedTable.seq, cursor) : undefined,
        ),
      )
      .orderBy(desc(leaderboardFeedTable.seq))
      .limit(pageSize + 1);
  }

  async createLeaderboardFeedItems(
    tourCode: TourCode,
    tournamentId: string,
    events: {
      type: LeaderboardEventType[];
      aggregateType: AggregateType;
      patchSeq: number;
    }[],
  ): Promise<void> {
    const values = events.map((event) => ({
      tourCode,
      tournamentId,
      // biome-ignore lint/style/noNonNullAssertion: todo
      event: event.type[0]!,
      aggregateType: event.aggregateType,
      patchSeq: event.patchSeq,
    }));
    await this.db
      .insert(leaderboardFeedTable)
      .values(
        values.map((value) => ({
          tourCode,
          tournamentId,
          type: value.aggregateType,
          event: value.event,
          patchSeq: value.patchSeq,
        })),
      )
      .onConflictDoNothing();
  }
}

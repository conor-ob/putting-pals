import type {
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
      .limit(pageSize + 1)
      .then();
  }

  async createLeaderboardFeedItems(
    tourCode: TourCode,
    tournamentId: string,
    events: {
      type: LeaderboardEventType[];
      prevPatchSeq: number;
      nextPatchSeq: number;
    }[],
  ): Promise<void> {
    const values = events.map((event) => ({
      tourCode,
      tournamentId,
      // biome-ignore lint/style/noNonNullAssertion: todo
      type: event.type[0]!,
      prevSeq: event.prevPatchSeq,
      nextSeq: event.nextPatchSeq,
    }));
    await this.db
      .insert(leaderboardFeedTable)
      .values(
        values.map((value) => ({
          tourCode,
          tournamentId,
          type: value.type,
          prevSeq: value.prevSeq,
          nextSeq: value.nextSeq,
        })),
      )
      .onConflictDoNothing();
  }
}

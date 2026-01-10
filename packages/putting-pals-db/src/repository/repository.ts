import {
  type DomainTourCode,
  type LeaderboardEvent,
  type LeaderboardFeedRepository,
  type LeaderboardSnapshot,
  type LeaderboardSnapshotRepository,
  LeaderboardSnapshotVersion,
} from "@putting-pals/putting-pals-schema";
import { and, desc, eq, isNull, lt } from "drizzle-orm";
import { leaderboardFeedTable, leaderboardSnapshotTable } from "../db/schema";
import type { Database } from "../index";

export class LeaderboardSnapshotPostgresRepository
  implements LeaderboardSnapshotRepository
{
  constructor(private readonly db: Database) {
    this.db = db;
  }

  async getLeaderboardSnapshot(
    tourCode: DomainTourCode,
    tournamentId: string,
  ): Promise<LeaderboardSnapshot | undefined> {
    const queryResult = await this.db
      .select({
        version: leaderboardSnapshotTable.version,
        snapshot: leaderboardSnapshotTable.snapshot,
      })
      .from(leaderboardSnapshotTable)
      .where(
        and(
          eq(leaderboardSnapshotTable.tourCode, tourCode),
          eq(leaderboardSnapshotTable.tournamentId, tournamentId),
        ),
      )
      .orderBy(desc(leaderboardSnapshotTable.updatedAt))
      .limit(1)
      .then(([result]) => result);

    if (
      queryResult === undefined ||
      queryResult.version !== LeaderboardSnapshotVersion
    ) {
      return undefined;
    }

    return queryResult.snapshot;
  }

  async createLeaderboardSnapshot(
    tourCode: DomainTourCode,
    tournamentId: string,
    snapshot: LeaderboardSnapshot,
  ): Promise<void> {
    await this.db
      .insert(leaderboardSnapshotTable)
      .values({
        tourCode,
        tournamentId,
        version: LeaderboardSnapshotVersion,
        snapshot,
      })
      .onConflictDoUpdate({
        target: [
          leaderboardSnapshotTable.tourCode,
          leaderboardSnapshotTable.tournamentId,
        ],
        set: {
          snapshot,
          version: LeaderboardSnapshotVersion,
        },
      });
  }

  async updateLeaderboardSnapshot(
    tourCode: DomainTourCode,
    tournamentId: string,
    snapshot: LeaderboardSnapshot,
  ): Promise<void> {
    await this.db
      .update(leaderboardSnapshotTable)
      .set({
        snapshot: snapshot,
        version: LeaderboardSnapshotVersion,
      })
      .where(
        and(
          eq(leaderboardSnapshotTable.tourCode, tourCode),
          eq(leaderboardSnapshotTable.tournamentId, tournamentId),
        ),
      );
  }
}

export class LeaderboardFeedPostgresRepository
  implements LeaderboardFeedRepository
{
  constructor(private readonly db: Database) {
    this.db = db;
  }

  async getLeaderboardFeed(
    tourCode: DomainTourCode,
    tournamentId: string,
    pageSize: number,
    cursor?: number,
  ): Promise<
    {
      seq: number;
      type: string;
      feedItem: LeaderboardEvent;
      tourCode: DomainTourCode;
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
    tourCode: DomainTourCode,
    tournamentId: string,
    events: LeaderboardEvent[],
  ): Promise<void> {
    await this.db.insert(leaderboardFeedTable).values(
      events.map((event) => ({
        tourCode,
        tournamentId,
        type: event.__typename,
        feedItem: event,
      })),
    );
  }
}

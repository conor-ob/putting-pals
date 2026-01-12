import type { TourCode } from "@putting-pals/putting-pals-api";
import {
  type LeaderboardSnapshot,
  type LeaderboardSnapshotRepository,
  LeaderboardSnapshotVersion,
} from "@putting-pals/putting-pals-api";
import { and, desc, eq } from "drizzle-orm";
import { leaderboardSnapshotTable } from "../db/schema";
import type { Database } from "../index";

export class LeaderboardSnapshotPostgresRepository
  implements LeaderboardSnapshotRepository
{
  constructor(private readonly db: Database) {
    this.db = db;
  }

  async getLeaderboardSnapshot(
    tourCode: TourCode,
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
    tourCode: TourCode,
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
    tourCode: TourCode,
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

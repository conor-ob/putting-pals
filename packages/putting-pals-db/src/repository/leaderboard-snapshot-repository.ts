import type {
  LeaderboardSnapshot,
  LeaderboardSnapshotRepository,
  LeaderboardSnapshotType,
  LeaderboardSnapshotTypeMap,
  TourCode,
} from "@putting-pals/putting-pals-api";
import { and, eq } from "drizzle-orm";
import { leaderboardSnapshotTable } from "../db/schema";
import type { Database } from "../db/types";

export class LeaderboardSnapshotPostgresRepository
  implements LeaderboardSnapshotRepository
{
  constructor(protected readonly db: Database) {}

  async getSnapshot<T extends LeaderboardSnapshotType>(
    tourCode: TourCode,
    tournamentId: string,
    type: T,
  ): Promise<LeaderboardSnapshotTypeMap[T] | undefined> {
    return await this.db
      .select()
      .from(leaderboardSnapshotTable)
      .where(
        and(
          eq(leaderboardSnapshotTable.tourCode, tourCode),
          eq(leaderboardSnapshotTable.tournamentId, tournamentId),
          eq(leaderboardSnapshotTable.type, type),
        ),
      )
      .limit(1)
      .then(
        ([row]) => row?.payload as LeaderboardSnapshotTypeMap[T] | undefined,
      );
  }

  async createSnapshot(
    tourCode: TourCode,
    tournamentId: string,
    snapshot: LeaderboardSnapshot,
  ): Promise<void> {
    await this.db.insert(leaderboardSnapshotTable).values({
      tourCode,
      tournamentId,
      type: snapshot.__typename,
      payload: snapshot,
    });
  }

  async updateSnapshot(
    tourCode: TourCode,
    tournamentId: string,
    snapshot: LeaderboardSnapshot,
  ): Promise<void> {
    await this.db
      .update(leaderboardSnapshotTable)
      .set({ payload: snapshot })
      .where(
        and(
          eq(leaderboardSnapshotTable.tourCode, tourCode),
          eq(leaderboardSnapshotTable.tournamentId, tournamentId),
          eq(leaderboardSnapshotTable.type, snapshot.__typename),
        ),
      );
  }
}

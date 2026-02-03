import type {
  LeaderboardSnapshot,
  LeaderboardSnapshotRepository,
  LeaderboardSnapshotType,
  LeaderboardSnapshotTypeMap,
} from "@putting-pals/putting-pals-core";
import type { TourCode } from "@putting-pals/putting-pals-schema";
import { and, eq } from "drizzle-orm";
import type { leaderboardSnapshotTable } from "../db/schema";
import type { Database } from "../db/types";

export class LeaderboardSnapshotPostgresRepository
  implements LeaderboardSnapshotRepository
{
  constructor(
    private readonly db: Database,
    private readonly table: typeof leaderboardSnapshotTable,
  ) {
    this.db = db;
    this.table = table;
  }

  async getSnapshot<T extends LeaderboardSnapshotType>(
    tourCode: TourCode,
    tournamentId: string,
    type: T,
  ): Promise<LeaderboardSnapshotTypeMap[T] | undefined> {
    return await this.db
      .select()
      .from(this.table)
      .where(
        and(
          eq(this.table.tourCode, tourCode),
          eq(this.table.tournamentId, tournamentId),
          eq(this.table.type, type),
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
    await this.db.insert(this.table).values({
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
      .update(this.table)
      .set({ payload: snapshot })
      .where(
        and(
          eq(this.table.tourCode, tourCode),
          eq(this.table.tournamentId, tournamentId),
          eq(this.table.type, snapshot.__typename),
        ),
      );
  }
}

import type {
  AggregateWithPatchSeq,
  LeaderboardAggregateRepository,
  TourCode,
} from "@putting-pals/putting-pals-api";
import { and, asc, count, desc, eq, gt, max } from "drizzle-orm";
import type { Operation } from "fast-json-patch";
import {
  leaderboardAggregatePatchTable,
  leaderboardAggregateTable,
} from "../db/schema";
import type { Database } from "../db/types";

export class LeaderboardAggregatePostgresRepository
  implements LeaderboardAggregateRepository
{
  constructor(private readonly db: Database) {
    this.db = db;
  }

  async getLeaderboardAggregate(
    tourCode: TourCode,
    tournamentId: string,
  ): Promise<AggregateWithPatchSeq | undefined> {
    return this.db
      .select({
        aggregate: leaderboardAggregateTable.aggregate,
        patchSeq: leaderboardAggregateTable.patchSeq,
      })
      .from(leaderboardAggregateTable)
      .where(
        and(
          eq(leaderboardAggregateTable.tourCode, tourCode),
          eq(leaderboardAggregateTable.tournamentId, tournamentId),
        ),
      )
      .orderBy(desc(leaderboardAggregateTable.patchSeq))
      .limit(1)
      .then(([result]) => result);
  }

  async createLeaderboardAggregate(
    tourCode: TourCode,
    tournamentId: string,
    aggregate: object,
    patchSeq = 0,
  ): Promise<void> {
    await this.db.insert(leaderboardAggregateTable).values({
      tourCode,
      tournamentId,
      aggregate,
      patchSeq,
    });
  }

  async getLeaderboardPatches(
    tourCode: TourCode,
    tournamentId: string,
    afterSeq: number,
  ): Promise<Operation[]> {
    return this.db
      .select({ patch: leaderboardAggregatePatchTable.patch })
      .from(leaderboardAggregatePatchTable)
      .where(
        and(
          eq(leaderboardAggregatePatchTable.tourCode, tourCode),
          eq(leaderboardAggregatePatchTable.tournamentId, tournamentId),
          gt(leaderboardAggregatePatchTable.seq, afterSeq),
        ),
      )
      .orderBy(asc(leaderboardAggregatePatchTable.seq))
      .then((results) => results.flatMap((result) => result.patch));
  }

  async getLeaderboardPatchCount(
    tourCode: TourCode,
    tournamentId: string,
    afterSeq: number,
  ): Promise<number> {
    const result = await this.db
      .select({ count: count() })
      .from(leaderboardAggregatePatchTable)
      .where(
        and(
          eq(leaderboardAggregatePatchTable.tourCode, tourCode),
          eq(leaderboardAggregatePatchTable.tournamentId, tournamentId),
          gt(leaderboardAggregatePatchTable.seq, afterSeq),
        ),
      );
    return result[0]?.count ?? 0;
  }

  async getMaxLeaderboardPatchSeq(
    tourCode: TourCode,
    tournamentId: string,
  ): Promise<number> {
    const result = await this.db
      .select({ maxSeq: max(leaderboardAggregatePatchTable.seq) })
      .from(leaderboardAggregatePatchTable)
      .where(
        and(
          eq(leaderboardAggregatePatchTable.tourCode, tourCode),
          eq(leaderboardAggregatePatchTable.tournamentId, tournamentId),
        ),
      );
    return result[0]?.maxSeq ?? 0;
  }

  async createLeaderboardPatches(
    tourCode: TourCode,
    tournamentId: string,
    patches: Operation[],
  ): Promise<void> {
    await this.db.insert(leaderboardAggregatePatchTable).values({
      tourCode,
      tournamentId,
      patch: patches,
    });
  }
}

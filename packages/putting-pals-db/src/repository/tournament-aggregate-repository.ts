import type {
  AggregateWithPatchSeq,
  TourCode,
  TournamentAggregateRepository,
} from "@putting-pals/putting-pals-api";
import { and, asc, count, desc, eq, gt, max } from "drizzle-orm";
import type { Operation } from "fast-json-patch";
import {
  tournamentAggregatePatchTable,
  tournamentAggregateTable,
} from "../db/schema";
import type { Database } from "../db/types";

export class TournamentAggregatePostgresRepository
  implements TournamentAggregateRepository
{
  constructor(private readonly db: Database) {
    this.db = db;
  }

  async getTournamentAggregate(
    tourCode: TourCode,
    tournamentId: string,
  ): Promise<AggregateWithPatchSeq | undefined> {
    return this.db
      .select({
        aggregate: tournamentAggregateTable.aggregate,
        patchSeq: tournamentAggregateTable.patchSeq,
      })
      .from(tournamentAggregateTable)
      .where(
        and(
          eq(tournamentAggregateTable.tourCode, tourCode),
          eq(tournamentAggregateTable.tournamentId, tournamentId),
        ),
      )
      .orderBy(desc(tournamentAggregateTable.patchSeq))
      .limit(1)
      .then(([result]) => result);
  }

  async createTournamentAggregate(
    tourCode: TourCode,
    tournamentId: string,
    aggregate: object,
    patchSeq = 0,
  ): Promise<void> {
    await this.db.insert(tournamentAggregateTable).values({
      tourCode,
      tournamentId,
      aggregate,
      patchSeq,
    });
  }

  async getTournamentPatches(
    tourCode: TourCode,
    tournamentId: string,
    afterSeq: number,
  ): Promise<Operation[]> {
    return this.db
      .select({ patch: tournamentAggregatePatchTable.patch })
      .from(tournamentAggregatePatchTable)
      .where(
        and(
          eq(tournamentAggregatePatchTable.tourCode, tourCode),
          eq(tournamentAggregatePatchTable.tournamentId, tournamentId),
          gt(tournamentAggregatePatchTable.seq, afterSeq),
        ),
      )
      .orderBy(asc(tournamentAggregatePatchTable.seq))
      .then((results) => results.flatMap((result) => result.patch));
  }

  async getTournamentPatchCount(
    tourCode: TourCode,
    tournamentId: string,
    afterSeq: number,
  ): Promise<number> {
    const result = await this.db
      .select({ count: count() })
      .from(tournamentAggregatePatchTable)
      .where(
        and(
          eq(tournamentAggregatePatchTable.tourCode, tourCode),
          eq(tournamentAggregatePatchTable.tournamentId, tournamentId),
          gt(tournamentAggregatePatchTable.seq, afterSeq),
        ),
      );
    return result[0]?.count ?? 0;
  }

  async getMaxTournamentPatchSeq(
    tourCode: TourCode,
    tournamentId: string,
  ): Promise<number> {
    const result = await this.db
      .select({ maxSeq: max(tournamentAggregatePatchTable.seq) })
      .from(tournamentAggregatePatchTable)
      .where(
        and(
          eq(tournamentAggregatePatchTable.tourCode, tourCode),
          eq(tournamentAggregatePatchTable.tournamentId, tournamentId),
        ),
      );
    return result[0]?.maxSeq ?? 0;
  }

  async createTournamentPatches(
    tourCode: TourCode,
    tournamentId: string,
    patches: Operation[],
  ): Promise<void> {
    await this.db.insert(tournamentAggregatePatchTable).values({
      tourCode,
      tournamentId,
      patch: patches,
    });
  }
}

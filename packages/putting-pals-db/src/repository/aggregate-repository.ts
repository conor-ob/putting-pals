import type {
  AggregatePatchRow,
  AggregateRepository,
  AggregateRow,
  AggregateType,
  TourCode,
} from "@putting-pals/putting-pals-api";
import { and, asc, count, desc, eq, gt, max } from "drizzle-orm";
import type { Operation } from "fast-json-patch";
import { aggregatePatchTable, aggregateSnapshotTable } from "../db/schema";
import type { Database } from "../db/types";

export class AggregatePostgresRepository implements AggregateRepository {
  constructor(protected readonly db: Database) {
    this.db = db;
  }

  async getAggregate(
    tourCode: TourCode,
    tournamentId: string,
    type: AggregateType,
  ): Promise<AggregateRow | undefined> {
    return this.db
      .select()
      .from(aggregateSnapshotTable)
      .where(
        and(
          eq(aggregateSnapshotTable.tourCode, tourCode),
          eq(aggregateSnapshotTable.tournamentId, tournamentId),
          eq(aggregateSnapshotTable.type, type),
        ),
      )
      .orderBy(desc(aggregateSnapshotTable.patchSeq))
      .limit(1)
      .then(([result]) => result);
  }

  async createAggregate(
    tourCode: TourCode,
    tournamentId: string,
    type: AggregateType,
    aggregate: object,
    patchSeq = 0,
  ): Promise<void> {
    await this.db.insert(aggregateSnapshotTable).values({
      tourCode,
      tournamentId,
      type,
      aggregate,
      patchSeq,
    });
  }

  async getPatches(
    tourCode: TourCode,
    tournamentId: string,
    type: AggregateType,
    afterSeq: number,
  ): Promise<AggregatePatchRow[]> {
    return this.db
      .select()
      .from(aggregatePatchTable)
      .where(
        and(
          eq(aggregatePatchTable.tourCode, tourCode),
          eq(aggregatePatchTable.tournamentId, tournamentId),
          eq(aggregatePatchTable.type, type),
          gt(aggregatePatchTable.seq, afterSeq),
        ),
      )
      .orderBy(asc(aggregatePatchTable.seq));
  }

  async getPatchCount(
    tourCode: TourCode,
    tournamentId: string,
    type: AggregateType,
    afterSeq: number,
  ): Promise<number> {
    const result = await this.db
      .select({ count: count() })
      .from(aggregatePatchTable)
      .where(
        and(
          eq(aggregatePatchTable.tourCode, tourCode),
          eq(aggregatePatchTable.tournamentId, tournamentId),
          eq(aggregatePatchTable.type, type),
          gt(aggregatePatchTable.seq, afterSeq),
        ),
      );
    return result[0]?.count ?? 0;
  }

  async getMaxPatchSeq(
    tourCode: TourCode,
    tournamentId: string,
    type: AggregateType,
  ): Promise<number> {
    const result = await this.db
      .select({ maxSeq: max(aggregatePatchTable.seq) })
      .from(aggregatePatchTable)
      .where(
        and(
          eq(aggregatePatchTable.tourCode, tourCode),
          eq(aggregatePatchTable.tournamentId, tournamentId),
          eq(aggregatePatchTable.type, type),
        ),
      );
    return result[0]?.maxSeq ?? 0;
  }

  async createPatches(
    tourCode: TourCode,
    tournamentId: string,
    type: AggregateType,
    patches: Operation[],
  ): Promise<void> {
    await this.db.insert(aggregatePatchTable).values({
      tourCode,
      tournamentId,
      type,
      patch: patches,
    });
  }
}

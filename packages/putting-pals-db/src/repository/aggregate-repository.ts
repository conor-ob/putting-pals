import type {
  AggregateRepository,
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
  ): Promise<{ aggregate: object; patchSeq: number } | undefined> {
    return this.db
      .select({
        aggregate: aggregateSnapshotTable.aggregate,
        patchSeq: aggregateSnapshotTable.patchSeq,
      })
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
  ): Promise<Operation[]> {
    return this.db
      .select({ patch: aggregatePatchTable.patch })
      .from(aggregatePatchTable)
      .where(
        and(
          eq(aggregatePatchTable.tourCode, tourCode),
          eq(aggregatePatchTable.tournamentId, tournamentId),
          eq(aggregatePatchTable.type, type),
          gt(aggregatePatchTable.seq, afterSeq),
        ),
      )
      .orderBy(asc(aggregatePatchTable.seq))
      .then((results) => results.flatMap((result) => result.patch));
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

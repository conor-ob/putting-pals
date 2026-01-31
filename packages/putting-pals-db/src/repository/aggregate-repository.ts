import type {
  AggregatePatchRow,
  AggregateRepository,
  AggregateType,
  TourCode,
} from "@putting-pals/putting-pals-api";
import { and, asc, eq } from "drizzle-orm";
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
  ): Promise<object | undefined> {
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
      .limit(1)
      .then(([result]) => result?.aggregate);
  }

  async createAggregate(
    tourCode: TourCode,
    tournamentId: string,
    type: AggregateType,
    aggregate: object,
    patchSeq: number = 0,
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
  ): Promise<AggregatePatchRow[]> {
    return this.db
      .select()
      .from(aggregatePatchTable)
      .where(
        and(
          eq(aggregatePatchTable.tourCode, tourCode),
          eq(aggregatePatchTable.tournamentId, tournamentId),
          eq(aggregatePatchTable.type, type),
        ),
      )
      .orderBy(asc(aggregatePatchTable.seq));
  }

  async createPatch(
    tourCode: TourCode,
    tournamentId: string,
    type: AggregateType,
    operations: Operation[],
  ): Promise<AggregatePatchRow | undefined> {
    return this.db
      .insert(aggregatePatchTable)
      .values({ tourCode, tournamentId, type, operations })
      .returning()
      .then(([result]) => result);
  }
}

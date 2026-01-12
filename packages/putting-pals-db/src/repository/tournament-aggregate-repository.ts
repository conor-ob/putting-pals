import type {
  TourCode,
  TournamentAggregateRepository,
} from "@putting-pals/putting-pals-api";
import { and, asc, eq } from "drizzle-orm";
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
  ): Promise<object | undefined> {
    return this.db
      .select({ aggregate: tournamentAggregateTable.aggregate })
      .from(tournamentAggregateTable)
      .where(
        and(
          eq(tournamentAggregateTable.tourCode, tourCode),
          eq(tournamentAggregateTable.tournamentId, tournamentId),
        ),
      )
      .limit(1)
      .then(([result]) => result?.aggregate);
  }

  async createTournamentAggregate(
    tourCode: TourCode,
    tournamentId: string,
    aggregate: object,
  ): Promise<void> {
    await this.db.insert(tournamentAggregateTable).values({
      tourCode,
      tournamentId,
      aggregate,
    });
  }

  async getTournamentPatches(
    tourCode: TourCode,
    tournamentId: string,
  ): Promise<Operation[]> {
    return this.db
      .select({ patch: tournamentAggregatePatchTable.patch })
      .from(tournamentAggregatePatchTable)
      .where(
        and(
          eq(tournamentAggregatePatchTable.tourCode, tourCode),
          eq(tournamentAggregatePatchTable.tournamentId, tournamentId),
        ),
      )
      .orderBy(asc(tournamentAggregatePatchTable.seq))
      .then((results) => results.flatMap((result) => result.patch));
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

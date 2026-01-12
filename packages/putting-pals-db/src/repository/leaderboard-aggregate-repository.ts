import type {
  LeaderboardAggregateRepository,
  TourCode,
} from "@putting-pals/putting-pals-api";
import { and, asc, eq } from "drizzle-orm";
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
  ): Promise<object | undefined> {
    return this.db
      .select({ aggregate: leaderboardAggregateTable.aggregate })
      .from(leaderboardAggregateTable)
      .where(
        and(
          eq(leaderboardAggregateTable.tourCode, tourCode),
          eq(leaderboardAggregateTable.tournamentId, tournamentId),
        ),
      )
      .limit(1)
      .then(([result]) => result?.aggregate);
  }

  async createLeaderboardAggregate(
    tourCode: TourCode,
    tournamentId: string,
    aggregate: object,
  ): Promise<void> {
    await this.db.insert(leaderboardAggregateTable).values({
      tourCode,
      tournamentId,
      aggregate,
    });
  }

  async getLeaderboardPatches(
    tourCode: TourCode,
    tournamentId: string,
  ): Promise<Operation[]> {
    return this.db
      .select({ patch: leaderboardAggregatePatchTable.patch })
      .from(leaderboardAggregatePatchTable)
      .where(
        and(
          eq(leaderboardAggregatePatchTable.tourCode, tourCode),
          eq(leaderboardAggregatePatchTable.tournamentId, tournamentId),
        ),
      )
      .orderBy(asc(leaderboardAggregatePatchTable.seq))
      .then((results) => results.flatMap((result) => result.patch));
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

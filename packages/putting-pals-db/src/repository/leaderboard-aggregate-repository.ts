import type {
  LeaderboardAggregateRepository,
  TourCode,
} from "@putting-pals/putting-pals-api";
import { and, eq } from "drizzle-orm";
import { leaderboardAggregateTable } from "../db/schema";
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
}

import type {
  ActiveTournament,
  ActiveTournamentRepository,
  TourCode,
} from "@putting-pals/putting-pals-core";
import { eq } from "drizzle-orm";
import type { activeTournamentTable } from "../db/schema";
import type { Database } from "../db/types";

export class ActiveTournamentPostgresRepository
  implements ActiveTournamentRepository
{
  constructor(
    private readonly db: Database,
    private readonly table: typeof activeTournamentTable,
  ) {
    this.db = db;
    this.table = table;
  }

  async getActiveTournament(
    tourCode: TourCode,
  ): Promise<ActiveTournament | undefined> {
    return await this.db
      .select({
        tournamentId: this.table.tournamentId,
        lastUpdatedAt: this.table.updatedAt,
      })
      .from(this.table)
      .where(eq(this.table.tourCode, tourCode))
      .limit(1)
      .then(([row]) => row);
  }

  async setActiveTournament(
    tourCode: TourCode,
    tournamentId: string,
  ): Promise<void> {
    await this.db
      .insert(this.table)
      .values({
        tourCode,
        tournamentId,
      })
      .onConflictDoUpdate({
        target: [this.table.tourCode],
        set: {
          tournamentId,
          updatedAt: new Date(),
        },
      });
  }
}

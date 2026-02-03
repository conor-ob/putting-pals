import type {
  ActiveTournament,
  ActiveTournamentRepository,
} from "@putting-pals/putting-pals-core";
import type { TourCode } from "@putting-pals/putting-pals-schema";
import { eq } from "drizzle-orm";
import { activeTournamentTable } from "../db/schema";
import type { Database } from "../db/types";

export class ActiveTournamentPostgresRepository
  implements ActiveTournamentRepository
{
  constructor(private readonly db: Database) {
    this.db = db;
  }

  async getActiveTournament(
    tourCode: TourCode,
  ): Promise<ActiveTournament | undefined> {
    return await this.db
      .select({
        tournamentId: activeTournamentTable.tournamentId,
        lastUpdatedAt: activeTournamentTable.updatedAt,
      })
      .from(activeTournamentTable)
      .where(eq(activeTournamentTable.tourCode, tourCode))
      .limit(1)
      .then(([row]) => row);
  }

  async setActiveTournament(
    tourCode: TourCode,
    tournamentId: string,
  ): Promise<void> {
    await this.db
      .insert(activeTournamentTable)
      .values({
        tourCode,
        tournamentId,
      })
      .onConflictDoUpdate({
        target: [activeTournamentTable.tourCode],
        set: {
          tournamentId,
          updatedAt: new Date(),
        },
      });
  }
}

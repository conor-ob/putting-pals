import type { TourCode } from "@putting-pals/putting-pals-schema";

export interface PgaTourWebScraper {
  getActiveTournamentId(tourCode: TourCode): Promise<string | undefined>;
}

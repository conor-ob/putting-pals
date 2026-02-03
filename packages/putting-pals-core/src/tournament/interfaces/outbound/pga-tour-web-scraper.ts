import type { TourCode } from "@putting-pals/putting-pals-api";

export interface PgaTourWebScraper {
  getActiveTournamentId(tourCode: TourCode): Promise<string | undefined>;
}

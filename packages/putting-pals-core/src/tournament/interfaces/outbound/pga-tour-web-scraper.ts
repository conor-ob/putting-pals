import type { TourCode } from "../../../../../putting-pals-schema/src";

export interface PgaTourWebScraper {
  getActiveTournamentId(tourCode: TourCode): Promise<string | undefined>;
}

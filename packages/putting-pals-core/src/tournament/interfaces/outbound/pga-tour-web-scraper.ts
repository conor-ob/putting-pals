import type { TourCode } from "../../../tour/domain/types";

export interface PgaTourWebScraper {
  getActiveTournamentId(tourCode: TourCode): Promise<string | undefined>;
}

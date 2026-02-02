import type { TourCode } from "../graphql/putting-pals/generated/graphql";

export interface PgaTourWebScraper {
  getActiveTournamentId(tourCode: TourCode): Promise<string | undefined>;
}

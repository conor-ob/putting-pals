import type { TourCode } from "../graphql/putting-pals/generated/graphql";

export interface PgaTourWebScraper {
  getCurrentTournamentId(tourCode: TourCode): Promise<string | undefined>;
}

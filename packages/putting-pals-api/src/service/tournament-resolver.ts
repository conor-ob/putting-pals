import type { TourCode } from "@putting-pals/putting-pals-api";

export interface TournamentResolver {
  getCurrentTournamentId(tourCode: TourCode): Promise<string>;
}

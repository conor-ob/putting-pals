import type { TourCode } from "@putting-pals/putting-pals-api";

export interface TournamentResolver {
  getActiveTournamentId(tourCode: TourCode): Promise<string>;
}

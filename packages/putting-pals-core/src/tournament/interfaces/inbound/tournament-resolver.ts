import type { TourCode } from "@putting-pals/putting-pals-schema";

export interface TournamentResolver {
  getActiveTournamentId(tourCode: TourCode, id?: string): Promise<string>;
}

import type { TourCode } from "../../../../../putting-pals-schema/src";

export interface TournamentResolver {
  getActiveTournamentId(tourCode: TourCode): Promise<string>;
}

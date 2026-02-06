import type { TourCode } from "../../../tour/domain/types";

export interface TournamentResolver {
  getActiveTournamentId(tourCode: TourCode, id?: string): Promise<string>;
}

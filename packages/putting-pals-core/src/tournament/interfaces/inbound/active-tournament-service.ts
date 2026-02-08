import type { TourCode } from "../../../tour/domain/types";

export interface ActiveTournamentService {
  getActiveTournamentId(tourCode: TourCode, id?: string): Promise<string>;
}

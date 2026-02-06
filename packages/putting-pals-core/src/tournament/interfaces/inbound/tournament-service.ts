import type { TourCode } from "../../../tour/domain/types";
import type { Tournament } from "../../domain/types";

export interface TournamentService {
  getTournament(tourCode: TourCode, id?: string): Promise<Tournament>;
  getTournaments(tourCode: TourCode, ids: string[]): Promise<Tournament[]>;
}

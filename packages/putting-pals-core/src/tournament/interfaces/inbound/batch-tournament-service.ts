import type { TourCode } from "../../../tour/domain/types";
import type { Tournament } from "../../domain/types";

export interface BatchTournamentService {
  getTournaments(tourCode: TourCode, ids: string[]): Promise<Tournament[]>;
}

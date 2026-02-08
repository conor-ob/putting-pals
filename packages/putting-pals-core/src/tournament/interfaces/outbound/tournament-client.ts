import type { TourCode } from "../../../tour/domain/types";
import type { Tournament } from "../../domain/types";

export interface TournamentClient {
  getTournament(tourCode: TourCode, id: string): Promise<Tournament>;
  getTournaments(ids: string[]): Promise<Tournament[]>;
}

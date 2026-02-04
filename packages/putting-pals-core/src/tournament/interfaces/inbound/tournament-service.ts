import type { TourCode, Tournament } from "@putting-pals/putting-pals-schema";

export interface TournamentService {
  getTournament(tourCode: TourCode, id?: string): Promise<Tournament>;
  getTournaments(ids: string[]): Promise<readonly Tournament[]>;
}

import type { Tournament } from "../../domain/types";

export interface TournamentClient {
  getTournament(id: string): Promise<Tournament>;
  getTournaments(ids: string[]): Promise<Tournament[]>;
}

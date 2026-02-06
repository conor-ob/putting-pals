import type { Tournament } from "../../domain/types";

export interface TournamentClient {
  getTournaments(ids: string[]): Promise<Tournament[]>;
}

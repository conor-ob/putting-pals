import type { Tournament } from "../../domain/types";

export interface BatchTournamentClient {
  getTournaments(ids: string[]): Promise<Tournament[]>;
}

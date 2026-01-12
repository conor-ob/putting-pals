import type { Tournament } from "@putting-pals/putting-pals-api";

export interface TournamentClient {
  getTournaments(ids: string[]): Promise<readonly Tournament[]>;
}

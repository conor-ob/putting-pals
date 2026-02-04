import type { Tournament } from "@putting-pals/putting-pals-schema";

export interface TournamentClient {
  getTournaments(ids: string[]): Promise<readonly Tournament[]>;
}

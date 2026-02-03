import type { Tournament } from "../../../../../putting-pals-schema/src";

export interface TournamentClient {
  getTournaments(ids: string[]): Promise<readonly Tournament[]>;
}

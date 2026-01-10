import type { DomainTournament } from "../generated/graphql";

export interface TournamentClient {
  getTournaments(ids: string[]): Promise<readonly DomainTournament[]>;
}

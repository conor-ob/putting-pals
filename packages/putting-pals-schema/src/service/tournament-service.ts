import type { DomainTourCode, DomainTournament } from "../generated/graphql";

export interface TournamentService {
  getTournament(
    tourCode: DomainTourCode,
    id?: string,
  ): Promise<DomainTournament>;

  getTournaments(ids: string[]): Promise<readonly DomainTournament[]>;
}

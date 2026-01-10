import type { DomainTourCode } from "../generated/graphql";

export interface TournamentResolver {
  getCurrentTournamentId(tourCode: DomainTourCode): Promise<string>;
}

import type { DomainTourCode } from "../generated/graphql";

export interface LeaderboardEventProcessor {
  detectChange(tourCode: DomainTourCode): Promise<void>;
}

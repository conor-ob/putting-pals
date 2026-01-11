import type {
  DomainLeaderboardHoleByHole,
  DomainLeaderboardV3,
  DomainTourCode,
} from "../generated/graphql";

export interface LeaderboardService {
  getLeaderboard(
    tourCode: DomainTourCode,
    id?: string,
  ): Promise<DomainLeaderboardV3>;

  getLeaderboardHoleByHole(
    id: string,
    round: number,
  ): Promise<DomainLeaderboardHoleByHole>;
}

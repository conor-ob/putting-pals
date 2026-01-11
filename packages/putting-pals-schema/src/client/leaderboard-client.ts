import type {
  DomainLeaderboardHoleByHole,
  DomainLeaderboardV3,
} from "../generated/graphql";

export interface LeaderboardClient {
  getLeaderboard(id: string): Promise<DomainLeaderboardV3>;

  getLeaderboardHoleByHole(
    id: string,
    round: number,
  ): Promise<DomainLeaderboardHoleByHole>;
}

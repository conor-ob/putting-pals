import type {
  LeaderboardHoleByHole,
  LeaderboardV3,
} from "@putting-pals/putting-pals-api";

export interface LeaderboardClient {
  getLeaderboard(id: string): Promise<LeaderboardV3>;

  getLeaderboardHoleByHole(
    id: string,
    round: number,
  ): Promise<LeaderboardHoleByHole>;
}

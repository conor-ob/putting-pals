import type {
  LeaderboardHoleByHole,
  LeaderboardV3,
  TourCode,
} from "@putting-pals/putting-pals-api";

export interface LeaderboardService {
  getLeaderboard(tourCode: TourCode, id?: string): Promise<LeaderboardV3>;

  getLeaderboardHoleByHole(
    id: string,
    round: number,
  ): Promise<LeaderboardHoleByHole>;
}

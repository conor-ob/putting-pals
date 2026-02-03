import type {
  LeaderboardV3,
  TourCode,
} from "@putting-pals/putting-pals-schema";

export interface LeaderboardService {
  getLeaderboard(tourCode: TourCode, id?: string): Promise<LeaderboardV3>;
}

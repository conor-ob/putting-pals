import type {
  LeaderboardV3,
  TourCode,
} from "../../../../../putting-pals-schema/src";

export interface LeaderboardService {
  getLeaderboard(tourCode: TourCode, id?: string): Promise<LeaderboardV3>;
}

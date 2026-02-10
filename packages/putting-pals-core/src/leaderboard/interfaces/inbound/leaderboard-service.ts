import type { TourCode } from "../../../tour/domain/types";
import type { Leaderboard } from "../../domain/types";

export interface LeaderboardService {
  getLeaderboard(tourCode: TourCode, id?: string): Promise<Leaderboard>;
}

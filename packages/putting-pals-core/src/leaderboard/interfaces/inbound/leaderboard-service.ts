import type { TourCode } from "../../../tour/domain/types";
import type { LeaderboardV3 } from "../../domain/types";

export interface LeaderboardService {
  getLeaderboard(tourCode: TourCode, id?: string): Promise<LeaderboardV3>;
}

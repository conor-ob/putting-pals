import type { Leaderboard } from "../../../leaderboard/domain/types";
import type { TourCode } from "../../../tour/domain/types";

export interface LeaderboardClient {
  getLeaderboard(tourCode: TourCode, id: string): Promise<Leaderboard>;
}

import type { LeaderboardV3 } from "../../../leaderboard/domain/types";

export interface LeaderboardClient {
  getLeaderboard(id: string): Promise<LeaderboardV3>;
}

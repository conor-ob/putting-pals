import type { LeaderboardV3 } from "@putting-pals/putting-pals-api";

export interface LeaderboardClient {
  getLeaderboard(id: string): Promise<LeaderboardV3>;
}

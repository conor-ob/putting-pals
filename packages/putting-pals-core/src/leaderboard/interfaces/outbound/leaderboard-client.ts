import type { LeaderboardV3 } from "../../../../../putting-pals-schema/src";

export interface LeaderboardClient {
  getLeaderboard(id: string): Promise<LeaderboardV3>;
}

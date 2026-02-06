import type { EspnLeaderboardClient } from "@putting-pals/putting-pals-core";
import type { LeaderboardV3 } from "@putting-pals/putting-pals-schema";

export class EspnRestApiLeaderboardClient implements EspnLeaderboardClient {
  async getLeaderboard(id: string): Promise<LeaderboardV3> {
    const tempId = "401822681";
    const response = await fetch(
      `https://site.web.api.espn.com/apis/site/v2/sports/golf/leaderboard?league=all&region=us&lang=en&event=${tempId}`,
    );
    // return response.json();
    throw new Error("Not implemented");
  }
}

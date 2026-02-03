import type { LeaderboardClient } from "@putting-pals/putting-pals-core";
import type { LeaderboardV3, Sdk } from "@putting-pals/putting-pals-schema";

export class LeaderboardGraphQlClient implements LeaderboardClient {
  constructor(private readonly sdk: Sdk) {
    this.sdk = sdk;
  }

  async getLeaderboard(id: string): Promise<LeaderboardV3> {
    return this.sdk
      .LeaderboardV3({ leaderboardV3Id: id })
      .then((data) => data.leaderboardV3);
  }
}

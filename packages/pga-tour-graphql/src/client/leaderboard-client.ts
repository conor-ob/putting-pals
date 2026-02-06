import type {
  LeaderboardClient,
  LeaderboardV3,
} from "@putting-pals/putting-pals-core";
import type { Sdk } from "@putting-pals/putting-pals-schema";

export class LeaderboardGraphQlClient implements LeaderboardClient {
  constructor(private readonly sdk: Sdk) {
    this.sdk = sdk;
  }

  // TODO: return type should be pga tour graphql type to ensure all fields are present then mapped to core types
  async getLeaderboard(id: string): Promise<LeaderboardV3> {
    return this.sdk
      .LeaderboardV3({ leaderboardV3Id: id })
      .then((data) => data.leaderboardV3);
  }
}

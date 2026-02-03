import type { LeaderboardV3 } from "@putting-pals/putting-pals-api";
import type { LeaderboardClient } from "@putting-pals/putting-pals-core";
import { GraphQlClient } from "./graphql-client";

export class LeaderboardGraphQlClient
  extends GraphQlClient
  implements LeaderboardClient
{
  async getLeaderboard(id: string): Promise<LeaderboardV3> {
    return this.sdk
      .LeaderboardV3({ leaderboardV3Id: id })
      .then((data) => data.leaderboardV3);
  }
}

import type {
  LeaderboardClient,
  LeaderboardHoleByHole,
  LeaderboardV3,
} from "@putting-pals/putting-pals-api";
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

  async getLeaderboardHoleByHole(
    id: string,
    round: number,
  ): Promise<LeaderboardHoleByHole> {
    return this.sdk
      .LeaderboardHoleByHole({ tournamentId: id, round })
      .then((data) => data.leaderboardHoleByHole);
  }
}

import type {
  DomainLeaderboardHoleByHole,
  DomainLeaderboardV3,
  LeaderboardClient,
} from "@putting-pals/putting-pals-schema";
import { GraphQlClient } from "./graphql-client";

export class LeaderboardGraphQlClient
  extends GraphQlClient
  implements LeaderboardClient
{
  async getLeaderboard(id: string): Promise<DomainLeaderboardV3> {
    return this.sdk
      .LeaderboardV3({ leaderboardV3Id: id })
      .then((data) => data.leaderboardV3);
  }

  async getLeaderboardHoleByHole(
    id: string,
    round: number,
  ): Promise<DomainLeaderboardHoleByHole> {
    return this.sdk
      .LeaderboardHoleByHole({ tournamentId: id, round })
      .then((data) => data.leaderboardHoleByHole);
  }
}

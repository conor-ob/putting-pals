import { GraphQlClient } from "./graphql-client";

export class LeaderboardClient extends GraphQlClient {
  async getLeaderboard(id: string) {
    return this.sdk
      .LeaderboardV3({ leaderboardV3Id: id })
      .then((data) => data.leaderboardV3);
  }

  async getLeaderboardHoleByHole(id: string, round: number) {
    return this.sdk
      .LeaderboardHoleByHole({ tournamentId: id, round })
      .then((data) => data.leaderboardHoleByHole);
  }
}

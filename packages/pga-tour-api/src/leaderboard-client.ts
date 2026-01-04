import {
  LeaderboardHoleByHoleDocument,
  LeaderboardV3Document,
} from "@putting-pals/pga-tour-schema/types";
import { GraphQlClient } from "./graphql-client";

export class LeaderboardClient extends GraphQlClient {
  async getLeaderboard(id: string) {
    return this.query(LeaderboardV3Document, { leaderboardV3Id: id }).then(
      (data) => data.leaderboardV3,
    );
  }

  async getLeaderboardHoleByHole(id: string, round: number) {
    return this.query(LeaderboardHoleByHoleDocument, {
      tournamentId: id,
      round,
    }).then((data) => data.leaderboardHoleByHole);
  }
}

import type {
  LeaderboardClient,
  LeaderboardV3,
} from "@putting-pals/putting-pals-core";
import type { Sdk } from "../generated/graphql";
import { transformLeaderboard } from "./leaderboard-utils";

export class PgaTourApiLeaderboardClient implements LeaderboardClient {
  constructor(private readonly sdk: Sdk) {
    this.sdk = sdk;
  }

  // TODO: return type should be pga tour graphql type to ensure all fields are present then mapped to core types
  async getLeaderboard(id: string): Promise<LeaderboardV3> {
    return this.sdk
      .LeaderboardV3({ leaderboardV3Id: id })
      .then((data) => transformLeaderboard(data.leaderboardV3));
  }
}

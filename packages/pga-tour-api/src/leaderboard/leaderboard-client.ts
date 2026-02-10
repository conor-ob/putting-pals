import {
  AbstractLeaderboardClient,
  type Leaderboard,
  type TourCode,
} from "@putting-pals/putting-pals-core";
import type { ApiLeaderboardV3, Sdk } from "../generated/graphql";
import { transformLeaderboard } from "./leaderboard-utils";

export class PgaTourApiLeaderboardClient extends AbstractLeaderboardClient<ApiLeaderboardV3> {
  constructor(private readonly sdk: Sdk) {
    super();
    this.sdk = sdk;
  }

  override async getLeaderboardRemote(
    _tourCode: TourCode,
    id: string,
  ): Promise<ApiLeaderboardV3> {
    return this.sdk
      .LeaderboardV3({ leaderboardV3Id: id })
      .then((data) => data.leaderboardV3);
  }

  override mapLeaderboard(leaderboard: ApiLeaderboardV3): Leaderboard {
    return transformLeaderboard(leaderboard);
  }
}

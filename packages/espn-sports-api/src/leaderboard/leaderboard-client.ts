import {
  type LeaderboardClient,
  type LeaderboardV3,
  NotImplementedError,
} from "@putting-pals/putting-pals-core";

export class EspnSportsApiLeaderboardClient implements LeaderboardClient {
  getLeaderboard(_id: string): Promise<LeaderboardV3> {
    throw new NotImplementedError();
  }
}

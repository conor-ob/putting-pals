import type { TourCode } from "../../../tour/domain/types";
import type { Leaderboard } from "../../domain/types";
import type { LeaderboardClient } from "./leaderboard-client";

export abstract class AbstractLeaderboardClient<T>
  implements LeaderboardClient
{
  async getLeaderboard(tourCode: TourCode, id: string): Promise<Leaderboard> {
    const remoteLeaderboard = await this.getLeaderboardRemote(tourCode, id);
    return this.mapLeaderboard(remoteLeaderboard);
  }

  abstract getLeaderboardRemote(tourCode: TourCode, id: string): Promise<T>;
  abstract mapLeaderboard(leaderboard: T): Leaderboard;
}

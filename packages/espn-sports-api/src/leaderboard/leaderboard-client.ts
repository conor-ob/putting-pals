import {
  type LeaderboardClient,
  type LeaderboardV3,
  NotImplementedError,
} from "@putting-pals/putting-pals-core";
import type { EspnSportsApi } from "../api/EspnSportsApi";

export class EspnSportsApiLeaderboardClient implements LeaderboardClient {
  // biome-ignore lint/correctness/noUnusedPrivateClassMembers: todo
  constructor(private readonly espnSportsApi: EspnSportsApi) {
    this.espnSportsApi = espnSportsApi;
  }

  getLeaderboard(_id: string): Promise<LeaderboardV3> {
    throw new NotImplementedError();
  }
}

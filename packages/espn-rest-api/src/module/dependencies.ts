import type {
  LeaderboardClient,
  ScheduleClient,
} from "@putting-pals/putting-pals-core";
import { EspnRestApiLeaderboardClient } from "../client/leaderboard-client";
import { EspnRestApiScheduleClient } from "../client/schedule-client";

export function injectDependencies(): {
  espnLeaderboardClient: LeaderboardClient;
  espnScheduleClient: ScheduleClient;
} {
  return {
    espnLeaderboardClient: new EspnRestApiLeaderboardClient(),
    espnScheduleClient: new EspnRestApiScheduleClient(),
  };
}

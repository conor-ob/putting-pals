import type {
  ActiveTournamentClient,
  LeaderboardClient,
  ScheduleClient,
  TournamentClient,
} from "@putting-pals/putting-pals-core";
import { EspnSportsApi } from "../api/EspnSportsApi";
import { EspnSportsApiLeaderboardClient } from "../leaderboard/leaderboard-client";
import { EspnSportsApiScheduleClient } from "../schedule/schedule-client";
import { EspnSportsApiActiveTournamentClient } from "../tournament/active-tournament-client";
import { EspnSportsApiTournamentClient } from "../tournament/tournament-client";

export function injectDependencies(): {
  leaderboardClient: LeaderboardClient;
  scheduleClient: ScheduleClient;
  tournamentClient: TournamentClient;
  activeTournamentClient: ActiveTournamentClient;
} {
  const espnSportsApi = new EspnSportsApi(
    "https://site.web.api.espn.com/apis/site/v2/sports/golf",
  );
  return {
    leaderboardClient: new EspnSportsApiLeaderboardClient(espnSportsApi),
    scheduleClient: new EspnSportsApiScheduleClient(espnSportsApi),
    tournamentClient: new EspnSportsApiTournamentClient(espnSportsApi),
    activeTournamentClient: new EspnSportsApiActiveTournamentClient(
      espnSportsApi,
    ),
  };
}

import type {
  ActiveTournamentClient,
  LeaderboardClient,
  ScheduleClient,
  SeasonClient,
  TournamentClient,
} from "@putting-pals/putting-pals-core";
import { EspnSportsApiImpl } from "../api/espn-sports-api";
import { EspnSportsApiLeaderboardClient } from "../leaderboard/leaderboard-client";
import { EspnSportsApiScheduleClient } from "../schedule/schedule-client";
import { EspnSportsApiSeasonClient } from "../season/season-client";
import { EspnSportsApiActiveTournamentClient } from "../tournament/active-tournament-client";
import { EspnSportsApiTournamentClient } from "../tournament/tournament-client";

export function injectDependencies(): {
  leaderboardClient: LeaderboardClient;
  scheduleClient: ScheduleClient;
  seasonClient: SeasonClient;
  tournamentClient: TournamentClient;
  activeTournamentClient: ActiveTournamentClient;
} {
  const espnSportsApi = new EspnSportsApiImpl(
    "https://site.api.espn.com/apis/site/v2/sports/golf",
  );
  return {
    leaderboardClient: new EspnSportsApiLeaderboardClient(espnSportsApi),
    scheduleClient: new EspnSportsApiScheduleClient(espnSportsApi),
    seasonClient: new EspnSportsApiSeasonClient(espnSportsApi),
    tournamentClient: new EspnSportsApiTournamentClient(espnSportsApi),
    activeTournamentClient: new EspnSportsApiActiveTournamentClient(
      espnSportsApi,
    ),
  };
}

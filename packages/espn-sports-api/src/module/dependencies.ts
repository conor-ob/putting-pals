import type {
  ActiveTournamentClient,
  LeaderboardClient,
  ScheduleClient,
  TournamentClient,
} from "@putting-pals/putting-pals-core";
import { EspnSportsApiLeaderboardClient } from "../api/leaderboard/leaderboard-client";
import { EspnSportsApiScheduleClient } from "../api/schedule/schedule-client";
import { EspnSportsApiActiveTournamentClient } from "../api/tournament/active-tournament-client";
import { EspnSportsApiTournamentClient } from "../api/tournament/tournament-client";

export function injectDependencies(): {
  leaderboardClient: LeaderboardClient;
  scheduleClient: ScheduleClient;
  tournamentClient: TournamentClient;
  activeTournamentClient: ActiveTournamentClient;
} {
  return {
    leaderboardClient: new EspnSportsApiLeaderboardClient(),
    scheduleClient: new EspnSportsApiScheduleClient(),
    tournamentClient: new EspnSportsApiTournamentClient(),
    activeTournamentClient: new EspnSportsApiActiveTournamentClient(),
  };
}

import type {
  ActiveTournamentClient,
  LeaderboardClient,
  ScheduleClient,
  TournamentClient,
} from "@putting-pals/putting-pals-core";
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
  return {
    leaderboardClient: new EspnSportsApiLeaderboardClient(),
    scheduleClient: new EspnSportsApiScheduleClient(),
    tournamentClient: new EspnSportsApiTournamentClient(),
    activeTournamentClient: new EspnSportsApiActiveTournamentClient(),
  };
}

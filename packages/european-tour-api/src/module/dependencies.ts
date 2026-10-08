import type {
  ActiveTournamentClient,
  LeaderboardClient,
  ScheduleClient,
  SeasonClient,
  TournamentClient,
} from "@putting-pals/putting-pals-core";
import { EuropeanTourApiImpl } from "../api/european-tour-api";
import { EuropeanTourApiTournamentEnricherClient } from "../tournament/tournament-enricher-client";

export function injectDependencies(
  espnSportsApiLeaderboardClient: LeaderboardClient,
  espnSportsApiScheduleClient: ScheduleClient,
  espnSportsApiSeasonClient: SeasonClient,
  espnSportsApiTournamentClient: TournamentClient,
  espnSportsApiActiveTournamentClient: ActiveTournamentClient,
): {
  activeTournamentClient: ActiveTournamentClient;
  leaderboardClient: LeaderboardClient;
  seasonClient: SeasonClient;
  scheduleClient: ScheduleClient;
  tournamentClient: TournamentClient;
} {
  const europeanTourApi = new EuropeanTourApiImpl(
    "https://www.europeantour.com",
  );
  return {
    activeTournamentClient: espnSportsApiActiveTournamentClient,
    leaderboardClient: espnSportsApiLeaderboardClient,
    seasonClient: espnSportsApiSeasonClient,
    // scheduleClient: new EuropeanTourApiScheduleClient(
    //   new EuropeanTourApiImpl("https://www.europeantour.com"),
    // ),
    scheduleClient: espnSportsApiScheduleClient,
    tournamentClient: new EuropeanTourApiTournamentEnricherClient(
      europeanTourApi,
      espnSportsApiTournamentClient,
    ),
  };
}

import type {
  ActiveTournamentClient,
  LeaderboardClient,
  ScheduleClient,
  SeasonClient,
  TournamentClient,
} from "@putting-pals/putting-pals-core";
import { EuropeanTourApiImpl } from "../api/european-tour-api";
import { EuropeanTourApiScheduleEnricherClient } from "../schedule/schedule-enricher-client";
import { EuropeanTourScheduleScraper } from "../schedule/schedule-scraper";
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
  const baseUrl = "https://www.europeantour.com";
  const europeanTourApi = new EuropeanTourApiImpl(baseUrl);
  const europeanTourScheduleScraper = new EuropeanTourScheduleScraper(baseUrl);
  return {
    activeTournamentClient: espnSportsApiActiveTournamentClient,
    leaderboardClient: espnSportsApiLeaderboardClient,
    seasonClient: espnSportsApiSeasonClient,
    scheduleClient: new EuropeanTourApiScheduleEnricherClient(
      europeanTourApi,
      europeanTourScheduleScraper,
      espnSportsApiScheduleClient,
    ),
    tournamentClient: new EuropeanTourApiTournamentEnricherClient(
      europeanTourApi,
      espnSportsApiTournamentClient,
    ),
  };
}

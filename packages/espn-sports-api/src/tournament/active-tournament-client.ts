import type {
  ActiveTournamentClient,
  TourCode,
} from "@putting-pals/putting-pals-core";
import type { EspnSportsApi } from "../api/espn-sports-api";

export class EspnSportsApiActiveTournamentClient
  implements ActiveTournamentClient
{
  constructor(private readonly espnSportsApi: EspnSportsApi) {
    this.espnSportsApi = espnSportsApi;
  }

  async getActiveTournamentId(tourCode: TourCode): Promise<string | undefined> {
    const leaderboard = await this.espnSportsApi.getLeaderboard(tourCode);

    const eventWithCompetitors = leaderboard.events.find((event) =>
      event.competitions.some(
        (competition) => (competition.competitors ?? []).length > 0,
      ),
    );

    if (eventWithCompetitors !== undefined) {
      return eventWithCompetitors.id;
    }

    const event = leaderboard.events[0];

    if (event === undefined) {
      return undefined;
    }

    const schedule = await this.espnSportsApi.getTourSchedule(
      tourCode,
      event.season.year,
    );

    const events = schedule.seasons
      .flatMap((season) => season.events ?? [])
      .sort((a, b) => a.startDate.localeCompare(b.startDate));

    const eventIndex = events.findIndex((e) => e.id === event.id);

    if (eventIndex === -1) {
      return undefined;
    } else if (eventIndex === 0) {
      const seasons = schedule.seasons.sort((a, b) => a.year - b.year);
      const seasonIndex = seasons.findIndex(
        (s) => s.year === event.season.year,
      );

      const previousSeason = seasons[seasonIndex - 1];
      if (previousSeason === undefined) {
        return undefined;
      }

      const previousSchedule = await this.espnSportsApi.getTourSchedule(
        tourCode,
        previousSeason.year,
      );
      const previousEvents = previousSchedule.seasons
        .flatMap((season) => season.events ?? [])
        .sort((a, b) => a.startDate.localeCompare(b.startDate));

      const lastEventPreviousSeason = previousEvents[previousEvents.length - 1];

      if (lastEventPreviousSeason === undefined) {
        return undefined;
      }

      return lastEventPreviousSeason.id;
    }

    const previousEvent = events[eventIndex - 1];

    if (previousEvent === undefined) {
      return undefined;
    }

    return previousEvent.id;
  }
}

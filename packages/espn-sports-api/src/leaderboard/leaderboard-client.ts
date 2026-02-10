import {
  type LeaderboardClient,
  type LeaderboardV3,
  NotFoundError,
  type TourCode,
  type TournamentStatus,
} from "@putting-pals/putting-pals-core";
import type { EspnSportsApi } from "../api/EspnSportsApi";

export class EspnSportsApiLeaderboardClient implements LeaderboardClient {
  constructor(private readonly espnSportsApi: EspnSportsApi) {
    this.espnSportsApi = espnSportsApi;
  }

  async getLeaderboard(tourCode: TourCode, id: string): Promise<LeaderboardV3> {
    const event = (
      await this.espnSportsApi.getLeaderboard(tourCode, id)
    ).events.find((event) => event.id === id);

    if (event === undefined) {
      throw new NotFoundError(`Leaderboard for tournament ${id} not found`);
    }

    const competitors =
      event.competitions.find((competition) => competition.id === id)
        ?.competitors ?? [];

    return {
      __typename: "LeaderboardV3" as const,
      id: event.id,
      players: competitors.map((competitor) => ({
        __typename: "PlayerRowV3" as const,
        id: competitor.id,
        leaderboardSortOrder: competitor.sortOrder,
        player: {
          id: competitor.athlete.id,
          displayName: competitor.athlete.displayName,
          countryFlag: "TBD",
        },
        scoringData: {
          position: competitor.status.position.displayName,
          playerState: "ACTIVE",
          total: competitor.status.detail ?? "-",
          totalSort: 0,
          thru: competitor.status.thru?.toString() ?? "-",
          thruSort: 0,
          score: competitor.score.displayValue,
          scoreSort: 0,
        },
      })),
      tournamentStatus: mapTournamentStatus(event.status.type.state),
    };
  }
}
function mapTournamentStatus(status: string): TournamentStatus {
  switch (status) {
    case "pre":
      return "NOT_STARTED";
    case "post":
      return "COMPLETED";
    default:
      return "IN_PROGRESS";
  }
}

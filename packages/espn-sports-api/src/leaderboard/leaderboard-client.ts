import {
  AbstractLeaderboardClient,
  type Leaderboard,
  NotFoundError,
  type TourCode,
  type TournamentStatus,
} from "@putting-pals/putting-pals-core";
import type { EspnSportsApi } from "../api/espn-sports-api";
import type { ApiLeaderboardEvent } from "./domain/types";

export class EspnSportsApiLeaderboardClient extends AbstractLeaderboardClient<ApiLeaderboardEvent> {
  constructor(private readonly espnSportsApi: EspnSportsApi) {
    super();
    this.espnSportsApi = espnSportsApi;
  }

  override async getLeaderboardRemote(
    tourCode: TourCode,
    id: string,
  ): Promise<ApiLeaderboardEvent> {
    const apiLeaderboard = await this.espnSportsApi.getLeaderboard(
      tourCode,
      id,
    );
    const event = apiLeaderboard.events.find((event) => event.id === id);

    if (event === undefined) {
      throw new NotFoundError(`Leaderboard for tournament ${id} not found`);
    }

    return event;
  }

  override mapLeaderboard(event: ApiLeaderboardEvent): Leaderboard {
    const competitors =
      event.competitions.find((competition) => competition.id === event.id)
        ?.competitors ?? [];

    return {
      __typename: "Leaderboard" as const,
      id: event.id,
      players: competitors.map((competitor) => ({
        __typename: "PlayerRow" as const,
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
      tournamentStatus: this.mapTournamentStatus(event.status.type.state),
    };
  }

  private mapTournamentStatus(status: string): TournamentStatus {
    switch (status) {
      case "pre":
        return "NOT_STARTED";
      case "post":
        return "COMPLETED";
      default:
        return "IN_PROGRESS";
    }
  }
}

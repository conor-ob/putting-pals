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
    const competition = event.competitions.find(
      (competition) => competition.id === event.id,
    );
    if (competition === undefined) {
      throw new NotFoundError(
        `Competition for tournament ${event.id} not found`,
      );
    }

    const currentRound = competition.status.period;

    const competitors = competition.competitors ?? [];

    return {
      __typename: "Leaderboard" as const,
      id: event.id,
      players: competitors.map((competitor) => {
        const total = this.parseScore(competitor.score.displayValue);
        const totalSort = this.parseScoreSort(total);
        const score = this.parseScore(
          competitor.linescores?.find(
            (lineScore) => lineScore.period === currentRound,
          )?.displayValue,
        );
        const scoreSort = this.parseScoreSort(score);
        return {
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
            total: total,
            totalSort: totalSort,
            thru: competitor.status.displayThru ?? "-",
            thruSort: 0,
            score: score,
            scoreSort: scoreSort,
          },
        };
      }),
      tournamentStatus: this.mapTournamentStatus(event.status.type.state),
    };
  }

  private parseScore(score?: string): string {
    if (score === undefined) {
      return "-";
    }

    if (score === "E" || score.startsWith("+") || score.startsWith("-")) {
      return score;
    }

    return "-";
  }

  private parseScoreSort(score: string): number {
    if (score === "E" || score === "-") {
      return 0;
    }

    if (score.startsWith("+") || score.startsWith("-")) {
      return parseInt(score, 10);
    }

    return 0;
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

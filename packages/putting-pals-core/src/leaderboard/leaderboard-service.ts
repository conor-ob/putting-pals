import { LeaderboardClient } from "@putting-pals/pga-tour-api";
import type {
  DomainLeaderboardHoleByHole,
  DomainLeaderboardV3,
  TourCode,
} from "@putting-pals/putting-pals-schema/types";
import { assertNever } from "@putting-pals/putting-pals-utils/type-utils";
import { CompetitionService } from "../competition/competition-service";
import { TournamentResolver } from "../tournament/tournament-resolver";
import { aggregateLeaderboard } from "./leaderboard-aggregator";
import { transformLeaderboard } from "./leaderboard-utils";

export class LeaderboardService {
  async getLeaderboard(
    tourCode: TourCode,
    id?: string,
  ): Promise<DomainLeaderboardV3> {
    const tournamentId = await this.resolveTournamentId(tourCode, id);
    switch (tourCode) {
      case "P":
        return this.getPuttingPalsLeaderboardById(tournamentId);
      case "R":
        return this.getPgaTourLeaderboardById(tournamentId);
      default:
        assertNever(tourCode);
    }
  }

  async getLeaderboardHoleByHole(
    id: string,
    round: number,
  ): Promise<DomainLeaderboardHoleByHole> {
    return new LeaderboardClient().getLeaderboardHoleByHole(id, round);
  }

  private async resolveTournamentId(
    tourCode: TourCode,
    id?: string,
  ): Promise<string> {
    if (id === undefined) {
      return await new TournamentResolver().getCurrentTournamentId(tourCode);
    }
    return id;
  }

  private async getPuttingPalsLeaderboardById(
    id: string,
  ): Promise<DomainLeaderboardV3> {
    const competition = new CompetitionService().getCompetition(id);
    const pgaTourLeaderboard = await this.getPgaTourLeaderboardById(id);
    return aggregateLeaderboard(pgaTourLeaderboard, competition);
  }

  private async getPgaTourLeaderboardById(
    id: string,
  ): Promise<DomainLeaderboardV3> {
    const leaderboard = await new LeaderboardClient().getLeaderboard(id);
    return transformLeaderboard(leaderboard);
  }
}

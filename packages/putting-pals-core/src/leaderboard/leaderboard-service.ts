import { LeaderboardClient } from "@putting-pals/pga-tour-api/leaderboard";
import type { TourCode } from "@putting-pals/putting-pals-schema/types";
import { CompetitionService } from "../competition/competition-service";
import { TournamentResolver } from "../tournament/tournament-resolver";
import { assertNever } from "../utils/type-utils";
import { aggregateLeaderboard } from "./leaderboard-aggregator";
import { transformLeaderboard } from "./leaderboard-transformer";

export class LeaderboardService {
  async getLeaderboard(tourCode: TourCode, id?: string) {
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

  private async resolveTournamentId(tourCode: TourCode, id?: string) {
    if (id === undefined) {
      return await new TournamentResolver().getCurrentTournamentId(tourCode);
    }
    return id;
  }

  private async getPuttingPalsLeaderboardById(id: string) {
    const competition = new CompetitionService().getCompetition(id);
    const pgaTourLeaderboard = await this.getPgaTourLeaderboardById(id);
    return aggregateLeaderboard(pgaTourLeaderboard, competition);
  }

  private async getPgaTourLeaderboardById(id: string) {
    const leaderboard = await new LeaderboardClient().getLeaderboard(id);
    return transformLeaderboard(leaderboard);
  }
}

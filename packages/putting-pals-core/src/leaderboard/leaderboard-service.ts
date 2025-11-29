import { LeaderboardClient } from "@putting-pals/pga-tour-api/leaderboard";
import type { TourCode } from "@putting-pals/putting-pals-schema/types";
import { CompetitionService } from "../competition/competition-service";
import { ScheduleService } from "../schedule/schedule-service";
import { assertNever } from "../utils/type-utils";
import { aggregateLeaderboard } from "./leaderboard-aggregator";
import { transformLeaderboard } from "./leaderboard-transformer";

export class LeaderboardService {
  getLeaderboard(tourCode: TourCode, id?: string) {
    switch (tourCode) {
      case "P":
        return this.getPuttingPalsLeaderboard(id);
      case "R":
        return this.getPgaTourLeaderboard(id);
      default:
        assertNever(tourCode);
    }
  }

  private async getPuttingPalsLeaderboard(id?: string) {
    if (id) {
      return this.getPuttingPalsLeaderboardById(id);
    } else {
      const currentTournamentId =
        await new ScheduleService().getCurrentTournamentId("P");
      return this.getPuttingPalsLeaderboardById(currentTournamentId);
    }
  }

  private async getPgaTourLeaderboard(id?: string) {
    if (id) {
      return this.getPgaTourLeaderboardById(id);
    } else {
      const currentTournamentId =
        await new ScheduleService().getCurrentTournamentId("R");
      return this.getPgaTourLeaderboardById(currentTournamentId);
    }
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

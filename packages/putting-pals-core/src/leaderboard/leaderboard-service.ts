import { LeaderboardClient } from "@putting-pals/pga-tour-api/leaderboard";
import type { TourCode } from "@putting-pals/putting-pals-schema/types";
import { CompetitionService } from "../competition/competition-service";
import { ScheduleService } from "../schedule/schedule-service";
import { assertNever } from "../utils/type-utils";
import { aggregateLeaderboard } from "./leaderboard-aggregator";
import { transformLeaderboard } from "./leaderboard-transformer";

export class LeaderboardService {
  async getLeaderboard(tourCode: TourCode, id?: string) {
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
      return new ScheduleService()
        .getCurrentTournamentId("P")
        .then((id) => this.getPuttingPalsLeaderboardById(id));
    }
  }

  private async getPgaTourLeaderboard(id?: string) {
    if (id) {
      return this.getPgaTourLeaderboardById(id);
    } else {
      return new ScheduleService()
        .getCurrentTournamentId("R")
        .then((id) => this.getPgaTourLeaderboardById(id));
    }
  }

  private async getPuttingPalsLeaderboardById(id: string) {
    return this.getPgaTourLeaderboardById(id).then((leaderboard) => {
      const competition = new CompetitionService().getCompetition(id);
      return aggregateLeaderboard(leaderboard, competition);
    });
  }

  private async getPgaTourLeaderboardById(id: string) {
    return new LeaderboardClient()
      .getLeaderboard(id)
      .then(transformLeaderboard);
  }
}

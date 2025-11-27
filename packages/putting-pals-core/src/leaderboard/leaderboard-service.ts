import { LeaderboardClient } from "@putting-pals/pga-tour-api/leaderboard";
import { PgaTourWebScraper } from "@putting-pals/pga-tour-scaper/scraper";
import type { TourCode } from "@putting-pals/putting-pals-schema/types";
import { CompetitionService } from "../competition/competition-service";
import { parseStartDate } from "../schedule/schedule.utils";
import { TournamentService } from "../tournament/tournament-service";
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
      return this.getPgaTourLeaderboard(id).then((leaderboard) => {
        const competition = new CompetitionService().getCompetition(id);
        return aggregateLeaderboard(leaderboard, competition);
      });
    } else {
      const competitions = new CompetitionService().getAllCompetitions();
      return new TournamentService()
        .getTournaments(
          competitions.map((competition) => competition.tournamentId),
        )
        .then((tournaments) => {
          const tournamentsWithStartDate = tournaments.map((tournament) => ({
            ...tournament,
            startDate: parseStartDate(tournament.displayDate),
          }));
          const filteredTournaments = tournamentsWithStartDate.filter(
            (tournament) => tournament.tournamentStatus !== "COMPLETED",
          );
          const tournament = filteredTournaments.sort(
            (a, b) => a.startDate.getTime() - b.startDate.getTime(),
          )[0];

          if (!tournament) {
            throw new Error("No tournament found");
          }

          return this.getPgaTourLeaderboard(tournament.id).then(
            (leaderboard) => {
              const competition = new CompetitionService().getCompetition(
                tournament.id,
              );
              return aggregateLeaderboard(leaderboard, competition);
            },
          );
        });
    }
  }

  private async getPgaTourLeaderboard(id?: string) {
    if (id) {
      return this.getPgaTourLeaderboardById(id);
    } else {
      return new PgaTourWebScraper()
        .getCurrentTournamentId()
        .then((id) => this.getPgaTourLeaderboardById(id));
    }
  }

  private async getPgaTourLeaderboardById(id: string) {
    return new LeaderboardClient()
      .getLeaderboard(id)
      .then(transformLeaderboard);
  }
}

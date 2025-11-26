import { CompetitionService } from "../competition/competition-service";
import { TournamentService } from "../tournament/tournament-service";
import { parseStartDate } from "./schedule.utils";

export class ScheduleService {
  async getSchedule() {
    const competitions = new CompetitionService().getAllCompetitions();
    return new TournamentService()
      .getTournaments(
        competitions.map((competition) => competition.tournamentId),
      )
      .then((tournaments) => {
        const tournamentsWithStartDate = tournaments.map((tournament) => ({
          tournament,
          startDate: parseStartDate(tournament.displayDate),
        }));
        const completedTournamentsWithStartDate =
          tournamentsWithStartDate.filter(
            (tournamentWithStartDate) =>
              tournamentWithStartDate.tournament.tournamentStatus ===
              "COMPLETED",
          );
        const upcomingTournamentsWithStartDate =
          tournamentsWithStartDate.filter(
            (tournamentWithStartDate) =>
              tournamentWithStartDate.tournament.tournamentStatus !==
              "COMPLETED",
          );

        // Group completed tournaments by month
        type Tournament =
          (typeof completedTournamentsWithStartDate)[0]["tournament"];
        type MonthGroup = { month: string; tournaments: Tournament[] };

        const completedByMonth = completedTournamentsWithStartDate
          .sort((a, b) => a.startDate.getTime() - b.startDate.getTime())
          .reduce(
            (acc, tournamentWithStartDate) => {
              const year = tournamentWithStartDate.startDate.getFullYear();
              const month = tournamentWithStartDate.startDate.getMonth();
              const key = `${year}-${month}`;

              if (!acc[key]) {
                acc[key] = {
                  month: tournamentWithStartDate.startDate.toLocaleString(
                    "default",
                    { month: "long", year: "numeric" },
                  ),
                  tournaments: [],
                };
              }

              acc[key].tournaments.push(tournamentWithStartDate.tournament);
              return acc;
            },
            {} as Record<string, MonthGroup>,
          );

        return {
          completed: Object.values(completedByMonth),
          upcoming: upcomingTournamentsWithStartDate
            .sort((a, b) => a.startDate.getTime() - b.startDate.getTime())
            .map(
              (tournamentWithStartDate) => tournamentWithStartDate.tournament,
            ),
        };
      });
  }
}

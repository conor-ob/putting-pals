import { format, parse } from "date-fns";
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
          ...tournament,
          startDate: parseStartDate(tournament.displayDate),
        }));

        const tournamentsByYear = tournamentsWithStartDate.reduce(
          (acc, tournament) => {
            const year = format(tournament.startDate, "yyyy");
            const key = year;
            if (!acc[key]) {
              acc[key] = [];
            }
            acc[key].push(tournament);
            return acc;
          },
          {} as Record<string, typeof tournamentsWithStartDate>,
        );

        const seasons = Object.entries(tournamentsByYear).map(
          ([year, tournaments]) => ({
            year,
            yearSort: Number(year),
            tournaments,
          }),
        );

        return seasons.map((season) => ({
          year: season.year,
          yearSort: season.yearSort,
          completed: Object.entries(
            season.tournaments
              .filter(
                (tournament) => tournament.tournamentStatus === "COMPLETED",
              )
              .reduce(
                (acc, tournament) => {
                  const month = format(tournament.startDate, "MMMM");
                  const key = month;
                  if (!acc[key]) {
                    acc[key] = [];
                  }
                  acc[key].push(tournament);
                  return acc;
                },
                {} as Record<string, typeof tournamentsWithStartDate>,
              ),
          ).map(([month, tournaments]) => ({
            month,
            monthSort: Number(
              `${season.year}${format(parse(month, "MMMM", new Date()), "MM")}`,
            ),
            tournaments,
          })),
          upcoming: Object.entries(
            season.tournaments
              .filter(
                (tournament) => tournament.tournamentStatus !== "COMPLETED",
              )
              .reduce(
                (acc, tournament) => {
                  const month = format(tournament.startDate, "MMMM");
                  const key = month;
                  if (!acc[key]) {
                    acc[key] = [];
                  }
                  acc[key].push(tournament);
                  return acc;
                },
                {} as Record<string, typeof tournamentsWithStartDate>,
              ),
          ).map(([month, tournaments]) => ({
            month,
            monthSort: Number(
              `${season.year}${format(parse(month, "MMMM", new Date()), "MM")}`,
            ),
            tournaments,
          })),
        }));
      });
  }
}

import { format, parse } from "date-fns";
import type { TransformedTournament } from "../tournament/tournament-transformer";

export type TransformedSchedule = ReturnType<typeof groupScheduleByYear>;

export function groupScheduleByYear(tournaments: TransformedTournament[]) {
  const tournamentsByYear = tournaments.reduce(
    (acc, tournament) => {
      const year = format(tournament.startDate, "yyyy");
      const key = year;
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(tournament);
      return acc;
    },
    {} as Record<string, typeof tournaments>,
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
        .filter((tournament) => tournament.tournamentStatus === "COMPLETED")
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
          {} as Record<string, typeof tournaments>,
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
        .filter((tournament) => tournament.tournamentStatus !== "COMPLETED")
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
          {} as Record<string, typeof tournaments>,
        ),
    ).map(([month, tournaments]) => ({
      month,
      monthSort: Number(
        `${season.year}${format(parse(month, "MMMM", new Date()), "MM")}`,
      ),
      tournaments,
    })),
  }));
}

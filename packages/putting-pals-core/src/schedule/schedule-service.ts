import { PgaTourWebScraper } from "@putting-pals/pga-tour-scaper/scraper";
import type { TourCode } from "@putting-pals/putting-pals-schema/types";
import { format, parse } from "date-fns";
import { CompetitionService } from "../competition/competition-service";
import { TournamentService } from "../tournament/tournament-service";
import { NotFoundError, NotImplementedError } from "../utils/service-error";
import { assertNever } from "../utils/type-utils";

export class ScheduleService {
  async getSchedule(tourCode: TourCode, year?: string) {
    switch (tourCode) {
      case "P":
        return this.getPuttingPalsSchedule(year);
      case "R":
        return this.getPgaTourSchedule();
    }
  }

  async getCurrentTournamentId(tourCode: TourCode) {
    switch (tourCode) {
      case "P":
        return this.getCurrentPuttingPalsTournamentId();
      case "R":
        return this.getCurrentPgaTourTournamentId();
      default:
        assertNever(tourCode);
    }
  }

  private async getPuttingPalsSchedule(year?: string) {
    if (year) {
      // TODO: implement
      throw new NotImplementedError(
        "Putting Pals schedule by year is not implemented",
      );
    }

    const competitions = new CompetitionService().getAllCompetitions();
    return new TournamentService()
      .getTournaments(
        competitions.map((competition) => competition.tournamentId),
      )
      .then((tournaments) => {
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
      });
  }

  private async getPgaTourSchedule() {
    // TODO: implement
    throw new NotImplementedError("PGA Tour schedule is not implemented");
  }

  private async getCurrentPgaTourTournamentId() {
    return new PgaTourWebScraper().getCurrentTournamentId();
  }

  private async getCurrentPuttingPalsTournamentId() {
    const competitions = new CompetitionService().getAllCompetitions();
    const competitionIds = competitions
      .filter((competition) => competition.competitors.length > 0)
      .map((competition) => competition.tournamentId);

    return new TournamentService()
      .getTournaments(competitionIds)
      .then((tournaments) => {
        const currentTournament = tournaments.sort((a, b) =>
          b.startDate.localeCompare(a.startDate),
        )[0];

        if (!currentTournament) {
          throw new NotFoundError("No tournament found");
        }

        return currentTournament.id;
      });
  }
}

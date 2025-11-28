import { ScheduleClient } from "@putting-pals/pga-tour-api/schedule";
import { PgaTourWebScraper } from "@putting-pals/pga-tour-scaper/scraper";
import type { TourCode } from "@putting-pals/putting-pals-schema/types";
import { parseISO } from "date-fns";
import { CompetitionService } from "../competition/competition-service";
import { TournamentService } from "../tournament/tournament-service";
import { NotFoundError } from "../utils/service-error";
import { assertNever } from "../utils/type-utils";
import { groupScheduleByYear } from "./schedule-grouper";
import { transformSchedule } from "./schedule-transformer";
import { transformScheduleYears } from "./schedule-years-transformer";

export class ScheduleService {
  async getScheduleYears(tourCode: TourCode) {
    switch (tourCode) {
      case "P":
        return this.getPuttingPalsScheduleYears();
      case "R":
        return this.getPgaTourScheduleYears();
      default:
        assertNever(tourCode);
    }
  }

  private async getPuttingPalsScheduleYears() {
    return Promise.all([
      this.getPgaTourScheduleYears(),
      this.getPuttingPalsHistoricalSchedule(),
    ]).then(([pgaTourScheduleYears, puttingPalsHistoricalSchedule]) => {
      return pgaTourScheduleYears.filter((year) =>
        puttingPalsHistoricalSchedule.some(
          (schedule) => schedule.year === year.queryValue,
        ),
      );
    });
  }

  private async getPgaTourScheduleYears() {
    return new ScheduleClient().getScheduleYears().then(transformScheduleYears);
  }

  async getSchedule(tourCode: TourCode, year?: string) {
    switch (tourCode) {
      case "P":
        return this.getPuttingPalsSchedule(year);
      case "R":
        return this.getPgaTourSchedule(year);
      default:
        assertNever(tourCode);
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

  private async getPuttingPalsHistoricalSchedule() {
    const competitions = new CompetitionService().getCompetitions();
    return new TournamentService()
      .getTournaments(
        competitions.map((competition) => competition.tournamentId),
      )
      .then(groupScheduleByYear);
  }

  private async getPuttingPalsSchedule(year?: string) {
    if (year) {
      return this.getPuttingPalsScheduleByYear(year);
    } else {
      return this.getPuttingPalsScheduleYears().then((scheduleYears) => {
        const currentYear = scheduleYears.find((year) => year.current);
        if (currentYear === undefined) {
          throw new NotFoundError("No current year found");
        }
        return this.getPuttingPalsScheduleByYear(currentYear.queryValue);
      });
    }
  }

  private async getPuttingPalsScheduleByYear(year: string) {
    return Promise.all([
      this.getPgaTourScheduleByYear(year),
      new TournamentService().getTournaments(
        new CompetitionService()
          .getCompetitions()
          .map((competition) => competition.tournamentId),
      ),
    ]).then(([schedule, tournaments]) => {
      const seasonTournamentIds = tournaments
        .filter(
          (tournament) =>
            parseISO(tournament.startDate).getFullYear() === schedule.yearSort,
        )
        .map((tournament) => tournament.id);
      return {
        year: schedule.year,
        yearSort: schedule.yearSort,
        completed: schedule.completed
          .filter(
            (month) =>
              month.tournaments.filter((tournament) =>
                seasonTournamentIds.includes(tournament.id),
              ).length > 0,
          )
          .map((month) => ({
            ...month,
            tournaments: month.tournaments.filter((tournament) =>
              seasonTournamentIds.includes(tournament.id),
            ),
          })),
        upcoming: schedule.upcoming
          .filter(
            (month) =>
              month.tournaments.filter((tournament) =>
                seasonTournamentIds.includes(tournament.id),
              ).length > 0,
          )
          .map((month) => ({
            ...month,
            tournaments: month.tournaments.filter((tournament) =>
              seasonTournamentIds.includes(tournament.id),
            ),
          })),
      };
    });
    // return this.getPuttingPalsHistoricalSchedule().then((groupedSchedule) => {
    //   const seasonSchedule = groupedSchedule.find(
    //     (season) => season.year === year,
    //   );
    //   if (seasonSchedule === undefined) {
    //     throw new NotFoundError(`Schedule for year=${year} not found`);
    //   }
    //   return seasonSchedule;
    // });
  }

  private async getPgaTourSchedule(year?: string) {
    if (year) {
      return this.getPgaTourScheduleByYear(year);
    } else {
      return this.getPgaTourScheduleYears().then((scheduleYears) => {
        const currentYear = scheduleYears.find((year) => year.current);
        if (currentYear === undefined) {
          throw new NotFoundError("No current year found");
        }
        return this.getPgaTourScheduleByYear(currentYear.queryValue);
      });
    }
  }

  private async getPgaTourScheduleByYear(year: string) {
    return new ScheduleClient()
      .getSchedule(year)
      .then((schedule) => transformSchedule(schedule));
  }

  private async getCurrentPgaTourTournamentId() {
    return new PgaTourWebScraper().getCurrentTournamentId();
  }

  private async getCurrentPuttingPalsTournamentId() {
    const competitions = new CompetitionService().getCompetitions();

    const oddsAvailableCompetition = competitions.find(
      (competition) =>
        competition.competitors.length === 0 &&
        competition.paddyPowerId !== undefined,
    );

    if (oddsAvailableCompetition !== undefined) {
      return oddsAvailableCompetition.tournamentId;
    }

    const inProgressCompetition = competitions.find(
      (competition) =>
        competition.competitors.length > 0 &&
        competition.winnerId === undefined &&
        competition.runnerUpId === undefined,
    );

    if (inProgressCompetition !== undefined) {
      return inProgressCompetition.tournamentId;
    }

    const competitionIds = competitions
      .filter((competition) => competition.competitors.length > 0)
      .map((competition) => competition.tournamentId);

    return new TournamentService()
      .getTournaments(competitionIds)
      .then((tournaments) => {
        const currentTournament = tournaments.sort((a, b) =>
          b.startDate.localeCompare(a.startDate),
        )[0];

        if (currentTournament === undefined) {
          throw new NotFoundError("No tournament found");
        }

        return currentTournament.id;
      });
  }
}

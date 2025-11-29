import { ScheduleClient } from "@putting-pals/pga-tour-api/schedule";
import type { TourCode } from "@putting-pals/putting-pals-schema/types";
import { parseISO } from "date-fns";
import { CompetitionService } from "../competition/competition-service";
import { TournamentService } from "../tournament/tournament-service";
import { NotFoundError } from "../utils/service-error";
import { assertNever } from "../utils/type-utils";
import { transformSchedule } from "./schedule-transformer";
import { ScheduleYearsService } from "./schedule-years-service";

export class ScheduleService {
  getSchedule(tourCode: TourCode, year?: string) {
    switch (tourCode) {
      case "P":
        return this.getPuttingPalsSchedule(year);
      case "R":
        return this.getPgaTourSchedule(year);
      default:
        assertNever(tourCode);
    }
  }

  private async getPuttingPalsSchedule(year?: string) {
    if (year) {
      return this.getPuttingPalsScheduleByYear(year);
    } else {
      const scheduleYears = await new ScheduleYearsService().getScheduleYears(
        "P",
      );
      const currentYear = scheduleYears.find((year) => year.current);
      if (currentYear === undefined) {
        throw new NotFoundError("No current year found");
      }
      return this.getPuttingPalsScheduleByYear(currentYear.queryValue);
    }
  }

  private async getPuttingPalsScheduleByYear(year: string) {
    const [schedule, tournaments] = await Promise.all([
      this.getPgaTourScheduleByYear(year),
      new TournamentService().getTournaments(
        new CompetitionService()
          .getCompetitions()
          .map((competition) => competition.tournamentId),
      ),
    ]);
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
  }

  private async getPgaTourSchedule(year?: string) {
    if (year) {
      return this.getPgaTourScheduleByYear(year);
    } else {
      const scheduleYears = await new ScheduleYearsService().getScheduleYears(
        "R",
      );
      const currentYear = scheduleYears.find((year) => year.current);
      if (currentYear === undefined) {
        throw new NotFoundError("No current year found");
      }
      return this.getPgaTourScheduleByYear(currentYear.queryValue);
    }
  }

  private async getPgaTourScheduleByYear(year: string) {
    const schedule = await new ScheduleClient().getSchedule(year);
    return transformSchedule(schedule);
  }
}

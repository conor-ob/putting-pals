import { ScheduleClient } from "@putting-pals/pga-tour-api/schedule";
import type { TourCode } from "@putting-pals/putting-pals-schema/types";
import { CompetitionService } from "../competition/competition-service";
import { assertNever } from "../utils/type-utils";
import {
  transformSchedule,
  transformScheduleTournament,
} from "./schedule-transformer";

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

  getUpcomingSchedule(tourCode: TourCode) {
    switch (tourCode) {
      case "P":
        return this.getPuttingPalsUpcomingSchedule();
      case "R":
        return this.getPgaTourUpcomingSchedule();
      default:
        assertNever(tourCode);
    }
  }

  private async getPuttingPalsSchedule(year?: string) {
    const competitionIds = new CompetitionService()
      .getCompetitions()
      .map((competition) => competition.tournamentId);
    const pgaTourSchedule = await this.getPgaTourSchedule(year);
    return pgaTourSchedule
      .filter((season) => {
        const completedTournamentIds = season.completed.flatMap((month) =>
          month.tournaments.map((tournament) => tournament.id),
        );
        const upcomingTournamentIds = season.upcoming.flatMap((month) =>
          month.tournaments.map((tournament) => tournament.id),
        );
        return (
          completedTournamentIds.some((tournamentId) =>
            competitionIds.includes(tournamentId),
          ) ||
          upcomingTournamentIds.some((tournamentId) =>
            competitionIds.includes(tournamentId),
          )
        );
      })
      .map((season) => ({
        ...season,
        completed: season.completed
          .filter(
            (month) =>
              month.tournaments.filter((tournament) =>
                competitionIds.includes(tournament.id),
              ).length > 0,
          )
          .map((month) => ({
            ...month,
            tournaments: month.tournaments.filter((tournament) =>
              competitionIds.includes(tournament.id),
            ),
          })),
        upcoming: season.upcoming
          .filter(
            (month) =>
              month.tournaments.filter((tournament) =>
                competitionIds.includes(tournament.id),
              ).length > 0,
          )
          .map((month) => ({
            ...month,
            tournaments: month.tournaments.filter((tournament) =>
              competitionIds.includes(tournament.id),
            ),
          })),
      }));
  }

  private async getPgaTourSchedule(year?: string) {
    if (year) {
      const schedule = await new ScheduleClient().getSchedule(year);
      return [transformSchedule(schedule)];
    } else {
      const schedules = await new ScheduleClient().getCompleteSchedule();
      return schedules.map(transformSchedule);
    }
  }

  private async getPuttingPalsUpcomingSchedule() {
    const competitionIds = new CompetitionService()
      .getCompetitions()
      .map((competition) => competition.tournamentId);
    const upcomingSchedule = await this.getPgaTourUpcomingSchedule();
    return {
      ...upcomingSchedule,
      tournaments: upcomingSchedule.tournaments.filter((tournament) =>
        competitionIds.includes(tournament.id),
      ),
    };
  }

  private async getPgaTourUpcomingSchedule() {
    const upcomingSchedule = await new ScheduleClient().getUpcomingSchedule();
    return {
      ...upcomingSchedule,
      tournaments: upcomingSchedule.tournaments.map(
        transformScheduleTournament,
      ),
    };
  }
}

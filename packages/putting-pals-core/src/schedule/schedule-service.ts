import { ScheduleClient } from "@putting-pals/pga-tour-api/schedule";
import {
  RoundStatus,
  RoundStatusColor,
  type ScheduleTournament,
} from "@putting-pals/pga-tour-schema/types";
import type { TourCode } from "@putting-pals/putting-pals-schema/types";
import {
  assertNever,
  type RecursivePartial,
} from "@putting-pals/putting-pals-utils/type-utils";
import { CompetitionService } from "../competition/competition-service";
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
    function filterScheduleMonths(
      months: ReturnType<typeof transformSchedule>["completed" | "upcoming"],
    ) {
      return months
        .filter(
          (month) =>
            month.tournaments.filter((tournament) =>
              puttingPalsTournamentIds.includes(tournament.id),
            ).length > 0,
        )
        .map((month) => ({
          ...month,
          tournaments: month.tournaments.filter((tournament) =>
            puttingPalsTournamentIds.includes(tournament.id),
          ),
        }));
    }

    const puttingPalsTournamentIds = new CompetitionService()
      .getCompetitions()
      .map((competition) => competition.tournamentId);
    const pgaTourSchedule = await this.getPgaTourSchedule(year);
    return pgaTourSchedule
      .filter((season) => {
        const pgaTourTournamentIds = [
          ...season.completed,
          ...season.upcoming,
        ].flatMap((month) =>
          month.tournaments.map((tournament) => tournament.id),
        );
        return pgaTourTournamentIds.some((tournamentId) =>
          puttingPalsTournamentIds.includes(tournamentId),
        );
      })
      .map((season) => ({
        ...season,
        completed: filterScheduleMonths(season.completed),
        upcoming: filterScheduleMonths(season.upcoming),
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
    const pgaTourUpcomingSchedule = await this.getPgaTourUpcomingSchedule();
    const upcomingTournaments = pgaTourUpcomingSchedule.tournaments.filter(
      (tournament) => competitionIds.includes(tournament.id),
    );

    if (upcomingTournaments.length === 0) {
      const puttingPalsCompleteSchedule = await this.getPuttingPalsSchedule();
      return {
        tournaments: puttingPalsCompleteSchedule
          .flatMap((season) => season.upcoming)
          .flatMap((month) => month.tournaments)
          .slice(0, pgaTourUpcomingSchedule.tournaments.length)
          .map((tournament) => {
            if (tournament.status === undefined) {
              return {
                ...tournament,
                status: {
                  leaderboardTakeover: false, // TODO: remove
                  roundDisplay: "",
                  roundStatus: RoundStatus.Upcoming,
                  roundStatusColor: RoundStatusColor.Gray,
                  roundStatusDisplay: "Upcoming",
                },
              } satisfies RecursivePartial<ScheduleTournament>;
            }
            return tournament;
          }),
      };
    }

    return {
      tournaments: upcomingTournaments,
    };
  }

  private async getPgaTourUpcomingSchedule() {
    const upcomingSchedule = await new ScheduleClient().getUpcomingSchedule();
    return {
      tournaments: upcomingSchedule.tournaments.map(
        transformScheduleTournament,
      ),
    };
  }
}

import type {
  CompetitionService,
  DomainSchedule,
  DomainScheduleUpcoming,
  DomainTourCode,
  ScheduleClient,
  ScheduleService,
} from "@putting-pals/putting-pals-schema";
import { UnsupportedTourCodeError } from "../utils/service-error";
import {
  transformSchedule,
  transformScheduleTournament,
} from "./schedule-transformer";

export class ScheduleServiceImpl implements ScheduleService {
  constructor(
    private readonly scheduleClient: ScheduleClient,
    private readonly competitionService: CompetitionService,
  ) {
    this.scheduleClient = scheduleClient;
    this.competitionService = competitionService;
  }

  getSchedule(
    tourCode: DomainTourCode,
    year?: string,
  ): Promise<readonly DomainSchedule[]> {
    switch (tourCode) {
      case "P":
        return this.getPuttingPalsSchedule(year);
      case "R":
        return this.getPgaTourSchedule(year);
      default:
        throw new UnsupportedTourCodeError(tourCode);
    }
  }

  getUpcomingSchedule(
    tourCode: DomainTourCode,
  ): Promise<DomainScheduleUpcoming> {
    switch (tourCode) {
      case "P":
        return this.getPuttingPalsUpcomingSchedule();
      case "R":
        return this.getPgaTourUpcomingSchedule();
      default:
        throw new UnsupportedTourCodeError(tourCode);
    }
  }

  private async getPuttingPalsSchedule(
    year?: string,
  ): Promise<readonly DomainSchedule[]> {
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

    const puttingPalsTournamentIds = this.competitionService
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

  private async getPgaTourSchedule(
    year?: string,
  ): Promise<readonly DomainSchedule[]> {
    if (year) {
      const schedule = await this.scheduleClient.getSchedule(year);
      return [transformSchedule(schedule)];
    } else {
      const schedules = await this.scheduleClient.getCompleteSchedule();
      return schedules.map(transformSchedule);
    }
  }

  private async getPuttingPalsUpcomingSchedule(): Promise<DomainScheduleUpcoming> {
    const competitionIds = this.competitionService
      .getCompetitions()
      .map((competition) => competition.tournamentId);
    const pgaTourUpcomingSchedule = await this.getPgaTourUpcomingSchedule();
    const upcomingTournaments = pgaTourUpcomingSchedule.tournaments.filter(
      (tournament) => competitionIds.includes(tournament.id),
    );

    if (upcomingTournaments.length === 0) {
      const puttingPalsCompleteSchedule = await this.getPuttingPalsSchedule();
      return {
        ...pgaTourUpcomingSchedule,
        tournaments: puttingPalsCompleteSchedule
          .flatMap((season) => season.upcoming)
          .flatMap((month) => month.tournaments)
          .slice(0, pgaTourUpcomingSchedule.tournaments.length)
          .map((tournament) => {
            if (tournament.status === undefined) {
              return {
                ...tournament,
                status: {
                  __typename: "ScheduleTournamentStatus" as const,
                  leaderboardTakeover: false,
                  roundDisplay: "",
                  roundStatus: "UPCOMING",
                  roundStatusColor: "GRAY",
                  roundStatusDisplay: "Upcoming",
                },
              };
            }
            return tournament;
          }),
      };
    }

    return {
      ...pgaTourUpcomingSchedule,
      tournaments: upcomingTournaments,
    };
  }

  private async getPgaTourUpcomingSchedule(): Promise<DomainScheduleUpcoming> {
    const upcomingSchedule = await this.scheduleClient.getUpcomingSchedule();
    return {
      ...upcomingSchedule,
      tournaments: upcomingSchedule.tournaments.map(
        transformScheduleTournament,
      ),
    };
  }
}

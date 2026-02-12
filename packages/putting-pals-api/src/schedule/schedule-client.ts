import type {
  CompetitionRepository,
  Schedule,
  ScheduleClient,
  ScheduleUpcoming,
  TourCode,
} from "@putting-pals/putting-pals-core";

export class PuttingPalsApiScheduleClient implements ScheduleClient {
  constructor(
    private readonly competitionRepository: CompetitionRepository,
    private readonly pgaTourApiScheduleClient: ScheduleClient,
  ) {
    this.competitionRepository = competitionRepository;
    this.pgaTourApiScheduleClient = pgaTourApiScheduleClient;
  }

  async getSchedule(_tourCode: TourCode, year?: string): Promise<Schedule> {
    const schedule = await this.getPuttingPalsSchedule(year);
    // biome-ignore lint/style/noNonNullAssertion: TODO
    return schedule[0]!;
  }

  getCompleteSchedule(_tourCode: TourCode): Promise<Schedule[]> {
    return this.getPuttingPalsSchedule();
  }

  getUpcomingSchedule(_tourCode: TourCode): Promise<ScheduleUpcoming> {
    return this.getPuttingPalsUpcomingSchedule();
  }

  private async getPuttingPalsSchedule(year?: string): Promise<Schedule[]> {
    function filterScheduleMonths(months: Schedule["completed" | "upcoming"]) {
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

    const puttingPalsTournamentIds = this.competitionRepository
      .getCompetitions()
      .map((competition) => competition.tournamentId);
    const pgaTourSchedule = await this.getPgaTourSchedule("pga", year);
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
    tourCode: TourCode,
    year?: string,
  ): Promise<Schedule[]> {
    if (year) {
      const schedule = await this.pgaTourApiScheduleClient.getSchedule(
        tourCode,
        year,
      );
      return [schedule];
    } else {
      const schedules =
        await this.pgaTourApiScheduleClient.getCompleteSchedule(tourCode);
      return schedules;
    }
  }

  private async getPuttingPalsUpcomingSchedule(): Promise<ScheduleUpcoming> {
    const competitionIds = this.competitionRepository
      .getCompetitions()
      .map((competition) => competition.tournamentId);
    const pgaTourUpcomingSchedule =
      await this.getPgaTourUpcomingSchedule("pga");
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

  private async getPgaTourUpcomingSchedule(
    tourCode: TourCode,
  ): Promise<ScheduleUpcoming> {
    const upcomingSchedule =
      await this.pgaTourApiScheduleClient.getUpcomingSchedule(tourCode);
    return {
      ...upcomingSchedule,
      tournaments: upcomingSchedule.tournaments,
    };
  }
}

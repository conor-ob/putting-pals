import {
  AbstractScheduleClient,
  type Competition,
  type CompetitionRepository,
  type Schedule,
  type ScheduleClient,
  type TourCode,
} from "@putting-pals/putting-pals-core";

type AggregateSchedule = {
  pgaTourSchedule: Schedule[];
  competitions: Competition[];
};

export class PuttingPalsApiScheduleClient extends AbstractScheduleClient<AggregateSchedule> {
  constructor(
    private readonly competitionRepository: CompetitionRepository,
    private readonly pgaTourApiScheduleClient: ScheduleClient,
  ) {
    super();
    this.competitionRepository = competitionRepository;
    this.pgaTourApiScheduleClient = pgaTourApiScheduleClient;
  }

  override async getScheduleRemote(
    _tourCode: TourCode,
    year?: string,
  ): Promise<AggregateSchedule> {
    const [pgaTourSchedule, competitions] = await Promise.all([
      this.pgaTourApiScheduleClient.getSchedule("pga", year),
      this.competitionRepository.getCompetitions(),
    ]);
    return {
      pgaTourSchedule,
      competitions,
    };
  }

  override mapSchedule(aggregateSchedule: AggregateSchedule): Schedule[] {
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
    const pgaTourSchedule = aggregateSchedule.pgaTourSchedule;
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
}

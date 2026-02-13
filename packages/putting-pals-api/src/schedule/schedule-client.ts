import {
  AbstractScheduleClient,
  type Competition,
  type CompetitionRepository,
  type Schedule,
  type ScheduleClient,
  type TourCode,
} from "@putting-pals/putting-pals-core";

type AggregateSchedule = {
  pgaTourSchedule: Schedule;
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
    tourCode: TourCode,
    year?: string,
  ): Promise<AggregateSchedule> {
    const [pgaTourSchedule, competitions] = await Promise.all([
      this.pgaTourApiScheduleClient.getSchedule(tourCode, year),
      this.competitionRepository.getCompetitions(),
    ]);
    return {
      pgaTourSchedule,
      competitions,
    };
  }

  override mapSchedule(aggregateSchedule: AggregateSchedule): Schedule {
    const puttingPalsTournamentIds = this.competitionRepository
      .getCompetitions()
      .map((competition) => competition.tournamentId);
    const pgaTourSchedule = aggregateSchedule.pgaTourSchedule;
    return {
      completed: pgaTourSchedule.completed.filter((tournament) =>
        puttingPalsTournamentIds.includes(tournament.id),
      ),
      upcoming: pgaTourSchedule.upcoming.filter((tournament) =>
        puttingPalsTournamentIds.includes(tournament.id),
      ),
    };
  }
}

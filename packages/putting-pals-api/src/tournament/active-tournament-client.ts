import {
  type ActiveTournamentClient,
  type CompetitionRepository,
  NotFoundError,
  type TourCode,
  type TournamentClient,
} from "@putting-pals/putting-pals-core";

export class PuttingPalsApiActiveTournamentClient
  implements ActiveTournamentClient
{
  constructor(
    private readonly competitionRepository: CompetitionRepository,
    private readonly pgaTourApiTournamentClient: TournamentClient,
  ) {
    this.competitionRepository = competitionRepository;
    this.pgaTourApiTournamentClient = pgaTourApiTournamentClient;
  }

  async getActiveTournamentId(
    _tourCode: TourCode,
  ): Promise<string | undefined> {
    const competitions = this.competitionRepository.getCompetitions();

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

    const tournaments =
      await this.pgaTourApiTournamentClient.getTournaments(competitionIds);
    const activeTournament = [...tournaments].sort((a, b) =>
      b.schedule.startDate.localeCompare(a.schedule.startDate),
    )[0];

    if (activeTournament === undefined) {
      throw new NotFoundError("No tournament found");
    }

    return activeTournament.id;
  }
}

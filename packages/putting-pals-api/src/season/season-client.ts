import {
  AbstractSeasonClient,
  type BatchTournamentClient,
  type CompetitionRepository,
  type Season,
  type SeasonClient,
  type TourCode,
  type Tournament,
} from "@putting-pals/putting-pals-core";
import { parseISO } from "date-fns";

export class PuttingPalsApiSeasonClient extends AbstractSeasonClient<{
  pgaTourSeasons: Season[];
  puttingPalsBatchTournaments: Tournament[];
}> {
  constructor(
    private readonly competitionRepository: CompetitionRepository,
    private readonly pgaTourApiBatchTournamentClient: BatchTournamentClient,
    private readonly pgaTourApiSeasonClient: SeasonClient,
  ) {
    super();
    this.competitionRepository = competitionRepository;
    this.pgaTourApiBatchTournamentClient = pgaTourApiBatchTournamentClient;
    this.pgaTourApiSeasonClient = pgaTourApiSeasonClient;
  }

  override async getSeasonsRemote(_tourCode: TourCode): Promise<{
    pgaTourSeasons: Season[];
    puttingPalsBatchTournaments: Tournament[];
  }> {
    const competitions = this.competitionRepository.getCompetitions();
    const tournamentIds = competitions.map(
      (competition) => competition.tournamentId,
    );
    const [pgaTourSeasons, puttingPalsBatchTournaments] = await Promise.all([
      this.pgaTourApiSeasonClient.getSeasons("pga"),
      this.pgaTourApiBatchTournamentClient.getTournaments(tournamentIds),
    ]);
    return {
      pgaTourSeasons,
      puttingPalsBatchTournaments,
    };
  }

  override mapSeasons(seasons: {
    pgaTourSeasons: Season[];
    puttingPalsBatchTournaments: Tournament[];
  }): Season[] {
    return seasons.pgaTourSeasons.filter((season) => {
      return seasons.puttingPalsBatchTournaments.some((tournament) => {
        return (
          parseISO(tournament.schedule.startDate).getFullYear() === season.value
        );
      });
    });
  }
}

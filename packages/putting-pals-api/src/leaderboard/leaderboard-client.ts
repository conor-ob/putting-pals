import {
  AbstractLeaderboardClient,
  type CompetitionRepository,
  type Leaderboard,
  type LeaderboardClient,
  NotFoundError,
  type TourCode,
} from "@putting-pals/putting-pals-core";
import { aggregateLeaderboard } from "./leaderboard-aggregator";

export class PuttingPalsApiLeaderboardClient extends AbstractLeaderboardClient<Leaderboard> {
  constructor(
    private readonly competitionRepository: CompetitionRepository,
    private readonly pgaTourApiLeaderboardClient: LeaderboardClient,
  ) {
    super();
    this.competitionRepository = competitionRepository;
    this.pgaTourApiLeaderboardClient = pgaTourApiLeaderboardClient;
  }

  override async getLeaderboardRemote(
    tourCode: TourCode,
    id: string,
  ): Promise<Leaderboard> {
    const leaderboard = await this.pgaTourApiLeaderboardClient.getLeaderboard(
      tourCode,
      id,
    );
    return leaderboard;
  }

  override mapLeaderboard(leaderboard: Leaderboard): Leaderboard {
    const competition = this.competitionRepository.getCompetition(
      leaderboard.id,
    );
    if (competition === undefined) {
      throw new NotFoundError(
        `Competition with id=${leaderboard.id} not found`,
      );
    }
    return aggregateLeaderboard(leaderboard, competition);
  }
}

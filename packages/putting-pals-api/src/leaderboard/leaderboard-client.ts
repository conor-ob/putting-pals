import {
  type CompetitionRepository,
  type LeaderboardClient,
  type LeaderboardV3,
  NotFoundError,
  type TourCode,
} from "@putting-pals/putting-pals-core";
import { aggregateLeaderboard } from "./leaderboard-aggregator";

export class PuttingPalsApiLeaderboardClient implements LeaderboardClient {
  constructor(
    private readonly competitionRepository: CompetitionRepository,
    private readonly pgaTourApiLeaderboardClient: LeaderboardClient,
  ) {
    this.competitionRepository = competitionRepository;
    this.pgaTourApiLeaderboardClient = pgaTourApiLeaderboardClient;
  }

  async getLeaderboard(tourCode: TourCode, id: string): Promise<LeaderboardV3> {
    const competition = this.competitionRepository.getCompetition(id);
    if (competition === undefined) {
      throw new NotFoundError(`Competition with id=${id} not found`);
    }
    const leaderboard = await this.pgaTourApiLeaderboardClient.getLeaderboard(
      tourCode,
      id,
    );
    return aggregateLeaderboard(leaderboard, competition);
  }
}

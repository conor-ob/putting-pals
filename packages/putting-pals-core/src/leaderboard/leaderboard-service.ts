import type {
  CompetitionService,
  LeaderboardClient,
  LeaderboardHoleByHole,
  LeaderboardService,
  LeaderboardV3,
  TourCode,
  TournamentResolver,
} from "@putting-pals/putting-pals-api";
import { UnsupportedTourCodeError } from "@putting-pals/putting-pals-api";
import { aggregateLeaderboard } from "./leaderboard-aggregator";
import { transformLeaderboard } from "./leaderboard-utils";

export class LeaderboardServiceImpl implements LeaderboardService {
  constructor(
    private readonly leaderboardClient: LeaderboardClient,
    private readonly tournamentResolver: TournamentResolver,
    private readonly competitionService: CompetitionService,
  ) {
    this.leaderboardClient = leaderboardClient;
    this.tournamentResolver = tournamentResolver;
    this.competitionService = competitionService;
  }

  async getLeaderboard(
    tourCode: TourCode,
    id?: string,
  ): Promise<LeaderboardV3> {
    const tournamentId = await this.resolveTournamentId(tourCode, id);
    switch (tourCode) {
      case "P":
        return this.getPuttingPalsLeaderboardById(tournamentId);
      case "R":
        return this.getPgaTourLeaderboardById(tournamentId);
      default:
        throw new UnsupportedTourCodeError(tourCode);
    }
  }

  getLeaderboardHoleByHole(
    id: string,
    round: number,
  ): Promise<LeaderboardHoleByHole> {
    return this.leaderboardClient.getLeaderboardHoleByHole(id, round);
  }

  private async resolveTournamentId(
    tourCode: TourCode,
    id?: string,
  ): Promise<string> {
    if (id === undefined) {
      return await this.tournamentResolver.getCurrentTournamentId(tourCode);
    }
    return id;
  }

  private async getPuttingPalsLeaderboardById(
    id: string,
  ): Promise<LeaderboardV3> {
    const competition = this.competitionService.getCompetition(id);
    const pgaTourLeaderboard = await this.getPgaTourLeaderboardById(id);
    return aggregateLeaderboard(pgaTourLeaderboard, competition);
  }

  private async getPgaTourLeaderboardById(id: string): Promise<LeaderboardV3> {
    const leaderboard = await this.leaderboardClient.getLeaderboard(id);
    return transformLeaderboard(leaderboard);
  }
}

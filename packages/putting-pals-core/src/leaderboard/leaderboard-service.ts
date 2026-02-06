import type { CompetitionService } from "../competition/interfaces/inbound/competition-service";
import { UnsupportedTourCodeError } from "../error/service-error";
import type { TourCode } from "../tour/domain/types";
import type { TournamentResolver } from "../tournament/interfaces/inbound/tournament-resolver";
import type { LeaderboardV3 } from "./domain/types";
import type { LeaderboardService } from "./interfaces/inbound/leaderboard-service";
import type { LeaderboardClient } from "./interfaces/outbound/leaderboard-client";
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
    const tournamentId = await this.tournamentResolver.getActiveTournamentId(
      tourCode,
      id,
    );
    switch (tourCode) {
      case "putting-pals-tour":
        return this.getPuttingPalsLeaderboardById(tournamentId);
      case "pga-tour":
      case "pga-tour-champions":
      case "pga-tour-americas":
      case "korn-ferry-tour":
        return this.getPgaTourLeaderboardById(tournamentId);
      default:
        throw new UnsupportedTourCodeError(tourCode);
    }
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

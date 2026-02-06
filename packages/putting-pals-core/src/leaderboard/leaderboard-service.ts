import { UnsupportedTourCodeError } from "../error/service-error";
import type { TourCode } from "../tour/domain/types";
import type { ActiveTournamentService } from "../tournament/interfaces/inbound/active-tournament-service";
import type { LeaderboardV3 } from "./domain/types";
import type { LeaderboardService } from "./interfaces/inbound/leaderboard-service";
import type { LeaderboardClient } from "./interfaces/outbound/leaderboard-client";

export class LeaderboardServiceImpl implements LeaderboardService {
  constructor(
    private readonly puttingPalsApiLeaderboardClient: LeaderboardClient,
    private readonly pgaTourApiLeaderboardClient: LeaderboardClient,
    private readonly espnSportsApiLeaderboardClient: LeaderboardClient,
    private readonly activeTournamentService: ActiveTournamentService,
  ) {
    this.puttingPalsApiLeaderboardClient = puttingPalsApiLeaderboardClient;
    this.pgaTourApiLeaderboardClient = pgaTourApiLeaderboardClient;
    this.espnSportsApiLeaderboardClient = espnSportsApiLeaderboardClient;
    this.activeTournamentService = activeTournamentService;
  }

  async getLeaderboard(
    tourCode: TourCode,
    id?: string,
  ): Promise<LeaderboardV3> {
    const tournamentId =
      await this.activeTournamentService.getActiveTournamentId(tourCode, id);
    switch (tourCode) {
      case "putting-pals-tour":
        return this.puttingPalsApiLeaderboardClient.getLeaderboard(
          tournamentId,
        );
      case "pga-tour":
      case "korn-ferry-tour":
      case "pga-tour-champions":
      case "pga-tour-americas":
        return this.pgaTourApiLeaderboardClient.getLeaderboard(tournamentId);
      case "dp-world-tour":
      case "liv-golf-tour":
        return this.espnSportsApiLeaderboardClient.getLeaderboard(tournamentId);
      default:
        throw new UnsupportedTourCodeError(tourCode);
    }
  }
}

import { UnsupportedTourCodeError } from "../error/service-error";
import type { TourCode } from "../tour/domain/types";
import type { ActiveTournamentService } from "../tournament/interfaces/inbound/active-tournament-service";
import type { Leaderboard } from "./domain/types";
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

  async getLeaderboard(tourCode: TourCode, id?: string): Promise<Leaderboard> {
    const tournamentId =
      await this.activeTournamentService.getActiveTournamentId(tourCode, id);
    switch (tourCode) {
      case "pal":
        return this.puttingPalsApiLeaderboardClient.getLeaderboard(
          tourCode,
          tournamentId,
        );
      case "pga":
      case "dev":
      case "snr":
      case "pam":
        return this.pgaTourApiLeaderboardClient.getLeaderboard(
          tourCode,
          tournamentId,
        );
      case "eur":
      case "liv":
        return this.espnSportsApiLeaderboardClient.getLeaderboard(
          tourCode,
          tournamentId,
        );
      default:
        throw new UnsupportedTourCodeError(tourCode);
    }
  }
}

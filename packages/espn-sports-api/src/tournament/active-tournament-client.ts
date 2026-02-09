import type {
  ActiveTournamentClient,
  TourCode,
} from "@putting-pals/putting-pals-core";
import type { EspnSportsApi } from "../api/EspnSportsApi";

export class EspnSportsApiActiveTournamentClient
  implements ActiveTournamentClient
{
  constructor(private readonly espnSportsApi: EspnSportsApi) {
    this.espnSportsApi = espnSportsApi;
  }

  async getActiveTournamentId(tourCode: TourCode): Promise<string | undefined> {
    const leaderboard = await this.espnSportsApi.getLeaderboard(tourCode);
    return leaderboard.events[0]?.id;
  }
}

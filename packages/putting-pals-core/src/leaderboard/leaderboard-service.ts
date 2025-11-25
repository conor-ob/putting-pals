import { LeaderboardClient } from "@putting-pals/pga-tour-api/leaderboard";
import { PgaTourWebScraper } from "@putting-pals/pga-tour-scaper/scraper";
import { transformLeaderboard } from "./leaderboard-transformer";

export class LeaderboardService {
  private readonly pgaTourApiKey: string;

  constructor(pgaTourApiKey: string) {
    this.pgaTourApiKey = pgaTourApiKey;
  }

  async getLeaderboard(id?: string) {
    if (id) {
      return this.getLeaderboardById(id);
    } else {
      return new PgaTourWebScraper()
        .getCurrentTournamentId()
        .then((id) => this.getLeaderboardById(id));
    }
  }

  private async getLeaderboardById(id: string) {
    return new LeaderboardClient(this.pgaTourApiKey)
      .getLeaderboard(id)
      .then(transformLeaderboard);
  }
}

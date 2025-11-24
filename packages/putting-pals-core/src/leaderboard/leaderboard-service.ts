import { LeaderboardClient } from "@putting-pals/pga-tour-api/leaderboard";
import { PgaTourWebScraper } from "@putting-pals/pga-tour-scaper/scraper";
import { getCountryFlag } from "./flag-utils";

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
      .then((leaderboard) => {
        return {
          ...leaderboard,
          players: leaderboard.players.map((row) => {
            if (row.__typename === "PlayerRowV3") {
              return {
                ...row,
                player: {
                  ...row.player,
                  countryFlag: getCountryFlag({
                    id: row.player.id,
                    countryFlag: row.player.countryFlag,
                  }),
                },
              } satisfies typeof row;
            } else {
              return row;
            }
          }),
        };
      });
  }
}

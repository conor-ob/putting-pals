import { TournamentClient } from "@putting-pals/pga-tour-api/tournament";
import { PgaTourWebScraper } from "@putting-pals/pga-tour-scaper/scraper";
import { transformTournament } from "./tournament-transformer";

export class TournamentService {
  private readonly pgaTourApiKey: string;

  constructor(pgaTourApiKey: string) {
    this.pgaTourApiKey = pgaTourApiKey;
  }

  // TODO: get by tournament id or competition id
  async getTournament(id?: string) {
    if (id) {
      return this.getTournamentById(id);
    } else {
      return new PgaTourWebScraper()
        .getCurrentTournamentId()
        .then((id) => this.getTournamentById(id));
    }
  }

  private async getTournamentById(id: string) {
    return this.getTournamentsByIds([id]).then((tournaments) => {
      const tournament = tournaments[0];
      if (tournament) {
        return tournament;
      } else {
        // TODO: error handling
        throw new Error(`Tournament with id=${id} not found`);
      }
    });
  }

  private async getTournamentsByIds(ids: string[]) {
    return (
      await new TournamentClient(this.pgaTourApiKey).getTournaments(ids)
    ).map(transformTournament);
  }
}

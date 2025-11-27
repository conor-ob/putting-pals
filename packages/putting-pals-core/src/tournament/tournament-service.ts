import { TournamentClient } from "@putting-pals/pga-tour-api/tournament";
import { PgaTourWebScraper } from "@putting-pals/pga-tour-scaper/scraper";
import { NotFoundError } from "../utils/service-error";
import { transformTournament } from "./tournament-transformer";

export class TournamentService {
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

  async getTournaments(ids: string[]) {
    return new TournamentClient()
      .getTournaments(ids)
      .then((tournaments) => tournaments.map(transformTournament));
  }

  private async getTournamentById(id: string) {
    return this.getTournaments([id]).then((tournaments) => {
      const tournament = tournaments[0];
      if (tournament) {
        return tournament;
      } else {
        throw new NotFoundError(`Tournament with id=${id} not found`);
      }
    });
  }
}

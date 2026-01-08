import { TournamentClient } from "@putting-pals/pga-tour-api/tournament";
import type { TourCode } from "@putting-pals/putting-pals-schema/types";
import { NotFoundError } from "../utils/service-error";
import { TournamentResolver } from "./tournament-resolver";
import { transformTournament } from "./tournament-utils";
export class TournamentService {
  async getTournament(tourCode: TourCode, id?: string) {
    const tournamentId = await this.resolveTournamentId(tourCode, id);
    return this.getTournamentById(tournamentId);
  }

  private async resolveTournamentId(tourCode: TourCode, id?: string) {
    if (id === undefined) {
      return new TournamentResolver().getCurrentTournamentId(tourCode);
    }
    return id;
  }

  async getTournaments(ids: string[]) {
    const tournaments = await new TournamentClient().getTournaments(ids);
    return tournaments.map(transformTournament);
  }

  private async getTournamentById(id: string) {
    const tournaments = await this.getTournaments([id]);
    const tournament = tournaments[0];
    if (tournament === undefined) {
      throw new NotFoundError(`Tournament with id=${id} not found`);
    }
    return tournament;
  }
}

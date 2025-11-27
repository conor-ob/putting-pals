import { TournamentClient } from "@putting-pals/pga-tour-api/tournament";
import type { TourCode } from "@putting-pals/putting-pals-schema/types";
import { ScheduleService } from "../schedule/schedule-service";
import { NotFoundError } from "../utils/service-error";
import { transformTournament } from "./tournament-transformer";

export class TournamentService {
  async getTournament(tourCode: TourCode, id?: string) {
    if (id) {
      return this.getTournamentById(id);
    } else {
      return new ScheduleService()
        .getCurrentTournamentId(tourCode)
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

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
      const currentTournamentId =
        await new ScheduleService().getCurrentTournamentId(tourCode);
      return this.getTournamentById(currentTournamentId);
    }
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

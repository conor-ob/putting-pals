import { NotFoundError } from "../error/service-error";
import type { TourCode } from "../tour/domain/types";
import type { Tournament } from "./domain/types";
import type { TournamentResolver } from "./interfaces/inbound/tournament-resolver";
import type { TournamentService } from "./interfaces/inbound/tournament-service";
import type { TournamentClient } from "./interfaces/outbound/tournament-client";
import { transformTournament } from "./tournament-utils";

export class TournamentServiceImpl implements TournamentService {
  constructor(
    private readonly tournamentClient: TournamentClient,
    private readonly tournamentResolver: TournamentResolver,
  ) {
    this.tournamentClient = tournamentClient;
    this.tournamentResolver = tournamentResolver;
  }

  async getTournament(tourCode: TourCode, id?: string): Promise<Tournament> {
    const tournamentId = await this.tournamentResolver.getActiveTournamentId(
      tourCode,
      id,
    );
    return this.getTournamentById(tournamentId);
  }

  async getTournaments(ids: string[]): Promise<Tournament[]> {
    const tournaments = await this.tournamentClient.getTournaments(ids);
    return tournaments.map(transformTournament);
  }

  private async getTournamentById(id: string): Promise<Tournament> {
    const tournaments = await this.getTournaments([id]);
    const tournament = tournaments[0];
    if (tournament === undefined) {
      throw new NotFoundError(`Tournament with id=${id} not found`);
    }
    return tournament;
  }
}

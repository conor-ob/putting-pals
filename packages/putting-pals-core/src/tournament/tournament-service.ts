import type {
  TourCode,
  Tournament,
  TournamentClient,
  TournamentResolver,
  TournamentService,
} from "@putting-pals/putting-pals-api";
import { NotFoundError } from "../utils/service-error";
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
    const tournamentId = await this.resolveTournamentId(tourCode, id);
    return this.getTournamentById(tournamentId);
  }

  private async resolveTournamentId(
    tourCode: TourCode,
    id?: string,
  ): Promise<string> {
    if (id === undefined) {
      return this.tournamentResolver.getCurrentTournamentId(tourCode);
    }
    return id;
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

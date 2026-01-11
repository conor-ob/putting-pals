import type {
  DomainTourCode,
  DomainTournament,
  TournamentClient,
  TournamentResolver,
  TournamentService,
} from "@putting-pals/putting-pals-schema";
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

  async getTournament(
    tourCode: DomainTourCode,
    id?: string,
  ): Promise<DomainTournament> {
    const tournamentId = await this.resolveTournamentId(tourCode, id);
    return this.getTournamentById(tournamentId);
  }

  private async resolveTournamentId(
    tourCode: DomainTourCode,
    id?: string,
  ): Promise<string> {
    if (id === undefined) {
      return this.tournamentResolver.getCurrentTournamentId(tourCode);
    }
    return id;
  }

  async getTournaments(ids: string[]): Promise<DomainTournament[]> {
    const tournaments = await this.tournamentClient.getTournaments(ids);
    return tournaments.map(transformTournament);
  }

  private async getTournamentById(id: string): Promise<DomainTournament> {
    const tournaments = await this.getTournaments([id]);
    const tournament = tournaments[0];
    if (tournament === undefined) {
      throw new NotFoundError(`Tournament with id=${id} not found`);
    }
    return tournament;
  }
}

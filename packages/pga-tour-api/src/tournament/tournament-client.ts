import {
  AbstractTournamentClient,
  NotFoundError,
  type TourCode,
  type Tournament,
} from "@putting-pals/putting-pals-core";
import type { ApiTournament, Sdk } from "../generated/graphql";
import { transformTournament } from "./tournament-utils";

export class PgaTourApiTournamentClient extends AbstractTournamentClient<ApiTournament> {
  constructor(private readonly sdk: Sdk) {
    super();
    this.sdk = sdk;
  }

  override async getTournamentsRemote(ids: string[]): Promise<ApiTournament[]> {
    return this.sdk.Tournaments({ ids }).then((data) => data.tournaments);
  }

  override async getTournamentRemote(
    _tourCode: TourCode,
    id: string,
  ): Promise<ApiTournament> {
    const tournaments = await this.getTournamentsRemote([id]);
    const tournament = tournaments.find((t) => t.id === id);
    if (tournament === undefined) {
      throw new NotFoundError(`Tournament ${id} not found`);
    }
    return tournament;
  }

  override mapTournament(tournament: ApiTournament): Tournament {
    return transformTournament(tournament);
  }
}

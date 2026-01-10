import type { ApiTournament } from "@putting-pals/pga-tour-schema";
import { GraphQlClient } from "./graphql-client";

export class TournamentClient extends GraphQlClient {
  async getTournaments(ids: string[]): Promise<readonly ApiTournament[]> {
    return this.sdk.Tournaments({ ids }).then((data) => data.tournaments);
  }
}

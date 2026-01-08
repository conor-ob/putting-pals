import { GraphQlClient } from "./graphql-client";

export class TournamentClient extends GraphQlClient {
  async getTournaments(ids: string[]) {
    return this.sdk.Tournaments({ ids }).then((data) => data.tournaments);
  }
}

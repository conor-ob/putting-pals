import { TournamentsDocument } from "@putting-pals/pga-tour-schema/types";
import { GraphQlClient } from "./graphql-client";

export class TournamentClient extends GraphQlClient {
  async getTournaments(ids: string[]) {
    return this.query(TournamentsDocument, { ids }).then(
      (data) => data.tournaments,
    );
  }
}

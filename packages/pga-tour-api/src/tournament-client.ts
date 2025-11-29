import type { Tournament } from "@putting-pals/pga-tour-schema/types";
import { GraphQlClient } from "./graphql-client";

export class TournamentClient extends GraphQlClient {
  async getTournaments(ids: string[]) {
    return this.query<{
      data: {
        tournaments: Tournament[];
      };
    }>({
      operationName: "Tournaments",
      query: `
        query Tournaments($ids: [ID!]) {
          tournaments(ids: $ids) {
            beautyImageAsset {
              fallbackImage
              imageOrg
              imagePath
            }
            displayDate
            id
            roundDisplay
            roundStatus
            roundStatusColor
            roundStatusDisplay
            tournamentLogoAsset {
              fallbackImage
              imageOrg
              imagePath
            }
            tournamentName
            tournamentStatus
          }
        }
      `,
      variables: { ids },
    }).then((response) => response.data.tournaments);
  }
}

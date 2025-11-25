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
            beautyImage
            id
            tournamentName
            tournamentLogo
            tournamentLocation
            tournamentStatus
            roundStatusDisplay
            roundDisplay
            roundStatus
            roundStatusColor
            currentRound
            courses {
              courseName
            }
            city
            state
            country
            displayDate
            weather {
              condition
              tempC
            }
          }
        }
      `,
      variables: { ids },
    }).then((response) => response.data.tournaments);
  }
}

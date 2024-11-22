import pako from "pako";

import type { LeaderboardCompressedV3, LeaderboardV3 } from "../../pga";
import { getCountryFlag } from "../../utils/flag-utils";
import { PgaTourApiService } from "./api";

export class PgaTourLeaderboardService extends PgaTourApiService {
  private leaderboardV3Query = `
    query LeaderboardCompressedV3($leaderboardCompressedV3Id: ID!) {
      leaderboardCompressedV3(id: $leaderboardCompressedV3Id) {
        id
        payload
      }
    }
  `;

  constructor({ apiKey }: { apiKey: string }) {
    super({ apiKey });
  }

  public async getLeaderboard({ id }: { id: string }) {
    return super
      .query<{
        data: {
          leaderboardCompressedV3: LeaderboardCompressedV3;
        };
      }>({
        query: this.leaderboardV3Query,
        variables: { leaderboardCompressedV3Id: id },
      })
      .then((response) => {
        const leaderboardDecompressedV3 = this.pakoDecompress(
          response.data.leaderboardCompressedV3.payload,
        );
        const leaderboardV3 = JSON.parse(
          leaderboardDecompressedV3,
        ) as LeaderboardV3;
        return {
          id: leaderboardV3.id,
          players: leaderboardV3.players.map((row) => {
            if (row.__typename === "InformationRow") {
              const informationRow = row;
              return {
                __typename: informationRow.__typename,
                id: informationRow.id,
                leaderboardSortOrder: informationRow.leaderboardSortOrder,
                displayText: informationRow.displayText,
              };
            } else {
              const playerRow = row;
              return {
                __typename: playerRow.__typename,
                id: playerRow.id,
                leaderboardSortOrder: playerRow.leaderboardSortOrder,
                player: {
                  id: playerRow.player.id,
                  firstName: playerRow.player.firstName,
                  lastName: playerRow.player.lastName,
                  shortName: playerRow.player.shortName,
                  abbreviations: playerRow.player.abbreviations,
                  countryFlag: getCountryFlag({
                    player: {
                      id: playerRow.player.id,
                      countryFlag: playerRow.player.countryFlag,
                    },
                  }),
                },
                scoringData: {
                  position: playerRow.scoringData.position,
                  total: playerRow.scoringData.total,
                  totalSort: playerRow.scoringData.totalSort,
                  score: playerRow.scoringData.score,
                  thru: playerRow.scoringData.thru,
                },
              };
            }
          }),
        };
      });
  }

  private pakoDecompress(compressed: string) {
    const stringData = atob(compressed);
    const charData = stringData.split("").map((x) => x.charCodeAt(0));
    const binaryData = new Uint8Array(charData);
    const decompressed = pako.inflate(binaryData);
    return new TextDecoder("utf-8").decode(decompressed);
  }
}

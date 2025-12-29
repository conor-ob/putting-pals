import type {
  LeaderboardCompressedV3,
  LeaderboardHoleByHole,
  LeaderboardV3,
} from "@putting-pals/pga-tour-schema/types";
import pako from "pako";
import { GraphQlClient } from "./graphql-client";

export class LeaderboardClient extends GraphQlClient {
  async getLeaderboard(id: string) {
    return this.query<{
      data: {
        leaderboardCompressedV3: LeaderboardCompressedV3;
      };
    }>({
      operationName: "LeaderboardCompressedV3",
      query: `
        query LeaderboardCompressedV3($id: ID!) {
          leaderboardCompressedV3(id: $id) {
            id
            payload
          }
        }
      `,
      variables: { id },
    }).then((response) => {
      const leaderboardDecompressedV3 = this.decompress(
        response.data.leaderboardCompressedV3.payload,
      );
      return JSON.parse(leaderboardDecompressedV3) as LeaderboardV3;
    });
  }

  private decompress(compressed: string) {
    const binaryData = Uint8Array.from(atob(compressed), (c) =>
      c.charCodeAt(0),
    );
    const decompressed = pako.inflate(binaryData);
    return new TextDecoder("utf-8").decode(decompressed);
  }

  async getLeaderboardHoleByHole(id: string, round: number) {
    return this.query<{
      data: {
        leaderboardHoleByHole: LeaderboardHoleByHole;
      };
    }>({
      operationName: "LeaderboardHoleByHole",
      query: `
        query LeaderboardHoleByHole($tournamentId: ID!, $round: Int) {
          leaderboardHoleByHole(tournamentId: $tournamentId, round: $round) {
            tournamentId
            currentRound
            rounds {
              roundNumber
              displayText
            }
            tournamentName
            holeHeaders {
              holeNumber
              hole
              par
            }
            courseHoleHeaders {
              courseId
              holeHeaders {
                holeNumber
                order
                displayValue
                par
              }
            }
            courses {
              id
              courseName
              courseCode
              hostCourse
              scoringLevel
              enabled
              features
            }
            playerData {
              playerId
              courseId
              courseCode
              scores {
                holeNumber
                par
                yardage
                sequenceNumber
                score
                status
                roundScore
              }
              out
              in
              total
              totalToPar
            }
          }
        }
      `,
      variables: { tournamentId: id, round },
    }).then((response) => response.data.leaderboardHoleByHole);
  }
}

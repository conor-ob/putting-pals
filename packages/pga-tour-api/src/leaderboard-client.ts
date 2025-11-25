import type {
  LeaderboardCompressedV3,
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
      const leaderboardDecompressedV3 = this.pakoDecompress(
        response.data.leaderboardCompressedV3.payload,
      );
      return JSON.parse(leaderboardDecompressedV3) as LeaderboardV3;
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

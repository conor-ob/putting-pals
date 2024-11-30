import pako from "pako";

import type { LeaderboardCompressedV3, LeaderboardV3 } from "../types";
import { GraphqlApi } from "../api";

export class LeaderboardClient extends GraphqlApi {
  private leaderboardV3Query = `
    query LeaderboardCompressedV3($id: ID!) {
      leaderboardCompressedV3(id: $id) {
        id
        payload
      }
    }
  `;

  public async getLeaderboard(id: string) {
    return super
      .query<{
        data: {
          leaderboardCompressedV3: LeaderboardCompressedV3;
        };
      }>({
        query: this.leaderboardV3Query,
        variables: { id: id },
      })
      .then((response) => {
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

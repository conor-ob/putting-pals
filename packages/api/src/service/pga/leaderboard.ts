import pako from "pako";

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
      .query<LeaderboardV3Response>({
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
          rows: leaderboardV3.players.map((row) => {
            if (row.__typename === "InformationRow") {
              const informationRow = row as InformationRow;
              return {
                id: informationRow.id,
                leaderboardSortOrder: informationRow.leaderboardSortOrder,
                displayText: informationRow.displayText,
              };
            } else {
              const playerRow = row as PlayerRowV3;
              return {
                id: playerRow.id,
                leaderboardSortOrder: playerRow.leaderboardSortOrder,
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

type LeaderboardV3Response = {
  data: Data;
};

type Data = {
  leaderboardCompressedV3: LeaderboardCompressedV3;
};

type LeaderboardCompressedV3 = {
  id: string;
  payload: string;
};

type LeaderboardV3 = {
  id: string;
  players: (PlayerRowV3 | InformationRow)[];
};

type PlayerRowV3 = {
  __typename: string;
  id: string;
  leaderboardSortOrder: number;
  player: PlayerV3;
  scoringData: ScoringDataV3;
};

type InformationRow = {
  __typename: string;
  id: string;
  leaderboardSortOrder: number;
  displayText: string;
};

type PlayerV3 = {
  id: string;
  firstName: string;
  lastName: string;
  amateur: boolean;
  displayName: string;
  abbreviations: string;
  abbreviationAccessibiltyText: string;
  country: string;
  countryFlag: string;
  shortName: string;
  lineColor: string;
  tourBound: boolean;
  bettingProfile: string;
};

type ScoringDataV3 = {
  position: string;
  total: string;
  totalSort: number;
  thru: string;
  thruSort: number;
  score: string;
  scoreSort: number;
  courseId: string;
  groupNumber: number;
  currentRound: number;
  backNine: boolean;
  roundHeader: string;
  rounds: string[];
  movementDirection: string;
  movementAmount: string;
  playerState: string;
  rankingMovement: string;
  rankingMovementAmount: string;
  rankingMovementAmountSort: number;
  rankLogoLight: string;
  rankLogoDark: string;
  totalStrokes: string;
  official: string;
  officialSort: number;
  projected: string;
  projectedSort: number;
  hasStoryContent: false;
  storyContentRounds: string[];
  roundStatus: string;
};

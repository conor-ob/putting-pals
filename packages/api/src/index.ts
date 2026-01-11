/** biome-ignore-all lint/suspicious/noConsole: testing */
/** biome-ignore-all lint/correctness/noUnusedVariables: testing */
import { InMemoryCache } from "@apollo/client/cache";
import type { DomainLeaderboardV3 } from "./graphql/putting-pals/generated/graphql";
import { DomainLeaderboardV3Document } from "./graphql/putting-pals/generated/graphql";

function main() {
  const leaderboard = {
    __typename: "LeaderboardV3" as const,
    id: "1",
    players: [
      {
        __typename: "PuttingPalsPlayerRow",
        id: "1",
        leaderboardSortOrder: 0,
        player: {
          __typename: "PuttingPalsPlayer",
          id: "1",
          countryFlag: "US",
          displayName: "John Doe",
          shortName: "JD",
        },
        scoringData: {
          __typename: "PuttingPalsPlayerScoringData",
          position: "1",
          total: "1",
          totalSort: 0,
        },
        picks: ["1"],
      },
      {
        __typename: "InformationRow",
        id: "2",
        leaderboardSortOrder: 1,
        displayText: "Information",
        mobileDisplayText: "Information",
        sponsorName: "Sponsor",
      },
    ],
  } satisfies Partial<DomainLeaderboardV3>;

  const cache = new InMemoryCache();
  cache.writeQuery({
    query: DomainLeaderboardV3Document,
    variables: { leaderboardV3Id: "1" },
    data: {
      __typename: "Query",
      leaderboardV3: leaderboard,
    },
  });

  const normalized = cache.extract();
  // console.log("normalized", JSON.stringify(normalized, null, 2));

  // const extracted = cache.extract();
  const result = cache.readQuery({
    query: DomainLeaderboardV3Document,
    variables: { leaderboardV3Id: "1" },
  });
  console.log("result2", JSON.stringify(result?.leaderboardV3, null, 2));
}

main();

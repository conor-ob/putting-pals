/** biome-ignore-all lint/suspicious/noConsole: testing */
/** biome-ignore-all lint/correctness/noUnusedVariables: testing */
import { InMemoryCache } from "@apollo/client/cache";
import { GraphQLClient } from "graphql-request";
import { getSdk } from "./graphql/pga-tour/generated/graphql";
import { LeaderboardV3Document } from "./graphql/putting-pals/generated/graphql";

async function main() {
  const client = new GraphQLClient("https://orchestrator.pgatour.com/graphql", {
    headers: {
      "X-Api-Key": "da2-gsrx5bibzbb4njvhl7t37wqyl4",
    },
  });
  const sdk = getSdk(client);
  const leaderboardV3 = await sdk
    .LeaderboardV3({ leaderboardV3Id: "R2025100" })
    .then((data) => data.leaderboardV3);

  const normalizer = new InMemoryCache();
  normalizer.writeQuery({
    query: LeaderboardV3Document,
    variables: { leaderboardV3Id: leaderboardV3.id },
    data: {
      __typename: "Query",
      leaderboardV3: leaderboardV3,
    },
  });

  const normalized = normalizer.extract();
  console.log("normalized", normalized);

  // const extracted = cache.extract();
  const result = normalizer.readQuery({
    query: LeaderboardV3Document,
    variables: { leaderboardV3Id: leaderboardV3.id },
  });
  console.log("result2", result);
}

main();

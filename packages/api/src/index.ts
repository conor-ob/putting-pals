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
    .LeaderboardV3({ leaderboardV3Id: "S2025600" })
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

  function sortKeys<T>(obj: T): T {
    if (Array.isArray(obj)) {
      const sorted = obj.map(sortKeys);
      // Sort arrays of refs by their __ref value
      if (
        sorted.every(
          (item) => item && typeof item === "object" && "__ref" in item,
        )
      ) {
        return sorted.sort((a, b) =>
          (a.__ref as string).localeCompare(b.__ref as string),
        ) as T;
      }
      return sorted as T;
    }
    if (obj && typeof obj === "object") {
      const sorted: Record<string, unknown> = {};
      for (const key of Object.keys(obj).sort()) {
        sorted[key] = sortKeys((obj as Record<string, unknown>)[key]);
      }
      return sorted as T;
    }
    return obj;
  }

  const normalized = normalizer.extract();
  const deterministic = sortKeys(normalized);
  console.log("normalized", JSON.stringify(deterministic, null, 2));

  normalizer.restore(normalized);

  // const extracted = cache.extract();
  const result = normalizer.readQuery({
    query: LeaderboardV3Document,
    variables: { leaderboardV3Id: leaderboardV3.id },
  });
  // console.log("result2", result);
}

main();

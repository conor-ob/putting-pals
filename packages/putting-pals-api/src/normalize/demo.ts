/** biome-ignore-all lint/suspicious/noConsole: testing */
/** biome-ignore-all lint/correctness/noUnusedVariables: testing */
import { GraphQLClient } from "graphql-request";
import { getSdk, type Sdk } from "../graphql/pga-tour/generated/graphql";
import {
  CustomLeaderboardV3FieldsFragmentDoc,
  LeaderboardV3Document,
  TournamentsDocument,
} from "../graphql/putting-pals/generated/graphql";
import { ApolloCacheNormalizer, type Normalizer } from "./normalizer";

class LeaderboardProcessor {
  constructor(
    private readonly sdk: Sdk,
    private readonly normalizer: Normalizer,
  ) {
    this.sdk = sdk;
    this.normalizer = normalizer;
  }

  async processLeaderboard(leaderboardV3Id: string): Promise<void> {
    const tournaments = await this.sdk
      .Tournaments({ ids: [leaderboardV3Id] })
      .then((data) => data.tournaments);

    const leaderboardV3 = await this.sdk
      .LeaderboardV3({ leaderboardV3Id })
      .then((data) => data.leaderboardV3);

    const normalizedTournaments = this.normalizer.normalize(
      TournamentsDocument,
      { __typename: "Query", tournaments },
      { ids: [leaderboardV3Id] },
    );

    console.log("normalizedTournaments", normalizedTournaments);

    const denormalizedTournaments = this.normalizer.denormalize(
      TournamentsDocument,
      normalizedTournaments,
      { ids: [leaderboardV3Id] },
    );

    console.log(
      "denormalizedTournaments",
      denormalizedTournaments?.tournaments,
    );

    const normalizedLeaderboard = this.normalizer.normalize(
      LeaderboardV3Document,
      { __typename: "Query", leaderboardV3 },
      { leaderboardV3Id: leaderboardV3.id },
    );

    console.log("normalizedLeaderboard", normalizedLeaderboard);

    const normalizedLeaderboardFragment = this.normalizer.normalizeFragment(
      CustomLeaderboardV3FieldsFragmentDoc,
      leaderboardV3.id,
      leaderboardV3,
      "CustomLeaderboardV3Fields", // Required when fragment doc contains multiple fragments
    );

    console.log("normalizedLeaderboardFragment", normalizedLeaderboardFragment);

    const denormalizedLeaderboard = this.normalizer.denormalize(
      LeaderboardV3Document,
      normalizedLeaderboard,
      { leaderboardV3Id: leaderboardV3.id },
    );

    console.log(
      "denormalizedLeaderboard",
      denormalizedLeaderboard?.leaderboardV3,
    );
  }
}

async function main() {
  const client = new GraphQLClient("https://orchestrator.pgatour.com/graphql", {
    headers: {
      "X-Api-Key": "da2-gsrx5bibzbb4njvhl7t37wqyl4",
    },
  });
  const sdk = getSdk(client);
  const normalizer = new ApolloCacheNormalizer();

  const processor = new LeaderboardProcessor(sdk, normalizer);
  await processor.processLeaderboard("S2025600");
}

main();

// /** biome-ignore-all lint/suspicious/noConsole: testing */
// /** biome-ignore-all lint/correctness/noUnusedVariables: testing */
// import {
//   InMemoryCache,
//   type InMemoryCacheConfig,
//   type NormalizedCacheObject,
// } from "@apollo/client/cache";
// import type { TypedDocumentNode } from "@graphql-typed-document-node/core";
// import { GraphQLClient } from "graphql-request";
// import { getSdk } from "./graphql/pga-tour/generated/graphql";
// import { LeaderboardV3Document } from "./graphql/putting-pals/generated/graphql";

// interface GraphQLNormalizer<TData, TVariables> {
//   normalize(data: TData, variables: TVariables): NormalizedCacheObject;
//   denormalize(
//     normalized: NormalizedCacheObject,
//     variables: TVariables,
//   ): TData | null;
// }

// class ApolloCacheNormalizer<TData, TVariables extends Record<string, unknown>>
//   implements GraphQLNormalizer<TData, TVariables>
// {
//   private readonly document: TypedDocumentNode<TData, TVariables>;
//   private readonly cacheConfig?: InMemoryCacheConfig;

//   constructor(
//     document: TypedDocumentNode<TData, TVariables>,
//     cacheConfig?: InMemoryCacheConfig,
//   ) {
//     this.document = document;
//     this.cacheConfig = cacheConfig;
//   }

//   normalize(data: TData, variables: TVariables): NormalizedCacheObject {
//     const cache = new InMemoryCache(this.cacheConfig);
//     cache.writeQuery({
//       query: this.document,
//       variables,
//       data,
//     });
//     return cache.extract();
//   }

//   denormalize(
//     normalized: NormalizedCacheObject,
//     variables: TVariables,
//   ): TData | null {
//     const cache = new InMemoryCache(this.cacheConfig);
//     cache.restore(normalized);
//     return cache.readQuery({
//       query: this.document,
//       variables,
//     });
//   }
// }

// async function main() {
//   const client = new GraphQLClient("https://orchestrator.pgatour.com/graphql", {
//     headers: {
//       "X-Api-Key": "da2-gsrx5bibzbb4njvhl7t37wqyl4",
//     },
//   });
//   const sdk = getSdk(client);
//   const leaderboardV3 = await sdk
//     .LeaderboardV3({ leaderboardV3Id: "S2025600" })
//     .then((data) => data.leaderboardV3);

//   const test = new ApolloCacheNormalizer(LeaderboardV3Document);
//   const testNormalized = test.normalize(
//     { __typename: "Query", leaderboardV3 },
//     { leaderboardV3Id: "R2025100" },
//   );

//   const normalizer = new InMemoryCache();
//   normalizer.writeQuery({
//     query: LeaderboardV3Document,
//     variables: { leaderboardV3Id: leaderboardV3.id },
//     data: {
//       __typename: "Query",
//       leaderboardV3: leaderboardV3,
//     },
//   });

//   function sortKeys<T>(obj: T): T {
//     if (Array.isArray(obj)) {
//       const sorted = obj.map(sortKeys);
//       // Sort arrays of refs by their __ref value
//       if (
//         sorted.every(
//           (item) => item && typeof item === "object" && "__ref" in item,
//         )
//       ) {
//         return sorted.sort((a, b) =>
//           (a.__ref as string).localeCompare(b.__ref as string),
//         ) as T;
//       }
//       return sorted as T;
//     }
//     if (obj && typeof obj === "object") {
//       const sorted: Record<string, unknown> = {};
//       for (const key of Object.keys(obj).sort()) {
//         sorted[key] = sortKeys((obj as Record<string, unknown>)[key]);
//       }
//       return sorted as T;
//     }
//     return obj;
//   }

//   const normalized = normalizer.extract();
//   const deterministic = sortKeys(normalized);
//   console.log("normalized", JSON.stringify(deterministic, null, 2));

//   normalizer.restore(normalized);

//   // const extracted = cache.extract();
//   const result = normalizer.readQuery({
//     query: LeaderboardV3Document,
//     variables: { leaderboardV3Id: leaderboardV3.id },
//   });
//   // console.log("result2", result);
// }

// main();

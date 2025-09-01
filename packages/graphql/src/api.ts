// import type { AugmentedRequest, CacheOptions } from "@apollo/datasource-rest";
// import type { ValueOrPromise } from "@apollo/datasource-rest/dist/RESTDataSource";
// import { RESTDataSource } from "@apollo/datasource-rest";
// import type { Leaderboard } from "./types";

// import { env } from "./env/schema";

export class GraphqlApi {
  // override baseURL = "https://orchestrator.pgatour.com";

  // constructor() {
  //   super({ fetch: fetch });
  // }

  // protected override willSendRequest(
  //   _: string,
  //   requestOpts: AugmentedRequest<CacheOptions>,
  // ): ValueOrPromise<void> {
  //   requestOpts.headers["X-Api-Key"] = env.PGA_TOUR_API_KEY;
  // }

  protected async query<TResult = unknown>({
    query,
    variables,
  }: {
    query: string;
    variables: Record<string, unknown>;
  }): Promise<TResult> {
    // console.log({} as Leaderboard)
    return fetch("https://orchestrator.pgatour.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Api-Key": "da2-gsrx5bibzbb4njvhl7t37wqyl4",
      },
      body: JSON.stringify({ query, variables }),
    }).then((response) => {
      if (!response.ok) {
        throw new Error(
          `GraphQL request failed with status ${response.status}: ${response.statusText}`,
        );
      }
      return response.json() as Promise<TResult>;
    });
    // return super.post<TResult>("graphql", {
    //   body: JSON.stringify({ query, variables }),
    // });
  }
}

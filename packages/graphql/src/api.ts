import type { AugmentedRequest, CacheOptions } from "@apollo/datasource-rest";
import type { ValueOrPromise } from "@apollo/datasource-rest/dist/RESTDataSource";
import { RESTDataSource } from "@apollo/datasource-rest";

import { env } from "./env/schema";

// Wrapper function to convert FetcherRequestInit to RequestInit
const fetchWrapper = (url: string, init?: unknown) => {
  return fetch(url, init as RequestInit);
};

export class GraphqlApi extends RESTDataSource {
  override baseURL = "https://orchestrator.pgatour.com";

  constructor() {
    super({ fetch: fetchWrapper });
  }

  protected override willSendRequest(
    _: string,
    requestOpts: AugmentedRequest<CacheOptions>,
  ): ValueOrPromise<void> {
    requestOpts.headers["X-Api-Key"] = env.PGA_TOUR_API_KEY;
  }

  protected async query<TResult = unknown>({
    query,
    variables,
  }: {
    query: string;
    variables: Record<string, unknown>;
  }): Promise<TResult> {
    return super.post<TResult>("graphql", {
      body: JSON.stringify({ query, variables }),
    });
  }
}

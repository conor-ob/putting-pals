import type { AugmentedRequest, CacheOptions } from "@apollo/datasource-rest";
import type { ValueOrPromise } from "@apollo/datasource-rest/dist/RESTDataSource";
import { RESTDataSource } from "@apollo/datasource-rest";

export class PgaTourApiService extends RESTDataSource {
  override baseURL = "https://orchestrator.pgatour.com";
  private apiKey;

  constructor({ apiKey }: { apiKey: string }) {
    super();
    this.apiKey = apiKey;
  }

  protected override willSendRequest(
    _: string,
    requestOpts: AugmentedRequest<CacheOptions>,
  ): ValueOrPromise<void> {
    requestOpts.headers["X-Api-Key"] = this.apiKey;
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

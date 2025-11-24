export class GraphQlClient {
  private readonly pgaTourApiKey: string;

  constructor(pgaTourApiKey: string) {
    this.pgaTourApiKey = pgaTourApiKey;
  }

  protected async query<TResult = unknown>({
    query,
    variables,
  }: {
    query: string;
    variables: Record<string, unknown>;
  }) {
    return fetch("https://orchestrator.pgatour.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Api-Key": this.pgaTourApiKey,
      },
      body: JSON.stringify({ query, variables }),
    }).then((res) => res.json()) as Promise<TResult>;
  }
}

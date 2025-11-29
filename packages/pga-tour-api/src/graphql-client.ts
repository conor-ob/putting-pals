export class GraphQlClient {
  protected async query<TResult = unknown>({
    operationName,
    query,
    variables,
  }: {
    operationName: string;
    query: string;
    variables: Record<string, unknown>;
  }) {
    return fetch("https://orchestrator.pgatour.com/graphql", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-api-key": "da2-gsrx5bibzbb4njvhl7t37wqyl4",
        "x-pgat-platform": "web",
      },
      body: JSON.stringify({ operationName, query, variables }),
    }).then((res) => res.json()) as Promise<TResult>;
  }
}

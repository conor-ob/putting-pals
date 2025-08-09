export class GraphqlApi {
  protected async query<TResult = unknown>({
    query,
    variables,
  }: {
    query: string;
    variables: Record<string, unknown>;
  }): Promise<TResult> {
    return fetch("https://orchestrator.pgatour.com/graphql", {
      method: "POST",
      body: JSON.stringify({ query, variables }),
      headers: {
        "X-Api-Key": "da2-gsrx5bibzbb4njvhl7t37wqyl4",
      },
    }).then((res) => res.json());
  }
}

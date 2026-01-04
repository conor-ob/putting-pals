import type { TypedDocumentNode } from "@graphql-typed-document-node/core";
import { print } from "graphql";

export class GraphQlClient {
  protected async query<TResult, TVariables>(
    document: TypedDocumentNode<TResult, TVariables>,
    variables: TVariables,
  ) {
    const response = await fetch("https://orchestrator.pgatour.com/graphql", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-api-key": "da2-gsrx5bibzbb4njvhl7t37wqyl4",
        "x-pgat-platform": "web",
      },
      body: JSON.stringify({
        operationName: this.getOperationName(document),
        query: print(document),
        variables,
      }),
    });
    const json = (await response.json()) as {
      data: TResult;
      errors?: { message: string }[];
    };
    return json.data;
  }

  private getOperationName<TResult, TVariables>(
    document: TypedDocumentNode<TResult, TVariables>,
  ): string | undefined {
    for (const def of document.definitions) {
      if (def.kind === "OperationDefinition" && def.name) {
        return def.name.value;
      }
    }
    return undefined;
  }
}

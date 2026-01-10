import type { Sdk } from "@putting-pals/pga-tour-schema";
import { getSdk } from "@putting-pals/pga-tour-schema";
import { GraphQLClient } from "graphql-request";

export class GraphQlClient {
  protected readonly sdk: Sdk;

  constructor() {
    const client = new GraphQLClient(
      "https://orchestrator.pgatour.com/graphql",
      {
        headers: {
          "content-type": "application/json",
          "x-api-key": "da2-gsrx5bibzbb4njvhl7t37wqyl4",
          "x-pgat-platform": "web",
        },
      },
    );
    this.sdk = getSdk(client);
  }
}

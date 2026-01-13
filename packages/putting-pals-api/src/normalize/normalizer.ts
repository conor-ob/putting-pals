import type { TypedDocumentNode } from "@graphql-typed-document-node/core";

export interface Normalizer<TNormalized = object> {
  normalize<TData, TVariables extends Record<string, unknown>>(
    document: TypedDocumentNode<TData, TVariables>,
    data: TData,
    variables: TVariables,
  ): TNormalized;

  normalizeFragment<TData, TVariables extends Record<string, unknown>>(
    document: TypedDocumentNode<TData, TVariables>,
    id: string,
    data: TData,
    fragmentName?: string,
  ): TNormalized;

  denormalize<TData, TVariables extends Record<string, unknown>>(
    document: TypedDocumentNode<TData, TVariables>,
    normalized: TNormalized,
    variables: TVariables,
  ): TData | null;
}

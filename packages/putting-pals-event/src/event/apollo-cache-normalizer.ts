import {
  InMemoryCache,
  type InMemoryCacheConfig,
  type NormalizedCacheObject,
} from "@apollo/client/cache";
import {
  isReference,
  type Reference,
  type StoreObject,
  type StoreValue,
} from "@apollo/client/utilities";
import type { TypedDocumentNode } from "@graphql-typed-document-node/core";
import type { Normalizer } from "@putting-pals/putting-pals-api";

export class ApolloCacheNormalizer
  implements Normalizer<NormalizedCacheObject>
{
  private readonly cacheConfig?: InMemoryCacheConfig;

  constructor(cacheConfig?: InMemoryCacheConfig) {
    this.cacheConfig = cacheConfig;
  }

  normalize<TData, TVariables extends Record<string, unknown>>(
    document: TypedDocumentNode<TData, TVariables>,
    data: TData,
    variables: TVariables,
  ): NormalizedCacheObject {
    const cache = new InMemoryCache(this.cacheConfig);
    cache.writeQuery({
      query: document,
      variables,
      data,
    });
    return this.sortKeys(cache.extract());
  }

  normalizeFragment<TData, TVariables extends Record<string, unknown>>(
    fragment: TypedDocumentNode<TData, TVariables>,
    id: string,
    data: TData,
    fragmentName?: string,
  ): NormalizedCacheObject {
    const cache = new InMemoryCache(this.cacheConfig);
    cache.writeFragment({
      fragment,
      fragmentName,
      id,
      data,
    });
    return this.sortKeys(cache.extract());
  }

  denormalize<TData, TVariables extends Record<string, unknown>>(
    document: TypedDocumentNode<TData, TVariables>,
    normalized: NormalizedCacheObject,
    variables: TVariables,
  ): TData | null {
    const cache = new InMemoryCache(this.cacheConfig);
    cache.restore(normalized);
    return cache.readQuery({
      query: document,
      variables,
    });
  }

  private sortKeys(cache: NormalizedCacheObject): NormalizedCacheObject {
    const sortStoreValue = (value: StoreValue): StoreValue => {
      // Handle null/undefined
      if (value == null) return value;

      // Handle Reference - just return as-is (immutable, single __ref key)
      if (isReference(value)) return value;

      // Handle arrays
      if (Array.isArray(value)) {
        const sorted = value.map((item) =>
          typeof item === "string" ? item : sortStoreValue(item),
        );
        // Sort arrays of References by their __ref value
        if (sorted.length > 0 && sorted.every(isReference)) {
          return (sorted as Reference[]).sort((a, b) =>
            a.__ref.localeCompare(b.__ref),
          );
        }
        return sorted;
      }

      // Handle nested objects (embedded objects without their own cache ID)
      if (typeof value === "object") {
        return sortStoreObject(value as StoreObject);
      }

      // Primitives (string, number) - return as-is
      return value;
    };

    const sortStoreObject = (obj: StoreObject): StoreObject => {
      const sorted: StoreObject = {};
      for (const key of Object.keys(obj).sort()) {
        sorted[key] = sortStoreValue(obj[key]);
      }
      return sorted;
    };

    // Sort top-level entity keys (dataIds like "Player:123", "ROOT_QUERY")
    const sorted: NormalizedCacheObject = {};
    for (const dataId of Object.keys(cache).sort()) {
      const entity = cache[dataId];
      if (dataId === "__META") {
        sorted.__META = entity as NormalizedCacheObject["__META"];
      } else if (entity) {
        sorted[dataId] = sortStoreObject(entity);
      }
    }
    return sorted;
  }
}

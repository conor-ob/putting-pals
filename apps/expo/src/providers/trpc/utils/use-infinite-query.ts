import { useIsFocused } from "@react-navigation/native";
import {
  type InfiniteData,
  type UseInfiniteQueryOptions,
  type UseInfiniteQueryResult,
  useInfiniteQuery as useTanstackInfiniteQuery,
} from "@tanstack/react-query";

/**
 * A wrapper around useInfiniteQuery that automatically disables queries when the screen is not focused.
 * This is useful for tab navigation where screens stay mounted but should only fetch when active.
 */
export function useInfiniteQuery<
  TQueryFnData,
  TError = Error,
  TData = InfiniteData<TQueryFnData>,
  TQueryKey extends readonly unknown[] = readonly unknown[],
  TPageParam = unknown,
>(
  options: UseInfiniteQueryOptions<
    TQueryFnData,
    TError,
    TData,
    TQueryKey,
    TPageParam
  >,
): UseInfiniteQueryResult<TData, TError> {
  const isFocused = useIsFocused();

  return useTanstackInfiniteQuery({
    ...options,
    enabled: options.enabled !== false && isFocused,
  });
}

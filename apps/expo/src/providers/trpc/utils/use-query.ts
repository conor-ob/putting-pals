import { useIsFocused } from "@react-navigation/native";
import {
  type UseQueryOptions,
  type UseQueryResult,
  useQuery as useTanstackQuery,
} from "@tanstack/react-query";

/**
 * A wrapper around useQuery that automatically disables queries when the screen is not focused.
 * This is useful for tab navigation where screens stay mounted but should only fetch when active.
 *
 * @example
 * ```tsx
 * const { data } = useQuery(trpc.tournament.getById.queryOptions({ tourCode }));
 * ```
 */
export function useQuery<
  TQueryFnData = unknown,
  TError = Error,
  TData = TQueryFnData,
  TQueryKey extends readonly unknown[] = readonly unknown[],
>(
  options: UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>,
): UseQueryResult<TData, TError> {
  const isFocused = useIsFocused();

  return useTanstackQuery({
    ...options,
    enabled: options.enabled !== false && isFocused,
  });
}

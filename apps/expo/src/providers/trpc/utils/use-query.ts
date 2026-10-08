import {
  type UseQueryOptions,
  type UseQueryResult,
  useQuery as useTanstackQuery,
} from "@tanstack/react-query";
import { useIsFocused } from "expo-router";

/**
 * A wrapper around useQuery that automatically disables queries when the screen is not focused.
 * This is useful for tab navigation where screens stay mounted but should only fetch when active.
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

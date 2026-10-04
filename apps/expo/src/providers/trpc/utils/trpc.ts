import type { AppRouter } from "@putting-pals/putting-pals-trpc";
import { QueryClient } from "@tanstack/react-query";
import {
  createTRPCClient,
  httpBatchLink,
  httpBatchStreamLink,
  TRPCClientError,
} from "@trpc/client";
import { createTRPCOptionsProxy } from "@trpc/tanstack-react-query";
import { Platform } from "react-native";
import superjson from "superjson";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Prevent refetching when window regains focus if component is not mounted/visible
      refetchOnWindowFocus: false,
      // Prevent refetching on reconnect if component is not mounted/visible
      refetchOnReconnect: false,
      // Only refetch on mount if data is stale
      refetchOnMount: true,
      // Cache for 30 seconds
      staleTime: 1000 * 30,
      // Retry 3 times
      retry(failureCount, error) {
        if (failureCount >= 3) {
          return false;
        }

        // Check if it's a tRPC error
        if (error instanceof TRPCClientError) {
          // Don't retry client errors (4xx equivalent)
          const nonRetryableCodes = [
            "BAD_REQUEST",
            "UNAUTHORIZED",
            "FORBIDDEN",
            "NOT_FOUND",
            "METHOD_NOT_SUPPORTED",
            "CONFLICT",
            "PRECONDITION_FAILED",
            "PAYLOAD_TOO_LARGE",
            "UNPROCESSABLE_CONTENT",
            "NOT_IMPLEMENTED",
          ];

          if (nonRetryableCodes.includes(error.data?.code)) {
            return false;
          }

          // Retry server errors (5xx equivalent)
          const retryableCodes = [
            "TIMEOUT",
            "INTERNAL_SERVER_ERROR",
            "BAD_GATEWAY",
            "SERVICE_UNAVAILABLE",
            "GATEWAY_TIMEOUT",
          ];

          if (retryableCodes.includes(error.data?.code)) {
            return true;
          }
        }

        // For network errors (no response at all), retry
        // These typically appear as regular Error or TypeError
        if (error instanceof TypeError && error.message === "Failed to fetch") {
          return true;
        }

        // Default: retry unknown errors (likely network issues)
        return true;
      },
      // Exponential backoff retry delay
      retryDelay(attemptIndex) {
        return Math.min(1000 * 2 ** attemptIndex, 30000);
      },
    },
  },
});

const httpLink = Platform.select({
  web: httpBatchStreamLink,
  default: httpBatchLink,
});

const trpcClient = createTRPCClient<AppRouter>({
  links: [
    httpLink({
      url:
        process.env.NODE_ENV === "production"
          ? Platform.select({
              web: "/api/trpc",
              default: `${process.env.EXPO_PUBLIC_SERVER_URL}/api/trpc`,
            })
          : `${process.env.EXPO_PUBLIC_SERVER_URL}/trpc`,
      transformer: superjson,
    }),
  ],
});

export const trpc = createTRPCOptionsProxy<AppRouter>({
  client: trpcClient,
  queryClient,
});

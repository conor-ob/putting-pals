import type { AppRouter } from "@putting-pals/putting-pals-api/router";
import { QueryClient } from "@tanstack/react-query";
import { createTRPCClient, httpBatchLink } from "@trpc/client";
import type { inferRouterInputs, inferRouterOutputs } from "@trpc/server";
import { createTRPCOptionsProxy } from "@trpc/tanstack-react-query";
import { Platform } from "react-native";
import superjson from "superjson";

/**
 * Inference helper for inputs.
 *
 * @example type HelloInput = RouterInputs['example']['hello']
 */
export type RouterInputs = inferRouterInputs<AppRouter>;

/**
 * Inference helper for outputs.
 *
 * @example type HelloOutput = RouterOutputs['example']['hello']
 */
export type RouterOutputs = inferRouterOutputs<AppRouter>;

export const queryClient = new QueryClient();

const trpcClient = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: Platform.select({
        web:
          process.env.NODE_ENV === "production"
            ? "api/trpc"
            : "http://localhost:4000/trpc",
        default:
          process.env.NODE_ENV === "production"
            ? "https://puttingpals.up.railway.app/api/trpc"
            : "http://localhost:4000/trpc", // TODO: needs IP address
      }),
      transformer: superjson,
    }),
  ],
});

export const trpc = createTRPCOptionsProxy<AppRouter>({
  client: trpcClient,
  queryClient,
});

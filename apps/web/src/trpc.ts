import type { AppRouter } from "@putting-pals/putting-pals-trpc";
import { createTRPCClient, httpBatchStreamLink } from "@trpc/client";
import superjson from "superjson";

export const trpc = createTRPCClient<AppRouter>({
  links: [
    httpBatchStreamLink({
      url: "/api/trpc",
      transformer: superjson,
    }),
  ],
});

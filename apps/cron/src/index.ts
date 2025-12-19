import type { AppRouter } from "@putting-pals/putting-pals-api/router";
import { createTRPCClient, httpBatchLink } from "@trpc/client";
import superjson from "superjson";
import { env } from "./env/schema";

async function sendEvent() {
  const client = createTRPCClient<AppRouter>({
    links: [
      httpBatchLink({
        url: `${env.SERVER_URL}/trpc`,
        transformer: superjson,
      }),
    ],
  });

  const response = await client.event.processEvent.mutate({
    cron: "5 * * * *",
    scheduledTime: Date.now(),
  });

  // biome-ignore lint/suspicious/noConsole: testing
  console.log("processed event", response);
}

sendEvent();

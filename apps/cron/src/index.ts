import type { AppRouter } from "@putting-pals/putting-pals-api/router";
import { createTRPCClient, httpBatchLink } from "@trpc/client";
import superjson from "superjson";

async function sendEvent() {
  const client = createTRPCClient<AppRouter>({
    links: [
      httpBatchLink({
        url: "https://puttingpals.up.railway.app/api/trpc",
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

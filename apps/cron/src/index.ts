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

  await client.event.processEvent.mutate({
    tourCode: "R",
    type: "leaderboard-event",
  });
}

sendEvent()
  .then(() => process.exit(0))
  .catch((err) => {
    // biome-ignore lint/suspicious/noConsole: error logging
    console.error(err);
    process.exit(1);
  });

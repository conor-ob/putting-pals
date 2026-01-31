import type { AppRouter } from "@putting-pals/putting-pals-trpc";
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

  const supportedTourCodes = ["P", "R", "S", "H", "Y"] as const;
  await Promise.all(
    supportedTourCodes.map((tourCode) =>
      client.event.processEvent.mutate({
        tourCode,
        type: "leaderboard/detect-change",
      }),
    ),
  );
}

sendEvent()
  .then(() => process.exit(0))
  .catch((err) => {
    // biome-ignore lint/suspicious/noConsole: error logging
    console.error(err);
    process.exit(1);
  });

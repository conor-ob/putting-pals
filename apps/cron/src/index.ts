import { supportedTours } from "@putting-pals/putting-pals-api";
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

  await Promise.all(
    supportedTours.map((tour) =>
      client.event.processEvent.mutate({
        tourCode: tour.tourCode,
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

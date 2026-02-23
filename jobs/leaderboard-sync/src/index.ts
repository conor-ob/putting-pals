import type { AppRouter } from "@putting-pals/putting-pals-trpc";
import { createTRPCClient, httpLink, retryLink } from "@trpc/client";
import superjson from "superjson";
import { env } from "./env/schema";

async function sendEvent() {
  const client = createTRPCClient<AppRouter>({
    links: [
      retryLink({
        retry(opts) {
          if (opts.attempts >= 3) {
            return false;
          }

          const errorCode = opts.error.data?.code;
          if (errorCode === undefined) {
            return true;
          }

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

          if (nonRetryableCodes.includes(errorCode)) {
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

          if (retryableCodes.includes(errorCode)) {
            return true;
          }

          return true;
        },
        // Exponential backoff retry delay
        retryDelayMs(attemptIndex) {
          return Math.min(1000 * 2 ** attemptIndex, 30000);
        },
      }),
      httpLink({
        url: `${env.SERVER_URL}/trpc`,
        transformer: superjson,
      }),
    ],
  });

  const supportedTours = await client.tour.getTours.query();
  const results = await Promise.allSettled(
    supportedTours.map((tour) =>
      client.event.syncLeaderboard
        .mutate({ tourCode: tour.tourCode })
        .catch((err) => {
          // biome-ignore lint/suspicious/noConsole: error logging
          console.error(
            `processEvent failed for tourCode=${tour.tourCode}`,
            err,
          );
          throw err;
        }),
    ),
  );

  const rejected = results.filter((result) => result.status === "rejected");
  if (rejected.length > 0) {
    throw new AggregateError(
      rejected.map((r) => r.reason),
      `Failed to process events: ${rejected.length} tour(s) failed`,
    );
  }
}

sendEvent()
  .then(() => process.exit(0))
  .catch((err) => {
    if (err instanceof AggregateError) {
      // biome-ignore lint/suspicious/noConsole: error logging
      console.error(err.message);
      for (const e of err.errors) {
        // biome-ignore lint/suspicious/noConsole: error logging
        console.error(e);
      }
      process.exit(0);
    } else {
      // biome-ignore lint/suspicious/noConsole: error logging
      console.error(err);
      process.exit(1);
    }
  });

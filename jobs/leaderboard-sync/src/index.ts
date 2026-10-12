import { injectDependencies } from "@putting-pals/putting-pals-module";
import "./env/schema";

async function syncLeaderboards() {
  const { tourService, leaderboardEventProcessor } = injectDependencies();

  const supportedTours = await tourService.getTours();
  const results = await Promise.allSettled(
    supportedTours.map((tour) =>
      leaderboardEventProcessor.processEvent(tour.tourCode).catch((err) => {
        // biome-ignore lint/suspicious/noConsole: error logging
        console.error(`processEvent failed for tourCode=${tour.tourCode}`, err);
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

syncLeaderboards()
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

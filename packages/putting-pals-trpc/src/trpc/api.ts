import { eventRouter } from "../router/event";
import { feedRouter } from "../router/feed";
import { leaderboardRouter } from "../router/leaderboard";
import { scheduleRouter } from "../router/schedule";
import { seasonRouter } from "../router/season";
import { statsRouter } from "../router/stats";
import { tourRouter } from "../router/tour";
import { tournamentRouter } from "../router/tournament";
import { createCallerFactory, router } from "./router";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = router({
  event: eventRouter,
  feed: feedRouter,
  leaderboard: leaderboardRouter,
  schedule: scheduleRouter,
  season: seasonRouter,
  stats: statsRouter,
  tour: tourRouter,
  tournament: tournamentRouter,
});

export type AppRouter = typeof appRouter;

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.post.all();
 *       ^? Post[]
 */
export const createCaller = createCallerFactory(appRouter);

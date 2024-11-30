import { competitionRouter } from "./router/competition";
import { leaderboardRouter } from "./router/leaderboard";
import { scheduleRouter } from "./router/schedule";
import { tournamentRouter } from "./router/tournament";
import { createCallerFactory, router } from "./trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = router({
  competition: competitionRouter,
  leaderboard: leaderboardRouter,
  schedule: scheduleRouter,
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

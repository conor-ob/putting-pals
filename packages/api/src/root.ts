import { pgaTourRouter } from "./pga-tour/routers/root";
import { puttingPalsRouter } from "./putting-pals/routers/root";
import { createCallerFactory, router } from "./trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = router({
  pgaTour: pgaTourRouter,
  puttingPals: puttingPalsRouter,
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

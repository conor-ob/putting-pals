import { z } from "zod";

import { PgaTourLeaderboardService } from "../service/pga/leaderboard";
import { PgaTourWebScrapingService } from "../service/pga/scraping";
import { publicProcedure, router } from "../trpc";

export const leaderboardRouter = router({
  getCurrent: publicProcedure.query(async ({ ctx }) => {
    const currentTournamentId =
      await new PgaTourWebScrapingService().getCurrentTournamentId();
    return await new PgaTourLeaderboardService({
      apiKey: ctx.apiKey,
    }).getLeaderboard({
      id: currentTournamentId,
    });
  }),

  getById: publicProcedure
    .input(z.object({ id: z.string().min(1) }))
    .query(({ ctx, input }) => {
      return new PgaTourLeaderboardService({
        apiKey: ctx.apiKey,
      }).getLeaderboard({
        id: input.id,
      });
    }),
});

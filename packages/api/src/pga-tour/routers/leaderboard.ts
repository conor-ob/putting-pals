import { z } from "zod";

import { publicProcedure, router } from "../../trpc";
import { PgaTourLeaderboardService } from "../services/leaderboard";
import { PgaTourWebScrapingService } from "../services/web-scraping";

export const leaderboardRouter = router({
  getById: publicProcedure
    .input(z.object({ id: z.string().optional() }))
    .query(async ({ ctx, input }) => {
      if (input.id === undefined) {
        const currentTournamentId =
          await new PgaTourWebScrapingService().getCurrentTournamentId();
        return await new PgaTourLeaderboardService({
          apiKey: ctx.apiKey,
        }).getLeaderboard({
          id: currentTournamentId,
        });
      } else {
        return new PgaTourLeaderboardService({
          apiKey: ctx.apiKey,
        }).getLeaderboard({
          id: input.id,
        });
      }
    }),
});

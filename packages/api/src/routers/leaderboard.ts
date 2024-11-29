import { z } from "zod";

import { PgaTourWebScrapingService } from "@pkg/data/scraper";

import { PgaTourLeaderboardService } from "../graphql/leaderboard";
import { publicProcedure, router } from "../trpc";

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

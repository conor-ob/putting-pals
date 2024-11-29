import { z } from "zod";

import { PgaTourWebScrapingService } from "@pkg/data/scraper";

import { mapLeaderboard } from "../service/leaderboard";
import { publicProcedure, router } from "../trpc";

export const leaderboardRouter = router({
  getById: publicProcedure
    .input(z.object({ id: z.string().optional() }))
    .query(async ({ ctx, input }) => {
      if (input.id === undefined) {
        const currentTournamentId =
          await new PgaTourWebScrapingService().getCurrentTournamentId();
        return mapLeaderboard({ apiKey: ctx.apiKey, id: currentTournamentId });
      } else {
        return mapLeaderboard({ apiKey: ctx.apiKey, id: input.id });
      }
    }),
});

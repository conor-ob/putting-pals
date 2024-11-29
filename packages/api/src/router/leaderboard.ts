import { z } from "zod";

import { PgaTourWebScraper } from "@pkg/data/scraper";

import { LeaderboardService } from "../service/leaderboard";
import { publicProcedure, router } from "../trpc";

export const leaderboardRouter = router({
  getById: publicProcedure
    .input(z.object({ id: z.string().optional() }))
    .query(async ({ input }) => {
      if (input.id === undefined) {
        const tournamentId =
          await new PgaTourWebScraper().getCurrentTournamentId();
        return new LeaderboardService().getLeaderboard(tournamentId);
      } else {
        return new LeaderboardService().getLeaderboard(input.id);
      }
    }),
});

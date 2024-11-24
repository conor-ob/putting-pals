import { z } from "zod";

import { publicProcedure, router } from "../../trpc";
import { PuttingPalsLeaderboardService } from "../services/leaderboard";
import { PuttingPalsRedirectsService } from "../services/redirect";

export const leaderboardRouter = router({
  getById: publicProcedure
    .input(z.object({ id: z.string().optional() }))
    .query(async ({ ctx, input }) => {
      if (input.id === undefined) {
        const currentTournamentId =
          new PuttingPalsRedirectsService().getCurrentTournamentId();
        return new PuttingPalsLeaderboardService({
          apiKey: ctx.apiKey,
        }).getLeaderboard({
          id: currentTournamentId,
        });
      } else {
        return new PuttingPalsLeaderboardService({
          apiKey: ctx.apiKey,
        }).getLeaderboard({
          id: input.id,
        });
      }
    }),
});

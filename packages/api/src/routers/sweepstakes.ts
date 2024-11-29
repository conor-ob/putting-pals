import { z } from "zod";

import { Database } from "@pkg/db";

import { publicProcedure, router } from "../trpc";
import { PuttingPalsLeaderboardService } from "./sweepstakes.service";

export const sweepstakesRouter = router({
  getById: publicProcedure
    .input(z.object({ id: z.string().optional() }))
    .query(async ({ ctx, input }) => {
      if (input.id === undefined) {
        const currentTournamentId = new Database().getCurrentTournamentId();
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

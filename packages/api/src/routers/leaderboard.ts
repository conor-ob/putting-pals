import { z } from "zod";

import { PgaTourLeaderboardService } from "../service/pga/leaderboard";
import { publicProcedure, router } from "../trpc";

export const leaderboardRouter = router({
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

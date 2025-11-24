import { LeaderboardService } from "@putting-pals/putting-pals-core/leaderboard";
import z from "zod";
import { publicProcedure, router } from "../trpc";

export const leaderboardRouter = router({
  getById: publicProcedure
    .input(z.object({ id: z.string().optional() }))
    .query(async ({ ctx, input }) => {
      return new LeaderboardService(ctx.apiKey).getLeaderboard(input.id);
    }),
});

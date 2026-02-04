import { publicProcedure, router } from "../trpc/router";
import { LeaderboardInputSchema } from "../validation/input-schema";
import { LeaderboardOutputSchema } from "../validation/output-schema";

export const leaderboardRouter = router({
  getById: publicProcedure
    .input(LeaderboardInputSchema)
    .output(LeaderboardOutputSchema)
    .query(async ({ ctx, input }) => {
      return ctx.leaderboardService.getLeaderboard(input.tourCode, input.id);
    }),
});

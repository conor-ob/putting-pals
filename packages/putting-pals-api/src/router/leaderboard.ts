import z from "zod";
import { publicProcedure, router } from "../trpc/router";
import {
  TourCodeInputSchema,
  TournamentIdInputSchema,
} from "../validation/input-schema";
import { LeaderboardOutputSchema } from "../validation/output-schema";

const LeaderboardInputSchema = z.object({
  tourCode: TourCodeInputSchema,
  id: TournamentIdInputSchema.optional(),
});

export const leaderboardRouter = router({
  getById: publicProcedure
    .input(LeaderboardInputSchema)
    .output(LeaderboardOutputSchema)
    .query(async ({ ctx, input }) => {
      return ctx.leaderboardService.getLeaderboard(input.tourCode, input.id);
    }),
});

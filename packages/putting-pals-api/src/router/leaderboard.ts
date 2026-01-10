import { LeaderboardService } from "@putting-pals/putting-pals-core/leaderboard";
import { TourCodeSchema } from "@putting-pals/putting-pals-schema";
import z from "zod";
import { publicProcedure, router } from "../trpc";
import { TournamentIdSchema } from "../validation/input-schema";

export const leaderboardRouter = router({
  getById: publicProcedure
    .input(
      z.object({
        tourCode: TourCodeSchema,
        id: TournamentIdSchema.optional(),
      }),
    )
    .query(async ({ input }) => {
      return new LeaderboardService().getLeaderboard(input.tourCode, input.id);
    }),
});

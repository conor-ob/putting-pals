import { LeaderboardService } from "@putting-pals/putting-pals-core/leaderboard";
import { TourCodeSchema } from "@putting-pals/putting-pals-schema/schemas";
import z from "zod";
import { publicProcedure, router } from "../trpc";
import { onError } from "../validation/error-handler";
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
      return new LeaderboardService()
        .getLeaderboard(input.tourCode, input.id)
        .catch(onError);
    }),
});

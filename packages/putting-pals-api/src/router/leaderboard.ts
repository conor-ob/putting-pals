import { LeaderboardService } from "@putting-pals/putting-pals-core/leaderboard";
import { ServiceError } from "@putting-pals/putting-pals-core/service-error";
import { TourCodeSchema } from "@putting-pals/putting-pals-schema/schemas";
import { TRPCError } from "@trpc/server";
import z from "zod";
import { publicProcedure, router } from "../trpc";

export const leaderboardRouter = router({
  getById: publicProcedure
    .input(
      z.object({
        tourCode: TourCodeSchema,
        id: z.string().optional(),
      }),
    )
    .query(async ({ input }) => {
      return new LeaderboardService()
        .getLeaderboard(input.tourCode, input.id)
        .catch((error) => {
          if (error instanceof ServiceError) {
            throw new TRPCError({ code: error.code, message: error.message });
          } else {
            throw new TRPCError({ code: "INTERNAL_SERVER_ERROR" });
          }
        });
    }),
});

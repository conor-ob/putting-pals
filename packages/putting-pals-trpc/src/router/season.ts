import z from "zod";
import { publicProcedure, router } from "../trpc/router";
import { TourCodeInputSchema } from "../validation/input-schema";

export const seasonRouter = router({
  get: publicProcedure
    .input(
      z.object({
        tourCode: TourCodeInputSchema,
      }),
    )
    .query(async ({ ctx, input }) => {
      return ctx.seasonService.getSeasons(input.tourCode);
    }),
});

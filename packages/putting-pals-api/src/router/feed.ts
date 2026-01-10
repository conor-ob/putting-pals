import z from "zod";
import { publicProcedure, router } from "../trpc";
import {
  TourCodeInputSchema,
  TournamentIdInputSchema,
} from "../validation/input-schema";

export const feedRouter = router({
  get: publicProcedure
    .input(
      z.object({
        tourCode: TourCodeInputSchema,
        id: TournamentIdInputSchema.optional(),
        cursor: z.int().positive().optional(),
      }),
    )
    .query(async ({ ctx, input }) => {
      return ctx.feedService.getFeed(input.tourCode, input.id, input.cursor);
    }),
});

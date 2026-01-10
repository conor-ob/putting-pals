import { DomainTourCodeSchema } from "@putting-pals/putting-pals-schema";
import z from "zod";
import { publicProcedure, router } from "../trpc";
import { TournamentIdSchema } from "../validation/input-schema";

export const feedRouter = router({
  get: publicProcedure
    .input(
      z.object({
        tourCode: DomainTourCodeSchema,
        id: TournamentIdSchema.optional(),
        cursor: z.int().positive().optional(),
      }),
    )
    .query(async ({ ctx, input }) => {
      return ctx.feedService.getFeed(input.tourCode, input.id, input.cursor);
    }),
});

import { FeedService } from "@putting-pals/putting-pals-core/feed";
import { TourCodeSchema } from "@putting-pals/putting-pals-schema/schemas";
import z from "zod";
import { publicProcedure, router } from "../trpc";

export const feedRouter = router({
  get: publicProcedure
    .input(
      z.object({
        tourCode: TourCodeSchema,
        cursor: z.int().positive().optional(),
      }),
    )
    .query(async ({ ctx, input }) => {
      return new FeedService(ctx.db).getFeed(input.tourCode, input.cursor);
    }),
});

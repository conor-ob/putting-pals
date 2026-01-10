import { FeedService } from "@putting-pals/putting-pals-core/feed";
import { TourCodeSchema } from "@putting-pals/putting-pals-schema";
import z from "zod";
import { publicProcedure, router } from "../trpc";
import { TournamentIdSchema } from "../validation/input-schema";

export const feedRouter = router({
  get: publicProcedure
    .input(
      z.object({
        tourCode: TourCodeSchema,
        id: TournamentIdSchema.optional(),
        cursor: z.int().positive().optional(),
      }),
    )
    .query(async ({ ctx, input }) => {
      return new FeedService(ctx.leaderboardFeedRepository).getFeed(
        input.tourCode,
        input.id,
        input.cursor,
      );
    }),
});

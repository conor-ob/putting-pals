import { LeaderboardEventProcessor } from "@putting-pals/putting-pals-core/leaderboard-event";
import { TourCodeSchema } from "@putting-pals/putting-pals-schema/schemas";
import { assertNever } from "@putting-pals/putting-pals-utils/type-utils";
import z from "zod";
import { publicProcedure, router } from "../trpc";

export const eventRouter = router({
  processEvent: publicProcedure
    .input(
      z.object({
        tourCode: TourCodeSchema,
        type: z.enum(["leaderboard/detect-change"]),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      switch (input.type) {
        case "leaderboard/detect-change":
          return await new LeaderboardEventProcessor(ctx.db).detectChange(
            input.tourCode,
          );
        default:
          assertNever(input.type);
      }
    }),
});

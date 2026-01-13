import { assertNever } from "@putting-pals/putting-pals-utils";
import z from "zod";
import { publicProcedure, router } from "../trpc/router";
import {
  EventTypeInputSchema,
  TourCodeInputSchema,
} from "../validation/input-schema";

export const eventRouter = router({
  processEvent: publicProcedure
    .input(
      z.object({
        tourCode: TourCodeInputSchema,
        type: EventTypeInputSchema,
      }),
    )
    .mutation(async ({ ctx, input }) => {
      switch (input.type) {
        case "leaderboard/detect-change":
          return await Promise.all([
            ctx.leaderboardEventProcessor.processEvent(input.tourCode),
          ]);
        default:
          assertNever(input.type);
      }
    }),
});

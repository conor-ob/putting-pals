import { LeaderboardEventProcessor } from "@putting-pals/putting-pals-core/leaderboard-event";
import { TourCodeSchema } from "@putting-pals/putting-pals-schema/schemas";
import { TRPCError } from "@trpc/server";
import z from "zod";
import { publicProcedure, router } from "../trpc";

export const eventRouter = router({
  processEvent: publicProcedure
    .input(
      z.object({
        tourCode: TourCodeSchema,
        type: z.enum(["leaderboard/update"]),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      switch (input.type) {
        case "leaderboard/update":
          return await new LeaderboardEventProcessor(ctx.db).processEvent(
            input.tourCode,
          );
        default:
          throw new TRPCError({
            code: "BAD_REQUEST",
            message: `Invalid event type: ${input.type}`,
          });
      }
    }),
});

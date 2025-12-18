import { TourCodeSchema } from "@putting-pals/putting-pals-schema/schemas";
import z from "zod";
import { publicProcedure, router } from "../trpc";

export const feedRouter = router({
  processFeed: publicProcedure
    .input(
      z.object({
        tourCode: TourCodeSchema,
      }),
    )
    .mutation(async ({ input }) => {
      // biome-ignore lint/suspicious/noConsole: testing
      console.log("processing feed for tour code", input.tourCode);
      return {
        message: "OK",
        tourCode: input.tourCode,
        timestamp: Date.now(),
      };
    }),
});

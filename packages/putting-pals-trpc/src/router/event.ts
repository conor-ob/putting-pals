import {
  InferenceTourCodeSchema,
  InferenceTypeSchema,
} from "@putting-pals/putting-pals-core";
import z from "zod";
import { publicProcedure, router } from "../trpc/router";
import { TourCodeInputSchema } from "../validation/input-schema";

export const eventRouter = router({
  syncLeaderboard: publicProcedure
    .input(
      z.object({
        tourCode: TourCodeInputSchema,
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.leaderboardEventProcessor.processEvent(input.tourCode);
    }),

  inferSchemaSetup: publicProcedure.query(() => {
    const tourCodes = InferenceTourCodeSchema.options;
    const schemaTypes = InferenceTypeSchema.options;
    return tourCodes.flatMap((tourCode) =>
      schemaTypes.map((type) => ({ tourCode, type })),
    );
  }),

  inferSchema: publicProcedure
    .input(
      z.object({
        tourCode: InferenceTourCodeSchema,
        type: InferenceTypeSchema,
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.schemaInferenceObserver.inferSchema(
        input.tourCode,
        input.type,
      );
    }),
});

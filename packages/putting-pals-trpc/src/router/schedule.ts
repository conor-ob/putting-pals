import z from "zod";
import { publicProcedure, router } from "../trpc/router";
import { TourCodeInputSchema } from "../validation/input-schema";

export const scheduleRouter = router({
  getScheduleYears: publicProcedure
    .input(
      z.object({
        tourCode: TourCodeInputSchema,
      }),
    )
    .query(async ({ ctx, input }) => {
      return ctx.scheduleYearsService.getScheduleYears(input.tourCode);
    }),

  getByYear: publicProcedure
    .input(
      z.object({
        tourCode: TourCodeInputSchema,
        year: z.string().optional(),
      }),
    )
    .query(async ({ ctx, input }) => {
      return ctx.scheduleService.getSchedule(input.tourCode, input.year);
    }),

  getUpcoming: publicProcedure
    .input(
      z.object({
        tourCode: TourCodeInputSchema,
      }),
    )
    .query(async ({ ctx, input }) => {
      return ctx.scheduleService.getUpcomingSchedule(input.tourCode);
    }),
});

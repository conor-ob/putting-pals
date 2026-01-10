import { DomainTourCodeSchema } from "@putting-pals/putting-pals-schema";
import z from "zod";
import { publicProcedure, router } from "../trpc";

export const scheduleRouter = router({
  getScheduleYears: publicProcedure
    .input(
      z.object({
        tourCode: DomainTourCodeSchema,
      }),
    )
    .query(async ({ ctx, input }) => {
      return ctx.scheduleYearsService.getScheduleYears(input.tourCode);
    }),

  getByYear: publicProcedure
    .input(
      z.object({
        tourCode: DomainTourCodeSchema,
        year: z.string().optional(),
      }),
    )
    .query(async ({ ctx, input }) => {
      return ctx.scheduleService.getSchedule(input.tourCode, input.year);
    }),

  getUpcoming: publicProcedure
    .input(
      z.object({
        tourCode: DomainTourCodeSchema,
      }),
    )
    .query(async ({ ctx, input }) => {
      return ctx.scheduleService.getUpcomingSchedule(input.tourCode);
    }),
});

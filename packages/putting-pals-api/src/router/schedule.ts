import { ScheduleService } from "@putting-pals/putting-pals-core/schedule";
import { TourCodeSchema } from "@putting-pals/putting-pals-schema";
import z from "zod";
import { ScheduleYearsService } from "../../../putting-pals-core/src/schedule/schedule-years-service";
import { publicProcedure, router } from "../trpc";

export const scheduleRouter = router({
  getScheduleYears: publicProcedure
    .input(
      z.object({
        tourCode: TourCodeSchema,
      }),
    )
    .query(async ({ input }) => {
      return new ScheduleYearsService().getScheduleYears(input.tourCode);
    }),

  getByYear: publicProcedure
    .input(
      z.object({
        tourCode: TourCodeSchema,
        year: z.string().optional(),
      }),
    )
    .query(async ({ input }) => {
      return new ScheduleService().getSchedule(input.tourCode, input.year);
    }),

  getUpcoming: publicProcedure
    .input(
      z.object({
        tourCode: TourCodeSchema,
      }),
    )
    .query(async ({ input }) => {
      return new ScheduleService().getUpcomingSchedule(input.tourCode);
    }),
});

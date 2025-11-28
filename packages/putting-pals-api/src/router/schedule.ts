import { ScheduleService } from "@putting-pals/putting-pals-core/schedule";
import { TourCodeSchema } from "@putting-pals/putting-pals-schema/schemas";
import z from "zod";
import { publicProcedure, router } from "../trpc";

export const scheduleRouter = router({
  getScheduleYears: publicProcedure
    .input(
      z.object({
        tourCode: TourCodeSchema,
      }),
    )
    .query(async ({ input }) => {
      return new ScheduleService().getScheduleYears(input.tourCode);
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
});

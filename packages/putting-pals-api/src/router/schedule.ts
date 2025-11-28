import { ScheduleService } from "@putting-pals/putting-pals-core/schedule";
import { TourCodeSchema } from "@putting-pals/putting-pals-schema/schemas";
import { TRPCError } from "@trpc/server";
import z from "zod";
import { publicProcedure, router } from "../trpc";
import { onError } from "../validation/error-handler";

export const scheduleRouter = router({
  getScheduleYears: publicProcedure
    .input(
      z.object({
        tourCode: TourCodeSchema,
      }),
    )
    .query(async ({ input }) => {
      return new ScheduleService()
        .getScheduleYears(input.tourCode)
        .catch(onError)
        .then((result) => {
          if (result instanceof TRPCError) {
            throw result;
          } else {
            return result;
          }
        });
    }),

  getByYear: publicProcedure
    .input(
      z.object({
        tourCode: TourCodeSchema,
        year: z.string().optional(),
      }),
    )
    .query(async ({ input }) => {
      return new ScheduleService()
        .getSchedule(input.tourCode, input.year)
        .catch(onError)
        .then((result) => {
          if (result instanceof TRPCError) {
            throw result;
          } else {
            return result;
          }
        });
    }),
});

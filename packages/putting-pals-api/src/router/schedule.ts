import { ScheduleService } from "@putting-pals/putting-pals-core/schedule";
import { ServiceError } from "@putting-pals/putting-pals-core/service-error";
import { TourCodeSchema } from "@putting-pals/putting-pals-schema/schemas";
import { TRPCError } from "@trpc/server";
import z from "zod";
import { publicProcedure, router } from "../trpc";

export const scheduleRouter = router({
  get: publicProcedure
    .input(
      z.object({
        tourCode: TourCodeSchema,
      }),
    )
    .query(async ({ input }) => {
      return new ScheduleService()
        .getSchedule(input.tourCode)
        .catch((error) => {
          if (error instanceof ServiceError) {
            throw new TRPCError({ code: error.code, message: error.message });
          } else {
            throw new TRPCError({ code: "INTERNAL_SERVER_ERROR" });
          }
        });
    }),
});

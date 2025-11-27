import { ScheduleService } from "@putting-pals/putting-pals-core/schedule";
import { ServiceError } from "@putting-pals/putting-pals-core/service-error";
import { TRPCError } from "@trpc/server";
import { publicProcedure, router } from "../trpc";

export const scheduleRouter = router({
  get: publicProcedure.query(async () => {
    return new ScheduleService().getSchedule().catch((error) => {
      if (error instanceof ServiceError) {
        throw new TRPCError({ code: error.code, message: error.message });
      } else {
        throw new TRPCError({ code: "INTERNAL_SERVER_ERROR" });
      }
    });
  }),
});

import { ScheduleService } from "@putting-pals/putting-pals-core/schedule";
import { publicProcedure, router } from "../trpc";

export const scheduleRouter = router({
  get: publicProcedure.query(() => {
    return new ScheduleService().getSchedule();
  }),
});

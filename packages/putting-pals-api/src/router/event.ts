import z from "zod";
import { publicProcedure, router } from "../trpc";

export const eventRouter = router({
  processEvent: publicProcedure
    .input(
      z.object({
        cron: z.string(),
        scheduledTime: z.number(),
      }),
    )
    .mutation(async ({ input }) => {
      // biome-ignore lint/suspicious/noConsole: testing
      console.log("processing event", input.cron, input.scheduledTime);
      return {
        message: "test 3",
        cron: input.cron,
        scheduledTime: input.scheduledTime,
        timestamp: Date.now(),
      };
    }),
});

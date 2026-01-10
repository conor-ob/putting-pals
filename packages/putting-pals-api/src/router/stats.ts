import { StatsService } from "@putting-pals/putting-pals-core/stats";
import { publicProcedure, router } from "../trpc";

export const statsRouter = router({
  getEarnings: publicProcedure.query(async ({ ctx }) => {
    return new StatsService(
      ctx.competitionService,
      ctx.tournamentService,
    ).getEarnings();
  }),
});

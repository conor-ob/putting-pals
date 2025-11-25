import { CompetitionService } from "@putting-pals/putting-pals-core/competition";
import { publicProcedure, router } from "../trpc";

export const competitionRouter = router({
  getAll: publicProcedure.query(() => {
    return new CompetitionService().getAllCompetitions();
  }),
});

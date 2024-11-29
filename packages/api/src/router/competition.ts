import { z } from "zod";

import { CompetitionDatabase } from "@pkg/db";

import { CompetitionService } from "../service/competition";
import { publicProcedure, router } from "../trpc";

export const competitionRouter = router({
  getById: publicProcedure
    .input(z.object({ id: z.string().optional() }))
    .query(async ({ input }) => {
      if (input.id === undefined) {
        const tournamentId = new CompetitionDatabase().getCurrentTournamentId();
        return new CompetitionService().getCompetition(tournamentId);
      } else {
        return new CompetitionService().getCompetition(input.id);
      }
    }),
});

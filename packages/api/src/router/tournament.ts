import { z } from "zod";

import { PgaTourWebScraper } from "@pkg/data/scraper";
import { CompetitionDatabase } from "@pkg/db";

import { TournamentService } from "../service/tournament";
import { publicProcedure, router } from "../trpc";

export const tournamentRouter = router({
  getById: publicProcedure
    .input(
      z.object({
        id: z.string().optional(),
      }),
    )
    .query(async ({ input }) => {
      if (input.id === undefined) {
        const tournamentId =
          await new PgaTourWebScraper().getCurrentTournamentId();
        return new TournamentService().getTournament(tournamentId);
      } else {
        return new TournamentService().getTournament(input.id);
      }
    }),

  getByCompetitionId: publicProcedure
    .input(
      z.object({
        id: z.string().optional(),
      }),
    )
    .query(async ({ input }) => {
      if (input.id === undefined) {
        const tournamentId = new CompetitionDatabase().getCurrentTournamentId();
        return new TournamentService().getTournament(tournamentId);
      } else {
        return new TournamentService().getTournament(input.id);
      }
    }),
});

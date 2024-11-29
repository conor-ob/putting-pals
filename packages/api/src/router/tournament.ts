import { z } from "zod";

import { PgaTourWebScraper } from "@pkg/data/scraper";
import { PoolDatabase } from "@pkg/db";

import { TournamentService } from "../service/tournament";
import { publicProcedure, router } from "../trpc";

export const tournamentRouter = router({
  getById: publicProcedure
    .input(
      z.object({
        context: z.enum(["DEFAULT", "POOL"]).default("DEFAULT"),
        id: z.string().optional(),
      }),
    )
    .query(async ({ input }) => {
      if (input.id === undefined) {
        let tournamentId: string;
        if (input.context === "POOL") {
          tournamentId = new PoolDatabase().getCurrentTournamentId();
        } else {
          tournamentId = await new PgaTourWebScraper().getCurrentTournamentId();
        }
        return new TournamentService().getTournament(tournamentId);
      } else {
        return new TournamentService().getTournament(input.id);
      }
    }),
});

import { z } from "zod";

import { PgaTourWebScrapingService } from "@pkg/data/scraper";
import { Database } from "@pkg/db";

import { mapTournament } from "../service/tournament";
import { publicProcedure, router } from "../trpc";

export const tournamentRouter = router({
  getById: publicProcedure
    .input(
      z.object({
        context: z.enum(["DEFAULT", "SWEEPSTAKES"]).default("DEFAULT"),
        id: z.string().optional(),
      }),
    )
    .query(async ({ ctx, input }) => {
      if (input.id === undefined) {
        let tournamentId: string;
        if (input.context === "SWEEPSTAKES") {
          tournamentId = new Database().getCurrentTournamentId();
        } else {
          tournamentId =
            await new PgaTourWebScrapingService().getCurrentTournamentId();
        }
        return mapTournament({
          apiKey: ctx.apiKey,
          id: tournamentId,
        });
      } else {
        return mapTournament({ apiKey: ctx.apiKey, id: input.id });
      }
    }),
});

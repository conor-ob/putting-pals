import { z } from "zod";

import { PgaTourWebScrapingService } from "@pkg/data/scraper";
import { Database } from "@pkg/db";

import { PgaTourTournamentService } from "../graphql/tournament";
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
        return await new PgaTourTournamentService({
          apiKey: ctx.apiKey,
        }).getTournament({
          id: tournamentId,
        });
      } else {
        return new PgaTourTournamentService({
          apiKey: ctx.apiKey,
        }).getTournament({
          id: input.id,
        });
      }
    }),

  getByIds: publicProcedure
    .input(z.object({ ids: z.array(z.string().min(1)) }))
    .query(({ ctx, input }) => {
      return new PgaTourTournamentService({
        apiKey: ctx.apiKey,
      }).getTournaments({
        ids: input.ids,
      });
    }),
});

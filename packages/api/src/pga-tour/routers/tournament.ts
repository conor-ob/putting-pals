import { z } from "zod";

import { publicProcedure, router } from "../../trpc";
import { PgaTourTournamentService } from "../services/tournament";
import { PgaTourWebScrapingService } from "../services/web-scraping";

export const tournamentRouter = router({
  getById: publicProcedure
    .input(z.object({ id: z.string().optional() }))
    .query(async ({ ctx, input }) => {
      if (input.id === undefined) {
        const currentTournamentId =
          await new PgaTourWebScrapingService().getCurrentTournamentId();
        return await new PgaTourTournamentService({
          apiKey: ctx.apiKey,
        }).getTournament({
          id: currentTournamentId,
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

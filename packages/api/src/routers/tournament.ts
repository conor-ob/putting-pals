import { z } from "zod";

import { PgaTourWebScrapingService } from "../service/pga/scraping";
import { PgaTourTournamentService } from "../service/pga/tournament";
import { publicProcedure, router } from "../trpc";

export const tournamentRouter = router({
  getCurrent: publicProcedure.query(async ({ ctx }) => {
    const currentTournamentId =
      await new PgaTourWebScrapingService().getCurrentTournamentId();
    return await new PgaTourTournamentService({
      apiKey: ctx.apiKey,
    }).getTournament({
      id: currentTournamentId,
    });
  }),

  getById: publicProcedure
    .input(z.object({ id: z.string().min(1) }))
    .query(({ ctx, input }) => {
      return new PgaTourTournamentService({
        apiKey: ctx.apiKey,
      }).getTournament({
        id: input.id,
      });
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

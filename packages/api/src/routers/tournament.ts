import { z } from "zod";

import { PgaTourWebScrapingService } from "../service/pga/scraping";
import { PgaTourTournamentService } from "../service/pga/tournament";
import { PuttingPalsRedirectsService } from "../service/pp/redirect";
import { publicProcedure, router } from "../trpc";

export const tournamentRouter = router({
  get: publicProcedure
    .input(z.object({ id: z.string().optional() }))
    .query(async ({ ctx, input }) => {
      if (input.id === undefined) {
        const currentTournamentId =
          new PuttingPalsRedirectsService().getCurrentTournamentId();
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

import { z } from "zod";

import { PgaTourTournamentService } from "../service/pga/tournament";
import { publicProcedure, router } from "../trpc";

export const tournamentRouter = router({
  getCurrent: publicProcedure.query(({ ctx }) => {
    const currentTournamentId = "R2024493";
    return new PgaTourTournamentService({
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

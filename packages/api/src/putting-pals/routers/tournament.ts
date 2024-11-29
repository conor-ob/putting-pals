import { z } from "zod";

import { PgaTourTournamentService } from "../../graphql/tournament";
import { publicProcedure, router } from "../../trpc";
import { PuttingPalsRedirectsService } from "../services/redirect";

export const tournamentRouter = router({
  getById: publicProcedure
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
});

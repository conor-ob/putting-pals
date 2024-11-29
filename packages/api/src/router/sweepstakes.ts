import { z } from "zod";

import { Database } from "@pkg/db";

import { mapSweepstakes } from "../service/sweepstakes";
import { publicProcedure, router } from "../trpc";

export const sweepstakesRouter = router({
  getById: publicProcedure
    .input(z.object({ id: z.string().optional() }))
    .query(async ({ ctx, input }) => {
      if (input.id === undefined) {
        const currentTournamentId = new Database().getCurrentTournamentId();
        return mapSweepstakes({ apiKey: ctx.apiKey, id: currentTournamentId });
      } else {
        return mapSweepstakes({ apiKey: ctx.apiKey, id: input.id });
      }
    }),
});

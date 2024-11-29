import { z } from "zod";

import { PoolDatabase } from "@pkg/db";

import { PoolService } from "../service/pool";
import { publicProcedure, router } from "../trpc";

export const poolRouter = router({
  getById: publicProcedure
    .input(z.object({ id: z.string().optional() }))
    .query(async ({ input }) => {
      if (input.id === undefined) {
        const tournamentId = new PoolDatabase().getCurrentTournamentId();
        return new PoolService().getPool(tournamentId);
      } else {
        return new PoolService().getPool(input.id);
      }
    }),
});

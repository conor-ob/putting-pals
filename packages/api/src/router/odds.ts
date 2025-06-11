import { z } from "zod";

import { OddsClient } from "@pkg/odds/client";

import { publicProcedure, router } from "../trpc";

export const oddsRouter = router({
  getById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input }) => {
      return new OddsClient().getPaddyPowerOdds(input.id);
    }),
});

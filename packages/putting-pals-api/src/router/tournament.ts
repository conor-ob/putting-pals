import { TournamentService } from "@putting-pals/putting-pals-core/tournament";
import z from "zod";
import { publicProcedure, router } from "../trpc";

export const tournamentRouter = router({
  getById: publicProcedure
    .input(z.object({ id: z.string().optional() }))
    .query(async ({ input }) => {
      return new TournamentService().getTournament(input.id);
    }),
});

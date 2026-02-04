import { publicProcedure, router } from "../trpc/router";
import { TournamentInputSchema } from "../validation/input-schema";
import { TournamentOutputSchema } from "../validation/output-schema";

export const tournamentRouter = router({
  getById: publicProcedure
    .input(TournamentInputSchema)
    .output(TournamentOutputSchema)
    .query(async ({ ctx, input }) => {
      return ctx.tournamentService.getTournament(input.tourCode, input.id);
    }),
});

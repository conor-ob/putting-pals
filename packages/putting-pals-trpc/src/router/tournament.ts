import { publicProcedure, router } from "../trpc/router";
import { TournamentInputSchema } from "../validation/input-schema";

export const tournamentRouter = router({
  getById: publicProcedure
    .input(TournamentInputSchema)
    // .output(TournamentOutputSchema)
    .query(async ({ ctx, input }) => {
      return ctx.tournamentService.getTournament(input.tourCode, input.id);
    }),
});

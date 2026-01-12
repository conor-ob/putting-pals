import z from "zod";
import { publicProcedure, router } from "../trpc/router";
import {
  TourCodeInputSchema,
  TournamentIdInputSchema,
} from "../validation/input-schema";
import { TournamentOutputSchema } from "../validation/output-schema";

const TournamentInputSchema = z.object({
  tourCode: TourCodeInputSchema,
  id: TournamentIdInputSchema.optional(),
});

export const tournamentRouter = router({
  getById: publicProcedure
    .input(TournamentInputSchema)
    .output(TournamentOutputSchema)
    .query(async ({ ctx, input }) => {
      return ctx.tournamentService.getTournament(input.tourCode, input.id);
    }),
});

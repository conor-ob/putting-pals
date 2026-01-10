import { DomainTourCodeSchema } from "@putting-pals/putting-pals-schema";
import z from "zod";
import { publicProcedure, router } from "../trpc";
import { TournamentIdSchema } from "../validation/input-schema";

export const tournamentRouter = router({
  getById: publicProcedure
    .input(
      z.object({
        tourCode: DomainTourCodeSchema,
        id: TournamentIdSchema.optional(),
      }),
    )
    .query(async ({ ctx, input }) => {
      return ctx.tournamentService.getTournament(input.tourCode, input.id);
    }),
});

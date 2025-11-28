import { TournamentService } from "@putting-pals/putting-pals-core/tournament";
import { TourCodeSchema } from "@putting-pals/putting-pals-schema/schemas";
import { TRPCError } from "@trpc/server";
import z from "zod";
import { publicProcedure, router } from "../trpc";
import { onError } from "../validation/error-handler";
import { TournamentIdSchema } from "../validation/input-schema";

export const tournamentRouter = router({
  getById: publicProcedure
    .input(
      z.object({
        tourCode: TourCodeSchema,
        id: TournamentIdSchema.optional(),
      }),
    )
    .query(async ({ input }) => {
      return new TournamentService()
        .getTournament(input.tourCode, input.id)
        .catch(onError)
        .then((result) => {
          if (result instanceof TRPCError) {
            throw result;
          } else {
            return result;
          }
        });
    }),
});

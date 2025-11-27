import { ServiceError } from "@putting-pals/putting-pals-core/service-error";
import { TournamentService } from "@putting-pals/putting-pals-core/tournament";
import { TourCodeSchema } from "@putting-pals/putting-pals-schema/schemas";
import { TRPCError } from "@trpc/server";
import z from "zod";
import { publicProcedure, router } from "../trpc";
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
        .catch((error) => {
          if (error instanceof ServiceError) {
            throw new TRPCError({ code: error.code, message: error.message });
          } else {
            throw new TRPCError({ code: "INTERNAL_SERVER_ERROR" });
          }
        });
    }),
});

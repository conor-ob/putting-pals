import { ServiceError } from "@putting-pals/putting-pals-core/service-error";
import { TournamentService } from "@putting-pals/putting-pals-core/tournament";
import { TRPCError } from "@trpc/server";
import z from "zod";
import { publicProcedure, router } from "../trpc";

export const tournamentRouter = router({
  getById: publicProcedure
    .input(z.object({ id: z.string().optional() }))
    .query(async ({ input }) => {
      return new TournamentService().getTournament(input.id).catch((error) => {
        if (error instanceof ServiceError) {
          throw new TRPCError({ code: error.code, message: error.message });
        } else {
          throw new TRPCError({ code: "INTERNAL_SERVER_ERROR" });
        }
      });
    }),
});

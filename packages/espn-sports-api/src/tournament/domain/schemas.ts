import { z } from "zod";

export const ApiActiveTournamentSchema = z.object({
  events: z.array(
    z.object({
      id: z.string(),
    }),
  ),
});

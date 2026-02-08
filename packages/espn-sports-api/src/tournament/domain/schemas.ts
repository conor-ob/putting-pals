import { z } from "zod";

export const ApiActiveTournamentSchema = z.object({
  events: z.array(
    z.object({
      id: z.string(),
    }),
  ),
});

export const ApiTournamentSeasonSchema = z.object({
  events: z.array(
    z.object({
      season: z.object({
        year: z.number(),
      }),
    }),
  ),
});

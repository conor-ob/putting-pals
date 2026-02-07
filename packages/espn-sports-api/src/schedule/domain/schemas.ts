import { z } from "zod";

export const ApiScheduleSchema = z.object({
  dropdowns: z.object({
    seasons: z.array(
      z.object({
        value: z.number(),
        label: z.string(),
        paramValue: z.number(),
      }),
    ),
    currentSeason: z.number(),
  }),
  formattedSeason: z.string(),
  requestedSeason: z.number(),
  tourScheduleName: z.string(),
  seasonYear: z.string(),
});

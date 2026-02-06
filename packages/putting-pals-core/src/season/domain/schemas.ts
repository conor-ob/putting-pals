import z from "zod";

export const SeasonSchema = z.object({
  current: z.boolean(),
  displayValue: z.string(),
  value: z.number(),
});

import z from "zod";

export const PlayerSchema = z.object({
  id: z.string(),
  displayName: z.string(),
});

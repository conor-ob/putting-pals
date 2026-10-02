import { z } from "zod";

export const envSchema = z.object({
  NODE_ENV: z
    .enum(["production", "development", "test"])
    .default("development"),
  PORT: z
    .string()
    .default("3000")
    .transform((s) => parseInt(s, 10))
    .pipe(z.number()),
});

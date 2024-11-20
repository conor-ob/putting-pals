import { z } from "zod";

export const envSchema = z.object({
  NODE_ENV: z
    .enum(["production", "development", "test"])
    .default("development"),
  PORT: z
    .string()
    .transform((s) => parseInt(s, 10))
    .pipe(z.number())
    .default("3000"),
  SENTRY_DSN: z.string().url(),
  SENTRY_PROJECT: z.string().min(1),
  CI: z
    .string()
    .default("false")
    .transform((s) => s === "true")
    .pipe(z.boolean()),
  GIT_COMMIT_SHA: z.string().min(1),
});

import * as child from "child_process";
import { config as dotenv } from "dotenv";
import { z } from "zod";

dotenv({
  encoding: "utf8",
});

const envSchema = z.object({
  NODE_ENV: z
    .enum(["production", "development", "test"])
    .default("development"),
  PORT: z
    .string()
    .transform((s) => parseInt(s, 10))
    .pipe(z.number()),
  ORIGIN: z.string().url(),
  DATABASE_URL: z.string().url(),
  DATABASE_PREFIX: z.string().min(1),
  SENTRY_DSN: z.string().url(),
  SENTRY_PROJECT: z.string().min(1),
  CI: z
    .string()
    .default("false")
    .transform((s) => s === "true")
    .pipe(z.boolean()),
  GIT_COMMIT_SHA: z.string().min(1),
});

export const env = envSchema.parse({
  ...process.env,
  SENTRY_PROJECT: "turbostack-server", // TODO CHANGEME
  GIT_COMMIT_SHA:
    process.env.RAILWAY_GIT_COMMIT_SHA ??
    process.env.GITHUB_SHA ??
    child.execSync("git rev-parse HEAD").toString().trim(),
});

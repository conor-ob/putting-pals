import { config as dotenv } from "dotenv";
import { z } from "zod";

dotenv({
  encoding: "utf8",
  quiet: process.env.NODE_ENV === "production",
  debug: process.env.NODE_ENV !== "production",
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
  CI: z
    .string()
    .default("false")
    .transform((s) => s === "true")
    .pipe(z.boolean()),
});

export const env = envSchema.parse(process.env);

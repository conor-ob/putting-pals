import { getDatabaseUrlSchema } from "@putting-pals/putting-pals-utils/schema-utils";
import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z
    .enum(["production", "development", "test"])
    .default("development"),
  PORT: z
    .string()
    .transform((s) => parseInt(s, 10))
    .pipe(z.number()),
  ORIGIN: z.url(),
  DATABASE_URL: getDatabaseUrlSchema(),
  CI: z
    .string()
    .default("false")
    .transform((s) => s === "true")
    .pipe(z.boolean()),
});

export const env = envSchema.parse(process.env);

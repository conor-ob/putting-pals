import { config as dotenv } from "dotenv";
import { z } from "zod";

dotenv({
  path: "../../apps/server/.env",
  encoding: "utf8",
});

const envSchema = z.object({
  NODE_ENV: z
    .enum(["production", "development", "test"])
    .default("development"),
  DATABASE_URL: z.string().url(),
  DATABASE_PREFIX: z.string().min(1),
});

export const env = envSchema.parse(process.env);

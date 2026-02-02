import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z
    .enum(["production", "development", "test"])
    .default("development"),
  EXPO_PUBLIC_SERVER_URL: z.url(),
});

export const env = envSchema.parse(process.env);

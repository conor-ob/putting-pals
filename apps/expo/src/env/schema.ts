import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z
    .enum(["production", "development", "test"])
    .default("development"),
  EXPO_PUBLIC_SERVER_URL: z.url(),
});

// biome-ignore lint/suspicious/noConsole: testing
console.log("process.env", process.env);

export const env = envSchema.parse(process.env);

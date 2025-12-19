import { config as dotenv } from "dotenv";
import { z } from "zod";

// Only load .env file in development; in production (Railway), use environment variables directly
if (process.env.NODE_ENV !== "production") {
  dotenv({
    encoding: "utf8",
    quiet: false,
    debug: true,
  });
}

const envSchema = z.object({
  TRPC_API_URL: z.url(),
});

export const env = envSchema.parse(process.env);

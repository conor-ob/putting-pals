import { config as dotenv } from "dotenv";
import { z } from "zod";

dotenv({
  encoding: "utf8",
  quiet: process.env.NODE_ENV === "production",
  debug: process.env.NODE_ENV !== "production",
});

const envSchema = z.object({
  TRPC_API_URL: z.url().default("http://localhost:4000/trpc"),
});

export const env = envSchema.parse(process.env);

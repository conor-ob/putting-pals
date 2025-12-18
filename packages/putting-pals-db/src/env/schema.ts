import { config as dotenv } from "dotenv";
import { z } from "zod";

dotenv({
  encoding: "utf8",
  quiet: process.env.NODE_ENV === "production",
  debug: process.env.NODE_ENV !== "production",
});

const envSchema = z.object({
  DATABASE_URL: z.url(),
});

export const env = envSchema.parse(process.env);

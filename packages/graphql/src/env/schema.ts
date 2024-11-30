import { config as dotenv } from "dotenv";
import { z } from "zod";

dotenv({
  path: "../../apps/server/.env",
  encoding: "utf8",
});

const envSchema = z.object({
  PGA_TOUR_API_KEY: z.string().min(1),
});

export const env = envSchema.parse(process.env);

import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
  SERVER_URL: z.url(),
});

export const env = envSchema.parse(process.env);

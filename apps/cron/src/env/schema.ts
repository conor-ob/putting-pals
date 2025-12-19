import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
  TRPC_API_URL: z.url(),
});

// biome-ignore lint/suspicious/noConsole: debugging
console.log("process.env", process.env);

export const env = envSchema.parse(process.env);

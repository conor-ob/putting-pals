import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
  TRPC_API_URL: z.url(),
});

export function validateEnv(env: Env) {
  return envSchema.parse(env);
}

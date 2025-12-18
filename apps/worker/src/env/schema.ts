import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
  TRPC_API_URL: z.url(),
  MY_VAR: z.string(),
});

export function validateEnv(env: Env) {
  return envSchema.parse(env);
}

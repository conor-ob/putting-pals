import type { z } from "zod";
import { envSchema } from "./schema";

let env: z.infer<typeof envSchema> | undefined;

// Parsed on first use rather than on import, so the importing app has loaded
// its .env by then, whatever order its bundle evaluates modules in
export function getEnv() {
  env ??= envSchema.parse(process.env);
  return env;
}

import { getDatabaseUrlSchema } from "@putting-pals/putting-pals-utils";
import { z } from "zod";

// This is a library, so it never loads a .env itself: the app importing it
// (or drizzle.config.ts when running drizzle-kit) owns the .env
export const envSchema = z.object({
  DATABASE_URL: getDatabaseUrlSchema(),
});

// a .env file must only contain keys declared in the schema
export const dotenvSchema = z.strictObject(envSchema.shape);

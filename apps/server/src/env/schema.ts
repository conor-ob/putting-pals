import { getDatabaseUrlSchema } from "@putting-pals/putting-pals-utils";
import { config as dotenv } from "dotenv";
import { z } from "zod";

// load .env before building the schema, getDatabaseUrlSchema reads NODE_ENV
const { parsed, error } = dotenv({ encoding: "utf8", quiet: true });

const envSchema = z.object({
  NODE_ENV: z.enum(["production", "development", "test"]),
  PORT: z.coerce.number().int(),
  DATABASE_URL: getDatabaseUrlSchema(),
});

// a .env file must only contain keys declared in the schema
export const dotenvSchema = z.strictObject(envSchema.shape);
// dotenv returns an empty object and an ENOENT error when there is no .env
if (error === undefined) {
  dotenvSchema.parse(parsed);
}

export const env = envSchema.parse(process.env);

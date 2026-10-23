import { config as dotenv } from "dotenv";
import { defineConfig } from "drizzle-kit";
import { dotenvSchema, envSchema } from "./src/env/schema";

const { parsed, error } = dotenv({ encoding: "utf8", quiet: true });
// dotenv returns an empty object and an ENOENT error when there is no .env
if (error === undefined) {
  dotenvSchema.parse(parsed);
}
const env = envSchema.parse(process.env);

export default defineConfig({
  out: "./drizzle",
  schema: "./src/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
});

import { drizzle } from "drizzle-orm/node-postgres";
import { env } from "./env/schema";

export function createDatabaseConnection() {
  return drizzle(env.DATABASE_URL);
}

export type Database = ReturnType<typeof createDatabaseConnection>;

export * from "./repository/repository";

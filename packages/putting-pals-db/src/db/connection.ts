import { drizzle } from "drizzle-orm/node-postgres";
import { env } from "../env/schema";

export function createDatabaseConnection() {
  return drizzle(env.DATABASE_URL);
}

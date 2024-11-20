import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

import { env } from "./env/schema";
import * as schema from "./schema";

const client = postgres(env.DATABASE_URL);
export const db = drizzle(client, {
  schema,
  casing: "snake_case",
  logger: env.NODE_ENV === "development",
});

// import { env } from "~/server/env";

// export let db: PostgresJsDatabase<typeof schema>;

// declare global {
//   // eslint-disable-next-line no-var
//   var __db__: PostgresJsDatabase<typeof schema>;
// }

// const client = postgres(env.DATABASE_URL);
// if (env.NODE_ENV === "production") {
//   db = drizzle(client, { schema });
// } else {
//   global.__db__ = global.__db__ || drizzle(client, { schema, logger: true });
//   db = global.__db__;
// }

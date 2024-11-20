import { type Config } from "drizzle-kit";

import { env } from "./src/env/schema";

export default {
  schema: "./src/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
  tablesFilter: [`${env.DATABASE_PREFIX}_*`],
} satisfies Config;

import { createRequire } from "node:module";
import * as path from "node:path";
import { drizzle } from "drizzle-orm/node-postgres";
import { migrate } from "drizzle-orm/node-postgres/migrator";
import { Pool } from "pg";
import { env } from "../env/schema";

// Resolve via the package rather than this file's location so the drizzle
// folder is still found when this module is bundled into another app
function getMigrationsFolder() {
  const require = createRequire(import.meta.url);
  const packageJson = require.resolve(
    "@putting-pals/putting-pals-db/package.json",
  );
  return path.join(path.dirname(packageJson), "drizzle");
}

export async function runMigrations() {
  const pool = new Pool({
    connectionString: env.DATABASE_URL,
    connectionTimeoutMillis: 10000,
    max: 1,
    application_name: "putting-pals-migrate",
  });

  try {
    await migrate(drizzle(pool), {
      migrationsFolder: getMigrationsFolder(),
    });
  } finally {
    await pool.end();
  }
}

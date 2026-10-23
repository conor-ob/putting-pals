import { runMigrations } from "@putting-pals/putting-pals-db";

// Runs as the Railway pre-deploy command so the schema is migrated before the
// new server deployment receives traffic. A non-zero exit aborts the deploy.
try {
  await runMigrations();
  // biome-ignore lint/suspicious/noConsole: migration script
  console.log("Database migrations applied");
} catch (error) {
  // biome-ignore lint/suspicious/noConsole: migration script
  console.error("Database migrations failed:", error);
  process.exit(1);
}

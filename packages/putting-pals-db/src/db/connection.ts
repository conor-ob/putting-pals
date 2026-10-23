import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import { env } from "../env/schema";

export function createDatabaseConnection() {
  const pool = new Pool({
    connectionString: env.DATABASE_URL,

    // ═══════════════════════════════════════════════════════════════════
    // POOL MANAGEMENT
    // ═══════════════════════════════════════════════════════════════════

    max: 20,
    // WHY: Limits concurrent connections. Railway Postgres has connection
    // limits. 20 is a safe default that allows parallelism without
    // exhausting the database.

    min: 0,
    // WHY: Changed from 2 → 0. Pre-warming connections sounds good but
    // can cause issues: if DB restarts, those 2 connections become zombies.
    // Let the pool create connections on-demand. Simpler = more resilient.

    idleTimeoutMillis: 30000,
    // WHY: Close unused connections after 30s. Prevents connection hoarding
    // and allows the DB to reclaim resources. Good balance for a cron job
    // that runs periodically.

    // ═══════════════════════════════════════════════════════════════════
    // TIMEOUTS (CRITICAL - prevents 2+ minute hangs!)
    // ═══════════════════════════════════════════════════════════════════

    connectionTimeoutMillis: 5000,
    // WHY: This is the KEY fix for your ETIMEDOUT issue. Without this,
    // connection attempts wait for the OS TCP timeout (~2 min). With this,
    // you'll fail fast in 5 seconds if DB is unreachable.

    query_timeout: 30000,
    // WHY: Prevents runaway queries from blocking forever. 30s is generous
    // for your aggregate queries. Adjust based on your slowest expected query.

    // ═══════════════════════════════════════════════════════════════════
    // CONNECTION HEALTH (detects dead connections)
    // ═══════════════════════════════════════════════════════════════════

    keepAlive: true,
    // WHY: Enables TCP keep-alive probes. When the DB crashes (like yours
    // did), the OS will detect dead connections via keep-alive instead of
    // waiting for the next query to fail.

    keepAliveInitialDelayMillis: 10000,
    // WHY: Start sending keep-alive probes after 10s of idle. This helps
    // detect DB crashes even on idle connections.

    maxLifetimeSeconds: 1800,
    // WHY: Force-recycle connections after 30 minutes. This ensures
    // connections don't get "stale" from network changes, DB restarts,
    // or load balancer timeouts (common in cloud environments like Railway).

    // ═══════════════════════════════════════════════════════════════════
    // DEBUGGING
    // ═══════════════════════════════════════════════════════════════════

    application_name: "putting-pals",
    // WHY: Shows up in pg_stat_activity. Helps identify which app is
    // connected when debugging DB issues.

    allowExitOnIdle: false,
    // WHY: Keep false for a server. Set true only for scripts that should
    // exit after work is done.
  });

  pool.on("error", (err) => {
    // biome-ignore lint/suspicious/noConsole: pool error
    console.error("Unexpected pool error:", err);
  });

  return drizzle(pool);
}

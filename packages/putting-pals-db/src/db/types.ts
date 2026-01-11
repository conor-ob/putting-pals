import type { createDatabaseConnection } from "./connection";

export type Database = ReturnType<typeof createDatabaseConnection>;

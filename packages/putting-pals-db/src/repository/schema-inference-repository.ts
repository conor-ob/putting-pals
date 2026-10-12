import type {
  InferenceType,
  InferredSchema,
  SchemaInferenceRepository,
} from "@putting-pals/putting-pals-core";
import { eq, sql } from "drizzle-orm";
import type { inferredSchemaTable } from "../db/schema";
import type { Database } from "../db/types";

export class SchemaInferencePostgresRepository
  implements SchemaInferenceRepository
{
  constructor(
    private readonly db: Database,
    private readonly table: typeof inferredSchemaTable,
  ) {
    this.db = db;
    this.table = table;
  }

  async updateSchema(
    type: InferenceType,
    update: (current: InferredSchema | undefined) => InferredSchema,
  ): Promise<void> {
    await this.db.transaction(async (tx) => {
      // Serialize read-merge-write per type. A row lock (FOR UPDATE) can't do
      // this before the first insert, when there is no row to lock
      await tx.execute(
        sql`select pg_advisory_xact_lock(hashtext(${`inferred_schema:${type}`}))`,
      );

      const [row] = await tx
        .select({ payload: this.table.payload })
        .from(this.table)
        .where(eq(this.table.type, type))
        .limit(1);
      const payload = update(row?.payload);

      if (row === undefined) {
        await tx.insert(this.table).values({ type, payload });
      } else {
        await tx
          .update(this.table)
          .set({ payload })
          .where(eq(this.table.type, type));
      }
    });
  }
}

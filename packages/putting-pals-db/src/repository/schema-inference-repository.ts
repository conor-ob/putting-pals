import type {
  InferenceType,
  InferredSchema,
  SchemaInferenceRepository,
} from "@putting-pals/putting-pals-core";
import { eq } from "drizzle-orm";
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

  async getSchema(type: InferenceType): Promise<InferredSchema | undefined> {
    return await this.db
      .select()
      .from(this.table)
      .where(eq(this.table.type, type))
      .limit(1)
      .then(([row]) => row?.payload);
  }

  async createSchema(
    type: InferenceType,
    schema: InferredSchema,
  ): Promise<void> {
    await this.db.insert(this.table).values({ type, payload: schema });
  }

  async updateSchema(
    type: InferenceType,
    schema: InferredSchema,
  ): Promise<void> {
    await this.db
      .update(this.table)
      .set({ payload: schema })
      .where(eq(this.table.type, type));
  }
}

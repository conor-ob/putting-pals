import type {
  InferredSchemaChange,
  SchemaInferenceChangeRepository,
} from "@putting-pals/putting-pals-core";
import type { inferredSchemaChangeTable } from "../db/schema";
import type { Database } from "../db/types";

export class SchemaInferenceChangePostgresRepository
  implements SchemaInferenceChangeRepository
{
  constructor(
    private readonly db: Database,
    private readonly table: typeof inferredSchemaChangeTable,
  ) {
    this.db = db;
    this.table = table;
  }

  async createChanges(changes: InferredSchemaChange[]): Promise<void> {
    await this.db
      .insert(this.table)
      .values(changes.map((change) => ({ payload: change })));
  }
}

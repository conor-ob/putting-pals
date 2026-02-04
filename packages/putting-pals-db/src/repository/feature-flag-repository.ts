import type {
  FeatureFlagKey,
  FeatureFlagRepository,
} from "@putting-pals/putting-pals-core";
import { eq } from "drizzle-orm";
import type { featureFlagTable } from "../db/schema";
import type { Database } from "../db/types";

export class FeatureFlagPostgresRepository implements FeatureFlagRepository {
  constructor(
    private readonly db: Database,
    private readonly table: typeof featureFlagTable,
  ) {
    this.db = db;
    this.table = table;
  }

  async isFeatureFlagEnabled(flag: FeatureFlagKey): Promise<boolean> {
    const featureFlag = await this.db
      .select()
      .from(this.table)
      .where(eq(this.table.flagKey, flag))
      .limit(1)
      .then(([row]) => row);

    if (featureFlag === undefined) {
      await this.db
        .insert(this.table)
        .values({
          flagKey: flag,
          enabled: false,
        })
        .returning();

      return false;
    }

    return featureFlag.enabled;
  }
}

import type {
  FeatureFlagKey,
  FeatureFlagRepository,
} from "@putting-pals/putting-pals-core";
import { eq } from "drizzle-orm";
import { featureFlagTable } from "../db/schema";
import type { Database } from "../db/types";

export class FeatureFlagPostgresRepository implements FeatureFlagRepository {
  constructor(private readonly db: Database) {
    this.db = db;
  }

  async isFeatureFlagEnabled(flag: FeatureFlagKey): Promise<boolean> {
    const featureFlag = await this.db
      .select()
      .from(featureFlagTable)
      .where(eq(featureFlagTable.flagKey, flag))
      .limit(1)
      .then(([row]) => row);

    if (featureFlag === undefined) {
      await this.db
        .insert(featureFlagTable)
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

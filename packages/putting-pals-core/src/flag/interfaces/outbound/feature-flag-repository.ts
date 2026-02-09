import type { FeatureFlagKey } from "../../domain/types";

export interface FeatureFlagRepository {
  isFeatureFlagEnabled(
    flag: FeatureFlagKey,
    defaultValue: boolean,
  ): Promise<boolean>;
}

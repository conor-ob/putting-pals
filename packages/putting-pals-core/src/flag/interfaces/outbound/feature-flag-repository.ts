import type { FeatureFlagKey } from "../../domain/types";

export interface FeatureFlagRepository {
  isFeatureFlagEnabled(flag: FeatureFlagKey): Promise<boolean>;
}

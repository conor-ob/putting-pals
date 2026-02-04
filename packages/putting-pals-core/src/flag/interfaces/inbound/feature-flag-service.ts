import type { FeatureFlagKey } from "../../domain/types";

export interface FeatureFlagService {
  isFeatureFlagEnabled(flag: FeatureFlagKey): Promise<boolean>;
}

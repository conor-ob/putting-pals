import type { FeatureFlag } from "../../domain/types";

export interface FeatureFlagService {
  isFeatureFlagEnabled(flag: FeatureFlag): boolean;
}

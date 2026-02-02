export type FeatureFlag = "enable-dp-world-tour";

export interface FeatureFlagService {
  isFeatureFlagEnabled(flag: FeatureFlag): boolean;
}

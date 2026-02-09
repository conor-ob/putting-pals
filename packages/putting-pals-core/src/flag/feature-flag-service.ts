import type { FeatureFlagKey } from "./domain/types";
import type { FeatureFlagService } from "./interfaces/inbound/feature-flag-service";
import type { FeatureFlagRepository } from "./interfaces/outbound/feature-flag-repository";

export class FeatureFlagServiceImpl implements FeatureFlagService {
  constructor(private readonly featureFlagRepository: FeatureFlagRepository) {
    this.featureFlagRepository = featureFlagRepository;
  }

  async isFeatureFlagEnabled(
    flag: FeatureFlagKey,
    defaultValue: boolean,
  ): Promise<boolean> {
    return this.featureFlagRepository.isFeatureFlagEnabled(flag, defaultValue);
  }
}

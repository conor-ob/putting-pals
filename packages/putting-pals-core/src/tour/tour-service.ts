import type { FeatureFlagKey } from "../flag/domain/types";
import type { FeatureFlagService } from "../flag/interfaces/inbound/feature-flag-service";
import { TourSchema } from "./domain/schemas";
import type { Tour, TourCode } from "./domain/types";
import type { TourService } from "./interfaces/inbound/tour-service";

const TOURS: Tour[] = TourSchema.options.map((option) =>
  TourSchema.parse({
    tourCode: option.shape.tourCode.value,
    tourName: option.shape.tourName.value,
  }),
);

const TOUR_FEATURE_FLAGS: Partial<Record<TourCode, FeatureFlagKey>> = {
  eur: "enable-dp-world-tour",
  liv: "enable-liv-golf-tour",
  dev: "enable-korn-ferry-tour",
  snr: "enable-pga-tour-champions",
  pam: "enable-pga-tour-americas",
};

export class TourServiceImpl implements TourService {
  constructor(private readonly featureFlagService: FeatureFlagService) {
    this.featureFlagService = featureFlagService;
  }

  async getTours(): Promise<Tour[]> {
    const tours = await Promise.all(
      TOURS.map(async (tour) => {
        const featureFlag = TOUR_FEATURE_FLAGS[tour.tourCode];
        const isEnabled =
          featureFlag === undefined ||
          (await this.featureFlagService.isFeatureFlagEnabled(
            featureFlag,
            false,
          ));
        return isEnabled ? tour : undefined;
      }),
    );

    return tours.filter((tour) => tour !== undefined);
  }
}

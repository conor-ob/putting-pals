import type { FeatureFlagService } from "../flag/interfaces/inbound/feature-flag-service";
import type { Tour } from "./domain/types";
import type { TourService } from "./interfaces/inbound/tour-service";

export class TourServiceImpl implements TourService {
  constructor(private readonly featureFlagService: FeatureFlagService) {
    this.featureFlagService = featureFlagService;
  }

  async getTours(): Promise<readonly Tour[]> {
    const allSupportedTours = [
      {
        tourCode: "P" as const,
        tourName: "Putting Pals Tour",
      },
      {
        tourCode: "R" as const,
        tourName: "PGA TOUR",
      },
      {
        tourCode: "D" as const,
        tourName: "DP World Tour",
      },
      {
        tourCode: "S" as const,
        tourName: "PGA TOUR Champions",
      },
      {
        tourCode: "H" as const,
        tourName: "Korn Ferry Tour",
      },
      {
        tourCode: "Y" as const,
        tourName: "PGA TOUR Americas",
      },
    ];

    if (this.featureFlagService.isFeatureFlagEnabled("enable-dp-world-tour")) {
      return allSupportedTours;
    } else {
      return allSupportedTours.filter((tour) => tour.tourCode !== "D");
    }
  }
}

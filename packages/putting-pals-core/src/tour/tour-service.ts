import type { FeatureFlagService } from "../flag/interfaces/inbound/feature-flag-service";
import type { Tour } from "./domain/types";
import type { TourService } from "./interfaces/inbound/tour-service";

export class TourServiceImpl implements TourService {
  constructor(private readonly featureFlagService: FeatureFlagService) {
    this.featureFlagService = featureFlagService;
  }

  async getTours(): Promise<Tour[]> {
    const allTours = [
      {
        tourCode: "putting-pals-tour" as const,
        tourName: "Putting Pals Tour" as const,
      },
      {
        tourCode: "pga-tour" as const,
        tourName: "PGA TOUR" as const,
      },
      {
        tourCode: "dp-world-tour" as const,
        tourName: "DP World Tour" as const,
      },
      {
        tourCode: "liv-golf-tour" as const,
        tourName: "LIV Golf Tour" as const,
      },
      {
        tourCode: "korn-ferry-tour" as const,
        tourName: "Korn Ferry Tour" as const,
      },
      {
        tourCode: "pga-tour-champions" as const,
        tourName: "PGA TOUR Champions" as const,
      },
      {
        tourCode: "pga-tour-americas" as const,
        tourName: "PGA TOUR Americas" as const,
      },
    ];

    const [isDpWorldTourEnabled, isLivGolfTourEnabled] = await Promise.all([
      this.featureFlagService.isFeatureFlagEnabled("enable-dp-world-tour"),
      this.featureFlagService.isFeatureFlagEnabled("enable-liv-golf-tour"),
    ]);

    return allTours.filter((tour) => {
      if (tour.tourCode === "dp-world-tour") {
        return isDpWorldTourEnabled;
      } else if (tour.tourCode === "liv-golf-tour") {
        return isLivGolfTourEnabled;
      } else {
        return true;
      }
    });
  }
}

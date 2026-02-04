import type { FeatureFlagService } from "../flag/interfaces/inbound/feature-flag-service";
import type { Tour } from "./domain/types";
import type { TourService } from "./interfaces/inbound/tour-service";

export class TourServiceImpl implements TourService {
  constructor(private readonly featureFlagService: FeatureFlagService) {
    this.featureFlagService = featureFlagService;
  }

  async getTours(): Promise<readonly Tour[]> {
    const allTours = [
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
        tourCode: "L" as const,
        tourName: "LIV Golf Tour",
      },
      {
        tourCode: "H" as const,
        tourName: "Korn Ferry Tour",
      },
      {
        tourCode: "S" as const,
        tourName: "PGA TOUR Champions",
      },
      {
        tourCode: "Y" as const,
        tourName: "PGA TOUR Americas",
      },
    ];

    const [isDpWorldTourEnabled, isLivGolfTourEnabled] = await Promise.all([
      this.featureFlagService.isFeatureFlagEnabled("enable-dp-world-tour"),
      this.featureFlagService.isFeatureFlagEnabled("enable-liv-golf-tour"),
    ]);

    return allTours.filter((tour) => {
      if (tour.tourCode === "D") {
        return isDpWorldTourEnabled;
      } else if (tour.tourCode === "L") {
        return isLivGolfTourEnabled;
      } else {
        return true;
      }
    });
  }
}

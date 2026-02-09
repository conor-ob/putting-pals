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
        tourCode: "pal" as const,
        tourName: "Putting Pals Tour" as const,
      },
      {
        tourCode: "pga" as const,
        tourName: "PGA TOUR" as const,
      },
      {
        tourCode: "eur" as const,
        tourName: "DP World Tour" as const,
      },
      {
        tourCode: "liv" as const,
        tourName: "LIV Golf Tour" as const,
      },
      {
        tourCode: "dev" as const,
        tourName: "Korn Ferry Tour" as const,
      },
      {
        tourCode: "snr" as const,
        tourName: "PGA TOUR Champions" as const,
      },
      {
        tourCode: "pam" as const,
        tourName: "PGA TOUR Americas" as const,
      },
    ];

    const [isDpWorldTourEnabled, isLivGolfTourEnabled] = await Promise.all([
      this.featureFlagService.isFeatureFlagEnabled(
        "enable-dp-world-tour",
        true,
      ),
      this.featureFlagService.isFeatureFlagEnabled(
        "enable-liv-golf-tour",
        true,
      ),
    ]);

    return allTours.filter((tour) => {
      if (tour.tourCode === "eur") {
        return isDpWorldTourEnabled;
      } else if (tour.tourCode === "liv") {
        return isLivGolfTourEnabled;
      } else {
        return true;
      }
    });
  }
}

import type { FeatureFlagService } from "../flag/interfaces/inbound/feature-flag-service";
import type { Tour } from "./domain/types";
import type { TourService } from "./interfaces/inbound/tour-service";

export class TourServiceImpl implements TourService {
  constructor(private readonly featureFlagService: FeatureFlagService) {
    this.featureFlagService = featureFlagService;
  }

  async getTours(): Promise<Tour[]> {
    // TODO
    // const tourCodes = TourCodeSchema.options.map((tourCode) => {
    //   switch (tourCode) {
    //     case "pal":
    //       return {
    //         tourCode: "pal" as const,
    //         tourName: "Putting Pals" as const,
    //       };
    //     case "pga":
    //       return {
    //         tourCode: "pga" as const,
    //         tourName: "PGA TOUR" as const,
    //       };
    //     case "eur":
    //       return {
    //         tourCode: "eur" as const,
    //         tourName: "DP World Tour" as const,
    //       };
    //     case "liv":
    //       return {
    //         tourCode: "liv" as const,
    //         tourName: "LIV Golf" as const,
    //       };
    //     case "dev":
    //       return {
    //         tourCode: "dev" as const,
    //         tourName: "Korn Ferry Tour" as const,
    //       };
    //     case "snr":
    //       return {
    //         tourCode: "snr" as const,
    //         tourName: "PGA TOUR Champions" as const,
    //       };
    //     case "pam":
    //       return {
    //         tourCode: "pam" as const,
    //         tourName: "PGA TOUR Americas" as const,
    //       };
    //     default:
    //       assertNever(tourCode);
    //   }
    // });
    const allTours = [
      {
        tourCode: "pal" as const,
        tourName: "Putting Pals" as const,
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
        tourName: "LIV Golf" as const,
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

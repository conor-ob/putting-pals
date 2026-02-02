import type { TourCode } from "@putting-pals/putting-pals-api";
import { publicProcedure, router } from "../trpc/router";
import { TourOutputSchema } from "../validation/output-schema";

export const tourRouter = router({
  getTours: publicProcedure.output(TourOutputSchema).query(({ ctx }) => {
    const allSupportedTours: { tourCode: TourCode; tourName: string }[] = [
      {
        tourCode: "P",
        tourName: "Putting Pals Tour",
      },
      {
        tourCode: "R",
        tourName: "PGA TOUR",
      },
      {
        tourCode: "D",
        tourName: "DP World Tour",
      },
      {
        tourCode: "S",
        tourName: "PGA TOUR Champions",
      },
      {
        tourCode: "H",
        tourName: "Korn Ferry Tour",
      },
      {
        tourCode: "Y",
        tourName: "PGA TOUR Americas",
      },
    ];

    if (ctx.featureFlagService.isFeatureFlagEnabled("enable-dp-world-tour")) {
      return allSupportedTours;
    } else {
      return allSupportedTours.filter((tour) => tour.tourCode !== "D");
    }
  }),
});

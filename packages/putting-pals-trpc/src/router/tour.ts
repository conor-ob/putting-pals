import { supportedTours } from "@putting-pals/putting-pals-api";
import { publicProcedure, router } from "../trpc/router";
import { TourOutputSchema } from "../validation/output-schema";

export const tourRouter = router({
  getTours: publicProcedure.output(TourOutputSchema).query(() => {
    return supportedTours;
  }),
});

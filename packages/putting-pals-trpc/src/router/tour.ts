import { publicProcedure, router } from "../trpc/router";
import { TourOutputSchema } from "../validation/output-schema";

export const tourRouter = router({
  getTours: publicProcedure.output(TourOutputSchema).query(({ ctx }) => {
    return ctx.tourService.getTours();
  }),
});

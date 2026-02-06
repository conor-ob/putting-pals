import z from "zod";

export const TourCodeSchema = z.enum([
  "putting-pals-tour",
  "pga-tour",
  "dp-world-tour",
  "liv-golf-tour",
  "korn-ferry-tour",
  "pga-tour-champions",
  "pga-tour-americas",
]);

export const TourSchema = z.object({
  tourCode: TourCodeSchema,
  tourName: z.enum([
    "Putting Pals Tour",
    "PGA TOUR",
    "DP World Tour",
    "LIV Golf Tour",
    "Korn Ferry Tour",
    "PGA TOUR Champions",
    "PGA TOUR Americas",
  ]),
});

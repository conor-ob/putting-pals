import z from "zod";

export const TourCodeSchema = z.enum([
  "pal",
  "pga",
  "eur",
  "liv",
  "dev",
  "snr",
  "pam",
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

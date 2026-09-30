import z from "zod";

// export const TourCodeSchema = z.enum([
//   "pal",
//   "pga",
//   "eur",
//   "liv",
//   "dev",
//   "snr",
//   "pam",
// ]);

// export const TourSchema = z.object({
//   tourCode: TourCodeSchema,
//   tourName: z.enum([
//     "Putting Pals",
//     "PGA TOUR",
//     "DP World Tour",
//     "LIV Golf",
//     "Korn Ferry Tour",
//     "PGA TOUR Champions",
//     "PGA TOUR Americas",
//   ]),
// });

export const TourSchema = z.union([
  z.object({
    tourCode: z.literal("pal"),
    tourName: z.literal("Putting Pals"),
  }),
  z.object({
    tourCode: z.literal("pga"),
    tourName: z.literal("PGA TOUR"),
  }),
  z.object({
    tourCode: z.literal("eur"),
    tourName: z.literal("DP World Tour"),
  }),
  z.object({
    tourCode: z.literal("liv"),
    tourName: z.literal("LIV Golf"),
  }),
  z.object({
    tourCode: z.literal("dev"),
    tourName: z.literal("Korn Ferry Tour"),
  }),
  z.object({
    tourCode: z.literal("snr"),
    tourName: z.literal("PGA TOUR Champions"),
  }),
  z.object({
    tourCode: z.literal("pam"),
    tourName: z.literal("PGA TOUR Americas"),
  }),
]);

export const TourCodeSchema = z.enum(
  TourSchema.options.map((option) => option.shape.tourCode.value),
);

export const TourNameSchema = z.enum(
  TourSchema.options.map((option) => option.shape.tourName.value),
);

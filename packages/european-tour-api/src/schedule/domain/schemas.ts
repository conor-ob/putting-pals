import z from "zod";

export const EuropeanTourTournamentSchema = z.object({
  StartDate: z.string(),
  EndDate: z.string(),
  location: z.array(
    z.object({
      Address: z.object({
        StreetAddress: z.string(),
        AddressRegion: z.string(),
        AddressCountry: z.string(),
        "@type": z.string(),
      }),
      "@type": z.string(),
      name: z.string(),
    }),
  ),
  "@type": z.string(),
  name: z.string(),
});

export const EuropeanTourScheduleSchema = z.object({
  StartDate: z.string(),
  EndDate: z.string(),
  subEvent: z.array(EuropeanTourTournamentSchema),
});

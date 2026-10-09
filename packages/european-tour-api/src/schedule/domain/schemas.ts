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

export const ApiMiniScheduleSchema = z.object({
  Tours: z.array(
    z.object({
      TourId: z.number(),
      Events: z.array(
        z.object({
          EventId: z.number(),
          EventName: z.string(),
          CurrentRound: z.number(),
          StartDate: z.string(),
          EndDate: z.string(),
        }),
      ),
    }),
  ),
});

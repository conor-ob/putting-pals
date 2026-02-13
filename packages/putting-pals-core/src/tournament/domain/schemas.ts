import { z } from "zod";

export const RoundStatusSchema = z.enum([
  "COMPLETE",
  "GROUPINGS_OFFICIAL",
  "IN_PROGRESS",
  "OFFICIAL",
  "SUSPENDED",
  "UPCOMING",
]);

export const RoundStatusColorSchema = z.enum([
  "BLUE",
  "GRAY",
  "GREEN",
  "RED",
  "YELLOW",
]);

export const TournamentStatusSchema = z.enum([
  "COMPLETED",
  "IN_PROGRESS",
  "NOT_STARTED",
]);

const TournamentLocationSchema = z.object({
  city: z.string(),
  country: z.string(),
  countryCode: z.string().length(3),
  displayLocation: z.string(),
});

export const TournamentSchema = z.object({
  __typename: z.literal("Tournament"),
  id: z.string(),
  name: z.string(),
  images: z.object({
    logo: z.url(),
    cover: z.url(),
  }),
  schedule: z.object({
    status: TournamentStatusSchema,
    startDate: z.string(),
    endDate: z.string(),
    displayDate: z.string(),
  }),
  location: z.discriminatedUnion("__typename", [
    TournamentLocationSchema.extend({
      __typename: z.literal("Country"),
    }),
    TournamentLocationSchema.extend({
      __typename: z.literal("State"),
      state: z.string(),
      stateCode: z.string().length(2),
    }),
  ]),
  courses: z.array(
    z.object({
      __typename: z.literal("Course"),
      id: z.string(),
      name: z.string(),
    }),
  ),
  status: z.object({
    roundDisplay: z.string(),
    roundStatus: RoundStatusSchema,
    roundStatusColor: RoundStatusColorSchema,
    roundStatusDisplay: z.string(),
  }),
});

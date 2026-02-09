import { z } from "zod";

export const ApiEventSchema = z.object({
  name: z.string(),
  startDate: z.string(),
  endDate: z.string(),
  description: z.string(),
  status: z.string(),
  link: z.url(),
  athlete: z.object({
    name: z.string().optional(),
    flag: z.string().optional(),
    citizenship: z.string().optional(),
    link: z.url().optional(),
  }),
  locations: z.array(
    z.object({
      venue: z.object({
        fullName: z.string(),
      }),
    }),
  ),
  score: z.string(),
  isPostponedOrCanceled: z.boolean(),
});

export const ApiScheduleSchema = z.object({
  events: z.array(ApiEventSchema),
});

export const ApiScheduleYearsSchema = z.object({
  dropdowns: z.object({
    seasons: z.array(
      z.object({
        value: z.number(),
        label: z.string(),
        paramValue: z.number(),
      }),
    ),
    currentSeason: z.number(),
  }),
  formattedSeason: z.string(),
  requestedSeason: z.number(),
  tourScheduleName: z.string(),
  seasonYear: z.string(),
});

export const TourScheduleEventSchema = z.object({
  id: z.string(),
  label: z.string(),
  detail: z.string(),
  startDate: z.string(),
  endDate: z.string(),
  link: z.url(),
  isMajor: z.boolean(),
  locations: z.array(z.string()).optional(),
  status: z.string(),
  fullStatus: z.object({
    type: z.object({
      id: z.string(),
      name: z.string(),
      state: z.string(),
      completed: z.boolean(),
      description: z.string(),
    }),
  }),
});

export const TourScheduleSchema = z.object({
  id: z.string(),
  name: z.string(),
  shortName: z.string(),
  slug: z.string(),
  defaultSeason: z.number(),
  currentSeason: z.number(),
  seasons: z.array(
    z.object({
      year: z.number(),
      startDate: z.string(),
      endDate: z.string(),
      displayName: z.string(),
      events: z.array(TourScheduleEventSchema).optional(),
    }),
  ),
});

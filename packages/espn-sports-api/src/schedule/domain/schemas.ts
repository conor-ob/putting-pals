import { z } from "zod";

export const TourScheduleEventSchema = z.object({
  id: z.string(),
  label: z.string(),
  detail: z.string(),
  startDate: z.string(),
  endDate: z.string(),
  link: z.url(),
  isMajor: z.boolean(),
  locations: z.array(z.string()).optional(),
  status: z.enum(["pre", "in", "post"]),
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

export const TourScheduleSeasonsSchema = z.object({
  year: z.number(),
  startDate: z.string(),
  endDate: z.string(),
  displayName: z.string(),
  events: z.array(TourScheduleEventSchema).optional(),
});

export const TourScheduleSchema = z.object({
  id: z.string(),
  name: z.string(),
  shortName: z.string(),
  slug: z.string(),
  defaultSeason: z.number(),
  currentSeason: z.number(),
  seasons: z.array(TourScheduleSeasonsSchema),
});

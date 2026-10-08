import { z } from "zod";

export const EventStatusSchema = z.object({
  EventId: z.number(),
  Status: z.number(),
  RoundStatus: z.number(),
});

export const EventMetadataSchema = z.object({
  eventId: z.number(),
  imageUrl: z.url(),
});

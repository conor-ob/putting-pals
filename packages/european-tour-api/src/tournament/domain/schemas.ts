import { z } from "zod";

export const ApiEventStatusSchema = z.object({
  EventId: z.number(),
  RoundNo: z.number(),
  Status: z.number(),
  RoundStatus: z.number(),
});

export const ApiEventCardSchema = z.object({
  eventId: z.number(),
  imageUrl: z.url(),
});

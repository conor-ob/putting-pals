import { TourCodeSchema } from "@putting-pals/putting-pals-core";
import { z } from "zod";

export const TourCodeInputSchema = TourCodeSchema;

export const TournamentIdInputSchema = z.string();
// .startsWith("R", "Tournament id must start with R")
// .length(8, "Tournament id must be 8 characters long");

export const TournamentInputSchema = z.object({
  tourCode: TourCodeInputSchema,
  id: TournamentIdInputSchema.optional(),
});

export const LeaderboardInputSchema = z.object({
  tourCode: TourCodeInputSchema,
  id: TournamentIdInputSchema.optional(),
});

export const EventTypeInputSchema = z.enum(["leaderboard/detect-change"]);

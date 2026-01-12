import { TourCodeSchema } from "@putting-pals/putting-pals-api";
import { z } from "zod";

export const TourCodeInputSchema = TourCodeSchema;

export const TournamentIdInputSchema = z
  .string()
  .startsWith("R", "Tournament id must start with R")
  .length(8, "Tournament id must be 8 characters long");

export const EventTypeInputSchema = z.enum(["leaderboard/detect-change"]);

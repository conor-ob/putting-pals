import { z } from "zod";

export const TourCodeInputSchema = z.enum([
  "C",
  "E",
  "H",
  "I",
  "M",
  "P",
  "R",
  "S",
  "U",
  "Y",
]);

export const TournamentIdInputSchema = z
  .string()
  .startsWith("R", "Tournament id must start with R")
  .length(8, "Tournament id must be 8 characters long");

export const EventTypeInputSchema = z.enum(["leaderboard/detect-change"]);

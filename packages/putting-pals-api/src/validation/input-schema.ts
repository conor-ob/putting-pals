import { z } from "zod";

export const TournamentIdSchema = z
  .string()
  .startsWith("R", "Tournament id must start with R")
  .length(8, "Tournament id must be 8 characters long");

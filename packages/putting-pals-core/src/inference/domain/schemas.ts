import z from "zod";

export const InferenceTourCodeSchema = z.enum([
  "pga",
  "eur",
  "liv",
  "ntw",
  "champions-tour",
]);

export const InferenceTypeSchema = z.enum(["leaderboard", "schedule"]);

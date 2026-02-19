import z from "zod";

export const InferenceTourCodeSchema = z.enum([
  "pga",
  // "tgl",
  "lpga",
  "champions-tour",
  "liv",
  "eur",
  "ntw",
]);

export const InferenceTypeSchema = z.enum(["leaderboard", "schedule"]);

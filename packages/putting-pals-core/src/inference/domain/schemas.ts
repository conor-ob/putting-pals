import z from "zod";

export const InferenceTourCodeSchema = z.enum([
  "pga",
  "eur",
  "liv",
  "ntw",
  "tgl",
  "lpga",
  "champions-tour",
]);

export const InferenceTypeSchema = z.enum(["leaderboard", "schedule"]);

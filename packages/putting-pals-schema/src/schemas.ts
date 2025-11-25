import { z } from "zod";

export const CompetitorSchema = z.object({
  id: z.string(),
  country: z.string(),
  countryFlag: z.string(),
  displayName: z.string(),
  shortName: z.string(),
  picks: z.array(z.string()),
});

export const CompetitionSchema = z.object({
  tournamentId: z.string(),
  paddyPowerId: z.string().optional(),
  winnerId: z.string().optional(),
  runnerUpId: z.string().optional(),
  scoringRules: z.enum(["DEFAULT", "MISSED_CUT"]).default("DEFAULT"),
  competitors: z.array(CompetitorSchema),
});

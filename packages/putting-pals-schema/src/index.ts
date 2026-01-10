import { z } from "zod";

export const DomainTourCodeSchema = z.enum([
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

export const CompetitorSchema = z.object({
  id: z.string(),
  country: z.string(),
  countryFlag: z.string(),
  displayName: z.string(),
  shortName: z.string(),
  picks: z.array(z.string()),
});

export const CompetitionSchema = z
  .object({
    tournamentId: z.string(),
    paddyPowerId: z.string().optional(),
    winnerId: z.string().optional(),
    runnerUpId: z.string().optional(),
    scoringRules: z.enum(["DEFAULT", "MISSED_CUT"]).default("DEFAULT"),
    competitors: z.array(CompetitorSchema),
  })
  .transform((data) => {
    const defaultEntryFee = 10;
    const totalPurse = data.competitors.length * defaultEntryFee;
    const runnerUpPayout = defaultEntryFee * 2;
    const winnerPayout = totalPurse - runnerUpPayout;
    return {
      ...data,
      entryFee: defaultEntryFee,
      winnerPayout: winnerPayout,
      runnerUpPayout: runnerUpPayout,
    };
  });

export * from "./generated/graphql";

export type Competitor = z.infer<typeof CompetitorSchema>;

export type Competition = z.infer<typeof CompetitionSchema>;

export * from "./client/leaderboard-client";
export * from "./client/schedule-client";
export * from "./client/tournament-client";
export * from "./db/types";
export * from "./event/types";
export * from "./repository/competition-repository";
export * from "./repository/leaderboard-feed-repository";
export * from "./repository/leaderboard-snapshot-repository";
export * from "./service/competition-service";
export * from "./service/feed-service";
export * from "./service/leaderboard-event-processor";
export * from "./service/leaderboard-service";
export * from "./service/pga-tour-web-scraper";
export * from "./service/schedule-service";
export * from "./service/schedule-years-service";
export * from "./service/tournament-resolver";
export * from "./service/tournament-service";

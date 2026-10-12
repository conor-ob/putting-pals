import z from "zod";
import { TournamentStatusSchema } from "../../tournament/domain/schemas";

export const PlayerStateSchema = z.enum([
  "ACTIVE",
  "BETWEEN_ROUNDS",
  "COMPLETE",
  "CUT",
  "DISQUALIFIED",
  "NOT_STARTED",
  "WITHDRAWN",
]);

export const CompetitorRowScoringDataSchema = z.object({
  __typename: z.literal("CompetitorRowScoringData"),
  position: z.string(),
  total: z.string(),
  totalSort: z.number(),
});

export const CompetitorRowSchema = z.object({
  __typename: z.literal("CompetitorRow"),
  id: z.string(),
  leaderboardSortOrder: z.number(),
  competitor: z.object({
    countryFlag: z.string(),
    displayName: z.string(),
    id: z.string(),
    shortName: z.string(),
  }),
  scoringData: CompetitorRowScoringDataSchema,
  picks: z.array(z.string()),
});

export const InformationRowSchema = z.object({
  __typename: z.literal("InformationRow"),
  id: z.string(),
  leaderboardSortOrder: z.number(),
  displayText: z.string(),
});

export const PlayerRowScoringDataSchema = z.object({
  position: z.string(),
  playerIcon: z.enum(["HOT_STREAK"]).nullable().optional(),
  playerState: PlayerStateSchema,
  teeTime: z.number().nullable().optional(),
  total: z.string(),
  totalSort: z.number(),
  thru: z.string(),
  thruSort: z.number(),
  score: z.string(),
  scoreSort: z.number(),
});

export const PlayerRowSchema = z.object({
  __typename: z.literal("PlayerRow"),
  id: z.string(),
  leaderboardSortOrder: z.number(),
  player: z.object({
    countryFlag: z.string(),
    displayName: z.string(),
    shortName: z.string(),
    abbreviations: z.string(),
    id: z.string(),
  }),
  scoringData: PlayerRowScoringDataSchema,
});

export const LeaderboardSchema = z.object({
  __typename: z.literal("Leaderboard"),
  id: z.string(),
  players: z.array(
    z.discriminatedUnion("__typename", [
      CompetitorRowSchema,
      InformationRowSchema,
      PlayerRowSchema,
    ]),
  ),
  tournamentStatus: TournamentStatusSchema,
  leaderboardRoundHeader: z.string(),
});

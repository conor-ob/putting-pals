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

export const PuttingPalsPlayerSchema = z.object({
  __typename: z.literal("PuttingPalsPlayer"),
  countryFlag: z.string(),
  displayName: z.string(),
  id: z.string(),
  shortName: z.string(),
});

export const PuttingPalsPlayerScoringDataSchema = z.object({
  __typename: z.literal("PuttingPalsPlayerScoringData"),
  position: z.string(),
  total: z.string(),
  totalSort: z.number(),
});

export const PuttingPalsPlayerRowSchema = z.object({
  __typename: z.literal("PuttingPalsPlayerRow"),
  id: z.string(),
  leaderboardSortOrder: z.number(),
  player: PuttingPalsPlayerSchema,
  scoringData: PuttingPalsPlayerScoringDataSchema,
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
    id: z.string(),
  }),
  scoringData: PlayerRowScoringDataSchema,
});

export const LeaderboardSchema = z.object({
  __typename: z.literal("Leaderboard"),
  id: z.string(),
  players: z.array(
    z.discriminatedUnion("__typename", [
      PuttingPalsPlayerRowSchema,
      InformationRowSchema,
      PlayerRowSchema,
    ]),
  ),
  tournamentStatus: TournamentStatusSchema,
});

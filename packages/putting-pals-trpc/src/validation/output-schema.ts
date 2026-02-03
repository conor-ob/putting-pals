import {
  RoundStatusColorSchema,
  RoundStatusSchema,
  TourCodeSchema,
  TournamentStatusSchema,
} from "@putting-pals/putting-pals-api";
import z from "zod";

export const LeaderboardOutputSchema = z.object({
  id: z.string(),
  players: z
    .array(
      z.discriminatedUnion("__typename", [
        z.object({
          __typename: z.literal("PuttingPalsPlayerRow"),
          id: z.string(),
          leaderboardSortOrder: z.number(),
          player: z.object({
            displayName: z.string(),
          }),
          scoringData: z.object({
            position: z.string(),
            total: z.string(),
            totalSort: z.number(),
          }),
        }),
        z.object({
          __typename: z.literal("InformationRow"),
          id: z.string(),
          leaderboardSortOrder: z.number(),
          displayText: z.string(),
        }),
        z.object({
          __typename: z.literal("PlayerRowV3"),
          id: z.string(),
          leaderboardSortOrder: z.number(),
          player: z.object({
            displayName: z.string(),
          }),
          scoringData: z.object({
            position: z.string(),
            teeTime: z.number().nullable().optional(),
            total: z.string(),
            totalSort: z.number(),
            score: z.string(),
            scoreSort: z.number(),
          }),
        }),
      ]),
    )
    .readonly(),
});

export const TournamentOutputSchema = z.object({
  id: z.string(),
  displayDate: z.string(),
  roundDisplay: z.string(),
  roundStatus: RoundStatusSchema,
  roundStatusColor: RoundStatusColorSchema,
  roundStatusDisplay: z.string(),
  tournamentLogo: z.array(z.string()).readonly(),
  tournamentName: z.string(),
  tournamentStatus: TournamentStatusSchema,
});

export const TourOutputSchema = z
  .array(
    z.object({
      tourCode: TourCodeSchema,
      tourName: z.string(),
    }),
  )
  .readonly();

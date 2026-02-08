import { z } from "zod";

export const ImageAssetSchema = z.object({
  imageOrg: z.string(),
  fallbackImage: z.string(),
  imagePath: z.string(),
});

export const RoundStatusSchema = z.enum([
  "COMPLETE",
  "GROUPINGS_OFFICIAL",
  "IN_PROGRESS",
  "OFFICIAL",
  "SUSPENDED",
  "UPCOMING",
]);

export const RoundStatusColorSchema = z.enum([
  "BLUE",
  "GRAY",
  "GREEN",
  "RED",
  "YELLOW",
]);

export const TournamentStatusSchema = z.enum([
  "COMPLETED",
  "IN_PROGRESS",
  "NOT_STARTED",
]);

export const TournamentSchema = z.object({
  __typename: z.literal("Tournament"),
  id: z.string(),
  displayDate: z.string(),
  roundDisplay: z.string(),
  roundStatus: RoundStatusSchema,
  roundStatusColor: RoundStatusColorSchema,
  roundStatusDisplay: z.string(),
  tournamentLogo: z.array(z.string()),
  tournamentName: z.string(),
  tournamentStatus: TournamentStatusSchema,
});

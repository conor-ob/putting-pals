import type z from "zod";
import type {
  InformationRowSchema,
  LeaderboardV3Schema,
  PlayerRowV3Schema,
  PlayerRowV3ScoringDataSchema,
  PlayerStateSchema,
  PuttingPalsPlayerRowSchema,
  PuttingPalsPlayerSchema,
  PuttingPalsPlayerScoringDataSchema,
} from "./schemas";

export type LeaderboardV3 = z.infer<typeof LeaderboardV3Schema>;

export type PlayerState = z.infer<typeof PlayerStateSchema>;

export type PuttingPalsPlayer = z.infer<typeof PuttingPalsPlayerSchema>;

export type PuttingPalsPlayerScoringData = z.infer<
  typeof PuttingPalsPlayerScoringDataSchema
>;

export type PuttingPalsPlayerRow = z.infer<typeof PuttingPalsPlayerRowSchema>;

export type InformationRow = z.infer<typeof InformationRowSchema>;

export type PlayerRowV3 = z.infer<typeof PlayerRowV3Schema>;

export type PlayerRowV3ScoringData = z.infer<
  typeof PlayerRowV3ScoringDataSchema
>;

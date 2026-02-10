import type z from "zod";
import type {
  InformationRowSchema,
  LeaderboardSchema,
  PlayerRowSchema,
  PlayerRowScoringDataSchema,
  PlayerStateSchema,
  PuttingPalsPlayerRowSchema,
  PuttingPalsPlayerSchema,
  PuttingPalsPlayerScoringDataSchema,
} from "./schemas";

export type Leaderboard = z.infer<typeof LeaderboardSchema>;

export type PlayerState = z.infer<typeof PlayerStateSchema>;

export type PuttingPalsPlayer = z.infer<typeof PuttingPalsPlayerSchema>;

export type PuttingPalsPlayerScoringData = z.infer<
  typeof PuttingPalsPlayerScoringDataSchema
>;

export type PuttingPalsPlayerRow = z.infer<typeof PuttingPalsPlayerRowSchema>;

export type InformationRow = z.infer<typeof InformationRowSchema>;

export type PlayerRow = z.infer<typeof PlayerRowSchema>;

export type PlayerRowScoringData = z.infer<typeof PlayerRowScoringDataSchema>;

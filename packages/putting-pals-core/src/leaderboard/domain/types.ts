import type z from "zod";
import type {
  CompetitorRowSchema,
  CompetitorRowScoringDataSchema,
  InformationRowSchema,
  LeaderboardSchema,
  PlayerRowSchema,
  PlayerRowScoringDataSchema,
  PlayerStateSchema,
} from "./schemas";

export type Leaderboard = z.infer<typeof LeaderboardSchema>;

export type PlayerState = z.infer<typeof PlayerStateSchema>;

export type CompetitorRowScoringData = z.infer<
  typeof CompetitorRowScoringDataSchema
>;

export type CompetitorRow = z.infer<typeof CompetitorRowSchema>;

export type InformationRow = z.infer<typeof InformationRowSchema>;

export type PlayerRow = z.infer<typeof PlayerRowSchema>;

export type PlayerRowScoringData = z.infer<typeof PlayerRowScoringDataSchema>;

import type z from "zod";
import type {
  ImageAssetSchema,
  RoundStatusColorSchema,
  RoundStatusSchema,
  TournamentSchema,
  TournamentStatusSchema,
} from "./schemas";

export type ImageAsset = z.infer<typeof ImageAssetSchema>;

export type RoundStatus = z.infer<typeof RoundStatusSchema>;

export type RoundStatusColor = z.infer<typeof RoundStatusColorSchema>;

export type TournamentStatus = z.infer<typeof TournamentStatusSchema>;

export type Tournament = z.infer<typeof TournamentSchema>;

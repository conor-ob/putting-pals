import type { Operation } from "fast-json-patch";
import type {
  LeaderboardHoleByHole,
  LeaderboardV3,
  TourCode,
  Tournament,
} from "../graphql/putting-pals/generated/graphql";

export type AggregateType =
  | Tournament["__typename"]
  | LeaderboardV3["__typename"]
  | LeaderboardHoleByHole["__typename"];

export interface AggregateRepository {
  getAggregate(
    tourCode: TourCode,
    tournamentId: string,
    type: AggregateType,
  ): Promise<{ aggregate: object; patchSeq: number } | undefined>;

  createAggregate(
    tourCode: TourCode,
    tournamentId: string,
    type: AggregateType,
    aggregate: object,
    patchSeq?: number,
  ): Promise<void>;

  getPatches(
    tourCode: TourCode,
    tournamentId: string,
    type: AggregateType,
    afterSeq: number,
  ): Promise<Operation[]>;

  getPatchCount(
    tourCode: TourCode,
    tournamentId: string,
    type: AggregateType,
    afterSeq: number,
  ): Promise<number>;

  getMaxPatchSeq(
    tourCode: TourCode,
    tournamentId: string,
    type: AggregateType,
  ): Promise<number>;

  createPatches(
    tourCode: TourCode,
    tournamentId: string,
    type: AggregateType,
    patches: Operation[],
  ): Promise<void>;
}

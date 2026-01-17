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

export type AggregateRow = {
  type: AggregateType;
  patchSeq: number;
  aggregate: object;
  tourCode: TourCode;
  tournamentId: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
  id: string;
};

export type AggregatePatchRow = {
  seq: number;
  patch: Operation[];
  tourCode: TourCode;
  tournamentId: string;
  type: AggregateType;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
  id: string;
};
export interface AggregateRepository {
  getAggregate(
    tourCode: TourCode,
    tournamentId: string,
    type: AggregateType,
  ): Promise<AggregateRow | undefined>;

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
  ): Promise<AggregatePatchRow[]>;

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

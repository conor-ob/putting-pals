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
  ): Promise<object | undefined>;

  createAggregate(
    tourCode: TourCode,
    tournamentId: string,
    type: AggregateType,
    aggregate: object,
  ): Promise<void>;

  getPatches(
    tourCode: TourCode,
    tournamentId: string,
    type: AggregateType,
  ): Promise<AggregatePatchRow[]>;

  createPatch(
    tourCode: TourCode,
    tournamentId: string,
    type: AggregateType,
    operations: Operation[],
  ): Promise<AggregatePatchRow | undefined>;
}

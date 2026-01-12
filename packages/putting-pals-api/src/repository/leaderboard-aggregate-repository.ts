import type { Operation } from "fast-json-patch";
import type { TourCode } from "../graphql/putting-pals/generated/graphql";

export interface AggregateWithPatchSeq {
  aggregate: object;
  patchSeq: number;
}

export interface LeaderboardAggregateRepository {
  getLeaderboardAggregate(
    tourCode: TourCode,
    tournamentId: string,
  ): Promise<AggregateWithPatchSeq | undefined>;

  createLeaderboardAggregate(
    tourCode: TourCode,
    tournamentId: string,
    aggregate: object,
    patchSeq?: number,
  ): Promise<void>;

  getLeaderboardPatches(
    tourCode: TourCode,
    tournamentId: string,
    afterSeq: number,
  ): Promise<Operation[]>;

  getLeaderboardPatchCount(
    tourCode: TourCode,
    tournamentId: string,
    afterSeq: number,
  ): Promise<number>;

  getMaxLeaderboardPatchSeq(
    tourCode: TourCode,
    tournamentId: string,
  ): Promise<number>;

  createLeaderboardPatches(
    tourCode: TourCode,
    tournamentId: string,
    patches: Operation[],
  ): Promise<void>;
}

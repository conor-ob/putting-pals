import type { Operation } from "fast-json-patch";
import type { TourCode } from "../graphql/putting-pals/generated/graphql";
import type { AggregateWithPatchSeq } from "./leaderboard-aggregate-repository";

export interface TournamentAggregateRepository {
  getTournamentAggregate(
    tourCode: TourCode,
    tournamentId: string,
  ): Promise<AggregateWithPatchSeq | undefined>;

  createTournamentAggregate(
    tourCode: TourCode,
    tournamentId: string,
    aggregate: object,
    patchSeq?: number,
  ): Promise<void>;

  getTournamentPatches(
    tourCode: TourCode,
    tournamentId: string,
    afterSeq: number,
  ): Promise<Operation[]>;

  getTournamentPatchCount(
    tourCode: TourCode,
    tournamentId: string,
    afterSeq: number,
  ): Promise<number>;

  getMaxTournamentPatchSeq(
    tourCode: TourCode,
    tournamentId: string,
  ): Promise<number>;

  createTournamentPatches(
    tourCode: TourCode,
    tournamentId: string,
    patches: Operation[],
  ): Promise<void>;
}

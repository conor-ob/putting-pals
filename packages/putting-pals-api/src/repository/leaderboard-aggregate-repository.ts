import type { Operation } from "fast-json-patch";
import type { TourCode } from "../graphql/putting-pals/generated/graphql";

export interface LeaderboardAggregateRepository {
  getLeaderboardAggregate(
    tourCode: TourCode,
    tournamentId: string,
  ): Promise<object | undefined>;

  createLeaderboardAggregate(
    tourCode: TourCode,
    tournamentId: string,
    aggregate: object,
  ): Promise<void>;

  getLeaderboardPatches(
    tourCode: TourCode,
    tournamentId: string,
  ): Promise<Operation[]>;

  createLeaderboardPatches(
    tourCode: TourCode,
    tournamentId: string,
    patches: Operation[],
  ): Promise<void>;
}

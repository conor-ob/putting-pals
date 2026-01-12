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
}

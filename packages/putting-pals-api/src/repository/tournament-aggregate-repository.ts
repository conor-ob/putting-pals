import type { Operation } from "fast-json-patch";
import type { TourCode } from "../graphql/putting-pals/generated/graphql";

export interface TournamentAggregateRepository {
  getTournamentAggregate(
    tourCode: TourCode,
    tournamentId: string,
  ): Promise<object | undefined>;

  createTournamentAggregate(
    tourCode: TourCode,
    tournamentId: string,
    aggregate: object,
  ): Promise<void>;

  getTournamentPatches(
    tourCode: TourCode,
    tournamentId: string,
  ): Promise<Operation[]>;

  createTournamentPatches(
    tourCode: TourCode,
    tournamentId: string,
    patches: Operation[],
  ): Promise<void>;
}

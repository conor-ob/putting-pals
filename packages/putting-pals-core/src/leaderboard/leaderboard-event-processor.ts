import {
  type LeaderboardAggregateRepository,
  LeaderboardDocument,
  type LeaderboardEventProcessor,
  type LeaderboardService,
  type Normalizer,
  type TourCode,
  type TournamentAggregateRepository,
  TournamentDocument,
  type TournamentResolver,
  type TournamentService,
} from "@putting-pals/putting-pals-api";
import patch from "fast-json-patch";

export class LeaderboardEventProcessorImpl
  implements LeaderboardEventProcessor
{
  constructor(
    private readonly tournamentService: TournamentService,
    private readonly leaderboardService: LeaderboardService,
    private readonly tournamentResolver: TournamentResolver,
    private readonly tournamentAggregateRepository: TournamentAggregateRepository,
    private readonly leaderboardAggregateRepository: LeaderboardAggregateRepository,
    private readonly normalizer: Normalizer,
  ) {
    this.tournamentService = tournamentService;
    this.leaderboardService = leaderboardService;
    this.tournamentResolver = tournamentResolver;
    this.normalizer = normalizer;
  }

  async processEvent(tourCode: TourCode): Promise<void> {
    const tournamentId =
      await this.tournamentResolver.getCurrentTournamentId(tourCode);

    const [
      tournamentBefore,
      tournamentAfter,
      leaderboardBefore,
      leaderboardAfter,
    ] = await Promise.all([
      this.getTournamentAggregateBefore(tourCode, tournamentId),
      this.getTournamentAggregateAfter(tourCode, tournamentId),
      this.getLeaderboardAggregateBefore(tourCode, tournamentId),
      this.getLeaderboardAggregateAfter(tourCode, tournamentId),
    ]);

    if (tournamentBefore === undefined) {
      await this.tournamentAggregateRepository.createTournamentAggregate(
        tourCode,
        tournamentId,
        tournamentAfter,
      );
    } else {
      const tournamentPatches =
        await this.tournamentAggregateRepository.getTournamentPatches(
          tourCode,
          tournamentId,
        );

      // console.log("tournamentBefore", tournamentBefore);

      console.log("tournamentPatches", tournamentPatches);

      const tournamentMaterialized = patch.applyPatch(
        structuredClone(tournamentBefore),
        tournamentPatches,
        false,
      ).newDocument;

      // console.log("tournamentMaterialized", tournamentMaterialized);

      const diff = patch.compare(tournamentMaterialized, tournamentAfter);
      if (diff.length > 0) {
        console.log("diff", diff);
        await this.tournamentAggregateRepository.createTournamentPatches(
          tourCode,
          tournamentId,
          diff,
        );
      }
    }

    if (leaderboardBefore === undefined) {
      await this.leaderboardAggregateRepository.createLeaderboardAggregate(
        tourCode,
        tournamentId,
        leaderboardAfter,
      );
    } else {
    }
  }

  private async getTournamentAggregateBefore(
    tourCode: TourCode,
    tournamentId: string,
  ): Promise<object | undefined> {
    return this.tournamentAggregateRepository.getTournamentAggregate(
      tourCode,
      tournamentId,
    );
  }

  private async getLeaderboardAggregateBefore(
    tourCode: TourCode,
    tournamentId: string,
  ): Promise<object | undefined> {
    return this.leaderboardAggregateRepository.getLeaderboardAggregate(
      tourCode,
      tournamentId,
    );
  }

  private async getTournamentAggregateAfter(
    tourCode: TourCode,
    tournamentId: string,
  ): Promise<object> {
    const tournament = await this.tournamentService.getTournament(
      tourCode,
      tournamentId,
    );

    const normalizedTournament = this.normalizer.normalize(
      TournamentDocument,
      {
        __typename: "Query",
        tournament: {
          ...tournament,
          tournamentName: "Poop!",
        },
      },
      { id: tournamentId },
    );

    return normalizedTournament;
  }

  private async getLeaderboardAggregateAfter(
    tourCode: TourCode,
    tournamentId: string,
  ): Promise<object> {
    const leaderboard = await this.leaderboardService.getLeaderboard(
      tourCode,
      tournamentId,
    );
    const leaderboardV3 = { ...leaderboard };

    const normalizedLeaderboard = this.normalizer.normalize(
      LeaderboardDocument,
      { __typename: "Query", leaderboardV3 },
      { id: leaderboardV3.id },
    );

    return normalizedLeaderboard;
  }
}

import {
  type AggregateWithPatchSeq,
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

const MAX_PATCH_COUNT = 100;

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
      baseTournamentAggregate,
      latestTournamentAggregate,
      baseLeaderboardAggregate,
      latestLeaderboardAggregate,
    ] = await Promise.all([
      this.getBaseTournamentAggregate(tourCode, tournamentId),
      this.getLatestTournamentAggregate(tourCode, tournamentId),
      this.getBaseLeaderboardAggregate(tourCode, tournamentId),
      this.getLatestLeaderboardAggregate(tourCode, tournamentId),
    ]);

    if (baseTournamentAggregate === undefined) {
      await this.tournamentAggregateRepository.createTournamentAggregate(
        tourCode,
        tournamentId,
        latestTournamentAggregate,
      );
    } else {
      const tournamentPatches =
        await this.tournamentAggregateRepository.getTournamentPatches(
          tourCode,
          tournamentId,
          baseTournamentAggregate.patchSeq,
        );

      const materializedTournamentAggregate = patch.applyPatch(
        structuredClone(baseTournamentAggregate.aggregate),
        tournamentPatches,
        false,
      ).newDocument;

      const diff = patch.compare(
        materializedTournamentAggregate,
        latestTournamentAggregate,
      );
      if (diff.length > 0) {
        await this.tournamentAggregateRepository.createTournamentPatches(
          tourCode,
          tournamentId,
          diff,
        );

        await this.maybeCompactTournamentAggregate(
          tourCode,
          tournamentId,
          baseTournamentAggregate.patchSeq,
        );
      }
    }

    if (baseLeaderboardAggregate === undefined) {
      await this.leaderboardAggregateRepository.createLeaderboardAggregate(
        tourCode,
        tournamentId,
        latestLeaderboardAggregate,
      );
    } else {
      const leaderboardPatches =
        await this.leaderboardAggregateRepository.getLeaderboardPatches(
          tourCode,
          tournamentId,
          baseLeaderboardAggregate.patchSeq,
        );

      const materializedLeaderboardAggregate = patch.applyPatch(
        structuredClone(baseLeaderboardAggregate.aggregate),
        leaderboardPatches,
        false,
      ).newDocument;

      const diff = patch.compare(
        materializedLeaderboardAggregate,
        latestLeaderboardAggregate,
      );
      if (diff.length > 0) {
        await this.leaderboardAggregateRepository.createLeaderboardPatches(
          tourCode,
          tournamentId,
          diff,
        );

        await this.maybeCompactLeaderboardAggregate(
          tourCode,
          tournamentId,
          baseLeaderboardAggregate.patchSeq,
        );
      }
    }
  }

  private async maybeCompactTournamentAggregate(
    tourCode: TourCode,
    tournamentId: string,
    currentPatchSeq: number,
  ): Promise<void> {
    const patchCount =
      await this.tournamentAggregateRepository.getTournamentPatchCount(
        tourCode,
        tournamentId,
        currentPatchSeq,
      );

    if (patchCount < MAX_PATCH_COUNT) {
      return;
    }

    const baseAggregate =
      await this.tournamentAggregateRepository.getTournamentAggregate(
        tourCode,
        tournamentId,
      );

    if (!baseAggregate) {
      return;
    }

    const patches =
      await this.tournamentAggregateRepository.getTournamentPatches(
        tourCode,
        tournamentId,
        baseAggregate.patchSeq,
      );

    const compactedAggregate = patch.applyPatch(
      structuredClone(baseAggregate.aggregate),
      patches,
      false,
    ).newDocument;

    const maxPatchSeq =
      await this.tournamentAggregateRepository.getMaxTournamentPatchSeq(
        tourCode,
        tournamentId,
      );

    await this.tournamentAggregateRepository.createTournamentAggregate(
      tourCode,
      tournamentId,
      compactedAggregate,
      maxPatchSeq,
    );
  }

  private async maybeCompactLeaderboardAggregate(
    tourCode: TourCode,
    tournamentId: string,
    currentPatchSeq: number,
  ): Promise<void> {
    const patchCount =
      await this.leaderboardAggregateRepository.getLeaderboardPatchCount(
        tourCode,
        tournamentId,
        currentPatchSeq,
      );

    if (patchCount < MAX_PATCH_COUNT) {
      return;
    }

    const baseAggregate =
      await this.leaderboardAggregateRepository.getLeaderboardAggregate(
        tourCode,
        tournamentId,
      );

    if (!baseAggregate) {
      return;
    }

    const patches =
      await this.leaderboardAggregateRepository.getLeaderboardPatches(
        tourCode,
        tournamentId,
        baseAggregate.patchSeq,
      );

    const compactedAggregate = patch.applyPatch(
      structuredClone(baseAggregate.aggregate),
      patches,
      false,
    ).newDocument;

    const maxPatchSeq =
      await this.leaderboardAggregateRepository.getMaxLeaderboardPatchSeq(
        tourCode,
        tournamentId,
      );

    await this.leaderboardAggregateRepository.createLeaderboardAggregate(
      tourCode,
      tournamentId,
      compactedAggregate,
      maxPatchSeq,
    );
  }

  private async getBaseTournamentAggregate(
    tourCode: TourCode,
    tournamentId: string,
  ): Promise<AggregateWithPatchSeq | undefined> {
    return this.tournamentAggregateRepository.getTournamentAggregate(
      tourCode,
      tournamentId,
    );
  }

  private async getBaseLeaderboardAggregate(
    tourCode: TourCode,
    tournamentId: string,
  ): Promise<AggregateWithPatchSeq | undefined> {
    return this.leaderboardAggregateRepository.getLeaderboardAggregate(
      tourCode,
      tournamentId,
    );
  }

  private async getLatestTournamentAggregate(
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
        tournament,
      },
      { id: tournamentId },
    );

    return normalizedTournament;
  }

  private async getLatestLeaderboardAggregate(
    tourCode: TourCode,
    tournamentId: string,
  ): Promise<object> {
    const leaderboard = await this.leaderboardService.getLeaderboard(
      tourCode,
      tournamentId,
    );

    const normalizedLeaderboard = this.normalizer.normalize(
      LeaderboardDocument,
      {
        __typename: "Query",
        leaderboardV3: leaderboard,
      },
      { id: leaderboard.id },
    );

    return normalizedLeaderboard;
  }
}

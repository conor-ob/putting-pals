import type {
  AggregateRepository,
  AggregateType,
  EventEmitter,
  LeaderboardEventProcessorService,
  TourCode,
} from "@putting-pals/putting-pals-api";
import patch, { type Operation } from "fast-json-patch";

export abstract class AbstractEventProcessorService
  implements LeaderboardEventProcessorService
{
  constructor(
    private readonly aggregateType: AggregateType,
    private readonly aggregateRepository: AggregateRepository,
  ) {
    this.aggregateType = aggregateType;
    this.aggregateRepository = aggregateRepository;
  }

  async processEvent(
    tourCode: TourCode,
    tournamentId: string,
  ): Promise<EventEmitter[]> {
    const [baseAggregate, latestAggregate] = await Promise.all([
      this.getBaseAggregate(tourCode, tournamentId),
      this.getLatestAggregate(tourCode, tournamentId),
    ]);

    if (baseAggregate === undefined) {
      await this.createAggregate(tourCode, tournamentId, latestAggregate);
      return [];
    }

    const patches = await this.aggregateRepository.getPatches(
      tourCode,
      tournamentId,
      this.aggregateType,
      baseAggregate.patchSeq,
    );

    const materializedAggregate = patch.applyPatch(
      structuredClone(baseAggregate.aggregate),
      patches,
      false,
    ).newDocument;

    const diff = patch
      .compare(materializedAggregate, latestAggregate)
      .filter((patch) => this.includePatch(patch) && !this.excludePatch(patch));

    if (diff.length > 0) {
      await this.aggregateRepository.createPatches(
        tourCode,
        tournamentId,
        this.aggregateType,
        diff,
      );

      await this.maybeCompactAggregate(
        tourCode,
        tournamentId,
        baseAggregate.patchSeq,
      );

      return this.createEventEmitters(
        tourCode,
        tournamentId,
        materializedAggregate,
        latestAggregate,
      );
    }

    return [];
  }

  private async maybeCompactAggregate(
    tourCode: TourCode,
    tournamentId: string,
    currentPatchSeq: number,
  ): Promise<void> {
    const patchCount = await this.aggregateRepository.getPatchCount(
      tourCode,
      tournamentId,
      this.aggregateType,
      currentPatchSeq,
    );

    if (patchCount < 100) {
      return;
    }

    const baseAggregate = await this.aggregateRepository.getAggregate(
      tourCode,
      tournamentId,
      this.aggregateType,
    );

    if (!baseAggregate) {
      return;
    }

    const patches = await this.aggregateRepository.getPatches(
      tourCode,
      tournamentId,
      this.aggregateType,
      baseAggregate.patchSeq,
    );

    const compactedAggregate = patch.applyPatch(
      structuredClone(baseAggregate.aggregate),
      patches,
      false,
    ).newDocument;

    const maxPatchSeq = await this.aggregateRepository.getMaxPatchSeq(
      tourCode,
      tournamentId,
      this.aggregateType,
    );

    await this.aggregateRepository.createAggregate(
      tourCode,
      tournamentId,
      this.aggregateType,
      compactedAggregate,
      maxPatchSeq,
    );
  }

  private getBaseAggregate(
    tourCode: TourCode,
    tournamentId: string,
  ): Promise<{ aggregate: object; patchSeq: number } | undefined> {
    return this.aggregateRepository.getAggregate(
      tourCode,
      tournamentId,
      this.aggregateType,
    );
  }

  private createAggregate(
    tourCode: TourCode,
    tournamentId: string,
    aggregate: object,
  ): Promise<void> {
    return this.aggregateRepository.createAggregate(
      tourCode,
      tournamentId,
      this.aggregateType,
      aggregate,
    );
  }

  protected abstract getLatestAggregate(
    tourCode: TourCode,
    tournamentId: string,
  ): Promise<object>;

  protected abstract createEventEmitters(
    tourCode: TourCode,
    tournamentId: string,
    materializedAggregate: object,
    latestAggregate: object,
  ): Promise<EventEmitter[]>;

  protected includePatch(_: Operation): boolean {
    return true;
  }

  protected excludePatch(_: Operation): boolean {
    return false;
  }
}

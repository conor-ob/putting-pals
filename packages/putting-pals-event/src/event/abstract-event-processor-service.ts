import type {
  AggregateRepository,
  AggregateRow,
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
      patches.flatMap((patch) => patch.patch),
      false,
    ).newDocument;

    const diff = patch.compare(materializedAggregate, latestAggregate);

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

      // const previousPatchSeq = patches[patches.length - 2]?.seq ?? 0;
      // const patchSeq = patches[patches.length - 1]?.seq ?? 0;

      return this.createEventEmitters(tourCode, diff);
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
      patches.flatMap((patch) => patch.patch),
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
  ): Promise<AggregateRow | undefined> {
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
    diff: Operation[],
  ): Promise<EventEmitter[]>;
}

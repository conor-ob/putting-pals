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
    );

    const materializedAggregate = patch.applyPatch(
      structuredClone(baseAggregate),
      patches.flatMap((patch) => patch.patch),
      false,
    ).newDocument;

    const diff = patch.compare(materializedAggregate, latestAggregate);

    if (diff.length > 0) {
      const newPatch = await this.aggregateRepository.createPatch(
        tourCode,
        tournamentId,
        this.aggregateType,
        diff,
      );

      const prevPatchSeq = patches[patches.length - 1]?.seq ?? 0;
      const nextPatchSeq = newPatch?.seq ?? 0;

      return this.createEventEmitters(
        tourCode,
        diff,
        prevPatchSeq,
        nextPatchSeq,
      );
    }

    return [];
  }

  private getBaseAggregate(
    tourCode: TourCode,
    tournamentId: string,
  ): Promise<object | undefined> {
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
    prevPatchSeq: number,
    nextPatchSeq: number,
  ): Promise<EventEmitter[]>;
}

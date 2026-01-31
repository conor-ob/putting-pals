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
      await this.createAggregate(tourCode, tournamentId, latestAggregate, 0);
      return [];
    }

    const patches = await this.aggregateRepository.getPatches(
      tourCode,
      tournamentId,
      this.aggregateType,
    );

    const materializedAggregate = patch.applyPatch(
      structuredClone(baseAggregate),
      patches.flatMap((patch) => patch.operations),
      false,
    ).newDocument;

    const operations = patch.compare(materializedAggregate, latestAggregate);

    if (operations.length > 0) {
      const newPatch = await this.aggregateRepository.createPatch(
        tourCode,
        tournamentId,
        this.aggregateType,
        operations,
      );

      const patchSeq = newPatch?.seq ?? 0;

      return this.createEventEmitters(tourCode, operations, patchSeq);
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
    patchSeq: number,
  ): Promise<void> {
    return this.aggregateRepository.createAggregate(
      tourCode,
      tournamentId,
      this.aggregateType,
      aggregate,
      patchSeq,
    );
  }

  protected abstract getLatestAggregate(
    tourCode: TourCode,
    tournamentId: string,
  ): Promise<object>;

  protected abstract createEventEmitters(
    tourCode: TourCode,
    operations: Operation[],
    patchSeq: number,
  ): Promise<EventEmitter[]>;
}

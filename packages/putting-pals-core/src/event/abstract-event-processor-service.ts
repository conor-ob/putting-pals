import type { TourCode } from "../../../putting-pals-schema/src";
import type { EventEmitter } from "./domain/types";
import type { LeaderboardEventProcessorService } from "./interfaces/inbound/leaderboard-event-processor-service";
import type {
  LeaderboardSnapshot,
  LeaderboardSnapshotRepository,
} from "./interfaces/outbound/leaderboard-snapshot-repository";

export abstract class AbstractEventProcessorService<
  T extends LeaderboardSnapshot,
> implements LeaderboardEventProcessorService
{
  constructor(
    private readonly snapshotType: T["__typename"],
    private readonly snapshotRepository: LeaderboardSnapshotRepository,
  ) {
    this.snapshotType = snapshotType;
    this.snapshotRepository = snapshotRepository;
  }

  async processEvent(
    tourCode: TourCode,
    tournamentId: string,
  ): Promise<EventEmitter[]> {
    const [prevSnapshot, nextSnapshot] = await Promise.all([
      this.getPrevSnapshot(tourCode, tournamentId),
      this.getNextSnapshot(tourCode, tournamentId),
    ]);

    if (prevSnapshot === undefined) {
      await this.createSnapshot(tourCode, tournamentId, nextSnapshot);
      return [];
    }

    const eventEmitters = await this.createEventEmitters(
      tourCode,
      tournamentId,
      prevSnapshot,
      nextSnapshot,
    );

    if (eventEmitters.length > 0) {
      await this.updateSnapshot(tourCode, tournamentId, nextSnapshot);
    }

    return eventEmitters;
  }

  private getPrevSnapshot(
    tourCode: TourCode,
    tournamentId: string,
  ): Promise<T | undefined> {
    return this.snapshotRepository.getSnapshot(
      tourCode,
      tournamentId,
      this.snapshotType,
    ) as Promise<T | undefined>;
  }

  private createSnapshot(
    tourCode: TourCode,
    tournamentId: string,
    snapshot: T,
  ): Promise<void> {
    return this.snapshotRepository.createSnapshot(
      tourCode,
      tournamentId,
      snapshot,
    );
  }

  private updateSnapshot(
    tourCode: TourCode,
    tournamentId: string,
    snapshot: T,
  ): Promise<void> {
    return this.snapshotRepository.updateSnapshot(
      tourCode,
      tournamentId,
      snapshot,
    );
  }

  protected abstract getNextSnapshot(
    tourCode: TourCode,
    tournamentId: string,
  ): Promise<T>;

  protected abstract createEventEmitters(
    tourCode: TourCode,
    tournamentId: string,
    prevSnapshot: T,
    nextSnapshot: T,
  ): Promise<EventEmitter[]>;
}

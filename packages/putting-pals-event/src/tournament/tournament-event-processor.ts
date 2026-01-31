import {
  type AggregateRepository,
  type EventEmitter,
  type Normalizer,
  type TourCode,
  TournamentAggregateDocument,
  type TournamentService,
} from "@putting-pals/putting-pals-api";
import type { Operation } from "fast-json-patch";
import { AbstractEventProcessorService } from "../event/abstract-event-processor-service";
import { RoundStatusChanged } from "../event/events/round-status-changed";
import { TournamentStatusChanged } from "../event/events/tournament-status-changed";

export class TournamentEventProcessorImpl extends AbstractEventProcessorService {
  constructor(
    private readonly tournamentService: TournamentService,
    private readonly normalizer: Normalizer,
    aggregateRepository: AggregateRepository,
  ) {
    super("Tournament", aggregateRepository);
    this.tournamentService = tournamentService;
    this.normalizer = normalizer;
  }

  override async getLatestAggregate(
    tourCode: TourCode,
    tournamentId: string,
  ): Promise<object> {
    const tournament = await this.tournamentService.getTournament(
      tourCode,
      tournamentId,
    );

    return this.normalizer.normalize(
      TournamentAggregateDocument,
      {
        __typename: "Query",
        tournamentAggregate: tournament,
      },
      { id: tournament.id },
    );
  }

  override async createEventEmitters(
    tourCode: TourCode,
    operations: Operation[],
    patchSeq: number,
  ): Promise<EventEmitter[]> {
    return operations.flatMap((operation) => [
      new RoundStatusChanged(tourCode, operation, "Tournament", patchSeq),
      new TournamentStatusChanged(tourCode, operation, "Tournament", patchSeq),
    ]);
  }
}

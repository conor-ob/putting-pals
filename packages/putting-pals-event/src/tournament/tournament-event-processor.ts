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

    const normalizedTournament = this.normalizer.normalize(
      TournamentAggregateDocument,
      {
        __typename: "Query",
        tournamentAggregate: tournament,
      },
      { id: tournament.id },
    );

    return normalizedTournament;
  }

  override async createEventEmitters(
    tourCode: TourCode,
    diff: Operation[],
    prevPatchSeq: number,
    nextPatchSeq: number,
  ): Promise<EventEmitter[]> {
    const eventEmitters: EventEmitter[] = [
      new RoundStatusChanged(tourCode, diff, prevPatchSeq, nextPatchSeq),
      new TournamentStatusChanged(tourCode, diff, prevPatchSeq, nextPatchSeq),
    ];

    return eventEmitters;
  }
}

import {
  type AggregateRepository,
  type EventEmitter,
  type Normalizer,
  type TourCode,
  TournamentDocument,
  type TournamentService,
} from "@putting-pals/putting-pals-api";
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
      TournamentDocument,
      {
        __typename: "Query",
        tournament: tournament,
      },
      { id: tournament.id },
    );

    return normalizedTournament;
  }

  override async createEventEmitters(
    tourCode: TourCode,
    tournamentId: string,
    materializedAggregate: object,
    latestAggregate: object,
  ): Promise<EventEmitter[]> {
    const denormalizedMaterializedTournamentAggregate =
      this.normalizer.denormalize(TournamentDocument, materializedAggregate, {
        id: tournamentId,
      })?.tournament;

    const denormalizedLatestTournamentAggregate = this.normalizer.denormalize(
      TournamentDocument,
      latestAggregate,
      { id: tournamentId },
    )?.tournament;

    if (
      denormalizedMaterializedTournamentAggregate === undefined ||
      denormalizedMaterializedTournamentAggregate === null ||
      denormalizedLatestTournamentAggregate === undefined ||
      denormalizedLatestTournamentAggregate === null
    ) {
      return [];
    }

    const eventEmitters: EventEmitter[] = [
      new RoundStatusChanged(
        tourCode,
        denormalizedMaterializedTournamentAggregate,
        denormalizedLatestTournamentAggregate,
      ),
      new TournamentStatusChanged(
        tourCode,
        denormalizedMaterializedTournamentAggregate,
        denormalizedLatestTournamentAggregate,
      ),
    ];

    return eventEmitters;
  }
}

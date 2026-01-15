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
import { matchesTournamentField } from "../patch/patch-utils";

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
    tournamentId: string,
    materializedAggregate: object,
    latestAggregate: object,
  ): Promise<EventEmitter[]> {
    const denormalizedMaterializedTournamentAggregate =
      this.normalizer.denormalize(
        TournamentAggregateDocument,
        materializedAggregate,
        {
          id: tournamentId,
        },
      )?.tournamentAggregate;

    const denormalizedLatestTournamentAggregate = this.normalizer.denormalize(
      TournamentAggregateDocument,
      latestAggregate,
      { id: tournamentId },
    )?.tournamentAggregate;

    if (
      denormalizedMaterializedTournamentAggregate === undefined ||
      denormalizedLatestTournamentAggregate === undefined
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

  override excludePatch(patch: Operation): boolean {
    return matchesTournamentField.matchesLooseField(patch.path, "weather");
  }
}

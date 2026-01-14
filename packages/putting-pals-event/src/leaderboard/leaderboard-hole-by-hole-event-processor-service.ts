import {
  type AggregateRepository,
  type EventEmitter,
  LeaderboardHoleByHoleAggregateDocument,
  type LeaderboardService,
  type Normalizer,
  type TourCode,
  type TournamentService,
} from "@putting-pals/putting-pals-api";
import { AbstractEventProcessorService } from "../event/abstract-event-processor-service";
import { BirdieStreak } from "../event/events/birdie-streak";

export class LeaderboardHoleByHoleEventProcessorServiceImpl extends AbstractEventProcessorService {
  constructor(
    private readonly tournamentService: TournamentService,
    private readonly leaderboardService: LeaderboardService,
    private readonly normalizer: Normalizer,
    aggregateRepository: AggregateRepository,
  ) {
    super("LeaderboardHoleByHole", aggregateRepository);
    this.tournamentService = tournamentService;
    this.leaderboardService = leaderboardService;
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

    const leaderboardHoleByHole =
      await this.leaderboardService.getLeaderboardHoleByHole(
        tournamentId,
        tournament.currentRound,
      );

    const normalizedLeaderboardHoleByHole = this.normalizer.normalize(
      LeaderboardHoleByHoleAggregateDocument,
      {
        __typename: "Query",
        leaderboardHoleByHoleAggregate: leaderboardHoleByHole,
      },
      { id: leaderboardHoleByHole.tournamentId },
    );

    return normalizedLeaderboardHoleByHole;
  }

  override async createEventEmitters(
    tourCode: TourCode,
    tournamentId: string,
    materializedAggregate: object,
    latestAggregate: object,
  ): Promise<EventEmitter[]> {
    const denormalizedMaterializedLeaderboardHoleByHoleAggregate =
      this.normalizer.denormalize(
        LeaderboardHoleByHoleAggregateDocument,
        materializedAggregate,
        { id: tournamentId },
      )?.leaderboardHoleByHoleAggregate;

    const denormalizedLatestLeaderboardHoleByHoleAggregate =
      this.normalizer.denormalize(
        LeaderboardHoleByHoleAggregateDocument,
        latestAggregate,
        { id: tournamentId },
      )?.leaderboardHoleByHoleAggregate;

    if (
      denormalizedMaterializedLeaderboardHoleByHoleAggregate === undefined ||
      denormalizedLatestLeaderboardHoleByHoleAggregate === undefined
    ) {
      return [];
    }

    const eventEmitters: EventEmitter[] = [
      new BirdieStreak(
        tourCode,
        denormalizedMaterializedLeaderboardHoleByHoleAggregate,
        denormalizedLatestLeaderboardHoleByHoleAggregate,
      ),
    ];

    return eventEmitters;
  }
}

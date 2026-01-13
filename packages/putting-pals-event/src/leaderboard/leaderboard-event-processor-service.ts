import {
  type AggregateRepository,
  type EventEmitter,
  type LeaderboardService,
  LeaderboardV3Document,
  type Normalizer,
  type TourCode,
} from "@putting-pals/putting-pals-api";
import { AbstractEventProcessorService } from "../event/abstract-event-processor-service";
import { LeaderChanged } from "../event/events/leader-changed";
import { PlayerDisqualified } from "../event/events/player-disqualified";
import { PlayerMissedCut } from "../event/events/player-missed-cut";
import { PlayerPositionDecreased } from "../event/events/player-position-decreased";
import { PlayerPositionIncreased } from "../event/events/player-position-increased";
import { PlayerWithdrawn } from "../event/events/player-withdrawn";
import { TournamentWinner } from "../event/events/tournament-winner";

export class LeaderboardEventProcessorServiceImpl extends AbstractEventProcessorService {
  constructor(
    private readonly leaderboardService: LeaderboardService,
    private readonly normalizer: Normalizer,
    aggregateRepository: AggregateRepository,
  ) {
    super("LeaderboardV3", aggregateRepository);
    this.leaderboardService = leaderboardService;
    this.normalizer = normalizer;
  }

  override async getLatestAggregate(
    tourCode: TourCode,
    tournamentId: string,
  ): Promise<object> {
    const leaderboard = await this.leaderboardService.getLeaderboard(
      tourCode,
      tournamentId,
    );

    const normalizedLeaderboard = this.normalizer.normalize(
      LeaderboardV3Document,
      {
        __typename: "Query",
        leaderboardV3: leaderboard,
      },
      { id: leaderboard.id },
    );

    return normalizedLeaderboard;
  }

  override async createEventEmitters(
    tourCode: TourCode,
    tournamentId: string,
    materializedAggregate: object,
    latestAggregate: object,
  ): Promise<EventEmitter[]> {
    const denormalizedMaterializedLeaderboardAggregate =
      this.normalizer.denormalize(
        LeaderboardV3Document,
        materializedAggregate,
        { id: tournamentId },
      )?.leaderboardV3;

    const denormalizedLatestLeaderboardAggregate = this.normalizer.denormalize(
      LeaderboardV3Document,
      latestAggregate,
      { id: tournamentId },
    )?.leaderboardV3;

    if (
      denormalizedMaterializedLeaderboardAggregate === undefined ||
      denormalizedLatestLeaderboardAggregate === undefined
    ) {
      return [];
    }

    const eventEmitters: EventEmitter[] = [
      new LeaderChanged(
        tourCode,
        denormalizedMaterializedLeaderboardAggregate,
        denormalizedLatestLeaderboardAggregate,
      ),
      new PlayerDisqualified(
        tourCode,
        denormalizedMaterializedLeaderboardAggregate,
        denormalizedLatestLeaderboardAggregate,
      ),
      new PlayerMissedCut(
        tourCode,
        denormalizedMaterializedLeaderboardAggregate,
        denormalizedLatestLeaderboardAggregate,
      ),
      new PlayerPositionDecreased(
        tourCode,
        denormalizedMaterializedLeaderboardAggregate,
        denormalizedLatestLeaderboardAggregate,
      ),
      new PlayerPositionIncreased(
        tourCode,
        denormalizedMaterializedLeaderboardAggregate,
        denormalizedLatestLeaderboardAggregate,
      ),
      new PlayerWithdrawn(
        tourCode,
        denormalizedMaterializedLeaderboardAggregate,
        denormalizedLatestLeaderboardAggregate,
      ),
      new TournamentWinner(
        tourCode,
        denormalizedMaterializedLeaderboardAggregate,
        denormalizedLatestLeaderboardAggregate,
      ),
    ];

    return eventEmitters;
  }
}

import {
  type AggregateRepository,
  type EventEmitter,
  LeaderboardAggregateDocument,
  type LeaderboardService,
  type Normalizer,
  type TourCode,
} from "@putting-pals/putting-pals-api";
import type { Operation } from "fast-json-patch";
import { AbstractEventProcessorService } from "../event/abstract-event-processor-service";
import { LeaderChanged } from "../event/events/leader-changed";
import { PlayerDisqualified } from "../event/events/player-disqualified";
import { PlayerMissedCut } from "../event/events/player-missed-cut";
import { PlayerPositionChanged } from "../event/events/player-position-changed";
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
      LeaderboardAggregateDocument,
      {
        __typename: "Query",
        leaderboardAggregate: leaderboard,
      },
      { id: leaderboard.id },
    );

    return normalizedLeaderboard;
  }

  override async createEventEmitters(
    tourCode: TourCode,
    diff: Operation[],
  ): Promise<EventEmitter[]> {
    const eventEmitters: EventEmitter[] = [
      new LeaderChanged(tourCode, diff),
      new PlayerDisqualified(tourCode, diff),
      new PlayerMissedCut(tourCode, diff),
      new PlayerPositionChanged(tourCode, diff),
      new PlayerWithdrawn(tourCode, diff),
      new TournamentWinner(tourCode, diff),
    ];

    return eventEmitters;
  }
}

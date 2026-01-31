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
import { CutLineChanged } from "../event/events/cut-line-changed";
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
    operations: Operation[],
    patchSeq: number,
  ): Promise<EventEmitter[]> {
    return operations.flatMap((operation) => [
      new CutLineChanged(tourCode, operation, "LeaderboardV3", patchSeq),
      new LeaderChanged(tourCode, operation, "LeaderboardV3", patchSeq),
      new PlayerDisqualified(tourCode, operation, "LeaderboardV3", patchSeq),
      new PlayerMissedCut(tourCode, operation, "LeaderboardV3", patchSeq),
      new PlayerPositionChanged(tourCode, operation, "LeaderboardV3", patchSeq),
      new PlayerWithdrawn(tourCode, operation, "LeaderboardV3", patchSeq),
      new TournamentWinner(tourCode, operation, "LeaderboardV3", patchSeq),
    ]);
  }
}

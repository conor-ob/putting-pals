import type {
  EventEmitter,
  LeaderboardService,
  LeaderboardSnapshotRepository,
  LeaderboardV3,
  TourCode,
} from "@putting-pals/putting-pals-api";
import { AbstractEventProcessorService } from "../event/abstract-event-processor-service";
import { LeaderChanged } from "../event/events/leader-changed";
import { PlayerDisqualified } from "../event/events/player-disqualified";
import { PlayerMissedCut } from "../event/events/player-missed-cut";
import { PlayerPositionDecreased } from "../event/events/player-position-decreased";
import { PlayerPositionIncreased } from "../event/events/player-position-increased";
import { PlayerWithdrawn } from "../event/events/player-withdrawn";
import { TournamentWinner } from "../event/events/tournament-winner";

export class LeaderboardEventProcessorServiceImpl extends AbstractEventProcessorService<LeaderboardV3> {
  constructor(
    private readonly leaderboardService: LeaderboardService,
    snapshotRepository: LeaderboardSnapshotRepository,
  ) {
    super("LeaderboardV3", snapshotRepository);
  }

  protected override async getNextSnapshot(
    tourCode: TourCode,
    tournamentId: string,
  ): Promise<LeaderboardV3> {
    return await this.leaderboardService.getLeaderboard(tourCode, tournamentId);
  }

  protected override async createEventEmitters(
    tourCode: TourCode,
    _tournamentId: string,
    prevSnapshot: LeaderboardV3,
    nextSnapshot: LeaderboardV3,
  ): Promise<EventEmitter[]> {
    return [
      new LeaderChanged(tourCode, prevSnapshot, nextSnapshot),
      new PlayerDisqualified(tourCode, prevSnapshot, nextSnapshot),
      new PlayerMissedCut(tourCode, prevSnapshot, nextSnapshot),
      new PlayerPositionDecreased(tourCode, prevSnapshot, nextSnapshot),
      new PlayerPositionIncreased(tourCode, prevSnapshot, nextSnapshot),
      new PlayerWithdrawn(tourCode, prevSnapshot, nextSnapshot),
      new TournamentWinner(tourCode, prevSnapshot, nextSnapshot),
    ];
  }
}

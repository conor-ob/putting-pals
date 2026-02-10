import { AbstractEventProcessorService } from "../event/abstract-event-processor-service";
import type { EventEmitter } from "../event/domain/types";
import { LeaderChanged } from "../event/events/leader-changed";
import { PlayerDisqualified } from "../event/events/player-disqualified";
import { PlayerMissedCut } from "../event/events/player-missed-cut";
import { PlayerPositionDecreased } from "../event/events/player-position-decreased";
import { PlayerPositionIncreased } from "../event/events/player-position-increased";
import { PlayerWithdrawn } from "../event/events/player-withdrawn";
import { TournamentWinner } from "../event/events/tournament-winner";
import type { LeaderboardSnapshotRepository } from "../event/interfaces/outbound/leaderboard-snapshot-repository";
import type { TourCode } from "../tour/domain/types";
import type { Leaderboard } from "./domain/types";
import type { LeaderboardService } from "./interfaces/inbound/leaderboard-service";

export class LeaderboardEventProcessorServiceImpl extends AbstractEventProcessorService<Leaderboard> {
  constructor(
    private readonly leaderboardService: LeaderboardService,
    snapshotRepository: LeaderboardSnapshotRepository,
  ) {
    super("Leaderboard", snapshotRepository);
  }

  protected override async getNextSnapshot(
    tourCode: TourCode,
    tournamentId: string,
  ): Promise<Leaderboard> {
    return await this.leaderboardService.getLeaderboard(tourCode, tournamentId);
  }

  protected override async createEventEmitters(
    tourCode: TourCode,
    _tournamentId: string,
    prevSnapshot: Leaderboard,
    nextSnapshot: Leaderboard,
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

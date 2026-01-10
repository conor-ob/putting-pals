import type {
  LeaderboardEvent,
  LeaderboardFeedRepository,
  LeaderboardSnapshot,
  LeaderboardSnapshotRepository,
  TourCode,
} from "@putting-pals/putting-pals-schema";
import { LeaderboardService } from "../leaderboard/leaderboard-service";
import { TournamentResolver } from "../tournament/tournament-resolver";
import { TournamentService } from "../tournament/tournament-service";
import type { EventEmitter } from "./event-emitter";
import { BirdieStreak } from "./events/birdie-streak";
import { LeaderChanged } from "./events/leader-changed";
import { PlayerDisqualified } from "./events/player-disqualified";
import { PlayerMissedCut } from "./events/player-missed-cut";
import { PlayerPositionDecreased } from "./events/player-position-decreased";
import { PlayerPositionIncreased } from "./events/player-position-increased";
import { PlayerWithdrawn } from "./events/player-withdrawn";
import { RoundStatusChanged } from "./events/round-status-changed";
import { TournamentStatusChanged } from "./events/tournament-status-changed";
import { TournamentWinner } from "./events/tournament-winner";

export class LeaderboardEventProcessor {
  constructor(
    private readonly leaderboardSnapshotRepository: LeaderboardSnapshotRepository,
    private readonly leaderboardFeedRepository: LeaderboardFeedRepository,
  ) {
    this.leaderboardSnapshotRepository = leaderboardSnapshotRepository;
    this.leaderboardFeedRepository = leaderboardFeedRepository;
  }

  async detectChange(tourCode: TourCode) {
    const tournamentId = await new TournamentResolver().getCurrentTournamentId(
      tourCode,
    );

    const [before, after] = await Promise.all([
      this.getLeaderboardSnapshotBefore(tourCode, tournamentId),
      this.getLeaderboardSnapshotAfter(tourCode, tournamentId),
    ]);

    if (before === undefined) {
      await this.insertBaseLeaderboardSnapshot(tourCode, tournamentId, after);
      return;
    }
    // } else if (queryResult.version !== LeaderboardSnapshotVersion) {
    //   await this.updateLeaderboardSnapshot(tourCode, tournamentId, after);
    //   return;
    // }

    const eventEmitters: EventEmitter[] = [
      new BirdieStreak(tourCode, before, after),
      new LeaderChanged(tourCode, before, after),
      new PlayerDisqualified(tourCode, before, after),
      new PlayerMissedCut(tourCode, before, after),
      new PlayerPositionDecreased(tourCode, before, after),
      new PlayerPositionIncreased(tourCode, before, after),
      new PlayerWithdrawn(tourCode, before, after),
      new RoundStatusChanged(tourCode, before, after),
      new TournamentStatusChanged(tourCode, before, after),
      new TournamentWinner(tourCode, before, after),
    ];

    const events = eventEmitters
      .sort((a, b) => a.getPriority() - b.getPriority())
      .flatMap((eventEmitter) => eventEmitter.emit());

    if (events.length > 0) {
      await this.insertLeaderboardFeedEvents(
        tourCode,
        tournamentId,
        events,
        after,
      );
    }
  }

  private async getLeaderboardSnapshotBefore(
    tourCode: TourCode,
    tournamentId: string,
  ) {
    return this.leaderboardSnapshotRepository.getLeaderboardSnapshot(
      tourCode,
      tournamentId,
    );
  }

  private async getLeaderboardSnapshotAfter(
    tourCode: TourCode,
    tournamentId: string,
  ) {
    const [tournament, leaderboard] = await Promise.all([
      new TournamentService().getTournament(tourCode, tournamentId),
      new LeaderboardService().getLeaderboard(tourCode, tournamentId),
    ]);

    const currentRound = tournament.currentRound;
    const leaderboardHoleByHole =
      await new LeaderboardService().getLeaderboardHoleByHole(
        tournamentId,
        currentRound,
      );

    return {
      tournament: tournament,
      leaderboard: leaderboard,
      leaderboardHoleByHole: leaderboardHoleByHole,
    } satisfies LeaderboardSnapshot;
  }

  private async insertBaseLeaderboardSnapshot(
    tourCode: TourCode,
    tournamentId: string,
    snapshot: LeaderboardSnapshot,
  ) {
    return this.leaderboardSnapshotRepository.createLeaderboardSnapshot(
      tourCode,
      tournamentId,
      snapshot,
    );
  }

  private async insertLeaderboardFeedEvents(
    tourCode: TourCode,
    tournamentId: string,
    events: LeaderboardEvent[],
    snapshot: LeaderboardSnapshot,
  ) {
    await this.leaderboardFeedRepository.createLeaderboardFeedItems(
      tourCode,
      tournamentId,
      events,
    );

    await this.leaderboardSnapshotRepository.updateLeaderboardSnapshot(
      tourCode,
      tournamentId,
      snapshot,
    );
  }
}

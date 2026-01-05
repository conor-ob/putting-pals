import type { Database } from "@putting-pals/putting-pals-db/client";
import {
  leaderboardFeedTable,
  leaderboardSnapshotTable,
} from "@putting-pals/putting-pals-db/schema";
import {
  type LeaderboardEvent,
  type LeaderboardSnapshot,
  LeaderboardSnapshotVersion,
  type TourCode,
} from "@putting-pals/putting-pals-schema/types";
import { and, desc, eq } from "drizzle-orm";
import { LeaderboardService } from "../leaderboard/leaderboard-service";
import { TournamentResolver } from "../tournament/tournament-resolver";
import { TournamentService } from "../tournament/tournament-service";
import type { EventEmitter } from "./event-emitter";
import { BirdieStreak } from "./events/birdie-streak";
import { NewLeader } from "./events/new-leader";
import { PlayerDisqualified } from "./events/player-disqualified";
import { PlayerMissedCut } from "./events/player-missed-cut";
import { PlayerPositionDecreased } from "./events/player-position-decreased";
import { PlayerPositionIncreased } from "./events/player-position-increased";
import { PlayerWithdrawn } from "./events/player-withdrawn";
import { RoundStatusChanged } from "./events/round-status-changed";
import { TournamentStatusChanged } from "./events/tournament-status-changed";
import { TournamentWinner } from "./events/tournament-winner";

export class LeaderboardEventProcessor {
  constructor(private readonly db: Database) {
    this.db = db;
  }

  async detectChange(tourCode: TourCode) {
    const tournamentId = await new TournamentResolver().getCurrentTournamentId(
      tourCode,
    );

    const queryResult = await this.getLeaderboardSnapshotBefore(
      tourCode,
      tournamentId,
    );
    const after = await this.getLeaderboardSnapshotAfter(
      tourCode,
      tournamentId,
    );

    if (queryResult === undefined) {
      await this.insertBaseLeaderboardSnapshot(tourCode, tournamentId, after);
      return;
    } else if (queryResult.version !== LeaderboardSnapshotVersion) {
      await this.updateLeaderboardSnapshot(tourCode, tournamentId, after);
      return;
    }

    const before = queryResult.snapshot;
    const eventEmitters: EventEmitter[] = [
      new BirdieStreak(tourCode, before, after),
      new NewLeader(tourCode, before, after),
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
    return this.db
      .select({
        version: leaderboardSnapshotTable.version,
        snapshot: leaderboardSnapshotTable.snapshot,
      })
      .from(leaderboardSnapshotTable)
      .where(
        and(
          eq(leaderboardSnapshotTable.tourCode, tourCode),
          eq(leaderboardSnapshotTable.tournamentId, tournamentId),
        ),
      )
      .orderBy(desc(leaderboardSnapshotTable.updatedAt))
      .limit(1)
      .then(([result]) => result);
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
    return this.db.insert(leaderboardSnapshotTable).values({
      tourCode: tourCode,
      tournamentId: tournamentId,
      version: LeaderboardSnapshotVersion,
      snapshot: snapshot,
    });
  }

  private async updateLeaderboardSnapshot(
    tourCode: TourCode,
    tournamentId: string,
    snapshot: LeaderboardSnapshot,
  ) {
    return this.db
      .update(leaderboardSnapshotTable)
      .set({
        snapshot: snapshot,
        version: LeaderboardSnapshotVersion,
      })
      .where(
        and(
          eq(leaderboardSnapshotTable.tourCode, tourCode),
          eq(leaderboardSnapshotTable.tournamentId, tournamentId),
        ),
      );
  }

  private async insertLeaderboardFeedEvents(
    tourCode: TourCode,
    tournamentId: string,
    events: LeaderboardEvent[],
    snapshot: LeaderboardSnapshot,
  ) {
    await this.db.transaction(async (tx) => {
      await tx.insert(leaderboardFeedTable).values(
        events.map((event) => ({
          tourCode: tourCode,
          tournamentId: tournamentId,
          type: event.__typename,
          feedItem: event,
        })),
      );

      await tx
        .update(leaderboardSnapshotTable)
        .set({
          snapshot: snapshot,
        })
        .where(
          and(
            eq(leaderboardSnapshotTable.tourCode, tourCode),
            eq(leaderboardSnapshotTable.tournamentId, tournamentId),
          ),
        );
    });
  }
}

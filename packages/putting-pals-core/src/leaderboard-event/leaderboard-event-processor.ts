import type { Database } from "@putting-pals/putting-pals-db/client";
import {
  leaderboardFeedTable,
  leaderboardSnapshotTable,
} from "@putting-pals/putting-pals-db/schema";
import type {
  LeaderboardEventTypes,
  LeaderboardSnapshotV1,
  TourCode,
} from "@putting-pals/putting-pals-schema/types";
import { and, desc, eq } from "drizzle-orm";
import { LeaderboardService } from "../leaderboard/leaderboard-service";
import { TournamentResolver } from "../tournament/tournament-resolver";
import { TournamentService } from "../tournament/tournament-service";
import { NewLeader } from "./events/new-leader";
import { PlayerPositionDecreased } from "./events/player-position-decreased";
import { PlayerPositionIncreased } from "./events/player-position-increased";
import { RoundStatusChanged } from "./events/round-status-changed";
import { TournamentStatusChanged } from "./events/tournament-status-changed";

export class LeaderboardEventProcessor {
  constructor(private readonly db: Database) {
    this.db = db;
  }

  async detectChange(tourCode: TourCode) {
    const tournamentId = await new TournamentResolver().getCurrentTournamentId(
      tourCode,
    );

    const before = await this.getLeaderboardSnapshotBefore(
      tourCode,
      tournamentId,
    );
    const after = await this.getLeaderboardSnapshotAfter(
      tourCode,
      tournamentId,
    );

    if (before === undefined) {
      await this.insertBaseLeaderboardSnapshot(tourCode, tournamentId, after);
      return;
    }

    const eventEmitters = [
      new RoundStatusChanged(tourCode, before, after),
      new TournamentStatusChanged(tourCode, before, after),
      new NewLeader(tourCode, before, after),
      new PlayerPositionIncreased(tourCode, before, after),
      new PlayerPositionDecreased(tourCode, before, after),
    ];

    const events = eventEmitters
      .filter((eventEmitter) => eventEmitter.filter())
      .flatMap((eventEmitter) => eventEmitter.emit())
      .sort((a, b) => a.order - b.order);

    if (events.length > 0) {
      await this.insertLeaderboardFeedEvents(
        tourCode,
        tournamentId,
        events.map((it) => it.event),
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
      .then(([result]) => result?.snapshot);
  }

  private async getLeaderboardSnapshotAfter(
    tourCode: TourCode,
    tournamentId: string,
  ) {
    const [tournament, leaderboard] = await Promise.all([
      new TournamentService().getTournament(tourCode, tournamentId),
      new LeaderboardService().getLeaderboard(tourCode, tournamentId),
    ]);
    return {
      __typename: "LeaderboardSnapshotV1",
      tournamentName: tournament.tournamentName,
      tournamentStatus: tournament.tournamentStatus,
      roundDisplay: tournament.roundDisplay,
      roundStatus: tournament.roundStatus,
      roundStatusColor: tournament.roundStatusColor,
      roundStatusDisplay: tournament.roundStatusDisplay,
      rows: leaderboard.rows.flatMap((row) => {
        if (row.__typename === "PlayerRowV3") {
          return {
            __typename: row.__typename,
            id: row.id,
            leaderboardSortOrder: row.leaderboardSortOrder,
            player: {
              abbreviations: row.player.abbreviations,
              amateur: row.player.amateur,
              countryFlag: row.player.countryFlag,
              displayName: row.player.displayName,
              id: row.player.id,
              shortName: row.player.shortName,
            } satisfies LeaderboardSnapshotV1["rows"][number]["player"],
            scoringData: {
              position: row.scoringData.position,
              score: row.scoringData.score,
              scoreSort: row.scoringData.scoreSort,
              teeTime: row.scoringData.teeTime,
              thru: row.scoringData.thru,
              thruSort: row.scoringData.thruSort,
              total: row.scoringData.total,
              totalSort: row.scoringData.totalSort,
            } satisfies LeaderboardSnapshotV1["rows"][number]["scoringData"],
          } satisfies LeaderboardSnapshotV1["rows"][number];
        } else {
          return [];
        }
      }),
    } satisfies LeaderboardSnapshotV1;
  }

  private async insertBaseLeaderboardSnapshot(
    tourCode: TourCode,
    tournamentId: string,
    snapshot: LeaderboardSnapshotV1,
  ) {
    return this.db.insert(leaderboardSnapshotTable).values({
      tourCode: tourCode,
      tournamentId: tournamentId,
      type: snapshot.__typename,
      snapshot: snapshot,
    });
  }

  private async insertLeaderboardFeedEvents(
    tourCode: TourCode,
    tournamentId: string,
    events: LeaderboardEventTypes[],
    snapshot: LeaderboardSnapshotV1,
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
          type: snapshot.__typename,
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

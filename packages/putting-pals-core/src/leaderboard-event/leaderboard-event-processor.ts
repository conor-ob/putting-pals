import type { Database } from "@putting-pals/putting-pals-db/client";
import {
  type LeaderboardSnapshotV1,
  leaderboardFeedTable,
  leaderboardSnapshotTable,
  type RoundStatusChangedV1,
} from "@putting-pals/putting-pals-db/schema";
import type { TourCode } from "@putting-pals/putting-pals-schema/types";
import { and, desc, eq } from "drizzle-orm";
import { LeaderboardService } from "../leaderboard/leaderboard-service";
import { TournamentResolver } from "../tournament/tournament-resolver";
import { TournamentService } from "../tournament/tournament-service";

export class LeaderboardEventProcessor {
  constructor(private readonly db: Database) {
    this.db = db;
  }

  async processEvent(tourCode: TourCode) {
    const tournamentId = await new TournamentResolver().getCurrentTournamentId(
      tourCode,
    );
    const [tournament, leaderboard] = await Promise.all([
      new TournamentService().getTournament(tourCode, tournamentId),
      new LeaderboardService().getLeaderboard(tourCode, tournamentId),
    ]);

    const newLeaderboardSnapshot = {
      __typename: "LeaderboardSnapshotV1",
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
            },
            scoringData: {
              position: row.scoringData.position,
              score: row.scoringData.score,
              scoreSort: row.scoringData.scoreSort,
              teeTime: row.scoringData.teeTime,
              thru: row.scoringData.thru,
              thruSort: row.scoringData.thruSort,
              total: row.scoringData.total,
              totalSort: row.scoringData.totalSort,
            },
          } satisfies LeaderboardSnapshotV1["rows"][number];
        } else {
          return [];
        }
      }),
    } satisfies LeaderboardSnapshotV1;

    const existingLeaderboardSnapshot = await this.db
      .select({
        snapshot: leaderboardSnapshotTable.snapshot,
      })
      .from(leaderboardSnapshotTable)
      .where(
        and(
          eq(leaderboardSnapshotTable.tournamentId, tournamentId),
          eq(leaderboardSnapshotTable.tourCode, tourCode),
        ),
      )
      .orderBy(desc(leaderboardSnapshotTable.createdAt))
      .limit(1)
      .then(([result]) => result?.snapshot);

    if (existingLeaderboardSnapshot === undefined) {
      await this.db.insert(leaderboardSnapshotTable).values({
        tourCode: tourCode,
        tournamentId: tournamentId,
        snapshot: newLeaderboardSnapshot,
      });

      return;
    }

    if (
      existingLeaderboardSnapshot.roundStatus !==
      newLeaderboardSnapshot.roundStatus
    ) {
      await this.db.insert(leaderboardFeedTable).values({
        tourCode: tourCode,
        tournamentId: tournamentId,
        feedItem: {
          __typename: "RoundStatusChangedV1",
          roundDisplay: newLeaderboardSnapshot.roundDisplay,
          roundStatus: newLeaderboardSnapshot.roundStatus,
          roundStatusColor: newLeaderboardSnapshot.roundStatusColor,
          roundStatusDisplay: newLeaderboardSnapshot.roundStatusDisplay,
        } satisfies RoundStatusChangedV1,
      });
    }
  }
}

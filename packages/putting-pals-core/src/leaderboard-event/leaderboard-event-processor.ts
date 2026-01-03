import type { Database } from "@putting-pals/putting-pals-db/client";
import {
  type LeaderboardSnapshotV1,
  leaderboardFeedTable,
  leaderboardSnapshotTable,
} from "@putting-pals/putting-pals-db/schema";
import type { TourCode } from "@putting-pals/putting-pals-schema/types";
import { assertNever } from "@putting-pals/putting-pals-utils/type-utils";
import { and, desc, eq } from "drizzle-orm";
import { LeaderboardService } from "../leaderboard/leaderboard-service";
import { TournamentResolver } from "../tournament/tournament-resolver";
import { TournamentService } from "../tournament/tournament-service";
import { NewPuttingPalsLeader } from "./events/new-putting-pals-leader";
import { PlayerPositionDecreased } from "./events/player-position-decreased";
import { PlayerPositionIncreased } from "./events/player-position-increased";
import { PuttingPalsPlayerPositionDecreased } from "./events/putting-pals-player-position-decreased";
import { PuttingPalsPlayerPositionIncreased } from "./events/putting-pals-player-position-increased";
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
    const [tournament, leaderboard] = await Promise.all([
      new TournamentService().getTournament(tourCode, tournamentId),
      new LeaderboardService().getLeaderboard(tourCode, tournamentId),
    ]);

    // await this.db.insert(leaderboardFeedTable).values({
    //   tourCode: tourCode,
    //   tournamentId: tournamentId,
    //   type: "RoundStatusChangedV1",
    //   feedItem: {
    //     __typename: "RoundStatusChangedV1",
    //     roundDisplay: "R4",
    //     roundStatus: RoundStatus.Official,
    //     roundStatusColor: RoundStatusColor.Green,
    //     roundStatusDisplay: "Official",
    //   },
    // });

    // Array.from(Array(207)).forEach(async () => {
    //   await this.db.insert(leaderboardFeedTable).values({
    //     tourCode: tourCode,
    //     tournamentId: tournamentId,
    //     type: "TournamentStatusChangedV1",
    //     feedItem: {
    //       __typename: "TournamentStatusChangedV1",
    //       tournamentName: tournament.tournamentName,
    //       tournamentStatus: tournament.tournamentStatus,
    //       customText: "hello world",
    //     },
    //   });
    // });

    const newLeaderboardSnapshot = {
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

    const existingLeaderboardSnapshot = await this.db
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

    if (existingLeaderboardSnapshot === undefined) {
      await this.db.insert(leaderboardSnapshotTable).values({
        tourCode: tourCode,
        tournamentId: tournamentId,
        type: newLeaderboardSnapshot.__typename,
        snapshot: newLeaderboardSnapshot,
      });

      return;
    }

    const events = this.getEventEmitters(tourCode)
      .filter((eventEmitter) =>
        eventEmitter.filter(
          existingLeaderboardSnapshot,
          newLeaderboardSnapshot,
        ),
      )
      .flatMap((eventEmitter) =>
        eventEmitter.emit(existingLeaderboardSnapshot, newLeaderboardSnapshot),
      );

    if (events.length > 0) {
      this.db.transaction(async (tx) => {
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
            type: newLeaderboardSnapshot.__typename,
            snapshot: newLeaderboardSnapshot,
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

  private getEventEmitters(tourCode: TourCode) {
    switch (tourCode) {
      case "P":
        return [
          RoundStatusChanged,
          TournamentStatusChanged,
          NewPuttingPalsLeader,
          PuttingPalsPlayerPositionIncreased,
          PuttingPalsPlayerPositionDecreased,
        ];
      case "R":
        return [
          RoundStatusChanged,
          TournamentStatusChanged,
          PlayerPositionIncreased,
          PlayerPositionDecreased,
        ];
      default:
        assertNever(tourCode);
    }
  }
}

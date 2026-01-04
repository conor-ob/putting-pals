import type { Database } from "@putting-pals/putting-pals-db/client";
import {
  leaderboardFeedTable,
  leaderboardSnapshotTable,
} from "@putting-pals/putting-pals-db/schema";
import type {
  LeaderboardEvent,
  LeaderboardSnapshotV1,
  TourCode,
} from "@putting-pals/putting-pals-schema/types";
import { and, desc, eq } from "drizzle-orm";
import { LeaderboardService } from "../leaderboard/leaderboard-service";
import { TournamentResolver } from "../tournament/tournament-resolver";
import { TournamentService } from "../tournament/tournament-service";
import type { EventEmitter } from "./event-emitter";
import { BirdieStreak } from "./events/birdie-streak";
import { NewLeader } from "./events/new-leader";
import { PlayerDisqualified } from "./events/player-disqualified";
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

    const before = await this.getLeaderboardSnapshotBefore(
      tourCode,
      tournamentId,
    );
    const after = await this.getLeaderboardSnapshotAfter(
      tourCode,
      tournamentId,
    );

    if (before === undefined || before.__typename !== after.__typename) {
      await this.insertBaseLeaderboardSnapshot(tourCode, tournamentId, after);
      return;
    }

    const eventEmitters: EventEmitter[] = [
      new BirdieStreak(tourCode, before, after),
      new NewLeader(tourCode, before, after),
      new PlayerDisqualified(tourCode, before, after),
      new PlayerPositionDecreased(tourCode, before, after),
      new PlayerPositionIncreased(tourCode, before, after),
      new PlayerWithdrawn(tourCode, before, after),
      new RoundStatusChanged(tourCode, before, after),
      new TournamentStatusChanged(tourCode, before, after),
      new TournamentWinner(tourCode, before, after),
    ];

    const events = eventEmitters
      .filter((eventEmitter) => eventEmitter.filter())
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

    const currentRound = tournament.currentRound;
    const leaderboardHoleByHole =
      await new LeaderboardService().getLeaderboardHoleByHole(
        tournamentId,
        currentRound,
      );

    return {
      __typename: "LeaderboardSnapshotV1",
      tournament: {
        beautyImageAsset: {
          assetType: tournament.beautyImageAsset.assetType,
          deliveryType: tournament.beautyImageAsset.deliveryType,
          fallbackImage: tournament.beautyImageAsset.fallbackImage,
          imageOrg: tournament.beautyImageAsset.imageOrg,
          imagePath: tournament.beautyImageAsset.imagePath,
        },
        roundDisplay: tournament.roundDisplay,
        roundStatus: tournament.roundStatus,
        roundStatusColor: tournament.roundStatusColor,
        roundStatusDisplay: tournament.roundStatusDisplay,
        tournamentLogoAsset: tournament.tournamentLogoAsset.map((asset) => ({
          assetType: asset.assetType,
          deliveryType: asset.deliveryType,
          fallbackImage: asset.fallbackImage,
          imageOrg: asset.imageOrg,
          imagePath: asset.imagePath,
        })),
        tournamentName: tournament.tournamentName,
        tournamentStatus: tournament.tournamentStatus,
      },
      leaderboard: {
        players: leaderboard.players.flatMap((row) => {
          switch (row.__typename) {
            case "InformationRow":
              return {
                __typename: "InformationRow" as const,
              };
            case "PlayerRowV3":
              return {
                __typename: "PlayerRowV3" as const,
                player: {
                  id: row.player.id,
                  displayName: row.player.displayName,
                },
                scoringData: {
                  position: row.scoringData.position,
                  total: row.scoringData.total,
                },
              };
            case "PuttingPalsPlayerRow":
              return {
                __typename: "PuttingPalsPlayerRow" as const,
                player: {
                  id: row.player.id,
                  displayName: row.player.displayName,
                },
                scoringData: {
                  position: row.scoringData.position,
                  total: row.scoringData.total,
                },
              };
            default:
              return [];
          }
        }),
      },
      leaderboardHoleByHole: {
        tournamentId: leaderboardHoleByHole.tournamentId,
      },
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
    events: LeaderboardEvent[],
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

import type { Database } from "@putting-pals/putting-pals-db/client";
import {
  type LeaderboardSnapshotV1,
  leaderboardSnapshotBaseTable,
  leaderboardSnapshotPatchTable,
} from "@putting-pals/putting-pals-db/schema";
import type { TourCode } from "@putting-pals/putting-pals-schema/types";
import { and, asc, desc, eq } from "drizzle-orm";
import patch from "fast-json-patch";
import { LeaderboardService } from "../leaderboard/leaderboard-service";
import { TournamentService } from "../tournament/tournament-service";

export class LeaderboardEventProcessor {
  constructor(private readonly db: Database) {
    this.db = db;
  }

  async processEvent(tourCode: TourCode) {
    const [tournament, leaderboard] = await Promise.all([
      getTournament(),
      getLeaderboard(),
    ]);

    const newSnapshot = normalizeNewSnapshot(tournament, leaderboard);

    const baseSnapshot = (
      await this.db
        .select()
        .from(leaderboardSnapshotBaseTable)
        .where(
          and(
            eq(leaderboardSnapshotBaseTable.tournamentId, tournament.id),
            eq(leaderboardSnapshotBaseTable.tourCode, tourCode),
          ),
        )
        .orderBy(desc(leaderboardSnapshotBaseTable.createdAt))
        .limit(1)
    )[0]?.snapshot;

    if (baseSnapshot === undefined || baseSnapshot === null) {
      await this.db.insert(leaderboardSnapshotBaseTable).values({
        tournamentId: tournament.id,
        tourCode: tourCode,
        snapshot: newSnapshot,
      });

      return;
    }

    const patches = await this.db
      .select()
      .from(leaderboardSnapshotPatchTable)
      .where(
        and(
          eq(leaderboardSnapshotPatchTable.tournamentId, tournament.id),
          eq(leaderboardSnapshotPatchTable.tourCode, tourCode),
        ),
      )
      .orderBy(asc(leaderboardSnapshotPatchTable.createdAt));

    const materialized = normalizeExistingSnapshot(
      patch.applyPatch(
        structuredClone(baseSnapshot),
        patches.flatMap((patch) => patch.patch.operations),
        false,
      ).newDocument,
    );

    const diff = patch.compare(materialized, newSnapshot);
    if (diff.length > 0) {
      const lastStreamVersion =
        (
          await this.db
            .select()
            .from(leaderboardSnapshotPatchTable)
            .where(
              and(
                eq(leaderboardSnapshotPatchTable.tournamentId, tournament.id),
                eq(leaderboardSnapshotPatchTable.tourCode, tourCode),
              ),
            )
            .orderBy(desc(leaderboardSnapshotPatchTable.streamVersion))
            .limit(1)
        )[0]?.streamVersion ?? 0;

      await this.db.insert(leaderboardSnapshotPatchTable).values({
        tournamentId: tournament.id,
        tourCode: tourCode,
        patch: {
          __typename: "JsonPatchV1" as const,
          operations: diff,
        },
        streamVersion: lastStreamVersion + 1,
      });
    }
  }
}

function normalizeNewSnapshot(
  tournament: Tournament,
  leaderboard: Leaderboard,
) {
  return {
    __typename: "LeaderboardSnapshotV1" as const,
    tournamentStatus: tournament.tournamentStatus,
    roundDisplay: tournament.roundDisplay,
    roundStatus: tournament.roundStatus,
    roundStatusColor: tournament.roundStatusColor,
    roundStatusDisplay: tournament.roundStatusDisplay,
    leaderboardRoundHeader: leaderboard.leaderboardRoundHeader,
    rows: leaderboard.rows
      .flatMap((row) => {
        if (row.__typename === "PlayerRowV3") {
          return {
            __typename: "PlayerRowV3" as const,
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
              teeTime: row.scoringData.teeTime
                ? row.scoringData.teeTime.toISOString()
                : undefined,
              thru: row.scoringData.thru,
              thruSort: row.scoringData.thruSort,
              total: row.scoringData.total,
              totalSort: row.scoringData.totalSort,
            },
          } satisfies LeaderboardSnapshotV1["rows"][number];
        } else {
          return [];
        }
      })
      .sort((a, b) => a.id.localeCompare(b.id)), // sort by player id to ensure consistent order
  } satisfies LeaderboardSnapshotV1; // required for stricter type checking
}

function normalizeExistingSnapshot(snapshot: LeaderboardSnapshotV1) {
  return {
    __typename: "LeaderboardSnapshotV1" as const,
    tournamentStatus: snapshot.tournamentStatus,
    roundDisplay: snapshot.roundDisplay,
    roundStatus: snapshot.roundStatus,
    roundStatusColor: snapshot.roundStatusColor,
    roundStatusDisplay: snapshot.roundStatusDisplay,
    leaderboardRoundHeader: snapshot.leaderboardRoundHeader,
    rows: snapshot.rows.sort((a, b) => a.id.localeCompare(b.id)), // sort by player id to ensure consistent order
  } satisfies LeaderboardSnapshotV1; // required for stricter type checking
}

type Leaderboard = Awaited<ReturnType<typeof getLeaderboard>>;

function getLeaderboard() {
  return new LeaderboardService().getLeaderboard("R");
}

type Tournament = Awaited<ReturnType<typeof getTournament>>;

function getTournament() {
  return new TournamentService().getTournament("R");
}

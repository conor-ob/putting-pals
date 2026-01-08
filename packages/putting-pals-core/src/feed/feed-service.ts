import type { Database } from "@putting-pals/putting-pals-db/client";
import { leaderboardFeedTable } from "@putting-pals/putting-pals-db/schema";
import type {
  LeaderboardEvent,
  TourCode,
} from "@putting-pals/putting-pals-schema/types";
import { and, desc, eq, isNull, lt } from "drizzle-orm";
import { LeaderboardService } from "../leaderboard/leaderboard-service";
import { TournamentResolver } from "../tournament/tournament-resolver";
import { TournamentService } from "../tournament/tournament-service";

const PAGE_SIZE = 20;

export class FeedService {
  constructor(private readonly db: Database) {
    this.db = db;
  }

  async getFeed(tourCode: TourCode, id?: string, cursor?: number) {
    const tournamentId = await this.resolveTournamentId(tourCode, id);
    const [tournament, leaderboard] = await Promise.all([
      new TournamentService().getTournament(tourCode, tournamentId),
      new LeaderboardService().getLeaderboard(tourCode, tournamentId),
    ]);

    const items = await this.db
      .select()
      .from(leaderboardFeedTable)
      .where(
        and(
          eq(leaderboardFeedTable.tourCode, tourCode),
          eq(leaderboardFeedTable.tournamentId, tournamentId),
          isNull(leaderboardFeedTable.deletedAt),
          cursor ? lt(leaderboardFeedTable.seq, cursor) : undefined,
        ),
      )
      .orderBy(desc(leaderboardFeedTable.seq))
      .limit(PAGE_SIZE + 1);

    const hasMore = items.length > PAGE_SIZE;
    const feedItems = hasMore ? items.slice(0, -1) : items;
    const nextCursor = hasMore
      ? feedItems[feedItems.length - 1]?.seq
      : undefined;

    return {
      items: feedItems.map((item) => ({
        ...item,
        feedItem: this.hydrate(item.feedItem, tournament, leaderboard),
      })),
      nextCursor,
    };
  }

  private hydrate(
    feedItem: LeaderboardEvent,
    tournament: Awaited<ReturnType<TournamentService["getTournament"]>>,
    leaderboard: Awaited<ReturnType<LeaderboardService["getLeaderboard"]>>,
  ) {
    switch (feedItem.__typename) {
      case "LeaderChangedV1":
        return {
          ...feedItem,
          before: {
            players: feedItem.before.players.flatMap((player) => {
              const playerMatch = leaderboard.players
                .filter((p) => p.__typename === "PlayerRowV3")
                .find((p) => p.player.id === player.player.id)?.player;
              if (playerMatch === undefined) {
                return [];
              } else {
                return playerMatch;
              }
            }),
          },
          after: {
            players: feedItem.before.players.flatMap((player) => {
              const playerMatch = leaderboard.players
                .filter((p) => p.__typename === "PlayerRowV3")
                .find((p) => p.player.id === player.player.id)?.player;
              if (playerMatch === undefined) {
                return [];
              } else {
                return playerMatch;
              }
            }),
          },
        };
      case "TournamentStatusChangedV1":
        return {
          ...feedItem,
          tournamentName: tournament.tournamentName,
        };
      default:
        return feedItem;
    }
  }

  private async resolveTournamentId(tourCode: TourCode, id?: string) {
    if (id === undefined) {
      return await new TournamentResolver().getCurrentTournamentId(tourCode);
    }
    return id;
  }
}

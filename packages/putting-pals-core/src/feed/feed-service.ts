import type { Database } from "@putting-pals/putting-pals-db/client";
import { leaderboardFeedTable } from "@putting-pals/putting-pals-db/schema";
import type { TourCode } from "@putting-pals/putting-pals-schema/types";
import { and, desc, eq, isNull, lt } from "drizzle-orm";
import { TournamentResolver } from "../tournament/tournament-resolver";

const PAGE_SIZE = 20;

export class FeedService {
  constructor(private readonly db: Database) {
    this.db = db;
  }

  async getFeed(tourCode: TourCode, id?: string, cursor?: number) {
    const tournamentId = await this.resolveTournamentId(tourCode, id);

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
      items: feedItems,
      nextCursor,
    };
  }

  private async resolveTournamentId(tourCode: TourCode, id?: string) {
    if (id === undefined) {
      return await new TournamentResolver().getCurrentTournamentId(tourCode);
    }
    return id;
  }
}

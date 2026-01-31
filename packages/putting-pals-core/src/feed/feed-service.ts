import type {
  AggregateRepository,
  AggregateType,
  FeedService,
  LeaderboardEventType,
  LeaderboardFeedRepository,
  TourCode,
  TournamentResolver,
} from "@putting-pals/putting-pals-api";

const PAGE_SIZE = 20;

export class FeedServiceImpl implements FeedService {
  constructor(
    private readonly tournamentResolver: TournamentResolver,
    private readonly leaderboardFeedRepository: LeaderboardFeedRepository,
    private readonly aggregateRepository: AggregateRepository,
  ) {
    this.tournamentResolver = tournamentResolver;
    this.leaderboardFeedRepository = leaderboardFeedRepository;
    this.aggregateRepository = aggregateRepository;
  }

  async getFeed(tourCode: TourCode, id?: string, cursor?: number) {
    const tournamentId = await this.resolveTournamentId(tourCode, id);

    const items = await this.leaderboardFeedRepository.getLeaderboardFeed(
      tourCode,
      tournamentId,
      PAGE_SIZE,
      cursor,
    );

    const hasMore = items.length > PAGE_SIZE;
    const feedItems = hasMore ? items.slice(0, -1) : items;
    const nextCursor = hasMore
      ? feedItems[feedItems.length - 1]?.seq
      : undefined;

    return {
      items: await this.hydrate(tourCode, tournamentId, feedItems),
      nextCursor,
    };
  }

  private async hydrate(
    tourCode: TourCode,
    tournamentId: string,
    feedItems: {
      seq: number;
      event: LeaderboardEventType;
      type: AggregateType;
      patchSeq: number;
      tourCode: TourCode;
      tournamentId: string;
      createdAt: Date;
      updatedAt: Date;
      deletedAt: Date | null;
      id: string;
    }[],
  ) {
    const [tournament, leaderboard] = await Promise.all([
      this.aggregateRepository.getAggregate(
        tourCode,
        tournamentId,
        "Tournament",
      ),
      this.aggregateRepository.getAggregate(
        tourCode,
        tournamentId,
        "LeaderboardV3",
      ),
    ]);

    const tournamentPatches = await this.aggregateRepository.getPatches(
      tourCode,
      tournamentId,
      "Tournament",
    );
    const leaderboardPatches = await this.aggregateRepository.getPatches(
      tourCode,
      tournamentId,
      "LeaderboardV3",
    );

    return feedItems;
  }

  // private hydrate(
  //   feedItem: LeaderboardEventType,
  //   tournament: Awaited<ReturnType<TournamentService["getTournament"]>>,
  //   leaderboard: Awaited<ReturnType<LeaderboardService["getLeaderboard"]>>,
  // ) {
  //   switch (feedItem.__typename) {
  //     case "LeaderChangedV1":
  //       return {
  //         ...feedItem,
  //         before: {
  //           players: feedItem.before.players.flatMap((player) => {
  //             const playerMatch = leaderboard.players
  //               .filter((p) => p.__typename === "PlayerRowV3")
  //               .find((p) => p.player.id === player.player.id)?.player;
  //             if (playerMatch === undefined) {
  //               return [];
  //             } else {
  //               return playerMatch;
  //             }
  //           }),
  //         },
  //         after: {
  //           players: feedItem.before.players.flatMap((player) => {
  //             const playerMatch = leaderboard.players
  //               .filter((p) => p.__typename === "PlayerRowV3")
  //               .find((p) => p.player.id === player.player.id)?.player;
  //             if (playerMatch === undefined) {
  //               return [];
  //             } else {
  //               return playerMatch;
  //             }
  //           }),
  //         },
  //       };
  //     case "TournamentStatusChangedV1":
  //       return {
  //         ...feedItem,
  //         tournamentName: tournament.tournamentName,
  //       };
  //     default:
  //       return feedItem;
  //   }
  // }

  private async resolveTournamentId(
    tourCode: TourCode,
    id?: string,
  ): Promise<string> {
    if (id === undefined) {
      return await this.tournamentResolver.getCurrentTournamentId(tourCode);
    }
    return id;
  }
}

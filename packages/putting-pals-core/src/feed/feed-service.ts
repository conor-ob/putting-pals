import type {
  DomainTourCode,
  LeaderboardEvent,
  LeaderboardFeedRepository,
  LeaderboardService,
  TournamentResolver,
  TournamentService,
} from "@putting-pals/putting-pals-schema";

const PAGE_SIZE = 20;

export class FeedService {
  constructor(
    private readonly tournamentService: TournamentService,
    private readonly leaderboardService: LeaderboardService,
    private readonly tournamentResolver: TournamentResolver,
    private readonly leaderboardFeedRepository: LeaderboardFeedRepository,
  ) {
    this.tournamentService = tournamentService;
    this.leaderboardService = leaderboardService;
    this.tournamentResolver = tournamentResolver;
    this.leaderboardFeedRepository = leaderboardFeedRepository;
  }

  async getFeed(tourCode: DomainTourCode, id?: string, cursor?: number) {
    const tournamentId = await this.resolveTournamentId(tourCode, id);
    const [tournament, leaderboard] = await Promise.all([
      this.tournamentService.getTournament(tourCode, tournamentId),
      this.leaderboardService.getLeaderboard(tourCode, tournamentId),
    ]);

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

  private async resolveTournamentId(tourCode: DomainTourCode, id?: string) {
    if (id === undefined) {
      return await this.tournamentResolver.getCurrentTournamentId(tourCode);
    }
    return id;
  }
}

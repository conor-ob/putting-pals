import type { TourCode } from "@putting-pals/putting-pals-schema";
import type { LeaderboardFeedEvent } from "../event/domain/types";
import type { LeaderboardService } from "../leaderboard/interfaces/inbound/leaderboard-service";
import type { TournamentResolver } from "../tournament/interfaces/inbound/tournament-resolver";
import type { TournamentService } from "../tournament/interfaces/inbound/tournament-service";
import type { FeedService } from "./interfaces/inbound/feed-service";
import type { LeaderboardFeedRepository } from "./interfaces/outbound/leaderboard-feed-repository";

const PAGE_SIZE = 20;

export class FeedServiceImpl implements FeedService {
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

  async getFeed(tourCode: TourCode, id?: string, cursor?: number) {
    const tournamentId = await this.tournamentResolver.getActiveTournamentId(
      tourCode,
      id,
    );
    const [_tournament, _leaderboard] = await Promise.all([
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
    const feedEvents = hasMore ? items.slice(0, -1) : items;
    const nextCursor = hasMore
      ? feedEvents[feedEvents.length - 1]?.sequence
      : undefined;

    return {
      // events: feedEvents.map((item) => ({
      //   ...item,
      //   feedItem: this.hydrate(item.feedItem, tournament, leaderboard),
      // })),
      events: feedEvents,
      nextCursor,
    };
  }

  // biome-ignore lint/correctness/noUnusedPrivateClassMembers: todo
  private hydrate(
    feedItem: LeaderboardFeedEvent,
    tournament: Awaited<ReturnType<TournamentService["getTournament"]>>,
    leaderboard: Awaited<ReturnType<LeaderboardService["getLeaderboard"]>>,
  ) {
    switch (feedItem.__typename) {
      case "LeaderChangedV1":
        return {
          ...feedItem,
          prev: {
            players: feedItem.prev.players.flatMap((player) => {
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
          next: {
            players: feedItem.next.players.flatMap((player) => {
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
}

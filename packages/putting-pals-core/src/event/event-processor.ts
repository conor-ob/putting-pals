import type { TourCode } from "../../../putting-pals-schema/src";
import type { LeaderboardFeedRepository } from "../feed/interfaces/outbound/leaderboard-feed-repository";
import type { TournamentResolver } from "../tournament/interfaces/inbound/tournament-resolver";
import type { LeaderboardEventProcessor } from "./interfaces/inbound/leaderboard-event-processor";
import type { LeaderboardEventProcessorService } from "./interfaces/inbound/leaderboard-event-processor-service";

export class LeaderboardEventProcessorImpl
  implements LeaderboardEventProcessor
{
  constructor(
    private readonly tournamentResolver: TournamentResolver,
    private readonly leaderboardEventProcessorServices: LeaderboardEventProcessorService[],
    private readonly leaderboardFeedRepository: LeaderboardFeedRepository,
  ) {
    this.tournamentResolver = tournamentResolver;
    this.leaderboardEventProcessorServices = leaderboardEventProcessorServices;
    this.leaderboardFeedRepository = leaderboardFeedRepository;
  }

  async processEvent(tourCode: TourCode): Promise<void> {
    const tournamentId =
      await this.tournamentResolver.getActiveTournamentId(tourCode);

    const eventEmitters = await Promise.all(
      this.leaderboardEventProcessorServices.map((eventProcessorService) =>
        eventProcessorService.processEvent(tourCode, tournamentId),
      ),
    );

    const events = eventEmitters
      .flat()
      .sort((a, b) => a.getPriority() - b.getPriority())
      .flatMap((eventEmitter) => eventEmitter.emit());

    if (events.length > 0) {
      await this.leaderboardFeedRepository.createLeaderboardFeedItems(
        tourCode,
        tournamentId,
        events,
      );
    }
  }
}

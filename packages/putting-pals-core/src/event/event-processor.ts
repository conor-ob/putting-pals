import type { LeaderboardFeedRepository } from "../feed/interfaces/outbound/leaderboard-feed-repository";
import type { TourCode } from "../tour/domain/types";
import type { ActiveTournamentService } from "../tournament/interfaces/inbound/active-tournament-service";
import type { LeaderboardEventProcessor } from "./interfaces/inbound/leaderboard-event-processor";
import type { LeaderboardEventProcessorService } from "./interfaces/inbound/leaderboard-event-processor-service";

export class LeaderboardEventProcessorImpl
  implements LeaderboardEventProcessor
{
  constructor(
    private readonly activeTournamentService: ActiveTournamentService,
    private readonly leaderboardEventProcessorServices: LeaderboardEventProcessorService[],
    private readonly leaderboardFeedRepository: LeaderboardFeedRepository,
  ) {
    this.activeTournamentService = activeTournamentService;
    this.leaderboardEventProcessorServices = leaderboardEventProcessorServices;
    this.leaderboardFeedRepository = leaderboardFeedRepository;
  }

  async processEvent(tourCode: TourCode): Promise<void> {
    const tournamentId =
      await this.activeTournamentService.getActiveTournamentId(tourCode);

    const results = await Promise.all(
      this.leaderboardEventProcessorServices.map((eventProcessorService) =>
        eventProcessorService.processEvent(tourCode, tournamentId),
      ),
    );

    const events = results
      .flatMap((result) => result.emitters)
      .sort((a, b) => a.getPriority() - b.getPriority())
      .flatMap((eventEmitter) => eventEmitter.emit());

    if (events.length > 0) {
      await Promise.all(results.map((result) => result.commitSnapshot()));
      await this.leaderboardFeedRepository.createLeaderboardFeedEvents(
        tourCode,
        tournamentId,
        events,
      );
    }
  }
}

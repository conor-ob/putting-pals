import type {
  LeaderboardEventProcessor,
  LeaderboardEventProcessorService,
  LeaderboardFeedRepository,
  TourCode,
  TournamentResolver,
} from "@putting-pals/putting-pals-api";

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
      await this.tournamentResolver.getCurrentTournamentId(tourCode);

    const eventEmitters = await Promise.all(
      this.leaderboardEventProcessorServices.map((eventProcessorService) =>
        eventProcessorService.processEvent(tourCode, tournamentId),
      ),
    );

    const events = eventEmitters
      .flat()
      .sort((a, b) => a.getPriority() - b.getPriority())
      .flatMap((eventEmitter) => {
        return {
          type: eventEmitter.emit(),
          prevPatchSeq: eventEmitter.getPrevPatchSeq(),
          nextPatchSeq: eventEmitter.getNextPatchSeq(),
        };
      })
      .filter((event) => event.type.length > 0);

    if (events.length > 0) {
      await this.leaderboardFeedRepository.createLeaderboardFeedItems(
        tourCode,
        tournamentId,
        events,
      );
    }
  }
}

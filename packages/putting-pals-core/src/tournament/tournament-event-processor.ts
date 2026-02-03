import type {
  EventEmitter,
  LeaderboardSnapshotRepository,
  TourCode,
  Tournament,
  TournamentService,
} from "@putting-pals/putting-pals-api";
import { AbstractEventProcessorService } from "../event/abstract-event-processor-service";
import { RoundStatusChanged } from "../event/events/round-status-changed";
import { TournamentStatusChanged } from "../event/events/tournament-status-changed";

export class TournamentEventProcessorImpl extends AbstractEventProcessorService<Tournament> {
  constructor(
    private readonly tournamentService: TournamentService,
    snapshotRepository: LeaderboardSnapshotRepository,
  ) {
    super("Tournament", snapshotRepository);
  }

  protected override async getNextSnapshot(
    tourCode: TourCode,
    tournamentId: string,
  ): Promise<Tournament> {
    return await this.tournamentService.getTournament(tourCode, tournamentId);
  }

  protected override async createEventEmitters(
    tourCode: TourCode,
    _tournamentId: string,
    prevSnapshot: Tournament,
    nextSnapshot: Tournament,
  ): Promise<EventEmitter[]> {
    return [
      new RoundStatusChanged(tourCode, prevSnapshot, nextSnapshot),
      new TournamentStatusChanged(tourCode, prevSnapshot, nextSnapshot),
    ];
  }
}

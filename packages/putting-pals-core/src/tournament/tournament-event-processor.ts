import { AbstractEventProcessorService } from "../event/abstract-event-processor-service";
import type { EventEmitter } from "../event/domain/types";
import { RoundStatusChanged } from "../event/events/round-status-changed";
import { TournamentStatusChanged } from "../event/events/tournament-status-changed";
import type { LeaderboardSnapshotRepository } from "../event/interfaces/outbound/leaderboard-snapshot-repository";
import type { TourCode } from "../tour/domain/types";
import type { Tournament } from "./domain/types";
import type { TournamentService } from "./interfaces/inbound/tournament-service";

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

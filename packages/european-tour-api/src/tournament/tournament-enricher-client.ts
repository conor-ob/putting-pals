import type {
  TourCode,
  Tournament,
  TournamentClient,
} from "@putting-pals/putting-pals-core";
import type { EuropeanTourApiImpl } from "../api/european-tour-api";
import type { EventStatus } from "./domain/types";

export class EuropeanTourApiTournamentEnricherClient
  implements TournamentClient
{
  constructor(
    private readonly europeanTourApi: EuropeanTourApiImpl,
    private readonly espnSportsApiTournamentClient: TournamentClient,
  ) {
    this.europeanTourApi = europeanTourApi;
    this.espnSportsApiTournamentClient = espnSportsApiTournamentClient;
  }

  async getTournament(tourCode: TourCode, id: string): Promise<Tournament> {
    const tournament = await this.espnSportsApiTournamentClient.getTournament(
      tourCode,
      id,
    );

    const miniSchedule = await this.europeanTourApi.getMiniSchedule("eur");
    const matchingEvent = miniSchedule.find((event) => {
      // TODO: include fuzzy string matching for event name and tournament name, as they may not always match exactly
      return (
        this.isSameIsoDay(event.StartDate, tournament.schedule.startDate) &&
        this.isSameIsoDay(event.EndDate, tournament.schedule.endDate)
      );
    });

    if (matchingEvent === undefined) {
      return tournament;
    }

    const eventStatus = await this.europeanTourApi.getEventStatus(
      matchingEvent.EventId,
    );

    return {
      ...tournament,
      schedule: this.enrichTournamentStatus(tournament, eventStatus),
      status: this.enrichRoundStatus(tournament, eventStatus),
    };
  }

  private isSameIsoDay(a: string, b: string) {
    return a.slice(0, 10) === b.slice(0, 10);
  }

  private enrichTournamentStatus(
    tournament: Tournament,
    eventStatus: EventStatus,
  ): Tournament["schedule"] {
    if (eventStatus.Status === 0) {
      return {
        ...tournament.schedule,
        status: "IN_PROGRESS",
      };
    } else {
      return tournament.schedule;
    }
  }

  private enrichRoundStatus(
    tournament: Tournament,
    eventStatus: EventStatus,
  ): Tournament["status"] {
    if (eventStatus.RoundStatus === 2) {
      return {
        ...tournament.status,
        roundStatus: "IN_PROGRESS",
        roundStatusColor: "RED",
        roundStatusDisplay: "In Progress",
      };
    } else {
      return tournament.status;
    }
  }
}

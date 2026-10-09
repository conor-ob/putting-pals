import type {
  TourCode,
  Tournament,
  TournamentClient,
} from "@putting-pals/putting-pals-core";
import type { EuropeanTourApiImpl } from "../api/european-tour-api";
import {
  NAME_SIMILARITY_THRESHOLD,
  nameSimilarity,
} from "../utils/name-similarity";
import type { ApiEventCard, ApiEventStatus } from "./domain/types";

// TODO: majors are not included in espn sports eur schedule
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
    const [tournament, miniSchedule] = await Promise.all([
      this.espnSportsApiTournamentClient.getTournament(tourCode, id),
      this.europeanTourApi.getMiniSchedule("eur"),
    ]);

    const matchingEvent = miniSchedule.Tours.flatMap((t) => t.Events)
      .filter(
        (event) =>
          this.isSameIsoDay(event.StartDate, tournament.schedule.startDate) &&
          this.isSameIsoDay(event.EndDate, tournament.schedule.endDate),
      )
      .map((event) => ({
        event,
        score: nameSimilarity(event.EventName, tournament.name),
      }))
      .filter(({ score }) => score >= NAME_SIMILARITY_THRESHOLD)
      .sort((a, b) => b.score - a.score)[0]?.event;

    if (matchingEvent === undefined) {
      return tournament;
    }

    const [eventStatus, eventCard] = await Promise.all([
      this.europeanTourApi.getEventStatus(tourCode, matchingEvent.EventId),
      this.europeanTourApi.getEventCard(tourCode, matchingEvent.EventId),
    ]);

    return {
      ...tournament,
      images: this.enrichTournamentImages(tournament, eventCard),
      schedule: this.enrichTournamentStatus(tournament, eventStatus),
      status: this.enrichRoundStatus(tournament, eventStatus),
    };
  }

  private isSameIsoDay(a: string, b: string) {
    return a.slice(0, 10) === b.slice(0, 10);
  }

  private enrichTournamentImages(
    tournament: Tournament,
    eventCard: ApiEventCard,
  ): Tournament["images"] {
    return {
      ...tournament.images,
      cover: eventCard.imageUrl.replace(
        "{formatInstructions}",
        "t_et__banner_lg_720x344-2x",
      ),
    };
  }

  private enrichTournamentStatus(
    tournament: Tournament,
    eventStatus: ApiEventStatus,
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
    eventStatus: ApiEventStatus,
  ): Tournament["status"] {
    switch (eventStatus.RoundStatus) {
      case 1:
        if (tournament.status.roundStatus === "COMPLETE") {
          return {
            ...tournament.status,
            roundDisplay: `R${eventStatus.RoundNo}`,
            roundStatus: "OFFICIAL",
            roundStatusColor: "GREEN",
            roundStatusDisplay: "Official",
          };
        } else {
          return {
            ...tournament.status,
            roundDisplay: `R${eventStatus.RoundNo}`,
            roundStatus: "COMPLETE",
            roundStatusColor: "BLUE",
            roundStatusDisplay: "Complete",
          };
        }
      case 2:
        return {
          ...tournament.status,
          roundDisplay: `R${eventStatus.RoundNo}`,
          roundStatus: "IN_PROGRESS",
          roundStatusColor: "RED",
          roundStatusDisplay: "In Progress",
        };
      case 4:
        return {
          ...tournament.status,
          roundDisplay: `R${eventStatus.RoundNo}`,
          roundStatus: "OFFICIAL",
          roundStatusColor: "GREEN",
          roundStatusDisplay: "Official",
        };
      default:
        return tournament.status;
    }
  }
}

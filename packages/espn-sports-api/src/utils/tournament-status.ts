import {
  NotFoundError,
  type Tournament,
  type TournamentStatus,
} from "@putting-pals/putting-pals-core";
import type { TourScheduleEvent } from "../schedule/domain/types";

export function mapTournamentStatus(
  status: TourScheduleEvent["status"],
): TournamentStatus {
  switch (status) {
    case "pre":
      return "NOT_STARTED";
    case "in":
      return "IN_PROGRESS";
    case "post":
      return "COMPLETED";
    default:
      throw new NotFoundError(`Unknown tournament status: ${status}`);
  }
}

export function mapRoundStatus(
  status: TourScheduleEvent["fullStatus"]["type"]["name"],
): Tournament["status"] {
  switch (status) {
    case "STATUS_FINAL":
      return {
        roundDisplay: "Official",
        roundStatus: "OFFICIAL",
        roundStatusColor: "GREEN",
        roundStatusDisplay: "Official",
      };
    case "STATUS_IN_PROGRESS":
      return {
        roundDisplay: "In Progress",
        roundStatus: "IN_PROGRESS",
        roundStatusColor: "RED",
        roundStatusDisplay: "In Progress",
      };
    case "STATUS_SCHEDULED":
      return {
        roundDisplay: "Upcoming",
        roundStatus: "UPCOMING",
        roundStatusColor: "GRAY",
        roundStatusDisplay: "Upcoming",
      };
    default:
      throw new NotFoundError(`Unknown tournament status: ${status}`);
  }
}

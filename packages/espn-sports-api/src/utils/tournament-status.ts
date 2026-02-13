import {
  NotFoundError,
  type Tournament,
  type TournamentStatus,
} from "@putting-pals/putting-pals-core";
import type { ApiLeaderboardCompetition } from "../leaderboard/domain/types";
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
  competition: ApiLeaderboardCompetition,
): Tournament["status"] {
  switch (competition.status.type.name) {
    case "STATUS_SCHEDULED": {
      if (
        competition.competitors !== undefined &&
        competition.competitors.length > 0
      ) {
        return {
          roundDisplay: "R1",
          roundStatus: "GROUPINGS_OFFICIAL",
          roundStatusColor: "BLUE",
          roundStatusDisplay: "Groupings Official",
        };
      } else {
        return {
          roundDisplay: "R1",
          roundStatus: "UPCOMING",
          roundStatusColor: "GRAY",
          roundStatusDisplay: "Upcoming",
        };
      }
    }
    case "STATUS_IN_PROGRESS": {
      const round = competition.status.period;
      return {
        roundDisplay: `R${round}`,
        roundStatus: "IN_PROGRESS",
        roundStatusColor: "RED",
        roundStatusDisplay: "In Progress",
      };
    }
    case "STATUS_PLAY_COMPLETE": {
      const round = competition.status.period;
      return {
        roundDisplay: `R${round}`,
        roundStatus: "COMPLETE",
        roundStatusColor: "BLUE",
        roundStatusDisplay: "Complete",
      };
    }
    case "STATUS_FINAL": {
      const round = competition.status.period;
      return {
        roundDisplay: `R${round}`,
        roundStatus: "OFFICIAL",
        roundStatusColor: "GREEN",
        roundStatusDisplay: "Official",
      };
    }
    case "STATUS_SUSPENDED": {
      const round = competition.status.period;
      return {
        roundDisplay: `R${round}`,
        roundStatus: "SUSPENDED",
        roundStatusColor: "YELLOW",
        roundStatusDisplay: "Suspended",
      };
    }
    default:
      return {
        roundDisplay: "TBD",
        roundStatus: "UPCOMING",
        roundStatusColor: "GRAY",
        roundStatusDisplay: "TBD",
      };
  }
}

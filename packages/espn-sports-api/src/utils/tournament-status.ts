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
  numberOfRounds: number,
): Tournament["status"] {
  const currentRound = getCurrentRound(
    numberOfRounds,
    competition.status.period,
  );
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
      return {
        roundDisplay: `R${currentRound}`,
        roundStatus: "IN_PROGRESS",
        roundStatusColor: "RED",
        roundStatusDisplay: "In Progress",
      };
    }
    case "STATUS_PLAY_COMPLETE": {
      return {
        roundDisplay: `R${currentRound}`,
        roundStatus: "COMPLETE",
        roundStatusColor: "BLUE",
        roundStatusDisplay: "Complete",
      };
    }
    case "STATUS_FINAL": {
      return {
        roundDisplay: `R${currentRound}`,
        roundStatus: "OFFICIAL",
        roundStatusColor: "GREEN",
        roundStatusDisplay: "Official",
      };
    }
    case "STATUS_SUSPENDED": {
      return {
        roundDisplay: `R${currentRound}`,
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

export function getCurrentRound(
  numberOfRounds: number,
  period: number,
): number {
  if (period > numberOfRounds) {
    // in a playoff - example: https://site.api.espn.com/apis/site/v2/sports/golf/leaderboard?league=liv&event=401805587
    return numberOfRounds;
  }

  return period;
}

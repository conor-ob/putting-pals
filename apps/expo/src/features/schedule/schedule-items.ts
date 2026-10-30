import type { Schedule, Tournament } from "~/providers/trpc/types";

export type ScheduleItem =
  | { type: "section"; title: string }
  | { type: "tournament"; tournament: Tournament };

/**
 * The in-progress Tournament, or else the next upcoming one. Relies on the
 * Schedule listing Tournaments in calendar order, since not every Tour
 * provides start dates.
 */
export function getFeaturedTournament(
  schedule: Schedule,
): Tournament | undefined {
  return (
    schedule.upcoming.find((t) => t.schedule.status === "IN_PROGRESS") ??
    schedule.upcoming.find((t) => t.schedule.status === "NOT_STARTED")
  );
}

export function getScheduleItems(
  schedule: Schedule,
  featured: Tournament | undefined,
): ScheduleItem[] {
  const rest = schedule.upcoming.filter((t) => t.id !== featured?.id);
  const inProgress = rest.filter((t) => t.schedule.status === "IN_PROGRESS");
  const upcoming = rest.filter((t) => t.schedule.status !== "IN_PROGRESS");
  const completed = [...schedule.completed].reverse();

  return [
    ...section("In progress", inProgress),
    ...section("Upcoming", upcoming),
    ...section("Completed", completed),
  ];
}

/** Upcoming Tournaments have no Leaderboard yet. */
export function hasLeaderboard(tournament: Tournament): boolean {
  return tournament.schedule.status !== "NOT_STARTED";
}

function section(title: string, tournaments: Tournament[]): ScheduleItem[] {
  if (tournaments.length === 0) {
    return [];
  }
  return [
    { type: "section", title },
    ...tournaments.map((tournament) => ({
      type: "tournament" as const,
      tournament,
    })),
  ];
}

import type { Tournament } from "@putting-pals/pga-tour-schema/types";

type RecursivePartial<T> = {
  [K in keyof T]?: T[K] extends object ? RecursivePartial<T[K]> : T[K];
};

export function transformTournament(tournament: Tournament) {
  return {
    displayDate: tournament.displayDate,
    id: tournament.id,
    roundDisplay: tournament.roundDisplay,
    roundStatus: tournament.roundStatus,
    roundStatusColor: tournament.roundStatusColor,
    roundStatusDisplay: tournament.roundStatusDisplay,
    tournamentLogo: tournament.tournamentLogo,
    tournamentName: sanitizeTournamentName(tournament.tournamentName),
    tournamentStatus: tournament.tournamentStatus,
  } satisfies RecursivePartial<Tournament>;
}

function sanitizeTournamentName(tournamentName: string) {
  return tournamentName
    .replace(/\s*\(\d{4}\)\s*/g, " ")
    .trim()
    .replace(/\s+/g, " ");
}

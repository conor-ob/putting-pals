import { formatISO, parse } from "date-fns";
import type { ApiTournament } from "../generated/graphql";
import { stripParenthesizedYear } from "../utils/string-utils";

export function transformTournament(tournament: ApiTournament): ApiTournament {
  return {
    ...tournament,
    tournamentName: stripParenthesizedYear(tournament.tournamentName),
  };
}

export function parseStartDate(tournament: ApiTournament): string {
  const startDate = tournament.displayDate.replace(/\s+-\s+\d+/, "");
  const parsedStartDate = parse(startDate, "MMM d, yyyy", new Date());
  return formatISO(parsedStartDate);
}

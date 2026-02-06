import { formatISO, parse } from "date-fns";
import { stripParenthesizedYear } from "../utils/string-utils";
import type { Tournament } from "./domain/types";

export function transformTournament(tournament: Tournament): Tournament {
  return {
    ...tournament,
    tournamentName: stripParenthesizedYear(tournament.tournamentName),
  };
}

export function parseStartDate(tournament: Tournament): string {
  const startDate = tournament.displayDate.replace(/\s+-\s+\d+/, "");
  const parsedStartDate = parse(startDate, "MMM d, yyyy", new Date());
  return formatISO(parsedStartDate);
}

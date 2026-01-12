import type { Tournament } from "@putting-pals/putting-pals-api";
import { formatISO, parse } from "date-fns";
import { stripParenthesizedYear } from "../utils/string-utils";

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

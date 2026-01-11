import type { DomainTournament } from "@putting-pals/putting-pals-schema";
import { formatISO, parse } from "date-fns";
import { stripParenthesizedYear } from "../utils/string-utils";

export function transformTournament(
  tournament: DomainTournament,
): DomainTournament {
  return {
    ...tournament,
    tournamentName: stripParenthesizedYear(tournament.tournamentName),
  };
}

export function parseStartDate(tournament: DomainTournament) {
  const startDate = tournament.displayDate.replace(/\s+-\s+\d+/, "");
  const parsedStartDate = parse(startDate, "MMM d, yyyy", new Date());
  return formatISO(parsedStartDate);
}

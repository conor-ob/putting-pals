import type { ApiTournament } from "@putting-pals/pga-tour-schema/types";
import { formatISO, parse } from "date-fns";
import { stripParenthesizedYear } from "../utils/string-utils";

export function transformTournament(tournament: ApiTournament) {
  return {
    ...tournament,
    tournamentName: stripParenthesizedYear(tournament.tournamentName),
  };
}

export function parseStartDate(tournament: ApiTournament) {
  const startDate = tournament.displayDate.replace(/\s+-\s+\d+/, "");
  const parsedStartDate = parse(startDate, "MMM d, yyyy", new Date());
  return formatISO(parsedStartDate);
}

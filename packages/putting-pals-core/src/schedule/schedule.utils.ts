import { parse } from "date-fns";

export function parseStartDate(displayDate: string) {
  const startDate = displayDate.replace(/ - .+?,/, ",");
  return parse(startDate, "MMM d, yyyy", new Date());
}

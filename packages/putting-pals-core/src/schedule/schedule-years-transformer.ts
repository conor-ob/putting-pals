import type { ApiScheduleYears } from "@putting-pals/pga-tour-schema";

export function transformScheduleYears(scheduleYears: ApiScheduleYears) {
  return scheduleYears.years.map((year) => {
    return {
      current: year.default,
      displayValue: year.displayValue,
      queryValue: year.queryValue,
    };
  });
}

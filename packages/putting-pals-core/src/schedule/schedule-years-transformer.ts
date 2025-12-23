import type {
  ScheduleYear,
  ScheduleYears,
} from "@putting-pals/pga-tour-schema/types";
import type { RecursivePartial } from "@putting-pals/putting-pals-utils/type-utils";

export function transformScheduleYears(scheduleYears: ScheduleYears) {
  return scheduleYears.years.map((year) => {
    return {
      current: year.default,
      displayValue: year.displayValue,
      queryValue: year.queryValue,
    } satisfies RecursivePartial<ScheduleYear> & { current: boolean };
  });
}

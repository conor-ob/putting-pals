import type { ScheduleClient } from "@putting-pals/putting-pals-core";
import { EuropeanTourApiImpl } from "../api/european-tour-api";
import { EuropeanTourApiScheduleClient } from "../schedule/schedule-client";

export function injectDependencies(): {
  scheduleClient: ScheduleClient;
} {
  return {
    scheduleClient: new EuropeanTourApiScheduleClient(
      new EuropeanTourApiImpl("https://www.europeantour.com"),
    ),
  };
}

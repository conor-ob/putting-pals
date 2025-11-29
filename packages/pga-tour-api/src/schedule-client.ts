import type {
  Schedule,
  ScheduleYears,
} from "@putting-pals/pga-tour-schema/types";
import { GraphQlClient } from "./graphql-client";

const scheduleTournamentFragment = `
  beautyImageAsset {
    fallbackImage
    imageOrg
    imagePath
  }
  date
  id
  sortDate
  status {
    roundDisplay
    roundStatus
    roundStatusColor
    roundStatusDisplay
  }
  tournamentLogoAsset {
    fallbackImage
    imageOrg
    imagePath
  }
  tournamentName
  tournamentStatus
`;

const scheduleMonthFragment = `
  year
  month
  monthSort
  tournaments {
    ${scheduleTournamentFragment}
  }
`;

const scheduleFragment = `
  seasonYear
  completed {
    ${scheduleMonthFragment}
  }
  upcoming {
    ${scheduleMonthFragment}
  }
`;

export class ScheduleClient extends GraphQlClient {
  async getScheduleYears() {
    return this.query<{
      data: {
        scheduleYears: ScheduleYears;
      };
    }>({
      operationName: "ScheduleYears",
      query: `
        query ScheduleYears($tourCode: TourCode!) {
          scheduleYears(tourCode: $tourCode) {
            years {
              default
              displayValue
              queryValue
            }
          }
        }
      `,
      variables: { tourCode: "R" },
    }).then((response) => response.data.scheduleYears);
  }

  async getSchedule(year?: string) {
    return this.query<{
      data: {
        schedule: Schedule;
      };
    }>({
      operationName: "Schedule",
      query: `
        query Schedule($tourCode: String!, $year: String) {
          schedule(tourCode: $tourCode, year: $year) {
            ${scheduleFragment}
          }
        }
      `,
      variables: { tourCode: "R", year },
    }).then((response) => response.data.schedule);
  }

  async getCompleteSchedule() {
    return this.query<{
      data: {
        completeSchedule: Schedule[];
      };
    }>({
      operationName: "CompleteSchedule",
      query: `
        query CompleteSchedule($tourCode: TourCode!) {
          completeSchedule(tourCode: $tourCode) {
            ${scheduleFragment}
          }
        }
      `,
      variables: { tourCode: "R" },
    }).then((response) => response.data.completeSchedule);
  }
}

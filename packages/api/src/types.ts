import type { WeatherCondition as GraphQlWeatherCondition } from "./pga-tour/types/graphql";

export enum WeatherCondition {
  DAY_CLOUDY = "Cloudy",
}

function mapPgaToDomain(
  weatherCondition: GraphQlWeatherCondition,
): WeatherCondition | undefined {
  switch (weatherCondition) {
    case "DAY_CLOUDY":
      return WeatherCondition.DAY_CLOUDY;
    default:
      return undefined;
  }
}

void mapPgaToDomain;

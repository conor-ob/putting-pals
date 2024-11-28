import { WeatherCondition as GraphQlWeatherCondition } from "./graphql/types";

export enum WeatherCondition {
  DAY_CLOUDY = "Cloudy",
}

function mapPgaToDomain(
  weatherCondition: GraphQlWeatherCondition,
): WeatherCondition | undefined {
  switch (weatherCondition) {
    case GraphQlWeatherCondition.DayCloudy:
      return WeatherCondition.DAY_CLOUDY;
    default:
      return undefined;
  }
}

void mapPgaToDomain;

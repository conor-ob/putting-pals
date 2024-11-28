/**
 * Meteocons by basmilius
 * - https://bas.dev/work/meteocons
 * - https://github.com/basmilius/weather-icons
 *
 * @param weatherCondition
 * @returns the url of the svg icon for the given weather condition
 */
export function getWeatherIconSvgUrl(
  weatherCondition:
    | "DAY_CLOUDY"
    | "DAY_FOG_MIST"
    | "DAY_MOSTLY_CLOUDY"
    | "DAY_MOSTLY_SUNNY"
    | "DAY_PARTLY_CLOUDY"
    | "DAY_RAINY"
    | "DAY_SCATTERED_SHOWERS"
    | "DAY_SNOW"
    | "DAY_SUNNY"
    | "DAY_THUNDERSTORMS"
    | "NIGHT_CLEAR"
    | "NIGHT_ISOLATED_CLOUDS"
    | "NIGHT_MOSTLY_CLOUDY"
    | "NIGHT_PARTLY_CLOUDY",
) {
  const mappedWeatherCondition = mapWeatherCondition(weatherCondition);
  if (mappedWeatherCondition === undefined) {
    return undefined;
  } else {
    return `https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/${mappedWeatherCondition}.svg`;
  }
}

function mapWeatherCondition(
  weatherCondition:
    | "DAY_CLOUDY"
    | "DAY_FOG_MIST"
    | "DAY_MOSTLY_CLOUDY"
    | "DAY_MOSTLY_SUNNY"
    | "DAY_PARTLY_CLOUDY"
    | "DAY_RAINY"
    | "DAY_SCATTERED_SHOWERS"
    | "DAY_SNOW"
    | "DAY_SUNNY"
    | "DAY_THUNDERSTORMS"
    | "NIGHT_CLEAR"
    | "NIGHT_ISOLATED_CLOUDS"
    | "NIGHT_MOSTLY_CLOUDY"
    | "NIGHT_PARTLY_CLOUDY",
) {
  switch (weatherCondition) {
    case "DAY_CLOUDY":
      return "cloudy";
    case "DAY_FOG_MIST":
      return "fog";
    case "DAY_MOSTLY_CLOUDY":
      return "overcast";
    case "DAY_MOSTLY_SUNNY":
      return "clear-day";
    case "DAY_PARTLY_CLOUDY":
      return "partly-cloudy-day";
    case "DAY_RAINY":
      return "rain";
    case "DAY_SCATTERED_SHOWERS":
      return "partly-cloudy-day-rain";
    case "DAY_SNOW":
      return "snow";
    case "DAY_SUNNY":
      return "clear-day";
    case "DAY_THUNDERSTORMS":
      return "thunderstorms-extreme-rain";
    case "NIGHT_CLEAR":
      return "clear-night";
    case "NIGHT_ISOLATED_CLOUDS":
      return "partly-cloudy-night";
    case "NIGHT_MOSTLY_CLOUDY":
      return "overcast-night";
    case "NIGHT_PARTLY_CLOUDY":
      return "partly-cloudy-night";
    default:
      return undefined;
  }
}

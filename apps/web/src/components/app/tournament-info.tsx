import type { Tournament, WeatherCondition } from "@providers/trpc/types";
import type React from "react";
import { useEffect, useState } from "react";

export function TournamentInfo({ tournament }: { tournament: Tournament }) {
  const displayStrings = [
    tournament.schedule.displayDate,
    tournament.location.displayLocation,
    ...tournament.courses.map((c) => c.name),
    getWeatherDisplay(
      tournament.weather?.condition,
      tournament.weather?.temperature,
    ),
  ];

  return <Carousel displayStrings={displayStrings} />;
}

const displayDuration = 7;
const animationDuration = 1;

function Carousel({ displayStrings }: { displayStrings: React.ReactNode[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % displayStrings.length);
        setFade(true);
      }, animationDuration * 1000); // Duration of the fade-out animation
    }, displayDuration * 1000); // Total duration of the animation cycle

    return () => clearInterval(interval);
  }, [displayStrings.length]);

  return (
    <div className="line-clamp-1 text-base font-medium leading-tight tracking-tight text-muted-foreground">
      <style>
        {`
          @keyframes fadeIn {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }
          @keyframes fadeOut {
            0% { opacity: 1; }
            100% { opacity: 0; }
          }
          .fade-in {
            animation: fadeIn ${animationDuration}s forwards;
          }
          .fade-out {
            animation: fadeOut ${animationDuration}s forwards;
          }
        `}
      </style>
      <div className={fade ? "fade-in" : "fade-out"}>
        {displayStrings[currentIndex]}
      </div>
    </div>
  );
}

function getWeatherDisplay(
  condition?: WeatherCondition,
  tempC?: string,
): React.ReactNode {
  if (condition === undefined || tempC === undefined) {
    return undefined;
  }

  const svgUrl = getWeatherIconSvgUrl(condition);
  if (svgUrl === undefined) {
    return tempC;
  } else {
    return (
      <div className="flex flex-row items-center gap-0.5">
        <img className="h-5 w-7" src={svgUrl} alt="weather" />
        {`${tempC} • ${getDisplayCondition(condition)}`}
      </div>
    );
  }
}

function getDisplayCondition(condition: WeatherCondition): string | undefined {
  switch (condition) {
    case "DAY_CLOUDY":
      return "Cloudy";
    case "DAY_FOG_MIST":
      return "Fog";
    case "DAY_MOSTLY_CLOUDY":
      return "Mostly cloudy";
    case "DAY_MOSTLY_SUNNY":
      return "Mostly sunny";
    case "DAY_PARTLY_CLOUDY":
      return "Partly cloudy";
    case "DAY_RAINY":
      return "Rain";
    case "DAY_SCATTERED_SHOWERS":
      return "Scattered showers";
    case "DAY_SNOW":
      return "Snow";
    case "DAY_SUNNY":
      return "Sunny";
    case "DAY_THUNDERSTORMS":
      return "Thunderstorms";
    case "NIGHT_CLEAR":
      return "Clear";
    case "NIGHT_ISOLATED_CLOUDS":
      return "Isolated clouds";
    case "NIGHT_MOSTLY_CLOUDY":
      return "Mostly cloudy";
    case "NIGHT_PARTLY_CLOUDY":
      return "Partly cloudy";
    default:
      return undefined;
  }
}

/**
 * Meteocons by basmilius
 * - https://bas.dev/work/meteocons
 * - https://github.com/basmilius/weather-icons
 *
 * @param weatherCondition
 * @returns the url of the svg icon for the given weather condition
 */
function getWeatherIconSvgUrl(weatherCondition: WeatherCondition) {
  const mappedWeatherCondition = mapWeatherCondition(weatherCondition);
  if (mappedWeatherCondition === undefined) {
    return undefined;
  } else {
    return `https://cdn.meteocons.com/3.0.0-next.6/svg/fill/${mappedWeatherCondition}.svg`;
  }
}

function mapWeatherCondition(weatherCondition: WeatherCondition) {
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

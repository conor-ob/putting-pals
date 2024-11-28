import React, { useEffect, useState } from "react";

import { getLocation } from "@pkg/utils/location";
import { getWeatherIconSvgUrl } from "@pkg/utils/weather";

export function TournamentInfo({
  courses,
  city,
  country,
  state,
  displayDate,
  weather,
}: {
  courses: { courseName: string }[];
  city: string;
  country: string;
  state: string;
  displayDate: string;
  weather?: {
    condition:
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
      | "NIGHT_PARTLY_CLOUDY";
    tempC: string;
  };
}) {
  const displayStrings = [
    displayDate,
    getLocation({ city, state, country }),
    ...courses.map((c) => c.courseName),
    getWeatherDisplay(weather?.condition, weather?.tempC),
  ].filter((s) => s !== undefined);

  void courses;
  void weather;
  void displayDate;

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
    <div className="line-clamp-1 text-base font-medium leading-tight tracking-tight text-[#767676]">
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
  condition?:
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

function getDisplayCondition(
  condition:
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
): string | undefined {
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

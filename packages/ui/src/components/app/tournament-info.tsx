import React, { useEffect, useState } from "react";

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
  const location =
    state === "" ? `${city} • ${country}` : `${city}, ${state} • ${country}`;

  const displayStrings = [
    location,
    displayDate,
    ...courses.map((c) => c.courseName),
    getWeatherDisplay(
      // textClassName,
      "",
      weather?.condition,
      weather?.tempC,
    ),
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

// export function TournamentInfo({
//   courses,
//   city,
//   country,
//   state,
//   displayDate,
//   weather,
// }: {
//   courses: { courseName: string }[];
//   city: string;
//   country: string;
//   state: string;
//   displayDate: string;
//   weather?: {
//     condition:
//       | "DAY_CLOUDY"
//       | "DAY_FOG_MIST"
//       | "DAY_MOSTLY_CLOUDY"
//       | "DAY_MOSTLY_SUNNY"
//       | "DAY_PARTLY_CLOUDY"
//       | "DAY_RAINY"
//       | "DAY_SCATTERED_SHOWERS"
//       | "DAY_SNOW"
//       | "DAY_SUNNY"
//       | "DAY_THUNDERSTORMS"
//       | "NIGHT_CLEAR"
//       | "NIGHT_ISOLATED_CLOUDS"
//       | "NIGHT_MOSTLY_CLOUDY"
//       | "NIGHT_PARTLY_CLOUDY";
//     tempC: string;
//   };
// }) {
//   const [displayedPhase, setDisplayedPhase] = useState(0);

//   const location =
//     state === "" ? `${city} • ${country}` : `${city}, ${state} • ${country}`;

//   const textPhases = [
//     <div
//       key={displayDate}
//       // ellipsizeMode='tail'
//       // numberOfLines={1}
//       // className={textClassName}
//     >
//       {displayDate}
//     </div>,
//     <div
//       key={location}
//       // ellipsizeMode='tail'
//       // numberOfLines={1}
//       // className={textClassName}
//     >
//       {location}
//     </div>,
//     <div
//       key={courses[0]?.courseName}
//       // ellipsizeMode='tail'
//       // numberOfLines={1}
//       // className={textClassName}
//     >
//       {courses[0]?.courseName}
//     </div>,
//     getWeatherDisplay(
//       // textClassName,
//       "",
//       weather?.condition,
//       weather?.tempC,
//     ),
//   ].filter((t) => t !== undefined);

//   const phaseLengthMs = 6000;

//   useEffect(() => {
//     const timerId = setInterval(() => {
//       setDisplayedPhase((phase) => {
//         if (phase === textPhases.length - 1) {
//           phase = 0;
//         } else {
//           phase = phase + 1;
//         }
//         return phase;
//       });
//     }, phaseLengthMs);

//     return () => clearInterval(timerId);
//   }, [textPhases.length]);

//   return (
//     <div className="relative flex">
//       <div
//         // ellipsizeMode='tail'
//         // numberOfLines={1}
//         className="font-inter-medium invisible text-sm text-secondary"
//       >
//         Placeholder
//       </div>
//       {textPhases.map((t, i) => (
//         <div
//           className="absolute flex w-full"
//           key={i}
//           style={{
//             opacity: displayedPhase === i ? 1 : 0,
//             transitionDuration: `${displayedPhase === i ? "2" : "0.5"}s`,
//           }}
//         >
//           {t}
//         </div>
//       ))}
//     </div>
//   );
// }

function getWeatherDisplay(
  textClassName: string,
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

  const mappedCondition = getMappedCondition(condition);
  if (mappedCondition === undefined) {
    return <div className={textClassName}>{tempC}</div>;
  } else {
    return (
      <div className="flex flex-row items-center">
        <img
          className="h-5 w-7"
          src={`https://cdn.jsdelivr.net/gh/basmilius/weather-icons@latest/production/fill/all/${mappedCondition}.svg`}
          // uri: `https://raw.githubusercontent.com/basmilius/weather-icons/dev/production/fill/svg-static/${mappedCondition}.svg`
          alt="flag"
        />
        <div className="w-0.5" />
        <div
          className={textClassName}
        >{`${tempC} • ${getDisplayCondition(condition)}`}</div>
      </div>
    );
  }
}

function getMappedCondition(
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

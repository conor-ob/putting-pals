import type { Tournament } from "@providers/trpc/types";
import type React from "react";
import { useEffect, useState } from "react";

export function TournamentInfo({ tournament }: { tournament: Tournament }) {
  const displayStrings = [
    tournament.schedule.displayDate,
    tournament.location.displayLocation,
    ...tournament.courses.map((c) => c.name),
    // TODO legacy-web: add support for weather
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

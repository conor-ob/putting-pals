import { ListItem } from "@components/list-item";

import { cn } from "@lib/utils";

export function LeadboardPlayerRow({
  position,
  countryFlag,
  displayName,
  total,
  totalSort,
  score,
  teeTime,
  variant = "primary",
}: {
  position: string;
  countryFlag: string;
  displayName: string;
  total: string;
  totalSort: number;
  score: string;
  teeTime?: number | null;
  variant?: "primary" | "secondary";
}) {
  return (
    <ListItem>
      <div className="flex w-full flex-row justify-between px-4 py-3">
        <div className="flex flex-row items-center">
          <div
            className={cn(
              "w-10 text-sm font-semibold tracking-tighter",
              variant === "secondary" && "text-muted-foreground",
            )}
          >
            {position}
          </div>
          <div className="me-2 w-8 px-0.5">
            <img
              className="rounded-sm"
              alt={countryFlag}
              src={`https://cdn.jsdelivr.net/gh/madebybowtie/FlagKit@2.4.0/Assets/PNG/${countryFlag}%403x.png`}
            />
          </div>
          <div className="line-clamp-1 text-sm font-semibold tracking-tighter">
            {displayName}
          </div>
        </div>
        <div className="flex flex-row">
          <div
            className={cn(
              "flex w-12 justify-center text-sm font-semibold tracking-tighter",
              totalSort < 0 && "text-red",
              totalSort === 0 && total !== "-" && "text-green",
            )}
          >
            {total}
          </div>
          <div className="flex w-10 justify-center text-sm font-semibold tracking-tighter">
            {getThru(teeTime)}
          </div>
          <div className="flex w-8 justify-end text-sm font-semibold tracking-tighter">
            {getScore(score)}
          </div>
        </div>
      </div>
    </ListItem>
  );
}

function getThru(teeTime?: number | null) {
  if (teeTime !== undefined && teeTime !== null && teeTime !== -1) {
    return new Date(teeTime).toLocaleTimeString(undefined, {
      hour: "2-digit",
      minute: "2-digit",
    });
  }
  return "-";
}

function getScore(score: string) {
  if (score === "") {
    return "-";
  }
  return score;
}

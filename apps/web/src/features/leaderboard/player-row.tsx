import { ListItem } from "@components/list-item";
import { cn } from "@lib/utils";
import type { PlayerRow as PlayerRowType } from "@providers/trpc/types";

export function PlayerRow({
  row,
  variant,
}: {
  row: PlayerRowType;
  variant: "primary" | "secondary";
}) {
  const { player, scoringData } = row;

  return (
    <ListItem>
      <div className="flex w-full flex-col">
        <div className="flex w-full flex-row justify-between px-4 py-3">
          <div className="flex flex-row items-center">
            <div
              className={cn(
                "w-10 text-sm font-semibold tracking-tighter",
                variant === "secondary" && "text-muted-foreground",
              )}
            >
              {scoringData.position}
            </div>
            <div className="me-2 w-8 px-0.5">
              <img
                className="rounded-sm"
                alt={player.countryFlag}
                src={`https://cdn.jsdelivr.net/gh/madebybowtie/FlagKit@2.4.0/Assets/PNG/${player.countryFlag}%403x.png`}
              />
            </div>
            <div className="line-clamp-1 text-sm font-semibold tracking-tighter">
              {player.shortName}
              <span className="text-muted-foreground">{` ${player.abbreviations}`}</span>
            </div>
          </div>
          <div className="flex flex-row">
            <div
              className={cn(
                "flex w-12 justify-center text-sm font-semibold tracking-tighter",
                scoringData.totalSort < 0 && "text-red",
                scoringData.totalSort === 0 &&
                  scoringData.total !== "-" &&
                  "text-green",
              )}
            >
              {scoringData.total}
            </div>
            <div className="flex w-10 justify-center text-sm font-semibold tracking-tighter">
              {getThru(scoringData.thru, scoringData.teeTime)}
            </div>
            <div className="flex w-8 justify-end text-sm font-semibold tracking-tighter">
              {getScore(scoringData.score)}
            </div>
          </div>
        </div>
        {variant === "primary" && <div className="mx-4 border-b"></div>}
      </div>
    </ListItem>
  );
}

function getThru(thru: string, teeTime?: number | null) {
  if (thru !== "") {
    return thru;
  }
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

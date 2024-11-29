import { ListItem } from "@components/list-item";

import { cn } from "@pkg/ui/cn";

export function PgaTourLeaderboardTablePlayerRow({
  position,
  countryFlag,
  shortName,
  abbreviations,
  total,
  totalSort,
  thru,
  score,
  teeTime,
}: {
  position: string;
  countryFlag: string;
  shortName: string;
  abbreviations: string;
  total: string;
  totalSort: number;
  thru: string;
  score: string;
  teeTime: number;
}) {
  return (
    <ListItem>
      <div className="flex w-full flex-row justify-between px-4 py-3">
        <div className="flex flex-row items-center">
          <div className="w-10 text-sm font-semibold tracking-tighter">
            {position}
          </div>
          <div className="me-2 w-8 px-0.5">
            <img
              className="rounded-sm"
              src={`https://cdn.jsdelivr.net/gh/madebybowtie/FlagKit@2.4.0/Assets/PNG/${countryFlag}%403x.png`}
            />
          </div>
          <div className="line-clamp-1 text-sm font-semibold tracking-tighter">
            {shortName}
            <span className="text-[#767676]">{` ${abbreviations}`}</span>
          </div>
        </div>
        <div className="flex flex-row">
          <div
            className={cn(
              "flex w-12 justify-center text-sm font-semibold tracking-tighter",
              totalSort < 0 && "text-red",
              totalSort === 0 && "text-green",
            )}
          >
            {total}
          </div>
          <div className="flex w-10 justify-center text-sm font-semibold tracking-tighter">
            {getThru(thru, teeTime)}
          </div>
          <div className="flex w-8 justify-end text-sm font-semibold tracking-tighter">
            {getScore(score)}
          </div>
        </div>
      </div>
    </ListItem>
  );
}

function getThru(thru: string, teeTime: number) {
  if (thru !== "") {
    return thru;
  }
  if (teeTime !== -1) {
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

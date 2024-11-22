import { ListItem } from "@components/list-item";
import { api } from "@providers/trpc-provider";

import { cn } from "@pkg/ui/cn";

export function PgaTourLeaderboardTable({
  id,
  searchQuery,
}: {
  id?: string;
  searchQuery?: string;
}) {
  const { data } = api.leaderboard.getById.useQuery({ id });

  if (data === undefined) {
    return <div></div>;
  } else {
    return (
      <>
        {data.players
          .filter((row) => {
            if (searchQuery === undefined) {
              return true;
            } else if (row.__typename === "InformationRow") {
              return false;
            } else {
              return `${row.player.firstName} ${row.player.lastName}`
                .toLowerCase()
                .includes(searchQuery);
            }
          })
          .map((row) => {
            if (row.__typename === "InformationRow") {
              return (
                <div
                  key={row.id}
                  className="flex items-center justify-center p-4"
                >
                  <div className="text-sm font-semibold tracking-tight">
                    {row.displayText}
                  </div>
                </div>
              );
            } else {
              return (
                <div key={row.id}>
                  <PgaTourPlayerRow
                    position={row.scoringData.position}
                    countryFlag={row.player.countryFlag}
                    shortName={row.player.shortName}
                    abbreviations={row.player.abbreviations}
                    total={row.scoringData.total}
                    totalSort={row.scoringData.totalSort}
                    score={row.scoringData.score}
                    thru={row.scoringData.thru}
                  />
                  <div className="mx-4 border-b"></div>
                </div>
              );
            }
          })}
      </>
    );
  }
}

function PgaTourPlayerRow({
  position,
  countryFlag,
  shortName,
  abbreviations,
  total,
  totalSort,
  thru,
  score,
}: {
  position: string;
  countryFlag: string;
  shortName: string;
  abbreviations: string;
  total: string;
  totalSort: number;
  thru: string;
  score: string;
}) {
  return (
    <ListItem>
      <div className="flex w-full flex-row justify-between px-4 py-3">
        <div className="flex flex-row items-center">
          <div className="w-10 text-sm font-bold tracking-tighter">
            {position}
          </div>
          <div className="me-2 w-8 px-0.5">
            <img
              className="rounded-sm"
              src={`https://cdn.jsdelivr.net/gh/madebybowtie/FlagKit@2.4.0/Assets/PNG/${countryFlag}%403x.png`}
            />
          </div>
          <div className="line-clamp-1 text-sm font-bold tracking-tighter">
            {shortName}
            <span className="text-[#767676]">{` ${abbreviations}`}</span>
          </div>
        </div>
        <div className="flex flex-row">
          <div
            className={cn(
              "flex w-12 justify-center text-sm font-bold tracking-tighter",
              totalSort < 0 && "text-red",
              totalSort === 0 && "text-green",
            )}
          >
            {total}
          </div>
          <div className="flex w-10 justify-center text-sm font-bold tracking-tighter">
            {thru}
          </div>
          <div className="flex w-8 justify-end text-sm font-bold tracking-tighter">
            {score}
          </div>
        </div>
      </div>
    </ListItem>
  );
}

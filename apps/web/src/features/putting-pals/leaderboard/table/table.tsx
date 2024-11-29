import { ListItem } from "@components/list-item";
import { PgaTourLeaderboardTablePlayerRow } from "@features/pga-tour/leaderboard/table/player-row";
import { api } from "@providers/trpc-provider";

import { cn } from "@pkg/ui/cn";

export function PuttingPalsLeaderboardTable({ id }: { id?: string }) {
  const { data } = api.pool.getById.useQuery({ id });

  return (
    <div>
      {data?.entrants.map((entrant) => {
        return (
          <div key={entrant.id}>
            <ListItem>
              <div className="flex w-full flex-row justify-between px-4 py-3">
                <div className="flex flex-row items-center">
                  <div className="w-10 text-sm font-semibold tracking-tighter">
                    {entrant.position}
                  </div>
                  <div className="me-2 w-8 px-0.5"></div>
                  <div className="line-clamp-1 text-sm font-semibold tracking-tighter">
                    {entrant.shortName}
                  </div>
                </div>
                <div className="flex flex-row">
                  <div
                    className={cn(
                      "flex w-12 justify-center text-sm font-semibold tracking-tighter",
                      entrant.totalSort < 0 && "text-red",
                      entrant.totalSort === 0 && "text-green",
                    )}
                  >
                    {entrant.total}
                  </div>
                  <div className="flex w-10 justify-center text-sm font-semibold tracking-tighter"></div>
                  <div className="flex w-8 justify-end text-sm font-semibold tracking-tighter"></div>
                </div>
              </div>
            </ListItem>
            {entrant.picks.map((player) => {
              return (
                <div key={player.id}>
                  <PgaTourLeaderboardTablePlayerRow
                    position={player.scoringData.position}
                    countryFlag={player.player.countryFlag}
                    shortName={player.player.shortName}
                    abbreviations={player.player.abbreviations}
                    total={player.scoringData.total}
                    totalSort={player.scoringData.totalSort}
                    thru={player.scoringData.thru}
                    score={player.scoringData.score}
                    teeTime={player.scoringData.teeTime}
                  />
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

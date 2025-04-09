import { ListItem } from "@components/list-item";
import { LeadboardPlayerRow } from "@features/leaderboard/table/player-row";
import { api } from "@providers/trpc-provider";

import { cn } from "@pkg/ui/cn";
import { Skeleton } from "@pkg/ui/ui";

export function CompetitionTable({ id }: { id?: string }) {
  const { data } = api.competition.getById.useQuery({ id });

  if (data === undefined) {
    return (
      <div className="flex flex-col px-4">
        <div className="border-b py-4">
          <Skeleton className="h-3 w-full" />
        </div>
        <div className="border-b py-4">
          <Skeleton className="h-3 w-full" />
        </div>
        <div className="border-b py-4">
          <Skeleton className="h-3 w-full" />
        </div>
        <div className="border-b py-4">
          <Skeleton className="h-3 w-full" />
        </div>
        <div className="border-b py-4">
          <Skeleton className="h-3 w-full" />
        </div>
      </div>
    );
  }
  return (
    <div>
      {data.competitors.map((competitor) => {
        return (
          <div key={competitor.id}>
            <ListItem>
              <div className="flex w-full flex-col">
                <div className="flex w-full flex-row justify-between px-4 py-3">
                  <div className="flex flex-row items-center">
                    <div className="w-10 text-sm font-semibold tracking-tighter">
                      {competitor.position}
                    </div>
                    <div className="me-2 w-8 px-0.5"></div>
                    <div className="line-clamp-1 text-sm font-semibold tracking-tighter">
                      {competitor.shortName}
                    </div>
                  </div>
                  <div className="flex flex-row">
                    <div
                      className={cn(
                        "flex w-12 justify-center text-sm font-semibold tracking-tighter",
                        competitor.totalSort < 0 && "text-red",
                        competitor.totalSort === 0 && "text-green",
                      )}
                    >
                      {competitor.total}
                    </div>
                    <div className="flex w-10 justify-center text-sm font-semibold tracking-tighter"></div>
                    <div className="flex w-8 justify-end text-sm font-semibold tracking-tighter"></div>
                  </div>
                </div>
                <div className="mx-4 h-0.5 bg-foreground"></div>
              </div>
            </ListItem>
            {competitor.picks.map((player) => {
              return (
                <div key={player.id}>
                  <LeadboardPlayerRow
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
                  <div className="mx-4 border-b"></div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

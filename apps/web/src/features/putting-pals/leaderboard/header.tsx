import { ListItem } from "@components/list-item";
import { api } from "@providers/trpc-provider";

import { TournamentHeader } from "@pkg/ui/app";
import { Skeleton } from "@pkg/ui/ui";

export function PuttingPalsLeaderboardHeader({ id }: { id?: string }) {
  const { data } = api.puttingPals.tournament.getById.useQuery({ id });

  if (data === undefined) {
    return (
      <ListItem>
        <div className="flex flex-row items-center gap-3 p-4">
          <Skeleton className="h-20 w-20 rounded-full" />
          <div className="flex flex-col gap-2">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-6 w-40" />
            <Skeleton className="h-4 w-48" />
          </div>
        </div>
      </ListItem>
    );
  } else {
    return (
      <ListItem>
        <TournamentHeader
          className="p-4"
          courses={data.courses}
          roundDisplay={data.roundDisplay}
          roundStatus={data.roundStatus}
          roundStatusColor={data.roundStatusColor}
          roundStatusDisplay={data.roundStatusDisplay}
          tournamentLogo={data.tournamentLogo}
          tournamentName={data.tournamentName}
          tournamentStatus={data.tournamentStatus}
          city={data.city}
          country={data.country}
          state={data.state}
          displayDate={data.displayDate}
          weather={data.weather}
        />
      </ListItem>
    );
  }
}
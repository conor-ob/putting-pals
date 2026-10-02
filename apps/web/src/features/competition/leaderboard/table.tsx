import { Skeleton } from "@components/ui";
import { LeaderboardTableAllPlayersHeader } from "@features/leaderboard/table/all-players-header";
import {
  LeaderboardRow,
  sortAndFilterRows,
} from "@features/leaderboard/table/leaderboard-row";
import { LeaderboardTableHeader } from "@features/leaderboard/table/table-header";
import type { TourCode } from "@providers/trpc/types";
import { trpc } from "@providers/trpc/utils/trpc";
import { useQuery } from "@tanstack/react-query";

import { useFavourites } from "../utils/favourites";

export function CompetitionTable({
  tourCode,
  id,
  searchQuery,
}: {
  tourCode: TourCode;
  id?: string;
  searchQuery?: string;
}) {
  const { data, isLoading, isRefetching } = useQuery(
    trpc.leaderboard.getById.queryOptions({ tourCode, id }),
  );
  const { favourites, toggleFavourite } = useFavourites(data?.id);

  if (isLoading || isRefetching || !data) {
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

  const rows = sortAndFilterRows(data.players, searchQuery);
  const favouriteRows = rows.filter(
    (row) => row.__typename !== "InformationRow" && favourites.includes(row.id),
  );

  return (
    <div>
      {favouriteRows.length > 0 && (
        <div className="mb-4">
          <div className="px-4 py-2">
            <div className="text-2xl font-bold tracking-tight">Favourites</div>
          </div>
          <LeaderboardTableHeader />
          {favouriteRows.map((row) => (
            <LeaderboardRow
              key={row.id}
              row={row}
              favourites={favourites}
              onFavouriteClick={toggleFavourite}
            />
          ))}
        </div>
      )}
      <LeaderboardTableAllPlayersHeader />
      <LeaderboardTableHeader />
      {rows.map((row) => (
        <LeaderboardRow
          key={row.id}
          row={row}
          favourites={favourites}
          onFavouriteClick={toggleFavourite}
        />
      ))}
    </div>
  );
}

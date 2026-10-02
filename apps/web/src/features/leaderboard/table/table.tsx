import { Skeleton } from "@components/ui";
import { useFavourites } from "@features/competition/utils/favourites";
import type { TourCode } from "@providers/trpc/types";
import { trpc } from "@providers/trpc/utils/trpc";
import { useQuery } from "@tanstack/react-query";

import { LeaderboardRow, sortAndFilterRows } from "./leaderboard-row";

export function LeaderboardTable({
  tourCode,
  id,
  searchQuery,
}: {
  tourCode: TourCode;
  id?: string;
  searchQuery?: string;
}) {
  const { data } = useQuery(
    trpc.leaderboard.getById.queryOptions({ tourCode, id }),
  );
  const { favourites, toggleFavourite } = useFavourites(data?.id);

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
  } else {
    return (
      <>
        {sortAndFilterRows(data.players, searchQuery).map((row) => (
          <LeaderboardRow
            key={row.id}
            row={row}
            favourites={favourites}
            onFavouriteClick={toggleFavourite}
          />
        ))}
      </>
    );
  }
}

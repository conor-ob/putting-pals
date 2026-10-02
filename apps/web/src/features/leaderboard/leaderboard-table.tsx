import { Skeleton } from "@components/ui";
import type { Leaderboard, LeaderboardRow } from "@providers/trpc/types";
import _ from "lodash";

import { InformationRow } from "./information-row";
import { LeaderboardTableHeader } from "./leaderboard-table-header";
import { PlayerRow } from "./player-row";
import { PuttingPalsPlayerRow } from "./putting-pals-player-row";
import { useFavourites } from "./utils/favourites";

export function LeaderboardTable({
  leaderboard,
  searchQuery,
}: {
  leaderboard?: Leaderboard;
  searchQuery?: string;
}) {
  const { favourites, toggleFavourite } = useFavourites(leaderboard?.id);

  if (leaderboard === undefined) {
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

  const rows = [...leaderboard.players]
    .sort((a, b) => a.leaderboardSortOrder - b.leaderboardSortOrder)
    .filter((row) => matchesSearchQuery(row, searchQuery));
  const playerRowsByPlayerId = new Map(
    leaderboard.players
      .filter((row) => row.__typename === "PlayerRow")
      .map((row) => [row.player.id, row]),
  );
  const favouriteRows = rows
    .filter(
      (row) =>
        row.__typename !== "InformationRow" && favourites.includes(row.id),
    )
    .flatMap((row): LeaderboardRow[] => {
      if (row.__typename !== "PuttingPalsPlayerRow") {
        return [row];
      }
      const picks = row.picks.flatMap((playerId) => {
        const pick = playerRowsByPlayerId.get(playerId);
        return pick === undefined
          ? []
          : [{ ...pick, id: `${row.id}-${playerId}` }];
      });
      return [row, ...picks];
    });

  function renderRow(row: LeaderboardRow) {
    switch (row.__typename) {
      case "PlayerRow":
        return <PlayerRow key={row.id} row={row} />;
      case "PuttingPalsPlayerRow":
        return (
          <PuttingPalsPlayerRow
            key={row.id}
            row={row}
            isFavourite={favourites.includes(row.id)}
            onFavouriteClick={toggleFavourite}
          />
        );
      case "InformationRow":
        return <InformationRow key={row.id} row={row} />;
    }
  }

  return (
    <div>
      {favouriteRows.length > 0 && (
        <div className="mb-4">
          <LeaderboardTableTitle>Favourites</LeaderboardTableTitle>
          <LeaderboardTableHeader
            leaderboardRoundHeader={leaderboard.leaderboardRoundHeader}
          />
          {favouriteRows.map(renderRow)}
        </div>
      )}
      <LeaderboardTableTitle>All Players</LeaderboardTableTitle>
      <LeaderboardTableHeader
        leaderboardRoundHeader={leaderboard.leaderboardRoundHeader}
      />
      {rows.map(renderRow)}
    </div>
  );
}

function LeaderboardTableTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-4 py-2">
      <div className="text-2xl font-bold tracking-tight">{children}</div>
    </div>
  );
}

// TODO legacy-web: fix bug where typing then undoing gives weird search results
function matchesSearchQuery(row: LeaderboardRow, searchQuery?: string) {
  if (searchQuery === undefined) {
    return true;
  } else if (row.__typename === "InformationRow") {
    return false;
  } else {
    return _.deburr(row.player.displayName.toLowerCase())
      .trim()
      .includes(_.deburr(searchQuery.toLowerCase()).trim());
  }
}

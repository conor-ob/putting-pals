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

  const groups = groupRows(leaderboard.players).filter((group) =>
    matchesSearchQuery(group, searchQuery),
  );
  const favouriteGroups = groups.filter((group) => {
    const [firstRow] = group;
    return (
      firstRow?.__typename === "PuttingPalsPlayerRow" &&
      favourites.includes(firstRow.id)
    );
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
      {favouriteGroups.length > 0 && (
        <div className="mb-4">
          <LeaderboardTableTitle>Favourites</LeaderboardTableTitle>
          <LeaderboardTableHeader
            leaderboardRoundHeader={leaderboard.leaderboardRoundHeader}
          />
          {favouriteGroups.flat().map(renderRow)}
        </div>
      )}
      <LeaderboardTableTitle>All Players</LeaderboardTableTitle>
      <LeaderboardTableHeader
        leaderboardRoundHeader={leaderboard.leaderboardRoundHeader}
      />
      {groups.flat().map(renderRow)}
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

/**
 * Groups each Putting Pals player with the rows of their picks, so a group is
 * searched and displayed as a whole. Rows that aren't a pick (e.g. PGA TOUR
 * players and information rows) are a group of their own.
 */
function groupRows(players: readonly LeaderboardRow[]): LeaderboardRow[][] {
  const sortedRows = [...players].sort(
    (a, b) => a.leaderboardSortOrder - b.leaderboardSortOrder,
  );
  const playerRowsByPlayerId = new Map(
    sortedRows
      .filter((row) => row.__typename === "PlayerRow")
      .map((row) => [row.player.id, row]),
  );
  const pickedPlayerIds = new Set(
    sortedRows.flatMap((row) =>
      row.__typename === "PuttingPalsPlayerRow" ? row.picks : [],
    ),
  );

  return sortedRows.flatMap((row): LeaderboardRow[][] => {
    if (row.__typename === "PuttingPalsPlayerRow") {
      const picks = row.picks.flatMap((playerId) => {
        const pick = playerRowsByPlayerId.get(playerId);
        return pick === undefined
          ? []
          : [{ ...pick, id: `${row.id}-${playerId}` }];
      });
      return [[row, ...picks]];
    }
    if (row.__typename === "PlayerRow" && pickedPlayerIds.has(row.player.id)) {
      // picks are already rendered in their Putting Pals player's group
      return [];
    }
    return [[row]];
  });
}

function matchesSearchQuery(group: LeaderboardRow[], searchQuery?: string) {
  if (searchQuery === undefined) {
    return true;
  }
  const deburredSearchQuery = _.deburr(searchQuery.toLowerCase()).trim();
  return group.some(
    (row) =>
      row.__typename !== "InformationRow" &&
      _.deburr(row.player.displayName.toLowerCase())
        .trim()
        .includes(deburredSearchQuery),
  );
}

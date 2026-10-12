import { Skeleton } from "@components/ui";
import type {
  Leaderboard,
  LeaderboardRow,
  TourCode,
} from "@providers/trpc/types";
import _ from "lodash";
import { CompetitorRow } from "./competitor-row";
import { InformationRow } from "./information-row";
import { LeaderboardTableHeader } from "./leaderboard-table-header";
import { PlayerRow } from "./player-row";
import { useFavourites } from "./utils/favourites";

export function LeaderboardTable({
  tourCode,
  leaderboard,
  searchQuery,
}: {
  tourCode: TourCode;
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
      firstRow?.__typename === "CompetitorRow" &&
      favourites.includes(firstRow.id)
    );
  });

  function renderRow(tourCode: TourCode, row: LeaderboardRow) {
    switch (row.__typename) {
      case "PlayerRow":
        return (
          <PlayerRow
            key={row.id}
            row={row}
            variant={tourCode === "pal" ? "secondary" : "primary"}
          />
        );
      case "CompetitorRow":
        return (
          <CompetitorRow
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
          {favouriteGroups.flat().map((row) => renderRow(tourCode, row))}
        </div>
      )}
      <LeaderboardTableTitle>All Players</LeaderboardTableTitle>
      <LeaderboardTableHeader
        leaderboardRoundHeader={leaderboard.leaderboardRoundHeader}
      />
      {groups.flat().map((row) => renderRow(tourCode, row))}
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
 * Groups each Competitor with the rows of their picks, so a group is
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
      row.__typename === "CompetitorRow" ? row.picks : [],
    ),
  );

  return sortedRows.flatMap((row): LeaderboardRow[][] => {
    if (row.__typename === "CompetitorRow") {
      const picks = row.picks.flatMap((playerId) => {
        const pick = playerRowsByPlayerId.get(playerId);
        return pick === undefined
          ? []
          : [{ ...pick, id: `${row.id}-${playerId}` }];
      });
      return [[row, ...picks]];
    }
    if (row.__typename === "PlayerRow" && pickedPlayerIds.has(row.player.id)) {
      // picks are already rendered in their Competitor's group
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
  return group.some((row) => {
    const displayName = getDisplayName(row);
    return (
      displayName !== undefined &&
      _.deburr(displayName.toLowerCase()).trim().includes(deburredSearchQuery)
    );
  });
}

function getDisplayName(row: LeaderboardRow): string | undefined {
  switch (row.__typename) {
    case "CompetitorRow":
      return row.competitor.displayName;
    case "PlayerRow":
      return row.player.displayName;
    case "InformationRow":
      return undefined;
  }
}

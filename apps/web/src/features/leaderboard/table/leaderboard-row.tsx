import { CompetitionPlayerRow } from "@features/competition/leaderboard/player-row";
import type { RouterOutputs } from "@providers/trpc/types";
import _ from "lodash";

import { LeadboardPlayerRow } from "./player-row";

export type LeaderboardRowData =
  RouterOutputs["leaderboard"]["getById"]["players"][number];

export function LeaderboardRow({
  row,
  favourites,
  onFavouriteClick,
}: {
  row: LeaderboardRowData;
  favourites: string[];
  onFavouriteClick: (id: string, isFavourite: boolean) => void;
}) {
  switch (row.__typename) {
    case "PuttingPalsPlayerRow":
      return (
        <CompetitionPlayerRow
          id={row.id}
          position={row.scoringData.position}
          shortName={row.player.displayName}
          total={row.scoringData.total}
          totalSort={row.scoringData.totalSort}
          isFavourite={favourites.includes(row.id)}
          onFavouriteClick={onFavouriteClick}
        />
      );
    case "PlayerRow":
      return (
        <div>
          <LeadboardPlayerRow
            position={row.scoringData.position}
            countryFlag={row.player.countryFlag}
            displayName={row.player.displayName}
            total={row.scoringData.total}
            totalSort={row.scoringData.totalSort}
            score={row.scoringData.score}
            teeTime={row.scoringData.teeTime}
          />
        </div>
      );
    case "InformationRow":
      return (
        <div className="flex items-center justify-center bg-border p-4">
          <div className="text-sm font-semibold tracking-tight">
            {row.displayText}
          </div>
        </div>
      );
  }
}

// TODO legacy-web: fix filtering
export function sortAndFilterRows(
  rows: readonly LeaderboardRowData[],
  searchQuery?: string,
) {
  return [...rows]
    .sort((a, b) => a.leaderboardSortOrder - b.leaderboardSortOrder)
    .filter((row) => {
      if (searchQuery === undefined) {
        return true;
      } else if (row.__typename === "InformationRow") {
        return false;
      } else {
        return _.deburr(row.player.displayName.toLowerCase())
          .trim()
          .includes(_.deburr(searchQuery.toLowerCase()).trim());
      }
    });
}

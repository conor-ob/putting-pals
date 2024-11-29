import { api } from "@providers/trpc-provider";

import type { InformationRow, PlayerRow } from "@pkg/api/types";

import { PgaTourLeaderboardTablePlayerRow } from "./player-row";

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
        {data.rows
          .filter((row) => {
            if (searchQuery === undefined) {
              return true;
            } else if (Object.keys(row).includes("displayText")) {
              return false;
            } else if (Object.keys(row).includes("player")) {
              return `${(row as PlayerRow).player.firstName} ${(row as PlayerRow).player.lastName}`
                .toLowerCase()
                .includes(searchQuery);
            } else {
              return false;
            }
          })
          .map((row) => {
            if (Object.keys(row).includes("displayText")) {
              return (
                <div
                  key={row.id}
                  className="flex items-center justify-center bg-border p-4"
                >
                  <div className="text-sm font-semibold tracking-tight">
                    {(row as InformationRow).displayText}
                  </div>
                </div>
              );
            } else if (Object.keys(row).includes("player")) {
              return (
                <div key={row.id}>
                  <PgaTourLeaderboardTablePlayerRow
                    position={(row as PlayerRow).scoringData.position}
                    countryFlag={(row as PlayerRow).player.countryFlag}
                    shortName={(row as PlayerRow).player.shortName}
                    abbreviations={(row as PlayerRow).player.abbreviations}
                    total={(row as PlayerRow).scoringData.total}
                    totalSort={(row as PlayerRow).scoringData.totalSort}
                    score={(row as PlayerRow).scoringData.score}
                    thru={(row as PlayerRow).scoringData.thru}
                    teeTime={(row as PlayerRow).scoringData.teeTime}
                  />
                  <div className="mx-4 border-b"></div>
                </div>
              );
            } else {
              return <div key={row.id}></div>;
            }
          })}
      </>
    );
  }
}

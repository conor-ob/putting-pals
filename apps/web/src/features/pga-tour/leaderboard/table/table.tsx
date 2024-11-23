import { api } from "@providers/trpc-provider";

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
        {data.players
          .filter((row) => {
            if (searchQuery === undefined) {
              return true;
            } else if (row.__typename === "InformationRow") {
              return false;
            } else {
              return `${row.player.firstName} ${row.player.lastName}`
                .toLowerCase()
                .includes(searchQuery);
            }
          })
          .map((row) => {
            if (row.__typename === "InformationRow") {
              return (
                <div
                  key={row.id}
                  className="flex items-center justify-center bg-border p-4"
                >
                  <div className="text-sm font-semibold tracking-tight">
                    {row.displayText}
                  </div>
                </div>
              );
            } else {
              return (
                <div key={row.id}>
                  <PgaTourLeaderboardTablePlayerRow
                    position={row.scoringData.position}
                    countryFlag={row.player.countryFlag}
                    shortName={row.player.shortName}
                    abbreviations={row.player.abbreviations}
                    total={row.scoringData.total}
                    totalSort={row.scoringData.totalSort}
                    score={row.scoringData.score}
                    thru={row.scoringData.thru}
                  />
                  <div className="mx-4 border-b"></div>
                </div>
              );
            }
          })}
      </>
    );
  }
}

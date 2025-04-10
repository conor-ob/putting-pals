import { useEffect, useState } from "react";
import { LeaderboardTableAllPlayersHeader } from "@features/leaderboard/table/all-players-header";
import { LeadboardPlayerRow } from "@features/leaderboard/table/player-row";
import { LeaderboardTableHeader } from "@features/leaderboard/table/table-header";
import { api } from "@providers/trpc-provider";
import _ from "lodash";

import { Skeleton } from "@pkg/ui/ui";

import { favouritesStorageKey } from "../utils/favourites";
import { CompetitionPlayerRow } from "./player-row";

export function CompetitionTable({
  id,
  searchQuery,
}: {
  id?: string;
  searchQuery?: string;
}) {
  const { data, isLoading, isRefetching } = api.competition.getById.useQuery({
    id,
  });

  const [favourites, setFavourites] = useState<string[]>([]);

  // TODO remove hardcoded key
  const cacheKey = favouritesStorageKey("R2025014");
  useEffect(() => {
    function loadPicks() {
      try {
        const favouritesJson = localStorage.getItem(cacheKey);
        if (favouritesJson !== null) {
          const favourites = JSON.parse(favouritesJson) as string[];
          if (favourites.length !== 0) {
            setFavourites(favourites);
          }
        }
      } catch (e) {
        // error reading value
      }
    }

    loadPicks();
  }, [cacheKey]);

  function handleAddFavourite(id: string) {
    const newFavourites = [...favourites, id];
    try {
      localStorage.setItem(cacheKey, JSON.stringify(newFavourites));
      setFavourites(newFavourites);
    } catch (e) {
      // saving error
    }
  }

  function handleRemoveFavourite(id: string) {
    const newFavourites = favourites.filter((it) => it !== id);
    try {
      localStorage.setItem(cacheKey, JSON.stringify(newFavourites));
      setFavourites(newFavourites);
    } catch (e) {
      // saving error
    }
  }

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
  return (
    <div>
      {favourites.length > 0 && (
        <div className="mb-4">
          <div className="px-4 py-2">
            <div className="text-2xl font-bold tracking-tight">Favourites</div>
          </div>
          <LeaderboardTableHeader id={id} />
          {data.competitors
            .filter((competitor) => favourites.includes(competitor.id))
            .filter((competitor) => {
              if (searchQuery === undefined) {
                return true;
              } else {
                const deburredSearchQuery = _.deburr(
                  searchQuery.toLowerCase(),
                ).trim();

                const competitorName = competitor.displayName;
                const playerNames = competitor.picks.map(
                  (player) =>
                    `${player.player.firstName} ${player.player.lastName}`,
                );

                const deburredNames = [competitorName, ...playerNames].map(
                  (value) => _.deburr(value.toLowerCase()).trim(),
                );

                return deburredNames.some((name) =>
                  name.includes(deburredSearchQuery),
                );
              }
            })
            .map((competitor) => {
              return (
                <div key={competitor.id}>
                  <CompetitionPlayerRow
                    id={competitor.id}
                    position={competitor.position}
                    shortName={competitor.shortName}
                    total={competitor.total}
                    totalSort={competitor.totalSort}
                    isFavourite={favourites.includes(competitor.id)}
                    onFavouriteClick={(id, isFavourite) => {
                      if (isFavourite) {
                        handleRemoveFavourite(id);
                      } else {
                        handleAddFavourite(id);
                      }
                    }}
                  />
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
                      </div>
                    );
                  })}
                  <div className="mx-4 border-b"></div>
                </div>
              );
            })}
        </div>
      )}
      <LeaderboardTableAllPlayersHeader />
      <LeaderboardTableHeader id={id} />
      {data.competitors
        .filter((competitor) => {
          if (searchQuery === undefined) {
            return true;
          } else {
            const deburredSearchQuery = _.deburr(
              searchQuery.toLowerCase(),
            ).trim();

            const competitorName = competitor.displayName;
            const playerNames = competitor.picks.map(
              (player) =>
                `${player.player.firstName} ${player.player.lastName}`,
            );

            const deburredNames = [competitorName, ...playerNames].map(
              (value) => _.deburr(value.toLowerCase()).trim(),
            );

            return deburredNames.some((name) =>
              name.includes(deburredSearchQuery),
            );
          }
        })
        .map((competitor) => {
          return (
            <div key={competitor.id}>
              <CompetitionPlayerRow
                id={competitor.id}
                position={competitor.position}
                shortName={competitor.shortName}
                total={competitor.total}
                totalSort={competitor.totalSort}
                isFavourite={favourites.includes(competitor.id)}
                onFavouriteClick={(id, isFavourite) => {
                  if (isFavourite) {
                    handleRemoveFavourite(id);
                  } else {
                    handleAddFavourite(id);
                  }
                }}
              />
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
                  </div>
                );
              })}
              <div className="mx-4 border-b"></div>
            </div>
          );
        })}
    </div>
  );
}

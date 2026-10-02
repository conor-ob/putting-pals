import { useEffect, useState } from "react";

export function favouritesStorageKey(id: string) {
  return `Favourites:${id}`;
}

export function useFavourites(leaderboardId?: string) {
  const [favourites, setFavourites] = useState<string[]>([]);

  const cacheKey =
    leaderboardId !== undefined
      ? favouritesStorageKey(leaderboardId)
      : undefined;

  useEffect(() => {
    if (cacheKey === undefined) {
      return;
    }
    const favouritesJson = localStorage.getItem(cacheKey);
    if (favouritesJson !== null) {
      const favourites = JSON.parse(favouritesJson) as string[];
      if (favourites.length !== 0) {
        setFavourites(favourites);
      }
    }
  }, [cacheKey]);

  function toggleFavourite(id: string, isFavourite: boolean) {
    const newFavourites = isFavourite
      ? favourites.filter((it) => it !== id)
      : [...favourites, id];
    if (cacheKey !== undefined) {
      localStorage.setItem(cacheKey, JSON.stringify(newFavourites));
    }
    setFavourites(newFavourites);
  }

  return { favourites, toggleFavourite };
}

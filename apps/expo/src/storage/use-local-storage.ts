import AsyncStorage from "@react-native-async-storage/async-storage";
import { useCallback, useEffect, useState } from "react";

type FavouriteKey = `Favourites:${string}`;

type LocalStorageKeyValueTypes = {
  FavouriteKey: string[];
};

export function useLocalStorage<T>(key: FavouriteKey, initial?: T) {
  const [data, setData] = useState<T | undefined>(initial);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AsyncStorage.getItem(key).then((v) => {
      if (v != null) setData(v as T);
      setLoading(false);
    });
  }, [key]);

  const update = useCallback(
    async (v: T) => {
      setData(v);
      await AsyncStorage.setItem(key, v as string);
    },
    [key],
  );

  return { data, set: update, loading };
}

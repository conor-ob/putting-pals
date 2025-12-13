import AsyncStorage from "@react-native-async-storage/async-storage";
import { useCallback, useEffect, useState } from "react";

type FavouritesKey = `Favourites:${string}`;

type LocalStorageKeyValueTypes = {
  [key: FavouritesKey]: string[];
  updatedAt: Date;
};

type LocalStorageKey = keyof LocalStorageKeyValueTypes;

export function useLocalStorage<K extends LocalStorageKey>(
  key: K,
  options?: {
    serialize: (value: LocalStorageKeyValueTypes[K]) => string;
    deserialize: (value: string) => LocalStorageKeyValueTypes[K];
  },
) {
  const [data, setData] = useState<LocalStorageKeyValueTypes[K] | undefined>(
    undefined,
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AsyncStorage.getItem(key).then((value) => {
      if (value != null) {
        setData(
          options?.deserialize ? options.deserialize(value) : JSON.parse(value),
        );
      }
      setLoading(false);
    });
  }, [key, options?.deserialize]);

  const setValue = useCallback(
    async (value: LocalStorageKeyValueTypes[K]) => {
      setData(value);
      await AsyncStorage.setItem(
        key,
        options?.serialize ? options.serialize(value) : JSON.stringify(value),
      );
    },
    [key, options?.serialize],
  );

  return { value: data, setValue, loading };
}

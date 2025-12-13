import type { TourCode } from "@putting-pals/putting-pals-schema/types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useCallback, useEffect, useState } from "react";

type LocalStorageKeyValueTypes = {
  [
    key: `putting-pals:leaderboard:favourites:v1:${TourCode}:${string}`
  ]: string[];
  "putting-pals:app:tour-code:v1": TourCode;
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

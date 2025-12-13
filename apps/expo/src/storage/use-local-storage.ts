import type { TourCode } from "@putting-pals/putting-pals-schema/types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useCallback, useEffect, useState } from "react";

type LocalStorageTypes = {
  [
    key: `putting-pals:leaderboard:favourites:v1:${TourCode}:${string}`
  ]: string[];
  "putting-pals:app:tour-code:v1": TourCode;
};

type LocalStorageKey = keyof LocalStorageTypes;

export function useLocalStorage<K extends LocalStorageKey>(
  key: K,
  options?: {
    serialize: (value: LocalStorageTypes[K]) => string;
    deserialize: (value: string) => LocalStorageTypes[K];
  },
) {
  const [data, setData] = useState<LocalStorageTypes[K] | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Reset state when key changes
    setData(undefined);
    setLoading(true);

    let cancelled = false;

    AsyncStorage.getItem(key).then((value) => {
      // Don't update state if the key changed during the async operation
      if (cancelled) return;

      if (value != null) {
        setData(
          options?.deserialize ? options.deserialize(value) : JSON.parse(value),
        );
      } else {
        setData(undefined);
      }
      setLoading(false);
    });

    return () => {
      cancelled = true;
    };
  }, [key, options?.deserialize]);

  const setValue = useCallback(
    async (value: LocalStorageTypes[K]) => {
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

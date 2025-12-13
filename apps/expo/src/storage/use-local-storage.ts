import AsyncStorage from "@react-native-async-storage/async-storage";
import { useCallback, useEffect, useState } from "react";

type LocalStorageKey = `Favourites:${string}`;

export function useLocalStorage<T>(
  key: LocalStorageKey,
  options: {
    serialize: (value: T) => string;
    deserialize: (value: string) => T;
  },
  initial?: T,
) {
  const [data, setData] = useState<T | undefined>(initial);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AsyncStorage.getItem(key).then((value) => {
      if (value != null) {
        setData(options.deserialize(value));
      }
      setLoading(false);
    });
  }, [key, options.deserialize]);

  const setValue = useCallback(
    async (value: T) => {
      setData(value);
      await AsyncStorage.setItem(key, options.serialize(value));
    },
    [key, options.serialize],
  );

  return { value: data, setValue, loading };
}

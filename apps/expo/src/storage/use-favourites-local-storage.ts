import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  createCollection,
  localOnlyCollectionOptions,
} from "@tanstack/react-db";
import { useCallback, useEffect, useState } from "react";

type FavouriteKey = `Favourites:${string}`;

type LocalStorageKeyValueTypes = {
  FavouriteKey: string[];
};

const favouritesCollection = createCollection(
  localOnlyCollectionOptions<{ id: string; data: string[] }>({
    // id: "ui-state",
    getKey: (item) => item.id,
    onInsert: async ({ transaction }) => {
      // Custom logic before confirming the insert
      console.log("Inserting:", transaction.mutations[0].modified);
      await AsyncStorage.setItem(
        transaction.mutations[0].modified.id,
        JSON.stringify(transaction.mutations[0].modified.data),
      );
    },
    onUpdate: async ({ transaction }) => {
      // Custom logic before confirming the update
      const { original, modified } = transaction.mutations[0];
      console.log("Updating from", original, "to", modified);
      await AsyncStorage.setItem(
        transaction.mutations[0].modified.id,
        JSON.stringify(transaction.mutations[0].modified.data),
      );
    },
    onDelete: async ({ transaction }) => {
      // Custom logic before confirming the delete
      console.log("Deleting:", transaction.mutations[0].original);
      await AsyncStorage.removeItem(transaction.mutations[0].original.id);
    },
  }),
);

export function useFavouritesLocalStorage(key: FavouriteKey) {
  const [data, setData] = useState<string[] | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  // Load data from AsyncStorage on mount and sync with collection
  useEffect(() => {
    AsyncStorage.getItem(key)
      .then((value) => {
        if (value != null) {
          try {
            const parsed = JSON.parse(value) as string[];
            setData(parsed);
            // Sync with collection
            favouritesCollection.insert({ id: key, data: parsed });
          } catch {
            setData(undefined);
          }
        } else {
          // Check if collection already has the data
          const collectionItem = favouritesCollection.get(key);
          if (collectionItem) {
            setData(collectionItem.data);
          }
        }
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [key]);

  // Get function - returns the current data
  const get = data;

  // Set function - updates both state and collection (which triggers AsyncStorage save)
  const set = useCallback(
    (value: string[]) => {
      setData(value);
      favouritesCollection.insert({ id: key, data: value });
    },
    [key],
  );

  return { get, set, data, loading };
}

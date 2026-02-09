import { useRouter, useSegments } from "expo-router";
import { createContext, type ReactNode, useCallback, useContext } from "react";
import type { Tour, TourCode } from "~/providers/trpc/types";
import { useLocalStorage } from "~/storage/use-local-storage";
import { trpc } from "../trpc/utils/trpc";
import { useQuery } from "../trpc/utils/use-query";

interface TourCodeContextType {
  tourCode: TourCode;
  tours: readonly Tour[];
  setTourCode: (tourCode: TourCode) => void;
}

const TourCodeContext = createContext<TourCodeContextType | undefined>(
  undefined,
);

export function TourCodeProvider({
  tourCode,
  children,
}: {
  tourCode: TourCode;
  children: ReactNode;
}) {
  const router = useRouter();
  const segments = useSegments();
  const { data: tours } = useQuery(trpc.tour.getTours.queryOptions());
  const { setValue: saveTourCode } = useLocalStorage(
    "putting-pals:app:tour-code:v1",
  );

  const setTourCode = useCallback(
    async (newTourCode: TourCode) => {
      const newPath = segments
        .map((s) => {
          if (s === "[tour]") {
            return newTourCode;
          }
          return s;
        })
        .filter((s) => !s.startsWith("_"))
        .filter((s) => !s.startsWith("("))
        .filter((s) => !s.startsWith("["))
        .join("/");

      await saveTourCode(newTourCode);
      router.replace(`/${newPath}` as never);
    },
    [router, segments, saveTourCode],
  );

  return (
    <TourCodeContext.Provider
      value={{
        tourCode,
        tours: tours ?? [],
        setTourCode,
      }}
    >
      {children}
    </TourCodeContext.Provider>
  );
}

export function useTourCode() {
  const context = useContext(TourCodeContext);
  if (context === undefined) {
    throw new Error("useTourCode must be used within a TourCodeProvider");
  }
  return context;
}

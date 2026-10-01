import { type Href, useRouter } from "expo-router";
import { createContext, type ReactNode, useCallback, useContext } from "react";
import type { Tour, TourCode } from "~/providers/trpc/types";
import { useLocalStorage } from "~/storage/use-local-storage";
import { trpc } from "../trpc/utils/trpc";
import { useQuery } from "../trpc/utils/use-query";

interface TourCodeContextType {
  tourCode: TourCode;
  tours: readonly Tour[];
  setTourCode: (tourCode: TourCode, pathname?: string) => void;
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
  const { data: tours } = useQuery(trpc.tour.getTours.queryOptions());
  const { setValue: saveTourCode } = useLocalStorage(
    "putting-pals:app:tour-code:v1",
  );

  /**
   * Switches to `newTourCode`, keeping the rest of `pathname` so the user stays
   * on the same tab, e.g. `/pal/schedule` -> `/pga/schedule`.
   */
  const setTourCode = useCallback(
    async (newTourCode: TourCode, pathname?: string) => {
      const [, , ...rest] = (pathname ?? `/${tourCode}`).split("/");

      await saveTourCode(newTourCode);
      router.replace(`/${[newTourCode, ...rest].join("/")}` as Href);
    },
    [router, tourCode, saveTourCode],
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

import { router, usePathname, useSegments } from "expo-router";
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
  const segments = useSegments<"/[tour]">();
  const pathname = usePathname();
  const { setValue: saveTourCode } = useLocalStorage(
    "putting-pals:app:tour-code:v1",
  );
  const { data: tours } = useQuery(trpc.tour.getTours.queryOptions());

  const setTourCode = useCallback(
    async (newTourCode: TourCode) => {
      if (segments.length > 0 && segments[0] === "[tour]") {
        const pathSegments = pathname.split("/").filter(Boolean);
        if (pathSegments.length > 0) {
          pathSegments[0] = newTourCode;
          const newPath = `/${pathSegments.join("/")}`;
          await saveTourCode(newTourCode);
          router.replace(newPath as never);
        }
      }
    },
    [segments, pathname, saveTourCode],
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

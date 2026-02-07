import { router, usePathname } from "expo-router";
import { createContext, type ReactNode, useCallback, useContext } from "react";
import type { Tour, TourCode } from "~/providers/trpc/types";
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

interface TourCodeProviderProps {
  tourCode: TourCode;
  children: ReactNode;
}

export function TourCodeProvider({
  tourCode,
  children,
}: TourCodeProviderProps) {
  const pathname = usePathname();
  const { data: tours } = useQuery(trpc.tour.getTours.queryOptions());

  const setTourCode = useCallback(
    (newTourCode: TourCode) => {
      const segments = pathname.split("/").filter(Boolean);
      if (segments.length > 0) {
        segments[0] = newTourCode;
        const newPath = `/${segments.join("/")}`;
        router.replace(newPath as never);
      }
    },
    [pathname],
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

import { createContext, type ReactNode, useContext } from "react";
import type { TourCode } from "~/providers/trpc/types";
import { useLocalStorage } from "~/storage/use-local-storage";
import { trpc } from "../trpc/utils/trpc";
import { useQuery } from "../trpc/utils/use-query";

interface TourCodeContextType {
  tourCode: TourCode;
  tours: readonly { tourCode: TourCode; tourName: string }[];
  setTourCode: (tourCode: TourCode) => void;
}

const TourCodeContext = createContext<TourCodeContextType | undefined>(
  undefined,
);

export function TourCodeProvider({ children }: { children: ReactNode }) {
  const { value: tourCode, setValue: setTourCode } = useLocalStorage(
    "putting-pals:app:tour-code:v1",
  );

  const { data: tours } = useQuery(trpc.tour.getTours.queryOptions());

  return (
    <TourCodeContext.Provider
      value={{ tourCode: tourCode ?? "P", tours: tours ?? [], setTourCode }}
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

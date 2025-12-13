import type { TourCode } from "@putting-pals/putting-pals-schema/types";
import { createContext, type ReactNode, useContext } from "react";
import { useLocalStorage } from "~/storage/use-local-storage";

interface TourCodeContextType {
  tourCode: TourCode;
  setTourCode: (tourCode: TourCode) => void;
}

const TourCodeContext = createContext<TourCodeContextType | undefined>(
  undefined,
);

export function TourCodeProvider({ children }: { children: ReactNode }) {
  const { value: tourCode, setValue: setTourCode } = useLocalStorage(
    "putting-pals:app:tour-code:v1",
  );

  return (
    <TourCodeContext.Provider
      value={{ tourCode: tourCode ?? "P", setTourCode }}
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

import type { TourCode } from "@putting-pals/putting-pals-schema/types";
import { createContext, type ReactNode, useContext, useState } from "react";

interface TourCodeContextType {
  tourCode: TourCode;
  setTourCode: (tourCode: TourCode) => void;
}

const TourCodeContext = createContext<TourCodeContextType | undefined>(
  undefined,
);

export function TourCodeProvider({ children }: { children: ReactNode }) {
  const [tourCode, setTourCode] = useState<TourCode>("P");

  return (
    <TourCodeContext.Provider value={{ tourCode, setTourCode }}>
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

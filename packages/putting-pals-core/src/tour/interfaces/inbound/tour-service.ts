import type { Tour } from "../../domain/types";

export interface TourService {
  getTours(): Promise<readonly Tour[]>;
}

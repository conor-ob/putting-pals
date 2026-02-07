import {
  type TourCode,
  UnsupportedTourCodeError,
} from "@putting-pals/putting-pals-core";
import type { ApiTourCode } from "../domain/types";

export function mapDomainToApiTourCode(tourCode: TourCode): ApiTourCode {
  switch (tourCode) {
    case "dp-world-tour":
      return "eur";
    case "liv-golf-tour":
      return "liv";
    default:
      throw new UnsupportedTourCodeError(tourCode);
  }
}

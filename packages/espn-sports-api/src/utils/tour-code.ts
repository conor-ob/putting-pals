import {
  type TourCode,
  UnsupportedTourCodeError,
} from "@putting-pals/putting-pals-core";
import type { ApiTourCode } from "../tour/domain/types";

export function mapDomainToApiTourCode(tourCode: TourCode): ApiTourCode {
  switch (tourCode) {
    case "pga-tour":
      return "pga";
    case "dp-world-tour":
      return "eur";
    case "liv-golf-tour":
      return "liv";
    case "korn-ferry-tour":
      return "ntw";
    case "pga-tour-champions":
      return "champions-tour";
    default:
      throw new UnsupportedTourCodeError(tourCode);
  }
}

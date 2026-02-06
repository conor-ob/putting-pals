import {
  type TourCode,
  UnsupportedTourCodeError,
} from "@putting-pals/putting-pals-core";
import type { ApiTourCode } from "../generated/graphql";

export function mapDomainToApiTourCode(tourCode: TourCode): ApiTourCode {
  switch (tourCode) {
    case "pga-tour":
      return "R";
    case "korn-ferry-tour":
      return "H";
    case "pga-tour-champions":
      return "S";
    case "pga-tour-americas":
      return "Y";
    default:
      throw new UnsupportedTourCodeError(tourCode);
  }
}

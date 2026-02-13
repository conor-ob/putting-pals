import {
  type TourCode,
  UnsupportedTourCodeError,
} from "@putting-pals/putting-pals-core";
import type { ApiTourCode } from "../generated/graphql";

export function mapDomainToApiTourCode(tourCode: TourCode): ApiTourCode {
  switch (tourCode) {
    case "pal":
    case "pga":
      return "R";
    case "dev":
      return "H";
    case "snr":
      return "S";
    case "pam":
      return "Y";
    default:
      throw new UnsupportedTourCodeError(tourCode);
  }
}

import {
  type TourCode,
  UnsupportedTourCodeError,
} from "@putting-pals/putting-pals-core";
import type { ApiTourCode } from "../tour/domain/types";

export function mapDomainToApiTourCode(tourCode: TourCode): ApiTourCode {
  switch (tourCode) {
    case "pga":
      return "pga";
    case "eur":
      return "eur";
    case "liv":
      return "liv";
    case "dev":
      return "ntw";
    case "snr":
      return "champions-tour";
    default:
      throw new UnsupportedTourCodeError(tourCode);
  }
}

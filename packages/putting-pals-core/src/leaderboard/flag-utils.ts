const alpha3ToAlpha2: Record<string, string> = {
  AFG: "AF",
  ALA: "AX",
  ALB: "AL",
  DZA: "DZ",
  ASM: "AS",
  AND: "AD",
  AGO: "AO",
  AIA: "AI",
  ATA: "AQ",
  ATG: "AG",
  ARG: "AR",
  ARM: "AM",
  ABW: "AW",
  AUS: "AU",
  AUT: "AT",
  AZE: "AZ",
  BHS: "BS",
  BHR: "BH",
  BGD: "BD",
  BRB: "BB",
  BLR: "BY",
  BEL: "BE",
  BLZ: "BZ",
  BEN: "BJ",
  BMU: "BM",
  BTN: "BT",
  BOL: "BO",
  BES: "BQ",
  BIH: "BA",
  BWA: "BW",
  BVT: "BV",
  BRA: "BR",
  IOT: "IO",
  BRN: "BN",
  BGR: "BG",
  BFA: "BF",
  BDI: "BI",
  CPV: "CV",
  KHM: "KH",
  CMR: "CM",
  CAN: "CA",
  CYM: "KY",
  CAF: "CF",
  TCD: "TD",
  CHL: "CL",
  CHN: "CN",
  CXR: "CX",
  CCK: "CC",
  COL: "CO",
  COM: "KM",
  COG: "CG",
  COD: "CD",
  COK: "CK",
  CRI: "CR",
  CIV: "CI",
  HRV: "HR",
  CUB: "CU",
  CUW: "CW",
  CYP: "CY",
  CZE: "CZ",
  DNK: "DK",
  DJI: "DJ",
  DMA: "DM",
  DOM: "DO",
  ECU: "EC",
  EGY: "EG",
  SLV: "SV",
  GNQ: "GQ",
  ERI: "ER",
  EST: "EE",
  SWZ: "SZ",
  ETH: "ET",
  FLK: "FK",
  FRO: "FO",
  FJI: "FJ",
  FIN: "FI",
  FRA: "FR",
  GUF: "GF",
  PYF: "PF",
  ATF: "TF",
  GAB: "GA",
  GMB: "GM",
  GEO: "GE",
  DEU: "DE",
  GHA: "GH",
  GIB: "GI",
  GRC: "GR",
  GRL: "GL",
  GRD: "GD",
  GLP: "GP",
  GUM: "GU",
  GTM: "GT",
  GGY: "GG",
  GIN: "GN",
  GNB: "GW",
  GUY: "GY",
  HTI: "HT",
  HMD: "HM",
  VAT: "VA",
  HND: "HN",
  HKG: "HK",
  HUN: "HU",
  ISL: "IS",
  IND: "IN",
  IDN: "ID",
  IRN: "IR",
  IRQ: "IQ",
  IRL: "IE",
  IMN: "IM",
  ISR: "IL",
  ITA: "IT",
  JAM: "JM",
  JPN: "JP",
  JEY: "JE",
  JOR: "JO",
  KAZ: "KZ",
  KEN: "KE",
  KIR: "KI",
  PRK: "KP",
  KOR: "KR",
  KWT: "KW",
  KGZ: "KG",
  LAO: "LA",
  LVA: "LV",
  LBN: "LB",
  LSO: "LS",
  LBR: "LR",
  LBY: "LY",
  LIE: "LI",
  LTU: "LT",
  LUX: "LU",
  MAC: "MO",
  MDG: "MG",
  MWI: "MW",
  MYS: "MY",
  MDV: "MV",
  MLI: "ML",
  MLT: "MT",
  MHL: "MH",
  MTQ: "MQ",
  MRT: "MR",
  MUS: "MU",
  MYT: "YT",
  MEX: "MX",
  FSM: "FM",
  MDA: "MD",
  MCO: "MC",
  MNG: "MN",
  MNE: "ME",
  MSR: "MS",
  MAR: "MA",
  MOZ: "MZ",
  MMR: "MM",
  NAM: "NA",
  NRU: "NR",
  NPL: "NP",
  NLD: "NL",
  NCL: "NC",
  NZL: "NZ",
  NIC: "NI",
  NER: "NE",
  NGA: "NG",
  NIU: "NU",
  NFK: "NF",
  MKD: "MK",
  MNP: "MP",
  NOR: "NO",
  OMN: "OM",
  PAK: "PK",
  PLW: "PW",
  PSE: "PS",
  PAN: "PA",
  PNG: "PG",
  PRY: "PY",
  PER: "PE",
  PHL: "PH",
  PCN: "PN",
  POL: "PL",
  PRT: "PT",
  PRI: "PR",
  QAT: "QA",
  REU: "RE",
  ROU: "RO",
  RUS: "RU",
  RWA: "RW",
  BLM: "BL",
  SHN: "SH",
  KNA: "KN",
  LCA: "LC",
  MAF: "MF",
  SPM: "PM",
  VCT: "VC",
  WSM: "WS",
  SMR: "SM",
  STP: "ST",
  SAU: "SA",
  SEN: "SN",
  SRB: "RS",
  SYC: "SC",
  SLE: "SL",
  SGP: "SG",
  SXM: "SX",
  SVK: "SK",
  SVN: "SI",
  SLB: "SB",
  SOM: "SO",
  ZAF: "ZA",
  SGS: "GS",
  SSD: "SS",
  ESP: "ES",
  LKA: "LK",
  SDN: "SD",
  SUR: "SR",
  SJM: "SJ",
  SWE: "SE",
  CHE: "CH",
  SYR: "SY",
  TWN: "TW",
  TJK: "TJ",
  TZA: "TZ",
  THA: "TH",
  TLS: "TL",
  TGO: "TG",
  TKL: "TK",
  TON: "TO",
  TTO: "TT",
  TUN: "TN",
  TUR: "TR",
  TKM: "TM",
  TCA: "TC",
  TUV: "TV",
  UGA: "UG",
  UKR: "UA",
  ARE: "AE",
  GBR: "GB",
  USA: "US",
  UMI: "UM",
  URY: "UY",
  UZB: "UZ",
  VUT: "VU",
  VEN: "VE",
  VNM: "VN",
  VGB: "VG",
  VIR: "VI",
  WLF: "WF",
  ESH: "EH",
  YEM: "YE",
  ZMB: "ZM",
  ZWE: "ZW",
};

export function getCountryFlag(player: {
  id: string;
  countryFlag: string;
}): string {
  // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
  let alpha2 = alpha3ToAlpha2[player.countryFlag] || undefined;

  alpha2 ??= getAlpha2({ alpha3: player.countryFlag });

  alpha2 ??= resolveKnowFlagIssues(player);

  if (alpha2 === undefined) {
    // TODO: log to Sentry
    // console.log(
    //   "country flag not found for player=" + JSON.stringify(player, null, 2),
    // );
    return player.countryFlag;
  } else {
    return alpha2;
  }
}

function getAlpha2({ alpha3 }: { alpha3: string }): string | undefined {
  switch (alpha3) {
    case "CHI":
      return "CL";
    case "ENG":
      return "GB-ENG";
    case "FIJ":
      return "FJ";
    case "NIR":
      return "GB-NIR";
    case "RSA":
      return "ZA";
    case "DEN":
      return "DK";
    case "GER":
      return "DE";
    case "PHI":
      return "PH";
    case "PUR":
      return "PR";
    case "SCO":
      return "GB-SCT";
    case "SIN":
      return "SG";
    case "NED":
      return "NL";
    case "UAE":
      return "AE";
    case "WAL":
      return "GB-WLS";
    default:
      return undefined;
  }
}

function resolveKnowFlagIssues(player: {
  id: string;
  countryFlag: string;
}): string | undefined {
  switch (player.id) {
    case "29454":
      return "AT";

    case "35986":
    case "46798":
      return "AU";

    case "33293":
      return "BE";

    case "35296":
      return "CN";

    case "33968":
    case "52453":
      return "DK";

    case "29670":
      return "ES";

    case "20396":
    case "28272":
    case "28723":
    case "29954":
    case "34708":
    case "35174":
    case "45194":
    case "45836":
    case "46410":
    case "46504":
    case "46615":
    case "47989":
    case "51003":
    case "55955":
    case "56548":
      return "GB-ENG";

    case "19825":
      return "GB-NIR";

    case "23814":
    case "34364":
    case "52215":
      return "GB-SCT";

    case "25369":
      return "GB-WLS";

    case "48898":
    case "55824":
      return "IE";

    case "39834":
    case "52444":
      return "IT";

    case "30852":
    case "31395":
    case "33689":
    case "47917":
      return "JP";

    case "28243":
    case "35087":
      return "KR";

    case "61560":
    case "66248":
      return "KY";

    case "28300":
    case "45227":
      return "NL";

    case "54480":
      return "PH";

    case "29939":
      return "PY";

    case "21528":
    case "27899":
      return "SE";

    case "29908":
    case "45242":
      return "TW"; // Chinese Taipei

    case "59866":
      return "US";

    case "26328":
    case "35181":
      return "ZA";

    case "34126":
      return "ZW";

    default:
      return undefined;
  }
}

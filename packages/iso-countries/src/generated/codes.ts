
export const COUNTRIES = [
  {
    "__typename": "Country",
    "alpha2": "GB",
    "alpha3": "GBR",
    "ioc": "GBR",
    "name": "United Kingdom",
    "alias": [
      "UK"
    ]
  },
  {
    "__typename": "Subdivision",
    "alpha2": "GB-ENG",
    "alpha3": "ENG",
    "ioc": "ENG",
    "name": "England"
  },
  {
    "__typename": "Subdivision",
    "alpha2": "GB-NIR",
    "alpha3": "NIR",
    "ioc": "NIR",
    "name": "Northern Ireland"
  },
  {
    "__typename": "Subdivision",
    "alpha2": "GB-WLS",
    "alpha3": "WLS",
    "ioc": "WAL",
    "name": "Wales"
  },
  {
    "__typename": "Subdivision",
    "alpha2": "GB-SCT",
    "alpha3": "SCT",
    "ioc": "SCO",
    "name": "Scotland"
  },
  {
    "__typename": "Country",
    "alpha2": "IE",
    "alpha3": "IRL",
    "ioc": "IRL",
    "name": "Ireland"
  },
  {
    "__typename": "Country",
    "alpha2": "TR",
    "alpha3": "TUR",
    "ioc": "TUR",
    "name": "Türkiye",
    "alias": [
      "Turkey"
    ]
  }
] as const

export const INDEX = {
  "alpha2": {
    "GB": 0,
    "GB-ENG": 1,
    "GB-NIR": 2,
    "GB-WLS": 3,
    "GB-SCT": 4,
    "IE": 5,
    "TR": 6
  },
  "alpha3": {
    "GBR": 0,
    "ENG": 1,
    "NIR": 2,
    "WLS": 3,
    "SCT": 4,
    "IRL": 5,
    "TUR": 6
  },
  "ioc": {
    "GBR": 0,
    "ENG": 1,
    "NIR": 2,
    "WAL": 3,
    "SCO": 4,
    "IRL": 5,
    "TUR": 6
  },
  "name": {
    "united kingdom": 0,
    "england": 1,
    "northern ireland": 2,
    "wales": 3,
    "scotland": 4,
    "ireland": 5,
    "turkiye": 6
  },
  "alias": {
    "uk": 0,
    "turkey": 6
  }
} as const

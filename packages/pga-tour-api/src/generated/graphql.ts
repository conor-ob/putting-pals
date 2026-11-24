import { type GraphQLClient, type RequestOptions } from 'graphql-request';
import type { DocumentNode } from 'graphql';
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
/** Internal type. DO NOT USE DIRECTLY. */
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** Internal type. DO NOT USE DIRECTLY. */
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type ApiCupRankMovementDirection =
  | 'CONSTANT'
  | 'DOWN'
  | 'UNKNOWN'
  | 'UP';

export type ApiFieldStatType =
  | 'COURSE_FIT'
  | 'CURRENT_FORM'
  | 'TOURNAMENT_HISTORY';

export type ApiFormatType =
  | 'MATCH_PLAY'
  | 'STABLEFORD'
  | 'STROKE_PLAY'
  | 'TEAM_CUP'
  | 'TEAM_STROKE';

export type ApiLeaderboardFeature =
  | 'HOLE_BY_HOLE'
  | 'ODDS'
  | 'PROBABILITIES'
  | 'SHOT_DETAILS'
  | 'STROKES_GAINED';

export type ApiLeaderboardMessageIcon =
  | 'DELAY'
  | 'NONE'
  | 'WEATHER';

export type ApiLeaderboardMovement =
  | 'CONSTANT'
  | 'DOWN'
  | 'UP';

/**   new enum of possible player icon values, limited to hot streak at first creation */
export type ApiLeaderboardPlayerIcon =
  | 'HOT_STREAK';

export type ApiOddsFeatureType =
  | 'PROBABILITY';

export type ApiOddsSwing =
  | 'CONSTANT'
  | 'DOWN'
  | 'UP';

export type ApiPlatform =
  | 'ANDROID'
  | 'IOS'
  | 'WEB';

export type ApiPlayerState =
  | 'ACTIVE'
  | 'BETWEEN_ROUNDS'
  | 'COMPLETE'
  | 'CUT'
  | 'DISQUALIFIED'
  | 'NOT_STARTED'
  | 'WITHDRAWN';

export type ApiRoundStatus =
  | 'COMPLETE'
  | 'GROUPINGS_OFFICIAL'
  | 'IN_PROGRESS'
  | 'OFFICIAL'
  | 'SUSPENDED'
  | 'UPCOMING';

export type ApiRoundStatusColor =
  | 'BLUE'
  | 'GRAY'
  | 'GREEN'
  | 'RED'
  | 'YELLOW';

export type ApiScheduleDisplay =
  | 'SHOW'
  | 'SHOW_NO_LINK';

export type ApiScorecardTabFeature =
  | 'EQUIPMENT'
  | 'HIGHLIGHTS'
  | 'ODDS'
  | 'SCORECARD'
  | 'STATS';

export type ApiScoringLevel =
  | 'BASIC'
  | 'STATS'
  | 'TOURCAST';

export type ApiTeeTimesFeature =
  | 'GROUPINGS'
  | 'GROUP_TRACKER';

export type ApiTourCode =
  | 'C'
  | 'E'
  | 'H'
  | 'I'
  | 'M'
  | 'R'
  | 'S'
  | 'U'
  | 'Y';

export type ApiTournamentCategory =
  | 'PLAYOFF'
  | 'SIGNATURE';

export type ApiTournamentFeature =
  | 'COURSE_STATS'
  | 'CUP_TEAMS'
  | 'FEDEXFALL_STANDINGS'
  | 'FIELD'
  | 'GROUP_STAGE'
  | 'LEADERBOARD'
  | 'ODDS'
  | 'OVERVIEW'
  | 'PAST_RESULTS'
  | 'RECAP'
  | 'SIGNATURE_STANDINGS'
  | 'STANDINGS'
  | 'TEE_TIMES'
  | 'TOURCAST';

export type ApiTournamentStatus =
  | 'COMPLETED'
  | 'IN_PROGRESS'
  | 'NOT_STARTED';

export type ApiWeatherCondition =
  | 'DAY_CLOUDY'
  | 'DAY_FOG_MIST'
  | 'DAY_MOSTLY_CLOUDY'
  | 'DAY_MOSTLY_SUNNY'
  | 'DAY_PARTLY_CLOUDY'
  | 'DAY_RAINY'
  | 'DAY_SCATTERED_SHOWERS'
  | 'DAY_SNOW'
  | 'DAY_SUNNY'
  | 'DAY_THUNDERSTORMS'
  | 'NIGHT_CLEAR'
  | 'NIGHT_ISOLATED_CLOUDS'
  | 'NIGHT_MOSTLY_CLOUDY'
  | 'NIGHT_PARTLY_CLOUDY';

export type ApiWindDirection =
  | 'EAST'
  | 'NORTH'
  | 'NORTH_EAST'
  | 'NORTH_WEST'
  | 'SOUTH'
  | 'SOUTH_EAST'
  | 'SOUTH_WEST'
  | 'WEST';

export type ApiWinnerIconType =
  | 'BRONZE'
  | 'GOLD'
  | 'SILVER';

export type ApiLeaderboardV3FieldsFragment = {
  __typename: 'LeaderboardV3',
  id: string,
  tournamentId: string,
  leaderboardRoundHeader: string,
  formatType: ApiFormatType,
  timezone: string,
  tourcastURL: string | null,
  tourcastURLWeb: string | null,
  tourcastURI: string | null,
  tournamentStatus: ApiTournamentStatus,
  isPlayoffActive: boolean,
  scorecardEnabled: boolean,
  profileEnabled: boolean,
  subEvent: boolean,
  standingsEnabled: boolean,
  standingsHeader: string,
  hideSov: boolean,
  disableOdds: boolean,
  disableBettingProfileColumn: boolean,
  disableLeaderboard: boolean,
  winner: {
    __typename: 'Winner',
    id: string,
    firstName: string,
    lastName: string,
    totalStrokes: number,
    totalScore: string,
    countryFlag: string,
    countryName: string,
    purse: string | null,
    displayPoints: boolean,
    displayPurse: boolean,
    points: string | null,
    seed: string | null,
    pointsLabel: string | null,
    winnerIcon: {
      __typename: 'WinnerIcon',
      type: ApiWinnerIconType,
      title: string,
      label: string,
      color: string
    } | null,
    roundScores: Array<{
      __typename: 'WinnerRoundScore',
      label: string,
      total: string
    }> | null
  } | null,
  winners: Array<{
    __typename: 'Winner',
    id: string,
    firstName: string,
    lastName: string,
    totalStrokes: number,
    totalScore: string,
    countryFlag: string,
    countryName: string,
    purse: string | null,
    displayPoints: boolean,
    displayPurse: boolean,
    points: string | null,
    seed: string | null,
    pointsLabel: string | null
  }> | null,
  courses: Array<{
    __typename: 'Course',
    id: string,
    courseName: string,
    courseCode: string,
    hostCourse: boolean,
    scoringLevel: ApiScoringLevel,
    enabled: boolean | null,
    features: Array<ApiTeeTimesFeature> | null
  }>,
  messages: Array<{
    __typename: 'LeaderboardMessage',
    messageText: string,
    messageIcon: ApiLeaderboardMessageIcon,
    messageLink: string | null,
    webViewLink: string | null,
    externalLink: boolean | null,
    platforms: Array<ApiPlatform>,
    timing: number | null
  }>,
  rounds: Array<{
    __typename: 'LBRound',
    roundNumber: number,
    displayText: string
  }>,
  leaderboardFeatures: Array<{
    __typename: 'FeatureItem',
    name: string,
    new: boolean,
    tooltipText: string | null,
    tooltipTitle: string | null,
    fieldStatType: ApiFieldStatType | null,
    leaderboardFeatures: ApiLeaderboardFeature | null,
    sponsor: {
      __typename: 'FeatureSponsor',
      sponsorLogo: string,
      sponsorLogoDark: string,
      sponsorText: string,
      sponsorLogoAsset: {
        __typename: 'ImageAsset',
        imageOrg: string,
        imagePath: string,
        assetType: string | null,
        deliveryType: string | null,
        fallbackImage: string | null
      },
      sponsorLogoDarkAsset: {
        __typename: 'ImageAsset',
        imageOrg: string,
        imagePath: string,
        assetType: string | null,
        deliveryType: string | null,
        fallbackImage: string | null
      }
    } | null
  }> | null,
  oddsFeatures: Array<{
    __typename: 'OddsFeature',
    feature: ApiOddsFeatureType,
    name: string
  }>,
  cutLineProbabilities: {
    __typename: 'CutLineInfo',
    projectedCutLine: string,
    probableCutLine: string,
    sponsorName: string | null,
    lastUpdated: number,
    new: boolean | null,
    sponsorLogo: {
      __typename: 'ImageAsset',
      imageOrg: string,
      imagePath: string,
      assetType: string | null,
      deliveryType: string | null,
      fallbackImage: string | null
    } | null,
    possibleCutLines: Array<{
      __typename: 'CutLinePossibility',
      score: string,
      probability: number,
      displayProbability: string
    }>
  } | null,
  bubblePill: {
    __typename: 'BubblePill',
    pillText: string,
    iconLight: {
      __typename: 'ImageAsset',
      imageOrg: string,
      imagePath: string,
      assetType: string | null,
      deliveryType: string | null,
      fallbackImage: string | null
    },
    iconDark: {
      __typename: 'ImageAsset',
      imageOrg: string,
      imagePath: string,
      assetType: string | null,
      deliveryType: string | null,
      fallbackImage: string | null
    }
  } | null
};

export type ApiPlayerRowV3FieldsFragment = {
  __typename: 'PlayerRowV3',
  id: string,
  leaderboardSortOrder: number,
  player: {
    __typename: 'Player',
    id: string,
    firstName: string,
    lastName: string,
    shortName: string,
    displayName: string,
    abbreviations: string,
    abbreviationsAccessibilityText: string,
    amateur: boolean,
    country: string,
    countryFlag: string,
    lineColor: string,
    seed: string | null,
    status: string | null,
    tourBound: boolean | null,
    bettingProfile: string | null,
    playerBioOverrideLink: string | null,
    assets: Array<{
      __typename: 'TourBoundAsset',
      tourBoundLogo: string | null,
      tourBoundLogoDark: string | null
    }> | null
  },
  scoringData: {
    __typename: 'LeaderboardScoringDataV3',
    groupNumber: number,
    currentRound: number,
    backNine: boolean,
    playerState: ApiPlayerState,
    teeTime: number | null,
    totalStrokes: string,
    totalStrokesSort: number | null,
    total: string,
    totalSort: number,
    thru: string,
    thruSort: number,
    score: string,
    scoreSort: number,
    movementDirection: ApiLeaderboardMovement,
    movementAmount: string,
    movementSort: number | null,
    position: string,
    rounds: Array<string>,
    roundDisplaySort: Array<number | null> | null,
    roundHeader: string,
    roundStatus: string,
    courseId: string,
    official: string,
    officialSort: number,
    projected: string,
    projectedSort: number,
    rankingMovement: ApiCupRankMovementDirection,
    rankingMovementAmount: string,
    rankingMovementAmountSort: number,
    rankLogoLight: string | null,
    rankLogoDark: string | null,
    tooltipText: string | null,
    tooltipTitle: string | null,
    oddsToWin: string | null,
    oddsSwing: ApiOddsSwing | null,
    oddsOptionId: string | null,
    oddsSort: number | null,
    hasStoryContent: boolean,
    storyContentRound: number | null,
    storyContentRounds: Array<number>,
    playerIcon: ApiLeaderboardPlayerIcon | null
  }
};

export type ApiInformationRowFieldsFragment = {
  __typename: 'InformationRow',
  id: string,
  leaderboardSortOrder: number,
  displayText: string,
  mobileDisplayText: string,
  sponsorName: string | null
};

export type ApiScheduleTournamentFieldsFragment = {
  __typename: 'ScheduleTournament',
  id: string,
  date: string,
  startDate: number,
  dateAccessibilityText: string,
  tournamentName: string,
  tournamentLogo: string,
  city: string,
  state: string,
  stateCode: string,
  country: string,
  countryCode: string,
  courseName: string,
  champion: string,
  championId: string,
  championEarnings: string | null,
  beautyImage: string | null,
  tournamentStatus: ApiTournamentStatus,
  sortDate: string | null,
  sequenceNumber: number,
  purse: string | null,
  ticketsURL: string | null,
  tourStandingHeading: string | null,
  tourStandingValue: string | null,
  display: ApiScheduleDisplay,
  ticketmasterApiKey: string | null,
  ticketmasterAttractionId: string | null,
  androidTicketmasterApiKey: string | null,
  androidTicketmasterScheme: string | null,
  iosTicketmasterApiKey: string | null,
  ticketsEnabled: boolean,
  tournamentSiteURL: string | null,
  useTournamentSiteURL: boolean,
  tournamentLogoAsset: {
    __typename: 'ImageAsset',
    imageOrg: string,
    imagePath: string,
    assetType: string | null,
    deliveryType: string | null,
    fallbackImage: string | null
  },
  champions: Array<{
    __typename: 'ScheduleChampion',
    displayName: string,
    playerId: string
  }>,
  beautyImageAsset: {
    __typename: 'ImageAsset',
    imageOrg: string,
    imagePath: string,
    assetType: string | null,
    deliveryType: string | null,
    fallbackImage: string | null
  } | null,
  status: {
    __typename: 'ScheduleTournamentStatus',
    roundStatusDisplay: string,
    roundDisplay: string,
    roundStatus: ApiRoundStatus,
    roundStatusColor: ApiRoundStatusColor,
    leaderboardTakeover: boolean
  } | null,
  tournamentCategoryInfo: {
    __typename: 'TournamentCategoryInfo',
    type: ApiTournamentCategory,
    logoLight: string,
    logoDark: string,
    label: string,
    logoLightAsset: {
      __typename: 'ImageAsset',
      imageOrg: string,
      imagePath: string,
      assetType: string | null,
      deliveryType: string | null,
      fallbackImage: string | null
    },
    logoDarkAsset: {
      __typename: 'ImageAsset',
      imageOrg: string,
      imagePath: string,
      assetType: string | null,
      deliveryType: string | null,
      fallbackImage: string | null
    }
  } | null
};

export type ApiScheduleMonthFieldsFragment = {
  __typename: 'ScheduleMonth',
  year: string,
  month: string,
  monthSort: number | null,
  tournaments: Array<{
    __typename: 'ScheduleTournament',
    id: string,
    date: string,
    startDate: number,
    dateAccessibilityText: string,
    tournamentName: string,
    tournamentLogo: string,
    city: string,
    state: string,
    stateCode: string,
    country: string,
    countryCode: string,
    courseName: string,
    champion: string,
    championId: string,
    championEarnings: string | null,
    beautyImage: string | null,
    tournamentStatus: ApiTournamentStatus,
    sortDate: string | null,
    sequenceNumber: number,
    purse: string | null,
    ticketsURL: string | null,
    tourStandingHeading: string | null,
    tourStandingValue: string | null,
    display: ApiScheduleDisplay,
    ticketmasterApiKey: string | null,
    ticketmasterAttractionId: string | null,
    androidTicketmasterApiKey: string | null,
    androidTicketmasterScheme: string | null,
    iosTicketmasterApiKey: string | null,
    ticketsEnabled: boolean,
    tournamentSiteURL: string | null,
    useTournamentSiteURL: boolean,
    tournamentLogoAsset: {
      __typename: 'ImageAsset',
      imageOrg: string,
      imagePath: string,
      assetType: string | null,
      deliveryType: string | null,
      fallbackImage: string | null
    },
    champions: Array<{
      __typename: 'ScheduleChampion',
      displayName: string,
      playerId: string
    }>,
    beautyImageAsset: {
      __typename: 'ImageAsset',
      imageOrg: string,
      imagePath: string,
      assetType: string | null,
      deliveryType: string | null,
      fallbackImage: string | null
    } | null,
    status: {
      __typename: 'ScheduleTournamentStatus',
      roundStatusDisplay: string,
      roundDisplay: string,
      roundStatus: ApiRoundStatus,
      roundStatusColor: ApiRoundStatusColor,
      leaderboardTakeover: boolean
    } | null,
    tournamentCategoryInfo: {
      __typename: 'TournamentCategoryInfo',
      type: ApiTournamentCategory,
      logoLight: string,
      logoDark: string,
      label: string,
      logoLightAsset: {
        __typename: 'ImageAsset',
        imageOrg: string,
        imagePath: string,
        assetType: string | null,
        deliveryType: string | null,
        fallbackImage: string | null
      },
      logoDarkAsset: {
        __typename: 'ImageAsset',
        imageOrg: string,
        imagePath: string,
        assetType: string | null,
        deliveryType: string | null,
        fallbackImage: string | null
      }
    } | null
  }>
};

export type ApiScheduleFieldsFragment = {
  __typename: 'Schedule',
  tour: string,
  seasonYear: string,
  completed: Array<{
    __typename: 'ScheduleMonth',
    year: string,
    month: string,
    monthSort: number | null,
    tournaments: Array<{
      __typename: 'ScheduleTournament',
      id: string,
      date: string,
      startDate: number,
      dateAccessibilityText: string,
      tournamentName: string,
      tournamentLogo: string,
      city: string,
      state: string,
      stateCode: string,
      country: string,
      countryCode: string,
      courseName: string,
      champion: string,
      championId: string,
      championEarnings: string | null,
      beautyImage: string | null,
      tournamentStatus: ApiTournamentStatus,
      sortDate: string | null,
      sequenceNumber: number,
      purse: string | null,
      ticketsURL: string | null,
      tourStandingHeading: string | null,
      tourStandingValue: string | null,
      display: ApiScheduleDisplay,
      ticketmasterApiKey: string | null,
      ticketmasterAttractionId: string | null,
      androidTicketmasterApiKey: string | null,
      androidTicketmasterScheme: string | null,
      iosTicketmasterApiKey: string | null,
      ticketsEnabled: boolean,
      tournamentSiteURL: string | null,
      useTournamentSiteURL: boolean,
      tournamentLogoAsset: {
        __typename: 'ImageAsset',
        imageOrg: string,
        imagePath: string,
        assetType: string | null,
        deliveryType: string | null,
        fallbackImage: string | null
      },
      champions: Array<{
        __typename: 'ScheduleChampion',
        displayName: string,
        playerId: string
      }>,
      beautyImageAsset: {
        __typename: 'ImageAsset',
        imageOrg: string,
        imagePath: string,
        assetType: string | null,
        deliveryType: string | null,
        fallbackImage: string | null
      } | null,
      status: {
        __typename: 'ScheduleTournamentStatus',
        roundStatusDisplay: string,
        roundDisplay: string,
        roundStatus: ApiRoundStatus,
        roundStatusColor: ApiRoundStatusColor,
        leaderboardTakeover: boolean
      } | null,
      tournamentCategoryInfo: {
        __typename: 'TournamentCategoryInfo',
        type: ApiTournamentCategory,
        logoLight: string,
        logoDark: string,
        label: string,
        logoLightAsset: {
          __typename: 'ImageAsset',
          imageOrg: string,
          imagePath: string,
          assetType: string | null,
          deliveryType: string | null,
          fallbackImage: string | null
        },
        logoDarkAsset: {
          __typename: 'ImageAsset',
          imageOrg: string,
          imagePath: string,
          assetType: string | null,
          deliveryType: string | null,
          fallbackImage: string | null
        }
      } | null
    }>
  }>,
  upcoming: Array<{
    __typename: 'ScheduleMonth',
    year: string,
    month: string,
    monthSort: number | null,
    tournaments: Array<{
      __typename: 'ScheduleTournament',
      id: string,
      date: string,
      startDate: number,
      dateAccessibilityText: string,
      tournamentName: string,
      tournamentLogo: string,
      city: string,
      state: string,
      stateCode: string,
      country: string,
      countryCode: string,
      courseName: string,
      champion: string,
      championId: string,
      championEarnings: string | null,
      beautyImage: string | null,
      tournamentStatus: ApiTournamentStatus,
      sortDate: string | null,
      sequenceNumber: number,
      purse: string | null,
      ticketsURL: string | null,
      tourStandingHeading: string | null,
      tourStandingValue: string | null,
      display: ApiScheduleDisplay,
      ticketmasterApiKey: string | null,
      ticketmasterAttractionId: string | null,
      androidTicketmasterApiKey: string | null,
      androidTicketmasterScheme: string | null,
      iosTicketmasterApiKey: string | null,
      ticketsEnabled: boolean,
      tournamentSiteURL: string | null,
      useTournamentSiteURL: boolean,
      tournamentLogoAsset: {
        __typename: 'ImageAsset',
        imageOrg: string,
        imagePath: string,
        assetType: string | null,
        deliveryType: string | null,
        fallbackImage: string | null
      },
      champions: Array<{
        __typename: 'ScheduleChampion',
        displayName: string,
        playerId: string
      }>,
      beautyImageAsset: {
        __typename: 'ImageAsset',
        imageOrg: string,
        imagePath: string,
        assetType: string | null,
        deliveryType: string | null,
        fallbackImage: string | null
      } | null,
      status: {
        __typename: 'ScheduleTournamentStatus',
        roundStatusDisplay: string,
        roundDisplay: string,
        roundStatus: ApiRoundStatus,
        roundStatusColor: ApiRoundStatusColor,
        leaderboardTakeover: boolean
      } | null,
      tournamentCategoryInfo: {
        __typename: 'TournamentCategoryInfo',
        type: ApiTournamentCategory,
        logoLight: string,
        logoDark: string,
        label: string,
        logoLightAsset: {
          __typename: 'ImageAsset',
          imageOrg: string,
          imagePath: string,
          assetType: string | null,
          deliveryType: string | null,
          fallbackImage: string | null
        },
        logoDarkAsset: {
          __typename: 'ImageAsset',
          imageOrg: string,
          imagePath: string,
          assetType: string | null,
          deliveryType: string | null,
          fallbackImage: string | null
        }
      } | null
    }>
  }>,
  filters: Array<{
    __typename: 'ScheduleTournamentFilter',
    type: ApiTournamentCategory,
    name: string
  }> | null
};

export type ApiTournamentFieldsFragment = {
  __typename: 'Tournament',
  id: string,
  tournamentName: string,
  tournamentLogo: Array<string>,
  tournamentLocation: string,
  tournamentStatus: ApiTournamentStatus,
  features: Array<ApiTournamentFeature> | null,
  formatType: ApiFormatType,
  roundStatusDisplay: string,
  roundDisplay: string,
  roundStatus: ApiRoundStatus,
  roundStatusColor: ApiRoundStatusColor,
  leaderboardTakeover: boolean,
  currentRound: number,
  timezone: string,
  seasonYear: string,
  displayDate: string,
  country: string,
  state: string,
  city: string,
  scoredLevel: ApiScoringLevel,
  ticketsURL: string | null,
  tournamentSiteURL: string | null,
  useTournamentSiteURL: boolean,
  pdfUrl: string | null,
  conductedByLabel: string | null,
  conductedByLink: string | null,
  beautyImage: string,
  shouldSubscribe: boolean | null,
  infoPath: string | null,
  infoPathWebview: string | null,
  howItWorks: string | null,
  howItWorksPill: string | null,
  howItWorksWebview: string | null,
  hideRolexClock: boolean,
  hideSov: boolean,
  ticketsEnabled: boolean,
  headshotBaseUrl: string | null,
  disabledScorecardTabs: Array<ApiScorecardTabFeature>,
  tournamentLogoAsset: Array<{
    __typename: 'ImageAsset',
    imageOrg: string,
    imagePath: string,
    assetType: string | null,
    deliveryType: string | null,
    fallbackImage: string | null
  }>,
  events: Array<{
    __typename: 'Event',
    id: string,
    eventName: string,
    leaderboardId: string
  }>,
  courses: Array<{
    __typename: 'Course',
    id: string,
    courseName: string,
    courseCode: string,
    hostCourse: boolean,
    scoringLevel: ApiScoringLevel,
    enabled: boolean | null,
    features: Array<ApiTeeTimesFeature> | null
  }>,
  weather: {
    __typename: 'TournamentWeather',
    logo: string | null,
    logoDark: string | null,
    logoAccessibility: string,
    tempF: string,
    tempC: string,
    condition: ApiWeatherCondition,
    windDirection: ApiWindDirection,
    windSpeedMPH: string,
    windSpeedKPH: string,
    precipitation: string,
    humidity: string,
    logoAsset: {
      __typename: 'ImageAsset',
      imageOrg: string,
      imagePath: string,
      assetType: string | null,
      deliveryType: string | null,
      fallbackImage: string | null
    },
    logoDarkAsset: {
      __typename: 'ImageAsset',
      imageOrg: string,
      imagePath: string,
      assetType: string | null,
      deliveryType: string | null,
      fallbackImage: string | null
    }
  } | null,
  beautyImageAsset: {
    __typename: 'ImageAsset',
    imageOrg: string,
    imagePath: string,
    assetType: string | null,
    deliveryType: string | null,
    fallbackImage: string | null
  },
  rightRailConfig: {
    __typename: 'TournamentRightRailConfig',
    imageUrl: string,
    imageAltText: string,
    buttonLink: string | null,
    buttonText: string | null
  } | null,
  tournamentCategoryInfo: {
    __typename: 'TournamentCategoryInfo',
    type: ApiTournamentCategory,
    logoLight: string,
    logoDark: string,
    label: string,
    logoLightAsset: {
      __typename: 'ImageAsset',
      imageOrg: string,
      imagePath: string,
      assetType: string | null,
      deliveryType: string | null,
      fallbackImage: string | null
    },
    logoDarkAsset: {
      __typename: 'ImageAsset',
      imageOrg: string,
      imagePath: string,
      assetType: string | null,
      deliveryType: string | null,
      fallbackImage: string | null
    }
  } | null
};

export type ApiLeaderboardV3QueryVariables = Exact<{
  leaderboardV3Id: string | number;
}>;


export type ApiLeaderboardV3Query = {
  __typename: 'Query',
  leaderboardV3: {
    __typename: 'LeaderboardV3',
    id: string,
    tournamentId: string,
    leaderboardRoundHeader: string,
    formatType: ApiFormatType,
    timezone: string,
    tourcastURL: string | null,
    tourcastURLWeb: string | null,
    tourcastURI: string | null,
    tournamentStatus: ApiTournamentStatus,
    isPlayoffActive: boolean,
    scorecardEnabled: boolean,
    profileEnabled: boolean,
    subEvent: boolean,
    standingsEnabled: boolean,
    standingsHeader: string,
    hideSov: boolean,
    disableOdds: boolean,
    disableBettingProfileColumn: boolean,
    disableLeaderboard: boolean,
    players: Array<
      | {
        __typename: 'InformationRow',
        id: string,
        leaderboardSortOrder: number,
        displayText: string,
        mobileDisplayText: string,
        sponsorName: string | null
      }
      | {
        __typename: 'PlayerRowV3',
        id: string,
        leaderboardSortOrder: number,
        player: {
          __typename: 'Player',
          id: string,
          firstName: string,
          lastName: string,
          shortName: string,
          displayName: string,
          abbreviations: string,
          abbreviationsAccessibilityText: string,
          amateur: boolean,
          country: string,
          countryFlag: string,
          lineColor: string,
          seed: string | null,
          status: string | null,
          tourBound: boolean | null,
          bettingProfile: string | null,
          playerBioOverrideLink: string | null,
          assets: Array<{
            __typename: 'TourBoundAsset',
            tourBoundLogo: string | null,
            tourBoundLogoDark: string | null
          }> | null
        },
        scoringData: {
          __typename: 'LeaderboardScoringDataV3',
          groupNumber: number,
          currentRound: number,
          backNine: boolean,
          playerState: ApiPlayerState,
          teeTime: number | null,
          totalStrokes: string,
          totalStrokesSort: number | null,
          total: string,
          totalSort: number,
          thru: string,
          thruSort: number,
          score: string,
          scoreSort: number,
          movementDirection: ApiLeaderboardMovement,
          movementAmount: string,
          movementSort: number | null,
          position: string,
          rounds: Array<string>,
          roundDisplaySort: Array<number | null> | null,
          roundHeader: string,
          roundStatus: string,
          courseId: string,
          official: string,
          officialSort: number,
          projected: string,
          projectedSort: number,
          rankingMovement: ApiCupRankMovementDirection,
          rankingMovementAmount: string,
          rankingMovementAmountSort: number,
          rankLogoLight: string | null,
          rankLogoDark: string | null,
          tooltipText: string | null,
          tooltipTitle: string | null,
          oddsToWin: string | null,
          oddsSwing: ApiOddsSwing | null,
          oddsOptionId: string | null,
          oddsSort: number | null,
          hasStoryContent: boolean,
          storyContentRound: number | null,
          storyContentRounds: Array<number>,
          playerIcon: ApiLeaderboardPlayerIcon | null
        }
      }
    >,
    winner: {
      __typename: 'Winner',
      id: string,
      firstName: string,
      lastName: string,
      totalStrokes: number,
      totalScore: string,
      countryFlag: string,
      countryName: string,
      purse: string | null,
      displayPoints: boolean,
      displayPurse: boolean,
      points: string | null,
      seed: string | null,
      pointsLabel: string | null,
      winnerIcon: {
        __typename: 'WinnerIcon',
        type: ApiWinnerIconType,
        title: string,
        label: string,
        color: string
      } | null,
      roundScores: Array<{
        __typename: 'WinnerRoundScore',
        label: string,
        total: string
      }> | null
    } | null,
    winners: Array<{
      __typename: 'Winner',
      id: string,
      firstName: string,
      lastName: string,
      totalStrokes: number,
      totalScore: string,
      countryFlag: string,
      countryName: string,
      purse: string | null,
      displayPoints: boolean,
      displayPurse: boolean,
      points: string | null,
      seed: string | null,
      pointsLabel: string | null
    }> | null,
    courses: Array<{
      __typename: 'Course',
      id: string,
      courseName: string,
      courseCode: string,
      hostCourse: boolean,
      scoringLevel: ApiScoringLevel,
      enabled: boolean | null,
      features: Array<ApiTeeTimesFeature> | null
    }>,
    messages: Array<{
      __typename: 'LeaderboardMessage',
      messageText: string,
      messageIcon: ApiLeaderboardMessageIcon,
      messageLink: string | null,
      webViewLink: string | null,
      externalLink: boolean | null,
      platforms: Array<ApiPlatform>,
      timing: number | null
    }>,
    rounds: Array<{
      __typename: 'LBRound',
      roundNumber: number,
      displayText: string
    }>,
    leaderboardFeatures: Array<{
      __typename: 'FeatureItem',
      name: string,
      new: boolean,
      tooltipText: string | null,
      tooltipTitle: string | null,
      fieldStatType: ApiFieldStatType | null,
      leaderboardFeatures: ApiLeaderboardFeature | null,
      sponsor: {
        __typename: 'FeatureSponsor',
        sponsorLogo: string,
        sponsorLogoDark: string,
        sponsorText: string,
        sponsorLogoAsset: {
          __typename: 'ImageAsset',
          imageOrg: string,
          imagePath: string,
          assetType: string | null,
          deliveryType: string | null,
          fallbackImage: string | null
        },
        sponsorLogoDarkAsset: {
          __typename: 'ImageAsset',
          imageOrg: string,
          imagePath: string,
          assetType: string | null,
          deliveryType: string | null,
          fallbackImage: string | null
        }
      } | null
    }> | null,
    oddsFeatures: Array<{
      __typename: 'OddsFeature',
      feature: ApiOddsFeatureType,
      name: string
    }>,
    cutLineProbabilities: {
      __typename: 'CutLineInfo',
      projectedCutLine: string,
      probableCutLine: string,
      sponsorName: string | null,
      lastUpdated: number,
      new: boolean | null,
      sponsorLogo: {
        __typename: 'ImageAsset',
        imageOrg: string,
        imagePath: string,
        assetType: string | null,
        deliveryType: string | null,
        fallbackImage: string | null
      } | null,
      possibleCutLines: Array<{
        __typename: 'CutLinePossibility',
        score: string,
        probability: number,
        displayProbability: string
      }>
    } | null,
    bubblePill: {
      __typename: 'BubblePill',
      pillText: string,
      iconLight: {
        __typename: 'ImageAsset',
        imageOrg: string,
        imagePath: string,
        assetType: string | null,
        deliveryType: string | null,
        fallbackImage: string | null
      },
      iconDark: {
        __typename: 'ImageAsset',
        imageOrg: string,
        imagePath: string,
        assetType: string | null,
        deliveryType: string | null,
        fallbackImage: string | null
      }
    } | null
  }
};

export type ApiScheduleYearsQueryVariables = Exact<{
  tourCode: ApiTourCode;
}>;


export type ApiScheduleYearsQuery = {
  __typename: 'Query',
  scheduleYears: {
    __typename: 'ScheduleYears',
    years: Array<{
      __typename: 'ScheduleYear',
      default: boolean,
      displayValue: string,
      queryValue: string
    }>
  }
};

export type ApiScheduleQueryVariables = Exact<{
  tourCode: string;
  year?: string | null | undefined;
}>;


export type ApiScheduleQuery = {
  __typename: 'Query',
  schedule: {
    __typename: 'Schedule',
    tour: string,
    seasonYear: string,
    completed: Array<{
      __typename: 'ScheduleMonth',
      year: string,
      month: string,
      monthSort: number | null,
      tournaments: Array<{
        __typename: 'ScheduleTournament',
        id: string,
        date: string,
        startDate: number,
        dateAccessibilityText: string,
        tournamentName: string,
        tournamentLogo: string,
        city: string,
        state: string,
        stateCode: string,
        country: string,
        countryCode: string,
        courseName: string,
        champion: string,
        championId: string,
        championEarnings: string | null,
        beautyImage: string | null,
        tournamentStatus: ApiTournamentStatus,
        sortDate: string | null,
        sequenceNumber: number,
        purse: string | null,
        ticketsURL: string | null,
        tourStandingHeading: string | null,
        tourStandingValue: string | null,
        display: ApiScheduleDisplay,
        ticketmasterApiKey: string | null,
        ticketmasterAttractionId: string | null,
        androidTicketmasterApiKey: string | null,
        androidTicketmasterScheme: string | null,
        iosTicketmasterApiKey: string | null,
        ticketsEnabled: boolean,
        tournamentSiteURL: string | null,
        useTournamentSiteURL: boolean,
        tournamentLogoAsset: {
          __typename: 'ImageAsset',
          imageOrg: string,
          imagePath: string,
          assetType: string | null,
          deliveryType: string | null,
          fallbackImage: string | null
        },
        champions: Array<{
          __typename: 'ScheduleChampion',
          displayName: string,
          playerId: string
        }>,
        beautyImageAsset: {
          __typename: 'ImageAsset',
          imageOrg: string,
          imagePath: string,
          assetType: string | null,
          deliveryType: string | null,
          fallbackImage: string | null
        } | null,
        status: {
          __typename: 'ScheduleTournamentStatus',
          roundStatusDisplay: string,
          roundDisplay: string,
          roundStatus: ApiRoundStatus,
          roundStatusColor: ApiRoundStatusColor,
          leaderboardTakeover: boolean
        } | null,
        tournamentCategoryInfo: {
          __typename: 'TournamentCategoryInfo',
          type: ApiTournamentCategory,
          logoLight: string,
          logoDark: string,
          label: string,
          logoLightAsset: {
            __typename: 'ImageAsset',
            imageOrg: string,
            imagePath: string,
            assetType: string | null,
            deliveryType: string | null,
            fallbackImage: string | null
          },
          logoDarkAsset: {
            __typename: 'ImageAsset',
            imageOrg: string,
            imagePath: string,
            assetType: string | null,
            deliveryType: string | null,
            fallbackImage: string | null
          }
        } | null
      }>
    }>,
    upcoming: Array<{
      __typename: 'ScheduleMonth',
      year: string,
      month: string,
      monthSort: number | null,
      tournaments: Array<{
        __typename: 'ScheduleTournament',
        id: string,
        date: string,
        startDate: number,
        dateAccessibilityText: string,
        tournamentName: string,
        tournamentLogo: string,
        city: string,
        state: string,
        stateCode: string,
        country: string,
        countryCode: string,
        courseName: string,
        champion: string,
        championId: string,
        championEarnings: string | null,
        beautyImage: string | null,
        tournamentStatus: ApiTournamentStatus,
        sortDate: string | null,
        sequenceNumber: number,
        purse: string | null,
        ticketsURL: string | null,
        tourStandingHeading: string | null,
        tourStandingValue: string | null,
        display: ApiScheduleDisplay,
        ticketmasterApiKey: string | null,
        ticketmasterAttractionId: string | null,
        androidTicketmasterApiKey: string | null,
        androidTicketmasterScheme: string | null,
        iosTicketmasterApiKey: string | null,
        ticketsEnabled: boolean,
        tournamentSiteURL: string | null,
        useTournamentSiteURL: boolean,
        tournamentLogoAsset: {
          __typename: 'ImageAsset',
          imageOrg: string,
          imagePath: string,
          assetType: string | null,
          deliveryType: string | null,
          fallbackImage: string | null
        },
        champions: Array<{
          __typename: 'ScheduleChampion',
          displayName: string,
          playerId: string
        }>,
        beautyImageAsset: {
          __typename: 'ImageAsset',
          imageOrg: string,
          imagePath: string,
          assetType: string | null,
          deliveryType: string | null,
          fallbackImage: string | null
        } | null,
        status: {
          __typename: 'ScheduleTournamentStatus',
          roundStatusDisplay: string,
          roundDisplay: string,
          roundStatus: ApiRoundStatus,
          roundStatusColor: ApiRoundStatusColor,
          leaderboardTakeover: boolean
        } | null,
        tournamentCategoryInfo: {
          __typename: 'TournamentCategoryInfo',
          type: ApiTournamentCategory,
          logoLight: string,
          logoDark: string,
          label: string,
          logoLightAsset: {
            __typename: 'ImageAsset',
            imageOrg: string,
            imagePath: string,
            assetType: string | null,
            deliveryType: string | null,
            fallbackImage: string | null
          },
          logoDarkAsset: {
            __typename: 'ImageAsset',
            imageOrg: string,
            imagePath: string,
            assetType: string | null,
            deliveryType: string | null,
            fallbackImage: string | null
          }
        } | null
      }>
    }>,
    filters: Array<{
      __typename: 'ScheduleTournamentFilter',
      type: ApiTournamentCategory,
      name: string
    }> | null
  }
};

export type ApiCompleteScheduleQueryVariables = Exact<{
  tourCode: ApiTourCode;
}>;


export type ApiCompleteScheduleQuery = {
  __typename: 'Query',
  completeSchedule: Array<{
    __typename: 'Schedule',
    tour: string,
    seasonYear: string,
    completed: Array<{
      __typename: 'ScheduleMonth',
      year: string,
      month: string,
      monthSort: number | null,
      tournaments: Array<{
        __typename: 'ScheduleTournament',
        id: string,
        date: string,
        startDate: number,
        dateAccessibilityText: string,
        tournamentName: string,
        tournamentLogo: string,
        city: string,
        state: string,
        stateCode: string,
        country: string,
        countryCode: string,
        courseName: string,
        champion: string,
        championId: string,
        championEarnings: string | null,
        beautyImage: string | null,
        tournamentStatus: ApiTournamentStatus,
        sortDate: string | null,
        sequenceNumber: number,
        purse: string | null,
        ticketsURL: string | null,
        tourStandingHeading: string | null,
        tourStandingValue: string | null,
        display: ApiScheduleDisplay,
        ticketmasterApiKey: string | null,
        ticketmasterAttractionId: string | null,
        androidTicketmasterApiKey: string | null,
        androidTicketmasterScheme: string | null,
        iosTicketmasterApiKey: string | null,
        ticketsEnabled: boolean,
        tournamentSiteURL: string | null,
        useTournamentSiteURL: boolean,
        tournamentLogoAsset: {
          __typename: 'ImageAsset',
          imageOrg: string,
          imagePath: string,
          assetType: string | null,
          deliveryType: string | null,
          fallbackImage: string | null
        },
        champions: Array<{
          __typename: 'ScheduleChampion',
          displayName: string,
          playerId: string
        }>,
        beautyImageAsset: {
          __typename: 'ImageAsset',
          imageOrg: string,
          imagePath: string,
          assetType: string | null,
          deliveryType: string | null,
          fallbackImage: string | null
        } | null,
        status: {
          __typename: 'ScheduleTournamentStatus',
          roundStatusDisplay: string,
          roundDisplay: string,
          roundStatus: ApiRoundStatus,
          roundStatusColor: ApiRoundStatusColor,
          leaderboardTakeover: boolean
        } | null,
        tournamentCategoryInfo: {
          __typename: 'TournamentCategoryInfo',
          type: ApiTournamentCategory,
          logoLight: string,
          logoDark: string,
          label: string,
          logoLightAsset: {
            __typename: 'ImageAsset',
            imageOrg: string,
            imagePath: string,
            assetType: string | null,
            deliveryType: string | null,
            fallbackImage: string | null
          },
          logoDarkAsset: {
            __typename: 'ImageAsset',
            imageOrg: string,
            imagePath: string,
            assetType: string | null,
            deliveryType: string | null,
            fallbackImage: string | null
          }
        } | null
      }>
    }>,
    upcoming: Array<{
      __typename: 'ScheduleMonth',
      year: string,
      month: string,
      monthSort: number | null,
      tournaments: Array<{
        __typename: 'ScheduleTournament',
        id: string,
        date: string,
        startDate: number,
        dateAccessibilityText: string,
        tournamentName: string,
        tournamentLogo: string,
        city: string,
        state: string,
        stateCode: string,
        country: string,
        countryCode: string,
        courseName: string,
        champion: string,
        championId: string,
        championEarnings: string | null,
        beautyImage: string | null,
        tournamentStatus: ApiTournamentStatus,
        sortDate: string | null,
        sequenceNumber: number,
        purse: string | null,
        ticketsURL: string | null,
        tourStandingHeading: string | null,
        tourStandingValue: string | null,
        display: ApiScheduleDisplay,
        ticketmasterApiKey: string | null,
        ticketmasterAttractionId: string | null,
        androidTicketmasterApiKey: string | null,
        androidTicketmasterScheme: string | null,
        iosTicketmasterApiKey: string | null,
        ticketsEnabled: boolean,
        tournamentSiteURL: string | null,
        useTournamentSiteURL: boolean,
        tournamentLogoAsset: {
          __typename: 'ImageAsset',
          imageOrg: string,
          imagePath: string,
          assetType: string | null,
          deliveryType: string | null,
          fallbackImage: string | null
        },
        champions: Array<{
          __typename: 'ScheduleChampion',
          displayName: string,
          playerId: string
        }>,
        beautyImageAsset: {
          __typename: 'ImageAsset',
          imageOrg: string,
          imagePath: string,
          assetType: string | null,
          deliveryType: string | null,
          fallbackImage: string | null
        } | null,
        status: {
          __typename: 'ScheduleTournamentStatus',
          roundStatusDisplay: string,
          roundDisplay: string,
          roundStatus: ApiRoundStatus,
          roundStatusColor: ApiRoundStatusColor,
          leaderboardTakeover: boolean
        } | null,
        tournamentCategoryInfo: {
          __typename: 'TournamentCategoryInfo',
          type: ApiTournamentCategory,
          logoLight: string,
          logoDark: string,
          label: string,
          logoLightAsset: {
            __typename: 'ImageAsset',
            imageOrg: string,
            imagePath: string,
            assetType: string | null,
            deliveryType: string | null,
            fallbackImage: string | null
          },
          logoDarkAsset: {
            __typename: 'ImageAsset',
            imageOrg: string,
            imagePath: string,
            assetType: string | null,
            deliveryType: string | null,
            fallbackImage: string | null
          }
        } | null
      }>
    }>,
    filters: Array<{
      __typename: 'ScheduleTournamentFilter',
      type: ApiTournamentCategory,
      name: string
    }> | null
  }>
};

export type ApiUpcomingScheduleQueryVariables = Exact<{
  tourCode: string;
}>;


export type ApiUpcomingScheduleQuery = {
  __typename: 'Query',
  upcomingSchedule: {
    __typename: 'ScheduleUpcoming',
    id: string,
    filters: Array<{
      __typename: 'ScheduleTournamentFilter',
      type: ApiTournamentCategory,
      name: string
    }> | null,
    tournaments: Array<{
      __typename: 'ScheduleTournament',
      id: string,
      date: string,
      startDate: number,
      dateAccessibilityText: string,
      tournamentName: string,
      tournamentLogo: string,
      city: string,
      state: string,
      stateCode: string,
      country: string,
      countryCode: string,
      courseName: string,
      champion: string,
      championId: string,
      championEarnings: string | null,
      beautyImage: string | null,
      tournamentStatus: ApiTournamentStatus,
      sortDate: string | null,
      sequenceNumber: number,
      purse: string | null,
      ticketsURL: string | null,
      tourStandingHeading: string | null,
      tourStandingValue: string | null,
      display: ApiScheduleDisplay,
      ticketmasterApiKey: string | null,
      ticketmasterAttractionId: string | null,
      androidTicketmasterApiKey: string | null,
      androidTicketmasterScheme: string | null,
      iosTicketmasterApiKey: string | null,
      ticketsEnabled: boolean,
      tournamentSiteURL: string | null,
      useTournamentSiteURL: boolean,
      tournamentLogoAsset: {
        __typename: 'ImageAsset',
        imageOrg: string,
        imagePath: string,
        assetType: string | null,
        deliveryType: string | null,
        fallbackImage: string | null
      },
      champions: Array<{
        __typename: 'ScheduleChampion',
        displayName: string,
        playerId: string
      }>,
      beautyImageAsset: {
        __typename: 'ImageAsset',
        imageOrg: string,
        imagePath: string,
        assetType: string | null,
        deliveryType: string | null,
        fallbackImage: string | null
      } | null,
      status: {
        __typename: 'ScheduleTournamentStatus',
        roundStatusDisplay: string,
        roundDisplay: string,
        roundStatus: ApiRoundStatus,
        roundStatusColor: ApiRoundStatusColor,
        leaderboardTakeover: boolean
      } | null,
      tournamentCategoryInfo: {
        __typename: 'TournamentCategoryInfo',
        type: ApiTournamentCategory,
        logoLight: string,
        logoDark: string,
        label: string,
        logoLightAsset: {
          __typename: 'ImageAsset',
          imageOrg: string,
          imagePath: string,
          assetType: string | null,
          deliveryType: string | null,
          fallbackImage: string | null
        },
        logoDarkAsset: {
          __typename: 'ImageAsset',
          imageOrg: string,
          imagePath: string,
          assetType: string | null,
          deliveryType: string | null,
          fallbackImage: string | null
        }
      } | null
    }>
  }
};

export type ApiTournamentsQueryVariables = Exact<{
  ids?: Array<string | number> | string | number | null | undefined;
}>;


export type ApiTournamentsQuery = {
  __typename: 'Query',
  tournaments: Array<{
    __typename: 'Tournament',
    id: string,
    tournamentName: string,
    tournamentLogo: Array<string>,
    tournamentLocation: string,
    tournamentStatus: ApiTournamentStatus,
    features: Array<ApiTournamentFeature> | null,
    formatType: ApiFormatType,
    roundStatusDisplay: string,
    roundDisplay: string,
    roundStatus: ApiRoundStatus,
    roundStatusColor: ApiRoundStatusColor,
    leaderboardTakeover: boolean,
    currentRound: number,
    timezone: string,
    seasonYear: string,
    displayDate: string,
    country: string,
    state: string,
    city: string,
    scoredLevel: ApiScoringLevel,
    ticketsURL: string | null,
    tournamentSiteURL: string | null,
    useTournamentSiteURL: boolean,
    pdfUrl: string | null,
    conductedByLabel: string | null,
    conductedByLink: string | null,
    beautyImage: string,
    shouldSubscribe: boolean | null,
    infoPath: string | null,
    infoPathWebview: string | null,
    howItWorks: string | null,
    howItWorksPill: string | null,
    howItWorksWebview: string | null,
    hideRolexClock: boolean,
    hideSov: boolean,
    ticketsEnabled: boolean,
    headshotBaseUrl: string | null,
    disabledScorecardTabs: Array<ApiScorecardTabFeature>,
    tournamentLogoAsset: Array<{
      __typename: 'ImageAsset',
      imageOrg: string,
      imagePath: string,
      assetType: string | null,
      deliveryType: string | null,
      fallbackImage: string | null
    }>,
    events: Array<{
      __typename: 'Event',
      id: string,
      eventName: string,
      leaderboardId: string
    }>,
    courses: Array<{
      __typename: 'Course',
      id: string,
      courseName: string,
      courseCode: string,
      hostCourse: boolean,
      scoringLevel: ApiScoringLevel,
      enabled: boolean | null,
      features: Array<ApiTeeTimesFeature> | null
    }>,
    weather: {
      __typename: 'TournamentWeather',
      logo: string | null,
      logoDark: string | null,
      logoAccessibility: string,
      tempF: string,
      tempC: string,
      condition: ApiWeatherCondition,
      windDirection: ApiWindDirection,
      windSpeedMPH: string,
      windSpeedKPH: string,
      precipitation: string,
      humidity: string,
      logoAsset: {
        __typename: 'ImageAsset',
        imageOrg: string,
        imagePath: string,
        assetType: string | null,
        deliveryType: string | null,
        fallbackImage: string | null
      },
      logoDarkAsset: {
        __typename: 'ImageAsset',
        imageOrg: string,
        imagePath: string,
        assetType: string | null,
        deliveryType: string | null,
        fallbackImage: string | null
      }
    } | null,
    beautyImageAsset: {
      __typename: 'ImageAsset',
      imageOrg: string,
      imagePath: string,
      assetType: string | null,
      deliveryType: string | null,
      fallbackImage: string | null
    },
    rightRailConfig: {
      __typename: 'TournamentRightRailConfig',
      imageUrl: string,
      imageAltText: string,
      buttonLink: string | null,
      buttonText: string | null
    } | null,
    tournamentCategoryInfo: {
      __typename: 'TournamentCategoryInfo',
      type: ApiTournamentCategory,
      logoLight: string,
      logoDark: string,
      label: string,
      logoLightAsset: {
        __typename: 'ImageAsset',
        imageOrg: string,
        imagePath: string,
        assetType: string | null,
        deliveryType: string | null,
        fallbackImage: string | null
      },
      logoDarkAsset: {
        __typename: 'ImageAsset',
        imageOrg: string,
        imagePath: string,
        assetType: string | null,
        deliveryType: string | null,
        fallbackImage: string | null
      }
    } | null
  }>
};

export const ApiLeaderboardV3FieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LeaderboardV3Fields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LeaderboardV3"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"tournamentId"}},{"kind":"Field","name":{"kind":"Name","value":"leaderboardRoundHeader"}},{"kind":"Field","name":{"kind":"Name","value":"formatType"}},{"kind":"Field","name":{"kind":"Name","value":"timezone"}},{"kind":"Field","name":{"kind":"Name","value":"winner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"totalStrokes"}},{"kind":"Field","name":{"kind":"Name","value":"totalScore"}},{"kind":"Field","name":{"kind":"Name","value":"countryFlag"}},{"kind":"Field","name":{"kind":"Name","value":"countryName"}},{"kind":"Field","name":{"kind":"Name","value":"purse"}},{"kind":"Field","name":{"kind":"Name","value":"displayPoints"}},{"kind":"Field","name":{"kind":"Name","value":"displayPurse"}},{"kind":"Field","name":{"kind":"Name","value":"points"}},{"kind":"Field","name":{"kind":"Name","value":"seed"}},{"kind":"Field","name":{"kind":"Name","value":"pointsLabel"}},{"kind":"Field","name":{"kind":"Name","value":"winnerIcon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"roundScores"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"winners"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"totalStrokes"}},{"kind":"Field","name":{"kind":"Name","value":"totalScore"}},{"kind":"Field","name":{"kind":"Name","value":"countryFlag"}},{"kind":"Field","name":{"kind":"Name","value":"countryName"}},{"kind":"Field","name":{"kind":"Name","value":"purse"}},{"kind":"Field","name":{"kind":"Name","value":"displayPoints"}},{"kind":"Field","name":{"kind":"Name","value":"displayPurse"}},{"kind":"Field","name":{"kind":"Name","value":"points"}},{"kind":"Field","name":{"kind":"Name","value":"seed"}},{"kind":"Field","name":{"kind":"Name","value":"pointsLabel"}}]}},{"kind":"Field","name":{"kind":"Name","value":"courses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"courseName"}},{"kind":"Field","name":{"kind":"Name","value":"courseCode"}},{"kind":"Field","name":{"kind":"Name","value":"hostCourse"}},{"kind":"Field","name":{"kind":"Name","value":"scoringLevel"}},{"kind":"Field","name":{"kind":"Name","value":"enabled"}},{"kind":"Field","name":{"kind":"Name","value":"features"}}]}},{"kind":"Field","name":{"kind":"Name","value":"messages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"messageText"}},{"kind":"Field","name":{"kind":"Name","value":"messageIcon"}},{"kind":"Field","name":{"kind":"Name","value":"messageLink"}},{"kind":"Field","name":{"kind":"Name","value":"webViewLink"}},{"kind":"Field","name":{"kind":"Name","value":"externalLink"}},{"kind":"Field","name":{"kind":"Name","value":"platforms"}},{"kind":"Field","name":{"kind":"Name","value":"timing"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tourcastURL"}},{"kind":"Field","name":{"kind":"Name","value":"tourcastURLWeb"}},{"kind":"Field","name":{"kind":"Name","value":"tourcastURI"}},{"kind":"Field","name":{"kind":"Name","value":"tournamentStatus"}},{"kind":"Field","name":{"kind":"Name","value":"rounds"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"roundNumber"}},{"kind":"Field","name":{"kind":"Name","value":"displayText"}}]}},{"kind":"Field","name":{"kind":"Name","value":"isPlayoffActive"}},{"kind":"Field","name":{"kind":"Name","value":"scorecardEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"profileEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"subEvent"}},{"kind":"Field","name":{"kind":"Name","value":"leaderboardFeatures"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"new"}},{"kind":"Field","name":{"kind":"Name","value":"tooltipText"}},{"kind":"Field","name":{"kind":"Name","value":"tooltipTitle"}},{"kind":"Field","name":{"kind":"Name","value":"fieldStatType"}},{"kind":"Field","name":{"kind":"Name","value":"leaderboardFeatures"}},{"kind":"Field","name":{"kind":"Name","value":"sponsor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"sponsorLogo"}},{"kind":"Field","name":{"kind":"Name","value":"sponsorLogoAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"imageOrg"}},{"kind":"Field","name":{"kind":"Name","value":"imagePath"}},{"kind":"Field","name":{"kind":"Name","value":"assetType"}},{"kind":"Field","name":{"kind":"Name","value":"deliveryType"}},{"kind":"Field","name":{"kind":"Name","value":"fallbackImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"sponsorLogoDark"}},{"kind":"Field","name":{"kind":"Name","value":"sponsorLogoDarkAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"imageOrg"}},{"kind":"Field","name":{"kind":"Name","value":"imagePath"}},{"kind":"Field","name":{"kind":"Name","value":"assetType"}},{"kind":"Field","name":{"kind":"Name","value":"deliveryType"}},{"kind":"Field","name":{"kind":"Name","value":"fallbackImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"sponsorText"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"standingsEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"standingsHeader"}},{"kind":"Field","name":{"kind":"Name","value":"hideSov"}},{"kind":"Field","name":{"kind":"Name","value":"disableOdds"}},{"kind":"Field","name":{"kind":"Name","value":"oddsFeatures"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"feature"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"disableBettingProfileColumn"}},{"kind":"Field","name":{"kind":"Name","value":"cutLineProbabilities"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"projectedCutLine"}},{"kind":"Field","name":{"kind":"Name","value":"probableCutLine"}},{"kind":"Field","name":{"kind":"Name","value":"sponsorLogo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"imageOrg"}},{"kind":"Field","name":{"kind":"Name","value":"imagePath"}},{"kind":"Field","name":{"kind":"Name","value":"assetType"}},{"kind":"Field","name":{"kind":"Name","value":"deliveryType"}},{"kind":"Field","name":{"kind":"Name","value":"fallbackImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"sponsorName"}},{"kind":"Field","name":{"kind":"Name","value":"lastUpdated"}},{"kind":"Field","name":{"kind":"Name","value":"possibleCutLines"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"probability"}},{"kind":"Field","name":{"kind":"Name","value":"displayProbability"}}]}},{"kind":"Field","name":{"kind":"Name","value":"new"}}]}},{"kind":"Field","name":{"kind":"Name","value":"disableLeaderboard"}},{"kind":"Field","name":{"kind":"Name","value":"bubblePill"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iconLight"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"imageOrg"}},{"kind":"Field","name":{"kind":"Name","value":"imagePath"}},{"kind":"Field","name":{"kind":"Name","value":"assetType"}},{"kind":"Field","name":{"kind":"Name","value":"deliveryType"}},{"kind":"Field","name":{"kind":"Name","value":"fallbackImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"iconDark"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"imageOrg"}},{"kind":"Field","name":{"kind":"Name","value":"imagePath"}},{"kind":"Field","name":{"kind":"Name","value":"assetType"}},{"kind":"Field","name":{"kind":"Name","value":"deliveryType"}},{"kind":"Field","name":{"kind":"Name","value":"fallbackImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pillText"}}]}}]}}]} as unknown as DocumentNode;
export const ApiPlayerRowV3FieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PlayerRowV3Fields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlayerRowV3"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"leaderboardSortOrder"}},{"kind":"Field","name":{"kind":"Name","value":"player"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"shortName"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"abbreviations"}},{"kind":"Field","name":{"kind":"Name","value":"abbreviationsAccessibilityText"}},{"kind":"Field","name":{"kind":"Name","value":"amateur"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"countryFlag"}},{"kind":"Field","name":{"kind":"Name","value":"lineColor"}},{"kind":"Field","name":{"kind":"Name","value":"seed"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"tourBound"}},{"kind":"Field","name":{"kind":"Name","value":"assets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TourBoundAsset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"tourBoundLogo"}},{"kind":"Field","name":{"kind":"Name","value":"tourBoundLogoDark"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"bettingProfile"}},{"kind":"Field","name":{"kind":"Name","value":"playerBioOverrideLink"}}]}},{"kind":"Field","name":{"kind":"Name","value":"scoringData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"groupNumber"}},{"kind":"Field","name":{"kind":"Name","value":"currentRound"}},{"kind":"Field","name":{"kind":"Name","value":"backNine"}},{"kind":"Field","name":{"kind":"Name","value":"playerState"}},{"kind":"Field","name":{"kind":"Name","value":"teeTime"}},{"kind":"Field","name":{"kind":"Name","value":"totalStrokes"}},{"kind":"Field","name":{"kind":"Name","value":"totalStrokesSort"}},{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"totalSort"}},{"kind":"Field","name":{"kind":"Name","value":"thru"}},{"kind":"Field","name":{"kind":"Name","value":"thruSort"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"scoreSort"}},{"kind":"Field","name":{"kind":"Name","value":"movementDirection"}},{"kind":"Field","name":{"kind":"Name","value":"movementAmount"}},{"kind":"Field","name":{"kind":"Name","value":"movementSort"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"rounds"}},{"kind":"Field","name":{"kind":"Name","value":"roundDisplaySort"}},{"kind":"Field","name":{"kind":"Name","value":"roundHeader"}},{"kind":"Field","name":{"kind":"Name","value":"roundStatus"}},{"kind":"Field","name":{"kind":"Name","value":"courseId"}},{"kind":"Field","name":{"kind":"Name","value":"official"}},{"kind":"Field","name":{"kind":"Name","value":"officialSort"}},{"kind":"Field","name":{"kind":"Name","value":"projected"}},{"kind":"Field","name":{"kind":"Name","value":"projectedSort"}},{"kind":"Field","name":{"kind":"Name","value":"rankingMovement"}},{"kind":"Field","name":{"kind":"Name","value":"rankingMovementAmount"}},{"kind":"Field","name":{"kind":"Name","value":"rankingMovementAmountSort"}},{"kind":"Field","name":{"kind":"Name","value":"rankLogoLight"}},{"kind":"Field","name":{"kind":"Name","value":"rankLogoDark"}},{"kind":"Field","name":{"kind":"Name","value":"tooltipText"}},{"kind":"Field","name":{"kind":"Name","value":"tooltipTitle"}},{"kind":"Field","name":{"kind":"Name","value":"oddsToWin"}},{"kind":"Field","name":{"kind":"Name","value":"oddsSwing"}},{"kind":"Field","name":{"kind":"Name","value":"oddsOptionId"}},{"kind":"Field","name":{"kind":"Name","value":"oddsSort"}},{"kind":"Field","name":{"kind":"Name","value":"hasStoryContent"}},{"kind":"Field","name":{"kind":"Name","value":"storyContentRound"}},{"kind":"Field","name":{"kind":"Name","value":"storyContentRounds"}},{"kind":"Field","name":{"kind":"Name","value":"playerIcon"}}]}}]}}]} as unknown as DocumentNode;
export const ApiInformationRowFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"InformationRowFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"InformationRow"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"leaderboardSortOrder"}},{"kind":"Field","name":{"kind":"Name","value":"displayText"}},{"kind":"Field","name":{"kind":"Name","value":"mobileDisplayText"}},{"kind":"Field","name":{"kind":"Name","value":"sponsorName"}}]}}]} as unknown as DocumentNode;
export const ApiScheduleTournamentFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ScheduleTournamentFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ScheduleTournament"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"dateAccessibilityText"}},{"kind":"Field","name":{"kind":"Name","value":"tournamentName"}},{"kind":"Field","name":{"kind":"Name","value":"tournamentLogo"}},{"kind":"Field","name":{"kind":"Name","value":"tournamentLogoAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"imageOrg"}},{"kind":"Field","name":{"kind":"Name","value":"imagePath"}},{"kind":"Field","name":{"kind":"Name","value":"assetType"}},{"kind":"Field","name":{"kind":"Name","value":"deliveryType"}},{"kind":"Field","name":{"kind":"Name","value":"fallbackImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"stateCode"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"countryCode"}},{"kind":"Field","name":{"kind":"Name","value":"courseName"}},{"kind":"Field","name":{"kind":"Name","value":"champion"}},{"kind":"Field","name":{"kind":"Name","value":"championId"}},{"kind":"Field","name":{"kind":"Name","value":"champions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"playerId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"championEarnings"}},{"kind":"Field","name":{"kind":"Name","value":"beautyImage"}},{"kind":"Field","name":{"kind":"Name","value":"beautyImageAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"imageOrg"}},{"kind":"Field","name":{"kind":"Name","value":"imagePath"}},{"kind":"Field","name":{"kind":"Name","value":"assetType"}},{"kind":"Field","name":{"kind":"Name","value":"deliveryType"}},{"kind":"Field","name":{"kind":"Name","value":"fallbackImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"roundStatusDisplay"}},{"kind":"Field","name":{"kind":"Name","value":"roundDisplay"}},{"kind":"Field","name":{"kind":"Name","value":"roundStatus"}},{"kind":"Field","name":{"kind":"Name","value":"roundStatusColor"}},{"kind":"Field","name":{"kind":"Name","value":"leaderboardTakeover"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tournamentStatus"}},{"kind":"Field","name":{"kind":"Name","value":"sortDate"}},{"kind":"Field","name":{"kind":"Name","value":"sequenceNumber"}},{"kind":"Field","name":{"kind":"Name","value":"purse"}},{"kind":"Field","name":{"kind":"Name","value":"ticketsURL"}},{"kind":"Field","name":{"kind":"Name","value":"tourStandingHeading"}},{"kind":"Field","name":{"kind":"Name","value":"tourStandingValue"}},{"kind":"Field","name":{"kind":"Name","value":"display"}},{"kind":"Field","name":{"kind":"Name","value":"tournamentCategoryInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"logoLight"}},{"kind":"Field","name":{"kind":"Name","value":"logoLightAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"imageOrg"}},{"kind":"Field","name":{"kind":"Name","value":"imagePath"}},{"kind":"Field","name":{"kind":"Name","value":"assetType"}},{"kind":"Field","name":{"kind":"Name","value":"deliveryType"}},{"kind":"Field","name":{"kind":"Name","value":"fallbackImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"logoDark"}},{"kind":"Field","name":{"kind":"Name","value":"logoDarkAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"imageOrg"}},{"kind":"Field","name":{"kind":"Name","value":"imagePath"}},{"kind":"Field","name":{"kind":"Name","value":"assetType"}},{"kind":"Field","name":{"kind":"Name","value":"deliveryType"}},{"kind":"Field","name":{"kind":"Name","value":"fallbackImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ticketmasterApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"ticketmasterAttractionId"}},{"kind":"Field","name":{"kind":"Name","value":"androidTicketmasterApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"androidTicketmasterScheme"}},{"kind":"Field","name":{"kind":"Name","value":"iosTicketmasterApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"ticketsEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"tournamentSiteURL"}},{"kind":"Field","name":{"kind":"Name","value":"useTournamentSiteURL"}}]}}]} as unknown as DocumentNode;
export const ApiScheduleMonthFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ScheduleMonthFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ScheduleMonth"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"year"}},{"kind":"Field","name":{"kind":"Name","value":"month"}},{"kind":"Field","name":{"kind":"Name","value":"monthSort"}},{"kind":"Field","name":{"kind":"Name","value":"tournaments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ScheduleTournamentFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ScheduleTournamentFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ScheduleTournament"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"dateAccessibilityText"}},{"kind":"Field","name":{"kind":"Name","value":"tournamentName"}},{"kind":"Field","name":{"kind":"Name","value":"tournamentLogo"}},{"kind":"Field","name":{"kind":"Name","value":"tournamentLogoAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"imageOrg"}},{"kind":"Field","name":{"kind":"Name","value":"imagePath"}},{"kind":"Field","name":{"kind":"Name","value":"assetType"}},{"kind":"Field","name":{"kind":"Name","value":"deliveryType"}},{"kind":"Field","name":{"kind":"Name","value":"fallbackImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"stateCode"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"countryCode"}},{"kind":"Field","name":{"kind":"Name","value":"courseName"}},{"kind":"Field","name":{"kind":"Name","value":"champion"}},{"kind":"Field","name":{"kind":"Name","value":"championId"}},{"kind":"Field","name":{"kind":"Name","value":"champions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"playerId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"championEarnings"}},{"kind":"Field","name":{"kind":"Name","value":"beautyImage"}},{"kind":"Field","name":{"kind":"Name","value":"beautyImageAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"imageOrg"}},{"kind":"Field","name":{"kind":"Name","value":"imagePath"}},{"kind":"Field","name":{"kind":"Name","value":"assetType"}},{"kind":"Field","name":{"kind":"Name","value":"deliveryType"}},{"kind":"Field","name":{"kind":"Name","value":"fallbackImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"roundStatusDisplay"}},{"kind":"Field","name":{"kind":"Name","value":"roundDisplay"}},{"kind":"Field","name":{"kind":"Name","value":"roundStatus"}},{"kind":"Field","name":{"kind":"Name","value":"roundStatusColor"}},{"kind":"Field","name":{"kind":"Name","value":"leaderboardTakeover"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tournamentStatus"}},{"kind":"Field","name":{"kind":"Name","value":"sortDate"}},{"kind":"Field","name":{"kind":"Name","value":"sequenceNumber"}},{"kind":"Field","name":{"kind":"Name","value":"purse"}},{"kind":"Field","name":{"kind":"Name","value":"ticketsURL"}},{"kind":"Field","name":{"kind":"Name","value":"tourStandingHeading"}},{"kind":"Field","name":{"kind":"Name","value":"tourStandingValue"}},{"kind":"Field","name":{"kind":"Name","value":"display"}},{"kind":"Field","name":{"kind":"Name","value":"tournamentCategoryInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"logoLight"}},{"kind":"Field","name":{"kind":"Name","value":"logoLightAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"imageOrg"}},{"kind":"Field","name":{"kind":"Name","value":"imagePath"}},{"kind":"Field","name":{"kind":"Name","value":"assetType"}},{"kind":"Field","name":{"kind":"Name","value":"deliveryType"}},{"kind":"Field","name":{"kind":"Name","value":"fallbackImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"logoDark"}},{"kind":"Field","name":{"kind":"Name","value":"logoDarkAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"imageOrg"}},{"kind":"Field","name":{"kind":"Name","value":"imagePath"}},{"kind":"Field","name":{"kind":"Name","value":"assetType"}},{"kind":"Field","name":{"kind":"Name","value":"deliveryType"}},{"kind":"Field","name":{"kind":"Name","value":"fallbackImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ticketmasterApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"ticketmasterAttractionId"}},{"kind":"Field","name":{"kind":"Name","value":"androidTicketmasterApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"androidTicketmasterScheme"}},{"kind":"Field","name":{"kind":"Name","value":"iosTicketmasterApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"ticketsEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"tournamentSiteURL"}},{"kind":"Field","name":{"kind":"Name","value":"useTournamentSiteURL"}}]}}]} as unknown as DocumentNode;
export const ApiScheduleFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ScheduleFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Schedule"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"tour"}},{"kind":"Field","name":{"kind":"Name","value":"seasonYear"}},{"kind":"Field","name":{"kind":"Name","value":"completed"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ScheduleMonthFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"upcoming"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ScheduleMonthFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"filters"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ScheduleTournamentFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ScheduleTournament"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"dateAccessibilityText"}},{"kind":"Field","name":{"kind":"Name","value":"tournamentName"}},{"kind":"Field","name":{"kind":"Name","value":"tournamentLogo"}},{"kind":"Field","name":{"kind":"Name","value":"tournamentLogoAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"imageOrg"}},{"kind":"Field","name":{"kind":"Name","value":"imagePath"}},{"kind":"Field","name":{"kind":"Name","value":"assetType"}},{"kind":"Field","name":{"kind":"Name","value":"deliveryType"}},{"kind":"Field","name":{"kind":"Name","value":"fallbackImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"stateCode"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"countryCode"}},{"kind":"Field","name":{"kind":"Name","value":"courseName"}},{"kind":"Field","name":{"kind":"Name","value":"champion"}},{"kind":"Field","name":{"kind":"Name","value":"championId"}},{"kind":"Field","name":{"kind":"Name","value":"champions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"playerId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"championEarnings"}},{"kind":"Field","name":{"kind":"Name","value":"beautyImage"}},{"kind":"Field","name":{"kind":"Name","value":"beautyImageAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"imageOrg"}},{"kind":"Field","name":{"kind":"Name","value":"imagePath"}},{"kind":"Field","name":{"kind":"Name","value":"assetType"}},{"kind":"Field","name":{"kind":"Name","value":"deliveryType"}},{"kind":"Field","name":{"kind":"Name","value":"fallbackImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"roundStatusDisplay"}},{"kind":"Field","name":{"kind":"Name","value":"roundDisplay"}},{"kind":"Field","name":{"kind":"Name","value":"roundStatus"}},{"kind":"Field","name":{"kind":"Name","value":"roundStatusColor"}},{"kind":"Field","name":{"kind":"Name","value":"leaderboardTakeover"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tournamentStatus"}},{"kind":"Field","name":{"kind":"Name","value":"sortDate"}},{"kind":"Field","name":{"kind":"Name","value":"sequenceNumber"}},{"kind":"Field","name":{"kind":"Name","value":"purse"}},{"kind":"Field","name":{"kind":"Name","value":"ticketsURL"}},{"kind":"Field","name":{"kind":"Name","value":"tourStandingHeading"}},{"kind":"Field","name":{"kind":"Name","value":"tourStandingValue"}},{"kind":"Field","name":{"kind":"Name","value":"display"}},{"kind":"Field","name":{"kind":"Name","value":"tournamentCategoryInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"logoLight"}},{"kind":"Field","name":{"kind":"Name","value":"logoLightAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"imageOrg"}},{"kind":"Field","name":{"kind":"Name","value":"imagePath"}},{"kind":"Field","name":{"kind":"Name","value":"assetType"}},{"kind":"Field","name":{"kind":"Name","value":"deliveryType"}},{"kind":"Field","name":{"kind":"Name","value":"fallbackImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"logoDark"}},{"kind":"Field","name":{"kind":"Name","value":"logoDarkAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"imageOrg"}},{"kind":"Field","name":{"kind":"Name","value":"imagePath"}},{"kind":"Field","name":{"kind":"Name","value":"assetType"}},{"kind":"Field","name":{"kind":"Name","value":"deliveryType"}},{"kind":"Field","name":{"kind":"Name","value":"fallbackImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ticketmasterApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"ticketmasterAttractionId"}},{"kind":"Field","name":{"kind":"Name","value":"androidTicketmasterApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"androidTicketmasterScheme"}},{"kind":"Field","name":{"kind":"Name","value":"iosTicketmasterApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"ticketsEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"tournamentSiteURL"}},{"kind":"Field","name":{"kind":"Name","value":"useTournamentSiteURL"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ScheduleMonthFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ScheduleMonth"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"year"}},{"kind":"Field","name":{"kind":"Name","value":"month"}},{"kind":"Field","name":{"kind":"Name","value":"monthSort"}},{"kind":"Field","name":{"kind":"Name","value":"tournaments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ScheduleTournamentFields"}}]}}]}}]} as unknown as DocumentNode;
export const ApiTournamentFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TournamentFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Tournament"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"tournamentName"}},{"kind":"Field","name":{"kind":"Name","value":"tournamentLogo"}},{"kind":"Field","name":{"kind":"Name","value":"tournamentLogoAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"imageOrg"}},{"kind":"Field","name":{"kind":"Name","value":"imagePath"}},{"kind":"Field","name":{"kind":"Name","value":"assetType"}},{"kind":"Field","name":{"kind":"Name","value":"deliveryType"}},{"kind":"Field","name":{"kind":"Name","value":"fallbackImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tournamentLocation"}},{"kind":"Field","name":{"kind":"Name","value":"tournamentStatus"}},{"kind":"Field","name":{"kind":"Name","value":"features"}},{"kind":"Field","name":{"kind":"Name","value":"formatType"}},{"kind":"Field","name":{"kind":"Name","value":"roundStatusDisplay"}},{"kind":"Field","name":{"kind":"Name","value":"roundDisplay"}},{"kind":"Field","name":{"kind":"Name","value":"roundStatus"}},{"kind":"Field","name":{"kind":"Name","value":"roundStatusColor"}},{"kind":"Field","name":{"kind":"Name","value":"leaderboardTakeover"}},{"kind":"Field","name":{"kind":"Name","value":"currentRound"}},{"kind":"Field","name":{"kind":"Name","value":"timezone"}},{"kind":"Field","name":{"kind":"Name","value":"seasonYear"}},{"kind":"Field","name":{"kind":"Name","value":"displayDate"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"scoredLevel"}},{"kind":"Field","name":{"kind":"Name","value":"events"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"eventName"}},{"kind":"Field","name":{"kind":"Name","value":"leaderboardId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"courses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"courseName"}},{"kind":"Field","name":{"kind":"Name","value":"courseCode"}},{"kind":"Field","name":{"kind":"Name","value":"hostCourse"}},{"kind":"Field","name":{"kind":"Name","value":"scoringLevel"}},{"kind":"Field","name":{"kind":"Name","value":"enabled"}},{"kind":"Field","name":{"kind":"Name","value":"features"}}]}},{"kind":"Field","name":{"kind":"Name","value":"weather"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"logo"}},{"kind":"Field","name":{"kind":"Name","value":"logoAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"imageOrg"}},{"kind":"Field","name":{"kind":"Name","value":"imagePath"}},{"kind":"Field","name":{"kind":"Name","value":"assetType"}},{"kind":"Field","name":{"kind":"Name","value":"deliveryType"}},{"kind":"Field","name":{"kind":"Name","value":"fallbackImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"logoDark"}},{"kind":"Field","name":{"kind":"Name","value":"logoDarkAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"imageOrg"}},{"kind":"Field","name":{"kind":"Name","value":"imagePath"}},{"kind":"Field","name":{"kind":"Name","value":"assetType"}},{"kind":"Field","name":{"kind":"Name","value":"deliveryType"}},{"kind":"Field","name":{"kind":"Name","value":"fallbackImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"logoAccessibility"}},{"kind":"Field","name":{"kind":"Name","value":"tempF"}},{"kind":"Field","name":{"kind":"Name","value":"tempC"}},{"kind":"Field","name":{"kind":"Name","value":"condition"}},{"kind":"Field","name":{"kind":"Name","value":"windDirection"}},{"kind":"Field","name":{"kind":"Name","value":"windSpeedMPH"}},{"kind":"Field","name":{"kind":"Name","value":"windSpeedKPH"}},{"kind":"Field","name":{"kind":"Name","value":"precipitation"}},{"kind":"Field","name":{"kind":"Name","value":"humidity"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ticketsURL"}},{"kind":"Field","name":{"kind":"Name","value":"tournamentSiteURL"}},{"kind":"Field","name":{"kind":"Name","value":"useTournamentSiteURL"}},{"kind":"Field","name":{"kind":"Name","value":"pdfUrl"}},{"kind":"Field","name":{"kind":"Name","value":"conductedByLabel"}},{"kind":"Field","name":{"kind":"Name","value":"conductedByLink"}},{"kind":"Field","name":{"kind":"Name","value":"beautyImage"}},{"kind":"Field","name":{"kind":"Name","value":"beautyImageAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"imageOrg"}},{"kind":"Field","name":{"kind":"Name","value":"imagePath"}},{"kind":"Field","name":{"kind":"Name","value":"assetType"}},{"kind":"Field","name":{"kind":"Name","value":"deliveryType"}},{"kind":"Field","name":{"kind":"Name","value":"fallbackImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"shouldSubscribe"}},{"kind":"Field","name":{"kind":"Name","value":"infoPath"}},{"kind":"Field","name":{"kind":"Name","value":"infoPathWebview"}},{"kind":"Field","name":{"kind":"Name","value":"howItWorks"}},{"kind":"Field","name":{"kind":"Name","value":"howItWorksPill"}},{"kind":"Field","name":{"kind":"Name","value":"howItWorksWebview"}},{"kind":"Field","name":{"kind":"Name","value":"hideRolexClock"}},{"kind":"Field","name":{"kind":"Name","value":"hideSov"}},{"kind":"Field","name":{"kind":"Name","value":"ticketsEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"headshotBaseUrl"}},{"kind":"Field","name":{"kind":"Name","value":"rightRailConfig"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"imageAltText"}},{"kind":"Field","name":{"kind":"Name","value":"buttonLink"}},{"kind":"Field","name":{"kind":"Name","value":"buttonText"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tournamentCategoryInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"logoLight"}},{"kind":"Field","name":{"kind":"Name","value":"logoLightAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"imageOrg"}},{"kind":"Field","name":{"kind":"Name","value":"imagePath"}},{"kind":"Field","name":{"kind":"Name","value":"assetType"}},{"kind":"Field","name":{"kind":"Name","value":"deliveryType"}},{"kind":"Field","name":{"kind":"Name","value":"fallbackImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"logoDark"}},{"kind":"Field","name":{"kind":"Name","value":"logoDarkAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"imageOrg"}},{"kind":"Field","name":{"kind":"Name","value":"imagePath"}},{"kind":"Field","name":{"kind":"Name","value":"assetType"}},{"kind":"Field","name":{"kind":"Name","value":"deliveryType"}},{"kind":"Field","name":{"kind":"Name","value":"fallbackImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}},{"kind":"Field","name":{"kind":"Name","value":"disabledScorecardTabs"}}]}}]} as unknown as DocumentNode;
export const ApiLeaderboardV3Document = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"LeaderboardV3"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"leaderboardV3Id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"leaderboardV3"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"leaderboardV3Id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LeaderboardV3Fields"}},{"kind":"Field","name":{"kind":"Name","value":"players"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PlayerRowV3Fields"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"InformationRowFields"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LeaderboardV3Fields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LeaderboardV3"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"tournamentId"}},{"kind":"Field","name":{"kind":"Name","value":"leaderboardRoundHeader"}},{"kind":"Field","name":{"kind":"Name","value":"formatType"}},{"kind":"Field","name":{"kind":"Name","value":"timezone"}},{"kind":"Field","name":{"kind":"Name","value":"winner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"totalStrokes"}},{"kind":"Field","name":{"kind":"Name","value":"totalScore"}},{"kind":"Field","name":{"kind":"Name","value":"countryFlag"}},{"kind":"Field","name":{"kind":"Name","value":"countryName"}},{"kind":"Field","name":{"kind":"Name","value":"purse"}},{"kind":"Field","name":{"kind":"Name","value":"displayPoints"}},{"kind":"Field","name":{"kind":"Name","value":"displayPurse"}},{"kind":"Field","name":{"kind":"Name","value":"points"}},{"kind":"Field","name":{"kind":"Name","value":"seed"}},{"kind":"Field","name":{"kind":"Name","value":"pointsLabel"}},{"kind":"Field","name":{"kind":"Name","value":"winnerIcon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"roundScores"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"winners"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"totalStrokes"}},{"kind":"Field","name":{"kind":"Name","value":"totalScore"}},{"kind":"Field","name":{"kind":"Name","value":"countryFlag"}},{"kind":"Field","name":{"kind":"Name","value":"countryName"}},{"kind":"Field","name":{"kind":"Name","value":"purse"}},{"kind":"Field","name":{"kind":"Name","value":"displayPoints"}},{"kind":"Field","name":{"kind":"Name","value":"displayPurse"}},{"kind":"Field","name":{"kind":"Name","value":"points"}},{"kind":"Field","name":{"kind":"Name","value":"seed"}},{"kind":"Field","name":{"kind":"Name","value":"pointsLabel"}}]}},{"kind":"Field","name":{"kind":"Name","value":"courses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"courseName"}},{"kind":"Field","name":{"kind":"Name","value":"courseCode"}},{"kind":"Field","name":{"kind":"Name","value":"hostCourse"}},{"kind":"Field","name":{"kind":"Name","value":"scoringLevel"}},{"kind":"Field","name":{"kind":"Name","value":"enabled"}},{"kind":"Field","name":{"kind":"Name","value":"features"}}]}},{"kind":"Field","name":{"kind":"Name","value":"messages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"messageText"}},{"kind":"Field","name":{"kind":"Name","value":"messageIcon"}},{"kind":"Field","name":{"kind":"Name","value":"messageLink"}},{"kind":"Field","name":{"kind":"Name","value":"webViewLink"}},{"kind":"Field","name":{"kind":"Name","value":"externalLink"}},{"kind":"Field","name":{"kind":"Name","value":"platforms"}},{"kind":"Field","name":{"kind":"Name","value":"timing"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tourcastURL"}},{"kind":"Field","name":{"kind":"Name","value":"tourcastURLWeb"}},{"kind":"Field","name":{"kind":"Name","value":"tourcastURI"}},{"kind":"Field","name":{"kind":"Name","value":"tournamentStatus"}},{"kind":"Field","name":{"kind":"Name","value":"rounds"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"roundNumber"}},{"kind":"Field","name":{"kind":"Name","value":"displayText"}}]}},{"kind":"Field","name":{"kind":"Name","value":"isPlayoffActive"}},{"kind":"Field","name":{"kind":"Name","value":"scorecardEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"profileEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"subEvent"}},{"kind":"Field","name":{"kind":"Name","value":"leaderboardFeatures"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"new"}},{"kind":"Field","name":{"kind":"Name","value":"tooltipText"}},{"kind":"Field","name":{"kind":"Name","value":"tooltipTitle"}},{"kind":"Field","name":{"kind":"Name","value":"fieldStatType"}},{"kind":"Field","name":{"kind":"Name","value":"leaderboardFeatures"}},{"kind":"Field","name":{"kind":"Name","value":"sponsor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"sponsorLogo"}},{"kind":"Field","name":{"kind":"Name","value":"sponsorLogoAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"imageOrg"}},{"kind":"Field","name":{"kind":"Name","value":"imagePath"}},{"kind":"Field","name":{"kind":"Name","value":"assetType"}},{"kind":"Field","name":{"kind":"Name","value":"deliveryType"}},{"kind":"Field","name":{"kind":"Name","value":"fallbackImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"sponsorLogoDark"}},{"kind":"Field","name":{"kind":"Name","value":"sponsorLogoDarkAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"imageOrg"}},{"kind":"Field","name":{"kind":"Name","value":"imagePath"}},{"kind":"Field","name":{"kind":"Name","value":"assetType"}},{"kind":"Field","name":{"kind":"Name","value":"deliveryType"}},{"kind":"Field","name":{"kind":"Name","value":"fallbackImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"sponsorText"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"standingsEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"standingsHeader"}},{"kind":"Field","name":{"kind":"Name","value":"hideSov"}},{"kind":"Field","name":{"kind":"Name","value":"disableOdds"}},{"kind":"Field","name":{"kind":"Name","value":"oddsFeatures"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"feature"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"disableBettingProfileColumn"}},{"kind":"Field","name":{"kind":"Name","value":"cutLineProbabilities"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"projectedCutLine"}},{"kind":"Field","name":{"kind":"Name","value":"probableCutLine"}},{"kind":"Field","name":{"kind":"Name","value":"sponsorLogo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"imageOrg"}},{"kind":"Field","name":{"kind":"Name","value":"imagePath"}},{"kind":"Field","name":{"kind":"Name","value":"assetType"}},{"kind":"Field","name":{"kind":"Name","value":"deliveryType"}},{"kind":"Field","name":{"kind":"Name","value":"fallbackImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"sponsorName"}},{"kind":"Field","name":{"kind":"Name","value":"lastUpdated"}},{"kind":"Field","name":{"kind":"Name","value":"possibleCutLines"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"probability"}},{"kind":"Field","name":{"kind":"Name","value":"displayProbability"}}]}},{"kind":"Field","name":{"kind":"Name","value":"new"}}]}},{"kind":"Field","name":{"kind":"Name","value":"disableLeaderboard"}},{"kind":"Field","name":{"kind":"Name","value":"bubblePill"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iconLight"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"imageOrg"}},{"kind":"Field","name":{"kind":"Name","value":"imagePath"}},{"kind":"Field","name":{"kind":"Name","value":"assetType"}},{"kind":"Field","name":{"kind":"Name","value":"deliveryType"}},{"kind":"Field","name":{"kind":"Name","value":"fallbackImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"iconDark"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"imageOrg"}},{"kind":"Field","name":{"kind":"Name","value":"imagePath"}},{"kind":"Field","name":{"kind":"Name","value":"assetType"}},{"kind":"Field","name":{"kind":"Name","value":"deliveryType"}},{"kind":"Field","name":{"kind":"Name","value":"fallbackImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pillText"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PlayerRowV3Fields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlayerRowV3"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"leaderboardSortOrder"}},{"kind":"Field","name":{"kind":"Name","value":"player"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"shortName"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"abbreviations"}},{"kind":"Field","name":{"kind":"Name","value":"abbreviationsAccessibilityText"}},{"kind":"Field","name":{"kind":"Name","value":"amateur"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"countryFlag"}},{"kind":"Field","name":{"kind":"Name","value":"lineColor"}},{"kind":"Field","name":{"kind":"Name","value":"seed"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"tourBound"}},{"kind":"Field","name":{"kind":"Name","value":"assets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TourBoundAsset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"tourBoundLogo"}},{"kind":"Field","name":{"kind":"Name","value":"tourBoundLogoDark"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"bettingProfile"}},{"kind":"Field","name":{"kind":"Name","value":"playerBioOverrideLink"}}]}},{"kind":"Field","name":{"kind":"Name","value":"scoringData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"groupNumber"}},{"kind":"Field","name":{"kind":"Name","value":"currentRound"}},{"kind":"Field","name":{"kind":"Name","value":"backNine"}},{"kind":"Field","name":{"kind":"Name","value":"playerState"}},{"kind":"Field","name":{"kind":"Name","value":"teeTime"}},{"kind":"Field","name":{"kind":"Name","value":"totalStrokes"}},{"kind":"Field","name":{"kind":"Name","value":"totalStrokesSort"}},{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"totalSort"}},{"kind":"Field","name":{"kind":"Name","value":"thru"}},{"kind":"Field","name":{"kind":"Name","value":"thruSort"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"scoreSort"}},{"kind":"Field","name":{"kind":"Name","value":"movementDirection"}},{"kind":"Field","name":{"kind":"Name","value":"movementAmount"}},{"kind":"Field","name":{"kind":"Name","value":"movementSort"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"rounds"}},{"kind":"Field","name":{"kind":"Name","value":"roundDisplaySort"}},{"kind":"Field","name":{"kind":"Name","value":"roundHeader"}},{"kind":"Field","name":{"kind":"Name","value":"roundStatus"}},{"kind":"Field","name":{"kind":"Name","value":"courseId"}},{"kind":"Field","name":{"kind":"Name","value":"official"}},{"kind":"Field","name":{"kind":"Name","value":"officialSort"}},{"kind":"Field","name":{"kind":"Name","value":"projected"}},{"kind":"Field","name":{"kind":"Name","value":"projectedSort"}},{"kind":"Field","name":{"kind":"Name","value":"rankingMovement"}},{"kind":"Field","name":{"kind":"Name","value":"rankingMovementAmount"}},{"kind":"Field","name":{"kind":"Name","value":"rankingMovementAmountSort"}},{"kind":"Field","name":{"kind":"Name","value":"rankLogoLight"}},{"kind":"Field","name":{"kind":"Name","value":"rankLogoDark"}},{"kind":"Field","name":{"kind":"Name","value":"tooltipText"}},{"kind":"Field","name":{"kind":"Name","value":"tooltipTitle"}},{"kind":"Field","name":{"kind":"Name","value":"oddsToWin"}},{"kind":"Field","name":{"kind":"Name","value":"oddsSwing"}},{"kind":"Field","name":{"kind":"Name","value":"oddsOptionId"}},{"kind":"Field","name":{"kind":"Name","value":"oddsSort"}},{"kind":"Field","name":{"kind":"Name","value":"hasStoryContent"}},{"kind":"Field","name":{"kind":"Name","value":"storyContentRound"}},{"kind":"Field","name":{"kind":"Name","value":"storyContentRounds"}},{"kind":"Field","name":{"kind":"Name","value":"playerIcon"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"InformationRowFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"InformationRow"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"leaderboardSortOrder"}},{"kind":"Field","name":{"kind":"Name","value":"displayText"}},{"kind":"Field","name":{"kind":"Name","value":"mobileDisplayText"}},{"kind":"Field","name":{"kind":"Name","value":"sponsorName"}}]}}]} as unknown as DocumentNode;
export const ApiScheduleYearsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ScheduleYears"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tourCode"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TourCode"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"scheduleYears"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"tourCode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tourCode"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"years"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"default"}},{"kind":"Field","name":{"kind":"Name","value":"displayValue"}},{"kind":"Field","name":{"kind":"Name","value":"queryValue"}}]}}]}}]}}]} as unknown as DocumentNode;
export const ApiScheduleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Schedule"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tourCode"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"year"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"schedule"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"tourCode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tourCode"}}},{"kind":"Argument","name":{"kind":"Name","value":"year"},"value":{"kind":"Variable","name":{"kind":"Name","value":"year"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ScheduleFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ScheduleTournamentFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ScheduleTournament"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"dateAccessibilityText"}},{"kind":"Field","name":{"kind":"Name","value":"tournamentName"}},{"kind":"Field","name":{"kind":"Name","value":"tournamentLogo"}},{"kind":"Field","name":{"kind":"Name","value":"tournamentLogoAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"imageOrg"}},{"kind":"Field","name":{"kind":"Name","value":"imagePath"}},{"kind":"Field","name":{"kind":"Name","value":"assetType"}},{"kind":"Field","name":{"kind":"Name","value":"deliveryType"}},{"kind":"Field","name":{"kind":"Name","value":"fallbackImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"stateCode"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"countryCode"}},{"kind":"Field","name":{"kind":"Name","value":"courseName"}},{"kind":"Field","name":{"kind":"Name","value":"champion"}},{"kind":"Field","name":{"kind":"Name","value":"championId"}},{"kind":"Field","name":{"kind":"Name","value":"champions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"playerId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"championEarnings"}},{"kind":"Field","name":{"kind":"Name","value":"beautyImage"}},{"kind":"Field","name":{"kind":"Name","value":"beautyImageAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"imageOrg"}},{"kind":"Field","name":{"kind":"Name","value":"imagePath"}},{"kind":"Field","name":{"kind":"Name","value":"assetType"}},{"kind":"Field","name":{"kind":"Name","value":"deliveryType"}},{"kind":"Field","name":{"kind":"Name","value":"fallbackImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"roundStatusDisplay"}},{"kind":"Field","name":{"kind":"Name","value":"roundDisplay"}},{"kind":"Field","name":{"kind":"Name","value":"roundStatus"}},{"kind":"Field","name":{"kind":"Name","value":"roundStatusColor"}},{"kind":"Field","name":{"kind":"Name","value":"leaderboardTakeover"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tournamentStatus"}},{"kind":"Field","name":{"kind":"Name","value":"sortDate"}},{"kind":"Field","name":{"kind":"Name","value":"sequenceNumber"}},{"kind":"Field","name":{"kind":"Name","value":"purse"}},{"kind":"Field","name":{"kind":"Name","value":"ticketsURL"}},{"kind":"Field","name":{"kind":"Name","value":"tourStandingHeading"}},{"kind":"Field","name":{"kind":"Name","value":"tourStandingValue"}},{"kind":"Field","name":{"kind":"Name","value":"display"}},{"kind":"Field","name":{"kind":"Name","value":"tournamentCategoryInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"logoLight"}},{"kind":"Field","name":{"kind":"Name","value":"logoLightAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"imageOrg"}},{"kind":"Field","name":{"kind":"Name","value":"imagePath"}},{"kind":"Field","name":{"kind":"Name","value":"assetType"}},{"kind":"Field","name":{"kind":"Name","value":"deliveryType"}},{"kind":"Field","name":{"kind":"Name","value":"fallbackImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"logoDark"}},{"kind":"Field","name":{"kind":"Name","value":"logoDarkAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"imageOrg"}},{"kind":"Field","name":{"kind":"Name","value":"imagePath"}},{"kind":"Field","name":{"kind":"Name","value":"assetType"}},{"kind":"Field","name":{"kind":"Name","value":"deliveryType"}},{"kind":"Field","name":{"kind":"Name","value":"fallbackImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ticketmasterApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"ticketmasterAttractionId"}},{"kind":"Field","name":{"kind":"Name","value":"androidTicketmasterApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"androidTicketmasterScheme"}},{"kind":"Field","name":{"kind":"Name","value":"iosTicketmasterApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"ticketsEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"tournamentSiteURL"}},{"kind":"Field","name":{"kind":"Name","value":"useTournamentSiteURL"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ScheduleMonthFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ScheduleMonth"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"year"}},{"kind":"Field","name":{"kind":"Name","value":"month"}},{"kind":"Field","name":{"kind":"Name","value":"monthSort"}},{"kind":"Field","name":{"kind":"Name","value":"tournaments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ScheduleTournamentFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ScheduleFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Schedule"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"tour"}},{"kind":"Field","name":{"kind":"Name","value":"seasonYear"}},{"kind":"Field","name":{"kind":"Name","value":"completed"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ScheduleMonthFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"upcoming"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ScheduleMonthFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"filters"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode;
export const ApiCompleteScheduleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CompleteSchedule"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tourCode"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TourCode"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"completeSchedule"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"tourCode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tourCode"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ScheduleFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ScheduleTournamentFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ScheduleTournament"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"dateAccessibilityText"}},{"kind":"Field","name":{"kind":"Name","value":"tournamentName"}},{"kind":"Field","name":{"kind":"Name","value":"tournamentLogo"}},{"kind":"Field","name":{"kind":"Name","value":"tournamentLogoAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"imageOrg"}},{"kind":"Field","name":{"kind":"Name","value":"imagePath"}},{"kind":"Field","name":{"kind":"Name","value":"assetType"}},{"kind":"Field","name":{"kind":"Name","value":"deliveryType"}},{"kind":"Field","name":{"kind":"Name","value":"fallbackImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"stateCode"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"countryCode"}},{"kind":"Field","name":{"kind":"Name","value":"courseName"}},{"kind":"Field","name":{"kind":"Name","value":"champion"}},{"kind":"Field","name":{"kind":"Name","value":"championId"}},{"kind":"Field","name":{"kind":"Name","value":"champions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"playerId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"championEarnings"}},{"kind":"Field","name":{"kind":"Name","value":"beautyImage"}},{"kind":"Field","name":{"kind":"Name","value":"beautyImageAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"imageOrg"}},{"kind":"Field","name":{"kind":"Name","value":"imagePath"}},{"kind":"Field","name":{"kind":"Name","value":"assetType"}},{"kind":"Field","name":{"kind":"Name","value":"deliveryType"}},{"kind":"Field","name":{"kind":"Name","value":"fallbackImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"roundStatusDisplay"}},{"kind":"Field","name":{"kind":"Name","value":"roundDisplay"}},{"kind":"Field","name":{"kind":"Name","value":"roundStatus"}},{"kind":"Field","name":{"kind":"Name","value":"roundStatusColor"}},{"kind":"Field","name":{"kind":"Name","value":"leaderboardTakeover"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tournamentStatus"}},{"kind":"Field","name":{"kind":"Name","value":"sortDate"}},{"kind":"Field","name":{"kind":"Name","value":"sequenceNumber"}},{"kind":"Field","name":{"kind":"Name","value":"purse"}},{"kind":"Field","name":{"kind":"Name","value":"ticketsURL"}},{"kind":"Field","name":{"kind":"Name","value":"tourStandingHeading"}},{"kind":"Field","name":{"kind":"Name","value":"tourStandingValue"}},{"kind":"Field","name":{"kind":"Name","value":"display"}},{"kind":"Field","name":{"kind":"Name","value":"tournamentCategoryInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"logoLight"}},{"kind":"Field","name":{"kind":"Name","value":"logoLightAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"imageOrg"}},{"kind":"Field","name":{"kind":"Name","value":"imagePath"}},{"kind":"Field","name":{"kind":"Name","value":"assetType"}},{"kind":"Field","name":{"kind":"Name","value":"deliveryType"}},{"kind":"Field","name":{"kind":"Name","value":"fallbackImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"logoDark"}},{"kind":"Field","name":{"kind":"Name","value":"logoDarkAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"imageOrg"}},{"kind":"Field","name":{"kind":"Name","value":"imagePath"}},{"kind":"Field","name":{"kind":"Name","value":"assetType"}},{"kind":"Field","name":{"kind":"Name","value":"deliveryType"}},{"kind":"Field","name":{"kind":"Name","value":"fallbackImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ticketmasterApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"ticketmasterAttractionId"}},{"kind":"Field","name":{"kind":"Name","value":"androidTicketmasterApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"androidTicketmasterScheme"}},{"kind":"Field","name":{"kind":"Name","value":"iosTicketmasterApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"ticketsEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"tournamentSiteURL"}},{"kind":"Field","name":{"kind":"Name","value":"useTournamentSiteURL"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ScheduleMonthFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ScheduleMonth"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"year"}},{"kind":"Field","name":{"kind":"Name","value":"month"}},{"kind":"Field","name":{"kind":"Name","value":"monthSort"}},{"kind":"Field","name":{"kind":"Name","value":"tournaments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ScheduleTournamentFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ScheduleFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Schedule"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"tour"}},{"kind":"Field","name":{"kind":"Name","value":"seasonYear"}},{"kind":"Field","name":{"kind":"Name","value":"completed"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ScheduleMonthFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"upcoming"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ScheduleMonthFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"filters"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode;
export const ApiUpcomingScheduleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UpcomingSchedule"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tourCode"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"upcomingSchedule"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"tourCode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tourCode"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"filters"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tournaments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ScheduleTournamentFields"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ScheduleTournamentFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ScheduleTournament"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"dateAccessibilityText"}},{"kind":"Field","name":{"kind":"Name","value":"tournamentName"}},{"kind":"Field","name":{"kind":"Name","value":"tournamentLogo"}},{"kind":"Field","name":{"kind":"Name","value":"tournamentLogoAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"imageOrg"}},{"kind":"Field","name":{"kind":"Name","value":"imagePath"}},{"kind":"Field","name":{"kind":"Name","value":"assetType"}},{"kind":"Field","name":{"kind":"Name","value":"deliveryType"}},{"kind":"Field","name":{"kind":"Name","value":"fallbackImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"stateCode"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"countryCode"}},{"kind":"Field","name":{"kind":"Name","value":"courseName"}},{"kind":"Field","name":{"kind":"Name","value":"champion"}},{"kind":"Field","name":{"kind":"Name","value":"championId"}},{"kind":"Field","name":{"kind":"Name","value":"champions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"playerId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"championEarnings"}},{"kind":"Field","name":{"kind":"Name","value":"beautyImage"}},{"kind":"Field","name":{"kind":"Name","value":"beautyImageAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"imageOrg"}},{"kind":"Field","name":{"kind":"Name","value":"imagePath"}},{"kind":"Field","name":{"kind":"Name","value":"assetType"}},{"kind":"Field","name":{"kind":"Name","value":"deliveryType"}},{"kind":"Field","name":{"kind":"Name","value":"fallbackImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"roundStatusDisplay"}},{"kind":"Field","name":{"kind":"Name","value":"roundDisplay"}},{"kind":"Field","name":{"kind":"Name","value":"roundStatus"}},{"kind":"Field","name":{"kind":"Name","value":"roundStatusColor"}},{"kind":"Field","name":{"kind":"Name","value":"leaderboardTakeover"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tournamentStatus"}},{"kind":"Field","name":{"kind":"Name","value":"sortDate"}},{"kind":"Field","name":{"kind":"Name","value":"sequenceNumber"}},{"kind":"Field","name":{"kind":"Name","value":"purse"}},{"kind":"Field","name":{"kind":"Name","value":"ticketsURL"}},{"kind":"Field","name":{"kind":"Name","value":"tourStandingHeading"}},{"kind":"Field","name":{"kind":"Name","value":"tourStandingValue"}},{"kind":"Field","name":{"kind":"Name","value":"display"}},{"kind":"Field","name":{"kind":"Name","value":"tournamentCategoryInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"logoLight"}},{"kind":"Field","name":{"kind":"Name","value":"logoLightAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"imageOrg"}},{"kind":"Field","name":{"kind":"Name","value":"imagePath"}},{"kind":"Field","name":{"kind":"Name","value":"assetType"}},{"kind":"Field","name":{"kind":"Name","value":"deliveryType"}},{"kind":"Field","name":{"kind":"Name","value":"fallbackImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"logoDark"}},{"kind":"Field","name":{"kind":"Name","value":"logoDarkAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"imageOrg"}},{"kind":"Field","name":{"kind":"Name","value":"imagePath"}},{"kind":"Field","name":{"kind":"Name","value":"assetType"}},{"kind":"Field","name":{"kind":"Name","value":"deliveryType"}},{"kind":"Field","name":{"kind":"Name","value":"fallbackImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ticketmasterApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"ticketmasterAttractionId"}},{"kind":"Field","name":{"kind":"Name","value":"androidTicketmasterApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"androidTicketmasterScheme"}},{"kind":"Field","name":{"kind":"Name","value":"iosTicketmasterApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"ticketsEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"tournamentSiteURL"}},{"kind":"Field","name":{"kind":"Name","value":"useTournamentSiteURL"}}]}}]} as unknown as DocumentNode;
export const ApiTournamentsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Tournaments"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ids"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"tournaments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"ids"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ids"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TournamentFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TournamentFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Tournament"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"tournamentName"}},{"kind":"Field","name":{"kind":"Name","value":"tournamentLogo"}},{"kind":"Field","name":{"kind":"Name","value":"tournamentLogoAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"imageOrg"}},{"kind":"Field","name":{"kind":"Name","value":"imagePath"}},{"kind":"Field","name":{"kind":"Name","value":"assetType"}},{"kind":"Field","name":{"kind":"Name","value":"deliveryType"}},{"kind":"Field","name":{"kind":"Name","value":"fallbackImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tournamentLocation"}},{"kind":"Field","name":{"kind":"Name","value":"tournamentStatus"}},{"kind":"Field","name":{"kind":"Name","value":"features"}},{"kind":"Field","name":{"kind":"Name","value":"formatType"}},{"kind":"Field","name":{"kind":"Name","value":"roundStatusDisplay"}},{"kind":"Field","name":{"kind":"Name","value":"roundDisplay"}},{"kind":"Field","name":{"kind":"Name","value":"roundStatus"}},{"kind":"Field","name":{"kind":"Name","value":"roundStatusColor"}},{"kind":"Field","name":{"kind":"Name","value":"leaderboardTakeover"}},{"kind":"Field","name":{"kind":"Name","value":"currentRound"}},{"kind":"Field","name":{"kind":"Name","value":"timezone"}},{"kind":"Field","name":{"kind":"Name","value":"seasonYear"}},{"kind":"Field","name":{"kind":"Name","value":"displayDate"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"scoredLevel"}},{"kind":"Field","name":{"kind":"Name","value":"events"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"eventName"}},{"kind":"Field","name":{"kind":"Name","value":"leaderboardId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"courses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"courseName"}},{"kind":"Field","name":{"kind":"Name","value":"courseCode"}},{"kind":"Field","name":{"kind":"Name","value":"hostCourse"}},{"kind":"Field","name":{"kind":"Name","value":"scoringLevel"}},{"kind":"Field","name":{"kind":"Name","value":"enabled"}},{"kind":"Field","name":{"kind":"Name","value":"features"}}]}},{"kind":"Field","name":{"kind":"Name","value":"weather"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"logo"}},{"kind":"Field","name":{"kind":"Name","value":"logoAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"imageOrg"}},{"kind":"Field","name":{"kind":"Name","value":"imagePath"}},{"kind":"Field","name":{"kind":"Name","value":"assetType"}},{"kind":"Field","name":{"kind":"Name","value":"deliveryType"}},{"kind":"Field","name":{"kind":"Name","value":"fallbackImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"logoDark"}},{"kind":"Field","name":{"kind":"Name","value":"logoDarkAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"imageOrg"}},{"kind":"Field","name":{"kind":"Name","value":"imagePath"}},{"kind":"Field","name":{"kind":"Name","value":"assetType"}},{"kind":"Field","name":{"kind":"Name","value":"deliveryType"}},{"kind":"Field","name":{"kind":"Name","value":"fallbackImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"logoAccessibility"}},{"kind":"Field","name":{"kind":"Name","value":"tempF"}},{"kind":"Field","name":{"kind":"Name","value":"tempC"}},{"kind":"Field","name":{"kind":"Name","value":"condition"}},{"kind":"Field","name":{"kind":"Name","value":"windDirection"}},{"kind":"Field","name":{"kind":"Name","value":"windSpeedMPH"}},{"kind":"Field","name":{"kind":"Name","value":"windSpeedKPH"}},{"kind":"Field","name":{"kind":"Name","value":"precipitation"}},{"kind":"Field","name":{"kind":"Name","value":"humidity"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ticketsURL"}},{"kind":"Field","name":{"kind":"Name","value":"tournamentSiteURL"}},{"kind":"Field","name":{"kind":"Name","value":"useTournamentSiteURL"}},{"kind":"Field","name":{"kind":"Name","value":"pdfUrl"}},{"kind":"Field","name":{"kind":"Name","value":"conductedByLabel"}},{"kind":"Field","name":{"kind":"Name","value":"conductedByLink"}},{"kind":"Field","name":{"kind":"Name","value":"beautyImage"}},{"kind":"Field","name":{"kind":"Name","value":"beautyImageAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"imageOrg"}},{"kind":"Field","name":{"kind":"Name","value":"imagePath"}},{"kind":"Field","name":{"kind":"Name","value":"assetType"}},{"kind":"Field","name":{"kind":"Name","value":"deliveryType"}},{"kind":"Field","name":{"kind":"Name","value":"fallbackImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"shouldSubscribe"}},{"kind":"Field","name":{"kind":"Name","value":"infoPath"}},{"kind":"Field","name":{"kind":"Name","value":"infoPathWebview"}},{"kind":"Field","name":{"kind":"Name","value":"howItWorks"}},{"kind":"Field","name":{"kind":"Name","value":"howItWorksPill"}},{"kind":"Field","name":{"kind":"Name","value":"howItWorksWebview"}},{"kind":"Field","name":{"kind":"Name","value":"hideRolexClock"}},{"kind":"Field","name":{"kind":"Name","value":"hideSov"}},{"kind":"Field","name":{"kind":"Name","value":"ticketsEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"headshotBaseUrl"}},{"kind":"Field","name":{"kind":"Name","value":"rightRailConfig"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"imageAltText"}},{"kind":"Field","name":{"kind":"Name","value":"buttonLink"}},{"kind":"Field","name":{"kind":"Name","value":"buttonText"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tournamentCategoryInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"logoLight"}},{"kind":"Field","name":{"kind":"Name","value":"logoLightAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"imageOrg"}},{"kind":"Field","name":{"kind":"Name","value":"imagePath"}},{"kind":"Field","name":{"kind":"Name","value":"assetType"}},{"kind":"Field","name":{"kind":"Name","value":"deliveryType"}},{"kind":"Field","name":{"kind":"Name","value":"fallbackImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"logoDark"}},{"kind":"Field","name":{"kind":"Name","value":"logoDarkAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"imageOrg"}},{"kind":"Field","name":{"kind":"Name","value":"imagePath"}},{"kind":"Field","name":{"kind":"Name","value":"assetType"}},{"kind":"Field","name":{"kind":"Name","value":"deliveryType"}},{"kind":"Field","name":{"kind":"Name","value":"fallbackImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}},{"kind":"Field","name":{"kind":"Name","value":"disabledScorecardTabs"}}]}}]} as unknown as DocumentNode;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    LeaderboardV3(variables: ApiLeaderboardV3QueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<ApiLeaderboardV3Query> {
      return withWrapper((wrappedRequestHeaders) => client.request<ApiLeaderboardV3Query>({ document: ApiLeaderboardV3Document, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'LeaderboardV3', 'query', variables);
    },
    ScheduleYears(variables: ApiScheduleYearsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<ApiScheduleYearsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ApiScheduleYearsQuery>({ document: ApiScheduleYearsDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'ScheduleYears', 'query', variables);
    },
    Schedule(variables: ApiScheduleQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<ApiScheduleQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ApiScheduleQuery>({ document: ApiScheduleDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'Schedule', 'query', variables);
    },
    CompleteSchedule(variables: ApiCompleteScheduleQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<ApiCompleteScheduleQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ApiCompleteScheduleQuery>({ document: ApiCompleteScheduleDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'CompleteSchedule', 'query', variables);
    },
    UpcomingSchedule(variables: ApiUpcomingScheduleQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<ApiUpcomingScheduleQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ApiUpcomingScheduleQuery>({ document: ApiUpcomingScheduleDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'UpcomingSchedule', 'query', variables);
    },
    Tournaments(variables?: ApiTournamentsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<ApiTournamentsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ApiTournamentsQuery>({ document: ApiTournamentsDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'Tournaments', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;
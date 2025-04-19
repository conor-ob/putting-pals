/* eslint-disable */

// #region generated types as of 05/11/2023 before PGA TOUR turned off GraphQL introspection

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: NonNullable<T[P]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  /** The `AWSDateTime` scalar type provided by AWS AppSync, represents a valid ***extended*** [ISO 8601 DateTime](https://en.wikipedia.org/wiki/ISO_8601#Combined_date_and_time_representations) string. In other words, this scalar type accepts datetime strings of the form `YYYY-MM-DDThh:mm:ss.SSSZ`.  The scalar can also accept "negative years" of the form `-YYYY` which correspond to years before `0000`. For example, "**-2017-01-01T00:00Z**" and "**-9999-01-01T00:00Z**" are both valid datetime strings.  The field after the two digit seconds field is a nanoseconds field. It can accept between 1 and 9 digits. So, for example, "**1970-01-01T12:00:00.2Z**", "**1970-01-01T12:00:00.277Z**" and "**1970-01-01T12:00:00.123456789Z**" are all valid datetime strings.  The seconds and nanoseconds fields are optional (the seconds field must be specified if the nanoseconds field is to be used).  The [time zone offset](https://en.wikipedia.org/wiki/ISO_8601#Time_zone_designators) is compulsory for this scalar. The time zone offset must either be `Z` (representing the UTC time zone) or be in the format `±hh:mm:ss`. The seconds field in the timezone offset will be considered valid even though it is not part of the ISO 8601 standard. */
  AWSDateTime: { input: string; output: string };
  /** The `AWSTimestamp` scalar type provided by AWS AppSync, represents the number of seconds that have elapsed since `1970-01-01T00:00Z`. Negative values are also accepted and these represent the number of seconds till `1970-01-01T00:00Z`.  Timestamps are serialized and deserialized as integers. The minimum supported timestamp value is **`-31557014167219200`** which corresponds to `-1000000000-01-01T00:00Z`. The maximum supported timestamp value is **`31556889864403199`** which corresponds to `1000000000-12-31T23:59:59.999999999Z`. */
  AWSTimestamp: { input: number; output: number };
};

export type ArHole = {
  __typename?: "ARHole";
  holeNumber: Scalars["Int"]["output"];
};

export type Abbreviations = {
  __typename?: "Abbreviations";
  description?: Maybe<Scalars["String"]["output"]>;
  key: Scalars["String"]["output"];
  title: Scalars["String"]["output"];
};

export type AdConfig = {
  __typename?: "AdConfig";
  aon?: Maybe<AdTagConfig>;
  aonSection?: Maybe<AdTagConfig>;
  audio?: Maybe<AdTagConfig>;
  comcastSection?: Maybe<AdTagConfig>;
  comcastTop10?: Maybe<AdTagConfig>;
  config: GlobalAdConfig;
  course?: Maybe<AdTagConfig>;
  cupLeaderboardGroup?: Maybe<AdTagConfig>;
  cupLeaderboardSingles?: Maybe<AdTagConfig>;
  cupTeeTimesGroup?: Maybe<AdTagConfig>;
  cupTeeTimesSingles?: Maybe<AdTagConfig>;
  dpwtRankings?: Maybe<AdTagConfig>;
  fantasy?: Maybe<AdTagConfig>;
  fedexCup?: Maybe<AdTagConfig>;
  fedexcupSection?: Maybe<AdTagConfig>;
  fortinetCup?: Maybe<AdTagConfig>;
  fortinetcupSection?: Maybe<AdTagConfig>;
  golfBet?: Maybe<AdTagConfig>;
  groupScorecard?: Maybe<AdTagConfig>;
  groupStageLeaderboard?: Maybe<AdTagConfig>;
  groupStageStandings?: Maybe<AdTagConfig>;
  groupstageStandings?: Maybe<AdTagConfig>;
  homepage?: Maybe<AdTagConfig>;
  knockoutLeaderboard?: Maybe<AdTagConfig>;
  leaderboard?: Maybe<AdTagConfig>;
  leaderboardCutline?: Maybe<AdTagConfig>;
  leaderboardFavorites?: Maybe<AdTagConfig>;
  leaderboardLandscape?: Maybe<AdTagConfig>;
  leaderboardLandscapeOdds?: Maybe<AdTagConfig>;
  leaderboardLandscapeProbability?: Maybe<AdTagConfig>;
  leaderboardLandscapeShotDetails?: Maybe<AdTagConfig>;
  leaderboardOdds?: Maybe<AdTagConfig>;
  leaderboardProbability?: Maybe<AdTagConfig>;
  leaderboardRow50?: Maybe<AdTagConfig>;
  leaderboardShotDetails?: Maybe<AdTagConfig>;
  liveLeaderboard?: Maybe<AdTagConfig>;
  mobilePlayerStory?: Maybe<AdTagConfig>;
  mobileYourTourHomeStory?: Maybe<AdTagConfig>;
  more?: Maybe<AdTagConfig>;
  netflix?: Maybe<AdTagConfig>;
  news?: Maybe<AdTagConfig>;
  newsArticlemidcontent?: Maybe<AdTagConfig>;
  newsArticles?: Maybe<AdTagConfig>;
  odds?: Maybe<AdTagConfig>;
  payneStewartaward?: Maybe<AdTagConfig>;
  playerProfile?: Maybe<AdTagConfig>;
  playerProfileBio?: Maybe<AdTagConfig>;
  playerProfileEquipment?: Maybe<AdTagConfig>;
  playerProfileResults?: Maybe<AdTagConfig>;
  playerProfileStats?: Maybe<AdTagConfig>;
  playerScorecard?: Maybe<AdTagConfig>;
  players?: Maybe<AdTagConfig>;
  playoffScorecard?: Maybe<AdTagConfig>;
  rsm?: Maybe<AdTagConfig>;
  rsmSection?: Maybe<AdTagConfig>;
  schedule?: Maybe<AdTagConfig>;
  schwabCup?: Maybe<AdTagConfig>;
  schwabcupSection?: Maybe<AdTagConfig>;
  scorecard?: Maybe<AdTagConfig>;
  scorecardOdds?: Maybe<AdTagConfig>;
  sidebarTicker?: Maybe<AdTagConfig>;
  standings?: Maybe<AdTagConfig>;
  stats?: Maybe<AdTagConfig>;
  statsSection?: Maybe<AdTagConfig>;
  teeTimes?: Maybe<AdTagConfig>;
  the25Section?: Maybe<AdTagConfig>;
  the25pointsList?: Maybe<AdTagConfig>;
  totalPlayCup?: Maybe<AdTagConfig>;
  totalplaycupSection?: Maybe<AdTagConfig>;
  tourcast?: Maybe<AdTagConfig>;
  tournament?: Maybe<AdTagConfig>;
  tournamentSection?: Maybe<AdTagConfig>;
  training?: Maybe<AdTagConfig>;
  university?: Maybe<AdTagConfig>;
  watch?: Maybe<AdTagConfig>;
  webPlayerStories?: Maybe<AdTagConfig>;
  yahooLeaderboard?: Maybe<AdTagConfig>;
};

export type AdSize = {
  __typename?: "AdSize";
  height: Scalars["Int"]["output"];
  width: Scalars["Int"]["output"];
};

export type AdTagConfig = {
  __typename?: "AdTagConfig";
  actRefresh?: Maybe<Scalars["Boolean"]["output"]>;
  adTest?: Maybe<Scalars["String"]["output"]>;
  environment?: Maybe<Scalars["String"]["output"]>;
  injectAds?: Maybe<Scalars["Boolean"]["output"]>;
  refresh?: Maybe<Scalars["Int"]["output"]>;
  rows: Array<AdTagRowConfig>;
  s1: Scalars["String"]["output"];
  s2?: Maybe<Scalars["String"]["output"]>;
  timedRefresh?: Maybe<Scalars["Boolean"]["output"]>;
  uniqueId: Scalars["String"]["output"];
};

export type AdTagRowConfig = {
  __typename?: "AdTagRowConfig";
  container?: Maybe<AdSize>;
  containerLarge?: Maybe<AdSize>;
  containerMedium?: Maybe<AdSize>;
  containerSmall?: Maybe<AdSize>;
  fluid?: Maybe<Scalars["Boolean"]["output"]>;
  index: Scalars["Int"]["output"];
  playerSponsorship?: Maybe<Scalars["Boolean"]["output"]>;
  pos: Scalars["String"]["output"];
  sizes?: Maybe<Array<AdSize>>;
};

export type Aon = {
  __typename?: "Aon";
  description: Scalars["String"]["output"];
  leaders: Array<AonPlayer>;
  logo: Scalars["String"]["output"];
  pastTournaments: Array<AonHole>;
  players: Array<AonPlayer>;
  title: Scalars["String"]["output"];
  upcomingTournaments: Array<AonHole>;
};

export type AonHole = {
  __typename?: "AonHole";
  courseName: Scalars["String"]["output"];
  dateText: Scalars["String"]["output"];
  holeImage: Scalars["String"]["output"];
  holeNum: Scalars["Int"]["output"];
  par: Scalars["Int"]["output"];
  tournamentId: Scalars["String"]["output"];
  tournamentName: Scalars["String"]["output"];
  yardage: Scalars["Int"]["output"];
};

export type AonPlayer = {
  __typename?: "AonPlayer";
  countryCode: Scalars["String"]["output"];
  displayName: Scalars["String"]["output"];
  playerId: Scalars["ID"]["output"];
  position: Scalars["String"]["output"];
  roundsPlayed: Scalars["String"]["output"];
  roundsToGo: Scalars["String"]["output"];
  score: Scalars["String"]["output"];
};

export type ArticleOddsMarkets = {
  __typename?: "ArticleOddsMarkets";
  class: Scalars["String"]["output"];
  market: HistoricalOddsId;
};

export type ArticleOddsMarketsInput = {
  class: Scalars["String"]["input"];
  market: HistoricalOddsId;
};

export type ArticleOddsPlayer = {
  __typename?: "ArticleOddsPlayer";
  playerId: Scalars["String"]["output"];
  playerName?: Maybe<Scalars["String"]["output"]>;
};

export type ArticleOddsPlayerInput = {
  playerId: Scalars["String"]["input"];
  playerName?: InputMaybe<Scalars["String"]["input"]>;
};

export type ArticleOddsTableQuery = {
  __typename?: "ArticleOddsTableQuery";
  markets?: Maybe<Array<ArticleOddsMarkets>>;
  players?: Maybe<Array<ArticleOddsPlayer>>;
  timeStamp?: Maybe<Scalars["String"]["output"]>;
  tournamentId: Scalars["String"]["output"];
  tournamentName: Scalars["String"]["output"];
};

export enum ArticleSponsor {
  Golfwrx = "GOLFWRX",
}

export type Audio = {
  __typename?: "Audio";
  id: Scalars["ID"]["output"];
  imageUrl: Scalars["String"]["output"];
  latestPubDate: Scalars["AWSTimestamp"]["output"];
  numEpisodes: Scalars["Int"]["output"];
  rssFeed: Scalars["String"]["output"];
  shareUrl: Scalars["String"]["output"];
  streamUrls: StreamUrls;
  summary: Scalars["String"]["output"];
  title: Scalars["String"]["output"];
};

export type AudioStream = {
  __typename?: "AudioStream";
  id: Scalars["ID"]["output"];
  live: Scalars["Boolean"]["output"];
  posterImage: Scalars["String"]["output"];
  shareUrl: Scalars["String"]["output"];
  streamTitle: Scalars["String"]["output"];
  streamUrl: Scalars["String"]["output"];
};

export type AugmentedRealityConfig = {
  __typename?: "AugmentedRealityConfig";
  holes: Array<ArHole>;
};

export type AvailableMarket = {
  __typename?: "AvailableMarket";
  market: Scalars["String"]["output"];
  oddsOptions: Array<OddsOption>;
  subMarket?: Maybe<Scalars["String"]["output"]>;
};

/**   Odds Options Types */
export type BaseOddsOption = {
  entity: OddsEntity;
  odds: OddsValues;
};

export type BioRank = {
  __typename?: "BioRank";
  rank: Scalars["Int"]["output"];
  statName: Scalars["String"]["output"];
};

export type BroadcastAudioStream = {
  __typename?: "BroadcastAudioStream";
  channelTitle: Scalars["String"]["output"];
  endTime: Scalars["AWSTimestamp"]["output"];
  id: Scalars["String"]["output"];
  liveStatus: LiveStatus;
  network: BroadcastNetwork;
  roundDisplay: Scalars["String"]["output"];
  roundNumber: Scalars["Int"]["output"];
  startTime: Scalars["AWSTimestamp"]["output"];
  streamTitle: Scalars["String"]["output"];
};

export type BroadcastCoverage = {
  __typename?: "BroadcastCoverage";
  countryCode: Scalars["String"]["output"];
  coverageType: Array<BroadcastCoverageType>;
  id: Scalars["String"]["output"];
  livePillLabel: Scalars["String"]["output"];
  tournamentName: Scalars["String"]["output"];
};

export type BroadcastCoverageCarousel = {
  __typename?: "BroadcastCoverageCarousel";
  carousel: Array<BroadcastCoverageVideo>;
};

export type BroadcastCoverageItem =
  | BroadcastAudioStream
  | BroadcastFeaturedGroup
  | BroadcastFeaturedHole
  | BroadcastFullTelecast;

export type BroadcastCoverageType =
  | BroadcastAudioStream
  | BroadcastCoverageCarousel
  | BroadcastFeaturedGroup
  | BroadcastFeaturedHole
  | BroadcastFullTelecast;

export type BroadcastCoverageVideo =
  | BroadcastFeaturedGroup
  | BroadcastFeaturedHole
  | BroadcastFullTelecast;

export type BroadcastFeaturedGroup = {
  __typename?: "BroadcastFeaturedGroup";
  channelTitle: Scalars["String"]["output"];
  courseId?: Maybe<Scalars["String"]["output"]>;
  endTime: Scalars["AWSTimestamp"]["output"];
  groups: Array<BroadcastGroup>;
  id: Scalars["String"]["output"];
  liveStatus: LiveStatus;
  network: BroadcastNetwork;
  promoImage?: Maybe<Scalars["String"]["output"]>;
  promoImages: Array<Scalars["String"]["output"]>;
  roundDisplay: Scalars["String"]["output"];
  roundNumber: Scalars["Int"]["output"];
  startTime: Scalars["AWSTimestamp"]["output"];
  streamTitle: Scalars["String"]["output"];
};

export type BroadcastFeaturedHole = {
  __typename?: "BroadcastFeaturedHole";
  channelTitle: Scalars["String"]["output"];
  courseId?: Maybe<Scalars["String"]["output"]>;
  endTime: Scalars["AWSTimestamp"]["output"];
  featuredHoles: Array<Scalars["Int"]["output"]>;
  id: Scalars["String"]["output"];
  liveStatus: LiveStatus;
  network: BroadcastNetwork;
  promoImage?: Maybe<Scalars["String"]["output"]>;
  promoImages: Array<Scalars["String"]["output"]>;
  roundDisplay: Scalars["String"]["output"];
  roundNumber: Scalars["Int"]["output"];
  startTime: Scalars["AWSTimestamp"]["output"];
  streamTitle: Scalars["String"]["output"];
};

export type BroadcastFullTelecast = {
  __typename?: "BroadcastFullTelecast";
  channelTitle: Scalars["String"]["output"];
  endTime: Scalars["AWSTimestamp"]["output"];
  id: Scalars["String"]["output"];
  liveStatus: LiveStatus;
  network: BroadcastNetwork;
  promoImage?: Maybe<Scalars["String"]["output"]>;
  promoImages: Array<Scalars["String"]["output"]>;
  roundDisplay: Scalars["String"]["output"];
  roundNumber: Scalars["Int"]["output"];
  startTime: Scalars["AWSTimestamp"]["output"];
  streamTitle: Scalars["String"]["output"];
};

export type BroadcastGroup = {
  __typename?: "BroadcastGroup";
  extendedCoverage?: Maybe<Scalars["Boolean"]["output"]>;
  id: Scalars["String"]["output"];
  liveStatus: LiveStatus;
  playerLastNames?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
};

export type BroadcastNetwork = {
  __typename?: "BroadcastNetwork";
  androidLink: Scalars["String"]["output"];
  androidStreamUrl?: Maybe<Scalars["String"]["output"]>;
  appleAppStore: Scalars["String"]["output"];
  asnw?: Maybe<Scalars["String"]["output"]>;
  backgroundColor?: Maybe<Scalars["String"]["output"]>;
  backgroundColorDark?: Maybe<Scalars["String"]["output"]>;
  caid?: Maybe<Scalars["String"]["output"]>;
  channelId?: Maybe<Scalars["String"]["output"]>;
  daiStreamActivityId?: Maybe<Scalars["String"]["output"]>;
  descriptionUrl?: Maybe<Scalars["String"]["output"]>;
  flag?: Maybe<Scalars["String"]["output"]>;
  fwCoppa?: Maybe<Scalars["String"]["output"]>;
  fwHReferer?: Maybe<Scalars["String"]["output"]>;
  fwNielsenAppId?: Maybe<Scalars["String"]["output"]>;
  googlePlayStore: Scalars["String"]["output"];
  iOSLink: Scalars["String"]["output"];
  id: Scalars["String"]["output"];
  iosStreamUrl?: Maybe<Scalars["String"]["output"]>;
  liveAssetId?: Maybe<Scalars["String"]["output"]>;
  metr?: Maybe<Scalars["String"]["output"]>;
  mode?: Maybe<Scalars["String"]["output"]>;
  networkLogo?: Maybe<Scalars["String"]["output"]>;
  networkLogoDark?: Maybe<Scalars["String"]["output"]>;
  networkName: Scalars["String"]["output"];
  nw?: Maybe<Scalars["String"]["output"]>;
  priorityNum?: Maybe<Scalars["Int"]["output"]>;
  prof?: Maybe<Scalars["String"]["output"]>;
  resp?: Maybe<Scalars["String"]["output"]>;
  simulcast?: Maybe<Scalars["Boolean"]["output"]>;
  simulcastUrl?: Maybe<Scalars["String"]["output"]>;
  ssnw?: Maybe<Scalars["String"]["output"]>;
  streamUrl?: Maybe<Scalars["String"]["output"]>;
  sz?: Maybe<Scalars["String"]["output"]>;
  url?: Maybe<Scalars["String"]["output"]>;
  vdty?: Maybe<Scalars["String"]["output"]>;
  vrdu?: Maybe<Scalars["String"]["output"]>;
};

export type BroadcastNetworks = {
  __typename?: "BroadcastNetworks";
  networks: Array<BroadcastNetwork>;
};

export type CallToAction = {
  __typename?: "CallToAction";
  link: Scalars["String"]["output"];
  text: Scalars["String"]["output"];
};

export type Category = {
  __typename?: "Category";
  displayName: Scalars["String"]["output"];
  franchises: Array<Franchise>;
  queryValue: Scalars["String"]["output"];
};

export type CategoryPlayerStat = {
  __typename?: "CategoryPlayerStat";
  color: StatColor;
  statName: Scalars["String"]["output"];
  statValue: Scalars["String"]["output"];
};

export type CategoryStat = {
  __typename?: "CategoryStat";
  displaySeason: Scalars["String"]["output"];
  lastProcessed: Scalars["String"]["output"];
  players: Array<CategoryStatPlayer>;
  statDescription: Scalars["String"]["output"];
  statHeaders: Array<Scalars["String"]["output"]>;
  statTitle: Scalars["String"]["output"];
  tourAvg?: Maybe<Scalars["String"]["output"]>;
  year: Scalars["Int"]["output"];
};

export type CategoryStatPlayer = {
  __typename?: "CategoryStatPlayer";
  playerId: Scalars["String"]["output"];
  playerName: Scalars["String"]["output"];
  rank: Scalars["Int"]["output"];
  rankChangeTendency?: Maybe<StatRankMovement>;
  rankDiff: Scalars["String"]["output"];
  stats: Array<CategoryPlayerStat>;
};

export enum CategoryStatType {
  Event = "EVENT",
  Ytd = "YTD",
}

export type ContentFragment = {
  __typename?: "ContentFragment";
  fragments: Array<ContentFragments>;
  totalLength: Scalars["Int"]["output"];
};

export type ContentFragmentType = {
  __typename?: "ContentFragmentType";
  contentType: ContentType;
  path: Scalars["String"]["output"];
};

export type ContentFragments =
  | HomepageLead
  | HomepageNews
  | HomepageProgramStanding
  | KopHeader
  | KopSignUp
  | KopStandingsList
  | KopSubheader
  | KopUpcomingTournament
  | KopZigZag
  | MediaGallery
  | ThreeUpPhoto
  | ThreeUpStats
  | TwoColumn
  | VideoHero;

export type ContentFragmentsCompressed = {
  __typename?: "ContentFragmentsCompressed";
  limit?: Maybe<Scalars["Int"]["output"]>;
  offset?: Maybe<Scalars["Int"]["output"]>;
  path?: Maybe<Scalars["String"]["output"]>;
  payload: Scalars["String"]["output"];
  tourCode: TourCode;
};

export type ContentStat = {
  __typename?: "ContentStat";
  statId: Scalars["String"]["output"];
  statName: Scalars["String"]["output"];
};

export enum ContentType {
  ContentFragments = "CONTENT_FRAGMENTS",
  GenericContent = "GENERIC_CONTENT",
  NewsArticle = "NEWS_ARTICLE",
}

export type Course = {
  __typename?: "Course";
  courseCode: Scalars["String"]["output"];
  courseName: Scalars["String"]["output"];
  hostCourse: Scalars["Boolean"]["output"];
  id: Scalars["ID"]["output"];
  scoringLevel: ScoringLevel;
};

export type CourseDetailRowValue = {
  __typename?: "CourseDetailRowValue";
  tendency?: Maybe<ScoringTendency>;
  value: Scalars["String"]["output"];
};

export type CourseFilter = {
  __typename?: "CourseFilter";
  courseId: Scalars["Int"]["output"];
  courseName: Scalars["String"]["output"];
};

export type CourseHoleHeader = {
  __typename?: "CourseHoleHeader";
  courseId: Scalars["ID"]["output"];
  holeHeaders: Array<HoleHeaderV2>;
};

export type CourseHoleStats = {
  __typename?: "CourseHoleStats";
  birdies?: Maybe<Scalars["Int"]["output"]>;
  bogeys?: Maybe<Scalars["Int"]["output"]>;
  courseHoleNum: Scalars["Int"]["output"];
  doubleBogey?: Maybe<Scalars["Int"]["output"]>;
  eagles?: Maybe<Scalars["Int"]["output"]>;
  holeImage: Scalars["String"]["output"];
  holePickleGreenLeftToRight: Scalars["String"]["output"];
  /** @deprecated Use broadcast api indication instead of this. */
  live: Scalars["Boolean"]["output"];
  parValue: Scalars["String"]["output"];
  pars?: Maybe<Scalars["Int"]["output"]>;
  pinGreen: PointOfInterestCoords;
  rank?: Maybe<Scalars["Int"]["output"]>;
  scoringAverage: Scalars["String"]["output"];
  scoringAverageDiff: Scalars["String"]["output"];
  scoringDiffTendency: ScoringTendency;
  yards: Scalars["Int"]["output"];
};

export type CourseOverviewItem = {
  __typename?: "CourseOverviewItem";
  details: Array<CourseOverviewItemDetails>;
  displayName: Scalars["String"]["output"];
  image: Scalars["String"]["output"];
  rank: Scalars["Int"]["output"];
};

export type CourseOverviewItemDetails = {
  __typename?: "CourseOverviewItemDetails";
  label: Scalars["String"]["output"];
  value: Scalars["String"]["output"];
};

export type CoursePills = {
  __typename?: "CoursePills";
  courseId: Scalars["String"]["output"];
  courseName: Scalars["String"]["output"];
};

export type CourseResultsTournament = {
  __typename?: "CourseResultsTournament";
  points: Scalars["String"]["output"];
  position: Scalars["String"]["output"];
  roundScores: Array<RoundScoreItem>;
  season: Scalars["String"]["output"];
  toPar: Scalars["String"]["output"];
  total: Scalars["String"]["output"];
  tourcastURL?: Maybe<Scalars["String"]["output"]>;
  tourcastURLWeb?: Maybe<Scalars["String"]["output"]>;
  tournamentId: Scalars["String"]["output"];
  tournamentName: Scalars["String"]["output"];
  winnings: Scalars["String"]["output"];
  year: Scalars["Int"]["output"];
};

export type CourseRound = {
  __typename?: "CourseRound";
  holeStats: Array<HoleStat>;
  live: Scalars["Boolean"]["output"];
  roundHeader: Scalars["String"]["output"];
  roundNum?: Maybe<Scalars["Int"]["output"]>;
};

export type CourseStat = {
  __typename?: "CourseStat";
  courseCode: Scalars["String"]["output"];
  courseId: Scalars["String"]["output"];
  courseImage: Scalars["String"]["output"];
  courseName: Scalars["String"]["output"];
  courseOverview: TournamentCourse;
  holeDetailsAvailability: HoleDetailsAvailability;
  hostCourse: Scalars["Boolean"]["output"];
  par: Scalars["Int"]["output"];
  roundHoleStats: Array<CourseRound>;
  roundPills?: Maybe<Array<Scalars["String"]["output"]>>;
  shotlinkLogo?: Maybe<Scalars["String"]["output"]>;
  tournamentId: Scalars["ID"]["output"];
  yardage: Scalars["String"]["output"];
};

export type CourseStatsCategory = {
  __typename?: "CourseStatsCategory";
  detailId: CourseStatsId;
  header: Scalars["String"]["output"];
  items: Array<CourseOverviewItem>;
};

export type CourseStatsDetails = {
  __typename?: "CourseStatsDetails";
  displayName: Scalars["String"]["output"];
  displayYear: Scalars["String"]["output"];
  headers: Array<Scalars["String"]["output"]>;
  round: ToughestRound;
  rows: Array<CourseStatsDetailsRow>;
  seasons: Array<StatYearPills>;
  shareURL?: Maybe<Scalars["String"]["output"]>;
  tableName: Scalars["String"]["output"];
  tourCode: TourCode;
  year: Scalars["Int"]["output"];
};

export type CourseStatsDetailsRow = {
  __typename?: "CourseStatsDetailsRow";
  displayName: Scalars["String"]["output"];
  rank: Scalars["Int"]["output"];
  tournamentId: Scalars["String"]["output"];
  tournamentName: Scalars["String"]["output"];
  values: Array<CourseDetailRowValue>;
};

export enum CourseStatsId {
  ToughestCourse = "TOUGHEST_COURSE",
  ToughestHoles = "TOUGHEST_HOLES",
}

export type CourseStatsOverview = {
  __typename?: "CourseStatsOverview";
  categories: Array<CourseStatsCategory>;
  tourCode: TourCode;
  year: Scalars["Int"]["output"];
};

export type CupLeaderboardMatch = {
  __typename?: "CupLeaderboardMatch";
  displayScore: Scalars["String"]["output"];
  location: Scalars["String"]["output"];
  locationSort: Scalars["Int"]["output"];
  matchId: Scalars["ID"]["output"];
  matchStatus: Scalars["String"]["output"];
  matchStatusColor: Scalars["String"]["output"];
  matchStatusFlag?: Maybe<Scalars["String"]["output"]>;
  matchTitle: Scalars["String"]["output"];
  startingTee: Scalars["String"]["output"];
  teams: Array<CupLeaderboardMatchTeam>;
  teeTime: Scalars["AWSTimestamp"]["output"];
};

export type CupLeaderboardMatchPlayer = {
  __typename?: "CupLeaderboardMatchPlayer";
  displayName: Scalars["String"]["output"];
  playerId: Scalars["ID"]["output"];
  shortName: Scalars["String"]["output"];
};

export type CupLeaderboardMatchTeam = {
  __typename?: "CupLeaderboardMatchTeam";
  players: Array<CupLeaderboardMatchPlayer>;
  status: CupLeaderboardTeamStatus;
  teamColor: Scalars["String"]["output"];
  teamFlag: Scalars["String"]["output"];
  teamId: Scalars["ID"]["output"];
  teamScore?: Maybe<Scalars["String"]["output"]>;
};

export enum CupLeaderboardTeamStatus {
  Behind = "BEHIND",
  Leads = "LEADS",
  Tied = "TIED",
  Unknown = "UNKNOWN",
  Wins = "WINS",
}

export enum CupOverviewDisplayType {
  PointsOnly = "POINTS_ONLY",
  Progress = "PROGRESS",
}

export type CupPastResults = {
  __typename?: "CupPastResults";
  permId: Scalars["ID"]["output"];
  years: Array<CupPastResultsYear>;
};

export type CupPastResultsTeam = {
  __typename?: "CupPastResultsTeam";
  badgeText?: Maybe<Scalars["String"]["output"]>;
  color: Scalars["String"]["output"];
  score: Scalars["String"]["output"];
  teamId: Scalars["ID"]["output"];
  teamLogo: Scalars["String"]["output"];
  teamName: Scalars["String"]["output"];
};

export type CupPastResultsYear = {
  __typename?: "CupPastResultsYear";
  displayYear: Scalars["String"]["output"];
  teams: Array<CupPastResultsTeam>;
  year: Scalars["Int"]["output"];
};

export enum CupRankMovementDirection {
  Constant = "CONSTANT",
  Down = "DOWN",
  Unknown = "UNKNOWN",
  Up = "UP",
}

export type CupRankingPlayer = {
  __typename?: "CupRankingPlayer";
  id: Scalars["String"]["output"];
  movement: Scalars["String"]["output"];
  movementDirection: CupRankMovementDirection;
  name: Scalars["String"]["output"];
  playerCountry: Scalars["String"]["output"];
  position: Scalars["String"]["output"];
  rankLogoDark?: Maybe<Scalars["String"]["output"]>;
  rankLogoLight?: Maybe<Scalars["String"]["output"]>;
  total: Scalars["String"]["output"];
  totals: Array<CupRankingTotal>;
  winner?: Maybe<Scalars["Boolean"]["output"]>;
};

export type CupRankingPlayerInfoRow = {
  __typename?: "CupRankingPlayerInfoRow";
  image?: Maybe<Scalars["String"]["output"]>;
  imageDark?: Maybe<Scalars["String"]["output"]>;
  text: Scalars["String"]["output"];
};

export type CupRankingPlayerWrapper =
  | CupRankingPlayer
  | CupRankingPlayerInfoRow;

export type CupRankingTotal = {
  __typename?: "CupRankingTotal";
  display: Scalars["String"]["output"];
  value: Scalars["String"]["output"];
};

export type CupScorecard = {
  __typename?: "CupScorecard";
  currentHole?: Maybe<Scalars["Int"]["output"]>;
  id: Scalars["ID"]["output"];
  infoWebUrl?: Maybe<Scalars["String"]["output"]>;
  matchHoleScores: Array<MatchHole>;
  matchName: Scalars["String"]["output"];
  messages: Array<Message>;
  scorecardTitle: Scalars["String"]["output"];
  teams: Array<CupTeam>;
  tourcastUrl?: Maybe<Scalars["String"]["output"]>;
  tourcastUrlWeb?: Maybe<Scalars["String"]["output"]>;
};

export type CupTeam = {
  __typename?: "CupTeam";
  players?: Maybe<Array<MpScorecardPlayer>>;
  teamColor: Scalars["String"]["output"];
  teamFlag: Scalars["String"]["output"];
  teamId: Scalars["ID"]["output"];
  teamPoints?: Maybe<Scalars["String"]["output"]>;
};

export type CupTeamRoster = {
  __typename?: "CupTeamRoster";
  sections: Array<CupTeamRosterSection>;
  teamColor: Scalars["String"]["output"];
  teamLogo?: Maybe<Scalars["String"]["output"]>;
  teamName: Scalars["String"]["output"];
};

export type CupTeamRosterSection = {
  __typename?: "CupTeamRosterSection";
  players: Array<CupLeaderboardMatchPlayer>;
  sectionTitle: Scalars["String"]["output"];
};

export type CupTeamRosters = {
  __typename?: "CupTeamRosters";
  teams: Array<CupTeamRoster>;
};

export type CupTeeTimes = {
  __typename?: "CupTeeTimes";
  currentRound: Scalars["Int"]["output"];
  id: Scalars["ID"]["output"];
  rounds: Array<CupTeeTimesRound>;
};

export type CupTeeTimesRound = {
  __typename?: "CupTeeTimesRound";
  completedMatches: Scalars["Int"]["output"];
  matches: Array<CupLeaderboardMatch>;
  roundDisplay: Scalars["String"]["output"];
  roundNum: Scalars["Int"]["output"];
  totalMatches: Scalars["Int"]["output"];
};

export type CupTournamentLeaderboard = {
  __typename?: "CupTournamentLeaderboard";
  completedMatches: Scalars["Int"]["output"];
  currentId: Scalars["String"]["output"];
  currentRound: Scalars["Int"]["output"];
  id: Scalars["ID"]["output"];
  matches: Array<CupLeaderboardMatch>;
  rounds: Array<CupTournamentRound>;
  title: Scalars["String"]["output"];
  totalMatches: Scalars["Int"]["output"];
};

export type CupTournamentLeaderboardCompressed = {
  __typename?: "CupTournamentLeaderboardCompressed";
  currentId: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  payload: Scalars["String"]["output"];
};

export type CupTournamentRound = {
  __typename?: "CupTournamentRound";
  description: Scalars["String"]["output"];
  roundNumber: Scalars["Int"]["output"];
};

export type CupTournamentStatus = {
  __typename?: "CupTournamentStatus";
  id: Scalars["ID"]["output"];
  messages: Array<LeaderboardMessage>;
  teams: Array<CupTournamentTeam>;
  tournamentId: Scalars["String"]["output"];
  type: CupOverviewDisplayType;
};

export type CupTournamentTeam = {
  __typename?: "CupTournamentTeam";
  badgeText?: Maybe<Scalars["String"]["output"]>;
  color: Scalars["String"]["output"];
  displayName: Scalars["String"]["output"];
  projected?: Maybe<Scalars["String"]["output"]>;
  projectedColor: Scalars["String"]["output"];
  projectedProgress: Scalars["Float"]["output"];
  projectedValue: Scalars["Float"]["output"];
  shortName: Scalars["String"]["output"];
  teamId: Scalars["ID"]["output"];
  teamLogo: Scalars["String"]["output"];
  toWin?: Maybe<Scalars["String"]["output"]>;
  total?: Maybe<Scalars["String"]["output"]>;
  totalProgress: Scalars["Float"]["output"];
  totalValue: Scalars["Float"]["output"];
};

export type DayWeather = {
  __typename?: "DayWeather";
  day: Scalars["String"]["output"];
  text: Scalars["String"]["output"];
};

export type DeleteAccountResponse = {
  __typename?: "DeleteAccountResponse";
  ok: Scalars["Boolean"]["output"];
};

export type EfiHole = {
  __typename?: "EFIHole";
  count: Scalars["String"]["output"];
  hole: Scalars["String"]["output"];
};

export type EaglesForImpact = {
  __typename?: "EaglesForImpact";
  charity: Scalars["String"]["output"];
  donation: Scalars["String"]["output"];
  eaglesTitle: Scalars["String"]["output"];
  holes: Array<EfiHole>;
  sponsorDescription: Scalars["String"]["output"];
  sponsorLogo: Scalars["String"]["output"];
  title: Scalars["String"]["output"];
  totalEagles: Scalars["String"]["output"];
  tournamentId: Scalars["ID"]["output"];
};

/**   Player Odds V2 */
export type EntityOdds = {
  __typename?: "EntityOdds";
  entityId: Scalars["ID"]["output"];
  marketPills: Array<MarketPill>;
  /**   others available to request */
  markets: Array<Market>;
  message?: Maybe<OddsMessage>;
  provider: OddsProvider;
  /**   playerId or teamId */
  tournamentId: Scalars["String"]["output"];
};

export type Episode = {
  __typename?: "Episode";
  date: Scalars["AWSTimestamp"]["output"];
  description: Scalars["String"]["output"];
  duration: Scalars["Int"]["output"];
  podcastId: Scalars["String"]["output"];
  streamUrl: Scalars["String"]["output"];
  title: Scalars["String"]["output"];
};

export type Event = {
  __typename?: "Event";
  eventName: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  leaderboardId: Scalars["String"]["output"];
};

export type EventGuideConfig = {
  __typename?: "EventGuideConfig";
  augmentedReality?: Maybe<AugmentedRealityConfig>;
  eventGuideURL?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
};

export type ExpertPicks = {
  __typename?: "ExpertPicks";
  expertPicksTableRows: Array<ExpertPicksTableRow>;
  tournamentName: Scalars["String"]["output"];
};

export type ExpertPicksNode = {
  __typename?: "ExpertPicksNode";
  isPowerRankings: Scalars["Boolean"]["output"];
  path: Scalars["String"]["output"];
};

export type ExpertPicksTableRow = {
  __typename?: "ExpertPicksTableRow";
  comment: Array<TourSponsorDescription>;
  expertName?: Maybe<Scalars["String"]["output"]>;
  expertTitle?: Maybe<Scalars["String"]["output"]>;
  lineup: Array<PlayerInfo>;
  percentSelected?: Maybe<Scalars["String"]["output"]>;
  percentSelectedColor?: Maybe<StatColor>;
  winner?: Maybe<PlayerInfo>;
};

export type FavoritePlayer = {
  __typename?: "FavoritePlayer";
  id: Scalars["ID"]["output"];
};

export type FavoritePlayerInput = {
  id: Scalars["ID"]["input"];
};

export type FavoriteTourResponse = {
  __typename?: "FavoriteTourResponse";
  ok: Scalars["Boolean"]["output"];
  tourCode?: Maybe<TourCode>;
};

export type FeatureItem = {
  __typename?: "FeatureItem";
  fieldStatType?: Maybe<FieldStatType>;
  leaderboardFeatures?: Maybe<LeaderboardFeature>;
  name: Scalars["String"]["output"];
  new: Scalars["Boolean"]["output"];
  sponsor?: Maybe<FeatureSponsor>;
  tooltipText?: Maybe<Scalars["String"]["output"]>;
  tooltipTitle?: Maybe<Scalars["String"]["output"]>;
};

export type FeatureSponsor = {
  __typename?: "FeatureSponsor";
  sponsorLogo: Scalars["String"]["output"];
  sponsorLogoDark: Scalars["String"]["output"];
  sponsorText: Scalars["String"]["output"];
};

export type Field = {
  __typename?: "Field";
  alternates: Array<PlayerField>;
  features: Array<FeatureItem>;
  id: Scalars["ID"]["output"];
  lastUpdated?: Maybe<Scalars["AWSTimestamp"]["output"]>;
  message?: Maybe<Scalars["String"]["output"]>;
  players: Array<PlayerField>;
  standingsHeader: Scalars["String"]["output"];
  tournamentName: Scalars["String"]["output"];
};

export type FieldGroup = {
  __typename?: "FieldGroup";
  groupId?: Maybe<Scalars["String"]["output"]>;
  groupTitle: Scalars["String"]["output"];
  players: Array<PlayerField>;
};

export type FieldPromoSection = {
  __typename?: "FieldPromoSection";
  title: Scalars["String"]["output"];
  tournamentIds: Array<Scalars["String"]["output"]>;
};

export type FieldStatCurrentForm = {
  __typename?: "FieldStatCurrentForm";
  playerId: Scalars["String"]["output"];
  strokesGained: Array<FieldStatStrokesGained>;
  strokesGainedHeader: Array<Scalars["String"]["output"]>;
  totalRounds: Scalars["String"]["output"];
  tournamentResults: Array<FieldStatTournamentResult>;
};

export type FieldStatPlayer = FieldStatCurrentForm;

export type FieldStatStrokesGained = {
  __typename?: "FieldStatStrokesGained";
  statColor: StatColor;
  statId: Scalars["String"]["output"];
  statValue: Scalars["String"]["output"];
};

export type FieldStatTournamentResult = {
  __typename?: "FieldStatTournamentResult";
  columnIndex: Scalars["Int"]["output"];
  endDate: Scalars["String"]["output"];
  name: Scalars["String"]["output"];
  position: Scalars["String"]["output"];
  score: Scalars["String"]["output"];
  season: Scalars["Int"]["output"];
  tourCode: Scalars["String"]["output"];
  tournamentId: Scalars["String"]["output"];
};

export enum FieldStatType {
  CurrentForm = "CURRENT_FORM",
  TournamentHistory = "TOURNAMENT_HISTORY",
}

export type FieldStats = {
  __typename?: "FieldStats";
  fieldStatType: FieldStatType;
  players: Array<FieldStatPlayer>;
  statHeaders?: Maybe<Array<Scalars["String"]["output"]>>;
  tournamentId: Scalars["ID"]["output"];
  tournamentSeasonHeaders?: Maybe<Array<SeasonDisplayHeader>>;
};

export type FinishStatValue = {
  __typename?: "FinishStatValue";
  date: Scalars["Int"]["output"];
  displayDate: Scalars["String"]["output"];
  displayValue: Scalars["String"]["output"];
  tournamentName: Scalars["String"]["output"];
  value: Scalars["Float"]["output"];
};

export enum FormatType {
  MatchPlay = "MATCH_PLAY",
  Stableford = "STABLEFORD",
  StrokePlay = "STROKE_PLAY",
  TeamCup = "TEAM_CUP",
  TeamStroke = "TEAM_STROKE",
}

export type Franchise = {
  __typename?: "Franchise";
  displayName: Scalars["String"]["output"];
  queryValue: Scalars["String"]["output"];
};

export type GenericContent = {
  __typename?: "GenericContent";
  authorReference?: Maybe<NewsArticleAuthor>;
  datePublished: Scalars["AWSTimestamp"]["output"];
  headline: Scalars["String"]["output"];
  metadata?: Maybe<NewsArticleMetadata>;
  nodes: Array<NewsArticleNode>;
  path: Scalars["String"]["output"];
};

export type GlobalAdConfig = {
  __typename?: "GlobalAdConfig";
  actRefresh: Scalars["Boolean"]["output"];
  adUnitId: Scalars["String"]["output"];
  environment: Scalars["String"]["output"];
  fluid: Scalars["Boolean"]["output"];
  injectAds?: Maybe<Scalars["Boolean"]["output"]>;
  networkId: Scalars["String"]["output"];
  playerSponsorship: Scalars["Boolean"]["output"];
  refresh: Scalars["Int"]["output"];
  timedRefresh?: Maybe<Scalars["Boolean"]["output"]>;
};

export type Group = {
  __typename?: "Group";
  backNine: Scalars["Boolean"]["output"];
  courseId?: Maybe<Scalars["String"]["output"]>;
  courseName?: Maybe<Scalars["String"]["output"]>;
  groupHole: Scalars["Int"]["output"];
  groupLocation: Scalars["String"]["output"];
  groupLocationCode: Scalars["String"]["output"];
  groupNumber: Scalars["Int"]["output"];
  groupSort: Scalars["String"]["output"];
  groupStatus: PlayerState;
  holeLocation: Scalars["String"]["output"];
  players: Array<Player>;
  showScorecard: Scalars["Boolean"]["output"];
  startTee: Scalars["Int"]["output"];
  teeTime: Scalars["AWSTimestamp"]["output"];
  tourcastURL?: Maybe<Scalars["String"]["output"]>;
  tourcastURLWeb?: Maybe<Scalars["String"]["output"]>;
};

export type GroupRoundScore = {
  __typename?: "GroupRoundScore";
  holes: Array<GroupScoreHeader>;
  parTotal: Scalars["Int"]["output"];
  players: Array<GroupScorePlayer>;
  totalLabel: Scalars["String"]["output"];
};

export type GroupScoreHeader = {
  __typename?: "GroupScoreHeader";
  holeNumber: Scalars["Int"]["output"];
  par: Scalars["Int"]["output"];
};

export type GroupScorePlayer = {
  __typename?: "GroupScorePlayer";
  active: Scalars["Boolean"]["output"];
  player: Player;
  roundTotal: Scalars["String"]["output"];
  roundTotalHeader: Scalars["String"]["output"];
  rowTotal: Scalars["String"]["output"];
  scores: Array<SimpleScore>;
};

export type GroupScorecard = {
  __typename?: "GroupScorecard";
  backNine: Scalars["Boolean"]["output"];
  courseId?: Maybe<Scalars["String"]["output"]>;
  courseName: Scalars["String"]["output"];
  currentHole: Scalars["Int"]["output"];
  firstNine: GroupRoundScore;
  holeDetail: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  locationDetail: Scalars["String"]["output"];
  players: Array<ScorecardHeaderPlayer>;
  roundHeader: Scalars["String"]["output"];
  secondNine: GroupRoundScore;
  teeTime: Scalars["AWSTimestamp"]["output"];
  tourcastURL?: Maybe<Scalars["String"]["output"]>;
};

export type GroupShotDetails = {
  __typename?: "GroupShotDetails";
  displayType: ShotDetailsDisplayType;
  groupNumber: Scalars["Int"]["output"];
  holes: Array<GroupShotDetailsHole>;
  id: Scalars["ID"]["output"];
  message: Scalars["String"]["output"];
  players: Array<GroupShotDetailsPlayer>;
  round: Scalars["Int"]["output"];
  shotVideo?: Maybe<Video>;
  shotVideos?: Maybe<Array<Video>>;
  tournamentId: Scalars["String"]["output"];
};

export type GroupShotDetailsCompressed = {
  __typename?: "GroupShotDetailsCompressed";
  id: Scalars["ID"]["output"];
  payload: Scalars["String"]["output"];
};

export type GroupShotDetailsHole = {
  __typename?: "GroupShotDetailsHole";
  activePlayers: Array<Scalars["String"]["output"]>;
  displayHoleNumber: Scalars["String"]["output"];
  fairwayCenter: StrokeCoordinates;
  green: Scalars["Boolean"]["output"];
  holeNumber: Scalars["Int"]["output"];
  holePickleBottomToTop: Scalars["String"]["output"];
  holePickleGreenBottomToTop: Scalars["String"]["output"];
  holePickleGreenLeftToRight: Scalars["String"]["output"];
  holePickleLeftToRight: Scalars["String"]["output"];
  par: Scalars["Int"]["output"];
  pinGreen: PointOfInterestCoords;
  pinOverview: PointOfInterestCoords;
  rank?: Maybe<Scalars["String"]["output"]>;
  strokes: Array<GroupShotDetailsStroke>;
  teeGreen: PointOfInterestCoords;
  teeOverview: PointOfInterestCoords;
  yardage: Scalars["Int"]["output"];
};

export type GroupShotDetailsPlayer = {
  __typename?: "GroupShotDetailsPlayer";
  displayName: Scalars["String"]["output"];
  firstName: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  lastName: Scalars["String"]["output"];
  lineColor: Scalars["String"]["output"];
  shortName: Scalars["String"]["output"];
};

export type GroupShotDetailsStroke = {
  __typename?: "GroupShotDetailsStroke";
  playByPlayLabel: Scalars["String"]["output"];
  players: Array<GroupShotDetailsStrokePlayer>;
  strokeNumber: Scalars["Int"]["output"];
};

export type GroupShotDetailsStrokePlayer = {
  __typename?: "GroupShotDetailsStrokePlayer";
  displayName: Scalars["String"]["output"];
  distance: Scalars["String"]["output"];
  distanceRemaining: Scalars["String"]["output"];
  finalShot: Scalars["Boolean"]["output"];
  fromLocation: Scalars["String"]["output"];
  fromLocationCode: Scalars["String"]["output"];
  green: ShotLinkCoordWrapper;
  markerText: Scalars["String"]["output"];
  overview: ShotLinkCoordWrapper;
  playByPlay: Scalars["String"]["output"];
  playerId: Scalars["String"]["output"];
  radarData?: Maybe<RadarData>;
  score: Scalars["String"]["output"];
  shortName: Scalars["String"]["output"];
  showMarker: Scalars["Boolean"]["output"];
  status: HoleScoreStatus;
  strokeType: HoleStrokeType;
  toLocation: Scalars["String"]["output"];
  toLocationCode: Scalars["String"]["output"];
  videoId?: Maybe<Scalars["String"]["output"]>;
};

export type GroupShotDetailsTeam = {
  __typename?: "GroupShotDetailsTeam";
  players?: Maybe<Array<GroupShotDetailsPlayer>>;
  teamId: Scalars["String"]["output"];
  teamName: Scalars["String"]["output"];
};

export type GroupStageGroup = {
  __typename?: "GroupStageGroup";
  groupHeader: Scalars["String"]["output"];
  groupPlayers: Array<GroupStagePlayer>;
};

export type GroupStageHeader = {
  __typename?: "GroupStageHeader";
  lost: Scalars["String"]["output"];
  player: Scalars["String"]["output"];
  points: Scalars["String"]["output"];
  tied: Scalars["String"]["output"];
  type: HeaderType;
  won: Scalars["String"]["output"];
};

export type GroupStagePlayer = {
  __typename?: "GroupStagePlayer";
  bracketSeed: Scalars["String"]["output"];
  countryFlag: Scalars["String"]["output"];
  countryName: Scalars["String"]["output"];
  displayName: Scalars["String"]["output"];
  firstName: Scalars["String"]["output"];
  groupRankDisplayText?: Maybe<Scalars["String"]["output"]>;
  headshot: Scalars["String"]["output"];
  lastName: Scalars["String"]["output"];
  latestMatchId: Scalars["ID"]["output"];
  latestRound: Scalars["Int"]["output"];
  playerId: Scalars["ID"]["output"];
  playoffWinner: Scalars["Boolean"]["output"];
  position: Scalars["String"]["output"];
  previousMatches: PreviousMatches;
  record: PlayerRecord;
  shortName: Scalars["String"]["output"];
  tournamentSeed: Scalars["String"]["output"];
};

export type GroupStageRankings = {
  __typename?: "GroupStageRankings";
  groupStageHeaders: Array<GroupStageHeader>;
  groups: Array<GroupStageGroup>;
  informationSections: Array<InformationSection>;
  title: Scalars["String"]["output"];
  tournamentId: Scalars["ID"]["output"];
};

export type GroupedField = {
  __typename?: "GroupedField";
  alternates: PlayerGroup;
  features: Array<FeatureItem>;
  id: Scalars["ID"]["output"];
  lastUpdated?: Maybe<Scalars["AWSTimestamp"]["output"]>;
  message?: Maybe<Scalars["String"]["output"]>;
  players: PlayerGroup;
  standingsHeader: Scalars["String"]["output"];
  tournamentName: Scalars["String"]["output"];
};

export enum HeaderType {
  Long = "LONG",
  Short = "SHORT",
}

export type HistoricalLeaderboard = {
  __typename?: "HistoricalLeaderboard";
  additionalDataHeaders: Array<Scalars["String"]["output"]>;
  availableSeasons: Array<StatYearPills>;
  id: Scalars["ID"]["output"];
  players: Array<HistoricalLeaderboardRow>;
  recap?: Maybe<WeatherNotes>;
  rounds: Array<Scalars["String"]["output"]>;
  teams?: Maybe<Array<Maybe<HistoricalLeaderboardTeamRow>>>;
  winner?: Maybe<Winner>;
  winningTeam?: Maybe<Array<Maybe<Winner>>>;
};

export type HistoricalLeaderboardRow = {
  __typename?: "HistoricalLeaderboardRow";
  additionalData: Array<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  parRelativeScore: Scalars["String"]["output"];
  player: Player;
  position: Scalars["String"]["output"];
  rounds: Array<HistoricalRoundScore>;
  total: Scalars["String"]["output"];
};

export type HistoricalLeaderboardTeamRow = {
  __typename?: "HistoricalLeaderboardTeamRow";
  additionalData: Array<Scalars["String"]["output"]>;
  parRelativeScore: Scalars["String"]["output"];
  players: Array<Player>;
  position: Scalars["String"]["output"];
  rounds?: Maybe<Array<HistoricalRoundScore>>;
  teamId: Scalars["String"]["output"];
  total: Scalars["String"]["output"];
};

export enum HistoricalOddsId {
  TopRanked_3 = "TOP_RANKED_3",
  TopRanked_5 = "TOP_RANKED_5",
  TopRanked_10 = "TOP_RANKED_10",
  TopRanked_20 = "TOP_RANKED_20",
  Winner = "WINNER",
}

export type HistoricalPlayerOdds = {
  __typename?: "HistoricalPlayerOdds";
  marketName: Scalars["String"]["output"];
  message?: Maybe<OddsMessage>;
  odds: Scalars["String"]["output"];
  oddsSwing: OddsSwing;
  optionId: Scalars["String"]["output"];
  playerId: Scalars["String"]["output"];
  season: Scalars["Int"]["output"];
  timeStamp: Scalars["AWSTimestamp"]["output"];
  tournamentId: Scalars["String"]["output"];
};

export type HistoricalPlayerScorecards = {
  __typename?: "HistoricalPlayerScorecards";
  playerId: Scalars["ID"]["output"];
  tours: Array<HistoricalScorecardTour>;
};

export type HistoricalRoundScore = {
  __typename?: "HistoricalRoundScore";
  parRelativeScore: Scalars["String"]["output"];
  score: Scalars["String"]["output"];
};

export type HistoricalScorecardTour = {
  __typename?: "HistoricalScorecardTour";
  tourCode: TourCode;
  years: Array<HistoricalScorecardYear>;
};

export type HistoricalScorecardYear = {
  __typename?: "HistoricalScorecardYear";
  displayYear: Scalars["String"]["output"];
  tournamentPills: Array<StatTournamentPill>;
  year: Scalars["Int"]["output"];
};

export type HoleDetail = {
  __typename?: "HoleDetail";
  courseId: Scalars["String"]["output"];
  holeImage: Scalars["String"]["output"];
  holeImageLandscape: Scalars["String"]["output"];
  holeInfo: HoleDetailInfo;
  holeNum: Scalars["Int"]["output"];
  id: Scalars["ID"]["output"];
  rounds: Array<HoleDetailRound>;
  statsAvailability: HoleDetailsAvailability;
  statsSummary: HoleStatSummary;
  tourcastURL?: Maybe<Scalars["String"]["output"]>;
  tourcastURLWeb?: Maybe<Scalars["String"]["output"]>;
  tournamentId: Scalars["ID"]["output"];
};

export type HoleDetailInfo = {
  __typename?: "HoleDetailInfo";
  aboutThisHole: Scalars["String"]["output"];
  greenPickle: Scalars["String"]["output"];
  holeNum: Scalars["Int"]["output"];
  holePickle: Scalars["String"]["output"];
  par: Scalars["Int"]["output"];
  pinGreen: PointOfInterestCoords;
  rank?: Maybe<Scalars["Int"]["output"]>;
  rounds?: Maybe<Scalars["Int"]["output"]>;
  scoringAverageDiff: Scalars["String"]["output"];
  yards: Scalars["Int"]["output"];
};

export type HoleDetailRound = {
  __typename?: "HoleDetailRound";
  groups: Array<HoleGroup>;
  matches?: Maybe<Array<HoleMatch>>;
  roundNum: Scalars["Int"]["output"];
  teamGroups?: Maybe<Array<TeamHoleGroups>>;
};

export enum HoleDetailsAvailability {
  None = "NONE",
  ShotDetails = "SHOT_DETAILS",
  Stats = "STATS",
}

export type HoleGroup = {
  __typename?: "HoleGroup";
  groupLocation: Scalars["String"]["output"];
  groupLocationCode: Scalars["String"]["output"];
  groupNumber: Scalars["Int"]["output"];
  players: Array<HoleGroupPlayer>;
  tourcastURL?: Maybe<Scalars["String"]["output"]>;
  tourcastURLWeb?: Maybe<Scalars["String"]["output"]>;
};

export type HoleGroupPlayer = {
  __typename?: "HoleGroupPlayer";
  country: Scalars["String"]["output"];
  countryFlag: Scalars["String"]["output"];
  firstName: Scalars["String"]["output"];
  headshot: Scalars["String"]["output"];
  lastName: Scalars["String"]["output"];
  playerId: Scalars["ID"]["output"];
  position: Scalars["String"]["output"];
  roundScore: Scalars["String"]["output"];
  total: Scalars["String"]["output"];
};

export type HoleGroupTeam = {
  __typename?: "HoleGroupTeam";
  players: Array<HoleGroupPlayer>;
};

export type HoleHeader = {
  __typename?: "HoleHeader";
  hole: Scalars["String"]["output"];
  holeNumber: Scalars["Int"]["output"];
  par: Scalars["String"]["output"];
};

export type HoleHeaderV2 = {
  __typename?: "HoleHeaderV2";
  displayValue: Scalars["String"]["output"];
  holeNumber?: Maybe<Scalars["Int"]["output"]>;
  order: Scalars["Int"]["output"];
  par: Scalars["String"]["output"];
};

export type HoleMatch = {
  __typename?: "HoleMatch";
  groupName?: Maybe<Scalars["String"]["output"]>;
  match?: Maybe<MpLeaderboardMatch>;
  matchLocation: Scalars["String"]["output"];
  matchLocationCode: Scalars["String"]["output"];
  tourcastURL?: Maybe<Scalars["String"]["output"]>;
  tourcastURLWeb?: Maybe<Scalars["String"]["output"]>;
};

export enum HolePlayedStatus {
  Played = "PLAYED",
  Unplayed = "UNPLAYED",
}

export type HoleScore = {
  __typename?: "HoleScore";
  holeNumber: Scalars["Int"]["output"];
  par: Scalars["Int"]["output"];
  roundScore: Scalars["String"]["output"];
  score: Scalars["String"]["output"];
  sequenceNumber: Scalars["Int"]["output"];
  status: HoleScoreStatus;
  yardage: Scalars["Int"]["output"];
};

export enum HoleScoreStatus {
  Birdie = "BIRDIE",
  Bogey = "BOGEY",
  Conceded = "CONCEDED",
  DoubleBogey = "DOUBLE_BOGEY",
  Eagle = "EAGLE",
  None = "NONE",
  Par = "PAR",
}

export type HoleStat = CourseHoleStats | SummaryRow;

export type HoleStatSummary = {
  __typename?: "HoleStatSummary";
  birdies?: Maybe<Scalars["Int"]["output"]>;
  birdiesPercent: Scalars["String"]["output"];
  bogeys?: Maybe<Scalars["Int"]["output"]>;
  bogeysPercent: Scalars["String"]["output"];
  courseId: Scalars["String"]["output"];
  doubleBogeys?: Maybe<Scalars["Int"]["output"]>;
  doubleBogeysPercent: Scalars["String"]["output"];
  eagles?: Maybe<Scalars["Int"]["output"]>;
  eaglesPercent: Scalars["String"]["output"];
  holeNum: Scalars["Int"]["output"];
  pars?: Maybe<Scalars["Int"]["output"]>;
  parsPercent: Scalars["String"]["output"];
  tournamentId: Scalars["ID"]["output"];
};

export type HoleStroke = {
  __typename?: "HoleStroke";
  distance: Scalars["String"]["output"];
  distanceRemaining: Scalars["String"]["output"];
  finalStroke: Scalars["Boolean"]["output"];
  fromLocation: Scalars["String"]["output"];
  fromLocationCode: Scalars["String"]["output"];
  green: ShotLinkCoordWrapper;
  groupShowMarker: Scalars["Boolean"]["output"];
  markerText: Scalars["String"]["output"];
  overview: ShotLinkCoordWrapper;
  playByPlay: Scalars["String"]["output"];
  playByPlayLabel: Scalars["String"]["output"];
  player?: Maybe<TspStrokePlayer>;
  radarData?: Maybe<RadarData>;
  showMarker: Scalars["Boolean"]["output"];
  strokeNumber: Scalars["Int"]["output"];
  strokeType: HoleStrokeType;
  toLocation: Scalars["String"]["output"];
  toLocationCode: Scalars["String"]["output"];
  videoId?: Maybe<Scalars["String"]["output"]>;
};

export enum HoleStrokeType {
  Drop = "DROP",
  Penalty = "PENALTY",
  Provisional = "PROVISIONAL",
  Stroke = "STROKE",
}

export enum HomePageLeadLayout {
  HalfHero = "HALF_HERO",
  HalfHeroStack = "HALF_HERO_STACK",
  HeroStatus = "HERO_STATUS",
  HeroStory = "HERO_STORY",
  PlayerStories = "PLAYER_STORIES",
}

export enum HomePageNewsLayout {
  ThreeUpAsset = "THREE_UP_ASSET",
  TwoUpLarge = "TWO_UP_LARGE",
  TwoUpSmall = "TWO_UP_SMALL",
  TwoUpTextOnly = "TWO_UP_TEXT_ONLY",
}

export enum HomePageProgramStandingLayout {
  FieldPromoSection = "FIELD_PROMO_SECTION",
  Normal = "NORMAL",
  Short = "SHORT",
  TwoStandings = "TWO_STANDINGS",
}

export type HomePageStanding = {
  __typename?: "HomePageStanding";
  country: Scalars["String"]["output"];
  countryFlag: Scalars["String"]["output"];
  firstName: Scalars["String"]["output"];
  image: Scalars["String"]["output"];
  lastName: Scalars["String"]["output"];
  playerId: Scalars["String"]["output"];
  rank?: Maybe<Scalars["Int"]["output"]>;
  stats: Array<ProgramStat>;
};

export type Homepage = {
  __typename?: "Homepage";
  fragments: Array<HomepageFragment>;
};

export type HomepageAssets = NewsArticle | Video;

export type HomepageCta = {
  __typename?: "HomepageCta";
  link: Scalars["String"]["output"];
  text: Scalars["String"]["output"];
};

export type HomepageFragment =
  | HomepageLead
  | HomepageNews
  | HomepageProgramStanding
  | MediaGallery
  | ThreeUpPhoto;

export type HomepageLead = {
  __typename?: "HomepageLead";
  ambientVideo?: Maybe<Video>;
  content: Array<HomepageAssets>;
  cta?: Maybe<HomepageCta>;
  displayPlayerPromoStats?: Maybe<Scalars["Boolean"]["output"]>;
  halfHeroShortHeadline?: Maybe<Scalars["Boolean"]["output"]>;
  headlineColor?: Maybe<Scalars["String"]["output"]>;
  headlineJustification?: Maybe<Scalars["String"]["output"]>;
  headshot?: Maybe<ProfileHeadshot>;
  leadLayout: HomePageLeadLayout;
  location?: Maybe<TournamentLocation>;
  photoJustification?: Maybe<Scalars["String"]["output"]>;
  playerId: Scalars["String"]["output"];
  playerScore?: Maybe<HomepagePlayerScore>;
  sectionTitle?: Maybe<Scalars["String"]["output"]>;
  topStats?: Maybe<Array<Maybe<PlayerProfileStatItem>>>;
  weather?: Maybe<TournamentWeather>;
};

export type HomepageNews = {
  __typename?: "HomepageNews";
  content: Array<HomepageAssets>;
  cta?: Maybe<HomepageCta>;
  displayDateTime?: Maybe<Scalars["Boolean"]["output"]>;
  franchises: Array<Scalars["String"]["output"]>;
  limit: Scalars["String"]["output"];
  newsLayout: HomePageNewsLayout;
  title: Scalars["String"]["output"];
};

export type HomepagePlayerScore = {
  __typename?: "HomepagePlayerScore";
  playerId: Scalars["ID"]["output"];
  round: Scalars["String"]["output"];
  roundScore: Scalars["String"]["output"];
  score: Scalars["String"]["output"];
  total?: Maybe<Scalars["String"]["output"]>;
};

export type HomepageProgramStanding = {
  __typename?: "HomepageProgramStanding";
  backgroundImg?: Maybe<Scalars["String"]["output"]>;
  cta?: Maybe<HomepageCta>;
  lastProcessed?: Maybe<Scalars["String"]["output"]>;
  pullFieldUpdates?: Maybe<Scalars["Boolean"]["output"]>;
  sponsorImg?: Maybe<Scalars["String"]["output"]>;
  standingLayout: HomePageProgramStandingLayout;
  standings?: Maybe<Array<Maybe<HomePageStanding>>>;
  title: Scalars["String"]["output"];
};

export enum Icon {
  Amateur = "AMATEUR",
  Backnine = "BACKNINE",
  CustomIcon = "CUSTOM_ICON",
  Disqualified = "DISQUALIFIED",
  Favorites = "FAVORITES",
  Live = "LIVE",
  OddsImproved = "ODDS_IMPROVED",
  OddsWorsened = "ODDS_WORSENED",
  PlayoffWin = "PLAYOFF_WIN",
  Previousround = "PREVIOUSROUND",
  Sponsor = "SPONSOR",
  SuddenDeath = "SUDDEN_DEATH",
  TopFedexFallPlayer = "TOP_FEDEX_FALL_PLAYER",
  TourBound = "TOUR_BOUND",
  Upcoming = "UPCOMING",
  Withdraw = "WITHDRAW",
}

export type InformationData = {
  __typename?: "InformationData";
  detail?: Maybe<Scalars["String"]["output"]>;
  label: Scalars["String"]["output"];
  secondaryDetail?: Maybe<Scalars["String"]["output"]>;
  smallCopy?: Maybe<Scalars["Boolean"]["output"]>;
  value: Scalars["String"]["output"];
  wide?: Maybe<Scalars["Boolean"]["output"]>;
};

export type InformationRow = {
  __typename?: "InformationRow";
  displayText: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  leaderboardSortOrder: Scalars["Int"]["output"];
};

export type InformationSection = {
  __typename?: "InformationSection";
  items: Array<InformationSectionItem>;
  sponsorImages?: Maybe<Array<SponsorImage>>;
  title: Scalars["String"]["output"];
};

export type InformationSectionItem = Abbreviations | Legend;

export type IntegratedComponent = {
  __typename?: "IntegratedComponent";
  index: Scalars["Int"]["output"];
  partner: IntegrationPartner;
};

export enum IntegrationPartner {
  Golfwrx = "GOLFWRX",
}

export type KopContentType =
  | NewsArticleHeader
  | NewsArticleImage
  | NewsArticleLineBreak
  | NewsArticleLink
  | NewsArticleParagraph
  | NewsArticleText
  | TableFragment
  | UnorderedListNode;

export type KitOfParts = {
  __typename?: "KitOfParts";
  fragments: Array<KopFragment>;
};

export type KopFragment =
  | HomepageNews
  | KopHeader
  | KopSignUp
  | KopStandingsList
  | KopSubheader
  | KopUpcomingTournament
  | KopZigZag
  | ThreeUpPhoto
  | ThreeUpStats
  | TwoColumn
  | VideoHero;

export type KopHeader = {
  __typename?: "KopHeader";
  cta?: Maybe<CallToAction>;
  headerTitle: Scalars["String"]["output"];
  headlineColor?: Maybe<Scalars["String"]["output"]>;
  image?: Maybe<Scalars["String"]["output"]>;
  logo?: Maybe<Scalars["String"]["output"]>;
  opacity?: Maybe<Scalars["String"]["output"]>;
  titleJustification?: Maybe<Scalars["String"]["output"]>;
};

export type KopSignUp = {
  __typename?: "KopSignUp";
  backgroundColor?: Maybe<Scalars["String"]["output"]>;
  backgroundImage?: Maybe<Scalars["String"]["output"]>;
  cta?: Maybe<CallToAction>;
  ctaColor?: Maybe<Scalars["String"]["output"]>;
  header?: Maybe<Scalars["String"]["output"]>;
  logo?: Maybe<Scalars["String"]["output"]>;
  signUpText?: Maybe<Scalars["String"]["output"]>;
  textColor?: Maybe<Scalars["String"]["output"]>;
};

export type KopStandingsList = {
  __typename?: "KopStandingsList";
  cta?: Maybe<CallToAction>;
  sectionTitle: Scalars["String"]["output"];
  standings?: Maybe<Array<Maybe<HomePageStanding>>>;
  type?: Maybe<Scalars["String"]["output"]>;
};

export type KopSubheader = {
  __typename?: "KopSubheader";
  cta?: Maybe<CallToAction>;
  logo?: Maybe<Scalars["String"]["output"]>;
  subHeaderText?: Maybe<Array<Maybe<NewsArticleNode>>>;
  type?: Maybe<Scalars["String"]["output"]>;
};

export type KopUpcomingTournament = {
  __typename?: "KopUpcomingTournament";
  title: Scalars["String"]["output"];
};

export type KopZigZag = {
  __typename?: "KopZigZag";
  backgroundColorOne?: Maybe<Scalars["String"]["output"]>;
  backgroundColorTwo?: Maybe<Scalars["String"]["output"]>;
  ctaOne?: Maybe<CallToAction>;
  ctaTwo?: Maybe<CallToAction>;
  descriptionBackgroundColorOne?: Maybe<Scalars["String"]["output"]>;
  descriptionBackgroundColorTwo?: Maybe<Scalars["String"]["output"]>;
  descriptionOne?: Maybe<Array<Maybe<NewsArticleNode>>>;
  descriptionTwo?: Maybe<Array<Maybe<NewsArticleNode>>>;
  imageOne?: Maybe<Scalars["String"]["output"]>;
  imageTwo?: Maybe<Scalars["String"]["output"]>;
  subHeader?: Maybe<Scalars["String"]["output"]>;
  zigZaHeader: Scalars["String"]["output"];
};

export type LbRound = {
  __typename?: "LBRound";
  displayText: Scalars["String"]["output"];
  roundNumber: Scalars["Int"]["output"];
};

export type LeaderStat = {
  __typename?: "LeaderStat";
  country: Scalars["String"]["output"];
  countryFlag: Scalars["String"]["output"];
  playerId: Scalars["String"]["output"];
  playerName: Scalars["String"]["output"];
  rank: Scalars["String"]["output"];
  statId: Scalars["String"]["output"];
  statTitle: Scalars["String"]["output"];
  statValue: Scalars["String"]["output"];
};

export type Leaderboard = {
  __typename?: "Leaderboard";
  courses: Array<Course>;
  formatType: FormatType;
  id: Scalars["ID"]["output"];
  informationSections: Array<InformationSection>;
  leaderboardRoundHeader: Scalars["String"]["output"];
  messages: Array<LeaderboardMessage>;
  oddsBanner?: Maybe<OddsBanner>;
  players: Array<LeaderboardRow>;
  playoff?: Maybe<Playoff>;
  profileEnabled: Scalars["Boolean"]["output"];
  roundDisplay: Scalars["String"]["output"];
  roundStatus: RoundStatus;
  roundStatusColor: RoundStatusColor;
  roundStatusDisplay: Scalars["String"]["output"];
  rounds: Array<LbRound>;
  scorecardEnabled: Scalars["Boolean"]["output"];
  subEvent: Scalars["Boolean"]["output"];
  timezone: Scalars["String"]["output"];
  tourcastURL?: Maybe<Scalars["String"]["output"]>;
  tournamentStatus: TournamentStatus;
  winner?: Maybe<Winner>;
};

export type LeaderboardCompressed = {
  __typename?: "LeaderboardCompressed";
  id: Scalars["ID"]["output"];
  payload: Scalars["String"]["output"];
};

export type LeaderboardCompressedV2 = {
  __typename?: "LeaderboardCompressedV2";
  id: Scalars["ID"]["output"];
  payload: Scalars["String"]["output"];
};

export type LeaderboardDrawer = {
  __typename?: "LeaderboardDrawer";
  backNine: Scalars["Boolean"]["output"];
  currentHole?: Maybe<Scalars["Int"]["output"]>;
  currentRound: Scalars["Int"]["output"];
  finalRoundTotal: Scalars["String"]["output"];
  groupNumber: Scalars["Int"]["output"];
  holeDetail: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  locationDetail: Scalars["String"]["output"];
  player: Player;
  playerState?: Maybe<PlayerState>;
  playerStatus: Scalars["String"]["output"];
  position: Scalars["String"]["output"];
  round: Scalars["Int"]["output"];
  roundDisplay: Scalars["String"]["output"];
  roundScores: Array<RoundScore>;
  shotDetail: Scalars["String"]["output"];
  teeTime: Scalars["AWSTimestamp"]["output"];
  thru: Scalars["String"]["output"];
  total: Scalars["String"]["output"];
};

export type LeaderboardDrawerV2 = {
  __typename?: "LeaderboardDrawerV2";
  backNine: Scalars["Boolean"]["output"];
  currentHole?: Maybe<Scalars["Int"]["output"]>;
  currentRound: Scalars["Int"]["output"];
  groupNumber: Scalars["Int"]["output"];
  id: Scalars["ID"]["output"];
  player: Player;
  playerState?: Maybe<PlayerState>;
  roundScores: Array<RoundScore>;
  teeTime: Scalars["AWSTimestamp"]["output"];
  tournamentName: Scalars["String"]["output"];
};

export enum LeaderboardFeature {
  HoleByHole = "HOLE_BY_HOLE",
  Probabilities = "PROBABILITIES",
  ShotDetails = "SHOT_DETAILS",
  StrokesGained = "STROKES_GAINED",
}

export type LeaderboardHoleByHole = {
  __typename?: "LeaderboardHoleByHole";
  courseHoleHeaders: Array<CourseHoleHeader>;
  courses: Array<Course>;
  currentRound: Scalars["Int"]["output"];
  /** @deprecated use courseHoleHeaders */
  holeHeaders: Array<HoleHeader>;
  playerData: Array<PlayerRowHoleByHole>;
  rounds: Array<LbRound>;
  tournamentId: Scalars["ID"]["output"];
  tournamentName: Scalars["String"]["output"];
};

export type LeaderboardInfo = {
  __typename?: "LeaderboardInfo";
  informationSections: Array<InformationSection>;
  odds: Scalars["Boolean"]["output"];
  tournamentId: Scalars["ID"]["output"];
};

export type LeaderboardMessage = {
  __typename?: "LeaderboardMessage";
  externalLink?: Maybe<Scalars["Boolean"]["output"]>;
  messageIcon: LeaderboardMessageIcon;
  messageLink?: Maybe<Scalars["String"]["output"]>;
  messageText: Scalars["String"]["output"];
};

export enum LeaderboardMessageIcon {
  Delay = "DELAY",
  None = "NONE",
  Weather = "WEATHER",
}

export enum LeaderboardMovement {
  Constant = "CONSTANT",
  Down = "DOWN",
  Up = "UP",
}

export type LeaderboardRoundStats = {
  __typename?: "LeaderboardRoundStats";
  players: Array<LeaderboardStatsPlayer>;
  roundDisplayText: Scalars["String"]["output"];
  roundNumber: Scalars["Int"]["output"];
};

export type LeaderboardRow = InformationRow | PlayerRow;

export type LeaderboardRowV2 = InformationRow | PlayerRowV2;

export type LeaderboardStatItem = {
  __typename?: "LeaderboardStatItem";
  color: Scalars["String"]["output"];
  rank: Scalars["String"]["output"];
  sortValue: Scalars["Float"]["output"];
  statId: Scalars["String"]["output"];
  value: Scalars["String"]["output"];
};

export type LeaderboardStats = {
  __typename?: "LeaderboardStats";
  id: Scalars["String"]["output"];
  players: Array<LeaderboardStatsPlayer>;
  rounds?: Maybe<Array<LeaderboardRoundStats>>;
  statIds?: Maybe<Array<Scalars["String"]["output"]>>;
  titles: Array<Scalars["String"]["output"]>;
  type: LeaderboardStatsType;
};

export type LeaderboardStatsPlayer = {
  __typename?: "LeaderboardStatsPlayer";
  playerId: Scalars["String"]["output"];
  stats: Array<LeaderboardStatItem>;
};

export enum LeaderboardStatsType {
  Probability = "PROBABILITY",
  StrokesGained = "STROKES_GAINED",
}

export type LeaderboardStroke = {
  __typename?: "LeaderboardStroke";
  currentHole: Scalars["Int"]["output"];
  currentHoleDisplay: Scalars["String"]["output"];
  currentRound: Scalars["Int"]["output"];
  currentShot: Scalars["Int"]["output"];
  currentShotDisplay: Scalars["String"]["output"];
  finalStroke: Scalars["Boolean"]["output"];
  id: Scalars["ID"]["output"];
  par: Scalars["String"]["output"];
  parSort: Scalars["Int"]["output"];
  playByPlay: Scalars["String"]["output"];
  playerId: Scalars["String"]["output"];
  playoffHole: Scalars["Int"]["output"];
  playoffHoleDisplay: Scalars["String"]["output"];
  scoreStatus: HoleScoreStatus;
  strokeId: Scalars["String"]["output"];
  yardage: Scalars["String"]["output"];
  yardageSort: Scalars["Int"]["output"];
};

export type LeaderboardStrokes = {
  __typename?: "LeaderboardStrokes";
  id: Scalars["ID"]["output"];
  playoffs?: Maybe<Array<LeaderboardStroke>>;
  strokes: Array<LeaderboardStroke>;
};

export type LeaderboardStrokesCompressed = {
  __typename?: "LeaderboardStrokesCompressed";
  id: Scalars["ID"]["output"];
  payload: Scalars["String"]["output"];
};

export type LeaderboardV2 = {
  __typename?: "LeaderboardV2";
  courses: Array<Course>;
  /** @deprecated use leaderboardFeatures */
  features?: Maybe<Array<LeaderboardFeature>>;
  formatType: FormatType;
  id: Scalars["ID"]["output"];
  /** @deprecated Use the leaderboard legend query */
  informationSections: Array<InformationSection>;
  isPlayoffActive: Scalars["Boolean"]["output"];
  leaderboardFeatures?: Maybe<Array<FeatureItem>>;
  leaderboardRoundHeader: Scalars["String"]["output"];
  messages: Array<LeaderboardMessage>;
  players: Array<LeaderboardRowV2>;
  profileEnabled: Scalars["Boolean"]["output"];
  roundDisplay: Scalars["String"]["output"];
  roundStatus: RoundStatus;
  roundStatusColor: RoundStatusColor;
  roundStatusDisplay: Scalars["String"]["output"];
  rounds: Array<LbRound>;
  scorecardEnabled: Scalars["Boolean"]["output"];
  standingsEnabled: Scalars["Boolean"]["output"];
  standingsHeader: Scalars["String"]["output"];
  subEvent: Scalars["Boolean"]["output"];
  timezone: Scalars["String"]["output"];
  tourcastURL?: Maybe<Scalars["String"]["output"]>;
  tourcastURLWeb?: Maybe<Scalars["String"]["output"]>;
  tournamentStatus: TournamentStatus;
  winner?: Maybe<Winner>;
};

export type Legend = {
  __typename?: "Legend";
  icon: Icon;
  iconUrl?: Maybe<Scalars["String"]["output"]>;
  subText?: Maybe<Scalars["String"]["output"]>;
  text?: Maybe<Scalars["String"]["output"]>;
  title: Scalars["String"]["output"];
};

export type ListItem = {
  __typename?: "ListItem";
  segments: Array<Maybe<ListNodeItems>>;
};

export type ListNodeItems = NewsArticleContentSegment | UnorderedListNode;

export enum LiveStatus {
  Live = "LIVE",
  None = "NONE",
  Upcoming = "UPCOMING",
}

export type MpHolePlayer = {
  __typename?: "MPHolePlayer";
  holePoints?: Maybe<Scalars["String"]["output"]>;
  holeScore?: Maybe<Scalars["String"]["output"]>;
  /**   used for four ball type scoring */
  holeScoreStatus?: Maybe<HoleScoreStatus>;
  holeScores?: Maybe<Array<MatchHoleScore>>;
  playerId: Scalars["ID"]["output"];
};

export type MpLeaderboard = {
  __typename?: "MPLeaderboard";
  courses: Array<Course>;
  currentRound: Scalars["Int"]["output"];
  formatType: FormatType;
  id: Scalars["ID"]["output"];
  infoWebUrl: Scalars["String"]["output"];
  informationSections: Array<InformationSection>;
  messages: Array<LeaderboardMessage>;
  roundFilters: Array<RoundFilter>;
  rounds: Array<MpLeaderboardRound>;
  shortTimezone: Scalars["String"]["output"];
  timezone: Scalars["String"]["output"];
  tourcastURL?: Maybe<Scalars["String"]["output"]>;
  tourcastUrlWeb?: Maybe<Scalars["String"]["output"]>;
  winner?: Maybe<MpLeaderboardPlayer>;
};

export type MpLeaderboardBracket = {
  __typename?: "MPLeaderboardBracket";
  bracketHeader: Scalars["String"]["output"];
  bracketNum?: Maybe<Scalars["Int"]["output"]>;
  matches: Array<MpLeaderboardMatch>;
  upcomingMatches?: Maybe<Array<UpcomingMatch>>;
};

export type MpLeaderboardMatch = {
  __typename?: "MPLeaderboardMatch";
  bracketPlayerSwap?: Maybe<Scalars["Boolean"]["output"]>;
  matchId: Scalars["ID"]["output"];
  matchScore?: Maybe<Scalars["String"]["output"]>;
  matchScoreColor?: Maybe<Scalars["String"]["output"]>;
  matchScoreColorDark?: Maybe<Scalars["String"]["output"]>;
  matchStatus: MatchStatus;
  players: Array<MpLeaderboardPlayer>;
  teeTime: Scalars["AWSTimestamp"]["output"];
  thru?: Maybe<Scalars["String"]["output"]>;
  thruNumberOfHoles?: Maybe<Scalars["Int"]["output"]>;
};

export type MpLeaderboardPlayer = {
  __typename?: "MPLeaderboardPlayer";
  activeInPlayoff?: Maybe<Scalars["Boolean"]["output"]>;
  bracketSeed: Scalars["String"]["output"];
  countryFlag: Scalars["String"]["output"];
  countryName: Scalars["String"]["output"];
  displayColor: Scalars["String"]["output"];
  displayName: Scalars["String"]["output"];
  firstName: Scalars["String"]["output"];
  headshot: Scalars["String"]["output"];
  isAmateur: Scalars["Boolean"]["output"];
  lastName: Scalars["String"]["output"];
  matchStatus?: Maybe<Scalars["String"]["output"]>;
  playerId: Scalars["ID"]["output"];
  record?: Maybe<Scalars["String"]["output"]>;
  shortName?: Maybe<Scalars["String"]["output"]>;
  tournamentSeed: Scalars["String"]["output"];
};

export type MpLeaderboardRound = {
  __typename?: "MPLeaderboardRound";
  brackets: Array<MpLeaderboardBracket>;
  round: Scalars["Int"]["output"];
  roundHeader: Scalars["String"]["output"];
  roundStatusSubHead: Scalars["String"]["output"];
  roundTypeSubHead: Scalars["String"]["output"];
};

export type MpMatchTeeTimes = {
  __typename?: "MPMatchTeeTimes";
  matchId: Scalars["ID"]["output"];
  players: Array<MpTeeTimePlayer>;
  status: Scalars["String"]["output"];
  tee: Scalars["String"]["output"];
  teeTime: Scalars["AWSTimestamp"]["output"];
  timezone: Scalars["String"]["output"];
};

export type MpPlayoffScorecard = {
  __typename?: "MPPlayoffScorecard";
  currentHole?: Maybe<Scalars["Int"]["output"]>;
  id: Scalars["ID"]["output"];
  infoWebUrl?: Maybe<Scalars["String"]["output"]>;
  playoff: Playoff;
  scorecardTitle: Scalars["String"]["output"];
  tourcastURL?: Maybe<Scalars["String"]["output"]>;
  tourcastUrlWeb?: Maybe<Scalars["String"]["output"]>;
};

export type MpRoundTeeTimes = {
  __typename?: "MPRoundTeeTimes";
  matchTeeTimes: Array<MpMatchTeeTimes>;
  roundNumber: Scalars["Int"]["output"];
};

export type MpScorecard = {
  __typename?: "MPScorecard";
  currentHole?: Maybe<Scalars["Int"]["output"]>;
  id: Scalars["ID"]["output"];
  infoWebUrl?: Maybe<Scalars["String"]["output"]>;
  matchHoleScores: Array<MatchHole>;
  matchName: Scalars["String"]["output"];
  matchPlayers: Array<MpScorecardPlayer>;
  messages: Array<Message>;
  scorecardTitle: Scalars["String"]["output"];
  tourcastUrl?: Maybe<Scalars["String"]["output"]>;
  tourcastUrlWeb?: Maybe<Scalars["String"]["output"]>;
};

export type MpScorecardPlayer = {
  __typename?: "MPScorecardPlayer";
  countryFlag: Scalars["String"]["output"];
  displayColor: Scalars["String"]["output"];
  displayName: Scalars["String"]["output"];
  firstName: Scalars["String"]["output"];
  isAmateur: Scalars["Boolean"]["output"];
  lastName: Scalars["String"]["output"];
  playerId: Scalars["ID"]["output"];
  seed: Scalars["String"]["output"];
  shortName: Scalars["String"]["output"];
};

export type MpScorecardResults = {
  __typename?: "MPScorecardResults";
  matchId: Scalars["String"]["output"];
  messages?: Maybe<Array<Message>>;
  players: Array<MpScorecardResultsPlayer>;
  roundNum: Scalars["Int"]["output"];
  tournamentId: Scalars["String"]["output"];
};

export type MpScorecardResultsPlayer = {
  __typename?: "MPScorecardResultsPlayer";
  displayName: Scalars["String"]["output"];
  playerId: Scalars["ID"]["output"];
  previousRounds: Array<PreviousRounds>;
};

export type MpTeeTimePlayer = {
  __typename?: "MPTeeTimePlayer";
  countryFlag: Scalars["String"]["output"];
  displayName: Scalars["String"]["output"];
  headshot: Scalars["String"]["output"];
  playerId: Scalars["ID"]["output"];
  shortName: Scalars["String"]["output"];
};

export type MpTeeTimes = {
  __typename?: "MPTeeTimes";
  defaultRound: Scalars["Int"]["output"];
  id: Scalars["ID"]["output"];
  roundFilters: Array<RoundFilter>;
  rounds: Array<MpRoundTeeTimes>;
  teeTimeHeaders: Array<TeeTimeHeader>;
  title: Scalars["String"]["output"];
};

export type MajorResultsTournament = {
  __typename?: "MajorResultsTournament";
  courseName: Scalars["String"]["output"];
  date: Scalars["String"]["output"];
  money: Scalars["String"]["output"];
  position: Scalars["String"]["output"];
  roundScores: Array<RoundScoreItem>;
  toPar: Scalars["String"]["output"];
  total: Scalars["String"]["output"];
  tourcastURL?: Maybe<Scalars["String"]["output"]>;
  tourcastURLWeb?: Maybe<Scalars["String"]["output"]>;
  tournamentId: Scalars["String"]["output"];
  tournamentName: Scalars["String"]["output"];
  year: Scalars["Int"]["output"];
};

export type MajorTimeline = {
  __typename?: "MajorTimeline";
  finishes: Array<Scalars["String"]["output"]>;
  tournamentName: Scalars["String"]["output"];
  tournamentNum: Scalars["String"]["output"];
};

export type Market = {
  __typename?: "Market";
  header: Scalars["String"]["output"];
  /**   used for switching between submarkets like "Group A" */
  marketType: OddsMarketType;
  /**   Tournament Winner */
  subMarketPills?: Maybe<Array<Scalars["String"]["output"]>>;
  subMarkets: Array<SubMarket>;
};

/**
 *   End
 *  Market Abstractions
 */
export type MarketPill = {
  __typename?: "MarketPill";
  displayText: Scalars["String"]["output"];
  marketType: OddsMarketType;
};

export type MatchHole = {
  __typename?: "MatchHole";
  courseHoleNumber: Scalars["String"]["output"];
  holeNumber: Scalars["String"]["output"];
  holeNumberColor: Scalars["String"]["output"];
  holePlayedStatus: HolePlayedStatus;
  matchHolePlayers: Array<MpHolePlayer>;
  matchScore?: Maybe<Scalars["String"]["output"]>;
  matchScoreColor: Scalars["String"]["output"];
  parValue: Scalars["String"]["output"];
};

export type MatchHoleScore = {
  __typename?: "MatchHoleScore";
  holeScore?: Maybe<Scalars["String"]["output"]>;
  holeScoreStatus?: Maybe<HoleScoreStatus>;
  playerId: Scalars["ID"]["output"];
};

export enum MatchStatus {
  Complete = "COMPLETE",
  InProgress = "IN_PROGRESS",
  Upcoming = "UPCOMING",
}

export type MatchupOptionV2 = BaseOddsOption & {
  __typename?: "MatchupOptionV2";
  entity: OddsEntity;
  isTie: Scalars["Boolean"]["output"];
  odds: OddsValues;
};

export type MatchupsPlayer = {
  __typename?: "MatchupsPlayer";
  countryFlag?: Maybe<Scalars["String"]["output"]>;
  currentRound?: Maybe<Scalars["Int"]["output"]>;
  displayName: Scalars["String"]["output"];
  firstName: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  lastName: Scalars["String"]["output"];
  matchId?: Maybe<Scalars["Int"]["output"]>;
  odds: Scalars["String"]["output"];
  oddsSwing?: Maybe<OddsSwing>;
  optionsId: Scalars["String"]["output"];
  seed?: Maybe<Scalars["Int"]["output"]>;
};

export type MediaGallery = {
  __typename?: "MediaGallery";
  cta?: Maybe<HomepageCta>;
  mediaGallery?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  mediaGalleryObjs?: Maybe<Array<Maybe<MediaGalleryItems>>>;
  sectionTitle?: Maybe<Scalars["String"]["output"]>;
};

export type MediaGalleryItem = {
  __typename?: "MediaGalleryItem";
  orientation?: Maybe<Orientation>;
  path?: Maybe<Scalars["String"]["output"]>;
};

export type MediaGalleryItems = MediaGalleryItem | Video;

export type Message = {
  __typename?: "Message";
  body: Array<Scalars["String"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
};

export type MobileCategoryPill = {
  __typename?: "MobileCategoryPill";
  category?: Maybe<StatCategory>;
  displayName: Scalars["String"]["output"];
};

export type MobileStat = {
  __typename?: "MobileStat";
  statId: Scalars["String"]["output"];
  statTitle: Scalars["String"]["output"];
};

export type MobileStatCategoryLeaders = {
  __typename?: "MobileStatCategoryLeaders";
  category: StatCategory;
  categoryHeader: Scalars["String"]["output"];
  leaders: Array<LeaderStat>;
  stats: Array<MobileStat>;
};

export type MobileStatLeaders = {
  __typename?: "MobileStatLeaders";
  categories: Array<MobileStatCategoryLeaders>;
  categoryPills: Array<MobileCategoryPill>;
  tourCode: TourCode;
  year: Scalars["Int"]["output"];
};

export type Mutation = {
  __typename?: "Mutation";
  addFavoriteTour: FavoriteTourResponse;
  addFavorites: Array<FavoritePlayer>;
  addNotificationTags: NotificationTagResponse;
  deleteAccount: DeleteAccountResponse;
  deleteFavorites: Array<FavoritePlayer>;
  deleteNotificationTags: NotificationTagResponse;
  unsubscribe: UnsubscribeResponse;
  updateCourseStats?: Maybe<TournamentHoleStats>;
  updateCoverage?: Maybe<BroadcastCoverage>;
  updateCupOverviewLeaderboard?: Maybe<CupTournamentStatus>;
  updateCupRoundLeaderboard?: Maybe<CupTournamentLeaderboard>;
  updateCupRoundLeaderboardCompressed?: Maybe<CupTournamentLeaderboardCompressed>;
  updateCupScorecard?: Maybe<CupScorecard>;
  updateGroupScorecard?: Maybe<GroupScorecard>;
  updateGroupShotDetails?: Maybe<GroupShotDetails>;
  updateGroupShotDetailsCompressed?: Maybe<GroupShotDetailsCompressed>;
  updateHoleDetails?: Maybe<HoleDetail>;
  updateLeaderboard?: Maybe<Leaderboard>;
  updateLeaderboardCompressed?: Maybe<LeaderboardCompressed>;
  updateLeaderboardCompressedV2?: Maybe<LeaderboardCompressedV2>;
  updateLeaderboardOddsToWin?: Maybe<Leaderboard>;
  updateLeaderboardOddsToWinCompressed?: Maybe<LeaderboardCompressed>;
  updateLeaderboardOddsToWinCompressedV2?: Maybe<LeaderboardCompressedV2>;
  updateLeaderboardOddsToWinV2?: Maybe<LeaderboardV2>;
  updateLeaderboardStrokes?: Maybe<LeaderboardStrokes>;
  updateLeaderboardStrokesCompressed?: Maybe<LeaderboardStrokesCompressed>;
  updateLeaderboardV2?: Maybe<LeaderboardV2>;
  updateMatchPlayLeaderboard?: Maybe<MpLeaderboard>;
  updateMatchPlayLeaderboardCompressed?: Maybe<LeaderboardCompressed>;
  updateMatchPlayPlayoffScorecard?: Maybe<MpPlayoffScorecard>;
  updateMatchPlayScorecard?: Maybe<MpScorecard>;
  updateMatchPlayTeeTimes: MpTeeTimes;
  updateMatchPlayTeeTimesCompressed?: Maybe<TeeTimesCompressed>;
  updateOddsCompressedV2?: Maybe<TournamentOddsCompressedV2>;
  updateOddsV2?: Maybe<TournamentOddsV2>;
  updatePlayoffScorecard?: Maybe<PlayoffScorecard>;
  updatePlayoffShotDetails: GroupShotDetails;
  updatePlayoffShotDetailsCompressed: GroupShotDetailsCompressed;
  updateScorecard?: Maybe<LeaderboardDrawer>;
  updateScorecardStats?: Maybe<PlayerScorecardStats>;
  updateScorecardV2?: Maybe<LeaderboardDrawerV2>;
  updateShotDetails?: Maybe<ShotDetails>;
  updateShotDetailsCompressed?: Maybe<ShotDetailsCompressed>;
  updateTSPPlayoffShotDetails: TeamShotDetails;
  updateTSPPlayoffShotDetailsCompressed: TeamShotDetailsCompressed;
  updateTeamPlayLeaderboard?: Maybe<TspLeaderboard>;
  updateTeamPlayLeaderboardCompressed?: Maybe<LeaderboardCompressed>;
  updateTeamPlayScorecard?: Maybe<TspScorecard>;
  updateTeamPlayScorecardRounds?: Maybe<TspScorecardRounds>;
  updateTeamStrokePlayTeeTimes?: Maybe<TspTeeTimes>;
  updateTeamStrokePlayTeeTimesCompressed?: Maybe<TeeTimesCompressed>;
  updateTeeTimes?: Maybe<TeeTimes>;
  updateTeeTimesCompressed?: Maybe<TeeTimesCompressed>;
  updateTourCup?: Maybe<TourCupRankingEvent>;
  updateTourcastShotDetails?: Maybe<ShotDetails>;
  updateTourcastTable?: Maybe<TourcastTable>;
  updateTournament?: Maybe<Tournament>;
  updateTournamentOdds?: Maybe<TournamentOdds>;
  updateTournamentOddsCompressed?: Maybe<TournamentOddsCompressed>;
  updateUpcomingSchedule?: Maybe<ScheduleUpcoming>;
};

export type MutationAddFavoriteTourArgs = {
  tourCode: TourCode;
};

export type MutationAddFavoritesArgs = {
  favorites: Array<FavoritePlayerInput>;
};

export type MutationAddNotificationTagsArgs = {
  notificationTags: Array<NotificationTagInput>;
};

export type MutationDeleteFavoritesArgs = {
  favorites: Array<FavoritePlayerInput>;
};

export type MutationDeleteNotificationTagsArgs = {
  notificationTags: Array<NotificationTagInput>;
};

export type MutationUnsubscribeArgs = {
  email: Scalars["String"]["input"];
  subscriptionIds: Array<InputMaybe<Scalars["String"]["input"]>>;
};

export type MutationUpdateCourseStatsArgs = {
  tournamentId: Scalars["ID"]["input"];
};

export type MutationUpdateCoverageArgs = {
  tournamentId: Scalars["ID"]["input"];
};

export type MutationUpdateCupOverviewLeaderboardArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationUpdateCupRoundLeaderboardArgs = {
  round?: InputMaybe<Scalars["Int"]["input"]>;
  tournamentId: Scalars["String"]["input"];
};

export type MutationUpdateCupRoundLeaderboardCompressedArgs = {
  round?: InputMaybe<Scalars["Int"]["input"]>;
  tournamentId: Scalars["String"]["input"];
};

export type MutationUpdateCupScorecardArgs = {
  matchId: Scalars["Int"]["input"];
  round: Scalars["Int"]["input"];
  tournamentId: Scalars["ID"]["input"];
};

export type MutationUpdateGroupScorecardArgs = {
  groupNumber: Scalars["Int"]["input"];
  id: Scalars["ID"]["input"];
  round: Scalars["Int"]["input"];
};

export type MutationUpdateGroupShotDetailsArgs = {
  groupNumber: Scalars["Int"]["input"];
  round: Scalars["Int"]["input"];
  tournamentId: Scalars["String"]["input"];
};

export type MutationUpdateGroupShotDetailsCompressedArgs = {
  groupNumber: Scalars["Int"]["input"];
  round: Scalars["Int"]["input"];
  tournamentId: Scalars["String"]["input"];
};

export type MutationUpdateHoleDetailsArgs = {
  courseId: Scalars["ID"]["input"];
  hole: Scalars["Int"]["input"];
  tournamentId: Scalars["ID"]["input"];
};

export type MutationUpdateLeaderboardArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationUpdateLeaderboardCompressedArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationUpdateLeaderboardCompressedV2Args = {
  id: Scalars["ID"]["input"];
};

export type MutationUpdateLeaderboardOddsToWinArgs = {
  id: Scalars["ID"]["input"];
  provider: Scalars["String"]["input"];
};

export type MutationUpdateLeaderboardOddsToWinCompressedArgs = {
  id: Scalars["ID"]["input"];
  provider: Scalars["String"]["input"];
};

export type MutationUpdateLeaderboardOddsToWinCompressedV2Args = {
  id: Scalars["ID"]["input"];
  provider: Scalars["String"]["input"];
};

export type MutationUpdateLeaderboardOddsToWinV2Args = {
  id: Scalars["ID"]["input"];
  provider: Scalars["String"]["input"];
};

export type MutationUpdateLeaderboardStrokesArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationUpdateLeaderboardStrokesCompressedArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationUpdateLeaderboardV2Args = {
  id: Scalars["ID"]["input"];
};

export type MutationUpdateMatchPlayLeaderboardArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationUpdateMatchPlayLeaderboardCompressedArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationUpdateMatchPlayPlayoffScorecardArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationUpdateMatchPlayScorecardArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationUpdateMatchPlayTeeTimesArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationUpdateMatchPlayTeeTimesCompressedArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationUpdateOddsCompressedV2Args = {
  oddsFormat?: InputMaybe<OddsFormat>;
  provider?: InputMaybe<OddsProvider>;
  tournamentId: Scalars["ID"]["input"];
};

export type MutationUpdateOddsV2Args = {
  oddsFormat?: InputMaybe<OddsFormat>;
  provider?: InputMaybe<OddsProvider>;
  tournamentId: Scalars["ID"]["input"];
};

export type MutationUpdatePlayoffScorecardArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationUpdatePlayoffShotDetailsArgs = {
  tournamentId: Scalars["ID"]["input"];
};

export type MutationUpdatePlayoffShotDetailsCompressedArgs = {
  tournamentId: Scalars["ID"]["input"];
};

export type MutationUpdateScorecardArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationUpdateScorecardStatsArgs = {
  id: Scalars["ID"]["input"];
  playerId: Scalars["String"]["input"];
};

export type MutationUpdateScorecardV2Args = {
  id: Scalars["ID"]["input"];
};

export type MutationUpdateShotDetailsArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationUpdateShotDetailsCompressedArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationUpdateTspPlayoffShotDetailsArgs = {
  tournamentId: Scalars["ID"]["input"];
};

export type MutationUpdateTspPlayoffShotDetailsCompressedArgs = {
  tournamentId: Scalars["ID"]["input"];
};

export type MutationUpdateTeamPlayLeaderboardArgs = {
  id: Scalars["ID"]["input"];
  provider: Scalars["String"]["input"];
};

export type MutationUpdateTeamPlayLeaderboardCompressedArgs = {
  id: Scalars["ID"]["input"];
  provider: Scalars["String"]["input"];
};

export type MutationUpdateTeamPlayScorecardArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationUpdateTeamPlayScorecardRoundsArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationUpdateTeamStrokePlayTeeTimesArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationUpdateTeamStrokePlayTeeTimesCompressedArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationUpdateTeeTimesArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationUpdateTeeTimesCompressedArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationUpdateTourCupArgs = {
  id: Scalars["ID"]["input"];
  type?: InputMaybe<TourCupType>;
};

export type MutationUpdateTourcastShotDetailsArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationUpdateTourcastTableArgs = {
  tournamentId: Scalars["ID"]["input"];
};

export type MutationUpdateTournamentArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationUpdateTournamentOddsArgs = {
  tournamentId: Scalars["ID"]["input"];
};

export type MutationUpdateTournamentOddsCompressedArgs = {
  tournamentId: Scalars["ID"]["input"];
};

export type MutationUpdateUpcomingScheduleArgs = {
  tourCode: Scalars["String"]["input"];
  year?: InputMaybe<Scalars["String"]["input"]>;
};

export type NewsArticle = {
  __typename?: "NewsArticle";
  articleImage?: Maybe<Scalars["String"]["output"]>;
  brightcoveId?: Maybe<Scalars["String"]["output"]>;
  externalLinkOverride?: Maybe<Scalars["String"]["output"]>;
  franchise: Scalars["String"]["output"];
  franchiseDisplayName: Scalars["String"]["output"];
  headline?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  publishDate?: Maybe<Scalars["AWSTimestamp"]["output"]>;
  shareURL: Scalars["String"]["output"];
  sponsor?: Maybe<NewsArticleSponsor>;
  teaserContent?: Maybe<Scalars["String"]["output"]>;
  teaserHeadline?: Maybe<Scalars["String"]["output"]>;
  updateDate?: Maybe<Scalars["AWSTimestamp"]["output"]>;
  url: Scalars["String"]["output"];
};

export type NewsArticleAuthor = {
  __typename?: "NewsArticleAuthor";
  byLine?: Maybe<Scalars["String"]["output"]>;
  byLineIcon?: Maybe<Scalars["String"]["output"]>;
  byLineLink?: Maybe<Scalars["String"]["output"]>;
  byLineLinkDisplay?: Maybe<Scalars["String"]["output"]>;
  firstName: Scalars["String"]["output"];
  headshot?: Maybe<Scalars["String"]["output"]>;
  lastName: Scalars["String"]["output"];
  twitter?: Maybe<Scalars["String"]["output"]>;
};

export type NewsArticleBlockQuote = {
  __typename?: "NewsArticleBlockQuote";
  class?: Maybe<Scalars["String"]["output"]>;
  playerId?: Maybe<Scalars["String"]["output"]>;
  playerName?: Maybe<Scalars["String"]["output"]>;
  quote?: Maybe<Scalars["String"]["output"]>;
};

export type NewsArticleContentSegment = {
  __typename?: "NewsArticleContentSegment";
  data?: Maybe<Scalars["String"]["output"]>;
  format?: Maybe<NewsArticleFormat>;
  id?: Maybe<Scalars["String"]["output"]>;
  imageDescription?: Maybe<Scalars["String"]["output"]>;
  imageOrientation?: Maybe<Orientation>;
  type: Scalars["String"]["output"];
  value?: Maybe<Scalars["String"]["output"]>;
};

export type NewsArticleDetails = {
  __typename?: "NewsArticleDetails";
  articleSponsor?: Maybe<Scalars["String"]["output"]>;
  authorReference?: Maybe<NewsArticleAuthor>;
  brandedContent: Scalars["Boolean"]["output"];
  canonicalUrl?: Maybe<Scalars["String"]["output"]>;
  cta?: Maybe<CallToAction>;
  datePublished: Scalars["AWSTimestamp"]["output"];
  disableAds: Scalars["Boolean"]["output"];
  franchise: Scalars["String"]["output"];
  franchiseDisplayName: Scalars["String"]["output"];
  headline: Scalars["String"]["output"];
  hero?: Maybe<NewsArticleHero>;
  leadVideoId?: Maybe<Scalars["String"]["output"]>;
  leadVideoTitle?: Maybe<Scalars["String"]["output"]>;
  metadata?: Maybe<NewsArticleMetadata>;
  moreNewsTitle?: Maybe<Scalars["String"]["output"]>;
  nodes: Array<NewsArticleNode>;
  overviewNodes?: Maybe<Array<NewsArticleNode>>;
  path: Scalars["String"]["output"];
  playerNames?: Maybe<Array<Scalars["String"]["output"]>>;
  readTime: Scalars["String"]["output"];
  relatedFacts?: Maybe<Array<Scalars["String"]["output"]>>;
  shareURL: Scalars["String"]["output"];
  sponsor?: Maybe<NewsArticleSponsor>;
  teaserAsset?: Maybe<Scalars["String"]["output"]>;
  tourName?: Maybe<Scalars["String"]["output"]>;
  tournamentName?: Maybe<Scalars["String"]["output"]>;
  url: Scalars["String"]["output"];
};

export type NewsArticleDetailsCompressed = {
  __typename?: "NewsArticleDetailsCompressed";
  path: Scalars["String"]["output"];
  payload: Scalars["String"]["output"];
};

export type NewsArticleDivider = {
  __typename?: "NewsArticleDivider";
  value?: Maybe<Scalars["String"]["output"]>;
};

export type NewsArticleEmbedded = {
  __typename?: "NewsArticleEmbedded";
  class?: Maybe<Scalars["String"]["output"]>;
  frameborder?: Maybe<Scalars["Boolean"]["output"]>;
  height?: Maybe<Scalars["String"]["output"]>;
  scroll?: Maybe<Scalars["Boolean"]["output"]>;
  url?: Maybe<Scalars["String"]["output"]>;
};

export type NewsArticleFormat = {
  __typename?: "NewsArticleFormat";
  variants?: Maybe<Array<Scalars["String"]["output"]>>;
};

export type NewsArticleHeader = {
  __typename?: "NewsArticleHeader";
  headerSegments?: Maybe<Array<NewsArticleHeaderSegment>>;
  style?: Maybe<Scalars["String"]["output"]>;
};

export type NewsArticleHeaderSegment = {
  __typename?: "NewsArticleHeaderSegment";
  class?: Maybe<Scalars["String"]["output"]>;
  headerType: Scalars["String"]["output"];
  segments?: Maybe<Array<NewsArticleContentSegment>>;
};

export type NewsArticleHero = {
  __typename?: "NewsArticleHero";
  image?: Maybe<Scalars["String"]["output"]>;
  imageDescription?: Maybe<Scalars["String"]["output"]>;
  video?: Maybe<Video>;
};

export type NewsArticleHowToWatch = {
  __typename?: "NewsArticleHowToWatch";
  class?: Maybe<Scalars["String"]["output"]>;
  round?: Maybe<Scalars["Int"]["output"]>;
  season?: Maybe<Scalars["String"]["output"]>;
  tournamentId?: Maybe<Scalars["String"]["output"]>;
};

export type NewsArticleImage = {
  __typename?: "NewsArticleImage";
  segments: Array<NewsArticleContentSegment>;
};

export type NewsArticleInlineOdds = {
  __typename?: "NewsArticleInlineOdds";
  marketId: HistoricalOddsId;
  playerId: Scalars["String"]["output"];
  playerName: Scalars["String"]["output"];
  timeStamp?: Maybe<Scalars["AWSDateTime"]["output"]>;
  tournamentId: Scalars["String"]["output"];
};

export type NewsArticleInstagram = {
  __typename?: "NewsArticleInstagram";
  class?: Maybe<Scalars["String"]["output"]>;
  url?: Maybe<Scalars["String"]["output"]>;
};

export type NewsArticleLineBreak = {
  __typename?: "NewsArticleLineBreak";
  breakValue?: Maybe<Scalars["String"]["output"]>;
};

export type NewsArticleLink = {
  __typename?: "NewsArticleLink";
  segments: Array<NewsArticleContentSegment>;
};

export type NewsArticleMetadata = {
  __typename?: "NewsArticleMetadata";
  metadata?: Maybe<Array<NewsArticleMetadataSegment>>;
};

export type NewsArticleMetadataSegment = {
  __typename?: "NewsArticleMetadataSegment";
  name: Scalars["String"]["output"];
  value?: Maybe<Scalars["String"]["output"]>;
};

export type NewsArticleNode =
  | ArticleOddsTableQuery
  | ExpertPicksNode
  | NewsArticleBlockQuote
  | NewsArticleDivider
  | NewsArticleEmbedded
  | NewsArticleHeader
  | NewsArticleHowToWatch
  | NewsArticleImage
  | NewsArticleInstagram
  | NewsArticleLineBreak
  | NewsArticleLink
  | NewsArticleOddsParagraph
  | NewsArticleParagraph
  | NewsArticlePhotoGallery
  | NewsArticlePlayerComparison
  | NewsArticleScoreCard
  | NewsArticleStats
  | NewsArticleText
  | NewsArticleTweetNode
  | NewsArticleVideo
  | NewsArticleWeather
  | RelatedFactsNode
  | TableFragment
  | UnorderedListNode;

export type NewsArticleOddsParagraph = {
  __typename?: "NewsArticleOddsParagraph";
  content: Array<OddsParagraphContent>;
};

export type NewsArticleParagraph = {
  __typename?: "NewsArticleParagraph";
  id?: Maybe<Scalars["String"]["output"]>;
  segments: Array<NewsArticleContentSegment>;
};

export type NewsArticlePhotoGallery = {
  __typename?: "NewsArticlePhotoGallery";
  images: Array<NewsArticleImage>;
};

export type NewsArticlePlayerComparison = {
  __typename?: "NewsArticlePlayerComparison";
  class?: Maybe<Scalars["String"]["output"]>;
  playerIds?: Maybe<Array<Scalars["String"]["output"]>>;
  playerNames?: Maybe<Array<Scalars["String"]["output"]>>;
  season?: Maybe<Scalars["String"]["output"]>;
  statCategory?: Maybe<Scalars["String"]["output"]>;
  tournamentId?: Maybe<Scalars["String"]["output"]>;
};

export type NewsArticleScoreCard = {
  __typename?: "NewsArticleScoreCard";
  class?: Maybe<Scalars["String"]["output"]>;
  playerId?: Maybe<Scalars["String"]["output"]>;
  playerName?: Maybe<Scalars["String"]["output"]>;
  round?: Maybe<Scalars["String"]["output"]>;
  season?: Maybe<Scalars["String"]["output"]>;
  tournamentId?: Maybe<Scalars["String"]["output"]>;
};

export type NewsArticleSponsor = {
  __typename?: "NewsArticleSponsor";
  description?: Maybe<Scalars["String"]["output"]>;
  gam?: Maybe<Scalars["String"]["output"]>;
  image?: Maybe<Scalars["String"]["output"]>;
  logo: Scalars["String"]["output"];
  logoDark: Scalars["String"]["output"];
  name: Scalars["String"]["output"];
  sponsorPrefix?: Maybe<Scalars["String"]["output"]>;
  websiteUrl?: Maybe<Scalars["String"]["output"]>;
};

export enum NewsArticleStatType {
  ByNumbers = "BY_NUMBERS",
  DotChart = "DOT_CHART",
  LineChart = "LINE_CHART",
}

export type NewsArticleStats = {
  __typename?: "NewsArticleStats";
  playerId?: Maybe<Scalars["String"]["output"]>;
  playerName?: Maybe<Scalars["String"]["output"]>;
  season?: Maybe<Scalars["String"]["output"]>;
  statType: NewsArticleStatType;
  stats: Array<ContentStat>;
  tournamentId?: Maybe<Scalars["String"]["output"]>;
};

export type NewsArticleTeaserAsset = {
  __typename?: "NewsArticleTeaserAsset";
  value?: Maybe<Scalars["String"]["output"]>;
};

export type NewsArticleText = {
  __typename?: "NewsArticleText";
  value?: Maybe<Scalars["String"]["output"]>;
};

export type NewsArticleTweetNode = {
  __typename?: "NewsArticleTweetNode";
  tweetId: Scalars["String"]["output"];
};

export type NewsArticleVideo = {
  __typename?: "NewsArticleVideo";
  video?: Maybe<Video>;
};

export type NewsArticleWeather = {
  __typename?: "NewsArticleWeather";
  class?: Maybe<Scalars["String"]["output"]>;
  season?: Maybe<Scalars["String"]["output"]>;
  tour?: Maybe<Scalars["String"]["output"]>;
  tournamentId?: Maybe<Scalars["String"]["output"]>;
};

export type NewsArticles = {
  __typename?: "NewsArticles";
  articles: Array<NewsArticle>;
  franchiseSponsors?: Maybe<Array<NewsSponsor>>;
  integratedComponents: Array<IntegratedComponent>;
};

export type NewsFranchise = {
  __typename?: "NewsFranchise";
  franchise: Scalars["String"]["output"];
  franchiseLabel: Scalars["String"]["output"];
};

export type NewsSponsor = {
  __typename?: "NewsSponsor";
  accessibilityText: Scalars["String"]["output"];
  backgroundColor: Scalars["String"]["output"];
  franchise: Scalars["String"]["output"];
  image: Scalars["String"]["output"];
  label: Scalars["String"]["output"];
};

export type Newsletter = {
  __typename?: "Newsletter";
  ctaText: Scalars["String"]["output"];
  description?: Maybe<Scalars["String"]["output"]>;
  gigyaSubscriptionId: Scalars["String"]["output"];
  image: Scalars["String"]["output"];
  title: Scalars["String"]["output"];
};

export type NotificationTag = {
  __typename?: "NotificationTag";
  tag: Scalars["String"]["output"];
};

export type NotificationTagInput = {
  tag: Scalars["String"]["input"];
};

export type NotificationTagResponse = {
  __typename?: "NotificationTagResponse";
  ok: Scalars["Boolean"]["output"];
  tags: Array<Maybe<NotificationTag>>;
};

export type OddsBanner = {
  __typename?: "OddsBanner";
  cta?: Maybe<CallToAction>;
  disclaimer: Scalars["String"]["output"];
  image: Scalars["String"]["output"];
  label: Scalars["String"]["output"];
};

export type OddsCutsOption = {
  __typename?: "OddsCutsOption";
  entity: OddsEntity;
  noOdds: OddsValues;
  yesOdds: OddsValues;
};

export type OddsCutsPlayers = {
  __typename?: "OddsCutsPlayers";
  countryFlag?: Maybe<Scalars["String"]["output"]>;
  currentRound?: Maybe<Scalars["Int"]["output"]>;
  displayName: Scalars["String"]["output"];
  firstName: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  lastName: Scalars["String"]["output"];
  matchId?: Maybe<Scalars["Int"]["output"]>;
  noOdds: Scalars["String"]["output"];
  noOddsSwing?: Maybe<OddsSwing>;
  noOptionsId: Scalars["String"]["output"];
  position: Scalars["String"]["output"];
  seed?: Maybe<Scalars["Int"]["output"]>;
  total: Scalars["String"]["output"];
  yesOdds: Scalars["String"]["output"];
  yesOddsSwing?: Maybe<OddsSwing>;
  yesOptionsId: Scalars["String"]["output"];
};

/**   Odds Primitives */
export type OddsEntity = {
  __typename?: "OddsEntity";
  color?: Maybe<Scalars["String"]["output"]>;
  entityFlagUrl?: Maybe<Scalars["String"]["output"]>;
  entityId: Scalars["ID"]["output"];
  groupNum: Scalars["Int"]["output"];
  maxRound: Scalars["Int"]["output"];
  players: Array<OddsPlayer>;
  position: Scalars["String"]["output"];
  score: Scalars["String"]["output"];
  seed?: Maybe<Scalars["Int"]["output"]>;
  thru?: Maybe<Scalars["String"]["output"]>;
  total: Scalars["String"]["output"];
  totalSort: Scalars["Int"]["output"];
};

export type OddsFinishes = {
  __typename?: "OddsFinishes";
  countryFlag?: Maybe<Scalars["String"]["output"]>;
  currentRound?: Maybe<Scalars["Int"]["output"]>;
  displayName: Scalars["String"]["output"];
  firstName: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  lastName: Scalars["String"]["output"];
  matchId?: Maybe<Scalars["Int"]["output"]>;
  odds: Scalars["String"]["output"];
  oddsSwing?: Maybe<OddsSwing>;
  optionsId: Scalars["String"]["output"];
  seed?: Maybe<Scalars["Int"]["output"]>;
};

export type OddsFinishesOption = BaseOddsOption & {
  __typename?: "OddsFinishesOption";
  entity: OddsEntity;
  odds: OddsValues;
};

export enum OddsFormat {
  Decimal = "DECIMAL",
  Fractional = "FRACTIONAL",
  Moneyline = "MONEYLINE",
}

export type OddsGroup = {
  __typename?: "OddsGroup";
  id: Scalars["ID"]["output"];
  matchupPlayers: Array<MatchupsPlayer>;
  subMarket: Scalars["String"]["output"];
};

export type OddsGroupOptionV2 = BaseOddsOption & {
  __typename?: "OddsGroupOptionV2";
  entity: OddsEntity;
  odds: OddsValues;
};

export type OddsLeadersOption = BaseOddsOption & {
  __typename?: "OddsLeadersOption";
  entity: OddsEntity;
  odds: OddsValues;
};

export type OddsLeadersPlayers = {
  __typename?: "OddsLeadersPlayers";
  countryFlag?: Maybe<Scalars["String"]["output"]>;
  currentRound?: Maybe<Scalars["Int"]["output"]>;
  displayName: Scalars["String"]["output"];
  firstName: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  lastName: Scalars["String"]["output"];
  matchId?: Maybe<Scalars["Int"]["output"]>;
  odds: Scalars["String"]["output"];
  oddsSwing?: Maybe<OddsSwing>;
  optionsId: Scalars["String"]["output"];
  seed?: Maybe<Scalars["Int"]["output"]>;
};

/**   End Market Abstractions */
export enum OddsMarketType {
  Finishes = "FINISHES",
  GroupWinner = "GROUP_WINNER",
  Matchup = "MATCHUP",
  Nationality = "NATIONALITY",
  PlayerProps = "PLAYER_PROPS",
  Winner = "WINNER",
}

export type OddsMatchupOptionGroup = {
  __typename?: "OddsMatchupOptionGroup";
  options: Array<MatchupOptionV2>;
};

export type OddsMatchups = {
  __typename?: "OddsMatchups";
  id: Scalars["ID"]["output"];
  matchupPlayers: Array<MatchupsPlayer>;
  subMarket: Scalars["String"]["output"];
};

export type OddsMessage = {
  __typename?: "OddsMessage";
  body: Scalars["String"]["output"];
  header: Scalars["String"]["output"];
};

export type OddsNationality = {
  __typename?: "OddsNationality";
  countryFlag?: Maybe<Scalars["String"]["output"]>;
  currentRound?: Maybe<Scalars["Int"]["output"]>;
  displayName: Scalars["String"]["output"];
  firstName: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  lastName: Scalars["String"]["output"];
  matchId?: Maybe<Scalars["Int"]["output"]>;
  odds: Scalars["String"]["output"];
  oddsSwing?: Maybe<OddsSwing>;
  optionsId: Scalars["String"]["output"];
  seed?: Maybe<Scalars["Int"]["output"]>;
};

export type OddsNationalityOption = BaseOddsOption & {
  __typename?: "OddsNationalityOption";
  entity: OddsEntity;
  odds: OddsValues;
};

export type OddsOption =
  | OddsCutsPlayers
  | OddsFinishes
  | OddsGroup
  | OddsLeadersPlayers
  | OddsMatchups
  | OddsNationality
  | OddsToWin;

export type OddsOptionV2 =
  | OddsCutsOption
  | OddsFinishesOption
  | OddsGroupOptionV2
  | OddsLeadersOption
  | OddsMatchupOptionGroup
  | OddsNationalityOption
  | OddsToWinV2;

export type OddsParagraphContent = NewsArticleInlineOdds | NewsArticleText;

export type OddsPlayer = {
  __typename?: "OddsPlayer";
  countryFlag: Scalars["String"]["output"];
  displayName: Scalars["String"]["output"];
  firstName: Scalars["String"]["output"];
  lastName: Scalars["String"]["output"];
  overrideFlagUrl?: Maybe<Scalars["String"]["output"]>;
  playerId: Scalars["ID"]["output"];
  shortName: Scalars["String"]["output"];
};

export enum OddsProvider {
  Bet365 = "BET365",
  Mgm = "MGM",
}

export enum OddsSwing {
  Constant = "CONSTANT",
  Down = "DOWN",
  Up = "UP",
}

/**   Odds Table */
export type OddsTable = {
  __typename?: "OddsTable";
  markets: Array<ArticleOddsMarkets>;
  players: Array<PlayerMarketsRow>;
  provider?: Maybe<OddsProvider>;
  tournamentId: Scalars["String"]["output"];
  tournamentName: Scalars["String"]["output"];
};

export type OddsToWin = {
  __typename?: "OddsToWin";
  countryFlag?: Maybe<Scalars["String"]["output"]>;
  currentRound?: Maybe<Scalars["Int"]["output"]>;
  displayName: Scalars["String"]["output"];
  firstName: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  lastName: Scalars["String"]["output"];
  matchId?: Maybe<Scalars["Int"]["output"]>;
  odds: Scalars["String"]["output"];
  oddsSwing?: Maybe<OddsSwing>;
  optionsId: Scalars["String"]["output"];
  position: Scalars["String"]["output"];
  score: Scalars["String"]["output"];
  seed?: Maybe<Scalars["Int"]["output"]>;
  thru?: Maybe<Scalars["String"]["output"]>;
  total: Scalars["String"]["output"];
};

export type OddsToWinV2 = BaseOddsOption & {
  __typename?: "OddsToWinV2";
  entity: OddsEntity;
  odds: OddsValues;
};

export type OddsValues = {
  __typename?: "OddsValues";
  odds: Scalars["String"]["output"];
  oddsSwing: OddsSwing;
  optionId: Scalars["ID"]["output"];
};

export enum Orientation {
  Landscape = "Landscape",
  Portrait = "Portrait",
}

export type OverviewStat = {
  __typename?: "OverviewStat";
  players: Array<LeaderStat>;
  statId: Scalars["String"]["output"];
  statName: Scalars["String"]["output"];
  tourAvg?: Maybe<Scalars["String"]["output"]>;
};

export type OverviewStats = {
  __typename?: "OverviewStats";
  categories: Array<StatCategoryConfig>;
  stats: Array<OverviewStat>;
  tourCode: TourCode;
  year: Scalars["Int"]["output"];
};

export type Player = {
  __typename?: "Player";
  abbreviations: Scalars["String"]["output"];
  abbreviationsAccessibilityText: Scalars["String"]["output"];
  amateur: Scalars["Boolean"]["output"];
  assets?: Maybe<Array<PlayerAsset>>;
  bettingProfile: Scalars["String"]["output"];
  country: Scalars["String"]["output"];
  countryFlag: Scalars["String"]["output"];
  displayName: Scalars["String"]["output"];
  firstName: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  lastName: Scalars["String"]["output"];
  lineColor: Scalars["String"]["output"];
  seed?: Maybe<Scalars["String"]["output"]>;
  shortName: Scalars["String"]["output"];
  status?: Maybe<Scalars["String"]["output"]>;
  tourBound?: Maybe<Scalars["Boolean"]["output"]>;
};

export type PlayerAsset = TourBoundAsset;

export type PlayerBio = {
  __typename?: "PlayerBio";
  age?: Maybe<Scalars["String"]["output"]>;
  birthplace: PlayerBioLocation;
  born?: Maybe<Scalars["String"]["output"]>;
  bornAccessibilityText?: Maybe<Scalars["String"]["output"]>;
  careerEarnings?: Maybe<Scalars["String"]["output"]>;
  degree?: Maybe<Scalars["String"]["output"]>;
  exemptions?: Maybe<Array<PlayerBioExemption>>;
  family?: Maybe<Scalars["String"]["output"]>;
  graduationYear?: Maybe<Scalars["String"]["output"]>;
  heightImperial?: Maybe<Scalars["String"]["output"]>;
  heightImperialAccessibilityText?: Maybe<Scalars["String"]["output"]>;
  heightMeters?: Maybe<Scalars["String"]["output"]>;
  overview?: Maybe<Scalars["String"]["output"]>;
  personal?: Maybe<Array<Scalars["String"]["output"]>>;
  playsFrom: PlayerBioLocation;
  pronunciation?: Maybe<Scalars["String"]["output"]>;
  residence: PlayerBioLocation;
  school?: Maybe<Scalars["String"]["output"]>;
  social?: Maybe<Array<PlayerBioSocial>>;
  tours: Array<TourCode>;
  turnedPro?: Maybe<Scalars["String"]["output"]>;
  websiteURL?: Maybe<Scalars["String"]["output"]>;
  weightImperial?: Maybe<Scalars["String"]["output"]>;
  weightKilograms?: Maybe<Scalars["String"]["output"]>;
};

export type PlayerBioExemption = {
  __typename?: "PlayerBioExemption";
  description?: Maybe<Scalars["String"]["output"]>;
  expirationDate?: Maybe<Scalars["String"]["output"]>;
  tour?: Maybe<TourCode>;
};

export type PlayerBioLocation = {
  __typename?: "PlayerBioLocation";
  city?: Maybe<Scalars["String"]["output"]>;
  country?: Maybe<Scalars["String"]["output"]>;
  countryCode?: Maybe<Scalars["String"]["output"]>;
  state?: Maybe<Scalars["String"]["output"]>;
  stateCode?: Maybe<Scalars["String"]["output"]>;
};

export type PlayerBioSocial = {
  __typename?: "PlayerBioSocial";
  type: SocialType;
  url: Scalars["String"]["output"];
};

export type PlayerBioWrapper = {
  __typename?: "PlayerBioWrapper";
  bioLink: Scalars["String"]["output"];
  country: Scalars["String"]["output"];
  countryFlag: Scalars["String"]["output"];
  displayName: Scalars["String"]["output"];
  firstName: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  lastName: Scalars["String"]["output"];
  owgr?: Maybe<Scalars["Int"]["output"]>;
  playerBio?: Maybe<PlayerBio>;
  rank?: Maybe<BioRank>;
};

export type PlayerComparison = {
  __typename?: "PlayerComparison";
  category: PlayerComparisonCategory;
  categoryPills: Array<PlayerComparisonCategoryPill>;
  displaySeason: Scalars["String"]["output"];
  seasonPills: Array<StatYearPills>;
  table: PlayerComparisonTable;
  tourCode: TourCode;
  year: Scalars["Int"]["output"];
};

export enum PlayerComparisonCategory {
  ApproachGreen = "APPROACH_GREEN",
  AroundGreen = "AROUND_GREEN",
  OffTee = "OFF_TEE",
  Putting = "PUTTING",
  Scoring = "SCORING",
  StrokesGained = "STROKES_GAINED",
}

export type PlayerComparisonCategoryPill = {
  __typename?: "PlayerComparisonCategoryPill";
  category: PlayerComparisonCategory;
  displayText: Scalars["String"]["output"];
};

export type PlayerComparisonHeader = {
  __typename?: "PlayerComparisonHeader";
  country?: Maybe<Scalars["String"]["output"]>;
  displayText: Scalars["String"]["output"];
  playerId: Scalars["ID"]["output"];
};

export type PlayerComparisonOdds = {
  __typename?: "PlayerComparisonOdds";
  color: Scalars["String"]["output"];
  country: Scalars["String"]["output"];
  countryName: Scalars["String"]["output"];
  displayName: Scalars["String"]["output"];
  oddsSwing: OddsSwing;
  oddsToWin: Scalars["String"]["output"];
  playerId: Scalars["ID"]["output"];
  provider: OddsProvider;
};

export type PlayerComparisonRow = {
  __typename?: "PlayerComparisonRow";
  statId: Scalars["String"]["output"];
  statName: Scalars["String"]["output"];
  values: Array<PlayerComparisonValue>;
};

export type PlayerComparisonTable = {
  __typename?: "PlayerComparisonTable";
  header: Scalars["String"]["output"];
  headerRow: Array<PlayerComparisonHeader>;
  rows: Array<PlayerComparisonRow>;
};

export type PlayerComparisonValue = {
  __typename?: "PlayerComparisonValue";
  bold: Scalars["Boolean"]["output"];
  displayValue: Scalars["String"]["output"];
  rank: Scalars["String"]["output"];
  rankDeviation?: Maybe<Scalars["Float"]["output"]>;
};

export type PlayerCourse = {
  __typename?: "PlayerCourse";
  courseCity: Scalars["String"]["output"];
  courseCountry: Scalars["String"]["output"];
  courseCountryCode: Scalars["String"]["output"];
  courseId: Scalars["String"]["output"];
  courseImage: Scalars["String"]["output"];
  courseName: Scalars["String"]["output"];
  courseState?: Maybe<Scalars["String"]["output"]>;
  cupEyebrowText: Scalars["String"]["output"];
  overview: Array<PlayerProfileOverviewItem>;
  tournaments: Array<CourseResultsTournament>;
};

export type PlayerDirectory = {
  __typename?: "PlayerDirectory";
  players: Array<PlayerDirectoryPlayer>;
  tourCode: TourCode;
};

export type PlayerDirectoryBio = {
  __typename?: "PlayerDirectoryBio";
  age?: Maybe<Scalars["String"]["output"]>;
  education?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  turnedPro?: Maybe<Scalars["String"]["output"]>;
};

export type PlayerDirectoryPlayer = {
  __typename?: "PlayerDirectoryPlayer";
  alphaSort: Scalars["String"]["output"];
  country: Scalars["String"]["output"];
  countryFlag: Scalars["String"]["output"];
  displayName: Scalars["String"]["output"];
  firstName: Scalars["String"]["output"];
  headshot: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  isActive: Scalars["Boolean"]["output"];
  lastName: Scalars["String"]["output"];
  playerBio: PlayerDirectoryBio;
  shortName: Scalars["String"]["output"];
};

export type PlayerField = {
  __typename?: "PlayerField";
  alphaSort: Scalars["String"]["output"];
  alternate: Scalars["Boolean"]["output"];
  amateur: Scalars["Boolean"]["output"];
  country: Scalars["String"]["output"];
  countryFlag: Scalars["String"]["output"];
  displayName: Scalars["String"]["output"];
  favorite: Scalars["Boolean"]["output"];
  firstName: Scalars["String"]["output"];
  headshot: Scalars["String"]["output"];
  id: Scalars["String"]["output"];
  lastName: Scalars["String"]["output"];
  owgr?: Maybe<Scalars["String"]["output"]>;
  qualifier?: Maybe<Scalars["String"]["output"]>;
  rankLogoDark?: Maybe<Scalars["String"]["output"]>;
  rankLogoLight?: Maybe<Scalars["String"]["output"]>;
  rankingPoints?: Maybe<Scalars["String"]["output"]>;
  shortName: Scalars["String"]["output"];
  status: Scalars["String"]["output"];
  teammate?: Maybe<PlayerFieldTeammate>;
  withdrawn: Scalars["Boolean"]["output"];
};

export type PlayerFieldTeammate = {
  __typename?: "PlayerFieldTeammate";
  alphaSort: Scalars["String"]["output"];
  alternate: Scalars["Boolean"]["output"];
  amateur: Scalars["Boolean"]["output"];
  country: Scalars["String"]["output"];
  countryFlag: Scalars["String"]["output"];
  displayName: Scalars["String"]["output"];
  favorite: Scalars["Boolean"]["output"];
  firstName: Scalars["String"]["output"];
  headshot: Scalars["String"]["output"];
  id: Scalars["String"]["output"];
  lastName: Scalars["String"]["output"];
  owgr?: Maybe<Scalars["String"]["output"]>;
  qualifier?: Maybe<Scalars["String"]["output"]>;
  qualifierId?: Maybe<Scalars["String"]["output"]>;
  rankingPoints?: Maybe<Scalars["String"]["output"]>;
  shortName: Scalars["String"]["output"];
  status: Scalars["String"]["output"];
  withdrawn: Scalars["Boolean"]["output"];
};

export type PlayerFinishStats = {
  __typename?: "PlayerFinishStats";
  countryCode: Scalars["String"]["output"];
  countryName: Scalars["String"]["output"];
  displayName: Scalars["String"]["output"];
  playerAvg: Scalars["String"]["output"];
  playerAvgLabel: Scalars["String"]["output"];
  playerId: Scalars["ID"]["output"];
  rank: Scalars["String"]["output"];
  statId: Scalars["String"]["output"];
  statName: Scalars["String"]["output"];
  statValues: Array<FinishStatValue>;
  tourAvg: Scalars["String"]["output"];
};

export type PlayerGroup = {
  __typename?: "PlayerGroup";
  fieldGroups: Array<FieldGroup>;
  title: Scalars["String"]["output"];
};

export type PlayerInfo = {
  __typename?: "PlayerInfo";
  countryFlag: Scalars["String"]["output"];
  countryName: Scalars["String"]["output"];
  firstName: Scalars["String"]["output"];
  headshot: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  lastName: Scalars["String"]["output"];
};

export type PlayerMarketsRow = {
  __typename?: "PlayerMarketsRow";
  country: Scalars["String"]["output"];
  countryFlag: Scalars["String"]["output"];
  markets: Array<HistoricalPlayerOdds>;
  playerId: Scalars["String"]["output"];
  playerName: Scalars["String"]["output"];
};

export type PlayerOdds = {
  __typename?: "PlayerOdds";
  country: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  oddsBanner: OddsBanner;
  oddsMessage?: Maybe<OddsMessage>;
  oddsProvider: OddsProvider;
  playerOddsMarkets: Array<PlayerOddsMarket>;
  seasonYear: Scalars["String"]["output"];
  tourCode: TourCode;
  tournamentNumber: Scalars["String"]["output"];
};

export type PlayerOddsCompressed = {
  __typename?: "PlayerOddsCompressed";
  id: Scalars["ID"]["output"];
  playerOddsPayload: Scalars["String"]["output"];
};

export type PlayerOddsMarket = {
  __typename?: "PlayerOddsMarket";
  id: Scalars["ID"]["output"];
  market: Scalars["String"]["output"];
  playerOddsOptions: Array<OddsOption>;
  subMarket?: Maybe<Scalars["String"]["output"]>;
};

export type PlayerOverviewStandings = {
  __typename?: "PlayerOverviewStandings";
  displaySeason: Scalars["String"]["output"];
  standings: Array<ProfileStandings>;
  tour: TourCode;
};

export type PlayerProfileAchievement = {
  __typename?: "PlayerProfileAchievement";
  title: Scalars["String"]["output"];
  value: Scalars["String"]["output"];
};

export type PlayerProfileCareer = {
  __typename?: "PlayerProfileCareer";
  achievements: Array<PlayerProfileAchievement>;
  cutsMade?: Maybe<Scalars["String"]["output"]>;
  events?: Maybe<Scalars["String"]["output"]>;
  internationalWins?: Maybe<Scalars["String"]["output"]>;
  majorWins?: Maybe<Scalars["String"]["output"]>;
  officialMoney?: Maybe<Scalars["String"]["output"]>;
  playerId: Scalars["ID"]["output"];
  runnerUp?: Maybe<Scalars["String"]["output"]>;
  second?: Maybe<Scalars["String"]["output"]>;
  tables: Array<PlayerProfileTable>;
  third?: Maybe<Scalars["String"]["output"]>;
  top5?: Maybe<Scalars["String"]["output"]>;
  top10?: Maybe<Scalars["String"]["output"]>;
  top25?: Maybe<Scalars["String"]["output"]>;
  tourCode?: Maybe<TourCode>;
  tourPills: Array<TourPills>;
  wins?: Maybe<Scalars["String"]["output"]>;
  winsTitle?: Maybe<Scalars["String"]["output"]>;
  years: Array<PlayerProfileCareerYear>;
};

export type PlayerProfileCareerResults = {
  __typename?: "PlayerProfileCareerResults";
  playerId: Scalars["ID"]["output"];
  tourPills: Array<TourPills>;
  yearResults: Array<PlayerProfileCareerYear>;
};

export type PlayerProfileCareerYear = {
  __typename?: "PlayerProfileCareerYear";
  cutsMade?: Maybe<Scalars["String"]["output"]>;
  displaySeason: Scalars["String"]["output"];
  events?: Maybe<Scalars["String"]["output"]>;
  officialMoney?: Maybe<Scalars["String"]["output"]>;
  second?: Maybe<Scalars["String"]["output"]>;
  standingsPoints?: Maybe<Scalars["String"]["output"]>;
  standingsRank?: Maybe<Scalars["String"]["output"]>;
  third?: Maybe<Scalars["String"]["output"]>;
  top5?: Maybe<Scalars["String"]["output"]>;
  top10?: Maybe<Scalars["String"]["output"]>;
  top25?: Maybe<Scalars["String"]["output"]>;
  tourCode: TourCode;
  wins?: Maybe<Scalars["String"]["output"]>;
  withdrawn?: Maybe<Scalars["String"]["output"]>;
  year: Scalars["Int"]["output"];
};

export type PlayerProfileCourseResults = {
  __typename?: "PlayerProfileCourseResults";
  coursePills: Array<CoursePills>;
  courses: Array<PlayerCourse>;
  playerId: Scalars["String"]["output"];
  tourCode: TourCode;
  tourPills: Array<TourCode>;
};

/**   Player Profile Tournament Results */
export type PlayerProfileInfoItem = {
  __typename?: "PlayerProfileInfoItem";
  logo?: Maybe<Scalars["String"]["output"]>;
  title: Scalars["String"]["output"];
  value: Scalars["String"]["output"];
  wide: Scalars["Boolean"]["output"];
};

export type PlayerProfileMajors = {
  __typename?: "PlayerProfileMajors";
  playerId: Scalars["String"]["output"];
  timelineHeaders: Array<Scalars["String"]["output"]>;
  timelineTournaments: Array<MajorTimeline>;
  tournaments: Array<MajorResultsTournament>;
};

export type PlayerProfileOverviewItem = {
  __typename?: "PlayerProfileOverviewItem";
  title: Scalars["String"]["output"];
  value: Scalars["String"]["output"];
};

export type PlayerProfileRows = {
  __typename?: "PlayerProfileRows";
  rowContent: Array<Scalars["String"]["output"]>;
  rowTitle: Scalars["String"]["output"];
  rowTitleDetail?: Maybe<Scalars["String"]["output"]>;
  secondContent?: Maybe<Array<Scalars["String"]["output"]>>;
};

export type PlayerProfileStat = {
  __typename?: "PlayerProfileStat";
  categories: Array<PlayerProfileStatCategory>;
  stats: Array<PlayerProfileStatItem>;
  tour: TourCode;
};

export type PlayerProfileStatCategory = {
  __typename?: "PlayerProfileStatCategory";
  category: PlayerProfileStatCategoryItem;
  displayTitle: Scalars["String"]["output"];
};

export enum PlayerProfileStatCategoryItem {
  All = "ALL",
  Approach = "APPROACH",
  AroundGreen = "AROUND_GREEN",
  Driving = "DRIVING",
  MoneyFinishes = "MONEY_FINISHES",
  PointsRankings = "POINTS_RANKINGS",
  Putting = "PUTTING",
  Scoring = "SCORING",
  Streaks = "STREAKS",
  StrokesGained = "STROKES_GAINED",
}

export type PlayerProfileStatFull = {
  __typename?: "PlayerProfileStatFull";
  categories: Array<PlayerProfileStatCategory>;
  displaySeason: Scalars["String"]["output"];
  overview: Array<PlayerProfileStatItem>;
  season: Scalars["String"]["output"];
  stats: Array<PlayerProfileStatItem>;
  topStats: Array<PlayerProfileStatItem>;
  tour: TourCode;
};

export type PlayerProfileStatItem = {
  __typename?: "PlayerProfileStatItem";
  aboveOrBelow: ScoringTendency;
  category: Array<PlayerProfileStatCategoryItem>;
  fieldAverage: Scalars["String"]["output"];
  rank: Scalars["String"]["output"];
  rankDeviation?: Maybe<Scalars["Float"]["output"]>;
  statId: Scalars["String"]["output"];
  supportingStat?: Maybe<PlayerProfileStatItemDetail>;
  supportingValue?: Maybe<PlayerProfileStatItemDetail>;
  title: Scalars["String"]["output"];
  value: Scalars["String"]["output"];
};

export type PlayerProfileStatItemDetail = {
  __typename?: "PlayerProfileStatItemDetail";
  description: Scalars["String"]["output"];
  value: Scalars["String"]["output"];
};

export type PlayerProfileStatYear = {
  __typename?: "PlayerProfileStatYear";
  season: Scalars["String"]["output"];
  tours: Array<TourCode>;
  year: Scalars["Int"]["output"];
};

export type PlayerProfileTable = {
  __typename?: "PlayerProfileTable";
  rows: Array<PlayerProfileRows>;
  tableDetail?: Maybe<Scalars["String"]["output"]>;
  tableName: Scalars["String"]["output"];
};

export type PlayerProfileTournamentResults = {
  __typename?: "PlayerProfileTournamentResults";
  playerId: Scalars["ID"]["output"];
  tourPills: Array<TourPills>;
  tournamentPills: Array<TournamentResultPill>;
  tournaments: Array<TournamentResults>;
};

export type PlayerProfileTournamentRow = {
  __typename?: "PlayerProfileTournamentRow";
  courseName: Scalars["String"]["output"];
  date: Scalars["String"]["output"];
  points: Scalars["String"]["output"];
  position: Scalars["String"]["output"];
  roundScores: Array<RoundScoreItem>;
  toPar: Scalars["String"]["output"];
  total: Scalars["String"]["output"];
  tourcastURL?: Maybe<Scalars["String"]["output"]>;
  tourcastURLWeb?: Maybe<Scalars["String"]["output"]>;
  tournamentId: Scalars["ID"]["output"];
  tournamentName: Scalars["String"]["output"];
  winnings: Scalars["String"]["output"];
  year: Scalars["Int"]["output"];
};

export type PlayerRecord = {
  __typename?: "PlayerRecord";
  losses: Scalars["String"]["output"];
  points: Scalars["String"]["output"];
  ties: Scalars["String"]["output"];
  wins: Scalars["String"]["output"];
};

export type PlayerResultTournament = {
  __typename?: "PlayerResultTournament";
  courseId: Scalars["String"]["output"];
  courseName: Scalars["String"]["output"];
  fedexFallPoints?: Maybe<Scalars["String"]["output"]>;
  fedexFallRank?: Maybe<Scalars["String"]["output"]>;
  finishPosition: Scalars["String"]["output"];
  linkable: Scalars["Boolean"]["output"];
  money: Scalars["String"]["output"];
  points?: Maybe<Scalars["String"]["output"]>;
  pointsRank?: Maybe<Scalars["String"]["output"]>;
  r1: Scalars["String"]["output"];
  r2: Scalars["String"]["output"];
  r3: Scalars["String"]["output"];
  r4: Scalars["String"]["output"];
  r5: Scalars["String"]["output"];
  toPar: Scalars["String"]["output"];
  total: Scalars["String"]["output"];
  tourcastURL?: Maybe<Scalars["String"]["output"]>;
  tourcastURLWeb?: Maybe<Scalars["String"]["output"]>;
  tournamentEndDate: Scalars["String"]["output"];
  tournamentId: Scalars["ID"]["output"];
  tournamentName: Scalars["String"]["output"];
};

export type PlayerResults = {
  __typename?: "PlayerResults";
  amateurHighlights?: Maybe<Array<Scalars["String"]["output"]>>;
  cupLogo?: Maybe<Scalars["String"]["output"]>;
  cupLogoAccessibilityText?: Maybe<Scalars["String"]["output"]>;
  cupLogoDark?: Maybe<Scalars["String"]["output"]>;
  cupName?: Maybe<Scalars["String"]["output"]>;
  cupPoints?: Maybe<Scalars["String"]["output"]>;
  cupRank?: Maybe<Scalars["String"]["output"]>;
  cutsMade?: Maybe<Scalars["String"]["output"]>;
  displayYear: Scalars["String"]["output"];
  events?: Maybe<Scalars["String"]["output"]>;
  missedCuts?: Maybe<Scalars["String"]["output"]>;
  officialMoney?: Maybe<Scalars["String"]["output"]>;
  playerId: Scalars["String"]["output"];
  rankLogo?: Maybe<Scalars["String"]["output"]>;
  rankLogoAccessibilityText?: Maybe<Scalars["String"]["output"]>;
  rankLogoDark?: Maybe<Scalars["String"]["output"]>;
  runnerUp?: Maybe<Scalars["String"]["output"]>;
  seasonPills: Array<PlayerResultsSeasonPills>;
  seasonRecap?: Maybe<SeasonRecap>;
  secondaryCup?: Maybe<SecondaryCupDetails>;
  top10?: Maybe<Scalars["String"]["output"]>;
  top25?: Maybe<Scalars["String"]["output"]>;
  tour: TourCode;
  tourcastEligible: Scalars["Boolean"]["output"];
  tournaments: Array<PlayerResultTournament>;
  wins?: Maybe<Scalars["String"]["output"]>;
  withdrew?: Maybe<Scalars["String"]["output"]>;
  year: Scalars["Int"]["output"];
};

export type PlayerResultsSeasonPills = {
  __typename?: "PlayerResultsSeasonPills";
  tourCode: TourCode;
  years: Array<StatYearPills>;
};

export type PlayerRow = {
  __typename?: "PlayerRow";
  backNine: Scalars["Boolean"]["output"];
  courseId: Scalars["String"]["output"];
  currentRound: Scalars["Int"]["output"];
  groupNumber: Scalars["Int"]["output"];
  hasStoryContent: Scalars["Boolean"]["output"];
  id: Scalars["ID"]["output"];
  leaderboardSortOrder: Scalars["Int"]["output"];
  movementAmount: Scalars["String"]["output"];
  movementDirection: LeaderboardMovement;
  oddsOptionId?: Maybe<Scalars["String"]["output"]>;
  oddsSort?: Maybe<Scalars["Float"]["output"]>;
  oddsSwing?: Maybe<OddsSwing>;
  oddsToWin?: Maybe<Scalars["String"]["output"]>;
  oddsUrl?: Maybe<Scalars["String"]["output"]>;
  official: Scalars["String"]["output"];
  player: Player;
  position: Scalars["String"]["output"];
  projected: Scalars["String"]["output"];
  rankingMovement: CupRankMovementDirection;
  rankingMovementAmount: Scalars["String"]["output"];
  rounds: Array<Scalars["String"]["output"]>;
  score: Scalars["String"]["output"];
  scoreSort: Scalars["Int"]["output"];
  teeTime: Scalars["AWSTimestamp"]["output"];
  thru: Scalars["String"]["output"];
  thruSort: Scalars["Int"]["output"];
  total: Scalars["String"]["output"];
  totalSort: Scalars["Int"]["output"];
  totalStrokes: Scalars["String"]["output"];
};

export type PlayerRowHoleByHole = {
  __typename?: "PlayerRowHoleByHole";
  courseCode: Scalars["String"]["output"];
  courseId: Scalars["String"]["output"];
  in?: Maybe<Scalars["String"]["output"]>;
  out?: Maybe<Scalars["String"]["output"]>;
  playerId: Scalars["String"]["output"];
  scores: Array<HoleScore>;
  total?: Maybe<Scalars["String"]["output"]>;
  totalToPar: Scalars["String"]["output"];
};

export type PlayerRowV2 = {
  __typename?: "PlayerRowV2";
  backNine: Scalars["Boolean"]["output"];
  courseId: Scalars["String"]["output"];
  currentRound: Scalars["Int"]["output"];
  groupNumber: Scalars["Int"]["output"];
  hasStoryContent: Scalars["Boolean"]["output"];
  id: Scalars["ID"]["output"];
  leaderboardSortOrder: Scalars["Int"]["output"];
  movementAmount: Scalars["String"]["output"];
  movementDirection: LeaderboardMovement;
  oddsOptionId?: Maybe<Scalars["String"]["output"]>;
  oddsSort?: Maybe<Scalars["Float"]["output"]>;
  oddsSwing?: Maybe<OddsSwing>;
  oddsToWin?: Maybe<Scalars["String"]["output"]>;
  oddsUrl?: Maybe<Scalars["String"]["output"]>;
  official: Scalars["String"]["output"];
  officialSort: Scalars["Int"]["output"];
  player: Player;
  playerState: PlayerState;
  position: Scalars["String"]["output"];
  projected: Scalars["String"]["output"];
  projectedSort: Scalars["Int"]["output"];
  rankLogoDark?: Maybe<Scalars["String"]["output"]>;
  rankLogoLight?: Maybe<Scalars["String"]["output"]>;
  rankingMovement: CupRankMovementDirection;
  rankingMovementAmount: Scalars["String"]["output"];
  rankingMovementAmountSort: Scalars["Int"]["output"];
  roundHeader: Scalars["String"]["output"];
  roundStatus: Scalars["String"]["output"];
  rounds: Array<Scalars["String"]["output"]>;
  score: Scalars["String"]["output"];
  scoreSort: Scalars["Int"]["output"];
  storyContentRound?: Maybe<Scalars["Int"]["output"]>;
  teeTime: Scalars["AWSTimestamp"]["output"];
  thru: Scalars["String"]["output"];
  thruSort: Scalars["Int"]["output"];
  total: Scalars["String"]["output"];
  totalSort: Scalars["Int"]["output"];
  totalStrokes: Scalars["String"]["output"];
};

export type PlayerScorecardRoundStats = {
  __typename?: "PlayerScorecardRoundStats";
  displayName: Scalars["String"]["output"];
  performance: Array<ScorecardStatsItem>;
  round: Scalars["String"]["output"];
  roundStatus: RoundStatus;
  scoring: Array<ScorecardStatsItem>;
  strokesGained: Array<StrokesGainedStats>;
};

export type PlayerScorecardStats = {
  __typename?: "PlayerScorecardStats";
  id: Scalars["ID"]["output"];
  rounds: Array<PlayerScorecardRoundStats>;
};

export enum PlayerSponsorBrand {
  Ace = "ACE",
  AdamScott = "ADAM_SCOTT",
  Adidas = "ADIDAS",
  Adp = "ADP",
  Amazon = "AMAZON",
  Aon = "AON",
  Bonobos = "BONOBOS",
  BrandtSnedeker = "BRANDT_SNEDEKER",
  BridgestoneGolf = "BRIDGESTONE_GOLF",
  Callaway = "CALLAWAY",
  CallawayFeed = "CALLAWAY_FEED",
  CameronPercy = "CAMERON_PERCY",
  Clevelandgolf = "CLEVELANDGOLF",
  ClevelandgolfFeed = "CLEVELANDGOLF_FEED",
  Cobra = "COBRA",
  Cobrapuma = "COBRAPUMA",
  Concur = "CONCUR",
  Countryinns = "COUNTRYINNS",
  EmpowerRetirement = "EMPOWER_RETIREMENT",
  Fedex = "FEDEX",
  GoldmanSachs = "GOLDMAN_SACHS",
  Greygoose = "GREYGOOSE",
  Honma = "HONMA",
  IanPoulter = "IAN_POULTER",
  JordanSpieth = "JORDAN_SPIETH",
  Levelwear = "LEVELWEAR",
  MassageEnvy = "MASSAGE_ENVY",
  Mastercard = "MASTERCARD",
  MattKuchar = "MATT_KUCHAR",
  Mercedes = "MERCEDES",
  Metlife = "METLIFE",
  Mizuno = "MIZUNO",
  Nike = "NIKE",
  NikeFeed = "NIKE_FEED",
  Oakley = "OAKLEY",
  OsteoBiflex = "OSTEO_BIFLEX",
  Pacificlife = "PACIFICLIFE",
  PerryEllis = "PERRY_ELLIS",
  Pgatourlivefri = "PGATOURLIVEFRI",
  Pgatourlivethurs = "PGATOURLIVETHURS",
  PhilMickelson = "PHIL_MICKELSON",
  Ping = "PING",
  Puma = "PUMA",
  Putnam = "PUTNAM",
  PutnamBradley = "PUTNAM_BRADLEY",
  PutnamCurran = "PUTNAM_CURRAN",
  PutnamSteele = "PUTNAM_STEELE",
  Quickenloans = "QUICKENLOANS",
  RickieFowler = "RICKIE_FOWLER",
  RoryMcilroy = "RORY_MCILROY",
  SergioGarcia = "SERGIO_GARCIA",
  Sikgolf = "SIKGOLF",
  Skechers = "SKECHERS",
  StrykerFred = "STRYKER_FRED",
  StrykerHal = "STRYKER_HAL",
  Superstroke = "SUPERSTROKE",
  Taylormade = "TAYLORMADE",
  TigerWoods = "TIGER_WOODS",
  Titleist = "TITLEIST",
  TitleistBall = "TITLEIST_BALL",
  TitleistFull = "TITLEIST_FULL",
  Tmag = "TMAG",
  Tp5 = "TP5",
  UnitedRentals = "UNITED_RENTALS",
  ZachJohnson = "ZACH_JOHNSON",
  Zurich = "ZURICH",
}

export type PlayerSponsors = {
  __typename?: "PlayerSponsors";
  defaultSponsor?: Maybe<Sponsor>;
  playerId: Scalars["String"]["output"];
  sponsors: Array<Sponsor>;
};

export type PlayerSponsorship = {
  __typename?: "PlayerSponsorship";
  playerId: Scalars["String"]["output"];
  sponsor?: Maybe<PlayerSponsorBrand>;
};

export enum PlayerState {
  Active = "ACTIVE",
  BetweenRounds = "BETWEEN_ROUNDS",
  Complete = "COMPLETE",
  Cut = "CUT",
  Disqualified = "DISQUALIFIED",
  NotStarted = "NOT_STARTED",
  Withdrawn = "WITHDRAWN",
}

export type PlayerVideo = {
  __typename?: "PlayerVideo";
  firstName?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  lastName?: Maybe<Scalars["String"]["output"]>;
  shortName?: Maybe<Scalars["String"]["output"]>;
};

export type Playoff = {
  __typename?: "Playoff";
  currentHole: Scalars["Int"]["output"];
  holes: Array<PlayoffHole>;
  players: Array<PlayoffPlayer>;
  thru?: Maybe<Scalars["String"]["output"]>;
};

export type PlayoffHole = {
  __typename?: "PlayoffHole";
  courseHole: Scalars["String"]["output"];
  format?: Maybe<Scalars["String"]["output"]>;
  par: Scalars["String"]["output"];
  playoffHole: Scalars["String"]["output"];
};

export type PlayoffPlayer = {
  __typename?: "PlayoffPlayer";
  active: Scalars["Boolean"]["output"];
  player: Player;
  position: Scalars["String"]["output"];
  scores: Array<SimpleScore>;
};

export type PlayoffScorecard = {
  __typename?: "PlayoffScorecard";
  courseId: Scalars["String"]["output"];
  courseName: Scalars["String"]["output"];
  holeDetail: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  locationDetail: Scalars["String"]["output"];
  players: Array<ScorecardHeaderPlayer>;
  playoff: Playoff;
  tourcastURL?: Maybe<Scalars["String"]["output"]>;
  tourcastURLWeb?: Maybe<Scalars["String"]["output"]>;
};

export type PlayoffTeams = {
  __typename?: "PlayoffTeams";
  active: Scalars["Boolean"]["output"];
  players: Array<TspScPlayer>;
  position: Scalars["String"]["output"];
  scores: Array<SimpleScore>;
  teamId: Scalars["String"]["output"];
};

export type PointOfInterestCoords = {
  __typename?: "PointOfInterestCoords";
  bottomToTopCoords: StrokeCoordinates;
  leftToRightCoords: StrokeCoordinates;
};

export type PowerRankings = {
  __typename?: "PowerRankings";
  powerRankingsTableRow: Array<PowerRankingsTableRow>;
  tournamentName: Scalars["String"]["output"];
};

export type PowerRankingsTableRow = {
  __typename?: "PowerRankingsTableRow";
  comment: Scalars["String"]["output"];
  commentNodes?: Maybe<Array<TourSponsorDescription>>;
  player?: Maybe<PlayerInfo>;
};

export type PpPlayerPicks = {
  __typename?: "PpPlayerPicks";
  displayName: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  picks: Array<Scalars["String"]["output"]>;
  shortName: Scalars["String"]["output"];
};

export type PpTournament = {
  __typename?: "PpTournament";
  endDate: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
  startDate: Scalars["String"]["output"];
};

export type PpTournamentPicks = {
  __typename?: "PpTournamentPicks";
  id: Scalars["ID"]["output"];
  players: Array<PpPlayerPicks>;
};

export type PresentedByConfig = {
  __typename?: "PresentedByConfig";
  presentedBy: Sponsor;
  splashScreen: Sponsor;
};

export type PreviousMatch = {
  __typename?: "PreviousMatch";
  matchId: Scalars["ID"]["output"];
  matchResult: Scalars["String"]["output"];
  matchScore: Scalars["String"]["output"];
  matchStatus: Scalars["String"]["output"];
  opponent: PreviousMatchOpponent;
  roundDisplayText: Scalars["String"]["output"];
  roundNumber: Scalars["Int"]["output"];
};

export type PreviousMatchOpponent = {
  __typename?: "PreviousMatchOpponent";
  bracketSeed: Scalars["String"]["output"];
  countryFlag: Scalars["String"]["output"];
  displayName: Scalars["String"]["output"];
  firstName: Scalars["String"]["output"];
  headshot: Scalars["String"]["output"];
  lastName: Scalars["String"]["output"];
  playerId: Scalars["ID"]["output"];
  shortName: Scalars["String"]["output"];
  tournamentSeed: Scalars["String"]["output"];
};

export type PreviousMatches = {
  __typename?: "PreviousMatches";
  header: Scalars["String"]["output"];
  matches?: Maybe<Array<PreviousMatch>>;
  messages?: Maybe<Array<Message>>;
};

export type PreviousRounds = {
  __typename?: "PreviousRounds";
  matches?: Maybe<Array<PreviousMatch>>;
  roundHeader: Scalars["String"]["output"];
  roundNumber: Scalars["Int"]["output"];
};

export type PriorityCategory = {
  __typename?: "PriorityCategory";
  detail?: Maybe<Scalars["String"]["output"]>;
  displayName: Scalars["String"]["output"];
  players: Array<PriorityPlayer>;
};

export type PriorityPlayer = {
  __typename?: "PriorityPlayer";
  displayName: Scalars["String"]["output"];
  playerId: Scalars["String"]["output"];
};

export type PriorityRankings = {
  __typename?: "PriorityRankings";
  categories: Array<PriorityCategory>;
  displayYear: Scalars["String"]["output"];
  throughText: Scalars["String"]["output"];
  tourCode: TourCode;
  year: Scalars["Int"]["output"];
  yearPills: Array<StatYearPills>;
};

export type ProfileFedExFallStandings = {
  __typename?: "ProfileFedExFallStandings";
  description: Scalars["String"]["output"];
  detailCopy?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  logo: Scalars["String"]["output"];
  logoDark: Scalars["String"]["output"];
  rank: Scalars["String"]["output"];
  rankLogo?: Maybe<Scalars["String"]["output"]>;
  rankLogoDark?: Maybe<Scalars["String"]["output"]>;
  title: Scalars["String"]["output"];
  total: Scalars["String"]["output"];
  totalLabel: Scalars["String"]["output"];
  totals?: Maybe<Array<ProfileStandingsTotal>>;
  webview?: Maybe<Scalars["String"]["output"]>;
  webviewBrowserControls?: Maybe<Scalars["Boolean"]["output"]>;
};

export type ProfileHeadshot = {
  __typename?: "ProfileHeadshot";
  country: Scalars["String"]["output"];
  countryFlag: Scalars["String"]["output"];
  firstName: Scalars["String"]["output"];
  image: Scalars["String"]["output"];
  lastName: Scalars["String"]["output"];
};

export type ProfileOverview = {
  __typename?: "ProfileOverview";
  fedexFallStandings?: Maybe<ProfileFedExFallStandings>;
  headshot: ProfileHeadshot;
  id: Scalars["ID"]["output"];
  performance: Array<ProfilePerformance>;
  snapshot: Array<ProfileSnapshotItem>;
  standings: ProfileStandings;
};

export type ProfilePerformance = {
  __typename?: "ProfilePerformance";
  displaySeason: Scalars["String"]["output"];
  season: Scalars["String"]["output"];
  stats: Array<ProfilePerformanceStat>;
  tour: TourCode;
};

export type ProfilePerformanceStat = {
  __typename?: "ProfilePerformanceStat";
  career?: Maybe<Scalars["String"]["output"]>;
  title: Scalars["String"]["output"];
  value: Scalars["String"]["output"];
  wide?: Maybe<Scalars["Boolean"]["output"]>;
};

export type ProfileSnapshotItem = {
  __typename?: "ProfileSnapshotItem";
  description?: Maybe<Scalars["String"]["output"]>;
  title: Scalars["String"]["output"];
  value: Scalars["String"]["output"];
};

export type ProfileStandings = {
  __typename?: "ProfileStandings";
  description: Scalars["String"]["output"];
  detailCopy?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  logo: Scalars["String"]["output"];
  logoDark: Scalars["String"]["output"];
  owgr?: Maybe<Scalars["String"]["output"]>;
  rank: Scalars["String"]["output"];
  rankLogo?: Maybe<Scalars["String"]["output"]>;
  rankLogoDark?: Maybe<Scalars["String"]["output"]>;
  title: Scalars["String"]["output"];
  total: Scalars["String"]["output"];
  totalLabel: Scalars["String"]["output"];
  totals?: Maybe<Array<ProfileStandingsTotal>>;
  webview?: Maybe<Scalars["String"]["output"]>;
  webviewBrowserControls?: Maybe<Scalars["Boolean"]["output"]>;
};

export type ProfileStandingsTotal = {
  __typename?: "ProfileStandingsTotal";
  total: Scalars["String"]["output"];
  totalLabel: Scalars["String"]["output"];
};

export type ProgramStat = {
  __typename?: "ProgramStat";
  statName?: Maybe<Scalars["String"]["output"]>;
  value?: Maybe<Scalars["String"]["output"]>;
};

export type PromoItem =
  | FieldPromoSection
  | PromoSection
  | PromoSectionNewsSection;

export type PromoSection = {
  __typename?: "PromoSection";
  items: Array<PromoSectionItem>;
  title: Scalars["String"]["output"];
};

export type PromoSectionContainer = {
  __typename?: "PromoSectionContainer";
  sections: Array<PromoItem>;
};

export type PromoSectionItem = {
  __typename?: "PromoSectionItem";
  accessibilityText: Scalars["String"]["output"];
  backgroundColor: Scalars["String"]["output"];
  externalLaunch: Scalars["Boolean"]["output"];
  label?: Maybe<Scalars["String"]["output"]>;
  labelColor: Scalars["String"]["output"];
  logo: Scalars["String"]["output"];
  webview: Scalars["String"]["output"];
  webviewBrowserControls: Scalars["Boolean"]["output"];
  webviewTitle: Scalars["String"]["output"];
};

export type PromoSectionNewsSection = {
  __typename?: "PromoSectionNewsSection";
  franchises: Array<Scalars["String"]["output"]>;
  title: Scalars["String"]["output"];
};

export enum PromoSectionType {
  Gaming = "GAMING",
  More = "MORE",
  Webgolfbet = "WEBGOLFBET",
}

export type Query = {
  __typename?: "Query";
  adTagConfig: AdConfig;
  alltoursponsors: Array<Maybe<TourSponsor>>;
  aon: Aon;
  articleAdConfig: AdTagConfig;
  /** @deprecated Use articleDetailsCompressed */
  articleDetails: NewsArticleDetails;
  articleDetailsCompressed: NewsArticleDetailsCompressed;
  broadcastTimes: BroadcastCoverage;
  completeSchedule: Array<Schedule>;
  contentFragmentType?: Maybe<ContentFragmentType>;
  /** @deprecated use contentFragmentsCompressed */
  contentFragments: ContentFragment;
  contentFragmentsCompressed: ContentFragmentsCompressed;
  courseStats: TournamentHoleStats;
  courseStatsDetails: CourseStatsDetails;
  courseStatsOverview: CourseStatsOverview;
  coverage: BroadcastCoverage;
  cupPastResults: CupPastResults;
  cupPlayOverviewLeaderboard: CupTournamentStatus;
  cupRoundLeaderboard: CupTournamentLeaderboard;
  cupRoundLeaderboardCompressed: CupTournamentLeaderboardCompressed;
  cupScorecard: CupScorecard;
  cupTeamRoster: CupTeamRosters;
  cupTeeTimes: CupTeeTimes;
  defaultTourCup: TourCupRankingEvent;
  /** @deprecated One time use for players will be removed */
  eaglesForImpact: EaglesForImpact;
  entityOdds: EntityOdds;
  eventGuideConfig: EventGuideConfig;
  field: Field;
  fieldStats: FieldStats;
  franchises: Array<Scalars["String"]["output"]>;
  genericContent: GenericContent;
  getExpertPicksTable: ExpertPicks;
  getPowerRankingsTable: PowerRankings;
  getRelatedFact: RelatedFact;
  /** @deprecated Use scorecardV2 */
  groupScorecard: GroupScorecard;
  /** @deprecated Use single player shot details */
  groupShotDetails: GroupShotDetails;
  /** @deprecated Use single player shot details */
  groupShotDetailsCompressed: GroupShotDetailsCompressed;
  groupStageRankings: GroupStageRankings;
  groupedField: GroupedField;
  historicalOdds?: Maybe<HistoricalPlayerOdds>;
  historicalScorecardStats: HistoricalPlayerScorecards;
  holeDetails: HoleDetail;
  /** @deprecated use contentFragmentsCompressed */
  homepage: Homepage;
  /** @deprecated use contentFragmentsCompressed */
  kitOfParts: KitOfParts;
  /** @deprecated Use newsArticles */
  latestArticles: Array<NewsArticle>;
  /** @deprecated Use leaderboardV2 */
  leaderboard: Leaderboard;
  /** @deprecated Use leaderboardV2 */
  leaderboardCompressed: LeaderboardCompressed;
  leaderboardCompressedV2: LeaderboardCompressedV2;
  leaderboardHoleByHole: LeaderboardHoleByHole;
  leaderboardLegend: LeaderboardInfo;
  leaderboardOddsToWin: Leaderboard;
  leaderboardOddsToWinCompressed: LeaderboardCompressed;
  leaderboardOddsToWinCompressedV2: LeaderboardCompressedV2;
  leaderboardOddsToWinV2: LeaderboardV2;
  leaderboardStats: LeaderboardStats;
  leaderboardStrokes: LeaderboardStrokes;
  leaderboardStrokesCompressed: LeaderboardStrokesCompressed;
  leaderboardV2: LeaderboardV2;
  liveAudioStream: AudioStream;
  matchPlayLeaderboard: MpLeaderboard;
  matchPlayLeaderboardCompressed: LeaderboardCompressed;
  matchPlayPlayoffScorecard: MpPlayoffScorecard;
  matchPlayScorecard: MpScorecard;
  matchPlayScorecardResults: MpScorecardResults;
  matchPlayTeeTimes: MpTeeTimes;
  matchPlayTeeTimesCompressed: TeeTimesCompressed;
  networks: BroadcastNetworks;
  newletterSubscriptions: Array<Newsletter>;
  newsArticles: NewsArticles;
  newsFranchises: Array<NewsFranchise>;
  oddsTable: OddsTable;
  pgaCurrentActiveTournamentId: Scalars["ID"]["output"];
  pgaCurrentTournamentId: Scalars["ID"]["output"];
  player: PlayerBioWrapper;
  playerComparison: PlayerComparison;
  playerDirectory: PlayerDirectory;
  playerFinishStats?: Maybe<PlayerFinishStats>;
  playerOdds?: Maybe<PlayerOdds>;
  playerProfileCareer: PlayerProfileCareer;
  playerProfileCareerResults: PlayerProfileCareerResults;
  playerProfileCourseResults?: Maybe<PlayerProfileCourseResults>;
  playerProfileMajorResults?: Maybe<PlayerProfileMajors>;
  playerProfileOverview: ProfileOverview;
  playerProfileScorecards: HistoricalPlayerScorecards;
  playerProfileSeasonResults: PlayerResults;
  playerProfileStandings: Array<PlayerOverviewStandings>;
  playerProfileStats: Array<PlayerProfileStat>;
  playerProfileStatsFull: Array<PlayerProfileStatFull>;
  playerProfileStatsYears: Array<PlayerProfileStatYear>;
  playerProfileTournamentResults: PlayerProfileTournamentResults;
  playerSponsorships: Array<PlayerSponsorship>;
  players: Array<PlayerBioWrapper>;
  playersOddsComparison: Array<PlayerComparisonOdds>;
  playoffScorecard: PlayoffScorecard;
  playoffShotDetails: GroupShotDetails;
  playoffShotDetailsCompressed: GroupShotDetailsCompressed;
  podcastEpisodes: Array<Episode>;
  podcasts: Array<Audio>;
  ppCurrentTournamentId: Scalars["ID"]["output"];
  ppSchedule: Array<PpTournament>;
  ppTournamentPicks: PpTournamentPicks;
  presentedBy: PresentedByConfig;
  priorityRankings: PriorityRankings;
  promoSection: PromoSectionContainer;
  rankingsWinners: Array<RankingsPastWinner>;
  rsm: RsmStandings;
  rsmLeaderboard: RsmLeaderboard;
  schedule: Schedule;
  scheduleYears: ScheduleYears;
  /** @deprecated Use scorecardV2 */
  scorecard: LeaderboardDrawer;
  scorecardStats: PlayerScorecardStats;
  scorecardV2: LeaderboardDrawerV2;
  searchBarFeatures: SearchBarFeatures;
  /** @deprecated Field no longer supported */
  searchPlayers: Array<Player>;
  shotDetails: ShotDetails;
  shotDetailsCompressed: ShotDetailsCompressed;
  sponsoredArticles: Array<NewsArticle>;
  sponsorships: PlayerSponsors;
  statDetails: StatDetails;
  statLeaders: StatLeaderCategory;
  statOverview: OverviewStats;
  statsLeadersMobile: MobileStatLeaders;
  teamStrokePlayLeaderboard: TspLeaderboard;
  teamStrokePlayLeaderboardCompressed: LeaderboardCompressed;
  teamStrokePlayScorecard: TspScorecard;
  teamStrokePlayScorecardRounds: TspScorecardRounds;
  teamStrokePlayTeeTimes: TspTeeTimes;
  teamStrokePlayTeeTimesCompressed: TeeTimesCompressed;
  teeTimes: TeeTimes;
  teeTimesCompressed: TeeTimesCompressed;
  tourCup: TourCupRankingEvent;
  tourCupCombined: TourCupCombined;
  tourCupSplit?: Maybe<TourCupSplit>;
  tourCups: Array<TourCupRankingEvent>;
  tourcastShotDetails: ShotDetails;
  tourcastTable: TourcastTable;
  tourcastVideos: Array<Video>;
  tournamentHistory?: Maybe<TournamentHistory>;
  tournamentOdds?: Maybe<TournamentOdds>;
  tournamentOddsCompressed?: Maybe<TournamentOddsCompressed>;
  tournamentOddsCompressedV2: TournamentOddsCompressedV2;
  tournamentOddsV2: TournamentOddsV2;
  tournamentOverview: TournamentOverview;
  tournamentPastResults: HistoricalLeaderboard;
  tournamentRecap: TournamentRecap;
  tournaments: Array<Tournament>;
  tspPlayoffShotDetails: TeamShotDetails;
  tspPlayoffShotDetailsCompressed: TeamShotDetailsCompressed;
  universityRankings: UniversityRankings;
  upcomingNetworks: UpcomingBroadcastNetworks;
  upcomingSchedule: ScheduleUpcoming;
  videoById?: Maybe<Video>;
  videoFranchises?: Maybe<TourCategories>;
  videoHero: VideoHero;
  videoRecommendations: Array<Video>;
  videos: Array<Video>;
  weather: WeatherSummary;
  yourTour: YourTourStory;
  yourTourNews: Array<YourTourNews>;
};

export type QueryAdTagConfigArgs = {
  tour?: InputMaybe<TourCode>;
  tournamentId?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryAlltoursponsorsArgs = {
  tourCode: TourCode;
};

export type QueryAonArgs = {
  year?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryArticleAdConfigArgs = {
  franchise?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryArticleDetailsArgs = {
  path: Scalars["String"]["input"];
};

export type QueryArticleDetailsCompressedArgs = {
  path: Scalars["String"]["input"];
};

export type QueryBroadcastTimesArgs = {
  pastResults?: InputMaybe<Scalars["Boolean"]["input"]>;
  tournamentId: Scalars["ID"]["input"];
};

export type QueryCompleteScheduleArgs = {
  filter?: InputMaybe<TournamentCategory>;
  tourCode: TourCode;
};

export type QueryContentFragmentTypeArgs = {
  path: Scalars["String"]["input"];
};

export type QueryContentFragmentsArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  path?: InputMaybe<Scalars["String"]["input"]>;
  tourCode: TourCode;
};

export type QueryContentFragmentsCompressedArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  path?: InputMaybe<Scalars["String"]["input"]>;
  tourCode: TourCode;
};

export type QueryCourseStatsArgs = {
  tournamentId: Scalars["ID"]["input"];
};

export type QueryCourseStatsDetailsArgs = {
  queryType: CourseStatsId;
  round?: InputMaybe<ToughestRound>;
  tourCode: TourCode;
  year?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryCourseStatsOverviewArgs = {
  tourCode: TourCode;
  year?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryCoverageArgs = {
  pastResults?: InputMaybe<Scalars["Boolean"]["input"]>;
  tournamentId: Scalars["ID"]["input"];
};

export type QueryCupPastResultsArgs = {
  tournamentId: Scalars["ID"]["input"];
};

export type QueryCupPlayOverviewLeaderboardArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryCupRoundLeaderboardArgs = {
  round?: InputMaybe<Scalars["Int"]["input"]>;
  tournamentId: Scalars["String"]["input"];
};

export type QueryCupRoundLeaderboardCompressedArgs = {
  round?: InputMaybe<Scalars["Int"]["input"]>;
  tournamentId: Scalars["String"]["input"];
};

export type QueryCupScorecardArgs = {
  matchId: Scalars["Int"]["input"];
  round: Scalars["Int"]["input"];
  tournamentId: Scalars["ID"]["input"];
};

export type QueryCupTeamRosterArgs = {
  tournamentId: Scalars["ID"]["input"];
};

export type QueryCupTeeTimesArgs = {
  tournamentId: Scalars["ID"]["input"];
};

export type QueryDefaultTourCupArgs = {
  tour: TourCode;
  year?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryEaglesForImpactArgs = {
  tournamentId: Scalars["ID"]["input"];
};

export type QueryEntityOddsArgs = {
  entityId: Scalars["String"]["input"];
  tournamentId: Scalars["String"]["input"];
};

export type QueryEventGuideConfigArgs = {
  tournamentId: Scalars["String"]["input"];
};

export type QueryFieldArgs = {
  changesOnly?: InputMaybe<Scalars["Boolean"]["input"]>;
  id: Scalars["ID"]["input"];
  includeWithdrawn?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type QueryFieldStatsArgs = {
  fieldStatType?: InputMaybe<FieldStatType>;
  tournamentId: Scalars["ID"]["input"];
};

export type QueryFranchisesArgs = {
  tourCode?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryGenericContentArgs = {
  path: Scalars["String"]["input"];
};

export type QueryGetExpertPicksTableArgs = {
  path: Scalars["String"]["input"];
  year?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryGetPowerRankingsTableArgs = {
  path: Scalars["String"]["input"];
};

export type QueryGetRelatedFactArgs = {
  path: Scalars["String"]["input"];
};

export type QueryGroupScorecardArgs = {
  groupNumber: Scalars["Int"]["input"];
  id: Scalars["ID"]["input"];
  round: Scalars["Int"]["input"];
};

export type QueryGroupShotDetailsArgs = {
  groupNumber: Scalars["Int"]["input"];
  round: Scalars["Int"]["input"];
  tournamentId: Scalars["ID"]["input"];
};

export type QueryGroupShotDetailsCompressedArgs = {
  groupNumber: Scalars["Int"]["input"];
  round: Scalars["Int"]["input"];
  tournamentId: Scalars["ID"]["input"];
};

export type QueryGroupStageRankingsArgs = {
  tournamentId: Scalars["ID"]["input"];
};

export type QueryGroupedFieldArgs = {
  changesOnly?: InputMaybe<Scalars["Boolean"]["input"]>;
  id: Scalars["ID"]["input"];
  includeWithdrawn?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type QueryHistoricalOddsArgs = {
  marketId: HistoricalOddsId;
  playerId: Scalars["String"]["input"];
  timeStamp?: InputMaybe<Scalars["AWSDateTime"]["input"]>;
  tournamentId: Scalars["String"]["input"];
};

export type QueryHistoricalScorecardStatsArgs = {
  playerId: Scalars["ID"]["input"];
};

export type QueryHoleDetailsArgs = {
  courseId: Scalars["ID"]["input"];
  hole: Scalars["Int"]["input"];
  tournamentId: Scalars["ID"]["input"];
};

export type QueryHomepageArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  path?: InputMaybe<Scalars["String"]["input"]>;
  tourCode: TourCode;
};

export type QueryKitOfPartsArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  path: Scalars["String"]["input"];
  tourCode: TourCode;
};

export type QueryLatestArticlesArgs = {
  franchise?: InputMaybe<Scalars["String"]["input"]>;
  franchises?: InputMaybe<Array<Scalars["String"]["input"]>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  tour?: InputMaybe<TourCode>;
};

export type QueryLeaderboardArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryLeaderboardCompressedArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryLeaderboardCompressedV2Args = {
  id: Scalars["ID"]["input"];
};

export type QueryLeaderboardHoleByHoleArgs = {
  round?: InputMaybe<Scalars["Int"]["input"]>;
  tournamentId: Scalars["ID"]["input"];
};

export type QueryLeaderboardLegendArgs = {
  odds: Scalars["Boolean"]["input"];
  tournamentId: Scalars["ID"]["input"];
};

export type QueryLeaderboardOddsToWinArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryLeaderboardOddsToWinCompressedArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryLeaderboardOddsToWinCompressedV2Args = {
  id: Scalars["ID"]["input"];
};

export type QueryLeaderboardOddsToWinV2Args = {
  id: Scalars["ID"]["input"];
};

export type QueryLeaderboardStatsArgs = {
  id: Scalars["ID"]["input"];
  statsType?: InputMaybe<LeaderboardStatsType>;
};

export type QueryLeaderboardStrokesArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryLeaderboardStrokesCompressedArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryLeaderboardV2Args = {
  id: Scalars["ID"]["input"];
};

export type QueryLiveAudioStreamArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryMatchPlayLeaderboardArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryMatchPlayLeaderboardCompressedArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryMatchPlayPlayoffScorecardArgs = {
  matchId: Scalars["ID"]["input"];
  roundNum: Scalars["Int"]["input"];
  tournamentId: Scalars["ID"]["input"];
};

export type QueryMatchPlayScorecardArgs = {
  matchId: Scalars["ID"]["input"];
  roundNum: Scalars["Int"]["input"];
  tournamentId: Scalars["ID"]["input"];
};

export type QueryMatchPlayScorecardResultsArgs = {
  matchId: Scalars["ID"]["input"];
  roundNum: Scalars["Int"]["input"];
  tournamentId: Scalars["ID"]["input"];
};

export type QueryMatchPlayTeeTimesArgs = {
  tournamentId: Scalars["ID"]["input"];
};

export type QueryMatchPlayTeeTimesCompressedArgs = {
  tournamentId: Scalars["ID"]["input"];
};

export type QueryNetworksArgs = {
  tournamentId: Scalars["ID"]["input"];
};

export type QueryNewsArticlesArgs = {
  franchise?: InputMaybe<Scalars["String"]["input"]>;
  franchises?: InputMaybe<Array<Scalars["String"]["input"]>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  playerId?: InputMaybe<Scalars["ID"]["input"]>;
  playerIds?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  tags?: InputMaybe<Array<Scalars["String"]["input"]>>;
  tour?: InputMaybe<TourCode>;
  tournamentNum?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryNewsFranchisesArgs = {
  allFranchises?: InputMaybe<Scalars["Boolean"]["input"]>;
  tourCode?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryOddsTableArgs = {
  markets?: InputMaybe<Array<ArticleOddsMarketsInput>>;
  players?: InputMaybe<Array<ArticleOddsPlayerInput>>;
  timeStamp?: InputMaybe<Scalars["String"]["input"]>;
  tournamentId: Scalars["String"]["input"];
  tournamentName: Scalars["String"]["input"];
};

export type QueryPlayerArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryPlayerComparisonArgs = {
  category?: InputMaybe<PlayerComparisonCategory>;
  playerIds: Array<Scalars["String"]["input"]>;
  tourCode: TourCode;
  year?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryPlayerDirectoryArgs = {
  active?: InputMaybe<Scalars["Boolean"]["input"]>;
  tourCode: TourCode;
};

export type QueryPlayerFinishStatsArgs = {
  playerId: Scalars["ID"]["input"];
  statId: Scalars["String"]["input"];
  tourCode: TourCode;
};

export type QueryPlayerOddsArgs = {
  playerId: Scalars["ID"]["input"];
  tournamentId: Scalars["ID"]["input"];
};

export type QueryPlayerProfileCareerArgs = {
  playerId: Scalars["String"]["input"];
  tourCode?: InputMaybe<TourCode>;
};

export type QueryPlayerProfileCareerResultsArgs = {
  playerId: Scalars["ID"]["input"];
};

export type QueryPlayerProfileCourseResultsArgs = {
  playerId: Scalars["String"]["input"];
  tourCode?: InputMaybe<TourCode>;
};

export type QueryPlayerProfileMajorResultsArgs = {
  playerId: Scalars["String"]["input"];
};

export type QueryPlayerProfileOverviewArgs = {
  currentTour?: InputMaybe<TourCode>;
  playerId: Scalars["ID"]["input"];
};

export type QueryPlayerProfileScorecardsArgs = {
  playerId: Scalars["ID"]["input"];
};

export type QueryPlayerProfileSeasonResultsArgs = {
  playerId: Scalars["ID"]["input"];
  tourCode?: InputMaybe<TourCode>;
  year?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryPlayerProfileStandingsArgs = {
  playerId: Scalars["ID"]["input"];
};

export type QueryPlayerProfileStatsArgs = {
  playerId: Scalars["ID"]["input"];
};

export type QueryPlayerProfileStatsFullArgs = {
  playerId: Scalars["ID"]["input"];
  year?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryPlayerProfileStatsYearsArgs = {
  playerId: Scalars["ID"]["input"];
};

export type QueryPlayerProfileTournamentResultsArgs = {
  playerId: Scalars["ID"]["input"];
  tourCode?: InputMaybe<TourCode>;
};

export type QueryPlayerSponsorshipsArgs = {
  sponsors?: InputMaybe<Array<PlayerSponsorBrand>>;
  tour: TourCode;
};

export type QueryPlayersArgs = {
  ids: Array<Scalars["ID"]["input"]>;
};

export type QueryPlayersOddsComparisonArgs = {
  playerIds: Array<Scalars["String"]["input"]>;
};

export type QueryPlayoffScorecardArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryPlayoffShotDetailsArgs = {
  tournamentId: Scalars["ID"]["input"];
};

export type QueryPlayoffShotDetailsCompressedArgs = {
  tournamentId: Scalars["ID"]["input"];
};

export type QueryPodcastEpisodesArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  podcastId: Scalars["String"]["input"];
};

export type QueryPpTournamentPicksArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryPriorityRankingsArgs = {
  tourCode: TourCode;
  year?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryPromoSectionArgs = {
  section: PromoSectionType;
};

export type QueryRankingsWinnersArgs = {
  tourCode?: InputMaybe<TourCode>;
};

export type QueryRsmArgs = {
  year?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryRsmLeaderboardArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  tournamentId?: InputMaybe<Scalars["ID"]["input"]>;
};

export type QueryScheduleArgs = {
  filter?: InputMaybe<TournamentCategory>;
  tourCode: Scalars["String"]["input"];
  year?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryScheduleYearsArgs = {
  tourCode: TourCode;
};

export type QueryScorecardArgs = {
  id: Scalars["ID"]["input"];
  playerId: Scalars["ID"]["input"];
};

export type QueryScorecardStatsArgs = {
  id: Scalars["ID"]["input"];
  playerId: Scalars["ID"]["input"];
};

export type QueryScorecardV2Args = {
  id: Scalars["ID"]["input"];
  playerId: Scalars["ID"]["input"];
};

export type QuerySearchBarFeaturesArgs = {
  tourCode?: InputMaybe<TourCode>;
};

export type QuerySearchPlayersArgs = {
  lastName?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryShotDetailsArgs = {
  playerId: Scalars["ID"]["input"];
  round: Scalars["Int"]["input"];
  tournamentId: Scalars["ID"]["input"];
};

export type QueryShotDetailsCompressedArgs = {
  playerId: Scalars["ID"]["input"];
  round: Scalars["Int"]["input"];
  tournamentId: Scalars["ID"]["input"];
};

export type QuerySponsoredArticlesArgs = {
  sponsor: ArticleSponsor;
};

export type QuerySponsorshipsArgs = {
  playerId: Scalars["ID"]["input"];
};

export type QueryStatDetailsArgs = {
  eventQuery?: InputMaybe<StatDetailEventQuery>;
  statId: Scalars["String"]["input"];
  tourCode: TourCode;
  year?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryStatLeadersArgs = {
  category: StatCategory;
  tourCode: TourCode;
  year?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryStatOverviewArgs = {
  tourCode: TourCode;
  year?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryStatsLeadersMobileArgs = {
  tourCode: TourCode;
  year?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryTeamStrokePlayLeaderboardArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryTeamStrokePlayLeaderboardCompressedArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryTeamStrokePlayScorecardArgs = {
  roundNum: Scalars["Int"]["input"];
  teamId: Scalars["ID"]["input"];
  tournamentId: Scalars["ID"]["input"];
};

export type QueryTeamStrokePlayScorecardRoundsArgs = {
  teamId: Scalars["ID"]["input"];
  tournamentId: Scalars["ID"]["input"];
};

export type QueryTeamStrokePlayTeeTimesArgs = {
  tournamentId: Scalars["ID"]["input"];
};

export type QueryTeamStrokePlayTeeTimesCompressedArgs = {
  tournamentId: Scalars["ID"]["input"];
};

export type QueryTeeTimesArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryTeeTimesCompressedArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryTourCupArgs = {
  id: Scalars["ID"]["input"];
  type?: InputMaybe<TourCupType>;
};

export type QueryTourCupCombinedArgs = {
  eventQuery?: InputMaybe<StatDetailEventQuery>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  tourCode: TourCode;
  year?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryTourCupSplitArgs = {
  eventQuery?: InputMaybe<StatDetailEventQuery>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  tourCode: TourCode;
  year?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryTourCupsArgs = {
  tour: TourCode;
  year: Scalars["Int"]["input"];
};

export type QueryTourcastShotDetailsArgs = {
  playerId: Scalars["ID"]["input"];
  round: Scalars["Int"]["input"];
  tournamentId: Scalars["ID"]["input"];
};

export type QueryTourcastTableArgs = {
  tournamentId: Scalars["ID"]["input"];
};

export type QueryTourcastVideosArgs = {
  hole?: InputMaybe<Scalars["Int"]["input"]>;
  playerId: Scalars["ID"]["input"];
  round: Scalars["Int"]["input"];
  shot?: InputMaybe<Scalars["Int"]["input"]>;
  tournamentId: Scalars["ID"]["input"];
};

export type QueryTournamentHistoryArgs = {
  tournamentId: Scalars["String"]["input"];
};

export type QueryTournamentOddsArgs = {
  tournamentId: Scalars["ID"]["input"];
};

export type QueryTournamentOddsCompressedArgs = {
  tournamentId: Scalars["ID"]["input"];
};

export type QueryTournamentOddsCompressedV2Args = {
  oddsFormat?: InputMaybe<OddsFormat>;
  provider?: InputMaybe<OddsProvider>;
  tournamentId: Scalars["ID"]["input"];
};

export type QueryTournamentOddsV2Args = {
  oddsFormat?: InputMaybe<OddsFormat>;
  provider?: InputMaybe<OddsProvider>;
  tournamentId: Scalars["ID"]["input"];
};

export type QueryTournamentOverviewArgs = {
  tournamentId: Scalars["ID"]["input"];
};

export type QueryTournamentPastResultsArgs = {
  id: Scalars["ID"]["input"];
  year?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryTournamentRecapArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  tournamentId: Scalars["String"]["input"];
};

export type QueryTournamentsArgs = {
  ids?: InputMaybe<Array<Scalars["ID"]["input"]>>;
};

export type QueryTspPlayoffShotDetailsArgs = {
  tournamentId: Scalars["ID"]["input"];
};

export type QueryTspPlayoffShotDetailsCompressedArgs = {
  tournamentId: Scalars["ID"]["input"];
};

export type QueryUniversityRankingsArgs = {
  tourCode?: InputMaybe<TourCode>;
  week?: InputMaybe<Scalars["Int"]["input"]>;
  year?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryUpcomingNetworksArgs = {
  tournamentIds: Array<Scalars["ID"]["input"]>;
};

export type QueryUpcomingScheduleArgs = {
  filter?: InputMaybe<TournamentCategory>;
  tourCode: Scalars["String"]["input"];
  year?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryVideoByIdArgs = {
  brightcoveId: Scalars["ID"]["input"];
  tourcast: Scalars["Boolean"]["input"];
};

export type QueryVideoFranchisesArgs = {
  tourCode?: InputMaybe<TourCode>;
};

export type QueryVideoHeroArgs = {
  path?: InputMaybe<Scalars["String"]["input"]>;
  tourCode: TourCode;
};

export type QueryVideoRecommendationsArgs = {
  brightcoveId?: InputMaybe<Scalars["ID"]["input"]>;
  franchise?: InputMaybe<Scalars["String"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  playerId?: InputMaybe<Scalars["String"]["input"]>;
  season?: InputMaybe<Scalars["String"]["input"]>;
  tour?: InputMaybe<Scalars["String"]["input"]>;
  tourCode?: InputMaybe<TourCode>;
  tournamentId?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryVideosArgs = {
  category?: InputMaybe<Scalars["String"]["input"]>;
  franchise?: InputMaybe<Scalars["String"]["input"]>;
  holeNumber?: InputMaybe<Scalars["String"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  playerId?: InputMaybe<Scalars["String"]["input"]>;
  playerIds?: InputMaybe<Array<Scalars["String"]["input"]>>;
  season?: InputMaybe<Scalars["String"]["input"]>;
  tour?: InputMaybe<Scalars["String"]["input"]>;
  tourCode?: InputMaybe<TourCode>;
  tournamentId?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryWeatherArgs = {
  tournamentId: Scalars["ID"]["input"];
};

export type QueryYourTourArgs = {
  tourCode: TourCode;
};

export type QueryYourTourNewsArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  tourCode: TourCode;
};

export type RsmEventWinner = {
  __typename?: "RSMEventWinner";
  birdies: Scalars["String"]["output"];
  country: Scalars["String"]["output"];
  countryFlag: Scalars["String"]["output"];
  firstName: Scalars["String"]["output"];
  lastName: Scalars["String"]["output"];
  playerId: Scalars["String"]["output"];
  tournamentId: Scalars["String"]["output"];
  tournamentName: Scalars["String"]["output"];
};

export type RsmHistoricalWinner = {
  __typename?: "RSMHistoricalWinner";
  displaySeason: Scalars["String"]["output"];
  winners: Array<RsmEventWinner>;
  year: Scalars["Int"]["output"];
};

export type RsmLeaderboard = {
  __typename?: "RSMLeaderboard";
  dateText?: Maybe<Scalars["String"]["output"]>;
  isLive?: Maybe<Scalars["Boolean"]["output"]>;
  livePlayers: Array<RsmLeaderboardPlayer>;
  players: Array<RsmLeaderboardPlayer>;
  round?: Maybe<Scalars["String"]["output"]>;
  tournamentId: Scalars["ID"]["output"];
  tournamentName: Scalars["String"]["output"];
};

export type RsmLeaderboardPlayer = {
  __typename?: "RSMLeaderboardPlayer";
  countryFlag: Scalars["String"]["output"];
  countryName: Scalars["String"]["output"];
  eventRank?: Maybe<Scalars["Int"]["output"]>;
  eventTotal: Scalars["String"]["output"];
  eventTotalSort: Scalars["Int"]["output"];
  firstName: Scalars["String"]["output"];
  lastName: Scalars["String"]["output"];
  playerId: Scalars["String"]["output"];
  projectedRank: Scalars["String"]["output"];
  projectedRankSort: Scalars["Int"]["output"];
  total: Scalars["String"]["output"];
  totalSort: Scalars["Int"]["output"];
};

export type RsmPlayer = {
  __typename?: "RSMPlayer";
  birdies: Scalars["String"]["output"];
  country: Scalars["String"]["output"];
  countryFlag: Scalars["String"]["output"];
  firstName: Scalars["String"]["output"];
  lastName: Scalars["String"]["output"];
  leading: Scalars["Boolean"]["output"];
  playerId: Scalars["String"]["output"];
  rank: Scalars["String"]["output"];
};

export type RsmStandings = {
  __typename?: "RSMStandings";
  currentLeaderboard: Array<RsmPlayer>;
  previousWinners: Array<RsmHistoricalWinner>;
  weeklyWinners: Array<RsmEventWinner>;
};

export type RadarBallTracjectory = {
  __typename?: "RadarBallTracjectory";
  kind: Scalars["String"]["output"];
  measuredTimeInterval: Array<Scalars["Float"]["output"]>;
  spinRateFit: Array<Scalars["Float"]["output"]>;
  timeInterval: Array<Scalars["Float"]["output"]>;
  validTimeInterval: Array<Scalars["Float"]["output"]>;
  xFit: Array<Scalars["Float"]["output"]>;
  yFit: Array<Scalars["Float"]["output"]>;
  zFit: Array<Scalars["Float"]["output"]>;
};

export type RadarData = {
  __typename?: "RadarData";
  actualFlightTime: Scalars["Int"]["output"];
  apexHeight: Scalars["Float"]["output"];
  apexRange: Scalars["Float"]["output"];
  apexSide: Scalars["Float"]["output"];
  ballSpeed: Scalars["Float"]["output"];
  ballTrajectory: Array<RadarBallTracjectory>;
  clubSpeed: Scalars["Float"]["output"];
  horizontalLaunchAngle: Scalars["Float"]["output"];
  launchSpin: Scalars["Float"]["output"];
  normalizedTrajectory: Array<RadarNormalizedTrajectory>;
  smashFactor: Scalars["Float"]["output"];
  spinAxis: Scalars["Float"]["output"];
  verticalLaunchAngle: Scalars["Float"]["output"];
};

export type RadarNormalizedTrajectory = {
  __typename?: "RadarNormalizedTrajectory";
  carry?: Maybe<Scalars["Int"]["output"]>;
  carrySide?: Maybe<Scalars["Int"]["output"]>;
  curve?: Maybe<Scalars["Int"]["output"]>;
  maxHeight?: Maybe<Scalars["Int"]["output"]>;
  spinAxis?: Maybe<Scalars["Float"]["output"]>;
  timeInterval?: Maybe<Array<Scalars["Float"]["output"]>>;
  valid: Scalars["Boolean"]["output"];
  validTimeInterval?: Maybe<Array<Scalars["Float"]["output"]>>;
  windVelocity?: Maybe<Array<Scalars["Float"]["output"]>>;
  xFit?: Maybe<Array<Scalars["Float"]["output"]>>;
  yFit?: Maybe<Array<Scalars["Float"]["output"]>>;
  zFit?: Maybe<Array<Scalars["Float"]["output"]>>;
};

export type RangeWeatherTemp = {
  __typename?: "RangeWeatherTemp";
  maxTempC: Scalars["String"]["output"];
  maxTempF: Scalars["String"]["output"];
  minTempC: Scalars["String"]["output"];
  minTempF: Scalars["String"]["output"];
};

export type RankingsPastWinner = {
  __typename?: "RankingsPastWinner";
  description: Scalars["String"]["output"];
  displayName: Scalars["String"]["output"];
  image: Scalars["String"]["output"];
  playerId: Scalars["ID"]["output"];
  season: Scalars["String"]["output"];
};

export type RelatedFact = {
  __typename?: "RelatedFact";
  factText?: Maybe<Array<TourSponsorDescription>>;
  photo?: Maybe<Scalars["String"]["output"]>;
};

export type RelatedFactsNode = {
  __typename?: "RelatedFactsNode";
  path: Scalars["String"]["output"];
};

export type ResultsYears = {
  __typename?: "ResultsYears";
  tour: TourCode;
  years: Array<Scalars["String"]["output"]>;
};

export type RoundFilter = {
  __typename?: "RoundFilter";
  displayText: Scalars["String"]["output"];
  roundNumbers: Array<Scalars["Int"]["output"]>;
};

export enum RoundFormat {
  AlternateShot = "ALTERNATE_SHOT",
  BestBall = "BEST_BALL",
}

export type RoundScore = {
  __typename?: "RoundScore";
  complete: Scalars["Boolean"]["output"];
  courseId?: Maybe<Scalars["String"]["output"]>;
  courseName: Scalars["String"]["output"];
  currentHole: Scalars["Int"]["output"];
  currentRound: Scalars["Boolean"]["output"];
  firstNine: ScorecardRow;
  groupNumber: Scalars["Int"]["output"];
  parTotal: Scalars["Int"]["output"];
  roundNumber: Scalars["Int"]["output"];
  scoreToPar: Scalars["String"]["output"];
  secondNine: ScorecardRow;
  total: Scalars["String"]["output"];
  tourcastURL?: Maybe<Scalars["String"]["output"]>;
  tourcastURLWeb?: Maybe<Scalars["String"]["output"]>;
};

export type RoundScoreItem = {
  __typename?: "RoundScoreItem";
  roundDisplay: Scalars["String"]["output"];
  roundNum: Scalars["Int"]["output"];
  roundScore: Scalars["String"]["output"];
};

export enum RoundStatus {
  Complete = "COMPLETE",
  GroupingsOfficial = "GROUPINGS_OFFICIAL",
  InProgress = "IN_PROGRESS",
  Official = "OFFICIAL",
  Suspended = "SUSPENDED",
  Upcoming = "UPCOMING",
}

export enum RoundStatusColor {
  Blue = "BLUE",
  Gray = "GRAY",
  Green = "GREEN",
  Red = "RED",
  Yellow = "YELLOW",
}

export type Schedule = {
  __typename?: "Schedule";
  completed: Array<ScheduleMonth>;
  filters?: Maybe<Array<ScheduleTournamentFilter>>;
  seasonYear: Scalars["String"]["output"];
  tour: Scalars["String"]["output"];
  upcoming: Array<ScheduleMonth>;
};

export type ScheduleChampion = {
  __typename?: "ScheduleChampion";
  displayName: Scalars["String"]["output"];
  playerId: Scalars["String"]["output"];
};

export enum ScheduleDisplay {
  Show = "SHOW",
  ShowNoLink = "SHOW_NO_LINK",
}

export type ScheduleMonth = {
  __typename?: "ScheduleMonth";
  month: Scalars["String"]["output"];
  monthSort?: Maybe<Scalars["Int"]["output"]>;
  tournaments: Array<ScheduleTournament>;
  year: Scalars["String"]["output"];
};

export type ScheduleTournament = {
  __typename?: "ScheduleTournament";
  beautyImage?: Maybe<Scalars["String"]["output"]>;
  champion: Scalars["String"]["output"];
  championEarnings?: Maybe<Scalars["String"]["output"]>;
  championId: Scalars["String"]["output"];
  champions: Array<ScheduleChampion>;
  city: Scalars["String"]["output"];
  country: Scalars["String"]["output"];
  countryCode: Scalars["String"]["output"];
  courseName: Scalars["String"]["output"];
  date: Scalars["String"]["output"];
  dateAccessibilityText: Scalars["String"]["output"];
  display: ScheduleDisplay;
  id: Scalars["ID"]["output"];
  purse?: Maybe<Scalars["String"]["output"]>;
  sequenceNumber: Scalars["Int"]["output"];
  sortDate?: Maybe<Scalars["String"]["output"]>;
  startDate: Scalars["AWSTimestamp"]["output"];
  state: Scalars["String"]["output"];
  stateCode: Scalars["String"]["output"];
  status?: Maybe<ScheduleTournamentStatus>;
  ticketsURL?: Maybe<Scalars["String"]["output"]>;
  tourStandingHeading?: Maybe<Scalars["String"]["output"]>;
  tourStandingValue?: Maybe<Scalars["String"]["output"]>;
  tournamentCategoryInfo?: Maybe<TournamentCategoryInfo>;
  tournamentLogo: Scalars["String"]["output"];
  tournamentName: Scalars["String"]["output"];
};

export type ScheduleTournamentFilter = {
  __typename?: "ScheduleTournamentFilter";
  name: Scalars["String"]["output"];
  type: TournamentCategory;
};

export type ScheduleTournamentStatus = {
  __typename?: "ScheduleTournamentStatus";
  roundDisplay: Scalars["String"]["output"];
  roundStatus: RoundStatus;
  roundStatusColor: RoundStatusColor;
  roundStatusDisplay: Scalars["String"]["output"];
};

export type ScheduleUpcoming = {
  __typename?: "ScheduleUpcoming";
  filters?: Maybe<Array<ScheduleTournamentFilter>>;
  id: Scalars["ID"]["output"];
  tournaments: Array<ScheduleTournament>;
};

export type ScheduleYear = {
  __typename?: "ScheduleYear";
  displayValue: Scalars["String"]["output"];
  queryValue: Scalars["String"]["output"];
};

export type ScheduleYears = {
  __typename?: "ScheduleYears";
  years: Array<ScheduleYear>;
};

export type ScorecardHeaderPlayer = {
  __typename?: "ScorecardHeaderPlayer";
  active: Scalars["Boolean"]["output"];
  finalRoundTotal: Scalars["String"]["output"];
  player: Player;
  position: Scalars["String"]["output"];
  roundDisplay: Scalars["String"]["output"];
  total: Scalars["String"]["output"];
};

export type ScorecardRow = {
  __typename?: "ScorecardRow";
  holes: Array<HoleScore>;
  parTotal: Scalars["Int"]["output"];
  total: Scalars["String"]["output"];
  totalLabel: Scalars["String"]["output"];
};

export type ScorecardStatsItem = {
  __typename?: "ScorecardStatsItem";
  label: Scalars["String"]["output"];
  rank: Scalars["String"]["output"];
  total: Scalars["String"]["output"];
  yearToDate: Scalars["String"]["output"];
};

export enum ScoringLevel {
  Basic = "BASIC",
  Stats = "STATS",
  Tourcast = "TOURCAST",
}

export enum ScoringTendency {
  Above = "ABOVE",
  Below = "BELOW",
  Even = "EVEN",
}

export type SearchBarFeatures = {
  __typename?: "SearchBarFeatures";
  playerFeatures: SearchBarPlayerFeatures;
};

export type SearchBarPlayer = {
  __typename?: "SearchBarPlayer";
  displayName: Scalars["String"]["output"];
  playerId: Scalars["ID"]["output"];
};

export type SearchBarPlayerFeatures = {
  __typename?: "SearchBarPlayerFeatures";
  playerHeader: Scalars["String"]["output"];
  players: Array<SearchBarPlayer>;
};

export type SeasonDisplayHeader = {
  __typename?: "SeasonDisplayHeader";
  endYear?: Maybe<Scalars["Int"]["output"]>;
  startYear: Scalars["Int"]["output"];
};

export type SeasonRecap = {
  __typename?: "SeasonRecap";
  displayMostRecentSeason?: Maybe<Scalars["String"]["output"]>;
  items?: Maybe<Array<SeasonRecapSeason>>;
  mostRecentRecapYear?: Maybe<Scalars["Int"]["output"]>;
  tourCode: TourCode;
};

export type SeasonRecapItems = {
  __typename?: "SeasonRecapItems";
  body: Scalars["String"]["output"];
  title: Scalars["String"]["output"];
  tournamentId: Scalars["String"]["output"];
  year: Scalars["Int"]["output"];
};

export type SeasonRecapSeason = {
  __typename?: "SeasonRecapSeason";
  displaySeason: Scalars["String"]["output"];
  items: Array<SeasonRecapItems>;
  year: Scalars["Int"]["output"];
};

export type SecondaryCupDetails = {
  __typename?: "SecondaryCupDetails";
  cupLogo?: Maybe<Scalars["String"]["output"]>;
  cupLogoAccessibilityText?: Maybe<Scalars["String"]["output"]>;
  cupLogoDark?: Maybe<Scalars["String"]["output"]>;
  cupName?: Maybe<Scalars["String"]["output"]>;
  cupPoints?: Maybe<Scalars["String"]["output"]>;
  cupRank?: Maybe<Scalars["String"]["output"]>;
  rankLogo?: Maybe<Scalars["String"]["output"]>;
  rankLogoAccessibilityText?: Maybe<Scalars["String"]["output"]>;
  rankLogoDark?: Maybe<Scalars["String"]["output"]>;
};

export type SegmentedCupRanking = {
  __typename?: "SegmentedCupRanking";
  defaultSelection: Scalars["Boolean"]["output"];
  rankings: Array<CupRankingPlayer>;
  title: Scalars["String"]["output"];
};

export type SegmentedCupRankingWrapper = {
  __typename?: "SegmentedCupRankingWrapper";
  segments?: Maybe<Array<Maybe<SegmentedCupRanking>>>;
};

export type ShotDetailHole = {
  __typename?: "ShotDetailHole";
  displayHoleNumber: Scalars["String"]["output"];
  fairwayCenter: StrokeCoordinates;
  green: Scalars["Boolean"]["output"];
  holeNumber: Scalars["Int"]["output"];
  holePickleBottomToTop: Scalars["String"]["output"];
  holePickleGreenBottomToTop: Scalars["String"]["output"];
  holePickleGreenLeftToRight: Scalars["String"]["output"];
  holePickleLeftToRight: Scalars["String"]["output"];
  par: Scalars["Int"]["output"];
  pinGreen: PointOfInterestCoords;
  pinOverview: PointOfInterestCoords;
  rank?: Maybe<Scalars["String"]["output"]>;
  score: Scalars["String"]["output"];
  status: HoleScoreStatus;
  strokes: Array<HoleStroke>;
  teeGreen: PointOfInterestCoords;
  teeOverview: PointOfInterestCoords;
  yardage: Scalars["Int"]["output"];
};

export type ShotDetailVideo = {
  __typename?: "ShotDetailVideo";
  duration: Scalars["Int"]["output"];
  holeNumber: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  pubDate: Scalars["AWSTimestamp"]["output"];
  shotNumber: Scalars["String"]["output"];
  thumbnail: Scalars["String"]["output"];
  title: Scalars["String"]["output"];
};

export type ShotDetails = {
  __typename?: "ShotDetails";
  displayType: ShotDetailsDisplayType;
  holes: Array<ShotDetailHole>;
  id: Scalars["ID"]["output"];
  lineColor: Scalars["String"]["output"];
  message: Scalars["String"]["output"];
  playerId: Scalars["ID"]["output"];
  round: Scalars["Int"]["output"];
  shotVideo?: Maybe<Video>;
  shotVideos?: Maybe<Array<Video>>;
  tournamentId: Scalars["ID"]["output"];
};

export type ShotDetailsCompressed = {
  __typename?: "ShotDetailsCompressed";
  id: Scalars["ID"]["output"];
  payload: Scalars["String"]["output"];
};

export enum ShotDetailsDisplayType {
  All = "ALL",
  None = "NONE",
  PlayByPlay = "PLAY_BY_PLAY",
}

export type ShotLinkCoordWrapper = {
  __typename?: "ShotLinkCoordWrapper";
  bottomToTopCoords: ShotLinkCoordinates;
  leftToRightCoords: ShotLinkCoordinates;
};

export type ShotLinkCoordinates = {
  __typename?: "ShotLinkCoordinates";
  fromCoords: StrokeCoordinates;
  toCoords: StrokeCoordinates;
};

export type SimpleScore = {
  __typename?: "SimpleScore";
  holeNumber: Scalars["Int"]["output"];
  score: Scalars["String"]["output"];
  status: HoleScoreStatus;
};

export enum SocialType {
  Facebook = "facebook",
  Instagram = "instagram",
  Twitter = "twitter",
  Youtube = "youtube",
}

export type Sponsor = {
  __typename?: "Sponsor";
  accessibilityText: Scalars["String"]["output"];
  logo?: Maybe<Scalars["String"]["output"]>;
  logoDark?: Maybe<Scalars["String"]["output"]>;
  logoTablet?: Maybe<Scalars["String"]["output"]>;
  logoTabletDark?: Maybe<Scalars["String"]["output"]>;
  sponsor: PlayerSponsorBrand;
};

export type SponsorImage = {
  __typename?: "SponsorImage";
  accessibilityText: Scalars["String"]["output"];
  link?: Maybe<Scalars["String"]["output"]>;
  logo: Scalars["String"]["output"];
  logoDark: Scalars["String"]["output"];
};

export type StandardCupRanking = {
  __typename?: "StandardCupRanking";
  rankings: Array<CupRankingPlayer>;
};

export type StandardWeatherTemp = {
  __typename?: "StandardWeatherTemp";
  tempC: Scalars["String"]["output"];
  tempF: Scalars["String"]["output"];
};

export type StandingStat = {
  __typename?: "StandingStat";
  statName: Scalars["String"]["output"];
  statValue: Scalars["String"]["output"];
};

export enum StatCategory {
  ApproachGreen = "APPROACH_GREEN",
  AroundGreen = "AROUND_GREEN",
  FactsAndFigures = "FACTS_AND_FIGURES",
  MoneyFinishes = "MONEY_FINISHES",
  OffTee = "OFF_TEE",
  PointsRankings = "POINTS_RANKINGS",
  Putting = "PUTTING",
  Scoring = "SCORING",
  Streaks = "STREAKS",
  StrokesGained = "STROKES_GAINED",
}

export type StatCategoryConfig = {
  __typename?: "StatCategoryConfig";
  category: Scalars["String"]["output"];
  displayName: Scalars["String"]["output"];
  subCategories: Array<StatSubCategory>;
};

export type StatCategoryStat = {
  __typename?: "StatCategoryStat";
  statId: Scalars["String"]["output"];
  statTitle: Scalars["String"]["output"];
};

export enum StatColor {
  Black = "BLACK",
  Gray = "GRAY",
  Green = "GREEN",
  Red = "RED",
}

export type StatDetailEventQuery = {
  queryType: StatDetailQueryType;
  tournamentId: Scalars["String"]["input"];
};

export enum StatDetailQueryType {
  EventOnly = "EVENT_ONLY",
  ThroughEvent = "THROUGH_EVENT",
}

export type StatDetailTourAvg = {
  __typename?: "StatDetailTourAvg";
  displayName: Scalars["String"]["output"];
  value: Scalars["String"]["output"];
};

export type StatDetails = {
  __typename?: "StatDetails";
  cutOffButtonText?: Maybe<Scalars["String"]["output"]>;
  cutOffNumber?: Maybe<Scalars["Int"]["output"]>;
  displaySeason: Scalars["String"]["output"];
  lastProcessed: Scalars["String"]["output"];
  rows: Array<StatDetailsRow>;
  sponsorLogo?: Maybe<Scalars["String"]["output"]>;
  statCategories: Array<StatCategoryConfig>;
  statDescription: Scalars["String"]["output"];
  statHeaders: Array<Scalars["String"]["output"]>;
  statId: Scalars["String"]["output"];
  statTitle: Scalars["String"]["output"];
  statType: CategoryStatType;
  tourAvg?: Maybe<Scalars["String"]["output"]>;
  tourCode: TourCode;
  tournamentPills: Array<StatTournamentPill>;
  year: Scalars["Int"]["output"];
  yearPills: Array<StatYearPills>;
};

export type StatDetailsPlayer = {
  __typename?: "StatDetailsPlayer";
  country: Scalars["String"]["output"];
  countryFlag: Scalars["String"]["output"];
  playerId: Scalars["String"]["output"];
  playerName: Scalars["String"]["output"];
  rank: Scalars["Int"]["output"];
  rankChangeTendency?: Maybe<StatRankMovement>;
  rankDiff: Scalars["String"]["output"];
  rankLogoDark?: Maybe<Scalars["String"]["output"]>;
  rankLogoLight?: Maybe<Scalars["String"]["output"]>;
  stats: Array<CategoryPlayerStat>;
};

export type StatDetailsRow = StatDetailTourAvg | StatDetailsPlayer;

export type StatLeaderCategory = {
  __typename?: "StatLeaderCategory";
  categoryHeader: Scalars["String"]["output"];
  displayYear: Scalars["String"]["output"];
  otherCategories: Array<StatCategoryConfig>;
  statCategory: StatCategory;
  subCategories: Array<StatLeaderSubCategory>;
  tourCode: TourCode;
  year: Scalars["Int"]["output"];
};

export type StatLeaderSubCategory = {
  __typename?: "StatLeaderSubCategory";
  stats: Array<LeaderStat>;
  subCategoryName: Scalars["String"]["output"];
};

export enum StatRankMovement {
  Constant = "CONSTANT",
  Down = "DOWN",
  Up = "UP",
}

export type StatSubCategory = {
  __typename?: "StatSubCategory";
  displayName?: Maybe<Scalars["String"]["output"]>;
  stats: Array<StatCategoryStat>;
};

export type StatTournamentPill = {
  __typename?: "StatTournamentPill";
  displayName: Scalars["String"]["output"];
  tournamentId: Scalars["String"]["output"];
};

export type StatWeekPill = {
  __typename?: "StatWeekPill";
  displayWeek: Scalars["String"]["output"];
  week: Scalars["Int"]["output"];
};

export type StatYearPills = {
  __typename?: "StatYearPills";
  displaySeason: Scalars["String"]["output"];
  year: Scalars["Int"]["output"];
};

export type Stats = {
  __typename?: "Stats";
  id: Scalars["ID"]["output"];
  statAvg?: Maybe<Scalars["String"]["output"]>;
  statName: Scalars["String"]["output"];
  statRank: Scalars["Int"]["output"];
  statValue: Scalars["String"]["output"];
};

export type StreamUrls = {
  __typename?: "StreamUrls";
  applePodcast: Scalars["String"]["output"];
  googlePodcast: Scalars["String"]["output"];
  spotify: Scalars["String"]["output"];
  stitcher: Scalars["String"]["output"];
  tuneIn: Scalars["String"]["output"];
};

export type StrokeCoordinates = {
  __typename?: "StrokeCoordinates";
  tourcastX: Scalars["Float"]["output"];
  tourcastY: Scalars["Float"]["output"];
  tourcastZ: Scalars["Float"]["output"];
  x: Scalars["Float"]["output"];
  y: Scalars["Float"]["output"];
  z: Scalars["Float"]["output"];
};

export type StrokesGainedStats = {
  __typename?: "StrokesGainedStats";
  graph: Scalars["Boolean"]["output"];
  label: Scalars["String"]["output"];
  rank: Scalars["String"]["output"];
  shortLabel: Scalars["String"]["output"];
  total: Scalars["String"]["output"];
  totalNum: Scalars["Float"]["output"];
  yearToDate: Scalars["String"]["output"];
  yearToDateNum: Scalars["Float"]["output"];
};

export type SubMarket = {
  __typename?: "SubMarket";
  header: Scalars["String"]["output"];
  id: Scalars["String"]["output"];
  options: Array<OddsOptionV2>;
};

export type Subscription = {
  __typename?: "Subscription";
  onUpdateCourseStats?: Maybe<TournamentHoleStats>;
  onUpdateCoverage?: Maybe<BroadcastCoverage>;
  onUpdateCupOverviewLeaderboard?: Maybe<CupTournamentStatus>;
  onUpdateCupRoundLeaderboard?: Maybe<CupTournamentLeaderboard>;
  onUpdateCupRoundLeaderboardCompressed?: Maybe<CupTournamentLeaderboardCompressed>;
  onUpdateCupScorecard?: Maybe<CupScorecard>;
  onUpdateGroupScorecard?: Maybe<GroupScorecard>;
  onUpdateGroupShotDetails?: Maybe<GroupShotDetails>;
  onUpdateGroupShotDetailsCompressed?: Maybe<GroupShotDetailsCompressed>;
  onUpdateHoleDetails?: Maybe<HoleDetail>;
  onUpdateLeaderboard?: Maybe<Leaderboard>;
  onUpdateLeaderboardCompressed?: Maybe<LeaderboardCompressed>;
  onUpdateLeaderboardCompressedV2?: Maybe<LeaderboardCompressedV2>;
  onUpdateLeaderboardOddsToWin?: Maybe<Leaderboard>;
  onUpdateLeaderboardOddsToWinCompressed?: Maybe<LeaderboardCompressed>;
  onUpdateLeaderboardOddsToWinCompressedV2?: Maybe<LeaderboardCompressedV2>;
  onUpdateLeaderboardOddsToWinV2?: Maybe<LeaderboardV2>;
  onUpdateLeaderboardStrokes?: Maybe<LeaderboardStrokes>;
  onUpdateLeaderboardStrokesCompresssed?: Maybe<LeaderboardStrokesCompressed>;
  onUpdateLeaderboardV2?: Maybe<LeaderboardV2>;
  onUpdateMatchPlayLeaderboard?: Maybe<MpLeaderboard>;
  onUpdateMatchPlayLeaderboardCompressed?: Maybe<LeaderboardCompressed>;
  onUpdateMatchPlayPlayoffScorecard?: Maybe<MpPlayoffScorecard>;
  onUpdateMatchPlayScorecard?: Maybe<MpScorecard>;
  onUpdateMatchPlayTeeTimes?: Maybe<MpTeeTimes>;
  onUpdateMatchPlayTeeTimesCompressed?: Maybe<TeeTimesCompressed>;
  onUpdateOddsCompressedV2?: Maybe<TournamentOddsCompressedV2>;
  onUpdateOddsV2?: Maybe<TournamentOddsV2>;
  onUpdatePlayoffScorecard?: Maybe<PlayoffScorecard>;
  onUpdatePlayoffShotDetails?: Maybe<GroupShotDetails>;
  onUpdatePlayoffShotDetailsCompressed?: Maybe<GroupShotDetailsCompressed>;
  onUpdateScorecard?: Maybe<LeaderboardDrawer>;
  onUpdateScorecardStats?: Maybe<PlayerScorecardStats>;
  onUpdateScorecardV2?: Maybe<LeaderboardDrawerV2>;
  onUpdateShotDetails?: Maybe<ShotDetails>;
  onUpdateShotDetailsCompressed?: Maybe<ShotDetailsCompressed>;
  onUpdateTSPPlayoffShotDetails?: Maybe<TeamShotDetails>;
  onUpdateTSPPlayoffShotDetailsCompressed?: Maybe<TeamShotDetailsCompressed>;
  onUpdateTeamPlayLeaderboard?: Maybe<TspLeaderboard>;
  onUpdateTeamPlayLeaderboardCompressed?: Maybe<LeaderboardCompressed>;
  onUpdateTeamPlayScorecard?: Maybe<TspScorecard>;
  onUpdateTeamPlayScorecardRounds?: Maybe<TspScorecardRounds>;
  onUpdateTeamStrokePlayTeeTimes?: Maybe<TspTeeTimes>;
  onUpdateTeamStrokePlayTeeTimesCompressed?: Maybe<TeeTimesCompressed>;
  onUpdateTeeTimes?: Maybe<TeeTimes>;
  onUpdateTeeTimesCompressed?: Maybe<TeeTimesCompressed>;
  onUpdateTourCup?: Maybe<TourCupRankingEvent>;
  onUpdateTourcastShotDetails?: Maybe<ShotDetails>;
  onUpdateTourcastTable?: Maybe<TourcastTable>;
  onUpdateTournament?: Maybe<Tournament>;
  onUpdateTournamentOdds?: Maybe<TournamentOdds>;
  onUpdateTournamentOddsCompressed?: Maybe<TournamentOddsCompressed>;
  onUpdateUpcomingSchedule?: Maybe<ScheduleUpcoming>;
};

export type SubscriptionOnUpdateCourseStatsArgs = {
  tournamentId: Scalars["ID"]["input"];
};

export type SubscriptionOnUpdateCoverageArgs = {
  id: Scalars["ID"]["input"];
};

export type SubscriptionOnUpdateCupOverviewLeaderboardArgs = {
  id: Scalars["ID"]["input"];
};

export type SubscriptionOnUpdateCupRoundLeaderboardArgs = {
  id: Scalars["ID"]["input"];
};

export type SubscriptionOnUpdateCupRoundLeaderboardCompressedArgs = {
  id: Scalars["ID"]["input"];
};

export type SubscriptionOnUpdateCupScorecardArgs = {
  id: Scalars["ID"]["input"];
};

export type SubscriptionOnUpdateGroupScorecardArgs = {
  id: Scalars["ID"]["input"];
};

export type SubscriptionOnUpdateGroupShotDetailsArgs = {
  id: Scalars["ID"]["input"];
};

export type SubscriptionOnUpdateGroupShotDetailsCompressedArgs = {
  id: Scalars["ID"]["input"];
};

export type SubscriptionOnUpdateHoleDetailsArgs = {
  id: Scalars["ID"]["input"];
};

export type SubscriptionOnUpdateLeaderboardArgs = {
  id: Scalars["ID"]["input"];
};

export type SubscriptionOnUpdateLeaderboardCompressedArgs = {
  id: Scalars["ID"]["input"];
};

export type SubscriptionOnUpdateLeaderboardCompressedV2Args = {
  id: Scalars["ID"]["input"];
};

export type SubscriptionOnUpdateLeaderboardOddsToWinArgs = {
  id: Scalars["ID"]["input"];
};

export type SubscriptionOnUpdateLeaderboardOddsToWinCompressedArgs = {
  id: Scalars["ID"]["input"];
};

export type SubscriptionOnUpdateLeaderboardOddsToWinCompressedV2Args = {
  id: Scalars["ID"]["input"];
};

export type SubscriptionOnUpdateLeaderboardOddsToWinV2Args = {
  id: Scalars["ID"]["input"];
};

export type SubscriptionOnUpdateLeaderboardStrokesArgs = {
  id: Scalars["ID"]["input"];
};

export type SubscriptionOnUpdateLeaderboardStrokesCompresssedArgs = {
  id: Scalars["ID"]["input"];
};

export type SubscriptionOnUpdateLeaderboardV2Args = {
  id: Scalars["ID"]["input"];
};

export type SubscriptionOnUpdateMatchPlayLeaderboardArgs = {
  id: Scalars["ID"]["input"];
};

export type SubscriptionOnUpdateMatchPlayLeaderboardCompressedArgs = {
  id: Scalars["ID"]["input"];
};

export type SubscriptionOnUpdateMatchPlayPlayoffScorecardArgs = {
  id: Scalars["ID"]["input"];
};

export type SubscriptionOnUpdateMatchPlayScorecardArgs = {
  id: Scalars["ID"]["input"];
};

export type SubscriptionOnUpdateMatchPlayTeeTimesArgs = {
  id: Scalars["ID"]["input"];
};

export type SubscriptionOnUpdateMatchPlayTeeTimesCompressedArgs = {
  id: Scalars["ID"]["input"];
};

export type SubscriptionOnUpdateOddsCompressedV2Args = {
  id: Scalars["ID"]["input"];
};

export type SubscriptionOnUpdateOddsV2Args = {
  id: Scalars["ID"]["input"];
};

export type SubscriptionOnUpdatePlayoffScorecardArgs = {
  id: Scalars["ID"]["input"];
};

export type SubscriptionOnUpdatePlayoffShotDetailsArgs = {
  id: Scalars["ID"]["input"];
};

export type SubscriptionOnUpdatePlayoffShotDetailsCompressedArgs = {
  id: Scalars["ID"]["input"];
};

export type SubscriptionOnUpdateScorecardArgs = {
  id: Scalars["ID"]["input"];
};

export type SubscriptionOnUpdateScorecardStatsArgs = {
  id: Scalars["ID"]["input"];
};

export type SubscriptionOnUpdateScorecardV2Args = {
  id: Scalars["ID"]["input"];
};

export type SubscriptionOnUpdateShotDetailsArgs = {
  id: Scalars["ID"]["input"];
};

export type SubscriptionOnUpdateShotDetailsCompressedArgs = {
  id: Scalars["ID"]["input"];
};

export type SubscriptionOnUpdateTspPlayoffShotDetailsArgs = {
  id: Scalars["ID"]["input"];
};

export type SubscriptionOnUpdateTspPlayoffShotDetailsCompressedArgs = {
  id: Scalars["ID"]["input"];
};

export type SubscriptionOnUpdateTeamPlayLeaderboardArgs = {
  id: Scalars["ID"]["input"];
};

export type SubscriptionOnUpdateTeamPlayLeaderboardCompressedArgs = {
  id: Scalars["ID"]["input"];
};

export type SubscriptionOnUpdateTeamPlayScorecardArgs = {
  id: Scalars["ID"]["input"];
};

export type SubscriptionOnUpdateTeamPlayScorecardRoundsArgs = {
  id: Scalars["ID"]["input"];
};

export type SubscriptionOnUpdateTeamStrokePlayTeeTimesArgs = {
  id: Scalars["ID"]["input"];
};

export type SubscriptionOnUpdateTeamStrokePlayTeeTimesCompressedArgs = {
  id: Scalars["ID"]["input"];
};

export type SubscriptionOnUpdateTeeTimesArgs = {
  id: Scalars["ID"]["input"];
};

export type SubscriptionOnUpdateTeeTimesCompressedArgs = {
  id: Scalars["ID"]["input"];
};

export type SubscriptionOnUpdateTourCupArgs = {
  id: Scalars["ID"]["input"];
};

export type SubscriptionOnUpdateTourcastShotDetailsArgs = {
  id: Scalars["ID"]["input"];
};

export type SubscriptionOnUpdateTourcastTableArgs = {
  tournamentId: Scalars["ID"]["input"];
};

export type SubscriptionOnUpdateTournamentArgs = {
  id: Scalars["ID"]["input"];
};

export type SubscriptionOnUpdateTournamentOddsArgs = {
  id: Scalars["ID"]["input"];
};

export type SubscriptionOnUpdateTournamentOddsCompressedArgs = {
  id: Scalars["ID"]["input"];
};

export type SubscriptionOnUpdateUpcomingScheduleArgs = {
  id: Scalars["ID"]["input"];
};

export type SummaryRow = {
  __typename?: "SummaryRow";
  birdies?: Maybe<Scalars["Int"]["output"]>;
  bogeys?: Maybe<Scalars["Int"]["output"]>;
  doubleBogey?: Maybe<Scalars["Int"]["output"]>;
  eagles?: Maybe<Scalars["Int"]["output"]>;
  par: Scalars["Int"]["output"];
  pars?: Maybe<Scalars["Int"]["output"]>;
  rowType: SummaryRowType;
  scoringAverage: Scalars["String"]["output"];
  scoringAverageDiff: Scalars["String"]["output"];
  scoringDiffTendency: ScoringTendency;
  yardage: Scalars["Int"]["output"];
};

export enum SummaryRowType {
  In = "IN",
  Out = "OUT",
  Total = "TOTAL",
}

export type TcWinner = MpLeaderboardPlayer | TspWinner | Winner;

export type TspLeaderboard = {
  __typename?: "TSPLeaderboard";
  currentRound: Scalars["Int"]["output"];
  currentRoundScoringFormat?: Maybe<Scalars["String"]["output"]>;
  formatType: FormatType;
  id: Scalars["ID"]["output"];
  infoUrl: Scalars["String"]["output"];
  informationSections: Array<InformationSection>;
  leaderboard: Array<TspLeaderboardRow>;
  messages: Array<LeaderboardMessage>;
  playoff?: Maybe<TspPlayoff>;
  rounds: Array<TspLeaderboardRound>;
  shortTimezone: Scalars["String"]["output"];
  timezone?: Maybe<Scalars["String"]["output"]>;
  tourcastUrl?: Maybe<Scalars["String"]["output"]>;
  tourcastUrlWeb?: Maybe<Scalars["String"]["output"]>;
  tournamentStatus: TournamentStatus;
  winner?: Maybe<TspWinner>;
};

export type TspLeaderboardRound = {
  __typename?: "TSPLeaderboardRound";
  round: Scalars["Int"]["output"];
  roundHeader: Scalars["String"]["output"];
  roundHeaderShort: Scalars["String"]["output"];
  roundStatusSubHead: Scalars["String"]["output"];
  roundTypeSubHead: Scalars["String"]["output"];
};

export type TspLeaderboardRow = InformationRow | TspTeamRow;

export type TspScorecard = {
  __typename?: "TSPScorecard";
  backNine: Scalars["Boolean"]["output"];
  courseId?: Maybe<Scalars["Int"]["output"]>;
  currentHole?: Maybe<Scalars["Int"]["output"]>;
  currentRound: Scalars["Int"]["output"];
  currentRoundTotal: Scalars["String"]["output"];
  firstNine?: Maybe<TeamPlayScoreCardRow>;
  groupNumber: Scalars["Int"]["output"];
  groupState: PlayerState;
  id: Scalars["ID"]["output"];
  locationDetail: Scalars["String"]["output"];
  parTotal: Scalars["Int"]["output"];
  players: Array<TspScPlayer>;
  position: Scalars["String"]["output"];
  roundDisplay: Scalars["String"]["output"];
  roundFormat: RoundFormat;
  roundNumber: Scalars["Int"]["output"];
  scorecardTitle: Scalars["String"]["output"];
  secondNine?: Maybe<TeamPlayScoreCardRow>;
  teeTime: Scalars["AWSTimestamp"]["output"];
  thru: Scalars["String"]["output"];
  total: Scalars["String"]["output"];
  totalStrokes: Scalars["String"]["output"];
  tourcastUrl?: Maybe<Scalars["String"]["output"]>;
  tourcastUrlWeb?: Maybe<Scalars["String"]["output"]>;
};

export type TspScorecardRounds = {
  __typename?: "TSPScorecardRounds";
  id: Scalars["ID"]["output"];
  scorecards: Array<TspScorecard>;
};

export type TspTeeTimeGroup = {
  __typename?: "TSPTeeTimeGroup";
  courseId?: Maybe<Scalars["String"]["output"]>;
  groupNumber: Scalars["Int"]["output"];
  groupState: PlayerState;
  groupStatus: Scalars["String"]["output"];
  holeLocation?: Maybe<Scalars["String"]["output"]>;
  startTee: Scalars["Int"]["output"];
  teams: Array<TspTeeTimeTeam>;
  teeTime: Scalars["AWSTimestamp"]["output"];
};

export type TspTeeTimeHeaders = {
  __typename?: "TSPTeeTimeHeaders";
  status: Scalars["String"]["output"];
  team: Scalars["String"]["output"];
  tee: Scalars["String"]["output"];
  time: Scalars["String"]["output"];
};

export type TspTeeTimePlayer = {
  __typename?: "TSPTeeTimePlayer";
  country: Scalars["String"]["output"];
  countryFlag: Scalars["String"]["output"];
  displayName: Scalars["String"]["output"];
  firstName: Scalars["String"]["output"];
  headshot: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  isAmateur: Scalars["Boolean"]["output"];
  lastName: Scalars["String"]["output"];
  shortName: Scalars["String"]["output"];
};

export type TspTeeTimeRound = {
  __typename?: "TSPTeeTimeRound";
  groups: Array<TspTeeTimeGroup>;
  roundFormat: Scalars["String"]["output"];
  roundNumber: Scalars["Int"]["output"];
};

export type TspTeeTimeTeam = {
  __typename?: "TSPTeeTimeTeam";
  players: Array<TspTeeTimePlayer>;
  teamId: Scalars["ID"]["output"];
};

export type TspTeeTimes = {
  __typename?: "TSPTeeTimes";
  courseFilters: Array<CourseFilter>;
  courses: Array<Course>;
  defaultRound: Scalars["Int"]["output"];
  id: Scalars["ID"]["output"];
  informationSections: Array<InformationSection>;
  roundFilters: Array<RoundFilter>;
  rounds: Array<TspTeeTimeRound>;
  teeTimeHeaders: TspTeeTimeHeaders;
  timezone: Scalars["String"]["output"];
};

export type TableBody = {
  __typename?: "TableBody";
  rows: Array<TableRows>;
};

export type TableColumn = {
  __typename?: "TableColumn";
  class?: Maybe<Scalars["String"]["output"]>;
  colspan?: Maybe<Scalars["String"]["output"]>;
  height?: Maybe<Scalars["String"]["output"]>;
  value?: Maybe<Array<TableColumnSegment>>;
  width?: Maybe<Scalars["String"]["output"]>;
};

export type TableColumnSegment = {
  __typename?: "TableColumnSegment";
  data?: Maybe<Scalars["String"]["output"]>;
  format?: Maybe<NewsArticleFormat>;
  oddsSwing?: Maybe<OddsSwing>;
  type: Scalars["String"]["output"];
  value?: Maybe<Scalars["String"]["output"]>;
};

export type TableDataRow = {
  __typename?: "TableDataRow";
  class?: Maybe<Scalars["String"]["output"]>;
  columns?: Maybe<Array<Maybe<TableColumn>>>;
};

export type TableFragment = {
  __typename?: "TableFragment";
  border?: Maybe<Scalars["String"]["output"]>;
  cellpadding?: Maybe<Scalars["String"]["output"]>;
  cellspacing?: Maybe<Scalars["String"]["output"]>;
  class?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  table?: Maybe<TableBody>;
  width?: Maybe<Scalars["String"]["output"]>;
};

export type TableHeaderRow = {
  __typename?: "TableHeaderRow";
  class?: Maybe<Scalars["String"]["output"]>;
  columns?: Maybe<Array<Maybe<TableColumn>>>;
};

export type TableRows = TableDataRow | TableHeaderRow;

export type TeamHoleGroups = {
  __typename?: "TeamHoleGroups";
  groupLocation: Scalars["String"]["output"];
  groupLocationCode: Scalars["String"]["output"];
  groupNumber: Scalars["Int"]["output"];
  teams: Array<HoleGroupTeam>;
  tourcastURL?: Maybe<Scalars["String"]["output"]>;
  tourcastURLWeb?: Maybe<Scalars["String"]["output"]>;
};

export type TeamPlayHole = {
  __typename?: "TeamPlayHole";
  holeNumber: Scalars["String"]["output"];
  parValue: Scalars["String"]["output"];
  playerScores: Array<TspPlayerHole>;
  round: Scalars["Int"]["output"];
  teamplayHoleScore: TspTeamHole;
  yardage: Scalars["String"]["output"];
};

export type TeamPlayScoreCardRow = {
  __typename?: "TeamPlayScoreCardRow";
  holes: Array<TeamPlayHole>;
  parTotal: Scalars["Int"]["output"];
  total: Scalars["String"]["output"];
  totalLabel: Scalars["String"]["output"];
};

export type TeamShotDetails = {
  __typename?: "TeamShotDetails";
  displayType: ShotDetailsDisplayType;
  groupNumber: Scalars["Int"]["output"];
  holes: Array<GroupShotDetailsHole>;
  id: Scalars["ID"]["output"];
  message: Scalars["String"]["output"];
  round: Scalars["Int"]["output"];
  shotVideo?: Maybe<Video>;
  shotVideos?: Maybe<Array<Video>>;
  teams: Array<GroupShotDetailsTeam>;
  tournamentId: Scalars["String"]["output"];
};

export type TeamShotDetailsCompressed = {
  __typename?: "TeamShotDetailsCompressed";
  id: Scalars["ID"]["output"];
  payload: Scalars["String"]["output"];
};

export type TeamplayHolePlayer = {
  __typename?: "TeamplayHolePlayer";
  holeScore?: Maybe<Scalars["String"]["output"]>;
  holeScoreStatus?: Maybe<HoleScoreStatus>;
  playerId: Scalars["ID"]["output"];
};

export type TeeTimeHeader = {
  __typename?: "TeeTimeHeader";
  players: Scalars["String"]["output"];
  status: Scalars["String"]["output"];
  tee: Scalars["String"]["output"];
  time: Scalars["String"]["output"];
};

export type TeeTimeRound = {
  __typename?: "TeeTimeRound";
  groups: Array<Group>;
  id: Scalars["ID"]["output"];
  roundDisplay: Scalars["String"]["output"];
  roundInt: Scalars["Int"]["output"];
  roundStatus: RoundStatus;
  roundStatusColor: RoundStatusColor;
  roundStatusDisplay: Scalars["String"]["output"];
};

export type TeeTimes = {
  __typename?: "TeeTimes";
  courses: Array<Course>;
  defaultRound: Scalars["Int"]["output"];
  id: Scalars["ID"]["output"];
  informationSections: Array<InformationSection>;
  rounds: Array<TeeTimeRound>;
  timezone: Scalars["String"]["output"];
};

export type TeeTimesCompressed = {
  __typename?: "TeeTimesCompressed";
  id: Scalars["ID"]["output"];
  payload: Scalars["String"]["output"];
};

export type ThreeUpPhoto = {
  __typename?: "ThreeUpPhoto";
  photoOne?: Maybe<Scalars["String"]["output"]>;
  photoOneAccessibilityText?: Maybe<Scalars["String"]["output"]>;
  photoOneUrl?: Maybe<Scalars["String"]["output"]>;
  photoThree?: Maybe<Scalars["String"]["output"]>;
  photoThreeAccessibilityText?: Maybe<Scalars["String"]["output"]>;
  photoThreeUrl?: Maybe<Scalars["String"]["output"]>;
  photoTwo?: Maybe<Scalars["String"]["output"]>;
  photoTwoAccessibilityText?: Maybe<Scalars["String"]["output"]>;
  photoTwoUrl?: Maybe<Scalars["String"]["output"]>;
  title: Scalars["String"]["output"];
};

export type ThreeUpStats = {
  __typename?: "ThreeUpStats";
  header?: Maybe<Scalars["String"]["output"]>;
  statsDescriptionOne?: Maybe<Scalars["String"]["output"]>;
  statsDescriptionThree?: Maybe<Scalars["String"]["output"]>;
  statsDescriptionTwo?: Maybe<Scalars["String"]["output"]>;
  valueOne?: Maybe<Scalars["String"]["output"]>;
  valueThree?: Maybe<Scalars["String"]["output"]>;
  valueTwo?: Maybe<Scalars["String"]["output"]>;
};

export enum ToughestRound {
  All = "ALL",
  Four = "FOUR",
  One = "ONE",
  Three = "THREE",
  Two = "TWO",
}

export type TourBoundAsset = {
  __typename?: "TourBoundAsset";
  tourBoundLogo?: Maybe<Scalars["String"]["output"]>;
  tourBoundLogoDark?: Maybe<Scalars["String"]["output"]>;
};

export type TourCategories = {
  __typename?: "TourCategories";
  categories: Array<Category>;
  tourCode: TourCode;
};

export enum TourCode {
  C = "C",
  H = "H",
  I = "I",
  M = "M",
  R = "R",
  S = "S",
  Y = "Y",
}

export type TourCupCombined = {
  __typename?: "TourCupCombined";
  columnHeaders: Array<Scalars["String"]["output"]>;
  cutOffButtonText?: Maybe<Scalars["String"]["output"]>;
  cutOffNumber?: Maybe<Scalars["Int"]["output"]>;
  description: Scalars["String"]["output"];
  detailCopy: Scalars["String"]["output"];
  fixedHeaders: Scalars["Int"]["output"];
  id: Scalars["ID"]["output"];
  logo: Scalars["String"]["output"];
  message?: Maybe<Scalars["String"]["output"]>;
  options: TourCupType;
  partner?: Maybe<Scalars["String"]["output"]>;
  partnerLink?: Maybe<Scalars["String"]["output"]>;
  players: Array<TourCupCombinedRow>;
  pointsEyebrow?: Maybe<Scalars["String"]["output"]>;
  projectedLive: Scalars["Boolean"]["output"];
  projectedTitle: Scalars["String"]["output"];
  rankEyebrow?: Maybe<Scalars["String"]["output"]>;
  rankingsHeader: Scalars["String"]["output"];
  season: Scalars["String"]["output"];
  title: Scalars["String"]["output"];
  tournamentPills: Array<StatTournamentPill>;
  winner?: Maybe<TourCupCombinedWinner>;
  yearPills: Array<StatYearPills>;
};

export type TourCupCombinedData = {
  __typename?: "TourCupCombinedData";
  event: Scalars["String"]["output"];
  logo?: Maybe<Scalars["String"]["output"]>;
  logoDark?: Maybe<Scalars["String"]["output"]>;
  movement: CupRankMovementDirection;
  movementAmount: Scalars["String"]["output"];
  official: Scalars["String"]["output"];
  projected: Scalars["String"]["output"];
};

export type TourCupCombinedInfo = {
  __typename?: "TourCupCombinedInfo";
  logo?: Maybe<Scalars["String"]["output"]>;
  logoDark?: Maybe<Scalars["String"]["output"]>;
  sortValue: Scalars["Int"]["output"];
  text: Scalars["String"]["output"];
};

export type TourCupCombinedPlayer = {
  __typename?: "TourCupCombinedPlayer";
  columnData: Array<Scalars["String"]["output"]>;
  country: Scalars["String"]["output"];
  countryFlag: Scalars["String"]["output"];
  displayName: Scalars["String"]["output"];
  firstName: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  lastName: Scalars["String"]["output"];
  officialSort: Scalars["Int"]["output"];
  pointData?: Maybe<TourCupCombinedData>;
  previousWeekRank: Scalars["String"]["output"];
  projectedSort: Scalars["Int"]["output"];
  rankLogoDark?: Maybe<Scalars["String"]["output"]>;
  rankLogoLight?: Maybe<Scalars["String"]["output"]>;
  rankingData?: Maybe<TourCupCombinedData>;
  shortName: Scalars["String"]["output"];
  thisWeekRank: Scalars["String"]["output"];
};

export type TourCupCombinedRow = TourCupCombinedInfo | TourCupCombinedPlayer;

export type TourCupCombinedTotal = {
  __typename?: "TourCupCombinedTotal";
  label: Scalars["String"]["output"];
  value: Scalars["String"]["output"];
};

export type TourCupCombinedWinner = {
  __typename?: "TourCupCombinedWinner";
  country: Scalars["String"]["output"];
  countryFlag: Scalars["String"]["output"];
  displayName: Scalars["String"]["output"];
  earnings: Scalars["String"]["output"];
  firstName: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  lastName: Scalars["String"]["output"];
  rank: Scalars["String"]["output"];
  shortName: Scalars["String"]["output"];
  totals: Array<TourCupCombinedTotal>;
};

export type TourCupRankingData =
  | SegmentedCupRankingWrapper
  | StandardCupRanking;

export type TourCupRankingEvent = {
  __typename?: "TourCupRankingEvent";
  description: Scalars["String"]["output"];
  detailCopy?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  live: Scalars["Boolean"]["output"];
  logo: Scalars["String"]["output"];
  logoDark: Scalars["String"]["output"];
  options: TourCupType;
  partner?: Maybe<Scalars["String"]["output"]>;
  partnerLink?: Maybe<Scalars["String"]["output"]>;
  rankings: Array<CupRankingPlayerWrapper>;
  rankingsHeader: Scalars["String"]["output"];
  showInLeaderboard: Scalars["Boolean"]["output"];
  standings: TourCupRankingData;
  title: Scalars["String"]["output"];
  webviewBrowserControls?: Maybe<Scalars["Boolean"]["output"]>;
  webviewUrl?: Maybe<Scalars["String"]["output"]>;
  winner?: Maybe<TourCupWinner>;
};

export type TourCupSplit = {
  __typename?: "TourCupSplit";
  columnHeaders: Array<Scalars["String"]["output"]>;
  cutOffButtonText?: Maybe<Scalars["String"]["output"]>;
  cutOffNumber?: Maybe<Scalars["Int"]["output"]>;
  description: Scalars["String"]["output"];
  detailCopy: Scalars["String"]["output"];
  fixedHeaders: Scalars["Int"]["output"];
  id: Scalars["ID"]["output"];
  logo: Scalars["String"]["output"];
  message?: Maybe<Scalars["String"]["output"]>;
  officialPlayers: Array<TourCupCombinedRow>;
  options: TourCupType;
  partner?: Maybe<Scalars["String"]["output"]>;
  partnerLink?: Maybe<Scalars["String"]["output"]>;
  pointsEyebrow?: Maybe<Scalars["String"]["output"]>;
  projectedLive: Scalars["Boolean"]["output"];
  projectedPlayers: Array<TourCupCombinedRow>;
  projectedTitle: Scalars["String"]["output"];
  rankEyebrow?: Maybe<Scalars["String"]["output"]>;
  rankingsHeader: Scalars["String"]["output"];
  season: Scalars["String"]["output"];
  title: Scalars["String"]["output"];
  tournamentPills: Array<StatTournamentPill>;
  winner?: Maybe<TourCupCombinedWinner>;
  yearPills: Array<StatYearPills>;
};

export enum TourCupType {
  Official = "OFFICIAL",
  OfficialAndProjected = "OFFICIAL_AND_PROJECTED",
  Projected = "PROJECTED",
}

export type TourCupWinner = {
  __typename?: "TourCupWinner";
  id: Scalars["String"]["output"];
  name: Scalars["String"]["output"];
  playerCountry: Scalars["String"]["output"];
  totalLabel: Scalars["String"]["output"];
  totalValue: Scalars["String"]["output"];
};

export type TourPills = {
  __typename?: "TourPills";
  displayName: Scalars["String"]["output"];
  tourCode?: Maybe<TourCode>;
};

export type TourSponsor = {
  __typename?: "TourSponsor";
  _path?: Maybe<Scalars["String"]["output"]>;
  sponsorDescription: Array<TourSponsorDescription>;
  sponsorImage?: Maybe<Scalars["String"]["output"]>;
  sponsorLogo?: Maybe<Scalars["String"]["output"]>;
  sponsorName?: Maybe<Scalars["String"]["output"]>;
  sponsorWebsiteUrl?: Maybe<Scalars["String"]["output"]>;
};

export type TourSponsorDescription =
  | NewsArticleImage
  | NewsArticleLineBreak
  | NewsArticleLink
  | NewsArticleParagraph
  | NewsArticleText;

export type TourcastCourse = {
  __typename?: "TourcastCourse";
  courseId: Scalars["String"]["output"];
  holes: Array<TourcastHole>;
  playoff?: Maybe<TourcastPlayoff>;
};

export type TourcastGroup = {
  __typename?: "TourcastGroup";
  groupName: Scalars["String"]["output"];
  groupNum: Scalars["Int"]["output"];
  location: Scalars["String"]["output"];
  players: Array<TourcastPlayer>;
  roundNum: Scalars["Int"]["output"];
  teeTime: Scalars["AWSTimestamp"]["output"];
  tourcastURL: Scalars["String"]["output"];
  tourcastURLWeb: Scalars["String"]["output"];
};

export type TourcastHole = {
  __typename?: "TourcastHole";
  displayRank: Scalars["String"]["output"];
  groups: Array<TourcastGroup>;
  holeNum: Scalars["Int"]["output"];
  matches: Array<HoleMatch>;
  par: Scalars["String"]["output"];
  rank: Scalars["Int"]["output"];
  round: Scalars["String"]["output"];
  scoringAvg: Scalars["String"]["output"];
  teamGroups: Array<TourcastTeamGroup>;
  yardage: Scalars["String"]["output"];
};

export type TourcastPlayer = {
  __typename?: "TourcastPlayer";
  amateur: Scalars["Boolean"]["output"];
  backNine: Scalars["Boolean"]["output"];
  country: Scalars["String"]["output"];
  countryCode: Scalars["String"]["output"];
  displayName: Scalars["String"]["output"];
  playerId: Scalars["String"]["output"];
  roundScore: Scalars["String"]["output"];
  shortName: Scalars["String"]["output"];
  thru: Scalars["String"]["output"];
  total: Scalars["String"]["output"];
};

export type TourcastPlayoff = {
  __typename?: "TourcastPlayoff";
  holeNum: Scalars["Int"]["output"];
  playOffHole: Scalars["Int"]["output"];
  players: Array<TourcastPlayoffPlayer>;
  tourcastURL?: Maybe<Scalars["String"]["output"]>;
  tourcastURLWeb?: Maybe<Scalars["String"]["output"]>;
};

export type TourcastPlayoffPlayer = {
  __typename?: "TourcastPlayoffPlayer";
  countryCode: Scalars["String"]["output"];
  displayName: Scalars["String"]["output"];
  playerId: Scalars["ID"]["output"];
  shortName: Scalars["String"]["output"];
};

export type TourcastTable = {
  __typename?: "TourcastTable";
  courses: Array<TourcastCourse>;
  informationSections: Array<InformationSection>;
  tournamentId: Scalars["ID"]["output"];
  winner?: Maybe<TcWinner>;
};

export type TourcastTeam = {
  __typename?: "TourcastTeam";
  backNine: Scalars["Boolean"]["output"];
  players: Array<TourcastPlayer>;
  roundScore: Scalars["String"]["output"];
  teamId: Scalars["ID"]["output"];
  thru: Scalars["String"]["output"];
  total: Scalars["String"]["output"];
};

export type TourcastTeamGroup = {
  __typename?: "TourcastTeamGroup";
  groupName: Scalars["String"]["output"];
  groupNum: Scalars["Int"]["output"];
  location: Scalars["String"]["output"];
  roundNum: Scalars["Int"]["output"];
  teams: Array<TourcastTeam>;
  teeTime: Scalars["AWSTimestamp"]["output"];
  tourcastURL: Scalars["String"]["output"];
  tourcastURLWeb: Scalars["String"]["output"];
};

export type Tournament = {
  __typename?: "Tournament";
  beautyImage: Scalars["String"]["output"];
  city: Scalars["String"]["output"];
  conductedByLabel?: Maybe<Scalars["String"]["output"]>;
  conductedByLink?: Maybe<Scalars["String"]["output"]>;
  country: Scalars["String"]["output"];
  courses: Array<Course>;
  currentRound: Scalars["Int"]["output"];
  displayDate: Scalars["String"]["output"];
  events: Array<Event>;
  features?: Maybe<Array<TournamentFeature>>;
  formatType: FormatType;
  id: Scalars["ID"]["output"];
  pdfUrl?: Maybe<Scalars["String"]["output"]>;
  roundDisplay: Scalars["String"]["output"];
  roundStatus: RoundStatus;
  roundStatusColor: RoundStatusColor;
  roundStatusDisplay: Scalars["String"]["output"];
  scoredLevel: ScoringLevel;
  seasonYear: Scalars["String"]["output"];
  shouldSubscribe?: Maybe<Scalars["Boolean"]["output"]>;
  state: Scalars["String"]["output"];
  ticketsURL?: Maybe<Scalars["String"]["output"]>;
  timezone: Scalars["String"]["output"];
  tournamentLocation: Scalars["String"]["output"];
  tournamentLogo: Array<Scalars["String"]["output"]>;
  tournamentName: Scalars["String"]["output"];
  tournamentSiteURL?: Maybe<Scalars["String"]["output"]>;
  tournamentStatus: TournamentStatus;
  weather?: Maybe<TournamentWeather>;
};

export type TournamentActivation = {
  __typename?: "TournamentActivation";
  data: Scalars["String"]["output"];
  description: Scalars["String"]["output"];
  detail?: Maybe<Scalars["String"]["output"]>;
  sponsorLogo: Scalars["String"]["output"];
  sponsorLogoDark: Scalars["String"]["output"];
  title: Scalars["String"]["output"];
};

export enum TournamentCategory {
  Signature = "SIGNATURE",
}

export type TournamentCategoryInfo = {
  __typename?: "TournamentCategoryInfo";
  label: Scalars["String"]["output"];
  logoDark: Scalars["String"]["output"];
  logoLight: Scalars["String"]["output"];
  type: TournamentCategory;
};

export type TournamentChampion = {
  __typename?: "TournamentChampion";
  countryCode: Scalars["String"]["output"];
  displayName: Scalars["String"]["output"];
  displaySeason: Scalars["String"]["output"];
  headshot?: Maybe<Scalars["String"]["output"]>;
  playerId: Scalars["ID"]["output"];
  score: Scalars["String"]["output"];
  seed?: Maybe<Scalars["String"]["output"]>;
  title: Scalars["String"]["output"];
  total: Scalars["String"]["output"];
};

export type TournamentCourse = {
  __typename?: "TournamentCourse";
  city?: Maybe<Scalars["String"]["output"]>;
  country?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  image: Scalars["String"]["output"];
  name: Scalars["String"]["output"];
  overview: Array<InformationData>;
  state?: Maybe<Scalars["String"]["output"]>;
};

export enum TournamentFeature {
  CourseStats = "COURSE_STATS",
  FedexfallStandings = "FEDEXFALL_STANDINGS",
  Field = "FIELD",
  GroupStage = "GROUP_STAGE",
  Leaderboard = "LEADERBOARD",
  Odds = "ODDS",
  Overview = "OVERVIEW",
  PastResults = "PAST_RESULTS",
  Recap = "RECAP",
  Standings = "STANDINGS",
  TeeTimes = "TEE_TIMES",
  Tourcast = "TOURCAST",
}

export type TournamentHistory = {
  __typename?: "TournamentHistory";
  courses: TournamentHistoryCourseTable;
  defendingChampion: TournamentHistoryPlayerTable;
  pastChampions: TournamentHistoryPlayerTable;
  tourCode: TourCode;
  tournamentName: Scalars["String"]["output"];
  tournamentNum: Scalars["String"]["output"];
};

export type TournamentHistoryCourse = {
  __typename?: "TournamentHistoryCourse";
  courseId: Scalars["String"]["output"];
  courseImage: Scalars["String"]["output"];
  courseName: Scalars["String"]["output"];
  displaySeason: Scalars["String"]["output"];
  par: Scalars["String"]["output"];
  yardage: Scalars["String"]["output"];
  year: Scalars["Int"]["output"];
};

export type TournamentHistoryCourseTable = {
  __typename?: "TournamentHistoryCourseTable";
  courses: Array<TournamentHistoryCourse>;
  header: Scalars["String"]["output"];
};

export type TournamentHistoryPlayer = {
  __typename?: "TournamentHistoryPlayer";
  countryFlag: Scalars["String"]["output"];
  displaySeason: Scalars["String"]["output"];
  playerId: Scalars["String"]["output"];
  playerName: Scalars["String"]["output"];
  relativeToPar: Scalars["String"]["output"];
  totalScore: Scalars["String"]["output"];
  year: Scalars["Int"]["output"];
};

export type TournamentHistoryPlayerTable = {
  __typename?: "TournamentHistoryPlayerTable";
  header: Scalars["String"]["output"];
  players: Array<TournamentHistoryPlayer>;
};

export type TournamentHoleStats = {
  __typename?: "TournamentHoleStats";
  courses: Array<CourseStat>;
  tournamentId: Scalars["ID"]["output"];
};

export type TournamentLocation = {
  __typename?: "TournamentLocation";
  city?: Maybe<Scalars["String"]["output"]>;
  country?: Maybe<Scalars["String"]["output"]>;
  state?: Maybe<Scalars["String"]["output"]>;
};

export type TournamentOdds = {
  __typename?: "TournamentOdds";
  availableMarkets: Array<AvailableMarket>;
  country: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  /** @deprecated Use banners from config these values are incorrect */
  oddsBanner: OddsBanner;
  oddsMessage?: Maybe<OddsMessage>;
  oddsProvider: OddsProvider;
};

export type TournamentOddsCompressed = {
  __typename?: "TournamentOddsCompressed";
  id: Scalars["ID"]["output"];
  tournamentOddsPayload: Scalars["String"]["output"];
};

export type TournamentOddsCompressedV2 = {
  __typename?: "TournamentOddsCompressedV2";
  id: Scalars["ID"]["output"];
  oddsPayload: Scalars["String"]["output"];
};

export type TournamentOddsV2 = {
  __typename?: "TournamentOddsV2";
  id: Scalars["ID"]["output"];
  marketPills: Array<MarketPill>;
  markets: Array<Market>;
  message?: Maybe<OddsMessage>;
  /**   tournamentId-provider */
  provider: OddsProvider;
  /**   other markets you can */
  round: Scalars["String"]["output"];
  tournamentId: Scalars["String"]["output"];
};

export type TournamentOverview = {
  __typename?: "TournamentOverview";
  activation?: Maybe<TournamentActivation>;
  augmentedReality?: Maybe<AugmentedRealityConfig>;
  beautyImage: Scalars["String"]["output"];
  courses: Array<TournamentCourse>;
  defendingChampion?: Maybe<TournamentChampion>;
  defendingTeamChampion?: Maybe<Array<Maybe<TournamentChampion>>>;
  eventGuideURL?: Maybe<Scalars["String"]["output"]>;
  formatType: FormatType;
  overview: Array<InformationData>;
  pastChampions: Array<TournamentChampion>;
  pastTeamChampions?: Maybe<Array<Maybe<TournamentTeamChampion>>>;
  shareURL?: Maybe<Scalars["String"]["output"]>;
  ticketsURL?: Maybe<Scalars["String"]["output"]>;
  tourcastURL?: Maybe<Scalars["String"]["output"]>;
  tourcastURLWeb?: Maybe<Scalars["String"]["output"]>;
  /** @deprecated Field no longer supported */
  tournamentCategoryInfo?: Maybe<TournamentCategoryInfo>;
  webviewBrowserControls: Scalars["Boolean"]["output"];
};

export type TournamentRecap = {
  __typename?: "TournamentRecap";
  courses: Array<TournamentRecapCourse>;
  durationDate: Scalars["String"]["output"];
  newsArticles: Array<NewsArticle>;
  tournamentId: Scalars["String"]["output"];
  videos: Array<Video>;
};

export type TournamentRecapCourse = {
  __typename?: "TournamentRecapCourse";
  city: Scalars["String"]["output"];
  country?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  image: Scalars["String"]["output"];
  name: Scalars["String"]["output"];
  par: Scalars["String"]["output"];
  state?: Maybe<Scalars["String"]["output"]>;
  yardage: Scalars["String"]["output"];
};

export type TournamentResultOverview = {
  __typename?: "TournamentResultOverview";
  courseCity: Scalars["String"]["output"];
  courseCountry: Scalars["String"]["output"];
  courseName: Scalars["String"]["output"];
  courseState?: Maybe<Scalars["String"]["output"]>;
  displaySeason: Scalars["String"]["output"];
  tournamentId: Scalars["String"]["output"];
  tournamentLogo: Scalars["String"]["output"];
  tournamentName: Scalars["String"]["output"];
};

export type TournamentResultPill = {
  __typename?: "TournamentResultPill";
  tournamentName: Scalars["String"]["output"];
  tournamentNum: Scalars["ID"]["output"];
};

export type TournamentResults = {
  __typename?: "TournamentResults";
  cupEyebrowText: Scalars["String"]["output"];
  overview: Array<PlayerProfileInfoItem>;
  tournamentNum: Scalars["ID"]["output"];
  tournamentOverview?: Maybe<TournamentResultOverview>;
  tournaments: Array<PlayerProfileTournamentRow>;
};

export enum TournamentStatus {
  Completed = "COMPLETED",
  InProgress = "IN_PROGRESS",
  NotStarted = "NOT_STARTED",
}

export type TournamentTeamChampion = {
  __typename?: "TournamentTeamChampion";
  players: Array<TournamentChampion>;
};

export type TournamentWeather = {
  __typename?: "TournamentWeather";
  condition: WeatherCondition;
  humidity: Scalars["String"]["output"];
  logo?: Maybe<Scalars["String"]["output"]>;
  logoAccessibility: Scalars["String"]["output"];
  logoDark?: Maybe<Scalars["String"]["output"]>;
  precipitation: Scalars["String"]["output"];
  tempC: Scalars["String"]["output"];
  tempF: Scalars["String"]["output"];
  windDirection: WindDirection;
  windSpeedKPH: Scalars["String"]["output"];
  windSpeedMPH: Scalars["String"]["output"];
};

export type TspPlayer = {
  __typename?: "TspPlayer";
  abbreviations: Scalars["String"]["output"];
  abbreviationsAccessibilityText: Scalars["String"]["output"];
  amateur: Scalars["Boolean"]["output"];
  country: Scalars["String"]["output"];
  countryFlag: Scalars["String"]["output"];
  displayName: Scalars["String"]["output"];
  firstName: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  lastName: Scalars["String"]["output"];
  lineColor: Scalars["String"]["output"];
  official: Scalars["String"]["output"];
  projected: Scalars["String"]["output"];
  rankLogoDark?: Maybe<Scalars["String"]["output"]>;
  rankLogoLight?: Maybe<Scalars["String"]["output"]>;
  rankingMovement: CupRankMovementDirection;
  rankingMovementAmount: Scalars["String"]["output"];
  shortName: Scalars["String"]["output"];
};

export type TspPlayerHole = {
  __typename?: "TspPlayerHole";
  inTheHoleTimestamp?: Maybe<Scalars["AWSTimestamp"]["output"]>;
  playComplete?: Maybe<Scalars["Boolean"]["output"]>;
  playerId: Scalars["ID"]["output"];
  playerTotal?: Maybe<Scalars["String"]["output"]>;
  statsScoreId?: Maybe<Scalars["String"]["output"]>;
  status?: Maybe<HoleScoreStatus>;
  strokes: Scalars["Int"]["output"];
  strokesValue: Scalars["String"]["output"];
};

export type TspPlayoff = {
  __typename?: "TspPlayoff";
  currentHole: Scalars["Int"]["output"];
  holes: Array<PlayoffHole>;
  location?: Maybe<Scalars["String"]["output"]>;
  teams: Array<PlayoffTeams>;
  thru?: Maybe<Scalars["String"]["output"]>;
};

export type TspScPlayer = {
  __typename?: "TspSCPlayer";
  abbreviations: Scalars["String"]["output"];
  abbreviationsAccessibilityText: Scalars["String"]["output"];
  amateur: Scalars["Boolean"]["output"];
  country: Scalars["String"]["output"];
  countryFlag: Scalars["String"]["output"];
  displayName: Scalars["String"]["output"];
  firstName: Scalars["String"]["output"];
  headshot: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  lastName: Scalars["String"]["output"];
  lineColor: Scalars["String"]["output"];
  shortName: Scalars["String"]["output"];
  superShortName?: Maybe<Scalars["String"]["output"]>;
};

export type TspStrokePlayer = {
  __typename?: "TspStrokePlayer";
  color?: Maybe<Scalars["String"]["output"]>;
  displayName?: Maybe<Scalars["String"]["output"]>;
  firstName?: Maybe<Scalars["String"]["output"]>;
  lastName?: Maybe<Scalars["String"]["output"]>;
  playerId?: Maybe<Scalars["Int"]["output"]>;
  playerIdString?: Maybe<Scalars["String"]["output"]>;
  shortName?: Maybe<Scalars["String"]["output"]>;
};

export type TspTeamHole = {
  __typename?: "TspTeamHole";
  inTheHoleTimestamp?: Maybe<Scalars["AWSTimestamp"]["output"]>;
  playComplete?: Maybe<Scalars["Boolean"]["output"]>;
  statsScoreId?: Maybe<Scalars["String"]["output"]>;
  status?: Maybe<HoleScoreStatus>;
  strokes: Scalars["Int"]["output"];
  strokesValue: Scalars["String"]["output"];
  teamId: Scalars["ID"]["output"];
  teamTotal?: Maybe<Scalars["String"]["output"]>;
};

export type TspTeamRow = {
  __typename?: "TspTeamRow";
  backNine: Scalars["Boolean"]["output"];
  courseId: Scalars["String"]["output"];
  currentRound: Scalars["Int"]["output"];
  groupNumber: Scalars["Int"]["output"];
  leaderboardSortOrder: Scalars["Int"]["output"];
  movementAmount: Scalars["String"]["output"];
  movementDirection: LeaderboardMovement;
  oddsOptionId?: Maybe<Scalars["String"]["output"]>;
  oddsSort?: Maybe<Scalars["Float"]["output"]>;
  oddsSwing?: Maybe<OddsSwing>;
  oddsToWin?: Maybe<Scalars["String"]["output"]>;
  players: Array<TspPlayer>;
  position: Scalars["String"]["output"];
  rounds: Array<Scalars["String"]["output"]>;
  score: Scalars["String"]["output"];
  scoreSort: Scalars["Int"]["output"];
  startHole?: Maybe<Scalars["String"]["output"]>;
  status?: Maybe<PlayerState>;
  teamId: Scalars["ID"]["output"];
  teamName: Scalars["String"]["output"];
  teeTime: Scalars["AWSTimestamp"]["output"];
  thru: Scalars["String"]["output"];
  thruSort: Scalars["Int"]["output"];
  total: Scalars["String"]["output"];
  totalSort: Scalars["Int"]["output"];
  totalStrokes: Scalars["String"]["output"];
};

export type TspWinner = {
  __typename?: "TspWinner";
  points?: Maybe<Scalars["String"]["output"]>;
  purse?: Maybe<Scalars["String"]["output"]>;
  teamId: Scalars["ID"]["output"];
  totalScore: Scalars["String"]["output"];
  totalStrokes: Scalars["Int"]["output"];
  winningTeam: Array<TspWinningPlayer>;
};

export type TspWinningPlayer = {
  __typename?: "TspWinningPlayer";
  countryFlag: Scalars["String"]["output"];
  countryName: Scalars["String"]["output"];
  firstName: Scalars["String"]["output"];
  headshot: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  lastName: Scalars["String"]["output"];
};

export type TwoColumn = {
  __typename?: "TwoColumn";
  sectionOne?: Maybe<Array<Maybe<NewsArticleNode>>>;
  sectionOneTitle?: Maybe<Scalars["String"]["output"]>;
  sectionTwo?: Maybe<Array<Maybe<NewsArticleNode>>>;
  sectionTwoTitle?: Maybe<Scalars["String"]["output"]>;
};

export enum UniversityRankColor {
  Black = "BLACK",
  Blue = "BLUE",
  Gold = "GOLD",
  Gray = "GRAY",
}

export type UniversityRankingPlayer = {
  __typename?: "UniversityRankingPlayer";
  avg: Scalars["String"]["output"];
  country: Scalars["String"]["output"];
  displayName: Scalars["String"]["output"];
  events: Scalars["Int"]["output"];
  playerId: Scalars["ID"]["output"];
  rank: Scalars["Int"]["output"];
  rankColor: UniversityRankColor;
  rankingMovement: CupRankMovementDirection;
  rankingMovementAmount: Scalars["String"]["output"];
  rankingMovementAmountSort: Scalars["Int"]["output"];
  schoolName: Scalars["String"]["output"];
  top10: Scalars["Int"]["output"];
  tournaments: Array<UniversityRankingsTournament>;
  wins: Scalars["Int"]["output"];
};

export type UniversityRankings = {
  __typename?: "UniversityRankings";
  disclaimer?: Maybe<Scalars["String"]["output"]>;
  displayYear: Scalars["String"]["output"];
  players: Array<UniversityRankingPlayer>;
  sponsorImage?: Maybe<Scalars["String"]["output"]>;
  sponsorName: Scalars["String"]["output"];
  throughText: Scalars["String"]["output"];
  title: Scalars["String"]["output"];
  /** @deprecated don't need it! */
  tourCode?: Maybe<TourCode>;
  weekNum: Scalars["Int"]["output"];
  weekPills: Array<StatWeekPill>;
  year: Scalars["Int"]["output"];
  yearPills: Array<StatYearPills>;
};

export type UniversityRankingsTournament = {
  __typename?: "UniversityRankingsTournament";
  finishPosition: Scalars["String"]["output"];
  name: Scalars["String"]["output"];
  playedYear: Scalars["Int"]["output"];
  points: Scalars["String"]["output"];
  week: Scalars["Int"]["output"];
};

export type UnorderedListNode = {
  __typename?: "UnorderedListNode";
  items: Array<ListItem>;
};

export type UnsubscribeResponse = {
  __typename?: "UnsubscribeResponse";
  ok: Scalars["Boolean"]["output"];
};

export type UpcomingBroadcastNetwork = {
  __typename?: "UpcomingBroadcastNetwork";
  networks: Array<BroadcastNetwork>;
  tournamentId: Scalars["String"]["output"];
};

export type UpcomingBroadcastNetworks = {
  __typename?: "UpcomingBroadcastNetworks";
  upcomingNetworks: Array<UpcomingBroadcastNetwork>;
};

export type UpcomingMatch = {
  __typename?: "UpcomingMatch";
  isConsolationMatch: Scalars["Boolean"]["output"];
  matchId: Scalars["String"]["output"];
  potentialPlayers: Array<UpcomingMatchPotentialPlayer>;
};

export type UpcomingMatchPotentialPlayer = {
  __typename?: "UpcomingMatchPotentialPlayer";
  isKnown: Scalars["Boolean"]["output"];
  nameLabel: Scalars["String"]["output"];
  players: Array<MpLeaderboardPlayer>;
  relationshipLabel?: Maybe<Scalars["String"]["output"]>;
};

export type Video = {
  __typename?: "Video";
  accountId?: Maybe<Scalars["String"]["output"]>;
  category: Scalars["String"]["output"];
  categoryDisplayName: Scalars["String"]["output"];
  created?: Maybe<Scalars["AWSTimestamp"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  descriptionNode?: Maybe<Array<VideoDescription>>;
  duration: Scalars["Int"]["output"];
  franchise: Scalars["String"]["output"];
  franchiseDisplayName: Scalars["String"]["output"];
  guid?: Maybe<Scalars["String"]["output"]>;
  holeNumber?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  playerVideos?: Maybe<Array<PlayerVideo>>;
  poster: Scalars["String"]["output"];
  pubdate: Scalars["AWSTimestamp"]["output"];
  publishDate?: Maybe<Scalars["String"]["output"]>;
  roundNumber?: Maybe<Scalars["String"]["output"]>;
  seqHoleNumber?: Maybe<Scalars["String"]["output"]>;
  shareUrl?: Maybe<Scalars["String"]["output"]>;
  shotNumber?: Maybe<Scalars["String"]["output"]>;
  sponsor?: Maybe<VideoSponsor>;
  startsAt?: Maybe<Scalars["AWSTimestamp"]["output"]>;
  thumbnail: Scalars["String"]["output"];
  title: Scalars["String"]["output"];
  tourCode: Scalars["String"]["output"];
  tournamentId?: Maybe<Scalars["String"]["output"]>;
  year?: Maybe<Scalars["String"]["output"]>;
};

export type VideoDescription = NewsArticleLink | NewsArticleText;

export type VideoHero = {
  __typename?: "VideoHero";
  video?: Maybe<Video>;
};

export type VideoSponsor = {
  __typename?: "VideoSponsor";
  description?: Maybe<Scalars["String"]["output"]>;
  gam?: Maybe<Scalars["String"]["output"]>;
  image?: Maybe<Scalars["String"]["output"]>;
  logo: Scalars["String"]["output"];
  logoDark: Scalars["String"]["output"];
  logoPrefix?: Maybe<Scalars["String"]["output"]>;
  name: Scalars["String"]["output"];
  websiteUrl?: Maybe<Scalars["String"]["output"]>;
};

export enum WeatherCondition {
  DayCloudy = "DAY_CLOUDY",
  DayFogMist = "DAY_FOG_MIST",
  DayMostlyCloudy = "DAY_MOSTLY_CLOUDY",
  DayMostlySunny = "DAY_MOSTLY_SUNNY",
  DayPartlyCloudy = "DAY_PARTLY_CLOUDY",
  DayRainy = "DAY_RAINY",
  DayScatteredShowers = "DAY_SCATTERED_SHOWERS",
  DaySnow = "DAY_SNOW",
  DaySunny = "DAY_SUNNY",
  DayThunderstorms = "DAY_THUNDERSTORMS",
  NightClear = "NIGHT_CLEAR",
  NightIsolatedClouds = "NIGHT_ISOLATED_CLOUDS",
  NightMostlyCloudy = "NIGHT_MOSTLY_CLOUDY",
  NightPartlyCloudy = "NIGHT_PARTLY_CLOUDY",
}

export type WeatherDetails = {
  __typename?: "WeatherDetails";
  condition: WeatherCondition;
  humidity: Scalars["String"]["output"];
  precipitation: Scalars["String"]["output"];
  temperature: WeatherTemp;
  title: Scalars["String"]["output"];
  windDirection: WindDirection;
  windSpeedKPH: Scalars["String"]["output"];
  windSpeedMPH: Scalars["String"]["output"];
};

export type WeatherNotes = {
  __typename?: "WeatherNotes";
  notes: Array<Scalars["String"]["output"]>;
  weather: Array<DayWeather>;
};

export type WeatherSummary = {
  __typename?: "WeatherSummary";
  accessibilityText?: Maybe<Scalars["String"]["output"]>;
  daily: Array<WeatherDetails>;
  hourly: Array<WeatherDetails>;
  sponsorLogo?: Maybe<Scalars["String"]["output"]>;
  title: Scalars["String"]["output"];
};

export type WeatherTemp = RangeWeatherTemp | StandardWeatherTemp;

export enum WindDirection {
  East = "EAST",
  North = "NORTH",
  NorthEast = "NORTH_EAST",
  NorthWest = "NORTH_WEST",
  South = "SOUTH",
  SouthEast = "SOUTH_EAST",
  SouthWest = "SOUTH_WEST",
  West = "WEST",
}

export type Winner = {
  __typename?: "Winner";
  countryFlag: Scalars["String"]["output"];
  countryName: Scalars["String"]["output"];
  displayPoints: Scalars["Boolean"]["output"];
  displayPurse: Scalars["Boolean"]["output"];
  firstName: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  lastName: Scalars["String"]["output"];
  points?: Maybe<Scalars["String"]["output"]>;
  pointsLabel?: Maybe<Scalars["String"]["output"]>;
  purse?: Maybe<Scalars["String"]["output"]>;
  seed?: Maybe<Scalars["String"]["output"]>;
  totalScore: Scalars["String"]["output"];
  totalStrokes: Scalars["Int"]["output"];
};

export type YtActivationData = {
  __typename?: "YTActivationData";
  data: Scalars["String"]["output"];
  description?: Maybe<Scalars["String"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
};

export type YtAdInterstitialCard = {
  __typename?: "YTAdInterstitialCard";
  adUrl: Scalars["String"]["output"];
  props: YtCardProps;
};

export type YtArticleCard = {
  __typename?: "YTArticleCard";
  props: YtCardProps;
  title: Scalars["String"]["output"];
};

export type YtCardCtaProps = {
  __typename?: "YTCardCtaProps";
  color?: Maybe<Scalars["String"]["output"]>;
  isTourCastCta: Scalars["Boolean"]["output"];
  link: Scalars["String"]["output"];
  text: Scalars["String"]["output"];
};

export type YtCardProps = {
  __typename?: "YTCardProps";
  backgroundColor?: Maybe<Scalars["String"]["output"]>;
  cardHeading?: Maybe<Scalars["String"]["output"]>;
  cardSubHead?: Maybe<Scalars["String"]["output"]>;
  cta?: Maybe<YtCardCtaProps>;
  ctaText?: Maybe<Scalars["String"]["output"]>;
  date: Scalars["AWSTimestamp"]["output"];
  deepLink: Scalars["String"]["output"];
  disableSlowZoom: Scalars["Boolean"]["output"];
  image?: Maybe<Scalars["String"]["output"]>;
  link: Scalars["String"]["output"];
  opacity: Scalars["Float"]["output"];
  sponsorLogo?: Maybe<Scalars["String"]["output"]>;
  sponsorText?: Maybe<Scalars["String"]["output"]>;
  textColor: Scalars["String"]["output"];
  textPosition: YtTextPosition;
  tourCastCta: Scalars["Boolean"]["output"];
  videoId?: Maybe<Scalars["String"]["output"]>;
};

export type YtCardSponsorProps = {
  __typename?: "YTCardSponsorProps";
  activationData: Array<YtActivationData>;
  activationSubtitle: Scalars["String"]["output"];
  activationTitle: Scalars["String"]["output"];
  sponsorLogo: Scalars["String"]["output"];
  tournamentLogo: Scalars["String"]["output"];
  tournamentName: Scalars["String"]["output"];
};

export type YtCoverCard = {
  __typename?: "YTCoverCard";
  props: YtCardProps;
  subTitle?: Maybe<Scalars["String"]["output"]>;
  title: Scalars["String"]["output"];
};

export type YtHighlightCard = {
  __typename?: "YTHighlightCard";
  hole?: Maybe<Scalars["String"]["output"]>;
  props: YtCardProps;
  title: Scalars["String"]["output"];
};

export type YtLeaderboardCard = {
  __typename?: "YTLeaderboardCard";
  players: Array<YtPlayer>;
  props: YtCardProps;
  title: Scalars["String"]["output"];
  tournament: YtTournament;
};

export type YtNuggetCard = {
  __typename?: "YTNuggetCard";
  props: YtCardProps;
  subText: Scalars["String"]["output"];
  title: Scalars["String"]["output"];
};

export type YtPlayer = {
  __typename?: "YTPlayer";
  id: Scalars["String"]["output"];
  name: Scalars["String"]["output"];
};

export type YtRound = {
  __typename?: "YTRound";
  roundDisplay: Scalars["String"]["output"];
  roundNumber: Scalars["Int"]["output"];
};

export type YtScorecardCard = {
  __typename?: "YTScorecardCard";
  player: YtPlayer;
  props: YtCardProps;
  title: Scalars["String"]["output"];
  tournament: YtTournament;
};

export type YtSponsorActivationCard = {
  __typename?: "YTSponsorActivationCard";
  props: YtCardProps;
  sponsorProps: YtCardSponsorProps;
  subTitle?: Maybe<Scalars["String"]["output"]>;
  title: Scalars["String"]["output"];
};

export enum YtTextPosition {
  Bottom = "BOTTOM",
  Top = "TOP",
}

export type YtTournament = {
  __typename?: "YTTournament";
  id: Scalars["String"]["output"];
  round: YtRound;
};

export type YtTournamentUpdateCard = {
  __typename?: "YTTournamentUpdateCard";
  props: YtCardProps;
  title: Scalars["String"]["output"];
};

export type YourTourCard =
  | YtAdInterstitialCard
  | YtArticleCard
  | YtCoverCard
  | YtHighlightCard
  | YtLeaderboardCard
  | YtNuggetCard
  | YtScorecardCard
  | YtSponsorActivationCard
  | YtTournamentUpdateCard;

export type YourTourNews = NewsArticle | Video;

export type YourTourStory = {
  __typename?: "YourTourStory";
  cards: Array<YourTourCard>;
  homeCard?: Maybe<YourTourCard>;
  id: Scalars["ID"]["output"];
};

// #endregion

// #region inferred types after PGA TOUR turned off GraphQL introspection

export type LeaderboardCompressedV3 = {
  __typename?: "LeaderboardCompressedV3";
  id: Scalars["ID"]["output"];
  payload: Scalars["String"]["output"];
};

export type LeaderboardRowV3 = InformationRow | PlayerRowV3;

export type LeaderboardScoringDataV3 = {
  __typename?: "LeaderboardScoringDataV3";
  backNine: Scalars["Boolean"]["output"];
  courseId: Scalars["String"]["output"];
  currentRound: Scalars["Int"]["output"];
  groupNumber: Scalars["Int"]["output"];
  hasStoryContent: Scalars["Boolean"]["output"];
  movementAmount: Scalars["String"]["output"];
  movementDirection: LeaderboardMovement;
  oddsOptionId?: Maybe<Scalars["String"]["output"]>;
  oddsSort?: Maybe<Scalars["Float"]["output"]>;
  oddsSwing?: Maybe<OddsSwing>;
  oddsToWin?: Maybe<Scalars["String"]["output"]>;
  official: Scalars["String"]["output"];
  officialSort: Scalars["Int"]["output"];
  playerState: PlayerState;
  position: Scalars["String"]["output"];
  projected: Scalars["String"]["output"];
  projectedSort: Scalars["Int"]["output"];
  rankLogoDark?: Maybe<Scalars["String"]["output"]>;
  rankLogoLight?: Maybe<Scalars["String"]["output"]>;
  rankingMovement: CupRankMovementDirection;
  rankingMovementAmount: Scalars["String"]["output"];
  rankingMovementAmountSort: Scalars["Int"]["output"];
  roundHeader: Scalars["String"]["output"];
  roundStatus: Scalars["String"]["output"];
  rounds: Array<Scalars["String"]["output"]>;
  score: Scalars["String"]["output"];
  scoreSort: Scalars["Int"]["output"];
  storyContentRound?: Maybe<Scalars["Int"]["output"]>;
  storyContentRounds?: Maybe<Array<Scalars["Int"]["output"]>>;
  teeTime: Scalars["AWSTimestamp"]["output"];
  thru: Scalars["String"]["output"];
  thruSort: Scalars["Int"]["output"];
  total: Scalars["String"]["output"];
  totalSort: Scalars["Int"]["output"];
  totalStrokes: Scalars["String"]["output"];
};

export type LeaderboardV3 = {
  __typename?: "LeaderboardV3";
  courses: Array<Course>;
  disabledOdds: Scalars["Boolean"]["output"];
  formatType: FormatType;
  hideSov: Scalars["Boolean"]["output"];
  id: Scalars["ID"]["output"];
  isPlayoffActive: Scalars["Boolean"]["output"];
  leaderboardFeatures?: Maybe<Array<FeatureItem>>;
  leaderboardRoundHeader: Scalars["String"]["output"];
  messages: Array<LeaderboardMessage>;
  players: Array<LeaderboardRowV3>;
  profileEnabled: Scalars["Boolean"]["output"];
  rounds: Array<LbRound>;
  scorecardEnabled: Scalars["Boolean"]["output"];
  standingsEnabled: Scalars["Boolean"]["output"];
  standingsHeader: Scalars["String"]["output"];
  subEvent: Scalars["Boolean"]["output"];
  timezone: Scalars["String"]["output"];
  tourcastURI?: Maybe<Scalars["String"]["output"]>;
  tourcastURL?: Maybe<Scalars["String"]["output"]>;
  tourcastURLWeb?: Maybe<Scalars["String"]["output"]>;
  tournamentId: Scalars["String"]["output"];
  tournamentStatus: TournamentStatus;
  winner?: Maybe<Winner>;
  winners?: Maybe<Array<Winner>>;
};

export type PlayerRowV3 = {
  __typename?: "PlayerRowV3";
  id: Scalars["ID"]["output"];
  leaderboardSortOrder: Scalars["Int"]["output"];
  player: Player;
  scoringData: LeaderboardScoringDataV3;
};

// #endregion

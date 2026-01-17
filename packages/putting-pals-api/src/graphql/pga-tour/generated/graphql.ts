import type { GraphQLClient, RequestOptions } from 'graphql-request';
import type { DocumentNode } from 'graphql';
type Maybe<T> = T | null;
type InputMaybe<T> = Maybe<T>;
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
/** All built-in and custom scalars, mapped to their actual values */
type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  AWSDateTime: { input: string; output: string; }
  AWSTimestamp: { input: number; output: number; }
};

type ApiArHole = {
  __typename: 'ARHole';
  holeNumber: Scalars['Int']['output'];
};

type ApiAbbreviations = {
  __typename: 'Abbreviations';
  description?: Maybe<Scalars['String']['output']>;
  key: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

type ApiAdConfig = {
  __typename: 'AdConfig';
  aon?: Maybe<ApiAdTagConfig>;
  aonSection?: Maybe<ApiAdTagConfig>;
  audio?: Maybe<ApiAdTagConfig>;
  comcastSection?: Maybe<ApiAdTagConfig>;
  comcastTop10?: Maybe<ApiAdTagConfig>;
  config: ApiGlobalAdConfig;
  course?: Maybe<ApiAdTagConfig>;
  cupLeaderboardGroup?: Maybe<ApiAdTagConfig>;
  cupLeaderboardSingles?: Maybe<ApiAdTagConfig>;
  cupTeeTimesGroup?: Maybe<ApiAdTagConfig>;
  cupTeeTimesSingles?: Maybe<ApiAdTagConfig>;
  dpwtRankings?: Maybe<ApiAdTagConfig>;
  fantasy?: Maybe<ApiAdTagConfig>;
  fedexCup?: Maybe<ApiAdTagConfig>;
  fedexcupSection?: Maybe<ApiAdTagConfig>;
  fortinetCup?: Maybe<ApiAdTagConfig>;
  fortinetcupSection?: Maybe<ApiAdTagConfig>;
  golfBet?: Maybe<ApiAdTagConfig>;
  groupScorecard?: Maybe<ApiAdTagConfig>;
  groupStageLeaderboard?: Maybe<ApiAdTagConfig>;
  groupStageStandings?: Maybe<ApiAdTagConfig>;
  groupstageStandings?: Maybe<ApiAdTagConfig>;
  homepage?: Maybe<ApiAdTagConfig>;
  knockoutLeaderboard?: Maybe<ApiAdTagConfig>;
  leaderboard?: Maybe<ApiAdTagConfig>;
  leaderboardCutline?: Maybe<ApiAdTagConfig>;
  leaderboardFavorites?: Maybe<ApiAdTagConfig>;
  leaderboardHoleByHole?: Maybe<ApiAdTagConfig>;
  leaderboardLandscape?: Maybe<ApiAdTagConfig>;
  leaderboardLandscapeHoleByHole?: Maybe<ApiAdTagConfig>;
  leaderboardLandscapeOdds?: Maybe<ApiAdTagConfig>;
  leaderboardLandscapeProbability?: Maybe<ApiAdTagConfig>;
  leaderboardLandscapeShotDetails?: Maybe<ApiAdTagConfig>;
  leaderboardLandscapeStrokesGained?: Maybe<ApiAdTagConfig>;
  leaderboardOdds?: Maybe<ApiAdTagConfig>;
  leaderboardProbability?: Maybe<ApiAdTagConfig>;
  leaderboardRow50?: Maybe<ApiAdTagConfig>;
  leaderboardShotDetails?: Maybe<ApiAdTagConfig>;
  leaderboardStrokesGained?: Maybe<ApiAdTagConfig>;
  liveLeaderboard?: Maybe<ApiAdTagConfig>;
  mobileHeroStory?: Maybe<ApiAdTagConfig>;
  mobilePlayerStory?: Maybe<ApiAdTagConfig>;
  mobileTopicStory?: Maybe<ApiAdTagConfig>;
  mobileYourTourHomeStory?: Maybe<ApiAdTagConfig>;
  more?: Maybe<ApiAdTagConfig>;
  netflix?: Maybe<ApiAdTagConfig>;
  news?: Maybe<ApiAdTagConfig>;
  newsArticlemidcontent?: Maybe<ApiAdTagConfig>;
  newsArticles?: Maybe<ApiAdTagConfig>;
  odds?: Maybe<ApiAdTagConfig>;
  payneStewartaward?: Maybe<ApiAdTagConfig>;
  playerProfile?: Maybe<ApiAdTagConfig>;
  playerProfileBio?: Maybe<ApiAdTagConfig>;
  playerProfileEquipment?: Maybe<ApiAdTagConfig>;
  playerProfileResults?: Maybe<ApiAdTagConfig>;
  playerProfileStats?: Maybe<ApiAdTagConfig>;
  playerScorecard?: Maybe<ApiAdTagConfig>;
  players?: Maybe<ApiAdTagConfig>;
  playoffScorecard?: Maybe<ApiAdTagConfig>;
  rsm?: Maybe<ApiAdTagConfig>;
  rsmSection?: Maybe<ApiAdTagConfig>;
  schedule?: Maybe<ApiAdTagConfig>;
  schwabCup?: Maybe<ApiAdTagConfig>;
  schwabcupSection?: Maybe<ApiAdTagConfig>;
  scorecard?: Maybe<ApiAdTagConfig>;
  scorecardOdds?: Maybe<ApiAdTagConfig>;
  sidebarTicker?: Maybe<ApiAdTagConfig>;
  standings?: Maybe<ApiAdTagConfig>;
  stats?: Maybe<ApiAdTagConfig>;
  statsSection?: Maybe<ApiAdTagConfig>;
  studios?: Maybe<ApiAdTagConfig>;
  teeTimes?: Maybe<ApiAdTagConfig>;
  the25Section?: Maybe<ApiAdTagConfig>;
  the25pointsList?: Maybe<ApiAdTagConfig>;
  tickets?: Maybe<ApiAdTagConfig>;
  totalPlayCup?: Maybe<ApiAdTagConfig>;
  totalplaycupSection?: Maybe<ApiAdTagConfig>;
  tourcast?: Maybe<ApiAdTagConfig>;
  tournament?: Maybe<ApiAdTagConfig>;
  tournamentSection?: Maybe<ApiAdTagConfig>;
  training?: Maybe<ApiAdTagConfig>;
  university?: Maybe<ApiAdTagConfig>;
  watch?: Maybe<ApiAdTagConfig>;
  webPlayerStories?: Maybe<ApiAdTagConfig>;
  webTopicStories?: Maybe<ApiAdTagConfig>;
  yahooLeaderboard?: Maybe<ApiAdTagConfig>;
};

type ApiAdSize = {
  __typename: 'AdSize';
  height: Scalars['Int']['output'];
  width: Scalars['Int']['output'];
};

type ApiAdTagConfig = {
  __typename: 'AdTagConfig';
  actRefresh?: Maybe<Scalars['Boolean']['output']>;
  adTest?: Maybe<Scalars['String']['output']>;
  environment?: Maybe<Scalars['String']['output']>;
  injectAds?: Maybe<Scalars['Boolean']['output']>;
  refresh?: Maybe<Scalars['Int']['output']>;
  rows: Array<ApiAdTagRowConfig>;
  s1: Scalars['String']['output'];
  s2?: Maybe<Scalars['String']['output']>;
  timedRefresh?: Maybe<Scalars['Boolean']['output']>;
  uniqueId: Scalars['String']['output'];
};

type ApiAdTagRowConfig = {
  __typename: 'AdTagRowConfig';
  container?: Maybe<ApiAdSize>;
  containerLarge?: Maybe<ApiAdSize>;
  containerMedium?: Maybe<ApiAdSize>;
  containerSmall?: Maybe<ApiAdSize>;
  fluid?: Maybe<Scalars['Boolean']['output']>;
  index: Scalars['Int']['output'];
  playerSponsorship?: Maybe<Scalars['Boolean']['output']>;
  pos: Scalars['String']['output'];
  sizes?: Maybe<Array<ApiAdSize>>;
};

type ApiAllTimeRecordCategories = {
  __typename: 'AllTimeRecordCategories';
  categories: Array<ApiAllTimeRecordCategory>;
  tourCode: ApiTourCode;
};

type ApiAllTimeRecordCategory = {
  __typename: 'AllTimeRecordCategory';
  categoryId: Scalars['String']['output'];
  displayText: Scalars['String']['output'];
  subCategories: Array<ApiAllTimeRecordSubCategory>;
};

type ApiAllTimeRecordStat = {
  __typename: 'AllTimeRecordStat';
  categoryId: Scalars['String']['output'];
  categoryName: Scalars['String']['output'];
  isPlayerBased: Scalars['Boolean']['output'];
  primaryColumnIndex?: Maybe<Scalars['Int']['output']>;
  recordId: Scalars['String']['output'];
  rows?: Maybe<Array<ApiAllTimeRecordStatRow>>;
  statHeaders: Array<Scalars['String']['output']>;
  subCategoryName: Scalars['String']['output'];
  /**   1-17 */
  title: Scalars['String']['output'];
};

type ApiAllTimeRecordStatRow = {
  __typename: 'AllTimeRecordStatRow';
  playerId?: Maybe<Scalars['String']['output']>;
  values: Array<Scalars['String']['output']>;
};

type ApiAllTimeRecordStatistic = {
  __typename: 'AllTimeRecordStatistic';
  displayText: Scalars['String']['output'];
  recordId: Scalars['String']['output'];
};

type ApiAllTimeRecordSubCategory = {
  __typename: 'AllTimeRecordSubCategory';
  displayText: Scalars['String']['output'];
  statistics: Array<ApiAllTimeRecordStatistic>;
};

type ApiAon = {
  __typename: 'Aon';
  description: Scalars['String']['output'];
  leaders: Array<ApiAonPlayer>;
  logo: Scalars['String']['output'];
  pastTournaments: Array<ApiAonHole>;
  players: Array<ApiAonPlayer>;
  title: Scalars['String']['output'];
  upcomingTournaments: Array<ApiAonHole>;
};

type ApiAonHole = {
  __typename: 'AonHole';
  courseName: Scalars['String']['output'];
  dateText: Scalars['String']['output'];
  holeImage: Scalars['String']['output'];
  holeNum: Scalars['Int']['output'];
  par: Scalars['Int']['output'];
  tournamentId: Scalars['String']['output'];
  tournamentName: Scalars['String']['output'];
  yardage: Scalars['Int']['output'];
};

type ApiAonPlayer = {
  __typename: 'AonPlayer';
  countryCode: Scalars['String']['output'];
  displayName: Scalars['String']['output'];
  playerId: Scalars['ID']['output'];
  position: Scalars['String']['output'];
  roundsPlayed: Scalars['String']['output'];
  roundsToGo: Scalars['String']['output'];
  score: Scalars['String']['output'];
};

type ApiArticleFormType =
  | 'External'
  | 'Standard';

type ApiArticleOddsMarkets = {
  __typename: 'ArticleOddsMarkets';
  class: Scalars['String']['output'];
  market: ApiHistoricalOddsId;
};

type ApiArticleOddsMarketsInput = {
  class: Scalars['String']['input'];
  market: ApiHistoricalOddsId;
};

type ApiArticleOddsPlayer = {
  __typename: 'ArticleOddsPlayer';
  playerId: Scalars['String']['output'];
  playerName?: Maybe<Scalars['String']['output']>;
};

type ApiArticleOddsPlayerInput = {
  playerId: Scalars['String']['input'];
  playerName?: InputMaybe<Scalars['String']['input']>;
};

type ApiArticleOddsTableQuery = {
  __typename: 'ArticleOddsTableQuery';
  markets?: Maybe<Array<ApiArticleOddsMarkets>>;
  players?: Maybe<Array<ApiArticleOddsPlayer>>;
  timeStamp?: Maybe<Scalars['String']['output']>;
  tournamentId: Scalars['String']['output'];
  tournamentName: Scalars['String']['output'];
};

type ApiArticlePlayer = {
  __typename: 'ArticlePlayer';
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

type ApiArticleSponsor =
  | 'GOLFWRX';

type ApiAudio = {
  __typename: 'Audio';
  id: Scalars['ID']['output'];
  imageUrl: Scalars['String']['output'];
  latestPubDate: Scalars['AWSTimestamp']['output'];
  numEpisodes: Scalars['Int']['output'];
  rssFeed: Scalars['String']['output'];
  shareUrl: Scalars['String']['output'];
  streamUrls: ApiStreamUrls;
  summary: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

type ApiAudioStream = {
  __typename: 'AudioStream';
  id: Scalars['ID']['output'];
  live: Scalars['Boolean']['output'];
  posterImage: Scalars['String']['output'];
  shareUrl: Scalars['String']['output'];
  streamTitle: Scalars['String']['output'];
  streamUrl: Scalars['String']['output'];
};

type ApiAugmentedRealityConfig = {
  __typename: 'AugmentedRealityConfig';
  holes: Array<ApiArHole>;
};

type ApiAvailableMarket = {
  __typename: 'AvailableMarket';
  market: Scalars['String']['output'];
  oddsOptions: Array<ApiOddsOption>;
  subMarket?: Maybe<Scalars['String']['output']>;
};

type ApiBallPath = {
  __typename: 'BallPath';
  path: Array<ApiBallPathCoordinate>;
};

type ApiBallPathCoordinate = {
  __typename: 'BallPathCoordinate';
  secondsSinceStart: Scalars['Float']['output'];
  x: Scalars['Float']['output'];
  y: Scalars['Float']['output'];
  z: Scalars['Float']['output'];
};

/**   Odds Options Types */
type ApiBaseOddsOption = {
  entity: ApiOddsEntity;
  odds: ApiOddsValues;
};

type ApiBioRank = {
  __typename: 'BioRank';
  rank: Scalars['Int']['output'];
  statName: Scalars['String']['output'];
};

type ApiBroadcastAudioStream = {
  __typename: 'BroadcastAudioStream';
  channelTitle: Scalars['String']['output'];
  endTime: Scalars['AWSTimestamp']['output'];
  id: Scalars['String']['output'];
  liveStatus: ApiLiveStatus;
  network: ApiBroadcastNetwork;
  roundDisplay: Scalars['String']['output'];
  roundNumber: Scalars['Int']['output'];
  startTime: Scalars['AWSTimestamp']['output'];
  streamTitle: Scalars['String']['output'];
};

type ApiBroadcastCoverage = {
  __typename: 'BroadcastCoverage';
  countryCode: Scalars['String']['output'];
  coverageType: Array<ApiBroadcastCoverageType>;
  id: Scalars['String']['output'];
  livePillLabel: Scalars['String']['output'];
  tournamentName: Scalars['String']['output'];
};

type ApiBroadcastCoverageCarousel = {
  __typename: 'BroadcastCoverageCarousel';
  carousel: Array<ApiBroadcastCoverageVideo>;
};

type ApiBroadcastCoverageItem = ApiBroadcastAudioStream | ApiBroadcastFeaturedGroup | ApiBroadcastFeaturedHole | ApiBroadcastFullTelecast;

type ApiBroadcastCoverageType = ApiBroadcastAudioStream | ApiBroadcastCoverageCarousel | ApiBroadcastFeaturedGroup | ApiBroadcastFeaturedHole | ApiBroadcastFullTelecast;

type ApiBroadcastCoverageVideo = ApiBroadcastFeaturedGroup | ApiBroadcastFeaturedHole | ApiBroadcastFullTelecast;

type ApiBroadcastFeaturedGroup = {
  __typename: 'BroadcastFeaturedGroup';
  channelTitle: Scalars['String']['output'];
  courseId?: Maybe<Scalars['String']['output']>;
  endTime: Scalars['AWSTimestamp']['output'];
  groups: Array<ApiBroadcastGroup>;
  id: Scalars['String']['output'];
  liveStatus: ApiLiveStatus;
  network: ApiBroadcastNetwork;
  promoImage?: Maybe<Scalars['String']['output']>;
  promoImages: Array<Scalars['String']['output']>;
  roundDisplay: Scalars['String']['output'];
  roundNumber: Scalars['Int']['output'];
  startTime: Scalars['AWSTimestamp']['output'];
  streamTitle: Scalars['String']['output'];
};

type ApiBroadcastFeaturedHole = {
  __typename: 'BroadcastFeaturedHole';
  channelTitle: Scalars['String']['output'];
  courseId?: Maybe<Scalars['String']['output']>;
  endTime: Scalars['AWSTimestamp']['output'];
  featuredHoles: Array<Scalars['Int']['output']>;
  id: Scalars['String']['output'];
  liveStatus: ApiLiveStatus;
  network: ApiBroadcastNetwork;
  promoImage?: Maybe<Scalars['String']['output']>;
  promoImages: Array<Scalars['String']['output']>;
  roundDisplay: Scalars['String']['output'];
  roundNumber: Scalars['Int']['output'];
  startTime: Scalars['AWSTimestamp']['output'];
  streamTitle: Scalars['String']['output'];
};

type ApiBroadcastFullTelecast = {
  __typename: 'BroadcastFullTelecast';
  channelTitle: Scalars['String']['output'];
  endTime: Scalars['AWSTimestamp']['output'];
  id: Scalars['String']['output'];
  liveStatus: ApiLiveStatus;
  network: ApiBroadcastNetwork;
  promoImage?: Maybe<Scalars['String']['output']>;
  promoImages: Array<Scalars['String']['output']>;
  roundDisplay: Scalars['String']['output'];
  roundNumber: Scalars['Int']['output'];
  startTime: Scalars['AWSTimestamp']['output'];
  streamTitle: Scalars['String']['output'];
};

type ApiBroadcastGroup = {
  __typename: 'BroadcastGroup';
  extendedCoverage?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['String']['output'];
  liveStatus: ApiLiveStatus;
  playerLastNames?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

type ApiBroadcastNetwork = {
  __typename: 'BroadcastNetwork';
  androidLink: Scalars['String']['output'];
  androidStreamUrl?: Maybe<Scalars['String']['output']>;
  appleAppStore: Scalars['String']['output'];
  asnw?: Maybe<Scalars['String']['output']>;
  backgroundColor?: Maybe<Scalars['String']['output']>;
  backgroundColorDark?: Maybe<Scalars['String']['output']>;
  caid?: Maybe<Scalars['String']['output']>;
  channelId?: Maybe<Scalars['String']['output']>;
  daiAssetKey?: Maybe<Scalars['String']['output']>;
  daiPreRollUrl?: Maybe<Scalars['String']['output']>;
  daiStreamActivityId?: Maybe<Scalars['String']['output']>;
  descriptionUrl?: Maybe<Scalars['String']['output']>;
  flag?: Maybe<Scalars['String']['output']>;
  fwCoppa?: Maybe<Scalars['String']['output']>;
  fwHReferer?: Maybe<Scalars['String']['output']>;
  fwNielsenAppId?: Maybe<Scalars['String']['output']>;
  googlePlayStore: Scalars['String']['output'];
  iOSLink: Scalars['String']['output'];
  id: Scalars['String']['output'];
  iosStreamUrl?: Maybe<Scalars['String']['output']>;
  liveAssetId?: Maybe<Scalars['String']['output']>;
  metr?: Maybe<Scalars['String']['output']>;
  mode?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use networkLogoAsset */
  networkLogo?: Maybe<Scalars['String']['output']>;
  networkLogoAsset?: Maybe<ApiImageAsset>;
  /** @deprecated Use networkLogoDarkAsset */
  networkLogoDark?: Maybe<Scalars['String']['output']>;
  networkLogoDarkAsset?: Maybe<ApiImageAsset>;
  networkName: Scalars['String']['output'];
  nw?: Maybe<Scalars['String']['output']>;
  priorityNum?: Maybe<Scalars['Int']['output']>;
  prof?: Maybe<Scalars['String']['output']>;
  resp?: Maybe<Scalars['String']['output']>;
  simulcast?: Maybe<Scalars['Boolean']['output']>;
  simulcastUrl?: Maybe<Scalars['String']['output']>;
  ssnw?: Maybe<Scalars['String']['output']>;
  streamUrl?: Maybe<Scalars['String']['output']>;
  sz?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  vdty?: Maybe<Scalars['String']['output']>;
  vrdu?: Maybe<Scalars['String']['output']>;
};

type ApiBroadcastNetworks = {
  __typename: 'BroadcastNetworks';
  networks: Array<ApiBroadcastNetwork>;
};

type ApiBroadcastTableFragment = {
  __typename: 'BroadcastTableFragment';
  path: Scalars['String']['output'];
  webviewUrl: Scalars['String']['output'];
};

type ApiBubblePill = {
  __typename: 'BubblePill';
  iconDark: ApiImageAsset;
  iconLight: ApiImageAsset;
  pillText: Scalars['String']['output'];
};

type ApiBubbleType =
  | 'PLAYOFFS'
  | 'SIGNATURE_EVENTS';

type ApiBubbleWatch = {
  __typename: 'BubbleWatch';
  bubbleId: Scalars['ID']['output'];
  bubbleType: ApiBubbleType;
  items: Array<ApiBubbleWatchItem>;
};

type ApiBubbleWatchItem = {
  __typename: 'BubbleWatchItem';
  info?: Maybe<Scalars['String']['output']>;
  infoDesc?: Maybe<Scalars['String']['output']>;
  standings: ApiTourCupRankingEvent;
};

type ApiCallToAction = {
  __typename: 'CallToAction';
  color?: Maybe<Scalars['String']['output']>;
  fontColor?: Maybe<Scalars['String']['output']>;
  link: Scalars['String']['output'];
  target?: Maybe<Scalars['String']['output']>;
  text: Scalars['String']['output'];
  webViewLink?: Maybe<Scalars['String']['output']>;
};

type ApiCategory = {
  __typename: 'Category';
  displayName: Scalars['String']['output'];
  franchises: Array<ApiFranchise>;
  queryValue: Scalars['String']['output'];
};

type ApiCategoryPlayerStat = {
  __typename: 'CategoryPlayerStat';
  color: ApiStatColor;
  statName: Scalars['String']['output'];
  statValue: Scalars['String']['output'];
};

type ApiCategoryStat = {
  __typename: 'CategoryStat';
  displaySeason: Scalars['String']['output'];
  lastProcessed: Scalars['String']['output'];
  players: Array<ApiCategoryStatPlayer>;
  statDescription: Scalars['String']['output'];
  statHeaders: Array<Scalars['String']['output']>;
  statTitle: Scalars['String']['output'];
  tourAvg?: Maybe<Scalars['String']['output']>;
  year: Scalars['Int']['output'];
};

type ApiCategoryStatPlayer = {
  __typename: 'CategoryStatPlayer';
  playerId: Scalars['String']['output'];
  playerName: Scalars['String']['output'];
  rank: Scalars['Int']['output'];
  rankChangeTendency?: Maybe<ApiStatRankMovement>;
  rankDiff: Scalars['String']['output'];
  stats: Array<ApiCategoryPlayerStat>;
};

type ApiCategoryStatType =
  | 'EVENT'
  | 'YTD';

type ApiCerosEmbedPlugin = {
  __typename: 'CerosEmbedPlugin';
  aspectRatio: Scalars['Float']['output'];
  id: Scalars['ID']['output'];
  mobileAspectRatio: Scalars['Float']['output'];
  padding: Scalars['Float']['output'];
  title: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

type ApiContentCarousel = ApiImage | ApiVideo;

type ApiContentFragment = {
  __typename: 'ContentFragment';
  fragments: Array<ApiContentFragments>;
  pageMetadata: ApiPageMetadata;
  totalLength: Scalars['Int']['output'];
};

type ApiContentFragmentTab = {
  __typename: 'ContentFragmentTab';
  contentType: ApiContentType;
  label?: Maybe<Scalars['String']['output']>;
  path: Scalars['String']['output'];
  webview?: Maybe<Scalars['String']['output']>;
};

type ApiContentFragmentTabs = {
  __typename: 'ContentFragmentTabs';
  pageHeader: Scalars['String']['output'];
  partnerShipAssets?: Maybe<Array<Scalars['String']['output']>>;
  path: Scalars['String']['output'];
  tabs: Array<ApiContentFragmentTab>;
};

type ApiContentFragmentType = {
  __typename: 'ContentFragmentType';
  contentType: ApiContentType;
  path: Scalars['String']['output'];
};

type ApiContentFragments = ApiDropdownFragment | ApiHomepageLead | ApiHomepageNews | ApiHomepageProgramStanding | ApiKopHeader | ApiKopSignUp | ApiKopStandingsList | ApiKopSubheader | ApiKopUpcomingTournament | ApiKopZigZag | ApiMediaGallery | ApiOddsToWinTracker | ApiTglBoxScoreFragment | ApiThreeUpPhoto | ApiThreeUpStats | ApiTwoColumn | ApiVideoHero;

type ApiContentFragmentsCompressed = {
  __typename: 'ContentFragmentsCompressed';
  limit?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  path?: Maybe<Scalars['String']['output']>;
  payload: Scalars['String']['output'];
  tourCode: ApiTourCode;
};

type ApiContentStat = {
  __typename: 'ContentStat';
  statId: Scalars['String']['output'];
  statName: Scalars['String']['output'];
};

type ApiContentStory = {
  __typename: 'ContentStory';
  desktopLatestNewsIndex?: Maybe<Scalars['Int']['output']>;
  mobileLatestNewsIndex?: Maybe<Scalars['Int']['output']>;
  path: Scalars['String']['output'];
  sectionHeader?: Maybe<Scalars['String']['output']>;
  storyType?: Maybe<ApiStory_Type>;
  topicLabels?: Maybe<Array<Scalars['String']['output']>>;
};

type ApiContentTopics = {
  __typename: 'ContentTopics';
  displayValue?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

type ApiContentType =
  | 'CONTENT_FRAGMENTS'
  | 'CONTENT_TABS'
  | 'GENERIC_CONTENT'
  | 'NEWS_ARTICLE'
  | 'RYDER_CUP_CONTENT_FRAGMENTS'
  | 'RYDER_CUP_CONTENT_TABS'
  | 'RYDER_CUP_GENERIC_CONTENT'
  | 'RYDER_CUP_NEWS_ARTICLE';

type ApiContentVideoCarousel = {
  __typename: 'ContentVideoCarousel';
  bottomCta?: Maybe<ApiCallToAction>;
  sectionTitle?: Maybe<Scalars['String']['output']>;
  topCta?: Maybe<ApiCallToAction>;
  videos?: Maybe<Array<ApiVideo>>;
};

type ApiCourse = {
  __typename: 'Course';
  courseCode: Scalars['String']['output'];
  courseName: Scalars['String']['output'];
  enabled?: Maybe<Scalars['Boolean']['output']>;
  features?: Maybe<Array<ApiTeeTimesFeature>>;
  hostCourse: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  scoringLevel: ApiScoringLevel;
};

type ApiCourseDetailRowValue = {
  __typename: 'CourseDetailRowValue';
  tendency?: Maybe<ApiScoringTendency>;
  value: Scalars['String']['output'];
};

type ApiCourseFilter = {
  __typename: 'CourseFilter';
  courseId: Scalars['Int']['output'];
  courseName: Scalars['String']['output'];
};

type ApiCourseHoleHeader = {
  __typename: 'CourseHoleHeader';
  courseId: Scalars['ID']['output'];
  holeHeaders: Array<ApiHoleHeaderV2>;
};

type ApiCourseHoleStats = {
  __typename: 'CourseHoleStats';
  averagePaceOfPlay?: Maybe<Scalars['String']['output']>;
  birdies?: Maybe<Scalars['Int']['output']>;
  bogeys?: Maybe<Scalars['Int']['output']>;
  courseHoleNum: Scalars['Int']['output'];
  doubleBogey?: Maybe<Scalars['Int']['output']>;
  eagles?: Maybe<Scalars['Int']['output']>;
  holeImage: Scalars['String']['output'];
  holePickle?: Maybe<ApiHolePickle>;
  /** @deprecated Use holePickleGreenLeftToRightAsset */
  holePickleGreenLeftToRight: Scalars['String']['output'];
  holePickleGreenLeftToRightAsset: ApiImageAsset;
  /** @deprecated Use broadcast api indication instead of this. */
  live: Scalars['Boolean']['output'];
  parValue: Scalars['String']['output'];
  pars?: Maybe<Scalars['Int']['output']>;
  pinGreen: ApiPointOfInterestCoords;
  rank?: Maybe<Scalars['Int']['output']>;
  scoringAverage: Scalars['String']['output'];
  scoringAverageDiff: Scalars['String']['output'];
  scoringDiffTendency: ApiScoringTendency;
  yards: Scalars['Int']['output'];
};

type ApiCourseInfo = {
  __typename: 'CourseInfo';
  bottomCta?: Maybe<ApiCallToAction>;
  coursePhotos?: Maybe<Array<Scalars['String']['output']>>;
  cta1?: Maybe<ApiCallToAction>;
  cta2?: Maybe<ApiCallToAction>;
  subhead?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  topCta?: Maybe<ApiCallToAction>;
};

type ApiCourseOverviewInfo = {
  __typename: 'CourseOverviewInfo';
  cutsMade: Scalars['String']['output'];
  cutsMissed: Scalars['String']['output'];
  disqualified: Scalars['String']['output'];
  events: Scalars['String']['output'];
  money: Scalars['String']['output'];
  runnerUp: Scalars['String']['output'];
  second: Scalars['String']['output'];
  third: Scalars['String']['output'];
  top10: Scalars['String']['output'];
  top25: Scalars['String']['output'];
  wins: Scalars['String']['output'];
  withdrew: Scalars['String']['output'];
};

type ApiCourseOverviewItem = {
  __typename: 'CourseOverviewItem';
  details: Array<ApiCourseOverviewItemDetails>;
  displayName: Scalars['String']['output'];
  image: Scalars['String']['output'];
  rank: Scalars['Int']['output'];
};

type ApiCourseOverviewItemDetails = {
  __typename: 'CourseOverviewItemDetails';
  label: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

type ApiCoursePills = {
  __typename: 'CoursePills';
  courseId: Scalars['String']['output'];
  courseName: Scalars['String']['output'];
};

type ApiCourseResultsTournament = {
  __typename: 'CourseResultsTournament';
  points: Scalars['String']['output'];
  position: Scalars['String']['output'];
  roundScores: Array<ApiRoundScoreItem>;
  season: Scalars['String']['output'];
  toPar: Scalars['String']['output'];
  total: Scalars['String']['output'];
  tourcastURI?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  tourcastURL?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  tourcastURLWeb?: Maybe<Scalars['String']['output']>;
  tournamentId: Scalars['String']['output'];
  tournamentName: Scalars['String']['output'];
  winnings: Scalars['String']['output'];
  year: Scalars['Int']['output'];
};

type ApiCourseRound = {
  __typename: 'CourseRound';
  enablePaceOfPlay?: Maybe<Scalars['Boolean']['output']>;
  holeStats: Array<ApiHoleStat>;
  live: Scalars['Boolean']['output'];
  paceOfPlayDescription?: Maybe<Scalars['String']['output']>;
  paceOfPlayLabelTitle?: Maybe<Scalars['String']['output']>;
  roundHeader: Scalars['String']['output'];
  roundNum?: Maybe<Scalars['Int']['output']>;
};

type ApiCourseStat = {
  __typename: 'CourseStat';
  courseCode: Scalars['String']['output'];
  courseId: Scalars['String']['output'];
  courseImage: Scalars['String']['output'];
  courseName: Scalars['String']['output'];
  courseOverview: ApiTournamentCourse;
  holeDetailsAvailability: ApiHoleDetailsAvailability;
  hostCourse: Scalars['Boolean']['output'];
  par: Scalars['Int']['output'];
  roundHoleStats: Array<ApiCourseRound>;
  roundPills?: Maybe<Array<Scalars['String']['output']>>;
  shotlinkLogo?: Maybe<Scalars['String']['output']>;
  tournamentId: Scalars['ID']['output'];
  yardage: Scalars['String']['output'];
};

type ApiCourseStatsCategory = {
  __typename: 'CourseStatsCategory';
  detailId: ApiCourseStatsId;
  header: Scalars['String']['output'];
  items: Array<ApiCourseOverviewItem>;
};

type ApiCourseStatsDetails = {
  __typename: 'CourseStatsDetails';
  displayName: Scalars['String']['output'];
  displayYear: Scalars['String']['output'];
  headers: Array<Scalars['String']['output']>;
  round: ApiToughestRound;
  roundPills: Array<ApiToughestCourseRoundPills>;
  rows: Array<ApiCourseStatsDetailsRow>;
  seasons: Array<ApiStatYearPills>;
  shareURL?: Maybe<Scalars['String']['output']>;
  tableName: Scalars['String']['output'];
  tourCode: ApiTourCode;
  year: Scalars['Int']['output'];
};

type ApiCourseStatsDetailsRow = {
  __typename: 'CourseStatsDetailsRow';
  displayName: Scalars['String']['output'];
  rank: Scalars['Int']['output'];
  tournamentId: Scalars['String']['output'];
  tournamentName: Scalars['String']['output'];
  values: Array<ApiCourseDetailRowValue>;
};

type ApiCourseStatsId =
  | 'TOUGHEST_COURSE'
  | 'TOUGHEST_HOLES';

type ApiCourseStatsOverview = {
  __typename: 'CourseStatsOverview';
  categories: Array<ApiCourseStatsCategory>;
  tourCode: ApiTourCode;
  year: Scalars['Int']['output'];
};

type ApiCupLeaderboardMatch = {
  __typename: 'CupLeaderboardMatch';
  displayScore: Scalars['String']['output'];
  euMatchWin?: Maybe<Scalars['Float']['output']>;
  holeScores?: Maybe<Array<ApiCupLeaderboardMatchHoles>>;
  location: Scalars['String']['output'];
  locationDescription?: Maybe<Scalars['String']['output']>;
  locationSort: Scalars['Int']['output'];
  matchDraw?: Maybe<Scalars['Float']['output']>;
  matchId: Scalars['ID']['output'];
  matchStatus: Scalars['String']['output'];
  matchStatusColor: Scalars['String']['output'];
  matchStatusFlag?: Maybe<Scalars['String']['output']>;
  matchTitle: Scalars['String']['output'];
  startingTee: Scalars['String']['output'];
  teams: Array<ApiCupLeaderboardMatchTeam>;
  teeTime: Scalars['AWSTimestamp']['output'];
  tourcastURI?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  tourcastURL?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  tourcastURLWeb?: Maybe<Scalars['String']['output']>;
  usMatchWin?: Maybe<Scalars['Float']['output']>;
};

type ApiCupLeaderboardMatchHoles = {
  __typename: 'CupLeaderboardMatchHoles';
  holeNumber: Scalars['String']['output'];
  holeNumberColor: Scalars['String']['output'];
  holeOutlineColor?: Maybe<Scalars['String']['output']>;
  holePlayedStatus: ApiHolePlayedStatus;
};

type ApiCupLeaderboardMatchPlayer = {
  __typename: 'CupLeaderboardMatchPlayer';
  color?: Maybe<Scalars['String']['output']>;
  displayName: Scalars['String']['output'];
  firstName?: Maybe<Scalars['String']['output']>;
  hideHeadshot?: Maybe<Scalars['Boolean']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  playerId: Scalars['ID']['output'];
  results?: Maybe<ApiCupLeaderboardMatchPlayerResults>;
  shortName: Scalars['String']['output'];
};

type ApiCupLeaderboardMatchPlayerResults = {
  __typename: 'CupLeaderboardMatchPlayerResults';
  losses: Scalars['String']['output'];
  ties: Scalars['String']['output'];
  total: Scalars['String']['output'];
  wins: Scalars['String']['output'];
};

type ApiCupLeaderboardMatchTeam = {
  __typename: 'CupLeaderboardMatchTeam';
  flagSurroundColor?: Maybe<Scalars['String']['output']>;
  flagSurroundColorDark?: Maybe<Scalars['String']['output']>;
  players: Array<ApiCupLeaderboardMatchPlayer>;
  status: ApiCupLeaderboardTeamStatus;
  teamColor: Scalars['String']['output'];
  teamFlag: Scalars['String']['output'];
  teamId: Scalars['ID']['output'];
  teamName: Scalars['String']['output'];
  teamScore?: Maybe<Scalars['String']['output']>;
  teamStoryContentInfo?: Maybe<Array<ApiTeamStoryContentInfo>>;
  textColor?: Maybe<Scalars['String']['output']>;
};

type ApiCupLeaderboardTeamStatus =
  | 'BEHIND'
  | 'LEADS'
  | 'TIED'
  | 'UNKNOWN'
  | 'WINS';

type ApiCupLiveActivitySponsor = {
  __typename: 'CupLiveActivitySponsor';
  sponsorLogo?: Maybe<Scalars['String']['output']>;
  sponsorText?: Maybe<Scalars['String']['output']>;
};

type ApiCupMatchesCompleteData = {
  __typename: 'CupMatchesCompleteData';
  completedMatches: Scalars['Int']['output'];
  totalMatches: Scalars['Int']['output'];
};

type ApiCupOverviewDisplayType =
  | 'POINTS_ONLY'
  | 'PROGRESS';

type ApiCupPastResults = {
  __typename: 'CupPastResults';
  permId: Scalars['ID']['output'];
  years: Array<ApiCupPastResultsYear>;
};

type ApiCupPastResultsTeam = {
  __typename: 'CupPastResultsTeam';
  badgeText?: Maybe<Scalars['String']['output']>;
  color: Scalars['String']['output'];
  score: Scalars['String']['output'];
  teamId: Scalars['ID']['output'];
  teamLogo: Scalars['String']['output'];
  teamName: Scalars['String']['output'];
};

type ApiCupPastResultsYear = {
  __typename: 'CupPastResultsYear';
  displayYear: Scalars['String']['output'];
  teams: Array<ApiCupPastResultsTeam>;
  year: Scalars['Int']['output'];
};

type ApiCupRankMovementDirection =
  | 'CONSTANT'
  | 'DOWN'
  | 'UNKNOWN'
  | 'UP';

type ApiCupRankingPlayer = {
  __typename: 'CupRankingPlayer';
  id: Scalars['String']['output'];
  movement: Scalars['String']['output'];
  movementDirection: ApiCupRankMovementDirection;
  name: Scalars['String']['output'];
  playerCountry: Scalars['String']['output'];
  position: Scalars['String']['output'];
  rankLogoDark?: Maybe<Scalars['String']['output']>;
  rankLogoLight?: Maybe<Scalars['String']['output']>;
  total: Scalars['String']['output'];
  totals: Array<ApiCupRankingTotal>;
  tourBound?: Maybe<Scalars['Boolean']['output']>;
  winner?: Maybe<Scalars['Boolean']['output']>;
};

type ApiCupRankingPlayerInfoRow = {
  __typename: 'CupRankingPlayerInfoRow';
  image?: Maybe<Scalars['String']['output']>;
  imageDark?: Maybe<Scalars['String']['output']>;
  text: Scalars['String']['output'];
};

type ApiCupRankingPlayerWrapper = ApiCupRankingPlayer | ApiCupRankingPlayerInfoRow;

type ApiCupRankingTotal = {
  __typename: 'CupRankingTotal';
  display: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

type ApiCupRound = {
  __typename: 'CupRound';
  roundDisplayName: Scalars['String']['output'];
  roundNum: Scalars['Int']['output'];
};

type ApiCupRoundFormat =
  | 'ALTERNATE_SHOT'
  | 'BEST_BALL'
  | 'SINGLES';

type ApiCupScorecard = {
  __typename: 'CupScorecard';
  currentHole?: Maybe<Scalars['Int']['output']>;
  displayScore: Scalars['String']['output'];
  format: ApiCupRoundFormat;
  id: Scalars['ID']['output'];
  infoWebUrl?: Maybe<Scalars['String']['output']>;
  matchHoleScores: Array<ApiMatchHole>;
  matchName: Scalars['String']['output'];
  matchStatus: Scalars['String']['output'];
  matchStatusColor: Scalars['String']['output'];
  matchStatusFlag?: Maybe<Scalars['String']['output']>;
  messages: Array<ApiMessage>;
  scorecardTitle: Scalars['String']['output'];
  teams: Array<ApiCupTeam>;
  teeTime: Scalars['AWSTimestamp']['output'];
  tourcastURI?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  tourcastUrl?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  tourcastUrlWeb?: Maybe<Scalars['String']['output']>;
};

type ApiCupTeam = {
  __typename: 'CupTeam';
  flagSurroundColor?: Maybe<Scalars['String']['output']>;
  flagSurroundColorDark?: Maybe<Scalars['String']['output']>;
  players?: Maybe<Array<ApiMpScorecardPlayer>>;
  status: ApiCupLeaderboardTeamStatus;
  teamColor: Scalars['String']['output'];
  teamFlag: Scalars['String']['output'];
  teamId: Scalars['ID']['output'];
  teamName: Scalars['String']['output'];
  teamPoints?: Maybe<Scalars['String']['output']>;
  teamShortName: Scalars['String']['output'];
  textColor?: Maybe<Scalars['String']['output']>;
};

type ApiCupTeamRoster = {
  __typename: 'CupTeamRoster';
  flagSurroundColor?: Maybe<Scalars['String']['output']>;
  flagSurroundColorDark?: Maybe<Scalars['String']['output']>;
  sections: Array<ApiCupTeamRosterSection>;
  teamColor: Scalars['String']['output'];
  teamFlag: Scalars['String']['output'];
  teamId: Scalars['ID']['output'];
  teamLogo?: Maybe<Scalars['String']['output']>;
  teamName: Scalars['String']['output'];
};

type ApiCupTeamRosterSection = {
  __typename: 'CupTeamRosterSection';
  players: Array<ApiCupLeaderboardMatchPlayer>;
  sectionTitle: Scalars['String']['output'];
  showResults: Scalars['Boolean']['output'];
};

type ApiCupTeamRosters = {
  __typename: 'CupTeamRosters';
  teams: Array<ApiCupTeamRoster>;
  tournamentId: Scalars['ID']['output'];
};

type ApiCupTeeTimes = {
  __typename: 'CupTeeTimes';
  currentRound: Scalars['Int']['output'];
  drawersEnabled: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  rounds: Array<ApiCupTeeTimesRound>;
};

type ApiCupTeeTimesRound = {
  __typename: 'CupTeeTimesRound';
  adConfig: Scalars['String']['output'];
  completedMatches: Scalars['Int']['output'];
  matches: Array<ApiCupLeaderboardMatch>;
  roundDisplay: Scalars['String']['output'];
  roundNum: Scalars['Int']['output'];
  totalMatches: Scalars['Int']['output'];
};

type ApiCupTournamentLeaderboard = {
  __typename: 'CupTournamentLeaderboard';
  allRounds: Array<ApiCupRound>;
  completedMatches: Scalars['Int']['output'];
  currentId: Scalars['String']['output'];
  currentRound: Scalars['Int']['output'];
  drawersEnabled: Scalars['Boolean']['output'];
  format: ApiCupRoundFormat;
  id: Scalars['ID']['output'];
  liveActivitySponsor?: Maybe<ApiCupLiveActivitySponsor>;
  matches: Array<ApiCupLeaderboardMatch>;
  outcomeIqLogo?: Maybe<Scalars['String']['output']>;
  rounds: Array<ApiCupTournamentRound>;
  title: Scalars['String']['output'];
  totalMatches: Scalars['Int']['output'];
  tourcastURI?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  tourcastURL?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  tourcastURLWeb?: Maybe<Scalars['String']['output']>;
};

type ApiCupTournamentLeaderboardCompressed = {
  __typename: 'CupTournamentLeaderboardCompressed';
  currentId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  payload: Scalars['String']['output'];
};

type ApiCupTournamentRound = {
  __typename: 'CupTournamentRound';
  adConfig: Scalars['String']['output'];
  description: Scalars['String']['output'];
  format: ApiCupRoundFormat;
  roundNumber: Scalars['Int']['output'];
};

type ApiCupTournamentStatus = {
  __typename: 'CupTournamentStatus';
  heroImage?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  infoPath?: Maybe<Scalars['String']['output']>;
  matchesComplete?: Maybe<ApiCupMatchesCompleteData>;
  messages: Array<ApiLeaderboardMessage>;
  miniLeaderboardOverride?: Maybe<Scalars['String']['output']>;
  scorecardEnabled: Scalars['Boolean']['output'];
  stickyBanner: Scalars['Boolean']['output'];
  teams: Array<ApiCupTournamentTeam>;
  tournamentId: Scalars['String']['output'];
  type: ApiCupOverviewDisplayType;
};

type ApiCupTournamentTeam = {
  __typename: 'CupTournamentTeam';
  badgeText?: Maybe<Scalars['String']['output']>;
  color: Scalars['String']['output'];
  displayName: Scalars['String']['output'];
  goalPoints?: Maybe<Scalars['String']['output']>;
  projected?: Maybe<Scalars['String']['output']>;
  projectedColor: Scalars['String']['output'];
  projectedProgress: Scalars['Float']['output'];
  projectedValue: Scalars['Float']['output'];
  shortBadgeText?: Maybe<Scalars['String']['output']>;
  shortName: Scalars['String']['output'];
  teamId: Scalars['ID']['output'];
  teamLogo: Scalars['String']['output'];
  textColor?: Maybe<Scalars['String']['output']>;
  toWin?: Maybe<Scalars['String']['output']>;
  toWinSuffix?: Maybe<Scalars['String']['output']>;
  total?: Maybe<Scalars['String']['output']>;
  totalProgress: Scalars['Float']['output'];
  totalValue: Scalars['Float']['output'];
  winner?: Maybe<Scalars['Boolean']['output']>;
};

type ApiCurrentLeaderPlayer = {
  __typename: 'CurrentLeaderPlayer';
  backNine: Scalars['Boolean']['output'];
  country: Scalars['String']['output'];
  countryFlag: Scalars['String']['output'];
  displayName: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  groupNumber: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  lastName: Scalars['String']['output'];
  leaderboardSortOrder: Scalars['Int']['output'];
  playerIcon?: Maybe<ApiLeaderboardPlayerIcon>;
  playerState?: Maybe<ApiPlayerState>;
  position: Scalars['String']['output'];
  roundHeader: Scalars['String']['output'];
  roundScore: Scalars['String']['output'];
  shortName: Scalars['String']['output'];
  teeTime?: Maybe<Scalars['AWSTimestamp']['output']>;
  thru: Scalars['String']['output'];
  totalScore: Scalars['String']['output'];
};

type ApiCurrentLeaderSponsors = {
  __typename: 'CurrentLeaderSponsors';
  images: Array<ApiSponsorImage>;
  text: Scalars['String']['output'];
};

type ApiCurrentLeaders = {
  __typename: 'CurrentLeaders';
  hideRolexClock: Scalars['Boolean']['output'];
  hideSov: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  miniatureLeaderboardExternalLinkOverride?: Maybe<Scalars['String']['output']>;
  miniatureLeaderboardImgOverride?: Maybe<Scalars['String']['output']>;
  players: Array<ApiCurrentLeaderPlayer>;
  profileEnabled: Scalars['Boolean']['output'];
  roundDisplay: Scalars['String']['output'];
  roundStatus: ApiRoundStatus;
  roundStatusColor: ApiRoundStatusColor;
  roundStatusDisplay: Scalars['String']['output'];
  sponsor?: Maybe<ApiCurrentLeaderSponsors>;
  tournamentName: Scalars['String']['output'];
};

type ApiCurrentLeadersCompressed = {
  __typename: 'CurrentLeadersCompressed';
  id: Scalars['ID']['output'];
  payload: Scalars['String']['output'];
};

type ApiCutLineInfo = {
  __typename: 'CutLineInfo';
  lastUpdated: Scalars['AWSTimestamp']['output'];
  new?: Maybe<Scalars['Boolean']['output']>;
  possibleCutLines: Array<ApiCutLinePossibility>;
  probableCutLine: Scalars['String']['output'];
  projectedCutLine: Scalars['String']['output'];
  sponsorLogo?: Maybe<ApiImageAsset>;
  sponsorName?: Maybe<Scalars['String']['output']>;
};

type ApiCutLinePossibility = {
  __typename: 'CutLinePossibility';
  displayProbability: Scalars['String']['output'];
  probability: Scalars['Float']['output'];
  score: Scalars['String']['output'];
};

type ApiDayWeather = {
  __typename: 'DayWeather';
  day: Scalars['String']['output'];
  text: Scalars['String']['output'];
};

type ApiDeleteAccountResponse = {
  __typename: 'DeleteAccountResponse';
  ok: Scalars['Boolean']['output'];
};

type ApiDrawerDisplayState =
  | 'HOLE_ONLY'
  | 'PLAY_BY_PLAY'
  | 'ROUND_COMPLETE'
  | 'TEE_TIME';

type ApiDropdownFragment = {
  __typename: 'DropdownFragment';
  bottomCta?: Maybe<ApiCallToAction>;
  header: Scalars['String']['output'];
  rows: Array<ApiDropdownRow>;
  subheader?: Maybe<Scalars['String']['output']>;
  topCta?: Maybe<ApiCallToAction>;
};

type ApiDropdownRow = {
  __typename: 'DropdownRow';
  content?: Maybe<Array<Maybe<ApiNewsArticleNode>>>;
  cta?: Maybe<ApiCallToAction>;
  header: Scalars['String']['output'];
};

type ApiEfiHole = {
  __typename: 'EFIHole';
  count: Scalars['String']['output'];
  hole: Scalars['String']['output'];
};

type ApiEfiPlayer = {
  __typename: 'EFIPlayer';
  displayName: Scalars['String']['output'];
  history: Array<ApiEfiPlayerEagle>;
  playerId: Scalars['ID']['output'];
  totalEagles: Scalars['String']['output'];
};

type ApiEfiPlayerEagle = {
  __typename: 'EFIPlayerEagle';
  hole: Scalars['Int']['output'];
  round: Scalars['Int']['output'];
  videoId?: Maybe<Scalars['String']['output']>;
};

type ApiEaglesForImpact = {
  __typename: 'EaglesForImpact';
  charity: Scalars['String']['output'];
  donation: Scalars['String']['output'];
  eaglesTitle: Scalars['String']['output'];
  holes: Array<ApiEfiHole>;
  linkText?: Maybe<Scalars['String']['output']>;
  linkUrl?: Maybe<Scalars['String']['output']>;
  players: Array<ApiEfiPlayer>;
  sponsorDescription: Scalars['String']['output'];
  /** @deprecated use sponsorLogoAsset */
  sponsorLogo: Scalars['String']['output'];
  sponsorLogoAsset: ApiImageAsset;
  title: Scalars['String']['output'];
  totalEagles: Scalars['String']['output'];
  tournamentId: Scalars['ID']['output'];
};

/**   Player Odds V2 */
type ApiEntityOdds = {
  __typename: 'EntityOdds';
  bettingProfile?: Maybe<Scalars['String']['output']>;
  entityId: Scalars['ID']['output'];
  marketPills: Array<ApiMarketPill>;
  /**   others available to request */
  markets: Array<ApiMarket>;
  message?: Maybe<ApiOddsMessage>;
  provider: ApiOddsProvider;
  /**   playerId or teamId */
  tournamentId: Scalars['String']['output'];
};

type ApiEpisode = {
  __typename: 'Episode';
  date: Scalars['AWSTimestamp']['output'];
  description: Scalars['String']['output'];
  duration: Scalars['Int']['output'];
  podcastId: Scalars['String']['output'];
  streamUrl: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

type ApiEvent = {
  __typename: 'Event';
  eventName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  leaderboardId: Scalars['String']['output'];
};

type ApiEventGuideConfig = {
  __typename: 'EventGuideConfig';
  augmentedReality?: Maybe<ApiAugmentedRealityConfig>;
  eventGuideMap?: Maybe<Scalars['String']['output']>;
  eventGuideURL?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};

type ApiEventHub = {
  __typename: 'EventHub';
  bottomSectionTitle?: Maybe<Scalars['String']['output']>;
  notSharingLocationFallbackDescriptionText?: Maybe<Scalars['String']['output']>;
  notSharingLocationFallbackTitle?: Maybe<Scalars['String']['output']>;
  outOfRangeFallbackDescriptionText?: Maybe<Scalars['String']['output']>;
  outOfRangeFallbackPromoImage?: Maybe<Scalars['String']['output']>;
  outOfRangeFallbackTitle?: Maybe<Scalars['String']['output']>;
  partnershipAsset?: Maybe<Scalars['String']['output']>;
  partnershipText?: Maybe<Scalars['String']['output']>;
  path: Scalars['String']['output'];
  radius?: Maybe<Scalars['Float']['output']>;
  topSectionTitle?: Maybe<Scalars['String']['output']>;
};

type ApiEventHubTable = {
  __typename: 'EventHubTable';
  cta?: Maybe<ApiCallToAction>;
  mapCtaText?: Maybe<Scalars['String']['output']>;
  mapIframe?: Maybe<Scalars['String']['output']>;
  mapPdf?: Maybe<Scalars['String']['output']>;
  mapSectionTitle?: Maybe<Scalars['String']['output']>;
  notSharingLocationCta?: Maybe<ApiCallToAction>;
  notSharingLocationFallbackDescriptionText?: Maybe<Scalars['String']['output']>;
  notSharingLocationFallbackTitle?: Maybe<Scalars['String']['output']>;
  outOfRangeCta?: Maybe<ApiCallToAction>;
  outOfRangeFallbackDescriptionText?: Maybe<Scalars['String']['output']>;
  outOfRangeFallbackPromoImg?: Maybe<Scalars['String']['output']>;
  outOfRangeFallbackTitle?: Maybe<Scalars['String']['output']>;
  partnershipAsset?: Maybe<Scalars['String']['output']>;
  partnershipText?: Maybe<Scalars['String']['output']>;
  path: Scalars['String']['output'];
  radius?: Maybe<Scalars['Float']['output']>;
  sectionTitle?: Maybe<Scalars['String']['output']>;
};

type ApiEventRegion =
  | 'EUROPE'
  | 'INTERNATIONAL'
  | 'US';

type ApiExpertPicks = {
  __typename: 'ExpertPicks';
  expertPicksTableRows: Array<ApiExpertPicksTableRow>;
  tournamentName: Scalars['String']['output'];
};

type ApiExpertPicksNode = {
  __typename: 'ExpertPicksNode';
  isPowerRankings: Scalars['Boolean']['output'];
  path: Scalars['String']['output'];
};

type ApiExpertPicksTableRow = {
  __typename: 'ExpertPicksTableRow';
  comment: Array<ApiTourSponsorDescription>;
  expertName?: Maybe<Scalars['String']['output']>;
  expertTitle?: Maybe<Scalars['String']['output']>;
  lineup: Array<ApiPlayerInfo>;
  percentSelected?: Maybe<Scalars['String']['output']>;
  percentSelectedColor?: Maybe<ApiStatColor>;
  winner?: Maybe<ApiPlayerInfo>;
};

type ApiFavoritePlayer = {
  __typename: 'FavoritePlayer';
  id: Scalars['ID']['output'];
};

type ApiFavoritePlayerInput = {
  id: Scalars['ID']['input'];
};

type ApiFavoriteTourResponse = {
  __typename: 'FavoriteTourResponse';
  ok: Scalars['Boolean']['output'];
  tourCode?: Maybe<ApiTourCode>;
};

type ApiFeatureItem = {
  __typename: 'FeatureItem';
  fieldStatType?: Maybe<ApiFieldStatType>;
  leaderboardFeatures?: Maybe<ApiLeaderboardFeature>;
  name: Scalars['String']['output'];
  new: Scalars['Boolean']['output'];
  sponsor?: Maybe<ApiFeatureSponsor>;
  tooltipText?: Maybe<Scalars['String']['output']>;
  tooltipTitle?: Maybe<Scalars['String']['output']>;
};

type ApiFeatureSponsor = {
  __typename: 'FeatureSponsor';
  /** @deprecated use sponsorLogoAsset */
  sponsorLogo: Scalars['String']['output'];
  sponsorLogoAsset: ApiImageAsset;
  /** @deprecated use sponsorLogoDarkAsset */
  sponsorLogoDark: Scalars['String']['output'];
  sponsorLogoDarkAsset: ApiImageAsset;
  sponsorText: Scalars['String']['output'];
};

type ApiField = {
  __typename: 'Field';
  alternates: Array<ApiPlayerField>;
  features: Array<ApiFeatureItem>;
  hideSov: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  lastUpdated?: Maybe<Scalars['AWSTimestamp']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  players: Array<ApiPlayerField>;
  standingsHeader: Scalars['String']['output'];
  tournamentName: Scalars['String']['output'];
};

type ApiFieldGroup = {
  __typename: 'FieldGroup';
  groupId?: Maybe<Scalars['String']['output']>;
  groupTitle: Scalars['String']['output'];
  players: Array<ApiPlayerField>;
};

type ApiFieldPromoSection = {
  __typename: 'FieldPromoSection';
  title: Scalars['String']['output'];
  tournamentIds: Array<Scalars['String']['output']>;
};

type ApiFieldStatCourseFit = {
  __typename: 'FieldStatCourseFit';
  playerId: Scalars['String']['output'];
  score: Scalars['String']['output'];
  stats: Array<ApiFieldStatCourseFitStat>;
  totalRounds: Scalars['String']['output'];
};

type ApiFieldStatCourseFitStat = {
  __typename: 'FieldStatCourseFitStat';
  statColor: ApiStatColor;
  statRank: Scalars['String']['output'];
  statValue: Scalars['String']['output'];
};

type ApiFieldStatCurrentForm = {
  __typename: 'FieldStatCurrentForm';
  playerId: Scalars['String']['output'];
  strokesGained: Array<ApiFieldStatStrokesGained>;
  strokesGainedHeader: Array<Scalars['String']['output']>;
  totalRounds: Scalars['String']['output'];
  tournamentResults: Array<ApiFieldStatTournamentResult>;
};

type ApiFieldStatPlayer = ApiFieldStatCourseFit | ApiFieldStatCurrentForm;

type ApiFieldStatStrokesGained = {
  __typename: 'FieldStatStrokesGained';
  statColor: ApiStatColor;
  statId: Scalars['String']['output'];
  statValue: Scalars['String']['output'];
};

type ApiFieldStatTournamentResult = {
  __typename: 'FieldStatTournamentResult';
  columnIndex: Scalars['Int']['output'];
  endDate: Scalars['String']['output'];
  name: Scalars['String']['output'];
  position: Scalars['String']['output'];
  score: Scalars['String']['output'];
  season: Scalars['Int']['output'];
  tourCode: Scalars['String']['output'];
  tournamentId: Scalars['String']['output'];
};

type ApiFieldStatType =
  | 'COURSE_FIT'
  | 'CURRENT_FORM'
  | 'TOURNAMENT_HISTORY';

type ApiFieldStats = {
  __typename: 'FieldStats';
  fieldStatType: ApiFieldStatType;
  players: Array<ApiFieldStatPlayer>;
  statHeaders?: Maybe<Array<Scalars['String']['output']>>;
  tournamentId: Scalars['ID']['output'];
  tournamentSeasonHeaders?: Maybe<Array<ApiSeasonDisplayHeader>>;
};

type ApiFinishStatValue = {
  __typename: 'FinishStatValue';
  date: Scalars['Int']['output'];
  displayDate: Scalars['String']['output'];
  displayValue: Scalars['String']['output'];
  tournamentName: Scalars['String']['output'];
  value: Scalars['Float']['output'];
};

type ApiFormatType =
  | 'MATCH_PLAY'
  | 'STABLEFORD'
  | 'STROKE_PLAY'
  | 'TEAM_CUP'
  | 'TEAM_STROKE';

type ApiFranchise = {
  __typename: 'Franchise';
  displayName: Scalars['String']['output'];
  queryValue: Scalars['String']['output'];
};

type ApiFranchisePillConfig = {
  __typename: 'FranchisePillConfig';
  category?: Maybe<Scalars['String']['output']>;
  franchises: Array<ApiFranchise>;
  rating?: Maybe<Scalars['Int']['output']>;
};

type ApiFutureVenuesCard = {
  __typename: 'FutureVenuesCard';
  course?: Maybe<Scalars['String']['output']>;
  coursePhoto?: Maybe<Scalars['String']['output']>;
  cta?: Maybe<ApiCallToAction>;
  location?: Maybe<Scalars['String']['output']>;
  venueLink?: Maybe<Scalars['String']['output']>;
  year?: Maybe<Scalars['String']['output']>;
};

type ApiFutureVenuesFragment = {
  __typename: 'FutureVenuesFragment';
  bottomCta?: Maybe<ApiCallToAction>;
  cards?: Maybe<Array<ApiFutureVenuesCard>>;
  sectionTitle?: Maybe<Scalars['String']['output']>;
  topCta?: Maybe<ApiCallToAction>;
};

type ApiFutureVenuesRow = {
  __typename: 'FutureVenuesRow';
  /** @deprecated Use beautyImageAsset */
  beautyImage?: Maybe<Scalars['String']['output']>;
  beautyImageAsset?: Maybe<ApiImageAsset>;
  course?: Maybe<Scalars['String']['output']>;
  eventDates?: Maybe<Scalars['String']['output']>;
  hospitalityLink?: Maybe<Scalars['String']['output']>;
  hospitalityLinkTarget?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  moreInfoDescription?: Maybe<Array<Maybe<ApiNewsArticleNode>>>;
  ticketLink?: Maybe<Scalars['String']['output']>;
  ticketLinkTarget?: Maybe<Scalars['String']['output']>;
  volunteersLink?: Maybe<Scalars['String']['output']>;
  volunteersLinkTarget?: Maybe<Scalars['String']['output']>;
  year?: Maybe<Scalars['String']['output']>;
};

type ApiFutureVenuesTableFragment = {
  __typename: 'FutureVenuesTableFragment';
  rows: Array<ApiFutureVenuesRow>;
};

type ApiGenericContent = {
  __typename: 'GenericContent';
  adConfigNode?: Maybe<Scalars['String']['output']>;
  authorReference?: Maybe<ApiNewsArticleAuthor>;
  datePublished: Scalars['AWSTimestamp']['output'];
  headline: Scalars['String']['output'];
  metadata?: Maybe<ApiNewsArticleMetadata>;
  nodes: Array<ApiNewsArticleNode>;
  path: Scalars['String']['output'];
};

type ApiGenericContentCompressed = {
  __typename: 'GenericContentCompressed';
  path: Scalars['String']['output'];
  payload: Scalars['String']['output'];
};

type ApiGlobalAdConfig = {
  __typename: 'GlobalAdConfig';
  actRefresh: Scalars['Boolean']['output'];
  adUnitId: Scalars['String']['output'];
  environment: Scalars['String']['output'];
  fluid: Scalars['Boolean']['output'];
  injectAds?: Maybe<Scalars['Boolean']['output']>;
  networkId: Scalars['String']['output'];
  playerSponsorship: Scalars['Boolean']['output'];
  refresh: Scalars['Int']['output'];
  timedRefresh?: Maybe<Scalars['Boolean']['output']>;
};

type ApiGroup = {
  __typename: 'Group';
  backNine: Scalars['Boolean']['output'];
  courseId?: Maybe<Scalars['String']['output']>;
  courseName?: Maybe<Scalars['String']['output']>;
  groupHole: Scalars['Int']['output'];
  groupLocation: Scalars['String']['output'];
  groupLocationCode: Scalars['String']['output'];
  groupNumber: Scalars['Int']['output'];
  groupSort: Scalars['String']['output'];
  groupStatus: ApiPlayerState;
  holeLocation: Scalars['String']['output'];
  players: Array<ApiPlayer>;
  showScorecard: Scalars['Boolean']['output'];
  startTee: Scalars['Int']['output'];
  teeTime: Scalars['AWSTimestamp']['output'];
  tourcastURI?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  tourcastURL?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  tourcastURLWeb?: Maybe<Scalars['String']['output']>;
};

type ApiGroupHoleLocation =
  | 'COMPLETE'
  | 'FAIRWAY'
  | 'GREEN'
  | 'NOT_STARTED'
  | 'TEE'
  | 'UNKNOWN';

type ApiGroupLocation = {
  __typename: 'GroupLocation';
  courses: Array<ApiGroupLocationCourse>;
  tournamentId: Scalars['ID']['output'];
};

type ApiGroupLocationCourse = {
  __typename: 'GroupLocationCourse';
  courseId: Scalars['String']['output'];
  courseName: Scalars['String']['output'];
  holes: Array<ApiGroupLocationHole>;
  round: Scalars['Int']['output'];
  tournamentAndCourseId: Scalars['ID']['output'];
  tournamentId: Scalars['String']['output'];
};

type ApiGroupLocationData = {
  __typename: 'GroupLocationData';
  backNinePaceOfPlayTime?: Maybe<Scalars['String']['output']>;
  courseId: Scalars['String']['output'];
  currentHole?: Maybe<Scalars['String']['output']>;
  frontNinePaceOfPlayTime?: Maybe<Scalars['String']['output']>;
  group: Scalars['Int']['output'];
  location: Scalars['String']['output'];
  locationCode: ApiGroupHoleLocation;
  locationSort: Scalars['String']['output'];
  teeTime?: Maybe<Scalars['AWSTimestamp']['output']>;
};

type ApiGroupLocationGroup = {
  __typename: 'GroupLocationGroup';
  color?: Maybe<Scalars['String']['output']>;
  groupNum: Scalars['Int']['output'];
  groupSort: Scalars['String']['output'];
  location: ApiGroupHoleLocation;
  playerData?: Maybe<ApiGroupLocationPlayerData>;
  round: Scalars['Int']['output'];
};

type ApiGroupLocationHole = {
  __typename: 'GroupLocationHole';
  groups: Array<ApiGroupLocationGroup>;
  holeNumber: Scalars['Int']['output'];
  par: Scalars['Int']['output'];
  yardage: Scalars['Int']['output'];
};

type ApiGroupLocationPlayerData = {
  __typename: 'GroupLocationPlayerData';
  addressingBall?: Maybe<Scalars['String']['output']>;
  nextToHit?: Maybe<Scalars['String']['output']>;
};

type ApiGroupRoundScore = {
  __typename: 'GroupRoundScore';
  holes: Array<ApiGroupScoreHeader>;
  parTotal: Scalars['Int']['output'];
  players: Array<ApiGroupScorePlayer>;
  totalLabel: Scalars['String']['output'];
};

type ApiGroupScoreHeader = {
  __typename: 'GroupScoreHeader';
  holeNumber: Scalars['Int']['output'];
  par: Scalars['Int']['output'];
};

type ApiGroupScorePlayer = {
  __typename: 'GroupScorePlayer';
  active: Scalars['Boolean']['output'];
  player: ApiPlayer;
  roundTotal: Scalars['String']['output'];
  roundTotalHeader: Scalars['String']['output'];
  rowTotal: Scalars['String']['output'];
  scores: Array<ApiSimpleScore>;
};

type ApiGroupScorecard = {
  __typename: 'GroupScorecard';
  backNine: Scalars['Boolean']['output'];
  courseId?: Maybe<Scalars['String']['output']>;
  courseName: Scalars['String']['output'];
  currentHole: Scalars['Int']['output'];
  firstNine: ApiGroupRoundScore;
  holeDetail: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  locationDetail: Scalars['String']['output'];
  players: Array<ApiScorecardHeaderPlayer>;
  roundHeader: Scalars['String']['output'];
  secondNine: ApiGroupRoundScore;
  teeTime: Scalars['AWSTimestamp']['output'];
  tourcastURL?: Maybe<Scalars['String']['output']>;
};

type ApiGroupShotDetails = {
  __typename: 'GroupShotDetails';
  defaultHolePickle: ApiHolePickleType;
  displayType: ApiShotDetailsDisplayType;
  groupNumber: Scalars['Int']['output'];
  holes: Array<ApiGroupShotDetailsHole>;
  id: Scalars['ID']['output'];
  message: Scalars['String']['output'];
  players: Array<ApiGroupShotDetailsPlayer>;
  round: Scalars['Int']['output'];
  shotVideo?: Maybe<ApiVideo>;
  shotVideos?: Maybe<Array<ApiVideo>>;
  tournamentId: Scalars['String']['output'];
};

type ApiGroupShotDetailsCompressed = {
  __typename: 'GroupShotDetailsCompressed';
  id: Scalars['ID']['output'];
  payload: Scalars['String']['output'];
};

type ApiGroupShotDetailsHole = {
  __typename: 'GroupShotDetailsHole';
  activePlayers: Array<Scalars['String']['output']>;
  displayHoleNumber: Scalars['String']['output'];
  enhancedPickle?: Maybe<ApiHolePickle>;
  fairwayCenter: ApiStrokeCoordinates;
  green: Scalars['Boolean']['output'];
  holeNumber: Scalars['Int']['output'];
  /** @deprecated Use holePickleBottomToTopAsset */
  holePickleBottomToTop: Scalars['String']['output'];
  holePickleBottomToTopAsset: ApiImageAsset;
  /** @deprecated Use holePickleGreenBottomToTopAsset */
  holePickleGreenBottomToTop: Scalars['String']['output'];
  holePickleGreenBottomToTopAsset: ApiImageAsset;
  /** @deprecated Use holePickleGreenLeftToRightAsset */
  holePickleGreenLeftToRight: Scalars['String']['output'];
  holePickleGreenLeftToRightAsset: ApiImageAsset;
  /** @deprecated Use holePickleLeftToRightAsset */
  holePickleLeftToRight: Scalars['String']['output'];
  holePickleLeftToRightAsset: ApiImageAsset;
  par: Scalars['Int']['output'];
  pinGreen: ApiPointOfInterestCoords;
  pinOverview: ApiPointOfInterestCoords;
  rank?: Maybe<Scalars['String']['output']>;
  strokes: Array<ApiGroupShotDetailsStroke>;
  teeGreen: ApiPointOfInterestCoords;
  teeOverview: ApiPointOfInterestCoords;
  yardage: Scalars['Int']['output'];
};

type ApiGroupShotDetailsPlayer = {
  __typename: 'GroupShotDetailsPlayer';
  displayName: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastName: Scalars['String']['output'];
  lineColor: Scalars['String']['output'];
  shortName: Scalars['String']['output'];
};

type ApiGroupShotDetailsStroke = {
  __typename: 'GroupShotDetailsStroke';
  playByPlayLabel: Scalars['String']['output'];
  players: Array<ApiGroupShotDetailsStrokePlayer>;
  strokeNumber: Scalars['Int']['output'];
};

type ApiGroupShotDetailsStrokePlayer = {
  __typename: 'GroupShotDetailsStrokePlayer';
  ballPath?: Maybe<ApiBallPath>;
  displayName: Scalars['String']['output'];
  distance: Scalars['String']['output'];
  distanceRemaining: Scalars['String']['output'];
  finalShot: Scalars['Boolean']['output'];
  fromLocation: Scalars['String']['output'];
  fromLocationCode: Scalars['String']['output'];
  green: ApiShotLinkCoordWrapper;
  markerText: Scalars['String']['output'];
  overview: ApiShotLinkCoordWrapper;
  playByPlay: Scalars['String']['output'];
  playerId: Scalars['String']['output'];
  radarData?: Maybe<ApiRadarData>;
  score: Scalars['String']['output'];
  shortName: Scalars['String']['output'];
  showMarker: Scalars['Boolean']['output'];
  status: ApiHoleScoreStatus;
  strokeType: ApiHoleStrokeType;
  toLocation: Scalars['String']['output'];
  toLocationCode: Scalars['String']['output'];
  videoId?: Maybe<Scalars['String']['output']>;
};

type ApiGroupShotDetailsTeam = {
  __typename: 'GroupShotDetailsTeam';
  players?: Maybe<Array<ApiGroupShotDetailsPlayer>>;
  teamId: Scalars['String']['output'];
  teamName: Scalars['String']['output'];
};

type ApiGroupStageGroup = {
  __typename: 'GroupStageGroup';
  groupHeader: Scalars['String']['output'];
  groupPlayers: Array<ApiGroupStagePlayer>;
};

type ApiGroupStageHeader = {
  __typename: 'GroupStageHeader';
  lost: Scalars['String']['output'];
  player: Scalars['String']['output'];
  points: Scalars['String']['output'];
  tied: Scalars['String']['output'];
  type: ApiHeaderType;
  won: Scalars['String']['output'];
};

type ApiGroupStagePlayer = {
  __typename: 'GroupStagePlayer';
  bracketSeed: Scalars['String']['output'];
  countryFlag: Scalars['String']['output'];
  countryName: Scalars['String']['output'];
  displayName: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  groupRankDisplayText?: Maybe<Scalars['String']['output']>;
  /** @deprecated URL should be built using player ID */
  headshot: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  latestMatchId: Scalars['ID']['output'];
  latestRound: Scalars['Int']['output'];
  playerId: Scalars['ID']['output'];
  playoffWinner: Scalars['Boolean']['output'];
  position: Scalars['String']['output'];
  previousMatches: ApiPreviousMatches;
  record: ApiPlayerRecord;
  shortName: Scalars['String']['output'];
  tournamentSeed: Scalars['String']['output'];
};

type ApiGroupStageRankings = {
  __typename: 'GroupStageRankings';
  groupStageHeaders: Array<ApiGroupStageHeader>;
  groups: Array<ApiGroupStageGroup>;
  informationSections: Array<ApiInformationSection>;
  title: Scalars['String']['output'];
  tournamentId: Scalars['ID']['output'];
};

type ApiGroupV2 = {
  __typename: 'GroupV2';
  backNine: Scalars['Boolean']['output'];
  courseId?: Maybe<Scalars['String']['output']>;
  courseName?: Maybe<Scalars['String']['output']>;
  groupNumber: Scalars['Int']['output'];
  players: Array<ApiPlayer>;
  showScorecard: Scalars['Boolean']['output'];
  startTee: Scalars['Int']['output'];
  teeTime: Scalars['AWSTimestamp']['output'];
  tourcastURI?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  tourcastURL?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  tourcastURLWeb?: Maybe<Scalars['String']['output']>;
};

type ApiGroupedField = {
  __typename: 'GroupedField';
  alternates: ApiPlayerGroup;
  features: Array<ApiFeatureItem>;
  id: Scalars['ID']['output'];
  lastUpdated?: Maybe<Scalars['AWSTimestamp']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  players: ApiPlayerGroup;
  standingsHeader: Scalars['String']['output'];
  tournamentName: Scalars['String']['output'];
};

type ApiHeaderType =
  | 'LONG'
  | 'SHORT';

type ApiHeroCarousel = {
  __typename: 'HeroCarousel';
  displayInline: Scalars['Boolean']['output'];
  slides: Array<ApiHeroCarouselItem>;
};

type ApiHeroCarouselItem = {
  __typename: 'HeroCarouselItem';
  articleContent?: Maybe<ApiNewsArticle>;
  autoplay?: Maybe<Scalars['Boolean']['output']>;
  cta1?: Maybe<ApiCallToAction>;
  cta2?: Maybe<ApiCallToAction>;
  heroImage?: Maybe<Scalars['String']['output']>;
  slideHeadline?: Maybe<Scalars['String']['output']>;
  slideSubhead?: Maybe<Scalars['String']['output']>;
  videoContent?: Maybe<ApiVideo>;
};

type ApiHistoricalLeaderboard = {
  __typename: 'HistoricalLeaderboard';
  additionalDataHeaders: Array<Scalars['String']['output']>;
  availableSeasons: Array<ApiStatYearPills>;
  id: Scalars['ID']['output'];
  players: Array<ApiHistoricalLeaderboardRow>;
  recap?: Maybe<ApiWeatherNotes>;
  rounds: Array<Scalars['String']['output']>;
  teams?: Maybe<Array<Maybe<ApiHistoricalLeaderboardTeamRow>>>;
  tournamentResultsMessage?: Maybe<ApiTournamentResultsMessage>;
  winner?: Maybe<ApiWinner>;
  winningTeam?: Maybe<Array<Maybe<ApiWinner>>>;
};

type ApiHistoricalLeaderboardRow = {
  __typename: 'HistoricalLeaderboardRow';
  additionalData: Array<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  parRelativeScore: Scalars['String']['output'];
  player: ApiPlayer;
  position: Scalars['String']['output'];
  rounds: Array<ApiHistoricalRoundScore>;
  total: Scalars['String']['output'];
};

type ApiHistoricalLeaderboardTeamRow = {
  __typename: 'HistoricalLeaderboardTeamRow';
  additionalData: Array<Scalars['String']['output']>;
  parRelativeScore: Scalars['String']['output'];
  players: Array<ApiPlayer>;
  position: Scalars['String']['output'];
  rounds?: Maybe<Array<ApiHistoricalRoundScore>>;
  teamId: Scalars['String']['output'];
  total: Scalars['String']['output'];
};

type ApiHistoricalOddsId =
  | 'TOP_RANKED_3'
  | 'TOP_RANKED_5'
  | 'TOP_RANKED_10'
  | 'TOP_RANKED_20'
  | 'WINNER';

type ApiHistoricalPlayerOdds = {
  __typename: 'HistoricalPlayerOdds';
  marketName: Scalars['String']['output'];
  message?: Maybe<ApiOddsMessage>;
  odds: Scalars['String']['output'];
  oddsSwing: ApiOddsSwing;
  optionId: Scalars['String']['output'];
  playerId: Scalars['String']['output'];
  season: Scalars['Int']['output'];
  timeStamp: Scalars['AWSTimestamp']['output'];
  tournamentId: Scalars['String']['output'];
};

type ApiHistoricalPlayerScorecards = {
  __typename: 'HistoricalPlayerScorecards';
  playerId: Scalars['ID']['output'];
  tours: Array<ApiHistoricalScorecardTour>;
};

type ApiHistoricalRoundScore = {
  __typename: 'HistoricalRoundScore';
  parRelativeScore: Scalars['String']['output'];
  score: Scalars['String']['output'];
};

type ApiHistoricalScorecardTour = {
  __typename: 'HistoricalScorecardTour';
  tourCode: ApiTourCode;
  years: Array<ApiHistoricalScorecardYear>;
};

type ApiHistoricalScorecardYear = {
  __typename: 'HistoricalScorecardYear';
  displayYear: Scalars['String']['output'];
  tournamentPills: Array<ApiStatTournamentPill>;
  year: Scalars['Int']['output'];
};

/**
 *   End
 *  Market Abstractions
 */
type ApiHistoricalTournamentOdds = {
  __typename: 'HistoricalTournamentOdds';
  id: Scalars['ID']['output'];
  market?: Maybe<ApiMarket>;
  message?: Maybe<ApiOddsMessage>;
  /**   tournamentId-provider */
  provider: ApiOddsProvider;
  tournamentId: Scalars['String']['output'];
};

type ApiHistoricalTournamentOddsArgs = {
  __typename: 'HistoricalTournamentOddsArgs';
  marketId: ApiOddsMarketType;
  timeStamp?: Maybe<Scalars['AWSDateTime']['output']>;
  tournamentId: Scalars['String']['output'];
};

type ApiHistoryInfo = {
  __typename: 'HistoryInfo';
  contentCarousel: Array<Maybe<ApiContentCarousel>>;
  cta?: Maybe<ApiCallToAction>;
  displayCta?: Maybe<Scalars['Boolean']['output']>;
  europeCaptain?: Maybe<Scalars['String']['output']>;
  infoText?: Maybe<Array<Maybe<ApiNewsArticleNode>>>;
  usCaptain?: Maybe<Scalars['String']['output']>;
};

type ApiHistoryScore = {
  __typename: 'HistoryScore';
  bottomCta?: Maybe<ApiCallToAction>;
  leftFlagIcon?: Maybe<Scalars['String']['output']>;
  leftScore?: Maybe<Scalars['String']['output']>;
  leftTeam?: Maybe<Scalars['String']['output']>;
  rightFlagIcon?: Maybe<Scalars['String']['output']>;
  rightScore?: Maybe<Scalars['String']['output']>;
  rightTeam?: Maybe<Scalars['String']['output']>;
  sectionSubhead: Scalars['String']['output'];
  sectionTitle: Scalars['String']['output'];
  topCta?: Maybe<ApiCallToAction>;
  trophyIcon?: Maybe<Scalars['String']['output']>;
};

type ApiHoleDetail = {
  __typename: 'HoleDetail';
  courseId: Scalars['String']['output'];
  holeImage: Scalars['String']['output'];
  holeImageLandscape: Scalars['String']['output'];
  holeInfo: ApiHoleDetailInfo;
  holeNum: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  rounds: Array<ApiHoleDetailRound>;
  statsAvailability: ApiHoleDetailsAvailability;
  statsSummary: ApiHoleStatSummary;
  tourcastURI?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  tourcastURL?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  tourcastURLWeb?: Maybe<Scalars['String']['output']>;
  tournamentId: Scalars['ID']['output'];
};

type ApiHoleDetailInfo = {
  __typename: 'HoleDetailInfo';
  aboutThisHole: Scalars['String']['output'];
  /** @deprecated Use holePickleGreenLeftToRightAsset */
  greenPickle: Scalars['String']['output'];
  holeNum: Scalars['Int']['output'];
  /** @deprecated Use holePickleLeftToRightAsset */
  holePickle: Scalars['String']['output'];
  /** @deprecated Use holePickleBottomToTopAsset */
  holePickleBottomToTop: Scalars['String']['output'];
  holePickleBottomToTopAsset: ApiImageAsset;
  /** @deprecated Use holePickleGreenBottomToTopAsset */
  holePickleGreenBottomToTop: Scalars['String']['output'];
  holePickleGreenBottomToTopAsset: ApiImageAsset;
  holePickleGreenLeftToRightAsset: ApiImageAsset;
  holePickleLeftToRightAsset: ApiImageAsset;
  par: Scalars['Int']['output'];
  pinGreen: ApiPointOfInterestCoords;
  rank?: Maybe<Scalars['Int']['output']>;
  rounds?: Maybe<Scalars['Int']['output']>;
  scoringAverageDiff: Scalars['String']['output'];
  yards: Scalars['Int']['output'];
};

type ApiHoleDetailRound = {
  __typename: 'HoleDetailRound';
  groups: Array<ApiHoleGroup>;
  matches?: Maybe<Array<ApiHoleMatch>>;
  roundNum: Scalars['Int']['output'];
  teamGroups?: Maybe<Array<ApiTeamHoleGroups>>;
};

type ApiHoleDetailsAvailability =
  | 'NONE'
  | 'SHOT_DETAILS'
  | 'STATS';

type ApiHoleGroup = {
  __typename: 'HoleGroup';
  groupLocation: Scalars['String']['output'];
  groupLocationCode: Scalars['String']['output'];
  groupNumber: Scalars['Int']['output'];
  players: Array<ApiHoleGroupPlayer>;
  tourcastURI?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  tourcastURL?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  tourcastURLWeb?: Maybe<Scalars['String']['output']>;
};

type ApiHoleGroupPlayer = {
  __typename: 'HoleGroupPlayer';
  country: Scalars['String']['output'];
  countryFlag: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  /** @deprecated URL should be built using player ID */
  headshot: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  playerId: Scalars['ID']['output'];
  position: Scalars['String']['output'];
  roundScore: Scalars['String']['output'];
  total: Scalars['String']['output'];
};

type ApiHoleGroupTeam = {
  __typename: 'HoleGroupTeam';
  players: Array<ApiHoleGroupPlayer>;
};

type ApiHoleHeader = {
  __typename: 'HoleHeader';
  hole: Scalars['String']['output'];
  holeNumber: Scalars['Int']['output'];
  par: Scalars['String']['output'];
};

type ApiHoleHeaderV2 = {
  __typename: 'HoleHeaderV2';
  displayValue: Scalars['String']['output'];
  holeNumber?: Maybe<Scalars['Int']['output']>;
  order: Scalars['Int']['output'];
  par: Scalars['String']['output'];
};

type ApiHoleMatch = {
  __typename: 'HoleMatch';
  groupName?: Maybe<Scalars['String']['output']>;
  match?: Maybe<ApiMpLeaderboardMatch>;
  matchLocation: Scalars['String']['output'];
  matchLocationCode: Scalars['String']['output'];
  tourcastURI?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  tourcastURL?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  tourcastURLWeb?: Maybe<Scalars['String']['output']>;
};

type ApiHolePickle = {
  __typename: 'HolePickle';
  bottomToTop: Scalars['String']['output'];
  bottomToTopAsset: ApiImageAsset;
  greenBottomToTop: Scalars['String']['output'];
  greenBottomToTopAsset: ApiImageAsset;
  greenLeftToRight: Scalars['String']['output'];
  greenLeftToRightAsset: ApiImageAsset;
  leftToRight: Scalars['String']['output'];
  leftToRightAsset: ApiImageAsset;
};

type ApiHolePickleType =
  | 'STANDARD'
  | 'TOURCAST_2D';

type ApiHolePlayedStatus =
  | 'PLAYED'
  | 'UNPLAYED';

type ApiHoleScore = {
  __typename: 'HoleScore';
  holeNumber: Scalars['Int']['output'];
  par: Scalars['Int']['output'];
  roundScore: Scalars['String']['output'];
  score: Scalars['String']['output'];
  sequenceNumber: Scalars['Int']['output'];
  status: ApiHoleScoreStatus;
  yardage: Scalars['Int']['output'];
};

type ApiHoleScoreStatus =
  | 'BIRDIE'
  | 'BOGEY'
  | 'CONCEDED'
  | 'DOUBLE_BOGEY'
  | 'EAGLE'
  | 'NONE'
  | 'PAR';

type ApiHoleStat = ApiCourseHoleStats | ApiSummaryRow;

type ApiHoleStatSummary = {
  __typename: 'HoleStatSummary';
  birdies?: Maybe<Scalars['Int']['output']>;
  birdiesPercent: Scalars['String']['output'];
  bogeys?: Maybe<Scalars['Int']['output']>;
  bogeysPercent: Scalars['String']['output'];
  courseId: Scalars['String']['output'];
  doubleBogeys?: Maybe<Scalars['Int']['output']>;
  doubleBogeysPercent: Scalars['String']['output'];
  eagles?: Maybe<Scalars['Int']['output']>;
  eaglesPercent: Scalars['String']['output'];
  holeNum: Scalars['Int']['output'];
  pars?: Maybe<Scalars['Int']['output']>;
  parsPercent: Scalars['String']['output'];
  scoringAverage?: Maybe<Scalars['String']['output']>;
  tournamentId: Scalars['ID']['output'];
};

type ApiHoleStroke = {
  __typename: 'HoleStroke';
  ballPath?: Maybe<ApiBallPath>;
  distance: Scalars['String']['output'];
  distanceRemaining: Scalars['String']['output'];
  finalStroke: Scalars['Boolean']['output'];
  fromLocation: Scalars['String']['output'];
  fromLocationCode: Scalars['String']['output'];
  green: ApiShotLinkCoordWrapper;
  groupShowMarker: Scalars['Boolean']['output'];
  markerText: Scalars['String']['output'];
  overview: ApiShotLinkCoordWrapper;
  playByPlay: Scalars['String']['output'];
  playByPlayLabel: Scalars['String']['output'];
  player?: Maybe<ApiTspStrokePlayer>;
  radarData?: Maybe<ApiRadarData>;
  showMarker: Scalars['Boolean']['output'];
  strokeNumber: Scalars['Int']['output'];
  strokeType: ApiHoleStrokeType;
  toLocation: Scalars['String']['output'];
  toLocationCode: Scalars['String']['output'];
  videoId?: Maybe<Scalars['String']['output']>;
};

type ApiHoleStrokeType =
  | 'DROP'
  | 'PENALTY'
  | 'PROVISIONAL'
  | 'STROKE';

type ApiHomePageLeadLayout =
  | 'HALF_HERO'
  | 'HALF_HERO_STACK'
  | 'HERO_STATUS'
  | 'HERO_STORY'
  | 'PLAYER_STORIES'
  | 'TOPIC_STORIES';

type ApiHomePageNewsLayout =
  | 'THREE_UP_ASSET'
  | 'TWO_UP_LARGE'
  | 'TWO_UP_SMALL'
  | 'TWO_UP_TEXT_ONLY';

type ApiHomePageProgramStandingLayout =
  | 'FIELD_PROMO_SECTION'
  | 'NORMAL'
  | 'SHORT'
  | 'SIGNATURE_EVENT_STANDINGS'
  | 'TWO_STANDINGS';

type ApiHomePageStanding = {
  __typename: 'HomePageStanding';
  country: Scalars['String']['output'];
  countryFlag: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  image: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  playerId: Scalars['String']['output'];
  rank?: Maybe<Scalars['Int']['output']>;
  stats: Array<ApiProgramStat>;
};

type ApiHomepage = {
  __typename: 'Homepage';
  fragments: Array<ApiHomepageFragment>;
};

type ApiHomepageAssets = ApiNewsArticle | ApiVideo;

type ApiHomepageCta = {
  __typename: 'HomepageCta';
  link: Scalars['String']['output'];
  text: Scalars['String']['output'];
  topText: Scalars['String']['output'];
};

type ApiHomepageFragment = ApiHomepageLead | ApiHomepageNews | ApiHomepageProgramStanding | ApiMediaGallery | ApiOddsToWinTracker | ApiThreeUpPhoto;

type ApiHomepageLead = {
  __typename: 'HomepageLead';
  ambientVideo?: Maybe<ApiVideo>;
  content: Array<ApiHomepageAssets>;
  cta?: Maybe<ApiHomepageCta>;
  displayDateTime?: Maybe<Scalars['Boolean']['output']>;
  displayPlayerPromoStats?: Maybe<Scalars['Boolean']['output']>;
  halfHeroShortHeadline?: Maybe<Scalars['Boolean']['output']>;
  headlineColor?: Maybe<Scalars['String']['output']>;
  headlineJustification?: Maybe<Scalars['String']['output']>;
  headshot?: Maybe<ApiProfileHeadshot>;
  leadLayout: ApiHomePageLeadLayout;
  location?: Maybe<ApiTournamentLocation>;
  photoJustification?: Maybe<Scalars['String']['output']>;
  playerId: Scalars['String']['output'];
  playerScore?: Maybe<ApiHomepagePlayerScore>;
  sectionTitle?: Maybe<Scalars['String']['output']>;
  topStats?: Maybe<Array<Maybe<ApiPlayerProfileStatItem>>>;
  topicLabel?: Maybe<Scalars['String']['output']>;
  weather?: Maybe<ApiTournamentWeather>;
};

type ApiHomepageNews = {
  __typename: 'HomepageNews';
  content: Array<ApiHomepageAssets>;
  cta?: Maybe<ApiHomepageCta>;
  displayDateTime?: Maybe<Scalars['Boolean']['output']>;
  franchises: Array<Scalars['String']['output']>;
  limit: Scalars['String']['output'];
  newsLayout: ApiHomePageNewsLayout;
  title: Scalars['String']['output'];
};

type ApiHomepagePlayerScore = {
  __typename: 'HomepagePlayerScore';
  playerId: Scalars['ID']['output'];
  round: Scalars['String']['output'];
  roundScore: Scalars['String']['output'];
  score: Scalars['String']['output'];
  total?: Maybe<Scalars['String']['output']>;
};

type ApiHomepageProgramStanding = {
  __typename: 'HomepageProgramStanding';
  backgroundImg?: Maybe<Scalars['String']['output']>;
  cta?: Maybe<ApiHomepageCta>;
  lastProcessed?: Maybe<Scalars['String']['output']>;
  pullFieldUpdates?: Maybe<Scalars['Boolean']['output']>;
  secondaryStandings?: Maybe<Array<Maybe<ApiHomePageStanding>>>;
  secondaryStandingsTitle?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use sponsorImgAsset */
  sponsorImg?: Maybe<Scalars['String']['output']>;
  sponsorImgAsset?: Maybe<ApiImageAsset>;
  standingLayout: ApiHomePageProgramStandingLayout;
  standings?: Maybe<Array<Maybe<ApiHomePageStanding>>>;
  standingsTitle?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};

type ApiHomepageScoring = {
  __typename: 'HomepageScoring';
  desktopCta?: Maybe<ApiCallToAction>;
  path: Scalars['String']['output'];
  pillCta?: Maybe<ApiCallToAction>;
  sectionTitle?: Maybe<Scalars['String']['output']>;
  tournamentId?: Maybe<Scalars['String']['output']>;
};

type ApiHospitalityCard = {
  __typename: 'HospitalityCard';
  blueBackground: Scalars['Boolean']['output'];
  cardDescription?: Maybe<Array<Maybe<ApiNewsArticleNode>>>;
  cardPhoto?: Maybe<Scalars['String']['output']>;
  cardTitle?: Maybe<Scalars['String']['output']>;
  cta?: Maybe<ApiCallToAction>;
  cta2?: Maybe<ApiCallToAction>;
  photoSubtitle?: Maybe<Scalars['String']['output']>;
};

type ApiIcon =
  | 'AMATEUR'
  | 'BACKNINE'
  | 'CUSTOM_ICON'
  | 'DISQUALIFIED'
  | 'FAVORITES'
  | 'HOT_STREAK'
  | 'LIVE'
  | 'ODDS_IMPROVED'
  | 'ODDS_WORSENED'
  | 'PLAYOFF_WIN'
  | 'PREVIOUSROUND'
  | 'SPONSOR'
  | 'SUDDEN_DEATH'
  | 'TOP_FEDEX_FALL_PLAYER'
  | 'TOUR_BOUND'
  | 'UPCOMING'
  | 'WITHDRAW';

type ApiImage = {
  __typename: 'Image';
  imageCreator?: Maybe<Scalars['String']['output']>;
  imageDescription?: Maybe<Scalars['String']['output']>;
  imageOrientation?: Maybe<ApiOrientation>;
  url?: Maybe<Scalars['String']['output']>;
};

type ApiImageAsset = {
  __typename: 'ImageAsset';
  assetType?: Maybe<Scalars['String']['output']>;
  /**   will always be image */
  deliveryType?: Maybe<Scalars['String']['output']>;
  /**   either "upload" or "fetch" */
  fallbackImage?: Maybe<Scalars['String']['output']>;
  imageOrg: Scalars['String']['output'];
  imagePath: Scalars['String']['output'];
};

type ApiImageBlock = {
  __typename: 'ImageBlock';
  backgroundImage?: Maybe<Scalars['String']['output']>;
  cta?: Maybe<ApiCallToAction>;
  textNodes?: Maybe<Array<Maybe<ApiNewsArticleNode>>>;
};

type ApiInformationData = {
  __typename: 'InformationData';
  detail?: Maybe<Scalars['String']['output']>;
  label: Scalars['String']['output'];
  secondaryDetail?: Maybe<Scalars['String']['output']>;
  smallCopy?: Maybe<Scalars['Boolean']['output']>;
  value: Scalars['String']['output'];
  wide?: Maybe<Scalars['Boolean']['output']>;
};

type ApiInformationRow = {
  __typename: 'InformationRow';
  displayText: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  leaderboardSortOrder: Scalars['Int']['output'];
  mobileDisplayText: Scalars['String']['output'];
  sponsorLogo?: Maybe<ApiImageAsset>;
  sponsorName?: Maybe<Scalars['String']['output']>;
};

type ApiInformationSection = {
  __typename: 'InformationSection';
  items: Array<ApiInformationSectionItem>;
  sponsorImages?: Maybe<Array<ApiSponsorImage>>;
  title: Scalars['String']['output'];
};

type ApiInformationSectionItem = ApiAbbreviations | ApiLegend;

type ApiIntegratedComponent = {
  __typename: 'IntegratedComponent';
  index: Scalars['Int']['output'];
  partner: ApiIntegrationPartner;
};

type ApiIntegrationPartner =
  | 'GOLFWRX';

type ApiJumpToSection = {
  __typename: 'JumpToSection';
  anchorHtmlId?: Maybe<Array<Scalars['String']['output']>>;
  dropdownText?: Maybe<Array<Scalars['String']['output']>>;
};

type ApiKopContentType = ApiNewsArticleHeader | ApiNewsArticleImage | ApiNewsArticleLineBreak | ApiNewsArticleLink | ApiNewsArticleParagraph | ApiNewsArticleText | ApiTableFragment | ApiUnorderedListNode;

type ApiKitOfParts = {
  __typename: 'KitOfParts';
  fragments: Array<ApiKopFragment>;
};

type ApiKopFragment = ApiHomepageNews | ApiKopHeader | ApiKopSignUp | ApiKopStandingsList | ApiKopSubheader | ApiKopUpcomingTournament | ApiKopZigZag | ApiThreeUpPhoto | ApiThreeUpStats | ApiTwoColumn | ApiVideoHero;

type ApiKopHeader = {
  __typename: 'KopHeader';
  cta?: Maybe<ApiCallToAction>;
  headerTitle: Scalars['String']['output'];
  headlineColor?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  logo?: Maybe<Scalars['String']['output']>;
  opacity?: Maybe<Scalars['String']['output']>;
  titleJustification?: Maybe<Scalars['String']['output']>;
};

type ApiKopSignUp = {
  __typename: 'KopSignUp';
  backgroundColor?: Maybe<Scalars['String']['output']>;
  backgroundImage?: Maybe<Scalars['String']['output']>;
  cta?: Maybe<ApiCallToAction>;
  ctaColor?: Maybe<Scalars['String']['output']>;
  header?: Maybe<Scalars['String']['output']>;
  logo?: Maybe<Scalars['String']['output']>;
  signUpText?: Maybe<Scalars['String']['output']>;
  textColor?: Maybe<Scalars['String']['output']>;
};

type ApiKopStandingsList = {
  __typename: 'KopStandingsList';
  cta?: Maybe<ApiCallToAction>;
  sectionTitle: Scalars['String']['output'];
  standings?: Maybe<Array<Maybe<ApiHomePageStanding>>>;
  type?: Maybe<Scalars['String']['output']>;
};

type ApiKopSubheader = {
  __typename: 'KopSubheader';
  cta?: Maybe<ApiCallToAction>;
  displayCta?: Maybe<Scalars['Boolean']['output']>;
  logo?: Maybe<Scalars['String']['output']>;
  subHeaderText?: Maybe<Array<Maybe<ApiNewsArticleNode>>>;
  type?: Maybe<Scalars['String']['output']>;
};

type ApiKopUpcomingTournament = {
  __typename: 'KopUpcomingTournament';
  title: Scalars['String']['output'];
};

type ApiKopZigZag = {
  __typename: 'KopZigZag';
  backgroundColorOne?: Maybe<Scalars['String']['output']>;
  backgroundColorTwo?: Maybe<Scalars['String']['output']>;
  ctaOne?: Maybe<ApiCallToAction>;
  ctaTwo?: Maybe<ApiCallToAction>;
  descriptionBackgroundColorOne?: Maybe<Scalars['String']['output']>;
  descriptionBackgroundColorTwo?: Maybe<Scalars['String']['output']>;
  descriptionOne?: Maybe<Array<Maybe<ApiNewsArticleNode>>>;
  descriptionTwo?: Maybe<Array<Maybe<ApiNewsArticleNode>>>;
  imageOne?: Maybe<Scalars['String']['output']>;
  imageTwo?: Maybe<Scalars['String']['output']>;
  subHeader?: Maybe<Scalars['String']['output']>;
  zigZaHeader: Scalars['String']['output'];
};

type ApiLbRound = {
  __typename: 'LBRound';
  displayText: Scalars['String']['output'];
  roundNumber: Scalars['Int']['output'];
};

type ApiLeaderStat = {
  __typename: 'LeaderStat';
  country: Scalars['String']['output'];
  countryFlag: Scalars['String']['output'];
  playerId: Scalars['String']['output'];
  playerName: Scalars['String']['output'];
  rank: Scalars['String']['output'];
  statId: Scalars['String']['output'];
  statTitle: Scalars['String']['output'];
  statValue: Scalars['String']['output'];
};

type ApiLeaderboardCompressed = {
  __typename: 'LeaderboardCompressed';
  id: Scalars['ID']['output'];
  payload: Scalars['String']['output'];
};

type ApiLeaderboardCompressedV2 = {
  __typename: 'LeaderboardCompressedV2';
  id: Scalars['ID']['output'];
  payload: Scalars['String']['output'];
};

/**   Returns the leaderboard for a tournament where payload contains the leaderboard data in Base64 encoding. */
type ApiLeaderboardCompressedV3 = {
  __typename: 'LeaderboardCompressedV3';
  /**   The tournament ID */
  id: Scalars['ID']['output'];
  /**   The full leaderboard payload/response. Will need to be Base64 decoded by clients */
  payload: Scalars['String']['output'];
};

type ApiLeaderboardDrawerV2 = {
  __typename: 'LeaderboardDrawerV2';
  backNine: Scalars['Boolean']['output'];
  currentHole?: Maybe<Scalars['Int']['output']>;
  currentRound: Scalars['Int']['output'];
  groupNumber: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  player: ApiPlayer;
  playerState?: Maybe<ApiPlayerState>;
  roundScores: Array<ApiRoundScore>;
  teeTime: Scalars['AWSTimestamp']['output'];
  tournamentName: Scalars['String']['output'];
};

type ApiLeaderboardFeature =
  | 'HOLE_BY_HOLE'
  | 'ODDS'
  | 'PROBABILITIES'
  | 'SHOT_DETAILS'
  | 'STROKES_GAINED';

type ApiLeaderboardHoleByHole = {
  __typename: 'LeaderboardHoleByHole';
  courseHoleHeaders: Array<ApiCourseHoleHeader>;
  courses: Array<ApiCourse>;
  currentRound: Scalars['Int']['output'];
  /** @deprecated use courseHoleHeaders */
  holeHeaders: Array<ApiHoleHeader>;
  playerData: Array<ApiPlayerRowHoleByHole>;
  rounds: Array<ApiLbRound>;
  tournamentId: Scalars['ID']['output'];
  tournamentName: Scalars['String']['output'];
};

type ApiLeaderboardInfo = {
  __typename: 'LeaderboardInfo';
  /** @deprecated can ignore, we remove sponship in MW */
  disableCdw: Scalars['Boolean']['output'];
  informationSections: Array<ApiInformationSection>;
  odds: Scalars['Boolean']['output'];
  tournamentId: Scalars['ID']['output'];
};

type ApiLeaderboardMessage = {
  __typename: 'LeaderboardMessage';
  externalLink?: Maybe<Scalars['Boolean']['output']>;
  messageIcon: ApiLeaderboardMessageIcon;
  messageLink?: Maybe<Scalars['String']['output']>;
  messageText: Scalars['String']['output'];
  platforms: Array<ApiPlatform>;
  timing?: Maybe<Scalars['Int']['output']>;
  webViewLink?: Maybe<Scalars['String']['output']>;
};

type ApiLeaderboardMessageIcon =
  | 'DELAY'
  | 'NONE'
  | 'WEATHER';

type ApiLeaderboardMovement =
  | 'CONSTANT'
  | 'DOWN'
  | 'UP';

type ApiLeaderboardOddsSwing = {
  __typename: 'LeaderboardOddsSwing';
  swing: ApiOddsSwing;
};

/**   new enum of possible player icon values, limited to hot streak at first creation */
type ApiLeaderboardPlayerIcon =
  | 'HOT_STREAK';

type ApiLeaderboardRoundStats = {
  __typename: 'LeaderboardRoundStats';
  players: Array<ApiLeaderboardStatsPlayer>;
  roundDisplayText: Scalars['String']['output'];
  roundNumber: Scalars['Int']['output'];
};

type ApiLeaderboardRowV2 = ApiInformationRow | ApiPlayerRowV2;

type ApiLeaderboardRowV3 = ApiInformationRow | ApiPlayerRowV3;

type ApiLeaderboardScoringDataV3 = {
  __typename: 'LeaderboardScoringDataV3';
  backNine: Scalars['Boolean']['output'];
  /**   COURSE */
  courseId: Scalars['String']['output'];
  currentRound: Scalars['Int']['output'];
  /**   LOCATION */
  groupNumber: Scalars['Int']['output'];
  /**   PLAYER STORIES */
  hasStoryContent: Scalars['Boolean']['output'];
  movementAmount: Scalars['String']['output'];
  movementDirection: ApiLeaderboardMovement;
  movementSort?: Maybe<Scalars['Int']['output']>;
  oddsOptionId?: Maybe<Scalars['String']['output']>;
  oddsSort?: Maybe<Scalars['Float']['output']>;
  oddsSwing?: Maybe<ApiOddsSwing>;
  /**   ODDS */
  oddsToWin?: Maybe<Scalars['String']['output']>;
  /**   POINTS */
  official: Scalars['String']['output'];
  officialSort: Scalars['Int']['output'];
  /**   Player icon, first us is for hot streak */
  playerIcon?: Maybe<ApiLeaderboardPlayerIcon>;
  playerState: ApiPlayerState;
  position: Scalars['String']['output'];
  projected: Scalars['String']['output'];
  projectedSort: Scalars['Int']['output'];
  rankLogoDark?: Maybe<Scalars['String']['output']>;
  rankLogoLight?: Maybe<Scalars['String']['output']>;
  rankingMovement: ApiCupRankMovementDirection;
  rankingMovementAmount: Scalars['String']['output'];
  rankingMovementAmountSort: Scalars['Int']['output'];
  roundDisplaySort?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  roundHeader: Scalars['String']['output'];
  roundStatus: Scalars['String']['output'];
  rounds: Array<Scalars['String']['output']>;
  score: Scalars['String']['output'];
  scoreSort: Scalars['Int']['output'];
  storyContentRound?: Maybe<Scalars['Int']['output']>;
  storyContentRounds: Array<Scalars['Int']['output']>;
  teeTime?: Maybe<Scalars['AWSTimestamp']['output']>;
  thru: Scalars['String']['output'];
  thruSort: Scalars['Int']['output'];
  tooltipText?: Maybe<Scalars['String']['output']>;
  tooltipTitle?: Maybe<Scalars['String']['output']>;
  total: Scalars['String']['output'];
  totalSort: Scalars['Int']['output'];
  /**
   *   null to hide value
   *  SCORING
   */
  totalStrokes: Scalars['String']['output'];
  totalStrokesSort?: Maybe<Scalars['Int']['output']>;
};

type ApiLeaderboardStatItem = {
  __typename: 'LeaderboardStatItem';
  color: Scalars['String']['output'];
  rank: Scalars['String']['output'];
  sortValue: Scalars['Float']['output'];
  statId: Scalars['String']['output'];
  supportValues?: Maybe<Array<ApiLeaderboardStatSupportValues>>;
  value: Scalars['String']['output'];
};

type ApiLeaderboardStatSupportValues = ApiLeaderboardOddsSwing | ApiLeaderboardSupportingString;

type ApiLeaderboardStats = {
  __typename: 'LeaderboardStats';
  id: Scalars['String']['output'];
  players: Array<ApiLeaderboardStatsPlayer>;
  rounds?: Maybe<Array<ApiLeaderboardRoundStats>>;
  statIds?: Maybe<Array<Scalars['String']['output']>>;
  titles: Array<Scalars['String']['output']>;
  type: ApiLeaderboardStatsType;
};

type ApiLeaderboardStatsPlayer = {
  __typename: 'LeaderboardStatsPlayer';
  playerId: Scalars['String']['output'];
  stats: Array<ApiLeaderboardStatItem>;
};

type ApiLeaderboardStatsType =
  | 'ODDS'
  | 'PROBABILITY'
  | 'STROKES_GAINED';

type ApiLeaderboardStroke = {
  __typename: 'LeaderboardStroke';
  currentHole: Scalars['Int']['output'];
  currentHoleDisplay: Scalars['String']['output'];
  currentHoleValueDisplay: Scalars['String']['output'];
  currentRound: Scalars['Int']['output'];
  currentShot: Scalars['Int']['output'];
  currentShotDisplay: Scalars['String']['output'];
  finalStroke: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  par: Scalars['String']['output'];
  parSort: Scalars['Int']['output'];
  playByPlay: Scalars['String']['output'];
  playerId: Scalars['String']['output'];
  playoffHole: Scalars['Int']['output'];
  playoffHoleDisplay: Scalars['String']['output'];
  scoreStatus: ApiHoleScoreStatus;
  strokeId: Scalars['String']['output'];
  yardage: Scalars['String']['output'];
  yardageSort: Scalars['Int']['output'];
};

type ApiLeaderboardStrokes = {
  __typename: 'LeaderboardStrokes';
  id: Scalars['ID']['output'];
  playoffs?: Maybe<Array<ApiLeaderboardStroke>>;
  strokes: Array<ApiLeaderboardStroke>;
};

type ApiLeaderboardStrokesCompressed = {
  __typename: 'LeaderboardStrokesCompressed';
  id: Scalars['ID']['output'];
  payload: Scalars['String']['output'];
};

type ApiLeaderboardSupportingString = {
  __typename: 'LeaderboardSupportingString';
  data: Scalars['String']['output'];
};

type ApiLeaderboardUpdateCompressed = {
  __typename: 'LeaderboardUpdateCompressed';
  id: Scalars['ID']['output'];
  payload: Scalars['String']['output'];
};

type ApiLeaderboardUpdateCompressedV3 = {
  __typename: 'LeaderboardUpdateCompressedV3';
  id: Scalars['ID']['output'];
  payload: Scalars['String']['output'];
};

type ApiLeaderboardUpdatePlayerV3 = {
  __typename: 'LeaderboardUpdatePlayerV3';
  id: Scalars['ID']['output'];
  leaderboardSortOrder: Scalars['Int']['output'];
  scoringData: ApiLeaderboardScoringDataV3;
};

type ApiLeaderboardUpdateRowV3 = ApiInformationRow | ApiLeaderboardUpdatePlayerV3;

type ApiLeaderboardUpdateV3 = {
  __typename: 'LeaderboardUpdateV3';
  cutLineProbabilities?: Maybe<ApiCutLineInfo>;
  id: Scalars['ID']['output'];
  isPlayoffActive: Scalars['Boolean']['output'];
  leaderboardRoundHeader: Scalars['String']['output'];
  messages: Array<ApiLeaderboardMessage>;
  players: Array<ApiLeaderboardUpdateRowV3>;
  rounds: Array<ApiLbRound>;
  subEvent: Scalars['Boolean']['output'];
  tournamentStatus: ApiTournamentStatus;
  winner?: Maybe<ApiWinner>;
  winners?: Maybe<Array<ApiWinner>>;
};

type ApiLeaderboardV2 = {
  __typename: 'LeaderboardV2';
  courses: Array<ApiCourse>;
  disableLeaderboard: Scalars['Boolean']['output'];
  /** @deprecated use leaderboardFeatures */
  features?: Maybe<Array<ApiLeaderboardFeature>>;
  formatType: ApiFormatType;
  id: Scalars['ID']['output'];
  /** @deprecated Use the leaderboard legend query */
  informationSections: Array<ApiInformationSection>;
  isPlayoffActive: Scalars['Boolean']['output'];
  leaderboardFeatures?: Maybe<Array<ApiFeatureItem>>;
  leaderboardRoundHeader: Scalars['String']['output'];
  messages: Array<ApiLeaderboardMessage>;
  players: Array<ApiLeaderboardRowV2>;
  profileEnabled: Scalars['Boolean']['output'];
  roundDisplay: Scalars['String']['output'];
  roundStatus: ApiRoundStatus;
  roundStatusColor: ApiRoundStatusColor;
  roundStatusDisplay: Scalars['String']['output'];
  rounds: Array<ApiLbRound>;
  scorecardEnabled: Scalars['Boolean']['output'];
  standingsEnabled: Scalars['Boolean']['output'];
  standingsHeader: Scalars['String']['output'];
  subEvent: Scalars['Boolean']['output'];
  timezone: Scalars['String']['output'];
  tourcastURI?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  tourcastURL?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  tourcastURLWeb?: Maybe<Scalars['String']['output']>;
  tournamentStatus: ApiTournamentStatus;
  winner?: Maybe<ApiWinner>;
};

type ApiLeaderboardV3 = {
  __typename: 'LeaderboardV3';
  bubblePill?: Maybe<ApiBubblePill>;
  courses: Array<ApiCourse>;
  cutLineProbabilities?: Maybe<ApiCutLineInfo>;
  disableBettingProfileColumn: Scalars['Boolean']['output'];
  disableLeaderboard: Scalars['Boolean']['output'];
  disableOdds: Scalars['Boolean']['output'];
  formatType: ApiFormatType;
  hideSov: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  isPlayoffActive: Scalars['Boolean']['output'];
  leaderboardFeatures?: Maybe<Array<ApiFeatureItem>>;
  leaderboardRoundHeader: Scalars['String']['output'];
  messages: Array<ApiLeaderboardMessage>;
  players: Array<ApiLeaderboardRowV3>;
  profileEnabled: Scalars['Boolean']['output'];
  rounds: Array<ApiLbRound>;
  scorecardEnabled: Scalars['Boolean']['output'];
  standingsEnabled: Scalars['Boolean']['output'];
  standingsHeader: Scalars['String']['output'];
  subEvent: Scalars['Boolean']['output'];
  timezone: Scalars['String']['output'];
  tourcastURI?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  tourcastURL?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  tourcastURLWeb?: Maybe<Scalars['String']['output']>;
  tournamentId: Scalars['String']['output'];
  tournamentStatus: ApiTournamentStatus;
  /** @deprecated use winners */
  winner?: Maybe<ApiWinner>;
  winners?: Maybe<Array<ApiWinner>>;
};

type ApiLegend = {
  __typename: 'Legend';
  accessibilityText?: Maybe<Scalars['String']['output']>;
  icon: ApiIcon;
  iconUrl?: Maybe<Scalars['String']['output']>;
  subText?: Maybe<Scalars['String']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};

type ApiListItem = {
  __typename: 'ListItem';
  segments: Array<Maybe<ApiListNodeItems>>;
};

type ApiListNodeItems = ApiNewsArticleContentSegment | ApiNewsArticleParagraph | ApiNewsArticlePlayerTournamentOdds | ApiUnorderedListNode;

type ApiLiveOverride =
  | 'FORCE_OFF'
  | 'FORCE_ON'
  | 'NORMAL';

type ApiLiveStatus =
  | 'LIVE'
  | 'NONE'
  | 'UPCOMING';

type ApiLiveVideoOverride = {
  __typename: 'LiveVideoOverride';
  simulcast?: Maybe<ApiBroadcastFullTelecast>;
  tourCode: ApiTourCode;
  videos: Array<ApiVideo>;
};

type ApiMpHolePlayer = {
  __typename: 'MPHolePlayer';
  holePoints?: Maybe<Scalars['String']['output']>;
  holeScore?: Maybe<Scalars['String']['output']>;
  /**   used for four ball type scoring */
  holeScoreStatus?: Maybe<ApiHoleScoreStatus>;
  holeScores?: Maybe<Array<ApiMatchHoleScore>>;
  playerId: Scalars['ID']['output'];
};

type ApiMpLeaderboard = {
  __typename: 'MPLeaderboard';
  courses: Array<ApiCourse>;
  currentRound: Scalars['Int']['output'];
  drawersEnabled: Scalars['Boolean']['output'];
  formatType: ApiFormatType;
  id: Scalars['ID']['output'];
  infoWebUrl: Scalars['String']['output'];
  informationSections: Array<ApiInformationSection>;
  messages: Array<ApiLeaderboardMessage>;
  roundFilters: Array<ApiRoundFilter>;
  rounds: Array<ApiMpLeaderboardRound>;
  shortTimezone: Scalars['String']['output'];
  timezone: Scalars['String']['output'];
  tourcastURI?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  tourcastURL?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  tourcastUrlWeb?: Maybe<Scalars['String']['output']>;
  winner?: Maybe<ApiMpLeaderboardPlayer>;
};

type ApiMpLeaderboardBracket = {
  __typename: 'MPLeaderboardBracket';
  bracketHeader: Scalars['String']['output'];
  bracketNum?: Maybe<Scalars['Int']['output']>;
  matches: Array<ApiMpLeaderboardMatch>;
  upcomingMatches?: Maybe<Array<ApiUpcomingMatch>>;
};

type ApiMpLeaderboardMatch = {
  __typename: 'MPLeaderboardMatch';
  bracketPlayerSwap?: Maybe<Scalars['Boolean']['output']>;
  matchId: Scalars['ID']['output'];
  matchScore?: Maybe<Scalars['String']['output']>;
  matchScoreColor?: Maybe<Scalars['String']['output']>;
  matchScoreColorDark?: Maybe<Scalars['String']['output']>;
  matchStatus: ApiMatchStatus;
  players: Array<ApiMpLeaderboardPlayer>;
  teeTime: Scalars['AWSTimestamp']['output'];
  thru?: Maybe<Scalars['String']['output']>;
  thruNumberOfHoles?: Maybe<Scalars['Int']['output']>;
};

type ApiMpLeaderboardPlayer = {
  __typename: 'MPLeaderboardPlayer';
  activeInPlayoff?: Maybe<Scalars['Boolean']['output']>;
  bracketSeed: Scalars['String']['output'];
  countryFlag: Scalars['String']['output'];
  countryName: Scalars['String']['output'];
  displayColor: Scalars['String']['output'];
  displayName: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  /** @deprecated URL should be built using player ID */
  headshot: Scalars['String']['output'];
  isAmateur: Scalars['Boolean']['output'];
  lastName: Scalars['String']['output'];
  matchStatus?: Maybe<Scalars['String']['output']>;
  playerId: Scalars['ID']['output'];
  record?: Maybe<Scalars['String']['output']>;
  shortName?: Maybe<Scalars['String']['output']>;
  tournamentSeed: Scalars['String']['output'];
};

type ApiMpLeaderboardRound = {
  __typename: 'MPLeaderboardRound';
  brackets: Array<ApiMpLeaderboardBracket>;
  round: Scalars['Int']['output'];
  roundHeader: Scalars['String']['output'];
  roundStatusSubHead: Scalars['String']['output'];
  roundTypeSubHead: Scalars['String']['output'];
};

type ApiMpMatchTeeTimes = {
  __typename: 'MPMatchTeeTimes';
  matchId: Scalars['ID']['output'];
  players: Array<ApiMpTeeTimePlayer>;
  status: Scalars['String']['output'];
  tee: Scalars['String']['output'];
  teeTime: Scalars['AWSTimestamp']['output'];
  timezone: Scalars['String']['output'];
};

type ApiMpPlayoffScorecard = {
  __typename: 'MPPlayoffScorecard';
  currentHole?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  infoWebUrl?: Maybe<Scalars['String']['output']>;
  playoff: ApiPlayoff;
  scorecardTitle: Scalars['String']['output'];
  tourcastURI?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  tourcastURL?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  tourcastUrlWeb?: Maybe<Scalars['String']['output']>;
};

type ApiMpRoundTeeTimes = {
  __typename: 'MPRoundTeeTimes';
  matchTeeTimes: Array<ApiMpMatchTeeTimes>;
  roundNumber: Scalars['Int']['output'];
};

type ApiMpScorecard = {
  __typename: 'MPScorecard';
  currentHole?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  infoWebUrl?: Maybe<Scalars['String']['output']>;
  matchHoleScores: Array<ApiMatchHole>;
  matchName: Scalars['String']['output'];
  matchPlayers: Array<ApiMpScorecardPlayer>;
  messages: Array<ApiMessage>;
  scorecardTitle: Scalars['String']['output'];
  tourcastURI?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  tourcastUrl?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  tourcastUrlWeb?: Maybe<Scalars['String']['output']>;
};

type ApiMpScorecardPlayer = {
  __typename: 'MPScorecardPlayer';
  countryFlag: Scalars['String']['output'];
  displayColor: Scalars['String']['output'];
  displayName: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  isAmateur: Scalars['Boolean']['output'];
  lastName: Scalars['String']['output'];
  playerId: Scalars['ID']['output'];
  seed: Scalars['String']['output'];
  shortName: Scalars['String']['output'];
};

type ApiMpScorecardResults = {
  __typename: 'MPScorecardResults';
  matchId: Scalars['String']['output'];
  messages?: Maybe<Array<ApiMessage>>;
  players: Array<ApiMpScorecardResultsPlayer>;
  roundNum: Scalars['Int']['output'];
  tournamentId: Scalars['String']['output'];
};

type ApiMpScorecardResultsPlayer = {
  __typename: 'MPScorecardResultsPlayer';
  displayName: Scalars['String']['output'];
  playerId: Scalars['ID']['output'];
  previousRounds: Array<ApiPreviousRounds>;
};

type ApiMpTeeTimePlayer = {
  __typename: 'MPTeeTimePlayer';
  countryFlag: Scalars['String']['output'];
  displayName: Scalars['String']['output'];
  /** @deprecated URL should be built using player ID */
  headshot: Scalars['String']['output'];
  playerId: Scalars['ID']['output'];
  shortName: Scalars['String']['output'];
};

type ApiMpTeeTimes = {
  __typename: 'MPTeeTimes';
  defaultRound: Scalars['Int']['output'];
  drawersEnabled: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  roundFilters: Array<ApiRoundFilter>;
  rounds: Array<ApiMpRoundTeeTimes>;
  teeTimeHeaders: Array<ApiTeeTimeHeader>;
  title: Scalars['String']['output'];
};

type ApiMajorResultsTournament = {
  __typename: 'MajorResultsTournament';
  courseName: Scalars['String']['output'];
  date: Scalars['String']['output'];
  money: Scalars['String']['output'];
  position: Scalars['String']['output'];
  roundScores: Array<ApiRoundScoreItem>;
  toPar: Scalars['String']['output'];
  total: Scalars['String']['output'];
  tourcastURI?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  tourcastURL?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  tourcastURLWeb?: Maybe<Scalars['String']['output']>;
  tournamentId: Scalars['String']['output'];
  tournamentName: Scalars['String']['output'];
  year: Scalars['Int']['output'];
};

type ApiMajorTimeline = {
  __typename: 'MajorTimeline';
  finishes: Array<Scalars['String']['output']>;
  tournamentName: Scalars['String']['output'];
  tournamentNum: Scalars['String']['output'];
};

type ApiMarket = {
  __typename: 'Market';
  header: Scalars['String']['output'];
  /**   used for switching between submarkets like "Group A" */
  marketType: ApiOddsMarketType;
  /**   Tournament Winner */
  subMarketPills?: Maybe<Array<Scalars['String']['output']>>;
  subMarkets: Array<ApiSubMarket>;
};

type ApiMarketPill = {
  __typename: 'MarketPill';
  displayText: Scalars['String']['output'];
  marketType: ApiOddsMarketType;
};

type ApiMatchCard = {
  __typename: 'MatchCard';
  matchId?: Maybe<Scalars['String']['output']>;
  path: Scalars['String']['output'];
  round?: Maybe<Scalars['String']['output']>;
  tourcastWebview?: Maybe<Scalars['String']['output']>;
  tournamentId?: Maybe<Scalars['String']['output']>;
};

type ApiMatchHole = {
  __typename: 'MatchHole';
  courseHoleNumber: Scalars['String']['output'];
  holeNumber: Scalars['String']['output'];
  holeNumberColor: Scalars['String']['output'];
  holeOutlineColor?: Maybe<Scalars['String']['output']>;
  holePlayedStatus: ApiHolePlayedStatus;
  matchHolePlayers: Array<ApiMpHolePlayer>;
  matchScore?: Maybe<Scalars['String']['output']>;
  matchScoreColor: Scalars['String']['output'];
  parValue: Scalars['String']['output'];
};

type ApiMatchHoleScore = {
  __typename: 'MatchHoleScore';
  holeScore?: Maybe<Scalars['String']['output']>;
  holeScoreStatus?: Maybe<ApiHoleScoreStatus>;
  playerId: Scalars['ID']['output'];
};

type ApiMatchStatus =
  | 'COMPLETE'
  | 'IN_PROGRESS'
  | 'UPCOMING';

type ApiMatchupOptionV2 = ApiBaseOddsOption & {
  __typename: 'MatchupOptionV2';
  entity: ApiOddsEntity;
  isTie: Scalars['Boolean']['output'];
  odds: ApiOddsValues;
};

type ApiMatchupsPlayer = {
  __typename: 'MatchupsPlayer';
  countryFlag?: Maybe<Scalars['String']['output']>;
  currentRound?: Maybe<Scalars['Int']['output']>;
  displayName: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastName: Scalars['String']['output'];
  matchId?: Maybe<Scalars['Int']['output']>;
  odds: Scalars['String']['output'];
  oddsSwing?: Maybe<ApiOddsSwing>;
  optionsId: Scalars['String']['output'];
  seed?: Maybe<Scalars['Int']['output']>;
};

type ApiMediaGallery = {
  __typename: 'MediaGallery';
  contentDescription?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  cta?: Maybe<ApiHomepageCta>;
  mediaGallery?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  mediaGalleryObjs?: Maybe<Array<Maybe<ApiMediaGalleryItems>>>;
  sectionTitle?: Maybe<Scalars['String']['output']>;
};

type ApiMediaGalleryItem = {
  __typename: 'MediaGalleryItem';
  orientation?: Maybe<ApiOrientation>;
  path?: Maybe<Scalars['String']['output']>;
};

type ApiMediaGalleryItems = ApiMediaGalleryItem | ApiVideo;

type ApiMessage = {
  __typename: 'Message';
  body: Array<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

type ApiMessageBanner = {
  __typename: 'MessageBanner';
  messageLink?: Maybe<Scalars['String']['output']>;
  messageText?: Maybe<Scalars['String']['output']>;
  path: Scalars['String']['output'];
};

type ApiMobileCategoryPill = {
  __typename: 'MobileCategoryPill';
  category?: Maybe<ApiStatCategory>;
  displayName: Scalars['String']['output'];
};

type ApiMobileStat = {
  __typename: 'MobileStat';
  statId: Scalars['String']['output'];
  statTitle: Scalars['String']['output'];
};

type ApiMobileStatCategoryLeaders = {
  __typename: 'MobileStatCategoryLeaders';
  category: ApiStatCategory;
  categoryHeader: Scalars['String']['output'];
  leaders: Array<ApiLeaderStat>;
  stats: Array<ApiMobileStat>;
};

type ApiMobileStatLeaders = {
  __typename: 'MobileStatLeaders';
  categories: Array<ApiMobileStatCategoryLeaders>;
  categoryPills: Array<ApiMobileCategoryPill>;
  tourCode: ApiTourCode;
  year: Scalars['Int']['output'];
};

type ApiMutation = {
  __typename: 'Mutation';
  addFavoriteTour: ApiFavoriteTourResponse;
  addFavorites: Array<ApiFavoritePlayer>;
  addNotificationTags: ApiNotificationTagResponse;
  deleteAccount: ApiDeleteAccountResponse;
  deleteFavorites: Array<ApiFavoritePlayer>;
  deleteNotificationTags: ApiNotificationTagResponse;
  unsubscribe: ApiUnsubscribeResponse;
  updateBubble?: Maybe<ApiBubbleWatch>;
  updateBubbleWatch?: Maybe<ApiTourCupRankingEvent>;
  updateCourseStats?: Maybe<ApiTournamentHoleStats>;
  updateCoverage?: Maybe<ApiBroadcastCoverage>;
  updateCupOverviewLeaderboard?: Maybe<ApiCupTournamentStatus>;
  updateCupRoundLeaderboard?: Maybe<ApiCupTournamentLeaderboard>;
  updateCupRoundLeaderboardCompressed?: Maybe<ApiCupTournamentLeaderboardCompressed>;
  updateCupScorecard?: Maybe<ApiCupScorecard>;
  updateCurrentLeadersCompressed?: Maybe<ApiCurrentLeadersCompressed>;
  updateGroupLocations?: Maybe<ApiGroupLocationCourse>;
  updateGroupLocationsEnhanced?: Maybe<ApiGroupLocationCourse>;
  updateHoleDetails?: Maybe<ApiHoleDetail>;
  updateLeaderboardCompressedV2?: Maybe<ApiLeaderboardCompressedV2>;
  updateLeaderboardCompressedV3?: Maybe<ApiLeaderboardUpdateCompressedV3>;
  updateLeaderboardStrokes?: Maybe<ApiLeaderboardStrokes>;
  updateLeaderboardStrokesCompressed?: Maybe<ApiLeaderboardStrokesCompressed>;
  updateLeaderboardV2?: Maybe<ApiLeaderboardV2>;
  updateMatchOutcomeIq?: Maybe<ApiRyderCupMatchOutcomeIq>;
  updateMatchPlayLeaderboard?: Maybe<ApiMpLeaderboard>;
  updateMatchPlayLeaderboardCompressed?: Maybe<ApiLeaderboardCompressed>;
  updateMatchPlayPlayoffScorecard?: Maybe<ApiMpPlayoffScorecard>;
  updateMatchPlayScorecard?: Maybe<ApiMpScorecard>;
  updateMatchPlayTeeTimes: ApiMpTeeTimes;
  updateMatchPlayTeeTimesCompressed?: Maybe<ApiTeeTimesCompressed>;
  updateOddsToWinMarket?: Maybe<ApiOddsToWinMarket>;
  updateOddsToWinMarketCompressed?: Maybe<ApiOddsToWinMarketCompressed>;
  updatePlayerHub?: Maybe<ApiPlayerHubPlayerCompressed>;
  updatePlayerTournamentStatus?: Maybe<ApiPlayerTournamentStatus>;
  updatePlayoffScorecard?: Maybe<ApiPlayoffScorecard>;
  updatePlayoffScorecardV2: Array<ApiPlayoffScorecard>;
  updatePlayoffScorecardV3: ApiTournamentPlayoffScorecards;
  updatePlayoffShotDetails: ApiGroupShotDetails;
  updatePlayoffShotDetailsCompressed: ApiGroupShotDetailsCompressed;
  updateScorecardCompressedV3?: Maybe<ApiScorecardUpdateCompressedV3>;
  updateScorecardStats?: Maybe<ApiPlayerScorecardStats>;
  updateScorecardStatsCompressedV3?: Maybe<ApiPlayerScorecardStatsCompressed>;
  updateScorecardV2?: Maybe<ApiLeaderboardDrawerV2>;
  updateShotCommentary?: Maybe<ApiShotCommentary>;
  updateShotDetailsCompressedV3?: Maybe<ApiShotDetailsCompressedV3>;
  updateTGLMatch?: Maybe<ApiTglMatch>;
  updateTSPPlayoffShotDetails: ApiTeamShotDetails;
  updateTSPPlayoffShotDetailsCompressed: ApiTeamShotDetailsCompressed;
  updateTeamPlayLeaderboard?: Maybe<ApiTspLeaderboard>;
  updateTeamPlayLeaderboardCompressed?: Maybe<ApiLeaderboardCompressed>;
  updateTeamPlayScorecard?: Maybe<ApiTspScorecard>;
  updateTeamPlayScorecardRounds?: Maybe<ApiTspScorecardRounds>;
  updateTeamStrokePlayTeeTimes?: Maybe<ApiTspTeeTimes>;
  updateTeamStrokePlayTeeTimesCompressed?: Maybe<ApiTeeTimesCompressed>;
  updateTeeTimes?: Maybe<ApiTeeTimes>;
  updateTeeTimesCompressed?: Maybe<ApiTeeTimesCompressed>;
  updateTeeTimesCompressedV2?: Maybe<ApiTeeTimesCompressed>;
  updateTeeTimesV2?: Maybe<ApiTeeTimesV2>;
  updateTourCup?: Maybe<ApiTourCupRankingEvent>;
  updateTourcastTable?: Maybe<ApiTourcastTable>;
  updateTournament?: Maybe<ApiTournament>;
  updateTournamentGroupLocations?: Maybe<ApiTournamentGroupLocation>;
  updateUpcomingSchedule?: Maybe<ApiScheduleUpcoming>;
};


type ApiMutationAddFavoriteTourArgs = {
  tourCode: ApiTourCode;
};


type ApiMutationAddFavoritesArgs = {
  favorites: Array<ApiFavoritePlayerInput>;
};


type ApiMutationAddNotificationTagsArgs = {
  notificationTags: Array<ApiNotificationTagInput>;
};


type ApiMutationDeleteFavoritesArgs = {
  favorites: Array<ApiFavoritePlayerInput>;
};


type ApiMutationDeleteNotificationTagsArgs = {
  notificationTags: Array<ApiNotificationTagInput>;
};


type ApiMutationUnsubscribeArgs = {
  email: Scalars['String']['input'];
  subscriptionIds: Array<InputMaybe<Scalars['String']['input']>>;
};


type ApiMutationUpdateBubbleArgs = {
  bubbleId: Scalars['ID']['input'];
};


type ApiMutationUpdateBubbleWatchArgs = {
  tourCode: ApiTourCode;
};


type ApiMutationUpdateCourseStatsArgs = {
  tournamentId: Scalars['ID']['input'];
};


type ApiMutationUpdateCoverageArgs = {
  tournamentId: Scalars['ID']['input'];
};


type ApiMutationUpdateCupOverviewLeaderboardArgs = {
  id: Scalars['ID']['input'];
};


type ApiMutationUpdateCupRoundLeaderboardArgs = {
  round?: InputMaybe<Scalars['Int']['input']>;
  tournamentId: Scalars['String']['input'];
};


type ApiMutationUpdateCupRoundLeaderboardCompressedArgs = {
  round?: InputMaybe<Scalars['Int']['input']>;
  tournamentId: Scalars['String']['input'];
};


type ApiMutationUpdateCupScorecardArgs = {
  matchId: Scalars['Int']['input'];
  round: Scalars['Int']['input'];
  tournamentId: Scalars['ID']['input'];
};


type ApiMutationUpdateCurrentLeadersCompressedArgs = {
  tournamentId: Scalars['ID']['input'];
};


type ApiMutationUpdateGroupLocationsArgs = {
  courseId: Scalars['String']['input'];
  round: Scalars['Int']['input'];
  tournamentId: Scalars['ID']['input'];
};


type ApiMutationUpdateGroupLocationsEnhancedArgs = {
  courseId: Scalars['String']['input'];
  round: Scalars['Int']['input'];
  tournamentId: Scalars['ID']['input'];
};


type ApiMutationUpdateHoleDetailsArgs = {
  courseId: Scalars['ID']['input'];
  hole: Scalars['Int']['input'];
  tournamentId: Scalars['ID']['input'];
};


type ApiMutationUpdateLeaderboardCompressedV2Args = {
  id: Scalars['ID']['input'];
};


type ApiMutationUpdateLeaderboardCompressedV3Args = {
  odds?: InputMaybe<ApiOddsUpdateInput>;
  tournamentId: Scalars['ID']['input'];
};


type ApiMutationUpdateLeaderboardStrokesArgs = {
  id: Scalars['ID']['input'];
};


type ApiMutationUpdateLeaderboardStrokesCompressedArgs = {
  id: Scalars['ID']['input'];
};


type ApiMutationUpdateLeaderboardV2Args = {
  id: Scalars['ID']['input'];
};


type ApiMutationUpdateMatchOutcomeIqArgs = {
  matchId: Scalars['Int']['input'];
  roundNumber?: InputMaybe<Scalars['Int']['input']>;
  tournamentId: Scalars['ID']['input'];
};


type ApiMutationUpdateMatchPlayLeaderboardArgs = {
  id: Scalars['ID']['input'];
};


type ApiMutationUpdateMatchPlayLeaderboardCompressedArgs = {
  id: Scalars['ID']['input'];
};


type ApiMutationUpdateMatchPlayPlayoffScorecardArgs = {
  id: Scalars['ID']['input'];
};


type ApiMutationUpdateMatchPlayScorecardArgs = {
  id: Scalars['ID']['input'];
};


type ApiMutationUpdateMatchPlayTeeTimesArgs = {
  id: Scalars['ID']['input'];
};


type ApiMutationUpdateMatchPlayTeeTimesCompressedArgs = {
  id: Scalars['ID']['input'];
};


type ApiMutationUpdateOddsToWinMarketArgs = {
  oddsToWinId: Scalars['ID']['input'];
};


type ApiMutationUpdateOddsToWinMarketCompressedArgs = {
  oddsToWinId: Scalars['ID']['input'];
};


type ApiMutationUpdatePlayerHubArgs = {
  id: Scalars['ID']['input'];
};


type ApiMutationUpdatePlayerTournamentStatusArgs = {
  playerId: Scalars['ID']['input'];
  tournamentId: Scalars['String']['input'];
};


type ApiMutationUpdatePlayoffScorecardArgs = {
  id: Scalars['ID']['input'];
};


type ApiMutationUpdatePlayoffScorecardV2Args = {
  id: Scalars['ID']['input'];
};


type ApiMutationUpdatePlayoffScorecardV3Args = {
  tournamentId: Scalars['ID']['input'];
};


type ApiMutationUpdatePlayoffShotDetailsArgs = {
  tournamentId: Scalars['ID']['input'];
};


type ApiMutationUpdatePlayoffShotDetailsCompressedArgs = {
  tournamentId: Scalars['ID']['input'];
};


type ApiMutationUpdateScorecardCompressedV3Args = {
  id: Scalars['ID']['input'];
  rounds?: InputMaybe<Array<Scalars['Int']['input']>>;
};


type ApiMutationUpdateScorecardStatsArgs = {
  id: Scalars['ID']['input'];
  playerId: Scalars['String']['input'];
};


type ApiMutationUpdateScorecardStatsCompressedV3Args = {
  id: Scalars['ID']['input'];
  playerId: Scalars['String']['input'];
  rounds: Array<Scalars['Int']['input']>;
};


type ApiMutationUpdateScorecardV2Args = {
  id: Scalars['ID']['input'];
};


type ApiMutationUpdateShotCommentaryArgs = {
  commentary: Array<ApiShotCommentaryItemInput>;
  playerId: Scalars['String']['input'];
  round: Scalars['Int']['input'];
  tournamentId: Scalars['String']['input'];
};


type ApiMutationUpdateShotDetailsCompressedV3Args = {
  holes: Array<Scalars['Int']['input']>;
  isUs: Scalars['Boolean']['input'];
  playerId: Scalars['String']['input'];
  round: Scalars['Int']['input'];
  tourcast: Scalars['Boolean']['input'];
  tournamentId: Scalars['String']['input'];
};


type ApiMutationUpdateTglMatchArgs = {
  matchID: Scalars['ID']['input'];
};


type ApiMutationUpdateTspPlayoffShotDetailsArgs = {
  tournamentId: Scalars['ID']['input'];
};


type ApiMutationUpdateTspPlayoffShotDetailsCompressedArgs = {
  tournamentId: Scalars['ID']['input'];
};


type ApiMutationUpdateTeamPlayLeaderboardArgs = {
  id: Scalars['ID']['input'];
  provider: Scalars['String']['input'];
};


type ApiMutationUpdateTeamPlayLeaderboardCompressedArgs = {
  id: Scalars['ID']['input'];
  provider: Scalars['String']['input'];
};


type ApiMutationUpdateTeamPlayScorecardArgs = {
  id: Scalars['ID']['input'];
};


type ApiMutationUpdateTeamPlayScorecardRoundsArgs = {
  id: Scalars['ID']['input'];
};


type ApiMutationUpdateTeamStrokePlayTeeTimesArgs = {
  id: Scalars['ID']['input'];
};


type ApiMutationUpdateTeamStrokePlayTeeTimesCompressedArgs = {
  id: Scalars['ID']['input'];
};


type ApiMutationUpdateTeeTimesArgs = {
  id: Scalars['ID']['input'];
};


type ApiMutationUpdateTeeTimesCompressedArgs = {
  id: Scalars['ID']['input'];
};


type ApiMutationUpdateTeeTimesCompressedV2Args = {
  id: Scalars['ID']['input'];
};


type ApiMutationUpdateTeeTimesV2Args = {
  id: Scalars['ID']['input'];
};


type ApiMutationUpdateTourCupArgs = {
  id: Scalars['ID']['input'];
  type?: InputMaybe<ApiTourCupType>;
};


type ApiMutationUpdateTourcastTableArgs = {
  tournamentId: Scalars['ID']['input'];
};


type ApiMutationUpdateTournamentArgs = {
  id: Scalars['ID']['input'];
};


type ApiMutationUpdateTournamentGroupLocationsArgs = {
  round: Scalars['Int']['input'];
  tournamentId: Scalars['ID']['input'];
};


type ApiMutationUpdateUpcomingScheduleArgs = {
  tourCode: Scalars['String']['input'];
  year?: InputMaybe<Scalars['String']['input']>;
};

type ApiNewsArticle = {
  __typename: 'NewsArticle';
  aiGenerated?: Maybe<Scalars['Boolean']['output']>;
  analyticsTags?: Maybe<Array<Scalars['String']['output']>>;
  articleFormType?: Maybe<ApiArticleFormType>;
  /** @deprecated Use articleImageAsset */
  articleImage?: Maybe<Scalars['String']['output']>;
  articleImageAlt: Scalars['String']['output'];
  articleImageAsset?: Maybe<ApiImageAsset>;
  articleLabel?: Maybe<Scalars['String']['output']>;
  author?: Maybe<ApiNewsArticleAuthor>;
  brightcoveId?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use contentTournamentIds */
  contentTournamentId?: Maybe<Scalars['String']['output']>;
  contentTournamentIds?: Maybe<Array<Scalars['String']['output']>>;
  dateTextOverride?: Maybe<Scalars['String']['output']>;
  externalLinkOverride?: Maybe<Scalars['String']['output']>;
  franchise: Scalars['String']['output'];
  franchiseDisplayName: Scalars['String']['output'];
  franchiseTags?: Maybe<Array<Scalars['String']['output']>>;
  headline?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isBreakingNews?: Maybe<Scalars['Boolean']['output']>;
  isLive: Scalars['Boolean']['output'];
  photoGalleryPath?: Maybe<Scalars['String']['output']>;
  pinned: Scalars['Boolean']['output'];
  players?: Maybe<Array<ApiArticlePlayer>>;
  publishDate?: Maybe<Scalars['AWSTimestamp']['output']>;
  shareURL: Scalars['String']['output'];
  sponsor?: Maybe<ApiNewsArticleSponsor>;
  team?: Maybe<ApiRyderCupTeamType>;
  teaserContent?: Maybe<Scalars['String']['output']>;
  teaserHeadline?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use teaserImageOverrideAsset */
  teaserImageOverride?: Maybe<Scalars['String']['output']>;
  teaserImageOverrideAsset?: Maybe<ApiImageAsset>;
  topics?: Maybe<Array<ApiContentTopics>>;
  updateDate?: Maybe<Scalars['AWSTimestamp']['output']>;
  url: Scalars['String']['output'];
};

type ApiNewsArticleAuthor = {
  __typename: 'NewsArticleAuthor';
  byLine?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use byLineIconAsset */
  byLineIcon?: Maybe<Scalars['String']['output']>;
  byLineIconAsset?: Maybe<ApiImageAsset>;
  byLineLink?: Maybe<Scalars['String']['output']>;
  byLineLinkDisplay?: Maybe<Scalars['String']['output']>;
  firstName: Scalars['String']['output'];
  /** @deprecated Use headshotAsset */
  headshot?: Maybe<Scalars['String']['output']>;
  headshotAsset?: Maybe<ApiImageAsset>;
  lastName: Scalars['String']['output'];
  twitter?: Maybe<Scalars['String']['output']>;
};

type ApiNewsArticleBlockQuote = {
  __typename: 'NewsArticleBlockQuote';
  class?: Maybe<Scalars['String']['output']>;
  otherAttribute?: Maybe<Scalars['String']['output']>;
  playerId?: Maybe<Scalars['String']['output']>;
  playerName?: Maybe<Scalars['String']['output']>;
  quote?: Maybe<Scalars['String']['output']>;
};

type ApiNewsArticleContentSegment = {
  __typename: 'NewsArticleContentSegment';
  data?: Maybe<Scalars['String']['output']>;
  format?: Maybe<ApiNewsArticleFormat>;
  id?: Maybe<Scalars['String']['output']>;
  imageAsset?: Maybe<ApiImageAsset>;
  imageDescription?: Maybe<Scalars['String']['output']>;
  imageOrientation?: Maybe<ApiOrientation>;
  type: Scalars['String']['output'];
  value?: Maybe<Scalars['String']['output']>;
  webViewLink?: Maybe<Scalars['String']['output']>;
};

type ApiNewsArticleDetails = {
  __typename: 'NewsArticleDetails';
  aiGenerated?: Maybe<Scalars['Boolean']['output']>;
  analyticsTags?: Maybe<Array<Scalars['String']['output']>>;
  articleImageAlt: Scalars['String']['output'];
  articleLabel?: Maybe<Scalars['String']['output']>;
  articleSponsor?: Maybe<Scalars['String']['output']>;
  authorReference?: Maybe<ApiNewsArticleAuthor>;
  brandedContent: Scalars['Boolean']['output'];
  canonicalUrl?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tournaments.contentTournamentId */
  contentTournamentId?: Maybe<Scalars['String']['output']>;
  cta?: Maybe<ApiCallToAction>;
  datePublished: Scalars['AWSTimestamp']['output'];
  disableAds: Scalars['Boolean']['output'];
  franchise: Scalars['String']['output'];
  franchiseDisplayName: Scalars['String']['output'];
  headline: Scalars['String']['output'];
  hero?: Maybe<ApiNewsArticleHero>;
  isBreakingNews?: Maybe<Scalars['Boolean']['output']>;
  isLive: Scalars['Boolean']['output'];
  leadVideoId?: Maybe<Scalars['String']['output']>;
  leadVideoTitle?: Maybe<Scalars['String']['output']>;
  longForm?: Maybe<Scalars['Boolean']['output']>;
  metadata?: Maybe<ApiNewsArticleMetadata>;
  moreNewsItems: Array<ApiNewsArticle>;
  moreNewsTitle?: Maybe<Scalars['String']['output']>;
  nodes: Array<ApiNewsArticleNode>;
  overviewNodes?: Maybe<Array<ApiNewsArticleNode>>;
  path: Scalars['String']['output'];
  photoPosition?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use players field that contains name and id */
  playerNames?: Maybe<Array<Scalars['String']['output']>>;
  players?: Maybe<Array<ApiArticlePlayer>>;
  readTime: Scalars['String']['output'];
  relatedFacts?: Maybe<Array<Scalars['String']['output']>>;
  shareURL: Scalars['String']['output'];
  sponsor?: Maybe<ApiNewsArticleSponsor>;
  tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  team?: Maybe<ApiRyderCupTeamType>;
  teaserAsset?: Maybe<Scalars['String']['output']>;
  topics?: Maybe<Array<ApiContentTopics>>;
  /** @deprecated Use tournaments.tourName */
  tourName?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tournaments.tournamentName */
  tournamentName?: Maybe<Scalars['String']['output']>;
  tournaments?: Maybe<Array<ApiNewsArticleDetailsTournament>>;
  url: Scalars['String']['output'];
};

type ApiNewsArticleDetailsCompressed = {
  __typename: 'NewsArticleDetailsCompressed';
  path: Scalars['String']['output'];
  payload: Scalars['String']['output'];
};

type ApiNewsArticleDetailsTournament = {
  __typename: 'NewsArticleDetailsTournament';
  contentTournamentId: Scalars['String']['output'];
  tourName: Scalars['String']['output'];
  tournamentName: Scalars['String']['output'];
};

type ApiNewsArticleDivider = {
  __typename: 'NewsArticleDivider';
  value?: Maybe<Scalars['String']['output']>;
};

type ApiNewsArticleEmbedded = {
  __typename: 'NewsArticleEmbedded';
  class?: Maybe<Scalars['String']['output']>;
  frameborder?: Maybe<Scalars['Boolean']['output']>;
  height?: Maybe<Scalars['String']['output']>;
  mobileHeight?: Maybe<Scalars['String']['output']>;
  scroll?: Maybe<Scalars['Boolean']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

type ApiNewsArticleFormat = {
  __typename: 'NewsArticleFormat';
  styles?: Maybe<Array<ApiStyle>>;
  variants?: Maybe<Array<Scalars['String']['output']>>;
};

type ApiNewsArticleHeader = {
  __typename: 'NewsArticleHeader';
  headerSegments?: Maybe<Array<ApiNewsArticleHeaderSegment>>;
  id?: Maybe<Scalars['String']['output']>;
  style?: Maybe<Scalars['String']['output']>;
};

type ApiNewsArticleHeaderSegment = {
  __typename: 'NewsArticleHeaderSegment';
  class?: Maybe<Scalars['String']['output']>;
  headerType: Scalars['String']['output'];
  segments?: Maybe<Array<ApiNewsArticleContentSegment>>;
};

type ApiNewsArticleHero = {
  __typename: 'NewsArticleHero';
  /** @deprecated Use imageAsset */
  image?: Maybe<Scalars['String']['output']>;
  imageAsset?: Maybe<ApiImageAsset>;
  imageDescription?: Maybe<Scalars['String']['output']>;
  video?: Maybe<ApiVideo>;
};

type ApiNewsArticleHowToWatch = {
  __typename: 'NewsArticleHowToWatch';
  class?: Maybe<Scalars['String']['output']>;
  round?: Maybe<Scalars['Int']['output']>;
  season?: Maybe<Scalars['String']['output']>;
  tournamentId?: Maybe<Scalars['String']['output']>;
};

type ApiNewsArticleImage = {
  __typename: 'NewsArticleImage';
  segments: Array<ApiNewsArticleContentSegment>;
};

type ApiNewsArticleInlineOdds = {
  __typename: 'NewsArticleInlineOdds';
  marketId: ApiHistoricalOddsId;
  playerId: Scalars['String']['output'];
  playerName: Scalars['String']['output'];
  timeStamp?: Maybe<Scalars['AWSDateTime']['output']>;
  tournamentId: Scalars['String']['output'];
};

type ApiNewsArticleInstagram = {
  __typename: 'NewsArticleInstagram';
  class?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

type ApiNewsArticleLineBreak = {
  __typename: 'NewsArticleLineBreak';
  breakValue?: Maybe<Scalars['String']['output']>;
};

type ApiNewsArticleLink = {
  __typename: 'NewsArticleLink';
  segments: Array<ApiNewsArticleContentSegment>;
};

type ApiNewsArticleMetadata = {
  __typename: 'NewsArticleMetadata';
  metadata?: Maybe<Array<ApiNewsArticleMetadataSegment>>;
};

type ApiNewsArticleMetadataSegment = {
  __typename: 'NewsArticleMetadataSegment';
  name: Scalars['String']['output'];
  value?: Maybe<Scalars['String']['output']>;
};

type ApiNewsArticleNode = ApiArticleOddsTableQuery | ApiCerosEmbedPlugin | ApiExpertPicksNode | ApiNewsArticleBlockQuote | ApiNewsArticleDivider | ApiNewsArticleEmbedded | ApiNewsArticleHeader | ApiNewsArticleHowToWatch | ApiNewsArticleImage | ApiNewsArticleInstagram | ApiNewsArticleLineBreak | ApiNewsArticleLink | ApiNewsArticleOddsGraph | ApiNewsArticleOddsParagraph | ApiNewsArticleParagraph | ApiNewsArticlePhotoGallery | ApiNewsArticlePlayerComparison | ApiNewsArticleScoreCard | ApiNewsArticleStats | ApiNewsArticleText | ApiNewsArticleTweetNode | ApiNewsArticleVideo | ApiNewsArticleWeather | ApiRelatedFactsNode | ApiTglBoxScore | ApiTableFragment | ApiUnorderedListNode;

type ApiNewsArticleOddsGraph = {
  __typename: 'NewsArticleOddsGraph';
  marketId?: Maybe<ApiHistoricalOddsId>;
  oddsTimeType?: Maybe<ApiOddsTimeType>;
  playerIds?: Maybe<Array<Scalars['String']['output']>>;
  round?: Maybe<Scalars['Int']['output']>;
  tournamentId: Scalars['String']['output'];
};

type ApiNewsArticleOddsParagraph = {
  __typename: 'NewsArticleOddsParagraph';
  content: Array<ApiOddsParagraphContent>;
};

type ApiNewsArticleParagraph = {
  __typename: 'NewsArticleParagraph';
  id?: Maybe<Scalars['String']['output']>;
  segments: Array<ApiNewsArticleContentSegment>;
};

type ApiNewsArticlePhotoGallery = {
  __typename: 'NewsArticlePhotoGallery';
  images: Array<ApiNewsArticleImage>;
};

type ApiNewsArticlePlayerComparison = {
  __typename: 'NewsArticlePlayerComparison';
  class?: Maybe<Scalars['String']['output']>;
  playerIds?: Maybe<Array<Scalars['String']['output']>>;
  playerNames?: Maybe<Array<Scalars['String']['output']>>;
  season?: Maybe<Scalars['String']['output']>;
  statCategory?: Maybe<Scalars['String']['output']>;
  tournamentId?: Maybe<Scalars['String']['output']>;
  type: ApiPlayerComparisonDisplay;
};

type ApiNewsArticlePlayerTournamentOdds = {
  __typename: 'NewsArticlePlayerTournamentOdds';
  playerId: Scalars['String']['output'];
  timeStamp?: Maybe<Scalars['AWSDateTime']['output']>;
  tournamentId: Scalars['String']['output'];
  tournamentMarketType?: Maybe<ApiOddsMarketType>;
};

type ApiNewsArticleScoreCard = {
  __typename: 'NewsArticleScoreCard';
  class?: Maybe<Scalars['String']['output']>;
  playerId?: Maybe<Scalars['String']['output']>;
  playerName?: Maybe<Scalars['String']['output']>;
  round?: Maybe<Scalars['String']['output']>;
  season?: Maybe<Scalars['String']['output']>;
  tournamentId?: Maybe<Scalars['String']['output']>;
};

type ApiNewsArticleSponsor = {
  __typename: 'NewsArticleSponsor';
  description?: Maybe<Scalars['String']['output']>;
  gam?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use imageAsset */
  image?: Maybe<Scalars['String']['output']>;
  imageAsset?: Maybe<ApiImageAsset>;
  /** @deprecated Use logoAsset */
  logo: Scalars['String']['output'];
  logoAsset: ApiImageAsset;
  /** @deprecated Use logoDarkAsset */
  logoDark: Scalars['String']['output'];
  logoDarkAsset: ApiImageAsset;
  name: Scalars['String']['output'];
  sponsorPrefix?: Maybe<Scalars['String']['output']>;
  websiteUrl?: Maybe<Scalars['String']['output']>;
};

type ApiNewsArticleStatType =
  | 'BY_NUMBERS'
  | 'DOT_CHART'
  | 'LINE_CHART';

type ApiNewsArticleStats = {
  __typename: 'NewsArticleStats';
  playerId?: Maybe<Scalars['String']['output']>;
  playerName?: Maybe<Scalars['String']['output']>;
  season?: Maybe<Scalars['String']['output']>;
  statType: ApiNewsArticleStatType;
  stats: Array<ApiContentStat>;
  tournamentId?: Maybe<Scalars['String']['output']>;
};

type ApiNewsArticleTeaserAsset = {
  __typename: 'NewsArticleTeaserAsset';
  value?: Maybe<Scalars['String']['output']>;
};

type ApiNewsArticleText = {
  __typename: 'NewsArticleText';
  value?: Maybe<Scalars['String']['output']>;
};

type ApiNewsArticleTweetNode = {
  __typename: 'NewsArticleTweetNode';
  tweetId: Scalars['String']['output'];
};

type ApiNewsArticleVideo = {
  __typename: 'NewsArticleVideo';
  video?: Maybe<ApiVideo>;
};

type ApiNewsArticleWeather = {
  __typename: 'NewsArticleWeather';
  class?: Maybe<Scalars['String']['output']>;
  season?: Maybe<Scalars['String']['output']>;
  tour?: Maybe<Scalars['String']['output']>;
  tournamentId?: Maybe<Scalars['String']['output']>;
};

type ApiNewsArticles = {
  __typename: 'NewsArticles';
  articles: Array<ApiNewsArticle>;
  franchiseSponsors?: Maybe<Array<ApiNewsSponsor>>;
  /** @deprecated not needed */
  integratedComponents: Array<ApiIntegratedComponent>;
};

type ApiNewsFranchise = {
  __typename: 'NewsFranchise';
  franchise: Scalars['String']['output'];
  franchiseLabel: Scalars['String']['output'];
};

type ApiNewsLetterType =
  | 'GLOBAL'
  | 'TOURNAMENT';

type ApiNewsSponsor = {
  __typename: 'NewsSponsor';
  accessibilityText: Scalars['String']['output'];
  backgroundColor: Scalars['String']['output'];
  franchise: Scalars['String']['output'];
  /** @deprecated Use imageAsset */
  image: Scalars['String']['output'];
  imageAsset: ApiImageAsset;
  label: Scalars['String']['output'];
};

type ApiNewsletter = {
  __typename: 'Newsletter';
  ctaText: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  gigyaSubscriptionId: Scalars['String']['output'];
  image: Scalars['String']['output'];
  newsLetterType: ApiNewsLetterType;
  title: Scalars['String']['output'];
  tourCode?: Maybe<ApiTourCode>;
};

type ApiNotificationTag = {
  __typename: 'NotificationTag';
  tag: Scalars['String']['output'];
};

type ApiNotificationTagInput = {
  tag: Scalars['String']['input'];
};

type ApiNotificationTagResponse = {
  __typename: 'NotificationTagResponse';
  ok: Scalars['Boolean']['output'];
  tags: Array<Maybe<ApiNotificationTag>>;
};

type ApiOddsBanner = {
  __typename: 'OddsBanner';
  cta?: Maybe<ApiCallToAction>;
  disclaimer: Scalars['String']['output'];
  image: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

type ApiOddsCutsOption = {
  __typename: 'OddsCutsOption';
  entity: ApiOddsEntity;
  noOdds: ApiOddsValues;
  yesOdds: ApiOddsValues;
};

type ApiOddsCutsPlayers = {
  __typename: 'OddsCutsPlayers';
  countryFlag?: Maybe<Scalars['String']['output']>;
  currentRound?: Maybe<Scalars['Int']['output']>;
  displayName: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastName: Scalars['String']['output'];
  matchId?: Maybe<Scalars['Int']['output']>;
  noOdds: Scalars['String']['output'];
  noOddsSwing?: Maybe<ApiOddsSwing>;
  noOptionsId: Scalars['String']['output'];
  position: Scalars['String']['output'];
  seed?: Maybe<Scalars['Int']['output']>;
  total: Scalars['String']['output'];
  yesOdds: Scalars['String']['output'];
  yesOddsSwing?: Maybe<ApiOddsSwing>;
  yesOptionsId: Scalars['String']['output'];
};

/**   Odds Primitives */
type ApiOddsEntity = {
  __typename: 'OddsEntity';
  color?: Maybe<Scalars['String']['output']>;
  entityFlagUrl?: Maybe<Scalars['String']['output']>;
  entityId: Scalars['ID']['output'];
  flagSurroundColor?: Maybe<Scalars['String']['output']>;
  flagSurroundColorDark?: Maybe<Scalars['String']['output']>;
  groupNum: Scalars['Int']['output'];
  maxRound: Scalars['Int']['output'];
  players: Array<ApiOddsPlayer>;
  position: Scalars['String']['output'];
  score: Scalars['String']['output'];
  seed?: Maybe<Scalars['Int']['output']>;
  thru?: Maybe<Scalars['String']['output']>;
  total: Scalars['String']['output'];
  totalSort: Scalars['Int']['output'];
};

type ApiOddsFinishes = {
  __typename: 'OddsFinishes';
  countryFlag?: Maybe<Scalars['String']['output']>;
  currentRound?: Maybe<Scalars['Int']['output']>;
  displayName: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastName: Scalars['String']['output'];
  matchId?: Maybe<Scalars['Int']['output']>;
  odds: Scalars['String']['output'];
  oddsSwing?: Maybe<ApiOddsSwing>;
  optionsId: Scalars['String']['output'];
  seed?: Maybe<Scalars['Int']['output']>;
};

type ApiOddsFinishesOption = ApiBaseOddsOption & {
  __typename: 'OddsFinishesOption';
  entity: ApiOddsEntity;
  odds: ApiOddsValues;
};

type ApiOddsFormat =
  | 'DECIMAL'
  | 'FRACTIONAL'
  | 'MONEYLINE';

type ApiOddsGroup = {
  __typename: 'OddsGroup';
  id: Scalars['ID']['output'];
  matchupPlayers: Array<ApiMatchupsPlayer>;
  subMarket: Scalars['String']['output'];
};

type ApiOddsGroupOptionV2 = ApiBaseOddsOption & {
  __typename: 'OddsGroupOptionV2';
  entity: ApiOddsEntity;
  odds: ApiOddsValues;
};

type ApiOddsLeadersOption = ApiBaseOddsOption & {
  __typename: 'OddsLeadersOption';
  entity: ApiOddsEntity;
  odds: ApiOddsValues;
};

type ApiOddsLeadersPlayers = {
  __typename: 'OddsLeadersPlayers';
  countryFlag?: Maybe<Scalars['String']['output']>;
  currentRound?: Maybe<Scalars['Int']['output']>;
  displayName: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastName: Scalars['String']['output'];
  matchId?: Maybe<Scalars['Int']['output']>;
  odds: Scalars['String']['output'];
  oddsSwing?: Maybe<ApiOddsSwing>;
  optionsId: Scalars['String']['output'];
  seed?: Maybe<Scalars['Int']['output']>;
};

/**   End Market Abstractions */
type ApiOddsMarketType =
  | 'FINISHES'
  | 'GROUP_WINNER'
  | 'MATCHUP'
  | 'NATIONALITY'
  | 'PLAYER_PROPS'
  | 'WINNER';

type ApiOddsMatchupOptionGroup = {
  __typename: 'OddsMatchupOptionGroup';
  options: Array<ApiMatchupOptionV2>;
};

type ApiOddsMatchups = {
  __typename: 'OddsMatchups';
  id: Scalars['ID']['output'];
  matchupPlayers: Array<ApiMatchupsPlayer>;
  subMarket: Scalars['String']['output'];
};

type ApiOddsMessage = {
  __typename: 'OddsMessage';
  body: Scalars['String']['output'];
  header: Scalars['String']['output'];
};

type ApiOddsNationality = {
  __typename: 'OddsNationality';
  countryFlag?: Maybe<Scalars['String']['output']>;
  currentRound?: Maybe<Scalars['Int']['output']>;
  displayName: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastName: Scalars['String']['output'];
  matchId?: Maybe<Scalars['Int']['output']>;
  odds: Scalars['String']['output'];
  oddsSwing?: Maybe<ApiOddsSwing>;
  optionsId: Scalars['String']['output'];
  seed?: Maybe<Scalars['Int']['output']>;
};

type ApiOddsNationalityOption = ApiBaseOddsOption & {
  __typename: 'OddsNationalityOption';
  entity: ApiOddsEntity;
  odds: ApiOddsValues;
};

type ApiOddsOption = ApiOddsCutsPlayers | ApiOddsFinishes | ApiOddsGroup | ApiOddsLeadersPlayers | ApiOddsMatchups | ApiOddsNationality | ApiOddsToWin;

type ApiOddsOptionV2 = ApiOddsCutsOption | ApiOddsFinishesOption | ApiOddsGroupOptionV2 | ApiOddsLeadersOption | ApiOddsMatchupOptionGroup | ApiOddsNationalityOption | ApiOddsToWinV2;

type ApiOddsParagraphContent = ApiNewsArticleInlineOdds | ApiNewsArticleText;

type ApiOddsPlayer = {
  __typename: 'OddsPlayer';
  color?: Maybe<Scalars['String']['output']>;
  countryFlag: Scalars['String']['output'];
  displayName: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  overrideFlagUrl?: Maybe<Scalars['String']['output']>;
  playerId: Scalars['ID']['output'];
  shortName: Scalars['String']['output'];
};

type ApiOddsProvider =
  | 'BET365'
  | 'DRAFTKINGS'
  | 'ESPNBET'
  | 'FANDUEL'
  | 'MGM';

type ApiOddsSwing =
  | 'CONSTANT'
  | 'DOWN'
  | 'UP';

/**   Odds Table */
type ApiOddsTable = {
  __typename: 'OddsTable';
  markets: Array<ApiArticleOddsMarkets>;
  players: Array<ApiPlayerMarketsRow>;
  provider?: Maybe<ApiOddsProvider>;
  tournamentId: Scalars['String']['output'];
  tournamentName: Scalars['String']['output'];
};

/**  Odds Graph */
type ApiOddsTimeType =
  | 'HOLE';

type ApiOddsTimeline = {
  __typename: 'OddsTimeline';
  countryCode: Scalars['String']['output'];
  oddsProvider: ApiOddsProvider;
  players: Array<ApiOddsTimelinePlayer>;
  round: Scalars['String']['output'];
  tournamentId: Scalars['String']['output'];
};

type ApiOddsTimelinePlayer = {
  __typename: 'OddsTimelinePlayer';
  data: Array<ApiOddsTimelinePoint>;
  playerColor: Scalars['String']['output'];
  playerId: Scalars['String']['output'];
  playerName: Scalars['String']['output'];
};

type ApiOddsTimelinePoint = {
  __typename: 'OddsTimelinePoint';
  holeNumber?: Maybe<Scalars['Int']['output']>;
  holeSequence?: Maybe<Scalars['Int']['output']>;
  odds: Scalars['String']['output'];
  oddsSwing?: Maybe<ApiOddsSwing>;
  round?: Maybe<Scalars['Int']['output']>;
  time: Scalars['AWSTimestamp']['output'];
};

type ApiOddsToWin = {
  __typename: 'OddsToWin';
  countryFlag?: Maybe<Scalars['String']['output']>;
  currentRound?: Maybe<Scalars['Int']['output']>;
  displayName: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastName: Scalars['String']['output'];
  matchId?: Maybe<Scalars['Int']['output']>;
  odds: Scalars['String']['output'];
  oddsSwing?: Maybe<ApiOddsSwing>;
  optionsId: Scalars['String']['output'];
  position: Scalars['String']['output'];
  score: Scalars['String']['output'];
  seed?: Maybe<Scalars['Int']['output']>;
  thru?: Maybe<Scalars['String']['output']>;
  total: Scalars['String']['output'];
};

type ApiOddsToWinMarket = {
  __typename: 'OddsToWinMarket';
  message?: Maybe<ApiOddsMessage>;
  oddsEnabled: Scalars['Boolean']['output'];
  oddsToWinId: Scalars['ID']['output'];
  players: Array<ApiOddsToWinPlayer>;
};

/**  Odds V3 */
type ApiOddsToWinMarketCompressed = {
  __typename: 'OddsToWinMarketCompressed';
  id: Scalars['ID']['output'];
  payload: Scalars['String']['output'];
};

type ApiOddsToWinPlayer = {
  __typename: 'OddsToWinPlayer';
  odds: Scalars['String']['output'];
  oddsDirection: ApiOddsSwing;
  oddsSort: Scalars['Float']['output'];
  optionId?: Maybe<Scalars['String']['output']>;
  playerId: Scalars['ID']['output'];
  url?: Maybe<Scalars['String']['output']>;
};

type ApiOddsToWinTracker = {
  __typename: 'OddsToWinTracker';
  title: Scalars['String']['output'];
  /** @deprecated use new tournamentIds array */
  tournamentId?: Maybe<Scalars['String']['output']>;
  tournamentIds?: Maybe<Array<Scalars['String']['output']>>;
};

type ApiOddsToWinV2 = ApiBaseOddsOption & {
  __typename: 'OddsToWinV2';
  entity: ApiOddsEntity;
  odds: ApiOddsValues;
};

type ApiOddsUpdateInput = {
  oddsFormat: ApiOddsFormat;
  provider: ApiOddsProvider;
};

type ApiOddsValues = {
  __typename: 'OddsValues';
  odds: Scalars['String']['output'];
  oddsSwing: ApiOddsSwing;
  optionId: Scalars['ID']['output'];
};

type ApiOrientation =
  | 'Landscape'
  | 'Portrait';

type ApiOutComeIqHole = {
  __typename: 'OutComeIQHole';
  euMatchWin: Scalars['Float']['output'];
  holeNum: Scalars['Int']['output'];
  matchDraw: Scalars['Float']['output'];
  usMatchWin: Scalars['Float']['output'];
};

type ApiOverviewStat = {
  __typename: 'OverviewStat';
  players: Array<ApiLeaderStat>;
  statId: Scalars['String']['output'];
  statName: Scalars['String']['output'];
  tourAvg?: Maybe<Scalars['String']['output']>;
};

type ApiOverviewStats = {
  __typename: 'OverviewStats';
  categories: Array<ApiStatCategoryConfig>;
  stats: Array<ApiOverviewStat>;
  tourCode: ApiTourCode;
  year: Scalars['Int']['output'];
};

type ApiPageMetadata = {
  __typename: 'PageMetadata';
  metadata: Array<ApiPageMetadataSegment>;
};

type ApiPageMetadataSegment = {
  __typename: 'PageMetadataSegment';
  name: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

type ApiPaginationDetails = {
  __typename: 'PaginationDetails';
  limit?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
};

type ApiPlatform =
  | 'ANDROID'
  | 'IOS'
  | 'WEB';

type ApiPlayer = {
  __typename: 'Player';
  abbreviations: Scalars['String']['output'];
  abbreviationsAccessibilityText: Scalars['String']['output'];
  amateur: Scalars['Boolean']['output'];
  assets?: Maybe<Array<ApiPlayerAsset>>;
  bettingProfile?: Maybe<Scalars['String']['output']>;
  country: Scalars['String']['output'];
  countryFlag: Scalars['String']['output'];
  displayName: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastName: Scalars['String']['output'];
  lineColor: Scalars['String']['output'];
  playerBioOverrideLink?: Maybe<Scalars['String']['output']>;
  seed?: Maybe<Scalars['String']['output']>;
  shortName: Scalars['String']['output'];
  status?: Maybe<Scalars['String']['output']>;
  tourBound?: Maybe<Scalars['Boolean']['output']>;
};

type ApiPlayerAsset = ApiTourBoundAsset;

type ApiPlayerBio = {
  __typename: 'PlayerBio';
  age?: Maybe<Scalars['String']['output']>;
  birthplace: ApiPlayerBioLocation;
  born?: Maybe<Scalars['String']['output']>;
  bornAccessibilityText?: Maybe<Scalars['String']['output']>;
  careerEarnings?: Maybe<Scalars['String']['output']>;
  deceased: Scalars['Boolean']['output'];
  deceasedDate?: Maybe<Scalars['String']['output']>;
  degree?: Maybe<Scalars['String']['output']>;
  exemptions?: Maybe<Array<ApiPlayerBioExemption>>;
  family?: Maybe<Scalars['String']['output']>;
  graduationYear?: Maybe<Scalars['String']['output']>;
  heightImperial?: Maybe<Scalars['String']['output']>;
  heightImperialAccessibilityText?: Maybe<Scalars['String']['output']>;
  heightMeters?: Maybe<Scalars['String']['output']>;
  overview?: Maybe<Scalars['String']['output']>;
  personal?: Maybe<Array<Scalars['String']['output']>>;
  playsFrom: ApiPlayerBioLocation;
  primaryTour?: Maybe<Scalars['String']['output']>;
  pronunciation?: Maybe<Scalars['String']['output']>;
  residence: ApiPlayerBioLocation;
  school?: Maybe<Scalars['String']['output']>;
  social?: Maybe<Array<ApiPlayerBioSocial>>;
  /** @deprecated No data for this field, use primaryTour */
  tours: Array<ApiTourCode>;
  turnedPro?: Maybe<Scalars['String']['output']>;
  websiteURL?: Maybe<Scalars['String']['output']>;
  weightImperial?: Maybe<Scalars['String']['output']>;
  weightKilograms?: Maybe<Scalars['String']['output']>;
};

type ApiPlayerBioExemption = {
  __typename: 'PlayerBioExemption';
  description?: Maybe<Scalars['String']['output']>;
  expirationDate?: Maybe<Scalars['String']['output']>;
  tour?: Maybe<ApiTourCode>;
};

type ApiPlayerBioLocation = {
  __typename: 'PlayerBioLocation';
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  countryCode?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  stateCode?: Maybe<Scalars['String']['output']>;
};

type ApiPlayerBioSocial = {
  __typename: 'PlayerBioSocial';
  type: ApiSocialType;
  url: Scalars['String']['output'];
};

type ApiPlayerBioWrapper = {
  __typename: 'PlayerBioWrapper';
  bioLink: Scalars['String']['output'];
  country: Scalars['String']['output'];
  countryFlag: Scalars['String']['output'];
  displayName: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastName: Scalars['String']['output'];
  owgr?: Maybe<Scalars['Int']['output']>;
  playerBio?: Maybe<ApiPlayerBio>;
  rank?: Maybe<ApiBioRank>;
};

type ApiPlayerComparison = {
  __typename: 'PlayerComparison';
  category: ApiPlayerComparisonCategory;
  categoryPills: Array<ApiPlayerComparisonCategoryPill>;
  displaySeason: Scalars['String']['output'];
  noDataMessage: Scalars['String']['output'];
  seasonPills: Array<ApiStatYearPills>;
  table: ApiPlayerComparisonTable;
  tourCode: ApiTourCode;
  tournamentId?: Maybe<Scalars['String']['output']>;
  year: Scalars['Int']['output'];
};

type ApiPlayerComparisonCategory =
  | 'APPROACH_GREEN'
  | 'AROUND_GREEN'
  | 'OFF_TEE'
  | 'PUTTING'
  | 'SCORING'
  | 'STROKES_GAINED';

type ApiPlayerComparisonCategoryPill = {
  __typename: 'PlayerComparisonCategoryPill';
  category: ApiPlayerComparisonCategory;
  displayText: Scalars['String']['output'];
};

type ApiPlayerComparisonDisplay =
  | 'GRAPH'
  | 'TABLE';

type ApiPlayerComparisonHeader = {
  __typename: 'PlayerComparisonHeader';
  country?: Maybe<Scalars['String']['output']>;
  displayText: Scalars['String']['output'];
  playerId: Scalars['ID']['output'];
  yearData: Scalars['Boolean']['output'];
};

type ApiPlayerComparisonOdds = {
  __typename: 'PlayerComparisonOdds';
  color: Scalars['String']['output'];
  country: Scalars['String']['output'];
  countryName: Scalars['String']['output'];
  displayName: Scalars['String']['output'];
  oddsSwing: ApiOddsSwing;
  oddsToWin: Scalars['String']['output'];
  playerId: Scalars['ID']['output'];
  provider: ApiOddsProvider;
};

type ApiPlayerComparisonRow = {
  __typename: 'PlayerComparisonRow';
  statId: Scalars['String']['output'];
  statName: Scalars['String']['output'];
  values: Array<ApiPlayerComparisonValue>;
};

type ApiPlayerComparisonTable = {
  __typename: 'PlayerComparisonTable';
  header: Scalars['String']['output'];
  headerRow: Array<ApiPlayerComparisonHeader>;
  rows: Array<ApiPlayerComparisonRow>;
};

type ApiPlayerComparisonValue = {
  __typename: 'PlayerComparisonValue';
  bold: Scalars['Boolean']['output'];
  displayValue: Scalars['String']['output'];
  rank: Scalars['String']['output'];
  rankDeviation?: Maybe<Scalars['Float']['output']>;
};

type ApiPlayerCourse = {
  __typename: 'PlayerCourse';
  courseCity: Scalars['String']['output'];
  courseCountry: Scalars['String']['output'];
  courseCountryCode: Scalars['String']['output'];
  courseId: Scalars['String']['output'];
  courseImage: Scalars['String']['output'];
  courseName: Scalars['String']['output'];
  courseState?: Maybe<Scalars['String']['output']>;
  cupEyebrowText: Scalars['String']['output'];
  overview: Array<ApiPlayerProfileOverviewItem>;
  overviewInfo?: Maybe<ApiCourseOverviewInfo>;
  tournaments: Array<ApiCourseResultsTournament>;
};

type ApiPlayerDirectory = {
  __typename: 'PlayerDirectory';
  players: Array<ApiPlayerDirectoryPlayer>;
  tourCode: ApiTourCode;
};

type ApiPlayerDirectoryBio = {
  __typename: 'PlayerDirectoryBio';
  age?: Maybe<Scalars['String']['output']>;
  education?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  turnedPro?: Maybe<Scalars['String']['output']>;
};

type ApiPlayerDirectoryPlayer = {
  __typename: 'PlayerDirectoryPlayer';
  alphaSort: Scalars['String']['output'];
  country: Scalars['String']['output'];
  countryFlag: Scalars['String']['output'];
  displayName: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  /** @deprecated URL should be built using player ID */
  headshot: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  lastName: Scalars['String']['output'];
  playerBio: ApiPlayerDirectoryBio;
  shortName: Scalars['String']['output'];
};

type ApiPlayerField = {
  __typename: 'PlayerField';
  alphaSort: Scalars['String']['output'];
  alternate: Scalars['Boolean']['output'];
  amateur: Scalars['Boolean']['output'];
  country: Scalars['String']['output'];
  countryFlag: Scalars['String']['output'];
  displayName: Scalars['String']['output'];
  favorite: Scalars['Boolean']['output'];
  firstName: Scalars['String']['output'];
  /** @deprecated URL should be built using player ID */
  headshot: Scalars['String']['output'];
  id: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  owgr?: Maybe<Scalars['String']['output']>;
  qualifier?: Maybe<Scalars['String']['output']>;
  rankLogoDark?: Maybe<Scalars['String']['output']>;
  rankLogoLight?: Maybe<Scalars['String']['output']>;
  rankingPoints?: Maybe<Scalars['String']['output']>;
  shortName: Scalars['String']['output'];
  status: Scalars['String']['output'];
  teammate?: Maybe<ApiPlayerFieldTeammate>;
  withdrawn: Scalars['Boolean']['output'];
};

type ApiPlayerFieldTeammate = {
  __typename: 'PlayerFieldTeammate';
  alphaSort: Scalars['String']['output'];
  alternate: Scalars['Boolean']['output'];
  amateur: Scalars['Boolean']['output'];
  country: Scalars['String']['output'];
  countryFlag: Scalars['String']['output'];
  displayName: Scalars['String']['output'];
  favorite: Scalars['Boolean']['output'];
  firstName: Scalars['String']['output'];
  /** @deprecated URL should be built using player ID */
  headshot: Scalars['String']['output'];
  id: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  owgr?: Maybe<Scalars['String']['output']>;
  qualifier?: Maybe<Scalars['String']['output']>;
  qualifierId?: Maybe<Scalars['String']['output']>;
  rankingPoints?: Maybe<Scalars['String']['output']>;
  shortName: Scalars['String']['output'];
  status: Scalars['String']['output'];
  withdrawn: Scalars['Boolean']['output'];
};

type ApiPlayerFinishStats = {
  __typename: 'PlayerFinishStats';
  countryCode: Scalars['String']['output'];
  countryName: Scalars['String']['output'];
  displayName: Scalars['String']['output'];
  playerAvg: Scalars['String']['output'];
  playerAvgLabel: Scalars['String']['output'];
  playerId: Scalars['ID']['output'];
  rank: Scalars['String']['output'];
  statId: Scalars['String']['output'];
  statName: Scalars['String']['output'];
  statValues: Array<ApiFinishStatValue>;
  tourAvg: Scalars['String']['output'];
};

type ApiPlayerGroup = {
  __typename: 'PlayerGroup';
  fieldGroups: Array<ApiFieldGroup>;
  title: Scalars['String']['output'];
};

type ApiPlayerHubArticleLink = {
  __typename: 'PlayerHubArticleLink';
  aiGenerated?: Maybe<Scalars['Boolean']['output']>;
  analyticsTags?: Maybe<Array<Scalars['String']['output']>>;
  /**   AEM ID */
  contentId: Scalars['String']['output'];
  contentTournamentIds?: Maybe<Array<Scalars['String']['output']>>;
  franchise: Scalars['String']['output'];
  franchiseDisplayName: Scalars['String']['output'];
  players?: Maybe<Array<ApiArticlePlayer>>;
  /**   Optional sponsor for sponsored articles */
  sponsor?: Maybe<ApiNewsArticleSponsor>;
  thumbnail?: Maybe<ApiImageAsset>;
  title: Scalars['String']['output'];
  webviewUrl: Scalars['String']['output'];
};

type ApiPlayerHubArticlesWidget = {
  __typename: 'PlayerHubArticlesWidget';
  articles: Array<ApiPlayerHubArticleLink>;
  icon: ApiPlayerHubWidgetIcon;
  /**   Optional widget sponsor */
  sponsor?: Maybe<ApiPlayerHubWidgetSponsor>;
  subTitle?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};

type ApiPlayerHubDetailData = {
  __typename: 'PlayerHubDetailData';
  data: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

type ApiPlayerHubFooter = {
  __typename: 'PlayerHubFooter';
  logoAsset: ApiImageAsset;
  logoAssetDark: ApiImageAsset;
  sponsor?: Maybe<ApiPlayerHubWidgetSponsor>;
};

type ApiPlayerHubHeader = {
  __typename: 'PlayerHubHeader';
  sponsor?: Maybe<ApiPlayerHubWidgetSponsor>;
  text: Scalars['String']['output'];
};

type ApiPlayerHubHoleDetailShotTrail = {
  __typename: 'PlayerHubHoleDetailShotTrail';
  color: Scalars['String']['output'];
  finalShot: Scalars['Boolean']['output'];
  from: ApiPlayerHubHoleDetailShotTrailCoordinates;
  markerText: Scalars['String']['output'];
  shotNumber: Scalars['Int']['output'];
  showMarker: Scalars['Boolean']['output'];
  strokeType: ApiHoleStrokeType;
  to: ApiPlayerHubHoleDetailShotTrailCoordinates;
};

type ApiPlayerHubHoleDetailShotTrailCoordinates = {
  __typename: 'PlayerHubHoleDetailShotTrailCoordinates';
  x: Scalars['Float']['output'];
  y: Scalars['Float']['output'];
};

type ApiPlayerHubHoleDetailWidget = {
  __typename: 'PlayerHubHoleDetailWidget';
  dataElements: Array<ApiPlayerHubDetailData>;
  flagCoords?: Maybe<ApiPlayerHubHoleDetailShotTrailCoordinates>;
  holePickleAsset: ApiImageAsset;
  icon: ApiPlayerHubWidgetIcon;
  shots: Array<ApiPlayerHubHoleDetailShotTrail>;
  /**   Optional widget sponsor */
  sponsor?: Maybe<ApiPlayerHubWidgetSponsor>;
  subTitle?: Maybe<Scalars['String']['output']>;
  tourcastURL?: Maybe<Scalars['String']['output']>;
};

type ApiPlayerHubLeaderboardWidget = {
  __typename: 'PlayerHubLeaderboardWidget';
  action: ApiPlayerHubMessageBannerAction;
  earnings?: Maybe<Scalars['String']['output']>;
  /**   Used to show if there are player stories available for this player or not */
  hasStoryContent: Scalars['Boolean']['output'];
  icon: ApiPlayerHubWidgetIcon;
  movementAmount: Scalars['String']['output'];
  /**   Leaderboard movement amount */
  movementDirection: ApiLeaderboardMovement;
  /**   Player Icon used for Hot Streak identification */
  playerIcon?: Maybe<ApiLeaderboardPlayerIcon>;
  /**   Standard leaderboard position data */
  position: Scalars['String']['output'];
  rankLogos?: Maybe<ApiSignatureEventsRankLogos>;
  round?: Maybe<Scalars['String']['output']>;
  roundDisplay: Scalars['String']['output'];
  roundHeader: Scalars['String']['output'];
  roundNum: Scalars['Int']['output'];
  /**   Final scores by round */
  roundScores: Array<Scalars['String']['output']>;
  roundStatus: ApiRoundStatus;
  roundStatusColor: ApiRoundStatusColor;
  /**   Round Status and display information */
  roundStatusDisplay: Scalars['String']['output'];
  subTitle: Scalars['String']['output'];
  teeTime?: Maybe<Scalars['AWSTimestamp']['output']>;
  thru?: Maybe<Scalars['String']['output']>;
  total?: Maybe<Scalars['String']['output']>;
  /**   Tells the widget what structure to display in */
  widgetDisplay: ApiPlayerHubLeaderboardWidgetDisplay;
};

type ApiPlayerHubLeaderboardWidgetDisplay =
  | 'INACTIVE'
  | 'IN_PROGRESS'
  | 'TOURNAMENT_OFFICIAL';

/**   Possible message banner targets */
type ApiPlayerHubMessageBannerAction =
  | 'LEADERBOARD'
  | 'NONE'
  | 'PROFILE'
  | 'SCORECARD';

type ApiPlayerHubMessageBannerWidget = {
  __typename: 'PlayerHubMessageBannerWidget';
  /**   optional action should the message have a click target */
  action: ApiPlayerHubMessageBannerAction;
  /**   optional background color override */
  background?: Maybe<Scalars['String']['output']>;
  /**   Message to display */
  message: Scalars['String']['output'];
  /**   optional text color override */
  textColor?: Maybe<Scalars['String']['output']>;
};

type ApiPlayerHubPlayer = {
  __typename: 'PlayerHubPlayer';
  country: Scalars['String']['output'];
  countryCode: Scalars['String']['output'];
  footer?: Maybe<ApiPlayerHubFooter>;
  header?: Maybe<ApiPlayerHubHeader>;
  playerId: Scalars['ID']['output'];
  playerName: Scalars['String']['output'];
  tournamentId: Scalars['String']['output'];
  widgets: Array<ApiPlayerHubWidget>;
};

/**  PLAYER HUB */
type ApiPlayerHubPlayerCompressed = {
  __typename: 'PlayerHubPlayerCompressed';
  id: Scalars['ID']['output'];
  payload: Scalars['String']['output'];
};

type ApiPlayerHubRecapWidget = {
  __typename: 'PlayerHubRecapWidget';
  icon: ApiPlayerHubWidgetIcon;
  recap: Scalars['String']['output'];
  roundDisplay: Scalars['String']['output'];
  roundStatus: ApiRoundStatus;
  roundStatusColor: ApiRoundStatusColor;
  /**   Round Status and display information */
  roundStatusDisplay: Scalars['String']['output'];
  /**   Optional widget sponsor */
  sponsor?: Maybe<ApiPlayerHubWidgetSponsor>;
  subTitle?: Maybe<Scalars['String']['output']>;
};

type ApiPlayerHubShotCommentaryWidget = {
  __typename: 'PlayerHubShotCommentaryWidget';
  commentary: Scalars['String']['output'];
  icon: ApiPlayerHubWidgetIcon;
  shotTitle: Scalars['String']['output'];
  shotTitleBackgroundColor: Scalars['String']['output'];
  /**   Optional widget sponsor */
  sponsor?: Maybe<ApiPlayerHubWidgetSponsor>;
  subTitle: Scalars['String']['output'];
  tourcastURL?: Maybe<Scalars['String']['output']>;
};

type ApiPlayerHubStatisticsWidget = {
  __typename: 'PlayerHubStatisticsWidget';
  icon: ApiPlayerHubWidgetIcon;
  /**   Optional widget sponsor */
  sponsor?: Maybe<ApiPlayerHubWidgetSponsor>;
  stats: Array<ApiPlayerHubDetailData>;
  subTitle: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

type ApiPlayerHubTeeTimesWidget = {
  __typename: 'PlayerHubTeeTimesWidget';
  currentLocation?: Maybe<Scalars['String']['output']>;
  displayTeeTime: Scalars['Boolean']['output'];
  icon: ApiPlayerHubWidgetIcon;
  /**   Players and the group tee time */
  players: Array<ApiPlayer>;
  roundDisplay: Scalars['String']['output'];
  roundStatus: ApiRoundStatus;
  roundStatusColor: ApiRoundStatusColor;
  /**   Round Status and display information */
  roundStatusDisplay: Scalars['String']['output'];
  /**   Optional widget sponsor */
  sponsor?: Maybe<ApiPlayerHubWidgetSponsor>;
  teeTime?: Maybe<Scalars['AWSTimestamp']['output']>;
  timezone: Scalars['String']['output'];
};

type ApiPlayerHubTournamentWidget = {
  __typename: 'PlayerHubTournamentWidget';
  course: Scalars['String']['output'];
  icon: ApiPlayerHubWidgetIcon;
  logoAsset?: Maybe<ApiImageAsset>;
  logoAssetDark?: Maybe<ApiImageAsset>;
  name: Scalars['String']['output'];
};

type ApiPlayerHubWidget = ApiPlayerHubArticlesWidget | ApiPlayerHubHoleDetailWidget | ApiPlayerHubLeaderboardWidget | ApiPlayerHubMessageBannerWidget | ApiPlayerHubRecapWidget | ApiPlayerHubShotCommentaryWidget | ApiPlayerHubStatisticsWidget | ApiPlayerHubTeeTimesWidget | ApiPlayerHubTournamentWidget | ApiPlayerStoriesWidget;

type ApiPlayerHubWidgetIcon =
  | 'AI'
  | 'CALENDAR'
  | 'CLOCK'
  | 'LEADERBOARD'
  | 'NEWS'
  | 'NONE'
  | 'PIE_CHART'
  | 'PROFILE'
  | 'SCORECARD'
  | 'TOURCAST';

type ApiPlayerHubWidgetSponsor = {
  __typename: 'PlayerHubWidgetSponsor';
  logoAsset: ApiImageAsset;
  logoAssetDark: ApiImageAsset;
  name: Scalars['String']['output'];
  websiteUrl: Scalars['String']['output'];
};

type ApiPlayerInfo = {
  __typename: 'PlayerInfo';
  countryFlag: Scalars['String']['output'];
  countryName: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  /** @deprecated URL should be built using player ID */
  headshot: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastName: Scalars['String']['output'];
};

type ApiPlayerMarketsRow = {
  __typename: 'PlayerMarketsRow';
  country: Scalars['String']['output'];
  countryFlag: Scalars['String']['output'];
  markets: Array<ApiHistoricalPlayerOdds>;
  playerId: Scalars['String']['output'];
  playerName: Scalars['String']['output'];
};

type ApiPlayerOddsMarket = {
  __typename: 'PlayerOddsMarket';
  id: Scalars['ID']['output'];
  market: Scalars['String']['output'];
  playerOddsOptions: Array<ApiOddsOption>;
  subMarket?: Maybe<Scalars['String']['output']>;
};

type ApiPlayerOverviewStandings = {
  __typename: 'PlayerOverviewStandings';
  displaySeason: Scalars['String']['output'];
  standings: Array<ApiProfileStandings>;
  tour: ApiTourCode;
};

type ApiPlayerProfileAchievement = {
  __typename: 'PlayerProfileAchievement';
  title: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

type ApiPlayerProfileCareer = {
  __typename: 'PlayerProfileCareer';
  achievements: Array<ApiPlayerProfileAchievement>;
  cutsMade?: Maybe<Scalars['String']['output']>;
  events?: Maybe<Scalars['String']['output']>;
  internationalWins?: Maybe<Scalars['String']['output']>;
  majorWins?: Maybe<Scalars['String']['output']>;
  officialMoney?: Maybe<Scalars['String']['output']>;
  playerId: Scalars['ID']['output'];
  runnerUp?: Maybe<Scalars['String']['output']>;
  second?: Maybe<Scalars['String']['output']>;
  tables: Array<ApiPlayerProfileTable>;
  third?: Maybe<Scalars['String']['output']>;
  top5?: Maybe<Scalars['String']['output']>;
  top10?: Maybe<Scalars['String']['output']>;
  top25?: Maybe<Scalars['String']['output']>;
  tourCode?: Maybe<ApiTourCode>;
  tourPills: Array<ApiTourPills>;
  wins?: Maybe<Scalars['String']['output']>;
  winsTitle?: Maybe<Scalars['String']['output']>;
  years: Array<ApiPlayerProfileCareerYear>;
};

type ApiPlayerProfileCareerResults = {
  __typename: 'PlayerProfileCareerResults';
  playerId: Scalars['ID']['output'];
  tourPills: Array<ApiTourPills>;
  yearResults: Array<ApiPlayerProfileCareerYear>;
};

type ApiPlayerProfileCareerYear = {
  __typename: 'PlayerProfileCareerYear';
  cutsMade?: Maybe<Scalars['String']['output']>;
  cutsMissed?: Maybe<Scalars['String']['output']>;
  displaySeason: Scalars['String']['output'];
  events?: Maybe<Scalars['String']['output']>;
  officialMoney?: Maybe<Scalars['String']['output']>;
  second?: Maybe<Scalars['String']['output']>;
  standingsPoints?: Maybe<Scalars['String']['output']>;
  standingsRank?: Maybe<Scalars['String']['output']>;
  third?: Maybe<Scalars['String']['output']>;
  top5?: Maybe<Scalars['String']['output']>;
  top10?: Maybe<Scalars['String']['output']>;
  top25?: Maybe<Scalars['String']['output']>;
  tourCode: ApiTourCode;
  wins?: Maybe<Scalars['String']['output']>;
  withdrawn?: Maybe<Scalars['String']['output']>;
  year: Scalars['Int']['output'];
};

type ApiPlayerProfileCourseResults = {
  __typename: 'PlayerProfileCourseResults';
  coursePills: Array<ApiCoursePills>;
  courses: Array<ApiPlayerCourse>;
  playerId: Scalars['String']['output'];
  tourCode: ApiTourCode;
  tourPills: Array<ApiTourCode>;
};

/**   Player Profile Tournament Results */
type ApiPlayerProfileInfoItem = {
  __typename: 'PlayerProfileInfoItem';
  logo?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  value: Scalars['String']['output'];
  wide: Scalars['Boolean']['output'];
};

type ApiPlayerProfileMajors = {
  __typename: 'PlayerProfileMajors';
  playerId: Scalars['String']['output'];
  timelineHeaders: Array<Scalars['String']['output']>;
  timelineTournaments: Array<ApiMajorTimeline>;
  tournaments: Array<ApiMajorResultsTournament>;
};

type ApiPlayerProfileMessage = {
  __typename: 'PlayerProfileMessage';
  message?: Maybe<Scalars['String']['output']>;
};

type ApiPlayerProfileOverviewItem = {
  __typename: 'PlayerProfileOverviewItem';
  title: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

type ApiPlayerProfileRows = {
  __typename: 'PlayerProfileRows';
  rowContent: Array<Scalars['String']['output']>;
  rowTitle: Scalars['String']['output'];
  rowTitleDetail?: Maybe<Scalars['String']['output']>;
  secondContent?: Maybe<Array<Scalars['String']['output']>>;
};

type ApiPlayerProfileStat = {
  __typename: 'PlayerProfileStat';
  categories: Array<ApiPlayerProfileStatCategory>;
  stats: Array<ApiPlayerProfileStatItem>;
  tour: ApiTourCode;
};

type ApiPlayerProfileStatCategory = {
  __typename: 'PlayerProfileStatCategory';
  category: ApiPlayerProfileStatCategoryItem;
  displayTitle: Scalars['String']['output'];
};

type ApiPlayerProfileStatCategoryItem =
  | 'ALL'
  | 'APPROACH'
  | 'AROUND_GREEN'
  | 'DRIVING'
  | 'MONEY_FINISHES'
  | 'PACE_OF_PLAY'
  | 'POINTS_RANKINGS'
  | 'PUTTING'
  | 'SCORING'
  | 'STREAKS'
  | 'STROKES_GAINED';

type ApiPlayerProfileStatFull = {
  __typename: 'PlayerProfileStatFull';
  categories: Array<ApiPlayerProfileStatCategory>;
  displaySeason: Scalars['String']['output'];
  overview: Array<ApiPlayerProfileStatItem>;
  season: Scalars['String']['output'];
  stats: Array<ApiPlayerProfileStatItem>;
  topStats: Array<ApiPlayerProfileStatItem>;
  tour: ApiTourCode;
};

type ApiPlayerProfileStatItem = {
  __typename: 'PlayerProfileStatItem';
  aboveOrBelow: ApiScoringTendency;
  category: Array<ApiPlayerProfileStatCategoryItem>;
  fieldAverage: Scalars['String']['output'];
  noDetail?: Maybe<Scalars['Boolean']['output']>;
  rank: Scalars['String']['output'];
  rankDeviation?: Maybe<Scalars['Float']['output']>;
  statId: Scalars['String']['output'];
  supportingStat?: Maybe<ApiPlayerProfileStatItemDetail>;
  supportingValue?: Maybe<ApiPlayerProfileStatItemDetail>;
  title: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

type ApiPlayerProfileStatItemDetail = {
  __typename: 'PlayerProfileStatItemDetail';
  description: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

type ApiPlayerProfileStatYear = {
  __typename: 'PlayerProfileStatYear';
  season: Scalars['String']['output'];
  tours: Array<ApiTourCode>;
  year: Scalars['Int']['output'];
};

type ApiPlayerProfileStatsFullV2 = {
  __typename: 'PlayerProfileStatsFullV2';
  messages?: Maybe<Array<ApiPlayerProfileMessage>>;
  playerProfileStatsFull: Array<ApiPlayerProfileStatFull>;
};

type ApiPlayerProfileTable = {
  __typename: 'PlayerProfileTable';
  rows: Array<ApiPlayerProfileRows>;
  tableDetail?: Maybe<Scalars['String']['output']>;
  tableName: Scalars['String']['output'];
};

type ApiPlayerProfileTournamentResults = {
  __typename: 'PlayerProfileTournamentResults';
  playerId: Scalars['ID']['output'];
  tourPills: Array<ApiTourPills>;
  tournamentPills: Array<ApiTournamentResultPill>;
  tournaments: Array<ApiTournamentResults>;
};

type ApiPlayerProfileTournamentRow = {
  __typename: 'PlayerProfileTournamentRow';
  courseName: Scalars['String']['output'];
  date: Scalars['String']['output'];
  fedexFallPoints: Scalars['String']['output'];
  fedexFallRank: Scalars['String']['output'];
  points: Scalars['String']['output'];
  pointsRank: Scalars['String']['output'];
  position: Scalars['String']['output'];
  roundScores: Array<ApiRoundScoreItem>;
  startDate: Scalars['String']['output'];
  toPar: Scalars['String']['output'];
  total: Scalars['String']['output'];
  tourcastURI?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  tourcastURL?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  tourcastURLWeb?: Maybe<Scalars['String']['output']>;
  tournamentId: Scalars['ID']['output'];
  tournamentName: Scalars['String']['output'];
  winnings: Scalars['String']['output'];
  year: Scalars['Int']['output'];
};

type ApiPlayerRecord = {
  __typename: 'PlayerRecord';
  losses: Scalars['String']['output'];
  points: Scalars['String']['output'];
  ties: Scalars['String']['output'];
  wins: Scalars['String']['output'];
};

type ApiPlayerResultTournament = {
  __typename: 'PlayerResultTournament';
  courseId: Scalars['String']['output'];
  courseName: Scalars['String']['output'];
  fedexFallPoints?: Maybe<Scalars['String']['output']>;
  fedexFallRank?: Maybe<Scalars['String']['output']>;
  finishPosition: Scalars['String']['output'];
  linkable: Scalars['Boolean']['output'];
  money: Scalars['String']['output'];
  points?: Maybe<Scalars['String']['output']>;
  pointsRank?: Maybe<Scalars['String']['output']>;
  r1: Scalars['String']['output'];
  r2: Scalars['String']['output'];
  r3: Scalars['String']['output'];
  r4: Scalars['String']['output'];
  r5: Scalars['String']['output'];
  toPar: Scalars['String']['output'];
  total: Scalars['String']['output'];
  tourcastURI?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  tourcastURL?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  tourcastURLWeb?: Maybe<Scalars['String']['output']>;
  tournamentEndDate: Scalars['String']['output'];
  tournamentId: Scalars['ID']['output'];
  tournamentName: Scalars['String']['output'];
  tournamentStartDate: Scalars['String']['output'];
};

type ApiPlayerResults = {
  __typename: 'PlayerResults';
  amateurHighlights?: Maybe<Array<Scalars['String']['output']>>;
  /** @deprecated use standingsDetails */
  cupLogo?: Maybe<Scalars['String']['output']>;
  /** @deprecated use standingsDetails */
  cupLogoAccessibilityText?: Maybe<Scalars['String']['output']>;
  /** @deprecated use standingsDetails */
  cupLogoDark?: Maybe<Scalars['String']['output']>;
  /** @deprecated use standingsDetails */
  cupName?: Maybe<Scalars['String']['output']>;
  /** @deprecated use standingsDetails */
  cupPoints?: Maybe<Scalars['String']['output']>;
  /** @deprecated use standingsDetails */
  cupRank?: Maybe<Scalars['String']['output']>;
  cutsMade?: Maybe<Scalars['String']['output']>;
  displayYear: Scalars['String']['output'];
  disqualified?: Maybe<Scalars['String']['output']>;
  events?: Maybe<Scalars['String']['output']>;
  missedCuts?: Maybe<Scalars['String']['output']>;
  officialMoney?: Maybe<Scalars['String']['output']>;
  playerId: Scalars['String']['output'];
  /** @deprecated use standingsDetails */
  rankLogo?: Maybe<Scalars['String']['output']>;
  /** @deprecated use standingsDetails */
  rankLogoAccessibilityText?: Maybe<Scalars['String']['output']>;
  /** @deprecated use standingsDetails */
  rankLogoDark?: Maybe<Scalars['String']['output']>;
  runnerUp?: Maybe<Scalars['String']['output']>;
  seasonPills: Array<ApiPlayerResultsSeasonPills>;
  seasonRecap?: Maybe<ApiSeasonRecap>;
  /** @deprecated use standingsDetails */
  secondaryCup?: Maybe<ApiSecondaryCupDetails>;
  standingsDetails: Array<ApiResultsStandingsDetail>;
  thirds?: Maybe<Scalars['String']['output']>;
  top5?: Maybe<Scalars['String']['output']>;
  top10?: Maybe<Scalars['String']['output']>;
  top25?: Maybe<Scalars['String']['output']>;
  tour: ApiTourCode;
  tourcastEligible: Scalars['Boolean']['output'];
  tournaments: Array<ApiPlayerResultTournament>;
  wins?: Maybe<Scalars['String']['output']>;
  withdrew?: Maybe<Scalars['String']['output']>;
  year: Scalars['Int']['output'];
};

type ApiPlayerResultsSeasonPills = {
  __typename: 'PlayerResultsSeasonPills';
  tourCode: ApiTourCode;
  years: Array<ApiStatYearPills>;
};

type ApiPlayerRowHoleByHole = {
  __typename: 'PlayerRowHoleByHole';
  courseCode: Scalars['String']['output'];
  courseId: Scalars['String']['output'];
  in?: Maybe<Scalars['String']['output']>;
  out?: Maybe<Scalars['String']['output']>;
  playerId: Scalars['String']['output'];
  scores: Array<ApiHoleScore>;
  total?: Maybe<Scalars['String']['output']>;
  totalToPar: Scalars['String']['output'];
};

type ApiPlayerRowV2 = {
  __typename: 'PlayerRowV2';
  backNine: Scalars['Boolean']['output'];
  courseId: Scalars['String']['output'];
  currentRound: Scalars['Int']['output'];
  groupNumber: Scalars['Int']['output'];
  hasStoryContent: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  leaderboardSortOrder: Scalars['Int']['output'];
  movementAmount: Scalars['String']['output'];
  movementDirection: ApiLeaderboardMovement;
  oddsOptionId?: Maybe<Scalars['String']['output']>;
  oddsSort?: Maybe<Scalars['Float']['output']>;
  oddsSwing?: Maybe<ApiOddsSwing>;
  oddsToWin?: Maybe<Scalars['String']['output']>;
  oddsUrl?: Maybe<Scalars['String']['output']>;
  official: Scalars['String']['output'];
  officialSort: Scalars['Int']['output'];
  player: ApiPlayer;
  playerState: ApiPlayerState;
  position: Scalars['String']['output'];
  projected: Scalars['String']['output'];
  projectedSort: Scalars['Int']['output'];
  rankLogoDark?: Maybe<Scalars['String']['output']>;
  rankLogoLight?: Maybe<Scalars['String']['output']>;
  rankingMovement: ApiCupRankMovementDirection;
  rankingMovementAmount: Scalars['String']['output'];
  rankingMovementAmountSort: Scalars['Int']['output'];
  roundHeader: Scalars['String']['output'];
  roundStatus: Scalars['String']['output'];
  rounds: Array<Scalars['String']['output']>;
  score: Scalars['String']['output'];
  scoreSort: Scalars['Int']['output'];
  storyContentRound?: Maybe<Scalars['Int']['output']>;
  storyContentRounds: Array<Scalars['Int']['output']>;
  teeTime: Scalars['AWSTimestamp']['output'];
  thru: Scalars['String']['output'];
  thruSort: Scalars['Int']['output'];
  total: Scalars['String']['output'];
  totalSort: Scalars['Int']['output'];
  totalStrokes: Scalars['String']['output'];
};

type ApiPlayerRowV3 = {
  __typename: 'PlayerRowV3';
  id: Scalars['ID']['output'];
  leaderboardSortOrder: Scalars['Int']['output'];
  /**   PLAYER INFO */
  player: ApiPlayer;
  scoringData: ApiLeaderboardScoringDataV3;
};

type ApiPlayerScorecardRoundStats = {
  __typename: 'PlayerScorecardRoundStats';
  displayName: Scalars['String']['output'];
  performance: Array<ApiScorecardStatsItem>;
  round: Scalars['String']['output'];
  roundStatus: ApiRoundStatus;
  scoring: Array<ApiScorecardStatsItem>;
  strokesGained: Array<ApiStrokesGainedStats>;
};

type ApiPlayerScorecardStats = {
  __typename: 'PlayerScorecardStats';
  id: Scalars['ID']['output'];
  rounds: Array<ApiPlayerScorecardRoundStats>;
};

type ApiPlayerScorecardStatsCompressed = {
  __typename: 'PlayerScorecardStatsCompressed';
  id: Scalars['ID']['output'];
  payload: Scalars['String']['output'];
};

type ApiPlayerSponsorBrand =
  | 'ACE'
  | 'ADAM_SCOTT'
  | 'ADIDAS'
  | 'ADP'
  | 'AMAZON'
  | 'AON'
  | 'BONOBOS'
  | 'BRANDT_SNEDEKER'
  | 'BRIDGESTONE_GOLF'
  | 'CALLAWAY'
  | 'CALLAWAY_FEED'
  | 'CAMERON_PERCY'
  | 'CLEVELANDGOLF'
  | 'CLEVELANDGOLF_FEED'
  | 'COBRA'
  | 'COBRAPUMA'
  | 'CONCUR'
  | 'COUNTRYINNS'
  | 'EMPOWER_RETIREMENT'
  | 'FEDEX'
  | 'GOLDMAN_SACHS'
  | 'GOLFFOREVER'
  | 'GREYGOOSE'
  | 'HONMA'
  | 'IAN_POULTER'
  | 'JORDAN_SPIETH'
  | 'LEVELWEAR'
  | 'MASSAGE_ENVY'
  | 'MASTERCARD'
  | 'MATT_KUCHAR'
  | 'MERCEDES'
  | 'METLIFE'
  | 'MIZUNO'
  | 'NIKE'
  | 'NIKE_FEED'
  | 'OAKLEY'
  | 'OSTEO_BIFLEX'
  | 'PACIFICLIFE'
  | 'PERRY_ELLIS'
  | 'PGATOURLIVEFRI'
  | 'PGATOURLIVETHURS'
  | 'PHIL_MICKELSON'
  | 'PING'
  | 'PUMA'
  | 'PUTNAM'
  | 'PUTNAM_BRADLEY'
  | 'PUTNAM_CURRAN'
  | 'PUTNAM_STEELE'
  | 'QUICKENLOANS'
  | 'RICKIE_FOWLER'
  | 'RORY_MCILROY'
  | 'SERGIO_GARCIA'
  | 'SIKGOLF'
  | 'SKECHERS'
  | 'STRYKER_FRED'
  | 'STRYKER_HAL'
  | 'SUPERSTROKE'
  | 'TAYLORMADE'
  | 'TEST1'
  | 'TEST2'
  | 'TGLTEAMATL'
  | 'TGLTEAMBOS'
  | 'TGLTEAMJUP'
  | 'TGLTEAMLA'
  | 'TGLTEAMNY'
  | 'TGLTEAMSF'
  | 'TIGER_WOODS'
  | 'TITLEIST'
  | 'TITLEIST_BALL'
  | 'TITLEIST_FULL'
  | 'TMAG'
  | 'TP5'
  | 'UNITED_RENTALS'
  | 'VERITEX'
  | 'ZACH_JOHNSON'
  | 'ZURICH';

type ApiPlayerSponsors = {
  __typename: 'PlayerSponsors';
  defaultSponsor?: Maybe<ApiSponsor>;
  playerId: Scalars['String']['output'];
  sponsors: Array<ApiSponsor>;
};

type ApiPlayerSponsorship = {
  __typename: 'PlayerSponsorship';
  playerId: Scalars['String']['output'];
  sponsor?: Maybe<ApiPlayerSponsorBrand>;
};

type ApiPlayerState =
  | 'ACTIVE'
  | 'BETWEEN_ROUNDS'
  | 'COMPLETE'
  | 'CUT'
  | 'DISQUALIFIED'
  | 'NOT_STARTED'
  | 'WITHDRAWN';

type ApiPlayerStoriesWidget = {
  __typename: 'PlayerStoriesWidget';
  playerSponsorships?: Maybe<Array<ApiPlayerStorySponsorship>>;
  storyRounds: Array<Scalars['String']['output']>;
  subTitle: Scalars['String']['output'];
  title: Scalars['String']['output'];
  tournamentId: Scalars['String']['output'];
};

type ApiPlayerStorySponsorship = {
  __typename: 'PlayerStorySponsorship';
  logoDarkUrl: Scalars['String']['output'];
  logoUrl: Scalars['String']['output'];
  sponsor: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

type ApiPlayerTournamentStatus = {
  __typename: 'PlayerTournamentStatus';
  displayMode: ApiPlayerTournamentStatusDisplayMode;
  playerId: Scalars['ID']['output'];
  position: Scalars['String']['output'];
  roundDisplay: Scalars['String']['output'];
  roundStatus: ApiRoundStatus;
  roundStatusColor: ApiRoundStatusColor;
  roundStatusDisplay: Scalars['String']['output'];
  score: Scalars['String']['output'];
  teeTime?: Maybe<Scalars['AWSTimestamp']['output']>;
  thru: Scalars['String']['output'];
  total: Scalars['String']['output'];
  tournamentId: Scalars['String']['output'];
  tournamentName: Scalars['String']['output'];
};

type ApiPlayerTournamentStatusDisplayMode =
  | 'IN_PROGRESS'
  | 'OFFICIAL'
  | 'TEE_TIMES';

type ApiPlayerVideo = {
  __typename: 'PlayerVideo';
  firstName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  shortName?: Maybe<Scalars['String']['output']>;
};

type ApiPlayoff = {
  __typename: 'Playoff';
  currentHole: Scalars['Int']['output'];
  holes: Array<ApiPlayoffHole>;
  players: Array<ApiPlayoffPlayer>;
  thru?: Maybe<Scalars['String']['output']>;
};

type ApiPlayoffDisplayType =
  | 'ALL'
  | 'NONE'
  | 'PLAY_BY_PLAY'
  | 'SCORECARD';

type ApiPlayoffHole = {
  __typename: 'PlayoffHole';
  courseHole: Scalars['String']['output'];
  format?: Maybe<Scalars['String']['output']>;
  isTotal?: Maybe<Scalars['Boolean']['output']>;
  par: Scalars['String']['output'];
  playoffHole: Scalars['String']['output'];
};

type ApiPlayoffPlayer = {
  __typename: 'PlayoffPlayer';
  active: Scalars['Boolean']['output'];
  player: ApiPlayer;
  position: Scalars['String']['output'];
  scores: Array<ApiSimpleScore>;
};

type ApiPlayoffScorecard = {
  __typename: 'PlayoffScorecard';
  courseId: Scalars['String']['output'];
  courseName: Scalars['String']['output'];
  detailViewEnabled: Scalars['Boolean']['output'];
  drawersEnabled: Scalars['Boolean']['output'];
  holeDetail: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  locationDetail: Scalars['String']['output'];
  players: Array<ApiScorecardHeaderPlayer>;
  playoff: ApiPlayoff;
  playoffScoredType: ApiPlayoffScoredType;
  title: Scalars['String']['output'];
  tourcastURI?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  tourcastURL?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  tourcastURLWeb?: Maybe<Scalars['String']['output']>;
};

type ApiPlayoffScoredType =
  | 'AGGREGATE'
  | 'SUDDEN_DEATH';

type ApiPlayoffTeams = {
  __typename: 'PlayoffTeams';
  active: Scalars['Boolean']['output'];
  players: Array<ApiTspScPlayer>;
  position: Scalars['String']['output'];
  scores: Array<ApiSimpleScore>;
  teamId: Scalars['String']['output'];
};

type ApiPointOfInterestCoords = {
  __typename: 'PointOfInterestCoords';
  bottomToTopCoords: ApiStrokeCoordinates;
  leftToRightCoords: ApiStrokeCoordinates;
};

type ApiPowerRankings = {
  __typename: 'PowerRankings';
  ascendingOrder: Scalars['Boolean']['output'];
  powerRankingsTableRow: Array<ApiPowerRankingsTableRow>;
  tableTitle: Scalars['String']['output'];
  tournamentName: Scalars['String']['output'];
  unorderedList: Scalars['Boolean']['output'];
};

type ApiPowerRankingsTableRow = {
  __typename: 'PowerRankingsTableRow';
  comment: Scalars['String']['output'];
  commentNodes?: Maybe<Array<ApiTourSponsorDescription>>;
  player?: Maybe<ApiPlayerInfo>;
  rank?: Maybe<Scalars['Int']['output']>;
};

type ApiPresentedByConfig = {
  __typename: 'PresentedByConfig';
  presentedBy: ApiSponsor;
  splashScreen: ApiSponsor;
};

type ApiPreviousMatch = {
  __typename: 'PreviousMatch';
  matchId: Scalars['ID']['output'];
  matchResult: Scalars['String']['output'];
  matchScore: Scalars['String']['output'];
  matchStatus: Scalars['String']['output'];
  opponent: ApiPreviousMatchOpponent;
  roundDisplayText: Scalars['String']['output'];
  roundNumber: Scalars['Int']['output'];
};

type ApiPreviousMatchOpponent = {
  __typename: 'PreviousMatchOpponent';
  bracketSeed: Scalars['String']['output'];
  countryFlag: Scalars['String']['output'];
  displayName: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  headshot: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  playerId: Scalars['ID']['output'];
  shortName: Scalars['String']['output'];
  tournamentSeed: Scalars['String']['output'];
};

type ApiPreviousMatches = {
  __typename: 'PreviousMatches';
  header: Scalars['String']['output'];
  matches?: Maybe<Array<ApiPreviousMatch>>;
  messages?: Maybe<Array<ApiMessage>>;
};

type ApiPreviousRounds = {
  __typename: 'PreviousRounds';
  matches?: Maybe<Array<ApiPreviousMatch>>;
  roundHeader: Scalars['String']['output'];
  roundNumber: Scalars['Int']['output'];
};

type ApiPriorityCategory = {
  __typename: 'PriorityCategory';
  detail?: Maybe<Scalars['String']['output']>;
  displayName: Scalars['String']['output'];
  players: Array<ApiPriorityPlayer>;
};

type ApiPriorityPlayer = {
  __typename: 'PriorityPlayer';
  displayName: Scalars['String']['output'];
  playerId: Scalars['String']['output'];
};

type ApiPriorityRankings = {
  __typename: 'PriorityRankings';
  categories: Array<ApiPriorityCategory>;
  displayYear: Scalars['String']['output'];
  throughText: Scalars['String']['output'];
  tourCode: ApiTourCode;
  year: Scalars['Int']['output'];
  yearPills: Array<ApiStatYearPills>;
};

type ApiProfileFedExFallStandings = {
  __typename: 'ProfileFedExFallStandings';
  description: Scalars['String']['output'];
  detailCopy?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** @deprecated Use logoAsset */
  logo: Scalars['String']['output'];
  logoAsset: ApiImageAsset;
  /** @deprecated Use logoDarkAsset */
  logoDark: Scalars['String']['output'];
  logoDarkAsset: ApiImageAsset;
  rank: Scalars['String']['output'];
  /** @deprecated Use rankLogoAsset */
  rankLogo?: Maybe<Scalars['String']['output']>;
  rankLogoAsset?: Maybe<ApiImageAsset>;
  /** @deprecated Use rankLogoDarkAsset */
  rankLogoDark?: Maybe<Scalars['String']['output']>;
  rankLogoDarkAsset?: Maybe<ApiImageAsset>;
  title: Scalars['String']['output'];
  total: Scalars['String']['output'];
  totalLabel: Scalars['String']['output'];
  totals?: Maybe<Array<ApiProfileStandingsTotal>>;
  webview?: Maybe<Scalars['String']['output']>;
  webviewBrowserControls?: Maybe<Scalars['Boolean']['output']>;
};

type ApiProfileHeadshot = {
  __typename: 'ProfileHeadshot';
  country: Scalars['String']['output'];
  countryFlag: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  image: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
};

type ApiProfileOverview = {
  __typename: 'ProfileOverview';
  /** @deprecated use profileStandings */
  fedexFallStandings?: Maybe<ApiProfileFedExFallStandings>;
  headshot: ApiProfileHeadshot;
  id: Scalars['ID']['output'];
  performance: Array<ApiProfilePerformance>;
  profileStandings: Array<ApiProfileStandings>;
  snapshot: Array<ApiProfileSnapshotItem>;
  /** @deprecated use profileStandings */
  standings: ApiProfileStandings;
  tglTeamLogo?: Maybe<Scalars['String']['output']>;
  tglTeamName?: Maybe<Scalars['String']['output']>;
};

type ApiProfilePerformance = {
  __typename: 'ProfilePerformance';
  displaySeason: Scalars['String']['output'];
  season: Scalars['String']['output'];
  stats: Array<ApiProfilePerformanceStat>;
  tour: ApiTourCode;
};

type ApiProfilePerformanceStat = {
  __typename: 'ProfilePerformanceStat';
  career?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  value: Scalars['String']['output'];
  wide?: Maybe<Scalars['Boolean']['output']>;
};

type ApiProfileSnapshotItem = {
  __typename: 'ProfileSnapshotItem';
  description?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

type ApiProfileStandings = {
  __typename: 'ProfileStandings';
  description: Scalars['String']['output'];
  detailCopy?: Maybe<Scalars['String']['output']>;
  detailUrl?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** @deprecated Use logoAsset */
  logo: Scalars['String']['output'];
  logoAsset: ApiImageAsset;
  /** @deprecated Use logoDarkAsset */
  logoDark: Scalars['String']['output'];
  logoDarkAsset: ApiImageAsset;
  owgr?: Maybe<Scalars['String']['output']>;
  rank: Scalars['String']['output'];
  /** @deprecated Use rankLogoAsset */
  rankLogo?: Maybe<Scalars['String']['output']>;
  rankLogoAsset?: Maybe<ApiImageAsset>;
  /** @deprecated Use rankLogoDarkAsset */
  rankLogoDark?: Maybe<Scalars['String']['output']>;
  rankLogoDarkAsset?: Maybe<ApiImageAsset>;
  title: Scalars['String']['output'];
  total: Scalars['String']['output'];
  totalLabel: Scalars['String']['output'];
  totals?: Maybe<Array<ApiProfileStandingsTotal>>;
  webview?: Maybe<Scalars['String']['output']>;
  webviewBrowserControls?: Maybe<Scalars['Boolean']['output']>;
};

type ApiProfileStandingsTotal = {
  __typename: 'ProfileStandingsTotal';
  total: Scalars['String']['output'];
  totalLabel: Scalars['String']['output'];
};

type ApiProgramStat = {
  __typename: 'ProgramStat';
  statName?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

type ApiPromoItem = ApiFieldPromoSection | ApiPromoSection | ApiPromoSectionNewsSection;

type ApiPromoSection = {
  __typename: 'PromoSection';
  items: Array<ApiPromoSectionItem>;
  title: Scalars['String']['output'];
};

type ApiPromoSectionContainer = {
  __typename: 'PromoSectionContainer';
  sections: Array<ApiPromoItem>;
};

type ApiPromoSectionItem = {
  __typename: 'PromoSectionItem';
  accessibilityText: Scalars['String']['output'];
  backgroundColor: Scalars['String']['output'];
  externalLaunch: Scalars['Boolean']['output'];
  label?: Maybe<Scalars['String']['output']>;
  labelColor: Scalars['String']['output'];
  logo: Scalars['String']['output'];
  webview: Scalars['String']['output'];
  webviewBrowserControls: Scalars['Boolean']['output'];
  webviewTitle: Scalars['String']['output'];
};

type ApiPromoSectionNewsSection = {
  __typename: 'PromoSectionNewsSection';
  franchises: Array<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};

type ApiPromoSectionType =
  | 'GAMING'
  | 'MORE'
  | 'WEBGOLFBET';

type ApiQuery = {
  __typename: 'Query';
  /**
   *   Returns the AdConfig for the given optionally supplied tour and/or tournament
   * @deprecated use REST API
   */
  adTagConfig: ApiAdConfig;
  allTimeRecordCategories: ApiAllTimeRecordCategories;
  allTimeRecordStat: ApiAllTimeRecordStat;
  alltoursponsors: Array<Maybe<ApiTourSponsor>>;
  aon: ApiAon;
  /** @deprecated use REST API */
  articleAdConfig: ApiAdTagConfig;
  /** @deprecated Use articleDetailsCompressed */
  articleDetails: ApiNewsArticleDetails;
  articleDetailsCompressed: ApiNewsArticleDetailsCompressed;
  broadcastTimes: ApiBroadcastCoverage;
  /**   Note this is optional on purpose */
  bubble?: Maybe<ApiBubbleWatch>;
  /** @deprecated use bubble */
  bubbleWatch?: Maybe<ApiTourCupRankingEvent>;
  completeSchedule: Array<ApiSchedule>;
  contentFragmentTabs: ApiContentFragmentTabs;
  contentFragmentType?: Maybe<ApiContentFragmentType>;
  contentFragmentsCompressed: ApiContentFragmentsCompressed;
  courseHolesStats: Array<ApiHoleStatSummary>;
  courseStats: ApiTournamentHoleStats;
  courseStatsDetails: ApiCourseStatsDetails;
  courseStatsOverview: ApiCourseStatsOverview;
  coverage: ApiBroadcastCoverage;
  cupPastResults: ApiCupPastResults;
  cupPlayOverviewLeaderboard: ApiCupTournamentStatus;
  cupRoundLeaderboard: ApiCupTournamentLeaderboard;
  cupRoundLeaderboardCompressed: ApiCupTournamentLeaderboardCompressed;
  cupScorecard: ApiCupScorecard;
  cupTeamRoster: ApiCupTeamRosters;
  cupTeeTimes: ApiCupTeeTimes;
  currentLeadersCompressed?: Maybe<ApiCurrentLeadersCompressed>;
  defaultTourCup: ApiTourCupRankingEvent;
  eaglesForImpact: ApiEaglesForImpact;
  eventGuideConfig: ApiEventGuideConfig;
  field: ApiField;
  fieldStats: ApiFieldStats;
  franchises: Array<Scalars['String']['output']>;
  genericContent: ApiGenericContent;
  genericContentCompressed: ApiGenericContentCompressed;
  getExpertPicksTable: ApiExpertPicks;
  getPowerRankingsTable: ApiPowerRankings;
  getRCPhotoGallery: ApiRcPhotoGallery;
  getRelatedFact: ApiRelatedFact;
  getShotCommentary: ApiShotCommentary;
  /**   Returns full details for a match based on supplied matchId */
  groupLocations: ApiGroupLocation;
  groupStageRankings: ApiGroupStageRankings;
  groupedField: ApiGroupedField;
  historicalOdds?: Maybe<ApiHistoricalPlayerOdds>;
  historicalScorecardStats: ApiHistoricalPlayerScorecards;
  historicalTournamentsOdds?: Maybe<ApiHistoricalTournamentOdds>;
  holeDetails: ApiHoleDetail;
  leaderboardCompressedV2: ApiLeaderboardCompressedV2;
  /**   Get the leaderboard for a tournament by tournamentID. The data in the payload property will be Base64 encoded. */
  leaderboardCompressedV3: ApiLeaderboardCompressedV3;
  leaderboardHoleByHole: ApiLeaderboardHoleByHole;
  leaderboardLegend: ApiLeaderboardInfo;
  leaderboardStats: ApiLeaderboardStats;
  leaderboardStrokes: ApiLeaderboardStrokes;
  leaderboardStrokesCompressed: ApiLeaderboardStrokesCompressed;
  leaderboardV2: ApiLeaderboardV2;
  leaderboardV3: ApiLeaderboardV3;
  legalDocsCompressed: ApiGenericContentCompressed;
  liveAudioStream: ApiAudioStream;
  liveVideoOverride: ApiLiveVideoOverride;
  matchOutcomeIq: ApiRyderCupMatchOutcomeIq;
  matchPlayLeaderboard: ApiMpLeaderboard;
  matchPlayLeaderboardCompressed: ApiLeaderboardCompressed;
  matchPlayPlayoffScorecard: ApiMpPlayoffScorecard;
  matchPlayScorecard: ApiMpScorecard;
  matchPlayScorecardResults: ApiMpScorecardResults;
  matchPlayTeeTimes: ApiMpTeeTimes;
  matchPlayTeeTimesCompressed: ApiTeeTimesCompressed;
  networks: ApiBroadcastNetworks;
  newletterSubscriptions: Array<ApiNewsletter>;
  newsArticles: ApiNewsArticles;
  newsFranchises: Array<ApiNewsFranchise>;
  oddsGraph: ApiOddsTimeline;
  oddsTable: ApiOddsTable;
  oddsToWin: ApiOddsToWinMarket;
  oddsToWinCompressed: ApiOddsToWinMarketCompressed;
  player: ApiPlayerBioWrapper;
  playerComparison: ApiPlayerComparison;
  playerDirectory: ApiPlayerDirectory;
  playerFinishStats?: Maybe<ApiPlayerFinishStats>;
  playerHub?: Maybe<ApiPlayerHubPlayerCompressed>;
  /** @deprecated use REST API */
  playerProfileCareer: ApiPlayerProfileCareer;
  /** @deprecated use REST API */
  playerProfileCareerResults: ApiPlayerProfileCareerResults;
  playerProfileCourseResults?: Maybe<ApiPlayerProfileCourseResults>;
  playerProfileMajorResults?: Maybe<ApiPlayerProfileMajors>;
  /** @deprecated use REST API */
  playerProfileOverview: ApiProfileOverview;
  playerProfileScorecards: ApiHistoricalPlayerScorecards;
  /** @deprecated use REST API */
  playerProfileSeasonResults: ApiPlayerResults;
  /** @deprecated use REST API */
  playerProfileStandings: Array<ApiPlayerOverviewStandings>;
  playerProfileStats: Array<ApiPlayerProfileStat>;
  /** @deprecated use REST API */
  playerProfileStatsFull: Array<ApiPlayerProfileStatFull>;
  /** @deprecated use REST API */
  playerProfileStatsFullV2: ApiPlayerProfileStatsFullV2;
  /** @deprecated use REST API */
  playerProfileStatsYears: Array<ApiPlayerProfileStatYear>;
  playerProfileTournamentResults: ApiPlayerProfileTournamentResults;
  /** @deprecated use REST API */
  playerSponsorships: Array<ApiPlayerSponsorship>;
  playerTournamentStatus?: Maybe<ApiPlayerTournamentStatus>;
  players: Array<ApiPlayerBioWrapper>;
  playersOddsComparison: Array<ApiPlayerComparisonOdds>;
  playoffScorecard: ApiPlayoffScorecard;
  /** @deprecated use v3 */
  playoffScorecardV2?: Maybe<Array<ApiPlayoffScorecard>>;
  playoffScorecardV3: ApiTournamentPlayoffScorecards;
  playoffShotDetails: ApiGroupShotDetails;
  playoffShotDetailsCompressed: ApiGroupShotDetailsCompressed;
  podcastEpisodes: Array<ApiEpisode>;
  podcasts: Array<ApiAudio>;
  presentedBy: ApiPresentedByConfig;
  priorityRankings: ApiPriorityRankings;
  promoSection: ApiPromoSectionContainer;
  rankingsWinners: Array<ApiRankingsPastWinner>;
  rsm: ApiRsmStandings;
  rsmLeaderboard: ApiRsmLeaderboard;
  ryderCupArticleDetailsCompressed: ApiNewsArticleDetailsCompressed;
  ryderCupBroadcastCoverage: ApiRyderCupBroadcastCoverage;
  ryderCupContentFragmentsCompressed: ApiContentFragmentsCompressed;
  ryderCupContentOptions: ApiRyderCupMediaSearchOptions;
  ryderCupContentPageTabs: ApiContentFragmentTabs;
  ryderCupMixedMedia: Array<ApiRyderCupContent>;
  ryderCupMixedMediaCompressed: ApiRyderCupContentCompressed;
  ryderCupPlayerProfileCompressed: ApiRyderCupPlayerProfileCompressed;
  /** @deprecated use ryderCupTeamRankingsV2 */
  ryderCupTeamRankings?: Maybe<ApiRyderCupTeamRankings>;
  /** @deprecated use ryderCupTeamRankingsCompressedV2 */
  ryderCupTeamRankingsCompressed?: Maybe<ApiRyderCupTeamRankingsCompressed>;
  ryderCupTeamRankingsCompressedV2?: Maybe<ApiRyderCupTeamRankingsCompressed>;
  ryderCupTeamRankingsV2?: Maybe<ApiRyderCupRankingsV2>;
  ryderCupTournament?: Maybe<ApiRyderCupTournament>;
  ryderCupTournaments: Array<ApiRyderCupTournamentOverview>;
  ryderCupVideoById?: Maybe<ApiRcVideoPage>;
  scatterData: ApiScatterData;
  scatterDataCompressed: ApiScatterDataCompressed;
  schedule: ApiSchedule;
  scheduleYears: ApiScheduleYears;
  scorecardCompressedV3: ApiScorecardCompressedV3;
  scorecardStats: ApiPlayerScorecardStats;
  scorecardStatsComparison?: Maybe<ApiScorecardStatsComparison>;
  scorecardStatsV3: ApiPlayerScorecardStats;
  scorecardStatsV3Compressed: ApiPlayerScorecardStatsCompressed;
  scorecardV2: ApiLeaderboardDrawerV2;
  scorecardV3: ApiScorecardV3;
  searchBarFeatures: ApiSearchBarFeatures;
  /** @deprecated No longer supported */
  searchPlayers: Array<ApiPlayer>;
  shotDetailsCompressedV3: ApiShotDetailsCompressedV3;
  shotDetailsV3: ApiShotDetails;
  signatureStandings: ApiSignatureStandings;
  sponsoredArticles: Array<ApiNewsArticle>;
  sponsoredArticlesV2: ApiSponsoredArticles;
  /** @deprecated use REST API */
  sponsorships: ApiPlayerSponsors;
  statDetails: ApiStatDetails;
  statLeaders: ApiStatLeaderCategory;
  statOverview: ApiOverviewStats;
  statsLeadersMobile: ApiMobileStatLeaders;
  teamStrokePlayLeaderboard: ApiTspLeaderboard;
  teamStrokePlayLeaderboardCompressed: ApiLeaderboardCompressed;
  teamStrokePlayScorecard: ApiTspScorecard;
  teamStrokePlayScorecardRounds: ApiTspScorecardRounds;
  teamStrokePlayTeeTimes: ApiTspTeeTimes;
  teamStrokePlayTeeTimesCompressed: ApiTeeTimesCompressed;
  teeTimes: ApiTeeTimes;
  teeTimesCompressed: ApiTeeTimesCompressed;
  teeTimesCompressedV2: ApiTeeTimesCompressed;
  teeTimesV2: ApiTeeTimesV2;
  /**   Returns full details for matches based on supplied matchIds */
  tglMatch?: Maybe<ApiTglMatch>;
  /**   return a season from TGL based on supplied year, if year is ommitted current year returned, used by AEM */
  tglMatches: Array<ApiTglMatch>;
  /**  ## TGL queries */
  tglSchedule: ApiTglSchedule;
  tourCup: ApiTourCupRankingEvent;
  tourCupCombined: ApiTourCupCombined;
  tourCupSplit?: Maybe<ApiTourCupSplit>;
  tourCups: Array<ApiTourCupRankingEvent>;
  tourcastTable: ApiTourcastTable;
  tourcastVideos: Array<ApiVideo>;
  tournamentGroupLocations: ApiTournamentGroupLocation;
  tournamentHistory?: Maybe<ApiTournamentHistory>;
  /** @deprecated DOES NOT WORK USE oddsWin / REST APIs */
  tournamentOddsCompressedV2: ApiTournamentOddsCompressedV2;
  tournamentOddsToWin: ApiTournamentOddsToWin;
  /** @deprecated DOES NOT WORK USE oddsToWin / REST APIs */
  tournamentOddsV2: ApiTournamentOddsV2;
  tournamentOverview: ApiTournamentOverview;
  tournamentPastResults: ApiHistoricalLeaderboard;
  tournamentRecap: ApiTournamentRecap;
  /**   Get tournament information for the given tournament IDs */
  tournaments: Array<ApiTournament>;
  tspPlayoffShotDetails: ApiTeamShotDetails;
  tspPlayoffShotDetailsCompressed: ApiTeamShotDetailsCompressed;
  universityRankings: ApiUniversityRankings;
  universityTotalPoints: ApiUniversityTotalPoints;
  upcomingNetworks: ApiUpcomingBroadcastNetworks;
  upcomingSchedule: ApiScheduleUpcoming;
  videoById?: Maybe<ApiVideo>;
  videoFranchises?: Maybe<ApiTourCategories>;
  videoHero: ApiVideoHero;
  videoLandingPage?: Maybe<ApiWatchLanding>;
  videoNavigation?: Maybe<ApiVideoNavigation>;
  videoRecommendations: Array<ApiVideo>;
  videos: Array<ApiVideo>;
  weather: ApiWeatherSummary;
  yourTour: ApiYourTourStory;
  yourTourNews: Array<ApiYourTourNews>;
};


type ApiQueryAdTagConfigArgs = {
  tour?: InputMaybe<ApiTourCode>;
  tournamentId?: InputMaybe<Scalars['String']['input']>;
};


type ApiQueryAllTimeRecordCategoriesArgs = {
  tourCode: ApiTourCode;
};


type ApiQueryAllTimeRecordStatArgs = {
  recordId: Scalars['String']['input'];
  tourCode: ApiTourCode;
};


type ApiQueryAlltoursponsorsArgs = {
  tourCode: ApiTourCode;
};


type ApiQueryAonArgs = {
  year?: InputMaybe<Scalars['Int']['input']>;
};


type ApiQueryArticleAdConfigArgs = {
  franchise?: InputMaybe<Scalars['String']['input']>;
};


type ApiQueryArticleDetailsArgs = {
  path: Scalars['String']['input'];
};


type ApiQueryArticleDetailsCompressedArgs = {
  path: Scalars['String']['input'];
};


type ApiQueryBroadcastTimesArgs = {
  pastResults?: InputMaybe<Scalars['Boolean']['input']>;
  tournamentId: Scalars['ID']['input'];
};


type ApiQueryBubbleArgs = {
  tourCode: ApiTourCode;
  tournamentId: Scalars['ID']['input'];
};


type ApiQueryBubbleWatchArgs = {
  tourCode: ApiTourCode;
};


type ApiQueryCompleteScheduleArgs = {
  filter?: InputMaybe<ApiTournamentCategory>;
  tourCode: ApiTourCode;
};


type ApiQueryContentFragmentTabsArgs = {
  path: Scalars['String']['input'];
};


type ApiQueryContentFragmentTypeArgs = {
  path: Scalars['String']['input'];
};


type ApiQueryContentFragmentsCompressedArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  tourCode: ApiTourCode;
};


type ApiQueryCourseHolesStatsArgs = {
  courseId: Scalars['ID']['input'];
  tournamentId: Scalars['ID']['input'];
};


type ApiQueryCourseStatsArgs = {
  tournamentId: Scalars['ID']['input'];
};


type ApiQueryCourseStatsDetailsArgs = {
  queryType: ApiCourseStatsId;
  round?: InputMaybe<ApiToughestRound>;
  tourCode: ApiTourCode;
  year?: InputMaybe<Scalars['Int']['input']>;
};


type ApiQueryCourseStatsOverviewArgs = {
  tourCode: ApiTourCode;
  year?: InputMaybe<Scalars['Int']['input']>;
};


type ApiQueryCoverageArgs = {
  pastResults?: InputMaybe<Scalars['Boolean']['input']>;
  tournamentId: Scalars['ID']['input'];
};


type ApiQueryCupPastResultsArgs = {
  tournamentId: Scalars['ID']['input'];
};


type ApiQueryCupPlayOverviewLeaderboardArgs = {
  id: Scalars['ID']['input'];
};


type ApiQueryCupRoundLeaderboardArgs = {
  round?: InputMaybe<Scalars['Int']['input']>;
  tournamentId: Scalars['String']['input'];
};


type ApiQueryCupRoundLeaderboardCompressedArgs = {
  round?: InputMaybe<Scalars['Int']['input']>;
  tournamentId: Scalars['String']['input'];
};


type ApiQueryCupScorecardArgs = {
  matchId: Scalars['Int']['input'];
  round: Scalars['Int']['input'];
  tournamentId: Scalars['ID']['input'];
};


type ApiQueryCupTeamRosterArgs = {
  tournamentId: Scalars['ID']['input'];
};


type ApiQueryCupTeeTimesArgs = {
  tournamentId: Scalars['ID']['input'];
};


type ApiQueryCurrentLeadersCompressedArgs = {
  tourCode?: InputMaybe<ApiTourCode>;
  tournamentId?: InputMaybe<Scalars['ID']['input']>;
};


type ApiQueryDefaultTourCupArgs = {
  tour: ApiTourCode;
  year?: InputMaybe<Scalars['Int']['input']>;
};


type ApiQueryEaglesForImpactArgs = {
  tournamentId: Scalars['ID']['input'];
};


type ApiQueryEventGuideConfigArgs = {
  tournamentId: Scalars['String']['input'];
};


type ApiQueryFieldArgs = {
  changesOnly?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
  includeWithdrawn?: InputMaybe<Scalars['Boolean']['input']>;
};


type ApiQueryFieldStatsArgs = {
  fieldStatType?: InputMaybe<ApiFieldStatType>;
  tournamentId: Scalars['ID']['input'];
};


type ApiQueryFranchisesArgs = {
  tourCode?: InputMaybe<Scalars['String']['input']>;
};


type ApiQueryGenericContentArgs = {
  path: Scalars['String']['input'];
};


type ApiQueryGenericContentCompressedArgs = {
  path: Scalars['String']['input'];
};


type ApiQueryGetExpertPicksTableArgs = {
  path: Scalars['String']['input'];
  year?: InputMaybe<Scalars['Int']['input']>;
};


type ApiQueryGetPowerRankingsTableArgs = {
  path: Scalars['String']['input'];
};


type ApiQueryGetRcPhotoGalleryArgs = {
  path: Scalars['String']['input'];
};


type ApiQueryGetRelatedFactArgs = {
  path: Scalars['String']['input'];
};


type ApiQueryGetShotCommentaryArgs = {
  playerId: Scalars['String']['input'];
  round: Scalars['Int']['input'];
  tournamentId: Scalars['String']['input'];
};


type ApiQueryGroupLocationsArgs = {
  round: Scalars['Int']['input'];
  tournamentId: Scalars['ID']['input'];
};


type ApiQueryGroupStageRankingsArgs = {
  tournamentId: Scalars['ID']['input'];
};


type ApiQueryGroupedFieldArgs = {
  changesOnly?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
  includeWithdrawn?: InputMaybe<Scalars['Boolean']['input']>;
};


type ApiQueryHistoricalOddsArgs = {
  marketId: ApiHistoricalOddsId;
  playerId: Scalars['String']['input'];
  timeStamp?: InputMaybe<Scalars['AWSDateTime']['input']>;
  tournamentId: Scalars['String']['input'];
};


type ApiQueryHistoricalScorecardStatsArgs = {
  playerId: Scalars['ID']['input'];
};


type ApiQueryHistoricalTournamentsOddsArgs = {
  marketId: ApiOddsMarketType;
  timeStamp?: InputMaybe<Scalars['AWSDateTime']['input']>;
  tournamentId: Scalars['String']['input'];
};


type ApiQueryHoleDetailsArgs = {
  courseId: Scalars['ID']['input'];
  hole: Scalars['Int']['input'];
  tournamentId: Scalars['ID']['input'];
};


type ApiQueryLeaderboardCompressedV2Args = {
  id: Scalars['ID']['input'];
};


type ApiQueryLeaderboardCompressedV3Args = {
  id: Scalars['ID']['input'];
};


type ApiQueryLeaderboardHoleByHoleArgs = {
  round?: InputMaybe<Scalars['Int']['input']>;
  tournamentId: Scalars['ID']['input'];
};


type ApiQueryLeaderboardLegendArgs = {
  odds: Scalars['Boolean']['input'];
  tournamentId: Scalars['ID']['input'];
};


type ApiQueryLeaderboardStatsArgs = {
  id: Scalars['ID']['input'];
  statsType?: InputMaybe<ApiLeaderboardStatsType>;
};


type ApiQueryLeaderboardStrokesArgs = {
  id: Scalars['ID']['input'];
};


type ApiQueryLeaderboardStrokesCompressedArgs = {
  id: Scalars['ID']['input'];
};


type ApiQueryLeaderboardV2Args = {
  id: Scalars['ID']['input'];
};


type ApiQueryLeaderboardV3Args = {
  id: Scalars['ID']['input'];
};


type ApiQueryLegalDocsCompressedArgs = {
  path: Scalars['String']['input'];
};


type ApiQueryLiveAudioStreamArgs = {
  id: Scalars['ID']['input'];
};


type ApiQueryLiveVideoOverrideArgs = {
  tourCode: ApiTourCode;
  tournamentId: Scalars['String']['input'];
};


type ApiQueryMatchOutcomeIqArgs = {
  matchId: Scalars['Int']['input'];
  roundNumber?: InputMaybe<Scalars['Int']['input']>;
  tournamentId: Scalars['String']['input'];
};


type ApiQueryMatchPlayLeaderboardArgs = {
  id: Scalars['ID']['input'];
};


type ApiQueryMatchPlayLeaderboardCompressedArgs = {
  id: Scalars['ID']['input'];
};


type ApiQueryMatchPlayPlayoffScorecardArgs = {
  matchId: Scalars['ID']['input'];
  roundNum: Scalars['Int']['input'];
  tournamentId: Scalars['ID']['input'];
};


type ApiQueryMatchPlayScorecardArgs = {
  matchId: Scalars['ID']['input'];
  roundNum: Scalars['Int']['input'];
  tournamentId: Scalars['ID']['input'];
};


type ApiQueryMatchPlayScorecardResultsArgs = {
  matchId: Scalars['ID']['input'];
  roundNum: Scalars['Int']['input'];
  tournamentId: Scalars['ID']['input'];
};


type ApiQueryMatchPlayTeeTimesArgs = {
  tournamentId: Scalars['ID']['input'];
};


type ApiQueryMatchPlayTeeTimesCompressedArgs = {
  tournamentId: Scalars['ID']['input'];
};


type ApiQueryNetworksArgs = {
  tournamentId: Scalars['ID']['input'];
};


type ApiQueryNewletterSubscriptionsArgs = {
  includeTournaments?: InputMaybe<Scalars['Boolean']['input']>;
};


type ApiQueryNewsArticlesArgs = {
  franchise?: InputMaybe<Scalars['String']['input']>;
  franchises?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  playerId?: InputMaybe<Scalars['ID']['input']>;
  playerIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  sectionName?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  targetYear?: InputMaybe<Scalars['String']['input']>;
  tour?: InputMaybe<ApiTourCode>;
  tournamentNum?: InputMaybe<Scalars['String']['input']>;
};


type ApiQueryNewsFranchisesArgs = {
  allFranchises?: InputMaybe<Scalars['Boolean']['input']>;
  tourCode?: InputMaybe<Scalars['String']['input']>;
};


type ApiQueryOddsGraphArgs = {
  marketId?: InputMaybe<ApiHistoricalOddsId>;
  oddsTimeType?: InputMaybe<ApiOddsTimeType>;
  playerIds: Array<Scalars['String']['input']>;
  round?: InputMaybe<Scalars['Int']['input']>;
  tournamentId: Scalars['String']['input'];
};


type ApiQueryOddsTableArgs = {
  markets?: InputMaybe<Array<ApiArticleOddsMarketsInput>>;
  players?: InputMaybe<Array<ApiArticleOddsPlayerInput>>;
  timeStamp?: InputMaybe<Scalars['String']['input']>;
  tournamentId: Scalars['String']['input'];
  tournamentName: Scalars['String']['input'];
};


type ApiQueryOddsToWinArgs = {
  oddsToWinId: Scalars['ID']['input'];
};


type ApiQueryOddsToWinCompressedArgs = {
  oddsToWinId: Scalars['ID']['input'];
};


type ApiQueryPlayerArgs = {
  id: Scalars['ID']['input'];
};


type ApiQueryPlayerComparisonArgs = {
  category?: InputMaybe<ApiPlayerComparisonCategory>;
  playerIds: Array<Scalars['String']['input']>;
  tourCode: ApiTourCode;
  tournamentId?: InputMaybe<Scalars['String']['input']>;
  year?: InputMaybe<Scalars['Int']['input']>;
};


type ApiQueryPlayerDirectoryArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  tourCode: ApiTourCode;
};


type ApiQueryPlayerFinishStatsArgs = {
  playerId: Scalars['ID']['input'];
  statId: Scalars['String']['input'];
  tourCode: ApiTourCode;
};


type ApiQueryPlayerHubArgs = {
  playerId: Scalars['ID']['input'];
};


type ApiQueryPlayerProfileCareerArgs = {
  playerId: Scalars['String']['input'];
  tourCode?: InputMaybe<ApiTourCode>;
};


type ApiQueryPlayerProfileCareerResultsArgs = {
  playerId: Scalars['ID']['input'];
};


type ApiQueryPlayerProfileCourseResultsArgs = {
  playerId: Scalars['String']['input'];
  tourCode?: InputMaybe<ApiTourCode>;
};


type ApiQueryPlayerProfileMajorResultsArgs = {
  playerId: Scalars['String']['input'];
};


type ApiQueryPlayerProfileOverviewArgs = {
  currentTour?: InputMaybe<ApiTourCode>;
  playerId: Scalars['ID']['input'];
};


type ApiQueryPlayerProfileScorecardsArgs = {
  playerId: Scalars['ID']['input'];
};


type ApiQueryPlayerProfileSeasonResultsArgs = {
  playerId: Scalars['ID']['input'];
  tourCode?: InputMaybe<ApiTourCode>;
  year?: InputMaybe<Scalars['Int']['input']>;
};


type ApiQueryPlayerProfileStandingsArgs = {
  playerId: Scalars['ID']['input'];
};


type ApiQueryPlayerProfileStatsArgs = {
  playerId: Scalars['ID']['input'];
};


type ApiQueryPlayerProfileStatsFullArgs = {
  playerId: Scalars['ID']['input'];
  year?: InputMaybe<Scalars['Int']['input']>;
};


type ApiQueryPlayerProfileStatsFullV2Args = {
  playerId: Scalars['ID']['input'];
  year?: InputMaybe<Scalars['Int']['input']>;
};


type ApiQueryPlayerProfileStatsYearsArgs = {
  playerId: Scalars['ID']['input'];
};


type ApiQueryPlayerProfileTournamentResultsArgs = {
  playerId: Scalars['ID']['input'];
  tourCode?: InputMaybe<ApiTourCode>;
};


type ApiQueryPlayerSponsorshipsArgs = {
  sponsors?: InputMaybe<Array<ApiPlayerSponsorBrand>>;
  tour: ApiTourCode;
};


type ApiQueryPlayerTournamentStatusArgs = {
  playerId: Scalars['ID']['input'];
};


type ApiQueryPlayersArgs = {
  ids: Array<Scalars['ID']['input']>;
};


type ApiQueryPlayersOddsComparisonArgs = {
  playerIds: Array<Scalars['String']['input']>;
};


type ApiQueryPlayoffScorecardArgs = {
  id: Scalars['ID']['input'];
};


type ApiQueryPlayoffScorecardV2Args = {
  id: Scalars['ID']['input'];
};


type ApiQueryPlayoffScorecardV3Args = {
  tournamentId: Scalars['ID']['input'];
};


type ApiQueryPlayoffShotDetailsArgs = {
  includeRadar?: InputMaybe<Scalars['Boolean']['input']>;
  tournamentId: Scalars['ID']['input'];
};


type ApiQueryPlayoffShotDetailsCompressedArgs = {
  includeRadar?: InputMaybe<Scalars['Boolean']['input']>;
  tournamentId: Scalars['ID']['input'];
};


type ApiQueryPodcastEpisodesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  podcastId: Scalars['String']['input'];
};


type ApiQueryPriorityRankingsArgs = {
  tourCode: ApiTourCode;
  year?: InputMaybe<Scalars['Int']['input']>;
};


type ApiQueryPromoSectionArgs = {
  section: ApiPromoSectionType;
};


type ApiQueryRankingsWinnersArgs = {
  tourCode?: InputMaybe<ApiTourCode>;
};


type ApiQueryRsmArgs = {
  year?: InputMaybe<Scalars['Int']['input']>;
};


type ApiQueryRsmLeaderboardArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  tournamentId?: InputMaybe<Scalars['ID']['input']>;
};


type ApiQueryRyderCupArticleDetailsCompressedArgs = {
  path: Scalars['String']['input'];
};


type ApiQueryRyderCupBroadcastCoverageArgs = {
  eventRegion?: InputMaybe<ApiEventRegion>;
};


type ApiQueryRyderCupContentFragmentsCompressedArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  tourCode: ApiTourCode;
};


type ApiQueryRyderCupContentPageTabsArgs = {
  path: Scalars['String']['input'];
};


type ApiQueryRyderCupMixedMediaArgs = {
  articleTags?: InputMaybe<Array<Scalars['String']['input']>>;
  ascending: Scalars['Boolean']['input'];
  categories?: InputMaybe<Array<Scalars['String']['input']>>;
  currentContentId?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  playerIds?: InputMaybe<Array<Scalars['String']['input']>>;
  team?: InputMaybe<ApiRyderCupTeamType>;
  topic?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<ApiRyderCupContentType>;
  videoTags?: InputMaybe<Array<Scalars['String']['input']>>;
  year?: InputMaybe<Scalars['Int']['input']>;
};


type ApiQueryRyderCupMixedMediaCompressedArgs = {
  articleTags?: InputMaybe<Array<Scalars['String']['input']>>;
  ascending: Scalars['Boolean']['input'];
  categories?: InputMaybe<Array<Scalars['String']['input']>>;
  currentContentId?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  playerIds?: InputMaybe<Array<Scalars['String']['input']>>;
  team?: InputMaybe<ApiRyderCupTeamType>;
  topic?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<ApiRyderCupContentType>;
  videoTags?: InputMaybe<Array<Scalars['String']['input']>>;
  year?: InputMaybe<Scalars['Int']['input']>;
};


type ApiQueryRyderCupPlayerProfileCompressedArgs = {
  playerId: Scalars['String']['input'];
};


type ApiQueryRyderCupTeamRankingsArgs = {
  eventQuery?: InputMaybe<ApiRyderCupRankingsQueryInput>;
  year?: InputMaybe<Scalars['Int']['input']>;
};


type ApiQueryRyderCupTeamRankingsCompressedArgs = {
  eventQuery?: InputMaybe<ApiRyderCupRankingsQueryInput>;
  year?: InputMaybe<Scalars['Int']['input']>;
};


type ApiQueryRyderCupTeamRankingsCompressedV2Args = {
  eventQuery?: InputMaybe<ApiRyderCupRankingsQueryInput>;
  year?: InputMaybe<Scalars['Int']['input']>;
};


type ApiQueryRyderCupTeamRankingsV2Args = {
  eventQuery?: InputMaybe<ApiRyderCupRankingsQueryInput>;
  year?: InputMaybe<Scalars['Int']['input']>;
};


type ApiQueryRyderCupTournamentArgs = {
  year: Scalars['Int']['input'];
};


type ApiQueryRyderCupVideoByIdArgs = {
  brightcoveId: Scalars['ID']['input'];
};


type ApiQueryScatterDataArgs = {
  course: Scalars['Int']['input'];
  hole: Scalars['Int']['input'];
  tournamentId: Scalars['String']['input'];
};


type ApiQueryScatterDataCompressedArgs = {
  course: Scalars['Int']['input'];
  hole: Scalars['Int']['input'];
  tournamentId: Scalars['String']['input'];
};


type ApiQueryScheduleArgs = {
  filter?: InputMaybe<ApiTournamentCategory>;
  tourCode: Scalars['String']['input'];
  year?: InputMaybe<Scalars['String']['input']>;
};


type ApiQueryScheduleYearsArgs = {
  tourCode: ApiTourCode;
};


type ApiQueryScorecardCompressedV3Args = {
  officialEventData?: InputMaybe<Scalars['Boolean']['input']>;
  playerId: Scalars['ID']['input'];
  tournamentId: Scalars['ID']['input'];
};


type ApiQueryScorecardStatsArgs = {
  id: Scalars['ID']['input'];
  playerId: Scalars['ID']['input'];
};


type ApiQueryScorecardStatsComparisonArgs = {
  category: ApiPlayerComparisonCategory;
  playerIds: Array<Scalars['String']['input']>;
  round?: InputMaybe<Scalars['Int']['input']>;
  tournamentId: Scalars['String']['input'];
};


type ApiQueryScorecardStatsV3Args = {
  id: Scalars['ID']['input'];
  playerId: Scalars['ID']['input'];
};


type ApiQueryScorecardStatsV3CompressedArgs = {
  id: Scalars['ID']['input'];
  playerId: Scalars['ID']['input'];
};


type ApiQueryScorecardV2Args = {
  id: Scalars['ID']['input'];
  playerId: Scalars['ID']['input'];
};


type ApiQueryScorecardV3Args = {
  officialEventData?: InputMaybe<Scalars['Boolean']['input']>;
  playerId: Scalars['ID']['input'];
  tournamentId: Scalars['ID']['input'];
};


type ApiQuerySearchBarFeaturesArgs = {
  tourCode?: InputMaybe<ApiTourCode>;
};


type ApiQuerySearchPlayersArgs = {
  lastName?: InputMaybe<Scalars['String']['input']>;
};


type ApiQueryShotDetailsCompressedV3Args = {
  includeRadar?: InputMaybe<Scalars['Boolean']['input']>;
  playerId: Scalars['ID']['input'];
  round: Scalars['Int']['input'];
  tournamentId: Scalars['ID']['input'];
};


type ApiQueryShotDetailsV3Args = {
  includeRadar?: InputMaybe<Scalars['Boolean']['input']>;
  playerId: Scalars['ID']['input'];
  round: Scalars['Int']['input'];
  tournamentId: Scalars['ID']['input'];
};


type ApiQuerySignatureStandingsArgs = {
  tourCode: ApiTourCode;
};


type ApiQuerySponsoredArticlesArgs = {
  sponsor: ApiArticleSponsor;
};


type ApiQuerySponsoredArticlesV2Args = {
  sponsor: ApiArticleSponsor;
};


type ApiQuerySponsorshipsArgs = {
  playerId: Scalars['ID']['input'];
};


type ApiQueryStatDetailsArgs = {
  eventQuery?: InputMaybe<ApiStatDetailEventQuery>;
  statId: Scalars['String']['input'];
  tourCode: ApiTourCode;
  year?: InputMaybe<Scalars['Int']['input']>;
};


type ApiQueryStatLeadersArgs = {
  category: ApiStatCategory;
  tourCode: ApiTourCode;
  year?: InputMaybe<Scalars['Int']['input']>;
};


type ApiQueryStatOverviewArgs = {
  tourCode: ApiTourCode;
  year?: InputMaybe<Scalars['Int']['input']>;
};


type ApiQueryStatsLeadersMobileArgs = {
  tourCode: ApiTourCode;
  year?: InputMaybe<Scalars['Int']['input']>;
};


type ApiQueryTeamStrokePlayLeaderboardArgs = {
  id: Scalars['ID']['input'];
};


type ApiQueryTeamStrokePlayLeaderboardCompressedArgs = {
  id: Scalars['ID']['input'];
};


type ApiQueryTeamStrokePlayScorecardArgs = {
  roundNum: Scalars['Int']['input'];
  teamId: Scalars['ID']['input'];
  tournamentId: Scalars['ID']['input'];
};


type ApiQueryTeamStrokePlayScorecardRoundsArgs = {
  teamId: Scalars['ID']['input'];
  tournamentId: Scalars['ID']['input'];
};


type ApiQueryTeamStrokePlayTeeTimesArgs = {
  tournamentId: Scalars['ID']['input'];
};


type ApiQueryTeamStrokePlayTeeTimesCompressedArgs = {
  tournamentId: Scalars['ID']['input'];
};


type ApiQueryTeeTimesArgs = {
  id: Scalars['ID']['input'];
};


type ApiQueryTeeTimesCompressedArgs = {
  id: Scalars['ID']['input'];
};


type ApiQueryTeeTimesCompressedV2Args = {
  id: Scalars['ID']['input'];
};


type ApiQueryTeeTimesV2Args = {
  id: Scalars['ID']['input'];
};


type ApiQueryTglMatchArgs = {
  matchId: Scalars['ID']['input'];
};


type ApiQueryTglMatchesArgs = {
  matchIds: Array<Scalars['ID']['input']>;
};


type ApiQueryTglScheduleArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  year?: InputMaybe<Scalars['Int']['input']>;
};


type ApiQueryTourCupArgs = {
  id: Scalars['ID']['input'];
  type?: InputMaybe<ApiTourCupType>;
};


type ApiQueryTourCupCombinedArgs = {
  eventQuery?: InputMaybe<ApiStatDetailEventQuery>;
  id?: InputMaybe<Scalars['String']['input']>;
  tourCode: ApiTourCode;
  year?: InputMaybe<Scalars['Int']['input']>;
};


type ApiQueryTourCupSplitArgs = {
  eventQuery?: InputMaybe<ApiStatDetailEventQuery>;
  id?: InputMaybe<Scalars['String']['input']>;
  tourCode: ApiTourCode;
  year?: InputMaybe<Scalars['Int']['input']>;
};


type ApiQueryTourCupsArgs = {
  tour: ApiTourCode;
  year: Scalars['Int']['input'];
};


type ApiQueryTourcastTableArgs = {
  tournamentId: Scalars['ID']['input'];
};


type ApiQueryTourcastVideosArgs = {
  hole?: InputMaybe<Scalars['Int']['input']>;
  playerId: Scalars['ID']['input'];
  round: Scalars['Int']['input'];
  shot?: InputMaybe<Scalars['Int']['input']>;
  tournamentId: Scalars['ID']['input'];
};


type ApiQueryTournamentGroupLocationsArgs = {
  round: Scalars['Int']['input'];
  tournamentId: Scalars['ID']['input'];
};


type ApiQueryTournamentHistoryArgs = {
  tournamentId: Scalars['String']['input'];
};


type ApiQueryTournamentOddsCompressedV2Args = {
  oddsFormat?: InputMaybe<ApiOddsFormat>;
  provider?: InputMaybe<ApiOddsProvider>;
  tournamentId: Scalars['ID']['input'];
};


type ApiQueryTournamentOddsToWinArgs = {
  tournamentId: Scalars['ID']['input'];
};


type ApiQueryTournamentOddsV2Args = {
  oddsFormat?: InputMaybe<ApiOddsFormat>;
  provider?: InputMaybe<ApiOddsProvider>;
  tournamentId: Scalars['ID']['input'];
};


type ApiQueryTournamentOverviewArgs = {
  tournamentId: Scalars['ID']['input'];
};


type ApiQueryTournamentPastResultsArgs = {
  id: Scalars['ID']['input'];
  year?: InputMaybe<Scalars['Int']['input']>;
};


type ApiQueryTournamentRecapArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  tournamentId: Scalars['String']['input'];
};


type ApiQueryTournamentsArgs = {
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
};


type ApiQueryTspPlayoffShotDetailsArgs = {
  includeRadar?: InputMaybe<Scalars['Boolean']['input']>;
  tournamentId: Scalars['ID']['input'];
};


type ApiQueryTspPlayoffShotDetailsCompressedArgs = {
  includeRadar?: InputMaybe<Scalars['Boolean']['input']>;
  tournamentId: Scalars['ID']['input'];
};


type ApiQueryUniversityRankingsArgs = {
  tourCode?: InputMaybe<ApiTourCode>;
  week?: InputMaybe<Scalars['Int']['input']>;
  year?: InputMaybe<Scalars['Int']['input']>;
};


type ApiQueryUniversityTotalPointsArgs = {
  season?: InputMaybe<Scalars['Int']['input']>;
  week?: InputMaybe<Scalars['Int']['input']>;
};


type ApiQueryUpcomingNetworksArgs = {
  tourCode?: InputMaybe<ApiTourCode>;
  tournamentIds: Array<Scalars['ID']['input']>;
};


type ApiQueryUpcomingScheduleArgs = {
  filter?: InputMaybe<ApiTournamentCategory>;
  tourCode: Scalars['String']['input'];
  year?: InputMaybe<Scalars['String']['input']>;
};


type ApiQueryVideoByIdArgs = {
  brightcoveId: Scalars['ID']['input'];
  tourcast: Scalars['Boolean']['input'];
};


type ApiQueryVideoFranchisesArgs = {
  tourCode?: InputMaybe<ApiTourCode>;
};


type ApiQueryVideoHeroArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
  tourCode: ApiTourCode;
};


type ApiQueryVideoLandingPageArgs = {
  tourCode: ApiTourCode;
};


type ApiQueryVideoNavigationArgs = {
  tourCode: ApiTourCode;
};


type ApiQueryVideoRecommendationsArgs = {
  brightcoveId?: InputMaybe<Scalars['ID']['input']>;
  franchise?: InputMaybe<Scalars['String']['input']>;
  language?: InputMaybe<ApiVideoLanguage>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  playerId?: InputMaybe<Scalars['String']['input']>;
  season?: InputMaybe<Scalars['String']['input']>;
  tour?: InputMaybe<Scalars['String']['input']>;
  tourCode?: InputMaybe<ApiTourCode>;
  tournamentId?: InputMaybe<Scalars['String']['input']>;
};


type ApiQueryVideosArgs = {
  category?: InputMaybe<Scalars['String']['input']>;
  franchise?: InputMaybe<Scalars['String']['input']>;
  franchises?: InputMaybe<Array<Scalars['String']['input']>>;
  holeNumber?: InputMaybe<Scalars['String']['input']>;
  language?: InputMaybe<ApiVideoLanguage>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  playerId?: InputMaybe<Scalars['String']['input']>;
  playerIds?: InputMaybe<Array<Scalars['String']['input']>>;
  rating?: InputMaybe<Scalars['Int']['input']>;
  season?: InputMaybe<Scalars['String']['input']>;
  tour?: InputMaybe<Scalars['String']['input']>;
  tourCode?: InputMaybe<ApiTourCode>;
  tournamentId?: InputMaybe<Scalars['String']['input']>;
};


type ApiQueryWeatherArgs = {
  tournamentId: Scalars['ID']['input'];
};


type ApiQueryYourTourArgs = {
  tourCode: ApiTourCode;
};


type ApiQueryYourTourNewsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  tourCode: ApiTourCode;
};

type ApiRcContentTypeParent = {
  __typename: 'RCContentTypeParent';
  displayValue: Scalars['String']['output'];
  queryValue: ApiRyderCupContentType;
};

type ApiRcHomepageAssets = ApiNewsArticle | ApiRcPhotoGallery | ApiVideo;

type ApiRcPhotoGallery = {
  __typename: 'RCPhotoGallery';
  authorReference?: Maybe<ApiNewsArticleAuthor>;
  cta?: Maybe<ApiCallToAction>;
  date?: Maybe<Scalars['AWSTimestamp']['output']>;
  eventYears?: Maybe<Array<Scalars['String']['output']>>;
  id: Scalars['String']['output'];
  images?: Maybe<Array<ApiImage>>;
  sectionTitle?: Maybe<Scalars['String']['output']>;
  shareUrl?: Maybe<Scalars['String']['output']>;
  sponsor?: Maybe<ApiNewsArticleSponsor>;
  subhead?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  team?: Maybe<ApiRyderCupTeamType>;
  teaserImageOverride?: Maybe<Scalars['String']['output']>;
  topics?: Maybe<Array<ApiContentTopics>>;
  url?: Maybe<Scalars['String']['output']>;
};

/**
 *   type RCPlayerProfileContent {
 *      header: String!
 *      content: [NewsArticleNode]
 *  }
 */
type ApiRcPlayerTournamentRecord = {
  __typename: 'RCPlayerTournamentRecord';
  fourBallPoints: Scalars['Int']['output'];
  foursomesPoints: Scalars['Int']['output'];
  matchesPlayed: Scalars['Int']['output'];
  pointsEarned: Scalars['Int']['output'];
  sectionTitle?: Maybe<Scalars['String']['output']>;
  singlesPoints: Scalars['Int']['output'];
};

type ApiRcTeamTypeParent = {
  __typename: 'RCTeamTypeParent';
  displayValue: Scalars['String']['output'];
  queryValue: ApiRyderCupTeamType;
};

type ApiRcVideoPage = {
  __typename: 'RCVideoPage';
  upNextVideos?: Maybe<Array<ApiVideo>>;
  video?: Maybe<ApiVideo>;
};

type ApiRsmEventWinner = {
  __typename: 'RSMEventWinner';
  birdies: Scalars['String']['output'];
  country: Scalars['String']['output'];
  countryFlag: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  playerId: Scalars['String']['output'];
  tournamentId: Scalars['String']['output'];
  tournamentName: Scalars['String']['output'];
};

type ApiRsmHistoricalWinner = {
  __typename: 'RSMHistoricalWinner';
  displaySeason: Scalars['String']['output'];
  winners: Array<ApiRsmEventWinner>;
  year: Scalars['Int']['output'];
};

type ApiRsmLeaderboard = {
  __typename: 'RSMLeaderboard';
  dateText?: Maybe<Scalars['String']['output']>;
  isLive?: Maybe<Scalars['Boolean']['output']>;
  livePlayers: Array<ApiRsmLeaderboardPlayer>;
  players: Array<ApiRsmLeaderboardPlayer>;
  round?: Maybe<Scalars['String']['output']>;
  tournamentId: Scalars['ID']['output'];
  tournamentName: Scalars['String']['output'];
};

type ApiRsmLeaderboardPlayer = {
  __typename: 'RSMLeaderboardPlayer';
  countryFlag: Scalars['String']['output'];
  countryName: Scalars['String']['output'];
  eventRank?: Maybe<Scalars['Int']['output']>;
  eventTotal: Scalars['String']['output'];
  eventTotalSort: Scalars['Int']['output'];
  firstName: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  playerId: Scalars['String']['output'];
  projectedRank: Scalars['String']['output'];
  projectedRankSort: Scalars['Int']['output'];
  total: Scalars['String']['output'];
  totalSort: Scalars['Int']['output'];
};

type ApiRsmPlayer = {
  __typename: 'RSMPlayer';
  birdies: Scalars['String']['output'];
  country: Scalars['String']['output'];
  countryFlag: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  leading: Scalars['Boolean']['output'];
  playerId: Scalars['String']['output'];
  rank: Scalars['String']['output'];
};

type ApiRsmStandings = {
  __typename: 'RSMStandings';
  currentLeaderboard: Array<ApiRsmPlayer>;
  previousWinners: Array<ApiRsmHistoricalWinner>;
  weeklyWinners: Array<ApiRsmEventWinner>;
};

type ApiRyder_Cup_Ranking_Tooltip =
  | 'CAPTAIN_PICK'
  | 'OUTCOME_IQ'
  | 'QUALIFICATION_INFO'
  | 'QUALIFIED_LOGO';

type ApiRadarBallTracjectory = {
  __typename: 'RadarBallTracjectory';
  kind: Scalars['String']['output'];
  measuredTimeInterval: Array<Scalars['Float']['output']>;
  spinRateFit: Array<Scalars['Float']['output']>;
  timeInterval: Array<Scalars['Float']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  validTimeInterval: Array<Scalars['Float']['output']>;
  xFit: Array<Scalars['Float']['output']>;
  yFit: Array<Scalars['Float']['output']>;
  zFit: Array<Scalars['Float']['output']>;
};

type ApiRadarData = {
  __typename: 'RadarData';
  actualFlightTime: Scalars['Int']['output'];
  apexHeight: Scalars['Float']['output'];
  apexRange: Scalars['Float']['output'];
  apexSide: Scalars['Float']['output'];
  ballImpactMeasured?: Maybe<Scalars['String']['output']>;
  ballSpeed: Scalars['Float']['output'];
  ballTrajectory: Array<ApiRadarBallTracjectory>;
  clubSpeed: Scalars['Float']['output'];
  horizontalLaunchAngle: Scalars['Float']['output'];
  launchSpin: Scalars['Float']['output'];
  /** @deprecated use normalizedTrajectoryV2 */
  normalizedTrajectory: Array<ApiRadarNormalizedTrajectory>;
  normalizedTrajectoryV2: Array<ApiRadarNormalizedTrajectoryV2>;
  smashFactor: Scalars['Float']['output'];
  spinAxis: Scalars['Float']['output'];
  verticalLaunchAngle: Scalars['Float']['output'];
};

type ApiRadarNormalizedTrajectory = {
  __typename: 'RadarNormalizedTrajectory';
  carry?: Maybe<Scalars['Int']['output']>;
  carrySide?: Maybe<Scalars['Int']['output']>;
  curve?: Maybe<Scalars['Int']['output']>;
  maxHeight?: Maybe<Scalars['Int']['output']>;
  spinAxis?: Maybe<Scalars['Float']['output']>;
  timeInterval?: Maybe<Array<Scalars['Float']['output']>>;
  valid: Scalars['Boolean']['output'];
  validTimeInterval?: Maybe<Array<Scalars['Float']['output']>>;
  windVelocity?: Maybe<Array<Scalars['Float']['output']>>;
  xFit?: Maybe<Array<Scalars['Float']['output']>>;
  yFit?: Maybe<Array<Scalars['Float']['output']>>;
  zFit?: Maybe<Array<Scalars['Float']['output']>>;
};

type ApiRadarNormalizedTrajectoryV2 = {
  __typename: 'RadarNormalizedTrajectoryV2';
  carry?: Maybe<Scalars['Float']['output']>;
  carrySide?: Maybe<Scalars['Float']['output']>;
  curve?: Maybe<Scalars['Float']['output']>;
  maxHeight?: Maybe<Scalars['Float']['output']>;
  spinAxis?: Maybe<Scalars['Float']['output']>;
  timeInterval?: Maybe<Array<Scalars['Float']['output']>>;
  valid: Scalars['Boolean']['output'];
  validTimeInterval?: Maybe<Array<Scalars['Float']['output']>>;
  windVelocity?: Maybe<Array<Scalars['Float']['output']>>;
  xFit?: Maybe<Array<Scalars['Float']['output']>>;
  yFit?: Maybe<Array<Scalars['Float']['output']>>;
  zFit?: Maybe<Array<Scalars['Float']['output']>>;
};

type ApiRangeWeatherTemp = {
  __typename: 'RangeWeatherTemp';
  maxTempC: Scalars['String']['output'];
  maxTempF: Scalars['String']['output'];
  minTempC: Scalars['String']['output'];
  minTempF: Scalars['String']['output'];
};

type ApiRankingsPastWinner = {
  __typename: 'RankingsPastWinner';
  description: Scalars['String']['output'];
  displayName: Scalars['String']['output'];
  /** @deprecated Use imageAsset */
  image: Scalars['String']['output'];
  imageAsset: ApiImageAsset;
  playerId: Scalars['ID']['output'];
  season: Scalars['String']['output'];
};

type ApiRankingsTeams =
  | 'EUROPE'
  | 'USA';

type ApiRcBroadcastPrograms = {
  __typename: 'RcBroadcastPrograms';
  broadcastDate: Scalars['String']['output'];
  programs: Array<ApiRcProgram>;
};

type ApiRcBroadcastType =
  | 'AUDIO'
  | 'VIDEO';

type ApiRcProducts = {
  __typename: 'RcProducts';
  cta?: Maybe<ApiCallToAction>;
  header?: Maybe<Scalars['String']['output']>;
  imageGallery?: Maybe<Array<Scalars['String']['output']>>;
  path: Scalars['String']['output'];
  productDescription?: Maybe<Array<Maybe<ApiNewsArticleNode>>>;
};

type ApiRcProgram = {
  __typename: 'RcProgram';
  androidLink?: Maybe<Scalars['String']['output']>;
  appleAppStore?: Maybe<Scalars['String']['output']>;
  brightcoveId?: Maybe<Scalars['String']['output']>;
  broadcastType: ApiRcBroadcastType;
  cta1?: Maybe<ApiCallToAction>;
  cta2?: Maybe<ApiCallToAction>;
  endTime?: Maybe<Scalars['String']['output']>;
  endTimeUtc?: Maybe<Scalars['AWSTimestamp']['output']>;
  featuredMatchPlayers?: Maybe<Array<Scalars['String']['output']>>;
  googlePlayStore?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  iosLink?: Maybe<Scalars['String']['output']>;
  isLive?: Maybe<Scalars['Boolean']['output']>;
  matchId?: Maybe<Scalars['String']['output']>;
  networkBackgroundColor?: Maybe<Scalars['String']['output']>;
  networkFontColor?: Maybe<Scalars['String']['output']>;
  networkLogo?: Maybe<Scalars['String']['output']>;
  networkLogoAsset?: Maybe<ApiImageAsset>;
  networkLogoDark?: Maybe<Scalars['String']['output']>;
  networkLogoDarkAsset?: Maybe<ApiImageAsset>;
  networkName?: Maybe<Scalars['String']['output']>;
  posterImage?: Maybe<Scalars['String']['output']>;
  posterImageAsset?: Maybe<ApiImageAsset>;
  regions?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  roundNum?: Maybe<Scalars['String']['output']>;
  shortDescription?: Maybe<Scalars['String']['output']>;
  startTime?: Maybe<Scalars['String']['output']>;
  startTimeUtc?: Maybe<Scalars['AWSTimestamp']['output']>;
  streamUrl?: Maybe<Scalars['String']['output']>;
  thumbnailImage?: Maybe<Scalars['String']['output']>;
  thumbnailImageAsset?: Maybe<ApiImageAsset>;
  title: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

type ApiRelatedFact = {
  __typename: 'RelatedFact';
  factText?: Maybe<Array<ApiTourSponsorDescription>>;
  photo?: Maybe<Scalars['String']['output']>;
};

type ApiRelatedFactsNode = {
  __typename: 'RelatedFactsNode';
  path: Scalars['String']['output'];
};

type ApiResultsStandingsDetail = {
  __typename: 'ResultsStandingsDetail';
  /** @deprecated Use cupLogoAsset */
  cupLogo?: Maybe<Scalars['String']['output']>;
  cupLogoAccessibilityText?: Maybe<Scalars['String']['output']>;
  cupLogoAsset?: Maybe<ApiImageAsset>;
  /** @deprecated Use cupLogoDarkAsset */
  cupLogoDark?: Maybe<Scalars['String']['output']>;
  cupLogoDarkAsset?: Maybe<ApiImageAsset>;
  cupName?: Maybe<Scalars['String']['output']>;
  cupPoints?: Maybe<Scalars['String']['output']>;
  cupRank?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use rankLogoAsset */
  rankLogo?: Maybe<Scalars['String']['output']>;
  rankLogoAccessibilityText?: Maybe<Scalars['String']['output']>;
  rankLogoAsset?: Maybe<ApiImageAsset>;
  /** @deprecated Use rankLogoDarkAsset */
  rankLogoDark?: Maybe<Scalars['String']['output']>;
  rankLogoDarkAsset?: Maybe<ApiImageAsset>;
};

type ApiResultsYears = {
  __typename: 'ResultsYears';
  tour: ApiTourCode;
  years: Array<Scalars['String']['output']>;
};

type ApiRolexClock = {
  __typename: 'RolexClock';
  height?: Maybe<Scalars['Float']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

type ApiRoundFilter = {
  __typename: 'RoundFilter';
  displayText: Scalars['String']['output'];
  roundNumbers: Array<Scalars['Int']['output']>;
};

type ApiRoundFormat =
  | 'ALTERNATE_SHOT'
  | 'BEST_BALL';

type ApiRoundScore = {
  __typename: 'RoundScore';
  complete: Scalars['Boolean']['output'];
  courseAbbreviation?: Maybe<Scalars['String']['output']>;
  courseId?: Maybe<Scalars['String']['output']>;
  courseName: Scalars['String']['output'];
  currentHole: Scalars['Int']['output'];
  currentRound: Scalars['Boolean']['output'];
  firstNine: ApiScorecardRow;
  groupNumber: Scalars['Int']['output'];
  parTotal: Scalars['Int']['output'];
  roundNumber: Scalars['Int']['output'];
  scoreToPar: Scalars['String']['output'];
  secondNine: ApiScorecardRow;
  total: Scalars['String']['output'];
  tourcastURI?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  tourcastURL?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  tourcastURLWeb?: Maybe<Scalars['String']['output']>;
};

type ApiRoundScoreItem = {
  __typename: 'RoundScoreItem';
  roundDisplay: Scalars['String']['output'];
  roundNum: Scalars['Int']['output'];
  roundScore: Scalars['String']['output'];
};

type ApiRoundStatus =
  | 'COMPLETE'
  | 'GROUPINGS_OFFICIAL'
  | 'IN_PROGRESS'
  | 'OFFICIAL'
  | 'SUSPENDED'
  | 'UPCOMING';

type ApiRoundStatusColor =
  | 'BLUE'
  | 'GRAY'
  | 'GREEN'
  | 'RED'
  | 'YELLOW';

type ApiRyderCupBio = {
  __typename: 'RyderCupBio';
  bio?: Maybe<Array<Maybe<ApiNewsArticleNode>>>;
};

type ApiRyderCupBroadcastCoverage = {
  __typename: 'RyderCupBroadcastCoverage';
  broadcastPrograms: Array<ApiRcBroadcastPrograms>;
};

type ApiRyderCupCaptain = {
  __typename: 'RyderCupCaptain';
  displayName: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  playerId: Scalars['String']['output'];
};

type ApiRyderCupContent = ApiNewsArticle | ApiRcPhotoGallery | ApiVideo;

type ApiRyderCupContentCategories = {
  __typename: 'RyderCupContentCategories';
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

type ApiRyderCupContentCompressed = {
  __typename: 'RyderCupContentCompressed';
  input?: Maybe<ApiPaginationDetails>;
  payload: Scalars['String']['output'];
};

type ApiRyderCupContentFragment = {
  __typename: 'RyderCupContentFragment';
  fragments: Array<ApiRyderCupContentFragments>;
  pageMetadata: ApiPageMetadata;
  totalLength: Scalars['Int']['output'];
};

type ApiRyderCupContentFragments = ApiBroadcastTableFragment | ApiContentFragmentTabs | ApiContentStory | ApiContentVideoCarousel | ApiCourseInfo | ApiDropdownFragment | ApiEventHub | ApiEventHubTable | ApiFutureVenuesFragment | ApiFutureVenuesTableFragment | ApiGenericContent | ApiHeroCarousel | ApiHistoryInfo | ApiHistoryScore | ApiHomepageLead | ApiHomepageNews | ApiHomepageProgramStanding | ApiHomepageScoring | ApiHospitalityCard | ApiImageBlock | ApiJumpToSection | ApiKopHeader | ApiKopSignUp | ApiKopStandingsList | ApiKopSubheader | ApiKopUpcomingTournament | ApiKopZigZag | ApiMatchCard | ApiMediaGallery | ApiMessageBanner | ApiOddsToWinTracker | ApiRcProducts | ApiRolexClock | ApiRyderCupCourseModel | ApiRyderCupLatestNewsSection | ApiRyderCupPlayerBios | ApiSecondaryHero | ApiTeamRankings | ApiThreeUpPhoto | ApiThreeUpStats | ApiTicketSectionContainer | ApiTwoColumn | ApiVideoHero;

type ApiRyderCupContentPlayer = {
  __typename: 'RyderCupContentPlayer';
  displayName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

type ApiRyderCupContentTags = {
  __typename: 'RyderCupContentTags';
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

type ApiRyderCupContentType =
  | 'ALL'
  | 'ARTICLES'
  | 'PHOTO_GALLERY'
  | 'VIDEOS'
  | 'VIDEO_ARTICLES';

type ApiRyderCupCourse = {
  __typename: 'RyderCupCourse';
  countryCode?: Maybe<Scalars['String']['output']>;
  courseCity?: Maybe<Scalars['String']['output']>;
  courseCountry?: Maybe<Scalars['String']['output']>;
  courseName?: Maybe<Scalars['String']['output']>;
  courseState?: Maybe<Scalars['String']['output']>;
};

type ApiRyderCupCourseModel = {
  __typename: 'RyderCupCourseModel';
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  courseDescription?: Maybe<Array<Maybe<ApiNewsArticleNode>>>;
  courseId?: Maybe<Scalars['String']['output']>;
  courseName?: Maybe<Scalars['String']['output']>;
  courseYardage?: Maybe<Scalars['String']['output']>;
  holes?: Maybe<Array<ApiRyderCupCourseModelHole>>;
  par?: Maybe<Scalars['Int']['output']>;
  state?: Maybe<Scalars['String']['output']>;
};

type ApiRyderCupCourseModelHole = {
  __typename: 'RyderCupCourseModelHole';
  holeBeautyImage?: Maybe<Scalars['String']['output']>;
  holeDescription?: Maybe<Array<Maybe<ApiNewsArticleNode>>>;
  holeFlyoverVideo?: Maybe<ApiVideo>;
  holeNumber: Scalars['Int']['output'];
  holePickleImage?: Maybe<Scalars['String']['output']>;
  par: Scalars['Int']['output'];
  yardage: Scalars['Int']['output'];
};

/**  ## Ryder Cup */
type ApiRyderCupEventState =
  | 'LIVE_WEEK'
  | 'LIVE_WEEKEND'
  | 'OFF_SEASON'
  | 'POINTS_RACE'
  | 'POST_EVENT'
  | 'PRE_EVENT';

type ApiRyderCupLatestNewsSection = {
  __typename: 'RyderCupLatestNewsSection';
  bottomCta?: Maybe<ApiCallToAction>;
  content?: Maybe<Array<ApiRcHomepageAssets>>;
  franchiseTags?: Maybe<Array<Scalars['String']['output']>>;
  limit?: Maybe<Scalars['Int']['output']>;
  sectionTitle?: Maybe<Scalars['String']['output']>;
  topCta?: Maybe<ApiCallToAction>;
};

type ApiRyderCupMatchOutcomeIq = {
  __typename: 'RyderCupMatchOutcomeIQ';
  euMatchWin: Scalars['Float']['output'];
  holes: Array<ApiOutComeIqHole>;
  id: Scalars['String']['output'];
  logo?: Maybe<Scalars['String']['output']>;
  matchDraw: Scalars['Float']['output'];
  matchId: Scalars['Int']['output'];
  roundNum: Scalars['Int']['output'];
  toolTip?: Maybe<ApiToolTipComponent>;
  usMatchWin: Scalars['Float']['output'];
};

type ApiRyderCupMediaSearchOptions = {
  __typename: 'RyderCupMediaSearchOptions';
  contentTypes: Array<ApiRcContentTypeParent>;
  playerOptions: Array<ApiRyderCupPlayerOption>;
  teamOptions: Array<ApiRcTeamTypeParent>;
  topicOptions: Array<ApiRyderCupTopicOption>;
  yearOptions: Array<Scalars['String']['output']>;
};

type ApiRyderCupPlayer = {
  __typename: 'RyderCupPlayer';
  countryCode?: Maybe<Scalars['String']['output']>;
  countryName?: Maybe<Scalars['String']['output']>;
  displayName: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  playerId: Scalars['String']['output'];
};

type ApiRyderCupPlayerBios = {
  __typename: 'RyderCupPlayerBios';
  bios?: Maybe<Array<Maybe<ApiRyderCupBio>>>;
  headshots?: Maybe<Array<Scalars['String']['output']>>;
};

type ApiRyderCupPlayerOption = {
  __typename: 'RyderCupPlayerOption';
  displayName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

type ApiRyderCupPlayerProfile = {
  __typename: 'RyderCupPlayerProfile';
  playerId: Scalars['String']['output'];
  playerProfileHeader: ApiRyderCupPlayerProfileHeader;
  profileContentSections: Array<ApiRyderCupPlayerProfileSection>;
  team: ApiRankingsTeams;
};

type ApiRyderCupPlayerProfileCompressed = {
  __typename: 'RyderCupPlayerProfileCompressed';
  payload: Scalars['String']['output'];
  playerId: Scalars['String']['output'];
};

type ApiRyderCupPlayerProfileHeader = {
  __typename: 'RyderCupPlayerProfileHeader';
  age?: Maybe<Scalars['String']['output']>;
  appearances?: Maybe<Scalars['Int']['output']>;
  headshot: ApiProfileHeadshot;
  wins?: Maybe<Scalars['Int']['output']>;
};

type ApiRyderCupPlayerProfileSection = ApiGenericContent | ApiRcPlayerTournamentRecord | ApiRolexClock | ApiRyderCupLatestNewsSection | ApiThreeUpStats;

type ApiRyderCupRankingsQueryInput = {
  team: ApiRankingsTeams;
  tournamentId: Scalars['String']['input'];
};

type ApiRyderCupRankingsRow = ApiInformationRow | ApiStatDetailsPlayer;

type ApiRyderCupRankingsTeam = {
  __typename: 'RyderCupRankingsTeam';
  banner?: Maybe<Scalars['String']['output']>;
  captain?: Maybe<Scalars['String']['output']>;
  captainLabel?: Maybe<Scalars['String']['output']>;
  displaySeason?: Maybe<Scalars['String']['output']>;
  europeCaptain?: Maybe<Scalars['String']['output']>;
  europeInfoBlurb?: Maybe<Scalars['String']['output']>;
  europeViceCaptain?: Maybe<Scalars['String']['output']>;
  header?: Maybe<Scalars['String']['output']>;
  lastUpdated?: Maybe<Scalars['String']['output']>;
  qualifiedIndex?: Maybe<Scalars['Int']['output']>;
  rankings: Array<ApiRyderCupRankingsRow>;
  teamName: Scalars['String']['output'];
  toolTips: Array<ApiToolTipComponent>;
  tournamentPills: Array<ApiStatTournamentPill>;
  usInfoBlurb?: Maybe<Scalars['String']['output']>;
  viceCaptain?: Maybe<Scalars['String']['output']>;
  viceCaptainLabel?: Maybe<Scalars['String']['output']>;
  year?: Maybe<Scalars['Int']['output']>;
  years: Array<ApiStatYearPills>;
};

type ApiRyderCupRankingsV2 = {
  __typename: 'RyderCupRankingsV2';
  defaultUS: Scalars['Boolean']['output'];
  teams: Array<ApiRyderCupRankingsTeam>;
};

type ApiRyderCupTeam = {
  __typename: 'RyderCupTeam';
  captain: ApiRyderCupCaptain;
  players: Array<ApiRyderCupPlayer>;
  teamLogo: Scalars['String']['output'];
  teamName: Scalars['String']['output'];
};

type ApiRyderCupTeamRankings = {
  __typename: 'RyderCupTeamRankings';
  defaultUS: Scalars['Boolean']['output'];
  euroBanner: Scalars['String']['output'];
  euroCaptainLabel?: Maybe<Scalars['String']['output']>;
  euroDisplaySeason?: Maybe<Scalars['String']['output']>;
  euroHeader: Scalars['String']['output'];
  euroLastUpdated: Scalars['String']['output'];
  euroRankings: Array<ApiRyderCupRankingsRow>;
  euroToolTips?: Maybe<Array<ApiToolTipComponent>>;
  euroTournamentPills?: Maybe<Array<ApiStatTournamentPill>>;
  euroViceCaptainLabel?: Maybe<Scalars['String']['output']>;
  euroYear?: Maybe<Scalars['Int']['output']>;
  euroYears?: Maybe<Array<ApiStatYearPills>>;
  europeCaptain?: Maybe<Scalars['String']['output']>;
  europeInfoBlurb?: Maybe<Scalars['String']['output']>;
  europeQualifiedIndex?: Maybe<Scalars['Int']['output']>;
  europeViceCaptain?: Maybe<Scalars['String']['output']>;
  usBanner: Scalars['String']['output'];
  usCaptain?: Maybe<Scalars['String']['output']>;
  usCaptainLabel?: Maybe<Scalars['String']['output']>;
  usDisplaySeason?: Maybe<Scalars['String']['output']>;
  usHeader: Scalars['String']['output'];
  usInfoBlurb?: Maybe<Scalars['String']['output']>;
  usLastUpdated: Scalars['String']['output'];
  usQualifiedIndex?: Maybe<Scalars['Int']['output']>;
  usRankings: Array<ApiRyderCupRankingsRow>;
  usToolTips?: Maybe<Array<ApiToolTipComponent>>;
  usTournamentPills?: Maybe<Array<ApiStatTournamentPill>>;
  usViceCaptain?: Maybe<Scalars['String']['output']>;
  usViceCaptainLabel?: Maybe<Scalars['String']['output']>;
  usYear?: Maybe<Scalars['Int']['output']>;
  usYears?: Maybe<Array<ApiStatYearPills>>;
};

type ApiRyderCupTeamRankingsCompressed = {
  __typename: 'RyderCupTeamRankingsCompressed';
  payload: Scalars['String']['output'];
};

type ApiRyderCupTeamType =
  | 'BOTH'
  | 'EUROPE'
  | 'USA';

type ApiRyderCupTopicOption = {
  __typename: 'RyderCupTopicOption';
  displayValue: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

type ApiRyderCupTournament = {
  __typename: 'RyderCupTournament';
  course?: Maybe<ApiRyderCupCourse>;
  euroScore: Scalars['String']['output'];
  euroTeam: ApiRyderCupTeam;
  historyInfo?: Maybe<ApiHistoryInfo>;
  usScore: Scalars['String']['output'];
  usTeam: ApiRyderCupTeam;
  winner: Scalars['String']['output'];
  year: Scalars['Int']['output'];
};

type ApiRyderCupTournamentOverview = {
  __typename: 'RyderCupTournamentOverview';
  course?: Maybe<ApiRyderCupCourse>;
  endDate?: Maybe<Scalars['String']['output']>;
  euroScore: Scalars['String']['output'];
  euroTeamLogo: Scalars['String']['output'];
  /** @deprecated logoAsset */
  logo?: Maybe<Scalars['String']['output']>;
  logoAsset: ApiImageAsset;
  startDate?: Maybe<Scalars['String']['output']>;
  tournamentName: Scalars['String']['output'];
  usScore: Scalars['String']['output'];
  usTeamLogo: Scalars['String']['output'];
  winner?: Maybe<Scalars['String']['output']>;
  year: Scalars['Int']['output'];
};

type ApiStory_Type =
  | 'MOMENTS'
  | 'PLAYER_STORIES'
  | 'TOPIC_STORIES';

type ApiScatterCoord = {
  __typename: 'ScatterCoord';
  player: ApiScatterPlayer;
  result: ApiHoleScoreStatus;
  shotCoords: ApiScatterShotData;
};

type ApiScatterData = {
  __typename: 'ScatterData';
  courseId: Scalars['Int']['output'];
  hole: Scalars['Int']['output'];
  holePickle?: Maybe<ApiHolePickle>;
  id: Scalars['ID']['output'];
  rounds: Array<ApiScatterRound>;
  /**   Recommend combo of tournamentID, course and hole */
  tournamentId: Scalars['String']['output'];
};

type ApiScatterDataCompressed = {
  __typename: 'ScatterDataCompressed';
  courseId: Scalars['Int']['output'];
  hole: Scalars['Int']['output'];
  payload: Scalars['String']['output'];
  tournamentId: Scalars['String']['output'];
};

type ApiScatterPlayer = {
  __typename: 'ScatterPlayer';
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

type ApiScatterRound = {
  __typename: 'ScatterRound';
  display?: Maybe<Scalars['String']['output']>;
  num: Scalars['Int']['output'];
  pinCoords: ApiScatterShotData;
  strokes: Array<ApiScatterStroke>;
};

type ApiScatterShotCoordData = {
  __typename: 'ScatterShotCoordData';
  landscapeCoords?: Maybe<ApiScattterXyData>;
  portraitCoords?: Maybe<ApiScattterXyData>;
};

type ApiScatterShotData = {
  __typename: 'ScatterShotData';
  green: ApiScatterShotCoordData;
  overview: ApiScatterShotCoordData;
};

type ApiScatterStroke = {
  __typename: 'ScatterStroke';
  playerShots: Array<ApiScatterCoord>;
  strokeNumber: Scalars['Int']['output'];
};

type ApiScattterXyData = {
  __typename: 'ScattterXYData';
  enhancedX: Scalars['Float']['output'];
  /**   New field, -1 if no data */
  enhancedY: Scalars['Float']['output'];
  tourcastX: Scalars['Float']['output'];
  tourcastY: Scalars['Float']['output'];
  tourcastZ: Scalars['Float']['output'];
  x: Scalars['Float']['output'];
  y: Scalars['Float']['output'];
};

type ApiSchedule = {
  __typename: 'Schedule';
  completed: Array<ApiScheduleMonth>;
  filters?: Maybe<Array<ApiScheduleTournamentFilter>>;
  seasonYear: Scalars['String']['output'];
  tour: Scalars['String']['output'];
  upcoming: Array<ApiScheduleMonth>;
};

type ApiScheduleChampion = {
  __typename: 'ScheduleChampion';
  displayName: Scalars['String']['output'];
  playerId: Scalars['String']['output'];
};

type ApiScheduleDisplay =
  | 'SHOW'
  | 'SHOW_NO_LINK';

type ApiScheduleMonth = {
  __typename: 'ScheduleMonth';
  month: Scalars['String']['output'];
  monthSort?: Maybe<Scalars['Int']['output']>;
  tournaments: Array<ApiScheduleTournament>;
  year: Scalars['String']['output'];
};

type ApiScheduleTournament = {
  __typename: 'ScheduleTournament';
  androidTicketmasterApiKey?: Maybe<Scalars['String']['output']>;
  androidTicketmasterScheme?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use beautyImageAsset */
  beautyImage?: Maybe<Scalars['String']['output']>;
  beautyImageAsset?: Maybe<ApiImageAsset>;
  champion: Scalars['String']['output'];
  championEarnings?: Maybe<Scalars['String']['output']>;
  championId: Scalars['String']['output'];
  champions: Array<ApiScheduleChampion>;
  city: Scalars['String']['output'];
  country: Scalars['String']['output'];
  countryCode: Scalars['String']['output'];
  courseName: Scalars['String']['output'];
  date: Scalars['String']['output'];
  dateAccessibilityText: Scalars['String']['output'];
  display: ApiScheduleDisplay;
  id: Scalars['ID']['output'];
  iosTicketmasterApiKey?: Maybe<Scalars['String']['output']>;
  purse?: Maybe<Scalars['String']['output']>;
  sequenceNumber: Scalars['Int']['output'];
  sortDate?: Maybe<Scalars['String']['output']>;
  startDate: Scalars['AWSTimestamp']['output'];
  state: Scalars['String']['output'];
  stateCode: Scalars['String']['output'];
  status?: Maybe<ApiScheduleTournamentStatus>;
  /** @deprecated Name does not reflect intent, use ticketmasterAttractionId */
  ticketmasterApiKey?: Maybe<Scalars['String']['output']>;
  ticketmasterAttractionId?: Maybe<Scalars['String']['output']>;
  ticketsEnabled: Scalars['Boolean']['output'];
  ticketsURL?: Maybe<Scalars['String']['output']>;
  tourStandingHeading?: Maybe<Scalars['String']['output']>;
  tourStandingValue?: Maybe<Scalars['String']['output']>;
  tournamentCategoryInfo?: Maybe<ApiTournamentCategoryInfo>;
  /** @deprecated use tournamentLogoAsset */
  tournamentLogo: Scalars['String']['output'];
  tournamentLogoAsset: ApiImageAsset;
  tournamentName: Scalars['String']['output'];
  tournamentSiteURL?: Maybe<Scalars['String']['output']>;
  tournamentStatus: ApiTournamentStatus;
  useTournamentSiteURL: Scalars['Boolean']['output'];
};

type ApiScheduleTournamentFilter = {
  __typename: 'ScheduleTournamentFilter';
  name: Scalars['String']['output'];
  type: ApiTournamentCategory;
};

type ApiScheduleTournamentStatus = {
  __typename: 'ScheduleTournamentStatus';
  leaderboardTakeover: Scalars['Boolean']['output'];
  roundDisplay: Scalars['String']['output'];
  roundStatus: ApiRoundStatus;
  roundStatusColor: ApiRoundStatusColor;
  roundStatusDisplay: Scalars['String']['output'];
};

type ApiScheduleUpcoming = {
  __typename: 'ScheduleUpcoming';
  filters?: Maybe<Array<ApiScheduleTournamentFilter>>;
  id: Scalars['ID']['output'];
  tournaments: Array<ApiScheduleTournament>;
};

type ApiScheduleYear = {
  __typename: 'ScheduleYear';
  default: Scalars['Boolean']['output'];
  displayValue: Scalars['String']['output'];
  queryValue: Scalars['String']['output'];
};

type ApiScheduleYears = {
  __typename: 'ScheduleYears';
  years: Array<ApiScheduleYear>;
};

type ApiScorecardCompressedV3 = {
  __typename: 'ScorecardCompressedV3';
  id: Scalars['ID']['output'];
  payload: Scalars['String']['output'];
};

type ApiScorecardHeaderPlayer = {
  __typename: 'ScorecardHeaderPlayer';
  active: Scalars['Boolean']['output'];
  finalRoundTotal: Scalars['String']['output'];
  player: ApiPlayer;
  position: Scalars['String']['output'];
  roundDisplay: Scalars['String']['output'];
  total: Scalars['String']['output'];
};

type ApiScorecardRow = {
  __typename: 'ScorecardRow';
  holes: Array<ApiHoleScore>;
  parTotal: Scalars['Int']['output'];
  total: Scalars['String']['output'];
  totalLabel: Scalars['String']['output'];
};

type ApiScorecardStandings = {
  __typename: 'ScorecardStandings';
  logo?: Maybe<ApiImageAsset>;
  logoDark?: Maybe<ApiImageAsset>;
  points: Scalars['String']['output'];
};

type ApiScorecardStatsComparison = {
  __typename: 'ScorecardStatsComparison';
  category: ApiPlayerComparisonCategory;
  categoryPills: Array<ApiPlayerComparisonCategoryPill>;
  disabled?: Maybe<Scalars['Boolean']['output']>;
  noDataMessage: Scalars['String']['output'];
  roundDisplay?: Maybe<Scalars['String']['output']>;
  roundNum?: Maybe<Scalars['Int']['output']>;
  table: ApiPlayerComparisonTable;
  tournamentId: Scalars['ID']['output'];
};

type ApiScorecardStatsItem = {
  __typename: 'ScorecardStatsItem';
  label: Scalars['String']['output'];
  rank: Scalars['String']['output'];
  statId: Scalars['String']['output'];
  total: Scalars['String']['output'];
  yearToDate: Scalars['String']['output'];
};

type ApiScorecardTabFeature =
  | 'EQUIPMENT'
  | 'HIGHLIGHTS'
  | 'ODDS'
  | 'SCORECARD'
  | 'STATS';

type ApiScorecardUpdateCompressedV3 = {
  __typename: 'ScorecardUpdateCompressedV3';
  id: Scalars['ID']['output'];
  payload: Scalars['String']['output'];
};

type ApiScorecardUpdateV3 = {
  __typename: 'ScorecardUpdateV3';
  backNine: Scalars['Boolean']['output'];
  currentHole?: Maybe<Scalars['Int']['output']>;
  currentHoleDisplay: Scalars['String']['output'];
  currentRound: Scalars['Int']['output'];
  currentShotDisplay?: Maybe<Scalars['String']['output']>;
  drawerDisplayState: ApiDrawerDisplayState;
  groupNumber: Scalars['Int']['output'];
  hideSov: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  playByPlay?: Maybe<Scalars['String']['output']>;
  playerId: Scalars['String']['output'];
  playerState?: Maybe<ApiPlayerState>;
  profileEnabled: Scalars['Boolean']['output'];
  roundScores: Array<ApiRoundScore>;
  teeTime?: Maybe<Scalars['AWSTimestamp']['output']>;
  tournamentName: Scalars['String']['output'];
};

type ApiScorecardV3 = {
  __typename: 'ScorecardV3';
  backNine: Scalars['Boolean']['output'];
  currentHole?: Maybe<Scalars['Int']['output']>;
  currentHoleDisplay: Scalars['String']['output'];
  currentRound: Scalars['Int']['output'];
  currentShotDisplay?: Maybe<Scalars['String']['output']>;
  drawerDisplayState: ApiDrawerDisplayState;
  groupNumber: Scalars['Int']['output'];
  hideSov: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  playByPlay?: Maybe<Scalars['String']['output']>;
  player: ApiPlayer;
  playerState?: Maybe<ApiPlayerState>;
  profileEnabled: Scalars['Boolean']['output'];
  roundScores: Array<ApiRoundScore>;
  standings?: Maybe<ApiScorecardStandings>;
  teeTime?: Maybe<Scalars['AWSTimestamp']['output']>;
  totalStrokes?: Maybe<Scalars['String']['output']>;
  tournamentName: Scalars['String']['output'];
};

type ApiScoringLevel =
  | 'BASIC'
  | 'STATS'
  | 'TOURCAST';

type ApiScoringTendency =
  | 'ABOVE'
  | 'BELOW'
  | 'EVEN';

type ApiSearchBarFeatures = {
  __typename: 'SearchBarFeatures';
  playerFeatures: ApiSearchBarPlayerFeatures;
};

type ApiSearchBarPlayer = {
  __typename: 'SearchBarPlayer';
  displayName: Scalars['String']['output'];
  playerId: Scalars['ID']['output'];
};

type ApiSearchBarPlayerFeatures = {
  __typename: 'SearchBarPlayerFeatures';
  playerHeader: Scalars['String']['output'];
  players: Array<ApiSearchBarPlayer>;
};

type ApiSeasonDisplayHeader = {
  __typename: 'SeasonDisplayHeader';
  endYear?: Maybe<Scalars['Int']['output']>;
  startYear: Scalars['Int']['output'];
};

type ApiSeasonRecap = {
  __typename: 'SeasonRecap';
  displayMostRecentSeason?: Maybe<Scalars['String']['output']>;
  items?: Maybe<Array<ApiSeasonRecapSeason>>;
  mostRecentRecapYear?: Maybe<Scalars['Int']['output']>;
  tourCode: ApiTourCode;
};

type ApiSeasonRecapItems = {
  __typename: 'SeasonRecapItems';
  body: Scalars['String']['output'];
  title: Scalars['String']['output'];
  tournamentId: Scalars['String']['output'];
  year: Scalars['Int']['output'];
};

type ApiSeasonRecapSeason = {
  __typename: 'SeasonRecapSeason';
  displaySeason: Scalars['String']['output'];
  items: Array<ApiSeasonRecapItems>;
  year: Scalars['Int']['output'];
};

type ApiSecondaryCupDetails = {
  __typename: 'SecondaryCupDetails';
  cupLogo?: Maybe<Scalars['String']['output']>;
  cupLogoAccessibilityText?: Maybe<Scalars['String']['output']>;
  cupLogoDark?: Maybe<Scalars['String']['output']>;
  cupName?: Maybe<Scalars['String']['output']>;
  cupPoints?: Maybe<Scalars['String']['output']>;
  cupRank?: Maybe<Scalars['String']['output']>;
  rankLogo?: Maybe<Scalars['String']['output']>;
  rankLogoAccessibilityText?: Maybe<Scalars['String']['output']>;
  rankLogoDark?: Maybe<Scalars['String']['output']>;
};

type ApiSecondaryHero = {
  __typename: 'SecondaryHero';
  backgroundPhoto?: Maybe<Scalars['String']['output']>;
  photoPosition?: Maybe<Scalars['String']['output']>;
  /** @deprecated use sponsorLogoAsset */
  sponsorLogo?: Maybe<Scalars['String']['output']>;
  sponsorLogoAsset: ApiImageAsset;
  subheader?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};

type ApiSegmentedCupRanking = {
  __typename: 'SegmentedCupRanking';
  defaultSelection: Scalars['Boolean']['output'];
  rankings: Array<ApiCupRankingPlayer>;
  title: Scalars['String']['output'];
};

type ApiSegmentedCupRankingWrapper = {
  __typename: 'SegmentedCupRankingWrapper';
  segments?: Maybe<Array<Maybe<ApiSegmentedCupRanking>>>;
};

type ApiShotCommentary = {
  __typename: 'ShotCommentary';
  commentary: Array<ApiShotCommentaryItem>;
  playerId: Scalars['String']['output'];
  round: Scalars['Int']['output'];
  tournamentId: Scalars['String']['output'];
};

type ApiShotCommentaryItem = {
  __typename: 'ShotCommentaryItem';
  active: Scalars['Boolean']['output'];
  commentary: Scalars['String']['output'];
  hole: Scalars['Int']['output'];
  shot: Scalars['Int']['output'];
  strokeId: Scalars['Int']['output'];
};

type ApiShotCommentaryItemInput = {
  active: Scalars['Boolean']['input'];
  commentary: Scalars['String']['input'];
  hole: Scalars['Int']['input'];
  shot: Scalars['Int']['input'];
  strokeId: Scalars['Int']['input'];
};

type ApiShotDetailHole = {
  __typename: 'ShotDetailHole';
  displayHoleNumber: Scalars['String']['output'];
  enhancedPickle?: Maybe<ApiHolePickle>;
  fairwayCenter: ApiStrokeCoordinates;
  green: Scalars['Boolean']['output'];
  holeNumber: Scalars['Int']['output'];
  /** @deprecated Use holePickleBottomToTopAsset */
  holePickleBottomToTop: Scalars['String']['output'];
  holePickleBottomToTopAsset: ApiImageAsset;
  /** @deprecated Use holePickleGreenBottomToTopAsset */
  holePickleGreenBottomToTop: Scalars['String']['output'];
  holePickleGreenBottomToTopAsset: ApiImageAsset;
  /** @deprecated Use holePickleGreenLeftToRightAsset */
  holePickleGreenLeftToRight: Scalars['String']['output'];
  holePickleGreenLeftToRightAsset: ApiImageAsset;
  /** @deprecated Use holePickleLeftToRightAsset */
  holePickleLeftToRight: Scalars['String']['output'];
  holePickleLeftToRightAsset: ApiImageAsset;
  par: Scalars['Int']['output'];
  pinGreen: ApiPointOfInterestCoords;
  pinOverview: ApiPointOfInterestCoords;
  rank?: Maybe<Scalars['String']['output']>;
  score: Scalars['String']['output'];
  status: ApiHoleScoreStatus;
  strokes: Array<ApiHoleStroke>;
  teeGreen: ApiPointOfInterestCoords;
  teeOverview: ApiPointOfInterestCoords;
  yardage: Scalars['Int']['output'];
};

type ApiShotDetailVideo = {
  __typename: 'ShotDetailVideo';
  duration: Scalars['Int']['output'];
  holeNumber: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  pubDate: Scalars['AWSTimestamp']['output'];
  shotNumber: Scalars['String']['output'];
  /** @deprecated Use thumbnailAsset */
  thumbnail: Scalars['String']['output'];
  thumbnailAsset: ApiImageAsset;
  title: Scalars['String']['output'];
};

type ApiShotDetails = {
  __typename: 'ShotDetails';
  defaultHolePickle: ApiHolePickleType;
  displayType: ApiShotDetailsDisplayType;
  groupPlayers: Array<Scalars['String']['output']>;
  holes: Array<ApiShotDetailHole>;
  id: Scalars['ID']['output'];
  lineColor: Scalars['String']['output'];
  message: Scalars['String']['output'];
  playerId: Scalars['ID']['output'];
  round: Scalars['Int']['output'];
  /** @deprecated Use tourcastVideos */
  shotVideo?: Maybe<ApiVideo>;
  /** @deprecated Use tourcastVideos */
  shotVideos?: Maybe<Array<ApiVideo>>;
  textColor?: Maybe<Scalars['String']['output']>;
  tournamentId: Scalars['ID']['output'];
};

type ApiShotDetailsCompressed = {
  __typename: 'ShotDetailsCompressed';
  id: Scalars['ID']['output'];
  payload: Scalars['String']['output'];
};

type ApiShotDetailsCompressedV3 = {
  __typename: 'ShotDetailsCompressedV3';
  id: Scalars['ID']['output'];
  payload: Scalars['String']['output'];
};

type ApiShotDetailsDisplayType =
  | 'ALL'
  | 'NONE'
  | 'PLAY_BY_PLAY';

type ApiShotLinkCoordWrapper = {
  __typename: 'ShotLinkCoordWrapper';
  bottomToTopCoords: ApiShotLinkCoordinates;
  leftToRightCoords: ApiShotLinkCoordinates;
};

type ApiShotLinkCoordinates = {
  __typename: 'ShotLinkCoordinates';
  fromCoords: ApiStrokeCoordinates;
  toCoords: ApiStrokeCoordinates;
};

type ApiSignatureEventsRankLogos = {
  __typename: 'SignatureEventsRankLogos';
  dark: Scalars['String']['output'];
  darkAsset: ApiImageAsset;
  light: Scalars['String']['output'];
  lightAsset: ApiImageAsset;
  tooltipText: Scalars['String']['output'];
  tooltipTitle: Scalars['String']['output'];
};

type ApiSignatureInfoLine = {
  __typename: 'SignatureInfoLine';
  text: Scalars['String']['output'];
};

type ApiSignaturePlayer = {
  __typename: 'SignaturePlayer';
  countryFlag: Scalars['String']['output'];
  countryName: Scalars['String']['output'];
  displayName: Scalars['String']['output'];
  movementAmount: Scalars['String']['output'];
  movementDirection: ApiLeaderboardMovement;
  playerId: Scalars['ID']['output'];
  projected: Scalars['String']['output'];
  projectedPoints: Scalars['String']['output'];
  shortName: Scalars['String']['output'];
  started: Scalars['String']['output'];
};

type ApiSignaturePlayerRow = ApiSignatureInfoLine | ApiSignaturePlayer;

type ApiSignatureStandings = {
  __typename: 'SignatureStandings';
  infoDescription: Scalars['String']['output'];
  infoTitle: Scalars['String']['output'];
  interim: ApiSignatureStandingsData;
  linktoField: Scalars['Boolean']['output'];
  /** @deprecated Use mobileLogoAsset */
  mobileLogo: Scalars['String']['output'];
  mobileLogoAsset: ApiImageAsset;
  noFieldText?: Maybe<Scalars['String']['output']>;
  noFieldToolTipText?: Maybe<Scalars['String']['output']>;
  noFieldToolTipTitle?: Maybe<Scalars['String']['output']>;
  official: ApiSignatureStandingsData;
  tournamentID: Scalars['ID']['output'];
  tournamentInfo: ApiSignatureStandingsTournamentInfo;
};

type ApiSignatureStandingsData = {
  __typename: 'SignatureStandingsData';
  description?: Maybe<Scalars['String']['output']>;
  emptyTableDescription?: Maybe<Scalars['String']['output']>;
  emptyTableTitle?: Maybe<Scalars['String']['output']>;
  eyebrowText?: Maybe<Scalars['String']['output']>;
  players: Array<ApiSignaturePlayerRow>;
  /** @deprecated use sponsorLogoAsset */
  sponsorLogo?: Maybe<Scalars['String']['output']>;
  sponsorLogoAsset: ApiImageAsset;
  sponsorName?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  tooltipText?: Maybe<Scalars['String']['output']>;
};

type ApiSignatureStandingsTournamentInfo = {
  __typename: 'SignatureStandingsTournamentInfo';
  displayDate: Scalars['String']['output'];
  roundStatus: ApiRoundStatus;
  roundStatusColor: ApiRoundStatusColor;
  roundStatusDisplay: Scalars['String']['output'];
  /** @deprecated use tournamentLogoAsset */
  tournamentLogo: Array<Scalars['String']['output']>;
  tournamentLogoAsset: Array<ApiImageAsset>;
  tournamentName: Scalars['String']['output'];
  tournamentStatus: ApiTournamentStatus;
};

type ApiSimpleScore = {
  __typename: 'SimpleScore';
  holeNumber: Scalars['Int']['output'];
  isTotal?: Maybe<Scalars['Boolean']['output']>;
  score: Scalars['String']['output'];
  status: ApiHoleScoreStatus;
};

type ApiSocialType =
  | 'facebook'
  | 'instagram'
  | 'twitter'
  | 'youtube';

type ApiSponsor = {
  __typename: 'Sponsor';
  accessibilityText: Scalars['String']['output'];
  /** @deprecated use logoAsset */
  logo?: Maybe<Scalars['String']['output']>;
  logoAsset: ApiImageAsset;
  /** @deprecated use logoDarkAsset */
  logoDark?: Maybe<Scalars['String']['output']>;
  logoDarkAsset: ApiImageAsset;
  /** @deprecated use logoTabletAsset */
  logoTablet?: Maybe<Scalars['String']['output']>;
  logoTabletAsset: ApiImageAsset;
  /** @deprecated use logoTabletDarkAsset */
  logoTabletDark?: Maybe<Scalars['String']['output']>;
  logoTabletDarkAsset: ApiImageAsset;
  sponsor: ApiPlayerSponsorBrand;
};

type ApiSponsorImage = {
  __typename: 'SponsorImage';
  accessibilityText: Scalars['String']['output'];
  link?: Maybe<Scalars['String']['output']>;
  /** @deprecated use logoAsset */
  logo: Scalars['String']['output'];
  logoAsset: ApiImageAsset;
  /** @deprecated use logoDarkAsset */
  logoDark: Scalars['String']['output'];
  logoDarkAsset: ApiImageAsset;
};

type ApiSponsoredArticles = {
  __typename: 'SponsoredArticles';
  articleSponsor: ApiArticleSponsor;
  articles: Array<ApiNewsArticle>;
  cta?: Maybe<ApiCallToAction>;
  moreNewsTitle?: Maybe<Scalars['String']['output']>;
};

type ApiStandardCupRanking = {
  __typename: 'StandardCupRanking';
  rankings: Array<ApiCupRankingPlayer>;
};

type ApiStandardWeatherTemp = {
  __typename: 'StandardWeatherTemp';
  tempC: Scalars['String']['output'];
  tempF: Scalars['String']['output'];
};

type ApiStandingStat = {
  __typename: 'StandingStat';
  statName: Scalars['String']['output'];
  statValue: Scalars['String']['output'];
};

type ApiStatCategory =
  | 'APPROACH_GREEN'
  | 'AROUND_GREEN'
  | 'FACTS_AND_FIGURES'
  | 'MONEY_FINISHES'
  | 'OFF_TEE'
  | 'POINTS_RANKINGS'
  | 'PUTTING'
  | 'SCORING'
  | 'STREAKS'
  | 'STROKES_GAINED';

type ApiStatCategoryConfig = {
  __typename: 'StatCategoryConfig';
  category: Scalars['String']['output'];
  categoryType?: Maybe<ApiStatCategoryConfigType>;
  displayName: Scalars['String']['output'];
  subCategories: Array<ApiStatSubCategory>;
};

type ApiStatCategoryConfigType =
  | 'ALL_TIME_RECORDS'
  | 'TRADITIONAL_STAT';

type ApiStatCategoryStat = {
  __typename: 'StatCategoryStat';
  statId: Scalars['String']['output'];
  statTitle: Scalars['String']['output'];
};

type ApiStatColor =
  | 'BLACK'
  | 'GRAY'
  | 'GREEN'
  | 'RED';

type ApiStatDetailEventQuery = {
  queryType: ApiStatDetailQueryType;
  tournamentId: Scalars['String']['input'];
};

type ApiStatDetailQueryType =
  | 'EVENT_ONLY'
  | 'THROUGH_EVENT';

type ApiStatDetailTourAvg = {
  __typename: 'StatDetailTourAvg';
  displayName: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

type ApiStatDetails = {
  __typename: 'StatDetails';
  cutOffButtonText?: Maybe<Scalars['String']['output']>;
  cutOffNumber?: Maybe<Scalars['Int']['output']>;
  displaySeason: Scalars['String']['output'];
  lastProcessed: Scalars['String']['output'];
  rows: Array<ApiStatDetailsRow>;
  /** @deprecated use sponsorLogoAsset */
  sponsorLogo?: Maybe<Scalars['String']['output']>;
  sponsorLogoAsset: ApiImageAsset;
  statCategories: Array<ApiStatCategoryConfig>;
  statDescription: Scalars['String']['output'];
  statHeaders: Array<Scalars['String']['output']>;
  statId: Scalars['String']['output'];
  statTitle: Scalars['String']['output'];
  statType: ApiCategoryStatType;
  tourAvg?: Maybe<Scalars['String']['output']>;
  tourCode: ApiTourCode;
  tournamentPills: Array<ApiStatTournamentPill>;
  year: Scalars['Int']['output'];
  yearPills: Array<ApiStatYearPills>;
};

type ApiStatDetailsPlayer = {
  __typename: 'StatDetailsPlayer';
  country: Scalars['String']['output'];
  countryFlag: Scalars['String']['output'];
  filter?: Maybe<Scalars['String']['output']>;
  playerId: Scalars['String']['output'];
  playerName: Scalars['String']['output'];
  rank: Scalars['Int']['output'];
  rankChangeTendency?: Maybe<ApiStatRankMovement>;
  rankDiff: Scalars['String']['output'];
  rankLogoDark?: Maybe<Scalars['String']['output']>;
  rankLogoLight?: Maybe<Scalars['String']['output']>;
  stats: Array<ApiCategoryPlayerStat>;
};

type ApiStatDetailsRow = ApiStatDetailTourAvg | ApiStatDetailsPlayer;

type ApiStatLeaderCategory = {
  __typename: 'StatLeaderCategory';
  categoryHeader: Scalars['String']['output'];
  displayYear: Scalars['String']['output'];
  otherCategories: Array<ApiStatCategoryConfig>;
  statCategory: ApiStatCategory;
  subCategories: Array<ApiStatLeaderSubCategory>;
  tourCode: ApiTourCode;
  year: Scalars['Int']['output'];
};

type ApiStatLeaderSubCategory = {
  __typename: 'StatLeaderSubCategory';
  stats: Array<ApiLeaderStat>;
  subCatPromo?: Maybe<ApiStatLeaderSubCategoryPromo>;
  subCategoryName: Scalars['String']['output'];
};

type ApiStatLeaderSubCategoryPromo = {
  __typename: 'StatLeaderSubCategoryPromo';
  image: Scalars['String']['output'];
  link: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

type ApiStatRankMovement =
  | 'CONSTANT'
  | 'DOWN'
  | 'UP';

type ApiStatSubCategory = {
  __typename: 'StatSubCategory';
  displayName?: Maybe<Scalars['String']['output']>;
  stats: Array<ApiStatCategoryStat>;
};

type ApiStatTournamentPill = {
  __typename: 'StatTournamentPill';
  displayName: Scalars['String']['output'];
  endDateDisplay?: Maybe<Scalars['String']['output']>;
  tournamentId: Scalars['String']['output'];
};

type ApiStatWeekPill = {
  __typename: 'StatWeekPill';
  displayWeek: Scalars['String']['output'];
  week: Scalars['Int']['output'];
};

type ApiStatYearPills = {
  __typename: 'StatYearPills';
  displaySeason: Scalars['String']['output'];
  year: Scalars['Int']['output'];
};

type ApiStats = {
  __typename: 'Stats';
  id: Scalars['ID']['output'];
  statAvg?: Maybe<Scalars['String']['output']>;
  statName: Scalars['String']['output'];
  statRank: Scalars['Int']['output'];
  statValue: Scalars['String']['output'];
};

type ApiStreamUrls = {
  __typename: 'StreamUrls';
  applePodcast: Scalars['String']['output'];
  googlePodcast: Scalars['String']['output'];
  spotify: Scalars['String']['output'];
  stitcher: Scalars['String']['output'];
  tuneIn: Scalars['String']['output'];
};

type ApiStrokeCoordinates = {
  __typename: 'StrokeCoordinates';
  enhancedX: Scalars['Float']['output'];
  enhancedY: Scalars['Float']['output'];
  tourcastX: Scalars['Float']['output'];
  tourcastY: Scalars['Float']['output'];
  tourcastZ: Scalars['Float']['output'];
  x: Scalars['Float']['output'];
  y: Scalars['Float']['output'];
  z: Scalars['Float']['output'];
};

type ApiStrokesGainedStats = {
  __typename: 'StrokesGainedStats';
  graph: Scalars['Boolean']['output'];
  label: Scalars['String']['output'];
  rank: Scalars['String']['output'];
  shortLabel: Scalars['String']['output'];
  statId: Scalars['String']['output'];
  total: Scalars['String']['output'];
  totalNum: Scalars['Float']['output'];
  yearToDate: Scalars['String']['output'];
  yearToDateNum: Scalars['Float']['output'];
};

type ApiStyle = {
  __typename: 'Style';
  key: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

type ApiSubMarket = {
  __typename: 'SubMarket';
  header: Scalars['String']['output'];
  id: Scalars['String']['output'];
  options: Array<ApiOddsOptionV2>;
};

type ApiSubscription = {
  __typename: 'Subscription';
  onUpdateBubble?: Maybe<ApiBubbleWatch>;
  onUpdateBubbleWatch?: Maybe<ApiTourCupRankingEvent>;
  onUpdateCourseStats?: Maybe<ApiTournamentHoleStats>;
  onUpdateCoverage?: Maybe<ApiBroadcastCoverage>;
  onUpdateCupOverviewLeaderboard?: Maybe<ApiCupTournamentStatus>;
  onUpdateCupRoundLeaderboard?: Maybe<ApiCupTournamentLeaderboard>;
  onUpdateCupRoundLeaderboardCompressed?: Maybe<ApiCupTournamentLeaderboardCompressed>;
  onUpdateCupScorecard?: Maybe<ApiCupScorecard>;
  onUpdateCurrentLeadersCompressed?: Maybe<ApiCurrentLeadersCompressed>;
  onUpdateGroupLocations?: Maybe<ApiGroupLocationCourse>;
  onUpdateGroupLocationsEnhanced?: Maybe<ApiGroupLocationCourse>;
  onUpdateHoleDetails?: Maybe<ApiHoleDetail>;
  onUpdateLeaderboardCompressedV2?: Maybe<ApiLeaderboardCompressedV2>;
  onUpdateLeaderboardCompressedV3?: Maybe<ApiLeaderboardUpdateCompressedV3>;
  onUpdateLeaderboardStrokes?: Maybe<ApiLeaderboardStrokes>;
  onUpdateLeaderboardStrokesCompresssed?: Maybe<ApiLeaderboardStrokesCompressed>;
  onUpdateLeaderboardV2?: Maybe<ApiLeaderboardV2>;
  onUpdateMatchOutcomeIq?: Maybe<ApiRyderCupMatchOutcomeIq>;
  onUpdateMatchPlayLeaderboard?: Maybe<ApiMpLeaderboard>;
  onUpdateMatchPlayLeaderboardCompressed?: Maybe<ApiLeaderboardCompressed>;
  onUpdateMatchPlayPlayoffScorecard?: Maybe<ApiMpPlayoffScorecard>;
  onUpdateMatchPlayScorecard?: Maybe<ApiMpScorecard>;
  onUpdateMatchPlayTeeTimes?: Maybe<ApiMpTeeTimes>;
  onUpdateMatchPlayTeeTimesCompressed?: Maybe<ApiTeeTimesCompressed>;
  onUpdateOddsToWinMarket?: Maybe<ApiOddsToWinMarket>;
  onUpdateOddsToWinMarketCompressed?: Maybe<ApiOddsToWinMarketCompressed>;
  onUpdatePlayerHub?: Maybe<ApiPlayerHubPlayerCompressed>;
  onUpdatePlayerTournamentStatus?: Maybe<ApiPlayerTournamentStatus>;
  onUpdatePlayoffScorecard?: Maybe<ApiPlayoffScorecard>;
  /** @deprecated Use onUpdatePlayoffScorecardV3. This sub does not work */
  onUpdatePlayoffScorecardV2?: Maybe<Array<Maybe<ApiPlayoffScorecard>>>;
  onUpdatePlayoffScorecardV3?: Maybe<ApiTournamentPlayoffScorecards>;
  onUpdatePlayoffShotDetails?: Maybe<ApiGroupShotDetails>;
  onUpdatePlayoffShotDetailsCompressed?: Maybe<ApiGroupShotDetailsCompressed>;
  onUpdateScorecardCompressedV3?: Maybe<ApiScorecardUpdateCompressedV3>;
  onUpdateScorecardStatsCompressedV3?: Maybe<ApiPlayerScorecardStatsCompressed>;
  onUpdateScorecardV2?: Maybe<ApiLeaderboardDrawerV2>;
  onUpdateShotCommentary?: Maybe<ApiShotCommentary>;
  /**    V2 version that only sends updated holes */
  onUpdateShotDetailsCompressedV3?: Maybe<ApiShotDetailsCompressedV3>;
  onUpdateTGLMatch?: Maybe<ApiTglMatch>;
  onUpdateTSPPlayoffShotDetails?: Maybe<ApiTeamShotDetails>;
  onUpdateTSPPlayoffShotDetailsCompressed?: Maybe<ApiTeamShotDetailsCompressed>;
  onUpdateTeamPlayLeaderboard?: Maybe<ApiTspLeaderboard>;
  onUpdateTeamPlayLeaderboardCompressed?: Maybe<ApiLeaderboardCompressed>;
  onUpdateTeamPlayScorecard?: Maybe<ApiTspScorecard>;
  onUpdateTeamPlayScorecardRounds?: Maybe<ApiTspScorecardRounds>;
  onUpdateTeamStrokePlayTeeTimes?: Maybe<ApiTspTeeTimes>;
  onUpdateTeamStrokePlayTeeTimesCompressed?: Maybe<ApiTeeTimesCompressed>;
  onUpdateTeeTimes?: Maybe<ApiTeeTimes>;
  onUpdateTeeTimesCompressed?: Maybe<ApiTeeTimesCompressed>;
  onUpdateTeeTimesCompressedV2?: Maybe<ApiTeeTimesCompressed>;
  onUpdateTeeTimesV2?: Maybe<ApiTeeTimesV2>;
  onUpdateTourCup?: Maybe<ApiTourCupRankingEvent>;
  onUpdateTourcastTable?: Maybe<ApiTourcastTable>;
  onUpdateTournament?: Maybe<ApiTournament>;
  onUpdateTournamentGroupLocations?: Maybe<ApiTournamentGroupLocation>;
  onUpdateUpcomingSchedule?: Maybe<ApiScheduleUpcoming>;
};


type ApiSubscriptionOnUpdateBubbleArgs = {
  bubbleId: Scalars['ID']['input'];
};


type ApiSubscriptionOnUpdateBubbleWatchArgs = {
  id: Scalars['ID']['input'];
};


type ApiSubscriptionOnUpdateCourseStatsArgs = {
  tournamentId: Scalars['ID']['input'];
};


type ApiSubscriptionOnUpdateCoverageArgs = {
  id: Scalars['ID']['input'];
};


type ApiSubscriptionOnUpdateCupOverviewLeaderboardArgs = {
  id: Scalars['ID']['input'];
};


type ApiSubscriptionOnUpdateCupRoundLeaderboardArgs = {
  id: Scalars['ID']['input'];
};


type ApiSubscriptionOnUpdateCupRoundLeaderboardCompressedArgs = {
  id: Scalars['ID']['input'];
};


type ApiSubscriptionOnUpdateCupScorecardArgs = {
  id: Scalars['ID']['input'];
};


type ApiSubscriptionOnUpdateCurrentLeadersCompressedArgs = {
  id: Scalars['ID']['input'];
};


type ApiSubscriptionOnUpdateGroupLocationsArgs = {
  courseId: Scalars['String']['input'];
  round: Scalars['Int']['input'];
  tournamentId: Scalars['ID']['input'];
};


type ApiSubscriptionOnUpdateGroupLocationsEnhancedArgs = {
  courseId: Scalars['String']['input'];
  round: Scalars['Int']['input'];
  tournamentId: Scalars['ID']['input'];
};


type ApiSubscriptionOnUpdateHoleDetailsArgs = {
  id: Scalars['ID']['input'];
};


type ApiSubscriptionOnUpdateLeaderboardCompressedV2Args = {
  id: Scalars['ID']['input'];
};


type ApiSubscriptionOnUpdateLeaderboardCompressedV3Args = {
  id: Scalars['ID']['input'];
};


type ApiSubscriptionOnUpdateLeaderboardStrokesArgs = {
  id: Scalars['ID']['input'];
};


type ApiSubscriptionOnUpdateLeaderboardStrokesCompresssedArgs = {
  id: Scalars['ID']['input'];
};


type ApiSubscriptionOnUpdateLeaderboardV2Args = {
  id: Scalars['ID']['input'];
};


type ApiSubscriptionOnUpdateMatchOutcomeIqArgs = {
  id: Scalars['ID']['input'];
};


type ApiSubscriptionOnUpdateMatchPlayLeaderboardArgs = {
  id: Scalars['ID']['input'];
};


type ApiSubscriptionOnUpdateMatchPlayLeaderboardCompressedArgs = {
  id: Scalars['ID']['input'];
};


type ApiSubscriptionOnUpdateMatchPlayPlayoffScorecardArgs = {
  id: Scalars['ID']['input'];
};


type ApiSubscriptionOnUpdateMatchPlayScorecardArgs = {
  id: Scalars['ID']['input'];
};


type ApiSubscriptionOnUpdateMatchPlayTeeTimesArgs = {
  id: Scalars['ID']['input'];
};


type ApiSubscriptionOnUpdateMatchPlayTeeTimesCompressedArgs = {
  id: Scalars['ID']['input'];
};


type ApiSubscriptionOnUpdateOddsToWinMarketArgs = {
  oddsToWinId: Scalars['ID']['input'];
};


type ApiSubscriptionOnUpdateOddsToWinMarketCompressedArgs = {
  id: Scalars['ID']['input'];
};


type ApiSubscriptionOnUpdatePlayerHubArgs = {
  id: Scalars['ID']['input'];
};


type ApiSubscriptionOnUpdatePlayerTournamentStatusArgs = {
  playerId: Scalars['ID']['input'];
};


type ApiSubscriptionOnUpdatePlayoffScorecardArgs = {
  id: Scalars['ID']['input'];
};


type ApiSubscriptionOnUpdatePlayoffScorecardV2Args = {
  id: Scalars['ID']['input'];
};


type ApiSubscriptionOnUpdatePlayoffScorecardV3Args = {
  tournamentId: Scalars['ID']['input'];
};


type ApiSubscriptionOnUpdatePlayoffShotDetailsArgs = {
  id: Scalars['ID']['input'];
};


type ApiSubscriptionOnUpdatePlayoffShotDetailsCompressedArgs = {
  id: Scalars['ID']['input'];
};


type ApiSubscriptionOnUpdateScorecardCompressedV3Args = {
  id: Scalars['ID']['input'];
};


type ApiSubscriptionOnUpdateScorecardStatsCompressedV3Args = {
  id: Scalars['ID']['input'];
};


type ApiSubscriptionOnUpdateScorecardV2Args = {
  id: Scalars['ID']['input'];
};


type ApiSubscriptionOnUpdateShotCommentaryArgs = {
  playerId: Scalars['String']['input'];
  round: Scalars['Int']['input'];
  tournamentId: Scalars['String']['input'];
};


type ApiSubscriptionOnUpdateShotDetailsCompressedV3Args = {
  id: Scalars['ID']['input'];
};


type ApiSubscriptionOnUpdateTglMatchArgs = {
  id: Scalars['ID']['input'];
};


type ApiSubscriptionOnUpdateTspPlayoffShotDetailsArgs = {
  id: Scalars['ID']['input'];
};


type ApiSubscriptionOnUpdateTspPlayoffShotDetailsCompressedArgs = {
  id: Scalars['ID']['input'];
};


type ApiSubscriptionOnUpdateTeamPlayLeaderboardArgs = {
  id: Scalars['ID']['input'];
};


type ApiSubscriptionOnUpdateTeamPlayLeaderboardCompressedArgs = {
  id: Scalars['ID']['input'];
};


type ApiSubscriptionOnUpdateTeamPlayScorecardArgs = {
  id: Scalars['ID']['input'];
};


type ApiSubscriptionOnUpdateTeamPlayScorecardRoundsArgs = {
  id: Scalars['ID']['input'];
};


type ApiSubscriptionOnUpdateTeamStrokePlayTeeTimesArgs = {
  id: Scalars['ID']['input'];
};


type ApiSubscriptionOnUpdateTeamStrokePlayTeeTimesCompressedArgs = {
  id: Scalars['ID']['input'];
};


type ApiSubscriptionOnUpdateTeeTimesArgs = {
  id: Scalars['ID']['input'];
};


type ApiSubscriptionOnUpdateTeeTimesCompressedArgs = {
  id: Scalars['ID']['input'];
};


type ApiSubscriptionOnUpdateTeeTimesCompressedV2Args = {
  id: Scalars['ID']['input'];
};


type ApiSubscriptionOnUpdateTeeTimesV2Args = {
  id: Scalars['ID']['input'];
};


type ApiSubscriptionOnUpdateTourCupArgs = {
  id: Scalars['ID']['input'];
};


type ApiSubscriptionOnUpdateTourcastTableArgs = {
  tournamentId: Scalars['ID']['input'];
};


type ApiSubscriptionOnUpdateTournamentArgs = {
  id: Scalars['ID']['input'];
};


type ApiSubscriptionOnUpdateTournamentGroupLocationsArgs = {
  round: Scalars['Int']['input'];
  tournamentId: Scalars['ID']['input'];
};


type ApiSubscriptionOnUpdateUpcomingScheduleArgs = {
  id: Scalars['ID']['input'];
};

type ApiSummaryRow = {
  __typename: 'SummaryRow';
  averagePaceOfPlay?: Maybe<Scalars['String']['output']>;
  birdies?: Maybe<Scalars['Int']['output']>;
  bogeys?: Maybe<Scalars['Int']['output']>;
  doubleBogey?: Maybe<Scalars['Int']['output']>;
  eagles?: Maybe<Scalars['Int']['output']>;
  par: Scalars['Int']['output'];
  pars?: Maybe<Scalars['Int']['output']>;
  rowType: ApiSummaryRowType;
  scoringAverage: Scalars['String']['output'];
  scoringAverageDiff: Scalars['String']['output'];
  scoringDiffTendency: ApiScoringTendency;
  yardage: Scalars['Int']['output'];
};

type ApiSummaryRowType =
  | 'IN'
  | 'OUT'
  | 'TOTAL';

type ApiTcWinner = ApiMpLeaderboardPlayer | ApiTspWinner | ApiWinner;

type ApiTglBoxScore = {
  __typename: 'TGLBoxScore';
  matchId: Scalars['String']['output'];
};

type ApiTglBoxScoreFragment = {
  __typename: 'TGLBoxScoreFragment';
  matchIds?: Maybe<Array<Scalars['String']['output']>>;
};

type ApiTglMatch = {
  __typename: 'TGLMatch';
  currentHole?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isOvertime: Scalars['Boolean']['output'];
  matchDate: Scalars['AWSTimestamp']['output'];
  matchStatus: ApiTglMatchStatus;
  matchStatusColor: Scalars['String']['output'];
  matchStatusDisplay: Scalars['String']['output'];
  matchUrl?: Maybe<Scalars['String']['output']>;
  subscriptionsActive: Scalars['Boolean']['output'];
  teams: Array<ApiTglTeam>;
  tglLogo?: Maybe<Scalars['String']['output']>;
  tglLogoDark?: Maybe<Scalars['String']['output']>;
  tglLogoFallback: Scalars['String']['output'];
  watchLabel?: Maybe<Scalars['String']['output']>;
  watchLogo?: Maybe<Scalars['String']['output']>;
  watchUrl?: Maybe<Scalars['String']['output']>;
};

/**  ## TGL Types */
type ApiTglMatchStatus =
  | 'COMPLETE'
  | 'IN_PROGRESS'
  | 'UNKNOWN'
  | 'UPCOMING';

type ApiTglPlayer = {
  __typename: 'TGLPlayer';
  displayName: Scalars['String']['output'];
  playerHeadshot: Scalars['String']['output'];
  playerId: Scalars['ID']['output'];
};

type ApiTglSchedule = {
  __typename: 'TGLSchedule';
  matches: Array<ApiTglMatch>;
  season: Scalars['Int']['output'];
};

type ApiTglTeam = {
  __typename: 'TGLTeam';
  losses: Scalars['Int']['output'];
  matchWinner?: Maybe<Scalars['Boolean']['output']>;
  players: Array<ApiTglPlayer>;
  score: Scalars['String']['output'];
  teamLogo: Scalars['String']['output'];
  teamName: Scalars['String']['output'];
  wins: Scalars['Int']['output'];
};

type ApiTspLeaderboard = {
  __typename: 'TSPLeaderboard';
  currentRound: Scalars['Int']['output'];
  currentRoundScoringFormat?: Maybe<Scalars['String']['output']>;
  disableOdds: Scalars['Boolean']['output'];
  formatType: ApiFormatType;
  id: Scalars['ID']['output'];
  infoUrl: Scalars['String']['output'];
  informationSections: Array<ApiInformationSection>;
  leaderboard: Array<ApiTspLeaderboardRow>;
  messages: Array<ApiLeaderboardMessage>;
  playoff?: Maybe<ApiTspPlayoff>;
  rounds: Array<ApiTspLeaderboardRound>;
  scorecardEnabled: Scalars['Boolean']['output'];
  shortTimezone: Scalars['String']['output'];
  timezone?: Maybe<Scalars['String']['output']>;
  tourcastURI?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  tourcastUrl?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  tourcastUrlWeb?: Maybe<Scalars['String']['output']>;
  tournamentStatus: ApiTournamentStatus;
  winner?: Maybe<ApiTspWinner>;
};

type ApiTspLeaderboardRound = {
  __typename: 'TSPLeaderboardRound';
  round: Scalars['Int']['output'];
  roundHeader: Scalars['String']['output'];
  roundHeaderShort: Scalars['String']['output'];
  roundStatusSubHead: Scalars['String']['output'];
  roundTypeSubHead: Scalars['String']['output'];
};

type ApiTspLeaderboardRow = ApiInformationRow | ApiTspTeamRow;

type ApiTspScorecard = {
  __typename: 'TSPScorecard';
  backNine: Scalars['Boolean']['output'];
  courseId?: Maybe<Scalars['Int']['output']>;
  currentHole?: Maybe<Scalars['Int']['output']>;
  currentRound: Scalars['Int']['output'];
  currentRoundTotal: Scalars['String']['output'];
  firstNine?: Maybe<ApiTeamPlayScoreCardRow>;
  groupNumber: Scalars['Int']['output'];
  groupState: ApiPlayerState;
  id: Scalars['ID']['output'];
  locationDetail: Scalars['String']['output'];
  parTotal: Scalars['Int']['output'];
  players: Array<ApiTspScPlayer>;
  position: Scalars['String']['output'];
  roundDisplay: Scalars['String']['output'];
  roundFormat: ApiRoundFormat;
  roundNumber: Scalars['Int']['output'];
  scorecardTitle: Scalars['String']['output'];
  secondNine?: Maybe<ApiTeamPlayScoreCardRow>;
  teeTime: Scalars['AWSTimestamp']['output'];
  thru: Scalars['String']['output'];
  total: Scalars['String']['output'];
  totalStrokes: Scalars['String']['output'];
  tourcastURI?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  tourcastUrl?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  tourcastUrlWeb?: Maybe<Scalars['String']['output']>;
};

type ApiTspScorecardRounds = {
  __typename: 'TSPScorecardRounds';
  id: Scalars['ID']['output'];
  scorecards: Array<ApiTspScorecard>;
};

type ApiTspTeeTimeGroup = {
  __typename: 'TSPTeeTimeGroup';
  courseId?: Maybe<Scalars['String']['output']>;
  groupNumber: Scalars['Int']['output'];
  groupState: ApiPlayerState;
  groupStatus: Scalars['String']['output'];
  holeLocation?: Maybe<Scalars['String']['output']>;
  startTee: Scalars['Int']['output'];
  teams: Array<ApiTspTeeTimeTeam>;
  teeTime: Scalars['AWSTimestamp']['output'];
};

type ApiTspTeeTimeHeaders = {
  __typename: 'TSPTeeTimeHeaders';
  status: Scalars['String']['output'];
  team: Scalars['String']['output'];
  tee: Scalars['String']['output'];
  time: Scalars['String']['output'];
};

type ApiTspTeeTimePlayer = {
  __typename: 'TSPTeeTimePlayer';
  country: Scalars['String']['output'];
  countryFlag: Scalars['String']['output'];
  displayName: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  /** @deprecated URL should be built using player ID */
  headshot: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isAmateur: Scalars['Boolean']['output'];
  lastName: Scalars['String']['output'];
  shortName: Scalars['String']['output'];
};

type ApiTspTeeTimeRound = {
  __typename: 'TSPTeeTimeRound';
  groups: Array<ApiTspTeeTimeGroup>;
  roundFormat: Scalars['String']['output'];
  roundNumber: Scalars['Int']['output'];
};

type ApiTspTeeTimeTeam = {
  __typename: 'TSPTeeTimeTeam';
  players: Array<ApiTspTeeTimePlayer>;
  teamId: Scalars['ID']['output'];
};

type ApiTspTeeTimes = {
  __typename: 'TSPTeeTimes';
  courseFilters: Array<ApiCourseFilter>;
  courses: Array<ApiCourse>;
  defaultRound: Scalars['Int']['output'];
  drawersEnabled: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  informationSections: Array<ApiInformationSection>;
  roundFilters: Array<ApiRoundFilter>;
  rounds: Array<ApiTspTeeTimeRound>;
  teeTimeHeaders: ApiTspTeeTimeHeaders;
  timezone: Scalars['String']['output'];
};

type ApiTableBody = {
  __typename: 'TableBody';
  rows: Array<ApiTableRows>;
};

type ApiTableColumn = {
  __typename: 'TableColumn';
  class?: Maybe<Scalars['String']['output']>;
  colspan?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['String']['output']>;
  rowspan?: Maybe<Scalars['String']['output']>;
  valign?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Array<ApiTableColumnValue>>;
  width?: Maybe<Scalars['String']['output']>;
};

type ApiTableColumnSegment = {
  __typename: 'TableColumnSegment';
  data?: Maybe<Scalars['String']['output']>;
  format?: Maybe<ApiNewsArticleFormat>;
  oddsSwing?: Maybe<ApiOddsSwing>;
  type: Scalars['String']['output'];
  value?: Maybe<Scalars['String']['output']>;
};

type ApiTableColumnValue = ApiTableColumnSegment | ApiUnorderedListNode;

type ApiTableDataRow = {
  __typename: 'TableDataRow';
  class?: Maybe<Scalars['String']['output']>;
  columns?: Maybe<Array<Maybe<ApiTableColumn>>>;
};

type ApiTableFragment = {
  __typename: 'TableFragment';
  border?: Maybe<Scalars['String']['output']>;
  cellpadding?: Maybe<Scalars['String']['output']>;
  cellspacing?: Maybe<Scalars['String']['output']>;
  class?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  table?: Maybe<ApiTableBody>;
  width?: Maybe<Scalars['String']['output']>;
};

type ApiTableHeaderRow = {
  __typename: 'TableHeaderRow';
  class?: Maybe<Scalars['String']['output']>;
  columns?: Maybe<Array<Maybe<ApiTableColumn>>>;
};

type ApiTableRows = ApiTableDataRow | ApiTableHeaderRow;

type ApiTeamHoleGroups = {
  __typename: 'TeamHoleGroups';
  groupLocation: Scalars['String']['output'];
  groupLocationCode: Scalars['String']['output'];
  groupNumber: Scalars['Int']['output'];
  teams: Array<ApiHoleGroupTeam>;
  tourcastURI?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  tourcastURL?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  tourcastURLWeb?: Maybe<Scalars['String']['output']>;
};

type ApiTeamPlayHole = {
  __typename: 'TeamPlayHole';
  holeNumber: Scalars['String']['output'];
  parValue: Scalars['String']['output'];
  playerScores: Array<ApiTspPlayerHole>;
  round: Scalars['Int']['output'];
  teamplayHoleScore: ApiTspTeamHole;
  yardage: Scalars['String']['output'];
};

type ApiTeamPlayScoreCardRow = {
  __typename: 'TeamPlayScoreCardRow';
  holes: Array<ApiTeamPlayHole>;
  parTotal: Scalars['Int']['output'];
  total: Scalars['String']['output'];
  totalLabel: Scalars['String']['output'];
};

type ApiTeamRankings = {
  __typename: 'TeamRankings';
  defaultEuropeRankings: Scalars['Boolean']['output'];
  defaultUsRankings: Scalars['Boolean']['output'];
  displayRoster: Scalars['Boolean']['output'];
  euroCaptainLabel?: Maybe<Scalars['String']['output']>;
  euroHeader: Scalars['String']['output'];
  euroViceCaptainLabel?: Maybe<Scalars['String']['output']>;
  europeCaptain?: Maybe<Scalars['String']['output']>;
  europeCta?: Maybe<ApiCallToAction>;
  europeInfoBlurb?: Maybe<Scalars['String']['output']>;
  europeViceCaptain?: Maybe<Scalars['String']['output']>;
  sectionHeader: Scalars['String']['output'];
  usCaptain?: Maybe<Scalars['String']['output']>;
  usCaptainLabel?: Maybe<Scalars['String']['output']>;
  usCta?: Maybe<ApiCallToAction>;
  usHeader: Scalars['String']['output'];
  usInfoBlurb?: Maybe<Scalars['String']['output']>;
  usViceCaptain?: Maybe<Scalars['String']['output']>;
  usViceCaptainLabel?: Maybe<Scalars['String']['output']>;
};

type ApiTeamShotDetails = {
  __typename: 'TeamShotDetails';
  defaultHolePickle: ApiHolePickleType;
  displayType: ApiShotDetailsDisplayType;
  groupNumber: Scalars['Int']['output'];
  holes: Array<ApiGroupShotDetailsHole>;
  id: Scalars['ID']['output'];
  message: Scalars['String']['output'];
  round: Scalars['Int']['output'];
  shotVideo?: Maybe<ApiVideo>;
  shotVideos?: Maybe<Array<ApiVideo>>;
  teams: Array<ApiGroupShotDetailsTeam>;
  tournamentId: Scalars['String']['output'];
};

type ApiTeamShotDetailsCompressed = {
  __typename: 'TeamShotDetailsCompressed';
  id: Scalars['ID']['output'];
  payload: Scalars['String']['output'];
};

type ApiTeamStoryContentInfo = {
  __typename: 'TeamStoryContentInfo';
  hasStoryContent: Scalars['Boolean']['output'];
  playerId: Scalars['String']['output'];
  storyContentRound?: Maybe<Scalars['Int']['output']>;
  storyContentRounds: Array<Scalars['Int']['output']>;
};

type ApiTeamplayHolePlayer = {
  __typename: 'TeamplayHolePlayer';
  holeScore?: Maybe<Scalars['String']['output']>;
  holeScoreStatus?: Maybe<ApiHoleScoreStatus>;
  playerId: Scalars['ID']['output'];
};

type ApiTeeTimeHeader = {
  __typename: 'TeeTimeHeader';
  players: Scalars['String']['output'];
  status: Scalars['String']['output'];
  tee: Scalars['String']['output'];
  time: Scalars['String']['output'];
};

type ApiTeeTimeRound = {
  __typename: 'TeeTimeRound';
  groups: Array<ApiGroup>;
  id: Scalars['ID']['output'];
  roundDisplay: Scalars['String']['output'];
  roundInt: Scalars['Int']['output'];
  roundStatus: ApiRoundStatus;
  roundStatusColor: ApiRoundStatusColor;
  roundStatusDisplay: Scalars['String']['output'];
};

type ApiTeeTimeRoundV2 = {
  __typename: 'TeeTimeRoundV2';
  groups: Array<ApiGroupV2>;
  id: Scalars['ID']['output'];
  roundDisplay: Scalars['String']['output'];
  roundInt: Scalars['Int']['output'];
  roundStatus: ApiRoundStatus;
  roundStatusColor: ApiRoundStatusColor;
  roundStatusDisplay: Scalars['String']['output'];
};

type ApiTeeTimes = {
  __typename: 'TeeTimes';
  courses: Array<ApiCourse>;
  defaultRound: Scalars['Int']['output'];
  drawersEnabled: Scalars['Boolean']['output'];
  hideSov: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  informationSections: Array<ApiInformationSection>;
  rounds: Array<ApiTeeTimeRound>;
  timezone: Scalars['String']['output'];
};

type ApiTeeTimesCompressed = {
  __typename: 'TeeTimesCompressed';
  id: Scalars['ID']['output'];
  payload: Scalars['String']['output'];
};

type ApiTeeTimesFeature =
  | 'GROUPINGS'
  | 'GROUP_TRACKER';

type ApiTeeTimesV2 = {
  __typename: 'TeeTimesV2';
  courses: Array<ApiCourse>;
  defaultRound: Scalars['Int']['output'];
  drawersEnabled: Scalars['Boolean']['output'];
  hideSov: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  informationSections: Array<ApiInformationSection>;
  rounds: Array<ApiTeeTimeRoundV2>;
  teeTimesFeatures: Array<ApiTeeTimesFeature>;
  timezone: Scalars['String']['output'];
};

type ApiThreeUpPhoto = {
  __typename: 'ThreeUpPhoto';
  photoOne?: Maybe<Scalars['String']['output']>;
  photoOneAccessibilityText?: Maybe<Scalars['String']['output']>;
  photoOneCtaTarget?: Maybe<Scalars['String']['output']>;
  photoOneUrl?: Maybe<Scalars['String']['output']>;
  photoThree?: Maybe<Scalars['String']['output']>;
  photoThreeAccessibilityText?: Maybe<Scalars['String']['output']>;
  photoThreeCtaTarget?: Maybe<Scalars['String']['output']>;
  photoThreeUrl?: Maybe<Scalars['String']['output']>;
  photoTwo?: Maybe<Scalars['String']['output']>;
  photoTwoAccessibilityText?: Maybe<Scalars['String']['output']>;
  photoTwoCtaTarget?: Maybe<Scalars['String']['output']>;
  photoTwoUrl?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};

type ApiThreeUpStats = {
  __typename: 'ThreeUpStats';
  header?: Maybe<Scalars['String']['output']>;
  statsDescriptionOne?: Maybe<Scalars['String']['output']>;
  statsDescriptionThree?: Maybe<Scalars['String']['output']>;
  statsDescriptionTwo?: Maybe<Scalars['String']['output']>;
  valueOne?: Maybe<Scalars['String']['output']>;
  valueThree?: Maybe<Scalars['String']['output']>;
  valueTwo?: Maybe<Scalars['String']['output']>;
};

type ApiTicketCards = {
  __typename: 'TicketCards';
  blueBackground: Scalars['Boolean']['output'];
  cardLabel?: Maybe<Scalars['String']['output']>;
  cardPhoto?: Maybe<Scalars['String']['output']>;
  cardSubhead?: Maybe<Scalars['String']['output']>;
  cardTitle?: Maybe<Scalars['String']['output']>;
  ctaIcon?: Maybe<Scalars['String']['output']>;
  ctaLink?: Maybe<Scalars['String']['output']>;
  ctaTarget?: Maybe<Scalars['String']['output']>;
  ctaText?: Maybe<Scalars['String']['output']>;
  webViewLink?: Maybe<Scalars['String']['output']>;
};

type ApiTicketSectionContainer = {
  __typename: 'TicketSectionContainer';
  bottomCta?: Maybe<ApiCallToAction>;
  cards?: Maybe<Array<ApiTicketCards>>;
  layout?: Maybe<Scalars['String']['output']>;
  sectionTitle?: Maybe<Scalars['String']['output']>;
  topCta?: Maybe<ApiCallToAction>;
};

type ApiToolTipComponent = {
  __typename: 'ToolTipComponent';
  detailCopy?: Maybe<Scalars['String']['output']>;
  detailCopyRichText?: Maybe<Array<Maybe<ApiNewsArticleNode>>>;
  header: Scalars['String']['output'];
  id?: Maybe<ApiRyder_Cup_Ranking_Tooltip>;
  logo: Scalars['String']['output'];
};

type ApiTopicStoriesPillConfig = {
  __typename: 'TopicStoriesPillConfig';
  label: Scalars['String']['output'];
};

type ApiToughestCourseRoundPills = {
  __typename: 'ToughestCourseRoundPills';
  display: Scalars['String']['output'];
  queryVal: ApiToughestRound;
};

type ApiToughestRound =
  | 'ALL'
  | 'FOUR'
  | 'ONE'
  | 'THREE'
  | 'TWO';

type ApiTourBoundAsset = {
  __typename: 'TourBoundAsset';
  tourBoundLogo?: Maybe<Scalars['String']['output']>;
  tourBoundLogoDark?: Maybe<Scalars['String']['output']>;
};

type ApiTourCategories = {
  __typename: 'TourCategories';
  categories: Array<ApiCategory>;
  tourCode: ApiTourCode;
};

type ApiTourCode =
  | 'C'
  | 'E'
  | 'H'
  | 'I'
  | 'M'
  | 'R'
  | 'S'
  | 'U'
  | 'Y';

type ApiTourCupCombined = {
  __typename: 'TourCupCombined';
  bannerMessage?: Maybe<ApiLeaderboardMessage>;
  columnHeaders: Array<Scalars['String']['output']>;
  cutOffButtonText?: Maybe<Scalars['String']['output']>;
  cutOffNumber?: Maybe<Scalars['Int']['output']>;
  description: Scalars['String']['output'];
  detailCopy: Scalars['String']['output'];
  fixedHeaders: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  /** @deprecated Use logoAsset */
  logo: Scalars['String']['output'];
  logoAsset: ApiImageAsset;
  message?: Maybe<Scalars['String']['output']>;
  options: ApiTourCupType;
  partner?: Maybe<Scalars['String']['output']>;
  partnerLink?: Maybe<Scalars['String']['output']>;
  players: Array<ApiTourCupCombinedRow>;
  pointsEyebrow?: Maybe<Scalars['String']['output']>;
  projectedLive: Scalars['Boolean']['output'];
  projectedTitle: Scalars['String']['output'];
  rankEyebrow?: Maybe<Scalars['String']['output']>;
  rankingsHeader: Scalars['String']['output'];
  season: Scalars['String']['output'];
  title: Scalars['String']['output'];
  tournamentPills: Array<ApiStatTournamentPill>;
  winner?: Maybe<ApiTourCupCombinedWinner>;
  yearPills: Array<ApiStatYearPills>;
};

type ApiTourCupCombinedData = {
  __typename: 'TourCupCombinedData';
  event: Scalars['String']['output'];
  /** @deprecated Use logoAsset */
  logo?: Maybe<Scalars['String']['output']>;
  logoAsset?: Maybe<ApiImageAsset>;
  /** @deprecated Use logoDarkAsset */
  logoDark?: Maybe<Scalars['String']['output']>;
  logoDarkAsset?: Maybe<ApiImageAsset>;
  movement: ApiCupRankMovementDirection;
  movementAmount: Scalars['String']['output'];
  official: Scalars['String']['output'];
  projected: Scalars['String']['output'];
};

type ApiTourCupCombinedInfo = {
  __typename: 'TourCupCombinedInfo';
  /** @deprecated Use logoAsset */
  logo?: Maybe<Scalars['String']['output']>;
  logoAsset?: Maybe<ApiImageAsset>;
  /** @deprecated Use logoDarkAsset */
  logoDark?: Maybe<Scalars['String']['output']>;
  logoDarkAsset?: Maybe<ApiImageAsset>;
  sortValue: Scalars['Int']['output'];
  text: Scalars['String']['output'];
  toolTip?: Maybe<Scalars['String']['output']>;
};

type ApiTourCupCombinedPlayer = {
  __typename: 'TourCupCombinedPlayer';
  columnData: Array<Scalars['String']['output']>;
  country: Scalars['String']['output'];
  countryFlag: Scalars['String']['output'];
  displayName: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastName: Scalars['String']['output'];
  officialSort: Scalars['Int']['output'];
  pointData?: Maybe<ApiTourCupCombinedData>;
  previousWeekRank: Scalars['String']['output'];
  projectedSort: Scalars['Int']['output'];
  /** @deprecated Use rankLogoDarkAsset */
  rankLogoDark?: Maybe<Scalars['String']['output']>;
  rankLogoDarkAsset?: Maybe<ApiImageAsset>;
  /** @deprecated Use rankLogoLightAsset */
  rankLogoLight?: Maybe<Scalars['String']['output']>;
  rankLogoLightAsset?: Maybe<ApiImageAsset>;
  rankingData?: Maybe<ApiTourCupCombinedData>;
  shortName: Scalars['String']['output'];
  thisWeekRank: Scalars['String']['output'];
  tourBound?: Maybe<Scalars['Boolean']['output']>;
};

type ApiTourCupCombinedRow = ApiTourCupCombinedInfo | ApiTourCupCombinedPlayer;

type ApiTourCupCombinedTotal = {
  __typename: 'TourCupCombinedTotal';
  label: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

type ApiTourCupCombinedWinner = {
  __typename: 'TourCupCombinedWinner';
  country: Scalars['String']['output'];
  countryFlag: Scalars['String']['output'];
  displayName: Scalars['String']['output'];
  earnings: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastName: Scalars['String']['output'];
  rank: Scalars['String']['output'];
  shortName: Scalars['String']['output'];
  totals: Array<ApiTourCupCombinedTotal>;
};

type ApiTourCupRankingData = ApiSegmentedCupRankingWrapper | ApiStandardCupRanking;

type ApiTourCupRankingEvent = {
  __typename: 'TourCupRankingEvent';
  bannerMessage?: Maybe<ApiLeaderboardMessage>;
  description: Scalars['String']['output'];
  detailCopy?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  live: Scalars['Boolean']['output'];
  /** @deprecated Use logoAsset */
  logo: Scalars['String']['output'];
  logoAsset: ApiImageAsset;
  /** @deprecated Use logoDarkAsset */
  logoDark: Scalars['String']['output'];
  logoDarkAsset: ApiImageAsset;
  options: ApiTourCupType;
  partner?: Maybe<Scalars['String']['output']>;
  partnerLink?: Maybe<Scalars['String']['output']>;
  rankings: Array<ApiCupRankingPlayerWrapper>;
  rankingsHeader: Scalars['String']['output'];
  showInLeaderboard: Scalars['Boolean']['output'];
  standings: ApiTourCupRankingData;
  title: Scalars['String']['output'];
  webviewBrowserControls?: Maybe<Scalars['Boolean']['output']>;
  webviewUrl?: Maybe<Scalars['String']['output']>;
  winner?: Maybe<ApiTourCupWinner>;
};

type ApiTourCupSplit = {
  __typename: 'TourCupSplit';
  bannerMessage?: Maybe<ApiLeaderboardMessage>;
  columnHeaders: Array<Scalars['String']['output']>;
  cutOffButtonText?: Maybe<Scalars['String']['output']>;
  cutOffNumber?: Maybe<Scalars['Int']['output']>;
  description: Scalars['String']['output'];
  detailCopy: Scalars['String']['output'];
  fixedHeaders: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  /** @deprecated Use logoAsset */
  logo: Scalars['String']['output'];
  logoAsset: ApiImageAsset;
  message?: Maybe<Scalars['String']['output']>;
  officialPlayers: Array<ApiTourCupCombinedRow>;
  options: ApiTourCupType;
  partner?: Maybe<Scalars['String']['output']>;
  partnerLink?: Maybe<Scalars['String']['output']>;
  pointsEyebrow?: Maybe<Scalars['String']['output']>;
  projectedLive: Scalars['Boolean']['output'];
  projectedPlayers: Array<ApiTourCupCombinedRow>;
  projectedTitle: Scalars['String']['output'];
  rankEyebrow?: Maybe<Scalars['String']['output']>;
  rankingsHeader: Scalars['String']['output'];
  season: Scalars['String']['output'];
  title: Scalars['String']['output'];
  tournamentPills: Array<ApiStatTournamentPill>;
  winner?: Maybe<ApiTourCupCombinedWinner>;
  yearPills: Array<ApiStatYearPills>;
};

type ApiTourCupType =
  | 'OFFICIAL'
  | 'OFFICIAL_AND_PROJECTED'
  | 'PROJECTED';

type ApiTourCupWinner = {
  __typename: 'TourCupWinner';
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  playerCountry: Scalars['String']['output'];
  totalLabel: Scalars['String']['output'];
  totalValue: Scalars['String']['output'];
};

type ApiTourPills = {
  __typename: 'TourPills';
  displayName: Scalars['String']['output'];
  tourCode?: Maybe<ApiTourCode>;
};

type ApiTourSponsor = {
  __typename: 'TourSponsor';
  _path?: Maybe<Scalars['String']['output']>;
  sponsorDescription: Array<ApiTourSponsorDescription>;
  sponsorImage?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use sponsorLogoAsset */
  sponsorLogo?: Maybe<Scalars['String']['output']>;
  sponsorLogoAsset: ApiImageAsset;
  sponsorName?: Maybe<Scalars['String']['output']>;
  sponsorWebsiteUrl?: Maybe<Scalars['String']['output']>;
};

type ApiTourSponsorDescription = ApiNewsArticleImage | ApiNewsArticleLineBreak | ApiNewsArticleLink | ApiNewsArticleParagraph | ApiNewsArticleText;

type ApiTourcastCourse = {
  __typename: 'TourcastCourse';
  courseId: Scalars['String']['output'];
  holes: Array<ApiTourcastHole>;
  playoff?: Maybe<ApiTourcastPlayoff>;
};

type ApiTourcastGroup = {
  __typename: 'TourcastGroup';
  groupName: Scalars['String']['output'];
  groupNum: Scalars['Int']['output'];
  location: Scalars['String']['output'];
  players: Array<ApiTourcastPlayer>;
  roundNum: Scalars['Int']['output'];
  teeTime: Scalars['AWSTimestamp']['output'];
  tourcastURI?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  tourcastURL?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  tourcastURLWeb?: Maybe<Scalars['String']['output']>;
};

type ApiTourcastHole = {
  __typename: 'TourcastHole';
  cupMatches?: Maybe<Array<ApiCupLeaderboardMatch>>;
  displayRank: Scalars['String']['output'];
  groups: Array<ApiTourcastGroup>;
  holeNum: Scalars['Int']['output'];
  matches: Array<ApiHoleMatch>;
  par: Scalars['String']['output'];
  rank: Scalars['Int']['output'];
  round: Scalars['String']['output'];
  scoringAvg: Scalars['String']['output'];
  teamGroups: Array<ApiTourcastTeamGroup>;
  yardage: Scalars['String']['output'];
};

type ApiTourcastPlayer = {
  __typename: 'TourcastPlayer';
  amateur: Scalars['Boolean']['output'];
  backNine: Scalars['Boolean']['output'];
  country: Scalars['String']['output'];
  countryCode: Scalars['String']['output'];
  displayName: Scalars['String']['output'];
  playerId: Scalars['String']['output'];
  roundScore: Scalars['String']['output'];
  shortName: Scalars['String']['output'];
  thru: Scalars['String']['output'];
  total: Scalars['String']['output'];
};

type ApiTourcastPlayoff = {
  __typename: 'TourcastPlayoff';
  holeNum: Scalars['Int']['output'];
  playOffHole: Scalars['Int']['output'];
  players: Array<ApiTourcastPlayoffPlayer>;
  tourcastURI?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  tourcastURL?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  tourcastURLWeb?: Maybe<Scalars['String']['output']>;
};

type ApiTourcastPlayoffPlayer = {
  __typename: 'TourcastPlayoffPlayer';
  countryCode: Scalars['String']['output'];
  displayName: Scalars['String']['output'];
  playerId: Scalars['ID']['output'];
  shortName: Scalars['String']['output'];
};

type ApiTourcastTable = {
  __typename: 'TourcastTable';
  courses: Array<ApiTourcastCourse>;
  informationSections: Array<ApiInformationSection>;
  tournamentId: Scalars['ID']['output'];
  winner?: Maybe<ApiTcWinner>;
};

type ApiTourcastTeam = {
  __typename: 'TourcastTeam';
  backNine: Scalars['Boolean']['output'];
  players: Array<ApiTourcastPlayer>;
  roundScore: Scalars['String']['output'];
  teamId: Scalars['ID']['output'];
  thru: Scalars['String']['output'];
  total: Scalars['String']['output'];
};

type ApiTourcastTeamGroup = {
  __typename: 'TourcastTeamGroup';
  groupName: Scalars['String']['output'];
  groupNum: Scalars['Int']['output'];
  location: Scalars['String']['output'];
  roundNum: Scalars['Int']['output'];
  teams: Array<ApiTourcastTeam>;
  teeTime: Scalars['AWSTimestamp']['output'];
  tourcastURI?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  tourcastURL?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  tourcastURLWeb?: Maybe<Scalars['String']['output']>;
};

type ApiTournament = {
  __typename: 'Tournament';
  /** @deprecated Use beautyImageAsset */
  beautyImage: Scalars['String']['output'];
  beautyImageAsset: ApiImageAsset;
  city: Scalars['String']['output'];
  conductedByLabel?: Maybe<Scalars['String']['output']>;
  conductedByLink?: Maybe<Scalars['String']['output']>;
  country: Scalars['String']['output'];
  courses: Array<ApiCourse>;
  currentRound: Scalars['Int']['output'];
  disabledScorecardTabs: Array<ApiScorecardTabFeature>;
  displayDate: Scalars['String']['output'];
  events: Array<ApiEvent>;
  features?: Maybe<Array<ApiTournamentFeature>>;
  formatType: ApiFormatType;
  headshotBaseUrl?: Maybe<Scalars['String']['output']>;
  hideRolexClock: Scalars['Boolean']['output'];
  hideSov: Scalars['Boolean']['output'];
  howItWorks?: Maybe<Scalars['String']['output']>;
  howItWorksPill?: Maybe<Scalars['String']['output']>;
  howItWorksWebview?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** @deprecated use howItWorks */
  infoPath?: Maybe<Scalars['String']['output']>;
  /** @deprecated use howItWorksWebview */
  infoPathWebview?: Maybe<Scalars['String']['output']>;
  leaderboardTakeover: Scalars['Boolean']['output'];
  pdfUrl?: Maybe<Scalars['String']['output']>;
  rightRailConfig?: Maybe<ApiTournamentRightRailConfig>;
  roundDisplay: Scalars['String']['output'];
  roundStatus: ApiRoundStatus;
  roundStatusColor: ApiRoundStatusColor;
  roundStatusDisplay: Scalars['String']['output'];
  scoredLevel: ApiScoringLevel;
  seasonYear: Scalars['String']['output'];
  shouldSubscribe?: Maybe<Scalars['Boolean']['output']>;
  state: Scalars['String']['output'];
  ticketsEnabled: Scalars['Boolean']['output'];
  ticketsURL?: Maybe<Scalars['String']['output']>;
  timezone: Scalars['String']['output'];
  tournamentCategoryInfo?: Maybe<ApiTournamentCategoryInfo>;
  tournamentLocation: Scalars['String']['output'];
  /** @deprecated use tournamentLogoAsset */
  tournamentLogo: Array<Scalars['String']['output']>;
  tournamentLogoAsset: Array<ApiImageAsset>;
  tournamentName: Scalars['String']['output'];
  tournamentSiteURL?: Maybe<Scalars['String']['output']>;
  tournamentStatus: ApiTournamentStatus;
  useTournamentSiteURL: Scalars['Boolean']['output'];
  weather?: Maybe<ApiTournamentWeather>;
};

type ApiTournamentActivation = {
  __typename: 'TournamentActivation';
  data: Scalars['String']['output'];
  description: Scalars['String']['output'];
  detail?: Maybe<Scalars['String']['output']>;
  /** @deprecated use sponsorLogoAsset */
  sponsorLogo: Scalars['String']['output'];
  sponsorLogoAsset: ApiImageAsset;
  /** @deprecated use sponsorLogoDarkAsset */
  sponsorLogoDark: Scalars['String']['output'];
  sponsorLogoDarkAsset: ApiImageAsset;
  title: Scalars['String']['output'];
};

type ApiTournamentCategory =
  | 'PLAYOFF'
  | 'SIGNATURE';

type ApiTournamentCategoryInfo = {
  __typename: 'TournamentCategoryInfo';
  label: Scalars['String']['output'];
  /** @deprecated use logoDarkAsset */
  logoDark: Scalars['String']['output'];
  logoDarkAsset: ApiImageAsset;
  /** @deprecated use logoLightAsset */
  logoLight: Scalars['String']['output'];
  logoLightAsset: ApiImageAsset;
  type: ApiTournamentCategory;
};

type ApiTournamentChampion = {
  __typename: 'TournamentChampion';
  countryCode: Scalars['String']['output'];
  displayName: Scalars['String']['output'];
  displaySeason: Scalars['String']['output'];
  headshot?: Maybe<Scalars['String']['output']>;
  playerId: Scalars['ID']['output'];
  score: Scalars['String']['output'];
  seed?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  total: Scalars['String']['output'];
  year: Scalars['Int']['output'];
};

type ApiTournamentCourse = {
  __typename: 'TournamentCourse';
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image: Scalars['String']['output'];
  name: Scalars['String']['output'];
  overview: Array<ApiInformationData>;
  state?: Maybe<Scalars['String']['output']>;
};

type ApiTournamentFeature =
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

type ApiTournamentGroupLocation = {
  __typename: 'TournamentGroupLocation';
  groupLocations: Array<ApiGroupLocationData>;
  round: Scalars['Int']['output'];
  tournamentId: Scalars['String']['output'];
};

type ApiTournamentHistory = {
  __typename: 'TournamentHistory';
  courses: ApiTournamentHistoryCourseTable;
  defendingChampion: ApiTournamentHistoryPlayerTable;
  pastChampions: ApiTournamentHistoryPlayerTable;
  tourCode: ApiTourCode;
  tournamentName: Scalars['String']['output'];
  tournamentNum: Scalars['String']['output'];
};

type ApiTournamentHistoryCourse = {
  __typename: 'TournamentHistoryCourse';
  courseId: Scalars['String']['output'];
  courseImage: Scalars['String']['output'];
  courseName: Scalars['String']['output'];
  displaySeason: Scalars['String']['output'];
  par: Scalars['String']['output'];
  yardage: Scalars['String']['output'];
  year: Scalars['Int']['output'];
};

type ApiTournamentHistoryCourseTable = {
  __typename: 'TournamentHistoryCourseTable';
  courses: Array<ApiTournamentHistoryCourse>;
  header: Scalars['String']['output'];
};

type ApiTournamentHistoryPlayer = {
  __typename: 'TournamentHistoryPlayer';
  countryFlag: Scalars['String']['output'];
  displaySeason: Scalars['String']['output'];
  playerId: Scalars['String']['output'];
  playerName: Scalars['String']['output'];
  relativeToPar: Scalars['String']['output'];
  totalScore: Scalars['String']['output'];
  year: Scalars['Int']['output'];
};

type ApiTournamentHistoryPlayerTable = {
  __typename: 'TournamentHistoryPlayerTable';
  header: Scalars['String']['output'];
  players: Array<ApiTournamentHistoryPlayer>;
};

type ApiTournamentHoleStats = {
  __typename: 'TournamentHoleStats';
  courses: Array<ApiCourseStat>;
  tournamentId: Scalars['ID']['output'];
};

type ApiTournamentLocation = {
  __typename: 'TournamentLocation';
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
};

type ApiTournamentOdds = {
  __typename: 'TournamentOdds';
  availableMarkets: Array<ApiAvailableMarket>;
  country: Scalars['String']['output'];
  drawersEnabled: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  /** @deprecated Use banners from config these values are incorrect */
  oddsBanner: ApiOddsBanner;
  oddsMessage?: Maybe<ApiOddsMessage>;
  oddsProvider: ApiOddsProvider;
};

type ApiTournamentOddsCompressed = {
  __typename: 'TournamentOddsCompressed';
  id: Scalars['ID']['output'];
  tournamentOddsPayload: Scalars['String']['output'];
};

type ApiTournamentOddsCompressedV2 = {
  __typename: 'TournamentOddsCompressedV2';
  id: Scalars['ID']['output'];
  oddsPayload: Scalars['String']['output'];
};

type ApiTournamentOddsPlayer = {
  __typename: 'TournamentOddsPlayer';
  oddsOptionId?: Maybe<Scalars['String']['output']>;
  oddsSort: Scalars['Float']['output'];
  oddsSwing?: Maybe<ApiOddsSwing>;
  oddsToWin: Scalars['String']['output'];
  playerId: Scalars['ID']['output'];
};

type ApiTournamentOddsToWin = {
  __typename: 'TournamentOddsToWin';
  players: Array<ApiTournamentOddsPlayer>;
  tournamentId: Scalars['ID']['output'];
  /** @deprecated use tournamentLogoAsset */
  tournamentLogo: Scalars['String']['output'];
  tournamentLogoAsset: ApiImageAsset;
  tournamentName: Scalars['String']['output'];
};

type ApiTournamentOddsV2 = {
  __typename: 'TournamentOddsV2';
  drawersEnabled: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  marketPills: Array<ApiMarketPill>;
  markets: Array<ApiMarket>;
  message?: Maybe<ApiOddsMessage>;
  /**   tournamentId-provider */
  provider: ApiOddsProvider;
  /**   other markets you can */
  round: Scalars['String']['output'];
  tournamentId: Scalars['String']['output'];
};

type ApiTournamentOverview = {
  __typename: 'TournamentOverview';
  activation?: Maybe<ApiTournamentActivation>;
  androidTicketmasterApiKey?: Maybe<Scalars['String']['output']>;
  androidTicketmasterScheme?: Maybe<Scalars['String']['output']>;
  augmentedReality?: Maybe<ApiAugmentedRealityConfig>;
  /** @deprecated Use beautyImageAsset */
  beautyImage: Scalars['String']['output'];
  beautyImageAsset: ApiImageAsset;
  courses: Array<ApiTournamentCourse>;
  defendingChampion?: Maybe<ApiTournamentChampion>;
  defendingTeamChampion?: Maybe<Array<Maybe<ApiTournamentChampion>>>;
  eventGuideURL?: Maybe<Scalars['String']['output']>;
  formatType: ApiFormatType;
  iosTicketmasterApiKey?: Maybe<Scalars['String']['output']>;
  overview: Array<ApiInformationData>;
  pastChampions: Array<ApiTournamentChampion>;
  pastTeamChampions?: Maybe<Array<Maybe<ApiTournamentTeamChampion>>>;
  shareURL?: Maybe<Scalars['String']['output']>;
  ticketmasterAttractionId?: Maybe<Scalars['String']['output']>;
  ticketsURL?: Maybe<Scalars['String']['output']>;
  tourcastURI?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  tourcastURL?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  tourcastURLWeb?: Maybe<Scalars['String']['output']>;
  tournamentCategoryInfo?: Maybe<ApiTournamentCategoryInfo>;
  tournamentResultsMessage?: Maybe<ApiTournamentResultsMessage>;
  webviewBrowserControls: Scalars['Boolean']['output'];
};

type ApiTournamentOverviewInfo = {
  __typename: 'TournamentOverviewInfo';
  cutsMade: Scalars['Int']['output'];
  cutsMissed: Scalars['Int']['output'];
  disqualified: Scalars['Int']['output'];
  events: Scalars['Int']['output'];
  money: Scalars['Int']['output'];
  runnerUp: Scalars['Int']['output'];
  second: Scalars['Int']['output'];
  third: Scalars['Int']['output'];
  top5: Scalars['Int']['output'];
  top10: Scalars['Int']['output'];
  top25: Scalars['Int']['output'];
  wins: Scalars['Int']['output'];
  withdrew: Scalars['Int']['output'];
};

type ApiTournamentPlayoffScorecards = {
  __typename: 'TournamentPlayoffScorecards';
  playoffs: Array<ApiPlayoffScorecard>;
  tournamentId: Scalars['ID']['output'];
};

type ApiTournamentRecap = {
  __typename: 'TournamentRecap';
  courses: Array<ApiTournamentRecapCourse>;
  durationDate: Scalars['String']['output'];
  newsArticles: Array<ApiNewsArticle>;
  tournamentId: Scalars['String']['output'];
  videos: Array<ApiVideo>;
};

type ApiTournamentRecapCourse = {
  __typename: 'TournamentRecapCourse';
  city: Scalars['String']['output'];
  country?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image: Scalars['String']['output'];
  name: Scalars['String']['output'];
  par: Scalars['String']['output'];
  state?: Maybe<Scalars['String']['output']>;
  yardage: Scalars['String']['output'];
};

type ApiTournamentResultOverview = {
  __typename: 'TournamentResultOverview';
  courseCity: Scalars['String']['output'];
  courseCountry: Scalars['String']['output'];
  courseName: Scalars['String']['output'];
  courseState?: Maybe<Scalars['String']['output']>;
  displaySeason: Scalars['String']['output'];
  tournamentId: Scalars['String']['output'];
  tournamentLogo: Scalars['String']['output'];
  tournamentLogoAsset: ApiImageAsset;
  tournamentName: Scalars['String']['output'];
};

type ApiTournamentResultPill = {
  __typename: 'TournamentResultPill';
  tournamentName: Scalars['String']['output'];
  tournamentNum: Scalars['ID']['output'];
};

type ApiTournamentResults = {
  __typename: 'TournamentResults';
  cupEyebrowText: Scalars['String']['output'];
  overview: Array<ApiPlayerProfileInfoItem>;
  overviewInfo?: Maybe<ApiTournamentOverviewInfo>;
  tournamentNum: Scalars['ID']['output'];
  tournamentOverview?: Maybe<ApiTournamentResultOverview>;
  tournaments: Array<ApiPlayerProfileTournamentRow>;
};

type ApiTournamentResultsMessage = {
  __typename: 'TournamentResultsMessage';
  message?: Maybe<Scalars['String']['output']>;
};

type ApiTournamentRightRailConfig = {
  __typename: 'TournamentRightRailConfig';
  buttonLink?: Maybe<Scalars['String']['output']>;
  buttonText?: Maybe<Scalars['String']['output']>;
  imageAltText: Scalars['String']['output'];
  imageUrl: Scalars['String']['output'];
};

type ApiTournamentStatus =
  | 'COMPLETED'
  | 'IN_PROGRESS'
  | 'NOT_STARTED';

type ApiTournamentTeamChampion = {
  __typename: 'TournamentTeamChampion';
  players: Array<ApiTournamentChampion>;
};

type ApiTournamentWeather = {
  __typename: 'TournamentWeather';
  condition: ApiWeatherCondition;
  humidity: Scalars['String']['output'];
  /** @deprecated use logoAsset */
  logo?: Maybe<Scalars['String']['output']>;
  logoAccessibility: Scalars['String']['output'];
  logoAsset: ApiImageAsset;
  /** @deprecated use logoDarkAsset */
  logoDark?: Maybe<Scalars['String']['output']>;
  logoDarkAsset: ApiImageAsset;
  precipitation: Scalars['String']['output'];
  tempC: Scalars['String']['output'];
  tempF: Scalars['String']['output'];
  windDirection: ApiWindDirection;
  windSpeedKPH: Scalars['String']['output'];
  windSpeedMPH: Scalars['String']['output'];
};

type ApiTournamentsPillConfig = {
  __typename: 'TournamentsPillConfig';
  currentSeason: Scalars['Int']['output'];
};

type ApiTspPlayer = {
  __typename: 'TspPlayer';
  abbreviations: Scalars['String']['output'];
  abbreviationsAccessibilityText: Scalars['String']['output'];
  amateur: Scalars['Boolean']['output'];
  country: Scalars['String']['output'];
  countryFlag: Scalars['String']['output'];
  displayName: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastName: Scalars['String']['output'];
  lineColor: Scalars['String']['output'];
  official: Scalars['String']['output'];
  projected: Scalars['String']['output'];
  rankLogoDark?: Maybe<Scalars['String']['output']>;
  rankLogoLight?: Maybe<Scalars['String']['output']>;
  rankingMovement: ApiCupRankMovementDirection;
  rankingMovementAmount: Scalars['String']['output'];
  shortName: Scalars['String']['output'];
};

type ApiTspPlayerHole = {
  __typename: 'TspPlayerHole';
  inTheHoleTimestamp?: Maybe<Scalars['AWSTimestamp']['output']>;
  playComplete?: Maybe<Scalars['Boolean']['output']>;
  playerId: Scalars['ID']['output'];
  playerTotal?: Maybe<Scalars['String']['output']>;
  statsScoreId?: Maybe<Scalars['String']['output']>;
  status?: Maybe<ApiHoleScoreStatus>;
  strokes: Scalars['Int']['output'];
  strokesValue: Scalars['String']['output'];
};

type ApiTspPlayoff = {
  __typename: 'TspPlayoff';
  currentHole: Scalars['Int']['output'];
  holes: Array<ApiPlayoffHole>;
  location?: Maybe<Scalars['String']['output']>;
  teams: Array<ApiPlayoffTeams>;
  thru?: Maybe<Scalars['String']['output']>;
};

type ApiTspScPlayer = {
  __typename: 'TspSCPlayer';
  abbreviations: Scalars['String']['output'];
  abbreviationsAccessibilityText: Scalars['String']['output'];
  amateur: Scalars['Boolean']['output'];
  country: Scalars['String']['output'];
  countryFlag: Scalars['String']['output'];
  displayName: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  /** @deprecated URL should be built using player ID */
  headshot: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastName: Scalars['String']['output'];
  lineColor: Scalars['String']['output'];
  shortName: Scalars['String']['output'];
  superShortName?: Maybe<Scalars['String']['output']>;
};

type ApiTspStrokePlayer = {
  __typename: 'TspStrokePlayer';
  color?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  playerId?: Maybe<Scalars['Int']['output']>;
  playerIdString?: Maybe<Scalars['String']['output']>;
  shortName?: Maybe<Scalars['String']['output']>;
};

type ApiTspTeamHole = {
  __typename: 'TspTeamHole';
  inTheHoleTimestamp?: Maybe<Scalars['AWSTimestamp']['output']>;
  playComplete?: Maybe<Scalars['Boolean']['output']>;
  statsScoreId?: Maybe<Scalars['String']['output']>;
  status?: Maybe<ApiHoleScoreStatus>;
  strokes: Scalars['Int']['output'];
  strokesValue: Scalars['String']['output'];
  teamId: Scalars['ID']['output'];
  teamTotal?: Maybe<Scalars['String']['output']>;
};

type ApiTspTeamRow = {
  __typename: 'TspTeamRow';
  backNine: Scalars['Boolean']['output'];
  courseId: Scalars['String']['output'];
  currentRound: Scalars['Int']['output'];
  groupNumber: Scalars['Int']['output'];
  leaderboardSortOrder: Scalars['Int']['output'];
  movementAmount: Scalars['String']['output'];
  movementDirection: ApiLeaderboardMovement;
  oddsOptionId?: Maybe<Scalars['String']['output']>;
  oddsSort?: Maybe<Scalars['Float']['output']>;
  oddsSwing?: Maybe<ApiOddsSwing>;
  oddsToWin?: Maybe<Scalars['String']['output']>;
  players: Array<ApiTspPlayer>;
  position: Scalars['String']['output'];
  rounds: Array<Scalars['String']['output']>;
  score: Scalars['String']['output'];
  scoreSort: Scalars['Int']['output'];
  startHole?: Maybe<Scalars['String']['output']>;
  status?: Maybe<ApiPlayerState>;
  teamId: Scalars['ID']['output'];
  teamName: Scalars['String']['output'];
  teamStoryContentInfo: Array<ApiTeamStoryContentInfo>;
  teeTime: Scalars['AWSTimestamp']['output'];
  thru: Scalars['String']['output'];
  thruSort: Scalars['Int']['output'];
  total: Scalars['String']['output'];
  totalSort: Scalars['Int']['output'];
  totalStrokes: Scalars['String']['output'];
};

type ApiTspWinner = {
  __typename: 'TspWinner';
  points?: Maybe<Scalars['String']['output']>;
  purse?: Maybe<Scalars['String']['output']>;
  teamId: Scalars['ID']['output'];
  totalScore: Scalars['String']['output'];
  totalStrokes: Scalars['Int']['output'];
  winningTeam: Array<ApiTspWinningPlayer>;
};

type ApiTspWinningPlayer = {
  __typename: 'TspWinningPlayer';
  countryFlag: Scalars['String']['output'];
  countryName: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  /** @deprecated URL should be built using player ID */
  headshot: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastName: Scalars['String']['output'];
};

type ApiTwoColumn = {
  __typename: 'TwoColumn';
  sectionOne?: Maybe<Array<Maybe<ApiNewsArticleNode>>>;
  sectionOneTitle?: Maybe<Scalars['String']['output']>;
  sectionTwo?: Maybe<Array<Maybe<ApiNewsArticleNode>>>;
  sectionTwoTitle?: Maybe<Scalars['String']['output']>;
};

type ApiUniversityRankColor =
  | 'BLACK'
  | 'BLUE'
  | 'GOLD'
  | 'GRAY';

type ApiUniversityRankingPlayer = {
  __typename: 'UniversityRankingPlayer';
  avg: Scalars['String']['output'];
  country: Scalars['String']['output'];
  displayName: Scalars['String']['output'];
  events: Scalars['Int']['output'];
  playerId: Scalars['ID']['output'];
  rank: Scalars['Int']['output'];
  rankColor: ApiUniversityRankColor;
  rankingMovement: ApiCupRankMovementDirection;
  rankingMovementAmount: Scalars['String']['output'];
  rankingMovementAmountSort: Scalars['Int']['output'];
  schoolName: Scalars['String']['output'];
  top10: Scalars['Int']['output'];
  tournaments: Array<ApiUniversityRankingsTournament>;
  wins: Scalars['Int']['output'];
};

type ApiUniversityRankings = {
  __typename: 'UniversityRankings';
  description: Scalars['String']['output'];
  disclaimer?: Maybe<Scalars['String']['output']>;
  displayYear: Scalars['String']['output'];
  players: Array<ApiUniversityRankingPlayer>;
  sponsorImage?: Maybe<Scalars['String']['output']>;
  sponsorName: Scalars['String']['output'];
  throughText: Scalars['String']['output'];
  title: Scalars['String']['output'];
  weekNum: Scalars['Int']['output'];
  weekPills: Array<ApiStatWeekPill>;
  year: Scalars['Int']['output'];
  yearPills: Array<ApiStatYearPills>;
};

type ApiUniversityRankingsTournament = {
  __typename: 'UniversityRankingsTournament';
  finishPosition: Scalars['String']['output'];
  name: Scalars['String']['output'];
  playedYear: Scalars['Int']['output'];
  points: Scalars['String']['output'];
  week: Scalars['Int']['output'];
};

type ApiUniversityTotalPoints = {
  __typename: 'UniversityTotalPoints';
  description: Scalars['String']['output'];
  footerInfo?: Maybe<ApiNewsArticleParagraph>;
  headerInfo?: Maybe<ApiNewsArticleParagraph>;
  headers: Array<Scalars['String']['output']>;
  players: Array<ApiUniversityTotalPointsPlayer>;
  season: Scalars['Int']['output'];
  seasonNavigation: Array<ApiUniversityTotalPointsPill>;
  /** @deprecated use sponsorLogoAsset */
  sponsorLogo?: Maybe<Scalars['String']['output']>;
  sponsorLogoAsset: ApiImageAsset;
  sponsorText?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  week: Scalars['Int']['output'];
  weekNavigation: Array<ApiUniversityTotalPointsPill>;
};

type ApiUniversityTotalPointsPill = {
  __typename: 'UniversityTotalPointsPill';
  displayText: Scalars['String']['output'];
  value: Scalars['Int']['output'];
};

type ApiUniversityTotalPointsPlayer = {
  __typename: 'UniversityTotalPointsPlayer';
  data: Array<Scalars['String']['output']>;
  playerId: Scalars['ID']['output'];
  playerName: Scalars['String']['output'];
  rank: Scalars['String']['output'];
  rankSort: Scalars['Int']['output'];
  rankingMovement: ApiCupRankMovementDirection;
  rankingMovementAmount: Scalars['String']['output'];
  rankingMovementAmountSort: Scalars['Int']['output'];
  tournaments: Array<ApiUniversityRankingsTournament>;
};

type ApiUnorderedListNode = {
  __typename: 'UnorderedListNode';
  historicalTournamentOddsArgs?: Maybe<ApiHistoricalTournamentOddsArgs>;
  items: Array<ApiListItem>;
  ordered?: Maybe<Scalars['Boolean']['output']>;
};

type ApiUnsubscribeResponse = {
  __typename: 'UnsubscribeResponse';
  ok: Scalars['Boolean']['output'];
};

type ApiUpcomingBroadcastNetwork = {
  __typename: 'UpcomingBroadcastNetwork';
  networks: Array<ApiBroadcastNetwork>;
  tournamentId: Scalars['String']['output'];
};

type ApiUpcomingBroadcastNetworks = {
  __typename: 'UpcomingBroadcastNetworks';
  upcomingNetworks: Array<ApiUpcomingBroadcastNetwork>;
};

type ApiUpcomingMatch = {
  __typename: 'UpcomingMatch';
  isConsolationMatch: Scalars['Boolean']['output'];
  matchId: Scalars['String']['output'];
  potentialPlayers: Array<ApiUpcomingMatchPotentialPlayer>;
};

type ApiUpcomingMatchPotentialPlayer = {
  __typename: 'UpcomingMatchPotentialPlayer';
  isKnown: Scalars['Boolean']['output'];
  nameLabel: Scalars['String']['output'];
  players: Array<ApiMpLeaderboardPlayer>;
  relationshipLabel?: Maybe<Scalars['String']['output']>;
};

type ApiVideo = {
  __typename: 'Video';
  /** @deprecated No longer supported */
  accountId?: Maybe<Scalars['String']['output']>;
  categories?: Maybe<Array<ApiRyderCupContentCategories>>;
  category: Scalars['String']['output'];
  categoryDisplayName: Scalars['String']['output'];
  contentTournamentId?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['AWSTimestamp']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  descriptionNode?: Maybe<Array<ApiVideoDescription>>;
  duration: Scalars['Int']['output'];
  endsAt?: Maybe<Scalars['AWSTimestamp']['output']>;
  franchise: Scalars['String']['output'];
  franchiseDisplayName: Scalars['String']['output'];
  gamAccountId?: Maybe<Scalars['String']['output']>;
  guid?: Maybe<Scalars['String']['output']>;
  highestRatedOnHole?: Maybe<Scalars['Boolean']['output']>;
  holeNumber?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  pinned: Scalars['Boolean']['output'];
  playerVideos?: Maybe<Array<ApiPlayerVideo>>;
  players?: Maybe<Array<ApiRyderCupContentPlayer>>;
  poster: Scalars['String']['output'];
  pubdate: Scalars['AWSTimestamp']['output'];
  publishDate?: Maybe<Scalars['String']['output']>;
  rating?: Maybe<Scalars['String']['output']>;
  roundNumber?: Maybe<Scalars['String']['output']>;
  seqHoleNumber?: Maybe<Scalars['String']['output']>;
  shareUrl?: Maybe<Scalars['String']['output']>;
  shotNumber?: Maybe<Scalars['String']['output']>;
  sponsor?: Maybe<ApiVideoSponsor>;
  startsAt?: Maybe<Scalars['AWSTimestamp']['output']>;
  tags?: Maybe<Array<ApiRyderCupContentTags>>;
  team?: Maybe<ApiRyderCupTeamType>;
  /** @deprecated Use thumbnailAsset */
  thumbnail: Scalars['String']['output'];
  thumbnailAsset: ApiImageAsset;
  title: Scalars['String']['output'];
  topics?: Maybe<Array<ApiContentTopics>>;
  tourCode: Scalars['String']['output'];
  tournamentId?: Maybe<Scalars['String']['output']>;
  videoAccountId?: Maybe<Scalars['String']['output']>;
  year?: Maybe<Scalars['String']['output']>;
  years?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

type ApiVideoDescription = ApiNewsArticleLink | ApiNewsArticleText;

type ApiVideoFilterPillConfig = {
  __typename: 'VideoFilterPillConfig';
  franchises: Array<ApiFranchise>;
  pinnedFranchises: Array<ApiFranchise>;
};

type ApiVideoHero = {
  __typename: 'VideoHero';
  gtmAssetKey?: Maybe<Scalars['String']['output']>;
  partnershipAsset?: Maybe<Scalars['String']['output']>;
  partnershipText?: Maybe<Scalars['String']['output']>;
  sectionTitle?: Maybe<Scalars['String']['output']>;
  tourcastWebviewLink?: Maybe<Scalars['String']['output']>;
  video?: Maybe<ApiVideo>;
  videos: Array<ApiVideo>;
};

type ApiVideoLanguage =
  | 'ENGLISH'
  | 'FRENCH';

type ApiVideoNavigation = {
  __typename: 'VideoNavigation';
  items: Array<ApiVideoPill>;
  liveOverride: ApiLiveOverride;
  tourCode: ApiTourCode;
};

type ApiVideoPill = {
  __typename: 'VideoPill';
  defaultView: Scalars['Boolean']['output'];
  displayText: Scalars['String']['output'];
  enabledCompanionPills?: Maybe<Array<ApiVideoPillType>>;
  pillConfig?: Maybe<ApiVideoPillConfig>;
  videoPillType: ApiVideoPillType;
};

type ApiVideoPillConfig = ApiFranchisePillConfig | ApiTopicStoriesPillConfig | ApiTournamentsPillConfig | ApiVideoFilterPillConfig;

type ApiVideoPillType =
  | 'ALL'
  | 'FAVORITES'
  | 'FEATURES'
  | 'FILTER'
  | 'INTERVIEWS'
  | 'PLAYER_SEARCH'
  | 'PLAYER_STORIES'
  | 'TOPIC_STORIES'
  | 'TOP_SHOTS'
  | 'TOURNAMENTS'
  | 'TRENDING';

type ApiVideoSponsor = {
  __typename: 'VideoSponsor';
  description?: Maybe<Scalars['String']['output']>;
  gam?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  /** @deprecated use logoAsset */
  logo: Scalars['String']['output'];
  logoAsset: ApiImageAsset;
  /** @deprecated use logoDarkAsset */
  logoDark: Scalars['String']['output'];
  logoDarkAsset: ApiImageAsset;
  logoPrefix?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  websiteUrl?: Maybe<Scalars['String']['output']>;
};

type ApiWatchLanding = {
  __typename: 'WatchLanding';
  /** @deprecated Use featuredVideos array */
  featuredVideo?: Maybe<ApiVideo>;
  featuredVideos?: Maybe<Array<ApiVideo>>;
  landingSections: Array<ApiWatchLandingSection>;
  mobileVideos?: Maybe<Array<ApiVideo>>;
  mobileWebVideoLimit: Scalars['Int']['output'];
  tourCode: ApiTourCode;
};

type ApiWatchLandingSection = {
  __typename: 'WatchLandingSection';
  pillConfig?: Maybe<ApiVideoPillConfig>;
  title: Scalars['String']['output'];
  videoPillType: ApiVideoPillType;
  videos: Array<ApiVideo>;
};

type ApiWeatherCondition =
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

type ApiWeatherDetails = {
  __typename: 'WeatherDetails';
  condition: ApiWeatherCondition;
  humidity: Scalars['String']['output'];
  precipitation: Scalars['String']['output'];
  temperature: ApiWeatherTemp;
  title: Scalars['String']['output'];
  windDirection: ApiWindDirection;
  windSpeedKPH: Scalars['String']['output'];
  windSpeedMPH: Scalars['String']['output'];
};

type ApiWeatherNotes = {
  __typename: 'WeatherNotes';
  notes: Array<Scalars['String']['output']>;
  weather: Array<ApiDayWeather>;
};

type ApiWeatherSummary = {
  __typename: 'WeatherSummary';
  accessibilityText?: Maybe<Scalars['String']['output']>;
  daily: Array<ApiWeatherDetails>;
  hourly: Array<ApiWeatherDetails>;
  /** @deprecated use modalSponsorLogoAsset */
  modalSponsorLogo?: Maybe<Scalars['String']['output']>;
  modalSponsorLogoAsset: ApiImageAsset;
  /** @deprecated use modalSponsorLogoDarkAsset */
  modalSponsorLogoDark?: Maybe<Scalars['String']['output']>;
  modalSponsorLogoDarkAsset: ApiImageAsset;
  sponsorDescription?: Maybe<Scalars['String']['output']>;
  sponsorLink?: Maybe<Scalars['String']['output']>;
  /** @deprecated use sponsorLogoAsset */
  sponsorLogo?: Maybe<Scalars['String']['output']>;
  sponsorLogoAsset: ApiImageAsset;
  /** @deprecated use sponsorLogoDarkAsset */
  sponsorLogoDark?: Maybe<Scalars['String']['output']>;
  sponsorLogoDarkAsset: ApiImageAsset;
  title: Scalars['String']['output'];
};

type ApiWeatherTemp = ApiRangeWeatherTemp | ApiStandardWeatherTemp;

type ApiWindDirection =
  | 'EAST'
  | 'NORTH'
  | 'NORTH_EAST'
  | 'NORTH_WEST'
  | 'SOUTH'
  | 'SOUTH_EAST'
  | 'SOUTH_WEST'
  | 'WEST';

type ApiWinner = {
  __typename: 'Winner';
  countryFlag: Scalars['String']['output'];
  countryName: Scalars['String']['output'];
  displayPoints: Scalars['Boolean']['output'];
  displayPurse: Scalars['Boolean']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastName: Scalars['String']['output'];
  points?: Maybe<Scalars['String']['output']>;
  pointsLabel?: Maybe<Scalars['String']['output']>;
  purse?: Maybe<Scalars['String']['output']>;
  roundScores?: Maybe<Array<ApiWinnerRoundScore>>;
  seed?: Maybe<Scalars['String']['output']>;
  totalScore: Scalars['String']['output'];
  totalStrokes: Scalars['Int']['output'];
  winnerIcon?: Maybe<ApiWinnerIcon>;
};

type ApiWinnerIcon = {
  __typename: 'WinnerIcon';
  color: Scalars['String']['output'];
  label: Scalars['String']['output'];
  title: Scalars['String']['output'];
  type: ApiWinnerIconType;
};

type ApiWinnerIconType =
  | 'BRONZE'
  | 'GOLD'
  | 'SILVER';

type ApiWinnerRoundScore = {
  __typename: 'WinnerRoundScore';
  label: Scalars['String']['output'];
  total: Scalars['String']['output'];
};

type ApiYtActivationData = {
  __typename: 'YTActivationData';
  data: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

type ApiYtAdInterstitialCard = {
  __typename: 'YTAdInterstitialCard';
  adUrl: Scalars['String']['output'];
  props: ApiYtCardProps;
};

type ApiYtArticleCard = {
  __typename: 'YTArticleCard';
  props: ApiYtCardProps;
  title: Scalars['String']['output'];
};

type ApiYtCardCtaProps = {
  __typename: 'YTCardCtaProps';
  color?: Maybe<Scalars['String']['output']>;
  isTourCastCta: Scalars['Boolean']['output'];
  link: Scalars['String']['output'];
  text: Scalars['String']['output'];
};

type ApiYtCardProps = {
  __typename: 'YTCardProps';
  backgroundColor?: Maybe<Scalars['String']['output']>;
  cardFranchise?: Maybe<Array<Scalars['String']['output']>>;
  cardHeading?: Maybe<Scalars['String']['output']>;
  cardName?: Maybe<Scalars['String']['output']>;
  cardSubHead?: Maybe<Scalars['String']['output']>;
  cta?: Maybe<ApiYtCardCtaProps>;
  ctaText?: Maybe<Scalars['String']['output']>;
  date: Scalars['AWSTimestamp']['output'];
  deepLink: Scalars['String']['output'];
  deepLinkCard: Scalars['Boolean']['output'];
  disableSlowZoom: Scalars['Boolean']['output'];
  /** @deprecated use imageAsset */
  image?: Maybe<Scalars['String']['output']>;
  imageAsset?: Maybe<ApiImageAsset>;
  link: Scalars['String']['output'];
  opacity: Scalars['Float']['output'];
  /** @deprecated use sponsorLogoAsset */
  sponsorLogo?: Maybe<Scalars['String']['output']>;
  sponsorLogoAsset: ApiImageAsset;
  sponsorText?: Maybe<Scalars['String']['output']>;
  textColor: Scalars['String']['output'];
  textPosition: ApiYtTextPosition;
  tourCastCta: Scalars['Boolean']['output'];
  videoId?: Maybe<Scalars['String']['output']>;
};

type ApiYtCardSponsorProps = {
  __typename: 'YTCardSponsorProps';
  activationData: Array<ApiYtActivationData>;
  activationSubtitle: Scalars['String']['output'];
  activationTitle: Scalars['String']['output'];
  /** @deprecated use sponsorLogoAsset */
  sponsorLogo: Scalars['String']['output'];
  sponsorLogoAsset: ApiImageAsset;
  /** @deprecated use tournamentLogoAsset */
  tournamentLogo: Scalars['String']['output'];
  tournamentLogoAsset: ApiImageAsset;
  tournamentName: Scalars['String']['output'];
};

type ApiYtCoverCard = {
  __typename: 'YTCoverCard';
  props: ApiYtCardProps;
  subTitle?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};

type ApiYtHighlightCard = {
  __typename: 'YTHighlightCard';
  hole?: Maybe<Scalars['String']['output']>;
  props: ApiYtCardProps;
  title: Scalars['String']['output'];
};

type ApiYtLeaderboardCard = {
  __typename: 'YTLeaderboardCard';
  players: Array<ApiYtPlayer>;
  props: ApiYtCardProps;
  title: Scalars['String']['output'];
  tournament: ApiYtTournament;
};

type ApiYtNuggetCard = {
  __typename: 'YTNuggetCard';
  props: ApiYtCardProps;
  subText: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

type ApiYtPlayer = {
  __typename: 'YTPlayer';
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

type ApiYtRound = {
  __typename: 'YTRound';
  roundDisplay: Scalars['String']['output'];
  roundNumber: Scalars['Int']['output'];
};

type ApiYtScorecardCard = {
  __typename: 'YTScorecardCard';
  player: ApiYtPlayer;
  props: ApiYtCardProps;
  title: Scalars['String']['output'];
  tournament: ApiYtTournament;
};

type ApiYtSponsorActivationCard = {
  __typename: 'YTSponsorActivationCard';
  props: ApiYtCardProps;
  sponsorProps: ApiYtCardSponsorProps;
  subTitle?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};

type ApiYtTextPosition =
  | 'BOTTOM'
  | 'TOP';

type ApiYtTournament = {
  __typename: 'YTTournament';
  id: Scalars['String']['output'];
  round: ApiYtRound;
};

type ApiYtTournamentUpdateCard = {
  __typename: 'YTTournamentUpdateCard';
  props: ApiYtCardProps;
  title: Scalars['String']['output'];
};

type ApiYourTourCard = ApiYtAdInterstitialCard | ApiYtArticleCard | ApiYtCoverCard | ApiYtHighlightCard | ApiYtLeaderboardCard | ApiYtNuggetCard | ApiYtScorecardCard | ApiYtSponsorActivationCard | ApiYtTournamentUpdateCard;

type ApiYourTourNews = ApiNewsArticle | ApiVideo;

type ApiYourTourStory = {
  __typename: 'YourTourStory';
  cardTopic?: Maybe<Scalars['String']['output']>;
  cards: Array<ApiYourTourCard>;
  homeCard?: Maybe<ApiYourTourCard>;
  id: Scalars['ID']['output'];
  tglMatchIds?: Maybe<Array<Scalars['String']['output']>>;
  videoStories: Array<ApiYtVideoStory>;
};

type ApiYtVideoStory = {
  __typename: 'YtVideoStory';
  topicLabel?: Maybe<Scalars['String']['output']>;
  type: ApiYtVideoStoryType;
};

type ApiYtVideoStoryType =
  | 'PLAYER_STORIES'
  | 'TOPIC_STORIES';

type ApiLeaderboardV3QueryVariables = Exact<{
  leaderboardV3Id: Scalars['ID']['input'];
}>;


type ApiLeaderboardV3Query = {
  __typename: 'Query',
  leaderboardV3: {
    __typename: 'LeaderboardV3',
    id: string,
    tournamentId: string,
    leaderboardRoundHeader: string,
    formatType: ApiFormatType,
    timezone: string,
    tourcastURL?: string | null,
    tourcastURLWeb?: string | null,
    tourcastURI?: string | null,
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
        sponsorName?: string | null
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
          seed?: string | null,
          status?: string | null,
          tourBound?: boolean | null,
          bettingProfile?: string | null,
          playerBioOverrideLink?: string | null,
          assets?: Array<{
            __typename: 'TourBoundAsset',
            tourBoundLogo?: string | null,
            tourBoundLogoDark?: string | null
          }> | null
        },
        scoringData: {
          __typename: 'LeaderboardScoringDataV3',
          groupNumber: number,
          currentRound: number,
          backNine: boolean,
          playerState: ApiPlayerState,
          teeTime?: number | null,
          totalStrokes: string,
          totalStrokesSort?: number | null,
          total: string,
          totalSort: number,
          thru: string,
          thruSort: number,
          score: string,
          scoreSort: number,
          movementDirection: ApiLeaderboardMovement,
          movementAmount: string,
          movementSort?: number | null,
          position: string,
          rounds: Array<string>,
          roundDisplaySort?: Array<number | null> | null,
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
          rankLogoLight?: string | null,
          rankLogoDark?: string | null,
          tooltipText?: string | null,
          tooltipTitle?: string | null,
          oddsToWin?: string | null,
          oddsSwing?: ApiOddsSwing | null,
          oddsOptionId?: string | null,
          oddsSort?: number | null,
          hasStoryContent: boolean,
          storyContentRound?: number | null,
          storyContentRounds: Array<number>,
          playerIcon?: ApiLeaderboardPlayerIcon | null
        }
      }
    >,
    winner?: {
      __typename: 'Winner',
      id: string,
      firstName: string,
      lastName: string,
      totalStrokes: number,
      totalScore: string,
      countryFlag: string,
      countryName: string,
      purse?: string | null,
      displayPoints: boolean,
      displayPurse: boolean,
      points?: string | null,
      seed?: string | null,
      pointsLabel?: string | null,
      winnerIcon?: {
        __typename: 'WinnerIcon',
        type: ApiWinnerIconType,
        title: string,
        label: string,
        color: string
      } | null,
      roundScores?: Array<{
        __typename: 'WinnerRoundScore',
        label: string,
        total: string
      }> | null
    } | null,
    winners?: Array<{
      __typename: 'Winner',
      id: string,
      firstName: string,
      lastName: string,
      totalStrokes: number,
      totalScore: string,
      countryFlag: string,
      countryName: string,
      purse?: string | null,
      displayPoints: boolean,
      displayPurse: boolean,
      points?: string | null,
      seed?: string | null,
      pointsLabel?: string | null
    }> | null,
    courses: Array<{
      __typename: 'Course',
      id: string,
      courseName: string,
      courseCode: string,
      hostCourse: boolean,
      scoringLevel: ApiScoringLevel,
      enabled?: boolean | null,
      features?: Array<ApiTeeTimesFeature> | null
    }>,
    messages: Array<{
      __typename: 'LeaderboardMessage',
      messageText: string,
      messageIcon: ApiLeaderboardMessageIcon,
      messageLink?: string | null,
      webViewLink?: string | null,
      externalLink?: boolean | null,
      platforms: Array<ApiPlatform>,
      timing?: number | null
    }>,
    rounds: Array<{
      __typename: 'LBRound',
      roundNumber: number,
      displayText: string
    }>,
    leaderboardFeatures?: Array<{
      __typename: 'FeatureItem',
      name: string,
      new: boolean,
      tooltipText?: string | null,
      tooltipTitle?: string | null,
      fieldStatType?: ApiFieldStatType | null,
      leaderboardFeatures?: ApiLeaderboardFeature | null,
      sponsor?: {
        __typename: 'FeatureSponsor',
        sponsorLogo: string,
        sponsorLogoDark: string,
        sponsorText: string,
        sponsorLogoAsset: {
          __typename: 'ImageAsset',
          imageOrg: string,
          imagePath: string,
          assetType?: string | null,
          deliveryType?: string | null,
          fallbackImage?: string | null
        },
        sponsorLogoDarkAsset: {
          __typename: 'ImageAsset',
          imageOrg: string,
          imagePath: string,
          assetType?: string | null,
          deliveryType?: string | null,
          fallbackImage?: string | null
        }
      } | null
    }> | null,
    cutLineProbabilities?: {
      __typename: 'CutLineInfo',
      projectedCutLine: string,
      probableCutLine: string,
      sponsorName?: string | null,
      lastUpdated: number,
      new?: boolean | null,
      sponsorLogo?: {
        __typename: 'ImageAsset',
        imageOrg: string,
        imagePath: string,
        assetType?: string | null,
        deliveryType?: string | null,
        fallbackImage?: string | null
      } | null,
      possibleCutLines: Array<{
        __typename: 'CutLinePossibility',
        score: string,
        probability: number,
        displayProbability: string
      }>
    } | null,
    bubblePill?: {
      __typename: 'BubblePill',
      pillText: string,
      iconLight: {
        __typename: 'ImageAsset',
        imageOrg: string,
        imagePath: string,
        assetType?: string | null,
        deliveryType?: string | null,
        fallbackImage?: string | null
      },
      iconDark: {
        __typename: 'ImageAsset',
        imageOrg: string,
        imagePath: string,
        assetType?: string | null,
        deliveryType?: string | null,
        fallbackImage?: string | null
      }
    } | null
  }
};

type ApiLeaderboardV3FieldsFragment = {
  __typename: 'LeaderboardV3',
  id: string,
  tournamentId: string,
  leaderboardRoundHeader: string,
  formatType: ApiFormatType,
  timezone: string,
  tourcastURL?: string | null,
  tourcastURLWeb?: string | null,
  tourcastURI?: string | null,
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
  winner?: {
    __typename: 'Winner',
    id: string,
    firstName: string,
    lastName: string,
    totalStrokes: number,
    totalScore: string,
    countryFlag: string,
    countryName: string,
    purse?: string | null,
    displayPoints: boolean,
    displayPurse: boolean,
    points?: string | null,
    seed?: string | null,
    pointsLabel?: string | null,
    winnerIcon?: {
      __typename: 'WinnerIcon',
      type: ApiWinnerIconType,
      title: string,
      label: string,
      color: string
    } | null,
    roundScores?: Array<{
      __typename: 'WinnerRoundScore',
      label: string,
      total: string
    }> | null
  } | null,
  winners?: Array<{
    __typename: 'Winner',
    id: string,
    firstName: string,
    lastName: string,
    totalStrokes: number,
    totalScore: string,
    countryFlag: string,
    countryName: string,
    purse?: string | null,
    displayPoints: boolean,
    displayPurse: boolean,
    points?: string | null,
    seed?: string | null,
    pointsLabel?: string | null
  }> | null,
  courses: Array<{
    __typename: 'Course',
    id: string,
    courseName: string,
    courseCode: string,
    hostCourse: boolean,
    scoringLevel: ApiScoringLevel,
    enabled?: boolean | null,
    features?: Array<ApiTeeTimesFeature> | null
  }>,
  messages: Array<{
    __typename: 'LeaderboardMessage',
    messageText: string,
    messageIcon: ApiLeaderboardMessageIcon,
    messageLink?: string | null,
    webViewLink?: string | null,
    externalLink?: boolean | null,
    platforms: Array<ApiPlatform>,
    timing?: number | null
  }>,
  rounds: Array<{
    __typename: 'LBRound',
    roundNumber: number,
    displayText: string
  }>,
  leaderboardFeatures?: Array<{
    __typename: 'FeatureItem',
    name: string,
    new: boolean,
    tooltipText?: string | null,
    tooltipTitle?: string | null,
    fieldStatType?: ApiFieldStatType | null,
    leaderboardFeatures?: ApiLeaderboardFeature | null,
    sponsor?: {
      __typename: 'FeatureSponsor',
      sponsorLogo: string,
      sponsorLogoDark: string,
      sponsorText: string,
      sponsorLogoAsset: {
        __typename: 'ImageAsset',
        imageOrg: string,
        imagePath: string,
        assetType?: string | null,
        deliveryType?: string | null,
        fallbackImage?: string | null
      },
      sponsorLogoDarkAsset: {
        __typename: 'ImageAsset',
        imageOrg: string,
        imagePath: string,
        assetType?: string | null,
        deliveryType?: string | null,
        fallbackImage?: string | null
      }
    } | null
  }> | null,
  cutLineProbabilities?: {
    __typename: 'CutLineInfo',
    projectedCutLine: string,
    probableCutLine: string,
    sponsorName?: string | null,
    lastUpdated: number,
    new?: boolean | null,
    sponsorLogo?: {
      __typename: 'ImageAsset',
      imageOrg: string,
      imagePath: string,
      assetType?: string | null,
      deliveryType?: string | null,
      fallbackImage?: string | null
    } | null,
    possibleCutLines: Array<{
      __typename: 'CutLinePossibility',
      score: string,
      probability: number,
      displayProbability: string
    }>
  } | null,
  bubblePill?: {
    __typename: 'BubblePill',
    pillText: string,
    iconLight: {
      __typename: 'ImageAsset',
      imageOrg: string,
      imagePath: string,
      assetType?: string | null,
      deliveryType?: string | null,
      fallbackImage?: string | null
    },
    iconDark: {
      __typename: 'ImageAsset',
      imageOrg: string,
      imagePath: string,
      assetType?: string | null,
      deliveryType?: string | null,
      fallbackImage?: string | null
    }
  } | null
};

type ApiPlayerRowV3FieldsFragment = {
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
    seed?: string | null,
    status?: string | null,
    tourBound?: boolean | null,
    bettingProfile?: string | null,
    playerBioOverrideLink?: string | null,
    assets?: Array<{
      __typename: 'TourBoundAsset',
      tourBoundLogo?: string | null,
      tourBoundLogoDark?: string | null
    }> | null
  },
  scoringData: {
    __typename: 'LeaderboardScoringDataV3',
    groupNumber: number,
    currentRound: number,
    backNine: boolean,
    playerState: ApiPlayerState,
    teeTime?: number | null,
    totalStrokes: string,
    totalStrokesSort?: number | null,
    total: string,
    totalSort: number,
    thru: string,
    thruSort: number,
    score: string,
    scoreSort: number,
    movementDirection: ApiLeaderboardMovement,
    movementAmount: string,
    movementSort?: number | null,
    position: string,
    rounds: Array<string>,
    roundDisplaySort?: Array<number | null> | null,
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
    rankLogoLight?: string | null,
    rankLogoDark?: string | null,
    tooltipText?: string | null,
    tooltipTitle?: string | null,
    oddsToWin?: string | null,
    oddsSwing?: ApiOddsSwing | null,
    oddsOptionId?: string | null,
    oddsSort?: number | null,
    hasStoryContent: boolean,
    storyContentRound?: number | null,
    storyContentRounds: Array<number>,
    playerIcon?: ApiLeaderboardPlayerIcon | null
  }
};

type ApiInformationRowFieldsFragment = {
  __typename: 'InformationRow',
  id: string,
  leaderboardSortOrder: number,
  displayText: string,
  mobileDisplayText: string,
  sponsorName?: string | null
};

type ApiLeaderboardHoleByHoleFieldsFragment = {
  __typename: 'LeaderboardHoleByHole',
  tournamentId: string,
  currentRound: number,
  tournamentName: string,
  rounds: Array<{
    __typename: 'LBRound',
    roundNumber: number,
    displayText: string
  }>,
  holeHeaders: Array<{
    __typename: 'HoleHeader',
    holeNumber: number,
    hole: string,
    par: string
  }>,
  courseHoleHeaders: Array<{
    __typename: 'CourseHoleHeader',
    courseId: string,
    holeHeaders: Array<{
      __typename: 'HoleHeaderV2',
      holeNumber?: number | null,
      order: number,
      displayValue: string,
      par: string
    }>
  }>,
  courses: Array<{
    __typename: 'Course',
    id: string,
    courseName: string,
    courseCode: string,
    hostCourse: boolean,
    scoringLevel: ApiScoringLevel,
    enabled?: boolean | null,
    features?: Array<ApiTeeTimesFeature> | null
  }>,
  playerData: Array<{
    __typename: 'PlayerRowHoleByHole',
    playerId: string,
    courseId: string,
    courseCode: string,
    out?: string | null,
    in?: string | null,
    total?: string | null,
    totalToPar: string,
    scores: Array<{
      __typename: 'HoleScore',
      holeNumber: number,
      par: number,
      yardage: number,
      sequenceNumber: number,
      score: string,
      status: ApiHoleScoreStatus,
      roundScore: string
    }>
  }>
};

type ApiScheduleTournamentFieldsFragment = {
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
  championEarnings?: string | null,
  beautyImage?: string | null,
  tournamentStatus: ApiTournamentStatus,
  sortDate?: string | null,
  sequenceNumber: number,
  purse?: string | null,
  ticketsURL?: string | null,
  tourStandingHeading?: string | null,
  tourStandingValue?: string | null,
  display: ApiScheduleDisplay,
  ticketmasterApiKey?: string | null,
  ticketmasterAttractionId?: string | null,
  androidTicketmasterApiKey?: string | null,
  androidTicketmasterScheme?: string | null,
  iosTicketmasterApiKey?: string | null,
  ticketsEnabled: boolean,
  tournamentSiteURL?: string | null,
  useTournamentSiteURL: boolean,
  tournamentLogoAsset: {
    __typename: 'ImageAsset',
    imageOrg: string,
    imagePath: string,
    assetType?: string | null,
    deliveryType?: string | null,
    fallbackImage?: string | null
  },
  champions: Array<{
    __typename: 'ScheduleChampion',
    displayName: string,
    playerId: string
  }>,
  beautyImageAsset?: {
    __typename: 'ImageAsset',
    imageOrg: string,
    imagePath: string,
    assetType?: string | null,
    deliveryType?: string | null,
    fallbackImage?: string | null
  } | null,
  status?: {
    __typename: 'ScheduleTournamentStatus',
    roundStatusDisplay: string,
    roundDisplay: string,
    roundStatus: ApiRoundStatus,
    roundStatusColor: ApiRoundStatusColor,
    leaderboardTakeover: boolean
  } | null,
  tournamentCategoryInfo?: {
    __typename: 'TournamentCategoryInfo',
    type: ApiTournamentCategory,
    logoLight: string,
    logoDark: string,
    label: string,
    logoLightAsset: {
      __typename: 'ImageAsset',
      imageOrg: string,
      imagePath: string,
      assetType?: string | null,
      deliveryType?: string | null,
      fallbackImage?: string | null
    },
    logoDarkAsset: {
      __typename: 'ImageAsset',
      imageOrg: string,
      imagePath: string,
      assetType?: string | null,
      deliveryType?: string | null,
      fallbackImage?: string | null
    }
  } | null
};

type ApiScheduleMonthFieldsFragment = {
  __typename: 'ScheduleMonth',
  year: string,
  month: string,
  monthSort?: number | null,
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
    championEarnings?: string | null,
    beautyImage?: string | null,
    tournamentStatus: ApiTournamentStatus,
    sortDate?: string | null,
    sequenceNumber: number,
    purse?: string | null,
    ticketsURL?: string | null,
    tourStandingHeading?: string | null,
    tourStandingValue?: string | null,
    display: ApiScheduleDisplay,
    ticketmasterApiKey?: string | null,
    ticketmasterAttractionId?: string | null,
    androidTicketmasterApiKey?: string | null,
    androidTicketmasterScheme?: string | null,
    iosTicketmasterApiKey?: string | null,
    ticketsEnabled: boolean,
    tournamentSiteURL?: string | null,
    useTournamentSiteURL: boolean,
    tournamentLogoAsset: {
      __typename: 'ImageAsset',
      imageOrg: string,
      imagePath: string,
      assetType?: string | null,
      deliveryType?: string | null,
      fallbackImage?: string | null
    },
    champions: Array<{
      __typename: 'ScheduleChampion',
      displayName: string,
      playerId: string
    }>,
    beautyImageAsset?: {
      __typename: 'ImageAsset',
      imageOrg: string,
      imagePath: string,
      assetType?: string | null,
      deliveryType?: string | null,
      fallbackImage?: string | null
    } | null,
    status?: {
      __typename: 'ScheduleTournamentStatus',
      roundStatusDisplay: string,
      roundDisplay: string,
      roundStatus: ApiRoundStatus,
      roundStatusColor: ApiRoundStatusColor,
      leaderboardTakeover: boolean
    } | null,
    tournamentCategoryInfo?: {
      __typename: 'TournamentCategoryInfo',
      type: ApiTournamentCategory,
      logoLight: string,
      logoDark: string,
      label: string,
      logoLightAsset: {
        __typename: 'ImageAsset',
        imageOrg: string,
        imagePath: string,
        assetType?: string | null,
        deliveryType?: string | null,
        fallbackImage?: string | null
      },
      logoDarkAsset: {
        __typename: 'ImageAsset',
        imageOrg: string,
        imagePath: string,
        assetType?: string | null,
        deliveryType?: string | null,
        fallbackImage?: string | null
      }
    } | null
  }>
};

type ApiScheduleFieldsFragment = {
  __typename: 'Schedule',
  tour: string,
  seasonYear: string,
  completed: Array<{
    __typename: 'ScheduleMonth',
    year: string,
    month: string,
    monthSort?: number | null,
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
      championEarnings?: string | null,
      beautyImage?: string | null,
      tournamentStatus: ApiTournamentStatus,
      sortDate?: string | null,
      sequenceNumber: number,
      purse?: string | null,
      ticketsURL?: string | null,
      tourStandingHeading?: string | null,
      tourStandingValue?: string | null,
      display: ApiScheduleDisplay,
      ticketmasterApiKey?: string | null,
      ticketmasterAttractionId?: string | null,
      androidTicketmasterApiKey?: string | null,
      androidTicketmasterScheme?: string | null,
      iosTicketmasterApiKey?: string | null,
      ticketsEnabled: boolean,
      tournamentSiteURL?: string | null,
      useTournamentSiteURL: boolean,
      tournamentLogoAsset: {
        __typename: 'ImageAsset',
        imageOrg: string,
        imagePath: string,
        assetType?: string | null,
        deliveryType?: string | null,
        fallbackImage?: string | null
      },
      champions: Array<{
        __typename: 'ScheduleChampion',
        displayName: string,
        playerId: string
      }>,
      beautyImageAsset?: {
        __typename: 'ImageAsset',
        imageOrg: string,
        imagePath: string,
        assetType?: string | null,
        deliveryType?: string | null,
        fallbackImage?: string | null
      } | null,
      status?: {
        __typename: 'ScheduleTournamentStatus',
        roundStatusDisplay: string,
        roundDisplay: string,
        roundStatus: ApiRoundStatus,
        roundStatusColor: ApiRoundStatusColor,
        leaderboardTakeover: boolean
      } | null,
      tournamentCategoryInfo?: {
        __typename: 'TournamentCategoryInfo',
        type: ApiTournamentCategory,
        logoLight: string,
        logoDark: string,
        label: string,
        logoLightAsset: {
          __typename: 'ImageAsset',
          imageOrg: string,
          imagePath: string,
          assetType?: string | null,
          deliveryType?: string | null,
          fallbackImage?: string | null
        },
        logoDarkAsset: {
          __typename: 'ImageAsset',
          imageOrg: string,
          imagePath: string,
          assetType?: string | null,
          deliveryType?: string | null,
          fallbackImage?: string | null
        }
      } | null
    }>
  }>,
  upcoming: Array<{
    __typename: 'ScheduleMonth',
    year: string,
    month: string,
    monthSort?: number | null,
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
      championEarnings?: string | null,
      beautyImage?: string | null,
      tournamentStatus: ApiTournamentStatus,
      sortDate?: string | null,
      sequenceNumber: number,
      purse?: string | null,
      ticketsURL?: string | null,
      tourStandingHeading?: string | null,
      tourStandingValue?: string | null,
      display: ApiScheduleDisplay,
      ticketmasterApiKey?: string | null,
      ticketmasterAttractionId?: string | null,
      androidTicketmasterApiKey?: string | null,
      androidTicketmasterScheme?: string | null,
      iosTicketmasterApiKey?: string | null,
      ticketsEnabled: boolean,
      tournamentSiteURL?: string | null,
      useTournamentSiteURL: boolean,
      tournamentLogoAsset: {
        __typename: 'ImageAsset',
        imageOrg: string,
        imagePath: string,
        assetType?: string | null,
        deliveryType?: string | null,
        fallbackImage?: string | null
      },
      champions: Array<{
        __typename: 'ScheduleChampion',
        displayName: string,
        playerId: string
      }>,
      beautyImageAsset?: {
        __typename: 'ImageAsset',
        imageOrg: string,
        imagePath: string,
        assetType?: string | null,
        deliveryType?: string | null,
        fallbackImage?: string | null
      } | null,
      status?: {
        __typename: 'ScheduleTournamentStatus',
        roundStatusDisplay: string,
        roundDisplay: string,
        roundStatus: ApiRoundStatus,
        roundStatusColor: ApiRoundStatusColor,
        leaderboardTakeover: boolean
      } | null,
      tournamentCategoryInfo?: {
        __typename: 'TournamentCategoryInfo',
        type: ApiTournamentCategory,
        logoLight: string,
        logoDark: string,
        label: string,
        logoLightAsset: {
          __typename: 'ImageAsset',
          imageOrg: string,
          imagePath: string,
          assetType?: string | null,
          deliveryType?: string | null,
          fallbackImage?: string | null
        },
        logoDarkAsset: {
          __typename: 'ImageAsset',
          imageOrg: string,
          imagePath: string,
          assetType?: string | null,
          deliveryType?: string | null,
          fallbackImage?: string | null
        }
      } | null
    }>
  }>,
  filters?: Array<{
    __typename: 'ScheduleTournamentFilter',
    type: ApiTournamentCategory,
    name: string
  }> | null
};

type ApiTournamentFieldsFragment = {
  __typename: 'Tournament',
  id: string,
  tournamentName: string,
  tournamentLogo: Array<string>,
  tournamentLocation: string,
  tournamentStatus: ApiTournamentStatus,
  features?: Array<ApiTournamentFeature> | null,
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
  ticketsURL?: string | null,
  tournamentSiteURL?: string | null,
  useTournamentSiteURL: boolean,
  pdfUrl?: string | null,
  conductedByLabel?: string | null,
  conductedByLink?: string | null,
  beautyImage: string,
  shouldSubscribe?: boolean | null,
  infoPath?: string | null,
  infoPathWebview?: string | null,
  howItWorks?: string | null,
  howItWorksPill?: string | null,
  howItWorksWebview?: string | null,
  hideRolexClock: boolean,
  hideSov: boolean,
  ticketsEnabled: boolean,
  headshotBaseUrl?: string | null,
  disabledScorecardTabs: Array<ApiScorecardTabFeature>,
  tournamentLogoAsset: Array<{
    __typename: 'ImageAsset',
    imageOrg: string,
    imagePath: string,
    assetType?: string | null,
    deliveryType?: string | null,
    fallbackImage?: string | null
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
    enabled?: boolean | null,
    features?: Array<ApiTeeTimesFeature> | null
  }>,
  weather?: {
    __typename: 'TournamentWeather',
    logo?: string | null,
    logoDark?: string | null,
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
      assetType?: string | null,
      deliveryType?: string | null,
      fallbackImage?: string | null
    },
    logoDarkAsset: {
      __typename: 'ImageAsset',
      imageOrg: string,
      imagePath: string,
      assetType?: string | null,
      deliveryType?: string | null,
      fallbackImage?: string | null
    }
  } | null,
  beautyImageAsset: {
    __typename: 'ImageAsset',
    imageOrg: string,
    imagePath: string,
    assetType?: string | null,
    deliveryType?: string | null,
    fallbackImage?: string | null
  },
  rightRailConfig?: {
    __typename: 'TournamentRightRailConfig',
    imageUrl: string,
    imageAltText: string,
    buttonLink?: string | null,
    buttonText?: string | null
  } | null,
  tournamentCategoryInfo?: {
    __typename: 'TournamentCategoryInfo',
    type: ApiTournamentCategory,
    logoLight: string,
    logoDark: string,
    label: string,
    logoLightAsset: {
      __typename: 'ImageAsset',
      imageOrg: string,
      imagePath: string,
      assetType?: string | null,
      deliveryType?: string | null,
      fallbackImage?: string | null
    },
    logoDarkAsset: {
      __typename: 'ImageAsset',
      imageOrg: string,
      imagePath: string,
      assetType?: string | null,
      deliveryType?: string | null,
      fallbackImage?: string | null
    }
  } | null
};

type ApiLeaderboardHoleByHoleQueryVariables = Exact<{
  tournamentId: Scalars['ID']['input'];
  round?: InputMaybe<Scalars['Int']['input']>;
}>;


type ApiLeaderboardHoleByHoleQuery = {
  __typename: 'Query',
  leaderboardHoleByHole: {
    __typename: 'LeaderboardHoleByHole',
    tournamentId: string,
    currentRound: number,
    tournamentName: string,
    rounds: Array<{
      __typename: 'LBRound',
      roundNumber: number,
      displayText: string
    }>,
    holeHeaders: Array<{
      __typename: 'HoleHeader',
      holeNumber: number,
      hole: string,
      par: string
    }>,
    courseHoleHeaders: Array<{
      __typename: 'CourseHoleHeader',
      courseId: string,
      holeHeaders: Array<{
        __typename: 'HoleHeaderV2',
        holeNumber?: number | null,
        order: number,
        displayValue: string,
        par: string
      }>
    }>,
    courses: Array<{
      __typename: 'Course',
      id: string,
      courseName: string,
      courseCode: string,
      hostCourse: boolean,
      scoringLevel: ApiScoringLevel,
      enabled?: boolean | null,
      features?: Array<ApiTeeTimesFeature> | null
    }>,
    playerData: Array<{
      __typename: 'PlayerRowHoleByHole',
      playerId: string,
      courseId: string,
      courseCode: string,
      out?: string | null,
      in?: string | null,
      total?: string | null,
      totalToPar: string,
      scores: Array<{
        __typename: 'HoleScore',
        holeNumber: number,
        par: number,
        yardage: number,
        sequenceNumber: number,
        score: string,
        status: ApiHoleScoreStatus,
        roundScore: string
      }>
    }>
  }
};

type ApiScheduleYearsQueryVariables = Exact<{
  tourCode: ApiTourCode;
}>;


type ApiScheduleYearsQuery = {
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

type ApiScheduleQueryVariables = Exact<{
  tourCode: Scalars['String']['input'];
  year?: InputMaybe<Scalars['String']['input']>;
}>;


type ApiScheduleQuery = {
  __typename: 'Query',
  schedule: {
    __typename: 'Schedule',
    tour: string,
    seasonYear: string,
    completed: Array<{
      __typename: 'ScheduleMonth',
      year: string,
      month: string,
      monthSort?: number | null,
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
        championEarnings?: string | null,
        beautyImage?: string | null,
        tournamentStatus: ApiTournamentStatus,
        sortDate?: string | null,
        sequenceNumber: number,
        purse?: string | null,
        ticketsURL?: string | null,
        tourStandingHeading?: string | null,
        tourStandingValue?: string | null,
        display: ApiScheduleDisplay,
        ticketmasterApiKey?: string | null,
        ticketmasterAttractionId?: string | null,
        androidTicketmasterApiKey?: string | null,
        androidTicketmasterScheme?: string | null,
        iosTicketmasterApiKey?: string | null,
        ticketsEnabled: boolean,
        tournamentSiteURL?: string | null,
        useTournamentSiteURL: boolean,
        tournamentLogoAsset: {
          __typename: 'ImageAsset',
          imageOrg: string,
          imagePath: string,
          assetType?: string | null,
          deliveryType?: string | null,
          fallbackImage?: string | null
        },
        champions: Array<{
          __typename: 'ScheduleChampion',
          displayName: string,
          playerId: string
        }>,
        beautyImageAsset?: {
          __typename: 'ImageAsset',
          imageOrg: string,
          imagePath: string,
          assetType?: string | null,
          deliveryType?: string | null,
          fallbackImage?: string | null
        } | null,
        status?: {
          __typename: 'ScheduleTournamentStatus',
          roundStatusDisplay: string,
          roundDisplay: string,
          roundStatus: ApiRoundStatus,
          roundStatusColor: ApiRoundStatusColor,
          leaderboardTakeover: boolean
        } | null,
        tournamentCategoryInfo?: {
          __typename: 'TournamentCategoryInfo',
          type: ApiTournamentCategory,
          logoLight: string,
          logoDark: string,
          label: string,
          logoLightAsset: {
            __typename: 'ImageAsset',
            imageOrg: string,
            imagePath: string,
            assetType?: string | null,
            deliveryType?: string | null,
            fallbackImage?: string | null
          },
          logoDarkAsset: {
            __typename: 'ImageAsset',
            imageOrg: string,
            imagePath: string,
            assetType?: string | null,
            deliveryType?: string | null,
            fallbackImage?: string | null
          }
        } | null
      }>
    }>,
    upcoming: Array<{
      __typename: 'ScheduleMonth',
      year: string,
      month: string,
      monthSort?: number | null,
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
        championEarnings?: string | null,
        beautyImage?: string | null,
        tournamentStatus: ApiTournamentStatus,
        sortDate?: string | null,
        sequenceNumber: number,
        purse?: string | null,
        ticketsURL?: string | null,
        tourStandingHeading?: string | null,
        tourStandingValue?: string | null,
        display: ApiScheduleDisplay,
        ticketmasterApiKey?: string | null,
        ticketmasterAttractionId?: string | null,
        androidTicketmasterApiKey?: string | null,
        androidTicketmasterScheme?: string | null,
        iosTicketmasterApiKey?: string | null,
        ticketsEnabled: boolean,
        tournamentSiteURL?: string | null,
        useTournamentSiteURL: boolean,
        tournamentLogoAsset: {
          __typename: 'ImageAsset',
          imageOrg: string,
          imagePath: string,
          assetType?: string | null,
          deliveryType?: string | null,
          fallbackImage?: string | null
        },
        champions: Array<{
          __typename: 'ScheduleChampion',
          displayName: string,
          playerId: string
        }>,
        beautyImageAsset?: {
          __typename: 'ImageAsset',
          imageOrg: string,
          imagePath: string,
          assetType?: string | null,
          deliveryType?: string | null,
          fallbackImage?: string | null
        } | null,
        status?: {
          __typename: 'ScheduleTournamentStatus',
          roundStatusDisplay: string,
          roundDisplay: string,
          roundStatus: ApiRoundStatus,
          roundStatusColor: ApiRoundStatusColor,
          leaderboardTakeover: boolean
        } | null,
        tournamentCategoryInfo?: {
          __typename: 'TournamentCategoryInfo',
          type: ApiTournamentCategory,
          logoLight: string,
          logoDark: string,
          label: string,
          logoLightAsset: {
            __typename: 'ImageAsset',
            imageOrg: string,
            imagePath: string,
            assetType?: string | null,
            deliveryType?: string | null,
            fallbackImage?: string | null
          },
          logoDarkAsset: {
            __typename: 'ImageAsset',
            imageOrg: string,
            imagePath: string,
            assetType?: string | null,
            deliveryType?: string | null,
            fallbackImage?: string | null
          }
        } | null
      }>
    }>,
    filters?: Array<{
      __typename: 'ScheduleTournamentFilter',
      type: ApiTournamentCategory,
      name: string
    }> | null
  }
};

type ApiCompleteScheduleQueryVariables = Exact<{
  tourCode: ApiTourCode;
}>;


type ApiCompleteScheduleQuery = {
  __typename: 'Query',
  completeSchedule: Array<{
    __typename: 'Schedule',
    tour: string,
    seasonYear: string,
    completed: Array<{
      __typename: 'ScheduleMonth',
      year: string,
      month: string,
      monthSort?: number | null,
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
        championEarnings?: string | null,
        beautyImage?: string | null,
        tournamentStatus: ApiTournamentStatus,
        sortDate?: string | null,
        sequenceNumber: number,
        purse?: string | null,
        ticketsURL?: string | null,
        tourStandingHeading?: string | null,
        tourStandingValue?: string | null,
        display: ApiScheduleDisplay,
        ticketmasterApiKey?: string | null,
        ticketmasterAttractionId?: string | null,
        androidTicketmasterApiKey?: string | null,
        androidTicketmasterScheme?: string | null,
        iosTicketmasterApiKey?: string | null,
        ticketsEnabled: boolean,
        tournamentSiteURL?: string | null,
        useTournamentSiteURL: boolean,
        tournamentLogoAsset: {
          __typename: 'ImageAsset',
          imageOrg: string,
          imagePath: string,
          assetType?: string | null,
          deliveryType?: string | null,
          fallbackImage?: string | null
        },
        champions: Array<{
          __typename: 'ScheduleChampion',
          displayName: string,
          playerId: string
        }>,
        beautyImageAsset?: {
          __typename: 'ImageAsset',
          imageOrg: string,
          imagePath: string,
          assetType?: string | null,
          deliveryType?: string | null,
          fallbackImage?: string | null
        } | null,
        status?: {
          __typename: 'ScheduleTournamentStatus',
          roundStatusDisplay: string,
          roundDisplay: string,
          roundStatus: ApiRoundStatus,
          roundStatusColor: ApiRoundStatusColor,
          leaderboardTakeover: boolean
        } | null,
        tournamentCategoryInfo?: {
          __typename: 'TournamentCategoryInfo',
          type: ApiTournamentCategory,
          logoLight: string,
          logoDark: string,
          label: string,
          logoLightAsset: {
            __typename: 'ImageAsset',
            imageOrg: string,
            imagePath: string,
            assetType?: string | null,
            deliveryType?: string | null,
            fallbackImage?: string | null
          },
          logoDarkAsset: {
            __typename: 'ImageAsset',
            imageOrg: string,
            imagePath: string,
            assetType?: string | null,
            deliveryType?: string | null,
            fallbackImage?: string | null
          }
        } | null
      }>
    }>,
    upcoming: Array<{
      __typename: 'ScheduleMonth',
      year: string,
      month: string,
      monthSort?: number | null,
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
        championEarnings?: string | null,
        beautyImage?: string | null,
        tournamentStatus: ApiTournamentStatus,
        sortDate?: string | null,
        sequenceNumber: number,
        purse?: string | null,
        ticketsURL?: string | null,
        tourStandingHeading?: string | null,
        tourStandingValue?: string | null,
        display: ApiScheduleDisplay,
        ticketmasterApiKey?: string | null,
        ticketmasterAttractionId?: string | null,
        androidTicketmasterApiKey?: string | null,
        androidTicketmasterScheme?: string | null,
        iosTicketmasterApiKey?: string | null,
        ticketsEnabled: boolean,
        tournamentSiteURL?: string | null,
        useTournamentSiteURL: boolean,
        tournamentLogoAsset: {
          __typename: 'ImageAsset',
          imageOrg: string,
          imagePath: string,
          assetType?: string | null,
          deliveryType?: string | null,
          fallbackImage?: string | null
        },
        champions: Array<{
          __typename: 'ScheduleChampion',
          displayName: string,
          playerId: string
        }>,
        beautyImageAsset?: {
          __typename: 'ImageAsset',
          imageOrg: string,
          imagePath: string,
          assetType?: string | null,
          deliveryType?: string | null,
          fallbackImage?: string | null
        } | null,
        status?: {
          __typename: 'ScheduleTournamentStatus',
          roundStatusDisplay: string,
          roundDisplay: string,
          roundStatus: ApiRoundStatus,
          roundStatusColor: ApiRoundStatusColor,
          leaderboardTakeover: boolean
        } | null,
        tournamentCategoryInfo?: {
          __typename: 'TournamentCategoryInfo',
          type: ApiTournamentCategory,
          logoLight: string,
          logoDark: string,
          label: string,
          logoLightAsset: {
            __typename: 'ImageAsset',
            imageOrg: string,
            imagePath: string,
            assetType?: string | null,
            deliveryType?: string | null,
            fallbackImage?: string | null
          },
          logoDarkAsset: {
            __typename: 'ImageAsset',
            imageOrg: string,
            imagePath: string,
            assetType?: string | null,
            deliveryType?: string | null,
            fallbackImage?: string | null
          }
        } | null
      }>
    }>,
    filters?: Array<{
      __typename: 'ScheduleTournamentFilter',
      type: ApiTournamentCategory,
      name: string
    }> | null
  }>
};

type ApiUpcomingScheduleQueryVariables = Exact<{
  tourCode: Scalars['String']['input'];
}>;


type ApiUpcomingScheduleQuery = {
  __typename: 'Query',
  upcomingSchedule: {
    __typename: 'ScheduleUpcoming',
    id: string,
    filters?: Array<{
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
      championEarnings?: string | null,
      beautyImage?: string | null,
      tournamentStatus: ApiTournamentStatus,
      sortDate?: string | null,
      sequenceNumber: number,
      purse?: string | null,
      ticketsURL?: string | null,
      tourStandingHeading?: string | null,
      tourStandingValue?: string | null,
      display: ApiScheduleDisplay,
      ticketmasterApiKey?: string | null,
      ticketmasterAttractionId?: string | null,
      androidTicketmasterApiKey?: string | null,
      androidTicketmasterScheme?: string | null,
      iosTicketmasterApiKey?: string | null,
      ticketsEnabled: boolean,
      tournamentSiteURL?: string | null,
      useTournamentSiteURL: boolean,
      tournamentLogoAsset: {
        __typename: 'ImageAsset',
        imageOrg: string,
        imagePath: string,
        assetType?: string | null,
        deliveryType?: string | null,
        fallbackImage?: string | null
      },
      champions: Array<{
        __typename: 'ScheduleChampion',
        displayName: string,
        playerId: string
      }>,
      beautyImageAsset?: {
        __typename: 'ImageAsset',
        imageOrg: string,
        imagePath: string,
        assetType?: string | null,
        deliveryType?: string | null,
        fallbackImage?: string | null
      } | null,
      status?: {
        __typename: 'ScheduleTournamentStatus',
        roundStatusDisplay: string,
        roundDisplay: string,
        roundStatus: ApiRoundStatus,
        roundStatusColor: ApiRoundStatusColor,
        leaderboardTakeover: boolean
      } | null,
      tournamentCategoryInfo?: {
        __typename: 'TournamentCategoryInfo',
        type: ApiTournamentCategory,
        logoLight: string,
        logoDark: string,
        label: string,
        logoLightAsset: {
          __typename: 'ImageAsset',
          imageOrg: string,
          imagePath: string,
          assetType?: string | null,
          deliveryType?: string | null,
          fallbackImage?: string | null
        },
        logoDarkAsset: {
          __typename: 'ImageAsset',
          imageOrg: string,
          imagePath: string,
          assetType?: string | null,
          deliveryType?: string | null,
          fallbackImage?: string | null
        }
      } | null
    }>
  }
};

type ApiTournamentsQueryVariables = Exact<{
  ids?: InputMaybe<Array<Scalars['ID']['input']> | Scalars['ID']['input']>;
}>;


type ApiTournamentsQuery = {
  __typename: 'Query',
  tournaments: Array<{
    __typename: 'Tournament',
    id: string,
    tournamentName: string,
    tournamentLogo: Array<string>,
    tournamentLocation: string,
    tournamentStatus: ApiTournamentStatus,
    features?: Array<ApiTournamentFeature> | null,
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
    ticketsURL?: string | null,
    tournamentSiteURL?: string | null,
    useTournamentSiteURL: boolean,
    pdfUrl?: string | null,
    conductedByLabel?: string | null,
    conductedByLink?: string | null,
    beautyImage: string,
    shouldSubscribe?: boolean | null,
    infoPath?: string | null,
    infoPathWebview?: string | null,
    howItWorks?: string | null,
    howItWorksPill?: string | null,
    howItWorksWebview?: string | null,
    hideRolexClock: boolean,
    hideSov: boolean,
    ticketsEnabled: boolean,
    headshotBaseUrl?: string | null,
    disabledScorecardTabs: Array<ApiScorecardTabFeature>,
    tournamentLogoAsset: Array<{
      __typename: 'ImageAsset',
      imageOrg: string,
      imagePath: string,
      assetType?: string | null,
      deliveryType?: string | null,
      fallbackImage?: string | null
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
      enabled?: boolean | null,
      features?: Array<ApiTeeTimesFeature> | null
    }>,
    weather?: {
      __typename: 'TournamentWeather',
      logo?: string | null,
      logoDark?: string | null,
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
        assetType?: string | null,
        deliveryType?: string | null,
        fallbackImage?: string | null
      },
      logoDarkAsset: {
        __typename: 'ImageAsset',
        imageOrg: string,
        imagePath: string,
        assetType?: string | null,
        deliveryType?: string | null,
        fallbackImage?: string | null
      }
    } | null,
    beautyImageAsset: {
      __typename: 'ImageAsset',
      imageOrg: string,
      imagePath: string,
      assetType?: string | null,
      deliveryType?: string | null,
      fallbackImage?: string | null
    },
    rightRailConfig?: {
      __typename: 'TournamentRightRailConfig',
      imageUrl: string,
      imageAltText: string,
      buttonLink?: string | null,
      buttonText?: string | null
    } | null,
    tournamentCategoryInfo?: {
      __typename: 'TournamentCategoryInfo',
      type: ApiTournamentCategory,
      logoLight: string,
      logoDark: string,
      label: string,
      logoLightAsset: {
        __typename: 'ImageAsset',
        imageOrg: string,
        imagePath: string,
        assetType?: string | null,
        deliveryType?: string | null,
        fallbackImage?: string | null
      },
      logoDarkAsset: {
        __typename: 'ImageAsset',
        imageOrg: string,
        imagePath: string,
        assetType?: string | null,
        deliveryType?: string | null,
        fallbackImage?: string | null
      }
    } | null
  }>
};

export const ApiLeaderboardV3FieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LeaderboardV3Fields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LeaderboardV3"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"tournamentId"}},{"kind":"Field","name":{"kind":"Name","value":"leaderboardRoundHeader"}},{"kind":"Field","name":{"kind":"Name","value":"formatType"}},{"kind":"Field","name":{"kind":"Name","value":"timezone"}},{"kind":"Field","name":{"kind":"Name","value":"winner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"totalStrokes"}},{"kind":"Field","name":{"kind":"Name","value":"totalScore"}},{"kind":"Field","name":{"kind":"Name","value":"countryFlag"}},{"kind":"Field","name":{"kind":"Name","value":"countryName"}},{"kind":"Field","name":{"kind":"Name","value":"purse"}},{"kind":"Field","name":{"kind":"Name","value":"displayPoints"}},{"kind":"Field","name":{"kind":"Name","value":"displayPurse"}},{"kind":"Field","name":{"kind":"Name","value":"points"}},{"kind":"Field","name":{"kind":"Name","value":"seed"}},{"kind":"Field","name":{"kind":"Name","value":"pointsLabel"}},{"kind":"Field","name":{"kind":"Name","value":"winnerIcon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"roundScores"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"winners"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"totalStrokes"}},{"kind":"Field","name":{"kind":"Name","value":"totalScore"}},{"kind":"Field","name":{"kind":"Name","value":"countryFlag"}},{"kind":"Field","name":{"kind":"Name","value":"countryName"}},{"kind":"Field","name":{"kind":"Name","value":"purse"}},{"kind":"Field","name":{"kind":"Name","value":"displayPoints"}},{"kind":"Field","name":{"kind":"Name","value":"displayPurse"}},{"kind":"Field","name":{"kind":"Name","value":"points"}},{"kind":"Field","name":{"kind":"Name","value":"seed"}},{"kind":"Field","name":{"kind":"Name","value":"pointsLabel"}}]}},{"kind":"Field","name":{"kind":"Name","value":"courses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"courseName"}},{"kind":"Field","name":{"kind":"Name","value":"courseCode"}},{"kind":"Field","name":{"kind":"Name","value":"hostCourse"}},{"kind":"Field","name":{"kind":"Name","value":"scoringLevel"}},{"kind":"Field","name":{"kind":"Name","value":"enabled"}},{"kind":"Field","name":{"kind":"Name","value":"features"}}]}},{"kind":"Field","name":{"kind":"Name","value":"messages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"messageText"}},{"kind":"Field","name":{"kind":"Name","value":"messageIcon"}},{"kind":"Field","name":{"kind":"Name","value":"messageLink"}},{"kind":"Field","name":{"kind":"Name","value":"webViewLink"}},{"kind":"Field","name":{"kind":"Name","value":"externalLink"}},{"kind":"Field","name":{"kind":"Name","value":"platforms"}},{"kind":"Field","name":{"kind":"Name","value":"timing"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tourcastURL"}},{"kind":"Field","name":{"kind":"Name","value":"tourcastURLWeb"}},{"kind":"Field","name":{"kind":"Name","value":"tourcastURI"}},{"kind":"Field","name":{"kind":"Name","value":"tournamentStatus"}},{"kind":"Field","name":{"kind":"Name","value":"rounds"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"roundNumber"}},{"kind":"Field","name":{"kind":"Name","value":"displayText"}}]}},{"kind":"Field","name":{"kind":"Name","value":"isPlayoffActive"}},{"kind":"Field","name":{"kind":"Name","value":"scorecardEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"profileEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"subEvent"}},{"kind":"Field","name":{"kind":"Name","value":"leaderboardFeatures"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"new"}},{"kind":"Field","name":{"kind":"Name","value":"tooltipText"}},{"kind":"Field","name":{"kind":"Name","value":"tooltipTitle"}},{"kind":"Field","name":{"kind":"Name","value":"fieldStatType"}},{"kind":"Field","name":{"kind":"Name","value":"leaderboardFeatures"}},{"kind":"Field","name":{"kind":"Name","value":"sponsor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"sponsorLogo"}},{"kind":"Field","name":{"kind":"Name","value":"sponsorLogoAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"imageOrg"}},{"kind":"Field","name":{"kind":"Name","value":"imagePath"}},{"kind":"Field","name":{"kind":"Name","value":"assetType"}},{"kind":"Field","name":{"kind":"Name","value":"deliveryType"}},{"kind":"Field","name":{"kind":"Name","value":"fallbackImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"sponsorLogoDark"}},{"kind":"Field","name":{"kind":"Name","value":"sponsorLogoDarkAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"imageOrg"}},{"kind":"Field","name":{"kind":"Name","value":"imagePath"}},{"kind":"Field","name":{"kind":"Name","value":"assetType"}},{"kind":"Field","name":{"kind":"Name","value":"deliveryType"}},{"kind":"Field","name":{"kind":"Name","value":"fallbackImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"sponsorText"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"standingsEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"standingsHeader"}},{"kind":"Field","name":{"kind":"Name","value":"hideSov"}},{"kind":"Field","name":{"kind":"Name","value":"disableOdds"}},{"kind":"Field","name":{"kind":"Name","value":"disableBettingProfileColumn"}},{"kind":"Field","name":{"kind":"Name","value":"cutLineProbabilities"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"projectedCutLine"}},{"kind":"Field","name":{"kind":"Name","value":"probableCutLine"}},{"kind":"Field","name":{"kind":"Name","value":"sponsorLogo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"imageOrg"}},{"kind":"Field","name":{"kind":"Name","value":"imagePath"}},{"kind":"Field","name":{"kind":"Name","value":"assetType"}},{"kind":"Field","name":{"kind":"Name","value":"deliveryType"}},{"kind":"Field","name":{"kind":"Name","value":"fallbackImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"sponsorName"}},{"kind":"Field","name":{"kind":"Name","value":"lastUpdated"}},{"kind":"Field","name":{"kind":"Name","value":"possibleCutLines"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"probability"}},{"kind":"Field","name":{"kind":"Name","value":"displayProbability"}}]}},{"kind":"Field","name":{"kind":"Name","value":"new"}}]}},{"kind":"Field","name":{"kind":"Name","value":"disableLeaderboard"}},{"kind":"Field","name":{"kind":"Name","value":"bubblePill"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iconLight"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"imageOrg"}},{"kind":"Field","name":{"kind":"Name","value":"imagePath"}},{"kind":"Field","name":{"kind":"Name","value":"assetType"}},{"kind":"Field","name":{"kind":"Name","value":"deliveryType"}},{"kind":"Field","name":{"kind":"Name","value":"fallbackImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"iconDark"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"imageOrg"}},{"kind":"Field","name":{"kind":"Name","value":"imagePath"}},{"kind":"Field","name":{"kind":"Name","value":"assetType"}},{"kind":"Field","name":{"kind":"Name","value":"deliveryType"}},{"kind":"Field","name":{"kind":"Name","value":"fallbackImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pillText"}}]}}]}}]} as unknown as DocumentNode;
export const ApiPlayerRowV3FieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PlayerRowV3Fields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlayerRowV3"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"leaderboardSortOrder"}},{"kind":"Field","name":{"kind":"Name","value":"player"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"shortName"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"abbreviations"}},{"kind":"Field","name":{"kind":"Name","value":"abbreviationsAccessibilityText"}},{"kind":"Field","name":{"kind":"Name","value":"amateur"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"countryFlag"}},{"kind":"Field","name":{"kind":"Name","value":"lineColor"}},{"kind":"Field","name":{"kind":"Name","value":"seed"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"tourBound"}},{"kind":"Field","name":{"kind":"Name","value":"assets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TourBoundAsset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"tourBoundLogo"}},{"kind":"Field","name":{"kind":"Name","value":"tourBoundLogoDark"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"bettingProfile"}},{"kind":"Field","name":{"kind":"Name","value":"playerBioOverrideLink"}}]}},{"kind":"Field","name":{"kind":"Name","value":"scoringData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"groupNumber"}},{"kind":"Field","name":{"kind":"Name","value":"currentRound"}},{"kind":"Field","name":{"kind":"Name","value":"backNine"}},{"kind":"Field","name":{"kind":"Name","value":"playerState"}},{"kind":"Field","name":{"kind":"Name","value":"teeTime"}},{"kind":"Field","name":{"kind":"Name","value":"totalStrokes"}},{"kind":"Field","name":{"kind":"Name","value":"totalStrokesSort"}},{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"totalSort"}},{"kind":"Field","name":{"kind":"Name","value":"thru"}},{"kind":"Field","name":{"kind":"Name","value":"thruSort"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"scoreSort"}},{"kind":"Field","name":{"kind":"Name","value":"movementDirection"}},{"kind":"Field","name":{"kind":"Name","value":"movementAmount"}},{"kind":"Field","name":{"kind":"Name","value":"movementSort"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"rounds"}},{"kind":"Field","name":{"kind":"Name","value":"roundDisplaySort"}},{"kind":"Field","name":{"kind":"Name","value":"roundHeader"}},{"kind":"Field","name":{"kind":"Name","value":"roundStatus"}},{"kind":"Field","name":{"kind":"Name","value":"courseId"}},{"kind":"Field","name":{"kind":"Name","value":"official"}},{"kind":"Field","name":{"kind":"Name","value":"officialSort"}},{"kind":"Field","name":{"kind":"Name","value":"projected"}},{"kind":"Field","name":{"kind":"Name","value":"projectedSort"}},{"kind":"Field","name":{"kind":"Name","value":"rankingMovement"}},{"kind":"Field","name":{"kind":"Name","value":"rankingMovementAmount"}},{"kind":"Field","name":{"kind":"Name","value":"rankingMovementAmountSort"}},{"kind":"Field","name":{"kind":"Name","value":"rankLogoLight"}},{"kind":"Field","name":{"kind":"Name","value":"rankLogoDark"}},{"kind":"Field","name":{"kind":"Name","value":"tooltipText"}},{"kind":"Field","name":{"kind":"Name","value":"tooltipTitle"}},{"kind":"Field","name":{"kind":"Name","value":"oddsToWin"}},{"kind":"Field","name":{"kind":"Name","value":"oddsSwing"}},{"kind":"Field","name":{"kind":"Name","value":"oddsOptionId"}},{"kind":"Field","name":{"kind":"Name","value":"oddsSort"}},{"kind":"Field","name":{"kind":"Name","value":"hasStoryContent"}},{"kind":"Field","name":{"kind":"Name","value":"storyContentRound"}},{"kind":"Field","name":{"kind":"Name","value":"storyContentRounds"}},{"kind":"Field","name":{"kind":"Name","value":"playerIcon"}}]}}]}}]} as unknown as DocumentNode;
export const ApiInformationRowFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"InformationRowFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"InformationRow"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"leaderboardSortOrder"}},{"kind":"Field","name":{"kind":"Name","value":"displayText"}},{"kind":"Field","name":{"kind":"Name","value":"mobileDisplayText"}},{"kind":"Field","name":{"kind":"Name","value":"sponsorName"}}]}}]} as unknown as DocumentNode;
export const ApiLeaderboardHoleByHoleFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LeaderboardHoleByHoleFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LeaderboardHoleByHole"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"tournamentId"}},{"kind":"Field","name":{"kind":"Name","value":"currentRound"}},{"kind":"Field","name":{"kind":"Name","value":"rounds"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"roundNumber"}},{"kind":"Field","name":{"kind":"Name","value":"displayText"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tournamentName"}},{"kind":"Field","name":{"kind":"Name","value":"holeHeaders"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"holeNumber"}},{"kind":"Field","name":{"kind":"Name","value":"hole"}},{"kind":"Field","name":{"kind":"Name","value":"par"}}]}},{"kind":"Field","name":{"kind":"Name","value":"courseHoleHeaders"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"courseId"}},{"kind":"Field","name":{"kind":"Name","value":"holeHeaders"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"holeNumber"}},{"kind":"Field","name":{"kind":"Name","value":"order"}},{"kind":"Field","name":{"kind":"Name","value":"displayValue"}},{"kind":"Field","name":{"kind":"Name","value":"par"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"courses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"courseName"}},{"kind":"Field","name":{"kind":"Name","value":"courseCode"}},{"kind":"Field","name":{"kind":"Name","value":"hostCourse"}},{"kind":"Field","name":{"kind":"Name","value":"scoringLevel"}},{"kind":"Field","name":{"kind":"Name","value":"enabled"}},{"kind":"Field","name":{"kind":"Name","value":"features"}}]}},{"kind":"Field","name":{"kind":"Name","value":"playerData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"playerId"}},{"kind":"Field","name":{"kind":"Name","value":"courseId"}},{"kind":"Field","name":{"kind":"Name","value":"courseCode"}},{"kind":"Field","name":{"kind":"Name","value":"scores"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"holeNumber"}},{"kind":"Field","name":{"kind":"Name","value":"par"}},{"kind":"Field","name":{"kind":"Name","value":"yardage"}},{"kind":"Field","name":{"kind":"Name","value":"sequenceNumber"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"roundScore"}}]}},{"kind":"Field","name":{"kind":"Name","value":"out"}},{"kind":"Field","name":{"kind":"Name","value":"in"}},{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"totalToPar"}}]}}]}}]} as unknown as DocumentNode;
export const ApiScheduleTournamentFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ScheduleTournamentFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ScheduleTournament"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"dateAccessibilityText"}},{"kind":"Field","name":{"kind":"Name","value":"tournamentName"}},{"kind":"Field","name":{"kind":"Name","value":"tournamentLogo"}},{"kind":"Field","name":{"kind":"Name","value":"tournamentLogoAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"imageOrg"}},{"kind":"Field","name":{"kind":"Name","value":"imagePath"}},{"kind":"Field","name":{"kind":"Name","value":"assetType"}},{"kind":"Field","name":{"kind":"Name","value":"deliveryType"}},{"kind":"Field","name":{"kind":"Name","value":"fallbackImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"stateCode"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"countryCode"}},{"kind":"Field","name":{"kind":"Name","value":"courseName"}},{"kind":"Field","name":{"kind":"Name","value":"champion"}},{"kind":"Field","name":{"kind":"Name","value":"championId"}},{"kind":"Field","name":{"kind":"Name","value":"champions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"playerId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"championEarnings"}},{"kind":"Field","name":{"kind":"Name","value":"beautyImage"}},{"kind":"Field","name":{"kind":"Name","value":"beautyImageAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"imageOrg"}},{"kind":"Field","name":{"kind":"Name","value":"imagePath"}},{"kind":"Field","name":{"kind":"Name","value":"assetType"}},{"kind":"Field","name":{"kind":"Name","value":"deliveryType"}},{"kind":"Field","name":{"kind":"Name","value":"fallbackImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"roundStatusDisplay"}},{"kind":"Field","name":{"kind":"Name","value":"roundDisplay"}},{"kind":"Field","name":{"kind":"Name","value":"roundStatus"}},{"kind":"Field","name":{"kind":"Name","value":"roundStatusColor"}},{"kind":"Field","name":{"kind":"Name","value":"leaderboardTakeover"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tournamentStatus"}},{"kind":"Field","name":{"kind":"Name","value":"sortDate"}},{"kind":"Field","name":{"kind":"Name","value":"sequenceNumber"}},{"kind":"Field","name":{"kind":"Name","value":"purse"}},{"kind":"Field","name":{"kind":"Name","value":"ticketsURL"}},{"kind":"Field","name":{"kind":"Name","value":"tourStandingHeading"}},{"kind":"Field","name":{"kind":"Name","value":"tourStandingValue"}},{"kind":"Field","name":{"kind":"Name","value":"display"}},{"kind":"Field","name":{"kind":"Name","value":"tournamentCategoryInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"logoLight"}},{"kind":"Field","name":{"kind":"Name","value":"logoLightAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"imageOrg"}},{"kind":"Field","name":{"kind":"Name","value":"imagePath"}},{"kind":"Field","name":{"kind":"Name","value":"assetType"}},{"kind":"Field","name":{"kind":"Name","value":"deliveryType"}},{"kind":"Field","name":{"kind":"Name","value":"fallbackImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"logoDark"}},{"kind":"Field","name":{"kind":"Name","value":"logoDarkAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"imageOrg"}},{"kind":"Field","name":{"kind":"Name","value":"imagePath"}},{"kind":"Field","name":{"kind":"Name","value":"assetType"}},{"kind":"Field","name":{"kind":"Name","value":"deliveryType"}},{"kind":"Field","name":{"kind":"Name","value":"fallbackImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ticketmasterApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"ticketmasterAttractionId"}},{"kind":"Field","name":{"kind":"Name","value":"androidTicketmasterApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"androidTicketmasterScheme"}},{"kind":"Field","name":{"kind":"Name","value":"iosTicketmasterApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"ticketsEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"tournamentSiteURL"}},{"kind":"Field","name":{"kind":"Name","value":"useTournamentSiteURL"}}]}}]} as unknown as DocumentNode;
export const ApiScheduleMonthFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ScheduleMonthFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ScheduleMonth"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"year"}},{"kind":"Field","name":{"kind":"Name","value":"month"}},{"kind":"Field","name":{"kind":"Name","value":"monthSort"}},{"kind":"Field","name":{"kind":"Name","value":"tournaments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ScheduleTournamentFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ScheduleTournamentFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ScheduleTournament"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"dateAccessibilityText"}},{"kind":"Field","name":{"kind":"Name","value":"tournamentName"}},{"kind":"Field","name":{"kind":"Name","value":"tournamentLogo"}},{"kind":"Field","name":{"kind":"Name","value":"tournamentLogoAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"imageOrg"}},{"kind":"Field","name":{"kind":"Name","value":"imagePath"}},{"kind":"Field","name":{"kind":"Name","value":"assetType"}},{"kind":"Field","name":{"kind":"Name","value":"deliveryType"}},{"kind":"Field","name":{"kind":"Name","value":"fallbackImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"stateCode"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"countryCode"}},{"kind":"Field","name":{"kind":"Name","value":"courseName"}},{"kind":"Field","name":{"kind":"Name","value":"champion"}},{"kind":"Field","name":{"kind":"Name","value":"championId"}},{"kind":"Field","name":{"kind":"Name","value":"champions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"playerId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"championEarnings"}},{"kind":"Field","name":{"kind":"Name","value":"beautyImage"}},{"kind":"Field","name":{"kind":"Name","value":"beautyImageAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"imageOrg"}},{"kind":"Field","name":{"kind":"Name","value":"imagePath"}},{"kind":"Field","name":{"kind":"Name","value":"assetType"}},{"kind":"Field","name":{"kind":"Name","value":"deliveryType"}},{"kind":"Field","name":{"kind":"Name","value":"fallbackImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"roundStatusDisplay"}},{"kind":"Field","name":{"kind":"Name","value":"roundDisplay"}},{"kind":"Field","name":{"kind":"Name","value":"roundStatus"}},{"kind":"Field","name":{"kind":"Name","value":"roundStatusColor"}},{"kind":"Field","name":{"kind":"Name","value":"leaderboardTakeover"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tournamentStatus"}},{"kind":"Field","name":{"kind":"Name","value":"sortDate"}},{"kind":"Field","name":{"kind":"Name","value":"sequenceNumber"}},{"kind":"Field","name":{"kind":"Name","value":"purse"}},{"kind":"Field","name":{"kind":"Name","value":"ticketsURL"}},{"kind":"Field","name":{"kind":"Name","value":"tourStandingHeading"}},{"kind":"Field","name":{"kind":"Name","value":"tourStandingValue"}},{"kind":"Field","name":{"kind":"Name","value":"display"}},{"kind":"Field","name":{"kind":"Name","value":"tournamentCategoryInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"logoLight"}},{"kind":"Field","name":{"kind":"Name","value":"logoLightAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"imageOrg"}},{"kind":"Field","name":{"kind":"Name","value":"imagePath"}},{"kind":"Field","name":{"kind":"Name","value":"assetType"}},{"kind":"Field","name":{"kind":"Name","value":"deliveryType"}},{"kind":"Field","name":{"kind":"Name","value":"fallbackImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"logoDark"}},{"kind":"Field","name":{"kind":"Name","value":"logoDarkAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"imageOrg"}},{"kind":"Field","name":{"kind":"Name","value":"imagePath"}},{"kind":"Field","name":{"kind":"Name","value":"assetType"}},{"kind":"Field","name":{"kind":"Name","value":"deliveryType"}},{"kind":"Field","name":{"kind":"Name","value":"fallbackImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ticketmasterApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"ticketmasterAttractionId"}},{"kind":"Field","name":{"kind":"Name","value":"androidTicketmasterApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"androidTicketmasterScheme"}},{"kind":"Field","name":{"kind":"Name","value":"iosTicketmasterApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"ticketsEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"tournamentSiteURL"}},{"kind":"Field","name":{"kind":"Name","value":"useTournamentSiteURL"}}]}}]} as unknown as DocumentNode;
export const ApiScheduleFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ScheduleFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Schedule"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"tour"}},{"kind":"Field","name":{"kind":"Name","value":"seasonYear"}},{"kind":"Field","name":{"kind":"Name","value":"completed"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ScheduleMonthFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"upcoming"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ScheduleMonthFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"filters"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ScheduleTournamentFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ScheduleTournament"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"dateAccessibilityText"}},{"kind":"Field","name":{"kind":"Name","value":"tournamentName"}},{"kind":"Field","name":{"kind":"Name","value":"tournamentLogo"}},{"kind":"Field","name":{"kind":"Name","value":"tournamentLogoAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"imageOrg"}},{"kind":"Field","name":{"kind":"Name","value":"imagePath"}},{"kind":"Field","name":{"kind":"Name","value":"assetType"}},{"kind":"Field","name":{"kind":"Name","value":"deliveryType"}},{"kind":"Field","name":{"kind":"Name","value":"fallbackImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"stateCode"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"countryCode"}},{"kind":"Field","name":{"kind":"Name","value":"courseName"}},{"kind":"Field","name":{"kind":"Name","value":"champion"}},{"kind":"Field","name":{"kind":"Name","value":"championId"}},{"kind":"Field","name":{"kind":"Name","value":"champions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"playerId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"championEarnings"}},{"kind":"Field","name":{"kind":"Name","value":"beautyImage"}},{"kind":"Field","name":{"kind":"Name","value":"beautyImageAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"imageOrg"}},{"kind":"Field","name":{"kind":"Name","value":"imagePath"}},{"kind":"Field","name":{"kind":"Name","value":"assetType"}},{"kind":"Field","name":{"kind":"Name","value":"deliveryType"}},{"kind":"Field","name":{"kind":"Name","value":"fallbackImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"roundStatusDisplay"}},{"kind":"Field","name":{"kind":"Name","value":"roundDisplay"}},{"kind":"Field","name":{"kind":"Name","value":"roundStatus"}},{"kind":"Field","name":{"kind":"Name","value":"roundStatusColor"}},{"kind":"Field","name":{"kind":"Name","value":"leaderboardTakeover"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tournamentStatus"}},{"kind":"Field","name":{"kind":"Name","value":"sortDate"}},{"kind":"Field","name":{"kind":"Name","value":"sequenceNumber"}},{"kind":"Field","name":{"kind":"Name","value":"purse"}},{"kind":"Field","name":{"kind":"Name","value":"ticketsURL"}},{"kind":"Field","name":{"kind":"Name","value":"tourStandingHeading"}},{"kind":"Field","name":{"kind":"Name","value":"tourStandingValue"}},{"kind":"Field","name":{"kind":"Name","value":"display"}},{"kind":"Field","name":{"kind":"Name","value":"tournamentCategoryInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"logoLight"}},{"kind":"Field","name":{"kind":"Name","value":"logoLightAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"imageOrg"}},{"kind":"Field","name":{"kind":"Name","value":"imagePath"}},{"kind":"Field","name":{"kind":"Name","value":"assetType"}},{"kind":"Field","name":{"kind":"Name","value":"deliveryType"}},{"kind":"Field","name":{"kind":"Name","value":"fallbackImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"logoDark"}},{"kind":"Field","name":{"kind":"Name","value":"logoDarkAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"imageOrg"}},{"kind":"Field","name":{"kind":"Name","value":"imagePath"}},{"kind":"Field","name":{"kind":"Name","value":"assetType"}},{"kind":"Field","name":{"kind":"Name","value":"deliveryType"}},{"kind":"Field","name":{"kind":"Name","value":"fallbackImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ticketmasterApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"ticketmasterAttractionId"}},{"kind":"Field","name":{"kind":"Name","value":"androidTicketmasterApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"androidTicketmasterScheme"}},{"kind":"Field","name":{"kind":"Name","value":"iosTicketmasterApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"ticketsEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"tournamentSiteURL"}},{"kind":"Field","name":{"kind":"Name","value":"useTournamentSiteURL"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ScheduleMonthFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ScheduleMonth"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"year"}},{"kind":"Field","name":{"kind":"Name","value":"month"}},{"kind":"Field","name":{"kind":"Name","value":"monthSort"}},{"kind":"Field","name":{"kind":"Name","value":"tournaments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ScheduleTournamentFields"}}]}}]}}]} as unknown as DocumentNode;
export const ApiTournamentFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TournamentFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Tournament"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"tournamentName"}},{"kind":"Field","name":{"kind":"Name","value":"tournamentLogo"}},{"kind":"Field","name":{"kind":"Name","value":"tournamentLogoAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"imageOrg"}},{"kind":"Field","name":{"kind":"Name","value":"imagePath"}},{"kind":"Field","name":{"kind":"Name","value":"assetType"}},{"kind":"Field","name":{"kind":"Name","value":"deliveryType"}},{"kind":"Field","name":{"kind":"Name","value":"fallbackImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tournamentLocation"}},{"kind":"Field","name":{"kind":"Name","value":"tournamentStatus"}},{"kind":"Field","name":{"kind":"Name","value":"features"}},{"kind":"Field","name":{"kind":"Name","value":"formatType"}},{"kind":"Field","name":{"kind":"Name","value":"roundStatusDisplay"}},{"kind":"Field","name":{"kind":"Name","value":"roundDisplay"}},{"kind":"Field","name":{"kind":"Name","value":"roundStatus"}},{"kind":"Field","name":{"kind":"Name","value":"roundStatusColor"}},{"kind":"Field","name":{"kind":"Name","value":"leaderboardTakeover"}},{"kind":"Field","name":{"kind":"Name","value":"currentRound"}},{"kind":"Field","name":{"kind":"Name","value":"timezone"}},{"kind":"Field","name":{"kind":"Name","value":"seasonYear"}},{"kind":"Field","name":{"kind":"Name","value":"displayDate"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"scoredLevel"}},{"kind":"Field","name":{"kind":"Name","value":"events"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"eventName"}},{"kind":"Field","name":{"kind":"Name","value":"leaderboardId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"courses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"courseName"}},{"kind":"Field","name":{"kind":"Name","value":"courseCode"}},{"kind":"Field","name":{"kind":"Name","value":"hostCourse"}},{"kind":"Field","name":{"kind":"Name","value":"scoringLevel"}},{"kind":"Field","name":{"kind":"Name","value":"enabled"}},{"kind":"Field","name":{"kind":"Name","value":"features"}}]}},{"kind":"Field","name":{"kind":"Name","value":"weather"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"logo"}},{"kind":"Field","name":{"kind":"Name","value":"logoAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"imageOrg"}},{"kind":"Field","name":{"kind":"Name","value":"imagePath"}},{"kind":"Field","name":{"kind":"Name","value":"assetType"}},{"kind":"Field","name":{"kind":"Name","value":"deliveryType"}},{"kind":"Field","name":{"kind":"Name","value":"fallbackImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"logoDark"}},{"kind":"Field","name":{"kind":"Name","value":"logoDarkAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"imageOrg"}},{"kind":"Field","name":{"kind":"Name","value":"imagePath"}},{"kind":"Field","name":{"kind":"Name","value":"assetType"}},{"kind":"Field","name":{"kind":"Name","value":"deliveryType"}},{"kind":"Field","name":{"kind":"Name","value":"fallbackImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"logoAccessibility"}},{"kind":"Field","name":{"kind":"Name","value":"tempF"}},{"kind":"Field","name":{"kind":"Name","value":"tempC"}},{"kind":"Field","name":{"kind":"Name","value":"condition"}},{"kind":"Field","name":{"kind":"Name","value":"windDirection"}},{"kind":"Field","name":{"kind":"Name","value":"windSpeedMPH"}},{"kind":"Field","name":{"kind":"Name","value":"windSpeedKPH"}},{"kind":"Field","name":{"kind":"Name","value":"precipitation"}},{"kind":"Field","name":{"kind":"Name","value":"humidity"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ticketsURL"}},{"kind":"Field","name":{"kind":"Name","value":"tournamentSiteURL"}},{"kind":"Field","name":{"kind":"Name","value":"useTournamentSiteURL"}},{"kind":"Field","name":{"kind":"Name","value":"pdfUrl"}},{"kind":"Field","name":{"kind":"Name","value":"conductedByLabel"}},{"kind":"Field","name":{"kind":"Name","value":"conductedByLink"}},{"kind":"Field","name":{"kind":"Name","value":"beautyImage"}},{"kind":"Field","name":{"kind":"Name","value":"beautyImageAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"imageOrg"}},{"kind":"Field","name":{"kind":"Name","value":"imagePath"}},{"kind":"Field","name":{"kind":"Name","value":"assetType"}},{"kind":"Field","name":{"kind":"Name","value":"deliveryType"}},{"kind":"Field","name":{"kind":"Name","value":"fallbackImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"shouldSubscribe"}},{"kind":"Field","name":{"kind":"Name","value":"infoPath"}},{"kind":"Field","name":{"kind":"Name","value":"infoPathWebview"}},{"kind":"Field","name":{"kind":"Name","value":"howItWorks"}},{"kind":"Field","name":{"kind":"Name","value":"howItWorksPill"}},{"kind":"Field","name":{"kind":"Name","value":"howItWorksWebview"}},{"kind":"Field","name":{"kind":"Name","value":"hideRolexClock"}},{"kind":"Field","name":{"kind":"Name","value":"hideSov"}},{"kind":"Field","name":{"kind":"Name","value":"ticketsEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"headshotBaseUrl"}},{"kind":"Field","name":{"kind":"Name","value":"rightRailConfig"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"imageAltText"}},{"kind":"Field","name":{"kind":"Name","value":"buttonLink"}},{"kind":"Field","name":{"kind":"Name","value":"buttonText"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tournamentCategoryInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"logoLight"}},{"kind":"Field","name":{"kind":"Name","value":"logoLightAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"imageOrg"}},{"kind":"Field","name":{"kind":"Name","value":"imagePath"}},{"kind":"Field","name":{"kind":"Name","value":"assetType"}},{"kind":"Field","name":{"kind":"Name","value":"deliveryType"}},{"kind":"Field","name":{"kind":"Name","value":"fallbackImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"logoDark"}},{"kind":"Field","name":{"kind":"Name","value":"logoDarkAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"imageOrg"}},{"kind":"Field","name":{"kind":"Name","value":"imagePath"}},{"kind":"Field","name":{"kind":"Name","value":"assetType"}},{"kind":"Field","name":{"kind":"Name","value":"deliveryType"}},{"kind":"Field","name":{"kind":"Name","value":"fallbackImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}},{"kind":"Field","name":{"kind":"Name","value":"disabledScorecardTabs"}}]}}]} as unknown as DocumentNode;
 const ApiLeaderboardV3Document = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"LeaderboardV3"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"leaderboardV3Id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"leaderboardV3"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"leaderboardV3Id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LeaderboardV3Fields"}},{"kind":"Field","name":{"kind":"Name","value":"players"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PlayerRowV3Fields"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"InformationRowFields"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LeaderboardV3Fields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LeaderboardV3"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"tournamentId"}},{"kind":"Field","name":{"kind":"Name","value":"leaderboardRoundHeader"}},{"kind":"Field","name":{"kind":"Name","value":"formatType"}},{"kind":"Field","name":{"kind":"Name","value":"timezone"}},{"kind":"Field","name":{"kind":"Name","value":"winner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"totalStrokes"}},{"kind":"Field","name":{"kind":"Name","value":"totalScore"}},{"kind":"Field","name":{"kind":"Name","value":"countryFlag"}},{"kind":"Field","name":{"kind":"Name","value":"countryName"}},{"kind":"Field","name":{"kind":"Name","value":"purse"}},{"kind":"Field","name":{"kind":"Name","value":"displayPoints"}},{"kind":"Field","name":{"kind":"Name","value":"displayPurse"}},{"kind":"Field","name":{"kind":"Name","value":"points"}},{"kind":"Field","name":{"kind":"Name","value":"seed"}},{"kind":"Field","name":{"kind":"Name","value":"pointsLabel"}},{"kind":"Field","name":{"kind":"Name","value":"winnerIcon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"roundScores"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"winners"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"totalStrokes"}},{"kind":"Field","name":{"kind":"Name","value":"totalScore"}},{"kind":"Field","name":{"kind":"Name","value":"countryFlag"}},{"kind":"Field","name":{"kind":"Name","value":"countryName"}},{"kind":"Field","name":{"kind":"Name","value":"purse"}},{"kind":"Field","name":{"kind":"Name","value":"displayPoints"}},{"kind":"Field","name":{"kind":"Name","value":"displayPurse"}},{"kind":"Field","name":{"kind":"Name","value":"points"}},{"kind":"Field","name":{"kind":"Name","value":"seed"}},{"kind":"Field","name":{"kind":"Name","value":"pointsLabel"}}]}},{"kind":"Field","name":{"kind":"Name","value":"courses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"courseName"}},{"kind":"Field","name":{"kind":"Name","value":"courseCode"}},{"kind":"Field","name":{"kind":"Name","value":"hostCourse"}},{"kind":"Field","name":{"kind":"Name","value":"scoringLevel"}},{"kind":"Field","name":{"kind":"Name","value":"enabled"}},{"kind":"Field","name":{"kind":"Name","value":"features"}}]}},{"kind":"Field","name":{"kind":"Name","value":"messages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"messageText"}},{"kind":"Field","name":{"kind":"Name","value":"messageIcon"}},{"kind":"Field","name":{"kind":"Name","value":"messageLink"}},{"kind":"Field","name":{"kind":"Name","value":"webViewLink"}},{"kind":"Field","name":{"kind":"Name","value":"externalLink"}},{"kind":"Field","name":{"kind":"Name","value":"platforms"}},{"kind":"Field","name":{"kind":"Name","value":"timing"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tourcastURL"}},{"kind":"Field","name":{"kind":"Name","value":"tourcastURLWeb"}},{"kind":"Field","name":{"kind":"Name","value":"tourcastURI"}},{"kind":"Field","name":{"kind":"Name","value":"tournamentStatus"}},{"kind":"Field","name":{"kind":"Name","value":"rounds"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"roundNumber"}},{"kind":"Field","name":{"kind":"Name","value":"displayText"}}]}},{"kind":"Field","name":{"kind":"Name","value":"isPlayoffActive"}},{"kind":"Field","name":{"kind":"Name","value":"scorecardEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"profileEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"subEvent"}},{"kind":"Field","name":{"kind":"Name","value":"leaderboardFeatures"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"new"}},{"kind":"Field","name":{"kind":"Name","value":"tooltipText"}},{"kind":"Field","name":{"kind":"Name","value":"tooltipTitle"}},{"kind":"Field","name":{"kind":"Name","value":"fieldStatType"}},{"kind":"Field","name":{"kind":"Name","value":"leaderboardFeatures"}},{"kind":"Field","name":{"kind":"Name","value":"sponsor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"sponsorLogo"}},{"kind":"Field","name":{"kind":"Name","value":"sponsorLogoAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"imageOrg"}},{"kind":"Field","name":{"kind":"Name","value":"imagePath"}},{"kind":"Field","name":{"kind":"Name","value":"assetType"}},{"kind":"Field","name":{"kind":"Name","value":"deliveryType"}},{"kind":"Field","name":{"kind":"Name","value":"fallbackImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"sponsorLogoDark"}},{"kind":"Field","name":{"kind":"Name","value":"sponsorLogoDarkAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"imageOrg"}},{"kind":"Field","name":{"kind":"Name","value":"imagePath"}},{"kind":"Field","name":{"kind":"Name","value":"assetType"}},{"kind":"Field","name":{"kind":"Name","value":"deliveryType"}},{"kind":"Field","name":{"kind":"Name","value":"fallbackImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"sponsorText"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"standingsEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"standingsHeader"}},{"kind":"Field","name":{"kind":"Name","value":"hideSov"}},{"kind":"Field","name":{"kind":"Name","value":"disableOdds"}},{"kind":"Field","name":{"kind":"Name","value":"disableBettingProfileColumn"}},{"kind":"Field","name":{"kind":"Name","value":"cutLineProbabilities"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"projectedCutLine"}},{"kind":"Field","name":{"kind":"Name","value":"probableCutLine"}},{"kind":"Field","name":{"kind":"Name","value":"sponsorLogo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"imageOrg"}},{"kind":"Field","name":{"kind":"Name","value":"imagePath"}},{"kind":"Field","name":{"kind":"Name","value":"assetType"}},{"kind":"Field","name":{"kind":"Name","value":"deliveryType"}},{"kind":"Field","name":{"kind":"Name","value":"fallbackImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"sponsorName"}},{"kind":"Field","name":{"kind":"Name","value":"lastUpdated"}},{"kind":"Field","name":{"kind":"Name","value":"possibleCutLines"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"probability"}},{"kind":"Field","name":{"kind":"Name","value":"displayProbability"}}]}},{"kind":"Field","name":{"kind":"Name","value":"new"}}]}},{"kind":"Field","name":{"kind":"Name","value":"disableLeaderboard"}},{"kind":"Field","name":{"kind":"Name","value":"bubblePill"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iconLight"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"imageOrg"}},{"kind":"Field","name":{"kind":"Name","value":"imagePath"}},{"kind":"Field","name":{"kind":"Name","value":"assetType"}},{"kind":"Field","name":{"kind":"Name","value":"deliveryType"}},{"kind":"Field","name":{"kind":"Name","value":"fallbackImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"iconDark"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"imageOrg"}},{"kind":"Field","name":{"kind":"Name","value":"imagePath"}},{"kind":"Field","name":{"kind":"Name","value":"assetType"}},{"kind":"Field","name":{"kind":"Name","value":"deliveryType"}},{"kind":"Field","name":{"kind":"Name","value":"fallbackImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pillText"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PlayerRowV3Fields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlayerRowV3"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"leaderboardSortOrder"}},{"kind":"Field","name":{"kind":"Name","value":"player"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"shortName"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"abbreviations"}},{"kind":"Field","name":{"kind":"Name","value":"abbreviationsAccessibilityText"}},{"kind":"Field","name":{"kind":"Name","value":"amateur"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"countryFlag"}},{"kind":"Field","name":{"kind":"Name","value":"lineColor"}},{"kind":"Field","name":{"kind":"Name","value":"seed"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"tourBound"}},{"kind":"Field","name":{"kind":"Name","value":"assets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TourBoundAsset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"tourBoundLogo"}},{"kind":"Field","name":{"kind":"Name","value":"tourBoundLogoDark"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"bettingProfile"}},{"kind":"Field","name":{"kind":"Name","value":"playerBioOverrideLink"}}]}},{"kind":"Field","name":{"kind":"Name","value":"scoringData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"groupNumber"}},{"kind":"Field","name":{"kind":"Name","value":"currentRound"}},{"kind":"Field","name":{"kind":"Name","value":"backNine"}},{"kind":"Field","name":{"kind":"Name","value":"playerState"}},{"kind":"Field","name":{"kind":"Name","value":"teeTime"}},{"kind":"Field","name":{"kind":"Name","value":"totalStrokes"}},{"kind":"Field","name":{"kind":"Name","value":"totalStrokesSort"}},{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"totalSort"}},{"kind":"Field","name":{"kind":"Name","value":"thru"}},{"kind":"Field","name":{"kind":"Name","value":"thruSort"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"scoreSort"}},{"kind":"Field","name":{"kind":"Name","value":"movementDirection"}},{"kind":"Field","name":{"kind":"Name","value":"movementAmount"}},{"kind":"Field","name":{"kind":"Name","value":"movementSort"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"rounds"}},{"kind":"Field","name":{"kind":"Name","value":"roundDisplaySort"}},{"kind":"Field","name":{"kind":"Name","value":"roundHeader"}},{"kind":"Field","name":{"kind":"Name","value":"roundStatus"}},{"kind":"Field","name":{"kind":"Name","value":"courseId"}},{"kind":"Field","name":{"kind":"Name","value":"official"}},{"kind":"Field","name":{"kind":"Name","value":"officialSort"}},{"kind":"Field","name":{"kind":"Name","value":"projected"}},{"kind":"Field","name":{"kind":"Name","value":"projectedSort"}},{"kind":"Field","name":{"kind":"Name","value":"rankingMovement"}},{"kind":"Field","name":{"kind":"Name","value":"rankingMovementAmount"}},{"kind":"Field","name":{"kind":"Name","value":"rankingMovementAmountSort"}},{"kind":"Field","name":{"kind":"Name","value":"rankLogoLight"}},{"kind":"Field","name":{"kind":"Name","value":"rankLogoDark"}},{"kind":"Field","name":{"kind":"Name","value":"tooltipText"}},{"kind":"Field","name":{"kind":"Name","value":"tooltipTitle"}},{"kind":"Field","name":{"kind":"Name","value":"oddsToWin"}},{"kind":"Field","name":{"kind":"Name","value":"oddsSwing"}},{"kind":"Field","name":{"kind":"Name","value":"oddsOptionId"}},{"kind":"Field","name":{"kind":"Name","value":"oddsSort"}},{"kind":"Field","name":{"kind":"Name","value":"hasStoryContent"}},{"kind":"Field","name":{"kind":"Name","value":"storyContentRound"}},{"kind":"Field","name":{"kind":"Name","value":"storyContentRounds"}},{"kind":"Field","name":{"kind":"Name","value":"playerIcon"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"InformationRowFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"InformationRow"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"leaderboardSortOrder"}},{"kind":"Field","name":{"kind":"Name","value":"displayText"}},{"kind":"Field","name":{"kind":"Name","value":"mobileDisplayText"}},{"kind":"Field","name":{"kind":"Name","value":"sponsorName"}}]}}]} as unknown as DocumentNode;
 const ApiLeaderboardHoleByHoleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"LeaderboardHoleByHole"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tournamentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"round"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"leaderboardHoleByHole"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"tournamentId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tournamentId"}}},{"kind":"Argument","name":{"kind":"Name","value":"round"},"value":{"kind":"Variable","name":{"kind":"Name","value":"round"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LeaderboardHoleByHoleFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LeaderboardHoleByHoleFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LeaderboardHoleByHole"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"tournamentId"}},{"kind":"Field","name":{"kind":"Name","value":"currentRound"}},{"kind":"Field","name":{"kind":"Name","value":"rounds"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"roundNumber"}},{"kind":"Field","name":{"kind":"Name","value":"displayText"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tournamentName"}},{"kind":"Field","name":{"kind":"Name","value":"holeHeaders"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"holeNumber"}},{"kind":"Field","name":{"kind":"Name","value":"hole"}},{"kind":"Field","name":{"kind":"Name","value":"par"}}]}},{"kind":"Field","name":{"kind":"Name","value":"courseHoleHeaders"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"courseId"}},{"kind":"Field","name":{"kind":"Name","value":"holeHeaders"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"holeNumber"}},{"kind":"Field","name":{"kind":"Name","value":"order"}},{"kind":"Field","name":{"kind":"Name","value":"displayValue"}},{"kind":"Field","name":{"kind":"Name","value":"par"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"courses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"courseName"}},{"kind":"Field","name":{"kind":"Name","value":"courseCode"}},{"kind":"Field","name":{"kind":"Name","value":"hostCourse"}},{"kind":"Field","name":{"kind":"Name","value":"scoringLevel"}},{"kind":"Field","name":{"kind":"Name","value":"enabled"}},{"kind":"Field","name":{"kind":"Name","value":"features"}}]}},{"kind":"Field","name":{"kind":"Name","value":"playerData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"playerId"}},{"kind":"Field","name":{"kind":"Name","value":"courseId"}},{"kind":"Field","name":{"kind":"Name","value":"courseCode"}},{"kind":"Field","name":{"kind":"Name","value":"scores"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"holeNumber"}},{"kind":"Field","name":{"kind":"Name","value":"par"}},{"kind":"Field","name":{"kind":"Name","value":"yardage"}},{"kind":"Field","name":{"kind":"Name","value":"sequenceNumber"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"roundScore"}}]}},{"kind":"Field","name":{"kind":"Name","value":"out"}},{"kind":"Field","name":{"kind":"Name","value":"in"}},{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"totalToPar"}}]}}]}}]} as unknown as DocumentNode;
 const ApiScheduleYearsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ScheduleYears"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tourCode"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TourCode"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"scheduleYears"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"tourCode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tourCode"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"years"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"default"}},{"kind":"Field","name":{"kind":"Name","value":"displayValue"}},{"kind":"Field","name":{"kind":"Name","value":"queryValue"}}]}}]}}]}}]} as unknown as DocumentNode;
 const ApiScheduleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Schedule"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tourCode"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"year"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"schedule"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"tourCode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tourCode"}}},{"kind":"Argument","name":{"kind":"Name","value":"year"},"value":{"kind":"Variable","name":{"kind":"Name","value":"year"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ScheduleFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ScheduleTournamentFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ScheduleTournament"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"dateAccessibilityText"}},{"kind":"Field","name":{"kind":"Name","value":"tournamentName"}},{"kind":"Field","name":{"kind":"Name","value":"tournamentLogo"}},{"kind":"Field","name":{"kind":"Name","value":"tournamentLogoAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"imageOrg"}},{"kind":"Field","name":{"kind":"Name","value":"imagePath"}},{"kind":"Field","name":{"kind":"Name","value":"assetType"}},{"kind":"Field","name":{"kind":"Name","value":"deliveryType"}},{"kind":"Field","name":{"kind":"Name","value":"fallbackImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"stateCode"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"countryCode"}},{"kind":"Field","name":{"kind":"Name","value":"courseName"}},{"kind":"Field","name":{"kind":"Name","value":"champion"}},{"kind":"Field","name":{"kind":"Name","value":"championId"}},{"kind":"Field","name":{"kind":"Name","value":"champions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"playerId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"championEarnings"}},{"kind":"Field","name":{"kind":"Name","value":"beautyImage"}},{"kind":"Field","name":{"kind":"Name","value":"beautyImageAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"imageOrg"}},{"kind":"Field","name":{"kind":"Name","value":"imagePath"}},{"kind":"Field","name":{"kind":"Name","value":"assetType"}},{"kind":"Field","name":{"kind":"Name","value":"deliveryType"}},{"kind":"Field","name":{"kind":"Name","value":"fallbackImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"roundStatusDisplay"}},{"kind":"Field","name":{"kind":"Name","value":"roundDisplay"}},{"kind":"Field","name":{"kind":"Name","value":"roundStatus"}},{"kind":"Field","name":{"kind":"Name","value":"roundStatusColor"}},{"kind":"Field","name":{"kind":"Name","value":"leaderboardTakeover"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tournamentStatus"}},{"kind":"Field","name":{"kind":"Name","value":"sortDate"}},{"kind":"Field","name":{"kind":"Name","value":"sequenceNumber"}},{"kind":"Field","name":{"kind":"Name","value":"purse"}},{"kind":"Field","name":{"kind":"Name","value":"ticketsURL"}},{"kind":"Field","name":{"kind":"Name","value":"tourStandingHeading"}},{"kind":"Field","name":{"kind":"Name","value":"tourStandingValue"}},{"kind":"Field","name":{"kind":"Name","value":"display"}},{"kind":"Field","name":{"kind":"Name","value":"tournamentCategoryInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"logoLight"}},{"kind":"Field","name":{"kind":"Name","value":"logoLightAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"imageOrg"}},{"kind":"Field","name":{"kind":"Name","value":"imagePath"}},{"kind":"Field","name":{"kind":"Name","value":"assetType"}},{"kind":"Field","name":{"kind":"Name","value":"deliveryType"}},{"kind":"Field","name":{"kind":"Name","value":"fallbackImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"logoDark"}},{"kind":"Field","name":{"kind":"Name","value":"logoDarkAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"imageOrg"}},{"kind":"Field","name":{"kind":"Name","value":"imagePath"}},{"kind":"Field","name":{"kind":"Name","value":"assetType"}},{"kind":"Field","name":{"kind":"Name","value":"deliveryType"}},{"kind":"Field","name":{"kind":"Name","value":"fallbackImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ticketmasterApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"ticketmasterAttractionId"}},{"kind":"Field","name":{"kind":"Name","value":"androidTicketmasterApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"androidTicketmasterScheme"}},{"kind":"Field","name":{"kind":"Name","value":"iosTicketmasterApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"ticketsEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"tournamentSiteURL"}},{"kind":"Field","name":{"kind":"Name","value":"useTournamentSiteURL"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ScheduleMonthFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ScheduleMonth"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"year"}},{"kind":"Field","name":{"kind":"Name","value":"month"}},{"kind":"Field","name":{"kind":"Name","value":"monthSort"}},{"kind":"Field","name":{"kind":"Name","value":"tournaments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ScheduleTournamentFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ScheduleFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Schedule"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"tour"}},{"kind":"Field","name":{"kind":"Name","value":"seasonYear"}},{"kind":"Field","name":{"kind":"Name","value":"completed"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ScheduleMonthFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"upcoming"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ScheduleMonthFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"filters"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode;
 const ApiCompleteScheduleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CompleteSchedule"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tourCode"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TourCode"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"completeSchedule"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"tourCode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tourCode"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ScheduleFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ScheduleTournamentFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ScheduleTournament"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"dateAccessibilityText"}},{"kind":"Field","name":{"kind":"Name","value":"tournamentName"}},{"kind":"Field","name":{"kind":"Name","value":"tournamentLogo"}},{"kind":"Field","name":{"kind":"Name","value":"tournamentLogoAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"imageOrg"}},{"kind":"Field","name":{"kind":"Name","value":"imagePath"}},{"kind":"Field","name":{"kind":"Name","value":"assetType"}},{"kind":"Field","name":{"kind":"Name","value":"deliveryType"}},{"kind":"Field","name":{"kind":"Name","value":"fallbackImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"stateCode"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"countryCode"}},{"kind":"Field","name":{"kind":"Name","value":"courseName"}},{"kind":"Field","name":{"kind":"Name","value":"champion"}},{"kind":"Field","name":{"kind":"Name","value":"championId"}},{"kind":"Field","name":{"kind":"Name","value":"champions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"playerId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"championEarnings"}},{"kind":"Field","name":{"kind":"Name","value":"beautyImage"}},{"kind":"Field","name":{"kind":"Name","value":"beautyImageAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"imageOrg"}},{"kind":"Field","name":{"kind":"Name","value":"imagePath"}},{"kind":"Field","name":{"kind":"Name","value":"assetType"}},{"kind":"Field","name":{"kind":"Name","value":"deliveryType"}},{"kind":"Field","name":{"kind":"Name","value":"fallbackImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"roundStatusDisplay"}},{"kind":"Field","name":{"kind":"Name","value":"roundDisplay"}},{"kind":"Field","name":{"kind":"Name","value":"roundStatus"}},{"kind":"Field","name":{"kind":"Name","value":"roundStatusColor"}},{"kind":"Field","name":{"kind":"Name","value":"leaderboardTakeover"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tournamentStatus"}},{"kind":"Field","name":{"kind":"Name","value":"sortDate"}},{"kind":"Field","name":{"kind":"Name","value":"sequenceNumber"}},{"kind":"Field","name":{"kind":"Name","value":"purse"}},{"kind":"Field","name":{"kind":"Name","value":"ticketsURL"}},{"kind":"Field","name":{"kind":"Name","value":"tourStandingHeading"}},{"kind":"Field","name":{"kind":"Name","value":"tourStandingValue"}},{"kind":"Field","name":{"kind":"Name","value":"display"}},{"kind":"Field","name":{"kind":"Name","value":"tournamentCategoryInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"logoLight"}},{"kind":"Field","name":{"kind":"Name","value":"logoLightAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"imageOrg"}},{"kind":"Field","name":{"kind":"Name","value":"imagePath"}},{"kind":"Field","name":{"kind":"Name","value":"assetType"}},{"kind":"Field","name":{"kind":"Name","value":"deliveryType"}},{"kind":"Field","name":{"kind":"Name","value":"fallbackImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"logoDark"}},{"kind":"Field","name":{"kind":"Name","value":"logoDarkAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"imageOrg"}},{"kind":"Field","name":{"kind":"Name","value":"imagePath"}},{"kind":"Field","name":{"kind":"Name","value":"assetType"}},{"kind":"Field","name":{"kind":"Name","value":"deliveryType"}},{"kind":"Field","name":{"kind":"Name","value":"fallbackImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ticketmasterApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"ticketmasterAttractionId"}},{"kind":"Field","name":{"kind":"Name","value":"androidTicketmasterApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"androidTicketmasterScheme"}},{"kind":"Field","name":{"kind":"Name","value":"iosTicketmasterApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"ticketsEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"tournamentSiteURL"}},{"kind":"Field","name":{"kind":"Name","value":"useTournamentSiteURL"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ScheduleMonthFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ScheduleMonth"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"year"}},{"kind":"Field","name":{"kind":"Name","value":"month"}},{"kind":"Field","name":{"kind":"Name","value":"monthSort"}},{"kind":"Field","name":{"kind":"Name","value":"tournaments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ScheduleTournamentFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ScheduleFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Schedule"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"tour"}},{"kind":"Field","name":{"kind":"Name","value":"seasonYear"}},{"kind":"Field","name":{"kind":"Name","value":"completed"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ScheduleMonthFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"upcoming"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ScheduleMonthFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"filters"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode;
 const ApiUpcomingScheduleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UpcomingSchedule"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tourCode"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"upcomingSchedule"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"tourCode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tourCode"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"filters"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tournaments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ScheduleTournamentFields"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ScheduleTournamentFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ScheduleTournament"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"dateAccessibilityText"}},{"kind":"Field","name":{"kind":"Name","value":"tournamentName"}},{"kind":"Field","name":{"kind":"Name","value":"tournamentLogo"}},{"kind":"Field","name":{"kind":"Name","value":"tournamentLogoAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"imageOrg"}},{"kind":"Field","name":{"kind":"Name","value":"imagePath"}},{"kind":"Field","name":{"kind":"Name","value":"assetType"}},{"kind":"Field","name":{"kind":"Name","value":"deliveryType"}},{"kind":"Field","name":{"kind":"Name","value":"fallbackImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"stateCode"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"countryCode"}},{"kind":"Field","name":{"kind":"Name","value":"courseName"}},{"kind":"Field","name":{"kind":"Name","value":"champion"}},{"kind":"Field","name":{"kind":"Name","value":"championId"}},{"kind":"Field","name":{"kind":"Name","value":"champions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"playerId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"championEarnings"}},{"kind":"Field","name":{"kind":"Name","value":"beautyImage"}},{"kind":"Field","name":{"kind":"Name","value":"beautyImageAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"imageOrg"}},{"kind":"Field","name":{"kind":"Name","value":"imagePath"}},{"kind":"Field","name":{"kind":"Name","value":"assetType"}},{"kind":"Field","name":{"kind":"Name","value":"deliveryType"}},{"kind":"Field","name":{"kind":"Name","value":"fallbackImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"roundStatusDisplay"}},{"kind":"Field","name":{"kind":"Name","value":"roundDisplay"}},{"kind":"Field","name":{"kind":"Name","value":"roundStatus"}},{"kind":"Field","name":{"kind":"Name","value":"roundStatusColor"}},{"kind":"Field","name":{"kind":"Name","value":"leaderboardTakeover"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tournamentStatus"}},{"kind":"Field","name":{"kind":"Name","value":"sortDate"}},{"kind":"Field","name":{"kind":"Name","value":"sequenceNumber"}},{"kind":"Field","name":{"kind":"Name","value":"purse"}},{"kind":"Field","name":{"kind":"Name","value":"ticketsURL"}},{"kind":"Field","name":{"kind":"Name","value":"tourStandingHeading"}},{"kind":"Field","name":{"kind":"Name","value":"tourStandingValue"}},{"kind":"Field","name":{"kind":"Name","value":"display"}},{"kind":"Field","name":{"kind":"Name","value":"tournamentCategoryInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"logoLight"}},{"kind":"Field","name":{"kind":"Name","value":"logoLightAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"imageOrg"}},{"kind":"Field","name":{"kind":"Name","value":"imagePath"}},{"kind":"Field","name":{"kind":"Name","value":"assetType"}},{"kind":"Field","name":{"kind":"Name","value":"deliveryType"}},{"kind":"Field","name":{"kind":"Name","value":"fallbackImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"logoDark"}},{"kind":"Field","name":{"kind":"Name","value":"logoDarkAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"imageOrg"}},{"kind":"Field","name":{"kind":"Name","value":"imagePath"}},{"kind":"Field","name":{"kind":"Name","value":"assetType"}},{"kind":"Field","name":{"kind":"Name","value":"deliveryType"}},{"kind":"Field","name":{"kind":"Name","value":"fallbackImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ticketmasterApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"ticketmasterAttractionId"}},{"kind":"Field","name":{"kind":"Name","value":"androidTicketmasterApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"androidTicketmasterScheme"}},{"kind":"Field","name":{"kind":"Name","value":"iosTicketmasterApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"ticketsEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"tournamentSiteURL"}},{"kind":"Field","name":{"kind":"Name","value":"useTournamentSiteURL"}}]}}]} as unknown as DocumentNode;
 const ApiTournamentsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Tournaments"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ids"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"tournaments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"ids"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ids"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TournamentFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TournamentFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Tournament"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"tournamentName"}},{"kind":"Field","name":{"kind":"Name","value":"tournamentLogo"}},{"kind":"Field","name":{"kind":"Name","value":"tournamentLogoAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"imageOrg"}},{"kind":"Field","name":{"kind":"Name","value":"imagePath"}},{"kind":"Field","name":{"kind":"Name","value":"assetType"}},{"kind":"Field","name":{"kind":"Name","value":"deliveryType"}},{"kind":"Field","name":{"kind":"Name","value":"fallbackImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tournamentLocation"}},{"kind":"Field","name":{"kind":"Name","value":"tournamentStatus"}},{"kind":"Field","name":{"kind":"Name","value":"features"}},{"kind":"Field","name":{"kind":"Name","value":"formatType"}},{"kind":"Field","name":{"kind":"Name","value":"roundStatusDisplay"}},{"kind":"Field","name":{"kind":"Name","value":"roundDisplay"}},{"kind":"Field","name":{"kind":"Name","value":"roundStatus"}},{"kind":"Field","name":{"kind":"Name","value":"roundStatusColor"}},{"kind":"Field","name":{"kind":"Name","value":"leaderboardTakeover"}},{"kind":"Field","name":{"kind":"Name","value":"currentRound"}},{"kind":"Field","name":{"kind":"Name","value":"timezone"}},{"kind":"Field","name":{"kind":"Name","value":"seasonYear"}},{"kind":"Field","name":{"kind":"Name","value":"displayDate"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"scoredLevel"}},{"kind":"Field","name":{"kind":"Name","value":"events"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"eventName"}},{"kind":"Field","name":{"kind":"Name","value":"leaderboardId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"courses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"courseName"}},{"kind":"Field","name":{"kind":"Name","value":"courseCode"}},{"kind":"Field","name":{"kind":"Name","value":"hostCourse"}},{"kind":"Field","name":{"kind":"Name","value":"scoringLevel"}},{"kind":"Field","name":{"kind":"Name","value":"enabled"}},{"kind":"Field","name":{"kind":"Name","value":"features"}}]}},{"kind":"Field","name":{"kind":"Name","value":"weather"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"logo"}},{"kind":"Field","name":{"kind":"Name","value":"logoAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"imageOrg"}},{"kind":"Field","name":{"kind":"Name","value":"imagePath"}},{"kind":"Field","name":{"kind":"Name","value":"assetType"}},{"kind":"Field","name":{"kind":"Name","value":"deliveryType"}},{"kind":"Field","name":{"kind":"Name","value":"fallbackImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"logoDark"}},{"kind":"Field","name":{"kind":"Name","value":"logoDarkAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"imageOrg"}},{"kind":"Field","name":{"kind":"Name","value":"imagePath"}},{"kind":"Field","name":{"kind":"Name","value":"assetType"}},{"kind":"Field","name":{"kind":"Name","value":"deliveryType"}},{"kind":"Field","name":{"kind":"Name","value":"fallbackImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"logoAccessibility"}},{"kind":"Field","name":{"kind":"Name","value":"tempF"}},{"kind":"Field","name":{"kind":"Name","value":"tempC"}},{"kind":"Field","name":{"kind":"Name","value":"condition"}},{"kind":"Field","name":{"kind":"Name","value":"windDirection"}},{"kind":"Field","name":{"kind":"Name","value":"windSpeedMPH"}},{"kind":"Field","name":{"kind":"Name","value":"windSpeedKPH"}},{"kind":"Field","name":{"kind":"Name","value":"precipitation"}},{"kind":"Field","name":{"kind":"Name","value":"humidity"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ticketsURL"}},{"kind":"Field","name":{"kind":"Name","value":"tournamentSiteURL"}},{"kind":"Field","name":{"kind":"Name","value":"useTournamentSiteURL"}},{"kind":"Field","name":{"kind":"Name","value":"pdfUrl"}},{"kind":"Field","name":{"kind":"Name","value":"conductedByLabel"}},{"kind":"Field","name":{"kind":"Name","value":"conductedByLink"}},{"kind":"Field","name":{"kind":"Name","value":"beautyImage"}},{"kind":"Field","name":{"kind":"Name","value":"beautyImageAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"imageOrg"}},{"kind":"Field","name":{"kind":"Name","value":"imagePath"}},{"kind":"Field","name":{"kind":"Name","value":"assetType"}},{"kind":"Field","name":{"kind":"Name","value":"deliveryType"}},{"kind":"Field","name":{"kind":"Name","value":"fallbackImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"shouldSubscribe"}},{"kind":"Field","name":{"kind":"Name","value":"infoPath"}},{"kind":"Field","name":{"kind":"Name","value":"infoPathWebview"}},{"kind":"Field","name":{"kind":"Name","value":"howItWorks"}},{"kind":"Field","name":{"kind":"Name","value":"howItWorksPill"}},{"kind":"Field","name":{"kind":"Name","value":"howItWorksWebview"}},{"kind":"Field","name":{"kind":"Name","value":"hideRolexClock"}},{"kind":"Field","name":{"kind":"Name","value":"hideSov"}},{"kind":"Field","name":{"kind":"Name","value":"ticketsEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"headshotBaseUrl"}},{"kind":"Field","name":{"kind":"Name","value":"rightRailConfig"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"imageAltText"}},{"kind":"Field","name":{"kind":"Name","value":"buttonLink"}},{"kind":"Field","name":{"kind":"Name","value":"buttonText"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tournamentCategoryInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"logoLight"}},{"kind":"Field","name":{"kind":"Name","value":"logoLightAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"imageOrg"}},{"kind":"Field","name":{"kind":"Name","value":"imagePath"}},{"kind":"Field","name":{"kind":"Name","value":"assetType"}},{"kind":"Field","name":{"kind":"Name","value":"deliveryType"}},{"kind":"Field","name":{"kind":"Name","value":"fallbackImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"logoDark"}},{"kind":"Field","name":{"kind":"Name","value":"logoDarkAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"imageOrg"}},{"kind":"Field","name":{"kind":"Name","value":"imagePath"}},{"kind":"Field","name":{"kind":"Name","value":"assetType"}},{"kind":"Field","name":{"kind":"Name","value":"deliveryType"}},{"kind":"Field","name":{"kind":"Name","value":"fallbackImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}},{"kind":"Field","name":{"kind":"Name","value":"disabledScorecardTabs"}}]}}]} as unknown as DocumentNode;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    LeaderboardV3(variables: ApiLeaderboardV3QueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<ApiLeaderboardV3Query> {
      return withWrapper((wrappedRequestHeaders) => client.request<ApiLeaderboardV3Query>({ document: ApiLeaderboardV3Document, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'LeaderboardV3', 'query', variables);
    },
    LeaderboardHoleByHole(variables: ApiLeaderboardHoleByHoleQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<ApiLeaderboardHoleByHoleQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ApiLeaderboardHoleByHoleQuery>({ document: ApiLeaderboardHoleByHoleDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'LeaderboardHoleByHole', 'query', variables);
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
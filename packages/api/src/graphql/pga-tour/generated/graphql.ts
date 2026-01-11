import type { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  AWSDateTime: { input: any; output: any; }
  AWSTimestamp: { input: any; output: any; }
};

export type ApiArHole = {
  readonly __typename: 'ARHole';
  readonly holeNumber: Scalars['Int']['output'];
};

export type ApiAbbreviations = {
  readonly __typename: 'Abbreviations';
  readonly description?: Maybe<Scalars['String']['output']>;
  readonly key: Scalars['String']['output'];
  readonly title: Scalars['String']['output'];
};

export type ApiAdConfig = {
  readonly __typename: 'AdConfig';
  readonly aon?: Maybe<ApiAdTagConfig>;
  readonly aonSection?: Maybe<ApiAdTagConfig>;
  readonly audio?: Maybe<ApiAdTagConfig>;
  readonly comcastSection?: Maybe<ApiAdTagConfig>;
  readonly comcastTop10?: Maybe<ApiAdTagConfig>;
  readonly config: ApiGlobalAdConfig;
  readonly course?: Maybe<ApiAdTagConfig>;
  readonly cupLeaderboardGroup?: Maybe<ApiAdTagConfig>;
  readonly cupLeaderboardSingles?: Maybe<ApiAdTagConfig>;
  readonly cupTeeTimesGroup?: Maybe<ApiAdTagConfig>;
  readonly cupTeeTimesSingles?: Maybe<ApiAdTagConfig>;
  readonly dpwtRankings?: Maybe<ApiAdTagConfig>;
  readonly fantasy?: Maybe<ApiAdTagConfig>;
  readonly fedexCup?: Maybe<ApiAdTagConfig>;
  readonly fedexcupSection?: Maybe<ApiAdTagConfig>;
  readonly fortinetCup?: Maybe<ApiAdTagConfig>;
  readonly fortinetcupSection?: Maybe<ApiAdTagConfig>;
  readonly golfBet?: Maybe<ApiAdTagConfig>;
  readonly groupScorecard?: Maybe<ApiAdTagConfig>;
  readonly groupStageLeaderboard?: Maybe<ApiAdTagConfig>;
  readonly groupStageStandings?: Maybe<ApiAdTagConfig>;
  readonly groupstageStandings?: Maybe<ApiAdTagConfig>;
  readonly homepage?: Maybe<ApiAdTagConfig>;
  readonly knockoutLeaderboard?: Maybe<ApiAdTagConfig>;
  readonly leaderboard?: Maybe<ApiAdTagConfig>;
  readonly leaderboardCutline?: Maybe<ApiAdTagConfig>;
  readonly leaderboardFavorites?: Maybe<ApiAdTagConfig>;
  readonly leaderboardHoleByHole?: Maybe<ApiAdTagConfig>;
  readonly leaderboardLandscape?: Maybe<ApiAdTagConfig>;
  readonly leaderboardLandscapeHoleByHole?: Maybe<ApiAdTagConfig>;
  readonly leaderboardLandscapeOdds?: Maybe<ApiAdTagConfig>;
  readonly leaderboardLandscapeProbability?: Maybe<ApiAdTagConfig>;
  readonly leaderboardLandscapeShotDetails?: Maybe<ApiAdTagConfig>;
  readonly leaderboardLandscapeStrokesGained?: Maybe<ApiAdTagConfig>;
  readonly leaderboardOdds?: Maybe<ApiAdTagConfig>;
  readonly leaderboardProbability?: Maybe<ApiAdTagConfig>;
  readonly leaderboardRow50?: Maybe<ApiAdTagConfig>;
  readonly leaderboardShotDetails?: Maybe<ApiAdTagConfig>;
  readonly leaderboardStrokesGained?: Maybe<ApiAdTagConfig>;
  readonly liveLeaderboard?: Maybe<ApiAdTagConfig>;
  readonly mobileHeroStory?: Maybe<ApiAdTagConfig>;
  readonly mobilePlayerStory?: Maybe<ApiAdTagConfig>;
  readonly mobileTopicStory?: Maybe<ApiAdTagConfig>;
  readonly mobileYourTourHomeStory?: Maybe<ApiAdTagConfig>;
  readonly more?: Maybe<ApiAdTagConfig>;
  readonly netflix?: Maybe<ApiAdTagConfig>;
  readonly news?: Maybe<ApiAdTagConfig>;
  readonly newsArticlemidcontent?: Maybe<ApiAdTagConfig>;
  readonly newsArticles?: Maybe<ApiAdTagConfig>;
  readonly odds?: Maybe<ApiAdTagConfig>;
  readonly payneStewartaward?: Maybe<ApiAdTagConfig>;
  readonly playerProfile?: Maybe<ApiAdTagConfig>;
  readonly playerProfileBio?: Maybe<ApiAdTagConfig>;
  readonly playerProfileEquipment?: Maybe<ApiAdTagConfig>;
  readonly playerProfileResults?: Maybe<ApiAdTagConfig>;
  readonly playerProfileStats?: Maybe<ApiAdTagConfig>;
  readonly playerScorecard?: Maybe<ApiAdTagConfig>;
  readonly players?: Maybe<ApiAdTagConfig>;
  readonly playoffScorecard?: Maybe<ApiAdTagConfig>;
  readonly rsm?: Maybe<ApiAdTagConfig>;
  readonly rsmSection?: Maybe<ApiAdTagConfig>;
  readonly schedule?: Maybe<ApiAdTagConfig>;
  readonly schwabCup?: Maybe<ApiAdTagConfig>;
  readonly schwabcupSection?: Maybe<ApiAdTagConfig>;
  readonly scorecard?: Maybe<ApiAdTagConfig>;
  readonly scorecardOdds?: Maybe<ApiAdTagConfig>;
  readonly sidebarTicker?: Maybe<ApiAdTagConfig>;
  readonly standings?: Maybe<ApiAdTagConfig>;
  readonly stats?: Maybe<ApiAdTagConfig>;
  readonly statsSection?: Maybe<ApiAdTagConfig>;
  readonly studios?: Maybe<ApiAdTagConfig>;
  readonly teeTimes?: Maybe<ApiAdTagConfig>;
  readonly the25Section?: Maybe<ApiAdTagConfig>;
  readonly the25pointsList?: Maybe<ApiAdTagConfig>;
  readonly tickets?: Maybe<ApiAdTagConfig>;
  readonly totalPlayCup?: Maybe<ApiAdTagConfig>;
  readonly totalplaycupSection?: Maybe<ApiAdTagConfig>;
  readonly tourcast?: Maybe<ApiAdTagConfig>;
  readonly tournament?: Maybe<ApiAdTagConfig>;
  readonly tournamentSection?: Maybe<ApiAdTagConfig>;
  readonly training?: Maybe<ApiAdTagConfig>;
  readonly university?: Maybe<ApiAdTagConfig>;
  readonly watch?: Maybe<ApiAdTagConfig>;
  readonly webPlayerStories?: Maybe<ApiAdTagConfig>;
  readonly webTopicStories?: Maybe<ApiAdTagConfig>;
  readonly yahooLeaderboard?: Maybe<ApiAdTagConfig>;
};

export type ApiAdSize = {
  readonly __typename: 'AdSize';
  readonly height: Scalars['Int']['output'];
  readonly width: Scalars['Int']['output'];
};

export type ApiAdTagConfig = {
  readonly __typename: 'AdTagConfig';
  readonly actRefresh?: Maybe<Scalars['Boolean']['output']>;
  readonly adTest?: Maybe<Scalars['String']['output']>;
  readonly environment?: Maybe<Scalars['String']['output']>;
  readonly injectAds?: Maybe<Scalars['Boolean']['output']>;
  readonly refresh?: Maybe<Scalars['Int']['output']>;
  readonly rows: ReadonlyArray<ApiAdTagRowConfig>;
  readonly s1: Scalars['String']['output'];
  readonly s2?: Maybe<Scalars['String']['output']>;
  readonly timedRefresh?: Maybe<Scalars['Boolean']['output']>;
  readonly uniqueId: Scalars['String']['output'];
};

export type ApiAdTagRowConfig = {
  readonly __typename: 'AdTagRowConfig';
  readonly container?: Maybe<ApiAdSize>;
  readonly containerLarge?: Maybe<ApiAdSize>;
  readonly containerMedium?: Maybe<ApiAdSize>;
  readonly containerSmall?: Maybe<ApiAdSize>;
  readonly fluid?: Maybe<Scalars['Boolean']['output']>;
  readonly index: Scalars['Int']['output'];
  readonly playerSponsorship?: Maybe<Scalars['Boolean']['output']>;
  readonly pos: Scalars['String']['output'];
  readonly sizes?: Maybe<ReadonlyArray<ApiAdSize>>;
};

export type ApiAllTimeRecordCategories = {
  readonly __typename: 'AllTimeRecordCategories';
  readonly categories: ReadonlyArray<ApiAllTimeRecordCategory>;
  readonly tourCode: ApiTourCode;
};

export type ApiAllTimeRecordCategory = {
  readonly __typename: 'AllTimeRecordCategory';
  readonly categoryId: Scalars['String']['output'];
  readonly displayText: Scalars['String']['output'];
  readonly subCategories: ReadonlyArray<ApiAllTimeRecordSubCategory>;
};

export type ApiAllTimeRecordStat = {
  readonly __typename: 'AllTimeRecordStat';
  readonly categoryId: Scalars['String']['output'];
  readonly categoryName: Scalars['String']['output'];
  readonly isPlayerBased: Scalars['Boolean']['output'];
  readonly primaryColumnIndex?: Maybe<Scalars['Int']['output']>;
  readonly recordId: Scalars['String']['output'];
  readonly rows?: Maybe<ReadonlyArray<ApiAllTimeRecordStatRow>>;
  readonly statHeaders: ReadonlyArray<Scalars['String']['output']>;
  readonly subCategoryName: Scalars['String']['output'];
  /**   1-17 */
  readonly title: Scalars['String']['output'];
};

export type ApiAllTimeRecordStatRow = {
  readonly __typename: 'AllTimeRecordStatRow';
  readonly playerId?: Maybe<Scalars['String']['output']>;
  readonly values: ReadonlyArray<Scalars['String']['output']>;
};

export type ApiAllTimeRecordStatistic = {
  readonly __typename: 'AllTimeRecordStatistic';
  readonly displayText: Scalars['String']['output'];
  readonly recordId: Scalars['String']['output'];
};

export type ApiAllTimeRecordSubCategory = {
  readonly __typename: 'AllTimeRecordSubCategory';
  readonly displayText: Scalars['String']['output'];
  readonly statistics: ReadonlyArray<ApiAllTimeRecordStatistic>;
};

export type ApiAon = {
  readonly __typename: 'Aon';
  readonly description: Scalars['String']['output'];
  readonly leaders: ReadonlyArray<ApiAonPlayer>;
  readonly logo: Scalars['String']['output'];
  readonly pastTournaments: ReadonlyArray<ApiAonHole>;
  readonly players: ReadonlyArray<ApiAonPlayer>;
  readonly title: Scalars['String']['output'];
  readonly upcomingTournaments: ReadonlyArray<ApiAonHole>;
};

export type ApiAonHole = {
  readonly __typename: 'AonHole';
  readonly courseName: Scalars['String']['output'];
  readonly dateText: Scalars['String']['output'];
  readonly holeImage: Scalars['String']['output'];
  readonly holeNum: Scalars['Int']['output'];
  readonly par: Scalars['Int']['output'];
  readonly tournamentId: Scalars['String']['output'];
  readonly tournamentName: Scalars['String']['output'];
  readonly yardage: Scalars['Int']['output'];
};

export type ApiAonPlayer = {
  readonly __typename: 'AonPlayer';
  readonly countryCode: Scalars['String']['output'];
  readonly displayName: Scalars['String']['output'];
  readonly playerId: Scalars['ID']['output'];
  readonly position: Scalars['String']['output'];
  readonly roundsPlayed: Scalars['String']['output'];
  readonly roundsToGo: Scalars['String']['output'];
  readonly score: Scalars['String']['output'];
};

export type ApiArticleFormType =
  | 'External'
  | 'Standard';

export type ApiArticleOddsMarkets = {
  readonly __typename: 'ArticleOddsMarkets';
  readonly class: Scalars['String']['output'];
  readonly market: ApiHistoricalOddsId;
};

export type ApiArticleOddsMarketsInput = {
  readonly class: Scalars['String']['input'];
  readonly market: ApiHistoricalOddsId;
};

export type ApiArticleOddsPlayer = {
  readonly __typename: 'ArticleOddsPlayer';
  readonly playerId: Scalars['String']['output'];
  readonly playerName?: Maybe<Scalars['String']['output']>;
};

export type ApiArticleOddsPlayerInput = {
  readonly playerId: Scalars['String']['input'];
  readonly playerName?: InputMaybe<Scalars['String']['input']>;
};

export type ApiArticleOddsTableQuery = {
  readonly __typename: 'ArticleOddsTableQuery';
  readonly markets?: Maybe<ReadonlyArray<ApiArticleOddsMarkets>>;
  readonly players?: Maybe<ReadonlyArray<ApiArticleOddsPlayer>>;
  readonly timeStamp?: Maybe<Scalars['String']['output']>;
  readonly tournamentId: Scalars['String']['output'];
  readonly tournamentName: Scalars['String']['output'];
};

export type ApiArticlePlayer = {
  readonly __typename: 'ArticlePlayer';
  readonly id: Scalars['String']['output'];
  readonly name: Scalars['String']['output'];
};

export type ApiArticleSponsor =
  | 'GOLFWRX';

export type ApiAudio = {
  readonly __typename: 'Audio';
  readonly id: Scalars['ID']['output'];
  readonly imageUrl: Scalars['String']['output'];
  readonly latestPubDate: Scalars['AWSTimestamp']['output'];
  readonly numEpisodes: Scalars['Int']['output'];
  readonly rssFeed: Scalars['String']['output'];
  readonly shareUrl: Scalars['String']['output'];
  readonly streamUrls: ApiStreamUrls;
  readonly summary: Scalars['String']['output'];
  readonly title: Scalars['String']['output'];
};

export type ApiAudioStream = {
  readonly __typename: 'AudioStream';
  readonly id: Scalars['ID']['output'];
  readonly live: Scalars['Boolean']['output'];
  readonly posterImage: Scalars['String']['output'];
  readonly shareUrl: Scalars['String']['output'];
  readonly streamTitle: Scalars['String']['output'];
  readonly streamUrl: Scalars['String']['output'];
};

export type ApiAugmentedRealityConfig = {
  readonly __typename: 'AugmentedRealityConfig';
  readonly holes: ReadonlyArray<ApiArHole>;
};

export type ApiAvailableMarket = {
  readonly __typename: 'AvailableMarket';
  readonly market: Scalars['String']['output'];
  readonly oddsOptions: ReadonlyArray<ApiOddsOption>;
  readonly subMarket?: Maybe<Scalars['String']['output']>;
};

export type ApiBallPath = {
  readonly __typename: 'BallPath';
  readonly path: ReadonlyArray<ApiBallPathCoordinate>;
};

export type ApiBallPathCoordinate = {
  readonly __typename: 'BallPathCoordinate';
  readonly secondsSinceStart: Scalars['Float']['output'];
  readonly x: Scalars['Float']['output'];
  readonly y: Scalars['Float']['output'];
  readonly z: Scalars['Float']['output'];
};

/**   Odds Options Types */
export type ApiBaseOddsOption = {
  readonly entity: ApiOddsEntity;
  readonly odds: ApiOddsValues;
};

export type ApiBioRank = {
  readonly __typename: 'BioRank';
  readonly rank: Scalars['Int']['output'];
  readonly statName: Scalars['String']['output'];
};

export type ApiBroadcastAudioStream = {
  readonly __typename: 'BroadcastAudioStream';
  readonly channelTitle: Scalars['String']['output'];
  readonly endTime: Scalars['AWSTimestamp']['output'];
  readonly id: Scalars['String']['output'];
  readonly liveStatus: ApiLiveStatus;
  readonly network: ApiBroadcastNetwork;
  readonly roundDisplay: Scalars['String']['output'];
  readonly roundNumber: Scalars['Int']['output'];
  readonly startTime: Scalars['AWSTimestamp']['output'];
  readonly streamTitle: Scalars['String']['output'];
};

export type ApiBroadcastCoverage = {
  readonly __typename: 'BroadcastCoverage';
  readonly countryCode: Scalars['String']['output'];
  readonly coverageType: ReadonlyArray<ApiBroadcastCoverageType>;
  readonly id: Scalars['String']['output'];
  readonly livePillLabel: Scalars['String']['output'];
  readonly tournamentName: Scalars['String']['output'];
};

export type ApiBroadcastCoverageCarousel = {
  readonly __typename: 'BroadcastCoverageCarousel';
  readonly carousel: ReadonlyArray<ApiBroadcastCoverageVideo>;
};

export type ApiBroadcastCoverageItem = ApiBroadcastAudioStream | ApiBroadcastFeaturedGroup | ApiBroadcastFeaturedHole | ApiBroadcastFullTelecast;

export type ApiBroadcastCoverageType = ApiBroadcastAudioStream | ApiBroadcastCoverageCarousel | ApiBroadcastFeaturedGroup | ApiBroadcastFeaturedHole | ApiBroadcastFullTelecast;

export type ApiBroadcastCoverageVideo = ApiBroadcastFeaturedGroup | ApiBroadcastFeaturedHole | ApiBroadcastFullTelecast;

export type ApiBroadcastFeaturedGroup = {
  readonly __typename: 'BroadcastFeaturedGroup';
  readonly channelTitle: Scalars['String']['output'];
  readonly courseId?: Maybe<Scalars['String']['output']>;
  readonly endTime: Scalars['AWSTimestamp']['output'];
  readonly groups: ReadonlyArray<ApiBroadcastGroup>;
  readonly id: Scalars['String']['output'];
  readonly liveStatus: ApiLiveStatus;
  readonly network: ApiBroadcastNetwork;
  readonly promoImage?: Maybe<Scalars['String']['output']>;
  readonly promoImages: ReadonlyArray<Scalars['String']['output']>;
  readonly roundDisplay: Scalars['String']['output'];
  readonly roundNumber: Scalars['Int']['output'];
  readonly startTime: Scalars['AWSTimestamp']['output'];
  readonly streamTitle: Scalars['String']['output'];
};

export type ApiBroadcastFeaturedHole = {
  readonly __typename: 'BroadcastFeaturedHole';
  readonly channelTitle: Scalars['String']['output'];
  readonly courseId?: Maybe<Scalars['String']['output']>;
  readonly endTime: Scalars['AWSTimestamp']['output'];
  readonly featuredHoles: ReadonlyArray<Scalars['Int']['output']>;
  readonly id: Scalars['String']['output'];
  readonly liveStatus: ApiLiveStatus;
  readonly network: ApiBroadcastNetwork;
  readonly promoImage?: Maybe<Scalars['String']['output']>;
  readonly promoImages: ReadonlyArray<Scalars['String']['output']>;
  readonly roundDisplay: Scalars['String']['output'];
  readonly roundNumber: Scalars['Int']['output'];
  readonly startTime: Scalars['AWSTimestamp']['output'];
  readonly streamTitle: Scalars['String']['output'];
};

export type ApiBroadcastFullTelecast = {
  readonly __typename: 'BroadcastFullTelecast';
  readonly channelTitle: Scalars['String']['output'];
  readonly endTime: Scalars['AWSTimestamp']['output'];
  readonly id: Scalars['String']['output'];
  readonly liveStatus: ApiLiveStatus;
  readonly network: ApiBroadcastNetwork;
  readonly promoImage?: Maybe<Scalars['String']['output']>;
  readonly promoImages: ReadonlyArray<Scalars['String']['output']>;
  readonly roundDisplay: Scalars['String']['output'];
  readonly roundNumber: Scalars['Int']['output'];
  readonly startTime: Scalars['AWSTimestamp']['output'];
  readonly streamTitle: Scalars['String']['output'];
};

export type ApiBroadcastGroup = {
  readonly __typename: 'BroadcastGroup';
  readonly extendedCoverage?: Maybe<Scalars['Boolean']['output']>;
  readonly id: Scalars['String']['output'];
  readonly liveStatus: ApiLiveStatus;
  readonly playerLastNames?: Maybe<ReadonlyArray<Maybe<Scalars['String']['output']>>>;
};

export type ApiBroadcastNetwork = {
  readonly __typename: 'BroadcastNetwork';
  readonly androidLink: Scalars['String']['output'];
  readonly androidStreamUrl?: Maybe<Scalars['String']['output']>;
  readonly appleAppStore: Scalars['String']['output'];
  readonly asnw?: Maybe<Scalars['String']['output']>;
  readonly backgroundColor?: Maybe<Scalars['String']['output']>;
  readonly backgroundColorDark?: Maybe<Scalars['String']['output']>;
  readonly caid?: Maybe<Scalars['String']['output']>;
  readonly channelId?: Maybe<Scalars['String']['output']>;
  readonly daiAssetKey?: Maybe<Scalars['String']['output']>;
  readonly daiPreRollUrl?: Maybe<Scalars['String']['output']>;
  readonly daiStreamActivityId?: Maybe<Scalars['String']['output']>;
  readonly descriptionUrl?: Maybe<Scalars['String']['output']>;
  readonly flag?: Maybe<Scalars['String']['output']>;
  readonly fwCoppa?: Maybe<Scalars['String']['output']>;
  readonly fwHReferer?: Maybe<Scalars['String']['output']>;
  readonly fwNielsenAppId?: Maybe<Scalars['String']['output']>;
  readonly googlePlayStore: Scalars['String']['output'];
  readonly iOSLink: Scalars['String']['output'];
  readonly id: Scalars['String']['output'];
  readonly iosStreamUrl?: Maybe<Scalars['String']['output']>;
  readonly liveAssetId?: Maybe<Scalars['String']['output']>;
  readonly metr?: Maybe<Scalars['String']['output']>;
  readonly mode?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use networkLogoAsset */
  readonly networkLogo?: Maybe<Scalars['String']['output']>;
  readonly networkLogoAsset?: Maybe<ApiImageAsset>;
  /** @deprecated Use networkLogoDarkAsset */
  readonly networkLogoDark?: Maybe<Scalars['String']['output']>;
  readonly networkLogoDarkAsset?: Maybe<ApiImageAsset>;
  readonly networkName: Scalars['String']['output'];
  readonly nw?: Maybe<Scalars['String']['output']>;
  readonly priorityNum?: Maybe<Scalars['Int']['output']>;
  readonly prof?: Maybe<Scalars['String']['output']>;
  readonly resp?: Maybe<Scalars['String']['output']>;
  readonly simulcast?: Maybe<Scalars['Boolean']['output']>;
  readonly simulcastUrl?: Maybe<Scalars['String']['output']>;
  readonly ssnw?: Maybe<Scalars['String']['output']>;
  readonly streamUrl?: Maybe<Scalars['String']['output']>;
  readonly sz?: Maybe<Scalars['String']['output']>;
  readonly url?: Maybe<Scalars['String']['output']>;
  readonly vdty?: Maybe<Scalars['String']['output']>;
  readonly vrdu?: Maybe<Scalars['String']['output']>;
};

export type ApiBroadcastNetworks = {
  readonly __typename: 'BroadcastNetworks';
  readonly networks: ReadonlyArray<ApiBroadcastNetwork>;
};

export type ApiBroadcastTableFragment = {
  readonly __typename: 'BroadcastTableFragment';
  readonly path: Scalars['String']['output'];
  readonly webviewUrl: Scalars['String']['output'];
};

export type ApiBubblePill = {
  readonly __typename: 'BubblePill';
  readonly iconDark: ApiImageAsset;
  readonly iconLight: ApiImageAsset;
  readonly pillText: Scalars['String']['output'];
};

export type ApiBubbleType =
  | 'PLAYOFFS'
  | 'SIGNATURE_EVENTS';

export type ApiBubbleWatch = {
  readonly __typename: 'BubbleWatch';
  readonly bubbleId: Scalars['ID']['output'];
  readonly bubbleType: ApiBubbleType;
  readonly items: ReadonlyArray<ApiBubbleWatchItem>;
};

export type ApiBubbleWatchItem = {
  readonly __typename: 'BubbleWatchItem';
  readonly info?: Maybe<Scalars['String']['output']>;
  readonly infoDesc?: Maybe<Scalars['String']['output']>;
  readonly standings: ApiTourCupRankingEvent;
};

export type ApiCallToAction = {
  readonly __typename: 'CallToAction';
  readonly color?: Maybe<Scalars['String']['output']>;
  readonly fontColor?: Maybe<Scalars['String']['output']>;
  readonly link: Scalars['String']['output'];
  readonly target?: Maybe<Scalars['String']['output']>;
  readonly text: Scalars['String']['output'];
  readonly webViewLink?: Maybe<Scalars['String']['output']>;
};

export type ApiCategory = {
  readonly __typename: 'Category';
  readonly displayName: Scalars['String']['output'];
  readonly franchises: ReadonlyArray<ApiFranchise>;
  readonly queryValue: Scalars['String']['output'];
};

export type ApiCategoryPlayerStat = {
  readonly __typename: 'CategoryPlayerStat';
  readonly color: ApiStatColor;
  readonly statName: Scalars['String']['output'];
  readonly statValue: Scalars['String']['output'];
};

export type ApiCategoryStat = {
  readonly __typename: 'CategoryStat';
  readonly displaySeason: Scalars['String']['output'];
  readonly lastProcessed: Scalars['String']['output'];
  readonly players: ReadonlyArray<ApiCategoryStatPlayer>;
  readonly statDescription: Scalars['String']['output'];
  readonly statHeaders: ReadonlyArray<Scalars['String']['output']>;
  readonly statTitle: Scalars['String']['output'];
  readonly tourAvg?: Maybe<Scalars['String']['output']>;
  readonly year: Scalars['Int']['output'];
};

export type ApiCategoryStatPlayer = {
  readonly __typename: 'CategoryStatPlayer';
  readonly playerId: Scalars['String']['output'];
  readonly playerName: Scalars['String']['output'];
  readonly rank: Scalars['Int']['output'];
  readonly rankChangeTendency?: Maybe<ApiStatRankMovement>;
  readonly rankDiff: Scalars['String']['output'];
  readonly stats: ReadonlyArray<ApiCategoryPlayerStat>;
};

export type ApiCategoryStatType =
  | 'EVENT'
  | 'YTD';

export type ApiCerosEmbedPlugin = {
  readonly __typename: 'CerosEmbedPlugin';
  readonly aspectRatio: Scalars['Float']['output'];
  readonly id: Scalars['ID']['output'];
  readonly mobileAspectRatio: Scalars['Float']['output'];
  readonly padding: Scalars['Float']['output'];
  readonly title: Scalars['String']['output'];
  readonly url: Scalars['String']['output'];
};

export type ApiContentCarousel = ApiImage | ApiVideo;

export type ApiContentFragment = {
  readonly __typename: 'ContentFragment';
  readonly fragments: ReadonlyArray<ApiContentFragments>;
  readonly pageMetadata: ApiPageMetadata;
  readonly totalLength: Scalars['Int']['output'];
};

export type ApiContentFragmentTab = {
  readonly __typename: 'ContentFragmentTab';
  readonly contentType: ApiContentType;
  readonly label?: Maybe<Scalars['String']['output']>;
  readonly path: Scalars['String']['output'];
  readonly webview?: Maybe<Scalars['String']['output']>;
};

export type ApiContentFragmentTabs = {
  readonly __typename: 'ContentFragmentTabs';
  readonly pageHeader: Scalars['String']['output'];
  readonly partnerShipAssets?: Maybe<ReadonlyArray<Scalars['String']['output']>>;
  readonly path: Scalars['String']['output'];
  readonly tabs: ReadonlyArray<ApiContentFragmentTab>;
};

export type ApiContentFragmentType = {
  readonly __typename: 'ContentFragmentType';
  readonly contentType: ApiContentType;
  readonly path: Scalars['String']['output'];
};

export type ApiContentFragments = ApiDropdownFragment | ApiHomepageLead | ApiHomepageNews | ApiHomepageProgramStanding | ApiKopHeader | ApiKopSignUp | ApiKopStandingsList | ApiKopSubheader | ApiKopUpcomingTournament | ApiKopZigZag | ApiMediaGallery | ApiOddsToWinTracker | ApiTglBoxScoreFragment | ApiThreeUpPhoto | ApiThreeUpStats | ApiTwoColumn | ApiVideoHero;

export type ApiContentFragmentsCompressed = {
  readonly __typename: 'ContentFragmentsCompressed';
  readonly limit?: Maybe<Scalars['Int']['output']>;
  readonly offset?: Maybe<Scalars['Int']['output']>;
  readonly path?: Maybe<Scalars['String']['output']>;
  readonly payload: Scalars['String']['output'];
  readonly tourCode: ApiTourCode;
};

export type ApiContentStat = {
  readonly __typename: 'ContentStat';
  readonly statId: Scalars['String']['output'];
  readonly statName: Scalars['String']['output'];
};

export type ApiContentStory = {
  readonly __typename: 'ContentStory';
  readonly desktopLatestNewsIndex?: Maybe<Scalars['Int']['output']>;
  readonly mobileLatestNewsIndex?: Maybe<Scalars['Int']['output']>;
  readonly path: Scalars['String']['output'];
  readonly sectionHeader?: Maybe<Scalars['String']['output']>;
  readonly storyType?: Maybe<ApiStory_Type>;
  readonly topicLabels?: Maybe<ReadonlyArray<Scalars['String']['output']>>;
};

export type ApiContentTopics = {
  readonly __typename: 'ContentTopics';
  readonly displayValue?: Maybe<Scalars['String']['output']>;
  readonly value?: Maybe<Scalars['String']['output']>;
};

export type ApiContentType =
  | 'CONTENT_FRAGMENTS'
  | 'CONTENT_TABS'
  | 'GENERIC_CONTENT'
  | 'NEWS_ARTICLE'
  | 'RYDER_CUP_CONTENT_FRAGMENTS'
  | 'RYDER_CUP_CONTENT_TABS'
  | 'RYDER_CUP_GENERIC_CONTENT'
  | 'RYDER_CUP_NEWS_ARTICLE';

export type ApiContentVideoCarousel = {
  readonly __typename: 'ContentVideoCarousel';
  readonly bottomCta?: Maybe<ApiCallToAction>;
  readonly sectionTitle?: Maybe<Scalars['String']['output']>;
  readonly topCta?: Maybe<ApiCallToAction>;
  readonly videos?: Maybe<ReadonlyArray<ApiVideo>>;
};

export type ApiCourse = {
  readonly __typename: 'Course';
  readonly courseCode: Scalars['String']['output'];
  readonly courseName: Scalars['String']['output'];
  readonly enabled?: Maybe<Scalars['Boolean']['output']>;
  readonly features?: Maybe<ReadonlyArray<ApiTeeTimesFeature>>;
  readonly hostCourse: Scalars['Boolean']['output'];
  readonly id: Scalars['ID']['output'];
  readonly scoringLevel: ApiScoringLevel;
};

export type ApiCourseDetailRowValue = {
  readonly __typename: 'CourseDetailRowValue';
  readonly tendency?: Maybe<ApiScoringTendency>;
  readonly value: Scalars['String']['output'];
};

export type ApiCourseFilter = {
  readonly __typename: 'CourseFilter';
  readonly courseId: Scalars['Int']['output'];
  readonly courseName: Scalars['String']['output'];
};

export type ApiCourseHoleHeader = {
  readonly __typename: 'CourseHoleHeader';
  readonly courseId: Scalars['ID']['output'];
  readonly holeHeaders: ReadonlyArray<ApiHoleHeaderV2>;
};

export type ApiCourseHoleStats = {
  readonly __typename: 'CourseHoleStats';
  readonly averagePaceOfPlay?: Maybe<Scalars['String']['output']>;
  readonly birdies?: Maybe<Scalars['Int']['output']>;
  readonly bogeys?: Maybe<Scalars['Int']['output']>;
  readonly courseHoleNum: Scalars['Int']['output'];
  readonly doubleBogey?: Maybe<Scalars['Int']['output']>;
  readonly eagles?: Maybe<Scalars['Int']['output']>;
  readonly holeImage: Scalars['String']['output'];
  readonly holePickle?: Maybe<ApiHolePickle>;
  /** @deprecated Use holePickleGreenLeftToRightAsset */
  readonly holePickleGreenLeftToRight: Scalars['String']['output'];
  readonly holePickleGreenLeftToRightAsset: ApiImageAsset;
  /** @deprecated Use broadcast api indication instead of this. */
  readonly live: Scalars['Boolean']['output'];
  readonly parValue: Scalars['String']['output'];
  readonly pars?: Maybe<Scalars['Int']['output']>;
  readonly pinGreen: ApiPointOfInterestCoords;
  readonly rank?: Maybe<Scalars['Int']['output']>;
  readonly scoringAverage: Scalars['String']['output'];
  readonly scoringAverageDiff: Scalars['String']['output'];
  readonly scoringDiffTendency: ApiScoringTendency;
  readonly yards: Scalars['Int']['output'];
};

export type ApiCourseInfo = {
  readonly __typename: 'CourseInfo';
  readonly bottomCta?: Maybe<ApiCallToAction>;
  readonly coursePhotos?: Maybe<ReadonlyArray<Scalars['String']['output']>>;
  readonly cta1?: Maybe<ApiCallToAction>;
  readonly cta2?: Maybe<ApiCallToAction>;
  readonly subhead?: Maybe<Scalars['String']['output']>;
  readonly title?: Maybe<Scalars['String']['output']>;
  readonly topCta?: Maybe<ApiCallToAction>;
};

export type ApiCourseOverviewInfo = {
  readonly __typename: 'CourseOverviewInfo';
  readonly cutsMade: Scalars['String']['output'];
  readonly cutsMissed: Scalars['String']['output'];
  readonly disqualified: Scalars['String']['output'];
  readonly events: Scalars['String']['output'];
  readonly money: Scalars['String']['output'];
  readonly runnerUp: Scalars['String']['output'];
  readonly second: Scalars['String']['output'];
  readonly third: Scalars['String']['output'];
  readonly top10: Scalars['String']['output'];
  readonly top25: Scalars['String']['output'];
  readonly wins: Scalars['String']['output'];
  readonly withdrew: Scalars['String']['output'];
};

export type ApiCourseOverviewItem = {
  readonly __typename: 'CourseOverviewItem';
  readonly details: ReadonlyArray<ApiCourseOverviewItemDetails>;
  readonly displayName: Scalars['String']['output'];
  readonly image: Scalars['String']['output'];
  readonly rank: Scalars['Int']['output'];
};

export type ApiCourseOverviewItemDetails = {
  readonly __typename: 'CourseOverviewItemDetails';
  readonly label: Scalars['String']['output'];
  readonly value: Scalars['String']['output'];
};

export type ApiCoursePills = {
  readonly __typename: 'CoursePills';
  readonly courseId: Scalars['String']['output'];
  readonly courseName: Scalars['String']['output'];
};

export type ApiCourseResultsTournament = {
  readonly __typename: 'CourseResultsTournament';
  readonly points: Scalars['String']['output'];
  readonly position: Scalars['String']['output'];
  readonly roundScores: ReadonlyArray<ApiRoundScoreItem>;
  readonly season: Scalars['String']['output'];
  readonly toPar: Scalars['String']['output'];
  readonly total: Scalars['String']['output'];
  readonly tourcastURI?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastURL?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastURLWeb?: Maybe<Scalars['String']['output']>;
  readonly tournamentId: Scalars['String']['output'];
  readonly tournamentName: Scalars['String']['output'];
  readonly winnings: Scalars['String']['output'];
  readonly year: Scalars['Int']['output'];
};

export type ApiCourseRound = {
  readonly __typename: 'CourseRound';
  readonly enablePaceOfPlay?: Maybe<Scalars['Boolean']['output']>;
  readonly holeStats: ReadonlyArray<ApiHoleStat>;
  readonly live: Scalars['Boolean']['output'];
  readonly paceOfPlayDescription?: Maybe<Scalars['String']['output']>;
  readonly paceOfPlayLabelTitle?: Maybe<Scalars['String']['output']>;
  readonly roundHeader: Scalars['String']['output'];
  readonly roundNum?: Maybe<Scalars['Int']['output']>;
};

export type ApiCourseStat = {
  readonly __typename: 'CourseStat';
  readonly courseCode: Scalars['String']['output'];
  readonly courseId: Scalars['String']['output'];
  readonly courseImage: Scalars['String']['output'];
  readonly courseName: Scalars['String']['output'];
  readonly courseOverview: ApiTournamentCourse;
  readonly holeDetailsAvailability: ApiHoleDetailsAvailability;
  readonly hostCourse: Scalars['Boolean']['output'];
  readonly par: Scalars['Int']['output'];
  readonly roundHoleStats: ReadonlyArray<ApiCourseRound>;
  readonly roundPills?: Maybe<ReadonlyArray<Scalars['String']['output']>>;
  readonly shotlinkLogo?: Maybe<Scalars['String']['output']>;
  readonly tournamentId: Scalars['ID']['output'];
  readonly yardage: Scalars['String']['output'];
};

export type ApiCourseStatsCategory = {
  readonly __typename: 'CourseStatsCategory';
  readonly detailId: ApiCourseStatsId;
  readonly header: Scalars['String']['output'];
  readonly items: ReadonlyArray<ApiCourseOverviewItem>;
};

export type ApiCourseStatsDetails = {
  readonly __typename: 'CourseStatsDetails';
  readonly displayName: Scalars['String']['output'];
  readonly displayYear: Scalars['String']['output'];
  readonly headers: ReadonlyArray<Scalars['String']['output']>;
  readonly round: ApiToughestRound;
  readonly roundPills: ReadonlyArray<ApiToughestCourseRoundPills>;
  readonly rows: ReadonlyArray<ApiCourseStatsDetailsRow>;
  readonly seasons: ReadonlyArray<ApiStatYearPills>;
  readonly shareURL?: Maybe<Scalars['String']['output']>;
  readonly tableName: Scalars['String']['output'];
  readonly tourCode: ApiTourCode;
  readonly year: Scalars['Int']['output'];
};

export type ApiCourseStatsDetailsRow = {
  readonly __typename: 'CourseStatsDetailsRow';
  readonly displayName: Scalars['String']['output'];
  readonly rank: Scalars['Int']['output'];
  readonly tournamentId: Scalars['String']['output'];
  readonly tournamentName: Scalars['String']['output'];
  readonly values: ReadonlyArray<ApiCourseDetailRowValue>;
};

export type ApiCourseStatsId =
  | 'TOUGHEST_COURSE'
  | 'TOUGHEST_HOLES';

export type ApiCourseStatsOverview = {
  readonly __typename: 'CourseStatsOverview';
  readonly categories: ReadonlyArray<ApiCourseStatsCategory>;
  readonly tourCode: ApiTourCode;
  readonly year: Scalars['Int']['output'];
};

export type ApiCupLeaderboardMatch = {
  readonly __typename: 'CupLeaderboardMatch';
  readonly displayScore: Scalars['String']['output'];
  readonly euMatchWin?: Maybe<Scalars['Float']['output']>;
  readonly holeScores?: Maybe<ReadonlyArray<ApiCupLeaderboardMatchHoles>>;
  readonly location: Scalars['String']['output'];
  readonly locationDescription?: Maybe<Scalars['String']['output']>;
  readonly locationSort: Scalars['Int']['output'];
  readonly matchDraw?: Maybe<Scalars['Float']['output']>;
  readonly matchId: Scalars['ID']['output'];
  readonly matchStatus: Scalars['String']['output'];
  readonly matchStatusColor: Scalars['String']['output'];
  readonly matchStatusFlag?: Maybe<Scalars['String']['output']>;
  readonly matchTitle: Scalars['String']['output'];
  readonly startingTee: Scalars['String']['output'];
  readonly teams: ReadonlyArray<ApiCupLeaderboardMatchTeam>;
  readonly teeTime: Scalars['AWSTimestamp']['output'];
  readonly tourcastURI?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastURL?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastURLWeb?: Maybe<Scalars['String']['output']>;
  readonly usMatchWin?: Maybe<Scalars['Float']['output']>;
};

export type ApiCupLeaderboardMatchHoles = {
  readonly __typename: 'CupLeaderboardMatchHoles';
  readonly holeNumber: Scalars['String']['output'];
  readonly holeNumberColor: Scalars['String']['output'];
  readonly holeOutlineColor?: Maybe<Scalars['String']['output']>;
  readonly holePlayedStatus: ApiHolePlayedStatus;
};

export type ApiCupLeaderboardMatchPlayer = {
  readonly __typename: 'CupLeaderboardMatchPlayer';
  readonly color?: Maybe<Scalars['String']['output']>;
  readonly displayName: Scalars['String']['output'];
  readonly firstName?: Maybe<Scalars['String']['output']>;
  readonly hideHeadshot?: Maybe<Scalars['Boolean']['output']>;
  readonly lastName?: Maybe<Scalars['String']['output']>;
  readonly playerId: Scalars['ID']['output'];
  readonly results?: Maybe<ApiCupLeaderboardMatchPlayerResults>;
  readonly shortName: Scalars['String']['output'];
};

export type ApiCupLeaderboardMatchPlayerResults = {
  readonly __typename: 'CupLeaderboardMatchPlayerResults';
  readonly losses: Scalars['String']['output'];
  readonly ties: Scalars['String']['output'];
  readonly total: Scalars['String']['output'];
  readonly wins: Scalars['String']['output'];
};

export type ApiCupLeaderboardMatchTeam = {
  readonly __typename: 'CupLeaderboardMatchTeam';
  readonly flagSurroundColor?: Maybe<Scalars['String']['output']>;
  readonly flagSurroundColorDark?: Maybe<Scalars['String']['output']>;
  readonly players: ReadonlyArray<ApiCupLeaderboardMatchPlayer>;
  readonly status: ApiCupLeaderboardTeamStatus;
  readonly teamColor: Scalars['String']['output'];
  readonly teamFlag: Scalars['String']['output'];
  readonly teamId: Scalars['ID']['output'];
  readonly teamName: Scalars['String']['output'];
  readonly teamScore?: Maybe<Scalars['String']['output']>;
  readonly teamStoryContentInfo?: Maybe<ReadonlyArray<ApiTeamStoryContentInfo>>;
  readonly textColor?: Maybe<Scalars['String']['output']>;
};

export type ApiCupLeaderboardTeamStatus =
  | 'BEHIND'
  | 'LEADS'
  | 'TIED'
  | 'UNKNOWN'
  | 'WINS';

export type ApiCupLiveActivitySponsor = {
  readonly __typename: 'CupLiveActivitySponsor';
  readonly sponsorLogo?: Maybe<Scalars['String']['output']>;
  readonly sponsorText?: Maybe<Scalars['String']['output']>;
};

export type ApiCupMatchesCompleteData = {
  readonly __typename: 'CupMatchesCompleteData';
  readonly completedMatches: Scalars['Int']['output'];
  readonly totalMatches: Scalars['Int']['output'];
};

export type ApiCupOverviewDisplayType =
  | 'POINTS_ONLY'
  | 'PROGRESS';

export type ApiCupPastResults = {
  readonly __typename: 'CupPastResults';
  readonly permId: Scalars['ID']['output'];
  readonly years: ReadonlyArray<ApiCupPastResultsYear>;
};

export type ApiCupPastResultsTeam = {
  readonly __typename: 'CupPastResultsTeam';
  readonly badgeText?: Maybe<Scalars['String']['output']>;
  readonly color: Scalars['String']['output'];
  readonly score: Scalars['String']['output'];
  readonly teamId: Scalars['ID']['output'];
  readonly teamLogo: Scalars['String']['output'];
  readonly teamName: Scalars['String']['output'];
};

export type ApiCupPastResultsYear = {
  readonly __typename: 'CupPastResultsYear';
  readonly displayYear: Scalars['String']['output'];
  readonly teams: ReadonlyArray<ApiCupPastResultsTeam>;
  readonly year: Scalars['Int']['output'];
};

export type ApiCupRankMovementDirection =
  | 'CONSTANT'
  | 'DOWN'
  | 'UNKNOWN'
  | 'UP';

export type ApiCupRankingPlayer = {
  readonly __typename: 'CupRankingPlayer';
  readonly id: Scalars['String']['output'];
  readonly movement: Scalars['String']['output'];
  readonly movementDirection: ApiCupRankMovementDirection;
  readonly name: Scalars['String']['output'];
  readonly playerCountry: Scalars['String']['output'];
  readonly position: Scalars['String']['output'];
  readonly rankLogoDark?: Maybe<Scalars['String']['output']>;
  readonly rankLogoLight?: Maybe<Scalars['String']['output']>;
  readonly total: Scalars['String']['output'];
  readonly totals: ReadonlyArray<ApiCupRankingTotal>;
  readonly tourBound?: Maybe<Scalars['Boolean']['output']>;
  readonly winner?: Maybe<Scalars['Boolean']['output']>;
};

export type ApiCupRankingPlayerInfoRow = {
  readonly __typename: 'CupRankingPlayerInfoRow';
  readonly image?: Maybe<Scalars['String']['output']>;
  readonly imageDark?: Maybe<Scalars['String']['output']>;
  readonly text: Scalars['String']['output'];
};

export type ApiCupRankingPlayerWrapper = ApiCupRankingPlayer | ApiCupRankingPlayerInfoRow;

export type ApiCupRankingTotal = {
  readonly __typename: 'CupRankingTotal';
  readonly display: Scalars['String']['output'];
  readonly value: Scalars['String']['output'];
};

export type ApiCupRound = {
  readonly __typename: 'CupRound';
  readonly roundDisplayName: Scalars['String']['output'];
  readonly roundNum: Scalars['Int']['output'];
};

export type ApiCupRoundFormat =
  | 'ALTERNATE_SHOT'
  | 'BEST_BALL'
  | 'SINGLES';

export type ApiCupScorecard = {
  readonly __typename: 'CupScorecard';
  readonly currentHole?: Maybe<Scalars['Int']['output']>;
  readonly displayScore: Scalars['String']['output'];
  readonly format: ApiCupRoundFormat;
  readonly id: Scalars['ID']['output'];
  readonly infoWebUrl?: Maybe<Scalars['String']['output']>;
  readonly matchHoleScores: ReadonlyArray<ApiMatchHole>;
  readonly matchName: Scalars['String']['output'];
  readonly matchStatus: Scalars['String']['output'];
  readonly matchStatusColor: Scalars['String']['output'];
  readonly matchStatusFlag?: Maybe<Scalars['String']['output']>;
  readonly messages: ReadonlyArray<ApiMessage>;
  readonly scorecardTitle: Scalars['String']['output'];
  readonly teams: ReadonlyArray<ApiCupTeam>;
  readonly teeTime: Scalars['AWSTimestamp']['output'];
  readonly tourcastURI?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastUrl?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastUrlWeb?: Maybe<Scalars['String']['output']>;
};

export type ApiCupTeam = {
  readonly __typename: 'CupTeam';
  readonly flagSurroundColor?: Maybe<Scalars['String']['output']>;
  readonly flagSurroundColorDark?: Maybe<Scalars['String']['output']>;
  readonly players?: Maybe<ReadonlyArray<ApiMpScorecardPlayer>>;
  readonly status: ApiCupLeaderboardTeamStatus;
  readonly teamColor: Scalars['String']['output'];
  readonly teamFlag: Scalars['String']['output'];
  readonly teamId: Scalars['ID']['output'];
  readonly teamName: Scalars['String']['output'];
  readonly teamPoints?: Maybe<Scalars['String']['output']>;
  readonly teamShortName: Scalars['String']['output'];
  readonly textColor?: Maybe<Scalars['String']['output']>;
};

export type ApiCupTeamRoster = {
  readonly __typename: 'CupTeamRoster';
  readonly flagSurroundColor?: Maybe<Scalars['String']['output']>;
  readonly flagSurroundColorDark?: Maybe<Scalars['String']['output']>;
  readonly sections: ReadonlyArray<ApiCupTeamRosterSection>;
  readonly teamColor: Scalars['String']['output'];
  readonly teamFlag: Scalars['String']['output'];
  readonly teamId: Scalars['ID']['output'];
  readonly teamLogo?: Maybe<Scalars['String']['output']>;
  readonly teamName: Scalars['String']['output'];
};

export type ApiCupTeamRosterSection = {
  readonly __typename: 'CupTeamRosterSection';
  readonly players: ReadonlyArray<ApiCupLeaderboardMatchPlayer>;
  readonly sectionTitle: Scalars['String']['output'];
  readonly showResults: Scalars['Boolean']['output'];
};

export type ApiCupTeamRosters = {
  readonly __typename: 'CupTeamRosters';
  readonly teams: ReadonlyArray<ApiCupTeamRoster>;
  readonly tournamentId: Scalars['ID']['output'];
};

export type ApiCupTeeTimes = {
  readonly __typename: 'CupTeeTimes';
  readonly currentRound: Scalars['Int']['output'];
  readonly drawersEnabled: Scalars['Boolean']['output'];
  readonly id: Scalars['ID']['output'];
  readonly rounds: ReadonlyArray<ApiCupTeeTimesRound>;
};

export type ApiCupTeeTimesRound = {
  readonly __typename: 'CupTeeTimesRound';
  readonly adConfig: Scalars['String']['output'];
  readonly completedMatches: Scalars['Int']['output'];
  readonly matches: ReadonlyArray<ApiCupLeaderboardMatch>;
  readonly roundDisplay: Scalars['String']['output'];
  readonly roundNum: Scalars['Int']['output'];
  readonly totalMatches: Scalars['Int']['output'];
};

export type ApiCupTournamentLeaderboard = {
  readonly __typename: 'CupTournamentLeaderboard';
  readonly allRounds: ReadonlyArray<ApiCupRound>;
  readonly completedMatches: Scalars['Int']['output'];
  readonly currentId: Scalars['String']['output'];
  readonly currentRound: Scalars['Int']['output'];
  readonly drawersEnabled: Scalars['Boolean']['output'];
  readonly format: ApiCupRoundFormat;
  readonly id: Scalars['ID']['output'];
  readonly liveActivitySponsor?: Maybe<ApiCupLiveActivitySponsor>;
  readonly matches: ReadonlyArray<ApiCupLeaderboardMatch>;
  readonly outcomeIqLogo?: Maybe<Scalars['String']['output']>;
  readonly rounds: ReadonlyArray<ApiCupTournamentRound>;
  readonly title: Scalars['String']['output'];
  readonly totalMatches: Scalars['Int']['output'];
  readonly tourcastURI?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastURL?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastURLWeb?: Maybe<Scalars['String']['output']>;
};

export type ApiCupTournamentLeaderboardCompressed = {
  readonly __typename: 'CupTournamentLeaderboardCompressed';
  readonly currentId: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
  readonly payload: Scalars['String']['output'];
};

export type ApiCupTournamentRound = {
  readonly __typename: 'CupTournamentRound';
  readonly adConfig: Scalars['String']['output'];
  readonly description: Scalars['String']['output'];
  readonly format: ApiCupRoundFormat;
  readonly roundNumber: Scalars['Int']['output'];
};

export type ApiCupTournamentStatus = {
  readonly __typename: 'CupTournamentStatus';
  readonly heroImage?: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly infoPath?: Maybe<Scalars['String']['output']>;
  readonly matchesComplete?: Maybe<ApiCupMatchesCompleteData>;
  readonly messages: ReadonlyArray<ApiLeaderboardMessage>;
  readonly miniLeaderboardOverride?: Maybe<Scalars['String']['output']>;
  readonly scorecardEnabled: Scalars['Boolean']['output'];
  readonly stickyBanner: Scalars['Boolean']['output'];
  readonly teams: ReadonlyArray<ApiCupTournamentTeam>;
  readonly tournamentId: Scalars['String']['output'];
  readonly type: ApiCupOverviewDisplayType;
};

export type ApiCupTournamentTeam = {
  readonly __typename: 'CupTournamentTeam';
  readonly badgeText?: Maybe<Scalars['String']['output']>;
  readonly color: Scalars['String']['output'];
  readonly displayName: Scalars['String']['output'];
  readonly goalPoints?: Maybe<Scalars['String']['output']>;
  readonly projected?: Maybe<Scalars['String']['output']>;
  readonly projectedColor: Scalars['String']['output'];
  readonly projectedProgress: Scalars['Float']['output'];
  readonly projectedValue: Scalars['Float']['output'];
  readonly shortBadgeText?: Maybe<Scalars['String']['output']>;
  readonly shortName: Scalars['String']['output'];
  readonly teamId: Scalars['ID']['output'];
  readonly teamLogo: Scalars['String']['output'];
  readonly textColor?: Maybe<Scalars['String']['output']>;
  readonly toWin?: Maybe<Scalars['String']['output']>;
  readonly toWinSuffix?: Maybe<Scalars['String']['output']>;
  readonly total?: Maybe<Scalars['String']['output']>;
  readonly totalProgress: Scalars['Float']['output'];
  readonly totalValue: Scalars['Float']['output'];
  readonly winner?: Maybe<Scalars['Boolean']['output']>;
};

export type ApiCurrentLeaderPlayer = {
  readonly __typename: 'CurrentLeaderPlayer';
  readonly backNine: Scalars['Boolean']['output'];
  readonly country: Scalars['String']['output'];
  readonly countryFlag: Scalars['String']['output'];
  readonly displayName: Scalars['String']['output'];
  readonly firstName: Scalars['String']['output'];
  readonly groupNumber: Scalars['Int']['output'];
  readonly id: Scalars['ID']['output'];
  readonly lastName: Scalars['String']['output'];
  readonly leaderboardSortOrder: Scalars['Int']['output'];
  readonly playerIcon?: Maybe<ApiLeaderboardPlayerIcon>;
  readonly playerState?: Maybe<ApiPlayerState>;
  readonly position: Scalars['String']['output'];
  readonly roundHeader: Scalars['String']['output'];
  readonly roundScore: Scalars['String']['output'];
  readonly shortName: Scalars['String']['output'];
  readonly teeTime?: Maybe<Scalars['AWSTimestamp']['output']>;
  readonly thru: Scalars['String']['output'];
  readonly totalScore: Scalars['String']['output'];
};

export type ApiCurrentLeaderSponsors = {
  readonly __typename: 'CurrentLeaderSponsors';
  readonly images: ReadonlyArray<ApiSponsorImage>;
  readonly text: Scalars['String']['output'];
};

export type ApiCurrentLeaders = {
  readonly __typename: 'CurrentLeaders';
  readonly hideRolexClock: Scalars['Boolean']['output'];
  readonly hideSov: Scalars['Boolean']['output'];
  readonly id: Scalars['ID']['output'];
  readonly miniatureLeaderboardExternalLinkOverride?: Maybe<Scalars['String']['output']>;
  readonly miniatureLeaderboardImgOverride?: Maybe<Scalars['String']['output']>;
  readonly players: ReadonlyArray<ApiCurrentLeaderPlayer>;
  readonly profileEnabled: Scalars['Boolean']['output'];
  readonly roundDisplay: Scalars['String']['output'];
  readonly roundStatus: ApiRoundStatus;
  readonly roundStatusColor: ApiRoundStatusColor;
  readonly roundStatusDisplay: Scalars['String']['output'];
  readonly sponsor?: Maybe<ApiCurrentLeaderSponsors>;
  readonly tournamentName: Scalars['String']['output'];
};

export type ApiCurrentLeadersCompressed = {
  readonly __typename: 'CurrentLeadersCompressed';
  readonly id: Scalars['ID']['output'];
  readonly payload: Scalars['String']['output'];
};

export type ApiCutLineInfo = {
  readonly __typename: 'CutLineInfo';
  readonly lastUpdated: Scalars['AWSTimestamp']['output'];
  readonly new?: Maybe<Scalars['Boolean']['output']>;
  readonly possibleCutLines: ReadonlyArray<ApiCutLinePossibility>;
  readonly probableCutLine: Scalars['String']['output'];
  readonly projectedCutLine: Scalars['String']['output'];
  readonly sponsorLogo?: Maybe<ApiImageAsset>;
  readonly sponsorName?: Maybe<Scalars['String']['output']>;
};

export type ApiCutLinePossibility = {
  readonly __typename: 'CutLinePossibility';
  readonly displayProbability: Scalars['String']['output'];
  readonly probability: Scalars['Float']['output'];
  readonly score: Scalars['String']['output'];
};

export type ApiDayWeather = {
  readonly __typename: 'DayWeather';
  readonly day: Scalars['String']['output'];
  readonly text: Scalars['String']['output'];
};

export type ApiDeleteAccountResponse = {
  readonly __typename: 'DeleteAccountResponse';
  readonly ok: Scalars['Boolean']['output'];
};

export type ApiDrawerDisplayState =
  | 'HOLE_ONLY'
  | 'PLAY_BY_PLAY'
  | 'ROUND_COMPLETE'
  | 'TEE_TIME';

export type ApiDropdownFragment = {
  readonly __typename: 'DropdownFragment';
  readonly bottomCta?: Maybe<ApiCallToAction>;
  readonly header: Scalars['String']['output'];
  readonly rows: ReadonlyArray<ApiDropdownRow>;
  readonly subheader?: Maybe<Scalars['String']['output']>;
  readonly topCta?: Maybe<ApiCallToAction>;
};

export type ApiDropdownRow = {
  readonly __typename: 'DropdownRow';
  readonly content?: Maybe<ReadonlyArray<Maybe<ApiNewsArticleNode>>>;
  readonly cta?: Maybe<ApiCallToAction>;
  readonly header: Scalars['String']['output'];
};

export type ApiEfiHole = {
  readonly __typename: 'EFIHole';
  readonly count: Scalars['String']['output'];
  readonly hole: Scalars['String']['output'];
};

export type ApiEfiPlayer = {
  readonly __typename: 'EFIPlayer';
  readonly displayName: Scalars['String']['output'];
  readonly history: ReadonlyArray<ApiEfiPlayerEagle>;
  readonly playerId: Scalars['ID']['output'];
  readonly totalEagles: Scalars['String']['output'];
};

export type ApiEfiPlayerEagle = {
  readonly __typename: 'EFIPlayerEagle';
  readonly hole: Scalars['Int']['output'];
  readonly round: Scalars['Int']['output'];
  readonly videoId?: Maybe<Scalars['String']['output']>;
};

export type ApiEaglesForImpact = {
  readonly __typename: 'EaglesForImpact';
  readonly charity: Scalars['String']['output'];
  readonly donation: Scalars['String']['output'];
  readonly eaglesTitle: Scalars['String']['output'];
  readonly holes: ReadonlyArray<ApiEfiHole>;
  readonly linkText?: Maybe<Scalars['String']['output']>;
  readonly linkUrl?: Maybe<Scalars['String']['output']>;
  readonly players: ReadonlyArray<ApiEfiPlayer>;
  readonly sponsorDescription: Scalars['String']['output'];
  /** @deprecated use sponsorLogoAsset */
  readonly sponsorLogo: Scalars['String']['output'];
  readonly sponsorLogoAsset: ApiImageAsset;
  readonly title: Scalars['String']['output'];
  readonly totalEagles: Scalars['String']['output'];
  readonly tournamentId: Scalars['ID']['output'];
};

/**   Player Odds V2 */
export type ApiEntityOdds = {
  readonly __typename: 'EntityOdds';
  readonly bettingProfile?: Maybe<Scalars['String']['output']>;
  readonly entityId: Scalars['ID']['output'];
  readonly marketPills: ReadonlyArray<ApiMarketPill>;
  /**   others available to request */
  readonly markets: ReadonlyArray<ApiMarket>;
  readonly message?: Maybe<ApiOddsMessage>;
  readonly provider: ApiOddsProvider;
  /**   playerId or teamId */
  readonly tournamentId: Scalars['String']['output'];
};

export type ApiEpisode = {
  readonly __typename: 'Episode';
  readonly date: Scalars['AWSTimestamp']['output'];
  readonly description: Scalars['String']['output'];
  readonly duration: Scalars['Int']['output'];
  readonly podcastId: Scalars['String']['output'];
  readonly streamUrl: Scalars['String']['output'];
  readonly title: Scalars['String']['output'];
};

export type ApiEvent = {
  readonly __typename: 'Event';
  readonly eventName: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
  readonly leaderboardId: Scalars['String']['output'];
};

export type ApiEventGuideConfig = {
  readonly __typename: 'EventGuideConfig';
  readonly augmentedReality?: Maybe<ApiAugmentedRealityConfig>;
  readonly eventGuideMap?: Maybe<Scalars['String']['output']>;
  readonly eventGuideURL?: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
};

export type ApiEventHub = {
  readonly __typename: 'EventHub';
  readonly bottomSectionTitle?: Maybe<Scalars['String']['output']>;
  readonly notSharingLocationFallbackDescriptionText?: Maybe<Scalars['String']['output']>;
  readonly notSharingLocationFallbackTitle?: Maybe<Scalars['String']['output']>;
  readonly outOfRangeFallbackDescriptionText?: Maybe<Scalars['String']['output']>;
  readonly outOfRangeFallbackPromoImage?: Maybe<Scalars['String']['output']>;
  readonly outOfRangeFallbackTitle?: Maybe<Scalars['String']['output']>;
  readonly partnershipAsset?: Maybe<Scalars['String']['output']>;
  readonly partnershipText?: Maybe<Scalars['String']['output']>;
  readonly path: Scalars['String']['output'];
  readonly radius?: Maybe<Scalars['Float']['output']>;
  readonly topSectionTitle?: Maybe<Scalars['String']['output']>;
};

export type ApiEventHubTable = {
  readonly __typename: 'EventHubTable';
  readonly cta?: Maybe<ApiCallToAction>;
  readonly mapCtaText?: Maybe<Scalars['String']['output']>;
  readonly mapIframe?: Maybe<Scalars['String']['output']>;
  readonly mapPdf?: Maybe<Scalars['String']['output']>;
  readonly mapSectionTitle?: Maybe<Scalars['String']['output']>;
  readonly notSharingLocationCta?: Maybe<ApiCallToAction>;
  readonly notSharingLocationFallbackDescriptionText?: Maybe<Scalars['String']['output']>;
  readonly notSharingLocationFallbackTitle?: Maybe<Scalars['String']['output']>;
  readonly outOfRangeCta?: Maybe<ApiCallToAction>;
  readonly outOfRangeFallbackDescriptionText?: Maybe<Scalars['String']['output']>;
  readonly outOfRangeFallbackPromoImg?: Maybe<Scalars['String']['output']>;
  readonly outOfRangeFallbackTitle?: Maybe<Scalars['String']['output']>;
  readonly partnershipAsset?: Maybe<Scalars['String']['output']>;
  readonly partnershipText?: Maybe<Scalars['String']['output']>;
  readonly path: Scalars['String']['output'];
  readonly radius?: Maybe<Scalars['Float']['output']>;
  readonly sectionTitle?: Maybe<Scalars['String']['output']>;
};

export type ApiEventRegion =
  | 'EUROPE'
  | 'INTERNATIONAL'
  | 'US';

export type ApiExpertPicks = {
  readonly __typename: 'ExpertPicks';
  readonly expertPicksTableRows: ReadonlyArray<ApiExpertPicksTableRow>;
  readonly tournamentName: Scalars['String']['output'];
};

export type ApiExpertPicksNode = {
  readonly __typename: 'ExpertPicksNode';
  readonly isPowerRankings: Scalars['Boolean']['output'];
  readonly path: Scalars['String']['output'];
};

export type ApiExpertPicksTableRow = {
  readonly __typename: 'ExpertPicksTableRow';
  readonly comment: ReadonlyArray<ApiTourSponsorDescription>;
  readonly expertName?: Maybe<Scalars['String']['output']>;
  readonly expertTitle?: Maybe<Scalars['String']['output']>;
  readonly lineup: ReadonlyArray<ApiPlayerInfo>;
  readonly percentSelected?: Maybe<Scalars['String']['output']>;
  readonly percentSelectedColor?: Maybe<ApiStatColor>;
  readonly winner?: Maybe<ApiPlayerInfo>;
};

export type ApiFavoritePlayer = {
  readonly __typename: 'FavoritePlayer';
  readonly id: Scalars['ID']['output'];
};

export type ApiFavoritePlayerInput = {
  readonly id: Scalars['ID']['input'];
};

export type ApiFavoriteTourResponse = {
  readonly __typename: 'FavoriteTourResponse';
  readonly ok: Scalars['Boolean']['output'];
  readonly tourCode?: Maybe<ApiTourCode>;
};

export type ApiFeatureItem = {
  readonly __typename: 'FeatureItem';
  readonly fieldStatType?: Maybe<ApiFieldStatType>;
  readonly leaderboardFeatures?: Maybe<ApiLeaderboardFeature>;
  readonly name: Scalars['String']['output'];
  readonly new: Scalars['Boolean']['output'];
  readonly sponsor?: Maybe<ApiFeatureSponsor>;
  readonly tooltipText?: Maybe<Scalars['String']['output']>;
  readonly tooltipTitle?: Maybe<Scalars['String']['output']>;
};

export type ApiFeatureSponsor = {
  readonly __typename: 'FeatureSponsor';
  /** @deprecated use sponsorLogoAsset */
  readonly sponsorLogo: Scalars['String']['output'];
  readonly sponsorLogoAsset: ApiImageAsset;
  /** @deprecated use sponsorLogoDarkAsset */
  readonly sponsorLogoDark: Scalars['String']['output'];
  readonly sponsorLogoDarkAsset: ApiImageAsset;
  readonly sponsorText: Scalars['String']['output'];
};

export type ApiField = {
  readonly __typename: 'Field';
  readonly alternates: ReadonlyArray<ApiPlayerField>;
  readonly features: ReadonlyArray<ApiFeatureItem>;
  readonly hideSov: Scalars['Boolean']['output'];
  readonly id: Scalars['ID']['output'];
  readonly lastUpdated?: Maybe<Scalars['AWSTimestamp']['output']>;
  readonly message?: Maybe<Scalars['String']['output']>;
  readonly players: ReadonlyArray<ApiPlayerField>;
  readonly standingsHeader: Scalars['String']['output'];
  readonly tournamentName: Scalars['String']['output'];
};

export type ApiFieldGroup = {
  readonly __typename: 'FieldGroup';
  readonly groupId?: Maybe<Scalars['String']['output']>;
  readonly groupTitle: Scalars['String']['output'];
  readonly players: ReadonlyArray<ApiPlayerField>;
};

export type ApiFieldPromoSection = {
  readonly __typename: 'FieldPromoSection';
  readonly title: Scalars['String']['output'];
  readonly tournamentIds: ReadonlyArray<Scalars['String']['output']>;
};

export type ApiFieldStatCourseFit = {
  readonly __typename: 'FieldStatCourseFit';
  readonly playerId: Scalars['String']['output'];
  readonly score: Scalars['String']['output'];
  readonly stats: ReadonlyArray<ApiFieldStatCourseFitStat>;
  readonly totalRounds: Scalars['String']['output'];
};

export type ApiFieldStatCourseFitStat = {
  readonly __typename: 'FieldStatCourseFitStat';
  readonly statColor: ApiStatColor;
  readonly statRank: Scalars['String']['output'];
  readonly statValue: Scalars['String']['output'];
};

export type ApiFieldStatCurrentForm = {
  readonly __typename: 'FieldStatCurrentForm';
  readonly playerId: Scalars['String']['output'];
  readonly strokesGained: ReadonlyArray<ApiFieldStatStrokesGained>;
  readonly strokesGainedHeader: ReadonlyArray<Scalars['String']['output']>;
  readonly totalRounds: Scalars['String']['output'];
  readonly tournamentResults: ReadonlyArray<ApiFieldStatTournamentResult>;
};

export type ApiFieldStatPlayer = ApiFieldStatCourseFit | ApiFieldStatCurrentForm;

export type ApiFieldStatStrokesGained = {
  readonly __typename: 'FieldStatStrokesGained';
  readonly statColor: ApiStatColor;
  readonly statId: Scalars['String']['output'];
  readonly statValue: Scalars['String']['output'];
};

export type ApiFieldStatTournamentResult = {
  readonly __typename: 'FieldStatTournamentResult';
  readonly columnIndex: Scalars['Int']['output'];
  readonly endDate: Scalars['String']['output'];
  readonly name: Scalars['String']['output'];
  readonly position: Scalars['String']['output'];
  readonly score: Scalars['String']['output'];
  readonly season: Scalars['Int']['output'];
  readonly tourCode: Scalars['String']['output'];
  readonly tournamentId: Scalars['String']['output'];
};

export type ApiFieldStatType =
  | 'COURSE_FIT'
  | 'CURRENT_FORM'
  | 'TOURNAMENT_HISTORY';

export type ApiFieldStats = {
  readonly __typename: 'FieldStats';
  readonly fieldStatType: ApiFieldStatType;
  readonly players: ReadonlyArray<ApiFieldStatPlayer>;
  readonly statHeaders?: Maybe<ReadonlyArray<Scalars['String']['output']>>;
  readonly tournamentId: Scalars['ID']['output'];
  readonly tournamentSeasonHeaders?: Maybe<ReadonlyArray<ApiSeasonDisplayHeader>>;
};

export type ApiFinishStatValue = {
  readonly __typename: 'FinishStatValue';
  readonly date: Scalars['Int']['output'];
  readonly displayDate: Scalars['String']['output'];
  readonly displayValue: Scalars['String']['output'];
  readonly tournamentName: Scalars['String']['output'];
  readonly value: Scalars['Float']['output'];
};

export type ApiFormatType =
  | 'MATCH_PLAY'
  | 'STABLEFORD'
  | 'STROKE_PLAY'
  | 'TEAM_CUP'
  | 'TEAM_STROKE';

export type ApiFranchise = {
  readonly __typename: 'Franchise';
  readonly displayName: Scalars['String']['output'];
  readonly queryValue: Scalars['String']['output'];
};

export type ApiFranchisePillConfig = {
  readonly __typename: 'FranchisePillConfig';
  readonly category?: Maybe<Scalars['String']['output']>;
  readonly franchises: ReadonlyArray<ApiFranchise>;
  readonly rating?: Maybe<Scalars['Int']['output']>;
};

export type ApiFutureVenuesCard = {
  readonly __typename: 'FutureVenuesCard';
  readonly course?: Maybe<Scalars['String']['output']>;
  readonly coursePhoto?: Maybe<Scalars['String']['output']>;
  readonly cta?: Maybe<ApiCallToAction>;
  readonly location?: Maybe<Scalars['String']['output']>;
  readonly venueLink?: Maybe<Scalars['String']['output']>;
  readonly year?: Maybe<Scalars['String']['output']>;
};

export type ApiFutureVenuesFragment = {
  readonly __typename: 'FutureVenuesFragment';
  readonly bottomCta?: Maybe<ApiCallToAction>;
  readonly cards?: Maybe<ReadonlyArray<ApiFutureVenuesCard>>;
  readonly sectionTitle?: Maybe<Scalars['String']['output']>;
  readonly topCta?: Maybe<ApiCallToAction>;
};

export type ApiFutureVenuesRow = {
  readonly __typename: 'FutureVenuesRow';
  /** @deprecated Use beautyImageAsset */
  readonly beautyImage?: Maybe<Scalars['String']['output']>;
  readonly beautyImageAsset?: Maybe<ApiImageAsset>;
  readonly course?: Maybe<Scalars['String']['output']>;
  readonly eventDates?: Maybe<Scalars['String']['output']>;
  readonly hospitalityLink?: Maybe<Scalars['String']['output']>;
  readonly hospitalityLinkTarget?: Maybe<Scalars['String']['output']>;
  readonly location?: Maybe<Scalars['String']['output']>;
  readonly moreInfoDescription?: Maybe<ReadonlyArray<Maybe<ApiNewsArticleNode>>>;
  readonly ticketLink?: Maybe<Scalars['String']['output']>;
  readonly ticketLinkTarget?: Maybe<Scalars['String']['output']>;
  readonly volunteersLink?: Maybe<Scalars['String']['output']>;
  readonly volunteersLinkTarget?: Maybe<Scalars['String']['output']>;
  readonly year?: Maybe<Scalars['String']['output']>;
};

export type ApiFutureVenuesTableFragment = {
  readonly __typename: 'FutureVenuesTableFragment';
  readonly rows: ReadonlyArray<ApiFutureVenuesRow>;
};

export type ApiGenericContent = {
  readonly __typename: 'GenericContent';
  readonly adConfigNode?: Maybe<Scalars['String']['output']>;
  readonly authorReference?: Maybe<ApiNewsArticleAuthor>;
  readonly datePublished: Scalars['AWSTimestamp']['output'];
  readonly headline: Scalars['String']['output'];
  readonly metadata?: Maybe<ApiNewsArticleMetadata>;
  readonly nodes: ReadonlyArray<ApiNewsArticleNode>;
  readonly path: Scalars['String']['output'];
};

export type ApiGenericContentCompressed = {
  readonly __typename: 'GenericContentCompressed';
  readonly path: Scalars['String']['output'];
  readonly payload: Scalars['String']['output'];
};

export type ApiGlobalAdConfig = {
  readonly __typename: 'GlobalAdConfig';
  readonly actRefresh: Scalars['Boolean']['output'];
  readonly adUnitId: Scalars['String']['output'];
  readonly environment: Scalars['String']['output'];
  readonly fluid: Scalars['Boolean']['output'];
  readonly injectAds?: Maybe<Scalars['Boolean']['output']>;
  readonly networkId: Scalars['String']['output'];
  readonly playerSponsorship: Scalars['Boolean']['output'];
  readonly refresh: Scalars['Int']['output'];
  readonly timedRefresh?: Maybe<Scalars['Boolean']['output']>;
};

export type ApiGroup = {
  readonly __typename: 'Group';
  readonly backNine: Scalars['Boolean']['output'];
  readonly courseId?: Maybe<Scalars['String']['output']>;
  readonly courseName?: Maybe<Scalars['String']['output']>;
  readonly groupHole: Scalars['Int']['output'];
  readonly groupLocation: Scalars['String']['output'];
  readonly groupLocationCode: Scalars['String']['output'];
  readonly groupNumber: Scalars['Int']['output'];
  readonly groupSort: Scalars['String']['output'];
  readonly groupStatus: ApiPlayerState;
  readonly holeLocation: Scalars['String']['output'];
  readonly players: ReadonlyArray<ApiPlayer>;
  readonly showScorecard: Scalars['Boolean']['output'];
  readonly startTee: Scalars['Int']['output'];
  readonly teeTime: Scalars['AWSTimestamp']['output'];
  readonly tourcastURI?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastURL?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastURLWeb?: Maybe<Scalars['String']['output']>;
};

export type ApiGroupHoleLocation =
  | 'COMPLETE'
  | 'FAIRWAY'
  | 'GREEN'
  | 'NOT_STARTED'
  | 'TEE'
  | 'UNKNOWN';

export type ApiGroupLocation = {
  readonly __typename: 'GroupLocation';
  readonly courses: ReadonlyArray<ApiGroupLocationCourse>;
  readonly tournamentId: Scalars['ID']['output'];
};

export type ApiGroupLocationCourse = {
  readonly __typename: 'GroupLocationCourse';
  readonly courseId: Scalars['String']['output'];
  readonly courseName: Scalars['String']['output'];
  readonly holes: ReadonlyArray<ApiGroupLocationHole>;
  readonly round: Scalars['Int']['output'];
  readonly tournamentAndCourseId: Scalars['ID']['output'];
  readonly tournamentId: Scalars['String']['output'];
};

export type ApiGroupLocationData = {
  readonly __typename: 'GroupLocationData';
  readonly backNinePaceOfPlayTime?: Maybe<Scalars['String']['output']>;
  readonly courseId: Scalars['String']['output'];
  readonly currentHole?: Maybe<Scalars['String']['output']>;
  readonly frontNinePaceOfPlayTime?: Maybe<Scalars['String']['output']>;
  readonly group: Scalars['Int']['output'];
  readonly location: Scalars['String']['output'];
  readonly locationCode: ApiGroupHoleLocation;
  readonly locationSort: Scalars['String']['output'];
  readonly teeTime?: Maybe<Scalars['AWSTimestamp']['output']>;
};

export type ApiGroupLocationGroup = {
  readonly __typename: 'GroupLocationGroup';
  readonly color?: Maybe<Scalars['String']['output']>;
  readonly groupNum: Scalars['Int']['output'];
  readonly groupSort: Scalars['String']['output'];
  readonly location: ApiGroupHoleLocation;
  readonly playerData?: Maybe<ApiGroupLocationPlayerData>;
  readonly round: Scalars['Int']['output'];
};

export type ApiGroupLocationHole = {
  readonly __typename: 'GroupLocationHole';
  readonly groups: ReadonlyArray<ApiGroupLocationGroup>;
  readonly holeNumber: Scalars['Int']['output'];
  readonly par: Scalars['Int']['output'];
  readonly yardage: Scalars['Int']['output'];
};

export type ApiGroupLocationPlayerData = {
  readonly __typename: 'GroupLocationPlayerData';
  readonly addressingBall?: Maybe<Scalars['String']['output']>;
  readonly nextToHit?: Maybe<Scalars['String']['output']>;
};

export type ApiGroupRoundScore = {
  readonly __typename: 'GroupRoundScore';
  readonly holes: ReadonlyArray<ApiGroupScoreHeader>;
  readonly parTotal: Scalars['Int']['output'];
  readonly players: ReadonlyArray<ApiGroupScorePlayer>;
  readonly totalLabel: Scalars['String']['output'];
};

export type ApiGroupScoreHeader = {
  readonly __typename: 'GroupScoreHeader';
  readonly holeNumber: Scalars['Int']['output'];
  readonly par: Scalars['Int']['output'];
};

export type ApiGroupScorePlayer = {
  readonly __typename: 'GroupScorePlayer';
  readonly active: Scalars['Boolean']['output'];
  readonly player: ApiPlayer;
  readonly roundTotal: Scalars['String']['output'];
  readonly roundTotalHeader: Scalars['String']['output'];
  readonly rowTotal: Scalars['String']['output'];
  readonly scores: ReadonlyArray<ApiSimpleScore>;
};

export type ApiGroupScorecard = {
  readonly __typename: 'GroupScorecard';
  readonly backNine: Scalars['Boolean']['output'];
  readonly courseId?: Maybe<Scalars['String']['output']>;
  readonly courseName: Scalars['String']['output'];
  readonly currentHole: Scalars['Int']['output'];
  readonly firstNine: ApiGroupRoundScore;
  readonly holeDetail: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
  readonly locationDetail: Scalars['String']['output'];
  readonly players: ReadonlyArray<ApiScorecardHeaderPlayer>;
  readonly roundHeader: Scalars['String']['output'];
  readonly secondNine: ApiGroupRoundScore;
  readonly teeTime: Scalars['AWSTimestamp']['output'];
  readonly tourcastURL?: Maybe<Scalars['String']['output']>;
};

export type ApiGroupShotDetails = {
  readonly __typename: 'GroupShotDetails';
  readonly defaultHolePickle: ApiHolePickleType;
  readonly displayType: ApiShotDetailsDisplayType;
  readonly groupNumber: Scalars['Int']['output'];
  readonly holes: ReadonlyArray<ApiGroupShotDetailsHole>;
  readonly id: Scalars['ID']['output'];
  readonly message: Scalars['String']['output'];
  readonly players: ReadonlyArray<ApiGroupShotDetailsPlayer>;
  readonly round: Scalars['Int']['output'];
  readonly shotVideo?: Maybe<ApiVideo>;
  readonly shotVideos?: Maybe<ReadonlyArray<ApiVideo>>;
  readonly tournamentId: Scalars['String']['output'];
};

export type ApiGroupShotDetailsCompressed = {
  readonly __typename: 'GroupShotDetailsCompressed';
  readonly id: Scalars['ID']['output'];
  readonly payload: Scalars['String']['output'];
};

export type ApiGroupShotDetailsHole = {
  readonly __typename: 'GroupShotDetailsHole';
  readonly activePlayers: ReadonlyArray<Scalars['String']['output']>;
  readonly displayHoleNumber: Scalars['String']['output'];
  readonly enhancedPickle?: Maybe<ApiHolePickle>;
  readonly fairwayCenter: ApiStrokeCoordinates;
  readonly green: Scalars['Boolean']['output'];
  readonly holeNumber: Scalars['Int']['output'];
  /** @deprecated Use holePickleBottomToTopAsset */
  readonly holePickleBottomToTop: Scalars['String']['output'];
  readonly holePickleBottomToTopAsset: ApiImageAsset;
  /** @deprecated Use holePickleGreenBottomToTopAsset */
  readonly holePickleGreenBottomToTop: Scalars['String']['output'];
  readonly holePickleGreenBottomToTopAsset: ApiImageAsset;
  /** @deprecated Use holePickleGreenLeftToRightAsset */
  readonly holePickleGreenLeftToRight: Scalars['String']['output'];
  readonly holePickleGreenLeftToRightAsset: ApiImageAsset;
  /** @deprecated Use holePickleLeftToRightAsset */
  readonly holePickleLeftToRight: Scalars['String']['output'];
  readonly holePickleLeftToRightAsset: ApiImageAsset;
  readonly par: Scalars['Int']['output'];
  readonly pinGreen: ApiPointOfInterestCoords;
  readonly pinOverview: ApiPointOfInterestCoords;
  readonly rank?: Maybe<Scalars['String']['output']>;
  readonly strokes: ReadonlyArray<ApiGroupShotDetailsStroke>;
  readonly teeGreen: ApiPointOfInterestCoords;
  readonly teeOverview: ApiPointOfInterestCoords;
  readonly yardage: Scalars['Int']['output'];
};

export type ApiGroupShotDetailsPlayer = {
  readonly __typename: 'GroupShotDetailsPlayer';
  readonly displayName: Scalars['String']['output'];
  readonly firstName: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
  readonly lastName: Scalars['String']['output'];
  readonly lineColor: Scalars['String']['output'];
  readonly shortName: Scalars['String']['output'];
};

export type ApiGroupShotDetailsStroke = {
  readonly __typename: 'GroupShotDetailsStroke';
  readonly playByPlayLabel: Scalars['String']['output'];
  readonly players: ReadonlyArray<ApiGroupShotDetailsStrokePlayer>;
  readonly strokeNumber: Scalars['Int']['output'];
};

export type ApiGroupShotDetailsStrokePlayer = {
  readonly __typename: 'GroupShotDetailsStrokePlayer';
  readonly ballPath?: Maybe<ApiBallPath>;
  readonly displayName: Scalars['String']['output'];
  readonly distance: Scalars['String']['output'];
  readonly distanceRemaining: Scalars['String']['output'];
  readonly finalShot: Scalars['Boolean']['output'];
  readonly fromLocation: Scalars['String']['output'];
  readonly fromLocationCode: Scalars['String']['output'];
  readonly green: ApiShotLinkCoordWrapper;
  readonly markerText: Scalars['String']['output'];
  readonly overview: ApiShotLinkCoordWrapper;
  readonly playByPlay: Scalars['String']['output'];
  readonly playerId: Scalars['String']['output'];
  readonly radarData?: Maybe<ApiRadarData>;
  readonly score: Scalars['String']['output'];
  readonly shortName: Scalars['String']['output'];
  readonly showMarker: Scalars['Boolean']['output'];
  readonly status: ApiHoleScoreStatus;
  readonly strokeType: ApiHoleStrokeType;
  readonly toLocation: Scalars['String']['output'];
  readonly toLocationCode: Scalars['String']['output'];
  readonly videoId?: Maybe<Scalars['String']['output']>;
};

export type ApiGroupShotDetailsTeam = {
  readonly __typename: 'GroupShotDetailsTeam';
  readonly players?: Maybe<ReadonlyArray<ApiGroupShotDetailsPlayer>>;
  readonly teamId: Scalars['String']['output'];
  readonly teamName: Scalars['String']['output'];
};

export type ApiGroupStageGroup = {
  readonly __typename: 'GroupStageGroup';
  readonly groupHeader: Scalars['String']['output'];
  readonly groupPlayers: ReadonlyArray<ApiGroupStagePlayer>;
};

export type ApiGroupStageHeader = {
  readonly __typename: 'GroupStageHeader';
  readonly lost: Scalars['String']['output'];
  readonly player: Scalars['String']['output'];
  readonly points: Scalars['String']['output'];
  readonly tied: Scalars['String']['output'];
  readonly type: ApiHeaderType;
  readonly won: Scalars['String']['output'];
};

export type ApiGroupStagePlayer = {
  readonly __typename: 'GroupStagePlayer';
  readonly bracketSeed: Scalars['String']['output'];
  readonly countryFlag: Scalars['String']['output'];
  readonly countryName: Scalars['String']['output'];
  readonly displayName: Scalars['String']['output'];
  readonly firstName: Scalars['String']['output'];
  readonly groupRankDisplayText?: Maybe<Scalars['String']['output']>;
  /** @deprecated URL should be built using player ID */
  readonly headshot: Scalars['String']['output'];
  readonly lastName: Scalars['String']['output'];
  readonly latestMatchId: Scalars['ID']['output'];
  readonly latestRound: Scalars['Int']['output'];
  readonly playerId: Scalars['ID']['output'];
  readonly playoffWinner: Scalars['Boolean']['output'];
  readonly position: Scalars['String']['output'];
  readonly previousMatches: ApiPreviousMatches;
  readonly record: ApiPlayerRecord;
  readonly shortName: Scalars['String']['output'];
  readonly tournamentSeed: Scalars['String']['output'];
};

export type ApiGroupStageRankings = {
  readonly __typename: 'GroupStageRankings';
  readonly groupStageHeaders: ReadonlyArray<ApiGroupStageHeader>;
  readonly groups: ReadonlyArray<ApiGroupStageGroup>;
  readonly informationSections: ReadonlyArray<ApiInformationSection>;
  readonly title: Scalars['String']['output'];
  readonly tournamentId: Scalars['ID']['output'];
};

export type ApiGroupV2 = {
  readonly __typename: 'GroupV2';
  readonly backNine: Scalars['Boolean']['output'];
  readonly courseId?: Maybe<Scalars['String']['output']>;
  readonly courseName?: Maybe<Scalars['String']['output']>;
  readonly groupNumber: Scalars['Int']['output'];
  readonly players: ReadonlyArray<ApiPlayer>;
  readonly showScorecard: Scalars['Boolean']['output'];
  readonly startTee: Scalars['Int']['output'];
  readonly teeTime: Scalars['AWSTimestamp']['output'];
  readonly tourcastURI?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastURL?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastURLWeb?: Maybe<Scalars['String']['output']>;
};

export type ApiGroupedField = {
  readonly __typename: 'GroupedField';
  readonly alternates: ApiPlayerGroup;
  readonly features: ReadonlyArray<ApiFeatureItem>;
  readonly id: Scalars['ID']['output'];
  readonly lastUpdated?: Maybe<Scalars['AWSTimestamp']['output']>;
  readonly message?: Maybe<Scalars['String']['output']>;
  readonly players: ApiPlayerGroup;
  readonly standingsHeader: Scalars['String']['output'];
  readonly tournamentName: Scalars['String']['output'];
};

export type ApiHeaderType =
  | 'LONG'
  | 'SHORT';

export type ApiHeroCarousel = {
  readonly __typename: 'HeroCarousel';
  readonly displayInline: Scalars['Boolean']['output'];
  readonly slides: ReadonlyArray<ApiHeroCarouselItem>;
};

export type ApiHeroCarouselItem = {
  readonly __typename: 'HeroCarouselItem';
  readonly articleContent?: Maybe<ApiNewsArticle>;
  readonly autoplay?: Maybe<Scalars['Boolean']['output']>;
  readonly cta1?: Maybe<ApiCallToAction>;
  readonly cta2?: Maybe<ApiCallToAction>;
  readonly heroImage?: Maybe<Scalars['String']['output']>;
  readonly slideHeadline?: Maybe<Scalars['String']['output']>;
  readonly slideSubhead?: Maybe<Scalars['String']['output']>;
  readonly videoContent?: Maybe<ApiVideo>;
};

export type ApiHistoricalLeaderboard = {
  readonly __typename: 'HistoricalLeaderboard';
  readonly additionalDataHeaders: ReadonlyArray<Scalars['String']['output']>;
  readonly availableSeasons: ReadonlyArray<ApiStatYearPills>;
  readonly id: Scalars['ID']['output'];
  readonly players: ReadonlyArray<ApiHistoricalLeaderboardRow>;
  readonly recap?: Maybe<ApiWeatherNotes>;
  readonly rounds: ReadonlyArray<Scalars['String']['output']>;
  readonly teams?: Maybe<ReadonlyArray<Maybe<ApiHistoricalLeaderboardTeamRow>>>;
  readonly tournamentResultsMessage?: Maybe<ApiTournamentResultsMessage>;
  readonly winner?: Maybe<ApiWinner>;
  readonly winningTeam?: Maybe<ReadonlyArray<Maybe<ApiWinner>>>;
};

export type ApiHistoricalLeaderboardRow = {
  readonly __typename: 'HistoricalLeaderboardRow';
  readonly additionalData: ReadonlyArray<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly parRelativeScore: Scalars['String']['output'];
  readonly player: ApiPlayer;
  readonly position: Scalars['String']['output'];
  readonly rounds: ReadonlyArray<ApiHistoricalRoundScore>;
  readonly total: Scalars['String']['output'];
};

export type ApiHistoricalLeaderboardTeamRow = {
  readonly __typename: 'HistoricalLeaderboardTeamRow';
  readonly additionalData: ReadonlyArray<Scalars['String']['output']>;
  readonly parRelativeScore: Scalars['String']['output'];
  readonly players: ReadonlyArray<ApiPlayer>;
  readonly position: Scalars['String']['output'];
  readonly rounds?: Maybe<ReadonlyArray<ApiHistoricalRoundScore>>;
  readonly teamId: Scalars['String']['output'];
  readonly total: Scalars['String']['output'];
};

export type ApiHistoricalOddsId =
  | 'TOP_RANKED_3'
  | 'TOP_RANKED_5'
  | 'TOP_RANKED_10'
  | 'TOP_RANKED_20'
  | 'WINNER';

export type ApiHistoricalPlayerOdds = {
  readonly __typename: 'HistoricalPlayerOdds';
  readonly marketName: Scalars['String']['output'];
  readonly message?: Maybe<ApiOddsMessage>;
  readonly odds: Scalars['String']['output'];
  readonly oddsSwing: ApiOddsSwing;
  readonly optionId: Scalars['String']['output'];
  readonly playerId: Scalars['String']['output'];
  readonly season: Scalars['Int']['output'];
  readonly timeStamp: Scalars['AWSTimestamp']['output'];
  readonly tournamentId: Scalars['String']['output'];
};

export type ApiHistoricalPlayerScorecards = {
  readonly __typename: 'HistoricalPlayerScorecards';
  readonly playerId: Scalars['ID']['output'];
  readonly tours: ReadonlyArray<ApiHistoricalScorecardTour>;
};

export type ApiHistoricalRoundScore = {
  readonly __typename: 'HistoricalRoundScore';
  readonly parRelativeScore: Scalars['String']['output'];
  readonly score: Scalars['String']['output'];
};

export type ApiHistoricalScorecardTour = {
  readonly __typename: 'HistoricalScorecardTour';
  readonly tourCode: ApiTourCode;
  readonly years: ReadonlyArray<ApiHistoricalScorecardYear>;
};

export type ApiHistoricalScorecardYear = {
  readonly __typename: 'HistoricalScorecardYear';
  readonly displayYear: Scalars['String']['output'];
  readonly tournamentPills: ReadonlyArray<ApiStatTournamentPill>;
  readonly year: Scalars['Int']['output'];
};

/**
 *   End
 *  Market Abstractions
 */
export type ApiHistoricalTournamentOdds = {
  readonly __typename: 'HistoricalTournamentOdds';
  readonly id: Scalars['ID']['output'];
  readonly market?: Maybe<ApiMarket>;
  readonly message?: Maybe<ApiOddsMessage>;
  /**   tournamentId-provider */
  readonly provider: ApiOddsProvider;
  readonly tournamentId: Scalars['String']['output'];
};

export type ApiHistoricalTournamentOddsArgs = {
  readonly __typename: 'HistoricalTournamentOddsArgs';
  readonly marketId: ApiOddsMarketType;
  readonly timeStamp?: Maybe<Scalars['AWSDateTime']['output']>;
  readonly tournamentId: Scalars['String']['output'];
};

export type ApiHistoryInfo = {
  readonly __typename: 'HistoryInfo';
  readonly contentCarousel: ReadonlyArray<Maybe<ApiContentCarousel>>;
  readonly cta?: Maybe<ApiCallToAction>;
  readonly displayCta?: Maybe<Scalars['Boolean']['output']>;
  readonly europeCaptain?: Maybe<Scalars['String']['output']>;
  readonly infoText?: Maybe<ReadonlyArray<Maybe<ApiNewsArticleNode>>>;
  readonly usCaptain?: Maybe<Scalars['String']['output']>;
};

export type ApiHistoryScore = {
  readonly __typename: 'HistoryScore';
  readonly bottomCta?: Maybe<ApiCallToAction>;
  readonly leftFlagIcon?: Maybe<Scalars['String']['output']>;
  readonly leftScore?: Maybe<Scalars['String']['output']>;
  readonly leftTeam?: Maybe<Scalars['String']['output']>;
  readonly rightFlagIcon?: Maybe<Scalars['String']['output']>;
  readonly rightScore?: Maybe<Scalars['String']['output']>;
  readonly rightTeam?: Maybe<Scalars['String']['output']>;
  readonly sectionSubhead: Scalars['String']['output'];
  readonly sectionTitle: Scalars['String']['output'];
  readonly topCta?: Maybe<ApiCallToAction>;
  readonly trophyIcon?: Maybe<Scalars['String']['output']>;
};

export type ApiHoleDetail = {
  readonly __typename: 'HoleDetail';
  readonly courseId: Scalars['String']['output'];
  readonly holeImage: Scalars['String']['output'];
  readonly holeImageLandscape: Scalars['String']['output'];
  readonly holeInfo: ApiHoleDetailInfo;
  readonly holeNum: Scalars['Int']['output'];
  readonly id: Scalars['ID']['output'];
  readonly rounds: ReadonlyArray<ApiHoleDetailRound>;
  readonly statsAvailability: ApiHoleDetailsAvailability;
  readonly statsSummary: ApiHoleStatSummary;
  readonly tourcastURI?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastURL?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastURLWeb?: Maybe<Scalars['String']['output']>;
  readonly tournamentId: Scalars['ID']['output'];
};

export type ApiHoleDetailInfo = {
  readonly __typename: 'HoleDetailInfo';
  readonly aboutThisHole: Scalars['String']['output'];
  /** @deprecated Use holePickleGreenLeftToRightAsset */
  readonly greenPickle: Scalars['String']['output'];
  readonly holeNum: Scalars['Int']['output'];
  /** @deprecated Use holePickleLeftToRightAsset */
  readonly holePickle: Scalars['String']['output'];
  /** @deprecated Use holePickleBottomToTopAsset */
  readonly holePickleBottomToTop: Scalars['String']['output'];
  readonly holePickleBottomToTopAsset: ApiImageAsset;
  /** @deprecated Use holePickleGreenBottomToTopAsset */
  readonly holePickleGreenBottomToTop: Scalars['String']['output'];
  readonly holePickleGreenBottomToTopAsset: ApiImageAsset;
  readonly holePickleGreenLeftToRightAsset: ApiImageAsset;
  readonly holePickleLeftToRightAsset: ApiImageAsset;
  readonly par: Scalars['Int']['output'];
  readonly pinGreen: ApiPointOfInterestCoords;
  readonly rank?: Maybe<Scalars['Int']['output']>;
  readonly rounds?: Maybe<Scalars['Int']['output']>;
  readonly scoringAverageDiff: Scalars['String']['output'];
  readonly yards: Scalars['Int']['output'];
};

export type ApiHoleDetailRound = {
  readonly __typename: 'HoleDetailRound';
  readonly groups: ReadonlyArray<ApiHoleGroup>;
  readonly matches?: Maybe<ReadonlyArray<ApiHoleMatch>>;
  readonly roundNum: Scalars['Int']['output'];
  readonly teamGroups?: Maybe<ReadonlyArray<ApiTeamHoleGroups>>;
};

export type ApiHoleDetailsAvailability =
  | 'NONE'
  | 'SHOT_DETAILS'
  | 'STATS';

export type ApiHoleGroup = {
  readonly __typename: 'HoleGroup';
  readonly groupLocation: Scalars['String']['output'];
  readonly groupLocationCode: Scalars['String']['output'];
  readonly groupNumber: Scalars['Int']['output'];
  readonly players: ReadonlyArray<ApiHoleGroupPlayer>;
  readonly tourcastURI?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastURL?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastURLWeb?: Maybe<Scalars['String']['output']>;
};

export type ApiHoleGroupPlayer = {
  readonly __typename: 'HoleGroupPlayer';
  readonly country: Scalars['String']['output'];
  readonly countryFlag: Scalars['String']['output'];
  readonly firstName: Scalars['String']['output'];
  /** @deprecated URL should be built using player ID */
  readonly headshot: Scalars['String']['output'];
  readonly lastName: Scalars['String']['output'];
  readonly playerId: Scalars['ID']['output'];
  readonly position: Scalars['String']['output'];
  readonly roundScore: Scalars['String']['output'];
  readonly total: Scalars['String']['output'];
};

export type ApiHoleGroupTeam = {
  readonly __typename: 'HoleGroupTeam';
  readonly players: ReadonlyArray<ApiHoleGroupPlayer>;
};

export type ApiHoleHeader = {
  readonly __typename: 'HoleHeader';
  readonly hole: Scalars['String']['output'];
  readonly holeNumber: Scalars['Int']['output'];
  readonly par: Scalars['String']['output'];
};

export type ApiHoleHeaderV2 = {
  readonly __typename: 'HoleHeaderV2';
  readonly displayValue: Scalars['String']['output'];
  readonly holeNumber?: Maybe<Scalars['Int']['output']>;
  readonly order: Scalars['Int']['output'];
  readonly par: Scalars['String']['output'];
};

export type ApiHoleMatch = {
  readonly __typename: 'HoleMatch';
  readonly groupName?: Maybe<Scalars['String']['output']>;
  readonly match?: Maybe<ApiMpLeaderboardMatch>;
  readonly matchLocation: Scalars['String']['output'];
  readonly matchLocationCode: Scalars['String']['output'];
  readonly tourcastURI?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastURL?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastURLWeb?: Maybe<Scalars['String']['output']>;
};

export type ApiHolePickle = {
  readonly __typename: 'HolePickle';
  readonly bottomToTop: Scalars['String']['output'];
  readonly bottomToTopAsset: ApiImageAsset;
  readonly greenBottomToTop: Scalars['String']['output'];
  readonly greenBottomToTopAsset: ApiImageAsset;
  readonly greenLeftToRight: Scalars['String']['output'];
  readonly greenLeftToRightAsset: ApiImageAsset;
  readonly leftToRight: Scalars['String']['output'];
  readonly leftToRightAsset: ApiImageAsset;
};

export type ApiHolePickleType =
  | 'STANDARD'
  | 'TOURCAST_2D';

export type ApiHolePlayedStatus =
  | 'PLAYED'
  | 'UNPLAYED';

export type ApiHoleScore = {
  readonly __typename: 'HoleScore';
  readonly holeNumber: Scalars['Int']['output'];
  readonly par: Scalars['Int']['output'];
  readonly roundScore: Scalars['String']['output'];
  readonly score: Scalars['String']['output'];
  readonly sequenceNumber: Scalars['Int']['output'];
  readonly status: ApiHoleScoreStatus;
  readonly yardage: Scalars['Int']['output'];
};

export type ApiHoleScoreStatus =
  | 'BIRDIE'
  | 'BOGEY'
  | 'CONCEDED'
  | 'DOUBLE_BOGEY'
  | 'EAGLE'
  | 'NONE'
  | 'PAR';

export type ApiHoleStat = ApiCourseHoleStats | ApiSummaryRow;

export type ApiHoleStatSummary = {
  readonly __typename: 'HoleStatSummary';
  readonly birdies?: Maybe<Scalars['Int']['output']>;
  readonly birdiesPercent: Scalars['String']['output'];
  readonly bogeys?: Maybe<Scalars['Int']['output']>;
  readonly bogeysPercent: Scalars['String']['output'];
  readonly courseId: Scalars['String']['output'];
  readonly doubleBogeys?: Maybe<Scalars['Int']['output']>;
  readonly doubleBogeysPercent: Scalars['String']['output'];
  readonly eagles?: Maybe<Scalars['Int']['output']>;
  readonly eaglesPercent: Scalars['String']['output'];
  readonly holeNum: Scalars['Int']['output'];
  readonly pars?: Maybe<Scalars['Int']['output']>;
  readonly parsPercent: Scalars['String']['output'];
  readonly scoringAverage?: Maybe<Scalars['String']['output']>;
  readonly tournamentId: Scalars['ID']['output'];
};

export type ApiHoleStroke = {
  readonly __typename: 'HoleStroke';
  readonly ballPath?: Maybe<ApiBallPath>;
  readonly distance: Scalars['String']['output'];
  readonly distanceRemaining: Scalars['String']['output'];
  readonly finalStroke: Scalars['Boolean']['output'];
  readonly fromLocation: Scalars['String']['output'];
  readonly fromLocationCode: Scalars['String']['output'];
  readonly green: ApiShotLinkCoordWrapper;
  readonly groupShowMarker: Scalars['Boolean']['output'];
  readonly markerText: Scalars['String']['output'];
  readonly overview: ApiShotLinkCoordWrapper;
  readonly playByPlay: Scalars['String']['output'];
  readonly playByPlayLabel: Scalars['String']['output'];
  readonly player?: Maybe<ApiTspStrokePlayer>;
  readonly radarData?: Maybe<ApiRadarData>;
  readonly showMarker: Scalars['Boolean']['output'];
  readonly strokeNumber: Scalars['Int']['output'];
  readonly strokeType: ApiHoleStrokeType;
  readonly toLocation: Scalars['String']['output'];
  readonly toLocationCode: Scalars['String']['output'];
  readonly videoId?: Maybe<Scalars['String']['output']>;
};

export type ApiHoleStrokeType =
  | 'DROP'
  | 'PENALTY'
  | 'PROVISIONAL'
  | 'STROKE';

export type ApiHomePageLeadLayout =
  | 'HALF_HERO'
  | 'HALF_HERO_STACK'
  | 'HERO_STATUS'
  | 'HERO_STORY'
  | 'PLAYER_STORIES'
  | 'TOPIC_STORIES';

export type ApiHomePageNewsLayout =
  | 'THREE_UP_ASSET'
  | 'TWO_UP_LARGE'
  | 'TWO_UP_SMALL'
  | 'TWO_UP_TEXT_ONLY';

export type ApiHomePageProgramStandingLayout =
  | 'FIELD_PROMO_SECTION'
  | 'NORMAL'
  | 'SHORT'
  | 'SIGNATURE_EVENT_STANDINGS'
  | 'TWO_STANDINGS';

export type ApiHomePageStanding = {
  readonly __typename: 'HomePageStanding';
  readonly country: Scalars['String']['output'];
  readonly countryFlag: Scalars['String']['output'];
  readonly firstName: Scalars['String']['output'];
  readonly image: Scalars['String']['output'];
  readonly lastName: Scalars['String']['output'];
  readonly playerId: Scalars['String']['output'];
  readonly rank?: Maybe<Scalars['Int']['output']>;
  readonly stats: ReadonlyArray<ApiProgramStat>;
};

export type ApiHomepage = {
  readonly __typename: 'Homepage';
  readonly fragments: ReadonlyArray<ApiHomepageFragment>;
};

export type ApiHomepageAssets = ApiNewsArticle | ApiVideo;

export type ApiHomepageCta = {
  readonly __typename: 'HomepageCta';
  readonly link: Scalars['String']['output'];
  readonly text: Scalars['String']['output'];
  readonly topText: Scalars['String']['output'];
};

export type ApiHomepageFragment = ApiHomepageLead | ApiHomepageNews | ApiHomepageProgramStanding | ApiMediaGallery | ApiOddsToWinTracker | ApiThreeUpPhoto;

export type ApiHomepageLead = {
  readonly __typename: 'HomepageLead';
  readonly ambientVideo?: Maybe<ApiVideo>;
  readonly content: ReadonlyArray<ApiHomepageAssets>;
  readonly cta?: Maybe<ApiHomepageCta>;
  readonly displayDateTime?: Maybe<Scalars['Boolean']['output']>;
  readonly displayPlayerPromoStats?: Maybe<Scalars['Boolean']['output']>;
  readonly halfHeroShortHeadline?: Maybe<Scalars['Boolean']['output']>;
  readonly headlineColor?: Maybe<Scalars['String']['output']>;
  readonly headlineJustification?: Maybe<Scalars['String']['output']>;
  readonly headshot?: Maybe<ApiProfileHeadshot>;
  readonly leadLayout: ApiHomePageLeadLayout;
  readonly location?: Maybe<ApiTournamentLocation>;
  readonly photoJustification?: Maybe<Scalars['String']['output']>;
  readonly playerId: Scalars['String']['output'];
  readonly playerScore?: Maybe<ApiHomepagePlayerScore>;
  readonly sectionTitle?: Maybe<Scalars['String']['output']>;
  readonly topStats?: Maybe<ReadonlyArray<Maybe<ApiPlayerProfileStatItem>>>;
  readonly topicLabel?: Maybe<Scalars['String']['output']>;
  readonly weather?: Maybe<ApiTournamentWeather>;
};

export type ApiHomepageNews = {
  readonly __typename: 'HomepageNews';
  readonly content: ReadonlyArray<ApiHomepageAssets>;
  readonly cta?: Maybe<ApiHomepageCta>;
  readonly displayDateTime?: Maybe<Scalars['Boolean']['output']>;
  readonly franchises: ReadonlyArray<Scalars['String']['output']>;
  readonly limit: Scalars['String']['output'];
  readonly newsLayout: ApiHomePageNewsLayout;
  readonly title: Scalars['String']['output'];
};

export type ApiHomepagePlayerScore = {
  readonly __typename: 'HomepagePlayerScore';
  readonly playerId: Scalars['ID']['output'];
  readonly round: Scalars['String']['output'];
  readonly roundScore: Scalars['String']['output'];
  readonly score: Scalars['String']['output'];
  readonly total?: Maybe<Scalars['String']['output']>;
};

export type ApiHomepageProgramStanding = {
  readonly __typename: 'HomepageProgramStanding';
  readonly backgroundImg?: Maybe<Scalars['String']['output']>;
  readonly cta?: Maybe<ApiHomepageCta>;
  readonly lastProcessed?: Maybe<Scalars['String']['output']>;
  readonly pullFieldUpdates?: Maybe<Scalars['Boolean']['output']>;
  readonly secondaryStandings?: Maybe<ReadonlyArray<Maybe<ApiHomePageStanding>>>;
  readonly secondaryStandingsTitle?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use sponsorImgAsset */
  readonly sponsorImg?: Maybe<Scalars['String']['output']>;
  readonly sponsorImgAsset?: Maybe<ApiImageAsset>;
  readonly standingLayout: ApiHomePageProgramStandingLayout;
  readonly standings?: Maybe<ReadonlyArray<Maybe<ApiHomePageStanding>>>;
  readonly standingsTitle?: Maybe<Scalars['String']['output']>;
  readonly title: Scalars['String']['output'];
};

export type ApiHomepageScoring = {
  readonly __typename: 'HomepageScoring';
  readonly desktopCta?: Maybe<ApiCallToAction>;
  readonly path: Scalars['String']['output'];
  readonly pillCta?: Maybe<ApiCallToAction>;
  readonly sectionTitle?: Maybe<Scalars['String']['output']>;
  readonly tournamentId?: Maybe<Scalars['String']['output']>;
};

export type ApiHospitalityCard = {
  readonly __typename: 'HospitalityCard';
  readonly blueBackground: Scalars['Boolean']['output'];
  readonly cardDescription?: Maybe<ReadonlyArray<Maybe<ApiNewsArticleNode>>>;
  readonly cardPhoto?: Maybe<Scalars['String']['output']>;
  readonly cardTitle?: Maybe<Scalars['String']['output']>;
  readonly cta?: Maybe<ApiCallToAction>;
  readonly cta2?: Maybe<ApiCallToAction>;
  readonly photoSubtitle?: Maybe<Scalars['String']['output']>;
};

export type ApiIcon =
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

export type ApiImage = {
  readonly __typename: 'Image';
  readonly imageCreator?: Maybe<Scalars['String']['output']>;
  readonly imageDescription?: Maybe<Scalars['String']['output']>;
  readonly imageOrientation?: Maybe<ApiOrientation>;
  readonly url?: Maybe<Scalars['String']['output']>;
};

export type ApiImageAsset = {
  readonly __typename: 'ImageAsset';
  readonly assetType?: Maybe<Scalars['String']['output']>;
  /**   will always be image */
  readonly deliveryType?: Maybe<Scalars['String']['output']>;
  /**   either "upload" or "fetch" */
  readonly fallbackImage?: Maybe<Scalars['String']['output']>;
  readonly imageOrg: Scalars['String']['output'];
  readonly imagePath: Scalars['String']['output'];
};

export type ApiImageBlock = {
  readonly __typename: 'ImageBlock';
  readonly backgroundImage?: Maybe<Scalars['String']['output']>;
  readonly cta?: Maybe<ApiCallToAction>;
  readonly textNodes?: Maybe<ReadonlyArray<Maybe<ApiNewsArticleNode>>>;
};

export type ApiInformationData = {
  readonly __typename: 'InformationData';
  readonly detail?: Maybe<Scalars['String']['output']>;
  readonly label: Scalars['String']['output'];
  readonly secondaryDetail?: Maybe<Scalars['String']['output']>;
  readonly smallCopy?: Maybe<Scalars['Boolean']['output']>;
  readonly value: Scalars['String']['output'];
  readonly wide?: Maybe<Scalars['Boolean']['output']>;
};

export type ApiInformationRow = {
  readonly __typename: 'InformationRow';
  readonly displayText: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
  readonly leaderboardSortOrder: Scalars['Int']['output'];
  readonly mobileDisplayText: Scalars['String']['output'];
  readonly sponsorLogo?: Maybe<ApiImageAsset>;
  readonly sponsorName?: Maybe<Scalars['String']['output']>;
};

export type ApiInformationSection = {
  readonly __typename: 'InformationSection';
  readonly items: ReadonlyArray<ApiInformationSectionItem>;
  readonly sponsorImages?: Maybe<ReadonlyArray<ApiSponsorImage>>;
  readonly title: Scalars['String']['output'];
};

export type ApiInformationSectionItem = ApiAbbreviations | ApiLegend;

export type ApiIntegratedComponent = {
  readonly __typename: 'IntegratedComponent';
  readonly index: Scalars['Int']['output'];
  readonly partner: ApiIntegrationPartner;
};

export type ApiIntegrationPartner =
  | 'GOLFWRX';

export type ApiJumpToSection = {
  readonly __typename: 'JumpToSection';
  readonly anchorHtmlId?: Maybe<ReadonlyArray<Scalars['String']['output']>>;
  readonly dropdownText?: Maybe<ReadonlyArray<Scalars['String']['output']>>;
};

export type ApiKopContentType = ApiNewsArticleHeader | ApiNewsArticleImage | ApiNewsArticleLineBreak | ApiNewsArticleLink | ApiNewsArticleParagraph | ApiNewsArticleText | ApiTableFragment | ApiUnorderedListNode;

export type ApiKitOfParts = {
  readonly __typename: 'KitOfParts';
  readonly fragments: ReadonlyArray<ApiKopFragment>;
};

export type ApiKopFragment = ApiHomepageNews | ApiKopHeader | ApiKopSignUp | ApiKopStandingsList | ApiKopSubheader | ApiKopUpcomingTournament | ApiKopZigZag | ApiThreeUpPhoto | ApiThreeUpStats | ApiTwoColumn | ApiVideoHero;

export type ApiKopHeader = {
  readonly __typename: 'KopHeader';
  readonly cta?: Maybe<ApiCallToAction>;
  readonly headerTitle: Scalars['String']['output'];
  readonly headlineColor?: Maybe<Scalars['String']['output']>;
  readonly image?: Maybe<Scalars['String']['output']>;
  readonly logo?: Maybe<Scalars['String']['output']>;
  readonly opacity?: Maybe<Scalars['String']['output']>;
  readonly titleJustification?: Maybe<Scalars['String']['output']>;
};

export type ApiKopSignUp = {
  readonly __typename: 'KopSignUp';
  readonly backgroundColor?: Maybe<Scalars['String']['output']>;
  readonly backgroundImage?: Maybe<Scalars['String']['output']>;
  readonly cta?: Maybe<ApiCallToAction>;
  readonly ctaColor?: Maybe<Scalars['String']['output']>;
  readonly header?: Maybe<Scalars['String']['output']>;
  readonly logo?: Maybe<Scalars['String']['output']>;
  readonly signUpText?: Maybe<Scalars['String']['output']>;
  readonly textColor?: Maybe<Scalars['String']['output']>;
};

export type ApiKopStandingsList = {
  readonly __typename: 'KopStandingsList';
  readonly cta?: Maybe<ApiCallToAction>;
  readonly sectionTitle: Scalars['String']['output'];
  readonly standings?: Maybe<ReadonlyArray<Maybe<ApiHomePageStanding>>>;
  readonly type?: Maybe<Scalars['String']['output']>;
};

export type ApiKopSubheader = {
  readonly __typename: 'KopSubheader';
  readonly cta?: Maybe<ApiCallToAction>;
  readonly displayCta?: Maybe<Scalars['Boolean']['output']>;
  readonly logo?: Maybe<Scalars['String']['output']>;
  readonly subHeaderText?: Maybe<ReadonlyArray<Maybe<ApiNewsArticleNode>>>;
  readonly type?: Maybe<Scalars['String']['output']>;
};

export type ApiKopUpcomingTournament = {
  readonly __typename: 'KopUpcomingTournament';
  readonly title: Scalars['String']['output'];
};

export type ApiKopZigZag = {
  readonly __typename: 'KopZigZag';
  readonly backgroundColorOne?: Maybe<Scalars['String']['output']>;
  readonly backgroundColorTwo?: Maybe<Scalars['String']['output']>;
  readonly ctaOne?: Maybe<ApiCallToAction>;
  readonly ctaTwo?: Maybe<ApiCallToAction>;
  readonly descriptionBackgroundColorOne?: Maybe<Scalars['String']['output']>;
  readonly descriptionBackgroundColorTwo?: Maybe<Scalars['String']['output']>;
  readonly descriptionOne?: Maybe<ReadonlyArray<Maybe<ApiNewsArticleNode>>>;
  readonly descriptionTwo?: Maybe<ReadonlyArray<Maybe<ApiNewsArticleNode>>>;
  readonly imageOne?: Maybe<Scalars['String']['output']>;
  readonly imageTwo?: Maybe<Scalars['String']['output']>;
  readonly subHeader?: Maybe<Scalars['String']['output']>;
  readonly zigZaHeader: Scalars['String']['output'];
};

export type ApiLbRound = {
  readonly __typename: 'LBRound';
  readonly displayText: Scalars['String']['output'];
  readonly roundNumber: Scalars['Int']['output'];
};

export type ApiLeaderStat = {
  readonly __typename: 'LeaderStat';
  readonly country: Scalars['String']['output'];
  readonly countryFlag: Scalars['String']['output'];
  readonly playerId: Scalars['String']['output'];
  readonly playerName: Scalars['String']['output'];
  readonly rank: Scalars['String']['output'];
  readonly statId: Scalars['String']['output'];
  readonly statTitle: Scalars['String']['output'];
  readonly statValue: Scalars['String']['output'];
};

export type ApiLeaderboardCompressed = {
  readonly __typename: 'LeaderboardCompressed';
  readonly id: Scalars['ID']['output'];
  readonly payload: Scalars['String']['output'];
};

export type ApiLeaderboardCompressedV2 = {
  readonly __typename: 'LeaderboardCompressedV2';
  readonly id: Scalars['ID']['output'];
  readonly payload: Scalars['String']['output'];
};

/**   Returns the leaderboard for a tournament where payload contains the leaderboard data in Base64 encoding. */
export type ApiLeaderboardCompressedV3 = {
  readonly __typename: 'LeaderboardCompressedV3';
  /**   The tournament ID */
  readonly id: Scalars['ID']['output'];
  /**   The full leaderboard payload/response. Will need to be Base64 decoded by clients */
  readonly payload: Scalars['String']['output'];
};

export type ApiLeaderboardDrawerV2 = {
  readonly __typename: 'LeaderboardDrawerV2';
  readonly backNine: Scalars['Boolean']['output'];
  readonly currentHole?: Maybe<Scalars['Int']['output']>;
  readonly currentRound: Scalars['Int']['output'];
  readonly groupNumber: Scalars['Int']['output'];
  readonly id: Scalars['ID']['output'];
  readonly player: ApiPlayer;
  readonly playerState?: Maybe<ApiPlayerState>;
  readonly roundScores: ReadonlyArray<ApiRoundScore>;
  readonly teeTime: Scalars['AWSTimestamp']['output'];
  readonly tournamentName: Scalars['String']['output'];
};

export type ApiLeaderboardFeature =
  | 'HOLE_BY_HOLE'
  | 'ODDS'
  | 'PROBABILITIES'
  | 'SHOT_DETAILS'
  | 'STROKES_GAINED';

export type ApiLeaderboardHoleByHole = {
  readonly __typename: 'LeaderboardHoleByHole';
  readonly courseHoleHeaders: ReadonlyArray<ApiCourseHoleHeader>;
  readonly courses: ReadonlyArray<ApiCourse>;
  readonly currentRound: Scalars['Int']['output'];
  /** @deprecated use courseHoleHeaders */
  readonly holeHeaders: ReadonlyArray<ApiHoleHeader>;
  readonly playerData: ReadonlyArray<ApiPlayerRowHoleByHole>;
  readonly rounds: ReadonlyArray<ApiLbRound>;
  readonly tournamentId: Scalars['ID']['output'];
  readonly tournamentName: Scalars['String']['output'];
};

export type ApiLeaderboardInfo = {
  readonly __typename: 'LeaderboardInfo';
  /** @deprecated can ignore, we remove sponship in MW */
  readonly disableCdw: Scalars['Boolean']['output'];
  readonly informationSections: ReadonlyArray<ApiInformationSection>;
  readonly odds: Scalars['Boolean']['output'];
  readonly tournamentId: Scalars['ID']['output'];
};

export type ApiLeaderboardMessage = {
  readonly __typename: 'LeaderboardMessage';
  readonly externalLink?: Maybe<Scalars['Boolean']['output']>;
  readonly messageIcon: ApiLeaderboardMessageIcon;
  readonly messageLink?: Maybe<Scalars['String']['output']>;
  readonly messageText: Scalars['String']['output'];
  readonly platforms: ReadonlyArray<ApiPlatform>;
  readonly timing?: Maybe<Scalars['Int']['output']>;
  readonly webViewLink?: Maybe<Scalars['String']['output']>;
};

export type ApiLeaderboardMessageIcon =
  | 'DELAY'
  | 'NONE'
  | 'WEATHER';

export type ApiLeaderboardMovement =
  | 'CONSTANT'
  | 'DOWN'
  | 'UP';

export type ApiLeaderboardOddsSwing = {
  readonly __typename: 'LeaderboardOddsSwing';
  readonly swing: ApiOddsSwing;
};

/**   new enum of possible player icon values, limited to hot streak at first creation */
export type ApiLeaderboardPlayerIcon =
  | 'HOT_STREAK';

export type ApiLeaderboardRoundStats = {
  readonly __typename: 'LeaderboardRoundStats';
  readonly players: ReadonlyArray<ApiLeaderboardStatsPlayer>;
  readonly roundDisplayText: Scalars['String']['output'];
  readonly roundNumber: Scalars['Int']['output'];
};

export type ApiLeaderboardRowV2 = ApiInformationRow | ApiPlayerRowV2;

export type ApiLeaderboardRowV3 = ApiInformationRow | ApiPlayerRowV3;

export type ApiLeaderboardScoringDataV3 = {
  readonly __typename: 'LeaderboardScoringDataV3';
  readonly backNine: Scalars['Boolean']['output'];
  /**   COURSE */
  readonly courseId: Scalars['String']['output'];
  readonly currentRound: Scalars['Int']['output'];
  /**   LOCATION */
  readonly groupNumber: Scalars['Int']['output'];
  /**   PLAYER STORIES */
  readonly hasStoryContent: Scalars['Boolean']['output'];
  readonly movementAmount: Scalars['String']['output'];
  readonly movementDirection: ApiLeaderboardMovement;
  readonly movementSort?: Maybe<Scalars['Int']['output']>;
  readonly oddsOptionId?: Maybe<Scalars['String']['output']>;
  readonly oddsSort?: Maybe<Scalars['Float']['output']>;
  readonly oddsSwing?: Maybe<ApiOddsSwing>;
  /**   ODDS */
  readonly oddsToWin?: Maybe<Scalars['String']['output']>;
  /**   POINTS */
  readonly official: Scalars['String']['output'];
  readonly officialSort: Scalars['Int']['output'];
  /**   Player icon, first us is for hot streak */
  readonly playerIcon?: Maybe<ApiLeaderboardPlayerIcon>;
  readonly playerState: ApiPlayerState;
  readonly position: Scalars['String']['output'];
  readonly projected: Scalars['String']['output'];
  readonly projectedSort: Scalars['Int']['output'];
  readonly rankLogoDark?: Maybe<Scalars['String']['output']>;
  readonly rankLogoLight?: Maybe<Scalars['String']['output']>;
  readonly rankingMovement: ApiCupRankMovementDirection;
  readonly rankingMovementAmount: Scalars['String']['output'];
  readonly rankingMovementAmountSort: Scalars['Int']['output'];
  readonly roundDisplaySort?: Maybe<ReadonlyArray<Maybe<Scalars['Int']['output']>>>;
  readonly roundHeader: Scalars['String']['output'];
  readonly roundStatus: Scalars['String']['output'];
  readonly rounds: ReadonlyArray<Scalars['String']['output']>;
  readonly score: Scalars['String']['output'];
  readonly scoreSort: Scalars['Int']['output'];
  readonly storyContentRound?: Maybe<Scalars['Int']['output']>;
  readonly storyContentRounds: ReadonlyArray<Scalars['Int']['output']>;
  readonly teeTime?: Maybe<Scalars['AWSTimestamp']['output']>;
  readonly thru: Scalars['String']['output'];
  readonly thruSort: Scalars['Int']['output'];
  readonly tooltipText?: Maybe<Scalars['String']['output']>;
  readonly tooltipTitle?: Maybe<Scalars['String']['output']>;
  readonly total: Scalars['String']['output'];
  readonly totalSort: Scalars['Int']['output'];
  /**
   *   null to hide value
   *  SCORING
   */
  readonly totalStrokes: Scalars['String']['output'];
  readonly totalStrokesSort?: Maybe<Scalars['Int']['output']>;
};

export type ApiLeaderboardStatItem = {
  readonly __typename: 'LeaderboardStatItem';
  readonly color: Scalars['String']['output'];
  readonly rank: Scalars['String']['output'];
  readonly sortValue: Scalars['Float']['output'];
  readonly statId: Scalars['String']['output'];
  readonly supportValues?: Maybe<ReadonlyArray<ApiLeaderboardStatSupportValues>>;
  readonly value: Scalars['String']['output'];
};

export type ApiLeaderboardStatSupportValues = ApiLeaderboardOddsSwing | ApiLeaderboardSupportingString;

export type ApiLeaderboardStats = {
  readonly __typename: 'LeaderboardStats';
  readonly id: Scalars['String']['output'];
  readonly players: ReadonlyArray<ApiLeaderboardStatsPlayer>;
  readonly rounds?: Maybe<ReadonlyArray<ApiLeaderboardRoundStats>>;
  readonly statIds?: Maybe<ReadonlyArray<Scalars['String']['output']>>;
  readonly titles: ReadonlyArray<Scalars['String']['output']>;
  readonly type: ApiLeaderboardStatsType;
};

export type ApiLeaderboardStatsPlayer = {
  readonly __typename: 'LeaderboardStatsPlayer';
  readonly playerId: Scalars['String']['output'];
  readonly stats: ReadonlyArray<ApiLeaderboardStatItem>;
};

export type ApiLeaderboardStatsType =
  | 'ODDS'
  | 'PROBABILITY'
  | 'STROKES_GAINED';

export type ApiLeaderboardStroke = {
  readonly __typename: 'LeaderboardStroke';
  readonly currentHole: Scalars['Int']['output'];
  readonly currentHoleDisplay: Scalars['String']['output'];
  readonly currentHoleValueDisplay: Scalars['String']['output'];
  readonly currentRound: Scalars['Int']['output'];
  readonly currentShot: Scalars['Int']['output'];
  readonly currentShotDisplay: Scalars['String']['output'];
  readonly finalStroke: Scalars['Boolean']['output'];
  readonly id: Scalars['ID']['output'];
  readonly par: Scalars['String']['output'];
  readonly parSort: Scalars['Int']['output'];
  readonly playByPlay: Scalars['String']['output'];
  readonly playerId: Scalars['String']['output'];
  readonly playoffHole: Scalars['Int']['output'];
  readonly playoffHoleDisplay: Scalars['String']['output'];
  readonly scoreStatus: ApiHoleScoreStatus;
  readonly strokeId: Scalars['String']['output'];
  readonly yardage: Scalars['String']['output'];
  readonly yardageSort: Scalars['Int']['output'];
};

export type ApiLeaderboardStrokes = {
  readonly __typename: 'LeaderboardStrokes';
  readonly id: Scalars['ID']['output'];
  readonly playoffs?: Maybe<ReadonlyArray<ApiLeaderboardStroke>>;
  readonly strokes: ReadonlyArray<ApiLeaderboardStroke>;
};

export type ApiLeaderboardStrokesCompressed = {
  readonly __typename: 'LeaderboardStrokesCompressed';
  readonly id: Scalars['ID']['output'];
  readonly payload: Scalars['String']['output'];
};

export type ApiLeaderboardSupportingString = {
  readonly __typename: 'LeaderboardSupportingString';
  readonly data: Scalars['String']['output'];
};

export type ApiLeaderboardUpdateCompressed = {
  readonly __typename: 'LeaderboardUpdateCompressed';
  readonly id: Scalars['ID']['output'];
  readonly payload: Scalars['String']['output'];
};

export type ApiLeaderboardUpdateCompressedV3 = {
  readonly __typename: 'LeaderboardUpdateCompressedV3';
  readonly id: Scalars['ID']['output'];
  readonly payload: Scalars['String']['output'];
};

export type ApiLeaderboardUpdatePlayerV3 = {
  readonly __typename: 'LeaderboardUpdatePlayerV3';
  readonly id: Scalars['ID']['output'];
  readonly leaderboardSortOrder: Scalars['Int']['output'];
  readonly scoringData: ApiLeaderboardScoringDataV3;
};

export type ApiLeaderboardUpdateRowV3 = ApiInformationRow | ApiLeaderboardUpdatePlayerV3;

export type ApiLeaderboardUpdateV3 = {
  readonly __typename: 'LeaderboardUpdateV3';
  readonly cutLineProbabilities?: Maybe<ApiCutLineInfo>;
  readonly id: Scalars['ID']['output'];
  readonly isPlayoffActive: Scalars['Boolean']['output'];
  readonly leaderboardRoundHeader: Scalars['String']['output'];
  readonly messages: ReadonlyArray<ApiLeaderboardMessage>;
  readonly players: ReadonlyArray<ApiLeaderboardUpdateRowV3>;
  readonly rounds: ReadonlyArray<ApiLbRound>;
  readonly subEvent: Scalars['Boolean']['output'];
  readonly tournamentStatus: ApiTournamentStatus;
  readonly winner?: Maybe<ApiWinner>;
  readonly winners?: Maybe<ReadonlyArray<ApiWinner>>;
};

export type ApiLeaderboardV2 = {
  readonly __typename: 'LeaderboardV2';
  readonly courses: ReadonlyArray<ApiCourse>;
  readonly disableLeaderboard: Scalars['Boolean']['output'];
  /** @deprecated use leaderboardFeatures */
  readonly features?: Maybe<ReadonlyArray<ApiLeaderboardFeature>>;
  readonly formatType: ApiFormatType;
  readonly id: Scalars['ID']['output'];
  /** @deprecated Use the leaderboard legend query */
  readonly informationSections: ReadonlyArray<ApiInformationSection>;
  readonly isPlayoffActive: Scalars['Boolean']['output'];
  readonly leaderboardFeatures?: Maybe<ReadonlyArray<ApiFeatureItem>>;
  readonly leaderboardRoundHeader: Scalars['String']['output'];
  readonly messages: ReadonlyArray<ApiLeaderboardMessage>;
  readonly players: ReadonlyArray<ApiLeaderboardRowV2>;
  readonly profileEnabled: Scalars['Boolean']['output'];
  readonly roundDisplay: Scalars['String']['output'];
  readonly roundStatus: ApiRoundStatus;
  readonly roundStatusColor: ApiRoundStatusColor;
  readonly roundStatusDisplay: Scalars['String']['output'];
  readonly rounds: ReadonlyArray<ApiLbRound>;
  readonly scorecardEnabled: Scalars['Boolean']['output'];
  readonly standingsEnabled: Scalars['Boolean']['output'];
  readonly standingsHeader: Scalars['String']['output'];
  readonly subEvent: Scalars['Boolean']['output'];
  readonly timezone: Scalars['String']['output'];
  readonly tourcastURI?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastURL?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastURLWeb?: Maybe<Scalars['String']['output']>;
  readonly tournamentStatus: ApiTournamentStatus;
  readonly winner?: Maybe<ApiWinner>;
};

export type ApiLeaderboardV3 = {
  readonly __typename: 'LeaderboardV3';
  readonly bubblePill?: Maybe<ApiBubblePill>;
  readonly courses: ReadonlyArray<ApiCourse>;
  readonly cutLineProbabilities?: Maybe<ApiCutLineInfo>;
  readonly disableBettingProfileColumn: Scalars['Boolean']['output'];
  readonly disableLeaderboard: Scalars['Boolean']['output'];
  readonly disableOdds: Scalars['Boolean']['output'];
  readonly formatType: ApiFormatType;
  readonly hideSov: Scalars['Boolean']['output'];
  readonly id: Scalars['ID']['output'];
  readonly isPlayoffActive: Scalars['Boolean']['output'];
  readonly leaderboardFeatures?: Maybe<ReadonlyArray<ApiFeatureItem>>;
  readonly leaderboardRoundHeader: Scalars['String']['output'];
  readonly messages: ReadonlyArray<ApiLeaderboardMessage>;
  readonly players: ReadonlyArray<ApiLeaderboardRowV3>;
  readonly profileEnabled: Scalars['Boolean']['output'];
  readonly rounds: ReadonlyArray<ApiLbRound>;
  readonly scorecardEnabled: Scalars['Boolean']['output'];
  readonly standingsEnabled: Scalars['Boolean']['output'];
  readonly standingsHeader: Scalars['String']['output'];
  readonly subEvent: Scalars['Boolean']['output'];
  readonly timezone: Scalars['String']['output'];
  readonly tourcastURI?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastURL?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastURLWeb?: Maybe<Scalars['String']['output']>;
  readonly tournamentId: Scalars['String']['output'];
  readonly tournamentStatus: ApiTournamentStatus;
  /** @deprecated use winners */
  readonly winner?: Maybe<ApiWinner>;
  readonly winners?: Maybe<ReadonlyArray<ApiWinner>>;
};

export type ApiLegend = {
  readonly __typename: 'Legend';
  readonly accessibilityText?: Maybe<Scalars['String']['output']>;
  readonly icon: ApiIcon;
  readonly iconUrl?: Maybe<Scalars['String']['output']>;
  readonly subText?: Maybe<Scalars['String']['output']>;
  readonly text?: Maybe<Scalars['String']['output']>;
  readonly title: Scalars['String']['output'];
};

export type ApiListItem = {
  readonly __typename: 'ListItem';
  readonly segments: ReadonlyArray<Maybe<ApiListNodeItems>>;
};

export type ApiListNodeItems = ApiNewsArticleContentSegment | ApiNewsArticleParagraph | ApiNewsArticlePlayerTournamentOdds | ApiUnorderedListNode;

export type ApiLiveOverride =
  | 'FORCE_OFF'
  | 'FORCE_ON'
  | 'NORMAL';

export type ApiLiveStatus =
  | 'LIVE'
  | 'NONE'
  | 'UPCOMING';

export type ApiLiveVideoOverride = {
  readonly __typename: 'LiveVideoOverride';
  readonly simulcast?: Maybe<ApiBroadcastFullTelecast>;
  readonly tourCode: ApiTourCode;
  readonly videos: ReadonlyArray<ApiVideo>;
};

export type ApiMpHolePlayer = {
  readonly __typename: 'MPHolePlayer';
  readonly holePoints?: Maybe<Scalars['String']['output']>;
  readonly holeScore?: Maybe<Scalars['String']['output']>;
  /**   used for four ball type scoring */
  readonly holeScoreStatus?: Maybe<ApiHoleScoreStatus>;
  readonly holeScores?: Maybe<ReadonlyArray<ApiMatchHoleScore>>;
  readonly playerId: Scalars['ID']['output'];
};

export type ApiMpLeaderboard = {
  readonly __typename: 'MPLeaderboard';
  readonly courses: ReadonlyArray<ApiCourse>;
  readonly currentRound: Scalars['Int']['output'];
  readonly drawersEnabled: Scalars['Boolean']['output'];
  readonly formatType: ApiFormatType;
  readonly id: Scalars['ID']['output'];
  readonly infoWebUrl: Scalars['String']['output'];
  readonly informationSections: ReadonlyArray<ApiInformationSection>;
  readonly messages: ReadonlyArray<ApiLeaderboardMessage>;
  readonly roundFilters: ReadonlyArray<ApiRoundFilter>;
  readonly rounds: ReadonlyArray<ApiMpLeaderboardRound>;
  readonly shortTimezone: Scalars['String']['output'];
  readonly timezone: Scalars['String']['output'];
  readonly tourcastURI?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastURL?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastUrlWeb?: Maybe<Scalars['String']['output']>;
  readonly winner?: Maybe<ApiMpLeaderboardPlayer>;
};

export type ApiMpLeaderboardBracket = {
  readonly __typename: 'MPLeaderboardBracket';
  readonly bracketHeader: Scalars['String']['output'];
  readonly bracketNum?: Maybe<Scalars['Int']['output']>;
  readonly matches: ReadonlyArray<ApiMpLeaderboardMatch>;
  readonly upcomingMatches?: Maybe<ReadonlyArray<ApiUpcomingMatch>>;
};

export type ApiMpLeaderboardMatch = {
  readonly __typename: 'MPLeaderboardMatch';
  readonly bracketPlayerSwap?: Maybe<Scalars['Boolean']['output']>;
  readonly matchId: Scalars['ID']['output'];
  readonly matchScore?: Maybe<Scalars['String']['output']>;
  readonly matchScoreColor?: Maybe<Scalars['String']['output']>;
  readonly matchScoreColorDark?: Maybe<Scalars['String']['output']>;
  readonly matchStatus: ApiMatchStatus;
  readonly players: ReadonlyArray<ApiMpLeaderboardPlayer>;
  readonly teeTime: Scalars['AWSTimestamp']['output'];
  readonly thru?: Maybe<Scalars['String']['output']>;
  readonly thruNumberOfHoles?: Maybe<Scalars['Int']['output']>;
};

export type ApiMpLeaderboardPlayer = {
  readonly __typename: 'MPLeaderboardPlayer';
  readonly activeInPlayoff?: Maybe<Scalars['Boolean']['output']>;
  readonly bracketSeed: Scalars['String']['output'];
  readonly countryFlag: Scalars['String']['output'];
  readonly countryName: Scalars['String']['output'];
  readonly displayColor: Scalars['String']['output'];
  readonly displayName: Scalars['String']['output'];
  readonly firstName: Scalars['String']['output'];
  /** @deprecated URL should be built using player ID */
  readonly headshot: Scalars['String']['output'];
  readonly isAmateur: Scalars['Boolean']['output'];
  readonly lastName: Scalars['String']['output'];
  readonly matchStatus?: Maybe<Scalars['String']['output']>;
  readonly playerId: Scalars['ID']['output'];
  readonly record?: Maybe<Scalars['String']['output']>;
  readonly shortName?: Maybe<Scalars['String']['output']>;
  readonly tournamentSeed: Scalars['String']['output'];
};

export type ApiMpLeaderboardRound = {
  readonly __typename: 'MPLeaderboardRound';
  readonly brackets: ReadonlyArray<ApiMpLeaderboardBracket>;
  readonly round: Scalars['Int']['output'];
  readonly roundHeader: Scalars['String']['output'];
  readonly roundStatusSubHead: Scalars['String']['output'];
  readonly roundTypeSubHead: Scalars['String']['output'];
};

export type ApiMpMatchTeeTimes = {
  readonly __typename: 'MPMatchTeeTimes';
  readonly matchId: Scalars['ID']['output'];
  readonly players: ReadonlyArray<ApiMpTeeTimePlayer>;
  readonly status: Scalars['String']['output'];
  readonly tee: Scalars['String']['output'];
  readonly teeTime: Scalars['AWSTimestamp']['output'];
  readonly timezone: Scalars['String']['output'];
};

export type ApiMpPlayoffScorecard = {
  readonly __typename: 'MPPlayoffScorecard';
  readonly currentHole?: Maybe<Scalars['Int']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly infoWebUrl?: Maybe<Scalars['String']['output']>;
  readonly playoff: ApiPlayoff;
  readonly scorecardTitle: Scalars['String']['output'];
  readonly tourcastURI?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastURL?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastUrlWeb?: Maybe<Scalars['String']['output']>;
};

export type ApiMpRoundTeeTimes = {
  readonly __typename: 'MPRoundTeeTimes';
  readonly matchTeeTimes: ReadonlyArray<ApiMpMatchTeeTimes>;
  readonly roundNumber: Scalars['Int']['output'];
};

export type ApiMpScorecard = {
  readonly __typename: 'MPScorecard';
  readonly currentHole?: Maybe<Scalars['Int']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly infoWebUrl?: Maybe<Scalars['String']['output']>;
  readonly matchHoleScores: ReadonlyArray<ApiMatchHole>;
  readonly matchName: Scalars['String']['output'];
  readonly matchPlayers: ReadonlyArray<ApiMpScorecardPlayer>;
  readonly messages: ReadonlyArray<ApiMessage>;
  readonly scorecardTitle: Scalars['String']['output'];
  readonly tourcastURI?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastUrl?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastUrlWeb?: Maybe<Scalars['String']['output']>;
};

export type ApiMpScorecardPlayer = {
  readonly __typename: 'MPScorecardPlayer';
  readonly countryFlag: Scalars['String']['output'];
  readonly displayColor: Scalars['String']['output'];
  readonly displayName: Scalars['String']['output'];
  readonly firstName: Scalars['String']['output'];
  readonly isAmateur: Scalars['Boolean']['output'];
  readonly lastName: Scalars['String']['output'];
  readonly playerId: Scalars['ID']['output'];
  readonly seed: Scalars['String']['output'];
  readonly shortName: Scalars['String']['output'];
};

export type ApiMpScorecardResults = {
  readonly __typename: 'MPScorecardResults';
  readonly matchId: Scalars['String']['output'];
  readonly messages?: Maybe<ReadonlyArray<ApiMessage>>;
  readonly players: ReadonlyArray<ApiMpScorecardResultsPlayer>;
  readonly roundNum: Scalars['Int']['output'];
  readonly tournamentId: Scalars['String']['output'];
};

export type ApiMpScorecardResultsPlayer = {
  readonly __typename: 'MPScorecardResultsPlayer';
  readonly displayName: Scalars['String']['output'];
  readonly playerId: Scalars['ID']['output'];
  readonly previousRounds: ReadonlyArray<ApiPreviousRounds>;
};

export type ApiMpTeeTimePlayer = {
  readonly __typename: 'MPTeeTimePlayer';
  readonly countryFlag: Scalars['String']['output'];
  readonly displayName: Scalars['String']['output'];
  /** @deprecated URL should be built using player ID */
  readonly headshot: Scalars['String']['output'];
  readonly playerId: Scalars['ID']['output'];
  readonly shortName: Scalars['String']['output'];
};

export type ApiMpTeeTimes = {
  readonly __typename: 'MPTeeTimes';
  readonly defaultRound: Scalars['Int']['output'];
  readonly drawersEnabled: Scalars['Boolean']['output'];
  readonly id: Scalars['ID']['output'];
  readonly roundFilters: ReadonlyArray<ApiRoundFilter>;
  readonly rounds: ReadonlyArray<ApiMpRoundTeeTimes>;
  readonly teeTimeHeaders: ReadonlyArray<ApiTeeTimeHeader>;
  readonly title: Scalars['String']['output'];
};

export type ApiMajorResultsTournament = {
  readonly __typename: 'MajorResultsTournament';
  readonly courseName: Scalars['String']['output'];
  readonly date: Scalars['String']['output'];
  readonly money: Scalars['String']['output'];
  readonly position: Scalars['String']['output'];
  readonly roundScores: ReadonlyArray<ApiRoundScoreItem>;
  readonly toPar: Scalars['String']['output'];
  readonly total: Scalars['String']['output'];
  readonly tourcastURI?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastURL?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastURLWeb?: Maybe<Scalars['String']['output']>;
  readonly tournamentId: Scalars['String']['output'];
  readonly tournamentName: Scalars['String']['output'];
  readonly year: Scalars['Int']['output'];
};

export type ApiMajorTimeline = {
  readonly __typename: 'MajorTimeline';
  readonly finishes: ReadonlyArray<Scalars['String']['output']>;
  readonly tournamentName: Scalars['String']['output'];
  readonly tournamentNum: Scalars['String']['output'];
};

export type ApiMarket = {
  readonly __typename: 'Market';
  readonly header: Scalars['String']['output'];
  /**   used for switching between submarkets like "Group A" */
  readonly marketType: ApiOddsMarketType;
  /**   Tournament Winner */
  readonly subMarketPills?: Maybe<ReadonlyArray<Scalars['String']['output']>>;
  readonly subMarkets: ReadonlyArray<ApiSubMarket>;
};

export type ApiMarketPill = {
  readonly __typename: 'MarketPill';
  readonly displayText: Scalars['String']['output'];
  readonly marketType: ApiOddsMarketType;
};

export type ApiMatchCard = {
  readonly __typename: 'MatchCard';
  readonly matchId?: Maybe<Scalars['String']['output']>;
  readonly path: Scalars['String']['output'];
  readonly round?: Maybe<Scalars['String']['output']>;
  readonly tourcastWebview?: Maybe<Scalars['String']['output']>;
  readonly tournamentId?: Maybe<Scalars['String']['output']>;
};

export type ApiMatchHole = {
  readonly __typename: 'MatchHole';
  readonly courseHoleNumber: Scalars['String']['output'];
  readonly holeNumber: Scalars['String']['output'];
  readonly holeNumberColor: Scalars['String']['output'];
  readonly holeOutlineColor?: Maybe<Scalars['String']['output']>;
  readonly holePlayedStatus: ApiHolePlayedStatus;
  readonly matchHolePlayers: ReadonlyArray<ApiMpHolePlayer>;
  readonly matchScore?: Maybe<Scalars['String']['output']>;
  readonly matchScoreColor: Scalars['String']['output'];
  readonly parValue: Scalars['String']['output'];
};

export type ApiMatchHoleScore = {
  readonly __typename: 'MatchHoleScore';
  readonly holeScore?: Maybe<Scalars['String']['output']>;
  readonly holeScoreStatus?: Maybe<ApiHoleScoreStatus>;
  readonly playerId: Scalars['ID']['output'];
};

export type ApiMatchStatus =
  | 'COMPLETE'
  | 'IN_PROGRESS'
  | 'UPCOMING';

export type ApiMatchupOptionV2 = ApiBaseOddsOption & {
  readonly __typename: 'MatchupOptionV2';
  readonly entity: ApiOddsEntity;
  readonly isTie: Scalars['Boolean']['output'];
  readonly odds: ApiOddsValues;
};

export type ApiMatchupsPlayer = {
  readonly __typename: 'MatchupsPlayer';
  readonly countryFlag?: Maybe<Scalars['String']['output']>;
  readonly currentRound?: Maybe<Scalars['Int']['output']>;
  readonly displayName: Scalars['String']['output'];
  readonly firstName: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
  readonly lastName: Scalars['String']['output'];
  readonly matchId?: Maybe<Scalars['Int']['output']>;
  readonly odds: Scalars['String']['output'];
  readonly oddsSwing?: Maybe<ApiOddsSwing>;
  readonly optionsId: Scalars['String']['output'];
  readonly seed?: Maybe<Scalars['Int']['output']>;
};

export type ApiMediaGallery = {
  readonly __typename: 'MediaGallery';
  readonly contentDescription?: Maybe<ReadonlyArray<Maybe<Scalars['String']['output']>>>;
  readonly cta?: Maybe<ApiHomepageCta>;
  readonly mediaGallery?: Maybe<ReadonlyArray<Maybe<Scalars['String']['output']>>>;
  readonly mediaGalleryObjs?: Maybe<ReadonlyArray<Maybe<ApiMediaGalleryItems>>>;
  readonly sectionTitle?: Maybe<Scalars['String']['output']>;
};

export type ApiMediaGalleryItem = {
  readonly __typename: 'MediaGalleryItem';
  readonly orientation?: Maybe<ApiOrientation>;
  readonly path?: Maybe<Scalars['String']['output']>;
};

export type ApiMediaGalleryItems = ApiMediaGalleryItem | ApiVideo;

export type ApiMessage = {
  readonly __typename: 'Message';
  readonly body: ReadonlyArray<Scalars['String']['output']>;
  readonly title?: Maybe<Scalars['String']['output']>;
};

export type ApiMessageBanner = {
  readonly __typename: 'MessageBanner';
  readonly messageLink?: Maybe<Scalars['String']['output']>;
  readonly messageText?: Maybe<Scalars['String']['output']>;
  readonly path: Scalars['String']['output'];
};

export type ApiMobileCategoryPill = {
  readonly __typename: 'MobileCategoryPill';
  readonly category?: Maybe<ApiStatCategory>;
  readonly displayName: Scalars['String']['output'];
};

export type ApiMobileStat = {
  readonly __typename: 'MobileStat';
  readonly statId: Scalars['String']['output'];
  readonly statTitle: Scalars['String']['output'];
};

export type ApiMobileStatCategoryLeaders = {
  readonly __typename: 'MobileStatCategoryLeaders';
  readonly category: ApiStatCategory;
  readonly categoryHeader: Scalars['String']['output'];
  readonly leaders: ReadonlyArray<ApiLeaderStat>;
  readonly stats: ReadonlyArray<ApiMobileStat>;
};

export type ApiMobileStatLeaders = {
  readonly __typename: 'MobileStatLeaders';
  readonly categories: ReadonlyArray<ApiMobileStatCategoryLeaders>;
  readonly categoryPills: ReadonlyArray<ApiMobileCategoryPill>;
  readonly tourCode: ApiTourCode;
  readonly year: Scalars['Int']['output'];
};

export type ApiMutation = {
  readonly __typename: 'Mutation';
  readonly addFavoriteTour: ApiFavoriteTourResponse;
  readonly addFavorites: ReadonlyArray<ApiFavoritePlayer>;
  readonly addNotificationTags: ApiNotificationTagResponse;
  readonly deleteAccount: ApiDeleteAccountResponse;
  readonly deleteFavorites: ReadonlyArray<ApiFavoritePlayer>;
  readonly deleteNotificationTags: ApiNotificationTagResponse;
  readonly unsubscribe: ApiUnsubscribeResponse;
  readonly updateBubble?: Maybe<ApiBubbleWatch>;
  readonly updateBubbleWatch?: Maybe<ApiTourCupRankingEvent>;
  readonly updateCourseStats?: Maybe<ApiTournamentHoleStats>;
  readonly updateCoverage?: Maybe<ApiBroadcastCoverage>;
  readonly updateCupOverviewLeaderboard?: Maybe<ApiCupTournamentStatus>;
  readonly updateCupRoundLeaderboard?: Maybe<ApiCupTournamentLeaderboard>;
  readonly updateCupRoundLeaderboardCompressed?: Maybe<ApiCupTournamentLeaderboardCompressed>;
  readonly updateCupScorecard?: Maybe<ApiCupScorecard>;
  readonly updateCurrentLeadersCompressed?: Maybe<ApiCurrentLeadersCompressed>;
  readonly updateGroupLocations?: Maybe<ApiGroupLocationCourse>;
  readonly updateGroupLocationsEnhanced?: Maybe<ApiGroupLocationCourse>;
  readonly updateHoleDetails?: Maybe<ApiHoleDetail>;
  readonly updateLeaderboardCompressedV2?: Maybe<ApiLeaderboardCompressedV2>;
  readonly updateLeaderboardCompressedV3?: Maybe<ApiLeaderboardUpdateCompressedV3>;
  readonly updateLeaderboardStrokes?: Maybe<ApiLeaderboardStrokes>;
  readonly updateLeaderboardStrokesCompressed?: Maybe<ApiLeaderboardStrokesCompressed>;
  readonly updateLeaderboardV2?: Maybe<ApiLeaderboardV2>;
  readonly updateMatchOutcomeIq?: Maybe<ApiRyderCupMatchOutcomeIq>;
  readonly updateMatchPlayLeaderboard?: Maybe<ApiMpLeaderboard>;
  readonly updateMatchPlayLeaderboardCompressed?: Maybe<ApiLeaderboardCompressed>;
  readonly updateMatchPlayPlayoffScorecard?: Maybe<ApiMpPlayoffScorecard>;
  readonly updateMatchPlayScorecard?: Maybe<ApiMpScorecard>;
  readonly updateMatchPlayTeeTimes: ApiMpTeeTimes;
  readonly updateMatchPlayTeeTimesCompressed?: Maybe<ApiTeeTimesCompressed>;
  readonly updateOddsToWinMarket?: Maybe<ApiOddsToWinMarket>;
  readonly updateOddsToWinMarketCompressed?: Maybe<ApiOddsToWinMarketCompressed>;
  readonly updatePlayerHub?: Maybe<ApiPlayerHubPlayerCompressed>;
  readonly updatePlayerTournamentStatus?: Maybe<ApiPlayerTournamentStatus>;
  readonly updatePlayoffScorecard?: Maybe<ApiPlayoffScorecard>;
  readonly updatePlayoffScorecardV2: ReadonlyArray<ApiPlayoffScorecard>;
  readonly updatePlayoffScorecardV3: ApiTournamentPlayoffScorecards;
  readonly updatePlayoffShotDetails: ApiGroupShotDetails;
  readonly updatePlayoffShotDetailsCompressed: ApiGroupShotDetailsCompressed;
  readonly updateScorecardCompressedV3?: Maybe<ApiScorecardUpdateCompressedV3>;
  readonly updateScorecardStats?: Maybe<ApiPlayerScorecardStats>;
  readonly updateScorecardStatsCompressedV3?: Maybe<ApiPlayerScorecardStatsCompressed>;
  readonly updateScorecardV2?: Maybe<ApiLeaderboardDrawerV2>;
  readonly updateShotCommentary?: Maybe<ApiShotCommentary>;
  readonly updateShotDetailsCompressedV3?: Maybe<ApiShotDetailsCompressedV3>;
  readonly updateTGLMatch?: Maybe<ApiTglMatch>;
  readonly updateTSPPlayoffShotDetails: ApiTeamShotDetails;
  readonly updateTSPPlayoffShotDetailsCompressed: ApiTeamShotDetailsCompressed;
  readonly updateTeamPlayLeaderboard?: Maybe<ApiTspLeaderboard>;
  readonly updateTeamPlayLeaderboardCompressed?: Maybe<ApiLeaderboardCompressed>;
  readonly updateTeamPlayScorecard?: Maybe<ApiTspScorecard>;
  readonly updateTeamPlayScorecardRounds?: Maybe<ApiTspScorecardRounds>;
  readonly updateTeamStrokePlayTeeTimes?: Maybe<ApiTspTeeTimes>;
  readonly updateTeamStrokePlayTeeTimesCompressed?: Maybe<ApiTeeTimesCompressed>;
  readonly updateTeeTimes?: Maybe<ApiTeeTimes>;
  readonly updateTeeTimesCompressed?: Maybe<ApiTeeTimesCompressed>;
  readonly updateTeeTimesCompressedV2?: Maybe<ApiTeeTimesCompressed>;
  readonly updateTeeTimesV2?: Maybe<ApiTeeTimesV2>;
  readonly updateTourCup?: Maybe<ApiTourCupRankingEvent>;
  readonly updateTourcastTable?: Maybe<ApiTourcastTable>;
  readonly updateTournament?: Maybe<ApiTournament>;
  readonly updateTournamentGroupLocations?: Maybe<ApiTournamentGroupLocation>;
  readonly updateUpcomingSchedule?: Maybe<ApiScheduleUpcoming>;
};


export type ApiMutationAddFavoriteTourArgs = {
  tourCode: ApiTourCode;
};


export type ApiMutationAddFavoritesArgs = {
  favorites: ReadonlyArray<ApiFavoritePlayerInput>;
};


export type ApiMutationAddNotificationTagsArgs = {
  notificationTags: ReadonlyArray<ApiNotificationTagInput>;
};


export type ApiMutationDeleteFavoritesArgs = {
  favorites: ReadonlyArray<ApiFavoritePlayerInput>;
};


export type ApiMutationDeleteNotificationTagsArgs = {
  notificationTags: ReadonlyArray<ApiNotificationTagInput>;
};


export type ApiMutationUnsubscribeArgs = {
  email: Scalars['String']['input'];
  subscriptionIds: ReadonlyArray<InputMaybe<Scalars['String']['input']>>;
};


export type ApiMutationUpdateBubbleArgs = {
  bubbleId: Scalars['ID']['input'];
};


export type ApiMutationUpdateBubbleWatchArgs = {
  tourCode: ApiTourCode;
};


export type ApiMutationUpdateCourseStatsArgs = {
  tournamentId: Scalars['ID']['input'];
};


export type ApiMutationUpdateCoverageArgs = {
  tournamentId: Scalars['ID']['input'];
};


export type ApiMutationUpdateCupOverviewLeaderboardArgs = {
  id: Scalars['ID']['input'];
};


export type ApiMutationUpdateCupRoundLeaderboardArgs = {
  round?: InputMaybe<Scalars['Int']['input']>;
  tournamentId: Scalars['String']['input'];
};


export type ApiMutationUpdateCupRoundLeaderboardCompressedArgs = {
  round?: InputMaybe<Scalars['Int']['input']>;
  tournamentId: Scalars['String']['input'];
};


export type ApiMutationUpdateCupScorecardArgs = {
  matchId: Scalars['Int']['input'];
  round: Scalars['Int']['input'];
  tournamentId: Scalars['ID']['input'];
};


export type ApiMutationUpdateCurrentLeadersCompressedArgs = {
  tournamentId: Scalars['ID']['input'];
};


export type ApiMutationUpdateGroupLocationsArgs = {
  courseId: Scalars['String']['input'];
  round: Scalars['Int']['input'];
  tournamentId: Scalars['ID']['input'];
};


export type ApiMutationUpdateGroupLocationsEnhancedArgs = {
  courseId: Scalars['String']['input'];
  round: Scalars['Int']['input'];
  tournamentId: Scalars['ID']['input'];
};


export type ApiMutationUpdateHoleDetailsArgs = {
  courseId: Scalars['ID']['input'];
  hole: Scalars['Int']['input'];
  tournamentId: Scalars['ID']['input'];
};


export type ApiMutationUpdateLeaderboardCompressedV2Args = {
  id: Scalars['ID']['input'];
};


export type ApiMutationUpdateLeaderboardCompressedV3Args = {
  odds?: InputMaybe<ApiOddsUpdateInput>;
  tournamentId: Scalars['ID']['input'];
};


export type ApiMutationUpdateLeaderboardStrokesArgs = {
  id: Scalars['ID']['input'];
};


export type ApiMutationUpdateLeaderboardStrokesCompressedArgs = {
  id: Scalars['ID']['input'];
};


export type ApiMutationUpdateLeaderboardV2Args = {
  id: Scalars['ID']['input'];
};


export type ApiMutationUpdateMatchOutcomeIqArgs = {
  matchId: Scalars['Int']['input'];
  roundNumber?: InputMaybe<Scalars['Int']['input']>;
  tournamentId: Scalars['ID']['input'];
};


export type ApiMutationUpdateMatchPlayLeaderboardArgs = {
  id: Scalars['ID']['input'];
};


export type ApiMutationUpdateMatchPlayLeaderboardCompressedArgs = {
  id: Scalars['ID']['input'];
};


export type ApiMutationUpdateMatchPlayPlayoffScorecardArgs = {
  id: Scalars['ID']['input'];
};


export type ApiMutationUpdateMatchPlayScorecardArgs = {
  id: Scalars['ID']['input'];
};


export type ApiMutationUpdateMatchPlayTeeTimesArgs = {
  id: Scalars['ID']['input'];
};


export type ApiMutationUpdateMatchPlayTeeTimesCompressedArgs = {
  id: Scalars['ID']['input'];
};


export type ApiMutationUpdateOddsToWinMarketArgs = {
  oddsToWinId: Scalars['ID']['input'];
};


export type ApiMutationUpdateOddsToWinMarketCompressedArgs = {
  oddsToWinId: Scalars['ID']['input'];
};


export type ApiMutationUpdatePlayerHubArgs = {
  id: Scalars['ID']['input'];
};


export type ApiMutationUpdatePlayerTournamentStatusArgs = {
  playerId: Scalars['ID']['input'];
  tournamentId: Scalars['String']['input'];
};


export type ApiMutationUpdatePlayoffScorecardArgs = {
  id: Scalars['ID']['input'];
};


export type ApiMutationUpdatePlayoffScorecardV2Args = {
  id: Scalars['ID']['input'];
};


export type ApiMutationUpdatePlayoffScorecardV3Args = {
  tournamentId: Scalars['ID']['input'];
};


export type ApiMutationUpdatePlayoffShotDetailsArgs = {
  tournamentId: Scalars['ID']['input'];
};


export type ApiMutationUpdatePlayoffShotDetailsCompressedArgs = {
  tournamentId: Scalars['ID']['input'];
};


export type ApiMutationUpdateScorecardCompressedV3Args = {
  id: Scalars['ID']['input'];
  rounds?: InputMaybe<ReadonlyArray<Scalars['Int']['input']>>;
};


export type ApiMutationUpdateScorecardStatsArgs = {
  id: Scalars['ID']['input'];
  playerId: Scalars['String']['input'];
};


export type ApiMutationUpdateScorecardStatsCompressedV3Args = {
  id: Scalars['ID']['input'];
  playerId: Scalars['String']['input'];
  rounds: ReadonlyArray<Scalars['Int']['input']>;
};


export type ApiMutationUpdateScorecardV2Args = {
  id: Scalars['ID']['input'];
};


export type ApiMutationUpdateShotCommentaryArgs = {
  commentary: ReadonlyArray<ApiShotCommentaryItemInput>;
  playerId: Scalars['String']['input'];
  round: Scalars['Int']['input'];
  tournamentId: Scalars['String']['input'];
};


export type ApiMutationUpdateShotDetailsCompressedV3Args = {
  holes: ReadonlyArray<Scalars['Int']['input']>;
  isUs: Scalars['Boolean']['input'];
  playerId: Scalars['String']['input'];
  round: Scalars['Int']['input'];
  tourcast: Scalars['Boolean']['input'];
  tournamentId: Scalars['String']['input'];
};


export type ApiMutationUpdateTglMatchArgs = {
  matchID: Scalars['ID']['input'];
};


export type ApiMutationUpdateTspPlayoffShotDetailsArgs = {
  tournamentId: Scalars['ID']['input'];
};


export type ApiMutationUpdateTspPlayoffShotDetailsCompressedArgs = {
  tournamentId: Scalars['ID']['input'];
};


export type ApiMutationUpdateTeamPlayLeaderboardArgs = {
  id: Scalars['ID']['input'];
  provider: Scalars['String']['input'];
};


export type ApiMutationUpdateTeamPlayLeaderboardCompressedArgs = {
  id: Scalars['ID']['input'];
  provider: Scalars['String']['input'];
};


export type ApiMutationUpdateTeamPlayScorecardArgs = {
  id: Scalars['ID']['input'];
};


export type ApiMutationUpdateTeamPlayScorecardRoundsArgs = {
  id: Scalars['ID']['input'];
};


export type ApiMutationUpdateTeamStrokePlayTeeTimesArgs = {
  id: Scalars['ID']['input'];
};


export type ApiMutationUpdateTeamStrokePlayTeeTimesCompressedArgs = {
  id: Scalars['ID']['input'];
};


export type ApiMutationUpdateTeeTimesArgs = {
  id: Scalars['ID']['input'];
};


export type ApiMutationUpdateTeeTimesCompressedArgs = {
  id: Scalars['ID']['input'];
};


export type ApiMutationUpdateTeeTimesCompressedV2Args = {
  id: Scalars['ID']['input'];
};


export type ApiMutationUpdateTeeTimesV2Args = {
  id: Scalars['ID']['input'];
};


export type ApiMutationUpdateTourCupArgs = {
  id: Scalars['ID']['input'];
  type?: InputMaybe<ApiTourCupType>;
};


export type ApiMutationUpdateTourcastTableArgs = {
  tournamentId: Scalars['ID']['input'];
};


export type ApiMutationUpdateTournamentArgs = {
  id: Scalars['ID']['input'];
};


export type ApiMutationUpdateTournamentGroupLocationsArgs = {
  round: Scalars['Int']['input'];
  tournamentId: Scalars['ID']['input'];
};


export type ApiMutationUpdateUpcomingScheduleArgs = {
  tourCode: Scalars['String']['input'];
  year?: InputMaybe<Scalars['String']['input']>;
};

export type ApiNewsArticle = {
  readonly __typename: 'NewsArticle';
  readonly aiGenerated?: Maybe<Scalars['Boolean']['output']>;
  readonly analyticsTags?: Maybe<ReadonlyArray<Scalars['String']['output']>>;
  readonly articleFormType?: Maybe<ApiArticleFormType>;
  /** @deprecated Use articleImageAsset */
  readonly articleImage?: Maybe<Scalars['String']['output']>;
  readonly articleImageAlt: Scalars['String']['output'];
  readonly articleImageAsset?: Maybe<ApiImageAsset>;
  readonly articleLabel?: Maybe<Scalars['String']['output']>;
  readonly author?: Maybe<ApiNewsArticleAuthor>;
  readonly brightcoveId?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use contentTournamentIds */
  readonly contentTournamentId?: Maybe<Scalars['String']['output']>;
  readonly contentTournamentIds?: Maybe<ReadonlyArray<Scalars['String']['output']>>;
  readonly dateTextOverride?: Maybe<Scalars['String']['output']>;
  readonly externalLinkOverride?: Maybe<Scalars['String']['output']>;
  readonly franchise: Scalars['String']['output'];
  readonly franchiseDisplayName: Scalars['String']['output'];
  readonly franchiseTags?: Maybe<ReadonlyArray<Scalars['String']['output']>>;
  readonly headline?: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly isBreakingNews?: Maybe<Scalars['Boolean']['output']>;
  readonly isLive: Scalars['Boolean']['output'];
  readonly photoGalleryPath?: Maybe<Scalars['String']['output']>;
  readonly pinned: Scalars['Boolean']['output'];
  readonly players?: Maybe<ReadonlyArray<ApiArticlePlayer>>;
  readonly publishDate?: Maybe<Scalars['AWSTimestamp']['output']>;
  readonly shareURL: Scalars['String']['output'];
  readonly sponsor?: Maybe<ApiNewsArticleSponsor>;
  readonly team?: Maybe<ApiRyderCupTeamType>;
  readonly teaserContent?: Maybe<Scalars['String']['output']>;
  readonly teaserHeadline?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use teaserImageOverrideAsset */
  readonly teaserImageOverride?: Maybe<Scalars['String']['output']>;
  readonly teaserImageOverrideAsset?: Maybe<ApiImageAsset>;
  readonly topics?: Maybe<ReadonlyArray<ApiContentTopics>>;
  readonly updateDate?: Maybe<Scalars['AWSTimestamp']['output']>;
  readonly url: Scalars['String']['output'];
};

export type ApiNewsArticleAuthor = {
  readonly __typename: 'NewsArticleAuthor';
  readonly byLine?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use byLineIconAsset */
  readonly byLineIcon?: Maybe<Scalars['String']['output']>;
  readonly byLineIconAsset?: Maybe<ApiImageAsset>;
  readonly byLineLink?: Maybe<Scalars['String']['output']>;
  readonly byLineLinkDisplay?: Maybe<Scalars['String']['output']>;
  readonly firstName: Scalars['String']['output'];
  /** @deprecated Use headshotAsset */
  readonly headshot?: Maybe<Scalars['String']['output']>;
  readonly headshotAsset?: Maybe<ApiImageAsset>;
  readonly lastName: Scalars['String']['output'];
  readonly twitter?: Maybe<Scalars['String']['output']>;
};

export type ApiNewsArticleBlockQuote = {
  readonly __typename: 'NewsArticleBlockQuote';
  readonly class?: Maybe<Scalars['String']['output']>;
  readonly otherAttribute?: Maybe<Scalars['String']['output']>;
  readonly playerId?: Maybe<Scalars['String']['output']>;
  readonly playerName?: Maybe<Scalars['String']['output']>;
  readonly quote?: Maybe<Scalars['String']['output']>;
};

export type ApiNewsArticleContentSegment = {
  readonly __typename: 'NewsArticleContentSegment';
  readonly data?: Maybe<Scalars['String']['output']>;
  readonly format?: Maybe<ApiNewsArticleFormat>;
  readonly id?: Maybe<Scalars['String']['output']>;
  readonly imageAsset?: Maybe<ApiImageAsset>;
  readonly imageDescription?: Maybe<Scalars['String']['output']>;
  readonly imageOrientation?: Maybe<ApiOrientation>;
  readonly type: Scalars['String']['output'];
  readonly value?: Maybe<Scalars['String']['output']>;
  readonly webViewLink?: Maybe<Scalars['String']['output']>;
};

export type ApiNewsArticleDetails = {
  readonly __typename: 'NewsArticleDetails';
  readonly aiGenerated?: Maybe<Scalars['Boolean']['output']>;
  readonly analyticsTags?: Maybe<ReadonlyArray<Scalars['String']['output']>>;
  readonly articleImageAlt: Scalars['String']['output'];
  readonly articleLabel?: Maybe<Scalars['String']['output']>;
  readonly articleSponsor?: Maybe<Scalars['String']['output']>;
  readonly authorReference?: Maybe<ApiNewsArticleAuthor>;
  readonly brandedContent: Scalars['Boolean']['output'];
  readonly canonicalUrl?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tournaments.contentTournamentId */
  readonly contentTournamentId?: Maybe<Scalars['String']['output']>;
  readonly cta?: Maybe<ApiCallToAction>;
  readonly datePublished: Scalars['AWSTimestamp']['output'];
  readonly disableAds: Scalars['Boolean']['output'];
  readonly franchise: Scalars['String']['output'];
  readonly franchiseDisplayName: Scalars['String']['output'];
  readonly headline: Scalars['String']['output'];
  readonly hero?: Maybe<ApiNewsArticleHero>;
  readonly isBreakingNews?: Maybe<Scalars['Boolean']['output']>;
  readonly isLive: Scalars['Boolean']['output'];
  readonly leadVideoId?: Maybe<Scalars['String']['output']>;
  readonly leadVideoTitle?: Maybe<Scalars['String']['output']>;
  readonly longForm?: Maybe<Scalars['Boolean']['output']>;
  readonly metadata?: Maybe<ApiNewsArticleMetadata>;
  readonly moreNewsItems: ReadonlyArray<ApiNewsArticle>;
  readonly moreNewsTitle?: Maybe<Scalars['String']['output']>;
  readonly nodes: ReadonlyArray<ApiNewsArticleNode>;
  readonly overviewNodes?: Maybe<ReadonlyArray<ApiNewsArticleNode>>;
  readonly path: Scalars['String']['output'];
  readonly photoPosition?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use players field that contains name and id */
  readonly playerNames?: Maybe<ReadonlyArray<Scalars['String']['output']>>;
  readonly players?: Maybe<ReadonlyArray<ApiArticlePlayer>>;
  readonly readTime: Scalars['String']['output'];
  readonly relatedFacts?: Maybe<ReadonlyArray<Scalars['String']['output']>>;
  readonly shareURL: Scalars['String']['output'];
  readonly sponsor?: Maybe<ApiNewsArticleSponsor>;
  readonly tags?: Maybe<ReadonlyArray<Maybe<Scalars['String']['output']>>>;
  readonly team?: Maybe<ApiRyderCupTeamType>;
  readonly teaserAsset?: Maybe<Scalars['String']['output']>;
  readonly topics?: Maybe<ReadonlyArray<ApiContentTopics>>;
  /** @deprecated Use tournaments.tourName */
  readonly tourName?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tournaments.tournamentName */
  readonly tournamentName?: Maybe<Scalars['String']['output']>;
  readonly tournaments?: Maybe<ReadonlyArray<ApiNewsArticleDetailsTournament>>;
  readonly url: Scalars['String']['output'];
};

export type ApiNewsArticleDetailsCompressed = {
  readonly __typename: 'NewsArticleDetailsCompressed';
  readonly path: Scalars['String']['output'];
  readonly payload: Scalars['String']['output'];
};

export type ApiNewsArticleDetailsTournament = {
  readonly __typename: 'NewsArticleDetailsTournament';
  readonly contentTournamentId: Scalars['String']['output'];
  readonly tourName: Scalars['String']['output'];
  readonly tournamentName: Scalars['String']['output'];
};

export type ApiNewsArticleDivider = {
  readonly __typename: 'NewsArticleDivider';
  readonly value?: Maybe<Scalars['String']['output']>;
};

export type ApiNewsArticleEmbedded = {
  readonly __typename: 'NewsArticleEmbedded';
  readonly class?: Maybe<Scalars['String']['output']>;
  readonly frameborder?: Maybe<Scalars['Boolean']['output']>;
  readonly height?: Maybe<Scalars['String']['output']>;
  readonly mobileHeight?: Maybe<Scalars['String']['output']>;
  readonly scroll?: Maybe<Scalars['Boolean']['output']>;
  readonly url?: Maybe<Scalars['String']['output']>;
};

export type ApiNewsArticleFormat = {
  readonly __typename: 'NewsArticleFormat';
  readonly styles?: Maybe<ReadonlyArray<ApiStyle>>;
  readonly variants?: Maybe<ReadonlyArray<Scalars['String']['output']>>;
};

export type ApiNewsArticleHeader = {
  readonly __typename: 'NewsArticleHeader';
  readonly headerSegments?: Maybe<ReadonlyArray<ApiNewsArticleHeaderSegment>>;
  readonly id?: Maybe<Scalars['String']['output']>;
  readonly style?: Maybe<Scalars['String']['output']>;
};

export type ApiNewsArticleHeaderSegment = {
  readonly __typename: 'NewsArticleHeaderSegment';
  readonly class?: Maybe<Scalars['String']['output']>;
  readonly headerType: Scalars['String']['output'];
  readonly segments?: Maybe<ReadonlyArray<ApiNewsArticleContentSegment>>;
};

export type ApiNewsArticleHero = {
  readonly __typename: 'NewsArticleHero';
  /** @deprecated Use imageAsset */
  readonly image?: Maybe<Scalars['String']['output']>;
  readonly imageAsset?: Maybe<ApiImageAsset>;
  readonly imageDescription?: Maybe<Scalars['String']['output']>;
  readonly video?: Maybe<ApiVideo>;
};

export type ApiNewsArticleHowToWatch = {
  readonly __typename: 'NewsArticleHowToWatch';
  readonly class?: Maybe<Scalars['String']['output']>;
  readonly round?: Maybe<Scalars['Int']['output']>;
  readonly season?: Maybe<Scalars['String']['output']>;
  readonly tournamentId?: Maybe<Scalars['String']['output']>;
};

export type ApiNewsArticleImage = {
  readonly __typename: 'NewsArticleImage';
  readonly segments: ReadonlyArray<ApiNewsArticleContentSegment>;
};

export type ApiNewsArticleInlineOdds = {
  readonly __typename: 'NewsArticleInlineOdds';
  readonly marketId: ApiHistoricalOddsId;
  readonly playerId: Scalars['String']['output'];
  readonly playerName: Scalars['String']['output'];
  readonly timeStamp?: Maybe<Scalars['AWSDateTime']['output']>;
  readonly tournamentId: Scalars['String']['output'];
};

export type ApiNewsArticleInstagram = {
  readonly __typename: 'NewsArticleInstagram';
  readonly class?: Maybe<Scalars['String']['output']>;
  readonly url?: Maybe<Scalars['String']['output']>;
};

export type ApiNewsArticleLineBreak = {
  readonly __typename: 'NewsArticleLineBreak';
  readonly breakValue?: Maybe<Scalars['String']['output']>;
};

export type ApiNewsArticleLink = {
  readonly __typename: 'NewsArticleLink';
  readonly segments: ReadonlyArray<ApiNewsArticleContentSegment>;
};

export type ApiNewsArticleMetadata = {
  readonly __typename: 'NewsArticleMetadata';
  readonly metadata?: Maybe<ReadonlyArray<ApiNewsArticleMetadataSegment>>;
};

export type ApiNewsArticleMetadataSegment = {
  readonly __typename: 'NewsArticleMetadataSegment';
  readonly name: Scalars['String']['output'];
  readonly value?: Maybe<Scalars['String']['output']>;
};

export type ApiNewsArticleNode = ApiArticleOddsTableQuery | ApiCerosEmbedPlugin | ApiExpertPicksNode | ApiNewsArticleBlockQuote | ApiNewsArticleDivider | ApiNewsArticleEmbedded | ApiNewsArticleHeader | ApiNewsArticleHowToWatch | ApiNewsArticleImage | ApiNewsArticleInstagram | ApiNewsArticleLineBreak | ApiNewsArticleLink | ApiNewsArticleOddsGraph | ApiNewsArticleOddsParagraph | ApiNewsArticleParagraph | ApiNewsArticlePhotoGallery | ApiNewsArticlePlayerComparison | ApiNewsArticleScoreCard | ApiNewsArticleStats | ApiNewsArticleText | ApiNewsArticleTweetNode | ApiNewsArticleVideo | ApiNewsArticleWeather | ApiRelatedFactsNode | ApiTglBoxScore | ApiTableFragment | ApiUnorderedListNode;

export type ApiNewsArticleOddsGraph = {
  readonly __typename: 'NewsArticleOddsGraph';
  readonly marketId?: Maybe<ApiHistoricalOddsId>;
  readonly oddsTimeType?: Maybe<ApiOddsTimeType>;
  readonly playerIds?: Maybe<ReadonlyArray<Scalars['String']['output']>>;
  readonly round?: Maybe<Scalars['Int']['output']>;
  readonly tournamentId: Scalars['String']['output'];
};

export type ApiNewsArticleOddsParagraph = {
  readonly __typename: 'NewsArticleOddsParagraph';
  readonly content: ReadonlyArray<ApiOddsParagraphContent>;
};

export type ApiNewsArticleParagraph = {
  readonly __typename: 'NewsArticleParagraph';
  readonly id?: Maybe<Scalars['String']['output']>;
  readonly segments: ReadonlyArray<ApiNewsArticleContentSegment>;
};

export type ApiNewsArticlePhotoGallery = {
  readonly __typename: 'NewsArticlePhotoGallery';
  readonly images: ReadonlyArray<ApiNewsArticleImage>;
};

export type ApiNewsArticlePlayerComparison = {
  readonly __typename: 'NewsArticlePlayerComparison';
  readonly class?: Maybe<Scalars['String']['output']>;
  readonly playerIds?: Maybe<ReadonlyArray<Scalars['String']['output']>>;
  readonly playerNames?: Maybe<ReadonlyArray<Scalars['String']['output']>>;
  readonly season?: Maybe<Scalars['String']['output']>;
  readonly statCategory?: Maybe<Scalars['String']['output']>;
  readonly tournamentId?: Maybe<Scalars['String']['output']>;
  readonly type: ApiPlayerComparisonDisplay;
};

export type ApiNewsArticlePlayerTournamentOdds = {
  readonly __typename: 'NewsArticlePlayerTournamentOdds';
  readonly playerId: Scalars['String']['output'];
  readonly timeStamp?: Maybe<Scalars['AWSDateTime']['output']>;
  readonly tournamentId: Scalars['String']['output'];
  readonly tournamentMarketType?: Maybe<ApiOddsMarketType>;
};

export type ApiNewsArticleScoreCard = {
  readonly __typename: 'NewsArticleScoreCard';
  readonly class?: Maybe<Scalars['String']['output']>;
  readonly playerId?: Maybe<Scalars['String']['output']>;
  readonly playerName?: Maybe<Scalars['String']['output']>;
  readonly round?: Maybe<Scalars['String']['output']>;
  readonly season?: Maybe<Scalars['String']['output']>;
  readonly tournamentId?: Maybe<Scalars['String']['output']>;
};

export type ApiNewsArticleSponsor = {
  readonly __typename: 'NewsArticleSponsor';
  readonly description?: Maybe<Scalars['String']['output']>;
  readonly gam?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use imageAsset */
  readonly image?: Maybe<Scalars['String']['output']>;
  readonly imageAsset?: Maybe<ApiImageAsset>;
  /** @deprecated Use logoAsset */
  readonly logo: Scalars['String']['output'];
  readonly logoAsset: ApiImageAsset;
  /** @deprecated Use logoDarkAsset */
  readonly logoDark: Scalars['String']['output'];
  readonly logoDarkAsset: ApiImageAsset;
  readonly name: Scalars['String']['output'];
  readonly sponsorPrefix?: Maybe<Scalars['String']['output']>;
  readonly websiteUrl?: Maybe<Scalars['String']['output']>;
};

export type ApiNewsArticleStatType =
  | 'BY_NUMBERS'
  | 'DOT_CHART'
  | 'LINE_CHART';

export type ApiNewsArticleStats = {
  readonly __typename: 'NewsArticleStats';
  readonly playerId?: Maybe<Scalars['String']['output']>;
  readonly playerName?: Maybe<Scalars['String']['output']>;
  readonly season?: Maybe<Scalars['String']['output']>;
  readonly statType: ApiNewsArticleStatType;
  readonly stats: ReadonlyArray<ApiContentStat>;
  readonly tournamentId?: Maybe<Scalars['String']['output']>;
};

export type ApiNewsArticleTeaserAsset = {
  readonly __typename: 'NewsArticleTeaserAsset';
  readonly value?: Maybe<Scalars['String']['output']>;
};

export type ApiNewsArticleText = {
  readonly __typename: 'NewsArticleText';
  readonly value?: Maybe<Scalars['String']['output']>;
};

export type ApiNewsArticleTweetNode = {
  readonly __typename: 'NewsArticleTweetNode';
  readonly tweetId: Scalars['String']['output'];
};

export type ApiNewsArticleVideo = {
  readonly __typename: 'NewsArticleVideo';
  readonly video?: Maybe<ApiVideo>;
};

export type ApiNewsArticleWeather = {
  readonly __typename: 'NewsArticleWeather';
  readonly class?: Maybe<Scalars['String']['output']>;
  readonly season?: Maybe<Scalars['String']['output']>;
  readonly tour?: Maybe<Scalars['String']['output']>;
  readonly tournamentId?: Maybe<Scalars['String']['output']>;
};

export type ApiNewsArticles = {
  readonly __typename: 'NewsArticles';
  readonly articles: ReadonlyArray<ApiNewsArticle>;
  readonly franchiseSponsors?: Maybe<ReadonlyArray<ApiNewsSponsor>>;
  /** @deprecated not needed */
  readonly integratedComponents: ReadonlyArray<ApiIntegratedComponent>;
};

export type ApiNewsFranchise = {
  readonly __typename: 'NewsFranchise';
  readonly franchise: Scalars['String']['output'];
  readonly franchiseLabel: Scalars['String']['output'];
};

export type ApiNewsLetterType =
  | 'GLOBAL'
  | 'TOURNAMENT';

export type ApiNewsSponsor = {
  readonly __typename: 'NewsSponsor';
  readonly accessibilityText: Scalars['String']['output'];
  readonly backgroundColor: Scalars['String']['output'];
  readonly franchise: Scalars['String']['output'];
  /** @deprecated Use imageAsset */
  readonly image: Scalars['String']['output'];
  readonly imageAsset: ApiImageAsset;
  readonly label: Scalars['String']['output'];
};

export type ApiNewsletter = {
  readonly __typename: 'Newsletter';
  readonly ctaText: Scalars['String']['output'];
  readonly description?: Maybe<Scalars['String']['output']>;
  readonly gigyaSubscriptionId: Scalars['String']['output'];
  readonly image: Scalars['String']['output'];
  readonly newsLetterType: ApiNewsLetterType;
  readonly title: Scalars['String']['output'];
  readonly tourCode?: Maybe<ApiTourCode>;
};

export type ApiNotificationTag = {
  readonly __typename: 'NotificationTag';
  readonly tag: Scalars['String']['output'];
};

export type ApiNotificationTagInput = {
  readonly tag: Scalars['String']['input'];
};

export type ApiNotificationTagResponse = {
  readonly __typename: 'NotificationTagResponse';
  readonly ok: Scalars['Boolean']['output'];
  readonly tags: ReadonlyArray<Maybe<ApiNotificationTag>>;
};

export type ApiOddsBanner = {
  readonly __typename: 'OddsBanner';
  readonly cta?: Maybe<ApiCallToAction>;
  readonly disclaimer: Scalars['String']['output'];
  readonly image: Scalars['String']['output'];
  readonly label: Scalars['String']['output'];
};

export type ApiOddsCutsOption = {
  readonly __typename: 'OddsCutsOption';
  readonly entity: ApiOddsEntity;
  readonly noOdds: ApiOddsValues;
  readonly yesOdds: ApiOddsValues;
};

export type ApiOddsCutsPlayers = {
  readonly __typename: 'OddsCutsPlayers';
  readonly countryFlag?: Maybe<Scalars['String']['output']>;
  readonly currentRound?: Maybe<Scalars['Int']['output']>;
  readonly displayName: Scalars['String']['output'];
  readonly firstName: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
  readonly lastName: Scalars['String']['output'];
  readonly matchId?: Maybe<Scalars['Int']['output']>;
  readonly noOdds: Scalars['String']['output'];
  readonly noOddsSwing?: Maybe<ApiOddsSwing>;
  readonly noOptionsId: Scalars['String']['output'];
  readonly position: Scalars['String']['output'];
  readonly seed?: Maybe<Scalars['Int']['output']>;
  readonly total: Scalars['String']['output'];
  readonly yesOdds: Scalars['String']['output'];
  readonly yesOddsSwing?: Maybe<ApiOddsSwing>;
  readonly yesOptionsId: Scalars['String']['output'];
};

/**   Odds Primitives */
export type ApiOddsEntity = {
  readonly __typename: 'OddsEntity';
  readonly color?: Maybe<Scalars['String']['output']>;
  readonly entityFlagUrl?: Maybe<Scalars['String']['output']>;
  readonly entityId: Scalars['ID']['output'];
  readonly flagSurroundColor?: Maybe<Scalars['String']['output']>;
  readonly flagSurroundColorDark?: Maybe<Scalars['String']['output']>;
  readonly groupNum: Scalars['Int']['output'];
  readonly maxRound: Scalars['Int']['output'];
  readonly players: ReadonlyArray<ApiOddsPlayer>;
  readonly position: Scalars['String']['output'];
  readonly score: Scalars['String']['output'];
  readonly seed?: Maybe<Scalars['Int']['output']>;
  readonly thru?: Maybe<Scalars['String']['output']>;
  readonly total: Scalars['String']['output'];
  readonly totalSort: Scalars['Int']['output'];
};

export type ApiOddsFinishes = {
  readonly __typename: 'OddsFinishes';
  readonly countryFlag?: Maybe<Scalars['String']['output']>;
  readonly currentRound?: Maybe<Scalars['Int']['output']>;
  readonly displayName: Scalars['String']['output'];
  readonly firstName: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
  readonly lastName: Scalars['String']['output'];
  readonly matchId?: Maybe<Scalars['Int']['output']>;
  readonly odds: Scalars['String']['output'];
  readonly oddsSwing?: Maybe<ApiOddsSwing>;
  readonly optionsId: Scalars['String']['output'];
  readonly seed?: Maybe<Scalars['Int']['output']>;
};

export type ApiOddsFinishesOption = ApiBaseOddsOption & {
  readonly __typename: 'OddsFinishesOption';
  readonly entity: ApiOddsEntity;
  readonly odds: ApiOddsValues;
};

export type ApiOddsFormat =
  | 'DECIMAL'
  | 'FRACTIONAL'
  | 'MONEYLINE';

export type ApiOddsGroup = {
  readonly __typename: 'OddsGroup';
  readonly id: Scalars['ID']['output'];
  readonly matchupPlayers: ReadonlyArray<ApiMatchupsPlayer>;
  readonly subMarket: Scalars['String']['output'];
};

export type ApiOddsGroupOptionV2 = ApiBaseOddsOption & {
  readonly __typename: 'OddsGroupOptionV2';
  readonly entity: ApiOddsEntity;
  readonly odds: ApiOddsValues;
};

export type ApiOddsLeadersOption = ApiBaseOddsOption & {
  readonly __typename: 'OddsLeadersOption';
  readonly entity: ApiOddsEntity;
  readonly odds: ApiOddsValues;
};

export type ApiOddsLeadersPlayers = {
  readonly __typename: 'OddsLeadersPlayers';
  readonly countryFlag?: Maybe<Scalars['String']['output']>;
  readonly currentRound?: Maybe<Scalars['Int']['output']>;
  readonly displayName: Scalars['String']['output'];
  readonly firstName: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
  readonly lastName: Scalars['String']['output'];
  readonly matchId?: Maybe<Scalars['Int']['output']>;
  readonly odds: Scalars['String']['output'];
  readonly oddsSwing?: Maybe<ApiOddsSwing>;
  readonly optionsId: Scalars['String']['output'];
  readonly seed?: Maybe<Scalars['Int']['output']>;
};

/**   End Market Abstractions */
export type ApiOddsMarketType =
  | 'FINISHES'
  | 'GROUP_WINNER'
  | 'MATCHUP'
  | 'NATIONALITY'
  | 'PLAYER_PROPS'
  | 'WINNER';

export type ApiOddsMatchupOptionGroup = {
  readonly __typename: 'OddsMatchupOptionGroup';
  readonly options: ReadonlyArray<ApiMatchupOptionV2>;
};

export type ApiOddsMatchups = {
  readonly __typename: 'OddsMatchups';
  readonly id: Scalars['ID']['output'];
  readonly matchupPlayers: ReadonlyArray<ApiMatchupsPlayer>;
  readonly subMarket: Scalars['String']['output'];
};

export type ApiOddsMessage = {
  readonly __typename: 'OddsMessage';
  readonly body: Scalars['String']['output'];
  readonly header: Scalars['String']['output'];
};

export type ApiOddsNationality = {
  readonly __typename: 'OddsNationality';
  readonly countryFlag?: Maybe<Scalars['String']['output']>;
  readonly currentRound?: Maybe<Scalars['Int']['output']>;
  readonly displayName: Scalars['String']['output'];
  readonly firstName: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
  readonly lastName: Scalars['String']['output'];
  readonly matchId?: Maybe<Scalars['Int']['output']>;
  readonly odds: Scalars['String']['output'];
  readonly oddsSwing?: Maybe<ApiOddsSwing>;
  readonly optionsId: Scalars['String']['output'];
  readonly seed?: Maybe<Scalars['Int']['output']>;
};

export type ApiOddsNationalityOption = ApiBaseOddsOption & {
  readonly __typename: 'OddsNationalityOption';
  readonly entity: ApiOddsEntity;
  readonly odds: ApiOddsValues;
};

export type ApiOddsOption = ApiOddsCutsPlayers | ApiOddsFinishes | ApiOddsGroup | ApiOddsLeadersPlayers | ApiOddsMatchups | ApiOddsNationality | ApiOddsToWin;

export type ApiOddsOptionV2 = ApiOddsCutsOption | ApiOddsFinishesOption | ApiOddsGroupOptionV2 | ApiOddsLeadersOption | ApiOddsMatchupOptionGroup | ApiOddsNationalityOption | ApiOddsToWinV2;

export type ApiOddsParagraphContent = ApiNewsArticleInlineOdds | ApiNewsArticleText;

export type ApiOddsPlayer = {
  readonly __typename: 'OddsPlayer';
  readonly color?: Maybe<Scalars['String']['output']>;
  readonly countryFlag: Scalars['String']['output'];
  readonly displayName: Scalars['String']['output'];
  readonly firstName: Scalars['String']['output'];
  readonly lastName: Scalars['String']['output'];
  readonly overrideFlagUrl?: Maybe<Scalars['String']['output']>;
  readonly playerId: Scalars['ID']['output'];
  readonly shortName: Scalars['String']['output'];
};

export type ApiOddsProvider =
  | 'BET365'
  | 'DRAFTKINGS'
  | 'ESPNBET'
  | 'FANDUEL'
  | 'MGM';

export type ApiOddsSwing =
  | 'CONSTANT'
  | 'DOWN'
  | 'UP';

/**   Odds Table */
export type ApiOddsTable = {
  readonly __typename: 'OddsTable';
  readonly markets: ReadonlyArray<ApiArticleOddsMarkets>;
  readonly players: ReadonlyArray<ApiPlayerMarketsRow>;
  readonly provider?: Maybe<ApiOddsProvider>;
  readonly tournamentId: Scalars['String']['output'];
  readonly tournamentName: Scalars['String']['output'];
};

/**  Odds Graph */
export type ApiOddsTimeType =
  | 'HOLE';

export type ApiOddsTimeline = {
  readonly __typename: 'OddsTimeline';
  readonly countryCode: Scalars['String']['output'];
  readonly oddsProvider: ApiOddsProvider;
  readonly players: ReadonlyArray<ApiOddsTimelinePlayer>;
  readonly round: Scalars['String']['output'];
  readonly tournamentId: Scalars['String']['output'];
};

export type ApiOddsTimelinePlayer = {
  readonly __typename: 'OddsTimelinePlayer';
  readonly data: ReadonlyArray<ApiOddsTimelinePoint>;
  readonly playerColor: Scalars['String']['output'];
  readonly playerId: Scalars['String']['output'];
  readonly playerName: Scalars['String']['output'];
};

export type ApiOddsTimelinePoint = {
  readonly __typename: 'OddsTimelinePoint';
  readonly holeNumber?: Maybe<Scalars['Int']['output']>;
  readonly holeSequence?: Maybe<Scalars['Int']['output']>;
  readonly odds: Scalars['String']['output'];
  readonly oddsSwing?: Maybe<ApiOddsSwing>;
  readonly round?: Maybe<Scalars['Int']['output']>;
  readonly time: Scalars['AWSTimestamp']['output'];
};

export type ApiOddsToWin = {
  readonly __typename: 'OddsToWin';
  readonly countryFlag?: Maybe<Scalars['String']['output']>;
  readonly currentRound?: Maybe<Scalars['Int']['output']>;
  readonly displayName: Scalars['String']['output'];
  readonly firstName: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
  readonly lastName: Scalars['String']['output'];
  readonly matchId?: Maybe<Scalars['Int']['output']>;
  readonly odds: Scalars['String']['output'];
  readonly oddsSwing?: Maybe<ApiOddsSwing>;
  readonly optionsId: Scalars['String']['output'];
  readonly position: Scalars['String']['output'];
  readonly score: Scalars['String']['output'];
  readonly seed?: Maybe<Scalars['Int']['output']>;
  readonly thru?: Maybe<Scalars['String']['output']>;
  readonly total: Scalars['String']['output'];
};

export type ApiOddsToWinMarket = {
  readonly __typename: 'OddsToWinMarket';
  readonly message?: Maybe<ApiOddsMessage>;
  readonly oddsEnabled: Scalars['Boolean']['output'];
  readonly oddsToWinId: Scalars['ID']['output'];
  readonly players: ReadonlyArray<ApiOddsToWinPlayer>;
};

/**  Odds V3 */
export type ApiOddsToWinMarketCompressed = {
  readonly __typename: 'OddsToWinMarketCompressed';
  readonly id: Scalars['ID']['output'];
  readonly payload: Scalars['String']['output'];
};

export type ApiOddsToWinPlayer = {
  readonly __typename: 'OddsToWinPlayer';
  readonly odds: Scalars['String']['output'];
  readonly oddsDirection: ApiOddsSwing;
  readonly oddsSort: Scalars['Float']['output'];
  readonly optionId?: Maybe<Scalars['String']['output']>;
  readonly playerId: Scalars['ID']['output'];
  readonly url?: Maybe<Scalars['String']['output']>;
};

export type ApiOddsToWinTracker = {
  readonly __typename: 'OddsToWinTracker';
  readonly title: Scalars['String']['output'];
  /** @deprecated use new tournamentIds array */
  readonly tournamentId?: Maybe<Scalars['String']['output']>;
  readonly tournamentIds?: Maybe<ReadonlyArray<Scalars['String']['output']>>;
};

export type ApiOddsToWinV2 = ApiBaseOddsOption & {
  readonly __typename: 'OddsToWinV2';
  readonly entity: ApiOddsEntity;
  readonly odds: ApiOddsValues;
};

export type ApiOddsUpdateInput = {
  readonly oddsFormat: ApiOddsFormat;
  readonly provider: ApiOddsProvider;
};

export type ApiOddsValues = {
  readonly __typename: 'OddsValues';
  readonly odds: Scalars['String']['output'];
  readonly oddsSwing: ApiOddsSwing;
  readonly optionId: Scalars['ID']['output'];
};

export type ApiOrientation =
  | 'Landscape'
  | 'Portrait';

export type ApiOutComeIqHole = {
  readonly __typename: 'OutComeIQHole';
  readonly euMatchWin: Scalars['Float']['output'];
  readonly holeNum: Scalars['Int']['output'];
  readonly matchDraw: Scalars['Float']['output'];
  readonly usMatchWin: Scalars['Float']['output'];
};

export type ApiOverviewStat = {
  readonly __typename: 'OverviewStat';
  readonly players: ReadonlyArray<ApiLeaderStat>;
  readonly statId: Scalars['String']['output'];
  readonly statName: Scalars['String']['output'];
  readonly tourAvg?: Maybe<Scalars['String']['output']>;
};

export type ApiOverviewStats = {
  readonly __typename: 'OverviewStats';
  readonly categories: ReadonlyArray<ApiStatCategoryConfig>;
  readonly stats: ReadonlyArray<ApiOverviewStat>;
  readonly tourCode: ApiTourCode;
  readonly year: Scalars['Int']['output'];
};

export type ApiPageMetadata = {
  readonly __typename: 'PageMetadata';
  readonly metadata: ReadonlyArray<ApiPageMetadataSegment>;
};

export type ApiPageMetadataSegment = {
  readonly __typename: 'PageMetadataSegment';
  readonly name: Scalars['String']['output'];
  readonly value: Scalars['String']['output'];
};

export type ApiPaginationDetails = {
  readonly __typename: 'PaginationDetails';
  readonly limit?: Maybe<Scalars['Int']['output']>;
  readonly offset?: Maybe<Scalars['Int']['output']>;
};

export type ApiPlatform =
  | 'ANDROID'
  | 'IOS'
  | 'WEB';

export type ApiPlayer = {
  readonly __typename: 'Player';
  readonly abbreviations: Scalars['String']['output'];
  readonly abbreviationsAccessibilityText: Scalars['String']['output'];
  readonly amateur: Scalars['Boolean']['output'];
  readonly assets?: Maybe<ReadonlyArray<ApiPlayerAsset>>;
  readonly bettingProfile?: Maybe<Scalars['String']['output']>;
  readonly country: Scalars['String']['output'];
  readonly countryFlag: Scalars['String']['output'];
  readonly displayName: Scalars['String']['output'];
  readonly firstName: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
  readonly lastName: Scalars['String']['output'];
  readonly lineColor: Scalars['String']['output'];
  readonly playerBioOverrideLink?: Maybe<Scalars['String']['output']>;
  readonly seed?: Maybe<Scalars['String']['output']>;
  readonly shortName: Scalars['String']['output'];
  readonly status?: Maybe<Scalars['String']['output']>;
  readonly tourBound?: Maybe<Scalars['Boolean']['output']>;
};

export type ApiPlayerAsset = ApiTourBoundAsset;

export type ApiPlayerBio = {
  readonly __typename: 'PlayerBio';
  readonly age?: Maybe<Scalars['String']['output']>;
  readonly birthplace: ApiPlayerBioLocation;
  readonly born?: Maybe<Scalars['String']['output']>;
  readonly bornAccessibilityText?: Maybe<Scalars['String']['output']>;
  readonly careerEarnings?: Maybe<Scalars['String']['output']>;
  readonly deceased: Scalars['Boolean']['output'];
  readonly deceasedDate?: Maybe<Scalars['String']['output']>;
  readonly degree?: Maybe<Scalars['String']['output']>;
  readonly exemptions?: Maybe<ReadonlyArray<ApiPlayerBioExemption>>;
  readonly family?: Maybe<Scalars['String']['output']>;
  readonly graduationYear?: Maybe<Scalars['String']['output']>;
  readonly heightImperial?: Maybe<Scalars['String']['output']>;
  readonly heightImperialAccessibilityText?: Maybe<Scalars['String']['output']>;
  readonly heightMeters?: Maybe<Scalars['String']['output']>;
  readonly overview?: Maybe<Scalars['String']['output']>;
  readonly personal?: Maybe<ReadonlyArray<Scalars['String']['output']>>;
  readonly playsFrom: ApiPlayerBioLocation;
  readonly primaryTour?: Maybe<Scalars['String']['output']>;
  readonly pronunciation?: Maybe<Scalars['String']['output']>;
  readonly residence: ApiPlayerBioLocation;
  readonly school?: Maybe<Scalars['String']['output']>;
  readonly social?: Maybe<ReadonlyArray<ApiPlayerBioSocial>>;
  /** @deprecated No data for this field, use primaryTour */
  readonly tours: ReadonlyArray<ApiTourCode>;
  readonly turnedPro?: Maybe<Scalars['String']['output']>;
  readonly websiteURL?: Maybe<Scalars['String']['output']>;
  readonly weightImperial?: Maybe<Scalars['String']['output']>;
  readonly weightKilograms?: Maybe<Scalars['String']['output']>;
};

export type ApiPlayerBioExemption = {
  readonly __typename: 'PlayerBioExemption';
  readonly description?: Maybe<Scalars['String']['output']>;
  readonly expirationDate?: Maybe<Scalars['String']['output']>;
  readonly tour?: Maybe<ApiTourCode>;
};

export type ApiPlayerBioLocation = {
  readonly __typename: 'PlayerBioLocation';
  readonly city?: Maybe<Scalars['String']['output']>;
  readonly country?: Maybe<Scalars['String']['output']>;
  readonly countryCode?: Maybe<Scalars['String']['output']>;
  readonly state?: Maybe<Scalars['String']['output']>;
  readonly stateCode?: Maybe<Scalars['String']['output']>;
};

export type ApiPlayerBioSocial = {
  readonly __typename: 'PlayerBioSocial';
  readonly type: ApiSocialType;
  readonly url: Scalars['String']['output'];
};

export type ApiPlayerBioWrapper = {
  readonly __typename: 'PlayerBioWrapper';
  readonly bioLink: Scalars['String']['output'];
  readonly country: Scalars['String']['output'];
  readonly countryFlag: Scalars['String']['output'];
  readonly displayName: Scalars['String']['output'];
  readonly firstName: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
  readonly lastName: Scalars['String']['output'];
  readonly owgr?: Maybe<Scalars['Int']['output']>;
  readonly playerBio?: Maybe<ApiPlayerBio>;
  readonly rank?: Maybe<ApiBioRank>;
};

export type ApiPlayerComparison = {
  readonly __typename: 'PlayerComparison';
  readonly category: ApiPlayerComparisonCategory;
  readonly categoryPills: ReadonlyArray<ApiPlayerComparisonCategoryPill>;
  readonly displaySeason: Scalars['String']['output'];
  readonly noDataMessage: Scalars['String']['output'];
  readonly seasonPills: ReadonlyArray<ApiStatYearPills>;
  readonly table: ApiPlayerComparisonTable;
  readonly tourCode: ApiTourCode;
  readonly tournamentId?: Maybe<Scalars['String']['output']>;
  readonly year: Scalars['Int']['output'];
};

export type ApiPlayerComparisonCategory =
  | 'APPROACH_GREEN'
  | 'AROUND_GREEN'
  | 'OFF_TEE'
  | 'PUTTING'
  | 'SCORING'
  | 'STROKES_GAINED';

export type ApiPlayerComparisonCategoryPill = {
  readonly __typename: 'PlayerComparisonCategoryPill';
  readonly category: ApiPlayerComparisonCategory;
  readonly displayText: Scalars['String']['output'];
};

export type ApiPlayerComparisonDisplay =
  | 'GRAPH'
  | 'TABLE';

export type ApiPlayerComparisonHeader = {
  readonly __typename: 'PlayerComparisonHeader';
  readonly country?: Maybe<Scalars['String']['output']>;
  readonly displayText: Scalars['String']['output'];
  readonly playerId: Scalars['ID']['output'];
  readonly yearData: Scalars['Boolean']['output'];
};

export type ApiPlayerComparisonOdds = {
  readonly __typename: 'PlayerComparisonOdds';
  readonly color: Scalars['String']['output'];
  readonly country: Scalars['String']['output'];
  readonly countryName: Scalars['String']['output'];
  readonly displayName: Scalars['String']['output'];
  readonly oddsSwing: ApiOddsSwing;
  readonly oddsToWin: Scalars['String']['output'];
  readonly playerId: Scalars['ID']['output'];
  readonly provider: ApiOddsProvider;
};

export type ApiPlayerComparisonRow = {
  readonly __typename: 'PlayerComparisonRow';
  readonly statId: Scalars['String']['output'];
  readonly statName: Scalars['String']['output'];
  readonly values: ReadonlyArray<ApiPlayerComparisonValue>;
};

export type ApiPlayerComparisonTable = {
  readonly __typename: 'PlayerComparisonTable';
  readonly header: Scalars['String']['output'];
  readonly headerRow: ReadonlyArray<ApiPlayerComparisonHeader>;
  readonly rows: ReadonlyArray<ApiPlayerComparisonRow>;
};

export type ApiPlayerComparisonValue = {
  readonly __typename: 'PlayerComparisonValue';
  readonly bold: Scalars['Boolean']['output'];
  readonly displayValue: Scalars['String']['output'];
  readonly rank: Scalars['String']['output'];
  readonly rankDeviation?: Maybe<Scalars['Float']['output']>;
};

export type ApiPlayerCourse = {
  readonly __typename: 'PlayerCourse';
  readonly courseCity: Scalars['String']['output'];
  readonly courseCountry: Scalars['String']['output'];
  readonly courseCountryCode: Scalars['String']['output'];
  readonly courseId: Scalars['String']['output'];
  readonly courseImage: Scalars['String']['output'];
  readonly courseName: Scalars['String']['output'];
  readonly courseState?: Maybe<Scalars['String']['output']>;
  readonly cupEyebrowText: Scalars['String']['output'];
  readonly overview: ReadonlyArray<ApiPlayerProfileOverviewItem>;
  readonly overviewInfo?: Maybe<ApiCourseOverviewInfo>;
  readonly tournaments: ReadonlyArray<ApiCourseResultsTournament>;
};

export type ApiPlayerDirectory = {
  readonly __typename: 'PlayerDirectory';
  readonly players: ReadonlyArray<ApiPlayerDirectoryPlayer>;
  readonly tourCode: ApiTourCode;
};

export type ApiPlayerDirectoryBio = {
  readonly __typename: 'PlayerDirectoryBio';
  readonly age?: Maybe<Scalars['String']['output']>;
  readonly education?: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly turnedPro?: Maybe<Scalars['String']['output']>;
};

export type ApiPlayerDirectoryPlayer = {
  readonly __typename: 'PlayerDirectoryPlayer';
  readonly alphaSort: Scalars['String']['output'];
  readonly country: Scalars['String']['output'];
  readonly countryFlag: Scalars['String']['output'];
  readonly displayName: Scalars['String']['output'];
  readonly firstName: Scalars['String']['output'];
  /** @deprecated URL should be built using player ID */
  readonly headshot: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
  readonly isActive: Scalars['Boolean']['output'];
  readonly lastName: Scalars['String']['output'];
  readonly playerBio: ApiPlayerDirectoryBio;
  readonly shortName: Scalars['String']['output'];
};

export type ApiPlayerField = {
  readonly __typename: 'PlayerField';
  readonly alphaSort: Scalars['String']['output'];
  readonly alternate: Scalars['Boolean']['output'];
  readonly amateur: Scalars['Boolean']['output'];
  readonly country: Scalars['String']['output'];
  readonly countryFlag: Scalars['String']['output'];
  readonly displayName: Scalars['String']['output'];
  readonly favorite: Scalars['Boolean']['output'];
  readonly firstName: Scalars['String']['output'];
  /** @deprecated URL should be built using player ID */
  readonly headshot: Scalars['String']['output'];
  readonly id: Scalars['String']['output'];
  readonly lastName: Scalars['String']['output'];
  readonly owgr?: Maybe<Scalars['String']['output']>;
  readonly qualifier?: Maybe<Scalars['String']['output']>;
  readonly rankLogoDark?: Maybe<Scalars['String']['output']>;
  readonly rankLogoLight?: Maybe<Scalars['String']['output']>;
  readonly rankingPoints?: Maybe<Scalars['String']['output']>;
  readonly shortName: Scalars['String']['output'];
  readonly status: Scalars['String']['output'];
  readonly teammate?: Maybe<ApiPlayerFieldTeammate>;
  readonly withdrawn: Scalars['Boolean']['output'];
};

export type ApiPlayerFieldTeammate = {
  readonly __typename: 'PlayerFieldTeammate';
  readonly alphaSort: Scalars['String']['output'];
  readonly alternate: Scalars['Boolean']['output'];
  readonly amateur: Scalars['Boolean']['output'];
  readonly country: Scalars['String']['output'];
  readonly countryFlag: Scalars['String']['output'];
  readonly displayName: Scalars['String']['output'];
  readonly favorite: Scalars['Boolean']['output'];
  readonly firstName: Scalars['String']['output'];
  /** @deprecated URL should be built using player ID */
  readonly headshot: Scalars['String']['output'];
  readonly id: Scalars['String']['output'];
  readonly lastName: Scalars['String']['output'];
  readonly owgr?: Maybe<Scalars['String']['output']>;
  readonly qualifier?: Maybe<Scalars['String']['output']>;
  readonly qualifierId?: Maybe<Scalars['String']['output']>;
  readonly rankingPoints?: Maybe<Scalars['String']['output']>;
  readonly shortName: Scalars['String']['output'];
  readonly status: Scalars['String']['output'];
  readonly withdrawn: Scalars['Boolean']['output'];
};

export type ApiPlayerFinishStats = {
  readonly __typename: 'PlayerFinishStats';
  readonly countryCode: Scalars['String']['output'];
  readonly countryName: Scalars['String']['output'];
  readonly displayName: Scalars['String']['output'];
  readonly playerAvg: Scalars['String']['output'];
  readonly playerAvgLabel: Scalars['String']['output'];
  readonly playerId: Scalars['ID']['output'];
  readonly rank: Scalars['String']['output'];
  readonly statId: Scalars['String']['output'];
  readonly statName: Scalars['String']['output'];
  readonly statValues: ReadonlyArray<ApiFinishStatValue>;
  readonly tourAvg: Scalars['String']['output'];
};

export type ApiPlayerGroup = {
  readonly __typename: 'PlayerGroup';
  readonly fieldGroups: ReadonlyArray<ApiFieldGroup>;
  readonly title: Scalars['String']['output'];
};

export type ApiPlayerHubArticleLink = {
  readonly __typename: 'PlayerHubArticleLink';
  readonly aiGenerated?: Maybe<Scalars['Boolean']['output']>;
  readonly analyticsTags?: Maybe<ReadonlyArray<Scalars['String']['output']>>;
  /**   AEM ID */
  readonly contentId: Scalars['String']['output'];
  readonly contentTournamentIds?: Maybe<ReadonlyArray<Scalars['String']['output']>>;
  readonly franchise: Scalars['String']['output'];
  readonly franchiseDisplayName: Scalars['String']['output'];
  readonly players?: Maybe<ReadonlyArray<ApiArticlePlayer>>;
  /**   Optional sponsor for sponsored articles */
  readonly sponsor?: Maybe<ApiNewsArticleSponsor>;
  readonly thumbnail?: Maybe<ApiImageAsset>;
  readonly title: Scalars['String']['output'];
  readonly webviewUrl: Scalars['String']['output'];
};

export type ApiPlayerHubArticlesWidget = {
  readonly __typename: 'PlayerHubArticlesWidget';
  readonly articles: ReadonlyArray<ApiPlayerHubArticleLink>;
  readonly icon: ApiPlayerHubWidgetIcon;
  /**   Optional widget sponsor */
  readonly sponsor?: Maybe<ApiPlayerHubWidgetSponsor>;
  readonly subTitle?: Maybe<Scalars['String']['output']>;
  readonly title: Scalars['String']['output'];
};

export type ApiPlayerHubDetailData = {
  readonly __typename: 'PlayerHubDetailData';
  readonly data: Scalars['String']['output'];
  readonly title: Scalars['String']['output'];
};

export type ApiPlayerHubFooter = {
  readonly __typename: 'PlayerHubFooter';
  readonly logoAsset: ApiImageAsset;
  readonly logoAssetDark: ApiImageAsset;
  readonly sponsor?: Maybe<ApiPlayerHubWidgetSponsor>;
};

export type ApiPlayerHubHeader = {
  readonly __typename: 'PlayerHubHeader';
  readonly sponsor?: Maybe<ApiPlayerHubWidgetSponsor>;
  readonly text: Scalars['String']['output'];
};

export type ApiPlayerHubHoleDetailShotTrail = {
  readonly __typename: 'PlayerHubHoleDetailShotTrail';
  readonly color: Scalars['String']['output'];
  readonly finalShot: Scalars['Boolean']['output'];
  readonly from: ApiPlayerHubHoleDetailShotTrailCoordinates;
  readonly markerText: Scalars['String']['output'];
  readonly shotNumber: Scalars['Int']['output'];
  readonly showMarker: Scalars['Boolean']['output'];
  readonly strokeType: ApiHoleStrokeType;
  readonly to: ApiPlayerHubHoleDetailShotTrailCoordinates;
};

export type ApiPlayerHubHoleDetailShotTrailCoordinates = {
  readonly __typename: 'PlayerHubHoleDetailShotTrailCoordinates';
  readonly x: Scalars['Float']['output'];
  readonly y: Scalars['Float']['output'];
};

export type ApiPlayerHubHoleDetailWidget = {
  readonly __typename: 'PlayerHubHoleDetailWidget';
  readonly dataElements: ReadonlyArray<ApiPlayerHubDetailData>;
  readonly flagCoords?: Maybe<ApiPlayerHubHoleDetailShotTrailCoordinates>;
  readonly holePickleAsset: ApiImageAsset;
  readonly icon: ApiPlayerHubWidgetIcon;
  readonly shots: ReadonlyArray<ApiPlayerHubHoleDetailShotTrail>;
  /**   Optional widget sponsor */
  readonly sponsor?: Maybe<ApiPlayerHubWidgetSponsor>;
  readonly subTitle?: Maybe<Scalars['String']['output']>;
  readonly tourcastURL?: Maybe<Scalars['String']['output']>;
};

export type ApiPlayerHubLeaderboardWidget = {
  readonly __typename: 'PlayerHubLeaderboardWidget';
  readonly action: ApiPlayerHubMessageBannerAction;
  readonly earnings?: Maybe<Scalars['String']['output']>;
  /**   Used to show if there are player stories available for this player or not */
  readonly hasStoryContent: Scalars['Boolean']['output'];
  readonly icon: ApiPlayerHubWidgetIcon;
  readonly movementAmount: Scalars['String']['output'];
  /**   Leaderboard movement amount */
  readonly movementDirection: ApiLeaderboardMovement;
  /**   Player Icon used for Hot Streak identification */
  readonly playerIcon?: Maybe<ApiLeaderboardPlayerIcon>;
  /**   Standard leaderboard position data */
  readonly position: Scalars['String']['output'];
  readonly rankLogos?: Maybe<ApiSignatureEventsRankLogos>;
  readonly round?: Maybe<Scalars['String']['output']>;
  readonly roundDisplay: Scalars['String']['output'];
  readonly roundHeader: Scalars['String']['output'];
  readonly roundNum: Scalars['Int']['output'];
  /**   Final scores by round */
  readonly roundScores: ReadonlyArray<Scalars['String']['output']>;
  readonly roundStatus: ApiRoundStatus;
  readonly roundStatusColor: ApiRoundStatusColor;
  /**   Round Status and display information */
  readonly roundStatusDisplay: Scalars['String']['output'];
  readonly subTitle: Scalars['String']['output'];
  readonly teeTime?: Maybe<Scalars['AWSTimestamp']['output']>;
  readonly thru?: Maybe<Scalars['String']['output']>;
  readonly total?: Maybe<Scalars['String']['output']>;
  /**   Tells the widget what structure to display in */
  readonly widgetDisplay: ApiPlayerHubLeaderboardWidgetDisplay;
};

export type ApiPlayerHubLeaderboardWidgetDisplay =
  | 'INACTIVE'
  | 'IN_PROGRESS'
  | 'TOURNAMENT_OFFICIAL';

/**   Possible message banner targets */
export type ApiPlayerHubMessageBannerAction =
  | 'LEADERBOARD'
  | 'NONE'
  | 'PROFILE'
  | 'SCORECARD';

export type ApiPlayerHubMessageBannerWidget = {
  readonly __typename: 'PlayerHubMessageBannerWidget';
  /**   optional action should the message have a click target */
  readonly action: ApiPlayerHubMessageBannerAction;
  /**   optional background color override */
  readonly background?: Maybe<Scalars['String']['output']>;
  /**   Message to display */
  readonly message: Scalars['String']['output'];
  /**   optional text color override */
  readonly textColor?: Maybe<Scalars['String']['output']>;
};

export type ApiPlayerHubPlayer = {
  readonly __typename: 'PlayerHubPlayer';
  readonly country: Scalars['String']['output'];
  readonly countryCode: Scalars['String']['output'];
  readonly footer?: Maybe<ApiPlayerHubFooter>;
  readonly header?: Maybe<ApiPlayerHubHeader>;
  readonly playerId: Scalars['ID']['output'];
  readonly playerName: Scalars['String']['output'];
  readonly tournamentId: Scalars['String']['output'];
  readonly widgets: ReadonlyArray<ApiPlayerHubWidget>;
};

/**  PLAYER HUB */
export type ApiPlayerHubPlayerCompressed = {
  readonly __typename: 'PlayerHubPlayerCompressed';
  readonly id: Scalars['ID']['output'];
  readonly payload: Scalars['String']['output'];
};

export type ApiPlayerHubRecapWidget = {
  readonly __typename: 'PlayerHubRecapWidget';
  readonly icon: ApiPlayerHubWidgetIcon;
  readonly recap: Scalars['String']['output'];
  readonly roundDisplay: Scalars['String']['output'];
  readonly roundStatus: ApiRoundStatus;
  readonly roundStatusColor: ApiRoundStatusColor;
  /**   Round Status and display information */
  readonly roundStatusDisplay: Scalars['String']['output'];
  /**   Optional widget sponsor */
  readonly sponsor?: Maybe<ApiPlayerHubWidgetSponsor>;
  readonly subTitle?: Maybe<Scalars['String']['output']>;
};

export type ApiPlayerHubShotCommentaryWidget = {
  readonly __typename: 'PlayerHubShotCommentaryWidget';
  readonly commentary: Scalars['String']['output'];
  readonly icon: ApiPlayerHubWidgetIcon;
  readonly shotTitle: Scalars['String']['output'];
  readonly shotTitleBackgroundColor: Scalars['String']['output'];
  /**   Optional widget sponsor */
  readonly sponsor?: Maybe<ApiPlayerHubWidgetSponsor>;
  readonly subTitle: Scalars['String']['output'];
  readonly tourcastURL?: Maybe<Scalars['String']['output']>;
};

export type ApiPlayerHubStatisticsWidget = {
  readonly __typename: 'PlayerHubStatisticsWidget';
  readonly icon: ApiPlayerHubWidgetIcon;
  /**   Optional widget sponsor */
  readonly sponsor?: Maybe<ApiPlayerHubWidgetSponsor>;
  readonly stats: ReadonlyArray<ApiPlayerHubDetailData>;
  readonly subTitle: Scalars['String']['output'];
  readonly title: Scalars['String']['output'];
};

export type ApiPlayerHubTeeTimesWidget = {
  readonly __typename: 'PlayerHubTeeTimesWidget';
  readonly currentLocation?: Maybe<Scalars['String']['output']>;
  readonly displayTeeTime: Scalars['Boolean']['output'];
  readonly icon: ApiPlayerHubWidgetIcon;
  /**   Players and the group tee time */
  readonly players: ReadonlyArray<ApiPlayer>;
  readonly roundDisplay: Scalars['String']['output'];
  readonly roundStatus: ApiRoundStatus;
  readonly roundStatusColor: ApiRoundStatusColor;
  /**   Round Status and display information */
  readonly roundStatusDisplay: Scalars['String']['output'];
  /**   Optional widget sponsor */
  readonly sponsor?: Maybe<ApiPlayerHubWidgetSponsor>;
  readonly teeTime?: Maybe<Scalars['AWSTimestamp']['output']>;
  readonly timezone: Scalars['String']['output'];
};

export type ApiPlayerHubTournamentWidget = {
  readonly __typename: 'PlayerHubTournamentWidget';
  readonly course: Scalars['String']['output'];
  readonly icon: ApiPlayerHubWidgetIcon;
  readonly logoAsset?: Maybe<ApiImageAsset>;
  readonly logoAssetDark?: Maybe<ApiImageAsset>;
  readonly name: Scalars['String']['output'];
};

export type ApiPlayerHubWidget = ApiPlayerHubArticlesWidget | ApiPlayerHubHoleDetailWidget | ApiPlayerHubLeaderboardWidget | ApiPlayerHubMessageBannerWidget | ApiPlayerHubRecapWidget | ApiPlayerHubShotCommentaryWidget | ApiPlayerHubStatisticsWidget | ApiPlayerHubTeeTimesWidget | ApiPlayerHubTournamentWidget | ApiPlayerStoriesWidget;

export type ApiPlayerHubWidgetIcon =
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

export type ApiPlayerHubWidgetSponsor = {
  readonly __typename: 'PlayerHubWidgetSponsor';
  readonly logoAsset: ApiImageAsset;
  readonly logoAssetDark: ApiImageAsset;
  readonly name: Scalars['String']['output'];
  readonly websiteUrl: Scalars['String']['output'];
};

export type ApiPlayerInfo = {
  readonly __typename: 'PlayerInfo';
  readonly countryFlag: Scalars['String']['output'];
  readonly countryName: Scalars['String']['output'];
  readonly firstName: Scalars['String']['output'];
  /** @deprecated URL should be built using player ID */
  readonly headshot: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
  readonly lastName: Scalars['String']['output'];
};

export type ApiPlayerMarketsRow = {
  readonly __typename: 'PlayerMarketsRow';
  readonly country: Scalars['String']['output'];
  readonly countryFlag: Scalars['String']['output'];
  readonly markets: ReadonlyArray<ApiHistoricalPlayerOdds>;
  readonly playerId: Scalars['String']['output'];
  readonly playerName: Scalars['String']['output'];
};

export type ApiPlayerOddsMarket = {
  readonly __typename: 'PlayerOddsMarket';
  readonly id: Scalars['ID']['output'];
  readonly market: Scalars['String']['output'];
  readonly playerOddsOptions: ReadonlyArray<ApiOddsOption>;
  readonly subMarket?: Maybe<Scalars['String']['output']>;
};

export type ApiPlayerOverviewStandings = {
  readonly __typename: 'PlayerOverviewStandings';
  readonly displaySeason: Scalars['String']['output'];
  readonly standings: ReadonlyArray<ApiProfileStandings>;
  readonly tour: ApiTourCode;
};

export type ApiPlayerProfileAchievement = {
  readonly __typename: 'PlayerProfileAchievement';
  readonly title: Scalars['String']['output'];
  readonly value: Scalars['String']['output'];
};

export type ApiPlayerProfileCareer = {
  readonly __typename: 'PlayerProfileCareer';
  readonly achievements: ReadonlyArray<ApiPlayerProfileAchievement>;
  readonly cutsMade?: Maybe<Scalars['String']['output']>;
  readonly events?: Maybe<Scalars['String']['output']>;
  readonly internationalWins?: Maybe<Scalars['String']['output']>;
  readonly majorWins?: Maybe<Scalars['String']['output']>;
  readonly officialMoney?: Maybe<Scalars['String']['output']>;
  readonly playerId: Scalars['ID']['output'];
  readonly runnerUp?: Maybe<Scalars['String']['output']>;
  readonly second?: Maybe<Scalars['String']['output']>;
  readonly tables: ReadonlyArray<ApiPlayerProfileTable>;
  readonly third?: Maybe<Scalars['String']['output']>;
  readonly top5?: Maybe<Scalars['String']['output']>;
  readonly top10?: Maybe<Scalars['String']['output']>;
  readonly top25?: Maybe<Scalars['String']['output']>;
  readonly tourCode?: Maybe<ApiTourCode>;
  readonly tourPills: ReadonlyArray<ApiTourPills>;
  readonly wins?: Maybe<Scalars['String']['output']>;
  readonly winsTitle?: Maybe<Scalars['String']['output']>;
  readonly years: ReadonlyArray<ApiPlayerProfileCareerYear>;
};

export type ApiPlayerProfileCareerResults = {
  readonly __typename: 'PlayerProfileCareerResults';
  readonly playerId: Scalars['ID']['output'];
  readonly tourPills: ReadonlyArray<ApiTourPills>;
  readonly yearResults: ReadonlyArray<ApiPlayerProfileCareerYear>;
};

export type ApiPlayerProfileCareerYear = {
  readonly __typename: 'PlayerProfileCareerYear';
  readonly cutsMade?: Maybe<Scalars['String']['output']>;
  readonly cutsMissed?: Maybe<Scalars['String']['output']>;
  readonly displaySeason: Scalars['String']['output'];
  readonly events?: Maybe<Scalars['String']['output']>;
  readonly officialMoney?: Maybe<Scalars['String']['output']>;
  readonly second?: Maybe<Scalars['String']['output']>;
  readonly standingsPoints?: Maybe<Scalars['String']['output']>;
  readonly standingsRank?: Maybe<Scalars['String']['output']>;
  readonly third?: Maybe<Scalars['String']['output']>;
  readonly top5?: Maybe<Scalars['String']['output']>;
  readonly top10?: Maybe<Scalars['String']['output']>;
  readonly top25?: Maybe<Scalars['String']['output']>;
  readonly tourCode: ApiTourCode;
  readonly wins?: Maybe<Scalars['String']['output']>;
  readonly withdrawn?: Maybe<Scalars['String']['output']>;
  readonly year: Scalars['Int']['output'];
};

export type ApiPlayerProfileCourseResults = {
  readonly __typename: 'PlayerProfileCourseResults';
  readonly coursePills: ReadonlyArray<ApiCoursePills>;
  readonly courses: ReadonlyArray<ApiPlayerCourse>;
  readonly playerId: Scalars['String']['output'];
  readonly tourCode: ApiTourCode;
  readonly tourPills: ReadonlyArray<ApiTourCode>;
};

/**   Player Profile Tournament Results */
export type ApiPlayerProfileInfoItem = {
  readonly __typename: 'PlayerProfileInfoItem';
  readonly logo?: Maybe<Scalars['String']['output']>;
  readonly title: Scalars['String']['output'];
  readonly value: Scalars['String']['output'];
  readonly wide: Scalars['Boolean']['output'];
};

export type ApiPlayerProfileMajors = {
  readonly __typename: 'PlayerProfileMajors';
  readonly playerId: Scalars['String']['output'];
  readonly timelineHeaders: ReadonlyArray<Scalars['String']['output']>;
  readonly timelineTournaments: ReadonlyArray<ApiMajorTimeline>;
  readonly tournaments: ReadonlyArray<ApiMajorResultsTournament>;
};

export type ApiPlayerProfileMessage = {
  readonly __typename: 'PlayerProfileMessage';
  readonly message?: Maybe<Scalars['String']['output']>;
};

export type ApiPlayerProfileOverviewItem = {
  readonly __typename: 'PlayerProfileOverviewItem';
  readonly title: Scalars['String']['output'];
  readonly value: Scalars['String']['output'];
};

export type ApiPlayerProfileRows = {
  readonly __typename: 'PlayerProfileRows';
  readonly rowContent: ReadonlyArray<Scalars['String']['output']>;
  readonly rowTitle: Scalars['String']['output'];
  readonly rowTitleDetail?: Maybe<Scalars['String']['output']>;
  readonly secondContent?: Maybe<ReadonlyArray<Scalars['String']['output']>>;
};

export type ApiPlayerProfileStat = {
  readonly __typename: 'PlayerProfileStat';
  readonly categories: ReadonlyArray<ApiPlayerProfileStatCategory>;
  readonly stats: ReadonlyArray<ApiPlayerProfileStatItem>;
  readonly tour: ApiTourCode;
};

export type ApiPlayerProfileStatCategory = {
  readonly __typename: 'PlayerProfileStatCategory';
  readonly category: ApiPlayerProfileStatCategoryItem;
  readonly displayTitle: Scalars['String']['output'];
};

export type ApiPlayerProfileStatCategoryItem =
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

export type ApiPlayerProfileStatFull = {
  readonly __typename: 'PlayerProfileStatFull';
  readonly categories: ReadonlyArray<ApiPlayerProfileStatCategory>;
  readonly displaySeason: Scalars['String']['output'];
  readonly overview: ReadonlyArray<ApiPlayerProfileStatItem>;
  readonly season: Scalars['String']['output'];
  readonly stats: ReadonlyArray<ApiPlayerProfileStatItem>;
  readonly topStats: ReadonlyArray<ApiPlayerProfileStatItem>;
  readonly tour: ApiTourCode;
};

export type ApiPlayerProfileStatItem = {
  readonly __typename: 'PlayerProfileStatItem';
  readonly aboveOrBelow: ApiScoringTendency;
  readonly category: ReadonlyArray<ApiPlayerProfileStatCategoryItem>;
  readonly fieldAverage: Scalars['String']['output'];
  readonly noDetail?: Maybe<Scalars['Boolean']['output']>;
  readonly rank: Scalars['String']['output'];
  readonly rankDeviation?: Maybe<Scalars['Float']['output']>;
  readonly statId: Scalars['String']['output'];
  readonly supportingStat?: Maybe<ApiPlayerProfileStatItemDetail>;
  readonly supportingValue?: Maybe<ApiPlayerProfileStatItemDetail>;
  readonly title: Scalars['String']['output'];
  readonly value: Scalars['String']['output'];
};

export type ApiPlayerProfileStatItemDetail = {
  readonly __typename: 'PlayerProfileStatItemDetail';
  readonly description: Scalars['String']['output'];
  readonly value: Scalars['String']['output'];
};

export type ApiPlayerProfileStatYear = {
  readonly __typename: 'PlayerProfileStatYear';
  readonly season: Scalars['String']['output'];
  readonly tours: ReadonlyArray<ApiTourCode>;
  readonly year: Scalars['Int']['output'];
};

export type ApiPlayerProfileStatsFullV2 = {
  readonly __typename: 'PlayerProfileStatsFullV2';
  readonly messages?: Maybe<ReadonlyArray<ApiPlayerProfileMessage>>;
  readonly playerProfileStatsFull: ReadonlyArray<ApiPlayerProfileStatFull>;
};

export type ApiPlayerProfileTable = {
  readonly __typename: 'PlayerProfileTable';
  readonly rows: ReadonlyArray<ApiPlayerProfileRows>;
  readonly tableDetail?: Maybe<Scalars['String']['output']>;
  readonly tableName: Scalars['String']['output'];
};

export type ApiPlayerProfileTournamentResults = {
  readonly __typename: 'PlayerProfileTournamentResults';
  readonly playerId: Scalars['ID']['output'];
  readonly tourPills: ReadonlyArray<ApiTourPills>;
  readonly tournamentPills: ReadonlyArray<ApiTournamentResultPill>;
  readonly tournaments: ReadonlyArray<ApiTournamentResults>;
};

export type ApiPlayerProfileTournamentRow = {
  readonly __typename: 'PlayerProfileTournamentRow';
  readonly courseName: Scalars['String']['output'];
  readonly date: Scalars['String']['output'];
  readonly fedexFallPoints: Scalars['String']['output'];
  readonly fedexFallRank: Scalars['String']['output'];
  readonly points: Scalars['String']['output'];
  readonly pointsRank: Scalars['String']['output'];
  readonly position: Scalars['String']['output'];
  readonly roundScores: ReadonlyArray<ApiRoundScoreItem>;
  readonly startDate: Scalars['String']['output'];
  readonly toPar: Scalars['String']['output'];
  readonly total: Scalars['String']['output'];
  readonly tourcastURI?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastURL?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastURLWeb?: Maybe<Scalars['String']['output']>;
  readonly tournamentId: Scalars['ID']['output'];
  readonly tournamentName: Scalars['String']['output'];
  readonly winnings: Scalars['String']['output'];
  readonly year: Scalars['Int']['output'];
};

export type ApiPlayerRecord = {
  readonly __typename: 'PlayerRecord';
  readonly losses: Scalars['String']['output'];
  readonly points: Scalars['String']['output'];
  readonly ties: Scalars['String']['output'];
  readonly wins: Scalars['String']['output'];
};

export type ApiPlayerResultTournament = {
  readonly __typename: 'PlayerResultTournament';
  readonly courseId: Scalars['String']['output'];
  readonly courseName: Scalars['String']['output'];
  readonly fedexFallPoints?: Maybe<Scalars['String']['output']>;
  readonly fedexFallRank?: Maybe<Scalars['String']['output']>;
  readonly finishPosition: Scalars['String']['output'];
  readonly linkable: Scalars['Boolean']['output'];
  readonly money: Scalars['String']['output'];
  readonly points?: Maybe<Scalars['String']['output']>;
  readonly pointsRank?: Maybe<Scalars['String']['output']>;
  readonly r1: Scalars['String']['output'];
  readonly r2: Scalars['String']['output'];
  readonly r3: Scalars['String']['output'];
  readonly r4: Scalars['String']['output'];
  readonly r5: Scalars['String']['output'];
  readonly toPar: Scalars['String']['output'];
  readonly total: Scalars['String']['output'];
  readonly tourcastURI?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastURL?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastURLWeb?: Maybe<Scalars['String']['output']>;
  readonly tournamentEndDate: Scalars['String']['output'];
  readonly tournamentId: Scalars['ID']['output'];
  readonly tournamentName: Scalars['String']['output'];
  readonly tournamentStartDate: Scalars['String']['output'];
};

export type ApiPlayerResults = {
  readonly __typename: 'PlayerResults';
  readonly amateurHighlights?: Maybe<ReadonlyArray<Scalars['String']['output']>>;
  /** @deprecated use standingsDetails */
  readonly cupLogo?: Maybe<Scalars['String']['output']>;
  /** @deprecated use standingsDetails */
  readonly cupLogoAccessibilityText?: Maybe<Scalars['String']['output']>;
  /** @deprecated use standingsDetails */
  readonly cupLogoDark?: Maybe<Scalars['String']['output']>;
  /** @deprecated use standingsDetails */
  readonly cupName?: Maybe<Scalars['String']['output']>;
  /** @deprecated use standingsDetails */
  readonly cupPoints?: Maybe<Scalars['String']['output']>;
  /** @deprecated use standingsDetails */
  readonly cupRank?: Maybe<Scalars['String']['output']>;
  readonly cutsMade?: Maybe<Scalars['String']['output']>;
  readonly displayYear: Scalars['String']['output'];
  readonly disqualified?: Maybe<Scalars['String']['output']>;
  readonly events?: Maybe<Scalars['String']['output']>;
  readonly missedCuts?: Maybe<Scalars['String']['output']>;
  readonly officialMoney?: Maybe<Scalars['String']['output']>;
  readonly playerId: Scalars['String']['output'];
  /** @deprecated use standingsDetails */
  readonly rankLogo?: Maybe<Scalars['String']['output']>;
  /** @deprecated use standingsDetails */
  readonly rankLogoAccessibilityText?: Maybe<Scalars['String']['output']>;
  /** @deprecated use standingsDetails */
  readonly rankLogoDark?: Maybe<Scalars['String']['output']>;
  readonly runnerUp?: Maybe<Scalars['String']['output']>;
  readonly seasonPills: ReadonlyArray<ApiPlayerResultsSeasonPills>;
  readonly seasonRecap?: Maybe<ApiSeasonRecap>;
  /** @deprecated use standingsDetails */
  readonly secondaryCup?: Maybe<ApiSecondaryCupDetails>;
  readonly standingsDetails: ReadonlyArray<ApiResultsStandingsDetail>;
  readonly thirds?: Maybe<Scalars['String']['output']>;
  readonly top5?: Maybe<Scalars['String']['output']>;
  readonly top10?: Maybe<Scalars['String']['output']>;
  readonly top25?: Maybe<Scalars['String']['output']>;
  readonly tour: ApiTourCode;
  readonly tourcastEligible: Scalars['Boolean']['output'];
  readonly tournaments: ReadonlyArray<ApiPlayerResultTournament>;
  readonly wins?: Maybe<Scalars['String']['output']>;
  readonly withdrew?: Maybe<Scalars['String']['output']>;
  readonly year: Scalars['Int']['output'];
};

export type ApiPlayerResultsSeasonPills = {
  readonly __typename: 'PlayerResultsSeasonPills';
  readonly tourCode: ApiTourCode;
  readonly years: ReadonlyArray<ApiStatYearPills>;
};

export type ApiPlayerRowHoleByHole = {
  readonly __typename: 'PlayerRowHoleByHole';
  readonly courseCode: Scalars['String']['output'];
  readonly courseId: Scalars['String']['output'];
  readonly in?: Maybe<Scalars['String']['output']>;
  readonly out?: Maybe<Scalars['String']['output']>;
  readonly playerId: Scalars['String']['output'];
  readonly scores: ReadonlyArray<ApiHoleScore>;
  readonly total?: Maybe<Scalars['String']['output']>;
  readonly totalToPar: Scalars['String']['output'];
};

export type ApiPlayerRowV2 = {
  readonly __typename: 'PlayerRowV2';
  readonly backNine: Scalars['Boolean']['output'];
  readonly courseId: Scalars['String']['output'];
  readonly currentRound: Scalars['Int']['output'];
  readonly groupNumber: Scalars['Int']['output'];
  readonly hasStoryContent: Scalars['Boolean']['output'];
  readonly id: Scalars['ID']['output'];
  readonly leaderboardSortOrder: Scalars['Int']['output'];
  readonly movementAmount: Scalars['String']['output'];
  readonly movementDirection: ApiLeaderboardMovement;
  readonly oddsOptionId?: Maybe<Scalars['String']['output']>;
  readonly oddsSort?: Maybe<Scalars['Float']['output']>;
  readonly oddsSwing?: Maybe<ApiOddsSwing>;
  readonly oddsToWin?: Maybe<Scalars['String']['output']>;
  readonly oddsUrl?: Maybe<Scalars['String']['output']>;
  readonly official: Scalars['String']['output'];
  readonly officialSort: Scalars['Int']['output'];
  readonly player: ApiPlayer;
  readonly playerState: ApiPlayerState;
  readonly position: Scalars['String']['output'];
  readonly projected: Scalars['String']['output'];
  readonly projectedSort: Scalars['Int']['output'];
  readonly rankLogoDark?: Maybe<Scalars['String']['output']>;
  readonly rankLogoLight?: Maybe<Scalars['String']['output']>;
  readonly rankingMovement: ApiCupRankMovementDirection;
  readonly rankingMovementAmount: Scalars['String']['output'];
  readonly rankingMovementAmountSort: Scalars['Int']['output'];
  readonly roundHeader: Scalars['String']['output'];
  readonly roundStatus: Scalars['String']['output'];
  readonly rounds: ReadonlyArray<Scalars['String']['output']>;
  readonly score: Scalars['String']['output'];
  readonly scoreSort: Scalars['Int']['output'];
  readonly storyContentRound?: Maybe<Scalars['Int']['output']>;
  readonly storyContentRounds: ReadonlyArray<Scalars['Int']['output']>;
  readonly teeTime: Scalars['AWSTimestamp']['output'];
  readonly thru: Scalars['String']['output'];
  readonly thruSort: Scalars['Int']['output'];
  readonly total: Scalars['String']['output'];
  readonly totalSort: Scalars['Int']['output'];
  readonly totalStrokes: Scalars['String']['output'];
};

export type ApiPlayerRowV3 = {
  readonly __typename: 'PlayerRowV3';
  readonly id: Scalars['ID']['output'];
  readonly leaderboardSortOrder: Scalars['Int']['output'];
  /**   PLAYER INFO */
  readonly player: ApiPlayer;
  readonly scoringData: ApiLeaderboardScoringDataV3;
};

export type ApiPlayerScorecardRoundStats = {
  readonly __typename: 'PlayerScorecardRoundStats';
  readonly displayName: Scalars['String']['output'];
  readonly performance: ReadonlyArray<ApiScorecardStatsItem>;
  readonly round: Scalars['String']['output'];
  readonly roundStatus: ApiRoundStatus;
  readonly scoring: ReadonlyArray<ApiScorecardStatsItem>;
  readonly strokesGained: ReadonlyArray<ApiStrokesGainedStats>;
};

export type ApiPlayerScorecardStats = {
  readonly __typename: 'PlayerScorecardStats';
  readonly id: Scalars['ID']['output'];
  readonly rounds: ReadonlyArray<ApiPlayerScorecardRoundStats>;
};

export type ApiPlayerScorecardStatsCompressed = {
  readonly __typename: 'PlayerScorecardStatsCompressed';
  readonly id: Scalars['ID']['output'];
  readonly payload: Scalars['String']['output'];
};

export type ApiPlayerSponsorBrand =
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

export type ApiPlayerSponsors = {
  readonly __typename: 'PlayerSponsors';
  readonly defaultSponsor?: Maybe<ApiSponsor>;
  readonly playerId: Scalars['String']['output'];
  readonly sponsors: ReadonlyArray<ApiSponsor>;
};

export type ApiPlayerSponsorship = {
  readonly __typename: 'PlayerSponsorship';
  readonly playerId: Scalars['String']['output'];
  readonly sponsor?: Maybe<ApiPlayerSponsorBrand>;
};

export type ApiPlayerState =
  | 'ACTIVE'
  | 'BETWEEN_ROUNDS'
  | 'COMPLETE'
  | 'CUT'
  | 'DISQUALIFIED'
  | 'NOT_STARTED'
  | 'WITHDRAWN';

export type ApiPlayerStoriesWidget = {
  readonly __typename: 'PlayerStoriesWidget';
  readonly playerSponsorships?: Maybe<ReadonlyArray<ApiPlayerStorySponsorship>>;
  readonly storyRounds: ReadonlyArray<Scalars['String']['output']>;
  readonly subTitle: Scalars['String']['output'];
  readonly title: Scalars['String']['output'];
  readonly tournamentId: Scalars['String']['output'];
};

export type ApiPlayerStorySponsorship = {
  readonly __typename: 'PlayerStorySponsorship';
  readonly logoDarkUrl: Scalars['String']['output'];
  readonly logoUrl: Scalars['String']['output'];
  readonly sponsor: Scalars['String']['output'];
  readonly type: Scalars['String']['output'];
};

export type ApiPlayerTournamentStatus = {
  readonly __typename: 'PlayerTournamentStatus';
  readonly displayMode: ApiPlayerTournamentStatusDisplayMode;
  readonly playerId: Scalars['ID']['output'];
  readonly position: Scalars['String']['output'];
  readonly roundDisplay: Scalars['String']['output'];
  readonly roundStatus: ApiRoundStatus;
  readonly roundStatusColor: ApiRoundStatusColor;
  readonly roundStatusDisplay: Scalars['String']['output'];
  readonly score: Scalars['String']['output'];
  readonly teeTime?: Maybe<Scalars['AWSTimestamp']['output']>;
  readonly thru: Scalars['String']['output'];
  readonly total: Scalars['String']['output'];
  readonly tournamentId: Scalars['String']['output'];
  readonly tournamentName: Scalars['String']['output'];
};

export type ApiPlayerTournamentStatusDisplayMode =
  | 'IN_PROGRESS'
  | 'OFFICIAL'
  | 'TEE_TIMES';

export type ApiPlayerVideo = {
  readonly __typename: 'PlayerVideo';
  readonly firstName?: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly lastName?: Maybe<Scalars['String']['output']>;
  readonly shortName?: Maybe<Scalars['String']['output']>;
};

export type ApiPlayoff = {
  readonly __typename: 'Playoff';
  readonly currentHole: Scalars['Int']['output'];
  readonly holes: ReadonlyArray<ApiPlayoffHole>;
  readonly players: ReadonlyArray<ApiPlayoffPlayer>;
  readonly thru?: Maybe<Scalars['String']['output']>;
};

export type ApiPlayoffDisplayType =
  | 'ALL'
  | 'NONE'
  | 'PLAY_BY_PLAY'
  | 'SCORECARD';

export type ApiPlayoffHole = {
  readonly __typename: 'PlayoffHole';
  readonly courseHole: Scalars['String']['output'];
  readonly format?: Maybe<Scalars['String']['output']>;
  readonly isTotal?: Maybe<Scalars['Boolean']['output']>;
  readonly par: Scalars['String']['output'];
  readonly playoffHole: Scalars['String']['output'];
};

export type ApiPlayoffPlayer = {
  readonly __typename: 'PlayoffPlayer';
  readonly active: Scalars['Boolean']['output'];
  readonly player: ApiPlayer;
  readonly position: Scalars['String']['output'];
  readonly scores: ReadonlyArray<ApiSimpleScore>;
};

export type ApiPlayoffScorecard = {
  readonly __typename: 'PlayoffScorecard';
  readonly courseId: Scalars['String']['output'];
  readonly courseName: Scalars['String']['output'];
  readonly detailViewEnabled: Scalars['Boolean']['output'];
  readonly drawersEnabled: Scalars['Boolean']['output'];
  readonly holeDetail: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
  readonly locationDetail: Scalars['String']['output'];
  readonly players: ReadonlyArray<ApiScorecardHeaderPlayer>;
  readonly playoff: ApiPlayoff;
  readonly playoffScoredType: ApiPlayoffScoredType;
  readonly title: Scalars['String']['output'];
  readonly tourcastURI?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastURL?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastURLWeb?: Maybe<Scalars['String']['output']>;
};

export type ApiPlayoffScoredType =
  | 'AGGREGATE'
  | 'SUDDEN_DEATH';

export type ApiPlayoffTeams = {
  readonly __typename: 'PlayoffTeams';
  readonly active: Scalars['Boolean']['output'];
  readonly players: ReadonlyArray<ApiTspScPlayer>;
  readonly position: Scalars['String']['output'];
  readonly scores: ReadonlyArray<ApiSimpleScore>;
  readonly teamId: Scalars['String']['output'];
};

export type ApiPointOfInterestCoords = {
  readonly __typename: 'PointOfInterestCoords';
  readonly bottomToTopCoords: ApiStrokeCoordinates;
  readonly leftToRightCoords: ApiStrokeCoordinates;
};

export type ApiPowerRankings = {
  readonly __typename: 'PowerRankings';
  readonly ascendingOrder: Scalars['Boolean']['output'];
  readonly powerRankingsTableRow: ReadonlyArray<ApiPowerRankingsTableRow>;
  readonly tableTitle: Scalars['String']['output'];
  readonly tournamentName: Scalars['String']['output'];
  readonly unorderedList: Scalars['Boolean']['output'];
};

export type ApiPowerRankingsTableRow = {
  readonly __typename: 'PowerRankingsTableRow';
  readonly comment: Scalars['String']['output'];
  readonly commentNodes?: Maybe<ReadonlyArray<ApiTourSponsorDescription>>;
  readonly player?: Maybe<ApiPlayerInfo>;
  readonly rank?: Maybe<Scalars['Int']['output']>;
};

export type ApiPresentedByConfig = {
  readonly __typename: 'PresentedByConfig';
  readonly presentedBy: ApiSponsor;
  readonly splashScreen: ApiSponsor;
};

export type ApiPreviousMatch = {
  readonly __typename: 'PreviousMatch';
  readonly matchId: Scalars['ID']['output'];
  readonly matchResult: Scalars['String']['output'];
  readonly matchScore: Scalars['String']['output'];
  readonly matchStatus: Scalars['String']['output'];
  readonly opponent: ApiPreviousMatchOpponent;
  readonly roundDisplayText: Scalars['String']['output'];
  readonly roundNumber: Scalars['Int']['output'];
};

export type ApiPreviousMatchOpponent = {
  readonly __typename: 'PreviousMatchOpponent';
  readonly bracketSeed: Scalars['String']['output'];
  readonly countryFlag: Scalars['String']['output'];
  readonly displayName: Scalars['String']['output'];
  readonly firstName: Scalars['String']['output'];
  readonly headshot: Scalars['String']['output'];
  readonly lastName: Scalars['String']['output'];
  readonly playerId: Scalars['ID']['output'];
  readonly shortName: Scalars['String']['output'];
  readonly tournamentSeed: Scalars['String']['output'];
};

export type ApiPreviousMatches = {
  readonly __typename: 'PreviousMatches';
  readonly header: Scalars['String']['output'];
  readonly matches?: Maybe<ReadonlyArray<ApiPreviousMatch>>;
  readonly messages?: Maybe<ReadonlyArray<ApiMessage>>;
};

export type ApiPreviousRounds = {
  readonly __typename: 'PreviousRounds';
  readonly matches?: Maybe<ReadonlyArray<ApiPreviousMatch>>;
  readonly roundHeader: Scalars['String']['output'];
  readonly roundNumber: Scalars['Int']['output'];
};

export type ApiPriorityCategory = {
  readonly __typename: 'PriorityCategory';
  readonly detail?: Maybe<Scalars['String']['output']>;
  readonly displayName: Scalars['String']['output'];
  readonly players: ReadonlyArray<ApiPriorityPlayer>;
};

export type ApiPriorityPlayer = {
  readonly __typename: 'PriorityPlayer';
  readonly displayName: Scalars['String']['output'];
  readonly playerId: Scalars['String']['output'];
};

export type ApiPriorityRankings = {
  readonly __typename: 'PriorityRankings';
  readonly categories: ReadonlyArray<ApiPriorityCategory>;
  readonly displayYear: Scalars['String']['output'];
  readonly throughText: Scalars['String']['output'];
  readonly tourCode: ApiTourCode;
  readonly year: Scalars['Int']['output'];
  readonly yearPills: ReadonlyArray<ApiStatYearPills>;
};

export type ApiProfileFedExFallStandings = {
  readonly __typename: 'ProfileFedExFallStandings';
  readonly description: Scalars['String']['output'];
  readonly detailCopy?: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  /** @deprecated Use logoAsset */
  readonly logo: Scalars['String']['output'];
  readonly logoAsset: ApiImageAsset;
  /** @deprecated Use logoDarkAsset */
  readonly logoDark: Scalars['String']['output'];
  readonly logoDarkAsset: ApiImageAsset;
  readonly rank: Scalars['String']['output'];
  /** @deprecated Use rankLogoAsset */
  readonly rankLogo?: Maybe<Scalars['String']['output']>;
  readonly rankLogoAsset?: Maybe<ApiImageAsset>;
  /** @deprecated Use rankLogoDarkAsset */
  readonly rankLogoDark?: Maybe<Scalars['String']['output']>;
  readonly rankLogoDarkAsset?: Maybe<ApiImageAsset>;
  readonly title: Scalars['String']['output'];
  readonly total: Scalars['String']['output'];
  readonly totalLabel: Scalars['String']['output'];
  readonly totals?: Maybe<ReadonlyArray<ApiProfileStandingsTotal>>;
  readonly webview?: Maybe<Scalars['String']['output']>;
  readonly webviewBrowserControls?: Maybe<Scalars['Boolean']['output']>;
};

export type ApiProfileHeadshot = {
  readonly __typename: 'ProfileHeadshot';
  readonly country: Scalars['String']['output'];
  readonly countryFlag: Scalars['String']['output'];
  readonly firstName: Scalars['String']['output'];
  readonly image: Scalars['String']['output'];
  readonly lastName: Scalars['String']['output'];
};

export type ApiProfileOverview = {
  readonly __typename: 'ProfileOverview';
  /** @deprecated use profileStandings */
  readonly fedexFallStandings?: Maybe<ApiProfileFedExFallStandings>;
  readonly headshot: ApiProfileHeadshot;
  readonly id: Scalars['ID']['output'];
  readonly performance: ReadonlyArray<ApiProfilePerformance>;
  readonly profileStandings: ReadonlyArray<ApiProfileStandings>;
  readonly snapshot: ReadonlyArray<ApiProfileSnapshotItem>;
  /** @deprecated use profileStandings */
  readonly standings: ApiProfileStandings;
  readonly tglTeamLogo?: Maybe<Scalars['String']['output']>;
  readonly tglTeamName?: Maybe<Scalars['String']['output']>;
};

export type ApiProfilePerformance = {
  readonly __typename: 'ProfilePerformance';
  readonly displaySeason: Scalars['String']['output'];
  readonly season: Scalars['String']['output'];
  readonly stats: ReadonlyArray<ApiProfilePerformanceStat>;
  readonly tour: ApiTourCode;
};

export type ApiProfilePerformanceStat = {
  readonly __typename: 'ProfilePerformanceStat';
  readonly career?: Maybe<Scalars['String']['output']>;
  readonly title: Scalars['String']['output'];
  readonly value: Scalars['String']['output'];
  readonly wide?: Maybe<Scalars['Boolean']['output']>;
};

export type ApiProfileSnapshotItem = {
  readonly __typename: 'ProfileSnapshotItem';
  readonly description?: Maybe<Scalars['String']['output']>;
  readonly title: Scalars['String']['output'];
  readonly value: Scalars['String']['output'];
};

export type ApiProfileStandings = {
  readonly __typename: 'ProfileStandings';
  readonly description: Scalars['String']['output'];
  readonly detailCopy?: Maybe<Scalars['String']['output']>;
  readonly detailUrl?: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  /** @deprecated Use logoAsset */
  readonly logo: Scalars['String']['output'];
  readonly logoAsset: ApiImageAsset;
  /** @deprecated Use logoDarkAsset */
  readonly logoDark: Scalars['String']['output'];
  readonly logoDarkAsset: ApiImageAsset;
  readonly owgr?: Maybe<Scalars['String']['output']>;
  readonly rank: Scalars['String']['output'];
  /** @deprecated Use rankLogoAsset */
  readonly rankLogo?: Maybe<Scalars['String']['output']>;
  readonly rankLogoAsset?: Maybe<ApiImageAsset>;
  /** @deprecated Use rankLogoDarkAsset */
  readonly rankLogoDark?: Maybe<Scalars['String']['output']>;
  readonly rankLogoDarkAsset?: Maybe<ApiImageAsset>;
  readonly title: Scalars['String']['output'];
  readonly total: Scalars['String']['output'];
  readonly totalLabel: Scalars['String']['output'];
  readonly totals?: Maybe<ReadonlyArray<ApiProfileStandingsTotal>>;
  readonly webview?: Maybe<Scalars['String']['output']>;
  readonly webviewBrowserControls?: Maybe<Scalars['Boolean']['output']>;
};

export type ApiProfileStandingsTotal = {
  readonly __typename: 'ProfileStandingsTotal';
  readonly total: Scalars['String']['output'];
  readonly totalLabel: Scalars['String']['output'];
};

export type ApiProgramStat = {
  readonly __typename: 'ProgramStat';
  readonly statName?: Maybe<Scalars['String']['output']>;
  readonly value?: Maybe<Scalars['String']['output']>;
};

export type ApiPromoItem = ApiFieldPromoSection | ApiPromoSection | ApiPromoSectionNewsSection;

export type ApiPromoSection = {
  readonly __typename: 'PromoSection';
  readonly items: ReadonlyArray<ApiPromoSectionItem>;
  readonly title: Scalars['String']['output'];
};

export type ApiPromoSectionContainer = {
  readonly __typename: 'PromoSectionContainer';
  readonly sections: ReadonlyArray<ApiPromoItem>;
};

export type ApiPromoSectionItem = {
  readonly __typename: 'PromoSectionItem';
  readonly accessibilityText: Scalars['String']['output'];
  readonly backgroundColor: Scalars['String']['output'];
  readonly externalLaunch: Scalars['Boolean']['output'];
  readonly label?: Maybe<Scalars['String']['output']>;
  readonly labelColor: Scalars['String']['output'];
  readonly logo: Scalars['String']['output'];
  readonly webview: Scalars['String']['output'];
  readonly webviewBrowserControls: Scalars['Boolean']['output'];
  readonly webviewTitle: Scalars['String']['output'];
};

export type ApiPromoSectionNewsSection = {
  readonly __typename: 'PromoSectionNewsSection';
  readonly franchises: ReadonlyArray<Scalars['String']['output']>;
  readonly title: Scalars['String']['output'];
};

export type ApiPromoSectionType =
  | 'GAMING'
  | 'MORE'
  | 'WEBGOLFBET';

export type ApiQuery = {
  readonly __typename: 'Query';
  /**
   *   Returns the AdConfig for the given optionally supplied tour and/or tournament
   * @deprecated use REST API
   */
  readonly adTagConfig: ApiAdConfig;
  readonly allTimeRecordCategories: ApiAllTimeRecordCategories;
  readonly allTimeRecordStat: ApiAllTimeRecordStat;
  readonly alltoursponsors: ReadonlyArray<Maybe<ApiTourSponsor>>;
  readonly aon: ApiAon;
  /** @deprecated use REST API */
  readonly articleAdConfig: ApiAdTagConfig;
  /** @deprecated Use articleDetailsCompressed */
  readonly articleDetails: ApiNewsArticleDetails;
  readonly articleDetailsCompressed: ApiNewsArticleDetailsCompressed;
  readonly broadcastTimes: ApiBroadcastCoverage;
  /**   Note this is optional on purpose */
  readonly bubble?: Maybe<ApiBubbleWatch>;
  /** @deprecated use bubble */
  readonly bubbleWatch?: Maybe<ApiTourCupRankingEvent>;
  readonly completeSchedule: ReadonlyArray<ApiSchedule>;
  readonly contentFragmentTabs: ApiContentFragmentTabs;
  readonly contentFragmentType?: Maybe<ApiContentFragmentType>;
  readonly contentFragmentsCompressed: ApiContentFragmentsCompressed;
  readonly courseHolesStats: ReadonlyArray<ApiHoleStatSummary>;
  readonly courseStats: ApiTournamentHoleStats;
  readonly courseStatsDetails: ApiCourseStatsDetails;
  readonly courseStatsOverview: ApiCourseStatsOverview;
  readonly coverage: ApiBroadcastCoverage;
  readonly cupPastResults: ApiCupPastResults;
  readonly cupPlayOverviewLeaderboard: ApiCupTournamentStatus;
  readonly cupRoundLeaderboard: ApiCupTournamentLeaderboard;
  readonly cupRoundLeaderboardCompressed: ApiCupTournamentLeaderboardCompressed;
  readonly cupScorecard: ApiCupScorecard;
  readonly cupTeamRoster: ApiCupTeamRosters;
  readonly cupTeeTimes: ApiCupTeeTimes;
  readonly currentLeadersCompressed?: Maybe<ApiCurrentLeadersCompressed>;
  readonly defaultTourCup: ApiTourCupRankingEvent;
  readonly eaglesForImpact: ApiEaglesForImpact;
  readonly eventGuideConfig: ApiEventGuideConfig;
  readonly field: ApiField;
  readonly fieldStats: ApiFieldStats;
  readonly franchises: ReadonlyArray<Scalars['String']['output']>;
  readonly genericContent: ApiGenericContent;
  readonly genericContentCompressed: ApiGenericContentCompressed;
  readonly getExpertPicksTable: ApiExpertPicks;
  readonly getPowerRankingsTable: ApiPowerRankings;
  readonly getRCPhotoGallery: ApiRcPhotoGallery;
  readonly getRelatedFact: ApiRelatedFact;
  readonly getShotCommentary: ApiShotCommentary;
  /**   Returns full details for a match based on supplied matchId */
  readonly groupLocations: ApiGroupLocation;
  readonly groupStageRankings: ApiGroupStageRankings;
  readonly groupedField: ApiGroupedField;
  readonly historicalOdds?: Maybe<ApiHistoricalPlayerOdds>;
  readonly historicalScorecardStats: ApiHistoricalPlayerScorecards;
  readonly historicalTournamentsOdds?: Maybe<ApiHistoricalTournamentOdds>;
  readonly holeDetails: ApiHoleDetail;
  readonly leaderboardCompressedV2: ApiLeaderboardCompressedV2;
  /**   Get the leaderboard for a tournament by tournamentID. The data in the payload property will be Base64 encoded. */
  readonly leaderboardCompressedV3: ApiLeaderboardCompressedV3;
  readonly leaderboardHoleByHole: ApiLeaderboardHoleByHole;
  readonly leaderboardLegend: ApiLeaderboardInfo;
  readonly leaderboardStats: ApiLeaderboardStats;
  readonly leaderboardStrokes: ApiLeaderboardStrokes;
  readonly leaderboardStrokesCompressed: ApiLeaderboardStrokesCompressed;
  readonly leaderboardV2: ApiLeaderboardV2;
  readonly leaderboardV3: ApiLeaderboardV3;
  readonly legalDocsCompressed: ApiGenericContentCompressed;
  readonly liveAudioStream: ApiAudioStream;
  readonly liveVideoOverride: ApiLiveVideoOverride;
  readonly matchOutcomeIq: ApiRyderCupMatchOutcomeIq;
  readonly matchPlayLeaderboard: ApiMpLeaderboard;
  readonly matchPlayLeaderboardCompressed: ApiLeaderboardCompressed;
  readonly matchPlayPlayoffScorecard: ApiMpPlayoffScorecard;
  readonly matchPlayScorecard: ApiMpScorecard;
  readonly matchPlayScorecardResults: ApiMpScorecardResults;
  readonly matchPlayTeeTimes: ApiMpTeeTimes;
  readonly matchPlayTeeTimesCompressed: ApiTeeTimesCompressed;
  readonly networks: ApiBroadcastNetworks;
  readonly newletterSubscriptions: ReadonlyArray<ApiNewsletter>;
  readonly newsArticles: ApiNewsArticles;
  readonly newsFranchises: ReadonlyArray<ApiNewsFranchise>;
  readonly oddsGraph: ApiOddsTimeline;
  readonly oddsTable: ApiOddsTable;
  readonly oddsToWin: ApiOddsToWinMarket;
  readonly oddsToWinCompressed: ApiOddsToWinMarketCompressed;
  readonly player: ApiPlayerBioWrapper;
  readonly playerComparison: ApiPlayerComparison;
  readonly playerDirectory: ApiPlayerDirectory;
  readonly playerFinishStats?: Maybe<ApiPlayerFinishStats>;
  readonly playerHub?: Maybe<ApiPlayerHubPlayerCompressed>;
  /** @deprecated use REST API */
  readonly playerProfileCareer: ApiPlayerProfileCareer;
  /** @deprecated use REST API */
  readonly playerProfileCareerResults: ApiPlayerProfileCareerResults;
  readonly playerProfileCourseResults?: Maybe<ApiPlayerProfileCourseResults>;
  readonly playerProfileMajorResults?: Maybe<ApiPlayerProfileMajors>;
  /** @deprecated use REST API */
  readonly playerProfileOverview: ApiProfileOverview;
  readonly playerProfileScorecards: ApiHistoricalPlayerScorecards;
  /** @deprecated use REST API */
  readonly playerProfileSeasonResults: ApiPlayerResults;
  /** @deprecated use REST API */
  readonly playerProfileStandings: ReadonlyArray<ApiPlayerOverviewStandings>;
  readonly playerProfileStats: ReadonlyArray<ApiPlayerProfileStat>;
  /** @deprecated use REST API */
  readonly playerProfileStatsFull: ReadonlyArray<ApiPlayerProfileStatFull>;
  /** @deprecated use REST API */
  readonly playerProfileStatsFullV2: ApiPlayerProfileStatsFullV2;
  /** @deprecated use REST API */
  readonly playerProfileStatsYears: ReadonlyArray<ApiPlayerProfileStatYear>;
  readonly playerProfileTournamentResults: ApiPlayerProfileTournamentResults;
  /** @deprecated use REST API */
  readonly playerSponsorships: ReadonlyArray<ApiPlayerSponsorship>;
  readonly playerTournamentStatus?: Maybe<ApiPlayerTournamentStatus>;
  readonly players: ReadonlyArray<ApiPlayerBioWrapper>;
  readonly playersOddsComparison: ReadonlyArray<ApiPlayerComparisonOdds>;
  readonly playoffScorecard: ApiPlayoffScorecard;
  /** @deprecated use v3 */
  readonly playoffScorecardV2?: Maybe<ReadonlyArray<ApiPlayoffScorecard>>;
  readonly playoffScorecardV3: ApiTournamentPlayoffScorecards;
  readonly playoffShotDetails: ApiGroupShotDetails;
  readonly playoffShotDetailsCompressed: ApiGroupShotDetailsCompressed;
  readonly podcastEpisodes: ReadonlyArray<ApiEpisode>;
  readonly podcasts: ReadonlyArray<ApiAudio>;
  readonly presentedBy: ApiPresentedByConfig;
  readonly priorityRankings: ApiPriorityRankings;
  readonly promoSection: ApiPromoSectionContainer;
  readonly rankingsWinners: ReadonlyArray<ApiRankingsPastWinner>;
  readonly rsm: ApiRsmStandings;
  readonly rsmLeaderboard: ApiRsmLeaderboard;
  readonly ryderCupArticleDetailsCompressed: ApiNewsArticleDetailsCompressed;
  readonly ryderCupBroadcastCoverage: ApiRyderCupBroadcastCoverage;
  readonly ryderCupContentFragmentsCompressed: ApiContentFragmentsCompressed;
  readonly ryderCupContentOptions: ApiRyderCupMediaSearchOptions;
  readonly ryderCupContentPageTabs: ApiContentFragmentTabs;
  readonly ryderCupMixedMedia: ReadonlyArray<ApiRyderCupContent>;
  readonly ryderCupMixedMediaCompressed: ApiRyderCupContentCompressed;
  readonly ryderCupPlayerProfileCompressed: ApiRyderCupPlayerProfileCompressed;
  /** @deprecated use ryderCupTeamRankingsV2 */
  readonly ryderCupTeamRankings?: Maybe<ApiRyderCupTeamRankings>;
  /** @deprecated use ryderCupTeamRankingsCompressedV2 */
  readonly ryderCupTeamRankingsCompressed?: Maybe<ApiRyderCupTeamRankingsCompressed>;
  readonly ryderCupTeamRankingsCompressedV2?: Maybe<ApiRyderCupTeamRankingsCompressed>;
  readonly ryderCupTeamRankingsV2?: Maybe<ApiRyderCupRankingsV2>;
  readonly ryderCupTournament?: Maybe<ApiRyderCupTournament>;
  readonly ryderCupTournaments: ReadonlyArray<ApiRyderCupTournamentOverview>;
  readonly ryderCupVideoById?: Maybe<ApiRcVideoPage>;
  readonly scatterData: ApiScatterData;
  readonly scatterDataCompressed: ApiScatterDataCompressed;
  readonly schedule: ApiSchedule;
  readonly scheduleYears: ApiScheduleYears;
  readonly scorecardCompressedV3: ApiScorecardCompressedV3;
  readonly scorecardStats: ApiPlayerScorecardStats;
  readonly scorecardStatsComparison?: Maybe<ApiScorecardStatsComparison>;
  readonly scorecardStatsV3: ApiPlayerScorecardStats;
  readonly scorecardStatsV3Compressed: ApiPlayerScorecardStatsCompressed;
  readonly scorecardV2: ApiLeaderboardDrawerV2;
  readonly scorecardV3: ApiScorecardV3;
  readonly searchBarFeatures: ApiSearchBarFeatures;
  /** @deprecated No longer supported */
  readonly searchPlayers: ReadonlyArray<ApiPlayer>;
  readonly shotDetailsCompressedV3: ApiShotDetailsCompressedV3;
  readonly shotDetailsV3: ApiShotDetails;
  readonly signatureStandings: ApiSignatureStandings;
  readonly sponsoredArticles: ReadonlyArray<ApiNewsArticle>;
  readonly sponsoredArticlesV2: ApiSponsoredArticles;
  /** @deprecated use REST API */
  readonly sponsorships: ApiPlayerSponsors;
  readonly statDetails: ApiStatDetails;
  readonly statLeaders: ApiStatLeaderCategory;
  readonly statOverview: ApiOverviewStats;
  readonly statsLeadersMobile: ApiMobileStatLeaders;
  readonly teamStrokePlayLeaderboard: ApiTspLeaderboard;
  readonly teamStrokePlayLeaderboardCompressed: ApiLeaderboardCompressed;
  readonly teamStrokePlayScorecard: ApiTspScorecard;
  readonly teamStrokePlayScorecardRounds: ApiTspScorecardRounds;
  readonly teamStrokePlayTeeTimes: ApiTspTeeTimes;
  readonly teamStrokePlayTeeTimesCompressed: ApiTeeTimesCompressed;
  readonly teeTimes: ApiTeeTimes;
  readonly teeTimesCompressed: ApiTeeTimesCompressed;
  readonly teeTimesCompressedV2: ApiTeeTimesCompressed;
  readonly teeTimesV2: ApiTeeTimesV2;
  /**   Returns full details for matches based on supplied matchIds */
  readonly tglMatch?: Maybe<ApiTglMatch>;
  /**   return a season from TGL based on supplied year, if year is ommitted current year returned, used by AEM */
  readonly tglMatches: ReadonlyArray<ApiTglMatch>;
  /**  ## TGL queries */
  readonly tglSchedule: ApiTglSchedule;
  readonly tourCup: ApiTourCupRankingEvent;
  readonly tourCupCombined: ApiTourCupCombined;
  readonly tourCupSplit?: Maybe<ApiTourCupSplit>;
  readonly tourCups: ReadonlyArray<ApiTourCupRankingEvent>;
  readonly tourcastTable: ApiTourcastTable;
  readonly tourcastVideos: ReadonlyArray<ApiVideo>;
  readonly tournamentGroupLocations: ApiTournamentGroupLocation;
  readonly tournamentHistory?: Maybe<ApiTournamentHistory>;
  /** @deprecated DOES NOT WORK USE oddsWin / REST APIs */
  readonly tournamentOddsCompressedV2: ApiTournamentOddsCompressedV2;
  readonly tournamentOddsToWin: ApiTournamentOddsToWin;
  /** @deprecated DOES NOT WORK USE oddsToWin / REST APIs */
  readonly tournamentOddsV2: ApiTournamentOddsV2;
  readonly tournamentOverview: ApiTournamentOverview;
  readonly tournamentPastResults: ApiHistoricalLeaderboard;
  readonly tournamentRecap: ApiTournamentRecap;
  /**   Get tournament information for the given tournament IDs */
  readonly tournaments: ReadonlyArray<ApiTournament>;
  readonly tspPlayoffShotDetails: ApiTeamShotDetails;
  readonly tspPlayoffShotDetailsCompressed: ApiTeamShotDetailsCompressed;
  readonly universityRankings: ApiUniversityRankings;
  readonly universityTotalPoints: ApiUniversityTotalPoints;
  readonly upcomingNetworks: ApiUpcomingBroadcastNetworks;
  readonly upcomingSchedule: ApiScheduleUpcoming;
  readonly videoById?: Maybe<ApiVideo>;
  readonly videoFranchises?: Maybe<ApiTourCategories>;
  readonly videoHero: ApiVideoHero;
  readonly videoLandingPage?: Maybe<ApiWatchLanding>;
  readonly videoNavigation?: Maybe<ApiVideoNavigation>;
  readonly videoRecommendations: ReadonlyArray<ApiVideo>;
  readonly videos: ReadonlyArray<ApiVideo>;
  readonly weather: ApiWeatherSummary;
  readonly yourTour: ApiYourTourStory;
  readonly yourTourNews: ReadonlyArray<ApiYourTourNews>;
};


export type ApiQueryAdTagConfigArgs = {
  tour?: InputMaybe<ApiTourCode>;
  tournamentId?: InputMaybe<Scalars['String']['input']>;
};


export type ApiQueryAllTimeRecordCategoriesArgs = {
  tourCode: ApiTourCode;
};


export type ApiQueryAllTimeRecordStatArgs = {
  recordId: Scalars['String']['input'];
  tourCode: ApiTourCode;
};


export type ApiQueryAlltoursponsorsArgs = {
  tourCode: ApiTourCode;
};


export type ApiQueryAonArgs = {
  year?: InputMaybe<Scalars['Int']['input']>;
};


export type ApiQueryArticleAdConfigArgs = {
  franchise?: InputMaybe<Scalars['String']['input']>;
};


export type ApiQueryArticleDetailsArgs = {
  path: Scalars['String']['input'];
};


export type ApiQueryArticleDetailsCompressedArgs = {
  path: Scalars['String']['input'];
};


export type ApiQueryBroadcastTimesArgs = {
  pastResults?: InputMaybe<Scalars['Boolean']['input']>;
  tournamentId: Scalars['ID']['input'];
};


export type ApiQueryBubbleArgs = {
  tourCode: ApiTourCode;
  tournamentId: Scalars['ID']['input'];
};


export type ApiQueryBubbleWatchArgs = {
  tourCode: ApiTourCode;
};


export type ApiQueryCompleteScheduleArgs = {
  filter?: InputMaybe<ApiTournamentCategory>;
  tourCode: ApiTourCode;
};


export type ApiQueryContentFragmentTabsArgs = {
  path: Scalars['String']['input'];
};


export type ApiQueryContentFragmentTypeArgs = {
  path: Scalars['String']['input'];
};


export type ApiQueryContentFragmentsCompressedArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  tourCode: ApiTourCode;
};


export type ApiQueryCourseHolesStatsArgs = {
  courseId: Scalars['ID']['input'];
  tournamentId: Scalars['ID']['input'];
};


export type ApiQueryCourseStatsArgs = {
  tournamentId: Scalars['ID']['input'];
};


export type ApiQueryCourseStatsDetailsArgs = {
  queryType: ApiCourseStatsId;
  round?: InputMaybe<ApiToughestRound>;
  tourCode: ApiTourCode;
  year?: InputMaybe<Scalars['Int']['input']>;
};


export type ApiQueryCourseStatsOverviewArgs = {
  tourCode: ApiTourCode;
  year?: InputMaybe<Scalars['Int']['input']>;
};


export type ApiQueryCoverageArgs = {
  pastResults?: InputMaybe<Scalars['Boolean']['input']>;
  tournamentId: Scalars['ID']['input'];
};


export type ApiQueryCupPastResultsArgs = {
  tournamentId: Scalars['ID']['input'];
};


export type ApiQueryCupPlayOverviewLeaderboardArgs = {
  id: Scalars['ID']['input'];
};


export type ApiQueryCupRoundLeaderboardArgs = {
  round?: InputMaybe<Scalars['Int']['input']>;
  tournamentId: Scalars['String']['input'];
};


export type ApiQueryCupRoundLeaderboardCompressedArgs = {
  round?: InputMaybe<Scalars['Int']['input']>;
  tournamentId: Scalars['String']['input'];
};


export type ApiQueryCupScorecardArgs = {
  matchId: Scalars['Int']['input'];
  round: Scalars['Int']['input'];
  tournamentId: Scalars['ID']['input'];
};


export type ApiQueryCupTeamRosterArgs = {
  tournamentId: Scalars['ID']['input'];
};


export type ApiQueryCupTeeTimesArgs = {
  tournamentId: Scalars['ID']['input'];
};


export type ApiQueryCurrentLeadersCompressedArgs = {
  tourCode?: InputMaybe<ApiTourCode>;
  tournamentId?: InputMaybe<Scalars['ID']['input']>;
};


export type ApiQueryDefaultTourCupArgs = {
  tour: ApiTourCode;
  year?: InputMaybe<Scalars['Int']['input']>;
};


export type ApiQueryEaglesForImpactArgs = {
  tournamentId: Scalars['ID']['input'];
};


export type ApiQueryEventGuideConfigArgs = {
  tournamentId: Scalars['String']['input'];
};


export type ApiQueryFieldArgs = {
  changesOnly?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
  includeWithdrawn?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ApiQueryFieldStatsArgs = {
  fieldStatType?: InputMaybe<ApiFieldStatType>;
  tournamentId: Scalars['ID']['input'];
};


export type ApiQueryFranchisesArgs = {
  tourCode?: InputMaybe<Scalars['String']['input']>;
};


export type ApiQueryGenericContentArgs = {
  path: Scalars['String']['input'];
};


export type ApiQueryGenericContentCompressedArgs = {
  path: Scalars['String']['input'];
};


export type ApiQueryGetExpertPicksTableArgs = {
  path: Scalars['String']['input'];
  year?: InputMaybe<Scalars['Int']['input']>;
};


export type ApiQueryGetPowerRankingsTableArgs = {
  path: Scalars['String']['input'];
};


export type ApiQueryGetRcPhotoGalleryArgs = {
  path: Scalars['String']['input'];
};


export type ApiQueryGetRelatedFactArgs = {
  path: Scalars['String']['input'];
};


export type ApiQueryGetShotCommentaryArgs = {
  playerId: Scalars['String']['input'];
  round: Scalars['Int']['input'];
  tournamentId: Scalars['String']['input'];
};


export type ApiQueryGroupLocationsArgs = {
  round: Scalars['Int']['input'];
  tournamentId: Scalars['ID']['input'];
};


export type ApiQueryGroupStageRankingsArgs = {
  tournamentId: Scalars['ID']['input'];
};


export type ApiQueryGroupedFieldArgs = {
  changesOnly?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
  includeWithdrawn?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ApiQueryHistoricalOddsArgs = {
  marketId: ApiHistoricalOddsId;
  playerId: Scalars['String']['input'];
  timeStamp?: InputMaybe<Scalars['AWSDateTime']['input']>;
  tournamentId: Scalars['String']['input'];
};


export type ApiQueryHistoricalScorecardStatsArgs = {
  playerId: Scalars['ID']['input'];
};


export type ApiQueryHistoricalTournamentsOddsArgs = {
  marketId: ApiOddsMarketType;
  timeStamp?: InputMaybe<Scalars['AWSDateTime']['input']>;
  tournamentId: Scalars['String']['input'];
};


export type ApiQueryHoleDetailsArgs = {
  courseId: Scalars['ID']['input'];
  hole: Scalars['Int']['input'];
  tournamentId: Scalars['ID']['input'];
};


export type ApiQueryLeaderboardCompressedV2Args = {
  id: Scalars['ID']['input'];
};


export type ApiQueryLeaderboardCompressedV3Args = {
  id: Scalars['ID']['input'];
};


export type ApiQueryLeaderboardHoleByHoleArgs = {
  round?: InputMaybe<Scalars['Int']['input']>;
  tournamentId: Scalars['ID']['input'];
};


export type ApiQueryLeaderboardLegendArgs = {
  odds: Scalars['Boolean']['input'];
  tournamentId: Scalars['ID']['input'];
};


export type ApiQueryLeaderboardStatsArgs = {
  id: Scalars['ID']['input'];
  statsType?: InputMaybe<ApiLeaderboardStatsType>;
};


export type ApiQueryLeaderboardStrokesArgs = {
  id: Scalars['ID']['input'];
};


export type ApiQueryLeaderboardStrokesCompressedArgs = {
  id: Scalars['ID']['input'];
};


export type ApiQueryLeaderboardV2Args = {
  id: Scalars['ID']['input'];
};


export type ApiQueryLeaderboardV3Args = {
  id: Scalars['ID']['input'];
};


export type ApiQueryLegalDocsCompressedArgs = {
  path: Scalars['String']['input'];
};


export type ApiQueryLiveAudioStreamArgs = {
  id: Scalars['ID']['input'];
};


export type ApiQueryLiveVideoOverrideArgs = {
  tourCode: ApiTourCode;
  tournamentId: Scalars['String']['input'];
};


export type ApiQueryMatchOutcomeIqArgs = {
  matchId: Scalars['Int']['input'];
  roundNumber?: InputMaybe<Scalars['Int']['input']>;
  tournamentId: Scalars['String']['input'];
};


export type ApiQueryMatchPlayLeaderboardArgs = {
  id: Scalars['ID']['input'];
};


export type ApiQueryMatchPlayLeaderboardCompressedArgs = {
  id: Scalars['ID']['input'];
};


export type ApiQueryMatchPlayPlayoffScorecardArgs = {
  matchId: Scalars['ID']['input'];
  roundNum: Scalars['Int']['input'];
  tournamentId: Scalars['ID']['input'];
};


export type ApiQueryMatchPlayScorecardArgs = {
  matchId: Scalars['ID']['input'];
  roundNum: Scalars['Int']['input'];
  tournamentId: Scalars['ID']['input'];
};


export type ApiQueryMatchPlayScorecardResultsArgs = {
  matchId: Scalars['ID']['input'];
  roundNum: Scalars['Int']['input'];
  tournamentId: Scalars['ID']['input'];
};


export type ApiQueryMatchPlayTeeTimesArgs = {
  tournamentId: Scalars['ID']['input'];
};


export type ApiQueryMatchPlayTeeTimesCompressedArgs = {
  tournamentId: Scalars['ID']['input'];
};


export type ApiQueryNetworksArgs = {
  tournamentId: Scalars['ID']['input'];
};


export type ApiQueryNewletterSubscriptionsArgs = {
  includeTournaments?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ApiQueryNewsArticlesArgs = {
  franchise?: InputMaybe<Scalars['String']['input']>;
  franchises?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  playerId?: InputMaybe<Scalars['ID']['input']>;
  playerIds?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
  sectionName?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  targetYear?: InputMaybe<Scalars['String']['input']>;
  tour?: InputMaybe<ApiTourCode>;
  tournamentNum?: InputMaybe<Scalars['String']['input']>;
};


export type ApiQueryNewsFranchisesArgs = {
  allFranchises?: InputMaybe<Scalars['Boolean']['input']>;
  tourCode?: InputMaybe<Scalars['String']['input']>;
};


export type ApiQueryOddsGraphArgs = {
  marketId?: InputMaybe<ApiHistoricalOddsId>;
  oddsTimeType?: InputMaybe<ApiOddsTimeType>;
  playerIds: ReadonlyArray<Scalars['String']['input']>;
  round?: InputMaybe<Scalars['Int']['input']>;
  tournamentId: Scalars['String']['input'];
};


export type ApiQueryOddsTableArgs = {
  markets?: InputMaybe<ReadonlyArray<ApiArticleOddsMarketsInput>>;
  players?: InputMaybe<ReadonlyArray<ApiArticleOddsPlayerInput>>;
  timeStamp?: InputMaybe<Scalars['String']['input']>;
  tournamentId: Scalars['String']['input'];
  tournamentName: Scalars['String']['input'];
};


export type ApiQueryOddsToWinArgs = {
  oddsToWinId: Scalars['ID']['input'];
};


export type ApiQueryOddsToWinCompressedArgs = {
  oddsToWinId: Scalars['ID']['input'];
};


export type ApiQueryPlayerArgs = {
  id: Scalars['ID']['input'];
};


export type ApiQueryPlayerComparisonArgs = {
  category?: InputMaybe<ApiPlayerComparisonCategory>;
  playerIds: ReadonlyArray<Scalars['String']['input']>;
  tourCode: ApiTourCode;
  tournamentId?: InputMaybe<Scalars['String']['input']>;
  year?: InputMaybe<Scalars['Int']['input']>;
};


export type ApiQueryPlayerDirectoryArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  tourCode: ApiTourCode;
};


export type ApiQueryPlayerFinishStatsArgs = {
  playerId: Scalars['ID']['input'];
  statId: Scalars['String']['input'];
  tourCode: ApiTourCode;
};


export type ApiQueryPlayerHubArgs = {
  playerId: Scalars['ID']['input'];
};


export type ApiQueryPlayerProfileCareerArgs = {
  playerId: Scalars['String']['input'];
  tourCode?: InputMaybe<ApiTourCode>;
};


export type ApiQueryPlayerProfileCareerResultsArgs = {
  playerId: Scalars['ID']['input'];
};


export type ApiQueryPlayerProfileCourseResultsArgs = {
  playerId: Scalars['String']['input'];
  tourCode?: InputMaybe<ApiTourCode>;
};


export type ApiQueryPlayerProfileMajorResultsArgs = {
  playerId: Scalars['String']['input'];
};


export type ApiQueryPlayerProfileOverviewArgs = {
  currentTour?: InputMaybe<ApiTourCode>;
  playerId: Scalars['ID']['input'];
};


export type ApiQueryPlayerProfileScorecardsArgs = {
  playerId: Scalars['ID']['input'];
};


export type ApiQueryPlayerProfileSeasonResultsArgs = {
  playerId: Scalars['ID']['input'];
  tourCode?: InputMaybe<ApiTourCode>;
  year?: InputMaybe<Scalars['Int']['input']>;
};


export type ApiQueryPlayerProfileStandingsArgs = {
  playerId: Scalars['ID']['input'];
};


export type ApiQueryPlayerProfileStatsArgs = {
  playerId: Scalars['ID']['input'];
};


export type ApiQueryPlayerProfileStatsFullArgs = {
  playerId: Scalars['ID']['input'];
  year?: InputMaybe<Scalars['Int']['input']>;
};


export type ApiQueryPlayerProfileStatsFullV2Args = {
  playerId: Scalars['ID']['input'];
  year?: InputMaybe<Scalars['Int']['input']>;
};


export type ApiQueryPlayerProfileStatsYearsArgs = {
  playerId: Scalars['ID']['input'];
};


export type ApiQueryPlayerProfileTournamentResultsArgs = {
  playerId: Scalars['ID']['input'];
  tourCode?: InputMaybe<ApiTourCode>;
};


export type ApiQueryPlayerSponsorshipsArgs = {
  sponsors?: InputMaybe<ReadonlyArray<ApiPlayerSponsorBrand>>;
  tour: ApiTourCode;
};


export type ApiQueryPlayerTournamentStatusArgs = {
  playerId: Scalars['ID']['input'];
};


export type ApiQueryPlayersArgs = {
  ids: ReadonlyArray<Scalars['ID']['input']>;
};


export type ApiQueryPlayersOddsComparisonArgs = {
  playerIds: ReadonlyArray<Scalars['String']['input']>;
};


export type ApiQueryPlayoffScorecardArgs = {
  id: Scalars['ID']['input'];
};


export type ApiQueryPlayoffScorecardV2Args = {
  id: Scalars['ID']['input'];
};


export type ApiQueryPlayoffScorecardV3Args = {
  tournamentId: Scalars['ID']['input'];
};


export type ApiQueryPlayoffShotDetailsArgs = {
  includeRadar?: InputMaybe<Scalars['Boolean']['input']>;
  tournamentId: Scalars['ID']['input'];
};


export type ApiQueryPlayoffShotDetailsCompressedArgs = {
  includeRadar?: InputMaybe<Scalars['Boolean']['input']>;
  tournamentId: Scalars['ID']['input'];
};


export type ApiQueryPodcastEpisodesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  podcastId: Scalars['String']['input'];
};


export type ApiQueryPriorityRankingsArgs = {
  tourCode: ApiTourCode;
  year?: InputMaybe<Scalars['Int']['input']>;
};


export type ApiQueryPromoSectionArgs = {
  section: ApiPromoSectionType;
};


export type ApiQueryRankingsWinnersArgs = {
  tourCode?: InputMaybe<ApiTourCode>;
};


export type ApiQueryRsmArgs = {
  year?: InputMaybe<Scalars['Int']['input']>;
};


export type ApiQueryRsmLeaderboardArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  tournamentId?: InputMaybe<Scalars['ID']['input']>;
};


export type ApiQueryRyderCupArticleDetailsCompressedArgs = {
  path: Scalars['String']['input'];
};


export type ApiQueryRyderCupBroadcastCoverageArgs = {
  eventRegion?: InputMaybe<ApiEventRegion>;
};


export type ApiQueryRyderCupContentFragmentsCompressedArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  tourCode: ApiTourCode;
};


export type ApiQueryRyderCupContentPageTabsArgs = {
  path: Scalars['String']['input'];
};


export type ApiQueryRyderCupMixedMediaArgs = {
  articleTags?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  ascending: Scalars['Boolean']['input'];
  categories?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  currentContentId?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  playerIds?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  team?: InputMaybe<ApiRyderCupTeamType>;
  topic?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<ApiRyderCupContentType>;
  videoTags?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  year?: InputMaybe<Scalars['Int']['input']>;
};


export type ApiQueryRyderCupMixedMediaCompressedArgs = {
  articleTags?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  ascending: Scalars['Boolean']['input'];
  categories?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  currentContentId?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  playerIds?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  team?: InputMaybe<ApiRyderCupTeamType>;
  topic?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<ApiRyderCupContentType>;
  videoTags?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  year?: InputMaybe<Scalars['Int']['input']>;
};


export type ApiQueryRyderCupPlayerProfileCompressedArgs = {
  playerId: Scalars['String']['input'];
};


export type ApiQueryRyderCupTeamRankingsArgs = {
  eventQuery?: InputMaybe<ApiRyderCupRankingsQueryInput>;
  year?: InputMaybe<Scalars['Int']['input']>;
};


export type ApiQueryRyderCupTeamRankingsCompressedArgs = {
  eventQuery?: InputMaybe<ApiRyderCupRankingsQueryInput>;
  year?: InputMaybe<Scalars['Int']['input']>;
};


export type ApiQueryRyderCupTeamRankingsCompressedV2Args = {
  eventQuery?: InputMaybe<ApiRyderCupRankingsQueryInput>;
  year?: InputMaybe<Scalars['Int']['input']>;
};


export type ApiQueryRyderCupTeamRankingsV2Args = {
  eventQuery?: InputMaybe<ApiRyderCupRankingsQueryInput>;
  year?: InputMaybe<Scalars['Int']['input']>;
};


export type ApiQueryRyderCupTournamentArgs = {
  year: Scalars['Int']['input'];
};


export type ApiQueryRyderCupVideoByIdArgs = {
  brightcoveId: Scalars['ID']['input'];
};


export type ApiQueryScatterDataArgs = {
  course: Scalars['Int']['input'];
  hole: Scalars['Int']['input'];
  tournamentId: Scalars['String']['input'];
};


export type ApiQueryScatterDataCompressedArgs = {
  course: Scalars['Int']['input'];
  hole: Scalars['Int']['input'];
  tournamentId: Scalars['String']['input'];
};


export type ApiQueryScheduleArgs = {
  filter?: InputMaybe<ApiTournamentCategory>;
  tourCode: Scalars['String']['input'];
  year?: InputMaybe<Scalars['String']['input']>;
};


export type ApiQueryScheduleYearsArgs = {
  tourCode: ApiTourCode;
};


export type ApiQueryScorecardCompressedV3Args = {
  officialEventData?: InputMaybe<Scalars['Boolean']['input']>;
  playerId: Scalars['ID']['input'];
  tournamentId: Scalars['ID']['input'];
};


export type ApiQueryScorecardStatsArgs = {
  id: Scalars['ID']['input'];
  playerId: Scalars['ID']['input'];
};


export type ApiQueryScorecardStatsComparisonArgs = {
  category: ApiPlayerComparisonCategory;
  playerIds: ReadonlyArray<Scalars['String']['input']>;
  round?: InputMaybe<Scalars['Int']['input']>;
  tournamentId: Scalars['String']['input'];
};


export type ApiQueryScorecardStatsV3Args = {
  id: Scalars['ID']['input'];
  playerId: Scalars['ID']['input'];
};


export type ApiQueryScorecardStatsV3CompressedArgs = {
  id: Scalars['ID']['input'];
  playerId: Scalars['ID']['input'];
};


export type ApiQueryScorecardV2Args = {
  id: Scalars['ID']['input'];
  playerId: Scalars['ID']['input'];
};


export type ApiQueryScorecardV3Args = {
  officialEventData?: InputMaybe<Scalars['Boolean']['input']>;
  playerId: Scalars['ID']['input'];
  tournamentId: Scalars['ID']['input'];
};


export type ApiQuerySearchBarFeaturesArgs = {
  tourCode?: InputMaybe<ApiTourCode>;
};


export type ApiQuerySearchPlayersArgs = {
  lastName?: InputMaybe<Scalars['String']['input']>;
};


export type ApiQueryShotDetailsCompressedV3Args = {
  includeRadar?: InputMaybe<Scalars['Boolean']['input']>;
  playerId: Scalars['ID']['input'];
  round: Scalars['Int']['input'];
  tournamentId: Scalars['ID']['input'];
};


export type ApiQueryShotDetailsV3Args = {
  includeRadar?: InputMaybe<Scalars['Boolean']['input']>;
  playerId: Scalars['ID']['input'];
  round: Scalars['Int']['input'];
  tournamentId: Scalars['ID']['input'];
};


export type ApiQuerySignatureStandingsArgs = {
  tourCode: ApiTourCode;
};


export type ApiQuerySponsoredArticlesArgs = {
  sponsor: ApiArticleSponsor;
};


export type ApiQuerySponsoredArticlesV2Args = {
  sponsor: ApiArticleSponsor;
};


export type ApiQuerySponsorshipsArgs = {
  playerId: Scalars['ID']['input'];
};


export type ApiQueryStatDetailsArgs = {
  eventQuery?: InputMaybe<ApiStatDetailEventQuery>;
  statId: Scalars['String']['input'];
  tourCode: ApiTourCode;
  year?: InputMaybe<Scalars['Int']['input']>;
};


export type ApiQueryStatLeadersArgs = {
  category: ApiStatCategory;
  tourCode: ApiTourCode;
  year?: InputMaybe<Scalars['Int']['input']>;
};


export type ApiQueryStatOverviewArgs = {
  tourCode: ApiTourCode;
  year?: InputMaybe<Scalars['Int']['input']>;
};


export type ApiQueryStatsLeadersMobileArgs = {
  tourCode: ApiTourCode;
  year?: InputMaybe<Scalars['Int']['input']>;
};


export type ApiQueryTeamStrokePlayLeaderboardArgs = {
  id: Scalars['ID']['input'];
};


export type ApiQueryTeamStrokePlayLeaderboardCompressedArgs = {
  id: Scalars['ID']['input'];
};


export type ApiQueryTeamStrokePlayScorecardArgs = {
  roundNum: Scalars['Int']['input'];
  teamId: Scalars['ID']['input'];
  tournamentId: Scalars['ID']['input'];
};


export type ApiQueryTeamStrokePlayScorecardRoundsArgs = {
  teamId: Scalars['ID']['input'];
  tournamentId: Scalars['ID']['input'];
};


export type ApiQueryTeamStrokePlayTeeTimesArgs = {
  tournamentId: Scalars['ID']['input'];
};


export type ApiQueryTeamStrokePlayTeeTimesCompressedArgs = {
  tournamentId: Scalars['ID']['input'];
};


export type ApiQueryTeeTimesArgs = {
  id: Scalars['ID']['input'];
};


export type ApiQueryTeeTimesCompressedArgs = {
  id: Scalars['ID']['input'];
};


export type ApiQueryTeeTimesCompressedV2Args = {
  id: Scalars['ID']['input'];
};


export type ApiQueryTeeTimesV2Args = {
  id: Scalars['ID']['input'];
};


export type ApiQueryTglMatchArgs = {
  matchId: Scalars['ID']['input'];
};


export type ApiQueryTglMatchesArgs = {
  matchIds: ReadonlyArray<Scalars['ID']['input']>;
};


export type ApiQueryTglScheduleArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  year?: InputMaybe<Scalars['Int']['input']>;
};


export type ApiQueryTourCupArgs = {
  id: Scalars['ID']['input'];
  type?: InputMaybe<ApiTourCupType>;
};


export type ApiQueryTourCupCombinedArgs = {
  eventQuery?: InputMaybe<ApiStatDetailEventQuery>;
  id?: InputMaybe<Scalars['String']['input']>;
  tourCode: ApiTourCode;
  year?: InputMaybe<Scalars['Int']['input']>;
};


export type ApiQueryTourCupSplitArgs = {
  eventQuery?: InputMaybe<ApiStatDetailEventQuery>;
  id?: InputMaybe<Scalars['String']['input']>;
  tourCode: ApiTourCode;
  year?: InputMaybe<Scalars['Int']['input']>;
};


export type ApiQueryTourCupsArgs = {
  tour: ApiTourCode;
  year: Scalars['Int']['input'];
};


export type ApiQueryTourcastTableArgs = {
  tournamentId: Scalars['ID']['input'];
};


export type ApiQueryTourcastVideosArgs = {
  hole?: InputMaybe<Scalars['Int']['input']>;
  playerId: Scalars['ID']['input'];
  round: Scalars['Int']['input'];
  shot?: InputMaybe<Scalars['Int']['input']>;
  tournamentId: Scalars['ID']['input'];
};


export type ApiQueryTournamentGroupLocationsArgs = {
  round: Scalars['Int']['input'];
  tournamentId: Scalars['ID']['input'];
};


export type ApiQueryTournamentHistoryArgs = {
  tournamentId: Scalars['String']['input'];
};


export type ApiQueryTournamentOddsCompressedV2Args = {
  oddsFormat?: InputMaybe<ApiOddsFormat>;
  provider?: InputMaybe<ApiOddsProvider>;
  tournamentId: Scalars['ID']['input'];
};


export type ApiQueryTournamentOddsToWinArgs = {
  tournamentId: Scalars['ID']['input'];
};


export type ApiQueryTournamentOddsV2Args = {
  oddsFormat?: InputMaybe<ApiOddsFormat>;
  provider?: InputMaybe<ApiOddsProvider>;
  tournamentId: Scalars['ID']['input'];
};


export type ApiQueryTournamentOverviewArgs = {
  tournamentId: Scalars['ID']['input'];
};


export type ApiQueryTournamentPastResultsArgs = {
  id: Scalars['ID']['input'];
  year?: InputMaybe<Scalars['Int']['input']>;
};


export type ApiQueryTournamentRecapArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  tournamentId: Scalars['String']['input'];
};


export type ApiQueryTournamentsArgs = {
  ids?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
};


export type ApiQueryTspPlayoffShotDetailsArgs = {
  includeRadar?: InputMaybe<Scalars['Boolean']['input']>;
  tournamentId: Scalars['ID']['input'];
};


export type ApiQueryTspPlayoffShotDetailsCompressedArgs = {
  includeRadar?: InputMaybe<Scalars['Boolean']['input']>;
  tournamentId: Scalars['ID']['input'];
};


export type ApiQueryUniversityRankingsArgs = {
  tourCode?: InputMaybe<ApiTourCode>;
  week?: InputMaybe<Scalars['Int']['input']>;
  year?: InputMaybe<Scalars['Int']['input']>;
};


export type ApiQueryUniversityTotalPointsArgs = {
  season?: InputMaybe<Scalars['Int']['input']>;
  week?: InputMaybe<Scalars['Int']['input']>;
};


export type ApiQueryUpcomingNetworksArgs = {
  tourCode?: InputMaybe<ApiTourCode>;
  tournamentIds: ReadonlyArray<Scalars['ID']['input']>;
};


export type ApiQueryUpcomingScheduleArgs = {
  filter?: InputMaybe<ApiTournamentCategory>;
  tourCode: Scalars['String']['input'];
  year?: InputMaybe<Scalars['String']['input']>;
};


export type ApiQueryVideoByIdArgs = {
  brightcoveId: Scalars['ID']['input'];
  tourcast: Scalars['Boolean']['input'];
};


export type ApiQueryVideoFranchisesArgs = {
  tourCode?: InputMaybe<ApiTourCode>;
};


export type ApiQueryVideoHeroArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
  tourCode: ApiTourCode;
};


export type ApiQueryVideoLandingPageArgs = {
  tourCode: ApiTourCode;
};


export type ApiQueryVideoNavigationArgs = {
  tourCode: ApiTourCode;
};


export type ApiQueryVideoRecommendationsArgs = {
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


export type ApiQueryVideosArgs = {
  category?: InputMaybe<Scalars['String']['input']>;
  franchise?: InputMaybe<Scalars['String']['input']>;
  franchises?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  holeNumber?: InputMaybe<Scalars['String']['input']>;
  language?: InputMaybe<ApiVideoLanguage>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  playerId?: InputMaybe<Scalars['String']['input']>;
  playerIds?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  rating?: InputMaybe<Scalars['Int']['input']>;
  season?: InputMaybe<Scalars['String']['input']>;
  tour?: InputMaybe<Scalars['String']['input']>;
  tourCode?: InputMaybe<ApiTourCode>;
  tournamentId?: InputMaybe<Scalars['String']['input']>;
};


export type ApiQueryWeatherArgs = {
  tournamentId: Scalars['ID']['input'];
};


export type ApiQueryYourTourArgs = {
  tourCode: ApiTourCode;
};


export type ApiQueryYourTourNewsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  tourCode: ApiTourCode;
};

export type ApiRcContentTypeParent = {
  readonly __typename: 'RCContentTypeParent';
  readonly displayValue: Scalars['String']['output'];
  readonly queryValue: ApiRyderCupContentType;
};

export type ApiRcHomepageAssets = ApiNewsArticle | ApiRcPhotoGallery | ApiVideo;

export type ApiRcPhotoGallery = {
  readonly __typename: 'RCPhotoGallery';
  readonly authorReference?: Maybe<ApiNewsArticleAuthor>;
  readonly cta?: Maybe<ApiCallToAction>;
  readonly date?: Maybe<Scalars['AWSTimestamp']['output']>;
  readonly eventYears?: Maybe<ReadonlyArray<Scalars['String']['output']>>;
  readonly id: Scalars['String']['output'];
  readonly images?: Maybe<ReadonlyArray<ApiImage>>;
  readonly sectionTitle?: Maybe<Scalars['String']['output']>;
  readonly shareUrl?: Maybe<Scalars['String']['output']>;
  readonly sponsor?: Maybe<ApiNewsArticleSponsor>;
  readonly subhead?: Maybe<Scalars['String']['output']>;
  readonly tags?: Maybe<ReadonlyArray<Maybe<Scalars['String']['output']>>>;
  readonly team?: Maybe<ApiRyderCupTeamType>;
  readonly teaserImageOverride?: Maybe<Scalars['String']['output']>;
  readonly topics?: Maybe<ReadonlyArray<ApiContentTopics>>;
  readonly url?: Maybe<Scalars['String']['output']>;
};

/**
 *   type RCPlayerProfileContent {
 *      header: String!
 *      content: [NewsArticleNode]
 *  }
 */
export type ApiRcPlayerTournamentRecord = {
  readonly __typename: 'RCPlayerTournamentRecord';
  readonly fourBallPoints: Scalars['Int']['output'];
  readonly foursomesPoints: Scalars['Int']['output'];
  readonly matchesPlayed: Scalars['Int']['output'];
  readonly pointsEarned: Scalars['Int']['output'];
  readonly sectionTitle?: Maybe<Scalars['String']['output']>;
  readonly singlesPoints: Scalars['Int']['output'];
};

export type ApiRcTeamTypeParent = {
  readonly __typename: 'RCTeamTypeParent';
  readonly displayValue: Scalars['String']['output'];
  readonly queryValue: ApiRyderCupTeamType;
};

export type ApiRcVideoPage = {
  readonly __typename: 'RCVideoPage';
  readonly upNextVideos?: Maybe<ReadonlyArray<ApiVideo>>;
  readonly video?: Maybe<ApiVideo>;
};

export type ApiRsmEventWinner = {
  readonly __typename: 'RSMEventWinner';
  readonly birdies: Scalars['String']['output'];
  readonly country: Scalars['String']['output'];
  readonly countryFlag: Scalars['String']['output'];
  readonly firstName: Scalars['String']['output'];
  readonly lastName: Scalars['String']['output'];
  readonly playerId: Scalars['String']['output'];
  readonly tournamentId: Scalars['String']['output'];
  readonly tournamentName: Scalars['String']['output'];
};

export type ApiRsmHistoricalWinner = {
  readonly __typename: 'RSMHistoricalWinner';
  readonly displaySeason: Scalars['String']['output'];
  readonly winners: ReadonlyArray<ApiRsmEventWinner>;
  readonly year: Scalars['Int']['output'];
};

export type ApiRsmLeaderboard = {
  readonly __typename: 'RSMLeaderboard';
  readonly dateText?: Maybe<Scalars['String']['output']>;
  readonly isLive?: Maybe<Scalars['Boolean']['output']>;
  readonly livePlayers: ReadonlyArray<ApiRsmLeaderboardPlayer>;
  readonly players: ReadonlyArray<ApiRsmLeaderboardPlayer>;
  readonly round?: Maybe<Scalars['String']['output']>;
  readonly tournamentId: Scalars['ID']['output'];
  readonly tournamentName: Scalars['String']['output'];
};

export type ApiRsmLeaderboardPlayer = {
  readonly __typename: 'RSMLeaderboardPlayer';
  readonly countryFlag: Scalars['String']['output'];
  readonly countryName: Scalars['String']['output'];
  readonly eventRank?: Maybe<Scalars['Int']['output']>;
  readonly eventTotal: Scalars['String']['output'];
  readonly eventTotalSort: Scalars['Int']['output'];
  readonly firstName: Scalars['String']['output'];
  readonly lastName: Scalars['String']['output'];
  readonly playerId: Scalars['String']['output'];
  readonly projectedRank: Scalars['String']['output'];
  readonly projectedRankSort: Scalars['Int']['output'];
  readonly total: Scalars['String']['output'];
  readonly totalSort: Scalars['Int']['output'];
};

export type ApiRsmPlayer = {
  readonly __typename: 'RSMPlayer';
  readonly birdies: Scalars['String']['output'];
  readonly country: Scalars['String']['output'];
  readonly countryFlag: Scalars['String']['output'];
  readonly firstName: Scalars['String']['output'];
  readonly lastName: Scalars['String']['output'];
  readonly leading: Scalars['Boolean']['output'];
  readonly playerId: Scalars['String']['output'];
  readonly rank: Scalars['String']['output'];
};

export type ApiRsmStandings = {
  readonly __typename: 'RSMStandings';
  readonly currentLeaderboard: ReadonlyArray<ApiRsmPlayer>;
  readonly previousWinners: ReadonlyArray<ApiRsmHistoricalWinner>;
  readonly weeklyWinners: ReadonlyArray<ApiRsmEventWinner>;
};

export type ApiRyder_Cup_Ranking_Tooltip =
  | 'CAPTAIN_PICK'
  | 'OUTCOME_IQ'
  | 'QUALIFICATION_INFO'
  | 'QUALIFIED_LOGO';

export type ApiRadarBallTracjectory = {
  readonly __typename: 'RadarBallTracjectory';
  readonly kind: Scalars['String']['output'];
  readonly measuredTimeInterval: ReadonlyArray<Scalars['Float']['output']>;
  readonly spinRateFit: ReadonlyArray<Scalars['Float']['output']>;
  readonly timeInterval: ReadonlyArray<Scalars['Float']['output']>;
  readonly type?: Maybe<Scalars['String']['output']>;
  readonly validTimeInterval: ReadonlyArray<Scalars['Float']['output']>;
  readonly xFit: ReadonlyArray<Scalars['Float']['output']>;
  readonly yFit: ReadonlyArray<Scalars['Float']['output']>;
  readonly zFit: ReadonlyArray<Scalars['Float']['output']>;
};

export type ApiRadarData = {
  readonly __typename: 'RadarData';
  readonly actualFlightTime: Scalars['Int']['output'];
  readonly apexHeight: Scalars['Float']['output'];
  readonly apexRange: Scalars['Float']['output'];
  readonly apexSide: Scalars['Float']['output'];
  readonly ballImpactMeasured?: Maybe<Scalars['String']['output']>;
  readonly ballSpeed: Scalars['Float']['output'];
  readonly ballTrajectory: ReadonlyArray<ApiRadarBallTracjectory>;
  readonly clubSpeed: Scalars['Float']['output'];
  readonly horizontalLaunchAngle: Scalars['Float']['output'];
  readonly launchSpin: Scalars['Float']['output'];
  /** @deprecated use normalizedTrajectoryV2 */
  readonly normalizedTrajectory: ReadonlyArray<ApiRadarNormalizedTrajectory>;
  readonly normalizedTrajectoryV2: ReadonlyArray<ApiRadarNormalizedTrajectoryV2>;
  readonly smashFactor: Scalars['Float']['output'];
  readonly spinAxis: Scalars['Float']['output'];
  readonly verticalLaunchAngle: Scalars['Float']['output'];
};

export type ApiRadarNormalizedTrajectory = {
  readonly __typename: 'RadarNormalizedTrajectory';
  readonly carry?: Maybe<Scalars['Int']['output']>;
  readonly carrySide?: Maybe<Scalars['Int']['output']>;
  readonly curve?: Maybe<Scalars['Int']['output']>;
  readonly maxHeight?: Maybe<Scalars['Int']['output']>;
  readonly spinAxis?: Maybe<Scalars['Float']['output']>;
  readonly timeInterval?: Maybe<ReadonlyArray<Scalars['Float']['output']>>;
  readonly valid: Scalars['Boolean']['output'];
  readonly validTimeInterval?: Maybe<ReadonlyArray<Scalars['Float']['output']>>;
  readonly windVelocity?: Maybe<ReadonlyArray<Scalars['Float']['output']>>;
  readonly xFit?: Maybe<ReadonlyArray<Scalars['Float']['output']>>;
  readonly yFit?: Maybe<ReadonlyArray<Scalars['Float']['output']>>;
  readonly zFit?: Maybe<ReadonlyArray<Scalars['Float']['output']>>;
};

export type ApiRadarNormalizedTrajectoryV2 = {
  readonly __typename: 'RadarNormalizedTrajectoryV2';
  readonly carry?: Maybe<Scalars['Float']['output']>;
  readonly carrySide?: Maybe<Scalars['Float']['output']>;
  readonly curve?: Maybe<Scalars['Float']['output']>;
  readonly maxHeight?: Maybe<Scalars['Float']['output']>;
  readonly spinAxis?: Maybe<Scalars['Float']['output']>;
  readonly timeInterval?: Maybe<ReadonlyArray<Scalars['Float']['output']>>;
  readonly valid: Scalars['Boolean']['output'];
  readonly validTimeInterval?: Maybe<ReadonlyArray<Scalars['Float']['output']>>;
  readonly windVelocity?: Maybe<ReadonlyArray<Scalars['Float']['output']>>;
  readonly xFit?: Maybe<ReadonlyArray<Scalars['Float']['output']>>;
  readonly yFit?: Maybe<ReadonlyArray<Scalars['Float']['output']>>;
  readonly zFit?: Maybe<ReadonlyArray<Scalars['Float']['output']>>;
};

export type ApiRangeWeatherTemp = {
  readonly __typename: 'RangeWeatherTemp';
  readonly maxTempC: Scalars['String']['output'];
  readonly maxTempF: Scalars['String']['output'];
  readonly minTempC: Scalars['String']['output'];
  readonly minTempF: Scalars['String']['output'];
};

export type ApiRankingsPastWinner = {
  readonly __typename: 'RankingsPastWinner';
  readonly description: Scalars['String']['output'];
  readonly displayName: Scalars['String']['output'];
  /** @deprecated Use imageAsset */
  readonly image: Scalars['String']['output'];
  readonly imageAsset: ApiImageAsset;
  readonly playerId: Scalars['ID']['output'];
  readonly season: Scalars['String']['output'];
};

export type ApiRankingsTeams =
  | 'EUROPE'
  | 'USA';

export type ApiRcBroadcastPrograms = {
  readonly __typename: 'RcBroadcastPrograms';
  readonly broadcastDate: Scalars['String']['output'];
  readonly programs: ReadonlyArray<ApiRcProgram>;
};

export type ApiRcBroadcastType =
  | 'AUDIO'
  | 'VIDEO';

export type ApiRcProducts = {
  readonly __typename: 'RcProducts';
  readonly cta?: Maybe<ApiCallToAction>;
  readonly header?: Maybe<Scalars['String']['output']>;
  readonly imageGallery?: Maybe<ReadonlyArray<Scalars['String']['output']>>;
  readonly path: Scalars['String']['output'];
  readonly productDescription?: Maybe<ReadonlyArray<Maybe<ApiNewsArticleNode>>>;
};

export type ApiRcProgram = {
  readonly __typename: 'RcProgram';
  readonly androidLink?: Maybe<Scalars['String']['output']>;
  readonly appleAppStore?: Maybe<Scalars['String']['output']>;
  readonly brightcoveId?: Maybe<Scalars['String']['output']>;
  readonly broadcastType: ApiRcBroadcastType;
  readonly cta1?: Maybe<ApiCallToAction>;
  readonly cta2?: Maybe<ApiCallToAction>;
  readonly endTime?: Maybe<Scalars['String']['output']>;
  readonly endTimeUtc?: Maybe<Scalars['AWSTimestamp']['output']>;
  readonly featuredMatchPlayers?: Maybe<ReadonlyArray<Scalars['String']['output']>>;
  readonly googlePlayStore?: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['String']['output'];
  readonly iosLink?: Maybe<Scalars['String']['output']>;
  readonly isLive?: Maybe<Scalars['Boolean']['output']>;
  readonly matchId?: Maybe<Scalars['String']['output']>;
  readonly networkBackgroundColor?: Maybe<Scalars['String']['output']>;
  readonly networkFontColor?: Maybe<Scalars['String']['output']>;
  readonly networkLogo?: Maybe<Scalars['String']['output']>;
  readonly networkLogoAsset?: Maybe<ApiImageAsset>;
  readonly networkLogoDark?: Maybe<Scalars['String']['output']>;
  readonly networkLogoDarkAsset?: Maybe<ApiImageAsset>;
  readonly networkName?: Maybe<Scalars['String']['output']>;
  readonly posterImage?: Maybe<Scalars['String']['output']>;
  readonly posterImageAsset?: Maybe<ApiImageAsset>;
  readonly regions?: Maybe<ReadonlyArray<Maybe<Scalars['String']['output']>>>;
  readonly roundNum?: Maybe<Scalars['String']['output']>;
  readonly shortDescription?: Maybe<Scalars['String']['output']>;
  readonly startTime?: Maybe<Scalars['String']['output']>;
  readonly startTimeUtc?: Maybe<Scalars['AWSTimestamp']['output']>;
  readonly streamUrl?: Maybe<Scalars['String']['output']>;
  readonly thumbnailImage?: Maybe<Scalars['String']['output']>;
  readonly thumbnailImageAsset?: Maybe<ApiImageAsset>;
  readonly title: Scalars['String']['output'];
  readonly url: Scalars['String']['output'];
};

export type ApiRelatedFact = {
  readonly __typename: 'RelatedFact';
  readonly factText?: Maybe<ReadonlyArray<ApiTourSponsorDescription>>;
  readonly photo?: Maybe<Scalars['String']['output']>;
};

export type ApiRelatedFactsNode = {
  readonly __typename: 'RelatedFactsNode';
  readonly path: Scalars['String']['output'];
};

export type ApiResultsStandingsDetail = {
  readonly __typename: 'ResultsStandingsDetail';
  /** @deprecated Use cupLogoAsset */
  readonly cupLogo?: Maybe<Scalars['String']['output']>;
  readonly cupLogoAccessibilityText?: Maybe<Scalars['String']['output']>;
  readonly cupLogoAsset?: Maybe<ApiImageAsset>;
  /** @deprecated Use cupLogoDarkAsset */
  readonly cupLogoDark?: Maybe<Scalars['String']['output']>;
  readonly cupLogoDarkAsset?: Maybe<ApiImageAsset>;
  readonly cupName?: Maybe<Scalars['String']['output']>;
  readonly cupPoints?: Maybe<Scalars['String']['output']>;
  readonly cupRank?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use rankLogoAsset */
  readonly rankLogo?: Maybe<Scalars['String']['output']>;
  readonly rankLogoAccessibilityText?: Maybe<Scalars['String']['output']>;
  readonly rankLogoAsset?: Maybe<ApiImageAsset>;
  /** @deprecated Use rankLogoDarkAsset */
  readonly rankLogoDark?: Maybe<Scalars['String']['output']>;
  readonly rankLogoDarkAsset?: Maybe<ApiImageAsset>;
};

export type ApiResultsYears = {
  readonly __typename: 'ResultsYears';
  readonly tour: ApiTourCode;
  readonly years: ReadonlyArray<Scalars['String']['output']>;
};

export type ApiRolexClock = {
  readonly __typename: 'RolexClock';
  readonly height?: Maybe<Scalars['Float']['output']>;
  readonly width?: Maybe<Scalars['Float']['output']>;
};

export type ApiRoundFilter = {
  readonly __typename: 'RoundFilter';
  readonly displayText: Scalars['String']['output'];
  readonly roundNumbers: ReadonlyArray<Scalars['Int']['output']>;
};

export type ApiRoundFormat =
  | 'ALTERNATE_SHOT'
  | 'BEST_BALL';

export type ApiRoundScore = {
  readonly __typename: 'RoundScore';
  readonly complete: Scalars['Boolean']['output'];
  readonly courseAbbreviation?: Maybe<Scalars['String']['output']>;
  readonly courseId?: Maybe<Scalars['String']['output']>;
  readonly courseName: Scalars['String']['output'];
  readonly currentHole: Scalars['Int']['output'];
  readonly currentRound: Scalars['Boolean']['output'];
  readonly firstNine: ApiScorecardRow;
  readonly groupNumber: Scalars['Int']['output'];
  readonly parTotal: Scalars['Int']['output'];
  readonly roundNumber: Scalars['Int']['output'];
  readonly scoreToPar: Scalars['String']['output'];
  readonly secondNine: ApiScorecardRow;
  readonly total: Scalars['String']['output'];
  readonly tourcastURI?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastURL?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastURLWeb?: Maybe<Scalars['String']['output']>;
};

export type ApiRoundScoreItem = {
  readonly __typename: 'RoundScoreItem';
  readonly roundDisplay: Scalars['String']['output'];
  readonly roundNum: Scalars['Int']['output'];
  readonly roundScore: Scalars['String']['output'];
};

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

export type ApiRyderCupBio = {
  readonly __typename: 'RyderCupBio';
  readonly bio?: Maybe<ReadonlyArray<Maybe<ApiNewsArticleNode>>>;
};

export type ApiRyderCupBroadcastCoverage = {
  readonly __typename: 'RyderCupBroadcastCoverage';
  readonly broadcastPrograms: ReadonlyArray<ApiRcBroadcastPrograms>;
};

export type ApiRyderCupCaptain = {
  readonly __typename: 'RyderCupCaptain';
  readonly displayName: Scalars['String']['output'];
  readonly firstName: Scalars['String']['output'];
  readonly lastName: Scalars['String']['output'];
  readonly playerId: Scalars['String']['output'];
};

export type ApiRyderCupContent = ApiNewsArticle | ApiRcPhotoGallery | ApiVideo;

export type ApiRyderCupContentCategories = {
  readonly __typename: 'RyderCupContentCategories';
  readonly id: Scalars['Int']['output'];
  readonly name: Scalars['String']['output'];
};

export type ApiRyderCupContentCompressed = {
  readonly __typename: 'RyderCupContentCompressed';
  readonly input?: Maybe<ApiPaginationDetails>;
  readonly payload: Scalars['String']['output'];
};

export type ApiRyderCupContentFragment = {
  readonly __typename: 'RyderCupContentFragment';
  readonly fragments: ReadonlyArray<ApiRyderCupContentFragments>;
  readonly pageMetadata: ApiPageMetadata;
  readonly totalLength: Scalars['Int']['output'];
};

export type ApiRyderCupContentFragments = ApiBroadcastTableFragment | ApiContentFragmentTabs | ApiContentStory | ApiContentVideoCarousel | ApiCourseInfo | ApiDropdownFragment | ApiEventHub | ApiEventHubTable | ApiFutureVenuesFragment | ApiFutureVenuesTableFragment | ApiGenericContent | ApiHeroCarousel | ApiHistoryInfo | ApiHistoryScore | ApiHomepageLead | ApiHomepageNews | ApiHomepageProgramStanding | ApiHomepageScoring | ApiHospitalityCard | ApiImageBlock | ApiJumpToSection | ApiKopHeader | ApiKopSignUp | ApiKopStandingsList | ApiKopSubheader | ApiKopUpcomingTournament | ApiKopZigZag | ApiMatchCard | ApiMediaGallery | ApiMessageBanner | ApiOddsToWinTracker | ApiRcProducts | ApiRolexClock | ApiRyderCupCourseModel | ApiRyderCupLatestNewsSection | ApiRyderCupPlayerBios | ApiSecondaryHero | ApiTeamRankings | ApiThreeUpPhoto | ApiThreeUpStats | ApiTicketSectionContainer | ApiTwoColumn | ApiVideoHero;

export type ApiRyderCupContentPlayer = {
  readonly __typename: 'RyderCupContentPlayer';
  readonly displayName: Scalars['String']['output'];
  readonly id: Scalars['String']['output'];
  readonly name: Scalars['String']['output'];
};

export type ApiRyderCupContentTags = {
  readonly __typename: 'RyderCupContentTags';
  readonly id: Scalars['Int']['output'];
  readonly name: Scalars['String']['output'];
};

export type ApiRyderCupContentType =
  | 'ALL'
  | 'ARTICLES'
  | 'PHOTO_GALLERY'
  | 'VIDEOS'
  | 'VIDEO_ARTICLES';

export type ApiRyderCupCourse = {
  readonly __typename: 'RyderCupCourse';
  readonly countryCode?: Maybe<Scalars['String']['output']>;
  readonly courseCity?: Maybe<Scalars['String']['output']>;
  readonly courseCountry?: Maybe<Scalars['String']['output']>;
  readonly courseName?: Maybe<Scalars['String']['output']>;
  readonly courseState?: Maybe<Scalars['String']['output']>;
};

export type ApiRyderCupCourseModel = {
  readonly __typename: 'RyderCupCourseModel';
  readonly city?: Maybe<Scalars['String']['output']>;
  readonly country?: Maybe<Scalars['String']['output']>;
  readonly courseDescription?: Maybe<ReadonlyArray<Maybe<ApiNewsArticleNode>>>;
  readonly courseId?: Maybe<Scalars['String']['output']>;
  readonly courseName?: Maybe<Scalars['String']['output']>;
  readonly courseYardage?: Maybe<Scalars['String']['output']>;
  readonly holes?: Maybe<ReadonlyArray<ApiRyderCupCourseModelHole>>;
  readonly par?: Maybe<Scalars['Int']['output']>;
  readonly state?: Maybe<Scalars['String']['output']>;
};

export type ApiRyderCupCourseModelHole = {
  readonly __typename: 'RyderCupCourseModelHole';
  readonly holeBeautyImage?: Maybe<Scalars['String']['output']>;
  readonly holeDescription?: Maybe<ReadonlyArray<Maybe<ApiNewsArticleNode>>>;
  readonly holeFlyoverVideo?: Maybe<ApiVideo>;
  readonly holeNumber: Scalars['Int']['output'];
  readonly holePickleImage?: Maybe<Scalars['String']['output']>;
  readonly par: Scalars['Int']['output'];
  readonly yardage: Scalars['Int']['output'];
};

/**  ## Ryder Cup */
export type ApiRyderCupEventState =
  | 'LIVE_WEEK'
  | 'LIVE_WEEKEND'
  | 'OFF_SEASON'
  | 'POINTS_RACE'
  | 'POST_EVENT'
  | 'PRE_EVENT';

export type ApiRyderCupLatestNewsSection = {
  readonly __typename: 'RyderCupLatestNewsSection';
  readonly bottomCta?: Maybe<ApiCallToAction>;
  readonly content?: Maybe<ReadonlyArray<ApiRcHomepageAssets>>;
  readonly franchiseTags?: Maybe<ReadonlyArray<Scalars['String']['output']>>;
  readonly limit?: Maybe<Scalars['Int']['output']>;
  readonly sectionTitle?: Maybe<Scalars['String']['output']>;
  readonly topCta?: Maybe<ApiCallToAction>;
};

export type ApiRyderCupMatchOutcomeIq = {
  readonly __typename: 'RyderCupMatchOutcomeIQ';
  readonly euMatchWin: Scalars['Float']['output'];
  readonly holes: ReadonlyArray<ApiOutComeIqHole>;
  readonly id: Scalars['String']['output'];
  readonly logo?: Maybe<Scalars['String']['output']>;
  readonly matchDraw: Scalars['Float']['output'];
  readonly matchId: Scalars['Int']['output'];
  readonly roundNum: Scalars['Int']['output'];
  readonly toolTip?: Maybe<ApiToolTipComponent>;
  readonly usMatchWin: Scalars['Float']['output'];
};

export type ApiRyderCupMediaSearchOptions = {
  readonly __typename: 'RyderCupMediaSearchOptions';
  readonly contentTypes: ReadonlyArray<ApiRcContentTypeParent>;
  readonly playerOptions: ReadonlyArray<ApiRyderCupPlayerOption>;
  readonly teamOptions: ReadonlyArray<ApiRcTeamTypeParent>;
  readonly topicOptions: ReadonlyArray<ApiRyderCupTopicOption>;
  readonly yearOptions: ReadonlyArray<Scalars['String']['output']>;
};

export type ApiRyderCupPlayer = {
  readonly __typename: 'RyderCupPlayer';
  readonly countryCode?: Maybe<Scalars['String']['output']>;
  readonly countryName?: Maybe<Scalars['String']['output']>;
  readonly displayName: Scalars['String']['output'];
  readonly firstName: Scalars['String']['output'];
  readonly lastName: Scalars['String']['output'];
  readonly playerId: Scalars['String']['output'];
};

export type ApiRyderCupPlayerBios = {
  readonly __typename: 'RyderCupPlayerBios';
  readonly bios?: Maybe<ReadonlyArray<Maybe<ApiRyderCupBio>>>;
  readonly headshots?: Maybe<ReadonlyArray<Scalars['String']['output']>>;
};

export type ApiRyderCupPlayerOption = {
  readonly __typename: 'RyderCupPlayerOption';
  readonly displayName: Scalars['String']['output'];
  readonly id: Scalars['String']['output'];
  readonly name: Scalars['String']['output'];
};

export type ApiRyderCupPlayerProfile = {
  readonly __typename: 'RyderCupPlayerProfile';
  readonly playerId: Scalars['String']['output'];
  readonly playerProfileHeader: ApiRyderCupPlayerProfileHeader;
  readonly profileContentSections: ReadonlyArray<ApiRyderCupPlayerProfileSection>;
  readonly team: ApiRankingsTeams;
};

export type ApiRyderCupPlayerProfileCompressed = {
  readonly __typename: 'RyderCupPlayerProfileCompressed';
  readonly payload: Scalars['String']['output'];
  readonly playerId: Scalars['String']['output'];
};

export type ApiRyderCupPlayerProfileHeader = {
  readonly __typename: 'RyderCupPlayerProfileHeader';
  readonly age?: Maybe<Scalars['String']['output']>;
  readonly appearances?: Maybe<Scalars['Int']['output']>;
  readonly headshot: ApiProfileHeadshot;
  readonly wins?: Maybe<Scalars['Int']['output']>;
};

export type ApiRyderCupPlayerProfileSection = ApiGenericContent | ApiRcPlayerTournamentRecord | ApiRolexClock | ApiRyderCupLatestNewsSection | ApiThreeUpStats;

export type ApiRyderCupRankingsQueryInput = {
  readonly team: ApiRankingsTeams;
  readonly tournamentId: Scalars['String']['input'];
};

export type ApiRyderCupRankingsRow = ApiInformationRow | ApiStatDetailsPlayer;

export type ApiRyderCupRankingsTeam = {
  readonly __typename: 'RyderCupRankingsTeam';
  readonly banner?: Maybe<Scalars['String']['output']>;
  readonly captain?: Maybe<Scalars['String']['output']>;
  readonly captainLabel?: Maybe<Scalars['String']['output']>;
  readonly displaySeason?: Maybe<Scalars['String']['output']>;
  readonly europeCaptain?: Maybe<Scalars['String']['output']>;
  readonly europeInfoBlurb?: Maybe<Scalars['String']['output']>;
  readonly europeViceCaptain?: Maybe<Scalars['String']['output']>;
  readonly header?: Maybe<Scalars['String']['output']>;
  readonly lastUpdated?: Maybe<Scalars['String']['output']>;
  readonly qualifiedIndex?: Maybe<Scalars['Int']['output']>;
  readonly rankings: ReadonlyArray<ApiRyderCupRankingsRow>;
  readonly teamName: Scalars['String']['output'];
  readonly toolTips: ReadonlyArray<ApiToolTipComponent>;
  readonly tournamentPills: ReadonlyArray<ApiStatTournamentPill>;
  readonly usInfoBlurb?: Maybe<Scalars['String']['output']>;
  readonly viceCaptain?: Maybe<Scalars['String']['output']>;
  readonly viceCaptainLabel?: Maybe<Scalars['String']['output']>;
  readonly year?: Maybe<Scalars['Int']['output']>;
  readonly years: ReadonlyArray<ApiStatYearPills>;
};

export type ApiRyderCupRankingsV2 = {
  readonly __typename: 'RyderCupRankingsV2';
  readonly defaultUS: Scalars['Boolean']['output'];
  readonly teams: ReadonlyArray<ApiRyderCupRankingsTeam>;
};

export type ApiRyderCupTeam = {
  readonly __typename: 'RyderCupTeam';
  readonly captain: ApiRyderCupCaptain;
  readonly players: ReadonlyArray<ApiRyderCupPlayer>;
  readonly teamLogo: Scalars['String']['output'];
  readonly teamName: Scalars['String']['output'];
};

export type ApiRyderCupTeamRankings = {
  readonly __typename: 'RyderCupTeamRankings';
  readonly defaultUS: Scalars['Boolean']['output'];
  readonly euroBanner: Scalars['String']['output'];
  readonly euroCaptainLabel?: Maybe<Scalars['String']['output']>;
  readonly euroDisplaySeason?: Maybe<Scalars['String']['output']>;
  readonly euroHeader: Scalars['String']['output'];
  readonly euroLastUpdated: Scalars['String']['output'];
  readonly euroRankings: ReadonlyArray<ApiRyderCupRankingsRow>;
  readonly euroToolTips?: Maybe<ReadonlyArray<ApiToolTipComponent>>;
  readonly euroTournamentPills?: Maybe<ReadonlyArray<ApiStatTournamentPill>>;
  readonly euroViceCaptainLabel?: Maybe<Scalars['String']['output']>;
  readonly euroYear?: Maybe<Scalars['Int']['output']>;
  readonly euroYears?: Maybe<ReadonlyArray<ApiStatYearPills>>;
  readonly europeCaptain?: Maybe<Scalars['String']['output']>;
  readonly europeInfoBlurb?: Maybe<Scalars['String']['output']>;
  readonly europeQualifiedIndex?: Maybe<Scalars['Int']['output']>;
  readonly europeViceCaptain?: Maybe<Scalars['String']['output']>;
  readonly usBanner: Scalars['String']['output'];
  readonly usCaptain?: Maybe<Scalars['String']['output']>;
  readonly usCaptainLabel?: Maybe<Scalars['String']['output']>;
  readonly usDisplaySeason?: Maybe<Scalars['String']['output']>;
  readonly usHeader: Scalars['String']['output'];
  readonly usInfoBlurb?: Maybe<Scalars['String']['output']>;
  readonly usLastUpdated: Scalars['String']['output'];
  readonly usQualifiedIndex?: Maybe<Scalars['Int']['output']>;
  readonly usRankings: ReadonlyArray<ApiRyderCupRankingsRow>;
  readonly usToolTips?: Maybe<ReadonlyArray<ApiToolTipComponent>>;
  readonly usTournamentPills?: Maybe<ReadonlyArray<ApiStatTournamentPill>>;
  readonly usViceCaptain?: Maybe<Scalars['String']['output']>;
  readonly usViceCaptainLabel?: Maybe<Scalars['String']['output']>;
  readonly usYear?: Maybe<Scalars['Int']['output']>;
  readonly usYears?: Maybe<ReadonlyArray<ApiStatYearPills>>;
};

export type ApiRyderCupTeamRankingsCompressed = {
  readonly __typename: 'RyderCupTeamRankingsCompressed';
  readonly payload: Scalars['String']['output'];
};

export type ApiRyderCupTeamType =
  | 'BOTH'
  | 'EUROPE'
  | 'USA';

export type ApiRyderCupTopicOption = {
  readonly __typename: 'RyderCupTopicOption';
  readonly displayValue: Scalars['String']['output'];
  readonly value: Scalars['String']['output'];
};

export type ApiRyderCupTournament = {
  readonly __typename: 'RyderCupTournament';
  readonly course?: Maybe<ApiRyderCupCourse>;
  readonly euroScore: Scalars['String']['output'];
  readonly euroTeam: ApiRyderCupTeam;
  readonly historyInfo?: Maybe<ApiHistoryInfo>;
  readonly usScore: Scalars['String']['output'];
  readonly usTeam: ApiRyderCupTeam;
  readonly winner: Scalars['String']['output'];
  readonly year: Scalars['Int']['output'];
};

export type ApiRyderCupTournamentOverview = {
  readonly __typename: 'RyderCupTournamentOverview';
  readonly course?: Maybe<ApiRyderCupCourse>;
  readonly endDate?: Maybe<Scalars['String']['output']>;
  readonly euroScore: Scalars['String']['output'];
  readonly euroTeamLogo: Scalars['String']['output'];
  /** @deprecated logoAsset */
  readonly logo?: Maybe<Scalars['String']['output']>;
  readonly logoAsset: ApiImageAsset;
  readonly startDate?: Maybe<Scalars['String']['output']>;
  readonly tournamentName: Scalars['String']['output'];
  readonly usScore: Scalars['String']['output'];
  readonly usTeamLogo: Scalars['String']['output'];
  readonly winner?: Maybe<Scalars['String']['output']>;
  readonly year: Scalars['Int']['output'];
};

export type ApiStory_Type =
  | 'MOMENTS'
  | 'PLAYER_STORIES'
  | 'TOPIC_STORIES';

export type ApiScatterCoord = {
  readonly __typename: 'ScatterCoord';
  readonly player: ApiScatterPlayer;
  readonly result: ApiHoleScoreStatus;
  readonly shotCoords: ApiScatterShotData;
};

export type ApiScatterData = {
  readonly __typename: 'ScatterData';
  readonly courseId: Scalars['Int']['output'];
  readonly hole: Scalars['Int']['output'];
  readonly holePickle?: Maybe<ApiHolePickle>;
  readonly id: Scalars['ID']['output'];
  readonly rounds: ReadonlyArray<ApiScatterRound>;
  /**   Recommend combo of tournamentID, course and hole */
  readonly tournamentId: Scalars['String']['output'];
};

export type ApiScatterDataCompressed = {
  readonly __typename: 'ScatterDataCompressed';
  readonly courseId: Scalars['Int']['output'];
  readonly hole: Scalars['Int']['output'];
  readonly payload: Scalars['String']['output'];
  readonly tournamentId: Scalars['String']['output'];
};

export type ApiScatterPlayer = {
  readonly __typename: 'ScatterPlayer';
  readonly id: Scalars['String']['output'];
  readonly name: Scalars['String']['output'];
};

export type ApiScatterRound = {
  readonly __typename: 'ScatterRound';
  readonly display?: Maybe<Scalars['String']['output']>;
  readonly num: Scalars['Int']['output'];
  readonly pinCoords: ApiScatterShotData;
  readonly strokes: ReadonlyArray<ApiScatterStroke>;
};

export type ApiScatterShotCoordData = {
  readonly __typename: 'ScatterShotCoordData';
  readonly landscapeCoords?: Maybe<ApiScattterXyData>;
  readonly portraitCoords?: Maybe<ApiScattterXyData>;
};

export type ApiScatterShotData = {
  readonly __typename: 'ScatterShotData';
  readonly green: ApiScatterShotCoordData;
  readonly overview: ApiScatterShotCoordData;
};

export type ApiScatterStroke = {
  readonly __typename: 'ScatterStroke';
  readonly playerShots: ReadonlyArray<ApiScatterCoord>;
  readonly strokeNumber: Scalars['Int']['output'];
};

export type ApiScattterXyData = {
  readonly __typename: 'ScattterXYData';
  readonly enhancedX: Scalars['Float']['output'];
  /**   New field, -1 if no data */
  readonly enhancedY: Scalars['Float']['output'];
  readonly tourcastX: Scalars['Float']['output'];
  readonly tourcastY: Scalars['Float']['output'];
  readonly tourcastZ: Scalars['Float']['output'];
  readonly x: Scalars['Float']['output'];
  readonly y: Scalars['Float']['output'];
};

export type ApiSchedule = {
  readonly __typename: 'Schedule';
  readonly completed: ReadonlyArray<ApiScheduleMonth>;
  readonly filters?: Maybe<ReadonlyArray<ApiScheduleTournamentFilter>>;
  readonly seasonYear: Scalars['String']['output'];
  readonly tour: Scalars['String']['output'];
  readonly upcoming: ReadonlyArray<ApiScheduleMonth>;
};

export type ApiScheduleChampion = {
  readonly __typename: 'ScheduleChampion';
  readonly displayName: Scalars['String']['output'];
  readonly playerId: Scalars['String']['output'];
};

export type ApiScheduleDisplay =
  | 'SHOW'
  | 'SHOW_NO_LINK';

export type ApiScheduleMonth = {
  readonly __typename: 'ScheduleMonth';
  readonly month: Scalars['String']['output'];
  readonly monthSort?: Maybe<Scalars['Int']['output']>;
  readonly tournaments: ReadonlyArray<ApiScheduleTournament>;
  readonly year: Scalars['String']['output'];
};

export type ApiScheduleTournament = {
  readonly __typename: 'ScheduleTournament';
  readonly androidTicketmasterApiKey?: Maybe<Scalars['String']['output']>;
  readonly androidTicketmasterScheme?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use beautyImageAsset */
  readonly beautyImage?: Maybe<Scalars['String']['output']>;
  readonly beautyImageAsset?: Maybe<ApiImageAsset>;
  readonly champion: Scalars['String']['output'];
  readonly championEarnings?: Maybe<Scalars['String']['output']>;
  readonly championId: Scalars['String']['output'];
  readonly champions: ReadonlyArray<ApiScheduleChampion>;
  readonly city: Scalars['String']['output'];
  readonly country: Scalars['String']['output'];
  readonly countryCode: Scalars['String']['output'];
  readonly courseName: Scalars['String']['output'];
  readonly date: Scalars['String']['output'];
  readonly dateAccessibilityText: Scalars['String']['output'];
  readonly display: ApiScheduleDisplay;
  readonly id: Scalars['ID']['output'];
  readonly iosTicketmasterApiKey?: Maybe<Scalars['String']['output']>;
  readonly purse?: Maybe<Scalars['String']['output']>;
  readonly sequenceNumber: Scalars['Int']['output'];
  readonly sortDate?: Maybe<Scalars['String']['output']>;
  readonly startDate: Scalars['AWSTimestamp']['output'];
  readonly state: Scalars['String']['output'];
  readonly stateCode: Scalars['String']['output'];
  readonly status?: Maybe<ApiScheduleTournamentStatus>;
  /** @deprecated Name does not reflect intent, use ticketmasterAttractionId */
  readonly ticketmasterApiKey?: Maybe<Scalars['String']['output']>;
  readonly ticketmasterAttractionId?: Maybe<Scalars['String']['output']>;
  readonly ticketsEnabled: Scalars['Boolean']['output'];
  readonly ticketsURL?: Maybe<Scalars['String']['output']>;
  readonly tourStandingHeading?: Maybe<Scalars['String']['output']>;
  readonly tourStandingValue?: Maybe<Scalars['String']['output']>;
  readonly tournamentCategoryInfo?: Maybe<ApiTournamentCategoryInfo>;
  /** @deprecated use tournamentLogoAsset */
  readonly tournamentLogo: Scalars['String']['output'];
  readonly tournamentLogoAsset: ApiImageAsset;
  readonly tournamentName: Scalars['String']['output'];
  readonly tournamentSiteURL?: Maybe<Scalars['String']['output']>;
  readonly tournamentStatus: ApiTournamentStatus;
  readonly useTournamentSiteURL: Scalars['Boolean']['output'];
};

export type ApiScheduleTournamentFilter = {
  readonly __typename: 'ScheduleTournamentFilter';
  readonly name: Scalars['String']['output'];
  readonly type: ApiTournamentCategory;
};

export type ApiScheduleTournamentStatus = {
  readonly __typename: 'ScheduleTournamentStatus';
  readonly leaderboardTakeover: Scalars['Boolean']['output'];
  readonly roundDisplay: Scalars['String']['output'];
  readonly roundStatus: ApiRoundStatus;
  readonly roundStatusColor: ApiRoundStatusColor;
  readonly roundStatusDisplay: Scalars['String']['output'];
};

export type ApiScheduleUpcoming = {
  readonly __typename: 'ScheduleUpcoming';
  readonly filters?: Maybe<ReadonlyArray<ApiScheduleTournamentFilter>>;
  readonly id: Scalars['ID']['output'];
  readonly tournaments: ReadonlyArray<ApiScheduleTournament>;
};

export type ApiScheduleYear = {
  readonly __typename: 'ScheduleYear';
  readonly default: Scalars['Boolean']['output'];
  readonly displayValue: Scalars['String']['output'];
  readonly queryValue: Scalars['String']['output'];
};

export type ApiScheduleYears = {
  readonly __typename: 'ScheduleYears';
  readonly years: ReadonlyArray<ApiScheduleYear>;
};

export type ApiScorecardCompressedV3 = {
  readonly __typename: 'ScorecardCompressedV3';
  readonly id: Scalars['ID']['output'];
  readonly payload: Scalars['String']['output'];
};

export type ApiScorecardHeaderPlayer = {
  readonly __typename: 'ScorecardHeaderPlayer';
  readonly active: Scalars['Boolean']['output'];
  readonly finalRoundTotal: Scalars['String']['output'];
  readonly player: ApiPlayer;
  readonly position: Scalars['String']['output'];
  readonly roundDisplay: Scalars['String']['output'];
  readonly total: Scalars['String']['output'];
};

export type ApiScorecardRow = {
  readonly __typename: 'ScorecardRow';
  readonly holes: ReadonlyArray<ApiHoleScore>;
  readonly parTotal: Scalars['Int']['output'];
  readonly total: Scalars['String']['output'];
  readonly totalLabel: Scalars['String']['output'];
};

export type ApiScorecardStandings = {
  readonly __typename: 'ScorecardStandings';
  readonly logo?: Maybe<ApiImageAsset>;
  readonly logoDark?: Maybe<ApiImageAsset>;
  readonly points: Scalars['String']['output'];
};

export type ApiScorecardStatsComparison = {
  readonly __typename: 'ScorecardStatsComparison';
  readonly category: ApiPlayerComparisonCategory;
  readonly categoryPills: ReadonlyArray<ApiPlayerComparisonCategoryPill>;
  readonly disabled?: Maybe<Scalars['Boolean']['output']>;
  readonly noDataMessage: Scalars['String']['output'];
  readonly roundDisplay?: Maybe<Scalars['String']['output']>;
  readonly roundNum?: Maybe<Scalars['Int']['output']>;
  readonly table: ApiPlayerComparisonTable;
  readonly tournamentId: Scalars['ID']['output'];
};

export type ApiScorecardStatsItem = {
  readonly __typename: 'ScorecardStatsItem';
  readonly label: Scalars['String']['output'];
  readonly rank: Scalars['String']['output'];
  readonly statId: Scalars['String']['output'];
  readonly total: Scalars['String']['output'];
  readonly yearToDate: Scalars['String']['output'];
};

export type ApiScorecardTabFeature =
  | 'EQUIPMENT'
  | 'HIGHLIGHTS'
  | 'ODDS'
  | 'SCORECARD'
  | 'STATS';

export type ApiScorecardUpdateCompressedV3 = {
  readonly __typename: 'ScorecardUpdateCompressedV3';
  readonly id: Scalars['ID']['output'];
  readonly payload: Scalars['String']['output'];
};

export type ApiScorecardUpdateV3 = {
  readonly __typename: 'ScorecardUpdateV3';
  readonly backNine: Scalars['Boolean']['output'];
  readonly currentHole?: Maybe<Scalars['Int']['output']>;
  readonly currentHoleDisplay: Scalars['String']['output'];
  readonly currentRound: Scalars['Int']['output'];
  readonly currentShotDisplay?: Maybe<Scalars['String']['output']>;
  readonly drawerDisplayState: ApiDrawerDisplayState;
  readonly groupNumber: Scalars['Int']['output'];
  readonly hideSov: Scalars['Boolean']['output'];
  readonly id: Scalars['ID']['output'];
  readonly playByPlay?: Maybe<Scalars['String']['output']>;
  readonly playerId: Scalars['String']['output'];
  readonly playerState?: Maybe<ApiPlayerState>;
  readonly profileEnabled: Scalars['Boolean']['output'];
  readonly roundScores: ReadonlyArray<ApiRoundScore>;
  readonly teeTime?: Maybe<Scalars['AWSTimestamp']['output']>;
  readonly tournamentName: Scalars['String']['output'];
};

export type ApiScorecardV3 = {
  readonly __typename: 'ScorecardV3';
  readonly backNine: Scalars['Boolean']['output'];
  readonly currentHole?: Maybe<Scalars['Int']['output']>;
  readonly currentHoleDisplay: Scalars['String']['output'];
  readonly currentRound: Scalars['Int']['output'];
  readonly currentShotDisplay?: Maybe<Scalars['String']['output']>;
  readonly drawerDisplayState: ApiDrawerDisplayState;
  readonly groupNumber: Scalars['Int']['output'];
  readonly hideSov: Scalars['Boolean']['output'];
  readonly id: Scalars['ID']['output'];
  readonly playByPlay?: Maybe<Scalars['String']['output']>;
  readonly player: ApiPlayer;
  readonly playerState?: Maybe<ApiPlayerState>;
  readonly profileEnabled: Scalars['Boolean']['output'];
  readonly roundScores: ReadonlyArray<ApiRoundScore>;
  readonly standings?: Maybe<ApiScorecardStandings>;
  readonly teeTime?: Maybe<Scalars['AWSTimestamp']['output']>;
  readonly totalStrokes?: Maybe<Scalars['String']['output']>;
  readonly tournamentName: Scalars['String']['output'];
};

export type ApiScoringLevel =
  | 'BASIC'
  | 'STATS'
  | 'TOURCAST';

export type ApiScoringTendency =
  | 'ABOVE'
  | 'BELOW'
  | 'EVEN';

export type ApiSearchBarFeatures = {
  readonly __typename: 'SearchBarFeatures';
  readonly playerFeatures: ApiSearchBarPlayerFeatures;
};

export type ApiSearchBarPlayer = {
  readonly __typename: 'SearchBarPlayer';
  readonly displayName: Scalars['String']['output'];
  readonly playerId: Scalars['ID']['output'];
};

export type ApiSearchBarPlayerFeatures = {
  readonly __typename: 'SearchBarPlayerFeatures';
  readonly playerHeader: Scalars['String']['output'];
  readonly players: ReadonlyArray<ApiSearchBarPlayer>;
};

export type ApiSeasonDisplayHeader = {
  readonly __typename: 'SeasonDisplayHeader';
  readonly endYear?: Maybe<Scalars['Int']['output']>;
  readonly startYear: Scalars['Int']['output'];
};

export type ApiSeasonRecap = {
  readonly __typename: 'SeasonRecap';
  readonly displayMostRecentSeason?: Maybe<Scalars['String']['output']>;
  readonly items?: Maybe<ReadonlyArray<ApiSeasonRecapSeason>>;
  readonly mostRecentRecapYear?: Maybe<Scalars['Int']['output']>;
  readonly tourCode: ApiTourCode;
};

export type ApiSeasonRecapItems = {
  readonly __typename: 'SeasonRecapItems';
  readonly body: Scalars['String']['output'];
  readonly title: Scalars['String']['output'];
  readonly tournamentId: Scalars['String']['output'];
  readonly year: Scalars['Int']['output'];
};

export type ApiSeasonRecapSeason = {
  readonly __typename: 'SeasonRecapSeason';
  readonly displaySeason: Scalars['String']['output'];
  readonly items: ReadonlyArray<ApiSeasonRecapItems>;
  readonly year: Scalars['Int']['output'];
};

export type ApiSecondaryCupDetails = {
  readonly __typename: 'SecondaryCupDetails';
  readonly cupLogo?: Maybe<Scalars['String']['output']>;
  readonly cupLogoAccessibilityText?: Maybe<Scalars['String']['output']>;
  readonly cupLogoDark?: Maybe<Scalars['String']['output']>;
  readonly cupName?: Maybe<Scalars['String']['output']>;
  readonly cupPoints?: Maybe<Scalars['String']['output']>;
  readonly cupRank?: Maybe<Scalars['String']['output']>;
  readonly rankLogo?: Maybe<Scalars['String']['output']>;
  readonly rankLogoAccessibilityText?: Maybe<Scalars['String']['output']>;
  readonly rankLogoDark?: Maybe<Scalars['String']['output']>;
};

export type ApiSecondaryHero = {
  readonly __typename: 'SecondaryHero';
  readonly backgroundPhoto?: Maybe<Scalars['String']['output']>;
  readonly photoPosition?: Maybe<Scalars['String']['output']>;
  /** @deprecated use sponsorLogoAsset */
  readonly sponsorLogo?: Maybe<Scalars['String']['output']>;
  readonly sponsorLogoAsset: ApiImageAsset;
  readonly subheader?: Maybe<Scalars['String']['output']>;
  readonly title: Scalars['String']['output'];
};

export type ApiSegmentedCupRanking = {
  readonly __typename: 'SegmentedCupRanking';
  readonly defaultSelection: Scalars['Boolean']['output'];
  readonly rankings: ReadonlyArray<ApiCupRankingPlayer>;
  readonly title: Scalars['String']['output'];
};

export type ApiSegmentedCupRankingWrapper = {
  readonly __typename: 'SegmentedCupRankingWrapper';
  readonly segments?: Maybe<ReadonlyArray<Maybe<ApiSegmentedCupRanking>>>;
};

export type ApiShotCommentary = {
  readonly __typename: 'ShotCommentary';
  readonly commentary: ReadonlyArray<ApiShotCommentaryItem>;
  readonly playerId: Scalars['String']['output'];
  readonly round: Scalars['Int']['output'];
  readonly tournamentId: Scalars['String']['output'];
};

export type ApiShotCommentaryItem = {
  readonly __typename: 'ShotCommentaryItem';
  readonly active: Scalars['Boolean']['output'];
  readonly commentary: Scalars['String']['output'];
  readonly hole: Scalars['Int']['output'];
  readonly shot: Scalars['Int']['output'];
  readonly strokeId: Scalars['Int']['output'];
};

export type ApiShotCommentaryItemInput = {
  readonly active: Scalars['Boolean']['input'];
  readonly commentary: Scalars['String']['input'];
  readonly hole: Scalars['Int']['input'];
  readonly shot: Scalars['Int']['input'];
  readonly strokeId: Scalars['Int']['input'];
};

export type ApiShotDetailHole = {
  readonly __typename: 'ShotDetailHole';
  readonly displayHoleNumber: Scalars['String']['output'];
  readonly enhancedPickle?: Maybe<ApiHolePickle>;
  readonly fairwayCenter: ApiStrokeCoordinates;
  readonly green: Scalars['Boolean']['output'];
  readonly holeNumber: Scalars['Int']['output'];
  /** @deprecated Use holePickleBottomToTopAsset */
  readonly holePickleBottomToTop: Scalars['String']['output'];
  readonly holePickleBottomToTopAsset: ApiImageAsset;
  /** @deprecated Use holePickleGreenBottomToTopAsset */
  readonly holePickleGreenBottomToTop: Scalars['String']['output'];
  readonly holePickleGreenBottomToTopAsset: ApiImageAsset;
  /** @deprecated Use holePickleGreenLeftToRightAsset */
  readonly holePickleGreenLeftToRight: Scalars['String']['output'];
  readonly holePickleGreenLeftToRightAsset: ApiImageAsset;
  /** @deprecated Use holePickleLeftToRightAsset */
  readonly holePickleLeftToRight: Scalars['String']['output'];
  readonly holePickleLeftToRightAsset: ApiImageAsset;
  readonly par: Scalars['Int']['output'];
  readonly pinGreen: ApiPointOfInterestCoords;
  readonly pinOverview: ApiPointOfInterestCoords;
  readonly rank?: Maybe<Scalars['String']['output']>;
  readonly score: Scalars['String']['output'];
  readonly status: ApiHoleScoreStatus;
  readonly strokes: ReadonlyArray<ApiHoleStroke>;
  readonly teeGreen: ApiPointOfInterestCoords;
  readonly teeOverview: ApiPointOfInterestCoords;
  readonly yardage: Scalars['Int']['output'];
};

export type ApiShotDetailVideo = {
  readonly __typename: 'ShotDetailVideo';
  readonly duration: Scalars['Int']['output'];
  readonly holeNumber: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
  readonly pubDate: Scalars['AWSTimestamp']['output'];
  readonly shotNumber: Scalars['String']['output'];
  /** @deprecated Use thumbnailAsset */
  readonly thumbnail: Scalars['String']['output'];
  readonly thumbnailAsset: ApiImageAsset;
  readonly title: Scalars['String']['output'];
};

export type ApiShotDetails = {
  readonly __typename: 'ShotDetails';
  readonly defaultHolePickle: ApiHolePickleType;
  readonly displayType: ApiShotDetailsDisplayType;
  readonly groupPlayers: ReadonlyArray<Scalars['String']['output']>;
  readonly holes: ReadonlyArray<ApiShotDetailHole>;
  readonly id: Scalars['ID']['output'];
  readonly lineColor: Scalars['String']['output'];
  readonly message: Scalars['String']['output'];
  readonly playerId: Scalars['ID']['output'];
  readonly round: Scalars['Int']['output'];
  /** @deprecated Use tourcastVideos */
  readonly shotVideo?: Maybe<ApiVideo>;
  /** @deprecated Use tourcastVideos */
  readonly shotVideos?: Maybe<ReadonlyArray<ApiVideo>>;
  readonly textColor?: Maybe<Scalars['String']['output']>;
  readonly tournamentId: Scalars['ID']['output'];
};

export type ApiShotDetailsCompressed = {
  readonly __typename: 'ShotDetailsCompressed';
  readonly id: Scalars['ID']['output'];
  readonly payload: Scalars['String']['output'];
};

export type ApiShotDetailsCompressedV3 = {
  readonly __typename: 'ShotDetailsCompressedV3';
  readonly id: Scalars['ID']['output'];
  readonly payload: Scalars['String']['output'];
};

export type ApiShotDetailsDisplayType =
  | 'ALL'
  | 'NONE'
  | 'PLAY_BY_PLAY';

export type ApiShotLinkCoordWrapper = {
  readonly __typename: 'ShotLinkCoordWrapper';
  readonly bottomToTopCoords: ApiShotLinkCoordinates;
  readonly leftToRightCoords: ApiShotLinkCoordinates;
};

export type ApiShotLinkCoordinates = {
  readonly __typename: 'ShotLinkCoordinates';
  readonly fromCoords: ApiStrokeCoordinates;
  readonly toCoords: ApiStrokeCoordinates;
};

export type ApiSignatureEventsRankLogos = {
  readonly __typename: 'SignatureEventsRankLogos';
  readonly dark: Scalars['String']['output'];
  readonly darkAsset: ApiImageAsset;
  readonly light: Scalars['String']['output'];
  readonly lightAsset: ApiImageAsset;
  readonly tooltipText: Scalars['String']['output'];
  readonly tooltipTitle: Scalars['String']['output'];
};

export type ApiSignatureInfoLine = {
  readonly __typename: 'SignatureInfoLine';
  readonly text: Scalars['String']['output'];
};

export type ApiSignaturePlayer = {
  readonly __typename: 'SignaturePlayer';
  readonly countryFlag: Scalars['String']['output'];
  readonly countryName: Scalars['String']['output'];
  readonly displayName: Scalars['String']['output'];
  readonly movementAmount: Scalars['String']['output'];
  readonly movementDirection: ApiLeaderboardMovement;
  readonly playerId: Scalars['ID']['output'];
  readonly projected: Scalars['String']['output'];
  readonly projectedPoints: Scalars['String']['output'];
  readonly shortName: Scalars['String']['output'];
  readonly started: Scalars['String']['output'];
};

export type ApiSignaturePlayerRow = ApiSignatureInfoLine | ApiSignaturePlayer;

export type ApiSignatureStandings = {
  readonly __typename: 'SignatureStandings';
  readonly infoDescription: Scalars['String']['output'];
  readonly infoTitle: Scalars['String']['output'];
  readonly interim: ApiSignatureStandingsData;
  readonly linktoField: Scalars['Boolean']['output'];
  /** @deprecated Use mobileLogoAsset */
  readonly mobileLogo: Scalars['String']['output'];
  readonly mobileLogoAsset: ApiImageAsset;
  readonly noFieldText?: Maybe<Scalars['String']['output']>;
  readonly noFieldToolTipText?: Maybe<Scalars['String']['output']>;
  readonly noFieldToolTipTitle?: Maybe<Scalars['String']['output']>;
  readonly official: ApiSignatureStandingsData;
  readonly tournamentID: Scalars['ID']['output'];
  readonly tournamentInfo: ApiSignatureStandingsTournamentInfo;
};

export type ApiSignatureStandingsData = {
  readonly __typename: 'SignatureStandingsData';
  readonly description?: Maybe<Scalars['String']['output']>;
  readonly emptyTableDescription?: Maybe<Scalars['String']['output']>;
  readonly emptyTableTitle?: Maybe<Scalars['String']['output']>;
  readonly eyebrowText?: Maybe<Scalars['String']['output']>;
  readonly players: ReadonlyArray<ApiSignaturePlayerRow>;
  /** @deprecated use sponsorLogoAsset */
  readonly sponsorLogo?: Maybe<Scalars['String']['output']>;
  readonly sponsorLogoAsset: ApiImageAsset;
  readonly sponsorName?: Maybe<Scalars['String']['output']>;
  readonly title: Scalars['String']['output'];
  readonly tooltipText?: Maybe<Scalars['String']['output']>;
};

export type ApiSignatureStandingsTournamentInfo = {
  readonly __typename: 'SignatureStandingsTournamentInfo';
  readonly displayDate: Scalars['String']['output'];
  readonly roundStatus: ApiRoundStatus;
  readonly roundStatusColor: ApiRoundStatusColor;
  readonly roundStatusDisplay: Scalars['String']['output'];
  /** @deprecated use tournamentLogoAsset */
  readonly tournamentLogo: ReadonlyArray<Scalars['String']['output']>;
  readonly tournamentLogoAsset: ReadonlyArray<ApiImageAsset>;
  readonly tournamentName: Scalars['String']['output'];
  readonly tournamentStatus: ApiTournamentStatus;
};

export type ApiSimpleScore = {
  readonly __typename: 'SimpleScore';
  readonly holeNumber: Scalars['Int']['output'];
  readonly isTotal?: Maybe<Scalars['Boolean']['output']>;
  readonly score: Scalars['String']['output'];
  readonly status: ApiHoleScoreStatus;
};

export type ApiSocialType =
  | 'facebook'
  | 'instagram'
  | 'twitter'
  | 'youtube';

export type ApiSponsor = {
  readonly __typename: 'Sponsor';
  readonly accessibilityText: Scalars['String']['output'];
  /** @deprecated use logoAsset */
  readonly logo?: Maybe<Scalars['String']['output']>;
  readonly logoAsset: ApiImageAsset;
  /** @deprecated use logoDarkAsset */
  readonly logoDark?: Maybe<Scalars['String']['output']>;
  readonly logoDarkAsset: ApiImageAsset;
  /** @deprecated use logoTabletAsset */
  readonly logoTablet?: Maybe<Scalars['String']['output']>;
  readonly logoTabletAsset: ApiImageAsset;
  /** @deprecated use logoTabletDarkAsset */
  readonly logoTabletDark?: Maybe<Scalars['String']['output']>;
  readonly logoTabletDarkAsset: ApiImageAsset;
  readonly sponsor: ApiPlayerSponsorBrand;
};

export type ApiSponsorImage = {
  readonly __typename: 'SponsorImage';
  readonly accessibilityText: Scalars['String']['output'];
  readonly link?: Maybe<Scalars['String']['output']>;
  /** @deprecated use logoAsset */
  readonly logo: Scalars['String']['output'];
  readonly logoAsset: ApiImageAsset;
  /** @deprecated use logoDarkAsset */
  readonly logoDark: Scalars['String']['output'];
  readonly logoDarkAsset: ApiImageAsset;
};

export type ApiSponsoredArticles = {
  readonly __typename: 'SponsoredArticles';
  readonly articleSponsor: ApiArticleSponsor;
  readonly articles: ReadonlyArray<ApiNewsArticle>;
  readonly cta?: Maybe<ApiCallToAction>;
  readonly moreNewsTitle?: Maybe<Scalars['String']['output']>;
};

export type ApiStandardCupRanking = {
  readonly __typename: 'StandardCupRanking';
  readonly rankings: ReadonlyArray<ApiCupRankingPlayer>;
};

export type ApiStandardWeatherTemp = {
  readonly __typename: 'StandardWeatherTemp';
  readonly tempC: Scalars['String']['output'];
  readonly tempF: Scalars['String']['output'];
};

export type ApiStandingStat = {
  readonly __typename: 'StandingStat';
  readonly statName: Scalars['String']['output'];
  readonly statValue: Scalars['String']['output'];
};

export type ApiStatCategory =
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

export type ApiStatCategoryConfig = {
  readonly __typename: 'StatCategoryConfig';
  readonly category: Scalars['String']['output'];
  readonly categoryType?: Maybe<ApiStatCategoryConfigType>;
  readonly displayName: Scalars['String']['output'];
  readonly subCategories: ReadonlyArray<ApiStatSubCategory>;
};

export type ApiStatCategoryConfigType =
  | 'ALL_TIME_RECORDS'
  | 'TRADITIONAL_STAT';

export type ApiStatCategoryStat = {
  readonly __typename: 'StatCategoryStat';
  readonly statId: Scalars['String']['output'];
  readonly statTitle: Scalars['String']['output'];
};

export type ApiStatColor =
  | 'BLACK'
  | 'GRAY'
  | 'GREEN'
  | 'RED';

export type ApiStatDetailEventQuery = {
  readonly queryType: ApiStatDetailQueryType;
  readonly tournamentId: Scalars['String']['input'];
};

export type ApiStatDetailQueryType =
  | 'EVENT_ONLY'
  | 'THROUGH_EVENT';

export type ApiStatDetailTourAvg = {
  readonly __typename: 'StatDetailTourAvg';
  readonly displayName: Scalars['String']['output'];
  readonly value: Scalars['String']['output'];
};

export type ApiStatDetails = {
  readonly __typename: 'StatDetails';
  readonly cutOffButtonText?: Maybe<Scalars['String']['output']>;
  readonly cutOffNumber?: Maybe<Scalars['Int']['output']>;
  readonly displaySeason: Scalars['String']['output'];
  readonly lastProcessed: Scalars['String']['output'];
  readonly rows: ReadonlyArray<ApiStatDetailsRow>;
  /** @deprecated use sponsorLogoAsset */
  readonly sponsorLogo?: Maybe<Scalars['String']['output']>;
  readonly sponsorLogoAsset: ApiImageAsset;
  readonly statCategories: ReadonlyArray<ApiStatCategoryConfig>;
  readonly statDescription: Scalars['String']['output'];
  readonly statHeaders: ReadonlyArray<Scalars['String']['output']>;
  readonly statId: Scalars['String']['output'];
  readonly statTitle: Scalars['String']['output'];
  readonly statType: ApiCategoryStatType;
  readonly tourAvg?: Maybe<Scalars['String']['output']>;
  readonly tourCode: ApiTourCode;
  readonly tournamentPills: ReadonlyArray<ApiStatTournamentPill>;
  readonly year: Scalars['Int']['output'];
  readonly yearPills: ReadonlyArray<ApiStatYearPills>;
};

export type ApiStatDetailsPlayer = {
  readonly __typename: 'StatDetailsPlayer';
  readonly country: Scalars['String']['output'];
  readonly countryFlag: Scalars['String']['output'];
  readonly filter?: Maybe<Scalars['String']['output']>;
  readonly playerId: Scalars['String']['output'];
  readonly playerName: Scalars['String']['output'];
  readonly rank: Scalars['Int']['output'];
  readonly rankChangeTendency?: Maybe<ApiStatRankMovement>;
  readonly rankDiff: Scalars['String']['output'];
  readonly rankLogoDark?: Maybe<Scalars['String']['output']>;
  readonly rankLogoLight?: Maybe<Scalars['String']['output']>;
  readonly stats: ReadonlyArray<ApiCategoryPlayerStat>;
};

export type ApiStatDetailsRow = ApiStatDetailTourAvg | ApiStatDetailsPlayer;

export type ApiStatLeaderCategory = {
  readonly __typename: 'StatLeaderCategory';
  readonly categoryHeader: Scalars['String']['output'];
  readonly displayYear: Scalars['String']['output'];
  readonly otherCategories: ReadonlyArray<ApiStatCategoryConfig>;
  readonly statCategory: ApiStatCategory;
  readonly subCategories: ReadonlyArray<ApiStatLeaderSubCategory>;
  readonly tourCode: ApiTourCode;
  readonly year: Scalars['Int']['output'];
};

export type ApiStatLeaderSubCategory = {
  readonly __typename: 'StatLeaderSubCategory';
  readonly stats: ReadonlyArray<ApiLeaderStat>;
  readonly subCatPromo?: Maybe<ApiStatLeaderSubCategoryPromo>;
  readonly subCategoryName: Scalars['String']['output'];
};

export type ApiStatLeaderSubCategoryPromo = {
  readonly __typename: 'StatLeaderSubCategoryPromo';
  readonly image: Scalars['String']['output'];
  readonly link: Scalars['String']['output'];
  readonly title: Scalars['String']['output'];
};

export type ApiStatRankMovement =
  | 'CONSTANT'
  | 'DOWN'
  | 'UP';

export type ApiStatSubCategory = {
  readonly __typename: 'StatSubCategory';
  readonly displayName?: Maybe<Scalars['String']['output']>;
  readonly stats: ReadonlyArray<ApiStatCategoryStat>;
};

export type ApiStatTournamentPill = {
  readonly __typename: 'StatTournamentPill';
  readonly displayName: Scalars['String']['output'];
  readonly endDateDisplay?: Maybe<Scalars['String']['output']>;
  readonly tournamentId: Scalars['String']['output'];
};

export type ApiStatWeekPill = {
  readonly __typename: 'StatWeekPill';
  readonly displayWeek: Scalars['String']['output'];
  readonly week: Scalars['Int']['output'];
};

export type ApiStatYearPills = {
  readonly __typename: 'StatYearPills';
  readonly displaySeason: Scalars['String']['output'];
  readonly year: Scalars['Int']['output'];
};

export type ApiStats = {
  readonly __typename: 'Stats';
  readonly id: Scalars['ID']['output'];
  readonly statAvg?: Maybe<Scalars['String']['output']>;
  readonly statName: Scalars['String']['output'];
  readonly statRank: Scalars['Int']['output'];
  readonly statValue: Scalars['String']['output'];
};

export type ApiStreamUrls = {
  readonly __typename: 'StreamUrls';
  readonly applePodcast: Scalars['String']['output'];
  readonly googlePodcast: Scalars['String']['output'];
  readonly spotify: Scalars['String']['output'];
  readonly stitcher: Scalars['String']['output'];
  readonly tuneIn: Scalars['String']['output'];
};

export type ApiStrokeCoordinates = {
  readonly __typename: 'StrokeCoordinates';
  readonly enhancedX: Scalars['Float']['output'];
  readonly enhancedY: Scalars['Float']['output'];
  readonly tourcastX: Scalars['Float']['output'];
  readonly tourcastY: Scalars['Float']['output'];
  readonly tourcastZ: Scalars['Float']['output'];
  readonly x: Scalars['Float']['output'];
  readonly y: Scalars['Float']['output'];
  readonly z: Scalars['Float']['output'];
};

export type ApiStrokesGainedStats = {
  readonly __typename: 'StrokesGainedStats';
  readonly graph: Scalars['Boolean']['output'];
  readonly label: Scalars['String']['output'];
  readonly rank: Scalars['String']['output'];
  readonly shortLabel: Scalars['String']['output'];
  readonly statId: Scalars['String']['output'];
  readonly total: Scalars['String']['output'];
  readonly totalNum: Scalars['Float']['output'];
  readonly yearToDate: Scalars['String']['output'];
  readonly yearToDateNum: Scalars['Float']['output'];
};

export type ApiStyle = {
  readonly __typename: 'Style';
  readonly key: Scalars['String']['output'];
  readonly value: Scalars['String']['output'];
};

export type ApiSubMarket = {
  readonly __typename: 'SubMarket';
  readonly header: Scalars['String']['output'];
  readonly id: Scalars['String']['output'];
  readonly options: ReadonlyArray<ApiOddsOptionV2>;
};

export type ApiSubscription = {
  readonly __typename: 'Subscription';
  readonly onUpdateBubble?: Maybe<ApiBubbleWatch>;
  readonly onUpdateBubbleWatch?: Maybe<ApiTourCupRankingEvent>;
  readonly onUpdateCourseStats?: Maybe<ApiTournamentHoleStats>;
  readonly onUpdateCoverage?: Maybe<ApiBroadcastCoverage>;
  readonly onUpdateCupOverviewLeaderboard?: Maybe<ApiCupTournamentStatus>;
  readonly onUpdateCupRoundLeaderboard?: Maybe<ApiCupTournamentLeaderboard>;
  readonly onUpdateCupRoundLeaderboardCompressed?: Maybe<ApiCupTournamentLeaderboardCompressed>;
  readonly onUpdateCupScorecard?: Maybe<ApiCupScorecard>;
  readonly onUpdateCurrentLeadersCompressed?: Maybe<ApiCurrentLeadersCompressed>;
  readonly onUpdateGroupLocations?: Maybe<ApiGroupLocationCourse>;
  readonly onUpdateGroupLocationsEnhanced?: Maybe<ApiGroupLocationCourse>;
  readonly onUpdateHoleDetails?: Maybe<ApiHoleDetail>;
  readonly onUpdateLeaderboardCompressedV2?: Maybe<ApiLeaderboardCompressedV2>;
  readonly onUpdateLeaderboardCompressedV3?: Maybe<ApiLeaderboardUpdateCompressedV3>;
  readonly onUpdateLeaderboardStrokes?: Maybe<ApiLeaderboardStrokes>;
  readonly onUpdateLeaderboardStrokesCompresssed?: Maybe<ApiLeaderboardStrokesCompressed>;
  readonly onUpdateLeaderboardV2?: Maybe<ApiLeaderboardV2>;
  readonly onUpdateMatchOutcomeIq?: Maybe<ApiRyderCupMatchOutcomeIq>;
  readonly onUpdateMatchPlayLeaderboard?: Maybe<ApiMpLeaderboard>;
  readonly onUpdateMatchPlayLeaderboardCompressed?: Maybe<ApiLeaderboardCompressed>;
  readonly onUpdateMatchPlayPlayoffScorecard?: Maybe<ApiMpPlayoffScorecard>;
  readonly onUpdateMatchPlayScorecard?: Maybe<ApiMpScorecard>;
  readonly onUpdateMatchPlayTeeTimes?: Maybe<ApiMpTeeTimes>;
  readonly onUpdateMatchPlayTeeTimesCompressed?: Maybe<ApiTeeTimesCompressed>;
  readonly onUpdateOddsToWinMarket?: Maybe<ApiOddsToWinMarket>;
  readonly onUpdateOddsToWinMarketCompressed?: Maybe<ApiOddsToWinMarketCompressed>;
  readonly onUpdatePlayerHub?: Maybe<ApiPlayerHubPlayerCompressed>;
  readonly onUpdatePlayerTournamentStatus?: Maybe<ApiPlayerTournamentStatus>;
  readonly onUpdatePlayoffScorecard?: Maybe<ApiPlayoffScorecard>;
  /** @deprecated Use onUpdatePlayoffScorecardV3. This sub does not work */
  readonly onUpdatePlayoffScorecardV2?: Maybe<ReadonlyArray<Maybe<ApiPlayoffScorecard>>>;
  readonly onUpdatePlayoffScorecardV3?: Maybe<ApiTournamentPlayoffScorecards>;
  readonly onUpdatePlayoffShotDetails?: Maybe<ApiGroupShotDetails>;
  readonly onUpdatePlayoffShotDetailsCompressed?: Maybe<ApiGroupShotDetailsCompressed>;
  readonly onUpdateScorecardCompressedV3?: Maybe<ApiScorecardUpdateCompressedV3>;
  readonly onUpdateScorecardStatsCompressedV3?: Maybe<ApiPlayerScorecardStatsCompressed>;
  readonly onUpdateScorecardV2?: Maybe<ApiLeaderboardDrawerV2>;
  readonly onUpdateShotCommentary?: Maybe<ApiShotCommentary>;
  /**    V2 version that only sends updated holes */
  readonly onUpdateShotDetailsCompressedV3?: Maybe<ApiShotDetailsCompressedV3>;
  readonly onUpdateTGLMatch?: Maybe<ApiTglMatch>;
  readonly onUpdateTSPPlayoffShotDetails?: Maybe<ApiTeamShotDetails>;
  readonly onUpdateTSPPlayoffShotDetailsCompressed?: Maybe<ApiTeamShotDetailsCompressed>;
  readonly onUpdateTeamPlayLeaderboard?: Maybe<ApiTspLeaderboard>;
  readonly onUpdateTeamPlayLeaderboardCompressed?: Maybe<ApiLeaderboardCompressed>;
  readonly onUpdateTeamPlayScorecard?: Maybe<ApiTspScorecard>;
  readonly onUpdateTeamPlayScorecardRounds?: Maybe<ApiTspScorecardRounds>;
  readonly onUpdateTeamStrokePlayTeeTimes?: Maybe<ApiTspTeeTimes>;
  readonly onUpdateTeamStrokePlayTeeTimesCompressed?: Maybe<ApiTeeTimesCompressed>;
  readonly onUpdateTeeTimes?: Maybe<ApiTeeTimes>;
  readonly onUpdateTeeTimesCompressed?: Maybe<ApiTeeTimesCompressed>;
  readonly onUpdateTeeTimesCompressedV2?: Maybe<ApiTeeTimesCompressed>;
  readonly onUpdateTeeTimesV2?: Maybe<ApiTeeTimesV2>;
  readonly onUpdateTourCup?: Maybe<ApiTourCupRankingEvent>;
  readonly onUpdateTourcastTable?: Maybe<ApiTourcastTable>;
  readonly onUpdateTournament?: Maybe<ApiTournament>;
  readonly onUpdateTournamentGroupLocations?: Maybe<ApiTournamentGroupLocation>;
  readonly onUpdateUpcomingSchedule?: Maybe<ApiScheduleUpcoming>;
};


export type ApiSubscriptionOnUpdateBubbleArgs = {
  bubbleId: Scalars['ID']['input'];
};


export type ApiSubscriptionOnUpdateBubbleWatchArgs = {
  id: Scalars['ID']['input'];
};


export type ApiSubscriptionOnUpdateCourseStatsArgs = {
  tournamentId: Scalars['ID']['input'];
};


export type ApiSubscriptionOnUpdateCoverageArgs = {
  id: Scalars['ID']['input'];
};


export type ApiSubscriptionOnUpdateCupOverviewLeaderboardArgs = {
  id: Scalars['ID']['input'];
};


export type ApiSubscriptionOnUpdateCupRoundLeaderboardArgs = {
  id: Scalars['ID']['input'];
};


export type ApiSubscriptionOnUpdateCupRoundLeaderboardCompressedArgs = {
  id: Scalars['ID']['input'];
};


export type ApiSubscriptionOnUpdateCupScorecardArgs = {
  id: Scalars['ID']['input'];
};


export type ApiSubscriptionOnUpdateCurrentLeadersCompressedArgs = {
  id: Scalars['ID']['input'];
};


export type ApiSubscriptionOnUpdateGroupLocationsArgs = {
  courseId: Scalars['String']['input'];
  round: Scalars['Int']['input'];
  tournamentId: Scalars['ID']['input'];
};


export type ApiSubscriptionOnUpdateGroupLocationsEnhancedArgs = {
  courseId: Scalars['String']['input'];
  round: Scalars['Int']['input'];
  tournamentId: Scalars['ID']['input'];
};


export type ApiSubscriptionOnUpdateHoleDetailsArgs = {
  id: Scalars['ID']['input'];
};


export type ApiSubscriptionOnUpdateLeaderboardCompressedV2Args = {
  id: Scalars['ID']['input'];
};


export type ApiSubscriptionOnUpdateLeaderboardCompressedV3Args = {
  id: Scalars['ID']['input'];
};


export type ApiSubscriptionOnUpdateLeaderboardStrokesArgs = {
  id: Scalars['ID']['input'];
};


export type ApiSubscriptionOnUpdateLeaderboardStrokesCompresssedArgs = {
  id: Scalars['ID']['input'];
};


export type ApiSubscriptionOnUpdateLeaderboardV2Args = {
  id: Scalars['ID']['input'];
};


export type ApiSubscriptionOnUpdateMatchOutcomeIqArgs = {
  id: Scalars['ID']['input'];
};


export type ApiSubscriptionOnUpdateMatchPlayLeaderboardArgs = {
  id: Scalars['ID']['input'];
};


export type ApiSubscriptionOnUpdateMatchPlayLeaderboardCompressedArgs = {
  id: Scalars['ID']['input'];
};


export type ApiSubscriptionOnUpdateMatchPlayPlayoffScorecardArgs = {
  id: Scalars['ID']['input'];
};


export type ApiSubscriptionOnUpdateMatchPlayScorecardArgs = {
  id: Scalars['ID']['input'];
};


export type ApiSubscriptionOnUpdateMatchPlayTeeTimesArgs = {
  id: Scalars['ID']['input'];
};


export type ApiSubscriptionOnUpdateMatchPlayTeeTimesCompressedArgs = {
  id: Scalars['ID']['input'];
};


export type ApiSubscriptionOnUpdateOddsToWinMarketArgs = {
  oddsToWinId: Scalars['ID']['input'];
};


export type ApiSubscriptionOnUpdateOddsToWinMarketCompressedArgs = {
  id: Scalars['ID']['input'];
};


export type ApiSubscriptionOnUpdatePlayerHubArgs = {
  id: Scalars['ID']['input'];
};


export type ApiSubscriptionOnUpdatePlayerTournamentStatusArgs = {
  playerId: Scalars['ID']['input'];
};


export type ApiSubscriptionOnUpdatePlayoffScorecardArgs = {
  id: Scalars['ID']['input'];
};


export type ApiSubscriptionOnUpdatePlayoffScorecardV2Args = {
  id: Scalars['ID']['input'];
};


export type ApiSubscriptionOnUpdatePlayoffScorecardV3Args = {
  tournamentId: Scalars['ID']['input'];
};


export type ApiSubscriptionOnUpdatePlayoffShotDetailsArgs = {
  id: Scalars['ID']['input'];
};


export type ApiSubscriptionOnUpdatePlayoffShotDetailsCompressedArgs = {
  id: Scalars['ID']['input'];
};


export type ApiSubscriptionOnUpdateScorecardCompressedV3Args = {
  id: Scalars['ID']['input'];
};


export type ApiSubscriptionOnUpdateScorecardStatsCompressedV3Args = {
  id: Scalars['ID']['input'];
};


export type ApiSubscriptionOnUpdateScorecardV2Args = {
  id: Scalars['ID']['input'];
};


export type ApiSubscriptionOnUpdateShotCommentaryArgs = {
  playerId: Scalars['String']['input'];
  round: Scalars['Int']['input'];
  tournamentId: Scalars['String']['input'];
};


export type ApiSubscriptionOnUpdateShotDetailsCompressedV3Args = {
  id: Scalars['ID']['input'];
};


export type ApiSubscriptionOnUpdateTglMatchArgs = {
  id: Scalars['ID']['input'];
};


export type ApiSubscriptionOnUpdateTspPlayoffShotDetailsArgs = {
  id: Scalars['ID']['input'];
};


export type ApiSubscriptionOnUpdateTspPlayoffShotDetailsCompressedArgs = {
  id: Scalars['ID']['input'];
};


export type ApiSubscriptionOnUpdateTeamPlayLeaderboardArgs = {
  id: Scalars['ID']['input'];
};


export type ApiSubscriptionOnUpdateTeamPlayLeaderboardCompressedArgs = {
  id: Scalars['ID']['input'];
};


export type ApiSubscriptionOnUpdateTeamPlayScorecardArgs = {
  id: Scalars['ID']['input'];
};


export type ApiSubscriptionOnUpdateTeamPlayScorecardRoundsArgs = {
  id: Scalars['ID']['input'];
};


export type ApiSubscriptionOnUpdateTeamStrokePlayTeeTimesArgs = {
  id: Scalars['ID']['input'];
};


export type ApiSubscriptionOnUpdateTeamStrokePlayTeeTimesCompressedArgs = {
  id: Scalars['ID']['input'];
};


export type ApiSubscriptionOnUpdateTeeTimesArgs = {
  id: Scalars['ID']['input'];
};


export type ApiSubscriptionOnUpdateTeeTimesCompressedArgs = {
  id: Scalars['ID']['input'];
};


export type ApiSubscriptionOnUpdateTeeTimesCompressedV2Args = {
  id: Scalars['ID']['input'];
};


export type ApiSubscriptionOnUpdateTeeTimesV2Args = {
  id: Scalars['ID']['input'];
};


export type ApiSubscriptionOnUpdateTourCupArgs = {
  id: Scalars['ID']['input'];
};


export type ApiSubscriptionOnUpdateTourcastTableArgs = {
  tournamentId: Scalars['ID']['input'];
};


export type ApiSubscriptionOnUpdateTournamentArgs = {
  id: Scalars['ID']['input'];
};


export type ApiSubscriptionOnUpdateTournamentGroupLocationsArgs = {
  round: Scalars['Int']['input'];
  tournamentId: Scalars['ID']['input'];
};


export type ApiSubscriptionOnUpdateUpcomingScheduleArgs = {
  id: Scalars['ID']['input'];
};

export type ApiSummaryRow = {
  readonly __typename: 'SummaryRow';
  readonly averagePaceOfPlay?: Maybe<Scalars['String']['output']>;
  readonly birdies?: Maybe<Scalars['Int']['output']>;
  readonly bogeys?: Maybe<Scalars['Int']['output']>;
  readonly doubleBogey?: Maybe<Scalars['Int']['output']>;
  readonly eagles?: Maybe<Scalars['Int']['output']>;
  readonly par: Scalars['Int']['output'];
  readonly pars?: Maybe<Scalars['Int']['output']>;
  readonly rowType: ApiSummaryRowType;
  readonly scoringAverage: Scalars['String']['output'];
  readonly scoringAverageDiff: Scalars['String']['output'];
  readonly scoringDiffTendency: ApiScoringTendency;
  readonly yardage: Scalars['Int']['output'];
};

export type ApiSummaryRowType =
  | 'IN'
  | 'OUT'
  | 'TOTAL';

export type ApiTcWinner = ApiMpLeaderboardPlayer | ApiTspWinner | ApiWinner;

export type ApiTglBoxScore = {
  readonly __typename: 'TGLBoxScore';
  readonly matchId: Scalars['String']['output'];
};

export type ApiTglBoxScoreFragment = {
  readonly __typename: 'TGLBoxScoreFragment';
  readonly matchIds?: Maybe<ReadonlyArray<Scalars['String']['output']>>;
};

export type ApiTglMatch = {
  readonly __typename: 'TGLMatch';
  readonly currentHole?: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly isOvertime: Scalars['Boolean']['output'];
  readonly matchDate: Scalars['AWSTimestamp']['output'];
  readonly matchStatus: ApiTglMatchStatus;
  readonly matchStatusColor: Scalars['String']['output'];
  readonly matchStatusDisplay: Scalars['String']['output'];
  readonly matchUrl?: Maybe<Scalars['String']['output']>;
  readonly subscriptionsActive: Scalars['Boolean']['output'];
  readonly teams: ReadonlyArray<ApiTglTeam>;
  readonly tglLogo?: Maybe<Scalars['String']['output']>;
  readonly tglLogoDark?: Maybe<Scalars['String']['output']>;
  readonly tglLogoFallback: Scalars['String']['output'];
  readonly watchLabel?: Maybe<Scalars['String']['output']>;
  readonly watchLogo?: Maybe<Scalars['String']['output']>;
  readonly watchUrl?: Maybe<Scalars['String']['output']>;
};

/**  ## TGL Types */
export type ApiTglMatchStatus =
  | 'COMPLETE'
  | 'IN_PROGRESS'
  | 'UNKNOWN'
  | 'UPCOMING';

export type ApiTglPlayer = {
  readonly __typename: 'TGLPlayer';
  readonly displayName: Scalars['String']['output'];
  readonly playerHeadshot: Scalars['String']['output'];
  readonly playerId: Scalars['ID']['output'];
};

export type ApiTglSchedule = {
  readonly __typename: 'TGLSchedule';
  readonly matches: ReadonlyArray<ApiTglMatch>;
  readonly season: Scalars['Int']['output'];
};

export type ApiTglTeam = {
  readonly __typename: 'TGLTeam';
  readonly losses: Scalars['Int']['output'];
  readonly matchWinner?: Maybe<Scalars['Boolean']['output']>;
  readonly players: ReadonlyArray<ApiTglPlayer>;
  readonly score: Scalars['String']['output'];
  readonly teamLogo: Scalars['String']['output'];
  readonly teamName: Scalars['String']['output'];
  readonly wins: Scalars['Int']['output'];
};

export type ApiTspLeaderboard = {
  readonly __typename: 'TSPLeaderboard';
  readonly currentRound: Scalars['Int']['output'];
  readonly currentRoundScoringFormat?: Maybe<Scalars['String']['output']>;
  readonly disableOdds: Scalars['Boolean']['output'];
  readonly formatType: ApiFormatType;
  readonly id: Scalars['ID']['output'];
  readonly infoUrl: Scalars['String']['output'];
  readonly informationSections: ReadonlyArray<ApiInformationSection>;
  readonly leaderboard: ReadonlyArray<ApiTspLeaderboardRow>;
  readonly messages: ReadonlyArray<ApiLeaderboardMessage>;
  readonly playoff?: Maybe<ApiTspPlayoff>;
  readonly rounds: ReadonlyArray<ApiTspLeaderboardRound>;
  readonly scorecardEnabled: Scalars['Boolean']['output'];
  readonly shortTimezone: Scalars['String']['output'];
  readonly timezone?: Maybe<Scalars['String']['output']>;
  readonly tourcastURI?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastUrl?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastUrlWeb?: Maybe<Scalars['String']['output']>;
  readonly tournamentStatus: ApiTournamentStatus;
  readonly winner?: Maybe<ApiTspWinner>;
};

export type ApiTspLeaderboardRound = {
  readonly __typename: 'TSPLeaderboardRound';
  readonly round: Scalars['Int']['output'];
  readonly roundHeader: Scalars['String']['output'];
  readonly roundHeaderShort: Scalars['String']['output'];
  readonly roundStatusSubHead: Scalars['String']['output'];
  readonly roundTypeSubHead: Scalars['String']['output'];
};

export type ApiTspLeaderboardRow = ApiInformationRow | ApiTspTeamRow;

export type ApiTspScorecard = {
  readonly __typename: 'TSPScorecard';
  readonly backNine: Scalars['Boolean']['output'];
  readonly courseId?: Maybe<Scalars['Int']['output']>;
  readonly currentHole?: Maybe<Scalars['Int']['output']>;
  readonly currentRound: Scalars['Int']['output'];
  readonly currentRoundTotal: Scalars['String']['output'];
  readonly firstNine?: Maybe<ApiTeamPlayScoreCardRow>;
  readonly groupNumber: Scalars['Int']['output'];
  readonly groupState: ApiPlayerState;
  readonly id: Scalars['ID']['output'];
  readonly locationDetail: Scalars['String']['output'];
  readonly parTotal: Scalars['Int']['output'];
  readonly players: ReadonlyArray<ApiTspScPlayer>;
  readonly position: Scalars['String']['output'];
  readonly roundDisplay: Scalars['String']['output'];
  readonly roundFormat: ApiRoundFormat;
  readonly roundNumber: Scalars['Int']['output'];
  readonly scorecardTitle: Scalars['String']['output'];
  readonly secondNine?: Maybe<ApiTeamPlayScoreCardRow>;
  readonly teeTime: Scalars['AWSTimestamp']['output'];
  readonly thru: Scalars['String']['output'];
  readonly total: Scalars['String']['output'];
  readonly totalStrokes: Scalars['String']['output'];
  readonly tourcastURI?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastUrl?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastUrlWeb?: Maybe<Scalars['String']['output']>;
};

export type ApiTspScorecardRounds = {
  readonly __typename: 'TSPScorecardRounds';
  readonly id: Scalars['ID']['output'];
  readonly scorecards: ReadonlyArray<ApiTspScorecard>;
};

export type ApiTspTeeTimeGroup = {
  readonly __typename: 'TSPTeeTimeGroup';
  readonly courseId?: Maybe<Scalars['String']['output']>;
  readonly groupNumber: Scalars['Int']['output'];
  readonly groupState: ApiPlayerState;
  readonly groupStatus: Scalars['String']['output'];
  readonly holeLocation?: Maybe<Scalars['String']['output']>;
  readonly startTee: Scalars['Int']['output'];
  readonly teams: ReadonlyArray<ApiTspTeeTimeTeam>;
  readonly teeTime: Scalars['AWSTimestamp']['output'];
};

export type ApiTspTeeTimeHeaders = {
  readonly __typename: 'TSPTeeTimeHeaders';
  readonly status: Scalars['String']['output'];
  readonly team: Scalars['String']['output'];
  readonly tee: Scalars['String']['output'];
  readonly time: Scalars['String']['output'];
};

export type ApiTspTeeTimePlayer = {
  readonly __typename: 'TSPTeeTimePlayer';
  readonly country: Scalars['String']['output'];
  readonly countryFlag: Scalars['String']['output'];
  readonly displayName: Scalars['String']['output'];
  readonly firstName: Scalars['String']['output'];
  /** @deprecated URL should be built using player ID */
  readonly headshot: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
  readonly isAmateur: Scalars['Boolean']['output'];
  readonly lastName: Scalars['String']['output'];
  readonly shortName: Scalars['String']['output'];
};

export type ApiTspTeeTimeRound = {
  readonly __typename: 'TSPTeeTimeRound';
  readonly groups: ReadonlyArray<ApiTspTeeTimeGroup>;
  readonly roundFormat: Scalars['String']['output'];
  readonly roundNumber: Scalars['Int']['output'];
};

export type ApiTspTeeTimeTeam = {
  readonly __typename: 'TSPTeeTimeTeam';
  readonly players: ReadonlyArray<ApiTspTeeTimePlayer>;
  readonly teamId: Scalars['ID']['output'];
};

export type ApiTspTeeTimes = {
  readonly __typename: 'TSPTeeTimes';
  readonly courseFilters: ReadonlyArray<ApiCourseFilter>;
  readonly courses: ReadonlyArray<ApiCourse>;
  readonly defaultRound: Scalars['Int']['output'];
  readonly drawersEnabled: Scalars['Boolean']['output'];
  readonly id: Scalars['ID']['output'];
  readonly informationSections: ReadonlyArray<ApiInformationSection>;
  readonly roundFilters: ReadonlyArray<ApiRoundFilter>;
  readonly rounds: ReadonlyArray<ApiTspTeeTimeRound>;
  readonly teeTimeHeaders: ApiTspTeeTimeHeaders;
  readonly timezone: Scalars['String']['output'];
};

export type ApiTableBody = {
  readonly __typename: 'TableBody';
  readonly rows: ReadonlyArray<ApiTableRows>;
};

export type ApiTableColumn = {
  readonly __typename: 'TableColumn';
  readonly class?: Maybe<Scalars['String']['output']>;
  readonly colspan?: Maybe<Scalars['String']['output']>;
  readonly height?: Maybe<Scalars['String']['output']>;
  readonly rowspan?: Maybe<Scalars['String']['output']>;
  readonly valign?: Maybe<Scalars['String']['output']>;
  readonly value?: Maybe<ReadonlyArray<ApiTableColumnValue>>;
  readonly width?: Maybe<Scalars['String']['output']>;
};

export type ApiTableColumnSegment = {
  readonly __typename: 'TableColumnSegment';
  readonly data?: Maybe<Scalars['String']['output']>;
  readonly format?: Maybe<ApiNewsArticleFormat>;
  readonly oddsSwing?: Maybe<ApiOddsSwing>;
  readonly type: Scalars['String']['output'];
  readonly value?: Maybe<Scalars['String']['output']>;
};

export type ApiTableColumnValue = ApiTableColumnSegment | ApiUnorderedListNode;

export type ApiTableDataRow = {
  readonly __typename: 'TableDataRow';
  readonly class?: Maybe<Scalars['String']['output']>;
  readonly columns?: Maybe<ReadonlyArray<Maybe<ApiTableColumn>>>;
};

export type ApiTableFragment = {
  readonly __typename: 'TableFragment';
  readonly border?: Maybe<Scalars['String']['output']>;
  readonly cellpadding?: Maybe<Scalars['String']['output']>;
  readonly cellspacing?: Maybe<Scalars['String']['output']>;
  readonly class?: Maybe<Scalars['String']['output']>;
  readonly id?: Maybe<Scalars['String']['output']>;
  readonly table?: Maybe<ApiTableBody>;
  readonly width?: Maybe<Scalars['String']['output']>;
};

export type ApiTableHeaderRow = {
  readonly __typename: 'TableHeaderRow';
  readonly class?: Maybe<Scalars['String']['output']>;
  readonly columns?: Maybe<ReadonlyArray<Maybe<ApiTableColumn>>>;
};

export type ApiTableRows = ApiTableDataRow | ApiTableHeaderRow;

export type ApiTeamHoleGroups = {
  readonly __typename: 'TeamHoleGroups';
  readonly groupLocation: Scalars['String']['output'];
  readonly groupLocationCode: Scalars['String']['output'];
  readonly groupNumber: Scalars['Int']['output'];
  readonly teams: ReadonlyArray<ApiHoleGroupTeam>;
  readonly tourcastURI?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastURL?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastURLWeb?: Maybe<Scalars['String']['output']>;
};

export type ApiTeamPlayHole = {
  readonly __typename: 'TeamPlayHole';
  readonly holeNumber: Scalars['String']['output'];
  readonly parValue: Scalars['String']['output'];
  readonly playerScores: ReadonlyArray<ApiTspPlayerHole>;
  readonly round: Scalars['Int']['output'];
  readonly teamplayHoleScore: ApiTspTeamHole;
  readonly yardage: Scalars['String']['output'];
};

export type ApiTeamPlayScoreCardRow = {
  readonly __typename: 'TeamPlayScoreCardRow';
  readonly holes: ReadonlyArray<ApiTeamPlayHole>;
  readonly parTotal: Scalars['Int']['output'];
  readonly total: Scalars['String']['output'];
  readonly totalLabel: Scalars['String']['output'];
};

export type ApiTeamRankings = {
  readonly __typename: 'TeamRankings';
  readonly defaultEuropeRankings: Scalars['Boolean']['output'];
  readonly defaultUsRankings: Scalars['Boolean']['output'];
  readonly displayRoster: Scalars['Boolean']['output'];
  readonly euroCaptainLabel?: Maybe<Scalars['String']['output']>;
  readonly euroHeader: Scalars['String']['output'];
  readonly euroViceCaptainLabel?: Maybe<Scalars['String']['output']>;
  readonly europeCaptain?: Maybe<Scalars['String']['output']>;
  readonly europeCta?: Maybe<ApiCallToAction>;
  readonly europeInfoBlurb?: Maybe<Scalars['String']['output']>;
  readonly europeViceCaptain?: Maybe<Scalars['String']['output']>;
  readonly sectionHeader: Scalars['String']['output'];
  readonly usCaptain?: Maybe<Scalars['String']['output']>;
  readonly usCaptainLabel?: Maybe<Scalars['String']['output']>;
  readonly usCta?: Maybe<ApiCallToAction>;
  readonly usHeader: Scalars['String']['output'];
  readonly usInfoBlurb?: Maybe<Scalars['String']['output']>;
  readonly usViceCaptain?: Maybe<Scalars['String']['output']>;
  readonly usViceCaptainLabel?: Maybe<Scalars['String']['output']>;
};

export type ApiTeamShotDetails = {
  readonly __typename: 'TeamShotDetails';
  readonly defaultHolePickle: ApiHolePickleType;
  readonly displayType: ApiShotDetailsDisplayType;
  readonly groupNumber: Scalars['Int']['output'];
  readonly holes: ReadonlyArray<ApiGroupShotDetailsHole>;
  readonly id: Scalars['ID']['output'];
  readonly message: Scalars['String']['output'];
  readonly round: Scalars['Int']['output'];
  readonly shotVideo?: Maybe<ApiVideo>;
  readonly shotVideos?: Maybe<ReadonlyArray<ApiVideo>>;
  readonly teams: ReadonlyArray<ApiGroupShotDetailsTeam>;
  readonly tournamentId: Scalars['String']['output'];
};

export type ApiTeamShotDetailsCompressed = {
  readonly __typename: 'TeamShotDetailsCompressed';
  readonly id: Scalars['ID']['output'];
  readonly payload: Scalars['String']['output'];
};

export type ApiTeamStoryContentInfo = {
  readonly __typename: 'TeamStoryContentInfo';
  readonly hasStoryContent: Scalars['Boolean']['output'];
  readonly playerId: Scalars['String']['output'];
  readonly storyContentRound?: Maybe<Scalars['Int']['output']>;
  readonly storyContentRounds: ReadonlyArray<Scalars['Int']['output']>;
};

export type ApiTeamplayHolePlayer = {
  readonly __typename: 'TeamplayHolePlayer';
  readonly holeScore?: Maybe<Scalars['String']['output']>;
  readonly holeScoreStatus?: Maybe<ApiHoleScoreStatus>;
  readonly playerId: Scalars['ID']['output'];
};

export type ApiTeeTimeHeader = {
  readonly __typename: 'TeeTimeHeader';
  readonly players: Scalars['String']['output'];
  readonly status: Scalars['String']['output'];
  readonly tee: Scalars['String']['output'];
  readonly time: Scalars['String']['output'];
};

export type ApiTeeTimeRound = {
  readonly __typename: 'TeeTimeRound';
  readonly groups: ReadonlyArray<ApiGroup>;
  readonly id: Scalars['ID']['output'];
  readonly roundDisplay: Scalars['String']['output'];
  readonly roundInt: Scalars['Int']['output'];
  readonly roundStatus: ApiRoundStatus;
  readonly roundStatusColor: ApiRoundStatusColor;
  readonly roundStatusDisplay: Scalars['String']['output'];
};

export type ApiTeeTimeRoundV2 = {
  readonly __typename: 'TeeTimeRoundV2';
  readonly groups: ReadonlyArray<ApiGroupV2>;
  readonly id: Scalars['ID']['output'];
  readonly roundDisplay: Scalars['String']['output'];
  readonly roundInt: Scalars['Int']['output'];
  readonly roundStatus: ApiRoundStatus;
  readonly roundStatusColor: ApiRoundStatusColor;
  readonly roundStatusDisplay: Scalars['String']['output'];
};

export type ApiTeeTimes = {
  readonly __typename: 'TeeTimes';
  readonly courses: ReadonlyArray<ApiCourse>;
  readonly defaultRound: Scalars['Int']['output'];
  readonly drawersEnabled: Scalars['Boolean']['output'];
  readonly hideSov: Scalars['Boolean']['output'];
  readonly id: Scalars['ID']['output'];
  readonly informationSections: ReadonlyArray<ApiInformationSection>;
  readonly rounds: ReadonlyArray<ApiTeeTimeRound>;
  readonly timezone: Scalars['String']['output'];
};

export type ApiTeeTimesCompressed = {
  readonly __typename: 'TeeTimesCompressed';
  readonly id: Scalars['ID']['output'];
  readonly payload: Scalars['String']['output'];
};

export type ApiTeeTimesFeature =
  | 'GROUPINGS'
  | 'GROUP_TRACKER';

export type ApiTeeTimesV2 = {
  readonly __typename: 'TeeTimesV2';
  readonly courses: ReadonlyArray<ApiCourse>;
  readonly defaultRound: Scalars['Int']['output'];
  readonly drawersEnabled: Scalars['Boolean']['output'];
  readonly hideSov: Scalars['Boolean']['output'];
  readonly id: Scalars['ID']['output'];
  readonly informationSections: ReadonlyArray<ApiInformationSection>;
  readonly rounds: ReadonlyArray<ApiTeeTimeRoundV2>;
  readonly teeTimesFeatures: ReadonlyArray<ApiTeeTimesFeature>;
  readonly timezone: Scalars['String']['output'];
};

export type ApiThreeUpPhoto = {
  readonly __typename: 'ThreeUpPhoto';
  readonly photoOne?: Maybe<Scalars['String']['output']>;
  readonly photoOneAccessibilityText?: Maybe<Scalars['String']['output']>;
  readonly photoOneCtaTarget?: Maybe<Scalars['String']['output']>;
  readonly photoOneUrl?: Maybe<Scalars['String']['output']>;
  readonly photoThree?: Maybe<Scalars['String']['output']>;
  readonly photoThreeAccessibilityText?: Maybe<Scalars['String']['output']>;
  readonly photoThreeCtaTarget?: Maybe<Scalars['String']['output']>;
  readonly photoThreeUrl?: Maybe<Scalars['String']['output']>;
  readonly photoTwo?: Maybe<Scalars['String']['output']>;
  readonly photoTwoAccessibilityText?: Maybe<Scalars['String']['output']>;
  readonly photoTwoCtaTarget?: Maybe<Scalars['String']['output']>;
  readonly photoTwoUrl?: Maybe<Scalars['String']['output']>;
  readonly title: Scalars['String']['output'];
};

export type ApiThreeUpStats = {
  readonly __typename: 'ThreeUpStats';
  readonly header?: Maybe<Scalars['String']['output']>;
  readonly statsDescriptionOne?: Maybe<Scalars['String']['output']>;
  readonly statsDescriptionThree?: Maybe<Scalars['String']['output']>;
  readonly statsDescriptionTwo?: Maybe<Scalars['String']['output']>;
  readonly valueOne?: Maybe<Scalars['String']['output']>;
  readonly valueThree?: Maybe<Scalars['String']['output']>;
  readonly valueTwo?: Maybe<Scalars['String']['output']>;
};

export type ApiTicketCards = {
  readonly __typename: 'TicketCards';
  readonly blueBackground: Scalars['Boolean']['output'];
  readonly cardLabel?: Maybe<Scalars['String']['output']>;
  readonly cardPhoto?: Maybe<Scalars['String']['output']>;
  readonly cardSubhead?: Maybe<Scalars['String']['output']>;
  readonly cardTitle?: Maybe<Scalars['String']['output']>;
  readonly ctaIcon?: Maybe<Scalars['String']['output']>;
  readonly ctaLink?: Maybe<Scalars['String']['output']>;
  readonly ctaTarget?: Maybe<Scalars['String']['output']>;
  readonly ctaText?: Maybe<Scalars['String']['output']>;
  readonly webViewLink?: Maybe<Scalars['String']['output']>;
};

export type ApiTicketSectionContainer = {
  readonly __typename: 'TicketSectionContainer';
  readonly bottomCta?: Maybe<ApiCallToAction>;
  readonly cards?: Maybe<ReadonlyArray<ApiTicketCards>>;
  readonly layout?: Maybe<Scalars['String']['output']>;
  readonly sectionTitle?: Maybe<Scalars['String']['output']>;
  readonly topCta?: Maybe<ApiCallToAction>;
};

export type ApiToolTipComponent = {
  readonly __typename: 'ToolTipComponent';
  readonly detailCopy?: Maybe<Scalars['String']['output']>;
  readonly detailCopyRichText?: Maybe<ReadonlyArray<Maybe<ApiNewsArticleNode>>>;
  readonly header: Scalars['String']['output'];
  readonly id?: Maybe<ApiRyder_Cup_Ranking_Tooltip>;
  readonly logo: Scalars['String']['output'];
};

export type ApiTopicStoriesPillConfig = {
  readonly __typename: 'TopicStoriesPillConfig';
  readonly label: Scalars['String']['output'];
};

export type ApiToughestCourseRoundPills = {
  readonly __typename: 'ToughestCourseRoundPills';
  readonly display: Scalars['String']['output'];
  readonly queryVal: ApiToughestRound;
};

export type ApiToughestRound =
  | 'ALL'
  | 'FOUR'
  | 'ONE'
  | 'THREE'
  | 'TWO';

export type ApiTourBoundAsset = {
  readonly __typename: 'TourBoundAsset';
  readonly tourBoundLogo?: Maybe<Scalars['String']['output']>;
  readonly tourBoundLogoDark?: Maybe<Scalars['String']['output']>;
};

export type ApiTourCategories = {
  readonly __typename: 'TourCategories';
  readonly categories: ReadonlyArray<ApiCategory>;
  readonly tourCode: ApiTourCode;
};

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

export type ApiTourCupCombined = {
  readonly __typename: 'TourCupCombined';
  readonly bannerMessage?: Maybe<ApiLeaderboardMessage>;
  readonly columnHeaders: ReadonlyArray<Scalars['String']['output']>;
  readonly cutOffButtonText?: Maybe<Scalars['String']['output']>;
  readonly cutOffNumber?: Maybe<Scalars['Int']['output']>;
  readonly description: Scalars['String']['output'];
  readonly detailCopy: Scalars['String']['output'];
  readonly fixedHeaders: Scalars['Int']['output'];
  readonly id: Scalars['ID']['output'];
  /** @deprecated Use logoAsset */
  readonly logo: Scalars['String']['output'];
  readonly logoAsset: ApiImageAsset;
  readonly message?: Maybe<Scalars['String']['output']>;
  readonly options: ApiTourCupType;
  readonly partner?: Maybe<Scalars['String']['output']>;
  readonly partnerLink?: Maybe<Scalars['String']['output']>;
  readonly players: ReadonlyArray<ApiTourCupCombinedRow>;
  readonly pointsEyebrow?: Maybe<Scalars['String']['output']>;
  readonly projectedLive: Scalars['Boolean']['output'];
  readonly projectedTitle: Scalars['String']['output'];
  readonly rankEyebrow?: Maybe<Scalars['String']['output']>;
  readonly rankingsHeader: Scalars['String']['output'];
  readonly season: Scalars['String']['output'];
  readonly title: Scalars['String']['output'];
  readonly tournamentPills: ReadonlyArray<ApiStatTournamentPill>;
  readonly winner?: Maybe<ApiTourCupCombinedWinner>;
  readonly yearPills: ReadonlyArray<ApiStatYearPills>;
};

export type ApiTourCupCombinedData = {
  readonly __typename: 'TourCupCombinedData';
  readonly event: Scalars['String']['output'];
  /** @deprecated Use logoAsset */
  readonly logo?: Maybe<Scalars['String']['output']>;
  readonly logoAsset?: Maybe<ApiImageAsset>;
  /** @deprecated Use logoDarkAsset */
  readonly logoDark?: Maybe<Scalars['String']['output']>;
  readonly logoDarkAsset?: Maybe<ApiImageAsset>;
  readonly movement: ApiCupRankMovementDirection;
  readonly movementAmount: Scalars['String']['output'];
  readonly official: Scalars['String']['output'];
  readonly projected: Scalars['String']['output'];
};

export type ApiTourCupCombinedInfo = {
  readonly __typename: 'TourCupCombinedInfo';
  /** @deprecated Use logoAsset */
  readonly logo?: Maybe<Scalars['String']['output']>;
  readonly logoAsset?: Maybe<ApiImageAsset>;
  /** @deprecated Use logoDarkAsset */
  readonly logoDark?: Maybe<Scalars['String']['output']>;
  readonly logoDarkAsset?: Maybe<ApiImageAsset>;
  readonly sortValue: Scalars['Int']['output'];
  readonly text: Scalars['String']['output'];
  readonly toolTip?: Maybe<Scalars['String']['output']>;
};

export type ApiTourCupCombinedPlayer = {
  readonly __typename: 'TourCupCombinedPlayer';
  readonly columnData: ReadonlyArray<Scalars['String']['output']>;
  readonly country: Scalars['String']['output'];
  readonly countryFlag: Scalars['String']['output'];
  readonly displayName: Scalars['String']['output'];
  readonly firstName: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
  readonly lastName: Scalars['String']['output'];
  readonly officialSort: Scalars['Int']['output'];
  readonly pointData?: Maybe<ApiTourCupCombinedData>;
  readonly previousWeekRank: Scalars['String']['output'];
  readonly projectedSort: Scalars['Int']['output'];
  /** @deprecated Use rankLogoDarkAsset */
  readonly rankLogoDark?: Maybe<Scalars['String']['output']>;
  readonly rankLogoDarkAsset?: Maybe<ApiImageAsset>;
  /** @deprecated Use rankLogoLightAsset */
  readonly rankLogoLight?: Maybe<Scalars['String']['output']>;
  readonly rankLogoLightAsset?: Maybe<ApiImageAsset>;
  readonly rankingData?: Maybe<ApiTourCupCombinedData>;
  readonly shortName: Scalars['String']['output'];
  readonly thisWeekRank: Scalars['String']['output'];
  readonly tourBound?: Maybe<Scalars['Boolean']['output']>;
};

export type ApiTourCupCombinedRow = ApiTourCupCombinedInfo | ApiTourCupCombinedPlayer;

export type ApiTourCupCombinedTotal = {
  readonly __typename: 'TourCupCombinedTotal';
  readonly label: Scalars['String']['output'];
  readonly value: Scalars['String']['output'];
};

export type ApiTourCupCombinedWinner = {
  readonly __typename: 'TourCupCombinedWinner';
  readonly country: Scalars['String']['output'];
  readonly countryFlag: Scalars['String']['output'];
  readonly displayName: Scalars['String']['output'];
  readonly earnings: Scalars['String']['output'];
  readonly firstName: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
  readonly lastName: Scalars['String']['output'];
  readonly rank: Scalars['String']['output'];
  readonly shortName: Scalars['String']['output'];
  readonly totals: ReadonlyArray<ApiTourCupCombinedTotal>;
};

export type ApiTourCupRankingData = ApiSegmentedCupRankingWrapper | ApiStandardCupRanking;

export type ApiTourCupRankingEvent = {
  readonly __typename: 'TourCupRankingEvent';
  readonly bannerMessage?: Maybe<ApiLeaderboardMessage>;
  readonly description: Scalars['String']['output'];
  readonly detailCopy?: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly live: Scalars['Boolean']['output'];
  /** @deprecated Use logoAsset */
  readonly logo: Scalars['String']['output'];
  readonly logoAsset: ApiImageAsset;
  /** @deprecated Use logoDarkAsset */
  readonly logoDark: Scalars['String']['output'];
  readonly logoDarkAsset: ApiImageAsset;
  readonly options: ApiTourCupType;
  readonly partner?: Maybe<Scalars['String']['output']>;
  readonly partnerLink?: Maybe<Scalars['String']['output']>;
  readonly rankings: ReadonlyArray<ApiCupRankingPlayerWrapper>;
  readonly rankingsHeader: Scalars['String']['output'];
  readonly showInLeaderboard: Scalars['Boolean']['output'];
  readonly standings: ApiTourCupRankingData;
  readonly title: Scalars['String']['output'];
  readonly webviewBrowserControls?: Maybe<Scalars['Boolean']['output']>;
  readonly webviewUrl?: Maybe<Scalars['String']['output']>;
  readonly winner?: Maybe<ApiTourCupWinner>;
};

export type ApiTourCupSplit = {
  readonly __typename: 'TourCupSplit';
  readonly bannerMessage?: Maybe<ApiLeaderboardMessage>;
  readonly columnHeaders: ReadonlyArray<Scalars['String']['output']>;
  readonly cutOffButtonText?: Maybe<Scalars['String']['output']>;
  readonly cutOffNumber?: Maybe<Scalars['Int']['output']>;
  readonly description: Scalars['String']['output'];
  readonly detailCopy: Scalars['String']['output'];
  readonly fixedHeaders: Scalars['Int']['output'];
  readonly id: Scalars['ID']['output'];
  /** @deprecated Use logoAsset */
  readonly logo: Scalars['String']['output'];
  readonly logoAsset: ApiImageAsset;
  readonly message?: Maybe<Scalars['String']['output']>;
  readonly officialPlayers: ReadonlyArray<ApiTourCupCombinedRow>;
  readonly options: ApiTourCupType;
  readonly partner?: Maybe<Scalars['String']['output']>;
  readonly partnerLink?: Maybe<Scalars['String']['output']>;
  readonly pointsEyebrow?: Maybe<Scalars['String']['output']>;
  readonly projectedLive: Scalars['Boolean']['output'];
  readonly projectedPlayers: ReadonlyArray<ApiTourCupCombinedRow>;
  readonly projectedTitle: Scalars['String']['output'];
  readonly rankEyebrow?: Maybe<Scalars['String']['output']>;
  readonly rankingsHeader: Scalars['String']['output'];
  readonly season: Scalars['String']['output'];
  readonly title: Scalars['String']['output'];
  readonly tournamentPills: ReadonlyArray<ApiStatTournamentPill>;
  readonly winner?: Maybe<ApiTourCupCombinedWinner>;
  readonly yearPills: ReadonlyArray<ApiStatYearPills>;
};

export type ApiTourCupType =
  | 'OFFICIAL'
  | 'OFFICIAL_AND_PROJECTED'
  | 'PROJECTED';

export type ApiTourCupWinner = {
  readonly __typename: 'TourCupWinner';
  readonly id: Scalars['String']['output'];
  readonly name: Scalars['String']['output'];
  readonly playerCountry: Scalars['String']['output'];
  readonly totalLabel: Scalars['String']['output'];
  readonly totalValue: Scalars['String']['output'];
};

export type ApiTourPills = {
  readonly __typename: 'TourPills';
  readonly displayName: Scalars['String']['output'];
  readonly tourCode?: Maybe<ApiTourCode>;
};

export type ApiTourSponsor = {
  readonly __typename: 'TourSponsor';
  readonly _path?: Maybe<Scalars['String']['output']>;
  readonly sponsorDescription: ReadonlyArray<ApiTourSponsorDescription>;
  readonly sponsorImage?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use sponsorLogoAsset */
  readonly sponsorLogo?: Maybe<Scalars['String']['output']>;
  readonly sponsorLogoAsset: ApiImageAsset;
  readonly sponsorName?: Maybe<Scalars['String']['output']>;
  readonly sponsorWebsiteUrl?: Maybe<Scalars['String']['output']>;
};

export type ApiTourSponsorDescription = ApiNewsArticleImage | ApiNewsArticleLineBreak | ApiNewsArticleLink | ApiNewsArticleParagraph | ApiNewsArticleText;

export type ApiTourcastCourse = {
  readonly __typename: 'TourcastCourse';
  readonly courseId: Scalars['String']['output'];
  readonly holes: ReadonlyArray<ApiTourcastHole>;
  readonly playoff?: Maybe<ApiTourcastPlayoff>;
};

export type ApiTourcastGroup = {
  readonly __typename: 'TourcastGroup';
  readonly groupName: Scalars['String']['output'];
  readonly groupNum: Scalars['Int']['output'];
  readonly location: Scalars['String']['output'];
  readonly players: ReadonlyArray<ApiTourcastPlayer>;
  readonly roundNum: Scalars['Int']['output'];
  readonly teeTime: Scalars['AWSTimestamp']['output'];
  readonly tourcastURI?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastURL?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastURLWeb?: Maybe<Scalars['String']['output']>;
};

export type ApiTourcastHole = {
  readonly __typename: 'TourcastHole';
  readonly cupMatches?: Maybe<ReadonlyArray<ApiCupLeaderboardMatch>>;
  readonly displayRank: Scalars['String']['output'];
  readonly groups: ReadonlyArray<ApiTourcastGroup>;
  readonly holeNum: Scalars['Int']['output'];
  readonly matches: ReadonlyArray<ApiHoleMatch>;
  readonly par: Scalars['String']['output'];
  readonly rank: Scalars['Int']['output'];
  readonly round: Scalars['String']['output'];
  readonly scoringAvg: Scalars['String']['output'];
  readonly teamGroups: ReadonlyArray<ApiTourcastTeamGroup>;
  readonly yardage: Scalars['String']['output'];
};

export type ApiTourcastPlayer = {
  readonly __typename: 'TourcastPlayer';
  readonly amateur: Scalars['Boolean']['output'];
  readonly backNine: Scalars['Boolean']['output'];
  readonly country: Scalars['String']['output'];
  readonly countryCode: Scalars['String']['output'];
  readonly displayName: Scalars['String']['output'];
  readonly playerId: Scalars['String']['output'];
  readonly roundScore: Scalars['String']['output'];
  readonly shortName: Scalars['String']['output'];
  readonly thru: Scalars['String']['output'];
  readonly total: Scalars['String']['output'];
};

export type ApiTourcastPlayoff = {
  readonly __typename: 'TourcastPlayoff';
  readonly holeNum: Scalars['Int']['output'];
  readonly playOffHole: Scalars['Int']['output'];
  readonly players: ReadonlyArray<ApiTourcastPlayoffPlayer>;
  readonly tourcastURI?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastURL?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastURLWeb?: Maybe<Scalars['String']['output']>;
};

export type ApiTourcastPlayoffPlayer = {
  readonly __typename: 'TourcastPlayoffPlayer';
  readonly countryCode: Scalars['String']['output'];
  readonly displayName: Scalars['String']['output'];
  readonly playerId: Scalars['ID']['output'];
  readonly shortName: Scalars['String']['output'];
};

export type ApiTourcastTable = {
  readonly __typename: 'TourcastTable';
  readonly courses: ReadonlyArray<ApiTourcastCourse>;
  readonly informationSections: ReadonlyArray<ApiInformationSection>;
  readonly tournamentId: Scalars['ID']['output'];
  readonly winner?: Maybe<ApiTcWinner>;
};

export type ApiTourcastTeam = {
  readonly __typename: 'TourcastTeam';
  readonly backNine: Scalars['Boolean']['output'];
  readonly players: ReadonlyArray<ApiTourcastPlayer>;
  readonly roundScore: Scalars['String']['output'];
  readonly teamId: Scalars['ID']['output'];
  readonly thru: Scalars['String']['output'];
  readonly total: Scalars['String']['output'];
};

export type ApiTourcastTeamGroup = {
  readonly __typename: 'TourcastTeamGroup';
  readonly groupName: Scalars['String']['output'];
  readonly groupNum: Scalars['Int']['output'];
  readonly location: Scalars['String']['output'];
  readonly roundNum: Scalars['Int']['output'];
  readonly teams: ReadonlyArray<ApiTourcastTeam>;
  readonly teeTime: Scalars['AWSTimestamp']['output'];
  readonly tourcastURI?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastURL?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastURLWeb?: Maybe<Scalars['String']['output']>;
};

export type ApiTournament = {
  readonly __typename: 'Tournament';
  /** @deprecated Use beautyImageAsset */
  readonly beautyImage: Scalars['String']['output'];
  readonly beautyImageAsset: ApiImageAsset;
  readonly city: Scalars['String']['output'];
  readonly conductedByLabel?: Maybe<Scalars['String']['output']>;
  readonly conductedByLink?: Maybe<Scalars['String']['output']>;
  readonly country: Scalars['String']['output'];
  readonly courses: ReadonlyArray<ApiCourse>;
  readonly currentRound: Scalars['Int']['output'];
  readonly disabledScorecardTabs: ReadonlyArray<ApiScorecardTabFeature>;
  readonly displayDate: Scalars['String']['output'];
  readonly events: ReadonlyArray<ApiEvent>;
  readonly features?: Maybe<ReadonlyArray<ApiTournamentFeature>>;
  readonly formatType: ApiFormatType;
  readonly headshotBaseUrl?: Maybe<Scalars['String']['output']>;
  readonly hideRolexClock: Scalars['Boolean']['output'];
  readonly hideSov: Scalars['Boolean']['output'];
  readonly howItWorks?: Maybe<Scalars['String']['output']>;
  readonly howItWorksPill?: Maybe<Scalars['String']['output']>;
  readonly howItWorksWebview?: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  /** @deprecated use howItWorks */
  readonly infoPath?: Maybe<Scalars['String']['output']>;
  /** @deprecated use howItWorksWebview */
  readonly infoPathWebview?: Maybe<Scalars['String']['output']>;
  readonly leaderboardTakeover: Scalars['Boolean']['output'];
  readonly pdfUrl?: Maybe<Scalars['String']['output']>;
  readonly rightRailConfig?: Maybe<ApiTournamentRightRailConfig>;
  readonly roundDisplay: Scalars['String']['output'];
  readonly roundStatus: ApiRoundStatus;
  readonly roundStatusColor: ApiRoundStatusColor;
  readonly roundStatusDisplay: Scalars['String']['output'];
  readonly scoredLevel: ApiScoringLevel;
  readonly seasonYear: Scalars['String']['output'];
  readonly shouldSubscribe?: Maybe<Scalars['Boolean']['output']>;
  readonly state: Scalars['String']['output'];
  readonly ticketsEnabled: Scalars['Boolean']['output'];
  readonly ticketsURL?: Maybe<Scalars['String']['output']>;
  readonly timezone: Scalars['String']['output'];
  readonly tournamentCategoryInfo?: Maybe<ApiTournamentCategoryInfo>;
  readonly tournamentLocation: Scalars['String']['output'];
  /** @deprecated use tournamentLogoAsset */
  readonly tournamentLogo: ReadonlyArray<Scalars['String']['output']>;
  readonly tournamentLogoAsset: ReadonlyArray<ApiImageAsset>;
  readonly tournamentName: Scalars['String']['output'];
  readonly tournamentSiteURL?: Maybe<Scalars['String']['output']>;
  readonly tournamentStatus: ApiTournamentStatus;
  readonly useTournamentSiteURL: Scalars['Boolean']['output'];
  readonly weather?: Maybe<ApiTournamentWeather>;
};

export type ApiTournamentActivation = {
  readonly __typename: 'TournamentActivation';
  readonly data: Scalars['String']['output'];
  readonly description: Scalars['String']['output'];
  readonly detail?: Maybe<Scalars['String']['output']>;
  /** @deprecated use sponsorLogoAsset */
  readonly sponsorLogo: Scalars['String']['output'];
  readonly sponsorLogoAsset: ApiImageAsset;
  /** @deprecated use sponsorLogoDarkAsset */
  readonly sponsorLogoDark: Scalars['String']['output'];
  readonly sponsorLogoDarkAsset: ApiImageAsset;
  readonly title: Scalars['String']['output'];
};

export type ApiTournamentCategory =
  | 'PLAYOFF'
  | 'SIGNATURE';

export type ApiTournamentCategoryInfo = {
  readonly __typename: 'TournamentCategoryInfo';
  readonly label: Scalars['String']['output'];
  /** @deprecated use logoDarkAsset */
  readonly logoDark: Scalars['String']['output'];
  readonly logoDarkAsset: ApiImageAsset;
  /** @deprecated use logoLightAsset */
  readonly logoLight: Scalars['String']['output'];
  readonly logoLightAsset: ApiImageAsset;
  readonly type: ApiTournamentCategory;
};

export type ApiTournamentChampion = {
  readonly __typename: 'TournamentChampion';
  readonly countryCode: Scalars['String']['output'];
  readonly displayName: Scalars['String']['output'];
  readonly displaySeason: Scalars['String']['output'];
  readonly headshot?: Maybe<Scalars['String']['output']>;
  readonly playerId: Scalars['ID']['output'];
  readonly score: Scalars['String']['output'];
  readonly seed?: Maybe<Scalars['String']['output']>;
  readonly title: Scalars['String']['output'];
  readonly total: Scalars['String']['output'];
  readonly year: Scalars['Int']['output'];
};

export type ApiTournamentCourse = {
  readonly __typename: 'TournamentCourse';
  readonly city?: Maybe<Scalars['String']['output']>;
  readonly country?: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly image: Scalars['String']['output'];
  readonly name: Scalars['String']['output'];
  readonly overview: ReadonlyArray<ApiInformationData>;
  readonly state?: Maybe<Scalars['String']['output']>;
};

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

export type ApiTournamentGroupLocation = {
  readonly __typename: 'TournamentGroupLocation';
  readonly groupLocations: ReadonlyArray<ApiGroupLocationData>;
  readonly round: Scalars['Int']['output'];
  readonly tournamentId: Scalars['String']['output'];
};

export type ApiTournamentHistory = {
  readonly __typename: 'TournamentHistory';
  readonly courses: ApiTournamentHistoryCourseTable;
  readonly defendingChampion: ApiTournamentHistoryPlayerTable;
  readonly pastChampions: ApiTournamentHistoryPlayerTable;
  readonly tourCode: ApiTourCode;
  readonly tournamentName: Scalars['String']['output'];
  readonly tournamentNum: Scalars['String']['output'];
};

export type ApiTournamentHistoryCourse = {
  readonly __typename: 'TournamentHistoryCourse';
  readonly courseId: Scalars['String']['output'];
  readonly courseImage: Scalars['String']['output'];
  readonly courseName: Scalars['String']['output'];
  readonly displaySeason: Scalars['String']['output'];
  readonly par: Scalars['String']['output'];
  readonly yardage: Scalars['String']['output'];
  readonly year: Scalars['Int']['output'];
};

export type ApiTournamentHistoryCourseTable = {
  readonly __typename: 'TournamentHistoryCourseTable';
  readonly courses: ReadonlyArray<ApiTournamentHistoryCourse>;
  readonly header: Scalars['String']['output'];
};

export type ApiTournamentHistoryPlayer = {
  readonly __typename: 'TournamentHistoryPlayer';
  readonly countryFlag: Scalars['String']['output'];
  readonly displaySeason: Scalars['String']['output'];
  readonly playerId: Scalars['String']['output'];
  readonly playerName: Scalars['String']['output'];
  readonly relativeToPar: Scalars['String']['output'];
  readonly totalScore: Scalars['String']['output'];
  readonly year: Scalars['Int']['output'];
};

export type ApiTournamentHistoryPlayerTable = {
  readonly __typename: 'TournamentHistoryPlayerTable';
  readonly header: Scalars['String']['output'];
  readonly players: ReadonlyArray<ApiTournamentHistoryPlayer>;
};

export type ApiTournamentHoleStats = {
  readonly __typename: 'TournamentHoleStats';
  readonly courses: ReadonlyArray<ApiCourseStat>;
  readonly tournamentId: Scalars['ID']['output'];
};

export type ApiTournamentLocation = {
  readonly __typename: 'TournamentLocation';
  readonly city?: Maybe<Scalars['String']['output']>;
  readonly country?: Maybe<Scalars['String']['output']>;
  readonly state?: Maybe<Scalars['String']['output']>;
};

export type ApiTournamentOdds = {
  readonly __typename: 'TournamentOdds';
  readonly availableMarkets: ReadonlyArray<ApiAvailableMarket>;
  readonly country: Scalars['String']['output'];
  readonly drawersEnabled: Scalars['Boolean']['output'];
  readonly id: Scalars['ID']['output'];
  /** @deprecated Use banners from config these values are incorrect */
  readonly oddsBanner: ApiOddsBanner;
  readonly oddsMessage?: Maybe<ApiOddsMessage>;
  readonly oddsProvider: ApiOddsProvider;
};

export type ApiTournamentOddsCompressed = {
  readonly __typename: 'TournamentOddsCompressed';
  readonly id: Scalars['ID']['output'];
  readonly tournamentOddsPayload: Scalars['String']['output'];
};

export type ApiTournamentOddsCompressedV2 = {
  readonly __typename: 'TournamentOddsCompressedV2';
  readonly id: Scalars['ID']['output'];
  readonly oddsPayload: Scalars['String']['output'];
};

export type ApiTournamentOddsPlayer = {
  readonly __typename: 'TournamentOddsPlayer';
  readonly oddsOptionId?: Maybe<Scalars['String']['output']>;
  readonly oddsSort: Scalars['Float']['output'];
  readonly oddsSwing?: Maybe<ApiOddsSwing>;
  readonly oddsToWin: Scalars['String']['output'];
  readonly playerId: Scalars['ID']['output'];
};

export type ApiTournamentOddsToWin = {
  readonly __typename: 'TournamentOddsToWin';
  readonly players: ReadonlyArray<ApiTournamentOddsPlayer>;
  readonly tournamentId: Scalars['ID']['output'];
  /** @deprecated use tournamentLogoAsset */
  readonly tournamentLogo: Scalars['String']['output'];
  readonly tournamentLogoAsset: ApiImageAsset;
  readonly tournamentName: Scalars['String']['output'];
};

export type ApiTournamentOddsV2 = {
  readonly __typename: 'TournamentOddsV2';
  readonly drawersEnabled: Scalars['Boolean']['output'];
  readonly id: Scalars['ID']['output'];
  readonly marketPills: ReadonlyArray<ApiMarketPill>;
  readonly markets: ReadonlyArray<ApiMarket>;
  readonly message?: Maybe<ApiOddsMessage>;
  /**   tournamentId-provider */
  readonly provider: ApiOddsProvider;
  /**   other markets you can */
  readonly round: Scalars['String']['output'];
  readonly tournamentId: Scalars['String']['output'];
};

export type ApiTournamentOverview = {
  readonly __typename: 'TournamentOverview';
  readonly activation?: Maybe<ApiTournamentActivation>;
  readonly androidTicketmasterApiKey?: Maybe<Scalars['String']['output']>;
  readonly androidTicketmasterScheme?: Maybe<Scalars['String']['output']>;
  readonly augmentedReality?: Maybe<ApiAugmentedRealityConfig>;
  /** @deprecated Use beautyImageAsset */
  readonly beautyImage: Scalars['String']['output'];
  readonly beautyImageAsset: ApiImageAsset;
  readonly courses: ReadonlyArray<ApiTournamentCourse>;
  readonly defendingChampion?: Maybe<ApiTournamentChampion>;
  readonly defendingTeamChampion?: Maybe<ReadonlyArray<Maybe<ApiTournamentChampion>>>;
  readonly eventGuideURL?: Maybe<Scalars['String']['output']>;
  readonly formatType: ApiFormatType;
  readonly iosTicketmasterApiKey?: Maybe<Scalars['String']['output']>;
  readonly overview: ReadonlyArray<ApiInformationData>;
  readonly pastChampions: ReadonlyArray<ApiTournamentChampion>;
  readonly pastTeamChampions?: Maybe<ReadonlyArray<Maybe<ApiTournamentTeamChampion>>>;
  readonly shareURL?: Maybe<Scalars['String']['output']>;
  readonly ticketmasterAttractionId?: Maybe<Scalars['String']['output']>;
  readonly ticketsURL?: Maybe<Scalars['String']['output']>;
  readonly tourcastURI?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastURL?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastURLWeb?: Maybe<Scalars['String']['output']>;
  readonly tournamentCategoryInfo?: Maybe<ApiTournamentCategoryInfo>;
  readonly tournamentResultsMessage?: Maybe<ApiTournamentResultsMessage>;
  readonly webviewBrowserControls: Scalars['Boolean']['output'];
};

export type ApiTournamentOverviewInfo = {
  readonly __typename: 'TournamentOverviewInfo';
  readonly cutsMade: Scalars['Int']['output'];
  readonly cutsMissed: Scalars['Int']['output'];
  readonly disqualified: Scalars['Int']['output'];
  readonly events: Scalars['Int']['output'];
  readonly money: Scalars['Int']['output'];
  readonly runnerUp: Scalars['Int']['output'];
  readonly second: Scalars['Int']['output'];
  readonly third: Scalars['Int']['output'];
  readonly top5: Scalars['Int']['output'];
  readonly top10: Scalars['Int']['output'];
  readonly top25: Scalars['Int']['output'];
  readonly wins: Scalars['Int']['output'];
  readonly withdrew: Scalars['Int']['output'];
};

export type ApiTournamentPlayoffScorecards = {
  readonly __typename: 'TournamentPlayoffScorecards';
  readonly playoffs: ReadonlyArray<ApiPlayoffScorecard>;
  readonly tournamentId: Scalars['ID']['output'];
};

export type ApiTournamentRecap = {
  readonly __typename: 'TournamentRecap';
  readonly courses: ReadonlyArray<ApiTournamentRecapCourse>;
  readonly durationDate: Scalars['String']['output'];
  readonly newsArticles: ReadonlyArray<ApiNewsArticle>;
  readonly tournamentId: Scalars['String']['output'];
  readonly videos: ReadonlyArray<ApiVideo>;
};

export type ApiTournamentRecapCourse = {
  readonly __typename: 'TournamentRecapCourse';
  readonly city: Scalars['String']['output'];
  readonly country?: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly image: Scalars['String']['output'];
  readonly name: Scalars['String']['output'];
  readonly par: Scalars['String']['output'];
  readonly state?: Maybe<Scalars['String']['output']>;
  readonly yardage: Scalars['String']['output'];
};

export type ApiTournamentResultOverview = {
  readonly __typename: 'TournamentResultOverview';
  readonly courseCity: Scalars['String']['output'];
  readonly courseCountry: Scalars['String']['output'];
  readonly courseName: Scalars['String']['output'];
  readonly courseState?: Maybe<Scalars['String']['output']>;
  readonly displaySeason: Scalars['String']['output'];
  readonly tournamentId: Scalars['String']['output'];
  readonly tournamentLogo: Scalars['String']['output'];
  readonly tournamentLogoAsset: ApiImageAsset;
  readonly tournamentName: Scalars['String']['output'];
};

export type ApiTournamentResultPill = {
  readonly __typename: 'TournamentResultPill';
  readonly tournamentName: Scalars['String']['output'];
  readonly tournamentNum: Scalars['ID']['output'];
};

export type ApiTournamentResults = {
  readonly __typename: 'TournamentResults';
  readonly cupEyebrowText: Scalars['String']['output'];
  readonly overview: ReadonlyArray<ApiPlayerProfileInfoItem>;
  readonly overviewInfo?: Maybe<ApiTournamentOverviewInfo>;
  readonly tournamentNum: Scalars['ID']['output'];
  readonly tournamentOverview?: Maybe<ApiTournamentResultOverview>;
  readonly tournaments: ReadonlyArray<ApiPlayerProfileTournamentRow>;
};

export type ApiTournamentResultsMessage = {
  readonly __typename: 'TournamentResultsMessage';
  readonly message?: Maybe<Scalars['String']['output']>;
};

export type ApiTournamentRightRailConfig = {
  readonly __typename: 'TournamentRightRailConfig';
  readonly buttonLink?: Maybe<Scalars['String']['output']>;
  readonly buttonText?: Maybe<Scalars['String']['output']>;
  readonly imageAltText: Scalars['String']['output'];
  readonly imageUrl: Scalars['String']['output'];
};

export type ApiTournamentStatus =
  | 'COMPLETED'
  | 'IN_PROGRESS'
  | 'NOT_STARTED';

export type ApiTournamentTeamChampion = {
  readonly __typename: 'TournamentTeamChampion';
  readonly players: ReadonlyArray<ApiTournamentChampion>;
};

export type ApiTournamentWeather = {
  readonly __typename: 'TournamentWeather';
  readonly condition: ApiWeatherCondition;
  readonly humidity: Scalars['String']['output'];
  /** @deprecated use logoAsset */
  readonly logo?: Maybe<Scalars['String']['output']>;
  readonly logoAccessibility: Scalars['String']['output'];
  readonly logoAsset: ApiImageAsset;
  /** @deprecated use logoDarkAsset */
  readonly logoDark?: Maybe<Scalars['String']['output']>;
  readonly logoDarkAsset: ApiImageAsset;
  readonly precipitation: Scalars['String']['output'];
  readonly tempC: Scalars['String']['output'];
  readonly tempF: Scalars['String']['output'];
  readonly windDirection: ApiWindDirection;
  readonly windSpeedKPH: Scalars['String']['output'];
  readonly windSpeedMPH: Scalars['String']['output'];
};

export type ApiTournamentsPillConfig = {
  readonly __typename: 'TournamentsPillConfig';
  readonly currentSeason: Scalars['Int']['output'];
};

export type ApiTspPlayer = {
  readonly __typename: 'TspPlayer';
  readonly abbreviations: Scalars['String']['output'];
  readonly abbreviationsAccessibilityText: Scalars['String']['output'];
  readonly amateur: Scalars['Boolean']['output'];
  readonly country: Scalars['String']['output'];
  readonly countryFlag: Scalars['String']['output'];
  readonly displayName: Scalars['String']['output'];
  readonly firstName: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
  readonly lastName: Scalars['String']['output'];
  readonly lineColor: Scalars['String']['output'];
  readonly official: Scalars['String']['output'];
  readonly projected: Scalars['String']['output'];
  readonly rankLogoDark?: Maybe<Scalars['String']['output']>;
  readonly rankLogoLight?: Maybe<Scalars['String']['output']>;
  readonly rankingMovement: ApiCupRankMovementDirection;
  readonly rankingMovementAmount: Scalars['String']['output'];
  readonly shortName: Scalars['String']['output'];
};

export type ApiTspPlayerHole = {
  readonly __typename: 'TspPlayerHole';
  readonly inTheHoleTimestamp?: Maybe<Scalars['AWSTimestamp']['output']>;
  readonly playComplete?: Maybe<Scalars['Boolean']['output']>;
  readonly playerId: Scalars['ID']['output'];
  readonly playerTotal?: Maybe<Scalars['String']['output']>;
  readonly statsScoreId?: Maybe<Scalars['String']['output']>;
  readonly status?: Maybe<ApiHoleScoreStatus>;
  readonly strokes: Scalars['Int']['output'];
  readonly strokesValue: Scalars['String']['output'];
};

export type ApiTspPlayoff = {
  readonly __typename: 'TspPlayoff';
  readonly currentHole: Scalars['Int']['output'];
  readonly holes: ReadonlyArray<ApiPlayoffHole>;
  readonly location?: Maybe<Scalars['String']['output']>;
  readonly teams: ReadonlyArray<ApiPlayoffTeams>;
  readonly thru?: Maybe<Scalars['String']['output']>;
};

export type ApiTspScPlayer = {
  readonly __typename: 'TspSCPlayer';
  readonly abbreviations: Scalars['String']['output'];
  readonly abbreviationsAccessibilityText: Scalars['String']['output'];
  readonly amateur: Scalars['Boolean']['output'];
  readonly country: Scalars['String']['output'];
  readonly countryFlag: Scalars['String']['output'];
  readonly displayName: Scalars['String']['output'];
  readonly firstName: Scalars['String']['output'];
  /** @deprecated URL should be built using player ID */
  readonly headshot: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
  readonly lastName: Scalars['String']['output'];
  readonly lineColor: Scalars['String']['output'];
  readonly shortName: Scalars['String']['output'];
  readonly superShortName?: Maybe<Scalars['String']['output']>;
};

export type ApiTspStrokePlayer = {
  readonly __typename: 'TspStrokePlayer';
  readonly color?: Maybe<Scalars['String']['output']>;
  readonly displayName?: Maybe<Scalars['String']['output']>;
  readonly firstName?: Maybe<Scalars['String']['output']>;
  readonly lastName?: Maybe<Scalars['String']['output']>;
  readonly playerId?: Maybe<Scalars['Int']['output']>;
  readonly playerIdString?: Maybe<Scalars['String']['output']>;
  readonly shortName?: Maybe<Scalars['String']['output']>;
};

export type ApiTspTeamHole = {
  readonly __typename: 'TspTeamHole';
  readonly inTheHoleTimestamp?: Maybe<Scalars['AWSTimestamp']['output']>;
  readonly playComplete?: Maybe<Scalars['Boolean']['output']>;
  readonly statsScoreId?: Maybe<Scalars['String']['output']>;
  readonly status?: Maybe<ApiHoleScoreStatus>;
  readonly strokes: Scalars['Int']['output'];
  readonly strokesValue: Scalars['String']['output'];
  readonly teamId: Scalars['ID']['output'];
  readonly teamTotal?: Maybe<Scalars['String']['output']>;
};

export type ApiTspTeamRow = {
  readonly __typename: 'TspTeamRow';
  readonly backNine: Scalars['Boolean']['output'];
  readonly courseId: Scalars['String']['output'];
  readonly currentRound: Scalars['Int']['output'];
  readonly groupNumber: Scalars['Int']['output'];
  readonly leaderboardSortOrder: Scalars['Int']['output'];
  readonly movementAmount: Scalars['String']['output'];
  readonly movementDirection: ApiLeaderboardMovement;
  readonly oddsOptionId?: Maybe<Scalars['String']['output']>;
  readonly oddsSort?: Maybe<Scalars['Float']['output']>;
  readonly oddsSwing?: Maybe<ApiOddsSwing>;
  readonly oddsToWin?: Maybe<Scalars['String']['output']>;
  readonly players: ReadonlyArray<ApiTspPlayer>;
  readonly position: Scalars['String']['output'];
  readonly rounds: ReadonlyArray<Scalars['String']['output']>;
  readonly score: Scalars['String']['output'];
  readonly scoreSort: Scalars['Int']['output'];
  readonly startHole?: Maybe<Scalars['String']['output']>;
  readonly status?: Maybe<ApiPlayerState>;
  readonly teamId: Scalars['ID']['output'];
  readonly teamName: Scalars['String']['output'];
  readonly teamStoryContentInfo: ReadonlyArray<ApiTeamStoryContentInfo>;
  readonly teeTime: Scalars['AWSTimestamp']['output'];
  readonly thru: Scalars['String']['output'];
  readonly thruSort: Scalars['Int']['output'];
  readonly total: Scalars['String']['output'];
  readonly totalSort: Scalars['Int']['output'];
  readonly totalStrokes: Scalars['String']['output'];
};

export type ApiTspWinner = {
  readonly __typename: 'TspWinner';
  readonly points?: Maybe<Scalars['String']['output']>;
  readonly purse?: Maybe<Scalars['String']['output']>;
  readonly teamId: Scalars['ID']['output'];
  readonly totalScore: Scalars['String']['output'];
  readonly totalStrokes: Scalars['Int']['output'];
  readonly winningTeam: ReadonlyArray<ApiTspWinningPlayer>;
};

export type ApiTspWinningPlayer = {
  readonly __typename: 'TspWinningPlayer';
  readonly countryFlag: Scalars['String']['output'];
  readonly countryName: Scalars['String']['output'];
  readonly firstName: Scalars['String']['output'];
  /** @deprecated URL should be built using player ID */
  readonly headshot: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
  readonly lastName: Scalars['String']['output'];
};

export type ApiTwoColumn = {
  readonly __typename: 'TwoColumn';
  readonly sectionOne?: Maybe<ReadonlyArray<Maybe<ApiNewsArticleNode>>>;
  readonly sectionOneTitle?: Maybe<Scalars['String']['output']>;
  readonly sectionTwo?: Maybe<ReadonlyArray<Maybe<ApiNewsArticleNode>>>;
  readonly sectionTwoTitle?: Maybe<Scalars['String']['output']>;
};

export type ApiUniversityRankColor =
  | 'BLACK'
  | 'BLUE'
  | 'GOLD'
  | 'GRAY';

export type ApiUniversityRankingPlayer = {
  readonly __typename: 'UniversityRankingPlayer';
  readonly avg: Scalars['String']['output'];
  readonly country: Scalars['String']['output'];
  readonly displayName: Scalars['String']['output'];
  readonly events: Scalars['Int']['output'];
  readonly playerId: Scalars['ID']['output'];
  readonly rank: Scalars['Int']['output'];
  readonly rankColor: ApiUniversityRankColor;
  readonly rankingMovement: ApiCupRankMovementDirection;
  readonly rankingMovementAmount: Scalars['String']['output'];
  readonly rankingMovementAmountSort: Scalars['Int']['output'];
  readonly schoolName: Scalars['String']['output'];
  readonly top10: Scalars['Int']['output'];
  readonly tournaments: ReadonlyArray<ApiUniversityRankingsTournament>;
  readonly wins: Scalars['Int']['output'];
};

export type ApiUniversityRankings = {
  readonly __typename: 'UniversityRankings';
  readonly description: Scalars['String']['output'];
  readonly disclaimer?: Maybe<Scalars['String']['output']>;
  readonly displayYear: Scalars['String']['output'];
  readonly players: ReadonlyArray<ApiUniversityRankingPlayer>;
  readonly sponsorImage?: Maybe<Scalars['String']['output']>;
  readonly sponsorName: Scalars['String']['output'];
  readonly throughText: Scalars['String']['output'];
  readonly title: Scalars['String']['output'];
  readonly weekNum: Scalars['Int']['output'];
  readonly weekPills: ReadonlyArray<ApiStatWeekPill>;
  readonly year: Scalars['Int']['output'];
  readonly yearPills: ReadonlyArray<ApiStatYearPills>;
};

export type ApiUniversityRankingsTournament = {
  readonly __typename: 'UniversityRankingsTournament';
  readonly finishPosition: Scalars['String']['output'];
  readonly name: Scalars['String']['output'];
  readonly playedYear: Scalars['Int']['output'];
  readonly points: Scalars['String']['output'];
  readonly week: Scalars['Int']['output'];
};

export type ApiUniversityTotalPoints = {
  readonly __typename: 'UniversityTotalPoints';
  readonly description: Scalars['String']['output'];
  readonly footerInfo?: Maybe<ApiNewsArticleParagraph>;
  readonly headerInfo?: Maybe<ApiNewsArticleParagraph>;
  readonly headers: ReadonlyArray<Scalars['String']['output']>;
  readonly players: ReadonlyArray<ApiUniversityTotalPointsPlayer>;
  readonly season: Scalars['Int']['output'];
  readonly seasonNavigation: ReadonlyArray<ApiUniversityTotalPointsPill>;
  /** @deprecated use sponsorLogoAsset */
  readonly sponsorLogo?: Maybe<Scalars['String']['output']>;
  readonly sponsorLogoAsset: ApiImageAsset;
  readonly sponsorText?: Maybe<Scalars['String']['output']>;
  readonly title: Scalars['String']['output'];
  readonly week: Scalars['Int']['output'];
  readonly weekNavigation: ReadonlyArray<ApiUniversityTotalPointsPill>;
};

export type ApiUniversityTotalPointsPill = {
  readonly __typename: 'UniversityTotalPointsPill';
  readonly displayText: Scalars['String']['output'];
  readonly value: Scalars['Int']['output'];
};

export type ApiUniversityTotalPointsPlayer = {
  readonly __typename: 'UniversityTotalPointsPlayer';
  readonly data: ReadonlyArray<Scalars['String']['output']>;
  readonly playerId: Scalars['ID']['output'];
  readonly playerName: Scalars['String']['output'];
  readonly rank: Scalars['String']['output'];
  readonly rankSort: Scalars['Int']['output'];
  readonly rankingMovement: ApiCupRankMovementDirection;
  readonly rankingMovementAmount: Scalars['String']['output'];
  readonly rankingMovementAmountSort: Scalars['Int']['output'];
  readonly tournaments: ReadonlyArray<ApiUniversityRankingsTournament>;
};

export type ApiUnorderedListNode = {
  readonly __typename: 'UnorderedListNode';
  readonly historicalTournamentOddsArgs?: Maybe<ApiHistoricalTournamentOddsArgs>;
  readonly items: ReadonlyArray<ApiListItem>;
  readonly ordered?: Maybe<Scalars['Boolean']['output']>;
};

export type ApiUnsubscribeResponse = {
  readonly __typename: 'UnsubscribeResponse';
  readonly ok: Scalars['Boolean']['output'];
};

export type ApiUpcomingBroadcastNetwork = {
  readonly __typename: 'UpcomingBroadcastNetwork';
  readonly networks: ReadonlyArray<ApiBroadcastNetwork>;
  readonly tournamentId: Scalars['String']['output'];
};

export type ApiUpcomingBroadcastNetworks = {
  readonly __typename: 'UpcomingBroadcastNetworks';
  readonly upcomingNetworks: ReadonlyArray<ApiUpcomingBroadcastNetwork>;
};

export type ApiUpcomingMatch = {
  readonly __typename: 'UpcomingMatch';
  readonly isConsolationMatch: Scalars['Boolean']['output'];
  readonly matchId: Scalars['String']['output'];
  readonly potentialPlayers: ReadonlyArray<ApiUpcomingMatchPotentialPlayer>;
};

export type ApiUpcomingMatchPotentialPlayer = {
  readonly __typename: 'UpcomingMatchPotentialPlayer';
  readonly isKnown: Scalars['Boolean']['output'];
  readonly nameLabel: Scalars['String']['output'];
  readonly players: ReadonlyArray<ApiMpLeaderboardPlayer>;
  readonly relationshipLabel?: Maybe<Scalars['String']['output']>;
};

export type ApiVideo = {
  readonly __typename: 'Video';
  /** @deprecated No longer supported */
  readonly accountId?: Maybe<Scalars['String']['output']>;
  readonly categories?: Maybe<ReadonlyArray<ApiRyderCupContentCategories>>;
  readonly category: Scalars['String']['output'];
  readonly categoryDisplayName: Scalars['String']['output'];
  readonly contentTournamentId?: Maybe<Scalars['String']['output']>;
  readonly created?: Maybe<Scalars['AWSTimestamp']['output']>;
  readonly description?: Maybe<Scalars['String']['output']>;
  readonly descriptionNode?: Maybe<ReadonlyArray<ApiVideoDescription>>;
  readonly duration: Scalars['Int']['output'];
  readonly endsAt?: Maybe<Scalars['AWSTimestamp']['output']>;
  readonly franchise: Scalars['String']['output'];
  readonly franchiseDisplayName: Scalars['String']['output'];
  readonly gamAccountId?: Maybe<Scalars['String']['output']>;
  readonly guid?: Maybe<Scalars['String']['output']>;
  readonly highestRatedOnHole?: Maybe<Scalars['Boolean']['output']>;
  readonly holeNumber?: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly pinned: Scalars['Boolean']['output'];
  readonly playerVideos?: Maybe<ReadonlyArray<ApiPlayerVideo>>;
  readonly players?: Maybe<ReadonlyArray<ApiRyderCupContentPlayer>>;
  readonly poster: Scalars['String']['output'];
  readonly pubdate: Scalars['AWSTimestamp']['output'];
  readonly publishDate?: Maybe<Scalars['String']['output']>;
  readonly rating?: Maybe<Scalars['String']['output']>;
  readonly roundNumber?: Maybe<Scalars['String']['output']>;
  readonly seqHoleNumber?: Maybe<Scalars['String']['output']>;
  readonly shareUrl?: Maybe<Scalars['String']['output']>;
  readonly shotNumber?: Maybe<Scalars['String']['output']>;
  readonly sponsor?: Maybe<ApiVideoSponsor>;
  readonly startsAt?: Maybe<Scalars['AWSTimestamp']['output']>;
  readonly tags?: Maybe<ReadonlyArray<ApiRyderCupContentTags>>;
  readonly team?: Maybe<ApiRyderCupTeamType>;
  /** @deprecated Use thumbnailAsset */
  readonly thumbnail: Scalars['String']['output'];
  readonly thumbnailAsset: ApiImageAsset;
  readonly title: Scalars['String']['output'];
  readonly topics?: Maybe<ReadonlyArray<ApiContentTopics>>;
  readonly tourCode: Scalars['String']['output'];
  readonly tournamentId?: Maybe<Scalars['String']['output']>;
  readonly videoAccountId?: Maybe<Scalars['String']['output']>;
  readonly year?: Maybe<Scalars['String']['output']>;
  readonly years?: Maybe<ReadonlyArray<Maybe<Scalars['String']['output']>>>;
};

export type ApiVideoDescription = ApiNewsArticleLink | ApiNewsArticleText;

export type ApiVideoFilterPillConfig = {
  readonly __typename: 'VideoFilterPillConfig';
  readonly franchises: ReadonlyArray<ApiFranchise>;
  readonly pinnedFranchises: ReadonlyArray<ApiFranchise>;
};

export type ApiVideoHero = {
  readonly __typename: 'VideoHero';
  readonly gtmAssetKey?: Maybe<Scalars['String']['output']>;
  readonly partnershipAsset?: Maybe<Scalars['String']['output']>;
  readonly partnershipText?: Maybe<Scalars['String']['output']>;
  readonly sectionTitle?: Maybe<Scalars['String']['output']>;
  readonly tourcastWebviewLink?: Maybe<Scalars['String']['output']>;
  readonly video?: Maybe<ApiVideo>;
  readonly videos: ReadonlyArray<ApiVideo>;
};

export type ApiVideoLanguage =
  | 'ENGLISH'
  | 'FRENCH';

export type ApiVideoNavigation = {
  readonly __typename: 'VideoNavigation';
  readonly items: ReadonlyArray<ApiVideoPill>;
  readonly liveOverride: ApiLiveOverride;
  readonly tourCode: ApiTourCode;
};

export type ApiVideoPill = {
  readonly __typename: 'VideoPill';
  readonly defaultView: Scalars['Boolean']['output'];
  readonly displayText: Scalars['String']['output'];
  readonly enabledCompanionPills?: Maybe<ReadonlyArray<ApiVideoPillType>>;
  readonly pillConfig?: Maybe<ApiVideoPillConfig>;
  readonly videoPillType: ApiVideoPillType;
};

export type ApiVideoPillConfig = ApiFranchisePillConfig | ApiTopicStoriesPillConfig | ApiTournamentsPillConfig | ApiVideoFilterPillConfig;

export type ApiVideoPillType =
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

export type ApiVideoSponsor = {
  readonly __typename: 'VideoSponsor';
  readonly description?: Maybe<Scalars['String']['output']>;
  readonly gam?: Maybe<Scalars['String']['output']>;
  readonly image?: Maybe<Scalars['String']['output']>;
  /** @deprecated use logoAsset */
  readonly logo: Scalars['String']['output'];
  readonly logoAsset: ApiImageAsset;
  /** @deprecated use logoDarkAsset */
  readonly logoDark: Scalars['String']['output'];
  readonly logoDarkAsset: ApiImageAsset;
  readonly logoPrefix?: Maybe<Scalars['String']['output']>;
  readonly name: Scalars['String']['output'];
  readonly websiteUrl?: Maybe<Scalars['String']['output']>;
};

export type ApiWatchLanding = {
  readonly __typename: 'WatchLanding';
  /** @deprecated Use featuredVideos array */
  readonly featuredVideo?: Maybe<ApiVideo>;
  readonly featuredVideos?: Maybe<ReadonlyArray<ApiVideo>>;
  readonly landingSections: ReadonlyArray<ApiWatchLandingSection>;
  readonly mobileVideos?: Maybe<ReadonlyArray<ApiVideo>>;
  readonly mobileWebVideoLimit: Scalars['Int']['output'];
  readonly tourCode: ApiTourCode;
};

export type ApiWatchLandingSection = {
  readonly __typename: 'WatchLandingSection';
  readonly pillConfig?: Maybe<ApiVideoPillConfig>;
  readonly title: Scalars['String']['output'];
  readonly videoPillType: ApiVideoPillType;
  readonly videos: ReadonlyArray<ApiVideo>;
};

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

export type ApiWeatherDetails = {
  readonly __typename: 'WeatherDetails';
  readonly condition: ApiWeatherCondition;
  readonly humidity: Scalars['String']['output'];
  readonly precipitation: Scalars['String']['output'];
  readonly temperature: ApiWeatherTemp;
  readonly title: Scalars['String']['output'];
  readonly windDirection: ApiWindDirection;
  readonly windSpeedKPH: Scalars['String']['output'];
  readonly windSpeedMPH: Scalars['String']['output'];
};

export type ApiWeatherNotes = {
  readonly __typename: 'WeatherNotes';
  readonly notes: ReadonlyArray<Scalars['String']['output']>;
  readonly weather: ReadonlyArray<ApiDayWeather>;
};

export type ApiWeatherSummary = {
  readonly __typename: 'WeatherSummary';
  readonly accessibilityText?: Maybe<Scalars['String']['output']>;
  readonly daily: ReadonlyArray<ApiWeatherDetails>;
  readonly hourly: ReadonlyArray<ApiWeatherDetails>;
  /** @deprecated use modalSponsorLogoAsset */
  readonly modalSponsorLogo?: Maybe<Scalars['String']['output']>;
  readonly modalSponsorLogoAsset: ApiImageAsset;
  /** @deprecated use modalSponsorLogoDarkAsset */
  readonly modalSponsorLogoDark?: Maybe<Scalars['String']['output']>;
  readonly modalSponsorLogoDarkAsset: ApiImageAsset;
  readonly sponsorDescription?: Maybe<Scalars['String']['output']>;
  readonly sponsorLink?: Maybe<Scalars['String']['output']>;
  /** @deprecated use sponsorLogoAsset */
  readonly sponsorLogo?: Maybe<Scalars['String']['output']>;
  readonly sponsorLogoAsset: ApiImageAsset;
  /** @deprecated use sponsorLogoDarkAsset */
  readonly sponsorLogoDark?: Maybe<Scalars['String']['output']>;
  readonly sponsorLogoDarkAsset: ApiImageAsset;
  readonly title: Scalars['String']['output'];
};

export type ApiWeatherTemp = ApiRangeWeatherTemp | ApiStandardWeatherTemp;

export type ApiWindDirection =
  | 'EAST'
  | 'NORTH'
  | 'NORTH_EAST'
  | 'NORTH_WEST'
  | 'SOUTH'
  | 'SOUTH_EAST'
  | 'SOUTH_WEST'
  | 'WEST';

export type ApiWinner = {
  readonly __typename: 'Winner';
  readonly countryFlag: Scalars['String']['output'];
  readonly countryName: Scalars['String']['output'];
  readonly displayPoints: Scalars['Boolean']['output'];
  readonly displayPurse: Scalars['Boolean']['output'];
  readonly firstName: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
  readonly lastName: Scalars['String']['output'];
  readonly points?: Maybe<Scalars['String']['output']>;
  readonly pointsLabel?: Maybe<Scalars['String']['output']>;
  readonly purse?: Maybe<Scalars['String']['output']>;
  readonly roundScores?: Maybe<ReadonlyArray<ApiWinnerRoundScore>>;
  readonly seed?: Maybe<Scalars['String']['output']>;
  readonly totalScore: Scalars['String']['output'];
  readonly totalStrokes: Scalars['Int']['output'];
  readonly winnerIcon?: Maybe<ApiWinnerIcon>;
};

export type ApiWinnerIcon = {
  readonly __typename: 'WinnerIcon';
  readonly color: Scalars['String']['output'];
  readonly label: Scalars['String']['output'];
  readonly title: Scalars['String']['output'];
  readonly type: ApiWinnerIconType;
};

export type ApiWinnerIconType =
  | 'BRONZE'
  | 'GOLD'
  | 'SILVER';

export type ApiWinnerRoundScore = {
  readonly __typename: 'WinnerRoundScore';
  readonly label: Scalars['String']['output'];
  readonly total: Scalars['String']['output'];
};

export type ApiYtActivationData = {
  readonly __typename: 'YTActivationData';
  readonly data: Scalars['String']['output'];
  readonly description?: Maybe<Scalars['String']['output']>;
  readonly title?: Maybe<Scalars['String']['output']>;
};

export type ApiYtAdInterstitialCard = {
  readonly __typename: 'YTAdInterstitialCard';
  readonly adUrl: Scalars['String']['output'];
  readonly props: ApiYtCardProps;
};

export type ApiYtArticleCard = {
  readonly __typename: 'YTArticleCard';
  readonly props: ApiYtCardProps;
  readonly title: Scalars['String']['output'];
};

export type ApiYtCardCtaProps = {
  readonly __typename: 'YTCardCtaProps';
  readonly color?: Maybe<Scalars['String']['output']>;
  readonly isTourCastCta: Scalars['Boolean']['output'];
  readonly link: Scalars['String']['output'];
  readonly text: Scalars['String']['output'];
};

export type ApiYtCardProps = {
  readonly __typename: 'YTCardProps';
  readonly backgroundColor?: Maybe<Scalars['String']['output']>;
  readonly cardFranchise?: Maybe<ReadonlyArray<Scalars['String']['output']>>;
  readonly cardHeading?: Maybe<Scalars['String']['output']>;
  readonly cardName?: Maybe<Scalars['String']['output']>;
  readonly cardSubHead?: Maybe<Scalars['String']['output']>;
  readonly cta?: Maybe<ApiYtCardCtaProps>;
  readonly ctaText?: Maybe<Scalars['String']['output']>;
  readonly date: Scalars['AWSTimestamp']['output'];
  readonly deepLink: Scalars['String']['output'];
  readonly deepLinkCard: Scalars['Boolean']['output'];
  readonly disableSlowZoom: Scalars['Boolean']['output'];
  /** @deprecated use imageAsset */
  readonly image?: Maybe<Scalars['String']['output']>;
  readonly imageAsset?: Maybe<ApiImageAsset>;
  readonly link: Scalars['String']['output'];
  readonly opacity: Scalars['Float']['output'];
  /** @deprecated use sponsorLogoAsset */
  readonly sponsorLogo?: Maybe<Scalars['String']['output']>;
  readonly sponsorLogoAsset: ApiImageAsset;
  readonly sponsorText?: Maybe<Scalars['String']['output']>;
  readonly textColor: Scalars['String']['output'];
  readonly textPosition: ApiYtTextPosition;
  readonly tourCastCta: Scalars['Boolean']['output'];
  readonly videoId?: Maybe<Scalars['String']['output']>;
};

export type ApiYtCardSponsorProps = {
  readonly __typename: 'YTCardSponsorProps';
  readonly activationData: ReadonlyArray<ApiYtActivationData>;
  readonly activationSubtitle: Scalars['String']['output'];
  readonly activationTitle: Scalars['String']['output'];
  /** @deprecated use sponsorLogoAsset */
  readonly sponsorLogo: Scalars['String']['output'];
  readonly sponsorLogoAsset: ApiImageAsset;
  /** @deprecated use tournamentLogoAsset */
  readonly tournamentLogo: Scalars['String']['output'];
  readonly tournamentLogoAsset: ApiImageAsset;
  readonly tournamentName: Scalars['String']['output'];
};

export type ApiYtCoverCard = {
  readonly __typename: 'YTCoverCard';
  readonly props: ApiYtCardProps;
  readonly subTitle?: Maybe<Scalars['String']['output']>;
  readonly title: Scalars['String']['output'];
};

export type ApiYtHighlightCard = {
  readonly __typename: 'YTHighlightCard';
  readonly hole?: Maybe<Scalars['String']['output']>;
  readonly props: ApiYtCardProps;
  readonly title: Scalars['String']['output'];
};

export type ApiYtLeaderboardCard = {
  readonly __typename: 'YTLeaderboardCard';
  readonly players: ReadonlyArray<ApiYtPlayer>;
  readonly props: ApiYtCardProps;
  readonly title: Scalars['String']['output'];
  readonly tournament: ApiYtTournament;
};

export type ApiYtNuggetCard = {
  readonly __typename: 'YTNuggetCard';
  readonly props: ApiYtCardProps;
  readonly subText: Scalars['String']['output'];
  readonly title: Scalars['String']['output'];
};

export type ApiYtPlayer = {
  readonly __typename: 'YTPlayer';
  readonly id: Scalars['String']['output'];
  readonly name: Scalars['String']['output'];
};

export type ApiYtRound = {
  readonly __typename: 'YTRound';
  readonly roundDisplay: Scalars['String']['output'];
  readonly roundNumber: Scalars['Int']['output'];
};

export type ApiYtScorecardCard = {
  readonly __typename: 'YTScorecardCard';
  readonly player: ApiYtPlayer;
  readonly props: ApiYtCardProps;
  readonly title: Scalars['String']['output'];
  readonly tournament: ApiYtTournament;
};

export type ApiYtSponsorActivationCard = {
  readonly __typename: 'YTSponsorActivationCard';
  readonly props: ApiYtCardProps;
  readonly sponsorProps: ApiYtCardSponsorProps;
  readonly subTitle?: Maybe<Scalars['String']['output']>;
  readonly title: Scalars['String']['output'];
};

export type ApiYtTextPosition =
  | 'BOTTOM'
  | 'TOP';

export type ApiYtTournament = {
  readonly __typename: 'YTTournament';
  readonly id: Scalars['String']['output'];
  readonly round: ApiYtRound;
};

export type ApiYtTournamentUpdateCard = {
  readonly __typename: 'YTTournamentUpdateCard';
  readonly props: ApiYtCardProps;
  readonly title: Scalars['String']['output'];
};

export type ApiYourTourCard = ApiYtAdInterstitialCard | ApiYtArticleCard | ApiYtCoverCard | ApiYtHighlightCard | ApiYtLeaderboardCard | ApiYtNuggetCard | ApiYtScorecardCard | ApiYtSponsorActivationCard | ApiYtTournamentUpdateCard;

export type ApiYourTourNews = ApiNewsArticle | ApiVideo;

export type ApiYourTourStory = {
  readonly __typename: 'YourTourStory';
  readonly cardTopic?: Maybe<Scalars['String']['output']>;
  readonly cards: ReadonlyArray<ApiYourTourCard>;
  readonly homeCard?: Maybe<ApiYourTourCard>;
  readonly id: Scalars['ID']['output'];
  readonly tglMatchIds?: Maybe<ReadonlyArray<Scalars['String']['output']>>;
  readonly videoStories: ReadonlyArray<ApiYtVideoStory>;
};

export type ApiYtVideoStory = {
  readonly __typename: 'YtVideoStory';
  readonly topicLabel?: Maybe<Scalars['String']['output']>;
  readonly type: ApiYtVideoStoryType;
};

export type ApiYtVideoStoryType =
  | 'PLAYER_STORIES'
  | 'TOPIC_STORIES';

export type ApiLeaderboardV3QueryVariables = Exact<{
  leaderboardV3Id: Scalars['ID']['input'];
}>;


export type ApiLeaderboardV3Query = {
  readonly __typename: 'Query',
  readonly leaderboardV3: {
    readonly __typename: 'LeaderboardV3',
    readonly id: string,
    readonly players: ReadonlyArray<
      | {
        readonly __typename: 'InformationRow',
        readonly id: string,
        readonly displayText: string,
        readonly leaderboardSortOrder: number,
        readonly mobileDisplayText: string,
        readonly sponsorName?: string | null
      }
      | {
        readonly __typename: 'PlayerRowV3',
        readonly id: string,
        readonly leaderboardSortOrder: number,
        readonly player: {
          readonly __typename: 'Player',
          readonly id: string,
          readonly countryFlag: string,
          readonly displayName: string,
          readonly shortName: string
        },
        readonly scoringData: {
          readonly __typename: 'LeaderboardScoringDataV3',
          readonly position: string,
          readonly total: string,
          readonly totalSort: number
        }
      }
    >
  }
};

export type ApiLeaderboardV3FieldsFragment = {
  readonly __typename: 'LeaderboardV3',
  readonly id: string
};

export type ApiBubblePillFieldsFragment = {
  readonly __typename: 'BubblePill',
  readonly pillText: string
};

export type ApiPlayerRowV3FieldsFragment = {
  readonly __typename: 'PlayerRowV3',
  readonly id: string,
  readonly leaderboardSortOrder: number,
  readonly player: {
    readonly __typename: 'Player',
    readonly id: string,
    readonly countryFlag: string,
    readonly displayName: string,
    readonly shortName: string
  },
  readonly scoringData: {
    readonly __typename: 'LeaderboardScoringDataV3',
    readonly position: string,
    readonly total: string,
    readonly totalSort: number
  }
};

export type ApiInformationRowFieldsFragment = {
  readonly __typename: 'InformationRow',
  readonly id: string,
  readonly displayText: string,
  readonly leaderboardSortOrder: number,
  readonly mobileDisplayText: string,
  readonly sponsorName?: string | null
};

export type ApiLeaderboardHoleByHoleQueryVariables = Exact<{
  tournamentId: Scalars['ID']['input'];
  round?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ApiLeaderboardHoleByHoleQuery = {
  readonly __typename: 'Query',
  readonly leaderboardHoleByHole: {
    readonly __typename: 'LeaderboardHoleByHole',
    readonly tournamentId: string,
    readonly currentRound: number,
    readonly tournamentName: string,
    readonly rounds: ReadonlyArray<{
      readonly __typename: 'LBRound',
      readonly roundNumber: number,
      readonly displayText: string
    }>,
    readonly holeHeaders: ReadonlyArray<{
      readonly __typename: 'HoleHeader',
      readonly holeNumber: number,
      readonly hole: string,
      readonly par: string
    }>,
    readonly courseHoleHeaders: ReadonlyArray<{
      readonly __typename: 'CourseHoleHeader',
      readonly courseId: string,
      readonly holeHeaders: ReadonlyArray<{
        readonly __typename: 'HoleHeaderV2',
        readonly holeNumber?: number | null,
        readonly order: number,
        readonly displayValue: string,
        readonly par: string
      }>
    }>,
    readonly courses: ReadonlyArray<{
      readonly __typename: 'Course',
      readonly id: string,
      readonly courseName: string,
      readonly courseCode: string,
      readonly hostCourse: boolean,
      readonly scoringLevel: ApiScoringLevel,
      readonly enabled?: boolean | null,
      readonly features?: ReadonlyArray<ApiTeeTimesFeature> | null
    }>,
    readonly playerData: ReadonlyArray<{
      readonly __typename: 'PlayerRowHoleByHole',
      readonly playerId: string,
      readonly courseId: string,
      readonly courseCode: string,
      readonly out?: string | null,
      readonly in?: string | null,
      readonly total?: string | null,
      readonly totalToPar: string,
      readonly scores: ReadonlyArray<{
        readonly __typename: 'HoleScore',
        readonly holeNumber: number,
        readonly par: number,
        readonly yardage: number,
        readonly sequenceNumber: number,
        readonly score: string,
        readonly status: ApiHoleScoreStatus,
        readonly roundScore: string
      }>
    }>
  }
};

export type ApiScheduleTournamentFieldsFragment = {
  readonly __typename: 'ScheduleTournament',
  readonly id: string,
  readonly date: string,
  readonly startDate: any,
  readonly dateAccessibilityText: string,
  readonly tournamentName: string,
  readonly tournamentLogo: string,
  readonly city: string,
  readonly state: string,
  readonly stateCode: string,
  readonly country: string,
  readonly countryCode: string,
  readonly courseName: string,
  readonly champion: string,
  readonly championId: string,
  readonly championEarnings?: string | null,
  readonly beautyImage?: string | null,
  readonly tournamentStatus: ApiTournamentStatus,
  readonly sortDate?: string | null,
  readonly sequenceNumber: number,
  readonly purse?: string | null,
  readonly ticketsURL?: string | null,
  readonly tourStandingHeading?: string | null,
  readonly tourStandingValue?: string | null,
  readonly display: ApiScheduleDisplay,
  readonly ticketmasterApiKey?: string | null,
  readonly ticketmasterAttractionId?: string | null,
  readonly androidTicketmasterApiKey?: string | null,
  readonly androidTicketmasterScheme?: string | null,
  readonly iosTicketmasterApiKey?: string | null,
  readonly ticketsEnabled: boolean,
  readonly tournamentSiteURL?: string | null,
  readonly useTournamentSiteURL: boolean,
  readonly tournamentLogoAsset: {
    readonly __typename: 'ImageAsset',
    readonly imageOrg: string,
    readonly imagePath: string,
    readonly assetType?: string | null,
    readonly deliveryType?: string | null,
    readonly fallbackImage?: string | null
  },
  readonly champions: ReadonlyArray<{
    readonly __typename: 'ScheduleChampion',
    readonly displayName: string,
    readonly playerId: string
  }>,
  readonly beautyImageAsset?: {
    readonly __typename: 'ImageAsset',
    readonly imageOrg: string,
    readonly imagePath: string,
    readonly assetType?: string | null,
    readonly deliveryType?: string | null,
    readonly fallbackImage?: string | null
  } | null,
  readonly status?: {
    readonly __typename: 'ScheduleTournamentStatus',
    readonly roundStatusDisplay: string,
    readonly roundDisplay: string,
    readonly roundStatus: ApiRoundStatus,
    readonly roundStatusColor: ApiRoundStatusColor,
    readonly leaderboardTakeover: boolean
  } | null,
  readonly tournamentCategoryInfo?: {
    readonly __typename: 'TournamentCategoryInfo',
    readonly type: ApiTournamentCategory,
    readonly logoLight: string,
    readonly logoDark: string,
    readonly label: string,
    readonly logoLightAsset: {
      readonly __typename: 'ImageAsset',
      readonly imageOrg: string,
      readonly imagePath: string,
      readonly assetType?: string | null,
      readonly deliveryType?: string | null,
      readonly fallbackImage?: string | null
    },
    readonly logoDarkAsset: {
      readonly __typename: 'ImageAsset',
      readonly imageOrg: string,
      readonly imagePath: string,
      readonly assetType?: string | null,
      readonly deliveryType?: string | null,
      readonly fallbackImage?: string | null
    }
  } | null
};

export type ApiScheduleMonthFieldsFragment = {
  readonly __typename: 'ScheduleMonth',
  readonly year: string,
  readonly month: string,
  readonly monthSort?: number | null,
  readonly tournaments: ReadonlyArray<{
    readonly __typename: 'ScheduleTournament',
    readonly id: string,
    readonly date: string,
    readonly startDate: any,
    readonly dateAccessibilityText: string,
    readonly tournamentName: string,
    readonly tournamentLogo: string,
    readonly city: string,
    readonly state: string,
    readonly stateCode: string,
    readonly country: string,
    readonly countryCode: string,
    readonly courseName: string,
    readonly champion: string,
    readonly championId: string,
    readonly championEarnings?: string | null,
    readonly beautyImage?: string | null,
    readonly tournamentStatus: ApiTournamentStatus,
    readonly sortDate?: string | null,
    readonly sequenceNumber: number,
    readonly purse?: string | null,
    readonly ticketsURL?: string | null,
    readonly tourStandingHeading?: string | null,
    readonly tourStandingValue?: string | null,
    readonly display: ApiScheduleDisplay,
    readonly ticketmasterApiKey?: string | null,
    readonly ticketmasterAttractionId?: string | null,
    readonly androidTicketmasterApiKey?: string | null,
    readonly androidTicketmasterScheme?: string | null,
    readonly iosTicketmasterApiKey?: string | null,
    readonly ticketsEnabled: boolean,
    readonly tournamentSiteURL?: string | null,
    readonly useTournamentSiteURL: boolean,
    readonly tournamentLogoAsset: {
      readonly __typename: 'ImageAsset',
      readonly imageOrg: string,
      readonly imagePath: string,
      readonly assetType?: string | null,
      readonly deliveryType?: string | null,
      readonly fallbackImage?: string | null
    },
    readonly champions: ReadonlyArray<{
      readonly __typename: 'ScheduleChampion',
      readonly displayName: string,
      readonly playerId: string
    }>,
    readonly beautyImageAsset?: {
      readonly __typename: 'ImageAsset',
      readonly imageOrg: string,
      readonly imagePath: string,
      readonly assetType?: string | null,
      readonly deliveryType?: string | null,
      readonly fallbackImage?: string | null
    } | null,
    readonly status?: {
      readonly __typename: 'ScheduleTournamentStatus',
      readonly roundStatusDisplay: string,
      readonly roundDisplay: string,
      readonly roundStatus: ApiRoundStatus,
      readonly roundStatusColor: ApiRoundStatusColor,
      readonly leaderboardTakeover: boolean
    } | null,
    readonly tournamentCategoryInfo?: {
      readonly __typename: 'TournamentCategoryInfo',
      readonly type: ApiTournamentCategory,
      readonly logoLight: string,
      readonly logoDark: string,
      readonly label: string,
      readonly logoLightAsset: {
        readonly __typename: 'ImageAsset',
        readonly imageOrg: string,
        readonly imagePath: string,
        readonly assetType?: string | null,
        readonly deliveryType?: string | null,
        readonly fallbackImage?: string | null
      },
      readonly logoDarkAsset: {
        readonly __typename: 'ImageAsset',
        readonly imageOrg: string,
        readonly imagePath: string,
        readonly assetType?: string | null,
        readonly deliveryType?: string | null,
        readonly fallbackImage?: string | null
      }
    } | null
  }>
};

export type ApiScheduleFieldsFragment = {
  readonly __typename: 'Schedule',
  readonly tour: string,
  readonly seasonYear: string,
  readonly completed: ReadonlyArray<{
    readonly __typename: 'ScheduleMonth',
    readonly year: string,
    readonly month: string,
    readonly monthSort?: number | null,
    readonly tournaments: ReadonlyArray<{
      readonly __typename: 'ScheduleTournament',
      readonly id: string,
      readonly date: string,
      readonly startDate: any,
      readonly dateAccessibilityText: string,
      readonly tournamentName: string,
      readonly tournamentLogo: string,
      readonly city: string,
      readonly state: string,
      readonly stateCode: string,
      readonly country: string,
      readonly countryCode: string,
      readonly courseName: string,
      readonly champion: string,
      readonly championId: string,
      readonly championEarnings?: string | null,
      readonly beautyImage?: string | null,
      readonly tournamentStatus: ApiTournamentStatus,
      readonly sortDate?: string | null,
      readonly sequenceNumber: number,
      readonly purse?: string | null,
      readonly ticketsURL?: string | null,
      readonly tourStandingHeading?: string | null,
      readonly tourStandingValue?: string | null,
      readonly display: ApiScheduleDisplay,
      readonly ticketmasterApiKey?: string | null,
      readonly ticketmasterAttractionId?: string | null,
      readonly androidTicketmasterApiKey?: string | null,
      readonly androidTicketmasterScheme?: string | null,
      readonly iosTicketmasterApiKey?: string | null,
      readonly ticketsEnabled: boolean,
      readonly tournamentSiteURL?: string | null,
      readonly useTournamentSiteURL: boolean,
      readonly tournamentLogoAsset: {
        readonly __typename: 'ImageAsset',
        readonly imageOrg: string,
        readonly imagePath: string,
        readonly assetType?: string | null,
        readonly deliveryType?: string | null,
        readonly fallbackImage?: string | null
      },
      readonly champions: ReadonlyArray<{
        readonly __typename: 'ScheduleChampion',
        readonly displayName: string,
        readonly playerId: string
      }>,
      readonly beautyImageAsset?: {
        readonly __typename: 'ImageAsset',
        readonly imageOrg: string,
        readonly imagePath: string,
        readonly assetType?: string | null,
        readonly deliveryType?: string | null,
        readonly fallbackImage?: string | null
      } | null,
      readonly status?: {
        readonly __typename: 'ScheduleTournamentStatus',
        readonly roundStatusDisplay: string,
        readonly roundDisplay: string,
        readonly roundStatus: ApiRoundStatus,
        readonly roundStatusColor: ApiRoundStatusColor,
        readonly leaderboardTakeover: boolean
      } | null,
      readonly tournamentCategoryInfo?: {
        readonly __typename: 'TournamentCategoryInfo',
        readonly type: ApiTournamentCategory,
        readonly logoLight: string,
        readonly logoDark: string,
        readonly label: string,
        readonly logoLightAsset: {
          readonly __typename: 'ImageAsset',
          readonly imageOrg: string,
          readonly imagePath: string,
          readonly assetType?: string | null,
          readonly deliveryType?: string | null,
          readonly fallbackImage?: string | null
        },
        readonly logoDarkAsset: {
          readonly __typename: 'ImageAsset',
          readonly imageOrg: string,
          readonly imagePath: string,
          readonly assetType?: string | null,
          readonly deliveryType?: string | null,
          readonly fallbackImage?: string | null
        }
      } | null
    }>
  }>,
  readonly upcoming: ReadonlyArray<{
    readonly __typename: 'ScheduleMonth',
    readonly year: string,
    readonly month: string,
    readonly monthSort?: number | null,
    readonly tournaments: ReadonlyArray<{
      readonly __typename: 'ScheduleTournament',
      readonly id: string,
      readonly date: string,
      readonly startDate: any,
      readonly dateAccessibilityText: string,
      readonly tournamentName: string,
      readonly tournamentLogo: string,
      readonly city: string,
      readonly state: string,
      readonly stateCode: string,
      readonly country: string,
      readonly countryCode: string,
      readonly courseName: string,
      readonly champion: string,
      readonly championId: string,
      readonly championEarnings?: string | null,
      readonly beautyImage?: string | null,
      readonly tournamentStatus: ApiTournamentStatus,
      readonly sortDate?: string | null,
      readonly sequenceNumber: number,
      readonly purse?: string | null,
      readonly ticketsURL?: string | null,
      readonly tourStandingHeading?: string | null,
      readonly tourStandingValue?: string | null,
      readonly display: ApiScheduleDisplay,
      readonly ticketmasterApiKey?: string | null,
      readonly ticketmasterAttractionId?: string | null,
      readonly androidTicketmasterApiKey?: string | null,
      readonly androidTicketmasterScheme?: string | null,
      readonly iosTicketmasterApiKey?: string | null,
      readonly ticketsEnabled: boolean,
      readonly tournamentSiteURL?: string | null,
      readonly useTournamentSiteURL: boolean,
      readonly tournamentLogoAsset: {
        readonly __typename: 'ImageAsset',
        readonly imageOrg: string,
        readonly imagePath: string,
        readonly assetType?: string | null,
        readonly deliveryType?: string | null,
        readonly fallbackImage?: string | null
      },
      readonly champions: ReadonlyArray<{
        readonly __typename: 'ScheduleChampion',
        readonly displayName: string,
        readonly playerId: string
      }>,
      readonly beautyImageAsset?: {
        readonly __typename: 'ImageAsset',
        readonly imageOrg: string,
        readonly imagePath: string,
        readonly assetType?: string | null,
        readonly deliveryType?: string | null,
        readonly fallbackImage?: string | null
      } | null,
      readonly status?: {
        readonly __typename: 'ScheduleTournamentStatus',
        readonly roundStatusDisplay: string,
        readonly roundDisplay: string,
        readonly roundStatus: ApiRoundStatus,
        readonly roundStatusColor: ApiRoundStatusColor,
        readonly leaderboardTakeover: boolean
      } | null,
      readonly tournamentCategoryInfo?: {
        readonly __typename: 'TournamentCategoryInfo',
        readonly type: ApiTournamentCategory,
        readonly logoLight: string,
        readonly logoDark: string,
        readonly label: string,
        readonly logoLightAsset: {
          readonly __typename: 'ImageAsset',
          readonly imageOrg: string,
          readonly imagePath: string,
          readonly assetType?: string | null,
          readonly deliveryType?: string | null,
          readonly fallbackImage?: string | null
        },
        readonly logoDarkAsset: {
          readonly __typename: 'ImageAsset',
          readonly imageOrg: string,
          readonly imagePath: string,
          readonly assetType?: string | null,
          readonly deliveryType?: string | null,
          readonly fallbackImage?: string | null
        }
      } | null
    }>
  }>,
  readonly filters?: ReadonlyArray<{
    readonly __typename: 'ScheduleTournamentFilter',
    readonly type: ApiTournamentCategory,
    readonly name: string
  }> | null
};

export type ApiScheduleYearsQueryVariables = Exact<{
  tourCode: ApiTourCode;
}>;


export type ApiScheduleYearsQuery = {
  readonly __typename: 'Query',
  readonly scheduleYears: {
    readonly __typename: 'ScheduleYears',
    readonly years: ReadonlyArray<{
      readonly __typename: 'ScheduleYear',
      readonly default: boolean,
      readonly displayValue: string,
      readonly queryValue: string
    }>
  }
};

export type ApiScheduleQueryVariables = Exact<{
  tourCode: Scalars['String']['input'];
  year?: InputMaybe<Scalars['String']['input']>;
}>;


export type ApiScheduleQuery = {
  readonly __typename: 'Query',
  readonly schedule: {
    readonly __typename: 'Schedule',
    readonly tour: string,
    readonly seasonYear: string,
    readonly completed: ReadonlyArray<{
      readonly __typename: 'ScheduleMonth',
      readonly year: string,
      readonly month: string,
      readonly monthSort?: number | null,
      readonly tournaments: ReadonlyArray<{
        readonly __typename: 'ScheduleTournament',
        readonly id: string,
        readonly date: string,
        readonly startDate: any,
        readonly dateAccessibilityText: string,
        readonly tournamentName: string,
        readonly tournamentLogo: string,
        readonly city: string,
        readonly state: string,
        readonly stateCode: string,
        readonly country: string,
        readonly countryCode: string,
        readonly courseName: string,
        readonly champion: string,
        readonly championId: string,
        readonly championEarnings?: string | null,
        readonly beautyImage?: string | null,
        readonly tournamentStatus: ApiTournamentStatus,
        readonly sortDate?: string | null,
        readonly sequenceNumber: number,
        readonly purse?: string | null,
        readonly ticketsURL?: string | null,
        readonly tourStandingHeading?: string | null,
        readonly tourStandingValue?: string | null,
        readonly display: ApiScheduleDisplay,
        readonly ticketmasterApiKey?: string | null,
        readonly ticketmasterAttractionId?: string | null,
        readonly androidTicketmasterApiKey?: string | null,
        readonly androidTicketmasterScheme?: string | null,
        readonly iosTicketmasterApiKey?: string | null,
        readonly ticketsEnabled: boolean,
        readonly tournamentSiteURL?: string | null,
        readonly useTournamentSiteURL: boolean,
        readonly tournamentLogoAsset: {
          readonly __typename: 'ImageAsset',
          readonly imageOrg: string,
          readonly imagePath: string,
          readonly assetType?: string | null,
          readonly deliveryType?: string | null,
          readonly fallbackImage?: string | null
        },
        readonly champions: ReadonlyArray<{
          readonly __typename: 'ScheduleChampion',
          readonly displayName: string,
          readonly playerId: string
        }>,
        readonly beautyImageAsset?: {
          readonly __typename: 'ImageAsset',
          readonly imageOrg: string,
          readonly imagePath: string,
          readonly assetType?: string | null,
          readonly deliveryType?: string | null,
          readonly fallbackImage?: string | null
        } | null,
        readonly status?: {
          readonly __typename: 'ScheduleTournamentStatus',
          readonly roundStatusDisplay: string,
          readonly roundDisplay: string,
          readonly roundStatus: ApiRoundStatus,
          readonly roundStatusColor: ApiRoundStatusColor,
          readonly leaderboardTakeover: boolean
        } | null,
        readonly tournamentCategoryInfo?: {
          readonly __typename: 'TournamentCategoryInfo',
          readonly type: ApiTournamentCategory,
          readonly logoLight: string,
          readonly logoDark: string,
          readonly label: string,
          readonly logoLightAsset: {
            readonly __typename: 'ImageAsset',
            readonly imageOrg: string,
            readonly imagePath: string,
            readonly assetType?: string | null,
            readonly deliveryType?: string | null,
            readonly fallbackImage?: string | null
          },
          readonly logoDarkAsset: {
            readonly __typename: 'ImageAsset',
            readonly imageOrg: string,
            readonly imagePath: string,
            readonly assetType?: string | null,
            readonly deliveryType?: string | null,
            readonly fallbackImage?: string | null
          }
        } | null
      }>
    }>,
    readonly upcoming: ReadonlyArray<{
      readonly __typename: 'ScheduleMonth',
      readonly year: string,
      readonly month: string,
      readonly monthSort?: number | null,
      readonly tournaments: ReadonlyArray<{
        readonly __typename: 'ScheduleTournament',
        readonly id: string,
        readonly date: string,
        readonly startDate: any,
        readonly dateAccessibilityText: string,
        readonly tournamentName: string,
        readonly tournamentLogo: string,
        readonly city: string,
        readonly state: string,
        readonly stateCode: string,
        readonly country: string,
        readonly countryCode: string,
        readonly courseName: string,
        readonly champion: string,
        readonly championId: string,
        readonly championEarnings?: string | null,
        readonly beautyImage?: string | null,
        readonly tournamentStatus: ApiTournamentStatus,
        readonly sortDate?: string | null,
        readonly sequenceNumber: number,
        readonly purse?: string | null,
        readonly ticketsURL?: string | null,
        readonly tourStandingHeading?: string | null,
        readonly tourStandingValue?: string | null,
        readonly display: ApiScheduleDisplay,
        readonly ticketmasterApiKey?: string | null,
        readonly ticketmasterAttractionId?: string | null,
        readonly androidTicketmasterApiKey?: string | null,
        readonly androidTicketmasterScheme?: string | null,
        readonly iosTicketmasterApiKey?: string | null,
        readonly ticketsEnabled: boolean,
        readonly tournamentSiteURL?: string | null,
        readonly useTournamentSiteURL: boolean,
        readonly tournamentLogoAsset: {
          readonly __typename: 'ImageAsset',
          readonly imageOrg: string,
          readonly imagePath: string,
          readonly assetType?: string | null,
          readonly deliveryType?: string | null,
          readonly fallbackImage?: string | null
        },
        readonly champions: ReadonlyArray<{
          readonly __typename: 'ScheduleChampion',
          readonly displayName: string,
          readonly playerId: string
        }>,
        readonly beautyImageAsset?: {
          readonly __typename: 'ImageAsset',
          readonly imageOrg: string,
          readonly imagePath: string,
          readonly assetType?: string | null,
          readonly deliveryType?: string | null,
          readonly fallbackImage?: string | null
        } | null,
        readonly status?: {
          readonly __typename: 'ScheduleTournamentStatus',
          readonly roundStatusDisplay: string,
          readonly roundDisplay: string,
          readonly roundStatus: ApiRoundStatus,
          readonly roundStatusColor: ApiRoundStatusColor,
          readonly leaderboardTakeover: boolean
        } | null,
        readonly tournamentCategoryInfo?: {
          readonly __typename: 'TournamentCategoryInfo',
          readonly type: ApiTournamentCategory,
          readonly logoLight: string,
          readonly logoDark: string,
          readonly label: string,
          readonly logoLightAsset: {
            readonly __typename: 'ImageAsset',
            readonly imageOrg: string,
            readonly imagePath: string,
            readonly assetType?: string | null,
            readonly deliveryType?: string | null,
            readonly fallbackImage?: string | null
          },
          readonly logoDarkAsset: {
            readonly __typename: 'ImageAsset',
            readonly imageOrg: string,
            readonly imagePath: string,
            readonly assetType?: string | null,
            readonly deliveryType?: string | null,
            readonly fallbackImage?: string | null
          }
        } | null
      }>
    }>,
    readonly filters?: ReadonlyArray<{
      readonly __typename: 'ScheduleTournamentFilter',
      readonly type: ApiTournamentCategory,
      readonly name: string
    }> | null
  }
};

export type ApiCompleteScheduleQueryVariables = Exact<{
  tourCode: ApiTourCode;
}>;


export type ApiCompleteScheduleQuery = {
  readonly __typename: 'Query',
  readonly completeSchedule: ReadonlyArray<{
    readonly __typename: 'Schedule',
    readonly tour: string,
    readonly seasonYear: string,
    readonly completed: ReadonlyArray<{
      readonly __typename: 'ScheduleMonth',
      readonly year: string,
      readonly month: string,
      readonly monthSort?: number | null,
      readonly tournaments: ReadonlyArray<{
        readonly __typename: 'ScheduleTournament',
        readonly id: string,
        readonly date: string,
        readonly startDate: any,
        readonly dateAccessibilityText: string,
        readonly tournamentName: string,
        readonly tournamentLogo: string,
        readonly city: string,
        readonly state: string,
        readonly stateCode: string,
        readonly country: string,
        readonly countryCode: string,
        readonly courseName: string,
        readonly champion: string,
        readonly championId: string,
        readonly championEarnings?: string | null,
        readonly beautyImage?: string | null,
        readonly tournamentStatus: ApiTournamentStatus,
        readonly sortDate?: string | null,
        readonly sequenceNumber: number,
        readonly purse?: string | null,
        readonly ticketsURL?: string | null,
        readonly tourStandingHeading?: string | null,
        readonly tourStandingValue?: string | null,
        readonly display: ApiScheduleDisplay,
        readonly ticketmasterApiKey?: string | null,
        readonly ticketmasterAttractionId?: string | null,
        readonly androidTicketmasterApiKey?: string | null,
        readonly androidTicketmasterScheme?: string | null,
        readonly iosTicketmasterApiKey?: string | null,
        readonly ticketsEnabled: boolean,
        readonly tournamentSiteURL?: string | null,
        readonly useTournamentSiteURL: boolean,
        readonly tournamentLogoAsset: {
          readonly __typename: 'ImageAsset',
          readonly imageOrg: string,
          readonly imagePath: string,
          readonly assetType?: string | null,
          readonly deliveryType?: string | null,
          readonly fallbackImage?: string | null
        },
        readonly champions: ReadonlyArray<{
          readonly __typename: 'ScheduleChampion',
          readonly displayName: string,
          readonly playerId: string
        }>,
        readonly beautyImageAsset?: {
          readonly __typename: 'ImageAsset',
          readonly imageOrg: string,
          readonly imagePath: string,
          readonly assetType?: string | null,
          readonly deliveryType?: string | null,
          readonly fallbackImage?: string | null
        } | null,
        readonly status?: {
          readonly __typename: 'ScheduleTournamentStatus',
          readonly roundStatusDisplay: string,
          readonly roundDisplay: string,
          readonly roundStatus: ApiRoundStatus,
          readonly roundStatusColor: ApiRoundStatusColor,
          readonly leaderboardTakeover: boolean
        } | null,
        readonly tournamentCategoryInfo?: {
          readonly __typename: 'TournamentCategoryInfo',
          readonly type: ApiTournamentCategory,
          readonly logoLight: string,
          readonly logoDark: string,
          readonly label: string,
          readonly logoLightAsset: {
            readonly __typename: 'ImageAsset',
            readonly imageOrg: string,
            readonly imagePath: string,
            readonly assetType?: string | null,
            readonly deliveryType?: string | null,
            readonly fallbackImage?: string | null
          },
          readonly logoDarkAsset: {
            readonly __typename: 'ImageAsset',
            readonly imageOrg: string,
            readonly imagePath: string,
            readonly assetType?: string | null,
            readonly deliveryType?: string | null,
            readonly fallbackImage?: string | null
          }
        } | null
      }>
    }>,
    readonly upcoming: ReadonlyArray<{
      readonly __typename: 'ScheduleMonth',
      readonly year: string,
      readonly month: string,
      readonly monthSort?: number | null,
      readonly tournaments: ReadonlyArray<{
        readonly __typename: 'ScheduleTournament',
        readonly id: string,
        readonly date: string,
        readonly startDate: any,
        readonly dateAccessibilityText: string,
        readonly tournamentName: string,
        readonly tournamentLogo: string,
        readonly city: string,
        readonly state: string,
        readonly stateCode: string,
        readonly country: string,
        readonly countryCode: string,
        readonly courseName: string,
        readonly champion: string,
        readonly championId: string,
        readonly championEarnings?: string | null,
        readonly beautyImage?: string | null,
        readonly tournamentStatus: ApiTournamentStatus,
        readonly sortDate?: string | null,
        readonly sequenceNumber: number,
        readonly purse?: string | null,
        readonly ticketsURL?: string | null,
        readonly tourStandingHeading?: string | null,
        readonly tourStandingValue?: string | null,
        readonly display: ApiScheduleDisplay,
        readonly ticketmasterApiKey?: string | null,
        readonly ticketmasterAttractionId?: string | null,
        readonly androidTicketmasterApiKey?: string | null,
        readonly androidTicketmasterScheme?: string | null,
        readonly iosTicketmasterApiKey?: string | null,
        readonly ticketsEnabled: boolean,
        readonly tournamentSiteURL?: string | null,
        readonly useTournamentSiteURL: boolean,
        readonly tournamentLogoAsset: {
          readonly __typename: 'ImageAsset',
          readonly imageOrg: string,
          readonly imagePath: string,
          readonly assetType?: string | null,
          readonly deliveryType?: string | null,
          readonly fallbackImage?: string | null
        },
        readonly champions: ReadonlyArray<{
          readonly __typename: 'ScheduleChampion',
          readonly displayName: string,
          readonly playerId: string
        }>,
        readonly beautyImageAsset?: {
          readonly __typename: 'ImageAsset',
          readonly imageOrg: string,
          readonly imagePath: string,
          readonly assetType?: string | null,
          readonly deliveryType?: string | null,
          readonly fallbackImage?: string | null
        } | null,
        readonly status?: {
          readonly __typename: 'ScheduleTournamentStatus',
          readonly roundStatusDisplay: string,
          readonly roundDisplay: string,
          readonly roundStatus: ApiRoundStatus,
          readonly roundStatusColor: ApiRoundStatusColor,
          readonly leaderboardTakeover: boolean
        } | null,
        readonly tournamentCategoryInfo?: {
          readonly __typename: 'TournamentCategoryInfo',
          readonly type: ApiTournamentCategory,
          readonly logoLight: string,
          readonly logoDark: string,
          readonly label: string,
          readonly logoLightAsset: {
            readonly __typename: 'ImageAsset',
            readonly imageOrg: string,
            readonly imagePath: string,
            readonly assetType?: string | null,
            readonly deliveryType?: string | null,
            readonly fallbackImage?: string | null
          },
          readonly logoDarkAsset: {
            readonly __typename: 'ImageAsset',
            readonly imageOrg: string,
            readonly imagePath: string,
            readonly assetType?: string | null,
            readonly deliveryType?: string | null,
            readonly fallbackImage?: string | null
          }
        } | null
      }>
    }>,
    readonly filters?: ReadonlyArray<{
      readonly __typename: 'ScheduleTournamentFilter',
      readonly type: ApiTournamentCategory,
      readonly name: string
    }> | null
  }>
};

export type ApiUpcomingScheduleQueryVariables = Exact<{
  tourCode: Scalars['String']['input'];
}>;


export type ApiUpcomingScheduleQuery = {
  readonly __typename: 'Query',
  readonly upcomingSchedule: {
    readonly __typename: 'ScheduleUpcoming',
    readonly id: string,
    readonly filters?: ReadonlyArray<{
      readonly __typename: 'ScheduleTournamentFilter',
      readonly type: ApiTournamentCategory,
      readonly name: string
    }> | null,
    readonly tournaments: ReadonlyArray<{
      readonly __typename: 'ScheduleTournament',
      readonly id: string,
      readonly date: string,
      readonly startDate: any,
      readonly dateAccessibilityText: string,
      readonly tournamentName: string,
      readonly tournamentLogo: string,
      readonly city: string,
      readonly state: string,
      readonly stateCode: string,
      readonly country: string,
      readonly countryCode: string,
      readonly courseName: string,
      readonly champion: string,
      readonly championId: string,
      readonly championEarnings?: string | null,
      readonly beautyImage?: string | null,
      readonly tournamentStatus: ApiTournamentStatus,
      readonly sortDate?: string | null,
      readonly sequenceNumber: number,
      readonly purse?: string | null,
      readonly ticketsURL?: string | null,
      readonly tourStandingHeading?: string | null,
      readonly tourStandingValue?: string | null,
      readonly display: ApiScheduleDisplay,
      readonly ticketmasterApiKey?: string | null,
      readonly ticketmasterAttractionId?: string | null,
      readonly androidTicketmasterApiKey?: string | null,
      readonly androidTicketmasterScheme?: string | null,
      readonly iosTicketmasterApiKey?: string | null,
      readonly ticketsEnabled: boolean,
      readonly tournamentSiteURL?: string | null,
      readonly useTournamentSiteURL: boolean,
      readonly tournamentLogoAsset: {
        readonly __typename: 'ImageAsset',
        readonly imageOrg: string,
        readonly imagePath: string,
        readonly assetType?: string | null,
        readonly deliveryType?: string | null,
        readonly fallbackImage?: string | null
      },
      readonly champions: ReadonlyArray<{
        readonly __typename: 'ScheduleChampion',
        readonly displayName: string,
        readonly playerId: string
      }>,
      readonly beautyImageAsset?: {
        readonly __typename: 'ImageAsset',
        readonly imageOrg: string,
        readonly imagePath: string,
        readonly assetType?: string | null,
        readonly deliveryType?: string | null,
        readonly fallbackImage?: string | null
      } | null,
      readonly status?: {
        readonly __typename: 'ScheduleTournamentStatus',
        readonly roundStatusDisplay: string,
        readonly roundDisplay: string,
        readonly roundStatus: ApiRoundStatus,
        readonly roundStatusColor: ApiRoundStatusColor,
        readonly leaderboardTakeover: boolean
      } | null,
      readonly tournamentCategoryInfo?: {
        readonly __typename: 'TournamentCategoryInfo',
        readonly type: ApiTournamentCategory,
        readonly logoLight: string,
        readonly logoDark: string,
        readonly label: string,
        readonly logoLightAsset: {
          readonly __typename: 'ImageAsset',
          readonly imageOrg: string,
          readonly imagePath: string,
          readonly assetType?: string | null,
          readonly deliveryType?: string | null,
          readonly fallbackImage?: string | null
        },
        readonly logoDarkAsset: {
          readonly __typename: 'ImageAsset',
          readonly imageOrg: string,
          readonly imagePath: string,
          readonly assetType?: string | null,
          readonly deliveryType?: string | null,
          readonly fallbackImage?: string | null
        }
      } | null
    }>
  }
};

export type ApiTournamentsQueryVariables = Exact<{
  ids?: InputMaybe<ReadonlyArray<Scalars['ID']['input']> | Scalars['ID']['input']>;
}>;


export type ApiTournamentsQuery = {
  readonly __typename: 'Query',
  readonly tournaments: ReadonlyArray<{
    readonly __typename: 'Tournament',
    readonly id: string,
    readonly tournamentName: string,
    readonly tournamentLogo: ReadonlyArray<string>,
    readonly tournamentLocation: string,
    readonly tournamentStatus: ApiTournamentStatus,
    readonly features?: ReadonlyArray<ApiTournamentFeature> | null,
    readonly formatType: ApiFormatType,
    readonly roundStatusDisplay: string,
    readonly roundDisplay: string,
    readonly roundStatus: ApiRoundStatus,
    readonly roundStatusColor: ApiRoundStatusColor,
    readonly leaderboardTakeover: boolean,
    readonly currentRound: number,
    readonly timezone: string,
    readonly seasonYear: string,
    readonly displayDate: string,
    readonly country: string,
    readonly state: string,
    readonly city: string,
    readonly scoredLevel: ApiScoringLevel,
    readonly ticketsURL?: string | null,
    readonly tournamentSiteURL?: string | null,
    readonly useTournamentSiteURL: boolean,
    readonly pdfUrl?: string | null,
    readonly conductedByLabel?: string | null,
    readonly conductedByLink?: string | null,
    readonly beautyImage: string,
    readonly shouldSubscribe?: boolean | null,
    readonly infoPath?: string | null,
    readonly infoPathWebview?: string | null,
    readonly howItWorks?: string | null,
    readonly howItWorksPill?: string | null,
    readonly howItWorksWebview?: string | null,
    readonly hideRolexClock: boolean,
    readonly hideSov: boolean,
    readonly ticketsEnabled: boolean,
    readonly headshotBaseUrl?: string | null,
    readonly disabledScorecardTabs: ReadonlyArray<ApiScorecardTabFeature>,
    readonly tournamentLogoAsset: ReadonlyArray<{
      readonly __typename: 'ImageAsset',
      readonly imageOrg: string,
      readonly imagePath: string,
      readonly assetType?: string | null,
      readonly deliveryType?: string | null,
      readonly fallbackImage?: string | null
    }>,
    readonly events: ReadonlyArray<{
      readonly __typename: 'Event',
      readonly id: string,
      readonly eventName: string,
      readonly leaderboardId: string
    }>,
    readonly courses: ReadonlyArray<{
      readonly __typename: 'Course',
      readonly id: string,
      readonly courseName: string,
      readonly courseCode: string,
      readonly hostCourse: boolean,
      readonly scoringLevel: ApiScoringLevel,
      readonly enabled?: boolean | null,
      readonly features?: ReadonlyArray<ApiTeeTimesFeature> | null
    }>,
    readonly weather?: {
      readonly __typename: 'TournamentWeather',
      readonly logo?: string | null,
      readonly logoDark?: string | null,
      readonly logoAccessibility: string,
      readonly tempF: string,
      readonly tempC: string,
      readonly condition: ApiWeatherCondition,
      readonly windDirection: ApiWindDirection,
      readonly windSpeedMPH: string,
      readonly windSpeedKPH: string,
      readonly precipitation: string,
      readonly humidity: string,
      readonly logoAsset: {
        readonly __typename: 'ImageAsset',
        readonly imageOrg: string,
        readonly imagePath: string,
        readonly assetType?: string | null,
        readonly deliveryType?: string | null,
        readonly fallbackImage?: string | null
      },
      readonly logoDarkAsset: {
        readonly __typename: 'ImageAsset',
        readonly imageOrg: string,
        readonly imagePath: string,
        readonly assetType?: string | null,
        readonly deliveryType?: string | null,
        readonly fallbackImage?: string | null
      }
    } | null,
    readonly beautyImageAsset: {
      readonly __typename: 'ImageAsset',
      readonly imageOrg: string,
      readonly imagePath: string,
      readonly assetType?: string | null,
      readonly deliveryType?: string | null,
      readonly fallbackImage?: string | null
    },
    readonly rightRailConfig?: {
      readonly __typename: 'TournamentRightRailConfig',
      readonly imageUrl: string,
      readonly imageAltText: string,
      readonly buttonLink?: string | null,
      readonly buttonText?: string | null
    } | null,
    readonly tournamentCategoryInfo?: {
      readonly __typename: 'TournamentCategoryInfo',
      readonly type: ApiTournamentCategory,
      readonly logoLight: string,
      readonly logoDark: string,
      readonly label: string,
      readonly logoLightAsset: {
        readonly __typename: 'ImageAsset',
        readonly imageOrg: string,
        readonly imagePath: string,
        readonly assetType?: string | null,
        readonly deliveryType?: string | null,
        readonly fallbackImage?: string | null
      },
      readonly logoDarkAsset: {
        readonly __typename: 'ImageAsset',
        readonly imageOrg: string,
        readonly imagePath: string,
        readonly assetType?: string | null,
        readonly deliveryType?: string | null,
        readonly fallbackImage?: string | null
      }
    } | null
  }>
};

export const ApiLeaderboardV3FieldsFragmentDoc = gql`
    fragment LeaderboardV3Fields on LeaderboardV3 {
  __typename
  id
}
    `;
export const ApiBubblePillFieldsFragmentDoc = gql`
    fragment BubblePillFields on BubblePill {
  __typename
  pillText
}
    `;
export const ApiPlayerRowV3FieldsFragmentDoc = gql`
    fragment PlayerRowV3Fields on PlayerRowV3 {
  __typename
  id
  leaderboardSortOrder
  player {
    __typename
    id
    countryFlag
    displayName
    shortName
  }
  scoringData {
    __typename
    position
    total
    totalSort
  }
}
    `;
export const ApiInformationRowFieldsFragmentDoc = gql`
    fragment InformationRowFields on InformationRow {
  __typename
  id
  displayText
  leaderboardSortOrder
  mobileDisplayText
  sponsorName
}
    `;
export const ApiScheduleTournamentFieldsFragmentDoc = gql`
    fragment ScheduleTournamentFields on ScheduleTournament {
  __typename
  id
  date
  startDate
  dateAccessibilityText
  tournamentName
  tournamentLogo
  tournamentLogoAsset {
    __typename
    imageOrg
    imagePath
    assetType
    deliveryType
    fallbackImage
  }
  city
  state
  stateCode
  country
  countryCode
  courseName
  champion
  championId
  champions {
    __typename
    displayName
    playerId
  }
  championEarnings
  beautyImage
  beautyImageAsset {
    __typename
    imageOrg
    imagePath
    assetType
    deliveryType
    fallbackImage
  }
  status {
    __typename
    roundStatusDisplay
    roundDisplay
    roundStatus
    roundStatusColor
    leaderboardTakeover
  }
  tournamentStatus
  sortDate
  sequenceNumber
  purse
  ticketsURL
  tourStandingHeading
  tourStandingValue
  display
  tournamentCategoryInfo {
    __typename
    type
    logoLight
    logoLightAsset {
      __typename
      imageOrg
      imagePath
      assetType
      deliveryType
      fallbackImage
    }
    logoDark
    logoDarkAsset {
      __typename
      imageOrg
      imagePath
      assetType
      deliveryType
      fallbackImage
    }
    label
  }
  ticketmasterApiKey
  ticketmasterAttractionId
  androidTicketmasterApiKey
  androidTicketmasterScheme
  iosTicketmasterApiKey
  ticketsEnabled
  tournamentSiteURL
  useTournamentSiteURL
}
    `;
export const ApiScheduleMonthFieldsFragmentDoc = gql`
    fragment ScheduleMonthFields on ScheduleMonth {
  __typename
  year
  month
  monthSort
  tournaments {
    __typename
    ...ScheduleTournamentFields
  }
}
    ${ApiScheduleTournamentFieldsFragmentDoc}`;
export const ApiScheduleFieldsFragmentDoc = gql`
    fragment ScheduleFields on Schedule {
  __typename
  tour
  seasonYear
  completed {
    __typename
    ...ScheduleMonthFields
  }
  upcoming {
    __typename
    ...ScheduleMonthFields
  }
  filters {
    __typename
    type
    name
  }
}
    ${ApiScheduleMonthFieldsFragmentDoc}`;
export const ApiLeaderboardV3Document = gql`
    query LeaderboardV3($leaderboardV3Id: ID!) {
  __typename
  leaderboardV3(id: $leaderboardV3Id) {
    __typename
    ...LeaderboardV3Fields
    players {
      __typename
      ...PlayerRowV3Fields
      ...InformationRowFields
    }
  }
}
    ${ApiLeaderboardV3FieldsFragmentDoc}
${ApiPlayerRowV3FieldsFragmentDoc}
${ApiInformationRowFieldsFragmentDoc}`;
export const ApiLeaderboardHoleByHoleDocument = gql`
    query LeaderboardHoleByHole($tournamentId: ID!, $round: Int) {
  __typename
  leaderboardHoleByHole(tournamentId: $tournamentId, round: $round) {
    __typename
    tournamentId
    currentRound
    rounds {
      __typename
      roundNumber
      displayText
    }
    tournamentName
    holeHeaders {
      __typename
      holeNumber
      hole
      par
    }
    courseHoleHeaders {
      __typename
      courseId
      holeHeaders {
        __typename
        holeNumber
        order
        displayValue
        par
      }
    }
    courses {
      __typename
      id
      courseName
      courseCode
      hostCourse
      scoringLevel
      enabled
      features
    }
    playerData {
      __typename
      playerId
      courseId
      courseCode
      scores {
        __typename
        holeNumber
        par
        yardage
        sequenceNumber
        score
        status
        roundScore
      }
      out
      in
      total
      totalToPar
    }
  }
}
    `;
export const ApiScheduleYearsDocument = gql`
    query ScheduleYears($tourCode: TourCode!) {
  __typename
  scheduleYears(tourCode: $tourCode) {
    __typename
    years {
      __typename
      default
      displayValue
      queryValue
    }
  }
}
    `;
export const ApiScheduleDocument = gql`
    query Schedule($tourCode: String!, $year: String) {
  __typename
  schedule(tourCode: $tourCode, year: $year) {
    __typename
    ...ScheduleFields
  }
}
    ${ApiScheduleFieldsFragmentDoc}`;
export const ApiCompleteScheduleDocument = gql`
    query CompleteSchedule($tourCode: TourCode!) {
  __typename
  completeSchedule(tourCode: $tourCode) {
    __typename
    ...ScheduleFields
  }
}
    ${ApiScheduleFieldsFragmentDoc}`;
export const ApiUpcomingScheduleDocument = gql`
    query UpcomingSchedule($tourCode: String!) {
  __typename
  upcomingSchedule(tourCode: $tourCode) {
    __typename
    id
    filters {
      __typename
      type
      name
    }
    tournaments {
      __typename
      ...ScheduleTournamentFields
    }
  }
}
    ${ApiScheduleTournamentFieldsFragmentDoc}`;
export const ApiTournamentsDocument = gql`
    query Tournaments($ids: [ID!]) {
  __typename
  tournaments(ids: $ids) {
    __typename
    id
    tournamentName
    tournamentLogo
    tournamentLogoAsset {
      __typename
      imageOrg
      imagePath
      assetType
      deliveryType
      fallbackImage
    }
    tournamentLocation
    tournamentStatus
    features
    formatType
    roundStatusDisplay
    roundDisplay
    roundStatus
    roundStatusColor
    leaderboardTakeover
    currentRound
    timezone
    seasonYear
    displayDate
    country
    state
    city
    scoredLevel
    events {
      __typename
      id
      eventName
      leaderboardId
    }
    courses {
      __typename
      id
      courseName
      courseCode
      hostCourse
      scoringLevel
      enabled
      features
    }
    weather {
      __typename
      logo
      logoAsset {
        __typename
        imageOrg
        imagePath
        assetType
        deliveryType
        fallbackImage
      }
      logoDark
      logoDarkAsset {
        __typename
        imageOrg
        imagePath
        assetType
        deliveryType
        fallbackImage
      }
      logoAccessibility
      tempF
      tempC
      condition
      windDirection
      windSpeedMPH
      windSpeedKPH
      precipitation
      humidity
    }
    ticketsURL
    tournamentSiteURL
    useTournamentSiteURL
    pdfUrl
    conductedByLabel
    conductedByLink
    beautyImage
    beautyImageAsset {
      __typename
      imageOrg
      imagePath
      assetType
      deliveryType
      fallbackImage
    }
    shouldSubscribe
    infoPath
    infoPathWebview
    howItWorks
    howItWorksPill
    howItWorksWebview
    hideRolexClock
    hideSov
    ticketsEnabled
    headshotBaseUrl
    rightRailConfig {
      __typename
      imageUrl
      imageAltText
      buttonLink
      buttonText
    }
    tournamentCategoryInfo {
      __typename
      type
      logoLight
      logoLightAsset {
        __typename
        imageOrg
        imagePath
        assetType
        deliveryType
        fallbackImage
      }
      logoDark
      logoDarkAsset {
        __typename
        imageOrg
        imagePath
        assetType
        deliveryType
        fallbackImage
      }
      label
    }
    disabledScorecardTabs
  }
}
    `;

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
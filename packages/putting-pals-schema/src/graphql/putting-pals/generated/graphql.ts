import * as z from 'zod'
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** The `AWSDateTime` scalar type provided by AWS AppSync, represents a valid ***extended*** [ISO 8601 DateTime](https://en.wikipedia.org/wiki/ISO_8601#Combined_date_and_time_representations) string. In other words, this scalar type accepts datetime strings of the form `YYYY-MM-DDThh:mm:ss.SSSZ`.  The scalar can also accept "negative years" of the form `-YYYY` which correspond to years before `0000`. For example, "**-2017-01-01T00:00Z**" and "**-9999-01-01T00:00Z**" are both valid datetime strings.  The field after the two digit seconds field is a nanoseconds field. It can accept between 1 and 9 digits. So, for example, "**1970-01-01T12:00:00.2Z**", "**1970-01-01T12:00:00.277Z**" and "**1970-01-01T12:00:00.123456789Z**" are all valid datetime strings.  The seconds and nanoseconds fields are optional (the seconds field must be specified if the nanoseconds field is to be used).  The [time zone offset](https://en.wikipedia.org/wiki/ISO_8601#Time_zone_designators) is compulsory for this scalar. The time zone offset must either be `Z` (representing the UTC time zone) or be in the format `±hh:mm:ss`. The seconds field in the timezone offset will be considered valid even though it is not part of the ISO 8601 standard. */
  AWSDateTime: { input: string; output: string; }
  /** The `AWSTimestamp` scalar type provided by AWS AppSync, represents the number of seconds that have elapsed since `1970-01-01T00:00Z`. Negative values are also accepted and these represent the number of seconds till `1970-01-01T00:00Z`.  Timestamps are serialized and deserialized as integers. The minimum supported timestamp value is **`-31557014167219200`** which corresponds to `-1000000000-01-01T00:00Z`. The maximum supported timestamp value is **`31556889864403199`** which corresponds to `1000000000-12-31T23:59:59.999999999Z`. */
  AWSTimestamp: { input: number; output: number; }
};

export type ArHole = {
  readonly __typename: 'ARHole';
  readonly holeNumber: Scalars['Int']['output'];
};

export type Abbreviations = {
  readonly __typename: 'Abbreviations';
  readonly description?: Maybe<Scalars['String']['output']>;
  readonly key: Scalars['String']['output'];
  readonly title: Scalars['String']['output'];
};

export type AdConfig = {
  readonly __typename: 'AdConfig';
  readonly aon?: Maybe<AdTagConfig>;
  readonly aonSection?: Maybe<AdTagConfig>;
  readonly audio?: Maybe<AdTagConfig>;
  readonly comcastSection?: Maybe<AdTagConfig>;
  readonly comcastTop10?: Maybe<AdTagConfig>;
  readonly config: GlobalAdConfig;
  readonly course?: Maybe<AdTagConfig>;
  readonly cupLeaderboardGroup?: Maybe<AdTagConfig>;
  readonly cupLeaderboardSingles?: Maybe<AdTagConfig>;
  readonly cupTeeTimesGroup?: Maybe<AdTagConfig>;
  readonly cupTeeTimesSingles?: Maybe<AdTagConfig>;
  readonly dpwtRankings?: Maybe<AdTagConfig>;
  readonly fantasy?: Maybe<AdTagConfig>;
  readonly fedexCup?: Maybe<AdTagConfig>;
  readonly fedexcupSection?: Maybe<AdTagConfig>;
  readonly fortinetCup?: Maybe<AdTagConfig>;
  readonly fortinetcupSection?: Maybe<AdTagConfig>;
  readonly golfBet?: Maybe<AdTagConfig>;
  readonly groupScorecard?: Maybe<AdTagConfig>;
  readonly groupStageLeaderboard?: Maybe<AdTagConfig>;
  readonly groupStageStandings?: Maybe<AdTagConfig>;
  readonly groupstageStandings?: Maybe<AdTagConfig>;
  readonly homepage?: Maybe<AdTagConfig>;
  readonly knockoutLeaderboard?: Maybe<AdTagConfig>;
  readonly leaderboard?: Maybe<AdTagConfig>;
  readonly leaderboardCutline?: Maybe<AdTagConfig>;
  readonly leaderboardFavorites?: Maybe<AdTagConfig>;
  readonly leaderboardHoleByHole?: Maybe<AdTagConfig>;
  readonly leaderboardLandscape?: Maybe<AdTagConfig>;
  readonly leaderboardLandscapeHoleByHole?: Maybe<AdTagConfig>;
  readonly leaderboardLandscapeOdds?: Maybe<AdTagConfig>;
  readonly leaderboardLandscapeProbability?: Maybe<AdTagConfig>;
  readonly leaderboardLandscapeShotDetails?: Maybe<AdTagConfig>;
  readonly leaderboardLandscapeStrokesGained?: Maybe<AdTagConfig>;
  readonly leaderboardOdds?: Maybe<AdTagConfig>;
  readonly leaderboardProbability?: Maybe<AdTagConfig>;
  readonly leaderboardRow50?: Maybe<AdTagConfig>;
  readonly leaderboardShotDetails?: Maybe<AdTagConfig>;
  readonly leaderboardStrokesGained?: Maybe<AdTagConfig>;
  readonly liveLeaderboard?: Maybe<AdTagConfig>;
  readonly mobileHeroStory?: Maybe<AdTagConfig>;
  readonly mobilePlayerStory?: Maybe<AdTagConfig>;
  readonly mobileTopicStory?: Maybe<AdTagConfig>;
  readonly mobileYourTourHomeStory?: Maybe<AdTagConfig>;
  readonly more?: Maybe<AdTagConfig>;
  readonly netflix?: Maybe<AdTagConfig>;
  readonly news?: Maybe<AdTagConfig>;
  readonly newsArticlemidcontent?: Maybe<AdTagConfig>;
  readonly newsArticles?: Maybe<AdTagConfig>;
  readonly odds?: Maybe<AdTagConfig>;
  readonly payneStewartaward?: Maybe<AdTagConfig>;
  readonly playerProfile?: Maybe<AdTagConfig>;
  readonly playerProfileBio?: Maybe<AdTagConfig>;
  readonly playerProfileEquipment?: Maybe<AdTagConfig>;
  readonly playerProfileResults?: Maybe<AdTagConfig>;
  readonly playerProfileStats?: Maybe<AdTagConfig>;
  readonly playerScorecard?: Maybe<AdTagConfig>;
  readonly players?: Maybe<AdTagConfig>;
  readonly playoffScorecard?: Maybe<AdTagConfig>;
  readonly rsm?: Maybe<AdTagConfig>;
  readonly rsmSection?: Maybe<AdTagConfig>;
  readonly schedule?: Maybe<AdTagConfig>;
  readonly schwabCup?: Maybe<AdTagConfig>;
  readonly schwabcupSection?: Maybe<AdTagConfig>;
  readonly scorecard?: Maybe<AdTagConfig>;
  readonly scorecardOdds?: Maybe<AdTagConfig>;
  readonly sidebarTicker?: Maybe<AdTagConfig>;
  readonly standings?: Maybe<AdTagConfig>;
  readonly stats?: Maybe<AdTagConfig>;
  readonly statsSection?: Maybe<AdTagConfig>;
  readonly studios?: Maybe<AdTagConfig>;
  readonly teeTimes?: Maybe<AdTagConfig>;
  readonly the25Section?: Maybe<AdTagConfig>;
  readonly the25pointsList?: Maybe<AdTagConfig>;
  readonly tickets?: Maybe<AdTagConfig>;
  readonly totalPlayCup?: Maybe<AdTagConfig>;
  readonly totalplaycupSection?: Maybe<AdTagConfig>;
  readonly tourcast?: Maybe<AdTagConfig>;
  readonly tournament?: Maybe<AdTagConfig>;
  readonly tournamentSection?: Maybe<AdTagConfig>;
  readonly training?: Maybe<AdTagConfig>;
  readonly university?: Maybe<AdTagConfig>;
  readonly universityRanking?: Maybe<AdTagConfig>;
  readonly watch?: Maybe<AdTagConfig>;
  readonly webPlayerStories?: Maybe<AdTagConfig>;
  readonly webTopicStories?: Maybe<AdTagConfig>;
  readonly yahooLeaderboard?: Maybe<AdTagConfig>;
};

export type AdSize = {
  readonly __typename: 'AdSize';
  readonly height: Scalars['Int']['output'];
  readonly width: Scalars['Int']['output'];
};

export type AdTagConfig = {
  readonly __typename: 'AdTagConfig';
  readonly actRefresh?: Maybe<Scalars['Boolean']['output']>;
  readonly adTest?: Maybe<Scalars['String']['output']>;
  readonly environment?: Maybe<Scalars['String']['output']>;
  readonly injectAds?: Maybe<Scalars['Boolean']['output']>;
  readonly refresh?: Maybe<Scalars['Int']['output']>;
  readonly rows: ReadonlyArray<AdTagRowConfig>;
  readonly s1: Scalars['String']['output'];
  readonly s2?: Maybe<Scalars['String']['output']>;
  readonly timedRefresh?: Maybe<Scalars['Boolean']['output']>;
  readonly uniqueId: Scalars['String']['output'];
};

export type AdTagRowConfig = {
  readonly __typename: 'AdTagRowConfig';
  readonly container?: Maybe<AdSize>;
  readonly containerLarge?: Maybe<AdSize>;
  readonly containerMedium?: Maybe<AdSize>;
  readonly containerSmall?: Maybe<AdSize>;
  readonly fluid?: Maybe<Scalars['Boolean']['output']>;
  readonly index: Scalars['Int']['output'];
  readonly playerSponsorship?: Maybe<Scalars['Boolean']['output']>;
  readonly pos: Scalars['String']['output'];
  readonly sizes?: Maybe<ReadonlyArray<AdSize>>;
};

export type AllTimeRecordCategories = {
  readonly __typename: 'AllTimeRecordCategories';
  readonly categories: ReadonlyArray<AllTimeRecordCategory>;
  readonly tourCode: TourCode;
};

export type AllTimeRecordCategory = {
  readonly __typename: 'AllTimeRecordCategory';
  readonly categoryId: Scalars['String']['output'];
  readonly displayText: Scalars['String']['output'];
  readonly subCategories: ReadonlyArray<AllTimeRecordSubCategory>;
};

export type AllTimeRecordStat = {
  readonly __typename: 'AllTimeRecordStat';
  readonly categoryId: Scalars['String']['output'];
  readonly categoryName: Scalars['String']['output'];
  readonly isPlayerBased: Scalars['Boolean']['output'];
  readonly primaryColumnIndex?: Maybe<Scalars['Int']['output']>;
  readonly recordId: Scalars['String']['output'];
  readonly rows?: Maybe<ReadonlyArray<AllTimeRecordStatRow>>;
  readonly statHeaders: ReadonlyArray<Scalars['String']['output']>;
  readonly subCategoryName: Scalars['String']['output'];
  /**   1-17 */
  readonly title: Scalars['String']['output'];
};

export type AllTimeRecordStatRow = {
  readonly __typename: 'AllTimeRecordStatRow';
  readonly playerId?: Maybe<Scalars['String']['output']>;
  readonly values: ReadonlyArray<Scalars['String']['output']>;
};

export type AllTimeRecordStatistic = {
  readonly __typename: 'AllTimeRecordStatistic';
  readonly displayText: Scalars['String']['output'];
  readonly recordId: Scalars['String']['output'];
};

export type AllTimeRecordSubCategory = {
  readonly __typename: 'AllTimeRecordSubCategory';
  readonly displayText: Scalars['String']['output'];
  readonly statistics: ReadonlyArray<AllTimeRecordStatistic>;
};

export type Aon = {
  readonly __typename: 'Aon';
  readonly description: Scalars['String']['output'];
  readonly leaders: ReadonlyArray<AonPlayer>;
  readonly logo: Scalars['String']['output'];
  readonly pastTournaments: ReadonlyArray<AonHole>;
  readonly players: ReadonlyArray<AonPlayer>;
  readonly title: Scalars['String']['output'];
  readonly upcomingTournaments: ReadonlyArray<AonHole>;
};

export type AonHole = {
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

export type AonPlayer = {
  readonly __typename: 'AonPlayer';
  readonly countryCode: Scalars['String']['output'];
  readonly displayName: Scalars['String']['output'];
  readonly playerId: Scalars['ID']['output'];
  readonly position: Scalars['String']['output'];
  readonly roundsPlayed: Scalars['String']['output'];
  readonly roundsToGo: Scalars['String']['output'];
  readonly score: Scalars['String']['output'];
};

export type ArticleFormType =
  | 'External'
  | 'Standard';

export type ArticleOddsMarkets = {
  readonly __typename: 'ArticleOddsMarkets';
  readonly class: Scalars['String']['output'];
  readonly market: HistoricalOddsId;
};

export type ArticleOddsMarketsInput = {
  readonly class: Scalars['String']['input'];
  readonly market: HistoricalOddsId;
};

export type ArticleOddsPlayer = {
  readonly __typename: 'ArticleOddsPlayer';
  readonly playerId: Scalars['String']['output'];
  readonly playerName?: Maybe<Scalars['String']['output']>;
};

export type ArticleOddsPlayerInput = {
  readonly playerId: Scalars['String']['input'];
  readonly playerName?: InputMaybe<Scalars['String']['input']>;
};

export type ArticleOddsTableQuery = {
  readonly __typename: 'ArticleOddsTableQuery';
  readonly markets?: Maybe<ReadonlyArray<ArticleOddsMarkets>>;
  readonly players?: Maybe<ReadonlyArray<ArticleOddsPlayer>>;
  readonly timeStamp?: Maybe<Scalars['String']['output']>;
  readonly tournamentId: Scalars['String']['output'];
  readonly tournamentName: Scalars['String']['output'];
};

export type ArticlePlayer = {
  readonly __typename: 'ArticlePlayer';
  readonly id: Scalars['String']['output'];
  readonly name: Scalars['String']['output'];
};

export type ArticleSponsor =
  | 'GOLFWRX';

export type Audio = {
  readonly __typename: 'Audio';
  readonly id: Scalars['ID']['output'];
  readonly imageUrl: Scalars['String']['output'];
  readonly latestPubDate: Scalars['AWSTimestamp']['output'];
  readonly numEpisodes: Scalars['Int']['output'];
  readonly rssFeed: Scalars['String']['output'];
  readonly shareUrl: Scalars['String']['output'];
  readonly streamUrls: StreamUrls;
  readonly summary: Scalars['String']['output'];
  readonly title: Scalars['String']['output'];
};

export type AudioStream = {
  readonly __typename: 'AudioStream';
  readonly id: Scalars['ID']['output'];
  readonly live: Scalars['Boolean']['output'];
  readonly posterImage: Scalars['String']['output'];
  readonly shareUrl: Scalars['String']['output'];
  readonly streamTitle: Scalars['String']['output'];
  readonly streamUrl: Scalars['String']['output'];
};

export type AugmentedRealityConfig = {
  readonly __typename: 'AugmentedRealityConfig';
  readonly holes: ReadonlyArray<ArHole>;
};

export type AvailableMarket = {
  readonly __typename: 'AvailableMarket';
  readonly market: Scalars['String']['output'];
  readonly oddsOptions: ReadonlyArray<OddsOption>;
  readonly subMarket?: Maybe<Scalars['String']['output']>;
};

export type BallPath = {
  readonly __typename: 'BallPath';
  readonly path: ReadonlyArray<BallPathCoordinate>;
};

export type BallPathCoordinate = {
  readonly __typename: 'BallPathCoordinate';
  readonly secondsSinceStart: Scalars['Float']['output'];
  readonly x: Scalars['Float']['output'];
  readonly y: Scalars['Float']['output'];
  readonly z: Scalars['Float']['output'];
};

/**   Odds Options Types */
export type BaseOddsOption = {
  readonly entity: OddsEntity;
  readonly odds: OddsValues;
};

export type BioRank = {
  readonly __typename: 'BioRank';
  readonly rank: Scalars['Int']['output'];
  readonly statName: Scalars['String']['output'];
};

export type BrazeFragment = {
  readonly __typename: 'BrazeFragment';
  readonly ctaLink?: Maybe<Scalars['String']['output']>;
  readonly ctaText?: Maybe<Scalars['String']['output']>;
  readonly feedType?: Maybe<Scalars['String']['output']>;
  readonly sectionTitle?: Maybe<Scalars['String']['output']>;
};

export type BroadcastAudioStream = {
  readonly __typename: 'BroadcastAudioStream';
  readonly channelTitle: Scalars['String']['output'];
  readonly endTime: Scalars['AWSTimestamp']['output'];
  readonly id: Scalars['String']['output'];
  readonly liveStatus: LiveStatus;
  readonly network: BroadcastNetwork;
  readonly roundDisplay: Scalars['String']['output'];
  readonly roundNumber: Scalars['Int']['output'];
  readonly startTime: Scalars['AWSTimestamp']['output'];
  readonly streamTitle: Scalars['String']['output'];
};

export type BroadcastCoverage = {
  readonly __typename: 'BroadcastCoverage';
  readonly countryCode: Scalars['String']['output'];
  readonly coverageType: ReadonlyArray<BroadcastCoverageType>;
  readonly id: Scalars['String']['output'];
  readonly livePillLabel: Scalars['String']['output'];
  readonly tournamentName: Scalars['String']['output'];
};

export type BroadcastCoverageCarousel = {
  readonly __typename: 'BroadcastCoverageCarousel';
  readonly carousel: ReadonlyArray<BroadcastCoverageVideo>;
};

export type BroadcastCoverageItem = BroadcastAudioStream | BroadcastFeaturedGroup | BroadcastFeaturedHole | BroadcastFullTelecast;

export type BroadcastCoverageType = BroadcastAudioStream | BroadcastCoverageCarousel | BroadcastFeaturedGroup | BroadcastFeaturedHole | BroadcastFullTelecast;

export type BroadcastCoverageVideo = BroadcastFeaturedGroup | BroadcastFeaturedHole | BroadcastFullTelecast;

export type BroadcastFeaturedGroup = {
  readonly __typename: 'BroadcastFeaturedGroup';
  readonly channelTitle: Scalars['String']['output'];
  readonly courseId?: Maybe<Scalars['String']['output']>;
  readonly endTime: Scalars['AWSTimestamp']['output'];
  readonly groups: ReadonlyArray<BroadcastGroup>;
  readonly id: Scalars['String']['output'];
  readonly liveStatus: LiveStatus;
  readonly network: BroadcastNetwork;
  readonly promoImage?: Maybe<Scalars['String']['output']>;
  readonly promoImages: ReadonlyArray<Scalars['String']['output']>;
  readonly roundDisplay: Scalars['String']['output'];
  readonly roundNumber: Scalars['Int']['output'];
  readonly startTime: Scalars['AWSTimestamp']['output'];
  readonly streamTitle: Scalars['String']['output'];
};

export type BroadcastFeaturedHole = {
  readonly __typename: 'BroadcastFeaturedHole';
  readonly channelTitle: Scalars['String']['output'];
  readonly courseId?: Maybe<Scalars['String']['output']>;
  readonly endTime: Scalars['AWSTimestamp']['output'];
  readonly featuredHoles: ReadonlyArray<Scalars['Int']['output']>;
  readonly id: Scalars['String']['output'];
  readonly liveStatus: LiveStatus;
  readonly network: BroadcastNetwork;
  readonly promoImage?: Maybe<Scalars['String']['output']>;
  readonly promoImages: ReadonlyArray<Scalars['String']['output']>;
  readonly roundDisplay: Scalars['String']['output'];
  readonly roundNumber: Scalars['Int']['output'];
  readonly startTime: Scalars['AWSTimestamp']['output'];
  readonly streamTitle: Scalars['String']['output'];
};

export type BroadcastFullTelecast = {
  readonly __typename: 'BroadcastFullTelecast';
  readonly channelTitle: Scalars['String']['output'];
  readonly endTime: Scalars['AWSTimestamp']['output'];
  readonly id: Scalars['String']['output'];
  readonly liveStatus: LiveStatus;
  readonly network: BroadcastNetwork;
  readonly promoImage?: Maybe<Scalars['String']['output']>;
  readonly promoImages: ReadonlyArray<Scalars['String']['output']>;
  readonly roundDisplay: Scalars['String']['output'];
  readonly roundNumber: Scalars['Int']['output'];
  readonly startTime: Scalars['AWSTimestamp']['output'];
  readonly streamTitle: Scalars['String']['output'];
};

export type BroadcastGroup = {
  readonly __typename: 'BroadcastGroup';
  readonly extendedCoverage?: Maybe<Scalars['Boolean']['output']>;
  readonly id: Scalars['String']['output'];
  readonly liveStatus: LiveStatus;
  readonly playerLastNames?: Maybe<ReadonlyArray<Maybe<Scalars['String']['output']>>>;
};

export type BroadcastNetwork = {
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
  readonly networkLogoAsset?: Maybe<ImageAsset>;
  /** @deprecated Use networkLogoDarkAsset */
  readonly networkLogoDark?: Maybe<Scalars['String']['output']>;
  readonly networkLogoDarkAsset?: Maybe<ImageAsset>;
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

export type BroadcastNetworks = {
  readonly __typename: 'BroadcastNetworks';
  readonly networks: ReadonlyArray<BroadcastNetwork>;
};

export type BroadcastTableFragment = {
  readonly __typename: 'BroadcastTableFragment';
  readonly path: Scalars['String']['output'];
  readonly webviewUrl: Scalars['String']['output'];
};

export type BubblePill = {
  readonly __typename: 'BubblePill';
  readonly iconDark: ImageAsset;
  readonly iconLight: ImageAsset;
  readonly pillText: Scalars['String']['output'];
};

export type BubbleType =
  | 'PLAYOFFS'
  | 'SIGNATURE_EVENTS';

export type BubbleWatch = {
  readonly __typename: 'BubbleWatch';
  readonly bubbleId: Scalars['ID']['output'];
  readonly bubbleType: BubbleType;
  readonly items: ReadonlyArray<BubbleWatchItem>;
};

export type BubbleWatchItem = {
  readonly __typename: 'BubbleWatchItem';
  readonly info?: Maybe<Scalars['String']['output']>;
  readonly infoDesc?: Maybe<Scalars['String']['output']>;
  readonly standings: TourCupRankingEvent;
};

export type CallToAction = {
  readonly __typename: 'CallToAction';
  readonly color?: Maybe<Scalars['String']['output']>;
  readonly fontColor?: Maybe<Scalars['String']['output']>;
  readonly link: Scalars['String']['output'];
  readonly target?: Maybe<Scalars['String']['output']>;
  readonly text: Scalars['String']['output'];
  readonly webViewLink?: Maybe<Scalars['String']['output']>;
};

export type Category = {
  readonly __typename: 'Category';
  readonly displayName: Scalars['String']['output'];
  readonly franchises: ReadonlyArray<Franchise>;
  readonly queryValue: Scalars['String']['output'];
};

export type CategoryPlayerStat = {
  readonly __typename: 'CategoryPlayerStat';
  readonly color: StatColor;
  readonly statName: Scalars['String']['output'];
  readonly statValue: Scalars['String']['output'];
};

export type CategoryStat = {
  readonly __typename: 'CategoryStat';
  readonly displaySeason: Scalars['String']['output'];
  readonly lastProcessed: Scalars['String']['output'];
  readonly players: ReadonlyArray<CategoryStatPlayer>;
  readonly statDescription: Scalars['String']['output'];
  readonly statHeaders: ReadonlyArray<Scalars['String']['output']>;
  readonly statTitle: Scalars['String']['output'];
  readonly tourAvg?: Maybe<Scalars['String']['output']>;
  readonly year: Scalars['Int']['output'];
};

export type CategoryStatPlayer = {
  readonly __typename: 'CategoryStatPlayer';
  readonly playerId: Scalars['String']['output'];
  readonly playerName: Scalars['String']['output'];
  readonly rank: Scalars['Int']['output'];
  readonly rankChangeTendency?: Maybe<StatRankMovement>;
  readonly rankDiff: Scalars['String']['output'];
  readonly stats: ReadonlyArray<CategoryPlayerStat>;
};

export type CategoryStatType =
  | 'EVENT'
  | 'YTD';

export type CerosEmbedPlugin = {
  readonly __typename: 'CerosEmbedPlugin';
  readonly aspectRatio: Scalars['Float']['output'];
  readonly id: Scalars['ID']['output'];
  readonly mobileAspectRatio: Scalars['Float']['output'];
  readonly padding: Scalars['Float']['output'];
  readonly title: Scalars['String']['output'];
  readonly url: Scalars['String']['output'];
};

export type ContentCarousel = Image | Video;

export type ContentFragment = {
  readonly __typename: 'ContentFragment';
  readonly fragments: ReadonlyArray<ContentFragments>;
  readonly pageMetadata: PageMetadata;
  readonly totalLength: Scalars['Int']['output'];
};

export type ContentFragmentTab = {
  readonly __typename: 'ContentFragmentTab';
  readonly contentType: ContentType;
  readonly label?: Maybe<Scalars['String']['output']>;
  readonly path: Scalars['String']['output'];
  readonly webview?: Maybe<Scalars['String']['output']>;
};

export type ContentFragmentTabs = {
  readonly __typename: 'ContentFragmentTabs';
  readonly pageHeader: Scalars['String']['output'];
  readonly partnerShipAssets?: Maybe<ReadonlyArray<Scalars['String']['output']>>;
  readonly path: Scalars['String']['output'];
  readonly tabs: ReadonlyArray<ContentFragmentTab>;
};

export type ContentFragmentType = {
  readonly __typename: 'ContentFragmentType';
  readonly contentType: ContentType;
  readonly path: Scalars['String']['output'];
};

export type ContentFragments = BrazeFragment | DropdownFragment | HomepageLead | HomepageNews | HomepageProgramStanding | KopHeader | KopSignUp | KopStandingsList | KopSubheader | KopUpcomingTournament | KopUserProfile | KopZigZag | MediaGallery | OddsToWinTracker | TglBoxScoreFragment | ThreeUpPhoto | ThreeUpStats | TwoColumn | VideoHero;

export type ContentFragmentsCompressed = {
  readonly __typename: 'ContentFragmentsCompressed';
  readonly limit?: Maybe<Scalars['Int']['output']>;
  readonly offset?: Maybe<Scalars['Int']['output']>;
  readonly path?: Maybe<Scalars['String']['output']>;
  readonly payload: Scalars['String']['output'];
  readonly tourCode: TourCode;
};

export type ContentStat = {
  readonly __typename: 'ContentStat';
  readonly statId: Scalars['String']['output'];
  readonly statName: Scalars['String']['output'];
};

export type ContentStory = {
  readonly __typename: 'ContentStory';
  readonly desktopLatestNewsIndex?: Maybe<Scalars['Int']['output']>;
  readonly mobileLatestNewsIndex?: Maybe<Scalars['Int']['output']>;
  readonly path: Scalars['String']['output'];
  readonly sectionHeader?: Maybe<Scalars['String']['output']>;
  readonly storyType?: Maybe<Story_Type>;
  readonly topicLabels?: Maybe<ReadonlyArray<Scalars['String']['output']>>;
};

export type ContentTopics = {
  readonly __typename: 'ContentTopics';
  readonly displayValue?: Maybe<Scalars['String']['output']>;
  readonly value?: Maybe<Scalars['String']['output']>;
};

export type ContentType =
  | 'CONTENT_FRAGMENTS'
  | 'CONTENT_TABS'
  | 'GENERIC_CONTENT'
  | 'NEWS_ARTICLE'
  | 'RYDER_CUP_CONTENT_FRAGMENTS'
  | 'RYDER_CUP_CONTENT_TABS'
  | 'RYDER_CUP_GENERIC_CONTENT'
  | 'RYDER_CUP_NEWS_ARTICLE';

export type ContentVideoCarousel = {
  readonly __typename: 'ContentVideoCarousel';
  readonly bottomCta?: Maybe<CallToAction>;
  readonly sectionTitle?: Maybe<Scalars['String']['output']>;
  readonly topCta?: Maybe<CallToAction>;
  readonly videos?: Maybe<ReadonlyArray<Video>>;
};

export type Course = {
  readonly __typename: 'Course';
  readonly courseCode: Scalars['String']['output'];
  readonly courseName: Scalars['String']['output'];
  readonly enabled?: Maybe<Scalars['Boolean']['output']>;
  readonly features?: Maybe<ReadonlyArray<TeeTimesFeature>>;
  readonly hostCourse: Scalars['Boolean']['output'];
  readonly id: Scalars['ID']['output'];
  readonly scoringLevel: ScoringLevel;
};

export type CourseDetailRowValue = {
  readonly __typename: 'CourseDetailRowValue';
  readonly tendency?: Maybe<ScoringTendency>;
  readonly value: Scalars['String']['output'];
};

export type CourseFilter = {
  readonly __typename: 'CourseFilter';
  readonly courseId: Scalars['Int']['output'];
  readonly courseName: Scalars['String']['output'];
};

export type CourseHoleHeader = {
  readonly __typename: 'CourseHoleHeader';
  readonly courseId: Scalars['ID']['output'];
  readonly holeHeaders: ReadonlyArray<HoleHeaderV2>;
};

export type CourseHoleStats = {
  readonly __typename: 'CourseHoleStats';
  /** @deprecated Use paceOfPlay field instead */
  readonly averagePaceOfPlay?: Maybe<Scalars['String']['output']>;
  readonly birdies?: Maybe<Scalars['Int']['output']>;
  readonly bogeys?: Maybe<Scalars['Int']['output']>;
  readonly courseHoleNum: Scalars['Int']['output'];
  readonly doubleBogey?: Maybe<Scalars['Int']['output']>;
  readonly eagles?: Maybe<Scalars['Int']['output']>;
  readonly holeImage: Scalars['String']['output'];
  readonly holePickle?: Maybe<HolePickle>;
  /** @deprecated Use holePickleGreenLeftToRightAsset */
  readonly holePickleGreenLeftToRight: Scalars['String']['output'];
  readonly holePickleGreenLeftToRightAsset: ImageAsset;
  /** @deprecated Use broadcast api indication instead of this. */
  readonly live: Scalars['Boolean']['output'];
  readonly paceOfPlay?: Maybe<CourseHoleStatsPaceData>;
  readonly parValue: Scalars['String']['output'];
  readonly pars?: Maybe<Scalars['Int']['output']>;
  readonly pinGreen: PointOfInterestCoords;
  readonly rank?: Maybe<Scalars['Int']['output']>;
  readonly scoringAverage: Scalars['String']['output'];
  readonly scoringAverageDiff: Scalars['String']['output'];
  readonly scoringDiffTendency: ScoringTendency;
  readonly yards: Scalars['Int']['output'];
};

export type CourseHoleStatsPaceData = {
  readonly __typename: 'CourseHoleStatsPaceData';
  readonly approachRank?: Maybe<Scalars['String']['output']>;
  readonly approachTime?: Maybe<Scalars['String']['output']>;
  readonly averageHoleRank?: Maybe<Scalars['String']['output']>;
  readonly averageHoleTime?: Maybe<Scalars['String']['output']>;
  readonly offTeeRank?: Maybe<Scalars['String']['output']>;
  readonly offTeeTime?: Maybe<Scalars['String']['output']>;
  readonly overallRank?: Maybe<Scalars['String']['output']>;
  readonly overallTime?: Maybe<Scalars['String']['output']>;
  readonly puttingRank?: Maybe<Scalars['String']['output']>;
  readonly puttingTime?: Maybe<Scalars['String']['output']>;
};

export type CourseInfo = {
  readonly __typename: 'CourseInfo';
  readonly bottomCta?: Maybe<CallToAction>;
  readonly coursePhotos?: Maybe<ReadonlyArray<Scalars['String']['output']>>;
  readonly cta1?: Maybe<CallToAction>;
  readonly cta2?: Maybe<CallToAction>;
  readonly subhead?: Maybe<Scalars['String']['output']>;
  readonly title?: Maybe<Scalars['String']['output']>;
  readonly topCta?: Maybe<CallToAction>;
};

export type CourseOverviewInfo = {
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

export type CourseOverviewItem = {
  readonly __typename: 'CourseOverviewItem';
  readonly details: ReadonlyArray<CourseOverviewItemDetails>;
  readonly displayName: Scalars['String']['output'];
  readonly image: Scalars['String']['output'];
  readonly rank: Scalars['Int']['output'];
};

export type CourseOverviewItemDetails = {
  readonly __typename: 'CourseOverviewItemDetails';
  readonly label: Scalars['String']['output'];
  readonly value: Scalars['String']['output'];
};

export type CoursePills = {
  readonly __typename: 'CoursePills';
  readonly courseId: Scalars['String']['output'];
  readonly courseName: Scalars['String']['output'];
};

export type CourseResultsTournament = {
  readonly __typename: 'CourseResultsTournament';
  readonly points: Scalars['String']['output'];
  readonly position: Scalars['String']['output'];
  readonly roundScores: ReadonlyArray<RoundScoreItem>;
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

export type CourseRound = {
  readonly __typename: 'CourseRound';
  readonly enablePaceOfPlay?: Maybe<Scalars['Boolean']['output']>;
  readonly holeStats: ReadonlyArray<HoleStat>;
  readonly live: Scalars['Boolean']['output'];
  readonly paceOfPlayDescription?: Maybe<Scalars['String']['output']>;
  readonly paceOfPlayHeader: Scalars['String']['output'];
  readonly paceOfPlayLabelTitle?: Maybe<Scalars['String']['output']>;
  readonly roundHeader: Scalars['String']['output'];
  readonly roundNum?: Maybe<Scalars['Int']['output']>;
  readonly scoringHeader: Scalars['String']['output'];
};

export type CourseStat = {
  readonly __typename: 'CourseStat';
  readonly courseCode: Scalars['String']['output'];
  readonly courseId: Scalars['String']['output'];
  readonly courseImage: Scalars['String']['output'];
  readonly courseName: Scalars['String']['output'];
  readonly courseOverview: TournamentCourse;
  readonly holeDetailsAvailability: HoleDetailsAvailability;
  readonly hostCourse: Scalars['Boolean']['output'];
  readonly par: Scalars['Int']['output'];
  readonly roundHoleStats: ReadonlyArray<CourseRound>;
  readonly roundPills?: Maybe<ReadonlyArray<Scalars['String']['output']>>;
  readonly shotlinkLogo?: Maybe<Scalars['String']['output']>;
  readonly tournamentId: Scalars['ID']['output'];
  readonly yardage: Scalars['String']['output'];
};

export type CourseStatsCategory = {
  readonly __typename: 'CourseStatsCategory';
  readonly detailId: CourseStatsId;
  readonly header: Scalars['String']['output'];
  readonly items: ReadonlyArray<CourseOverviewItem>;
};

export type CourseStatsDetails = {
  readonly __typename: 'CourseStatsDetails';
  readonly displayName: Scalars['String']['output'];
  readonly displayYear: Scalars['String']['output'];
  readonly headers: ReadonlyArray<Scalars['String']['output']>;
  readonly round: ToughestRound;
  readonly roundPills: ReadonlyArray<ToughestCourseRoundPills>;
  readonly rows: ReadonlyArray<CourseStatsDetailsRow>;
  readonly seasons: ReadonlyArray<StatYearPills>;
  readonly shareURL?: Maybe<Scalars['String']['output']>;
  readonly tableName: Scalars['String']['output'];
  readonly tourCode: TourCode;
  readonly year: Scalars['Int']['output'];
};

export type CourseStatsDetailsRow = {
  readonly __typename: 'CourseStatsDetailsRow';
  readonly displayName: Scalars['String']['output'];
  readonly rank: Scalars['Int']['output'];
  readonly tournamentId: Scalars['String']['output'];
  readonly tournamentName: Scalars['String']['output'];
  readonly values: ReadonlyArray<CourseDetailRowValue>;
};

export type CourseStatsId =
  | 'TOUGHEST_COURSE'
  | 'TOUGHEST_HOLES';

export type CourseStatsOverview = {
  readonly __typename: 'CourseStatsOverview';
  readonly categories: ReadonlyArray<CourseStatsCategory>;
  readonly tourCode: TourCode;
  readonly year: Scalars['Int']['output'];
};

export type CupLeaderboardMatch = {
  readonly __typename: 'CupLeaderboardMatch';
  readonly displayScore: Scalars['String']['output'];
  readonly euMatchWin?: Maybe<Scalars['Float']['output']>;
  readonly holeScores?: Maybe<ReadonlyArray<CupLeaderboardMatchHoles>>;
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
  readonly teams: ReadonlyArray<CupLeaderboardMatchTeam>;
  readonly teeTime: Scalars['AWSTimestamp']['output'];
  readonly tourcastURI?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastURL?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastURLWeb?: Maybe<Scalars['String']['output']>;
  readonly usMatchWin?: Maybe<Scalars['Float']['output']>;
};

export type CupLeaderboardMatchHoles = {
  readonly __typename: 'CupLeaderboardMatchHoles';
  readonly holeNumber: Scalars['String']['output'];
  readonly holeNumberColor: Scalars['String']['output'];
  readonly holeOutlineColor?: Maybe<Scalars['String']['output']>;
  readonly holePlayedStatus: HolePlayedStatus;
};

export type CupLeaderboardMatchPlayer = {
  readonly __typename: 'CupLeaderboardMatchPlayer';
  readonly color?: Maybe<Scalars['String']['output']>;
  readonly displayName: Scalars['String']['output'];
  readonly firstName?: Maybe<Scalars['String']['output']>;
  readonly hideHeadshot?: Maybe<Scalars['Boolean']['output']>;
  readonly lastName?: Maybe<Scalars['String']['output']>;
  readonly playerId: Scalars['ID']['output'];
  readonly results?: Maybe<CupLeaderboardMatchPlayerResults>;
  readonly shortName: Scalars['String']['output'];
};

export type CupLeaderboardMatchPlayerResults = {
  readonly __typename: 'CupLeaderboardMatchPlayerResults';
  readonly losses: Scalars['String']['output'];
  readonly ties: Scalars['String']['output'];
  readonly total: Scalars['String']['output'];
  readonly wins: Scalars['String']['output'];
};

export type CupLeaderboardMatchTeam = {
  readonly __typename: 'CupLeaderboardMatchTeam';
  readonly flagSurroundColor?: Maybe<Scalars['String']['output']>;
  readonly flagSurroundColorDark?: Maybe<Scalars['String']['output']>;
  readonly players: ReadonlyArray<CupLeaderboardMatchPlayer>;
  readonly status: CupLeaderboardTeamStatus;
  readonly teamColor: Scalars['String']['output'];
  readonly teamFlag: Scalars['String']['output'];
  readonly teamId: Scalars['ID']['output'];
  readonly teamName: Scalars['String']['output'];
  readonly teamScore?: Maybe<Scalars['String']['output']>;
  readonly teamStoryContentInfo?: Maybe<ReadonlyArray<TeamStoryContentInfo>>;
  readonly textColor?: Maybe<Scalars['String']['output']>;
};

export type CupLeaderboardTeamStatus =
  | 'BEHIND'
  | 'LEADS'
  | 'TIED'
  | 'UNKNOWN'
  | 'WINS';

export type CupLiveActivitySponsor = {
  readonly __typename: 'CupLiveActivitySponsor';
  readonly sponsorLogo?: Maybe<Scalars['String']['output']>;
  readonly sponsorText?: Maybe<Scalars['String']['output']>;
};

export type CupMatchesCompleteData = {
  readonly __typename: 'CupMatchesCompleteData';
  readonly completedMatches: Scalars['Int']['output'];
  readonly totalMatches: Scalars['Int']['output'];
};

export type CupOverviewDisplayType =
  | 'POINTS_ONLY'
  | 'PROGRESS';

export type CupPastResults = {
  readonly __typename: 'CupPastResults';
  readonly permId: Scalars['ID']['output'];
  readonly years: ReadonlyArray<CupPastResultsYear>;
};

export type CupPastResultsTeam = {
  readonly __typename: 'CupPastResultsTeam';
  readonly badgeText?: Maybe<Scalars['String']['output']>;
  readonly color: Scalars['String']['output'];
  readonly score: Scalars['String']['output'];
  readonly teamId: Scalars['ID']['output'];
  readonly teamLogo: Scalars['String']['output'];
  readonly teamName: Scalars['String']['output'];
};

export type CupPastResultsYear = {
  readonly __typename: 'CupPastResultsYear';
  readonly displayYear: Scalars['String']['output'];
  readonly teams: ReadonlyArray<CupPastResultsTeam>;
  readonly year: Scalars['Int']['output'];
};

export type CupRankMovementDirection =
  | 'CONSTANT'
  | 'DOWN'
  | 'UNKNOWN'
  | 'UP';

export type CupRankingPlayer = {
  readonly __typename: 'CupRankingPlayer';
  readonly id: Scalars['String']['output'];
  readonly movement: Scalars['String']['output'];
  readonly movementDirection: CupRankMovementDirection;
  readonly name: Scalars['String']['output'];
  readonly playerCountry: Scalars['String']['output'];
  readonly position: Scalars['String']['output'];
  readonly rankLogoDark?: Maybe<Scalars['String']['output']>;
  readonly rankLogoLight?: Maybe<Scalars['String']['output']>;
  readonly total: Scalars['String']['output'];
  readonly totals: ReadonlyArray<CupRankingTotal>;
  readonly tourBound?: Maybe<Scalars['Boolean']['output']>;
  readonly winner?: Maybe<Scalars['Boolean']['output']>;
};

export type CupRankingPlayerInfoRow = {
  readonly __typename: 'CupRankingPlayerInfoRow';
  readonly image?: Maybe<Scalars['String']['output']>;
  readonly imageDark?: Maybe<Scalars['String']['output']>;
  readonly text: Scalars['String']['output'];
};

export type CupRankingPlayerWrapper = CupRankingPlayer | CupRankingPlayerInfoRow;

export type CupRankingTotal = {
  readonly __typename: 'CupRankingTotal';
  readonly display: Scalars['String']['output'];
  readonly value: Scalars['String']['output'];
};

export type CupRound = {
  readonly __typename: 'CupRound';
  readonly roundDisplayName: Scalars['String']['output'];
  readonly roundNum: Scalars['Int']['output'];
};

export type CupRoundFormat =
  | 'ALTERNATE_SHOT'
  | 'BEST_BALL'
  | 'SINGLES';

export type CupScorecard = {
  readonly __typename: 'CupScorecard';
  readonly currentHole?: Maybe<Scalars['Int']['output']>;
  readonly displayScore: Scalars['String']['output'];
  readonly format: CupRoundFormat;
  readonly id: Scalars['ID']['output'];
  readonly infoWebUrl?: Maybe<Scalars['String']['output']>;
  readonly matchHoleScores: ReadonlyArray<MatchHole>;
  readonly matchName: Scalars['String']['output'];
  readonly matchStatus: Scalars['String']['output'];
  readonly matchStatusColor: Scalars['String']['output'];
  readonly matchStatusFlag?: Maybe<Scalars['String']['output']>;
  readonly messages: ReadonlyArray<Message>;
  readonly scorecardTitle: Scalars['String']['output'];
  readonly teams: ReadonlyArray<CupTeam>;
  readonly teeTime: Scalars['AWSTimestamp']['output'];
  readonly tourcastURI?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastUrl?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastUrlWeb?: Maybe<Scalars['String']['output']>;
};

export type CupTeam = {
  readonly __typename: 'CupTeam';
  readonly flagSurroundColor?: Maybe<Scalars['String']['output']>;
  readonly flagSurroundColorDark?: Maybe<Scalars['String']['output']>;
  readonly players?: Maybe<ReadonlyArray<MpScorecardPlayer>>;
  readonly status: CupLeaderboardTeamStatus;
  readonly teamColor: Scalars['String']['output'];
  readonly teamFlag: Scalars['String']['output'];
  readonly teamId: Scalars['ID']['output'];
  readonly teamName: Scalars['String']['output'];
  readonly teamPoints?: Maybe<Scalars['String']['output']>;
  readonly teamShortName: Scalars['String']['output'];
  readonly textColor?: Maybe<Scalars['String']['output']>;
};

export type CupTeamRoster = {
  readonly __typename: 'CupTeamRoster';
  readonly flagSurroundColor?: Maybe<Scalars['String']['output']>;
  readonly flagSurroundColorDark?: Maybe<Scalars['String']['output']>;
  readonly sections: ReadonlyArray<CupTeamRosterSection>;
  readonly teamColor: Scalars['String']['output'];
  readonly teamFlag: Scalars['String']['output'];
  readonly teamId: Scalars['ID']['output'];
  readonly teamLogo?: Maybe<Scalars['String']['output']>;
  readonly teamName: Scalars['String']['output'];
};

export type CupTeamRosterSection = {
  readonly __typename: 'CupTeamRosterSection';
  readonly players: ReadonlyArray<CupLeaderboardMatchPlayer>;
  readonly sectionTitle: Scalars['String']['output'];
  readonly showResults: Scalars['Boolean']['output'];
};

export type CupTeamRosters = {
  readonly __typename: 'CupTeamRosters';
  readonly teams: ReadonlyArray<CupTeamRoster>;
  readonly tournamentId: Scalars['ID']['output'];
};

export type CupTeeTimes = {
  readonly __typename: 'CupTeeTimes';
  readonly currentRound: Scalars['Int']['output'];
  readonly drawersEnabled: Scalars['Boolean']['output'];
  readonly id: Scalars['ID']['output'];
  readonly rounds: ReadonlyArray<CupTeeTimesRound>;
};

export type CupTeeTimesRound = {
  readonly __typename: 'CupTeeTimesRound';
  readonly adConfig: Scalars['String']['output'];
  readonly completedMatches: Scalars['Int']['output'];
  readonly matches: ReadonlyArray<CupLeaderboardMatch>;
  readonly roundDisplay: Scalars['String']['output'];
  readonly roundNum: Scalars['Int']['output'];
  readonly totalMatches: Scalars['Int']['output'];
};

export type CupTournamentLeaderboard = {
  readonly __typename: 'CupTournamentLeaderboard';
  readonly allRounds: ReadonlyArray<CupRound>;
  readonly completedMatches: Scalars['Int']['output'];
  readonly currentId: Scalars['String']['output'];
  readonly currentRound: Scalars['Int']['output'];
  readonly drawersEnabled: Scalars['Boolean']['output'];
  readonly format: CupRoundFormat;
  readonly id: Scalars['ID']['output'];
  readonly liveActivitySponsor?: Maybe<CupLiveActivitySponsor>;
  readonly matches: ReadonlyArray<CupLeaderboardMatch>;
  readonly outcomeIqLogo?: Maybe<Scalars['String']['output']>;
  readonly rounds: ReadonlyArray<CupTournamentRound>;
  readonly title: Scalars['String']['output'];
  readonly totalMatches: Scalars['Int']['output'];
  readonly tourcastURI?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastURL?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastURLWeb?: Maybe<Scalars['String']['output']>;
};

export type CupTournamentLeaderboardCompressed = {
  readonly __typename: 'CupTournamentLeaderboardCompressed';
  readonly currentId: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
  readonly payload: Scalars['String']['output'];
};

export type CupTournamentRound = {
  readonly __typename: 'CupTournamentRound';
  readonly adConfig: Scalars['String']['output'];
  readonly description: Scalars['String']['output'];
  readonly format: CupRoundFormat;
  readonly roundNumber: Scalars['Int']['output'];
};

export type CupTournamentStatus = {
  readonly __typename: 'CupTournamentStatus';
  readonly heroImage?: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly infoPath?: Maybe<Scalars['String']['output']>;
  readonly matchesComplete?: Maybe<CupMatchesCompleteData>;
  readonly messages: ReadonlyArray<LeaderboardMessage>;
  readonly miniLeaderboardOverride?: Maybe<Scalars['String']['output']>;
  readonly scorecardEnabled: Scalars['Boolean']['output'];
  readonly stickyBanner: Scalars['Boolean']['output'];
  readonly teams: ReadonlyArray<CupTournamentTeam>;
  readonly tournamentId: Scalars['String']['output'];
  readonly type: CupOverviewDisplayType;
};

export type CupTournamentTeam = {
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

export type CurrentLeaderPlayer = {
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
  readonly playerIcon?: Maybe<LeaderboardPlayerIcon>;
  readonly playerState?: Maybe<PlayerState>;
  readonly position: Scalars['String']['output'];
  readonly roundHeader: Scalars['String']['output'];
  readonly roundScore: Scalars['String']['output'];
  readonly shortName: Scalars['String']['output'];
  readonly teeTime?: Maybe<Scalars['AWSTimestamp']['output']>;
  readonly thru: Scalars['String']['output'];
  readonly totalScore: Scalars['String']['output'];
};

export type CurrentLeaderSponsors = {
  readonly __typename: 'CurrentLeaderSponsors';
  readonly images: ReadonlyArray<SponsorImage>;
  readonly text: Scalars['String']['output'];
};

export type CurrentLeaders = {
  readonly __typename: 'CurrentLeaders';
  readonly hideRolexClock: Scalars['Boolean']['output'];
  readonly hideSov: Scalars['Boolean']['output'];
  readonly id: Scalars['ID']['output'];
  readonly miniatureLeaderboardExternalLinkOverride?: Maybe<Scalars['String']['output']>;
  readonly miniatureLeaderboardImgOverride?: Maybe<Scalars['String']['output']>;
  readonly players: ReadonlyArray<CurrentLeaderPlayer>;
  readonly profileEnabled: Scalars['Boolean']['output'];
  readonly roundDisplay: Scalars['String']['output'];
  readonly roundStatus: RoundStatus;
  readonly roundStatusColor: RoundStatusColor;
  readonly roundStatusDisplay: Scalars['String']['output'];
  readonly sponsor?: Maybe<CurrentLeaderSponsors>;
  readonly tournamentName: Scalars['String']['output'];
};

export type CurrentLeadersCompressed = {
  readonly __typename: 'CurrentLeadersCompressed';
  readonly id: Scalars['ID']['output'];
  readonly payload: Scalars['String']['output'];
};

export type CutLineInfo = {
  readonly __typename: 'CutLineInfo';
  readonly lastUpdated: Scalars['AWSTimestamp']['output'];
  readonly new?: Maybe<Scalars['Boolean']['output']>;
  readonly possibleCutLines: ReadonlyArray<CutLinePossibility>;
  readonly probableCutLine: Scalars['String']['output'];
  readonly projectedCutLine: Scalars['String']['output'];
  readonly sponsorLogo?: Maybe<ImageAsset>;
  readonly sponsorName?: Maybe<Scalars['String']['output']>;
};

export type CutLinePossibility = {
  readonly __typename: 'CutLinePossibility';
  readonly displayProbability: Scalars['String']['output'];
  readonly probability: Scalars['Float']['output'];
  readonly score: Scalars['String']['output'];
};

export type DayWeather = {
  readonly __typename: 'DayWeather';
  readonly day: Scalars['String']['output'];
  readonly text: Scalars['String']['output'];
};

export type DeleteAccountResponse = {
  readonly __typename: 'DeleteAccountResponse';
  readonly ok: Scalars['Boolean']['output'];
};

export type DrawerDisplayState =
  | 'HOLE_ONLY'
  | 'PLAY_BY_PLAY'
  | 'ROUND_COMPLETE'
  | 'TEE_TIME';

export type DropdownFragment = {
  readonly __typename: 'DropdownFragment';
  readonly bottomCta?: Maybe<CallToAction>;
  readonly header: Scalars['String']['output'];
  readonly rows: ReadonlyArray<DropdownRow>;
  readonly subheader?: Maybe<Scalars['String']['output']>;
  readonly topCta?: Maybe<CallToAction>;
};

export type DropdownRow = {
  readonly __typename: 'DropdownRow';
  readonly content?: Maybe<ReadonlyArray<Maybe<NewsArticleNode>>>;
  readonly cta?: Maybe<CallToAction>;
  readonly header: Scalars['String']['output'];
};

export type EfiHole = {
  readonly __typename: 'EFIHole';
  readonly count: Scalars['String']['output'];
  readonly hole: Scalars['String']['output'];
};

export type EfiPlayer = {
  readonly __typename: 'EFIPlayer';
  readonly displayName: Scalars['String']['output'];
  readonly history: ReadonlyArray<EfiPlayerEagle>;
  readonly playerId: Scalars['ID']['output'];
  readonly totalEagles: Scalars['String']['output'];
};

export type EfiPlayerEagle = {
  readonly __typename: 'EFIPlayerEagle';
  readonly hole: Scalars['Int']['output'];
  readonly round: Scalars['Int']['output'];
  readonly videoId?: Maybe<Scalars['String']['output']>;
};

export type EaglesForImpact = {
  readonly __typename: 'EaglesForImpact';
  readonly charity: Scalars['String']['output'];
  readonly donation: Scalars['String']['output'];
  readonly eaglesTitle: Scalars['String']['output'];
  readonly holes: ReadonlyArray<EfiHole>;
  readonly linkText?: Maybe<Scalars['String']['output']>;
  readonly linkUrl?: Maybe<Scalars['String']['output']>;
  readonly players: ReadonlyArray<EfiPlayer>;
  readonly sponsorDescription: Scalars['String']['output'];
  /** @deprecated use sponsorLogoAsset */
  readonly sponsorLogo: Scalars['String']['output'];
  readonly sponsorLogoAsset: ImageAsset;
  readonly title: Scalars['String']['output'];
  readonly totalEagles: Scalars['String']['output'];
  readonly tournamentId: Scalars['ID']['output'];
};

/**   Player Odds V2 */
export type EntityOdds = {
  readonly __typename: 'EntityOdds';
  readonly bettingProfile?: Maybe<Scalars['String']['output']>;
  readonly entityId: Scalars['ID']['output'];
  readonly marketPills: ReadonlyArray<MarketPill>;
  /**   others available to request */
  readonly markets: ReadonlyArray<Market>;
  readonly message?: Maybe<OddsMessage>;
  readonly provider: OddsProvider;
  /**   playerId or teamId */
  readonly tournamentId: Scalars['String']['output'];
};

export type Episode = {
  readonly __typename: 'Episode';
  readonly date: Scalars['AWSTimestamp']['output'];
  readonly description: Scalars['String']['output'];
  readonly duration: Scalars['Int']['output'];
  readonly podcastId: Scalars['String']['output'];
  readonly streamUrl: Scalars['String']['output'];
  readonly title: Scalars['String']['output'];
};

export type Event = {
  readonly __typename: 'Event';
  readonly eventName: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
  readonly leaderboardId: Scalars['String']['output'];
};

export type EventGuideConfig = {
  readonly __typename: 'EventGuideConfig';
  readonly augmentedReality?: Maybe<AugmentedRealityConfig>;
  readonly eventGuideMap?: Maybe<Scalars['String']['output']>;
  readonly eventGuideURL?: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
};

export type EventHub = {
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

export type EventHubTable = {
  readonly __typename: 'EventHubTable';
  readonly cta?: Maybe<CallToAction>;
  readonly mapCtaText?: Maybe<Scalars['String']['output']>;
  readonly mapIframe?: Maybe<Scalars['String']['output']>;
  readonly mapPdf?: Maybe<Scalars['String']['output']>;
  readonly mapSectionTitle?: Maybe<Scalars['String']['output']>;
  readonly notSharingLocationCta?: Maybe<CallToAction>;
  readonly notSharingLocationFallbackDescriptionText?: Maybe<Scalars['String']['output']>;
  readonly notSharingLocationFallbackTitle?: Maybe<Scalars['String']['output']>;
  readonly outOfRangeCta?: Maybe<CallToAction>;
  readonly outOfRangeFallbackDescriptionText?: Maybe<Scalars['String']['output']>;
  readonly outOfRangeFallbackPromoImg?: Maybe<Scalars['String']['output']>;
  readonly outOfRangeFallbackTitle?: Maybe<Scalars['String']['output']>;
  readonly partnershipAsset?: Maybe<Scalars['String']['output']>;
  readonly partnershipText?: Maybe<Scalars['String']['output']>;
  readonly path: Scalars['String']['output'];
  readonly radius?: Maybe<Scalars['Float']['output']>;
  readonly sectionTitle?: Maybe<Scalars['String']['output']>;
};

export type EventRegion =
  | 'EUROPE'
  | 'INTERNATIONAL'
  | 'US';

export type ExpertPicks = {
  readonly __typename: 'ExpertPicks';
  readonly expertPicksTableRows: ReadonlyArray<ExpertPicksTableRow>;
  readonly tournamentName: Scalars['String']['output'];
};

export type ExpertPicksNode = {
  readonly __typename: 'ExpertPicksNode';
  readonly isPowerRankings: Scalars['Boolean']['output'];
  readonly path: Scalars['String']['output'];
};

export type ExpertPicksTableRow = {
  readonly __typename: 'ExpertPicksTableRow';
  readonly comment: ReadonlyArray<TourSponsorDescription>;
  readonly expertName?: Maybe<Scalars['String']['output']>;
  readonly expertTitle?: Maybe<Scalars['String']['output']>;
  readonly lineup: ReadonlyArray<PlayerInfo>;
  readonly percentSelected?: Maybe<Scalars['String']['output']>;
  readonly percentSelectedColor?: Maybe<StatColor>;
  readonly winner?: Maybe<PlayerInfo>;
};

export type FavoritePlayer = {
  readonly __typename: 'FavoritePlayer';
  readonly id: Scalars['ID']['output'];
};

export type FavoritePlayerInput = {
  readonly id: Scalars['ID']['input'];
};

export type FavoriteTourResponse = {
  readonly __typename: 'FavoriteTourResponse';
  readonly ok: Scalars['Boolean']['output'];
  readonly tourCode?: Maybe<TourCode>;
};

export type FeatureItem = {
  readonly __typename: 'FeatureItem';
  readonly fieldStatType?: Maybe<FieldStatType>;
  readonly leaderboardFeatures?: Maybe<LeaderboardFeature>;
  readonly name: Scalars['String']['output'];
  readonly new: Scalars['Boolean']['output'];
  readonly sponsor?: Maybe<FeatureSponsor>;
  readonly tooltipText?: Maybe<Scalars['String']['output']>;
  readonly tooltipTitle?: Maybe<Scalars['String']['output']>;
};

export type FeatureSponsor = {
  readonly __typename: 'FeatureSponsor';
  /** @deprecated use sponsorLogoAsset */
  readonly sponsorLogo: Scalars['String']['output'];
  readonly sponsorLogoAsset: ImageAsset;
  /** @deprecated use sponsorLogoDarkAsset */
  readonly sponsorLogoDark: Scalars['String']['output'];
  readonly sponsorLogoDarkAsset: ImageAsset;
  readonly sponsorText: Scalars['String']['output'];
};

export type Field = {
  readonly __typename: 'Field';
  readonly alternates: ReadonlyArray<PlayerField>;
  readonly features: ReadonlyArray<FeatureItem>;
  readonly hideSov: Scalars['Boolean']['output'];
  readonly id: Scalars['ID']['output'];
  readonly lastUpdated?: Maybe<Scalars['AWSTimestamp']['output']>;
  readonly message?: Maybe<Scalars['String']['output']>;
  readonly players: ReadonlyArray<PlayerField>;
  readonly standingsHeader: Scalars['String']['output'];
  readonly tournamentName: Scalars['String']['output'];
};

export type FieldGroup = {
  readonly __typename: 'FieldGroup';
  readonly groupId?: Maybe<Scalars['String']['output']>;
  readonly groupTitle: Scalars['String']['output'];
  readonly players: ReadonlyArray<PlayerField>;
};

export type FieldPromoSection = {
  readonly __typename: 'FieldPromoSection';
  readonly title: Scalars['String']['output'];
  readonly tournamentIds: ReadonlyArray<Scalars['String']['output']>;
};

export type FieldStatCourseFit = {
  readonly __typename: 'FieldStatCourseFit';
  readonly playerId: Scalars['String']['output'];
  readonly score: Scalars['String']['output'];
  readonly stats: ReadonlyArray<FieldStatCourseFitStat>;
  readonly totalRounds: Scalars['String']['output'];
};

export type FieldStatCourseFitStat = {
  readonly __typename: 'FieldStatCourseFitStat';
  readonly statColor: StatColor;
  readonly statRank: Scalars['String']['output'];
  readonly statValue: Scalars['String']['output'];
};

export type FieldStatCurrentForm = {
  readonly __typename: 'FieldStatCurrentForm';
  readonly playerId: Scalars['String']['output'];
  readonly strokesGained: ReadonlyArray<FieldStatStrokesGained>;
  readonly strokesGainedHeader: ReadonlyArray<Scalars['String']['output']>;
  readonly totalRounds: Scalars['String']['output'];
  readonly tournamentResults: ReadonlyArray<FieldStatTournamentResult>;
};

export type FieldStatPlayer = FieldStatCourseFit | FieldStatCurrentForm;

export type FieldStatStrokesGained = {
  readonly __typename: 'FieldStatStrokesGained';
  readonly statColor: StatColor;
  readonly statId: Scalars['String']['output'];
  readonly statValue: Scalars['String']['output'];
};

export type FieldStatTournamentResult = {
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

export type FieldStatType =
  | 'COURSE_FIT'
  | 'CURRENT_FORM'
  | 'TOURNAMENT_HISTORY';

export type FieldStats = {
  readonly __typename: 'FieldStats';
  readonly fieldStatType: FieldStatType;
  readonly players: ReadonlyArray<FieldStatPlayer>;
  readonly statHeaders?: Maybe<ReadonlyArray<Scalars['String']['output']>>;
  readonly tournamentId: Scalars['ID']['output'];
  readonly tournamentSeasonHeaders?: Maybe<ReadonlyArray<SeasonDisplayHeader>>;
};

export type FinishStatValue = {
  readonly __typename: 'FinishStatValue';
  readonly date: Scalars['Int']['output'];
  readonly displayDate: Scalars['String']['output'];
  readonly displayValue: Scalars['String']['output'];
  readonly tournamentName: Scalars['String']['output'];
  readonly value: Scalars['Float']['output'];
};

export type FormatType =
  | 'MATCH_PLAY'
  | 'STABLEFORD'
  | 'STROKE_PLAY'
  | 'TEAM_CUP'
  | 'TEAM_STROKE';

export type Franchise = {
  readonly __typename: 'Franchise';
  readonly displayName: Scalars['String']['output'];
  readonly queryValue: Scalars['String']['output'];
};

export type FranchisePillConfig = {
  readonly __typename: 'FranchisePillConfig';
  readonly category?: Maybe<Scalars['String']['output']>;
  readonly franchises: ReadonlyArray<Franchise>;
  readonly rating?: Maybe<Scalars['Int']['output']>;
};

export type FutureVenuesCard = {
  readonly __typename: 'FutureVenuesCard';
  readonly course?: Maybe<Scalars['String']['output']>;
  readonly coursePhoto?: Maybe<Scalars['String']['output']>;
  readonly cta?: Maybe<CallToAction>;
  readonly location?: Maybe<Scalars['String']['output']>;
  readonly venueLink?: Maybe<Scalars['String']['output']>;
  readonly year?: Maybe<Scalars['String']['output']>;
};

export type FutureVenuesFragment = {
  readonly __typename: 'FutureVenuesFragment';
  readonly bottomCta?: Maybe<CallToAction>;
  readonly cards?: Maybe<ReadonlyArray<FutureVenuesCard>>;
  readonly sectionTitle?: Maybe<Scalars['String']['output']>;
  readonly topCta?: Maybe<CallToAction>;
};

export type FutureVenuesRow = {
  readonly __typename: 'FutureVenuesRow';
  /** @deprecated Use beautyImageAsset */
  readonly beautyImage?: Maybe<Scalars['String']['output']>;
  readonly beautyImageAsset?: Maybe<ImageAsset>;
  readonly course?: Maybe<Scalars['String']['output']>;
  readonly eventDates?: Maybe<Scalars['String']['output']>;
  readonly hospitalityLink?: Maybe<Scalars['String']['output']>;
  readonly hospitalityLinkTarget?: Maybe<Scalars['String']['output']>;
  readonly location?: Maybe<Scalars['String']['output']>;
  readonly moreInfoDescription?: Maybe<ReadonlyArray<Maybe<NewsArticleNode>>>;
  readonly ticketLink?: Maybe<Scalars['String']['output']>;
  readonly ticketLinkTarget?: Maybe<Scalars['String']['output']>;
  readonly volunteersLink?: Maybe<Scalars['String']['output']>;
  readonly volunteersLinkTarget?: Maybe<Scalars['String']['output']>;
  readonly year?: Maybe<Scalars['String']['output']>;
};

export type FutureVenuesTableFragment = {
  readonly __typename: 'FutureVenuesTableFragment';
  readonly rows: ReadonlyArray<FutureVenuesRow>;
};

export type GenericContent = {
  readonly __typename: 'GenericContent';
  readonly adConfigNode?: Maybe<Scalars['String']['output']>;
  readonly authorReference?: Maybe<NewsArticleAuthor>;
  readonly datePublished: Scalars['AWSTimestamp']['output'];
  readonly headline: Scalars['String']['output'];
  readonly metadata?: Maybe<NewsArticleMetadata>;
  readonly nodes: ReadonlyArray<NewsArticleNode>;
  readonly path: Scalars['String']['output'];
};

export type GenericContentCompressed = {
  readonly __typename: 'GenericContentCompressed';
  readonly path: Scalars['String']['output'];
  readonly payload: Scalars['String']['output'];
};

export type GlobalAdConfig = {
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

export type Group = {
  readonly __typename: 'Group';
  readonly backNine: Scalars['Boolean']['output'];
  readonly courseId?: Maybe<Scalars['String']['output']>;
  readonly courseName?: Maybe<Scalars['String']['output']>;
  readonly groupHole: Scalars['Int']['output'];
  readonly groupLocation: Scalars['String']['output'];
  readonly groupLocationCode: Scalars['String']['output'];
  readonly groupNumber: Scalars['Int']['output'];
  readonly groupSort: Scalars['String']['output'];
  readonly groupStatus: PlayerState;
  readonly holeLocation: Scalars['String']['output'];
  readonly players: ReadonlyArray<Player>;
  readonly showScorecard: Scalars['Boolean']['output'];
  readonly startTee: Scalars['Int']['output'];
  readonly teeTime: Scalars['AWSTimestamp']['output'];
  readonly tourcastURI?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastURL?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastURLWeb?: Maybe<Scalars['String']['output']>;
};

export type GroupHoleLocation =
  | 'COMPLETE'
  | 'FAIRWAY'
  | 'GREEN'
  | 'NOT_STARTED'
  | 'TEE'
  | 'UNKNOWN';

export type GroupLocation = {
  readonly __typename: 'GroupLocation';
  readonly courses: ReadonlyArray<GroupLocationCourse>;
  readonly tournamentId: Scalars['ID']['output'];
};

export type GroupLocationCourse = {
  readonly __typename: 'GroupLocationCourse';
  readonly courseId: Scalars['String']['output'];
  readonly courseName: Scalars['String']['output'];
  readonly holes: ReadonlyArray<GroupLocationHole>;
  readonly round: Scalars['Int']['output'];
  readonly tournamentAndCourseId: Scalars['ID']['output'];
  readonly tournamentId: Scalars['String']['output'];
};

export type GroupLocationData = {
  readonly __typename: 'GroupLocationData';
  readonly backNinePaceOfPlayTime?: Maybe<Scalars['String']['output']>;
  readonly courseId: Scalars['String']['output'];
  readonly currentHole?: Maybe<Scalars['String']['output']>;
  readonly frontNinePaceOfPlayTime?: Maybe<Scalars['String']['output']>;
  readonly group: Scalars['Int']['output'];
  readonly location: Scalars['String']['output'];
  readonly locationCode: GroupHoleLocation;
  readonly locationSort: Scalars['String']['output'];
  readonly teeTime?: Maybe<Scalars['AWSTimestamp']['output']>;
};

export type GroupLocationGroup = {
  readonly __typename: 'GroupLocationGroup';
  readonly color?: Maybe<Scalars['String']['output']>;
  readonly groupNum: Scalars['Int']['output'];
  readonly groupSort: Scalars['String']['output'];
  readonly location: GroupHoleLocation;
  readonly playerData?: Maybe<GroupLocationPlayerData>;
  readonly round: Scalars['Int']['output'];
};

export type GroupLocationHole = {
  readonly __typename: 'GroupLocationHole';
  readonly groups: ReadonlyArray<GroupLocationGroup>;
  readonly holeNumber: Scalars['Int']['output'];
  readonly par: Scalars['Int']['output'];
  readonly yardage: Scalars['Int']['output'];
};

export type GroupLocationPlayerData = {
  readonly __typename: 'GroupLocationPlayerData';
  readonly addressingBall?: Maybe<Scalars['String']['output']>;
  readonly nextToHit?: Maybe<Scalars['String']['output']>;
};

export type GroupRoundScore = {
  readonly __typename: 'GroupRoundScore';
  readonly holes: ReadonlyArray<GroupScoreHeader>;
  readonly parTotal: Scalars['Int']['output'];
  readonly players: ReadonlyArray<GroupScorePlayer>;
  readonly totalLabel: Scalars['String']['output'];
};

export type GroupScoreHeader = {
  readonly __typename: 'GroupScoreHeader';
  readonly holeNumber: Scalars['Int']['output'];
  readonly par: Scalars['Int']['output'];
};

export type GroupScorePlayer = {
  readonly __typename: 'GroupScorePlayer';
  readonly active: Scalars['Boolean']['output'];
  readonly player: Player;
  readonly roundTotal: Scalars['String']['output'];
  readonly roundTotalHeader: Scalars['String']['output'];
  readonly rowTotal: Scalars['String']['output'];
  readonly scores: ReadonlyArray<SimpleScore>;
};

export type GroupScorecard = {
  readonly __typename: 'GroupScorecard';
  readonly backNine: Scalars['Boolean']['output'];
  readonly courseId?: Maybe<Scalars['String']['output']>;
  readonly courseName: Scalars['String']['output'];
  readonly currentHole: Scalars['Int']['output'];
  readonly firstNine: GroupRoundScore;
  readonly holeDetail: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
  readonly locationDetail: Scalars['String']['output'];
  readonly players: ReadonlyArray<ScorecardHeaderPlayer>;
  readonly roundHeader: Scalars['String']['output'];
  readonly secondNine: GroupRoundScore;
  readonly teeTime: Scalars['AWSTimestamp']['output'];
  readonly tourcastURL?: Maybe<Scalars['String']['output']>;
};

export type GroupShotDetails = {
  readonly __typename: 'GroupShotDetails';
  readonly defaultHolePickle: HolePickleType;
  readonly displayType: ShotDetailsDisplayType;
  readonly groupNumber: Scalars['Int']['output'];
  readonly holes: ReadonlyArray<GroupShotDetailsHole>;
  readonly id: Scalars['ID']['output'];
  readonly message: Scalars['String']['output'];
  readonly players: ReadonlyArray<GroupShotDetailsPlayer>;
  readonly round: Scalars['Int']['output'];
  readonly shotVideo?: Maybe<Video>;
  readonly shotVideos?: Maybe<ReadonlyArray<Video>>;
  readonly tournamentId: Scalars['String']['output'];
};

export type GroupShotDetailsCompressed = {
  readonly __typename: 'GroupShotDetailsCompressed';
  readonly id: Scalars['ID']['output'];
  readonly payload: Scalars['String']['output'];
};

export type GroupShotDetailsHole = {
  readonly __typename: 'GroupShotDetailsHole';
  readonly activePlayers: ReadonlyArray<Scalars['String']['output']>;
  readonly displayHoleNumber: Scalars['String']['output'];
  readonly enhancedPickle?: Maybe<HolePickle>;
  readonly fairwayCenter: StrokeCoordinates;
  readonly green: Scalars['Boolean']['output'];
  readonly holeNumber: Scalars['Int']['output'];
  /** @deprecated Use holePickleBottomToTopAsset */
  readonly holePickleBottomToTop: Scalars['String']['output'];
  readonly holePickleBottomToTopAsset: ImageAsset;
  /** @deprecated Use holePickleGreenBottomToTopAsset */
  readonly holePickleGreenBottomToTop: Scalars['String']['output'];
  readonly holePickleGreenBottomToTopAsset: ImageAsset;
  /** @deprecated Use holePickleGreenLeftToRightAsset */
  readonly holePickleGreenLeftToRight: Scalars['String']['output'];
  readonly holePickleGreenLeftToRightAsset: ImageAsset;
  /** @deprecated Use holePickleLeftToRightAsset */
  readonly holePickleLeftToRight: Scalars['String']['output'];
  readonly holePickleLeftToRightAsset: ImageAsset;
  readonly par: Scalars['Int']['output'];
  readonly pinGreen: PointOfInterestCoords;
  readonly pinOverview: PointOfInterestCoords;
  readonly rank?: Maybe<Scalars['String']['output']>;
  readonly strokes: ReadonlyArray<GroupShotDetailsStroke>;
  readonly teeGreen: PointOfInterestCoords;
  readonly teeOverview: PointOfInterestCoords;
  readonly yardage: Scalars['Int']['output'];
};

export type GroupShotDetailsPlayer = {
  readonly __typename: 'GroupShotDetailsPlayer';
  readonly displayName: Scalars['String']['output'];
  readonly firstName: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
  readonly lastName: Scalars['String']['output'];
  readonly lineColor: Scalars['String']['output'];
  readonly shortName: Scalars['String']['output'];
};

export type GroupShotDetailsStroke = {
  readonly __typename: 'GroupShotDetailsStroke';
  readonly playByPlayLabel: Scalars['String']['output'];
  readonly players: ReadonlyArray<GroupShotDetailsStrokePlayer>;
  readonly strokeNumber: Scalars['Int']['output'];
};

export type GroupShotDetailsStrokePlayer = {
  readonly __typename: 'GroupShotDetailsStrokePlayer';
  readonly ballPath?: Maybe<BallPath>;
  readonly displayName: Scalars['String']['output'];
  readonly distance: Scalars['String']['output'];
  readonly distanceRemaining: Scalars['String']['output'];
  readonly finalShot: Scalars['Boolean']['output'];
  readonly fromLocation: Scalars['String']['output'];
  readonly fromLocationCode: Scalars['String']['output'];
  readonly green: ShotLinkCoordWrapper;
  readonly markerText: Scalars['String']['output'];
  readonly overview: ShotLinkCoordWrapper;
  readonly playByPlay: Scalars['String']['output'];
  readonly playerId: Scalars['String']['output'];
  readonly radarData?: Maybe<RadarData>;
  readonly score: Scalars['String']['output'];
  readonly shortName: Scalars['String']['output'];
  readonly showMarker: Scalars['Boolean']['output'];
  readonly status: HoleScoreStatus;
  readonly strokeType: HoleStrokeType;
  readonly toLocation: Scalars['String']['output'];
  readonly toLocationCode: Scalars['String']['output'];
  readonly videoId?: Maybe<Scalars['String']['output']>;
};

export type GroupShotDetailsTeam = {
  readonly __typename: 'GroupShotDetailsTeam';
  readonly players?: Maybe<ReadonlyArray<GroupShotDetailsPlayer>>;
  readonly teamId: Scalars['String']['output'];
  readonly teamName: Scalars['String']['output'];
};

export type GroupStageGroup = {
  readonly __typename: 'GroupStageGroup';
  readonly groupHeader: Scalars['String']['output'];
  readonly groupPlayers: ReadonlyArray<GroupStagePlayer>;
};

export type GroupStageHeader = {
  readonly __typename: 'GroupStageHeader';
  readonly lost: Scalars['String']['output'];
  readonly player: Scalars['String']['output'];
  readonly points: Scalars['String']['output'];
  readonly tied: Scalars['String']['output'];
  readonly type: HeaderType;
  readonly won: Scalars['String']['output'];
};

export type GroupStagePlayer = {
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
  readonly previousMatches: PreviousMatches;
  readonly record: PlayerRecord;
  readonly shortName: Scalars['String']['output'];
  readonly tournamentSeed: Scalars['String']['output'];
};

export type GroupStageRankings = {
  readonly __typename: 'GroupStageRankings';
  readonly groupStageHeaders: ReadonlyArray<GroupStageHeader>;
  readonly groups: ReadonlyArray<GroupStageGroup>;
  readonly informationSections: ReadonlyArray<InformationSection>;
  readonly title: Scalars['String']['output'];
  readonly tournamentId: Scalars['ID']['output'];
};

export type GroupV2 = {
  readonly __typename: 'GroupV2';
  readonly backNine: Scalars['Boolean']['output'];
  readonly courseId?: Maybe<Scalars['String']['output']>;
  readonly courseName?: Maybe<Scalars['String']['output']>;
  readonly groupNumber: Scalars['Int']['output'];
  readonly players: ReadonlyArray<Player>;
  readonly showScorecard: Scalars['Boolean']['output'];
  readonly startTee: Scalars['Int']['output'];
  readonly teeTime: Scalars['AWSTimestamp']['output'];
  readonly tourcastURI?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastURL?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastURLWeb?: Maybe<Scalars['String']['output']>;
};

export type GroupedField = {
  readonly __typename: 'GroupedField';
  readonly alternates: PlayerGroup;
  readonly features: ReadonlyArray<FeatureItem>;
  readonly id: Scalars['ID']['output'];
  readonly lastUpdated?: Maybe<Scalars['AWSTimestamp']['output']>;
  readonly message?: Maybe<Scalars['String']['output']>;
  readonly players: PlayerGroup;
  readonly standingsHeader: Scalars['String']['output'];
  readonly tournamentName: Scalars['String']['output'];
};

export type HeaderType =
  | 'LONG'
  | 'SHORT';

export type HeroCarousel = {
  readonly __typename: 'HeroCarousel';
  readonly displayInline: Scalars['Boolean']['output'];
  readonly slides: ReadonlyArray<HeroCarouselItem>;
};

export type HeroCarouselItem = {
  readonly __typename: 'HeroCarouselItem';
  readonly articleContent?: Maybe<NewsArticle>;
  readonly autoplay?: Maybe<Scalars['Boolean']['output']>;
  readonly cta1?: Maybe<CallToAction>;
  readonly cta2?: Maybe<CallToAction>;
  readonly heroImage?: Maybe<Scalars['String']['output']>;
  readonly slideHeadline?: Maybe<Scalars['String']['output']>;
  readonly slideSubhead?: Maybe<Scalars['String']['output']>;
  readonly videoContent?: Maybe<Video>;
};

export type HistoricalLeaderboard = {
  readonly __typename: 'HistoricalLeaderboard';
  readonly additionalDataHeaders: ReadonlyArray<Scalars['String']['output']>;
  readonly availableSeasons: ReadonlyArray<StatYearPills>;
  readonly id: Scalars['ID']['output'];
  readonly players: ReadonlyArray<HistoricalLeaderboardRow>;
  readonly recap?: Maybe<WeatherNotes>;
  readonly rounds: ReadonlyArray<Scalars['String']['output']>;
  readonly teams?: Maybe<ReadonlyArray<Maybe<HistoricalLeaderboardTeamRow>>>;
  readonly tournamentResultsMessage?: Maybe<TournamentResultsMessage>;
  readonly winner?: Maybe<Winner>;
  readonly winningTeam?: Maybe<ReadonlyArray<Maybe<Winner>>>;
};

export type HistoricalLeaderboardRow = {
  readonly __typename: 'HistoricalLeaderboardRow';
  readonly additionalData: ReadonlyArray<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly parRelativeScore: Scalars['String']['output'];
  readonly player: Player;
  readonly position: Scalars['String']['output'];
  readonly rounds: ReadonlyArray<HistoricalRoundScore>;
  readonly total: Scalars['String']['output'];
};

export type HistoricalLeaderboardTeamRow = {
  readonly __typename: 'HistoricalLeaderboardTeamRow';
  readonly additionalData: ReadonlyArray<Scalars['String']['output']>;
  readonly parRelativeScore: Scalars['String']['output'];
  readonly players: ReadonlyArray<Player>;
  readonly position: Scalars['String']['output'];
  readonly rounds?: Maybe<ReadonlyArray<HistoricalRoundScore>>;
  readonly teamId: Scalars['String']['output'];
  readonly total: Scalars['String']['output'];
};

export type HistoricalOddsId =
  | 'TOP_RANKED_3'
  | 'TOP_RANKED_5'
  | 'TOP_RANKED_10'
  | 'TOP_RANKED_20'
  | 'WINNER';

export type HistoricalPlayerOdds = {
  readonly __typename: 'HistoricalPlayerOdds';
  readonly marketName: Scalars['String']['output'];
  readonly message?: Maybe<OddsMessage>;
  readonly odds: Scalars['String']['output'];
  readonly oddsSwing: OddsSwing;
  readonly optionId: Scalars['String']['output'];
  readonly playerId: Scalars['String']['output'];
  readonly season: Scalars['Int']['output'];
  readonly timeStamp: Scalars['AWSTimestamp']['output'];
  readonly tournamentId: Scalars['String']['output'];
};

export type HistoricalPlayerScorecards = {
  readonly __typename: 'HistoricalPlayerScorecards';
  readonly playerId: Scalars['ID']['output'];
  readonly tours: ReadonlyArray<HistoricalScorecardTour>;
};

export type HistoricalRoundScore = {
  readonly __typename: 'HistoricalRoundScore';
  readonly parRelativeScore: Scalars['String']['output'];
  readonly score: Scalars['String']['output'];
};

export type HistoricalScorecardTour = {
  readonly __typename: 'HistoricalScorecardTour';
  readonly tourCode: TourCode;
  readonly years: ReadonlyArray<HistoricalScorecardYear>;
};

export type HistoricalScorecardYear = {
  readonly __typename: 'HistoricalScorecardYear';
  readonly displayYear: Scalars['String']['output'];
  readonly tournamentPills: ReadonlyArray<StatTournamentPill>;
  readonly year: Scalars['Int']['output'];
};

/**
 *   End
 *  Market Abstractions
 */
export type HistoricalTournamentOdds = {
  readonly __typename: 'HistoricalTournamentOdds';
  readonly id: Scalars['ID']['output'];
  readonly market?: Maybe<Market>;
  readonly message?: Maybe<OddsMessage>;
  /**   tournamentId-provider */
  readonly provider: OddsProvider;
  readonly tournamentId: Scalars['String']['output'];
};

export type HistoricalTournamentOddsArgs = {
  readonly __typename: 'HistoricalTournamentOddsArgs';
  readonly marketId: OddsMarketType;
  readonly timeStamp?: Maybe<Scalars['AWSDateTime']['output']>;
  readonly tournamentId: Scalars['String']['output'];
};

export type HistoryInfo = {
  readonly __typename: 'HistoryInfo';
  readonly contentCarousel: ReadonlyArray<Maybe<ContentCarousel>>;
  readonly cta?: Maybe<CallToAction>;
  readonly displayCta?: Maybe<Scalars['Boolean']['output']>;
  readonly europeCaptain?: Maybe<Scalars['String']['output']>;
  readonly infoText?: Maybe<ReadonlyArray<Maybe<NewsArticleNode>>>;
  readonly usCaptain?: Maybe<Scalars['String']['output']>;
};

export type HistoryScore = {
  readonly __typename: 'HistoryScore';
  readonly bottomCta?: Maybe<CallToAction>;
  readonly leftFlagIcon?: Maybe<Scalars['String']['output']>;
  readonly leftScore?: Maybe<Scalars['String']['output']>;
  readonly leftTeam?: Maybe<Scalars['String']['output']>;
  readonly rightFlagIcon?: Maybe<Scalars['String']['output']>;
  readonly rightScore?: Maybe<Scalars['String']['output']>;
  readonly rightTeam?: Maybe<Scalars['String']['output']>;
  readonly sectionSubhead: Scalars['String']['output'];
  readonly sectionTitle: Scalars['String']['output'];
  readonly topCta?: Maybe<CallToAction>;
  readonly trophyIcon?: Maybe<Scalars['String']['output']>;
};

export type HoleDetail = {
  readonly __typename: 'HoleDetail';
  readonly courseId: Scalars['String']['output'];
  readonly holeImage: Scalars['String']['output'];
  readonly holeImageLandscape: Scalars['String']['output'];
  readonly holeInfo: HoleDetailInfo;
  readonly holeNum: Scalars['Int']['output'];
  readonly id: Scalars['ID']['output'];
  readonly rounds: ReadonlyArray<HoleDetailRound>;
  readonly statsAvailability: HoleDetailsAvailability;
  readonly statsSummary: HoleStatSummary;
  readonly tourcastURI?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastURL?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastURLWeb?: Maybe<Scalars['String']['output']>;
  readonly tournamentId: Scalars['ID']['output'];
};

export type HoleDetailInfo = {
  readonly __typename: 'HoleDetailInfo';
  readonly aboutThisHole: Scalars['String']['output'];
  /** @deprecated Use holePickleGreenLeftToRightAsset */
  readonly greenPickle: Scalars['String']['output'];
  readonly holeNum: Scalars['Int']['output'];
  /** @deprecated Use holePickleLeftToRightAsset */
  readonly holePickle: Scalars['String']['output'];
  /** @deprecated Use holePickleBottomToTopAsset */
  readonly holePickleBottomToTop: Scalars['String']['output'];
  readonly holePickleBottomToTopAsset: ImageAsset;
  /** @deprecated Use holePickleGreenBottomToTopAsset */
  readonly holePickleGreenBottomToTop: Scalars['String']['output'];
  readonly holePickleGreenBottomToTopAsset: ImageAsset;
  readonly holePickleGreenLeftToRightAsset: ImageAsset;
  readonly holePickleLeftToRightAsset: ImageAsset;
  readonly par: Scalars['Int']['output'];
  readonly pinGreen: PointOfInterestCoords;
  readonly rank?: Maybe<Scalars['Int']['output']>;
  readonly rounds?: Maybe<Scalars['Int']['output']>;
  readonly scoringAverageDiff: Scalars['String']['output'];
  readonly yards: Scalars['Int']['output'];
};

export type HoleDetailRound = {
  readonly __typename: 'HoleDetailRound';
  readonly groups: ReadonlyArray<HoleGroup>;
  readonly matches?: Maybe<ReadonlyArray<HoleMatch>>;
  readonly roundNum: Scalars['Int']['output'];
  readonly teamGroups?: Maybe<ReadonlyArray<TeamHoleGroups>>;
};

export type HoleDetailsAvailability =
  | 'NONE'
  | 'SHOT_DETAILS'
  | 'STATS';

export type HoleGroup = {
  readonly __typename: 'HoleGroup';
  readonly groupLocation: Scalars['String']['output'];
  readonly groupLocationCode: Scalars['String']['output'];
  readonly groupNumber: Scalars['Int']['output'];
  readonly players: ReadonlyArray<HoleGroupPlayer>;
  readonly tourcastURI?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastURL?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastURLWeb?: Maybe<Scalars['String']['output']>;
};

export type HoleGroupPlayer = {
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

export type HoleGroupTeam = {
  readonly __typename: 'HoleGroupTeam';
  readonly players: ReadonlyArray<HoleGroupPlayer>;
};

export type HoleHeader = {
  readonly __typename: 'HoleHeader';
  readonly hole: Scalars['String']['output'];
  readonly holeNumber: Scalars['Int']['output'];
  readonly par: Scalars['String']['output'];
};

export type HoleHeaderV2 = {
  readonly __typename: 'HoleHeaderV2';
  readonly displayValue: Scalars['String']['output'];
  readonly holeNumber?: Maybe<Scalars['Int']['output']>;
  readonly order: Scalars['Int']['output'];
  readonly par: Scalars['String']['output'];
};

export type HoleMatch = {
  readonly __typename: 'HoleMatch';
  readonly groupName?: Maybe<Scalars['String']['output']>;
  readonly match?: Maybe<MpLeaderboardMatch>;
  readonly matchLocation: Scalars['String']['output'];
  readonly matchLocationCode: Scalars['String']['output'];
  readonly tourcastURI?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastURL?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastURLWeb?: Maybe<Scalars['String']['output']>;
};

export type HolePickle = {
  readonly __typename: 'HolePickle';
  readonly bottomToTop: Scalars['String']['output'];
  readonly bottomToTopAsset: ImageAsset;
  readonly greenBottomToTop: Scalars['String']['output'];
  readonly greenBottomToTopAsset: ImageAsset;
  readonly greenLeftToRight: Scalars['String']['output'];
  readonly greenLeftToRightAsset: ImageAsset;
  readonly leftToRight: Scalars['String']['output'];
  readonly leftToRightAsset: ImageAsset;
};

export type HolePickleType =
  | 'STANDARD'
  | 'TOURCAST_2D';

export type HolePlayedStatus =
  | 'PLAYED'
  | 'UNPLAYED';

export type HoleScore = {
  readonly __typename: 'HoleScore';
  readonly holeNumber: Scalars['Int']['output'];
  readonly par: Scalars['Int']['output'];
  readonly roundScore: Scalars['String']['output'];
  readonly score: Scalars['String']['output'];
  readonly sequenceNumber: Scalars['Int']['output'];
  readonly status: HoleScoreStatus;
  readonly yardage: Scalars['Int']['output'];
};

export type HoleScoreStatus =
  | 'BIRDIE'
  | 'BOGEY'
  | 'CONCEDED'
  | 'DOUBLE_BOGEY'
  | 'EAGLE'
  | 'NONE'
  | 'PAR';

export type HoleStat = CourseHoleStats | SummaryRow;

export type HoleStatSummary = {
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

export type HoleStroke = {
  readonly __typename: 'HoleStroke';
  readonly ballPath?: Maybe<BallPath>;
  readonly distance: Scalars['String']['output'];
  readonly distanceRemaining: Scalars['String']['output'];
  readonly finalStroke: Scalars['Boolean']['output'];
  readonly fromLocation: Scalars['String']['output'];
  readonly fromLocationCode: Scalars['String']['output'];
  readonly green: ShotLinkCoordWrapper;
  readonly groupShowMarker: Scalars['Boolean']['output'];
  readonly markerText: Scalars['String']['output'];
  readonly overview: ShotLinkCoordWrapper;
  readonly playByPlay: Scalars['String']['output'];
  readonly playByPlayLabel: Scalars['String']['output'];
  readonly player?: Maybe<TspStrokePlayer>;
  readonly radarData?: Maybe<RadarData>;
  readonly showMarker: Scalars['Boolean']['output'];
  readonly strokeNumber: Scalars['Int']['output'];
  readonly strokeType: HoleStrokeType;
  readonly toLocation: Scalars['String']['output'];
  readonly toLocationCode: Scalars['String']['output'];
  readonly videoId?: Maybe<Scalars['String']['output']>;
};

export type HoleStrokeType =
  | 'DROP'
  | 'PENALTY'
  | 'PROVISIONAL'
  | 'STROKE';

export type HoleStrokeV4 = {
  readonly __typename: 'HoleStrokeV4';
  readonly ballPath?: Maybe<BallPath>;
  readonly distance: Scalars['String']['output'];
  readonly distanceRemaining: Scalars['String']['output'];
  readonly finalStroke: Scalars['Boolean']['output'];
  readonly fromLocation: Scalars['String']['output'];
  readonly fromLocationCode: Scalars['String']['output'];
  readonly green: ShotLinkCoordWrapperV4;
  readonly groupShowMarker: Scalars['Boolean']['output'];
  readonly markerText: Scalars['String']['output'];
  readonly overview: ShotLinkCoordWrapperV4;
  readonly playByPlay: Scalars['String']['output'];
  readonly playByPlayLabel: Scalars['String']['output'];
  readonly player?: Maybe<TspStrokePlayer>;
  readonly radarData?: Maybe<RadarData>;
  readonly showMarker: Scalars['Boolean']['output'];
  readonly strokeNumber: Scalars['Int']['output'];
  readonly strokeType: HoleStrokeType;
  readonly toLocation: Scalars['String']['output'];
  readonly toLocationCode: Scalars['String']['output'];
  readonly videoId?: Maybe<Scalars['String']['output']>;
};

export type HomePageLeadLayout =
  | 'HALF_HERO'
  | 'HALF_HERO_STACK'
  | 'HERO_STATUS'
  | 'HERO_STORY'
  | 'PLAYER_STORIES'
  | 'TOPIC_STORIES';

export type HomePageNewsLayout =
  | 'THREE_UP_ASSET'
  | 'TWO_UP_LARGE'
  | 'TWO_UP_SMALL'
  | 'TWO_UP_TEXT_ONLY';

export type HomePageProgramStandingLayout =
  | 'FIELD_PROMO_SECTION'
  | 'NORMAL'
  | 'SHORT'
  | 'SIGNATURE_EVENT_STANDINGS'
  | 'TWO_STANDINGS';

export type HomePageStanding = {
  readonly __typename: 'HomePageStanding';
  readonly country: Scalars['String']['output'];
  readonly countryFlag: Scalars['String']['output'];
  readonly firstName: Scalars['String']['output'];
  readonly image: Scalars['String']['output'];
  readonly lastName: Scalars['String']['output'];
  readonly playerId: Scalars['String']['output'];
  readonly rank?: Maybe<Scalars['Int']['output']>;
  readonly stats: ReadonlyArray<ProgramStat>;
};

export type Homepage = {
  readonly __typename: 'Homepage';
  readonly fragments: ReadonlyArray<HomepageFragment>;
};

export type HomepageAssets = NewsArticle | Video;

export type HomepageCta = {
  readonly __typename: 'HomepageCta';
  readonly link: Scalars['String']['output'];
  readonly text: Scalars['String']['output'];
  readonly topText: Scalars['String']['output'];
};

export type HomepageFragment = HomepageLead | HomepageNews | HomepageProgramStanding | MediaGallery | OddsToWinTracker | ThreeUpPhoto;

export type HomepageLead = {
  readonly __typename: 'HomepageLead';
  readonly ambientVideo?: Maybe<Video>;
  readonly content: ReadonlyArray<HomepageAssets>;
  readonly cta?: Maybe<HomepageCta>;
  readonly displayDateTime?: Maybe<Scalars['Boolean']['output']>;
  readonly displayPlayerPromoStats?: Maybe<Scalars['Boolean']['output']>;
  readonly halfHeroShortHeadline?: Maybe<Scalars['Boolean']['output']>;
  readonly headlineColor?: Maybe<Scalars['String']['output']>;
  readonly headlineJustification?: Maybe<Scalars['String']['output']>;
  readonly headshot?: Maybe<ProfileHeadshot>;
  readonly leadLayout: HomePageLeadLayout;
  readonly location?: Maybe<TournamentLocation>;
  readonly photoJustification?: Maybe<Scalars['String']['output']>;
  readonly playerId: Scalars['String']['output'];
  readonly playerScore?: Maybe<HomepagePlayerScore>;
  readonly sectionTitle?: Maybe<Scalars['String']['output']>;
  readonly topStats?: Maybe<ReadonlyArray<Maybe<PlayerProfileStatItem>>>;
  readonly topicLabel?: Maybe<Scalars['String']['output']>;
  readonly weather?: Maybe<TournamentWeather>;
};

export type HomepageNews = {
  readonly __typename: 'HomepageNews';
  readonly content: ReadonlyArray<HomepageAssets>;
  readonly cta?: Maybe<HomepageCta>;
  readonly displayDateTime?: Maybe<Scalars['Boolean']['output']>;
  readonly franchises: ReadonlyArray<Scalars['String']['output']>;
  readonly limit: Scalars['String']['output'];
  readonly newsLayout: HomePageNewsLayout;
  readonly title: Scalars['String']['output'];
};

export type HomepagePlayerScore = {
  readonly __typename: 'HomepagePlayerScore';
  readonly playerId: Scalars['ID']['output'];
  readonly round: Scalars['String']['output'];
  readonly roundScore: Scalars['String']['output'];
  readonly score: Scalars['String']['output'];
  readonly total?: Maybe<Scalars['String']['output']>;
};

export type HomepageProgramStanding = {
  readonly __typename: 'HomepageProgramStanding';
  readonly backgroundImg?: Maybe<Scalars['String']['output']>;
  readonly cta?: Maybe<HomepageCta>;
  readonly lastProcessed?: Maybe<Scalars['String']['output']>;
  readonly pullFieldUpdates?: Maybe<Scalars['Boolean']['output']>;
  readonly secondaryStandings?: Maybe<ReadonlyArray<Maybe<HomePageStanding>>>;
  readonly secondaryStandingsTitle?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use sponsorImgAsset */
  readonly sponsorImg?: Maybe<Scalars['String']['output']>;
  readonly sponsorImgAsset?: Maybe<ImageAsset>;
  readonly standingLayout: HomePageProgramStandingLayout;
  readonly standings?: Maybe<ReadonlyArray<Maybe<HomePageStanding>>>;
  readonly standingsTitle?: Maybe<Scalars['String']['output']>;
  readonly title: Scalars['String']['output'];
};

export type HomepageScoring = {
  readonly __typename: 'HomepageScoring';
  readonly desktopCta?: Maybe<CallToAction>;
  readonly path: Scalars['String']['output'];
  readonly pillCta?: Maybe<CallToAction>;
  readonly sectionTitle?: Maybe<Scalars['String']['output']>;
  readonly tournamentId?: Maybe<Scalars['String']['output']>;
};

export type HospitalityCard = {
  readonly __typename: 'HospitalityCard';
  readonly blueBackground: Scalars['Boolean']['output'];
  readonly cardDescription?: Maybe<ReadonlyArray<Maybe<NewsArticleNode>>>;
  readonly cardPhoto?: Maybe<Scalars['String']['output']>;
  readonly cardTitle?: Maybe<Scalars['String']['output']>;
  readonly cta?: Maybe<CallToAction>;
  readonly cta2?: Maybe<CallToAction>;
  readonly photoSubtitle?: Maybe<Scalars['String']['output']>;
};

export type Icon =
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

export type Image = {
  readonly __typename: 'Image';
  readonly imageCreator?: Maybe<Scalars['String']['output']>;
  readonly imageDescription?: Maybe<Scalars['String']['output']>;
  readonly imageOrientation?: Maybe<Orientation>;
  readonly url?: Maybe<Scalars['String']['output']>;
};

export type ImageAsset = {
  readonly __typename: 'ImageAsset';
  readonly assetType?: Maybe<Scalars['String']['output']>;
  /**   will always be image */
  readonly deliveryType?: Maybe<Scalars['String']['output']>;
  /**   either "upload" or "fetch" */
  readonly fallbackImage?: Maybe<Scalars['String']['output']>;
  readonly imageOrg: Scalars['String']['output'];
  readonly imagePath: Scalars['String']['output'];
};

export type ImageBlock = {
  readonly __typename: 'ImageBlock';
  readonly backgroundImage?: Maybe<Scalars['String']['output']>;
  readonly cta?: Maybe<CallToAction>;
  readonly textNodes?: Maybe<ReadonlyArray<Maybe<NewsArticleNode>>>;
};

export type InformationData = {
  readonly __typename: 'InformationData';
  readonly detail?: Maybe<Scalars['String']['output']>;
  readonly label: Scalars['String']['output'];
  readonly secondaryDetail?: Maybe<Scalars['String']['output']>;
  readonly smallCopy?: Maybe<Scalars['Boolean']['output']>;
  readonly value: Scalars['String']['output'];
  readonly wide?: Maybe<Scalars['Boolean']['output']>;
};

export type InformationRow = {
  readonly __typename: 'InformationRow';
  readonly displayText: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
  readonly leaderboardSortOrder: Scalars['Int']['output'];
  readonly mobileDisplayText: Scalars['String']['output'];
  readonly sponsorLogo?: Maybe<ImageAsset>;
  readonly sponsorName?: Maybe<Scalars['String']['output']>;
};

export type InformationSection = {
  readonly __typename: 'InformationSection';
  readonly items: ReadonlyArray<InformationSectionItem>;
  readonly sponsorImages?: Maybe<ReadonlyArray<SponsorImage>>;
  readonly title: Scalars['String']['output'];
};

export type InformationSectionItem = Abbreviations | Legend;

export type IntegratedComponent = {
  readonly __typename: 'IntegratedComponent';
  readonly index: Scalars['Int']['output'];
  readonly partner: IntegrationPartner;
};

export type IntegrationPartner =
  | 'GOLFWRX';

export type JumpToSection = {
  readonly __typename: 'JumpToSection';
  readonly anchorHtmlId?: Maybe<ReadonlyArray<Scalars['String']['output']>>;
  readonly dropdownText?: Maybe<ReadonlyArray<Scalars['String']['output']>>;
};

export type KopContentType = NewsArticleHeader | NewsArticleImage | NewsArticleLineBreak | NewsArticleLink | NewsArticleParagraph | NewsArticleText | TableFragment | UnorderedListNode;

export type KitOfParts = {
  readonly __typename: 'KitOfParts';
  readonly fragments: ReadonlyArray<KopFragment>;
};

export type KopFragment = BrazeFragment | HomepageNews | KopHeader | KopSignUp | KopStandingsList | KopSubheader | KopUpcomingTournament | KopUserProfile | KopZigZag | ThreeUpPhoto | ThreeUpStats | TwoColumn | VideoHero;

export type KopHeader = {
  readonly __typename: 'KopHeader';
  readonly cta?: Maybe<CallToAction>;
  readonly headerTitle: Scalars['String']['output'];
  readonly headlineColor?: Maybe<Scalars['String']['output']>;
  readonly image?: Maybe<Scalars['String']['output']>;
  readonly logo?: Maybe<Scalars['String']['output']>;
  readonly opacity?: Maybe<Scalars['String']['output']>;
  readonly titleJustification?: Maybe<Scalars['String']['output']>;
};

export type KopSignUp = {
  readonly __typename: 'KopSignUp';
  readonly backgroundColor?: Maybe<Scalars['String']['output']>;
  readonly backgroundImage?: Maybe<Scalars['String']['output']>;
  readonly cta?: Maybe<CallToAction>;
  readonly ctaColor?: Maybe<Scalars['String']['output']>;
  readonly header?: Maybe<Scalars['String']['output']>;
  readonly logo?: Maybe<Scalars['String']['output']>;
  readonly signUpText?: Maybe<Scalars['String']['output']>;
  readonly textColor?: Maybe<Scalars['String']['output']>;
};

export type KopStandingsList = {
  readonly __typename: 'KopStandingsList';
  readonly cta?: Maybe<CallToAction>;
  readonly sectionTitle: Scalars['String']['output'];
  readonly standings?: Maybe<ReadonlyArray<Maybe<HomePageStanding>>>;
  readonly type?: Maybe<Scalars['String']['output']>;
};

export type KopSubheader = {
  readonly __typename: 'KopSubheader';
  readonly cta?: Maybe<CallToAction>;
  readonly displayCta?: Maybe<Scalars['Boolean']['output']>;
  readonly logo?: Maybe<Scalars['String']['output']>;
  readonly subHeaderText?: Maybe<ReadonlyArray<Maybe<NewsArticleNode>>>;
  readonly type?: Maybe<Scalars['String']['output']>;
};

export type KopUpcomingTournament = {
  readonly __typename: 'KopUpcomingTournament';
  readonly title: Scalars['String']['output'];
};

export type KopUserProfile = {
  readonly __typename: 'KopUserProfile';
  readonly displayUserProfile?: Maybe<Scalars['Boolean']['output']>;
};

export type KopZigZag = {
  readonly __typename: 'KopZigZag';
  readonly backgroundColorOne?: Maybe<Scalars['String']['output']>;
  readonly backgroundColorTwo?: Maybe<Scalars['String']['output']>;
  readonly ctaOne?: Maybe<CallToAction>;
  readonly ctaTwo?: Maybe<CallToAction>;
  readonly descriptionBackgroundColorOne?: Maybe<Scalars['String']['output']>;
  readonly descriptionBackgroundColorTwo?: Maybe<Scalars['String']['output']>;
  readonly descriptionOne?: Maybe<ReadonlyArray<Maybe<NewsArticleNode>>>;
  readonly descriptionTwo?: Maybe<ReadonlyArray<Maybe<NewsArticleNode>>>;
  readonly imageOne?: Maybe<Scalars['String']['output']>;
  readonly imageTwo?: Maybe<Scalars['String']['output']>;
  readonly subHeader?: Maybe<Scalars['String']['output']>;
  readonly zigZaHeader: Scalars['String']['output'];
};

export type LbRound = {
  readonly __typename: 'LBRound';
  readonly displayText: Scalars['String']['output'];
  readonly roundNumber: Scalars['Int']['output'];
};

export type LeaderStat = {
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

export type LeaderboardCompressed = {
  readonly __typename: 'LeaderboardCompressed';
  readonly id: Scalars['ID']['output'];
  readonly payload: Scalars['String']['output'];
};

export type LeaderboardCompressedV2 = {
  readonly __typename: 'LeaderboardCompressedV2';
  readonly id: Scalars['ID']['output'];
  readonly payload: Scalars['String']['output'];
};

/**   Returns the leaderboard for a tournament where payload contains the leaderboard data in Base64 encoding. */
export type LeaderboardCompressedV3 = {
  readonly __typename: 'LeaderboardCompressedV3';
  /**   The tournament ID */
  readonly id: Scalars['ID']['output'];
  /**   The full leaderboard payload/response. Will need to be Base64 decoded by clients */
  readonly payload: Scalars['String']['output'];
};

export type LeaderboardDrawerV2 = {
  readonly __typename: 'LeaderboardDrawerV2';
  readonly backNine: Scalars['Boolean']['output'];
  readonly currentHole?: Maybe<Scalars['Int']['output']>;
  readonly currentRound: Scalars['Int']['output'];
  readonly groupNumber: Scalars['Int']['output'];
  readonly id: Scalars['ID']['output'];
  readonly player: Player;
  readonly playerState?: Maybe<PlayerState>;
  readonly roundScores: ReadonlyArray<RoundScore>;
  readonly teeTime: Scalars['AWSTimestamp']['output'];
  readonly tournamentName: Scalars['String']['output'];
};

export type LeaderboardFeature =
  | 'HOLE_BY_HOLE'
  | 'ODDS'
  | 'PROBABILITIES'
  | 'SHOT_DETAILS'
  | 'STROKES_GAINED';

export type LeaderboardHoleByHole = {
  readonly __typename: 'LeaderboardHoleByHole';
  readonly courseHoleHeaders: ReadonlyArray<CourseHoleHeader>;
  readonly courses: ReadonlyArray<Course>;
  readonly currentRound: Scalars['Int']['output'];
  /** @deprecated use courseHoleHeaders */
  readonly holeHeaders: ReadonlyArray<HoleHeader>;
  readonly playerData: ReadonlyArray<PlayerRowHoleByHole>;
  readonly rounds: ReadonlyArray<LbRound>;
  readonly tournamentId: Scalars['ID']['output'];
  readonly tournamentName: Scalars['String']['output'];
};

export type LeaderboardInfo = {
  readonly __typename: 'LeaderboardInfo';
  /** @deprecated can ignore, we remove sponship in MW */
  readonly disableCdw: Scalars['Boolean']['output'];
  readonly informationSections: ReadonlyArray<InformationSection>;
  readonly odds: Scalars['Boolean']['output'];
  readonly tournamentId: Scalars['ID']['output'];
};

export type LeaderboardMessage = {
  readonly __typename: 'LeaderboardMessage';
  readonly externalLink?: Maybe<Scalars['Boolean']['output']>;
  readonly messageIcon: LeaderboardMessageIcon;
  readonly messageLink?: Maybe<Scalars['String']['output']>;
  readonly messageText: Scalars['String']['output'];
  readonly platforms: ReadonlyArray<Platform>;
  readonly timing?: Maybe<Scalars['Int']['output']>;
  readonly webViewLink?: Maybe<Scalars['String']['output']>;
};

export type LeaderboardMessageIcon =
  | 'DELAY'
  | 'NONE'
  | 'WEATHER';

export type LeaderboardMovement =
  | 'CONSTANT'
  | 'DOWN'
  | 'UP';

export type LeaderboardOddsSwing = {
  readonly __typename: 'LeaderboardOddsSwing';
  readonly swing: OddsSwing;
};

/**   new enum of possible player icon values, limited to hot streak at first creation */
export type LeaderboardPlayerIcon =
  | 'HOT_STREAK';

export type LeaderboardRoundStats = {
  readonly __typename: 'LeaderboardRoundStats';
  readonly players: ReadonlyArray<LeaderboardStatsPlayer>;
  readonly roundDisplayText: Scalars['String']['output'];
  readonly roundNumber: Scalars['Int']['output'];
};

export type LeaderboardRowV2 = InformationRow | PlayerRowV2;

export type LeaderboardRowV3 = InformationRow | PlayerRowV3 | PuttingPalsPlayerRow;

export type LeaderboardScoringDataV3 = {
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
  readonly movementDirection: LeaderboardMovement;
  readonly movementSort?: Maybe<Scalars['Int']['output']>;
  readonly oddsOptionId?: Maybe<Scalars['String']['output']>;
  readonly oddsSort?: Maybe<Scalars['Float']['output']>;
  readonly oddsSwing?: Maybe<OddsSwing>;
  /**   ODDS */
  readonly oddsToWin?: Maybe<Scalars['String']['output']>;
  /**   POINTS */
  readonly official: Scalars['String']['output'];
  readonly officialSort: Scalars['Int']['output'];
  /**   Player icon, first us is for hot streak */
  readonly playerIcon?: Maybe<LeaderboardPlayerIcon>;
  readonly playerState: PlayerState;
  readonly position: Scalars['String']['output'];
  readonly projected: Scalars['String']['output'];
  readonly projectedSort: Scalars['Int']['output'];
  readonly rankLogoDark?: Maybe<Scalars['String']['output']>;
  readonly rankLogoLight?: Maybe<Scalars['String']['output']>;
  readonly rankingMovement: CupRankMovementDirection;
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

export type LeaderboardStatItem = {
  readonly __typename: 'LeaderboardStatItem';
  readonly color: Scalars['String']['output'];
  readonly rank: Scalars['String']['output'];
  readonly sortValue: Scalars['Float']['output'];
  readonly statId: Scalars['String']['output'];
  readonly supportValues?: Maybe<ReadonlyArray<LeaderboardStatSupportValues>>;
  readonly value: Scalars['String']['output'];
};

export type LeaderboardStatSupportValues = LeaderboardOddsSwing | LeaderboardSupportingString;

export type LeaderboardStats = {
  readonly __typename: 'LeaderboardStats';
  readonly id: Scalars['String']['output'];
  readonly players: ReadonlyArray<LeaderboardStatsPlayer>;
  readonly rounds?: Maybe<ReadonlyArray<LeaderboardRoundStats>>;
  readonly statIds?: Maybe<ReadonlyArray<Scalars['String']['output']>>;
  readonly titles: ReadonlyArray<Scalars['String']['output']>;
  readonly type: LeaderboardStatsType;
};

export type LeaderboardStatsPlayer = {
  readonly __typename: 'LeaderboardStatsPlayer';
  readonly playerId: Scalars['String']['output'];
  readonly stats: ReadonlyArray<LeaderboardStatItem>;
};

export type LeaderboardStatsType =
  | 'ODDS'
  | 'PROBABILITY'
  | 'STROKES_GAINED';

export type LeaderboardStroke = {
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
  readonly scoreStatus: HoleScoreStatus;
  readonly strokeId: Scalars['String']['output'];
  readonly yardage: Scalars['String']['output'];
  readonly yardageSort: Scalars['Int']['output'];
};

export type LeaderboardStrokes = {
  readonly __typename: 'LeaderboardStrokes';
  readonly id: Scalars['ID']['output'];
  readonly playoffs?: Maybe<ReadonlyArray<LeaderboardStroke>>;
  readonly strokes: ReadonlyArray<LeaderboardStroke>;
};

export type LeaderboardStrokesCompressed = {
  readonly __typename: 'LeaderboardStrokesCompressed';
  readonly id: Scalars['ID']['output'];
  readonly payload: Scalars['String']['output'];
};

export type LeaderboardSupportingString = {
  readonly __typename: 'LeaderboardSupportingString';
  readonly data: Scalars['String']['output'];
};

export type LeaderboardUpdateCompressed = {
  readonly __typename: 'LeaderboardUpdateCompressed';
  readonly id: Scalars['ID']['output'];
  readonly payload: Scalars['String']['output'];
};

export type LeaderboardUpdateCompressedV3 = {
  readonly __typename: 'LeaderboardUpdateCompressedV3';
  readonly id: Scalars['ID']['output'];
  readonly payload: Scalars['String']['output'];
};

export type LeaderboardUpdatePlayerV3 = {
  readonly __typename: 'LeaderboardUpdatePlayerV3';
  readonly id: Scalars['ID']['output'];
  readonly leaderboardSortOrder: Scalars['Int']['output'];
  readonly scoringData: LeaderboardScoringDataV3;
};

export type LeaderboardUpdateRowV3 = InformationRow | LeaderboardUpdatePlayerV3;

export type LeaderboardUpdateV3 = {
  readonly __typename: 'LeaderboardUpdateV3';
  readonly cutLineProbabilities?: Maybe<CutLineInfo>;
  readonly id: Scalars['ID']['output'];
  readonly isPlayoffActive: Scalars['Boolean']['output'];
  readonly leaderboardRoundHeader: Scalars['String']['output'];
  readonly messages: ReadonlyArray<LeaderboardMessage>;
  readonly players: ReadonlyArray<LeaderboardUpdateRowV3>;
  readonly rounds: ReadonlyArray<LbRound>;
  readonly subEvent: Scalars['Boolean']['output'];
  readonly tournamentStatus: TournamentStatus;
  readonly winner?: Maybe<Winner>;
  readonly winners?: Maybe<ReadonlyArray<Winner>>;
};

export type LeaderboardV2 = {
  readonly __typename: 'LeaderboardV2';
  readonly courses: ReadonlyArray<Course>;
  readonly disableLeaderboard: Scalars['Boolean']['output'];
  /** @deprecated use leaderboardFeatures */
  readonly features?: Maybe<ReadonlyArray<LeaderboardFeature>>;
  readonly formatType: FormatType;
  readonly id: Scalars['ID']['output'];
  /** @deprecated Use the leaderboard legend query */
  readonly informationSections: ReadonlyArray<InformationSection>;
  readonly isPlayoffActive: Scalars['Boolean']['output'];
  readonly leaderboardFeatures?: Maybe<ReadonlyArray<FeatureItem>>;
  readonly leaderboardRoundHeader: Scalars['String']['output'];
  readonly messages: ReadonlyArray<LeaderboardMessage>;
  readonly players: ReadonlyArray<LeaderboardRowV2>;
  readonly profileEnabled: Scalars['Boolean']['output'];
  readonly roundDisplay: Scalars['String']['output'];
  readonly roundStatus: RoundStatus;
  readonly roundStatusColor: RoundStatusColor;
  readonly roundStatusDisplay: Scalars['String']['output'];
  readonly rounds: ReadonlyArray<LbRound>;
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
  readonly tournamentStatus: TournamentStatus;
  readonly winner?: Maybe<Winner>;
};

export type LeaderboardV3 = {
  readonly __typename: 'LeaderboardV3';
  readonly bubblePill?: Maybe<BubblePill>;
  readonly courses: ReadonlyArray<Course>;
  readonly cutLineProbabilities?: Maybe<CutLineInfo>;
  readonly disableBettingProfileColumn: Scalars['Boolean']['output'];
  readonly disableLeaderboard: Scalars['Boolean']['output'];
  readonly disableOdds: Scalars['Boolean']['output'];
  readonly formatType: FormatType;
  readonly hideSov: Scalars['Boolean']['output'];
  readonly id: Scalars['ID']['output'];
  readonly isPlayoffActive: Scalars['Boolean']['output'];
  readonly leaderboardFeatures?: Maybe<ReadonlyArray<FeatureItem>>;
  readonly leaderboardRoundHeader: Scalars['String']['output'];
  readonly messages: ReadonlyArray<LeaderboardMessage>;
  readonly players: ReadonlyArray<LeaderboardRowV3>;
  readonly profileEnabled: Scalars['Boolean']['output'];
  readonly rounds: ReadonlyArray<LbRound>;
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
  readonly tournamentStatus: TournamentStatus;
  /** @deprecated use winners */
  readonly winner?: Maybe<Winner>;
  readonly winners?: Maybe<ReadonlyArray<Winner>>;
};

export type Legend = {
  readonly __typename: 'Legend';
  readonly accessibilityText?: Maybe<Scalars['String']['output']>;
  readonly icon: Icon;
  readonly iconUrl?: Maybe<Scalars['String']['output']>;
  readonly subText?: Maybe<Scalars['String']['output']>;
  readonly text?: Maybe<Scalars['String']['output']>;
  readonly title: Scalars['String']['output'];
};

export type ListItem = {
  readonly __typename: 'ListItem';
  readonly segments: ReadonlyArray<Maybe<ListNodeItems>>;
};

export type ListNodeItems = NewsArticleContentSegment | NewsArticleParagraph | NewsArticlePlayerTournamentOdds | UnorderedListNode;

export type LiveOverride =
  | 'FORCE_OFF'
  | 'FORCE_ON'
  | 'NORMAL';

export type LiveStatus =
  | 'LIVE'
  | 'NONE'
  | 'UPCOMING';

export type LiveVideoOverride = {
  readonly __typename: 'LiveVideoOverride';
  readonly simulcast?: Maybe<BroadcastFullTelecast>;
  readonly tourCode: TourCode;
  readonly videos: ReadonlyArray<Video>;
};

export type MpHolePlayer = {
  readonly __typename: 'MPHolePlayer';
  readonly holePoints?: Maybe<Scalars['String']['output']>;
  readonly holeScore?: Maybe<Scalars['String']['output']>;
  /**   used for four ball type scoring */
  readonly holeScoreStatus?: Maybe<HoleScoreStatus>;
  readonly holeScores?: Maybe<ReadonlyArray<MatchHoleScore>>;
  readonly playerId: Scalars['ID']['output'];
};

export type MpLeaderboard = {
  readonly __typename: 'MPLeaderboard';
  readonly courses: ReadonlyArray<Course>;
  readonly currentRound: Scalars['Int']['output'];
  readonly drawersEnabled: Scalars['Boolean']['output'];
  readonly formatType: FormatType;
  readonly id: Scalars['ID']['output'];
  readonly infoWebUrl: Scalars['String']['output'];
  readonly informationSections: ReadonlyArray<InformationSection>;
  readonly messages: ReadonlyArray<LeaderboardMessage>;
  readonly roundFilters: ReadonlyArray<RoundFilter>;
  readonly rounds: ReadonlyArray<MpLeaderboardRound>;
  readonly shortTimezone: Scalars['String']['output'];
  readonly timezone: Scalars['String']['output'];
  readonly tourcastURI?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastURL?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastUrlWeb?: Maybe<Scalars['String']['output']>;
  readonly winner?: Maybe<MpLeaderboardPlayer>;
};

export type MpLeaderboardBracket = {
  readonly __typename: 'MPLeaderboardBracket';
  readonly bracketHeader: Scalars['String']['output'];
  readonly bracketNum?: Maybe<Scalars['Int']['output']>;
  readonly matches: ReadonlyArray<MpLeaderboardMatch>;
  readonly upcomingMatches?: Maybe<ReadonlyArray<UpcomingMatch>>;
};

export type MpLeaderboardMatch = {
  readonly __typename: 'MPLeaderboardMatch';
  readonly bracketPlayerSwap?: Maybe<Scalars['Boolean']['output']>;
  readonly matchId: Scalars['ID']['output'];
  readonly matchScore?: Maybe<Scalars['String']['output']>;
  readonly matchScoreColor?: Maybe<Scalars['String']['output']>;
  readonly matchScoreColorDark?: Maybe<Scalars['String']['output']>;
  readonly matchStatus: MatchStatus;
  readonly players: ReadonlyArray<MpLeaderboardPlayer>;
  readonly teeTime: Scalars['AWSTimestamp']['output'];
  readonly thru?: Maybe<Scalars['String']['output']>;
  readonly thruNumberOfHoles?: Maybe<Scalars['Int']['output']>;
};

export type MpLeaderboardPlayer = {
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

export type MpLeaderboardRound = {
  readonly __typename: 'MPLeaderboardRound';
  readonly brackets: ReadonlyArray<MpLeaderboardBracket>;
  readonly round: Scalars['Int']['output'];
  readonly roundHeader: Scalars['String']['output'];
  readonly roundStatusSubHead: Scalars['String']['output'];
  readonly roundTypeSubHead: Scalars['String']['output'];
};

export type MpMatchTeeTimes = {
  readonly __typename: 'MPMatchTeeTimes';
  readonly matchId: Scalars['ID']['output'];
  readonly players: ReadonlyArray<MpTeeTimePlayer>;
  readonly status: Scalars['String']['output'];
  readonly tee: Scalars['String']['output'];
  readonly teeTime: Scalars['AWSTimestamp']['output'];
  readonly timezone: Scalars['String']['output'];
};

export type MpPlayoffScorecard = {
  readonly __typename: 'MPPlayoffScorecard';
  readonly currentHole?: Maybe<Scalars['Int']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly infoWebUrl?: Maybe<Scalars['String']['output']>;
  readonly playoff: Playoff;
  readonly scorecardTitle: Scalars['String']['output'];
  readonly tourcastURI?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastURL?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastUrlWeb?: Maybe<Scalars['String']['output']>;
};

export type MpRoundTeeTimes = {
  readonly __typename: 'MPRoundTeeTimes';
  readonly matchTeeTimes: ReadonlyArray<MpMatchTeeTimes>;
  readonly roundNumber: Scalars['Int']['output'];
};

export type MpScorecard = {
  readonly __typename: 'MPScorecard';
  readonly currentHole?: Maybe<Scalars['Int']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly infoWebUrl?: Maybe<Scalars['String']['output']>;
  readonly matchHoleScores: ReadonlyArray<MatchHole>;
  readonly matchName: Scalars['String']['output'];
  readonly matchPlayers: ReadonlyArray<MpScorecardPlayer>;
  readonly messages: ReadonlyArray<Message>;
  readonly scorecardTitle: Scalars['String']['output'];
  readonly tourcastURI?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastUrl?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastUrlWeb?: Maybe<Scalars['String']['output']>;
};

export type MpScorecardPlayer = {
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

export type MpScorecardResults = {
  readonly __typename: 'MPScorecardResults';
  readonly matchId: Scalars['String']['output'];
  readonly messages?: Maybe<ReadonlyArray<Message>>;
  readonly players: ReadonlyArray<MpScorecardResultsPlayer>;
  readonly roundNum: Scalars['Int']['output'];
  readonly tournamentId: Scalars['String']['output'];
};

export type MpScorecardResultsPlayer = {
  readonly __typename: 'MPScorecardResultsPlayer';
  readonly displayName: Scalars['String']['output'];
  readonly playerId: Scalars['ID']['output'];
  readonly previousRounds: ReadonlyArray<PreviousRounds>;
};

export type MpTeeTimePlayer = {
  readonly __typename: 'MPTeeTimePlayer';
  readonly countryFlag: Scalars['String']['output'];
  readonly displayName: Scalars['String']['output'];
  /** @deprecated URL should be built using player ID */
  readonly headshot: Scalars['String']['output'];
  readonly playerId: Scalars['ID']['output'];
  readonly shortName: Scalars['String']['output'];
};

export type MpTeeTimes = {
  readonly __typename: 'MPTeeTimes';
  readonly defaultRound: Scalars['Int']['output'];
  readonly drawersEnabled: Scalars['Boolean']['output'];
  readonly id: Scalars['ID']['output'];
  readonly roundFilters: ReadonlyArray<RoundFilter>;
  readonly rounds: ReadonlyArray<MpRoundTeeTimes>;
  readonly teeTimeHeaders: ReadonlyArray<TeeTimeHeader>;
  readonly title: Scalars['String']['output'];
};

export type MajorResultsTournament = {
  readonly __typename: 'MajorResultsTournament';
  readonly courseName: Scalars['String']['output'];
  readonly date: Scalars['String']['output'];
  readonly money: Scalars['String']['output'];
  readonly position: Scalars['String']['output'];
  readonly roundScores: ReadonlyArray<RoundScoreItem>;
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

export type MajorTimeline = {
  readonly __typename: 'MajorTimeline';
  readonly finishes: ReadonlyArray<Scalars['String']['output']>;
  readonly tournamentName: Scalars['String']['output'];
  readonly tournamentNum: Scalars['String']['output'];
};

export type Market = {
  readonly __typename: 'Market';
  readonly header: Scalars['String']['output'];
  /**   used for switching between submarkets like "Group A" */
  readonly marketType: OddsMarketType;
  /**   Tournament Winner */
  readonly subMarketPills?: Maybe<ReadonlyArray<Scalars['String']['output']>>;
  readonly subMarkets: ReadonlyArray<SubMarket>;
};

export type MarketPill = {
  readonly __typename: 'MarketPill';
  readonly displayText: Scalars['String']['output'];
  readonly marketType: OddsMarketType;
};

export type MatchCard = {
  readonly __typename: 'MatchCard';
  readonly matchId?: Maybe<Scalars['String']['output']>;
  readonly path: Scalars['String']['output'];
  readonly round?: Maybe<Scalars['String']['output']>;
  readonly tourcastWebview?: Maybe<Scalars['String']['output']>;
  readonly tournamentId?: Maybe<Scalars['String']['output']>;
};

export type MatchHole = {
  readonly __typename: 'MatchHole';
  readonly courseHoleNumber: Scalars['String']['output'];
  readonly holeNumber: Scalars['String']['output'];
  readonly holeNumberColor: Scalars['String']['output'];
  readonly holeOutlineColor?: Maybe<Scalars['String']['output']>;
  readonly holePlayedStatus: HolePlayedStatus;
  readonly matchHolePlayers: ReadonlyArray<MpHolePlayer>;
  readonly matchScore?: Maybe<Scalars['String']['output']>;
  readonly matchScoreColor: Scalars['String']['output'];
  readonly parValue: Scalars['String']['output'];
};

export type MatchHoleScore = {
  readonly __typename: 'MatchHoleScore';
  readonly holeScore?: Maybe<Scalars['String']['output']>;
  readonly holeScoreStatus?: Maybe<HoleScoreStatus>;
  readonly playerId: Scalars['ID']['output'];
};

export type MatchStatus =
  | 'COMPLETE'
  | 'IN_PROGRESS'
  | 'UPCOMING';

export type MatchupOptionV2 = BaseOddsOption & {
  readonly __typename: 'MatchupOptionV2';
  readonly entity: OddsEntity;
  readonly isTie: Scalars['Boolean']['output'];
  readonly odds: OddsValues;
};

export type MatchupsPlayer = {
  readonly __typename: 'MatchupsPlayer';
  readonly countryFlag?: Maybe<Scalars['String']['output']>;
  readonly currentRound?: Maybe<Scalars['Int']['output']>;
  readonly displayName: Scalars['String']['output'];
  readonly firstName: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
  readonly lastName: Scalars['String']['output'];
  readonly matchId?: Maybe<Scalars['Int']['output']>;
  readonly odds: Scalars['String']['output'];
  readonly oddsSwing?: Maybe<OddsSwing>;
  readonly optionsId: Scalars['String']['output'];
  readonly seed?: Maybe<Scalars['Int']['output']>;
};

export type MediaGallery = {
  readonly __typename: 'MediaGallery';
  readonly contentDescription?: Maybe<ReadonlyArray<Maybe<Scalars['String']['output']>>>;
  readonly cta?: Maybe<HomepageCta>;
  readonly mediaGallery?: Maybe<ReadonlyArray<Maybe<Scalars['String']['output']>>>;
  readonly mediaGalleryObjs?: Maybe<ReadonlyArray<Maybe<MediaGalleryItems>>>;
  readonly sectionTitle?: Maybe<Scalars['String']['output']>;
};

export type MediaGalleryItem = {
  readonly __typename: 'MediaGalleryItem';
  readonly orientation?: Maybe<Orientation>;
  readonly path?: Maybe<Scalars['String']['output']>;
};

export type MediaGalleryItems = MediaGalleryItem | Video;

export type Message = {
  readonly __typename: 'Message';
  readonly body: ReadonlyArray<Scalars['String']['output']>;
  readonly title?: Maybe<Scalars['String']['output']>;
};

export type MessageBanner = {
  readonly __typename: 'MessageBanner';
  readonly messageLink?: Maybe<Scalars['String']['output']>;
  readonly messageText?: Maybe<Scalars['String']['output']>;
  readonly path: Scalars['String']['output'];
};

export type MobileCategoryPill = {
  readonly __typename: 'MobileCategoryPill';
  readonly category?: Maybe<StatCategory>;
  readonly displayName: Scalars['String']['output'];
};

export type MobileStat = {
  readonly __typename: 'MobileStat';
  readonly statId: Scalars['String']['output'];
  readonly statTitle: Scalars['String']['output'];
};

export type MobileStatCategoryLeaders = {
  readonly __typename: 'MobileStatCategoryLeaders';
  readonly category: StatCategory;
  readonly categoryHeader: Scalars['String']['output'];
  readonly leaders: ReadonlyArray<LeaderStat>;
  readonly stats: ReadonlyArray<MobileStat>;
};

export type MobileStatLeaders = {
  readonly __typename: 'MobileStatLeaders';
  readonly categories: ReadonlyArray<MobileStatCategoryLeaders>;
  readonly categoryPills: ReadonlyArray<MobileCategoryPill>;
  readonly tourCode: TourCode;
  readonly year: Scalars['Int']['output'];
};

export type Mutation = {
  readonly __typename: 'Mutation';
  readonly addFavoriteTour: FavoriteTourResponse;
  readonly addFavorites: ReadonlyArray<FavoritePlayer>;
  readonly addNotificationTags: NotificationTagResponse;
  readonly deleteAccount: DeleteAccountResponse;
  readonly deleteFavorites: ReadonlyArray<FavoritePlayer>;
  readonly deleteNotificationTags: NotificationTagResponse;
  readonly unsubscribe: UnsubscribeResponse;
  readonly updateBubble?: Maybe<BubbleWatch>;
  readonly updateBubbleWatch?: Maybe<TourCupRankingEvent>;
  readonly updateCourseStats?: Maybe<TournamentHoleStats>;
  readonly updateCoverage?: Maybe<BroadcastCoverage>;
  readonly updateCupOverviewLeaderboard?: Maybe<CupTournamentStatus>;
  readonly updateCupRoundLeaderboard?: Maybe<CupTournamentLeaderboard>;
  readonly updateCupRoundLeaderboardCompressed?: Maybe<CupTournamentLeaderboardCompressed>;
  readonly updateCupScorecard?: Maybe<CupScorecard>;
  readonly updateCurrentLeadersCompressed?: Maybe<CurrentLeadersCompressed>;
  readonly updateGroupLocations?: Maybe<GroupLocationCourse>;
  readonly updateGroupLocationsEnhanced?: Maybe<GroupLocationCourse>;
  readonly updateHoleDetails?: Maybe<HoleDetail>;
  readonly updateLeaderboardCompressedV2?: Maybe<LeaderboardCompressedV2>;
  readonly updateLeaderboardCompressedV3?: Maybe<LeaderboardUpdateCompressedV3>;
  readonly updateLeaderboardStrokes?: Maybe<LeaderboardStrokes>;
  readonly updateLeaderboardStrokesCompressed?: Maybe<LeaderboardStrokesCompressed>;
  readonly updateLeaderboardV2?: Maybe<LeaderboardV2>;
  readonly updateMatchOutcomeIq?: Maybe<RyderCupMatchOutcomeIq>;
  readonly updateMatchPlayLeaderboard?: Maybe<MpLeaderboard>;
  readonly updateMatchPlayLeaderboardCompressed?: Maybe<LeaderboardCompressed>;
  readonly updateMatchPlayPlayoffScorecard?: Maybe<MpPlayoffScorecard>;
  readonly updateMatchPlayScorecard?: Maybe<MpScorecard>;
  readonly updateMatchPlayTeeTimes: MpTeeTimes;
  readonly updateMatchPlayTeeTimesCompressed?: Maybe<TeeTimesCompressed>;
  readonly updateOddsToWinMarket?: Maybe<OddsToWinMarket>;
  readonly updateOddsToWinMarketCompressed?: Maybe<OddsToWinMarketCompressed>;
  readonly updatePlayerHub?: Maybe<PlayerHubPlayerCompressed>;
  readonly updatePlayerTournamentStatus?: Maybe<PlayerTournamentStatus>;
  readonly updatePlayoffScorecard?: Maybe<PlayoffScorecard>;
  readonly updatePlayoffScorecardV2: ReadonlyArray<PlayoffScorecard>;
  readonly updatePlayoffScorecardV3: TournamentPlayoffScorecards;
  readonly updatePlayoffShotDetails: GroupShotDetails;
  readonly updatePlayoffShotDetailsCompressed: GroupShotDetailsCompressed;
  readonly updateScorecardCompressedV3?: Maybe<ScorecardUpdateCompressedV3>;
  readonly updateScorecardStats?: Maybe<PlayerScorecardStats>;
  readonly updateScorecardStatsCompressedV3?: Maybe<PlayerScorecardStatsCompressed>;
  readonly updateScorecardV2?: Maybe<LeaderboardDrawerV2>;
  readonly updateShotCommentary?: Maybe<ShotCommentary>;
  readonly updateShotDetailsCompressedV3?: Maybe<ShotDetailsCompressedV3>;
  /**   V4 Shot Details Mutation - Uses simplified coordinates */
  readonly updateShotDetailsV4Compressed?: Maybe<ShotDetailsV4Compressed>;
  readonly updateTGLMatch?: Maybe<TglMatch>;
  readonly updateTSPPlayoffShotDetails: TeamShotDetails;
  readonly updateTSPPlayoffShotDetailsCompressed: TeamShotDetailsCompressed;
  readonly updateTeamPlayLeaderboard?: Maybe<TspLeaderboard>;
  readonly updateTeamPlayLeaderboardCompressed?: Maybe<LeaderboardCompressed>;
  readonly updateTeamPlayScorecard?: Maybe<TspScorecard>;
  readonly updateTeamPlayScorecardRounds?: Maybe<TspScorecardRounds>;
  readonly updateTeamStrokePlayTeeTimes?: Maybe<TspTeeTimes>;
  readonly updateTeamStrokePlayTeeTimesCompressed?: Maybe<TeeTimesCompressed>;
  readonly updateTeeTimes?: Maybe<TeeTimes>;
  readonly updateTeeTimesCompressed?: Maybe<TeeTimesCompressed>;
  readonly updateTeeTimesCompressedV2?: Maybe<TeeTimesCompressed>;
  readonly updateTeeTimesV2?: Maybe<TeeTimesV2>;
  readonly updateTourCup?: Maybe<TourCupRankingEvent>;
  readonly updateTourcastTable?: Maybe<TourcastTable>;
  readonly updateTournament?: Maybe<Tournament>;
  readonly updateTournamentGroupLocations?: Maybe<TournamentGroupLocation>;
  readonly updateUpcomingSchedule?: Maybe<ScheduleUpcoming>;
};


export type MutationAddFavoriteTourArgs = {
  tourCode: TourCode;
};


export type MutationAddFavoritesArgs = {
  favorites: ReadonlyArray<FavoritePlayerInput>;
};


export type MutationAddNotificationTagsArgs = {
  notificationTags: ReadonlyArray<NotificationTagInput>;
};


export type MutationDeleteFavoritesArgs = {
  favorites: ReadonlyArray<FavoritePlayerInput>;
};


export type MutationDeleteNotificationTagsArgs = {
  notificationTags: ReadonlyArray<NotificationTagInput>;
};


export type MutationUnsubscribeArgs = {
  email: Scalars['String']['input'];
  subscriptionIds: ReadonlyArray<InputMaybe<Scalars['String']['input']>>;
};


export type MutationUpdateBubbleArgs = {
  bubbleId: Scalars['ID']['input'];
};


export type MutationUpdateBubbleWatchArgs = {
  tourCode: TourCode;
};


export type MutationUpdateCourseStatsArgs = {
  tournamentId: Scalars['ID']['input'];
};


export type MutationUpdateCoverageArgs = {
  tournamentId: Scalars['ID']['input'];
};


export type MutationUpdateCupOverviewLeaderboardArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateCupRoundLeaderboardArgs = {
  round?: InputMaybe<Scalars['Int']['input']>;
  tournamentId: Scalars['String']['input'];
};


export type MutationUpdateCupRoundLeaderboardCompressedArgs = {
  round?: InputMaybe<Scalars['Int']['input']>;
  tournamentId: Scalars['String']['input'];
};


export type MutationUpdateCupScorecardArgs = {
  matchId: Scalars['Int']['input'];
  round: Scalars['Int']['input'];
  tournamentId: Scalars['ID']['input'];
};


export type MutationUpdateCurrentLeadersCompressedArgs = {
  tournamentId: Scalars['ID']['input'];
};


export type MutationUpdateGroupLocationsArgs = {
  courseId: Scalars['String']['input'];
  round: Scalars['Int']['input'];
  tournamentId: Scalars['ID']['input'];
};


export type MutationUpdateGroupLocationsEnhancedArgs = {
  courseId: Scalars['String']['input'];
  round: Scalars['Int']['input'];
  tournamentId: Scalars['ID']['input'];
};


export type MutationUpdateHoleDetailsArgs = {
  courseId: Scalars['ID']['input'];
  hole: Scalars['Int']['input'];
  tournamentId: Scalars['ID']['input'];
};


export type MutationUpdateLeaderboardCompressedV2Args = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateLeaderboardCompressedV3Args = {
  odds?: InputMaybe<OddsUpdateInput>;
  tournamentId: Scalars['ID']['input'];
};


export type MutationUpdateLeaderboardStrokesArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateLeaderboardStrokesCompressedArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateLeaderboardV2Args = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateMatchOutcomeIqArgs = {
  matchId: Scalars['Int']['input'];
  roundNumber?: InputMaybe<Scalars['Int']['input']>;
  tournamentId: Scalars['ID']['input'];
};


export type MutationUpdateMatchPlayLeaderboardArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateMatchPlayLeaderboardCompressedArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateMatchPlayPlayoffScorecardArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateMatchPlayScorecardArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateMatchPlayTeeTimesArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateMatchPlayTeeTimesCompressedArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateOddsToWinMarketArgs = {
  oddsToWinId: Scalars['ID']['input'];
};


export type MutationUpdateOddsToWinMarketCompressedArgs = {
  oddsToWinId: Scalars['ID']['input'];
};


export type MutationUpdatePlayerHubArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdatePlayerTournamentStatusArgs = {
  playerId: Scalars['ID']['input'];
  tournamentId: Scalars['String']['input'];
};


export type MutationUpdatePlayoffScorecardArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdatePlayoffScorecardV2Args = {
  id: Scalars['ID']['input'];
};


export type MutationUpdatePlayoffScorecardV3Args = {
  tournamentId: Scalars['ID']['input'];
};


export type MutationUpdatePlayoffShotDetailsArgs = {
  tournamentId: Scalars['ID']['input'];
};


export type MutationUpdatePlayoffShotDetailsCompressedArgs = {
  tournamentId: Scalars['ID']['input'];
};


export type MutationUpdateScorecardCompressedV3Args = {
  id: Scalars['ID']['input'];
  rounds?: InputMaybe<ReadonlyArray<Scalars['Int']['input']>>;
};


export type MutationUpdateScorecardStatsArgs = {
  id: Scalars['ID']['input'];
  playerId: Scalars['String']['input'];
};


export type MutationUpdateScorecardStatsCompressedV3Args = {
  id: Scalars['ID']['input'];
  playerId: Scalars['String']['input'];
  rounds: ReadonlyArray<Scalars['Int']['input']>;
};


export type MutationUpdateScorecardV2Args = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateShotCommentaryArgs = {
  commentary: ReadonlyArray<ShotCommentaryItemInput>;
  playerId: Scalars['String']['input'];
  round: Scalars['Int']['input'];
  tournamentId: Scalars['String']['input'];
};


export type MutationUpdateShotDetailsCompressedV3Args = {
  holes: ReadonlyArray<Scalars['Int']['input']>;
  isUs: Scalars['Boolean']['input'];
  playerId: Scalars['String']['input'];
  round: Scalars['Int']['input'];
  tourcast: Scalars['Boolean']['input'];
  tournamentId: Scalars['String']['input'];
};


export type MutationUpdateShotDetailsV4CompressedArgs = {
  holes: ReadonlyArray<Scalars['Int']['input']>;
  isUs: Scalars['Boolean']['input'];
  playerId: Scalars['String']['input'];
  round: Scalars['Int']['input'];
  tourcast: Scalars['Boolean']['input'];
  tournamentId: Scalars['String']['input'];
};


export type MutationUpdateTglMatchArgs = {
  matchID: Scalars['ID']['input'];
};


export type MutationUpdateTspPlayoffShotDetailsArgs = {
  tournamentId: Scalars['ID']['input'];
};


export type MutationUpdateTspPlayoffShotDetailsCompressedArgs = {
  tournamentId: Scalars['ID']['input'];
};


export type MutationUpdateTeamPlayLeaderboardArgs = {
  id: Scalars['ID']['input'];
  provider: Scalars['String']['input'];
};


export type MutationUpdateTeamPlayLeaderboardCompressedArgs = {
  id: Scalars['ID']['input'];
  provider: Scalars['String']['input'];
};


export type MutationUpdateTeamPlayScorecardArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateTeamPlayScorecardRoundsArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateTeamStrokePlayTeeTimesArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateTeamStrokePlayTeeTimesCompressedArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateTeeTimesArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateTeeTimesCompressedArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateTeeTimesCompressedV2Args = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateTeeTimesV2Args = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateTourCupArgs = {
  id: Scalars['ID']['input'];
  type?: InputMaybe<TourCupType>;
};


export type MutationUpdateTourcastTableArgs = {
  tournamentId: Scalars['ID']['input'];
};


export type MutationUpdateTournamentArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateTournamentGroupLocationsArgs = {
  round: Scalars['Int']['input'];
  tournamentId: Scalars['ID']['input'];
};


export type MutationUpdateUpcomingScheduleArgs = {
  tourCode: Scalars['String']['input'];
  year?: InputMaybe<Scalars['String']['input']>;
};

export type NewsArticle = {
  readonly __typename: 'NewsArticle';
  readonly aiGenerated?: Maybe<Scalars['Boolean']['output']>;
  readonly analyticsTags?: Maybe<ReadonlyArray<Scalars['String']['output']>>;
  readonly articleFormType?: Maybe<ArticleFormType>;
  /** @deprecated Use articleImageAsset */
  readonly articleImage?: Maybe<Scalars['String']['output']>;
  readonly articleImageAlt: Scalars['String']['output'];
  readonly articleImageAsset?: Maybe<ImageAsset>;
  readonly articleLabel?: Maybe<Scalars['String']['output']>;
  readonly author?: Maybe<NewsArticleAuthor>;
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
  readonly players?: Maybe<ReadonlyArray<ArticlePlayer>>;
  readonly publishDate?: Maybe<Scalars['AWSTimestamp']['output']>;
  readonly shareURL: Scalars['String']['output'];
  readonly sponsor?: Maybe<NewsArticleSponsor>;
  readonly team?: Maybe<RyderCupTeamType>;
  readonly teaserContent?: Maybe<Scalars['String']['output']>;
  readonly teaserHeadline?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use teaserImageOverrideAsset */
  readonly teaserImageOverride?: Maybe<Scalars['String']['output']>;
  readonly teaserImageOverrideAsset?: Maybe<ImageAsset>;
  readonly topics?: Maybe<ReadonlyArray<ContentTopics>>;
  readonly updateDate?: Maybe<Scalars['AWSTimestamp']['output']>;
  readonly url: Scalars['String']['output'];
};

export type NewsArticleAuthor = {
  readonly __typename: 'NewsArticleAuthor';
  readonly byLine?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use byLineIconAsset */
  readonly byLineIcon?: Maybe<Scalars['String']['output']>;
  readonly byLineIconAsset?: Maybe<ImageAsset>;
  readonly byLineLink?: Maybe<Scalars['String']['output']>;
  readonly byLineLinkDisplay?: Maybe<Scalars['String']['output']>;
  readonly firstName: Scalars['String']['output'];
  /** @deprecated Use headshotAsset */
  readonly headshot?: Maybe<Scalars['String']['output']>;
  readonly headshotAsset?: Maybe<ImageAsset>;
  readonly lastName: Scalars['String']['output'];
  readonly twitter?: Maybe<Scalars['String']['output']>;
};

export type NewsArticleBlockQuote = {
  readonly __typename: 'NewsArticleBlockQuote';
  readonly class?: Maybe<Scalars['String']['output']>;
  readonly otherAttribute?: Maybe<Scalars['String']['output']>;
  readonly playerId?: Maybe<Scalars['String']['output']>;
  readonly playerName?: Maybe<Scalars['String']['output']>;
  readonly quote?: Maybe<Scalars['String']['output']>;
};

export type NewsArticleContentSegment = {
  readonly __typename: 'NewsArticleContentSegment';
  readonly data?: Maybe<Scalars['String']['output']>;
  readonly format?: Maybe<NewsArticleFormat>;
  readonly id?: Maybe<Scalars['String']['output']>;
  readonly imageAsset?: Maybe<ImageAsset>;
  readonly imageDescription?: Maybe<Scalars['String']['output']>;
  readonly imageOrientation?: Maybe<Orientation>;
  readonly type: Scalars['String']['output'];
  readonly value?: Maybe<Scalars['String']['output']>;
  readonly webViewLink?: Maybe<Scalars['String']['output']>;
};

export type NewsArticleDetails = {
  readonly __typename: 'NewsArticleDetails';
  readonly aiGenerated?: Maybe<Scalars['Boolean']['output']>;
  readonly analyticsTags?: Maybe<ReadonlyArray<Scalars['String']['output']>>;
  readonly articleImageAlt: Scalars['String']['output'];
  readonly articleLabel?: Maybe<Scalars['String']['output']>;
  readonly articleSponsor?: Maybe<Scalars['String']['output']>;
  readonly authorReference?: Maybe<NewsArticleAuthor>;
  readonly brandedContent: Scalars['Boolean']['output'];
  readonly canonicalUrl?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tournaments.contentTournamentId */
  readonly contentTournamentId?: Maybe<Scalars['String']['output']>;
  readonly cta?: Maybe<CallToAction>;
  readonly datePublished: Scalars['AWSTimestamp']['output'];
  readonly disableAds: Scalars['Boolean']['output'];
  readonly franchise: Scalars['String']['output'];
  readonly franchiseDisplayName: Scalars['String']['output'];
  readonly headline: Scalars['String']['output'];
  readonly hero?: Maybe<NewsArticleHero>;
  readonly isBreakingNews?: Maybe<Scalars['Boolean']['output']>;
  readonly isLive: Scalars['Boolean']['output'];
  readonly leadVideoId?: Maybe<Scalars['String']['output']>;
  readonly leadVideoTitle?: Maybe<Scalars['String']['output']>;
  readonly longForm?: Maybe<Scalars['Boolean']['output']>;
  readonly metadata?: Maybe<NewsArticleMetadata>;
  readonly moreNewsItems: ReadonlyArray<NewsArticle>;
  readonly moreNewsTitle?: Maybe<Scalars['String']['output']>;
  readonly nodes: ReadonlyArray<NewsArticleNode>;
  readonly overviewNodes?: Maybe<ReadonlyArray<NewsArticleNode>>;
  readonly path: Scalars['String']['output'];
  readonly photoPosition?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use players field that contains name and id */
  readonly playerNames?: Maybe<ReadonlyArray<Scalars['String']['output']>>;
  readonly players?: Maybe<ReadonlyArray<ArticlePlayer>>;
  readonly readTime: Scalars['String']['output'];
  readonly relatedFacts?: Maybe<ReadonlyArray<Scalars['String']['output']>>;
  readonly shareURL: Scalars['String']['output'];
  readonly sponsor?: Maybe<NewsArticleSponsor>;
  readonly tags?: Maybe<ReadonlyArray<Maybe<Scalars['String']['output']>>>;
  readonly team?: Maybe<RyderCupTeamType>;
  readonly teaserAsset?: Maybe<Scalars['String']['output']>;
  readonly topics?: Maybe<ReadonlyArray<ContentTopics>>;
  /** @deprecated Use tournaments.tourName */
  readonly tourName?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tournaments.tournamentName */
  readonly tournamentName?: Maybe<Scalars['String']['output']>;
  readonly tournaments?: Maybe<ReadonlyArray<NewsArticleDetailsTournament>>;
  readonly url: Scalars['String']['output'];
};

export type NewsArticleDetailsCompressed = {
  readonly __typename: 'NewsArticleDetailsCompressed';
  readonly path: Scalars['String']['output'];
  readonly payload: Scalars['String']['output'];
};

export type NewsArticleDetailsTournament = {
  readonly __typename: 'NewsArticleDetailsTournament';
  readonly contentTournamentId: Scalars['String']['output'];
  readonly tourName: Scalars['String']['output'];
  readonly tournamentName: Scalars['String']['output'];
};

export type NewsArticleDivider = {
  readonly __typename: 'NewsArticleDivider';
  readonly value?: Maybe<Scalars['String']['output']>;
};

export type NewsArticleEmbedded = {
  readonly __typename: 'NewsArticleEmbedded';
  readonly class?: Maybe<Scalars['String']['output']>;
  readonly frameborder?: Maybe<Scalars['Boolean']['output']>;
  readonly height?: Maybe<Scalars['String']['output']>;
  readonly mobileHeight?: Maybe<Scalars['String']['output']>;
  readonly scroll?: Maybe<Scalars['Boolean']['output']>;
  readonly url?: Maybe<Scalars['String']['output']>;
};

export type NewsArticleFormat = {
  readonly __typename: 'NewsArticleFormat';
  readonly styles?: Maybe<ReadonlyArray<Style>>;
  readonly variants?: Maybe<ReadonlyArray<Scalars['String']['output']>>;
};

export type NewsArticleHeader = {
  readonly __typename: 'NewsArticleHeader';
  readonly headerSegments?: Maybe<ReadonlyArray<NewsArticleHeaderSegment>>;
  readonly id?: Maybe<Scalars['String']['output']>;
  readonly style?: Maybe<Scalars['String']['output']>;
};

export type NewsArticleHeaderSegment = {
  readonly __typename: 'NewsArticleHeaderSegment';
  readonly class?: Maybe<Scalars['String']['output']>;
  readonly headerType: Scalars['String']['output'];
  readonly segments?: Maybe<ReadonlyArray<NewsArticleContentSegment>>;
};

export type NewsArticleHero = {
  readonly __typename: 'NewsArticleHero';
  /** @deprecated Use imageAsset */
  readonly image?: Maybe<Scalars['String']['output']>;
  readonly imageAsset?: Maybe<ImageAsset>;
  readonly imageDescription?: Maybe<Scalars['String']['output']>;
  readonly video?: Maybe<Video>;
};

export type NewsArticleHowToWatch = {
  readonly __typename: 'NewsArticleHowToWatch';
  readonly class?: Maybe<Scalars['String']['output']>;
  readonly round?: Maybe<Scalars['Int']['output']>;
  readonly season?: Maybe<Scalars['String']['output']>;
  readonly tournamentId?: Maybe<Scalars['String']['output']>;
};

export type NewsArticleImage = {
  readonly __typename: 'NewsArticleImage';
  readonly segments: ReadonlyArray<NewsArticleContentSegment>;
};

export type NewsArticleInlineOdds = {
  readonly __typename: 'NewsArticleInlineOdds';
  readonly marketId: HistoricalOddsId;
  readonly playerId: Scalars['String']['output'];
  readonly playerName: Scalars['String']['output'];
  readonly timeStamp?: Maybe<Scalars['AWSDateTime']['output']>;
  readonly tournamentId: Scalars['String']['output'];
};

export type NewsArticleInstagram = {
  readonly __typename: 'NewsArticleInstagram';
  readonly class?: Maybe<Scalars['String']['output']>;
  readonly url?: Maybe<Scalars['String']['output']>;
};

export type NewsArticleLineBreak = {
  readonly __typename: 'NewsArticleLineBreak';
  readonly breakValue?: Maybe<Scalars['String']['output']>;
};

export type NewsArticleLink = {
  readonly __typename: 'NewsArticleLink';
  readonly segments: ReadonlyArray<NewsArticleContentSegment>;
};

export type NewsArticleMetadata = {
  readonly __typename: 'NewsArticleMetadata';
  readonly metadata?: Maybe<ReadonlyArray<NewsArticleMetadataSegment>>;
};

export type NewsArticleMetadataSegment = {
  readonly __typename: 'NewsArticleMetadataSegment';
  readonly name: Scalars['String']['output'];
  readonly value?: Maybe<Scalars['String']['output']>;
};

export type NewsArticleNode = ArticleOddsTableQuery | CerosEmbedPlugin | ExpertPicksNode | NewsArticleBlockQuote | NewsArticleDivider | NewsArticleEmbedded | NewsArticleHeader | NewsArticleHowToWatch | NewsArticleImage | NewsArticleInstagram | NewsArticleLineBreak | NewsArticleLink | NewsArticleOddsGraph | NewsArticleOddsParagraph | NewsArticleParagraph | NewsArticlePhotoGallery | NewsArticlePlayerComparison | NewsArticleScoreCard | NewsArticleStats | NewsArticleText | NewsArticleTweetNode | NewsArticleVideo | NewsArticleWeather | RelatedFactsNode | TglBoxScore | TableFragment | UnorderedListNode;

export type NewsArticleOddsGraph = {
  readonly __typename: 'NewsArticleOddsGraph';
  readonly marketId?: Maybe<HistoricalOddsId>;
  readonly oddsTimeType?: Maybe<OddsTimeType>;
  readonly playerIds?: Maybe<ReadonlyArray<Scalars['String']['output']>>;
  readonly round?: Maybe<Scalars['Int']['output']>;
  readonly tournamentId: Scalars['String']['output'];
};

export type NewsArticleOddsParagraph = {
  readonly __typename: 'NewsArticleOddsParagraph';
  readonly content: ReadonlyArray<OddsParagraphContent>;
};

export type NewsArticleParagraph = {
  readonly __typename: 'NewsArticleParagraph';
  readonly id?: Maybe<Scalars['String']['output']>;
  readonly segments: ReadonlyArray<NewsArticleContentSegment>;
};

export type NewsArticlePhotoGallery = {
  readonly __typename: 'NewsArticlePhotoGallery';
  readonly images: ReadonlyArray<NewsArticleImage>;
};

export type NewsArticlePlayerComparison = {
  readonly __typename: 'NewsArticlePlayerComparison';
  readonly class?: Maybe<Scalars['String']['output']>;
  readonly playerIds?: Maybe<ReadonlyArray<Scalars['String']['output']>>;
  readonly playerNames?: Maybe<ReadonlyArray<Scalars['String']['output']>>;
  readonly season?: Maybe<Scalars['String']['output']>;
  readonly statCategory?: Maybe<Scalars['String']['output']>;
  readonly tournamentId?: Maybe<Scalars['String']['output']>;
  readonly type: PlayerComparisonDisplay;
};

export type NewsArticlePlayerTournamentOdds = {
  readonly __typename: 'NewsArticlePlayerTournamentOdds';
  readonly playerId: Scalars['String']['output'];
  readonly timeStamp?: Maybe<Scalars['AWSDateTime']['output']>;
  readonly tournamentId: Scalars['String']['output'];
  readonly tournamentMarketType?: Maybe<OddsMarketType>;
};

export type NewsArticleScoreCard = {
  readonly __typename: 'NewsArticleScoreCard';
  readonly class?: Maybe<Scalars['String']['output']>;
  readonly playerId?: Maybe<Scalars['String']['output']>;
  readonly playerName?: Maybe<Scalars['String']['output']>;
  readonly round?: Maybe<Scalars['String']['output']>;
  readonly season?: Maybe<Scalars['String']['output']>;
  readonly tournamentId?: Maybe<Scalars['String']['output']>;
};

export type NewsArticleSponsor = {
  readonly __typename: 'NewsArticleSponsor';
  readonly description?: Maybe<Scalars['String']['output']>;
  readonly gam?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use imageAsset */
  readonly image?: Maybe<Scalars['String']['output']>;
  readonly imageAsset?: Maybe<ImageAsset>;
  /** @deprecated Use logoAsset */
  readonly logo: Scalars['String']['output'];
  readonly logoAsset: ImageAsset;
  /** @deprecated Use logoDarkAsset */
  readonly logoDark: Scalars['String']['output'];
  readonly logoDarkAsset: ImageAsset;
  readonly name: Scalars['String']['output'];
  readonly sponsorPrefix?: Maybe<Scalars['String']['output']>;
  readonly websiteUrl?: Maybe<Scalars['String']['output']>;
};

export type NewsArticleStatType =
  | 'BY_NUMBERS'
  | 'DOT_CHART'
  | 'LINE_CHART';

export type NewsArticleStats = {
  readonly __typename: 'NewsArticleStats';
  readonly playerId?: Maybe<Scalars['String']['output']>;
  readonly playerName?: Maybe<Scalars['String']['output']>;
  readonly season?: Maybe<Scalars['String']['output']>;
  readonly statType: NewsArticleStatType;
  readonly stats: ReadonlyArray<ContentStat>;
  readonly tournamentId?: Maybe<Scalars['String']['output']>;
};

export type NewsArticleTeaserAsset = {
  readonly __typename: 'NewsArticleTeaserAsset';
  readonly value?: Maybe<Scalars['String']['output']>;
};

export type NewsArticleText = {
  readonly __typename: 'NewsArticleText';
  readonly value?: Maybe<Scalars['String']['output']>;
};

export type NewsArticleTweetNode = {
  readonly __typename: 'NewsArticleTweetNode';
  readonly tweetId: Scalars['String']['output'];
};

export type NewsArticleVideo = {
  readonly __typename: 'NewsArticleVideo';
  readonly video?: Maybe<Video>;
};

export type NewsArticleWeather = {
  readonly __typename: 'NewsArticleWeather';
  readonly class?: Maybe<Scalars['String']['output']>;
  readonly season?: Maybe<Scalars['String']['output']>;
  readonly tour?: Maybe<Scalars['String']['output']>;
  readonly tournamentId?: Maybe<Scalars['String']['output']>;
};

export type NewsArticles = {
  readonly __typename: 'NewsArticles';
  readonly articles: ReadonlyArray<NewsArticle>;
  readonly franchiseSponsors?: Maybe<ReadonlyArray<NewsSponsor>>;
  /** @deprecated not needed */
  readonly integratedComponents: ReadonlyArray<IntegratedComponent>;
};

export type NewsFranchise = {
  readonly __typename: 'NewsFranchise';
  readonly franchise: Scalars['String']['output'];
  readonly franchiseLabel: Scalars['String']['output'];
};

export type NewsLetterType =
  | 'GLOBAL'
  | 'TOURNAMENT';

export type NewsSponsor = {
  readonly __typename: 'NewsSponsor';
  readonly accessibilityText: Scalars['String']['output'];
  readonly backgroundColor: Scalars['String']['output'];
  readonly franchise: Scalars['String']['output'];
  /** @deprecated Use imageAsset */
  readonly image: Scalars['String']['output'];
  readonly imageAsset: ImageAsset;
  readonly label: Scalars['String']['output'];
};

export type Newsletter = {
  readonly __typename: 'Newsletter';
  readonly ctaText: Scalars['String']['output'];
  readonly description?: Maybe<Scalars['String']['output']>;
  readonly gigyaSubscriptionId: Scalars['String']['output'];
  readonly image: Scalars['String']['output'];
  readonly newsLetterType: NewsLetterType;
  readonly title: Scalars['String']['output'];
  readonly tourCode?: Maybe<TourCode>;
};

export type NotificationTag = {
  readonly __typename: 'NotificationTag';
  readonly tag: Scalars['String']['output'];
};

export type NotificationTagInput = {
  readonly tag: Scalars['String']['input'];
};

export type NotificationTagResponse = {
  readonly __typename: 'NotificationTagResponse';
  readonly ok: Scalars['Boolean']['output'];
  readonly tags: ReadonlyArray<Maybe<NotificationTag>>;
};

export type OddsBanner = {
  readonly __typename: 'OddsBanner';
  readonly cta?: Maybe<CallToAction>;
  readonly disclaimer: Scalars['String']['output'];
  readonly image: Scalars['String']['output'];
  readonly label: Scalars['String']['output'];
};

export type OddsCutsOption = {
  readonly __typename: 'OddsCutsOption';
  readonly entity: OddsEntity;
  readonly noOdds: OddsValues;
  readonly yesOdds: OddsValues;
};

export type OddsCutsPlayers = {
  readonly __typename: 'OddsCutsPlayers';
  readonly countryFlag?: Maybe<Scalars['String']['output']>;
  readonly currentRound?: Maybe<Scalars['Int']['output']>;
  readonly displayName: Scalars['String']['output'];
  readonly firstName: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
  readonly lastName: Scalars['String']['output'];
  readonly matchId?: Maybe<Scalars['Int']['output']>;
  readonly noOdds: Scalars['String']['output'];
  readonly noOddsSwing?: Maybe<OddsSwing>;
  readonly noOptionsId: Scalars['String']['output'];
  readonly position: Scalars['String']['output'];
  readonly seed?: Maybe<Scalars['Int']['output']>;
  readonly total: Scalars['String']['output'];
  readonly yesOdds: Scalars['String']['output'];
  readonly yesOddsSwing?: Maybe<OddsSwing>;
  readonly yesOptionsId: Scalars['String']['output'];
};

/**   Odds Primitives */
export type OddsEntity = {
  readonly __typename: 'OddsEntity';
  readonly color?: Maybe<Scalars['String']['output']>;
  readonly entityFlagUrl?: Maybe<Scalars['String']['output']>;
  readonly entityId: Scalars['ID']['output'];
  readonly flagSurroundColor?: Maybe<Scalars['String']['output']>;
  readonly flagSurroundColorDark?: Maybe<Scalars['String']['output']>;
  readonly groupNum: Scalars['Int']['output'];
  readonly maxRound: Scalars['Int']['output'];
  readonly players: ReadonlyArray<OddsPlayer>;
  readonly position: Scalars['String']['output'];
  readonly score: Scalars['String']['output'];
  readonly seed?: Maybe<Scalars['Int']['output']>;
  readonly thru?: Maybe<Scalars['String']['output']>;
  readonly total: Scalars['String']['output'];
  readonly totalSort: Scalars['Int']['output'];
};

export type OddsFinishes = {
  readonly __typename: 'OddsFinishes';
  readonly countryFlag?: Maybe<Scalars['String']['output']>;
  readonly currentRound?: Maybe<Scalars['Int']['output']>;
  readonly displayName: Scalars['String']['output'];
  readonly firstName: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
  readonly lastName: Scalars['String']['output'];
  readonly matchId?: Maybe<Scalars['Int']['output']>;
  readonly odds: Scalars['String']['output'];
  readonly oddsSwing?: Maybe<OddsSwing>;
  readonly optionsId: Scalars['String']['output'];
  readonly seed?: Maybe<Scalars['Int']['output']>;
};

export type OddsFinishesOption = BaseOddsOption & {
  readonly __typename: 'OddsFinishesOption';
  readonly entity: OddsEntity;
  readonly odds: OddsValues;
};

export type OddsFormat =
  | 'DECIMAL'
  | 'FRACTIONAL'
  | 'MONEYLINE';

export type OddsGroup = {
  readonly __typename: 'OddsGroup';
  readonly id: Scalars['ID']['output'];
  readonly matchupPlayers: ReadonlyArray<MatchupsPlayer>;
  readonly subMarket: Scalars['String']['output'];
};

export type OddsGroupOptionV2 = BaseOddsOption & {
  readonly __typename: 'OddsGroupOptionV2';
  readonly entity: OddsEntity;
  readonly odds: OddsValues;
};

export type OddsLeadersOption = BaseOddsOption & {
  readonly __typename: 'OddsLeadersOption';
  readonly entity: OddsEntity;
  readonly odds: OddsValues;
};

export type OddsLeadersPlayers = {
  readonly __typename: 'OddsLeadersPlayers';
  readonly countryFlag?: Maybe<Scalars['String']['output']>;
  readonly currentRound?: Maybe<Scalars['Int']['output']>;
  readonly displayName: Scalars['String']['output'];
  readonly firstName: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
  readonly lastName: Scalars['String']['output'];
  readonly matchId?: Maybe<Scalars['Int']['output']>;
  readonly odds: Scalars['String']['output'];
  readonly oddsSwing?: Maybe<OddsSwing>;
  readonly optionsId: Scalars['String']['output'];
  readonly seed?: Maybe<Scalars['Int']['output']>;
};

/**   End Market Abstractions */
export type OddsMarketType =
  | 'FINISHES'
  | 'GROUP_WINNER'
  | 'MATCHUP'
  | 'NATIONALITY'
  | 'PLAYER_PROPS'
  | 'WINNER';

export type OddsMatchupOptionGroup = {
  readonly __typename: 'OddsMatchupOptionGroup';
  readonly options: ReadonlyArray<MatchupOptionV2>;
};

export type OddsMatchups = {
  readonly __typename: 'OddsMatchups';
  readonly id: Scalars['ID']['output'];
  readonly matchupPlayers: ReadonlyArray<MatchupsPlayer>;
  readonly subMarket: Scalars['String']['output'];
};

export type OddsMessage = {
  readonly __typename: 'OddsMessage';
  readonly body: Scalars['String']['output'];
  readonly header: Scalars['String']['output'];
};

export type OddsNationality = {
  readonly __typename: 'OddsNationality';
  readonly countryFlag?: Maybe<Scalars['String']['output']>;
  readonly currentRound?: Maybe<Scalars['Int']['output']>;
  readonly displayName: Scalars['String']['output'];
  readonly firstName: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
  readonly lastName: Scalars['String']['output'];
  readonly matchId?: Maybe<Scalars['Int']['output']>;
  readonly odds: Scalars['String']['output'];
  readonly oddsSwing?: Maybe<OddsSwing>;
  readonly optionsId: Scalars['String']['output'];
  readonly seed?: Maybe<Scalars['Int']['output']>;
};

export type OddsNationalityOption = BaseOddsOption & {
  readonly __typename: 'OddsNationalityOption';
  readonly entity: OddsEntity;
  readonly odds: OddsValues;
};

export type OddsOption = OddsCutsPlayers | OddsFinishes | OddsGroup | OddsLeadersPlayers | OddsMatchups | OddsNationality | OddsToWin;

export type OddsOptionV2 = OddsCutsOption | OddsFinishesOption | OddsGroupOptionV2 | OddsLeadersOption | OddsMatchupOptionGroup | OddsNationalityOption | OddsToWinV2;

export type OddsParagraphContent = NewsArticleInlineOdds | NewsArticleText;

export type OddsPlayer = {
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

export type OddsProvider =
  | 'BET365'
  | 'DRAFTKINGS'
  | 'ESPNBET'
  | 'FANDUEL'
  | 'MGM';

export type OddsSwing =
  | 'CONSTANT'
  | 'DOWN'
  | 'UP';

/**   Odds Table */
export type OddsTable = {
  readonly __typename: 'OddsTable';
  readonly markets: ReadonlyArray<ArticleOddsMarkets>;
  readonly players: ReadonlyArray<PlayerMarketsRow>;
  readonly provider?: Maybe<OddsProvider>;
  readonly tournamentId: Scalars['String']['output'];
  readonly tournamentName: Scalars['String']['output'];
};

/**  Odds Graph */
export type OddsTimeType =
  | 'HOLE';

export type OddsTimeline = {
  readonly __typename: 'OddsTimeline';
  readonly countryCode: Scalars['String']['output'];
  readonly oddsProvider: OddsProvider;
  readonly players: ReadonlyArray<OddsTimelinePlayer>;
  readonly round: Scalars['String']['output'];
  readonly tournamentId: Scalars['String']['output'];
};

export type OddsTimelinePlayer = {
  readonly __typename: 'OddsTimelinePlayer';
  readonly data: ReadonlyArray<OddsTimelinePoint>;
  readonly playerColor: Scalars['String']['output'];
  readonly playerId: Scalars['String']['output'];
  readonly playerName: Scalars['String']['output'];
};

export type OddsTimelinePoint = {
  readonly __typename: 'OddsTimelinePoint';
  readonly holeNumber?: Maybe<Scalars['Int']['output']>;
  readonly holeSequence?: Maybe<Scalars['Int']['output']>;
  readonly odds: Scalars['String']['output'];
  readonly oddsSwing?: Maybe<OddsSwing>;
  readonly round?: Maybe<Scalars['Int']['output']>;
  readonly time: Scalars['AWSTimestamp']['output'];
};

export type OddsToWin = {
  readonly __typename: 'OddsToWin';
  readonly countryFlag?: Maybe<Scalars['String']['output']>;
  readonly currentRound?: Maybe<Scalars['Int']['output']>;
  readonly displayName: Scalars['String']['output'];
  readonly firstName: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
  readonly lastName: Scalars['String']['output'];
  readonly matchId?: Maybe<Scalars['Int']['output']>;
  readonly odds: Scalars['String']['output'];
  readonly oddsSwing?: Maybe<OddsSwing>;
  readonly optionsId: Scalars['String']['output'];
  readonly position: Scalars['String']['output'];
  readonly score: Scalars['String']['output'];
  readonly seed?: Maybe<Scalars['Int']['output']>;
  readonly thru?: Maybe<Scalars['String']['output']>;
  readonly total: Scalars['String']['output'];
};

export type OddsToWinMarket = {
  readonly __typename: 'OddsToWinMarket';
  readonly message?: Maybe<OddsMessage>;
  readonly oddsEnabled: Scalars['Boolean']['output'];
  readonly oddsToWinId: Scalars['ID']['output'];
  readonly players: ReadonlyArray<OddsToWinPlayer>;
};

/**  Odds V3 */
export type OddsToWinMarketCompressed = {
  readonly __typename: 'OddsToWinMarketCompressed';
  readonly id: Scalars['ID']['output'];
  readonly payload: Scalars['String']['output'];
};

export type OddsToWinPlayer = {
  readonly __typename: 'OddsToWinPlayer';
  readonly odds: Scalars['String']['output'];
  readonly oddsDirection: OddsSwing;
  readonly oddsSort: Scalars['Float']['output'];
  readonly optionId?: Maybe<Scalars['String']['output']>;
  readonly playerId: Scalars['ID']['output'];
  readonly url?: Maybe<Scalars['String']['output']>;
};

export type OddsToWinTracker = {
  readonly __typename: 'OddsToWinTracker';
  readonly title: Scalars['String']['output'];
  /** @deprecated use new tournamentIds array */
  readonly tournamentId?: Maybe<Scalars['String']['output']>;
  readonly tournamentIds?: Maybe<ReadonlyArray<Scalars['String']['output']>>;
};

export type OddsToWinV2 = BaseOddsOption & {
  readonly __typename: 'OddsToWinV2';
  readonly entity: OddsEntity;
  readonly odds: OddsValues;
};

export type OddsUpdateInput = {
  readonly oddsFormat: OddsFormat;
  readonly provider: OddsProvider;
};

export type OddsValues = {
  readonly __typename: 'OddsValues';
  readonly odds: Scalars['String']['output'];
  readonly oddsSwing: OddsSwing;
  readonly optionId: Scalars['ID']['output'];
};

export type Orientation =
  | 'Landscape'
  | 'Portrait';

export type OutComeIqHole = {
  readonly __typename: 'OutComeIQHole';
  readonly euMatchWin: Scalars['Float']['output'];
  readonly holeNum: Scalars['Int']['output'];
  readonly matchDraw: Scalars['Float']['output'];
  readonly usMatchWin: Scalars['Float']['output'];
};

export type OverviewStat = {
  readonly __typename: 'OverviewStat';
  readonly players: ReadonlyArray<LeaderStat>;
  readonly statId: Scalars['String']['output'];
  readonly statName: Scalars['String']['output'];
  readonly tourAvg?: Maybe<Scalars['String']['output']>;
};

export type OverviewStats = {
  readonly __typename: 'OverviewStats';
  readonly categories: ReadonlyArray<StatCategoryConfig>;
  readonly stats: ReadonlyArray<OverviewStat>;
  readonly tourCode: TourCode;
  readonly year: Scalars['Int']['output'];
};

export type PageMetadata = {
  readonly __typename: 'PageMetadata';
  readonly metadata: ReadonlyArray<PageMetadataSegment>;
};

export type PageMetadataSegment = {
  readonly __typename: 'PageMetadataSegment';
  readonly name: Scalars['String']['output'];
  readonly value: Scalars['String']['output'];
};

export type PaginationDetails = {
  readonly __typename: 'PaginationDetails';
  readonly limit?: Maybe<Scalars['Int']['output']>;
  readonly offset?: Maybe<Scalars['Int']['output']>;
};

export type Platform =
  | 'ANDROID'
  | 'IOS'
  | 'WEB';

export type Player = {
  readonly __typename: 'Player';
  readonly abbreviations: Scalars['String']['output'];
  readonly abbreviationsAccessibilityText: Scalars['String']['output'];
  readonly amateur: Scalars['Boolean']['output'];
  readonly assets?: Maybe<ReadonlyArray<PlayerAsset>>;
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

export type PlayerAsset = TourBoundAsset;

export type PlayerBio = {
  readonly __typename: 'PlayerBio';
  readonly age?: Maybe<Scalars['String']['output']>;
  readonly birthplace: PlayerBioLocation;
  readonly born?: Maybe<Scalars['String']['output']>;
  readonly bornAccessibilityText?: Maybe<Scalars['String']['output']>;
  readonly careerEarnings?: Maybe<Scalars['String']['output']>;
  readonly deceased: Scalars['Boolean']['output'];
  readonly deceasedDate?: Maybe<Scalars['String']['output']>;
  readonly degree?: Maybe<Scalars['String']['output']>;
  readonly exemptions?: Maybe<ReadonlyArray<PlayerBioExemption>>;
  readonly family?: Maybe<Scalars['String']['output']>;
  readonly graduationYear?: Maybe<Scalars['String']['output']>;
  readonly heightImperial?: Maybe<Scalars['String']['output']>;
  readonly heightImperialAccessibilityText?: Maybe<Scalars['String']['output']>;
  readonly heightMeters?: Maybe<Scalars['String']['output']>;
  readonly overview?: Maybe<Scalars['String']['output']>;
  readonly personal?: Maybe<ReadonlyArray<Scalars['String']['output']>>;
  readonly playsFrom: PlayerBioLocation;
  readonly primaryTour?: Maybe<Scalars['String']['output']>;
  readonly pronunciation?: Maybe<Scalars['String']['output']>;
  readonly residence: PlayerBioLocation;
  readonly school?: Maybe<Scalars['String']['output']>;
  readonly social?: Maybe<ReadonlyArray<PlayerBioSocial>>;
  /** @deprecated No data for this field, use primaryTour */
  readonly tours: ReadonlyArray<TourCode>;
  readonly turnedPro?: Maybe<Scalars['String']['output']>;
  readonly websiteURL?: Maybe<Scalars['String']['output']>;
  readonly weightImperial?: Maybe<Scalars['String']['output']>;
  readonly weightKilograms?: Maybe<Scalars['String']['output']>;
};

export type PlayerBioExemption = {
  readonly __typename: 'PlayerBioExemption';
  readonly description?: Maybe<Scalars['String']['output']>;
  readonly expirationDate?: Maybe<Scalars['String']['output']>;
  readonly tour?: Maybe<TourCode>;
};

export type PlayerBioLocation = {
  readonly __typename: 'PlayerBioLocation';
  readonly city?: Maybe<Scalars['String']['output']>;
  readonly country?: Maybe<Scalars['String']['output']>;
  readonly countryCode?: Maybe<Scalars['String']['output']>;
  readonly state?: Maybe<Scalars['String']['output']>;
  readonly stateCode?: Maybe<Scalars['String']['output']>;
};

export type PlayerBioSocial = {
  readonly __typename: 'PlayerBioSocial';
  readonly type: SocialType;
  readonly url: Scalars['String']['output'];
};

export type PlayerBioWrapper = {
  readonly __typename: 'PlayerBioWrapper';
  readonly bioLink: Scalars['String']['output'];
  readonly country: Scalars['String']['output'];
  readonly countryFlag: Scalars['String']['output'];
  readonly displayName: Scalars['String']['output'];
  readonly firstName: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
  readonly lastName: Scalars['String']['output'];
  readonly owgr?: Maybe<Scalars['Int']['output']>;
  readonly playerBio?: Maybe<PlayerBio>;
  readonly rank?: Maybe<BioRank>;
};

export type PlayerComparison = {
  readonly __typename: 'PlayerComparison';
  readonly category: PlayerComparisonCategory;
  readonly categoryPills: ReadonlyArray<PlayerComparisonCategoryPill>;
  readonly displaySeason: Scalars['String']['output'];
  readonly noDataMessage: Scalars['String']['output'];
  readonly seasonPills: ReadonlyArray<StatYearPills>;
  readonly table: PlayerComparisonTable;
  readonly tourCode: TourCode;
  readonly tournamentId?: Maybe<Scalars['String']['output']>;
  readonly year: Scalars['Int']['output'];
};

export type PlayerComparisonCategory =
  | 'APPROACH_GREEN'
  | 'AROUND_GREEN'
  | 'OFF_TEE'
  | 'PUTTING'
  | 'SCORING'
  | 'STROKES_GAINED';

export type PlayerComparisonCategoryPill = {
  readonly __typename: 'PlayerComparisonCategoryPill';
  readonly category: PlayerComparisonCategory;
  readonly displayText: Scalars['String']['output'];
};

export type PlayerComparisonDisplay =
  | 'GRAPH'
  | 'TABLE';

export type PlayerComparisonHeader = {
  readonly __typename: 'PlayerComparisonHeader';
  readonly country?: Maybe<Scalars['String']['output']>;
  readonly displayText: Scalars['String']['output'];
  readonly playerId: Scalars['ID']['output'];
  readonly yearData: Scalars['Boolean']['output'];
};

export type PlayerComparisonOdds = {
  readonly __typename: 'PlayerComparisonOdds';
  readonly color: Scalars['String']['output'];
  readonly country: Scalars['String']['output'];
  readonly countryName: Scalars['String']['output'];
  readonly displayName: Scalars['String']['output'];
  readonly oddsSwing: OddsSwing;
  readonly oddsToWin: Scalars['String']['output'];
  readonly playerId: Scalars['ID']['output'];
  readonly provider: OddsProvider;
};

export type PlayerComparisonRow = {
  readonly __typename: 'PlayerComparisonRow';
  readonly statId: Scalars['String']['output'];
  readonly statName: Scalars['String']['output'];
  readonly values: ReadonlyArray<PlayerComparisonValue>;
};

export type PlayerComparisonTable = {
  readonly __typename: 'PlayerComparisonTable';
  readonly header: Scalars['String']['output'];
  readonly headerRow: ReadonlyArray<PlayerComparisonHeader>;
  readonly rows: ReadonlyArray<PlayerComparisonRow>;
};

export type PlayerComparisonValue = {
  readonly __typename: 'PlayerComparisonValue';
  readonly bold: Scalars['Boolean']['output'];
  readonly displayValue: Scalars['String']['output'];
  readonly rank: Scalars['String']['output'];
  readonly rankDeviation?: Maybe<Scalars['Float']['output']>;
};

export type PlayerCourse = {
  readonly __typename: 'PlayerCourse';
  readonly courseCity: Scalars['String']['output'];
  readonly courseCountry: Scalars['String']['output'];
  readonly courseCountryCode: Scalars['String']['output'];
  readonly courseId: Scalars['String']['output'];
  readonly courseImage: Scalars['String']['output'];
  readonly courseName: Scalars['String']['output'];
  readonly courseState?: Maybe<Scalars['String']['output']>;
  readonly cupEyebrowText: Scalars['String']['output'];
  readonly overview: ReadonlyArray<PlayerProfileOverviewItem>;
  readonly overviewInfo?: Maybe<CourseOverviewInfo>;
  readonly tournaments: ReadonlyArray<CourseResultsTournament>;
};

export type PlayerDirectory = {
  readonly __typename: 'PlayerDirectory';
  readonly players: ReadonlyArray<PlayerDirectoryPlayer>;
  readonly tourCode: TourCode;
};

export type PlayerDirectoryBio = {
  readonly __typename: 'PlayerDirectoryBio';
  readonly age?: Maybe<Scalars['String']['output']>;
  readonly education?: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly turnedPro?: Maybe<Scalars['String']['output']>;
};

export type PlayerDirectoryPlayer = {
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
  readonly playerBio: PlayerDirectoryBio;
  readonly shortName: Scalars['String']['output'];
};

export type PlayerField = {
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
  readonly teammate?: Maybe<PlayerFieldTeammate>;
  readonly withdrawn: Scalars['Boolean']['output'];
};

export type PlayerFieldTeammate = {
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

export type PlayerFinishStats = {
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
  readonly statValues: ReadonlyArray<FinishStatValue>;
  readonly tourAvg: Scalars['String']['output'];
};

export type PlayerGroup = {
  readonly __typename: 'PlayerGroup';
  readonly fieldGroups: ReadonlyArray<FieldGroup>;
  readonly title: Scalars['String']['output'];
};

export type PlayerHubArticleLink = {
  readonly __typename: 'PlayerHubArticleLink';
  readonly aiGenerated?: Maybe<Scalars['Boolean']['output']>;
  readonly analyticsTags?: Maybe<ReadonlyArray<Scalars['String']['output']>>;
  /**   AEM ID */
  readonly contentId: Scalars['String']['output'];
  readonly contentTournamentIds?: Maybe<ReadonlyArray<Scalars['String']['output']>>;
  readonly franchise: Scalars['String']['output'];
  readonly franchiseDisplayName: Scalars['String']['output'];
  readonly players?: Maybe<ReadonlyArray<ArticlePlayer>>;
  /**   Optional sponsor for sponsored articles */
  readonly sponsor?: Maybe<NewsArticleSponsor>;
  readonly thumbnail?: Maybe<ImageAsset>;
  readonly title: Scalars['String']['output'];
  readonly webviewUrl: Scalars['String']['output'];
};

export type PlayerHubArticlesWidget = {
  readonly __typename: 'PlayerHubArticlesWidget';
  readonly articles: ReadonlyArray<PlayerHubArticleLink>;
  readonly icon: PlayerHubWidgetIcon;
  /**   Optional widget sponsor */
  readonly sponsor?: Maybe<PlayerHubWidgetSponsor>;
  readonly subTitle?: Maybe<Scalars['String']['output']>;
  readonly title: Scalars['String']['output'];
};

export type PlayerHubDetailData = {
  readonly __typename: 'PlayerHubDetailData';
  readonly data: Scalars['String']['output'];
  readonly title: Scalars['String']['output'];
};

export type PlayerHubFooter = {
  readonly __typename: 'PlayerHubFooter';
  readonly logoAsset: ImageAsset;
  readonly logoAssetDark: ImageAsset;
  readonly sponsor?: Maybe<PlayerHubWidgetSponsor>;
};

export type PlayerHubHeader = {
  readonly __typename: 'PlayerHubHeader';
  readonly sponsor?: Maybe<PlayerHubWidgetSponsor>;
  readonly text: Scalars['String']['output'];
};

export type PlayerHubHoleDetailShotTrail = {
  readonly __typename: 'PlayerHubHoleDetailShotTrail';
  readonly color: Scalars['String']['output'];
  readonly finalShot: Scalars['Boolean']['output'];
  readonly from: PlayerHubHoleDetailShotTrailCoordinates;
  readonly markerText: Scalars['String']['output'];
  readonly shotNumber: Scalars['Int']['output'];
  readonly showMarker: Scalars['Boolean']['output'];
  readonly strokeType: HoleStrokeType;
  readonly to: PlayerHubHoleDetailShotTrailCoordinates;
};

export type PlayerHubHoleDetailShotTrailCoordinates = {
  readonly __typename: 'PlayerHubHoleDetailShotTrailCoordinates';
  readonly x: Scalars['Float']['output'];
  readonly y: Scalars['Float']['output'];
};

export type PlayerHubHoleDetailWidget = {
  readonly __typename: 'PlayerHubHoleDetailWidget';
  readonly dataElements: ReadonlyArray<PlayerHubDetailData>;
  readonly flagCoords?: Maybe<PlayerHubHoleDetailShotTrailCoordinates>;
  readonly holePickleAsset: ImageAsset;
  readonly icon: PlayerHubWidgetIcon;
  readonly shots: ReadonlyArray<PlayerHubHoleDetailShotTrail>;
  /**   Optional widget sponsor */
  readonly sponsor?: Maybe<PlayerHubWidgetSponsor>;
  readonly subTitle?: Maybe<Scalars['String']['output']>;
  readonly tourcastURL?: Maybe<Scalars['String']['output']>;
};

export type PlayerHubLeaderboardWidget = {
  readonly __typename: 'PlayerHubLeaderboardWidget';
  readonly action: PlayerHubMessageBannerAction;
  readonly earnings?: Maybe<Scalars['String']['output']>;
  /**   Used to show if there are player stories available for this player or not */
  readonly hasStoryContent: Scalars['Boolean']['output'];
  readonly icon: PlayerHubWidgetIcon;
  readonly movementAmount: Scalars['String']['output'];
  /**   Leaderboard movement amount */
  readonly movementDirection: LeaderboardMovement;
  /**   Player Icon used for Hot Streak identification */
  readonly playerIcon?: Maybe<LeaderboardPlayerIcon>;
  /**   Standard leaderboard position data */
  readonly position: Scalars['String']['output'];
  readonly rankLogos?: Maybe<SignatureEventsRankLogos>;
  readonly round?: Maybe<Scalars['String']['output']>;
  readonly roundDisplay: Scalars['String']['output'];
  readonly roundHeader: Scalars['String']['output'];
  readonly roundNum: Scalars['Int']['output'];
  /**   Final scores by round */
  readonly roundScores: ReadonlyArray<Scalars['String']['output']>;
  readonly roundStatus: RoundStatus;
  readonly roundStatusColor: RoundStatusColor;
  /**   Round Status and display information */
  readonly roundStatusDisplay: Scalars['String']['output'];
  readonly subTitle: Scalars['String']['output'];
  readonly teeTime?: Maybe<Scalars['AWSTimestamp']['output']>;
  readonly thru?: Maybe<Scalars['String']['output']>;
  readonly total?: Maybe<Scalars['String']['output']>;
  /**   Tells the widget what structure to display in */
  readonly widgetDisplay: PlayerHubLeaderboardWidgetDisplay;
};

export type PlayerHubLeaderboardWidgetDisplay =
  | 'INACTIVE'
  | 'IN_PROGRESS'
  | 'TOURNAMENT_OFFICIAL';

/**   Possible message banner targets */
export type PlayerHubMessageBannerAction =
  | 'LEADERBOARD'
  | 'NONE'
  | 'PROFILE'
  | 'SCORECARD';

export type PlayerHubMessageBannerWidget = {
  readonly __typename: 'PlayerHubMessageBannerWidget';
  /**   optional action should the message have a click target */
  readonly action: PlayerHubMessageBannerAction;
  /**   optional background color override */
  readonly background?: Maybe<Scalars['String']['output']>;
  /**   Message to display */
  readonly message: Scalars['String']['output'];
  /**   optional text color override */
  readonly textColor?: Maybe<Scalars['String']['output']>;
};

export type PlayerHubPlayer = {
  readonly __typename: 'PlayerHubPlayer';
  readonly country: Scalars['String']['output'];
  readonly countryCode: Scalars['String']['output'];
  readonly footer?: Maybe<PlayerHubFooter>;
  readonly header?: Maybe<PlayerHubHeader>;
  readonly playerId: Scalars['ID']['output'];
  readonly playerName: Scalars['String']['output'];
  readonly tournamentId: Scalars['String']['output'];
  readonly widgets: ReadonlyArray<PlayerHubWidget>;
};

/**  PLAYER HUB */
export type PlayerHubPlayerCompressed = {
  readonly __typename: 'PlayerHubPlayerCompressed';
  readonly id: Scalars['ID']['output'];
  readonly payload: Scalars['String']['output'];
};

export type PlayerHubRecapWidget = {
  readonly __typename: 'PlayerHubRecapWidget';
  readonly icon: PlayerHubWidgetIcon;
  readonly recap: Scalars['String']['output'];
  readonly roundDisplay: Scalars['String']['output'];
  readonly roundStatus: RoundStatus;
  readonly roundStatusColor: RoundStatusColor;
  /**   Round Status and display information */
  readonly roundStatusDisplay: Scalars['String']['output'];
  /**   Optional widget sponsor */
  readonly sponsor?: Maybe<PlayerHubWidgetSponsor>;
  readonly subTitle?: Maybe<Scalars['String']['output']>;
};

export type PlayerHubShotCommentaryWidget = {
  readonly __typename: 'PlayerHubShotCommentaryWidget';
  readonly commentary: Scalars['String']['output'];
  readonly icon: PlayerHubWidgetIcon;
  readonly shotTitle: Scalars['String']['output'];
  readonly shotTitleBackgroundColor: Scalars['String']['output'];
  /**   Optional widget sponsor */
  readonly sponsor?: Maybe<PlayerHubWidgetSponsor>;
  readonly subTitle: Scalars['String']['output'];
  readonly tourcastURL?: Maybe<Scalars['String']['output']>;
};

export type PlayerHubStatisticsWidget = {
  readonly __typename: 'PlayerHubStatisticsWidget';
  readonly icon: PlayerHubWidgetIcon;
  /**   Optional widget sponsor */
  readonly sponsor?: Maybe<PlayerHubWidgetSponsor>;
  readonly stats: ReadonlyArray<PlayerHubDetailData>;
  readonly subTitle: Scalars['String']['output'];
  readonly title: Scalars['String']['output'];
};

export type PlayerHubTeeTimesWidget = {
  readonly __typename: 'PlayerHubTeeTimesWidget';
  readonly currentLocation?: Maybe<Scalars['String']['output']>;
  readonly displayTeeTime: Scalars['Boolean']['output'];
  readonly icon: PlayerHubWidgetIcon;
  /**   Players and the group tee time */
  readonly players: ReadonlyArray<Player>;
  readonly roundDisplay: Scalars['String']['output'];
  readonly roundStatus: RoundStatus;
  readonly roundStatusColor: RoundStatusColor;
  /**   Round Status and display information */
  readonly roundStatusDisplay: Scalars['String']['output'];
  /**   Optional widget sponsor */
  readonly sponsor?: Maybe<PlayerHubWidgetSponsor>;
  readonly teeTime?: Maybe<Scalars['AWSTimestamp']['output']>;
  readonly timezone: Scalars['String']['output'];
};

export type PlayerHubTournamentWidget = {
  readonly __typename: 'PlayerHubTournamentWidget';
  readonly course: Scalars['String']['output'];
  readonly icon: PlayerHubWidgetIcon;
  readonly logoAsset?: Maybe<ImageAsset>;
  readonly logoAssetDark?: Maybe<ImageAsset>;
  readonly name: Scalars['String']['output'];
};

export type PlayerHubWidget = PlayerHubArticlesWidget | PlayerHubHoleDetailWidget | PlayerHubLeaderboardWidget | PlayerHubMessageBannerWidget | PlayerHubRecapWidget | PlayerHubShotCommentaryWidget | PlayerHubStatisticsWidget | PlayerHubTeeTimesWidget | PlayerHubTournamentWidget | PlayerStoriesWidget;

export type PlayerHubWidgetIcon =
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

export type PlayerHubWidgetSponsor = {
  readonly __typename: 'PlayerHubWidgetSponsor';
  readonly logoAsset: ImageAsset;
  readonly logoAssetDark: ImageAsset;
  readonly name: Scalars['String']['output'];
  readonly websiteUrl: Scalars['String']['output'];
};

export type PlayerInfo = {
  readonly __typename: 'PlayerInfo';
  readonly countryFlag: Scalars['String']['output'];
  readonly countryName: Scalars['String']['output'];
  readonly firstName: Scalars['String']['output'];
  /** @deprecated URL should be built using player ID */
  readonly headshot: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
  readonly lastName: Scalars['String']['output'];
};

export type PlayerMarketsRow = {
  readonly __typename: 'PlayerMarketsRow';
  readonly country: Scalars['String']['output'];
  readonly countryFlag: Scalars['String']['output'];
  readonly markets: ReadonlyArray<HistoricalPlayerOdds>;
  readonly playerId: Scalars['String']['output'];
  readonly playerName: Scalars['String']['output'];
};

export type PlayerOddsMarket = {
  readonly __typename: 'PlayerOddsMarket';
  readonly id: Scalars['ID']['output'];
  readonly market: Scalars['String']['output'];
  readonly playerOddsOptions: ReadonlyArray<OddsOption>;
  readonly subMarket?: Maybe<Scalars['String']['output']>;
};

export type PlayerOverviewStandings = {
  readonly __typename: 'PlayerOverviewStandings';
  readonly displaySeason: Scalars['String']['output'];
  readonly standings: ReadonlyArray<ProfileStandings>;
  readonly tour: TourCode;
};

export type PlayerProfileAchievement = {
  readonly __typename: 'PlayerProfileAchievement';
  readonly title: Scalars['String']['output'];
  readonly value: Scalars['String']['output'];
};

export type PlayerProfileCareer = {
  readonly __typename: 'PlayerProfileCareer';
  readonly achievements: ReadonlyArray<PlayerProfileAchievement>;
  readonly cutsMade?: Maybe<Scalars['String']['output']>;
  readonly events?: Maybe<Scalars['String']['output']>;
  readonly internationalWins?: Maybe<Scalars['String']['output']>;
  readonly majorWins?: Maybe<Scalars['String']['output']>;
  readonly officialMoney?: Maybe<Scalars['String']['output']>;
  readonly playerId: Scalars['ID']['output'];
  readonly runnerUp?: Maybe<Scalars['String']['output']>;
  readonly second?: Maybe<Scalars['String']['output']>;
  readonly tables: ReadonlyArray<PlayerProfileTable>;
  readonly third?: Maybe<Scalars['String']['output']>;
  readonly top5?: Maybe<Scalars['String']['output']>;
  readonly top10?: Maybe<Scalars['String']['output']>;
  readonly top25?: Maybe<Scalars['String']['output']>;
  readonly tourCode?: Maybe<TourCode>;
  readonly tourPills: ReadonlyArray<TourPills>;
  readonly wins?: Maybe<Scalars['String']['output']>;
  readonly winsTitle?: Maybe<Scalars['String']['output']>;
  readonly years: ReadonlyArray<PlayerProfileCareerYear>;
};

export type PlayerProfileCareerResults = {
  readonly __typename: 'PlayerProfileCareerResults';
  readonly playerId: Scalars['ID']['output'];
  readonly tourPills: ReadonlyArray<TourPills>;
  readonly yearResults: ReadonlyArray<PlayerProfileCareerYear>;
};

export type PlayerProfileCareerYear = {
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
  readonly tourCode: TourCode;
  readonly wins?: Maybe<Scalars['String']['output']>;
  readonly withdrawn?: Maybe<Scalars['String']['output']>;
  readonly year: Scalars['Int']['output'];
};

export type PlayerProfileCourseResults = {
  readonly __typename: 'PlayerProfileCourseResults';
  readonly coursePills: ReadonlyArray<CoursePills>;
  readonly courses: ReadonlyArray<PlayerCourse>;
  readonly playerId: Scalars['String']['output'];
  readonly tourCode: TourCode;
  readonly tourPills: ReadonlyArray<TourCode>;
};

/**   Player Profile Tournament Results */
export type PlayerProfileInfoItem = {
  readonly __typename: 'PlayerProfileInfoItem';
  readonly logo?: Maybe<Scalars['String']['output']>;
  readonly title: Scalars['String']['output'];
  readonly value: Scalars['String']['output'];
  readonly wide: Scalars['Boolean']['output'];
};

export type PlayerProfileMajors = {
  readonly __typename: 'PlayerProfileMajors';
  readonly playerId: Scalars['String']['output'];
  readonly timelineHeaders: ReadonlyArray<Scalars['String']['output']>;
  readonly timelineTournaments: ReadonlyArray<MajorTimeline>;
  readonly tournaments: ReadonlyArray<MajorResultsTournament>;
};

export type PlayerProfileMessage = {
  readonly __typename: 'PlayerProfileMessage';
  readonly message?: Maybe<Scalars['String']['output']>;
};

export type PlayerProfileOverviewItem = {
  readonly __typename: 'PlayerProfileOverviewItem';
  readonly title: Scalars['String']['output'];
  readonly value: Scalars['String']['output'];
};

export type PlayerProfileRows = {
  readonly __typename: 'PlayerProfileRows';
  readonly rowContent: ReadonlyArray<Scalars['String']['output']>;
  readonly rowTitle: Scalars['String']['output'];
  readonly rowTitleDetail?: Maybe<Scalars['String']['output']>;
  readonly secondContent?: Maybe<ReadonlyArray<Scalars['String']['output']>>;
};

export type PlayerProfileStat = {
  readonly __typename: 'PlayerProfileStat';
  readonly categories: ReadonlyArray<PlayerProfileStatCategory>;
  readonly stats: ReadonlyArray<PlayerProfileStatItem>;
  readonly tour: TourCode;
};

export type PlayerProfileStatCategory = {
  readonly __typename: 'PlayerProfileStatCategory';
  readonly category: PlayerProfileStatCategoryItem;
  readonly displayTitle: Scalars['String']['output'];
};

export type PlayerProfileStatCategoryItem =
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

export type PlayerProfileStatFull = {
  readonly __typename: 'PlayerProfileStatFull';
  readonly categories: ReadonlyArray<PlayerProfileStatCategory>;
  readonly displaySeason: Scalars['String']['output'];
  readonly overview: ReadonlyArray<PlayerProfileStatItem>;
  readonly season: Scalars['String']['output'];
  readonly stats: ReadonlyArray<PlayerProfileStatItem>;
  readonly topStats: ReadonlyArray<PlayerProfileStatItem>;
  readonly tour: TourCode;
};

export type PlayerProfileStatItem = {
  readonly __typename: 'PlayerProfileStatItem';
  readonly aboveOrBelow: ScoringTendency;
  readonly category: ReadonlyArray<PlayerProfileStatCategoryItem>;
  readonly fieldAverage: Scalars['String']['output'];
  readonly noDetail?: Maybe<Scalars['Boolean']['output']>;
  readonly rank: Scalars['String']['output'];
  readonly rankDeviation?: Maybe<Scalars['Float']['output']>;
  readonly statId: Scalars['String']['output'];
  readonly supportingStat?: Maybe<PlayerProfileStatItemDetail>;
  readonly supportingValue?: Maybe<PlayerProfileStatItemDetail>;
  readonly title: Scalars['String']['output'];
  readonly value: Scalars['String']['output'];
};

export type PlayerProfileStatItemDetail = {
  readonly __typename: 'PlayerProfileStatItemDetail';
  readonly description: Scalars['String']['output'];
  readonly value: Scalars['String']['output'];
};

export type PlayerProfileStatYear = {
  readonly __typename: 'PlayerProfileStatYear';
  readonly season: Scalars['String']['output'];
  readonly tours: ReadonlyArray<TourCode>;
  readonly year: Scalars['Int']['output'];
};

export type PlayerProfileStatsFullV2 = {
  readonly __typename: 'PlayerProfileStatsFullV2';
  readonly messages?: Maybe<ReadonlyArray<PlayerProfileMessage>>;
  readonly playerProfileStatsFull: ReadonlyArray<PlayerProfileStatFull>;
};

export type PlayerProfileTable = {
  readonly __typename: 'PlayerProfileTable';
  readonly rows: ReadonlyArray<PlayerProfileRows>;
  readonly tableDetail?: Maybe<Scalars['String']['output']>;
  readonly tableName: Scalars['String']['output'];
};

export type PlayerProfileTournamentResults = {
  readonly __typename: 'PlayerProfileTournamentResults';
  readonly playerId: Scalars['ID']['output'];
  readonly tourPills: ReadonlyArray<TourPills>;
  readonly tournamentPills: ReadonlyArray<TournamentResultPill>;
  readonly tournaments: ReadonlyArray<TournamentResults>;
};

export type PlayerProfileTournamentRow = {
  readonly __typename: 'PlayerProfileTournamentRow';
  readonly courseName: Scalars['String']['output'];
  readonly date: Scalars['String']['output'];
  readonly fedexFallPoints: Scalars['String']['output'];
  readonly fedexFallRank: Scalars['String']['output'];
  readonly points: Scalars['String']['output'];
  readonly pointsRank: Scalars['String']['output'];
  readonly position: Scalars['String']['output'];
  readonly roundScores: ReadonlyArray<RoundScoreItem>;
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

export type PlayerRecord = {
  readonly __typename: 'PlayerRecord';
  readonly losses: Scalars['String']['output'];
  readonly points: Scalars['String']['output'];
  readonly ties: Scalars['String']['output'];
  readonly wins: Scalars['String']['output'];
};

export type PlayerResultTournament = {
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

export type PlayerResults = {
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
  readonly seasonPills: ReadonlyArray<PlayerResultsSeasonPills>;
  readonly seasonRecap?: Maybe<SeasonRecap>;
  /** @deprecated use standingsDetails */
  readonly secondaryCup?: Maybe<SecondaryCupDetails>;
  readonly standingsDetails: ReadonlyArray<ResultsStandingsDetail>;
  readonly thirds?: Maybe<Scalars['String']['output']>;
  readonly top5?: Maybe<Scalars['String']['output']>;
  readonly top10?: Maybe<Scalars['String']['output']>;
  readonly top25?: Maybe<Scalars['String']['output']>;
  readonly tour: TourCode;
  readonly tourcastEligible: Scalars['Boolean']['output'];
  readonly tournaments: ReadonlyArray<PlayerResultTournament>;
  readonly wins?: Maybe<Scalars['String']['output']>;
  readonly withdrew?: Maybe<Scalars['String']['output']>;
  readonly year: Scalars['Int']['output'];
};

export type PlayerResultsSeasonPills = {
  readonly __typename: 'PlayerResultsSeasonPills';
  readonly tourCode: TourCode;
  readonly years: ReadonlyArray<StatYearPills>;
};

export type PlayerRowHoleByHole = {
  readonly __typename: 'PlayerRowHoleByHole';
  readonly courseCode: Scalars['String']['output'];
  readonly courseId: Scalars['String']['output'];
  readonly in?: Maybe<Scalars['String']['output']>;
  readonly out?: Maybe<Scalars['String']['output']>;
  readonly playerId: Scalars['String']['output'];
  readonly scores: ReadonlyArray<HoleScore>;
  readonly total?: Maybe<Scalars['String']['output']>;
  readonly totalToPar: Scalars['String']['output'];
};

export type PlayerRowV2 = {
  readonly __typename: 'PlayerRowV2';
  readonly backNine: Scalars['Boolean']['output'];
  readonly courseId: Scalars['String']['output'];
  readonly currentRound: Scalars['Int']['output'];
  readonly groupNumber: Scalars['Int']['output'];
  readonly hasStoryContent: Scalars['Boolean']['output'];
  readonly id: Scalars['ID']['output'];
  readonly leaderboardSortOrder: Scalars['Int']['output'];
  readonly movementAmount: Scalars['String']['output'];
  readonly movementDirection: LeaderboardMovement;
  readonly oddsOptionId?: Maybe<Scalars['String']['output']>;
  readonly oddsSort?: Maybe<Scalars['Float']['output']>;
  readonly oddsSwing?: Maybe<OddsSwing>;
  readonly oddsToWin?: Maybe<Scalars['String']['output']>;
  readonly oddsUrl?: Maybe<Scalars['String']['output']>;
  readonly official: Scalars['String']['output'];
  readonly officialSort: Scalars['Int']['output'];
  readonly player: Player;
  readonly playerState: PlayerState;
  readonly position: Scalars['String']['output'];
  readonly projected: Scalars['String']['output'];
  readonly projectedSort: Scalars['Int']['output'];
  readonly rankLogoDark?: Maybe<Scalars['String']['output']>;
  readonly rankLogoLight?: Maybe<Scalars['String']['output']>;
  readonly rankingMovement: CupRankMovementDirection;
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

export type PlayerRowV3 = {
  readonly __typename: 'PlayerRowV3';
  readonly id: Scalars['ID']['output'];
  readonly leaderboardSortOrder: Scalars['Int']['output'];
  /**   PLAYER INFO */
  readonly player: Player;
  readonly scoringData: LeaderboardScoringDataV3;
};

export type PlayerScorecardRoundStats = {
  readonly __typename: 'PlayerScorecardRoundStats';
  readonly displayName: Scalars['String']['output'];
  readonly performance: ReadonlyArray<ScorecardStatsItem>;
  readonly round: Scalars['String']['output'];
  readonly roundStatus: RoundStatus;
  readonly scoring: ReadonlyArray<ScorecardStatsItem>;
  readonly strokesGained: ReadonlyArray<StrokesGainedStats>;
};

export type PlayerScorecardStats = {
  readonly __typename: 'PlayerScorecardStats';
  readonly id: Scalars['ID']['output'];
  readonly rounds: ReadonlyArray<PlayerScorecardRoundStats>;
};

export type PlayerScorecardStatsCompressed = {
  readonly __typename: 'PlayerScorecardStatsCompressed';
  readonly id: Scalars['ID']['output'];
  readonly payload: Scalars['String']['output'];
};

export type PlayerSponsorBrand =
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

export type PlayerSponsors = {
  readonly __typename: 'PlayerSponsors';
  readonly defaultSponsor?: Maybe<Sponsor>;
  readonly playerId: Scalars['String']['output'];
  readonly sponsors: ReadonlyArray<Sponsor>;
};

export type PlayerSponsorship = {
  readonly __typename: 'PlayerSponsorship';
  readonly playerId: Scalars['String']['output'];
  readonly sponsor?: Maybe<PlayerSponsorBrand>;
};

export type PlayerState =
  | 'ACTIVE'
  | 'BETWEEN_ROUNDS'
  | 'COMPLETE'
  | 'CUT'
  | 'DISQUALIFIED'
  | 'NOT_STARTED'
  | 'WITHDRAWN';

export type PlayerStoriesWidget = {
  readonly __typename: 'PlayerStoriesWidget';
  readonly playerSponsorships?: Maybe<ReadonlyArray<PlayerStorySponsorship>>;
  readonly storyRounds: ReadonlyArray<Scalars['String']['output']>;
  readonly subTitle: Scalars['String']['output'];
  readonly title: Scalars['String']['output'];
  readonly tournamentId: Scalars['String']['output'];
};

export type PlayerStorySponsorship = {
  readonly __typename: 'PlayerStorySponsorship';
  readonly logoDarkUrl: Scalars['String']['output'];
  readonly logoUrl: Scalars['String']['output'];
  readonly sponsor: Scalars['String']['output'];
  readonly type: Scalars['String']['output'];
};

export type PlayerTournamentStatus = {
  readonly __typename: 'PlayerTournamentStatus';
  readonly displayMode: PlayerTournamentStatusDisplayMode;
  readonly playerId: Scalars['ID']['output'];
  readonly position: Scalars['String']['output'];
  readonly roundDisplay: Scalars['String']['output'];
  readonly roundStatus: RoundStatus;
  readonly roundStatusColor: RoundStatusColor;
  readonly roundStatusDisplay: Scalars['String']['output'];
  readonly score: Scalars['String']['output'];
  readonly teeTime?: Maybe<Scalars['AWSTimestamp']['output']>;
  readonly thru: Scalars['String']['output'];
  readonly total: Scalars['String']['output'];
  readonly tournamentId: Scalars['String']['output'];
  readonly tournamentName: Scalars['String']['output'];
};

export type PlayerTournamentStatusDisplayMode =
  | 'IN_PROGRESS'
  | 'OFFICIAL'
  | 'TEE_TIMES';

export type PlayerVideo = {
  readonly __typename: 'PlayerVideo';
  readonly firstName?: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly lastName?: Maybe<Scalars['String']['output']>;
  readonly shortName?: Maybe<Scalars['String']['output']>;
};

export type Playoff = {
  readonly __typename: 'Playoff';
  readonly currentHole: Scalars['Int']['output'];
  readonly holes: ReadonlyArray<PlayoffHole>;
  readonly players: ReadonlyArray<PlayoffPlayer>;
  readonly thru?: Maybe<Scalars['String']['output']>;
};

export type PlayoffDisplayType =
  | 'ALL'
  | 'NONE'
  | 'PLAY_BY_PLAY'
  | 'SCORECARD';

export type PlayoffHole = {
  readonly __typename: 'PlayoffHole';
  readonly courseHole: Scalars['String']['output'];
  readonly format?: Maybe<Scalars['String']['output']>;
  readonly isTotal?: Maybe<Scalars['Boolean']['output']>;
  readonly par: Scalars['String']['output'];
  readonly playoffHole: Scalars['String']['output'];
};

export type PlayoffPlayer = {
  readonly __typename: 'PlayoffPlayer';
  readonly active: Scalars['Boolean']['output'];
  readonly player: Player;
  readonly position: Scalars['String']['output'];
  readonly scores: ReadonlyArray<SimpleScore>;
};

export type PlayoffScorecard = {
  readonly __typename: 'PlayoffScorecard';
  readonly courseId: Scalars['String']['output'];
  readonly courseName: Scalars['String']['output'];
  readonly detailViewEnabled: Scalars['Boolean']['output'];
  readonly drawersEnabled: Scalars['Boolean']['output'];
  readonly holeDetail: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
  readonly locationDetail: Scalars['String']['output'];
  readonly players: ReadonlyArray<ScorecardHeaderPlayer>;
  readonly playoff: Playoff;
  readonly playoffScoredType: PlayoffScoredType;
  readonly title: Scalars['String']['output'];
  readonly tourcastURI?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastURL?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastURLWeb?: Maybe<Scalars['String']['output']>;
};

export type PlayoffScoredType =
  | 'AGGREGATE'
  | 'SUDDEN_DEATH';

export type PlayoffTeams = {
  readonly __typename: 'PlayoffTeams';
  readonly active: Scalars['Boolean']['output'];
  readonly players: ReadonlyArray<TspScPlayer>;
  readonly position: Scalars['String']['output'];
  readonly scores: ReadonlyArray<SimpleScore>;
  readonly teamId: Scalars['String']['output'];
};

export type PointOfInterestCoords = {
  readonly __typename: 'PointOfInterestCoords';
  readonly bottomToTopCoords: StrokeCoordinates;
  readonly leftToRightCoords: StrokeCoordinates;
};

export type PointOfInterestCoordsV4 = {
  readonly __typename: 'PointOfInterestCoordsV4';
  readonly bottomToTopCoords: StrokeCoordinatesV4;
  readonly leftToRightCoords: StrokeCoordinatesV4;
};

export type PowerRankings = {
  readonly __typename: 'PowerRankings';
  readonly ascendingOrder: Scalars['Boolean']['output'];
  readonly powerRankingsTableRow: ReadonlyArray<PowerRankingsTableRow>;
  readonly tableTitle: Scalars['String']['output'];
  readonly tournamentName: Scalars['String']['output'];
  readonly unorderedList: Scalars['Boolean']['output'];
};

export type PowerRankingsTableRow = {
  readonly __typename: 'PowerRankingsTableRow';
  readonly comment: Scalars['String']['output'];
  readonly commentNodes?: Maybe<ReadonlyArray<TourSponsorDescription>>;
  readonly player?: Maybe<PlayerInfo>;
  readonly rank?: Maybe<Scalars['Int']['output']>;
};

export type PresentedByConfig = {
  readonly __typename: 'PresentedByConfig';
  readonly presentedBy: Sponsor;
  readonly splashScreen: Sponsor;
};

export type PreviousMatch = {
  readonly __typename: 'PreviousMatch';
  readonly matchId: Scalars['ID']['output'];
  readonly matchResult: Scalars['String']['output'];
  readonly matchScore: Scalars['String']['output'];
  readonly matchStatus: Scalars['String']['output'];
  readonly opponent: PreviousMatchOpponent;
  readonly roundDisplayText: Scalars['String']['output'];
  readonly roundNumber: Scalars['Int']['output'];
};

export type PreviousMatchOpponent = {
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

export type PreviousMatches = {
  readonly __typename: 'PreviousMatches';
  readonly header: Scalars['String']['output'];
  readonly matches?: Maybe<ReadonlyArray<PreviousMatch>>;
  readonly messages?: Maybe<ReadonlyArray<Message>>;
};

export type PreviousRounds = {
  readonly __typename: 'PreviousRounds';
  readonly matches?: Maybe<ReadonlyArray<PreviousMatch>>;
  readonly roundHeader: Scalars['String']['output'];
  readonly roundNumber: Scalars['Int']['output'];
};

export type PriorityCategory = {
  readonly __typename: 'PriorityCategory';
  readonly detail?: Maybe<Scalars['String']['output']>;
  readonly displayName: Scalars['String']['output'];
  readonly players: ReadonlyArray<PriorityPlayer>;
};

export type PriorityPlayer = {
  readonly __typename: 'PriorityPlayer';
  readonly displayName: Scalars['String']['output'];
  readonly playerId: Scalars['String']['output'];
};

export type PriorityRankings = {
  readonly __typename: 'PriorityRankings';
  readonly categories: ReadonlyArray<PriorityCategory>;
  readonly displayYear: Scalars['String']['output'];
  readonly throughText: Scalars['String']['output'];
  readonly tourCode: TourCode;
  readonly year: Scalars['Int']['output'];
  readonly yearPills: ReadonlyArray<StatYearPills>;
};

export type ProfileFedExFallStandings = {
  readonly __typename: 'ProfileFedExFallStandings';
  readonly description: Scalars['String']['output'];
  readonly detailCopy?: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  /** @deprecated Use logoAsset */
  readonly logo: Scalars['String']['output'];
  readonly logoAsset: ImageAsset;
  /** @deprecated Use logoDarkAsset */
  readonly logoDark: Scalars['String']['output'];
  readonly logoDarkAsset: ImageAsset;
  readonly rank: Scalars['String']['output'];
  /** @deprecated Use rankLogoAsset */
  readonly rankLogo?: Maybe<Scalars['String']['output']>;
  readonly rankLogoAsset?: Maybe<ImageAsset>;
  /** @deprecated Use rankLogoDarkAsset */
  readonly rankLogoDark?: Maybe<Scalars['String']['output']>;
  readonly rankLogoDarkAsset?: Maybe<ImageAsset>;
  readonly title: Scalars['String']['output'];
  readonly total: Scalars['String']['output'];
  readonly totalLabel: Scalars['String']['output'];
  readonly totals?: Maybe<ReadonlyArray<ProfileStandingsTotal>>;
  readonly webview?: Maybe<Scalars['String']['output']>;
  readonly webviewBrowserControls?: Maybe<Scalars['Boolean']['output']>;
};

export type ProfileHeadshot = {
  readonly __typename: 'ProfileHeadshot';
  readonly country: Scalars['String']['output'];
  readonly countryFlag: Scalars['String']['output'];
  readonly firstName: Scalars['String']['output'];
  readonly image: Scalars['String']['output'];
  readonly lastName: Scalars['String']['output'];
};

export type ProfileOverview = {
  readonly __typename: 'ProfileOverview';
  /** @deprecated use profileStandings */
  readonly fedexFallStandings?: Maybe<ProfileFedExFallStandings>;
  readonly headshot: ProfileHeadshot;
  readonly id: Scalars['ID']['output'];
  readonly performance: ReadonlyArray<ProfilePerformance>;
  readonly profileStandings: ReadonlyArray<ProfileStandings>;
  readonly snapshot: ReadonlyArray<ProfileSnapshotItem>;
  /** @deprecated use profileStandings */
  readonly standings: ProfileStandings;
  readonly tglTeamLogo?: Maybe<Scalars['String']['output']>;
  readonly tglTeamName?: Maybe<Scalars['String']['output']>;
};

export type ProfilePerformance = {
  readonly __typename: 'ProfilePerformance';
  readonly displaySeason: Scalars['String']['output'];
  readonly season: Scalars['String']['output'];
  readonly stats: ReadonlyArray<ProfilePerformanceStat>;
  readonly tour: TourCode;
};

export type ProfilePerformanceStat = {
  readonly __typename: 'ProfilePerformanceStat';
  readonly career?: Maybe<Scalars['String']['output']>;
  readonly title: Scalars['String']['output'];
  readonly value: Scalars['String']['output'];
  readonly wide?: Maybe<Scalars['Boolean']['output']>;
};

export type ProfileSnapshotItem = {
  readonly __typename: 'ProfileSnapshotItem';
  readonly description?: Maybe<Scalars['String']['output']>;
  readonly title: Scalars['String']['output'];
  readonly value: Scalars['String']['output'];
};

export type ProfileStandings = {
  readonly __typename: 'ProfileStandings';
  readonly description: Scalars['String']['output'];
  readonly detailCopy?: Maybe<Scalars['String']['output']>;
  readonly detailUrl?: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  /** @deprecated Use logoAsset */
  readonly logo: Scalars['String']['output'];
  readonly logoAsset: ImageAsset;
  /** @deprecated Use logoDarkAsset */
  readonly logoDark: Scalars['String']['output'];
  readonly logoDarkAsset: ImageAsset;
  readonly owgr?: Maybe<Scalars['String']['output']>;
  readonly rank: Scalars['String']['output'];
  /** @deprecated Use rankLogoAsset */
  readonly rankLogo?: Maybe<Scalars['String']['output']>;
  readonly rankLogoAsset?: Maybe<ImageAsset>;
  /** @deprecated Use rankLogoDarkAsset */
  readonly rankLogoDark?: Maybe<Scalars['String']['output']>;
  readonly rankLogoDarkAsset?: Maybe<ImageAsset>;
  readonly title: Scalars['String']['output'];
  readonly total: Scalars['String']['output'];
  readonly totalLabel: Scalars['String']['output'];
  readonly totals?: Maybe<ReadonlyArray<ProfileStandingsTotal>>;
  readonly webview?: Maybe<Scalars['String']['output']>;
  readonly webviewBrowserControls?: Maybe<Scalars['Boolean']['output']>;
};

export type ProfileStandingsTotal = {
  readonly __typename: 'ProfileStandingsTotal';
  readonly total: Scalars['String']['output'];
  readonly totalLabel: Scalars['String']['output'];
};

export type ProgramStat = {
  readonly __typename: 'ProgramStat';
  readonly statName?: Maybe<Scalars['String']['output']>;
  readonly value?: Maybe<Scalars['String']['output']>;
};

export type PromoItem = FieldPromoSection | PromoSection | PromoSectionNewsSection;

export type PromoSection = {
  readonly __typename: 'PromoSection';
  readonly items: ReadonlyArray<PromoSectionItem>;
  readonly title: Scalars['String']['output'];
};

export type PromoSectionContainer = {
  readonly __typename: 'PromoSectionContainer';
  readonly sections: ReadonlyArray<PromoItem>;
};

export type PromoSectionItem = {
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

export type PromoSectionNewsSection = {
  readonly __typename: 'PromoSectionNewsSection';
  readonly franchises: ReadonlyArray<Scalars['String']['output']>;
  readonly title: Scalars['String']['output'];
};

export type PromoSectionType =
  | 'GAMING'
  | 'MORE'
  | 'WEBGOLFBET';

export type PuttingPalsPlayer = {
  readonly __typename: 'PuttingPalsPlayer';
  readonly countryFlag: Scalars['String']['output'];
  readonly displayName: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
  readonly shortName: Scalars['String']['output'];
};

export type PuttingPalsPlayerRow = {
  readonly __typename: 'PuttingPalsPlayerRow';
  readonly id: Scalars['ID']['output'];
  readonly leaderboardSortOrder: Scalars['Int']['output'];
  readonly picks: ReadonlyArray<Scalars['ID']['output']>;
  readonly player: PuttingPalsPlayer;
  readonly scoringData: PuttingPalsPlayerScoringData;
};

export type PuttingPalsPlayerScoringData = {
  readonly __typename: 'PuttingPalsPlayerScoringData';
  readonly position: Scalars['String']['output'];
  readonly total: Scalars['String']['output'];
  readonly totalSort: Scalars['Int']['output'];
};

export type Query = {
  readonly __typename: 'Query';
  /**
   *   Returns the AdConfig for the given optionally supplied tour and/or tournament
   * @deprecated use REST API
   */
  readonly adTagConfig: AdConfig;
  readonly allTimeRecordCategories: AllTimeRecordCategories;
  readonly allTimeRecordStat: AllTimeRecordStat;
  readonly alltoursponsors: ReadonlyArray<Maybe<TourSponsor>>;
  readonly aon: Aon;
  /** @deprecated use REST API */
  readonly articleAdConfig: AdTagConfig;
  /** @deprecated Use articleDetailsCompressed */
  readonly articleDetails: NewsArticleDetails;
  readonly articleDetailsCompressed: NewsArticleDetailsCompressed;
  readonly broadcastTimes: BroadcastCoverage;
  /**   Note this is optional on purpose */
  readonly bubble?: Maybe<BubbleWatch>;
  /** @deprecated use bubble */
  readonly bubbleWatch?: Maybe<TourCupRankingEvent>;
  readonly completeSchedule: ReadonlyArray<Schedule>;
  readonly contentFragmentTabs: ContentFragmentTabs;
  readonly contentFragmentType?: Maybe<ContentFragmentType>;
  readonly contentFragmentsCompressed: ContentFragmentsCompressed;
  readonly courseHolesStats: ReadonlyArray<HoleStatSummary>;
  readonly courseStats: TournamentHoleStats;
  readonly courseStatsDetails: CourseStatsDetails;
  readonly courseStatsOverview: CourseStatsOverview;
  readonly coverage: BroadcastCoverage;
  readonly cupPastResults: CupPastResults;
  readonly cupPlayOverviewLeaderboard: CupTournamentStatus;
  readonly cupRoundLeaderboard: CupTournamentLeaderboard;
  readonly cupRoundLeaderboardCompressed: CupTournamentLeaderboardCompressed;
  readonly cupScorecard: CupScorecard;
  readonly cupTeamRoster: CupTeamRosters;
  readonly cupTeeTimes: CupTeeTimes;
  readonly currentLeadersCompressed?: Maybe<CurrentLeadersCompressed>;
  readonly defaultTourCup: TourCupRankingEvent;
  readonly eaglesForImpact: EaglesForImpact;
  readonly eventGuideConfig: EventGuideConfig;
  readonly field: Field;
  readonly fieldStats: FieldStats;
  readonly franchises: ReadonlyArray<Scalars['String']['output']>;
  readonly genericContent: GenericContent;
  readonly genericContentCompressed: GenericContentCompressed;
  readonly getExpertPicksTable: ExpertPicks;
  readonly getPowerRankingsTable: PowerRankings;
  readonly getRCPhotoGallery: RcPhotoGallery;
  readonly getRelatedFact: RelatedFact;
  readonly getShotCommentary: ShotCommentary;
  /**   Returns full details for a match based on supplied matchId */
  readonly groupLocations: GroupLocation;
  readonly groupStageRankings: GroupStageRankings;
  readonly groupedField: GroupedField;
  readonly historicalOdds?: Maybe<HistoricalPlayerOdds>;
  readonly historicalScorecardStats: HistoricalPlayerScorecards;
  readonly historicalTournamentsOdds?: Maybe<HistoricalTournamentOdds>;
  readonly holeDetails: HoleDetail;
  readonly leaderboardCompressedV2: LeaderboardCompressedV2;
  /**   Get the leaderboard for a tournament by tournamentID. The data in the payload property will be Base64 encoded. */
  readonly leaderboardCompressedV3: LeaderboardCompressedV3;
  readonly leaderboardHoleByHole: LeaderboardHoleByHole;
  readonly leaderboardLegend: LeaderboardInfo;
  readonly leaderboardStats: LeaderboardStats;
  readonly leaderboardStrokes: LeaderboardStrokes;
  readonly leaderboardStrokesCompressed: LeaderboardStrokesCompressed;
  readonly leaderboardV2: LeaderboardV2;
  readonly leaderboardV3: LeaderboardV3;
  readonly legalDocsCompressed: GenericContentCompressed;
  readonly liveAudioStream: AudioStream;
  readonly liveVideoOverride: LiveVideoOverride;
  readonly matchOutcomeIq: RyderCupMatchOutcomeIq;
  readonly matchPlayLeaderboard: MpLeaderboard;
  readonly matchPlayLeaderboardCompressed: LeaderboardCompressed;
  readonly matchPlayPlayoffScorecard: MpPlayoffScorecard;
  readonly matchPlayScorecard: MpScorecard;
  readonly matchPlayScorecardResults: MpScorecardResults;
  readonly matchPlayTeeTimes: MpTeeTimes;
  readonly matchPlayTeeTimesCompressed: TeeTimesCompressed;
  readonly networks: BroadcastNetworks;
  readonly newletterSubscriptions: ReadonlyArray<Newsletter>;
  readonly newsArticles: NewsArticles;
  readonly newsFranchises: ReadonlyArray<NewsFranchise>;
  readonly oddsGraph: OddsTimeline;
  readonly oddsTable: OddsTable;
  readonly oddsToWin: OddsToWinMarket;
  readonly oddsToWinCompressed: OddsToWinMarketCompressed;
  readonly player: PlayerBioWrapper;
  readonly playerComparison: PlayerComparison;
  readonly playerDirectory: PlayerDirectory;
  readonly playerFinishStats?: Maybe<PlayerFinishStats>;
  readonly playerHub?: Maybe<PlayerHubPlayerCompressed>;
  /** @deprecated use REST API */
  readonly playerProfileCareer: PlayerProfileCareer;
  /** @deprecated use REST API */
  readonly playerProfileCareerResults: PlayerProfileCareerResults;
  readonly playerProfileCourseResults?: Maybe<PlayerProfileCourseResults>;
  readonly playerProfileMajorResults?: Maybe<PlayerProfileMajors>;
  /** @deprecated use REST API */
  readonly playerProfileOverview: ProfileOverview;
  readonly playerProfileScorecards: HistoricalPlayerScorecards;
  /** @deprecated use REST API */
  readonly playerProfileSeasonResults: PlayerResults;
  /** @deprecated use REST API */
  readonly playerProfileStandings: ReadonlyArray<PlayerOverviewStandings>;
  readonly playerProfileStats: ReadonlyArray<PlayerProfileStat>;
  /** @deprecated use REST API */
  readonly playerProfileStatsFull: ReadonlyArray<PlayerProfileStatFull>;
  /** @deprecated use REST API */
  readonly playerProfileStatsFullV2: PlayerProfileStatsFullV2;
  /** @deprecated use REST API */
  readonly playerProfileStatsYears: ReadonlyArray<PlayerProfileStatYear>;
  readonly playerProfileTournamentResults: PlayerProfileTournamentResults;
  /** @deprecated use REST API */
  readonly playerSponsorships: ReadonlyArray<PlayerSponsorship>;
  readonly playerTournamentStatus?: Maybe<PlayerTournamentStatus>;
  readonly players: ReadonlyArray<PlayerBioWrapper>;
  readonly playersOddsComparison: ReadonlyArray<PlayerComparisonOdds>;
  readonly playoffScorecard: PlayoffScorecard;
  /** @deprecated use v3 */
  readonly playoffScorecardV2?: Maybe<ReadonlyArray<PlayoffScorecard>>;
  readonly playoffScorecardV3: TournamentPlayoffScorecards;
  readonly playoffShotDetails: GroupShotDetails;
  readonly playoffShotDetailsCompressed: GroupShotDetailsCompressed;
  readonly podcastEpisodes: ReadonlyArray<Episode>;
  readonly podcasts: ReadonlyArray<Audio>;
  readonly presentedBy: PresentedByConfig;
  readonly priorityRankings: PriorityRankings;
  readonly promoSection: PromoSectionContainer;
  readonly rankingsWinners: ReadonlyArray<RankingsPastWinner>;
  readonly rsm: RsmStandings;
  readonly rsmLeaderboard: RsmLeaderboard;
  readonly ryderCupArticleDetailsCompressed: NewsArticleDetailsCompressed;
  readonly ryderCupBroadcastCoverage: RyderCupBroadcastCoverage;
  readonly ryderCupContentFragmentsCompressed: ContentFragmentsCompressed;
  readonly ryderCupContentOptions: RyderCupMediaSearchOptions;
  readonly ryderCupContentPageTabs: ContentFragmentTabs;
  readonly ryderCupMixedMedia: ReadonlyArray<RyderCupContent>;
  readonly ryderCupMixedMediaCompressed: RyderCupContentCompressed;
  readonly ryderCupPlayerProfileCompressed: RyderCupPlayerProfileCompressed;
  /** @deprecated use ryderCupTeamRankingsV2 */
  readonly ryderCupTeamRankings?: Maybe<RyderCupTeamRankings>;
  /** @deprecated use ryderCupTeamRankingsCompressedV2 */
  readonly ryderCupTeamRankingsCompressed?: Maybe<RyderCupTeamRankingsCompressed>;
  readonly ryderCupTeamRankingsCompressedV2?: Maybe<RyderCupTeamRankingsCompressed>;
  readonly ryderCupTeamRankingsV2?: Maybe<RyderCupRankingsV2>;
  readonly ryderCupTournament?: Maybe<RyderCupTournament>;
  readonly ryderCupTournaments: ReadonlyArray<RyderCupTournamentOverview>;
  readonly ryderCupVideoById?: Maybe<RcVideoPage>;
  readonly scatterData: ScatterData;
  readonly scatterDataCompressed: ScatterDataCompressed;
  readonly schedule: Schedule;
  readonly scheduleYears: ScheduleYears;
  readonly scorecardCompressedV3: ScorecardCompressedV3;
  readonly scorecardStats: PlayerScorecardStats;
  readonly scorecardStatsComparison?: Maybe<ScorecardStatsComparison>;
  readonly scorecardStatsV3: PlayerScorecardStats;
  readonly scorecardStatsV3Compressed: PlayerScorecardStatsCompressed;
  readonly scorecardV2: LeaderboardDrawerV2;
  readonly scorecardV3: ScorecardV3;
  readonly searchBarFeatures: SearchBarFeatures;
  /** @deprecated No longer supported */
  readonly searchPlayers: ReadonlyArray<Player>;
  readonly shotDetailsCompressedV3: ShotDetailsCompressedV3;
  readonly shotDetailsV3: ShotDetails;
  /**   V4 Shot Details Query - Uses simplified coordinates and ImageAsset hole pickles (compressed only) */
  readonly shotDetailsV4Compressed: ShotDetailsV4Compressed;
  readonly signatureStandings: SignatureStandings;
  readonly sponsoredArticles: ReadonlyArray<NewsArticle>;
  readonly sponsoredArticlesV2: SponsoredArticles;
  /** @deprecated use REST API */
  readonly sponsorships: PlayerSponsors;
  readonly statDetails: StatDetails;
  readonly statLeaders: StatLeaderCategory;
  readonly statOverview: OverviewStats;
  readonly statsLeadersMobile: MobileStatLeaders;
  readonly teamStrokePlayLeaderboard: TspLeaderboard;
  readonly teamStrokePlayLeaderboardCompressed: LeaderboardCompressed;
  readonly teamStrokePlayScorecard: TspScorecard;
  readonly teamStrokePlayScorecardRounds: TspScorecardRounds;
  readonly teamStrokePlayTeeTimes: TspTeeTimes;
  readonly teamStrokePlayTeeTimesCompressed: TeeTimesCompressed;
  readonly teeTimes: TeeTimes;
  readonly teeTimesCompressed: TeeTimesCompressed;
  readonly teeTimesCompressedV2: TeeTimesCompressed;
  readonly teeTimesV2: TeeTimesV2;
  /**   Returns full details for matches based on supplied matchIds */
  readonly tglMatch?: Maybe<TglMatch>;
  /**   return a season from TGL based on supplied year, if year is ommitted current year returned, used by AEM */
  readonly tglMatches: ReadonlyArray<TglMatch>;
  /**  ## TGL queries */
  readonly tglSchedule: TglSchedule;
  readonly tourCup: TourCupRankingEvent;
  readonly tourCupCombined: TourCupCombined;
  readonly tourCupSplit?: Maybe<TourCupSplit>;
  readonly tourCups: ReadonlyArray<TourCupRankingEvent>;
  readonly tourcastTable: TourcastTable;
  readonly tourcastVideos: ReadonlyArray<Video>;
  readonly tournamentGroupLocations: TournamentGroupLocation;
  readonly tournamentHistory?: Maybe<TournamentHistory>;
  /** @deprecated DOES NOT WORK USE oddsWin / REST APIs */
  readonly tournamentOddsCompressedV2: TournamentOddsCompressedV2;
  readonly tournamentOddsToWin: TournamentOddsToWin;
  /** @deprecated DOES NOT WORK USE oddsToWin / REST APIs */
  readonly tournamentOddsV2: TournamentOddsV2;
  readonly tournamentOverview: TournamentOverview;
  readonly tournamentPastResults: HistoricalLeaderboard;
  readonly tournamentRecap: TournamentRecap;
  /**   Get tournament information for the given tournament IDs */
  readonly tournaments: ReadonlyArray<Tournament>;
  readonly tspPlayoffShotDetails: TeamShotDetails;
  readonly tspPlayoffShotDetailsCompressed: TeamShotDetailsCompressed;
  readonly universityRankings: UniversityRankings;
  readonly universityTotalPoints: UniversityTotalPoints;
  readonly upcomingNetworks: UpcomingBroadcastNetworks;
  readonly upcomingSchedule: ScheduleUpcoming;
  readonly videoById?: Maybe<Video>;
  readonly videoFranchises?: Maybe<TourCategories>;
  readonly videoHero: VideoHero;
  readonly videoLandingPage?: Maybe<WatchLanding>;
  readonly videoNavigation?: Maybe<VideoNavigation>;
  readonly videoRecommendations: ReadonlyArray<Video>;
  readonly videos: ReadonlyArray<Video>;
  readonly weather: WeatherSummary;
  readonly yourTour: YourTourStory;
  readonly yourTourNews: ReadonlyArray<YourTourNews>;
};


export type QueryAdTagConfigArgs = {
  tour?: InputMaybe<TourCode>;
  tournamentId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAllTimeRecordCategoriesArgs = {
  tourCode: TourCode;
};


export type QueryAllTimeRecordStatArgs = {
  recordId: Scalars['String']['input'];
  tourCode: TourCode;
};


export type QueryAlltoursponsorsArgs = {
  tourCode: TourCode;
};


export type QueryAonArgs = {
  year?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryArticleAdConfigArgs = {
  franchise?: InputMaybe<Scalars['String']['input']>;
};


export type QueryArticleDetailsArgs = {
  path: Scalars['String']['input'];
};


export type QueryArticleDetailsCompressedArgs = {
  path: Scalars['String']['input'];
};


export type QueryBroadcastTimesArgs = {
  pastResults?: InputMaybe<Scalars['Boolean']['input']>;
  tournamentId: Scalars['ID']['input'];
};


export type QueryBubbleArgs = {
  tourCode: TourCode;
  tournamentId: Scalars['ID']['input'];
};


export type QueryBubbleWatchArgs = {
  tourCode: TourCode;
};


export type QueryCompleteScheduleArgs = {
  filter?: InputMaybe<TournamentCategory>;
  tourCode: TourCode;
};


export type QueryContentFragmentTabsArgs = {
  path: Scalars['String']['input'];
};


export type QueryContentFragmentTypeArgs = {
  path: Scalars['String']['input'];
};


export type QueryContentFragmentsCompressedArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  tourCode: TourCode;
};


export type QueryCourseHolesStatsArgs = {
  courseId: Scalars['ID']['input'];
  tournamentId: Scalars['ID']['input'];
};


export type QueryCourseStatsArgs = {
  tournamentId: Scalars['ID']['input'];
};


export type QueryCourseStatsDetailsArgs = {
  queryType: CourseStatsId;
  round?: InputMaybe<ToughestRound>;
  tourCode: TourCode;
  year?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryCourseStatsOverviewArgs = {
  tourCode: TourCode;
  year?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryCoverageArgs = {
  pastResults?: InputMaybe<Scalars['Boolean']['input']>;
  tournamentId: Scalars['ID']['input'];
};


export type QueryCupPastResultsArgs = {
  tournamentId: Scalars['ID']['input'];
};


export type QueryCupPlayOverviewLeaderboardArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCupRoundLeaderboardArgs = {
  round?: InputMaybe<Scalars['Int']['input']>;
  tournamentId: Scalars['String']['input'];
};


export type QueryCupRoundLeaderboardCompressedArgs = {
  round?: InputMaybe<Scalars['Int']['input']>;
  tournamentId: Scalars['String']['input'];
};


export type QueryCupScorecardArgs = {
  matchId: Scalars['Int']['input'];
  round: Scalars['Int']['input'];
  tournamentId: Scalars['ID']['input'];
};


export type QueryCupTeamRosterArgs = {
  tournamentId: Scalars['ID']['input'];
};


export type QueryCupTeeTimesArgs = {
  tournamentId: Scalars['ID']['input'];
};


export type QueryCurrentLeadersCompressedArgs = {
  tourCode?: InputMaybe<TourCode>;
  tournamentId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryDefaultTourCupArgs = {
  tour: TourCode;
  year?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryEaglesForImpactArgs = {
  tournamentId: Scalars['ID']['input'];
};


export type QueryEventGuideConfigArgs = {
  tournamentId: Scalars['String']['input'];
};


export type QueryFieldArgs = {
  changesOnly?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
  includeWithdrawn?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryFieldStatsArgs = {
  fieldStatType?: InputMaybe<FieldStatType>;
  tournamentId: Scalars['ID']['input'];
};


export type QueryFranchisesArgs = {
  tourCode?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGenericContentArgs = {
  path: Scalars['String']['input'];
};


export type QueryGenericContentCompressedArgs = {
  path: Scalars['String']['input'];
};


export type QueryGetExpertPicksTableArgs = {
  path: Scalars['String']['input'];
  year?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetPowerRankingsTableArgs = {
  path: Scalars['String']['input'];
};


export type QueryGetRcPhotoGalleryArgs = {
  path: Scalars['String']['input'];
};


export type QueryGetRelatedFactArgs = {
  path: Scalars['String']['input'];
};


export type QueryGetShotCommentaryArgs = {
  playerId: Scalars['String']['input'];
  round: Scalars['Int']['input'];
  tournamentId: Scalars['String']['input'];
};


export type QueryGroupLocationsArgs = {
  round: Scalars['Int']['input'];
  tournamentId: Scalars['ID']['input'];
};


export type QueryGroupStageRankingsArgs = {
  tournamentId: Scalars['ID']['input'];
};


export type QueryGroupedFieldArgs = {
  changesOnly?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
  includeWithdrawn?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryHistoricalOddsArgs = {
  marketId: HistoricalOddsId;
  playerId: Scalars['String']['input'];
  timeStamp?: InputMaybe<Scalars['AWSDateTime']['input']>;
  tournamentId: Scalars['String']['input'];
};


export type QueryHistoricalScorecardStatsArgs = {
  playerId: Scalars['ID']['input'];
};


export type QueryHistoricalTournamentsOddsArgs = {
  marketId: OddsMarketType;
  timeStamp?: InputMaybe<Scalars['AWSDateTime']['input']>;
  tournamentId: Scalars['String']['input'];
};


export type QueryHoleDetailsArgs = {
  courseId: Scalars['ID']['input'];
  hole: Scalars['Int']['input'];
  tournamentId: Scalars['ID']['input'];
};


export type QueryLeaderboardCompressedV2Args = {
  id: Scalars['ID']['input'];
};


export type QueryLeaderboardCompressedV3Args = {
  id: Scalars['ID']['input'];
};


export type QueryLeaderboardHoleByHoleArgs = {
  round?: InputMaybe<Scalars['Int']['input']>;
  tournamentId: Scalars['ID']['input'];
};


export type QueryLeaderboardLegendArgs = {
  odds: Scalars['Boolean']['input'];
  tournamentId: Scalars['ID']['input'];
};


export type QueryLeaderboardStatsArgs = {
  id: Scalars['ID']['input'];
  statsType?: InputMaybe<LeaderboardStatsType>;
};


export type QueryLeaderboardStrokesArgs = {
  id: Scalars['ID']['input'];
};


export type QueryLeaderboardStrokesCompressedArgs = {
  id: Scalars['ID']['input'];
};


export type QueryLeaderboardV2Args = {
  id: Scalars['ID']['input'];
};


export type QueryLeaderboardV3Args = {
  id: Scalars['ID']['input'];
};


export type QueryLegalDocsCompressedArgs = {
  path: Scalars['String']['input'];
};


export type QueryLiveAudioStreamArgs = {
  id: Scalars['ID']['input'];
};


export type QueryLiveVideoOverrideArgs = {
  tourCode: TourCode;
  tournamentId: Scalars['String']['input'];
};


export type QueryMatchOutcomeIqArgs = {
  matchId: Scalars['Int']['input'];
  roundNumber?: InputMaybe<Scalars['Int']['input']>;
  tournamentId: Scalars['String']['input'];
};


export type QueryMatchPlayLeaderboardArgs = {
  id: Scalars['ID']['input'];
};


export type QueryMatchPlayLeaderboardCompressedArgs = {
  id: Scalars['ID']['input'];
};


export type QueryMatchPlayPlayoffScorecardArgs = {
  matchId: Scalars['ID']['input'];
  roundNum: Scalars['Int']['input'];
  tournamentId: Scalars['ID']['input'];
};


export type QueryMatchPlayScorecardArgs = {
  matchId: Scalars['ID']['input'];
  roundNum: Scalars['Int']['input'];
  tournamentId: Scalars['ID']['input'];
};


export type QueryMatchPlayScorecardResultsArgs = {
  matchId: Scalars['ID']['input'];
  roundNum: Scalars['Int']['input'];
  tournamentId: Scalars['ID']['input'];
};


export type QueryMatchPlayTeeTimesArgs = {
  tournamentId: Scalars['ID']['input'];
};


export type QueryMatchPlayTeeTimesCompressedArgs = {
  tournamentId: Scalars['ID']['input'];
};


export type QueryNetworksArgs = {
  tournamentId: Scalars['ID']['input'];
};


export type QueryNewletterSubscriptionsArgs = {
  includeTournaments?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryNewsArticlesArgs = {
  franchise?: InputMaybe<Scalars['String']['input']>;
  franchises?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  playerId?: InputMaybe<Scalars['ID']['input']>;
  playerIds?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
  sectionName?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  targetYear?: InputMaybe<Scalars['String']['input']>;
  tour?: InputMaybe<TourCode>;
  tournamentNum?: InputMaybe<Scalars['String']['input']>;
};


export type QueryNewsFranchisesArgs = {
  allFranchises?: InputMaybe<Scalars['Boolean']['input']>;
  tourCode?: InputMaybe<Scalars['String']['input']>;
};


export type QueryOddsGraphArgs = {
  marketId?: InputMaybe<HistoricalOddsId>;
  oddsTimeType?: InputMaybe<OddsTimeType>;
  playerIds: ReadonlyArray<Scalars['String']['input']>;
  round?: InputMaybe<Scalars['Int']['input']>;
  tournamentId: Scalars['String']['input'];
};


export type QueryOddsTableArgs = {
  markets?: InputMaybe<ReadonlyArray<ArticleOddsMarketsInput>>;
  players?: InputMaybe<ReadonlyArray<ArticleOddsPlayerInput>>;
  timeStamp?: InputMaybe<Scalars['String']['input']>;
  tournamentId: Scalars['String']['input'];
  tournamentName: Scalars['String']['input'];
};


export type QueryOddsToWinArgs = {
  oddsToWinId: Scalars['ID']['input'];
};


export type QueryOddsToWinCompressedArgs = {
  oddsToWinId: Scalars['ID']['input'];
};


export type QueryPlayerArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPlayerComparisonArgs = {
  category?: InputMaybe<PlayerComparisonCategory>;
  playerIds: ReadonlyArray<Scalars['String']['input']>;
  tourCode: TourCode;
  tournamentId?: InputMaybe<Scalars['String']['input']>;
  year?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryPlayerDirectoryArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  tourCode: TourCode;
};


export type QueryPlayerFinishStatsArgs = {
  playerId: Scalars['ID']['input'];
  statId: Scalars['String']['input'];
  tourCode: TourCode;
};


export type QueryPlayerHubArgs = {
  playerId: Scalars['ID']['input'];
};


export type QueryPlayerProfileCareerArgs = {
  playerId: Scalars['String']['input'];
  tourCode?: InputMaybe<TourCode>;
};


export type QueryPlayerProfileCareerResultsArgs = {
  playerId: Scalars['ID']['input'];
};


export type QueryPlayerProfileCourseResultsArgs = {
  playerId: Scalars['String']['input'];
  tourCode?: InputMaybe<TourCode>;
};


export type QueryPlayerProfileMajorResultsArgs = {
  playerId: Scalars['String']['input'];
};


export type QueryPlayerProfileOverviewArgs = {
  currentTour?: InputMaybe<TourCode>;
  playerId: Scalars['ID']['input'];
};


export type QueryPlayerProfileScorecardsArgs = {
  playerId: Scalars['ID']['input'];
};


export type QueryPlayerProfileSeasonResultsArgs = {
  playerId: Scalars['ID']['input'];
  tourCode?: InputMaybe<TourCode>;
  year?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryPlayerProfileStandingsArgs = {
  playerId: Scalars['ID']['input'];
};


export type QueryPlayerProfileStatsArgs = {
  playerId: Scalars['ID']['input'];
};


export type QueryPlayerProfileStatsFullArgs = {
  playerId: Scalars['ID']['input'];
  year?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryPlayerProfileStatsFullV2Args = {
  playerId: Scalars['ID']['input'];
  year?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryPlayerProfileStatsYearsArgs = {
  playerId: Scalars['ID']['input'];
};


export type QueryPlayerProfileTournamentResultsArgs = {
  playerId: Scalars['ID']['input'];
  tourCode?: InputMaybe<TourCode>;
};


export type QueryPlayerSponsorshipsArgs = {
  sponsors?: InputMaybe<ReadonlyArray<PlayerSponsorBrand>>;
  tour: TourCode;
};


export type QueryPlayerTournamentStatusArgs = {
  playerId: Scalars['ID']['input'];
};


export type QueryPlayersArgs = {
  ids: ReadonlyArray<Scalars['ID']['input']>;
};


export type QueryPlayersOddsComparisonArgs = {
  playerIds: ReadonlyArray<Scalars['String']['input']>;
};


export type QueryPlayoffScorecardArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPlayoffScorecardV2Args = {
  id: Scalars['ID']['input'];
};


export type QueryPlayoffScorecardV3Args = {
  tournamentId: Scalars['ID']['input'];
};


export type QueryPlayoffShotDetailsArgs = {
  includeRadar?: InputMaybe<Scalars['Boolean']['input']>;
  tournamentId: Scalars['ID']['input'];
};


export type QueryPlayoffShotDetailsCompressedArgs = {
  includeRadar?: InputMaybe<Scalars['Boolean']['input']>;
  tournamentId: Scalars['ID']['input'];
};


export type QueryPodcastEpisodesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  podcastId: Scalars['String']['input'];
};


export type QueryPriorityRankingsArgs = {
  tourCode: TourCode;
  year?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryPromoSectionArgs = {
  section: PromoSectionType;
};


export type QueryRankingsWinnersArgs = {
  tourCode?: InputMaybe<TourCode>;
};


export type QueryRsmArgs = {
  year?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryRsmLeaderboardArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  tournamentId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryRyderCupArticleDetailsCompressedArgs = {
  path: Scalars['String']['input'];
};


export type QueryRyderCupBroadcastCoverageArgs = {
  eventRegion?: InputMaybe<EventRegion>;
};


export type QueryRyderCupContentFragmentsCompressedArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  tourCode: TourCode;
};


export type QueryRyderCupContentPageTabsArgs = {
  path: Scalars['String']['input'];
};


export type QueryRyderCupMixedMediaArgs = {
  articleTags?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  ascending: Scalars['Boolean']['input'];
  categories?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  currentContentId?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  playerIds?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  team?: InputMaybe<RyderCupTeamType>;
  topic?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<RyderCupContentType>;
  videoTags?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  year?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryRyderCupMixedMediaCompressedArgs = {
  articleTags?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  ascending: Scalars['Boolean']['input'];
  categories?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  currentContentId?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  playerIds?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  team?: InputMaybe<RyderCupTeamType>;
  topic?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<RyderCupContentType>;
  videoTags?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  year?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryRyderCupPlayerProfileCompressedArgs = {
  playerId: Scalars['String']['input'];
};


export type QueryRyderCupTeamRankingsArgs = {
  eventQuery?: InputMaybe<RyderCupRankingsQueryInput>;
  year?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryRyderCupTeamRankingsCompressedArgs = {
  eventQuery?: InputMaybe<RyderCupRankingsQueryInput>;
  year?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryRyderCupTeamRankingsCompressedV2Args = {
  eventQuery?: InputMaybe<RyderCupRankingsQueryInput>;
  year?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryRyderCupTeamRankingsV2Args = {
  eventQuery?: InputMaybe<RyderCupRankingsQueryInput>;
  year?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryRyderCupTournamentArgs = {
  year: Scalars['Int']['input'];
};


export type QueryRyderCupVideoByIdArgs = {
  brightcoveId: Scalars['ID']['input'];
};


export type QueryScatterDataArgs = {
  course: Scalars['Int']['input'];
  hole: Scalars['Int']['input'];
  tournamentId: Scalars['String']['input'];
};


export type QueryScatterDataCompressedArgs = {
  course: Scalars['Int']['input'];
  hole: Scalars['Int']['input'];
  tournamentId: Scalars['String']['input'];
};


export type QueryScheduleArgs = {
  filter?: InputMaybe<TournamentCategory>;
  tourCode: Scalars['String']['input'];
  year?: InputMaybe<Scalars['String']['input']>;
};


export type QueryScheduleYearsArgs = {
  tourCode: TourCode;
};


export type QueryScorecardCompressedV3Args = {
  officialEventData?: InputMaybe<Scalars['Boolean']['input']>;
  playerId: Scalars['ID']['input'];
  tournamentId: Scalars['ID']['input'];
};


export type QueryScorecardStatsArgs = {
  id: Scalars['ID']['input'];
  playerId: Scalars['ID']['input'];
};


export type QueryScorecardStatsComparisonArgs = {
  category: PlayerComparisonCategory;
  playerIds: ReadonlyArray<Scalars['String']['input']>;
  round?: InputMaybe<Scalars['Int']['input']>;
  tournamentId: Scalars['String']['input'];
};


export type QueryScorecardStatsV3Args = {
  id: Scalars['ID']['input'];
  playerId: Scalars['ID']['input'];
};


export type QueryScorecardStatsV3CompressedArgs = {
  id: Scalars['ID']['input'];
  playerId: Scalars['ID']['input'];
};


export type QueryScorecardV2Args = {
  id: Scalars['ID']['input'];
  playerId: Scalars['ID']['input'];
};


export type QueryScorecardV3Args = {
  officialEventData?: InputMaybe<Scalars['Boolean']['input']>;
  playerId: Scalars['ID']['input'];
  tournamentId: Scalars['ID']['input'];
};


export type QuerySearchBarFeaturesArgs = {
  tourCode?: InputMaybe<TourCode>;
};


export type QuerySearchPlayersArgs = {
  lastName?: InputMaybe<Scalars['String']['input']>;
};


export type QueryShotDetailsCompressedV3Args = {
  includeRadar?: InputMaybe<Scalars['Boolean']['input']>;
  playerId: Scalars['ID']['input'];
  round: Scalars['Int']['input'];
  tournamentId: Scalars['ID']['input'];
};


export type QueryShotDetailsV3Args = {
  includeRadar?: InputMaybe<Scalars['Boolean']['input']>;
  playerId: Scalars['ID']['input'];
  round: Scalars['Int']['input'];
  tournamentId: Scalars['ID']['input'];
};


export type QueryShotDetailsV4CompressedArgs = {
  includeRadar?: InputMaybe<Scalars['Boolean']['input']>;
  playerId: Scalars['ID']['input'];
  round: Scalars['Int']['input'];
  tournamentId: Scalars['ID']['input'];
};


export type QuerySignatureStandingsArgs = {
  tourCode: TourCode;
};


export type QuerySponsoredArticlesArgs = {
  sponsor: ArticleSponsor;
};


export type QuerySponsoredArticlesV2Args = {
  sponsor: ArticleSponsor;
};


export type QuerySponsorshipsArgs = {
  playerId: Scalars['ID']['input'];
};


export type QueryStatDetailsArgs = {
  eventQuery?: InputMaybe<StatDetailEventQuery>;
  statId: Scalars['String']['input'];
  tourCode: TourCode;
  year?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryStatLeadersArgs = {
  category: StatCategory;
  tourCode: TourCode;
  year?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryStatOverviewArgs = {
  tourCode: TourCode;
  year?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryStatsLeadersMobileArgs = {
  tourCode: TourCode;
  year?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryTeamStrokePlayLeaderboardArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTeamStrokePlayLeaderboardCompressedArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTeamStrokePlayScorecardArgs = {
  roundNum: Scalars['Int']['input'];
  teamId: Scalars['ID']['input'];
  tournamentId: Scalars['ID']['input'];
};


export type QueryTeamStrokePlayScorecardRoundsArgs = {
  teamId: Scalars['ID']['input'];
  tournamentId: Scalars['ID']['input'];
};


export type QueryTeamStrokePlayTeeTimesArgs = {
  tournamentId: Scalars['ID']['input'];
};


export type QueryTeamStrokePlayTeeTimesCompressedArgs = {
  tournamentId: Scalars['ID']['input'];
};


export type QueryTeeTimesArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTeeTimesCompressedArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTeeTimesCompressedV2Args = {
  id: Scalars['ID']['input'];
};


export type QueryTeeTimesV2Args = {
  id: Scalars['ID']['input'];
};


export type QueryTglMatchArgs = {
  matchId: Scalars['ID']['input'];
};


export type QueryTglMatchesArgs = {
  matchIds: ReadonlyArray<Scalars['ID']['input']>;
};


export type QueryTglScheduleArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  year?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryTourCupArgs = {
  id: Scalars['ID']['input'];
  type?: InputMaybe<TourCupType>;
};


export type QueryTourCupCombinedArgs = {
  eventQuery?: InputMaybe<StatDetailEventQuery>;
  id?: InputMaybe<Scalars['String']['input']>;
  tourCode: TourCode;
  year?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryTourCupSplitArgs = {
  eventQuery?: InputMaybe<StatDetailEventQuery>;
  id?: InputMaybe<Scalars['String']['input']>;
  tourCode: TourCode;
  year?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryTourCupsArgs = {
  tour: TourCode;
  year: Scalars['Int']['input'];
};


export type QueryTourcastTableArgs = {
  tournamentId: Scalars['ID']['input'];
};


export type QueryTourcastVideosArgs = {
  hole?: InputMaybe<Scalars['Int']['input']>;
  playerId: Scalars['ID']['input'];
  round: Scalars['Int']['input'];
  shot?: InputMaybe<Scalars['Int']['input']>;
  tournamentId: Scalars['ID']['input'];
};


export type QueryTournamentGroupLocationsArgs = {
  round: Scalars['Int']['input'];
  tournamentId: Scalars['ID']['input'];
};


export type QueryTournamentHistoryArgs = {
  tournamentId: Scalars['String']['input'];
};


export type QueryTournamentOddsCompressedV2Args = {
  oddsFormat?: InputMaybe<OddsFormat>;
  provider?: InputMaybe<OddsProvider>;
  tournamentId: Scalars['ID']['input'];
};


export type QueryTournamentOddsToWinArgs = {
  tournamentId: Scalars['ID']['input'];
};


export type QueryTournamentOddsV2Args = {
  oddsFormat?: InputMaybe<OddsFormat>;
  provider?: InputMaybe<OddsProvider>;
  tournamentId: Scalars['ID']['input'];
};


export type QueryTournamentOverviewArgs = {
  tournamentId: Scalars['ID']['input'];
};


export type QueryTournamentPastResultsArgs = {
  id: Scalars['ID']['input'];
  year?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryTournamentRecapArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  tournamentId: Scalars['String']['input'];
};


export type QueryTournamentsArgs = {
  ids?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
};


export type QueryTspPlayoffShotDetailsArgs = {
  includeRadar?: InputMaybe<Scalars['Boolean']['input']>;
  tournamentId: Scalars['ID']['input'];
};


export type QueryTspPlayoffShotDetailsCompressedArgs = {
  includeRadar?: InputMaybe<Scalars['Boolean']['input']>;
  tournamentId: Scalars['ID']['input'];
};


export type QueryUniversityRankingsArgs = {
  tourCode?: InputMaybe<TourCode>;
  week?: InputMaybe<Scalars['Int']['input']>;
  year?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryUniversityTotalPointsArgs = {
  season?: InputMaybe<Scalars['Int']['input']>;
  week?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryUpcomingNetworksArgs = {
  tourCode?: InputMaybe<TourCode>;
  tournamentIds: ReadonlyArray<Scalars['ID']['input']>;
};


export type QueryUpcomingScheduleArgs = {
  filter?: InputMaybe<TournamentCategory>;
  tourCode: Scalars['String']['input'];
  year?: InputMaybe<Scalars['String']['input']>;
};


export type QueryVideoByIdArgs = {
  brightcoveId: Scalars['ID']['input'];
  tourcast: Scalars['Boolean']['input'];
};


export type QueryVideoFranchisesArgs = {
  tourCode?: InputMaybe<TourCode>;
};


export type QueryVideoHeroArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
  tourCode: TourCode;
};


export type QueryVideoLandingPageArgs = {
  tourCode: TourCode;
};


export type QueryVideoNavigationArgs = {
  tourCode: TourCode;
};


export type QueryVideoRecommendationsArgs = {
  brightcoveId?: InputMaybe<Scalars['ID']['input']>;
  franchise?: InputMaybe<Scalars['String']['input']>;
  language?: InputMaybe<VideoLanguage>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  playerId?: InputMaybe<Scalars['String']['input']>;
  season?: InputMaybe<Scalars['String']['input']>;
  tour?: InputMaybe<Scalars['String']['input']>;
  tourCode?: InputMaybe<TourCode>;
  tournamentId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryVideosArgs = {
  category?: InputMaybe<Scalars['String']['input']>;
  franchise?: InputMaybe<Scalars['String']['input']>;
  franchises?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  holeNumber?: InputMaybe<Scalars['String']['input']>;
  language?: InputMaybe<VideoLanguage>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  playerId?: InputMaybe<Scalars['String']['input']>;
  playerIds?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  rating?: InputMaybe<Scalars['Int']['input']>;
  season?: InputMaybe<Scalars['String']['input']>;
  tour?: InputMaybe<Scalars['String']['input']>;
  tourCode?: InputMaybe<TourCode>;
  tournamentId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryWeatherArgs = {
  tournamentId: Scalars['ID']['input'];
};


export type QueryYourTourArgs = {
  tourCode: TourCode;
};


export type QueryYourTourNewsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  tourCode: TourCode;
};

export type RcContentTypeParent = {
  readonly __typename: 'RCContentTypeParent';
  readonly displayValue: Scalars['String']['output'];
  readonly queryValue: RyderCupContentType;
};

export type RcHomepageAssets = NewsArticle | RcPhotoGallery | Video;

export type RcPhotoGallery = {
  readonly __typename: 'RCPhotoGallery';
  readonly authorReference?: Maybe<NewsArticleAuthor>;
  readonly cta?: Maybe<CallToAction>;
  readonly date?: Maybe<Scalars['AWSTimestamp']['output']>;
  readonly eventYears?: Maybe<ReadonlyArray<Scalars['String']['output']>>;
  readonly id: Scalars['String']['output'];
  readonly images?: Maybe<ReadonlyArray<Image>>;
  readonly sectionTitle?: Maybe<Scalars['String']['output']>;
  readonly shareUrl?: Maybe<Scalars['String']['output']>;
  readonly sponsor?: Maybe<NewsArticleSponsor>;
  readonly subhead?: Maybe<Scalars['String']['output']>;
  readonly tags?: Maybe<ReadonlyArray<Maybe<Scalars['String']['output']>>>;
  readonly team?: Maybe<RyderCupTeamType>;
  readonly teaserImageOverride?: Maybe<Scalars['String']['output']>;
  readonly topics?: Maybe<ReadonlyArray<ContentTopics>>;
  readonly url?: Maybe<Scalars['String']['output']>;
};

/**
 *   type RCPlayerProfileContent {
 *      header: String!
 *      content: [NewsArticleNode]
 *  }
 */
export type RcPlayerTournamentRecord = {
  readonly __typename: 'RCPlayerTournamentRecord';
  readonly fourBallPoints: Scalars['Int']['output'];
  readonly foursomesPoints: Scalars['Int']['output'];
  readonly matchesPlayed: Scalars['Int']['output'];
  readonly pointsEarned: Scalars['Int']['output'];
  readonly sectionTitle?: Maybe<Scalars['String']['output']>;
  readonly singlesPoints: Scalars['Int']['output'];
};

export type RcTeamTypeParent = {
  readonly __typename: 'RCTeamTypeParent';
  readonly displayValue: Scalars['String']['output'];
  readonly queryValue: RyderCupTeamType;
};

export type RcVideoPage = {
  readonly __typename: 'RCVideoPage';
  readonly upNextVideos?: Maybe<ReadonlyArray<Video>>;
  readonly video?: Maybe<Video>;
};

export type RsmEventWinner = {
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

export type RsmHistoricalWinner = {
  readonly __typename: 'RSMHistoricalWinner';
  readonly displaySeason: Scalars['String']['output'];
  readonly winners: ReadonlyArray<RsmEventWinner>;
  readonly year: Scalars['Int']['output'];
};

export type RsmLeaderboard = {
  readonly __typename: 'RSMLeaderboard';
  readonly dateText?: Maybe<Scalars['String']['output']>;
  readonly isLive?: Maybe<Scalars['Boolean']['output']>;
  readonly livePlayers: ReadonlyArray<RsmLeaderboardPlayer>;
  readonly players: ReadonlyArray<RsmLeaderboardPlayer>;
  readonly round?: Maybe<Scalars['String']['output']>;
  readonly tournamentId: Scalars['ID']['output'];
  readonly tournamentName: Scalars['String']['output'];
};

export type RsmLeaderboardPlayer = {
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

export type RsmPlayer = {
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

export type RsmStandings = {
  readonly __typename: 'RSMStandings';
  readonly currentLeaderboard: ReadonlyArray<RsmPlayer>;
  readonly previousWinners: ReadonlyArray<RsmHistoricalWinner>;
  readonly weeklyWinners: ReadonlyArray<RsmEventWinner>;
};

export type Ryder_Cup_Ranking_Tooltip =
  | 'CAPTAIN_PICK'
  | 'OUTCOME_IQ'
  | 'QUALIFICATION_INFO'
  | 'QUALIFIED_LOGO';

export type RadarBallTracjectory = {
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

export type RadarData = {
  readonly __typename: 'RadarData';
  readonly actualFlightTime: Scalars['Int']['output'];
  readonly apexHeight: Scalars['Float']['output'];
  readonly apexRange: Scalars['Float']['output'];
  readonly apexSide: Scalars['Float']['output'];
  readonly ballImpactMeasured?: Maybe<Scalars['String']['output']>;
  readonly ballSpeed: Scalars['Float']['output'];
  readonly ballTrajectory: ReadonlyArray<RadarBallTracjectory>;
  readonly clubSpeed: Scalars['Float']['output'];
  readonly horizontalLaunchAngle: Scalars['Float']['output'];
  readonly launchSpin: Scalars['Float']['output'];
  /** @deprecated use normalizedTrajectoryV2 */
  readonly normalizedTrajectory: ReadonlyArray<RadarNormalizedTrajectory>;
  readonly normalizedTrajectoryV2: ReadonlyArray<RadarNormalizedTrajectoryV2>;
  readonly smashFactor: Scalars['Float']['output'];
  readonly spinAxis: Scalars['Float']['output'];
  readonly verticalLaunchAngle: Scalars['Float']['output'];
};

export type RadarNormalizedTrajectory = {
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

export type RadarNormalizedTrajectoryV2 = {
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

export type RangeWeatherTemp = {
  readonly __typename: 'RangeWeatherTemp';
  readonly maxTempC: Scalars['String']['output'];
  readonly maxTempF: Scalars['String']['output'];
  readonly minTempC: Scalars['String']['output'];
  readonly minTempF: Scalars['String']['output'];
};

export type RankingsPastWinner = {
  readonly __typename: 'RankingsPastWinner';
  readonly description: Scalars['String']['output'];
  readonly displayName: Scalars['String']['output'];
  /** @deprecated Use imageAsset */
  readonly image: Scalars['String']['output'];
  readonly imageAsset: ImageAsset;
  readonly playerId: Scalars['ID']['output'];
  readonly season: Scalars['String']['output'];
};

export type RankingsTeams =
  | 'EUROPE'
  | 'USA';

export type RcBroadcastPrograms = {
  readonly __typename: 'RcBroadcastPrograms';
  readonly broadcastDate: Scalars['String']['output'];
  readonly programs: ReadonlyArray<RcProgram>;
};

export type RcBroadcastType =
  | 'AUDIO'
  | 'VIDEO';

export type RcProducts = {
  readonly __typename: 'RcProducts';
  readonly cta?: Maybe<CallToAction>;
  readonly header?: Maybe<Scalars['String']['output']>;
  readonly imageGallery?: Maybe<ReadonlyArray<Scalars['String']['output']>>;
  readonly path: Scalars['String']['output'];
  readonly productDescription?: Maybe<ReadonlyArray<Maybe<NewsArticleNode>>>;
};

export type RcProgram = {
  readonly __typename: 'RcProgram';
  readonly androidLink?: Maybe<Scalars['String']['output']>;
  readonly appleAppStore?: Maybe<Scalars['String']['output']>;
  readonly brightcoveId?: Maybe<Scalars['String']['output']>;
  readonly broadcastType: RcBroadcastType;
  readonly cta1?: Maybe<CallToAction>;
  readonly cta2?: Maybe<CallToAction>;
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
  readonly networkLogoAsset?: Maybe<ImageAsset>;
  readonly networkLogoDark?: Maybe<Scalars['String']['output']>;
  readonly networkLogoDarkAsset?: Maybe<ImageAsset>;
  readonly networkName?: Maybe<Scalars['String']['output']>;
  readonly posterImage?: Maybe<Scalars['String']['output']>;
  readonly posterImageAsset?: Maybe<ImageAsset>;
  readonly regions?: Maybe<ReadonlyArray<Maybe<Scalars['String']['output']>>>;
  readonly roundNum?: Maybe<Scalars['String']['output']>;
  readonly shortDescription?: Maybe<Scalars['String']['output']>;
  readonly startTime?: Maybe<Scalars['String']['output']>;
  readonly startTimeUtc?: Maybe<Scalars['AWSTimestamp']['output']>;
  readonly streamUrl?: Maybe<Scalars['String']['output']>;
  readonly thumbnailImage?: Maybe<Scalars['String']['output']>;
  readonly thumbnailImageAsset?: Maybe<ImageAsset>;
  readonly title: Scalars['String']['output'];
  readonly url: Scalars['String']['output'];
};

export type RelatedFact = {
  readonly __typename: 'RelatedFact';
  readonly factText?: Maybe<ReadonlyArray<TourSponsorDescription>>;
  readonly photo?: Maybe<Scalars['String']['output']>;
};

export type RelatedFactsNode = {
  readonly __typename: 'RelatedFactsNode';
  readonly path: Scalars['String']['output'];
};

export type ResultsStandingsDetail = {
  readonly __typename: 'ResultsStandingsDetail';
  /** @deprecated Use cupLogoAsset */
  readonly cupLogo?: Maybe<Scalars['String']['output']>;
  readonly cupLogoAccessibilityText?: Maybe<Scalars['String']['output']>;
  readonly cupLogoAsset?: Maybe<ImageAsset>;
  /** @deprecated Use cupLogoDarkAsset */
  readonly cupLogoDark?: Maybe<Scalars['String']['output']>;
  readonly cupLogoDarkAsset?: Maybe<ImageAsset>;
  readonly cupName?: Maybe<Scalars['String']['output']>;
  readonly cupPoints?: Maybe<Scalars['String']['output']>;
  readonly cupRank?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use rankLogoAsset */
  readonly rankLogo?: Maybe<Scalars['String']['output']>;
  readonly rankLogoAccessibilityText?: Maybe<Scalars['String']['output']>;
  readonly rankLogoAsset?: Maybe<ImageAsset>;
  /** @deprecated Use rankLogoDarkAsset */
  readonly rankLogoDark?: Maybe<Scalars['String']['output']>;
  readonly rankLogoDarkAsset?: Maybe<ImageAsset>;
};

export type ResultsYears = {
  readonly __typename: 'ResultsYears';
  readonly tour: TourCode;
  readonly years: ReadonlyArray<Scalars['String']['output']>;
};

export type RolexClock = {
  readonly __typename: 'RolexClock';
  readonly height?: Maybe<Scalars['Float']['output']>;
  readonly width?: Maybe<Scalars['Float']['output']>;
};

export type RoundFilter = {
  readonly __typename: 'RoundFilter';
  readonly displayText: Scalars['String']['output'];
  readonly roundNumbers: ReadonlyArray<Scalars['Int']['output']>;
};

export type RoundFormat =
  | 'ALTERNATE_SHOT'
  | 'BEST_BALL';

export type RoundScore = {
  readonly __typename: 'RoundScore';
  readonly complete: Scalars['Boolean']['output'];
  readonly courseAbbreviation?: Maybe<Scalars['String']['output']>;
  readonly courseId?: Maybe<Scalars['String']['output']>;
  readonly courseName: Scalars['String']['output'];
  readonly currentHole: Scalars['Int']['output'];
  readonly currentRound: Scalars['Boolean']['output'];
  readonly firstNine: ScorecardRow;
  readonly groupNumber: Scalars['Int']['output'];
  readonly parTotal: Scalars['Int']['output'];
  readonly roundNumber: Scalars['Int']['output'];
  readonly scoreToPar: Scalars['String']['output'];
  readonly secondNine: ScorecardRow;
  readonly total: Scalars['String']['output'];
  readonly tourcastURI?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastURL?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastURLWeb?: Maybe<Scalars['String']['output']>;
};

export type RoundScoreItem = {
  readonly __typename: 'RoundScoreItem';
  readonly roundDisplay: Scalars['String']['output'];
  readonly roundNum: Scalars['Int']['output'];
  readonly roundScore: Scalars['String']['output'];
};

export type RoundStatus =
  | 'COMPLETE'
  | 'GROUPINGS_OFFICIAL'
  | 'IN_PROGRESS'
  | 'OFFICIAL'
  | 'SUSPENDED'
  | 'UPCOMING';

export type RoundStatusColor =
  | 'BLUE'
  | 'GRAY'
  | 'GREEN'
  | 'RED'
  | 'YELLOW';

export type RyderCupBio = {
  readonly __typename: 'RyderCupBio';
  readonly bio?: Maybe<ReadonlyArray<Maybe<NewsArticleNode>>>;
};

export type RyderCupBroadcastCoverage = {
  readonly __typename: 'RyderCupBroadcastCoverage';
  readonly broadcastPrograms: ReadonlyArray<RcBroadcastPrograms>;
};

export type RyderCupCaptain = {
  readonly __typename: 'RyderCupCaptain';
  readonly displayName: Scalars['String']['output'];
  readonly firstName: Scalars['String']['output'];
  readonly lastName: Scalars['String']['output'];
  readonly playerId: Scalars['String']['output'];
};

export type RyderCupContent = NewsArticle | RcPhotoGallery | Video;

export type RyderCupContentCategories = {
  readonly __typename: 'RyderCupContentCategories';
  readonly id: Scalars['Int']['output'];
  readonly name: Scalars['String']['output'];
};

export type RyderCupContentCompressed = {
  readonly __typename: 'RyderCupContentCompressed';
  readonly input?: Maybe<PaginationDetails>;
  readonly payload: Scalars['String']['output'];
};

export type RyderCupContentFragment = {
  readonly __typename: 'RyderCupContentFragment';
  readonly fragments: ReadonlyArray<RyderCupContentFragments>;
  readonly pageMetadata: PageMetadata;
  readonly totalLength: Scalars['Int']['output'];
};

export type RyderCupContentFragments = BroadcastTableFragment | ContentFragmentTabs | ContentStory | ContentVideoCarousel | CourseInfo | DropdownFragment | EventHub | EventHubTable | FutureVenuesFragment | FutureVenuesTableFragment | GenericContent | HeroCarousel | HistoryInfo | HistoryScore | HomepageLead | HomepageNews | HomepageProgramStanding | HomepageScoring | HospitalityCard | ImageBlock | JumpToSection | KopHeader | KopSignUp | KopStandingsList | KopSubheader | KopUpcomingTournament | KopUserProfile | KopZigZag | MatchCard | MediaGallery | MessageBanner | OddsToWinTracker | RcProducts | RolexClock | RyderCupCourseModel | RyderCupLatestNewsSection | RyderCupPlayerBios | SecondaryHero | TeamRankings | ThreeUpPhoto | ThreeUpStats | TicketSectionContainer | TwoColumn | VideoHero;

export type RyderCupContentPlayer = {
  readonly __typename: 'RyderCupContentPlayer';
  readonly displayName: Scalars['String']['output'];
  readonly id: Scalars['String']['output'];
  readonly name: Scalars['String']['output'];
};

export type RyderCupContentTags = {
  readonly __typename: 'RyderCupContentTags';
  readonly id: Scalars['Int']['output'];
  readonly name: Scalars['String']['output'];
};

export type RyderCupContentType =
  | 'ALL'
  | 'ARTICLES'
  | 'PHOTO_GALLERY'
  | 'VIDEOS'
  | 'VIDEO_ARTICLES';

export type RyderCupCourse = {
  readonly __typename: 'RyderCupCourse';
  readonly countryCode?: Maybe<Scalars['String']['output']>;
  readonly courseCity?: Maybe<Scalars['String']['output']>;
  readonly courseCountry?: Maybe<Scalars['String']['output']>;
  readonly courseName?: Maybe<Scalars['String']['output']>;
  readonly courseState?: Maybe<Scalars['String']['output']>;
};

export type RyderCupCourseModel = {
  readonly __typename: 'RyderCupCourseModel';
  readonly city?: Maybe<Scalars['String']['output']>;
  readonly country?: Maybe<Scalars['String']['output']>;
  readonly courseDescription?: Maybe<ReadonlyArray<Maybe<NewsArticleNode>>>;
  readonly courseId?: Maybe<Scalars['String']['output']>;
  readonly courseName?: Maybe<Scalars['String']['output']>;
  readonly courseYardage?: Maybe<Scalars['String']['output']>;
  readonly holes?: Maybe<ReadonlyArray<RyderCupCourseModelHole>>;
  readonly par?: Maybe<Scalars['Int']['output']>;
  readonly state?: Maybe<Scalars['String']['output']>;
};

export type RyderCupCourseModelHole = {
  readonly __typename: 'RyderCupCourseModelHole';
  readonly holeBeautyImage?: Maybe<Scalars['String']['output']>;
  readonly holeDescription?: Maybe<ReadonlyArray<Maybe<NewsArticleNode>>>;
  readonly holeFlyoverVideo?: Maybe<Video>;
  readonly holeNumber: Scalars['Int']['output'];
  readonly holePickleImage?: Maybe<Scalars['String']['output']>;
  readonly par: Scalars['Int']['output'];
  readonly yardage: Scalars['Int']['output'];
};

/**  ## Ryder Cup */
export type RyderCupEventState =
  | 'LIVE_WEEK'
  | 'LIVE_WEEKEND'
  | 'OFF_SEASON'
  | 'POINTS_RACE'
  | 'POST_EVENT'
  | 'PRE_EVENT';

export type RyderCupLatestNewsSection = {
  readonly __typename: 'RyderCupLatestNewsSection';
  readonly bottomCta?: Maybe<CallToAction>;
  readonly content?: Maybe<ReadonlyArray<RcHomepageAssets>>;
  readonly franchiseTags?: Maybe<ReadonlyArray<Scalars['String']['output']>>;
  readonly limit?: Maybe<Scalars['Int']['output']>;
  readonly sectionTitle?: Maybe<Scalars['String']['output']>;
  readonly topCta?: Maybe<CallToAction>;
};

export type RyderCupMatchOutcomeIq = {
  readonly __typename: 'RyderCupMatchOutcomeIQ';
  readonly euMatchWin: Scalars['Float']['output'];
  readonly holes: ReadonlyArray<OutComeIqHole>;
  readonly id: Scalars['String']['output'];
  readonly logo?: Maybe<Scalars['String']['output']>;
  readonly matchDraw: Scalars['Float']['output'];
  readonly matchId: Scalars['Int']['output'];
  readonly roundNum: Scalars['Int']['output'];
  readonly toolTip?: Maybe<ToolTipComponent>;
  readonly usMatchWin: Scalars['Float']['output'];
};

export type RyderCupMediaSearchOptions = {
  readonly __typename: 'RyderCupMediaSearchOptions';
  readonly contentTypes: ReadonlyArray<RcContentTypeParent>;
  readonly playerOptions: ReadonlyArray<RyderCupPlayerOption>;
  readonly teamOptions: ReadonlyArray<RcTeamTypeParent>;
  readonly topicOptions: ReadonlyArray<RyderCupTopicOption>;
  readonly yearOptions: ReadonlyArray<Scalars['String']['output']>;
};

export type RyderCupPlayer = {
  readonly __typename: 'RyderCupPlayer';
  readonly countryCode?: Maybe<Scalars['String']['output']>;
  readonly countryName?: Maybe<Scalars['String']['output']>;
  readonly displayName: Scalars['String']['output'];
  readonly firstName: Scalars['String']['output'];
  readonly lastName: Scalars['String']['output'];
  readonly playerId: Scalars['String']['output'];
};

export type RyderCupPlayerBios = {
  readonly __typename: 'RyderCupPlayerBios';
  readonly bios?: Maybe<ReadonlyArray<Maybe<RyderCupBio>>>;
  readonly headshots?: Maybe<ReadonlyArray<Scalars['String']['output']>>;
};

export type RyderCupPlayerOption = {
  readonly __typename: 'RyderCupPlayerOption';
  readonly displayName: Scalars['String']['output'];
  readonly id: Scalars['String']['output'];
  readonly name: Scalars['String']['output'];
};

export type RyderCupPlayerProfile = {
  readonly __typename: 'RyderCupPlayerProfile';
  readonly playerId: Scalars['String']['output'];
  readonly playerProfileHeader: RyderCupPlayerProfileHeader;
  readonly profileContentSections: ReadonlyArray<RyderCupPlayerProfileSection>;
  readonly team: RankingsTeams;
};

export type RyderCupPlayerProfileCompressed = {
  readonly __typename: 'RyderCupPlayerProfileCompressed';
  readonly payload: Scalars['String']['output'];
  readonly playerId: Scalars['String']['output'];
};

export type RyderCupPlayerProfileHeader = {
  readonly __typename: 'RyderCupPlayerProfileHeader';
  readonly age?: Maybe<Scalars['String']['output']>;
  readonly appearances?: Maybe<Scalars['Int']['output']>;
  readonly headshot: ProfileHeadshot;
  readonly wins?: Maybe<Scalars['Int']['output']>;
};

export type RyderCupPlayerProfileSection = GenericContent | RcPlayerTournamentRecord | RolexClock | RyderCupLatestNewsSection | ThreeUpStats;

export type RyderCupRankingsQueryInput = {
  readonly team: RankingsTeams;
  readonly tournamentId: Scalars['String']['input'];
};

export type RyderCupRankingsRow = InformationRow | StatDetailsPlayer;

export type RyderCupRankingsTeam = {
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
  readonly rankings: ReadonlyArray<RyderCupRankingsRow>;
  readonly teamName: Scalars['String']['output'];
  readonly toolTips: ReadonlyArray<ToolTipComponent>;
  readonly tournamentPills: ReadonlyArray<StatTournamentPill>;
  readonly usInfoBlurb?: Maybe<Scalars['String']['output']>;
  readonly viceCaptain?: Maybe<Scalars['String']['output']>;
  readonly viceCaptainLabel?: Maybe<Scalars['String']['output']>;
  readonly year?: Maybe<Scalars['Int']['output']>;
  readonly years: ReadonlyArray<StatYearPills>;
};

export type RyderCupRankingsV2 = {
  readonly __typename: 'RyderCupRankingsV2';
  readonly defaultUS: Scalars['Boolean']['output'];
  readonly teams: ReadonlyArray<RyderCupRankingsTeam>;
};

export type RyderCupTeam = {
  readonly __typename: 'RyderCupTeam';
  readonly captain: RyderCupCaptain;
  readonly players: ReadonlyArray<RyderCupPlayer>;
  readonly teamLogo: Scalars['String']['output'];
  readonly teamName: Scalars['String']['output'];
};

export type RyderCupTeamRankings = {
  readonly __typename: 'RyderCupTeamRankings';
  readonly defaultUS: Scalars['Boolean']['output'];
  readonly euroBanner: Scalars['String']['output'];
  readonly euroCaptainLabel?: Maybe<Scalars['String']['output']>;
  readonly euroDisplaySeason?: Maybe<Scalars['String']['output']>;
  readonly euroHeader: Scalars['String']['output'];
  readonly euroLastUpdated: Scalars['String']['output'];
  readonly euroRankings: ReadonlyArray<RyderCupRankingsRow>;
  readonly euroToolTips?: Maybe<ReadonlyArray<ToolTipComponent>>;
  readonly euroTournamentPills?: Maybe<ReadonlyArray<StatTournamentPill>>;
  readonly euroViceCaptainLabel?: Maybe<Scalars['String']['output']>;
  readonly euroYear?: Maybe<Scalars['Int']['output']>;
  readonly euroYears?: Maybe<ReadonlyArray<StatYearPills>>;
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
  readonly usRankings: ReadonlyArray<RyderCupRankingsRow>;
  readonly usToolTips?: Maybe<ReadonlyArray<ToolTipComponent>>;
  readonly usTournamentPills?: Maybe<ReadonlyArray<StatTournamentPill>>;
  readonly usViceCaptain?: Maybe<Scalars['String']['output']>;
  readonly usViceCaptainLabel?: Maybe<Scalars['String']['output']>;
  readonly usYear?: Maybe<Scalars['Int']['output']>;
  readonly usYears?: Maybe<ReadonlyArray<StatYearPills>>;
};

export type RyderCupTeamRankingsCompressed = {
  readonly __typename: 'RyderCupTeamRankingsCompressed';
  readonly payload: Scalars['String']['output'];
};

export type RyderCupTeamType =
  | 'BOTH'
  | 'EUROPE'
  | 'USA';

export type RyderCupTopicOption = {
  readonly __typename: 'RyderCupTopicOption';
  readonly displayValue: Scalars['String']['output'];
  readonly value: Scalars['String']['output'];
};

export type RyderCupTournament = {
  readonly __typename: 'RyderCupTournament';
  readonly course?: Maybe<RyderCupCourse>;
  readonly euroScore: Scalars['String']['output'];
  readonly euroTeam: RyderCupTeam;
  readonly historyInfo?: Maybe<HistoryInfo>;
  readonly usScore: Scalars['String']['output'];
  readonly usTeam: RyderCupTeam;
  readonly winner: Scalars['String']['output'];
  readonly year: Scalars['Int']['output'];
};

export type RyderCupTournamentOverview = {
  readonly __typename: 'RyderCupTournamentOverview';
  readonly course?: Maybe<RyderCupCourse>;
  readonly endDate?: Maybe<Scalars['String']['output']>;
  readonly euroScore: Scalars['String']['output'];
  readonly euroTeamLogo: Scalars['String']['output'];
  /** @deprecated logoAsset */
  readonly logo?: Maybe<Scalars['String']['output']>;
  readonly logoAsset: ImageAsset;
  readonly startDate?: Maybe<Scalars['String']['output']>;
  readonly tournamentName: Scalars['String']['output'];
  readonly usScore: Scalars['String']['output'];
  readonly usTeamLogo: Scalars['String']['output'];
  readonly winner?: Maybe<Scalars['String']['output']>;
  readonly year: Scalars['Int']['output'];
};

export type Story_Type =
  | 'MOMENTS'
  | 'PLAYER_STORIES'
  | 'TOPIC_STORIES';

export type ScatterCoord = {
  readonly __typename: 'ScatterCoord';
  readonly player: ScatterPlayer;
  readonly result: HoleScoreStatus;
  readonly shotCoords: ScatterShotData;
};

export type ScatterData = {
  readonly __typename: 'ScatterData';
  readonly courseId: Scalars['Int']['output'];
  readonly hole: Scalars['Int']['output'];
  readonly holePickle?: Maybe<HolePickle>;
  readonly id: Scalars['ID']['output'];
  readonly rounds: ReadonlyArray<ScatterRound>;
  /**   Recommend combo of tournamentID, course and hole */
  readonly tournamentId: Scalars['String']['output'];
};

export type ScatterDataCompressed = {
  readonly __typename: 'ScatterDataCompressed';
  readonly courseId: Scalars['Int']['output'];
  readonly hole: Scalars['Int']['output'];
  readonly payload: Scalars['String']['output'];
  readonly tournamentId: Scalars['String']['output'];
};

export type ScatterPlayer = {
  readonly __typename: 'ScatterPlayer';
  readonly id: Scalars['String']['output'];
  readonly name: Scalars['String']['output'];
};

export type ScatterRound = {
  readonly __typename: 'ScatterRound';
  readonly display?: Maybe<Scalars['String']['output']>;
  readonly num: Scalars['Int']['output'];
  readonly pinCoords: ScatterShotData;
  readonly strokes: ReadonlyArray<ScatterStroke>;
};

export type ScatterShotCoordData = {
  readonly __typename: 'ScatterShotCoordData';
  readonly landscapeCoords?: Maybe<ScattterXyData>;
  readonly portraitCoords?: Maybe<ScattterXyData>;
};

export type ScatterShotData = {
  readonly __typename: 'ScatterShotData';
  readonly green: ScatterShotCoordData;
  readonly overview: ScatterShotCoordData;
};

export type ScatterStroke = {
  readonly __typename: 'ScatterStroke';
  readonly playerShots: ReadonlyArray<ScatterCoord>;
  readonly strokeNumber: Scalars['Int']['output'];
};

export type ScattterXyData = {
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

export type Schedule = {
  readonly __typename: 'Schedule';
  readonly completed: ReadonlyArray<ScheduleMonth>;
  readonly filters?: Maybe<ReadonlyArray<ScheduleTournamentFilter>>;
  readonly seasonYear: Scalars['String']['output'];
  readonly tour: Scalars['String']['output'];
  readonly upcoming: ReadonlyArray<ScheduleMonth>;
};

export type ScheduleChampion = {
  readonly __typename: 'ScheduleChampion';
  readonly displayName: Scalars['String']['output'];
  readonly playerId: Scalars['String']['output'];
};

export type ScheduleDisplay =
  | 'SHOW'
  | 'SHOW_NO_LINK';

export type ScheduleMonth = {
  readonly __typename: 'ScheduleMonth';
  readonly month: Scalars['String']['output'];
  readonly monthSort?: Maybe<Scalars['Int']['output']>;
  readonly tournaments: ReadonlyArray<ScheduleTournament>;
  readonly year: Scalars['String']['output'];
};

export type ScheduleTournament = {
  readonly __typename: 'ScheduleTournament';
  readonly androidTicketmasterApiKey?: Maybe<Scalars['String']['output']>;
  readonly androidTicketmasterScheme?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use beautyImageAsset */
  readonly beautyImage?: Maybe<Scalars['String']['output']>;
  readonly beautyImageAsset?: Maybe<ImageAsset>;
  readonly champion: Scalars['String']['output'];
  readonly championEarnings?: Maybe<Scalars['String']['output']>;
  readonly championId: Scalars['String']['output'];
  readonly champions: ReadonlyArray<ScheduleChampion>;
  readonly city: Scalars['String']['output'];
  readonly country: Scalars['String']['output'];
  readonly countryCode: Scalars['String']['output'];
  readonly courseName: Scalars['String']['output'];
  readonly date: Scalars['String']['output'];
  readonly dateAccessibilityText: Scalars['String']['output'];
  readonly display: ScheduleDisplay;
  readonly id: Scalars['ID']['output'];
  readonly iosTicketmasterApiKey?: Maybe<Scalars['String']['output']>;
  readonly purse?: Maybe<Scalars['String']['output']>;
  readonly sequenceNumber: Scalars['Int']['output'];
  readonly sortDate?: Maybe<Scalars['String']['output']>;
  readonly startDate: Scalars['AWSTimestamp']['output'];
  readonly state: Scalars['String']['output'];
  readonly stateCode: Scalars['String']['output'];
  readonly status?: Maybe<ScheduleTournamentStatus>;
  /** @deprecated Name does not reflect intent, use ticketmasterAttractionId */
  readonly ticketmasterApiKey?: Maybe<Scalars['String']['output']>;
  readonly ticketmasterAttractionId?: Maybe<Scalars['String']['output']>;
  readonly ticketsEnabled: Scalars['Boolean']['output'];
  readonly ticketsURL?: Maybe<Scalars['String']['output']>;
  readonly tourStandingHeading?: Maybe<Scalars['String']['output']>;
  readonly tourStandingValue?: Maybe<Scalars['String']['output']>;
  readonly tournamentCategoryInfo?: Maybe<TournamentCategoryInfo>;
  /** @deprecated use tournamentLogoAsset */
  readonly tournamentLogo: Scalars['String']['output'];
  readonly tournamentLogoAsset: ImageAsset;
  readonly tournamentName: Scalars['String']['output'];
  readonly tournamentSiteURL?: Maybe<Scalars['String']['output']>;
  readonly tournamentStatus: TournamentStatus;
  readonly useTournamentSiteURL: Scalars['Boolean']['output'];
};

export type ScheduleTournamentFilter = {
  readonly __typename: 'ScheduleTournamentFilter';
  readonly name: Scalars['String']['output'];
  readonly type: TournamentCategory;
};

export type ScheduleTournamentStatus = {
  readonly __typename: 'ScheduleTournamentStatus';
  readonly leaderboardTakeover: Scalars['Boolean']['output'];
  readonly roundDisplay: Scalars['String']['output'];
  readonly roundStatus: RoundStatus;
  readonly roundStatusColor: RoundStatusColor;
  readonly roundStatusDisplay: Scalars['String']['output'];
};

export type ScheduleUpcoming = {
  readonly __typename: 'ScheduleUpcoming';
  readonly filters?: Maybe<ReadonlyArray<ScheduleTournamentFilter>>;
  readonly id: Scalars['ID']['output'];
  readonly tournaments: ReadonlyArray<ScheduleTournament>;
};

export type ScheduleYear = {
  readonly __typename: 'ScheduleYear';
  readonly default: Scalars['Boolean']['output'];
  readonly displayValue: Scalars['String']['output'];
  readonly queryValue: Scalars['String']['output'];
};

export type ScheduleYears = {
  readonly __typename: 'ScheduleYears';
  readonly years: ReadonlyArray<ScheduleYear>;
};

export type ScorecardCompressedV3 = {
  readonly __typename: 'ScorecardCompressedV3';
  readonly id: Scalars['ID']['output'];
  readonly payload: Scalars['String']['output'];
};

export type ScorecardHeaderPlayer = {
  readonly __typename: 'ScorecardHeaderPlayer';
  readonly active: Scalars['Boolean']['output'];
  readonly finalRoundTotal: Scalars['String']['output'];
  readonly player: Player;
  readonly position: Scalars['String']['output'];
  readonly roundDisplay: Scalars['String']['output'];
  readonly total: Scalars['String']['output'];
};

export type ScorecardRow = {
  readonly __typename: 'ScorecardRow';
  readonly holes: ReadonlyArray<HoleScore>;
  readonly parTotal: Scalars['Int']['output'];
  readonly total: Scalars['String']['output'];
  readonly totalLabel: Scalars['String']['output'];
};

export type ScorecardStandings = {
  readonly __typename: 'ScorecardStandings';
  readonly logo?: Maybe<ImageAsset>;
  readonly logoDark?: Maybe<ImageAsset>;
  readonly points: Scalars['String']['output'];
};

export type ScorecardStatsComparison = {
  readonly __typename: 'ScorecardStatsComparison';
  readonly category: PlayerComparisonCategory;
  readonly categoryPills: ReadonlyArray<PlayerComparisonCategoryPill>;
  readonly disabled?: Maybe<Scalars['Boolean']['output']>;
  readonly noDataMessage: Scalars['String']['output'];
  readonly roundDisplay?: Maybe<Scalars['String']['output']>;
  readonly roundNum?: Maybe<Scalars['Int']['output']>;
  readonly table: PlayerComparisonTable;
  readonly tournamentId: Scalars['ID']['output'];
};

export type ScorecardStatsItem = {
  readonly __typename: 'ScorecardStatsItem';
  readonly label: Scalars['String']['output'];
  readonly rank: Scalars['String']['output'];
  readonly statId: Scalars['String']['output'];
  readonly total: Scalars['String']['output'];
  readonly yearToDate: Scalars['String']['output'];
};

export type ScorecardTabFeature =
  | 'EQUIPMENT'
  | 'HIGHLIGHTS'
  | 'ODDS'
  | 'SCORECARD'
  | 'STATS';

export type ScorecardUpdateCompressedV3 = {
  readonly __typename: 'ScorecardUpdateCompressedV3';
  readonly id: Scalars['ID']['output'];
  readonly payload: Scalars['String']['output'];
};

export type ScorecardUpdateV3 = {
  readonly __typename: 'ScorecardUpdateV3';
  readonly backNine: Scalars['Boolean']['output'];
  readonly currentHole?: Maybe<Scalars['Int']['output']>;
  readonly currentHoleDisplay: Scalars['String']['output'];
  readonly currentRound: Scalars['Int']['output'];
  readonly currentShotDisplay?: Maybe<Scalars['String']['output']>;
  readonly drawerDisplayState: DrawerDisplayState;
  readonly groupNumber: Scalars['Int']['output'];
  readonly hideSov: Scalars['Boolean']['output'];
  readonly id: Scalars['ID']['output'];
  readonly playByPlay?: Maybe<Scalars['String']['output']>;
  readonly playerId: Scalars['String']['output'];
  readonly playerState?: Maybe<PlayerState>;
  readonly profileEnabled: Scalars['Boolean']['output'];
  readonly roundScores: ReadonlyArray<RoundScore>;
  readonly teeTime?: Maybe<Scalars['AWSTimestamp']['output']>;
  readonly tournamentName: Scalars['String']['output'];
};

export type ScorecardV3 = {
  readonly __typename: 'ScorecardV3';
  readonly backNine: Scalars['Boolean']['output'];
  readonly currentHole?: Maybe<Scalars['Int']['output']>;
  readonly currentHoleDisplay: Scalars['String']['output'];
  readonly currentRound: Scalars['Int']['output'];
  readonly currentShotDisplay?: Maybe<Scalars['String']['output']>;
  readonly drawerDisplayState: DrawerDisplayState;
  readonly groupNumber: Scalars['Int']['output'];
  readonly hideSov: Scalars['Boolean']['output'];
  readonly id: Scalars['ID']['output'];
  readonly playByPlay?: Maybe<Scalars['String']['output']>;
  readonly player: Player;
  readonly playerState?: Maybe<PlayerState>;
  readonly profileEnabled: Scalars['Boolean']['output'];
  readonly roundScores: ReadonlyArray<RoundScore>;
  readonly standings?: Maybe<ScorecardStandings>;
  readonly teeTime?: Maybe<Scalars['AWSTimestamp']['output']>;
  readonly totalStrokes?: Maybe<Scalars['String']['output']>;
  readonly tournamentName: Scalars['String']['output'];
};

export type ScoringLevel =
  | 'BASIC'
  | 'STATS'
  | 'TOURCAST';

export type ScoringTendency =
  | 'ABOVE'
  | 'BELOW'
  | 'EVEN';

export type SearchBarFeatures = {
  readonly __typename: 'SearchBarFeatures';
  readonly playerFeatures: SearchBarPlayerFeatures;
};

export type SearchBarPlayer = {
  readonly __typename: 'SearchBarPlayer';
  readonly displayName: Scalars['String']['output'];
  readonly playerId: Scalars['ID']['output'];
};

export type SearchBarPlayerFeatures = {
  readonly __typename: 'SearchBarPlayerFeatures';
  readonly playerHeader: Scalars['String']['output'];
  readonly players: ReadonlyArray<SearchBarPlayer>;
};

export type SeasonDisplayHeader = {
  readonly __typename: 'SeasonDisplayHeader';
  readonly endYear?: Maybe<Scalars['Int']['output']>;
  readonly startYear: Scalars['Int']['output'];
};

export type SeasonRecap = {
  readonly __typename: 'SeasonRecap';
  readonly displayMostRecentSeason?: Maybe<Scalars['String']['output']>;
  readonly items?: Maybe<ReadonlyArray<SeasonRecapSeason>>;
  readonly mostRecentRecapYear?: Maybe<Scalars['Int']['output']>;
  readonly tourCode: TourCode;
};

export type SeasonRecapItems = {
  readonly __typename: 'SeasonRecapItems';
  readonly body: Scalars['String']['output'];
  readonly title: Scalars['String']['output'];
  readonly tournamentId: Scalars['String']['output'];
  readonly year: Scalars['Int']['output'];
};

export type SeasonRecapSeason = {
  readonly __typename: 'SeasonRecapSeason';
  readonly displaySeason: Scalars['String']['output'];
  readonly items: ReadonlyArray<SeasonRecapItems>;
  readonly year: Scalars['Int']['output'];
};

export type SecondaryCupDetails = {
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

export type SecondaryHero = {
  readonly __typename: 'SecondaryHero';
  readonly backgroundPhoto?: Maybe<Scalars['String']['output']>;
  readonly photoPosition?: Maybe<Scalars['String']['output']>;
  /** @deprecated use sponsorLogoAsset */
  readonly sponsorLogo?: Maybe<Scalars['String']['output']>;
  readonly sponsorLogoAsset: ImageAsset;
  readonly subheader?: Maybe<Scalars['String']['output']>;
  readonly title: Scalars['String']['output'];
};

export type SegmentedCupRanking = {
  readonly __typename: 'SegmentedCupRanking';
  readonly defaultSelection: Scalars['Boolean']['output'];
  readonly rankings: ReadonlyArray<CupRankingPlayer>;
  readonly title: Scalars['String']['output'];
};

export type SegmentedCupRankingWrapper = {
  readonly __typename: 'SegmentedCupRankingWrapper';
  readonly segments?: Maybe<ReadonlyArray<Maybe<SegmentedCupRanking>>>;
};

export type ShotCommentary = {
  readonly __typename: 'ShotCommentary';
  readonly commentary: ReadonlyArray<ShotCommentaryItem>;
  readonly playerId: Scalars['String']['output'];
  readonly round: Scalars['Int']['output'];
  readonly tournamentId: Scalars['String']['output'];
};

export type ShotCommentaryItem = {
  readonly __typename: 'ShotCommentaryItem';
  readonly active: Scalars['Boolean']['output'];
  readonly commentary: Scalars['String']['output'];
  readonly hole: Scalars['Int']['output'];
  readonly shot: Scalars['Int']['output'];
  readonly strokeId: Scalars['Int']['output'];
};

export type ShotCommentaryItemInput = {
  readonly active: Scalars['Boolean']['input'];
  readonly commentary: Scalars['String']['input'];
  readonly hole: Scalars['Int']['input'];
  readonly shot: Scalars['Int']['input'];
  readonly strokeId: Scalars['Int']['input'];
};

export type ShotDetailHole = {
  readonly __typename: 'ShotDetailHole';
  readonly displayHoleNumber: Scalars['String']['output'];
  readonly enhancedPickle?: Maybe<HolePickle>;
  readonly fairwayCenter: StrokeCoordinates;
  readonly green: Scalars['Boolean']['output'];
  readonly holeNumber: Scalars['Int']['output'];
  /** @deprecated Use holePickleBottomToTopAsset */
  readonly holePickleBottomToTop: Scalars['String']['output'];
  readonly holePickleBottomToTopAsset: ImageAsset;
  /** @deprecated Use holePickleGreenBottomToTopAsset */
  readonly holePickleGreenBottomToTop: Scalars['String']['output'];
  readonly holePickleGreenBottomToTopAsset: ImageAsset;
  /** @deprecated Use holePickleGreenLeftToRightAsset */
  readonly holePickleGreenLeftToRight: Scalars['String']['output'];
  readonly holePickleGreenLeftToRightAsset: ImageAsset;
  /** @deprecated Use holePickleLeftToRightAsset */
  readonly holePickleLeftToRight: Scalars['String']['output'];
  readonly holePickleLeftToRightAsset: ImageAsset;
  readonly par: Scalars['Int']['output'];
  readonly pinGreen: PointOfInterestCoords;
  readonly pinOverview: PointOfInterestCoords;
  readonly rank?: Maybe<Scalars['String']['output']>;
  readonly score: Scalars['String']['output'];
  readonly status: HoleScoreStatus;
  readonly strokes: ReadonlyArray<HoleStroke>;
  readonly teeGreen: PointOfInterestCoords;
  readonly teeOverview: PointOfInterestCoords;
  readonly yardage: Scalars['Int']['output'];
};

export type ShotDetailHoleV4 = {
  readonly __typename: 'ShotDetailHoleV4';
  readonly displayHoleNumber: Scalars['String']['output'];
  readonly enhancedPickle?: Maybe<HolePickle>;
  readonly fairwayCenter: StrokeCoordinatesV4;
  readonly green: Scalars['Boolean']['output'];
  readonly holeNumber: Scalars['Int']['output'];
  readonly holePickleBottomToTopAsset: ImageAsset;
  readonly holePickleGreenBottomToTopAsset: ImageAsset;
  readonly holePickleGreenLeftToRightAsset: ImageAsset;
  readonly holePickleLeftToRightAsset: ImageAsset;
  readonly par: Scalars['Int']['output'];
  readonly pinGreen: PointOfInterestCoordsV4;
  readonly pinOverview: PointOfInterestCoordsV4;
  readonly rank?: Maybe<Scalars['String']['output']>;
  readonly score: Scalars['String']['output'];
  readonly status: HoleScoreStatus;
  readonly strokes: ReadonlyArray<HoleStrokeV4>;
  readonly teeGreen: PointOfInterestCoordsV4;
  readonly teeOverview: PointOfInterestCoordsV4;
  readonly yardage: Scalars['Int']['output'];
};

export type ShotDetailVideo = {
  readonly __typename: 'ShotDetailVideo';
  readonly duration: Scalars['Int']['output'];
  readonly holeNumber: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
  readonly pubDate: Scalars['AWSTimestamp']['output'];
  readonly shotNumber: Scalars['String']['output'];
  /** @deprecated Use thumbnailAsset */
  readonly thumbnail: Scalars['String']['output'];
  readonly thumbnailAsset: ImageAsset;
  readonly title: Scalars['String']['output'];
};

export type ShotDetails = {
  readonly __typename: 'ShotDetails';
  readonly defaultHolePickle: HolePickleType;
  readonly displayType: ShotDetailsDisplayType;
  readonly groupPlayers: ReadonlyArray<Scalars['String']['output']>;
  readonly holes: ReadonlyArray<ShotDetailHole>;
  readonly id: Scalars['ID']['output'];
  readonly lineColor: Scalars['String']['output'];
  readonly message: Scalars['String']['output'];
  readonly playerId: Scalars['ID']['output'];
  readonly round: Scalars['Int']['output'];
  /** @deprecated Use tourcastVideos */
  readonly shotVideo?: Maybe<Video>;
  /** @deprecated Use tourcastVideos */
  readonly shotVideos?: Maybe<ReadonlyArray<Video>>;
  readonly textColor?: Maybe<Scalars['String']['output']>;
  readonly tournamentId: Scalars['ID']['output'];
};

export type ShotDetailsCompressed = {
  readonly __typename: 'ShotDetailsCompressed';
  readonly id: Scalars['ID']['output'];
  readonly payload: Scalars['String']['output'];
};

export type ShotDetailsCompressedV3 = {
  readonly __typename: 'ShotDetailsCompressedV3';
  readonly id: Scalars['ID']['output'];
  readonly payload: Scalars['String']['output'];
};

export type ShotDetailsDisplayType =
  | 'ALL'
  | 'NONE'
  | 'PLAY_BY_PLAY';

export type ShotDetailsV4 = {
  readonly __typename: 'ShotDetailsV4';
  readonly displayType: ShotDetailsDisplayType;
  readonly groupPlayers: ReadonlyArray<Scalars['String']['output']>;
  readonly holePickleType: HolePickleType;
  readonly holes: ReadonlyArray<ShotDetailHoleV4>;
  readonly id: Scalars['ID']['output'];
  readonly lineColor: Scalars['String']['output'];
  readonly message: Scalars['String']['output'];
  readonly playerId: Scalars['ID']['output'];
  readonly round: Scalars['Int']['output'];
  readonly textColor?: Maybe<Scalars['String']['output']>;
  readonly tournamentId: Scalars['ID']['output'];
};

export type ShotDetailsV4Compressed = {
  readonly __typename: 'ShotDetailsV4Compressed';
  readonly id: Scalars['ID']['output'];
  readonly payload: Scalars['String']['output'];
};

export type ShotLinkCoordWrapper = {
  readonly __typename: 'ShotLinkCoordWrapper';
  readonly bottomToTopCoords: ShotLinkCoordinates;
  readonly leftToRightCoords: ShotLinkCoordinates;
};

export type ShotLinkCoordWrapperV4 = {
  readonly __typename: 'ShotLinkCoordWrapperV4';
  readonly bottomToTopCoords: ShotLinkCoordinatesV4;
  readonly leftToRightCoords: ShotLinkCoordinatesV4;
};

export type ShotLinkCoordinates = {
  readonly __typename: 'ShotLinkCoordinates';
  readonly fromCoords: StrokeCoordinates;
  readonly toCoords: StrokeCoordinates;
};

export type ShotLinkCoordinatesV4 = {
  readonly __typename: 'ShotLinkCoordinatesV4';
  readonly fromCoords: StrokeCoordinatesV4;
  readonly toCoords: StrokeCoordinatesV4;
};

export type SignatureEventsRankLogos = {
  readonly __typename: 'SignatureEventsRankLogos';
  readonly dark: Scalars['String']['output'];
  readonly darkAsset: ImageAsset;
  readonly light: Scalars['String']['output'];
  readonly lightAsset: ImageAsset;
  readonly tooltipText: Scalars['String']['output'];
  readonly tooltipTitle: Scalars['String']['output'];
};

export type SignatureInfoLine = {
  readonly __typename: 'SignatureInfoLine';
  readonly text: Scalars['String']['output'];
};

export type SignaturePlayer = {
  readonly __typename: 'SignaturePlayer';
  readonly countryFlag: Scalars['String']['output'];
  readonly countryName: Scalars['String']['output'];
  readonly displayName: Scalars['String']['output'];
  readonly movementAmount: Scalars['String']['output'];
  readonly movementDirection: LeaderboardMovement;
  readonly playerId: Scalars['ID']['output'];
  readonly projected: Scalars['String']['output'];
  readonly projectedPoints: Scalars['String']['output'];
  readonly shortName: Scalars['String']['output'];
  readonly started: Scalars['String']['output'];
};

export type SignaturePlayerRow = SignatureInfoLine | SignaturePlayer;

export type SignatureStandings = {
  readonly __typename: 'SignatureStandings';
  readonly infoDescription: Scalars['String']['output'];
  readonly infoTitle: Scalars['String']['output'];
  readonly interim: SignatureStandingsData;
  readonly linktoField: Scalars['Boolean']['output'];
  /** @deprecated Use mobileLogoAsset */
  readonly mobileLogo: Scalars['String']['output'];
  readonly mobileLogoAsset: ImageAsset;
  readonly noFieldText?: Maybe<Scalars['String']['output']>;
  readonly noFieldToolTipText?: Maybe<Scalars['String']['output']>;
  readonly noFieldToolTipTitle?: Maybe<Scalars['String']['output']>;
  readonly official: SignatureStandingsData;
  readonly tournamentID: Scalars['ID']['output'];
  readonly tournamentInfo: SignatureStandingsTournamentInfo;
};

export type SignatureStandingsData = {
  readonly __typename: 'SignatureStandingsData';
  readonly description?: Maybe<Scalars['String']['output']>;
  readonly emptyTableDescription?: Maybe<Scalars['String']['output']>;
  readonly emptyTableTitle?: Maybe<Scalars['String']['output']>;
  readonly eyebrowText?: Maybe<Scalars['String']['output']>;
  readonly players: ReadonlyArray<SignaturePlayerRow>;
  /** @deprecated use sponsorLogoAsset */
  readonly sponsorLogo?: Maybe<Scalars['String']['output']>;
  readonly sponsorLogoAsset: ImageAsset;
  readonly sponsorName?: Maybe<Scalars['String']['output']>;
  readonly title: Scalars['String']['output'];
  readonly tooltipText?: Maybe<Scalars['String']['output']>;
};

export type SignatureStandingsTournamentInfo = {
  readonly __typename: 'SignatureStandingsTournamentInfo';
  readonly displayDate: Scalars['String']['output'];
  readonly roundStatus: RoundStatus;
  readonly roundStatusColor: RoundStatusColor;
  readonly roundStatusDisplay: Scalars['String']['output'];
  /** @deprecated use tournamentLogoAsset */
  readonly tournamentLogo: ReadonlyArray<Scalars['String']['output']>;
  readonly tournamentLogoAsset: ReadonlyArray<ImageAsset>;
  readonly tournamentName: Scalars['String']['output'];
  readonly tournamentStatus: TournamentStatus;
};

export type SimpleScore = {
  readonly __typename: 'SimpleScore';
  readonly holeNumber: Scalars['Int']['output'];
  readonly isTotal?: Maybe<Scalars['Boolean']['output']>;
  readonly score: Scalars['String']['output'];
  readonly status: HoleScoreStatus;
};

export type SocialType =
  | 'facebook'
  | 'instagram'
  | 'twitter'
  | 'youtube';

export type Sponsor = {
  readonly __typename: 'Sponsor';
  readonly accessibilityText: Scalars['String']['output'];
  /** @deprecated use logoAsset */
  readonly logo?: Maybe<Scalars['String']['output']>;
  readonly logoAsset: ImageAsset;
  /** @deprecated use logoDarkAsset */
  readonly logoDark?: Maybe<Scalars['String']['output']>;
  readonly logoDarkAsset: ImageAsset;
  /** @deprecated use logoTabletAsset */
  readonly logoTablet?: Maybe<Scalars['String']['output']>;
  readonly logoTabletAsset: ImageAsset;
  /** @deprecated use logoTabletDarkAsset */
  readonly logoTabletDark?: Maybe<Scalars['String']['output']>;
  readonly logoTabletDarkAsset: ImageAsset;
  readonly sponsor: PlayerSponsorBrand;
};

export type SponsorImage = {
  readonly __typename: 'SponsorImage';
  readonly accessibilityText: Scalars['String']['output'];
  readonly link?: Maybe<Scalars['String']['output']>;
  /** @deprecated use logoAsset */
  readonly logo: Scalars['String']['output'];
  readonly logoAsset: ImageAsset;
  /** @deprecated use logoDarkAsset */
  readonly logoDark: Scalars['String']['output'];
  readonly logoDarkAsset: ImageAsset;
};

export type SponsoredArticles = {
  readonly __typename: 'SponsoredArticles';
  readonly articleSponsor: ArticleSponsor;
  readonly articles: ReadonlyArray<NewsArticle>;
  readonly cta?: Maybe<CallToAction>;
  readonly moreNewsTitle?: Maybe<Scalars['String']['output']>;
};

export type StandardCupRanking = {
  readonly __typename: 'StandardCupRanking';
  readonly rankings: ReadonlyArray<CupRankingPlayer>;
};

export type StandardWeatherTemp = {
  readonly __typename: 'StandardWeatherTemp';
  readonly tempC: Scalars['String']['output'];
  readonly tempF: Scalars['String']['output'];
};

export type StandingStat = {
  readonly __typename: 'StandingStat';
  readonly statName: Scalars['String']['output'];
  readonly statValue: Scalars['String']['output'];
};

export type StatCategory =
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

export type StatCategoryConfig = {
  readonly __typename: 'StatCategoryConfig';
  readonly category: Scalars['String']['output'];
  readonly categoryType?: Maybe<StatCategoryConfigType>;
  readonly displayName: Scalars['String']['output'];
  readonly subCategories: ReadonlyArray<StatSubCategory>;
};

export type StatCategoryConfigType =
  | 'ALL_TIME_RECORDS'
  | 'TRADITIONAL_STAT';

export type StatCategoryStat = {
  readonly __typename: 'StatCategoryStat';
  readonly statId: Scalars['String']['output'];
  readonly statTitle: Scalars['String']['output'];
};

export type StatColor =
  | 'BLACK'
  | 'GRAY'
  | 'GREEN'
  | 'RED';

export type StatDetailEventQuery = {
  readonly queryType: StatDetailQueryType;
  readonly tournamentId: Scalars['String']['input'];
};

export type StatDetailQueryType =
  | 'EVENT_ONLY'
  | 'THROUGH_EVENT';

export type StatDetailTourAvg = {
  readonly __typename: 'StatDetailTourAvg';
  readonly displayName: Scalars['String']['output'];
  readonly value: Scalars['String']['output'];
};

export type StatDetails = {
  readonly __typename: 'StatDetails';
  readonly cutOffButtonText?: Maybe<Scalars['String']['output']>;
  readonly cutOffNumber?: Maybe<Scalars['Int']['output']>;
  readonly displaySeason: Scalars['String']['output'];
  readonly lastProcessed: Scalars['String']['output'];
  readonly rows: ReadonlyArray<StatDetailsRow>;
  /** @deprecated use sponsorLogoAsset */
  readonly sponsorLogo?: Maybe<Scalars['String']['output']>;
  readonly sponsorLogoAsset: ImageAsset;
  readonly statCategories: ReadonlyArray<StatCategoryConfig>;
  readonly statDescription: Scalars['String']['output'];
  readonly statHeaders: ReadonlyArray<Scalars['String']['output']>;
  readonly statId: Scalars['String']['output'];
  readonly statTitle: Scalars['String']['output'];
  readonly statType: CategoryStatType;
  readonly tourAvg?: Maybe<Scalars['String']['output']>;
  readonly tourCode: TourCode;
  readonly tournamentPills: ReadonlyArray<StatTournamentPill>;
  readonly year: Scalars['Int']['output'];
  readonly yearPills: ReadonlyArray<StatYearPills>;
};

export type StatDetailsPlayer = {
  readonly __typename: 'StatDetailsPlayer';
  readonly country: Scalars['String']['output'];
  readonly countryFlag: Scalars['String']['output'];
  readonly filter?: Maybe<Scalars['String']['output']>;
  readonly playerId: Scalars['String']['output'];
  readonly playerName: Scalars['String']['output'];
  readonly rank: Scalars['Int']['output'];
  readonly rankChangeTendency?: Maybe<StatRankMovement>;
  readonly rankDiff: Scalars['String']['output'];
  readonly rankLogoDark?: Maybe<Scalars['String']['output']>;
  readonly rankLogoLight?: Maybe<Scalars['String']['output']>;
  readonly stats: ReadonlyArray<CategoryPlayerStat>;
};

export type StatDetailsRow = StatDetailTourAvg | StatDetailsPlayer;

export type StatLeaderCategory = {
  readonly __typename: 'StatLeaderCategory';
  readonly categoryHeader: Scalars['String']['output'];
  readonly displayYear: Scalars['String']['output'];
  readonly otherCategories: ReadonlyArray<StatCategoryConfig>;
  readonly statCategory: StatCategory;
  readonly subCategories: ReadonlyArray<StatLeaderSubCategory>;
  readonly tourCode: TourCode;
  readonly year: Scalars['Int']['output'];
};

export type StatLeaderSubCategory = {
  readonly __typename: 'StatLeaderSubCategory';
  readonly stats: ReadonlyArray<LeaderStat>;
  readonly subCatPromo?: Maybe<StatLeaderSubCategoryPromo>;
  readonly subCategoryName: Scalars['String']['output'];
};

export type StatLeaderSubCategoryPromo = {
  readonly __typename: 'StatLeaderSubCategoryPromo';
  readonly image: Scalars['String']['output'];
  readonly link: Scalars['String']['output'];
  readonly title: Scalars['String']['output'];
};

export type StatRankMovement =
  | 'CONSTANT'
  | 'DOWN'
  | 'UP';

export type StatSubCategory = {
  readonly __typename: 'StatSubCategory';
  readonly displayName?: Maybe<Scalars['String']['output']>;
  readonly stats: ReadonlyArray<StatCategoryStat>;
};

export type StatTournamentPill = {
  readonly __typename: 'StatTournamentPill';
  readonly displayName: Scalars['String']['output'];
  readonly endDateDisplay?: Maybe<Scalars['String']['output']>;
  readonly tournamentId: Scalars['String']['output'];
};

export type StatWeekPill = {
  readonly __typename: 'StatWeekPill';
  readonly displayWeek: Scalars['String']['output'];
  readonly week: Scalars['Int']['output'];
};

export type StatYearPills = {
  readonly __typename: 'StatYearPills';
  readonly displaySeason: Scalars['String']['output'];
  readonly year: Scalars['Int']['output'];
};

export type Stats = {
  readonly __typename: 'Stats';
  readonly id: Scalars['ID']['output'];
  readonly statAvg?: Maybe<Scalars['String']['output']>;
  readonly statName: Scalars['String']['output'];
  readonly statRank: Scalars['Int']['output'];
  readonly statValue: Scalars['String']['output'];
};

export type StreamUrls = {
  readonly __typename: 'StreamUrls';
  readonly applePodcast: Scalars['String']['output'];
  readonly googlePodcast: Scalars['String']['output'];
  readonly spotify: Scalars['String']['output'];
  readonly stitcher: Scalars['String']['output'];
  readonly tuneIn: Scalars['String']['output'];
};

export type StrokeCoordinates = {
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

/**
 *   V4 Shot Details Types - Simplified coordinates without z/enhanced fields
 *  Note: ImageAsset type is already defined elsewhere in schema
 */
export type StrokeCoordinatesV4 = {
  readonly __typename: 'StrokeCoordinatesV4';
  readonly tourcastX: Scalars['Float']['output'];
  readonly tourcastY: Scalars['Float']['output'];
  readonly tourcastZ: Scalars['Float']['output'];
  readonly x: Scalars['Float']['output'];
  readonly y: Scalars['Float']['output'];
};

export type StrokesGainedStats = {
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

export type Style = {
  readonly __typename: 'Style';
  readonly key: Scalars['String']['output'];
  readonly value: Scalars['String']['output'];
};

export type SubMarket = {
  readonly __typename: 'SubMarket';
  readonly header: Scalars['String']['output'];
  readonly id: Scalars['String']['output'];
  readonly options: ReadonlyArray<OddsOptionV2>;
};

export type Subscription = {
  readonly __typename: 'Subscription';
  readonly onUpdateBubble?: Maybe<BubbleWatch>;
  readonly onUpdateBubbleWatch?: Maybe<TourCupRankingEvent>;
  readonly onUpdateCourseStats?: Maybe<TournamentHoleStats>;
  readonly onUpdateCoverage?: Maybe<BroadcastCoverage>;
  readonly onUpdateCupOverviewLeaderboard?: Maybe<CupTournamentStatus>;
  readonly onUpdateCupRoundLeaderboard?: Maybe<CupTournamentLeaderboard>;
  readonly onUpdateCupRoundLeaderboardCompressed?: Maybe<CupTournamentLeaderboardCompressed>;
  readonly onUpdateCupScorecard?: Maybe<CupScorecard>;
  readonly onUpdateCurrentLeadersCompressed?: Maybe<CurrentLeadersCompressed>;
  readonly onUpdateGroupLocations?: Maybe<GroupLocationCourse>;
  readonly onUpdateGroupLocationsEnhanced?: Maybe<GroupLocationCourse>;
  readonly onUpdateHoleDetails?: Maybe<HoleDetail>;
  readonly onUpdateLeaderboardCompressedV2?: Maybe<LeaderboardCompressedV2>;
  readonly onUpdateLeaderboardCompressedV3?: Maybe<LeaderboardUpdateCompressedV3>;
  readonly onUpdateLeaderboardStrokes?: Maybe<LeaderboardStrokes>;
  readonly onUpdateLeaderboardStrokesCompresssed?: Maybe<LeaderboardStrokesCompressed>;
  readonly onUpdateLeaderboardV2?: Maybe<LeaderboardV2>;
  readonly onUpdateMatchOutcomeIq?: Maybe<RyderCupMatchOutcomeIq>;
  readonly onUpdateMatchPlayLeaderboard?: Maybe<MpLeaderboard>;
  readonly onUpdateMatchPlayLeaderboardCompressed?: Maybe<LeaderboardCompressed>;
  readonly onUpdateMatchPlayPlayoffScorecard?: Maybe<MpPlayoffScorecard>;
  readonly onUpdateMatchPlayScorecard?: Maybe<MpScorecard>;
  readonly onUpdateMatchPlayTeeTimes?: Maybe<MpTeeTimes>;
  readonly onUpdateMatchPlayTeeTimesCompressed?: Maybe<TeeTimesCompressed>;
  readonly onUpdateOddsToWinMarket?: Maybe<OddsToWinMarket>;
  readonly onUpdateOddsToWinMarketCompressed?: Maybe<OddsToWinMarketCompressed>;
  readonly onUpdatePlayerHub?: Maybe<PlayerHubPlayerCompressed>;
  readonly onUpdatePlayerTournamentStatus?: Maybe<PlayerTournamentStatus>;
  readonly onUpdatePlayoffScorecard?: Maybe<PlayoffScorecard>;
  /** @deprecated Use onUpdatePlayoffScorecardV3. This sub does not work */
  readonly onUpdatePlayoffScorecardV2?: Maybe<ReadonlyArray<Maybe<PlayoffScorecard>>>;
  readonly onUpdatePlayoffScorecardV3?: Maybe<TournamentPlayoffScorecards>;
  readonly onUpdatePlayoffShotDetails?: Maybe<GroupShotDetails>;
  readonly onUpdatePlayoffShotDetailsCompressed?: Maybe<GroupShotDetailsCompressed>;
  readonly onUpdateScorecardCompressedV3?: Maybe<ScorecardUpdateCompressedV3>;
  readonly onUpdateScorecardStatsCompressedV3?: Maybe<PlayerScorecardStatsCompressed>;
  readonly onUpdateScorecardV2?: Maybe<LeaderboardDrawerV2>;
  readonly onUpdateShotCommentary?: Maybe<ShotCommentary>;
  /**    V2 version that only sends updated holes */
  readonly onUpdateShotDetailsCompressedV3?: Maybe<ShotDetailsCompressedV3>;
  /**   V4 Shot Details Subscription - Uses simplified coordinates */
  readonly onUpdateShotDetailsV4Compressed?: Maybe<ShotDetailsV4Compressed>;
  readonly onUpdateTGLMatch?: Maybe<TglMatch>;
  readonly onUpdateTSPPlayoffShotDetails?: Maybe<TeamShotDetails>;
  readonly onUpdateTSPPlayoffShotDetailsCompressed?: Maybe<TeamShotDetailsCompressed>;
  readonly onUpdateTeamPlayLeaderboard?: Maybe<TspLeaderboard>;
  readonly onUpdateTeamPlayLeaderboardCompressed?: Maybe<LeaderboardCompressed>;
  readonly onUpdateTeamPlayScorecard?: Maybe<TspScorecard>;
  readonly onUpdateTeamPlayScorecardRounds?: Maybe<TspScorecardRounds>;
  readonly onUpdateTeamStrokePlayTeeTimes?: Maybe<TspTeeTimes>;
  readonly onUpdateTeamStrokePlayTeeTimesCompressed?: Maybe<TeeTimesCompressed>;
  readonly onUpdateTeeTimes?: Maybe<TeeTimes>;
  readonly onUpdateTeeTimesCompressed?: Maybe<TeeTimesCompressed>;
  readonly onUpdateTeeTimesCompressedV2?: Maybe<TeeTimesCompressed>;
  readonly onUpdateTeeTimesV2?: Maybe<TeeTimesV2>;
  readonly onUpdateTourCup?: Maybe<TourCupRankingEvent>;
  readonly onUpdateTourcastTable?: Maybe<TourcastTable>;
  readonly onUpdateTournament?: Maybe<Tournament>;
  readonly onUpdateTournamentGroupLocations?: Maybe<TournamentGroupLocation>;
  readonly onUpdateUpcomingSchedule?: Maybe<ScheduleUpcoming>;
};


export type SubscriptionOnUpdateBubbleArgs = {
  bubbleId: Scalars['ID']['input'];
};


export type SubscriptionOnUpdateBubbleWatchArgs = {
  id: Scalars['ID']['input'];
};


export type SubscriptionOnUpdateCourseStatsArgs = {
  tournamentId: Scalars['ID']['input'];
};


export type SubscriptionOnUpdateCoverageArgs = {
  id: Scalars['ID']['input'];
};


export type SubscriptionOnUpdateCupOverviewLeaderboardArgs = {
  id: Scalars['ID']['input'];
};


export type SubscriptionOnUpdateCupRoundLeaderboardArgs = {
  id: Scalars['ID']['input'];
};


export type SubscriptionOnUpdateCupRoundLeaderboardCompressedArgs = {
  id: Scalars['ID']['input'];
};


export type SubscriptionOnUpdateCupScorecardArgs = {
  id: Scalars['ID']['input'];
};


export type SubscriptionOnUpdateCurrentLeadersCompressedArgs = {
  id: Scalars['ID']['input'];
};


export type SubscriptionOnUpdateGroupLocationsArgs = {
  courseId: Scalars['String']['input'];
  round: Scalars['Int']['input'];
  tournamentId: Scalars['ID']['input'];
};


export type SubscriptionOnUpdateGroupLocationsEnhancedArgs = {
  courseId: Scalars['String']['input'];
  round: Scalars['Int']['input'];
  tournamentId: Scalars['ID']['input'];
};


export type SubscriptionOnUpdateHoleDetailsArgs = {
  id: Scalars['ID']['input'];
};


export type SubscriptionOnUpdateLeaderboardCompressedV2Args = {
  id: Scalars['ID']['input'];
};


export type SubscriptionOnUpdateLeaderboardCompressedV3Args = {
  id: Scalars['ID']['input'];
};


export type SubscriptionOnUpdateLeaderboardStrokesArgs = {
  id: Scalars['ID']['input'];
};


export type SubscriptionOnUpdateLeaderboardStrokesCompresssedArgs = {
  id: Scalars['ID']['input'];
};


export type SubscriptionOnUpdateLeaderboardV2Args = {
  id: Scalars['ID']['input'];
};


export type SubscriptionOnUpdateMatchOutcomeIqArgs = {
  id: Scalars['ID']['input'];
};


export type SubscriptionOnUpdateMatchPlayLeaderboardArgs = {
  id: Scalars['ID']['input'];
};


export type SubscriptionOnUpdateMatchPlayLeaderboardCompressedArgs = {
  id: Scalars['ID']['input'];
};


export type SubscriptionOnUpdateMatchPlayPlayoffScorecardArgs = {
  id: Scalars['ID']['input'];
};


export type SubscriptionOnUpdateMatchPlayScorecardArgs = {
  id: Scalars['ID']['input'];
};


export type SubscriptionOnUpdateMatchPlayTeeTimesArgs = {
  id: Scalars['ID']['input'];
};


export type SubscriptionOnUpdateMatchPlayTeeTimesCompressedArgs = {
  id: Scalars['ID']['input'];
};


export type SubscriptionOnUpdateOddsToWinMarketArgs = {
  oddsToWinId: Scalars['ID']['input'];
};


export type SubscriptionOnUpdateOddsToWinMarketCompressedArgs = {
  id: Scalars['ID']['input'];
};


export type SubscriptionOnUpdatePlayerHubArgs = {
  id: Scalars['ID']['input'];
};


export type SubscriptionOnUpdatePlayerTournamentStatusArgs = {
  playerId: Scalars['ID']['input'];
};


export type SubscriptionOnUpdatePlayoffScorecardArgs = {
  id: Scalars['ID']['input'];
};


export type SubscriptionOnUpdatePlayoffScorecardV2Args = {
  id: Scalars['ID']['input'];
};


export type SubscriptionOnUpdatePlayoffScorecardV3Args = {
  tournamentId: Scalars['ID']['input'];
};


export type SubscriptionOnUpdatePlayoffShotDetailsArgs = {
  id: Scalars['ID']['input'];
};


export type SubscriptionOnUpdatePlayoffShotDetailsCompressedArgs = {
  id: Scalars['ID']['input'];
};


export type SubscriptionOnUpdateScorecardCompressedV3Args = {
  id: Scalars['ID']['input'];
};


export type SubscriptionOnUpdateScorecardStatsCompressedV3Args = {
  id: Scalars['ID']['input'];
};


export type SubscriptionOnUpdateScorecardV2Args = {
  id: Scalars['ID']['input'];
};


export type SubscriptionOnUpdateShotCommentaryArgs = {
  playerId: Scalars['String']['input'];
  round: Scalars['Int']['input'];
  tournamentId: Scalars['String']['input'];
};


export type SubscriptionOnUpdateShotDetailsCompressedV3Args = {
  id: Scalars['ID']['input'];
};


export type SubscriptionOnUpdateShotDetailsV4CompressedArgs = {
  id: Scalars['ID']['input'];
};


export type SubscriptionOnUpdateTglMatchArgs = {
  id: Scalars['ID']['input'];
};


export type SubscriptionOnUpdateTspPlayoffShotDetailsArgs = {
  id: Scalars['ID']['input'];
};


export type SubscriptionOnUpdateTspPlayoffShotDetailsCompressedArgs = {
  id: Scalars['ID']['input'];
};


export type SubscriptionOnUpdateTeamPlayLeaderboardArgs = {
  id: Scalars['ID']['input'];
};


export type SubscriptionOnUpdateTeamPlayLeaderboardCompressedArgs = {
  id: Scalars['ID']['input'];
};


export type SubscriptionOnUpdateTeamPlayScorecardArgs = {
  id: Scalars['ID']['input'];
};


export type SubscriptionOnUpdateTeamPlayScorecardRoundsArgs = {
  id: Scalars['ID']['input'];
};


export type SubscriptionOnUpdateTeamStrokePlayTeeTimesArgs = {
  id: Scalars['ID']['input'];
};


export type SubscriptionOnUpdateTeamStrokePlayTeeTimesCompressedArgs = {
  id: Scalars['ID']['input'];
};


export type SubscriptionOnUpdateTeeTimesArgs = {
  id: Scalars['ID']['input'];
};


export type SubscriptionOnUpdateTeeTimesCompressedArgs = {
  id: Scalars['ID']['input'];
};


export type SubscriptionOnUpdateTeeTimesCompressedV2Args = {
  id: Scalars['ID']['input'];
};


export type SubscriptionOnUpdateTeeTimesV2Args = {
  id: Scalars['ID']['input'];
};


export type SubscriptionOnUpdateTourCupArgs = {
  id: Scalars['ID']['input'];
};


export type SubscriptionOnUpdateTourcastTableArgs = {
  tournamentId: Scalars['ID']['input'];
};


export type SubscriptionOnUpdateTournamentArgs = {
  id: Scalars['ID']['input'];
};


export type SubscriptionOnUpdateTournamentGroupLocationsArgs = {
  round: Scalars['Int']['input'];
  tournamentId: Scalars['ID']['input'];
};


export type SubscriptionOnUpdateUpcomingScheduleArgs = {
  id: Scalars['ID']['input'];
};

export type SummaryRow = {
  readonly __typename: 'SummaryRow';
  readonly averagePaceOfPlay?: Maybe<Scalars['String']['output']>;
  readonly birdies?: Maybe<Scalars['Int']['output']>;
  readonly bogeys?: Maybe<Scalars['Int']['output']>;
  readonly doubleBogey?: Maybe<Scalars['Int']['output']>;
  readonly eagles?: Maybe<Scalars['Int']['output']>;
  readonly paceOfPlay?: Maybe<CourseHoleStatsPaceData>;
  readonly par: Scalars['Int']['output'];
  readonly pars?: Maybe<Scalars['Int']['output']>;
  readonly rowType: SummaryRowType;
  readonly scoringAverage: Scalars['String']['output'];
  readonly scoringAverageDiff: Scalars['String']['output'];
  readonly scoringDiffTendency: ScoringTendency;
  readonly yardage: Scalars['Int']['output'];
};

export type SummaryRowType =
  | 'IN'
  | 'OUT'
  | 'TOTAL';

export type TcWinner = MpLeaderboardPlayer | TspWinner | Winner;

export type TglBoxScore = {
  readonly __typename: 'TGLBoxScore';
  readonly matchId: Scalars['String']['output'];
};

export type TglBoxScoreFragment = {
  readonly __typename: 'TGLBoxScoreFragment';
  readonly matchIds?: Maybe<ReadonlyArray<Scalars['String']['output']>>;
};

export type TglMatch = {
  readonly __typename: 'TGLMatch';
  readonly currentHole?: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly isOvertime: Scalars['Boolean']['output'];
  readonly matchDate: Scalars['AWSTimestamp']['output'];
  readonly matchStatus: TglMatchStatus;
  readonly matchStatusColor: Scalars['String']['output'];
  readonly matchStatusDisplay: Scalars['String']['output'];
  readonly matchUrl?: Maybe<Scalars['String']['output']>;
  readonly subscriptionsActive: Scalars['Boolean']['output'];
  readonly teams: ReadonlyArray<TglTeam>;
  readonly tglLogo?: Maybe<Scalars['String']['output']>;
  readonly tglLogoDark?: Maybe<Scalars['String']['output']>;
  readonly tglLogoFallback: Scalars['String']['output'];
  readonly watchLabel?: Maybe<Scalars['String']['output']>;
  readonly watchLogo?: Maybe<Scalars['String']['output']>;
  readonly watchUrl?: Maybe<Scalars['String']['output']>;
};

/**  ## TGL Types */
export type TglMatchStatus =
  | 'COMPLETE'
  | 'IN_PROGRESS'
  | 'UNKNOWN'
  | 'UPCOMING';

export type TglPlayer = {
  readonly __typename: 'TGLPlayer';
  readonly displayName: Scalars['String']['output'];
  readonly playerHeadshot: Scalars['String']['output'];
  readonly playerId: Scalars['ID']['output'];
};

export type TglSchedule = {
  readonly __typename: 'TGLSchedule';
  readonly matches: ReadonlyArray<TglMatch>;
  readonly season: Scalars['Int']['output'];
};

export type TglTeam = {
  readonly __typename: 'TGLTeam';
  readonly losses: Scalars['Int']['output'];
  readonly matchWinner?: Maybe<Scalars['Boolean']['output']>;
  readonly players: ReadonlyArray<TglPlayer>;
  readonly score: Scalars['String']['output'];
  readonly teamLogo: Scalars['String']['output'];
  readonly teamName: Scalars['String']['output'];
  readonly wins: Scalars['Int']['output'];
};

export type TspLeaderboard = {
  readonly __typename: 'TSPLeaderboard';
  readonly currentRound: Scalars['Int']['output'];
  readonly currentRoundScoringFormat?: Maybe<Scalars['String']['output']>;
  readonly disableOdds: Scalars['Boolean']['output'];
  readonly formatType: FormatType;
  readonly id: Scalars['ID']['output'];
  readonly infoUrl: Scalars['String']['output'];
  readonly informationSections: ReadonlyArray<InformationSection>;
  readonly leaderboard: ReadonlyArray<TspLeaderboardRow>;
  readonly messages: ReadonlyArray<LeaderboardMessage>;
  readonly playoff?: Maybe<TspPlayoff>;
  readonly rounds: ReadonlyArray<TspLeaderboardRound>;
  readonly scorecardEnabled: Scalars['Boolean']['output'];
  readonly shortTimezone: Scalars['String']['output'];
  readonly timezone?: Maybe<Scalars['String']['output']>;
  readonly tourcastURI?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastUrl?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastUrlWeb?: Maybe<Scalars['String']['output']>;
  readonly tournamentStatus: TournamentStatus;
  readonly winner?: Maybe<TspWinner>;
};

export type TspLeaderboardRound = {
  readonly __typename: 'TSPLeaderboardRound';
  readonly round: Scalars['Int']['output'];
  readonly roundHeader: Scalars['String']['output'];
  readonly roundHeaderShort: Scalars['String']['output'];
  readonly roundStatusSubHead: Scalars['String']['output'];
  readonly roundTypeSubHead: Scalars['String']['output'];
};

export type TspLeaderboardRow = InformationRow | TspTeamRow;

export type TspScorecard = {
  readonly __typename: 'TSPScorecard';
  readonly backNine: Scalars['Boolean']['output'];
  readonly courseId?: Maybe<Scalars['Int']['output']>;
  readonly currentHole?: Maybe<Scalars['Int']['output']>;
  readonly currentRound: Scalars['Int']['output'];
  readonly currentRoundTotal: Scalars['String']['output'];
  readonly firstNine?: Maybe<TeamPlayScoreCardRow>;
  readonly groupNumber: Scalars['Int']['output'];
  readonly groupState: PlayerState;
  readonly id: Scalars['ID']['output'];
  readonly locationDetail: Scalars['String']['output'];
  readonly parTotal: Scalars['Int']['output'];
  readonly players: ReadonlyArray<TspScPlayer>;
  readonly position: Scalars['String']['output'];
  readonly roundDisplay: Scalars['String']['output'];
  readonly roundFormat: RoundFormat;
  readonly roundNumber: Scalars['Int']['output'];
  readonly scorecardTitle: Scalars['String']['output'];
  readonly secondNine?: Maybe<TeamPlayScoreCardRow>;
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

export type TspScorecardRounds = {
  readonly __typename: 'TSPScorecardRounds';
  readonly id: Scalars['ID']['output'];
  readonly scorecards: ReadonlyArray<TspScorecard>;
};

export type TspTeeTimeGroup = {
  readonly __typename: 'TSPTeeTimeGroup';
  readonly courseId?: Maybe<Scalars['String']['output']>;
  readonly groupNumber: Scalars['Int']['output'];
  readonly groupState: PlayerState;
  readonly groupStatus: Scalars['String']['output'];
  readonly holeLocation?: Maybe<Scalars['String']['output']>;
  readonly startTee: Scalars['Int']['output'];
  readonly teams: ReadonlyArray<TspTeeTimeTeam>;
  readonly teeTime: Scalars['AWSTimestamp']['output'];
};

export type TspTeeTimeHeaders = {
  readonly __typename: 'TSPTeeTimeHeaders';
  readonly status: Scalars['String']['output'];
  readonly team: Scalars['String']['output'];
  readonly tee: Scalars['String']['output'];
  readonly time: Scalars['String']['output'];
};

export type TspTeeTimePlayer = {
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

export type TspTeeTimeRound = {
  readonly __typename: 'TSPTeeTimeRound';
  readonly groups: ReadonlyArray<TspTeeTimeGroup>;
  readonly roundFormat: Scalars['String']['output'];
  readonly roundNumber: Scalars['Int']['output'];
};

export type TspTeeTimeTeam = {
  readonly __typename: 'TSPTeeTimeTeam';
  readonly players: ReadonlyArray<TspTeeTimePlayer>;
  readonly teamId: Scalars['ID']['output'];
};

export type TspTeeTimes = {
  readonly __typename: 'TSPTeeTimes';
  readonly courseFilters: ReadonlyArray<CourseFilter>;
  readonly courses: ReadonlyArray<Course>;
  readonly defaultRound: Scalars['Int']['output'];
  readonly drawersEnabled: Scalars['Boolean']['output'];
  readonly id: Scalars['ID']['output'];
  readonly informationSections: ReadonlyArray<InformationSection>;
  readonly roundFilters: ReadonlyArray<RoundFilter>;
  readonly rounds: ReadonlyArray<TspTeeTimeRound>;
  readonly teeTimeHeaders: TspTeeTimeHeaders;
  readonly timezone: Scalars['String']['output'];
};

export type TableBody = {
  readonly __typename: 'TableBody';
  readonly rows: ReadonlyArray<TableRows>;
};

export type TableColumn = {
  readonly __typename: 'TableColumn';
  readonly class?: Maybe<Scalars['String']['output']>;
  readonly colspan?: Maybe<Scalars['String']['output']>;
  readonly height?: Maybe<Scalars['String']['output']>;
  readonly rowspan?: Maybe<Scalars['String']['output']>;
  readonly valign?: Maybe<Scalars['String']['output']>;
  readonly value?: Maybe<ReadonlyArray<TableColumnValue>>;
  readonly width?: Maybe<Scalars['String']['output']>;
};

export type TableColumnSegment = {
  readonly __typename: 'TableColumnSegment';
  readonly data?: Maybe<Scalars['String']['output']>;
  readonly format?: Maybe<NewsArticleFormat>;
  readonly oddsSwing?: Maybe<OddsSwing>;
  readonly type: Scalars['String']['output'];
  readonly value?: Maybe<Scalars['String']['output']>;
};

export type TableColumnValue = TableColumnSegment | UnorderedListNode;

export type TableDataRow = {
  readonly __typename: 'TableDataRow';
  readonly class?: Maybe<Scalars['String']['output']>;
  readonly columns?: Maybe<ReadonlyArray<Maybe<TableColumn>>>;
};

export type TableFragment = {
  readonly __typename: 'TableFragment';
  readonly border?: Maybe<Scalars['String']['output']>;
  readonly cellpadding?: Maybe<Scalars['String']['output']>;
  readonly cellspacing?: Maybe<Scalars['String']['output']>;
  readonly class?: Maybe<Scalars['String']['output']>;
  readonly id?: Maybe<Scalars['String']['output']>;
  readonly table?: Maybe<TableBody>;
  readonly width?: Maybe<Scalars['String']['output']>;
};

export type TableHeaderRow = {
  readonly __typename: 'TableHeaderRow';
  readonly class?: Maybe<Scalars['String']['output']>;
  readonly columns?: Maybe<ReadonlyArray<Maybe<TableColumn>>>;
};

export type TableRows = TableDataRow | TableHeaderRow;

export type TeamHoleGroups = {
  readonly __typename: 'TeamHoleGroups';
  readonly groupLocation: Scalars['String']['output'];
  readonly groupLocationCode: Scalars['String']['output'];
  readonly groupNumber: Scalars['Int']['output'];
  readonly teams: ReadonlyArray<HoleGroupTeam>;
  readonly tourcastURI?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastURL?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastURLWeb?: Maybe<Scalars['String']['output']>;
};

export type TeamPlayHole = {
  readonly __typename: 'TeamPlayHole';
  readonly holeNumber: Scalars['String']['output'];
  readonly parValue: Scalars['String']['output'];
  readonly playerScores: ReadonlyArray<TspPlayerHole>;
  readonly round: Scalars['Int']['output'];
  readonly teamplayHoleScore: TspTeamHole;
  readonly yardage: Scalars['String']['output'];
};

export type TeamPlayScoreCardRow = {
  readonly __typename: 'TeamPlayScoreCardRow';
  readonly holes: ReadonlyArray<TeamPlayHole>;
  readonly parTotal: Scalars['Int']['output'];
  readonly total: Scalars['String']['output'];
  readonly totalLabel: Scalars['String']['output'];
};

export type TeamRankings = {
  readonly __typename: 'TeamRankings';
  readonly defaultEuropeRankings: Scalars['Boolean']['output'];
  readonly defaultUsRankings: Scalars['Boolean']['output'];
  readonly displayRoster: Scalars['Boolean']['output'];
  readonly euroCaptainLabel?: Maybe<Scalars['String']['output']>;
  readonly euroHeader: Scalars['String']['output'];
  readonly euroViceCaptainLabel?: Maybe<Scalars['String']['output']>;
  readonly europeCaptain?: Maybe<Scalars['String']['output']>;
  readonly europeCta?: Maybe<CallToAction>;
  readonly europeInfoBlurb?: Maybe<Scalars['String']['output']>;
  readonly europeViceCaptain?: Maybe<Scalars['String']['output']>;
  readonly sectionHeader: Scalars['String']['output'];
  readonly usCaptain?: Maybe<Scalars['String']['output']>;
  readonly usCaptainLabel?: Maybe<Scalars['String']['output']>;
  readonly usCta?: Maybe<CallToAction>;
  readonly usHeader: Scalars['String']['output'];
  readonly usInfoBlurb?: Maybe<Scalars['String']['output']>;
  readonly usViceCaptain?: Maybe<Scalars['String']['output']>;
  readonly usViceCaptainLabel?: Maybe<Scalars['String']['output']>;
};

export type TeamShotDetails = {
  readonly __typename: 'TeamShotDetails';
  readonly defaultHolePickle: HolePickleType;
  readonly displayType: ShotDetailsDisplayType;
  readonly groupNumber: Scalars['Int']['output'];
  readonly holes: ReadonlyArray<GroupShotDetailsHole>;
  readonly id: Scalars['ID']['output'];
  readonly message: Scalars['String']['output'];
  readonly round: Scalars['Int']['output'];
  readonly shotVideo?: Maybe<Video>;
  readonly shotVideos?: Maybe<ReadonlyArray<Video>>;
  readonly teams: ReadonlyArray<GroupShotDetailsTeam>;
  readonly tournamentId: Scalars['String']['output'];
};

export type TeamShotDetailsCompressed = {
  readonly __typename: 'TeamShotDetailsCompressed';
  readonly id: Scalars['ID']['output'];
  readonly payload: Scalars['String']['output'];
};

export type TeamStoryContentInfo = {
  readonly __typename: 'TeamStoryContentInfo';
  readonly hasStoryContent: Scalars['Boolean']['output'];
  readonly playerId: Scalars['String']['output'];
  readonly storyContentRound?: Maybe<Scalars['Int']['output']>;
  readonly storyContentRounds: ReadonlyArray<Scalars['Int']['output']>;
};

export type TeamplayHolePlayer = {
  readonly __typename: 'TeamplayHolePlayer';
  readonly holeScore?: Maybe<Scalars['String']['output']>;
  readonly holeScoreStatus?: Maybe<HoleScoreStatus>;
  readonly playerId: Scalars['ID']['output'];
};

export type TeeTimeHeader = {
  readonly __typename: 'TeeTimeHeader';
  readonly players: Scalars['String']['output'];
  readonly status: Scalars['String']['output'];
  readonly tee: Scalars['String']['output'];
  readonly time: Scalars['String']['output'];
};

export type TeeTimeRound = {
  readonly __typename: 'TeeTimeRound';
  readonly groups: ReadonlyArray<Group>;
  readonly id: Scalars['ID']['output'];
  readonly roundDisplay: Scalars['String']['output'];
  readonly roundInt: Scalars['Int']['output'];
  readonly roundStatus: RoundStatus;
  readonly roundStatusColor: RoundStatusColor;
  readonly roundStatusDisplay: Scalars['String']['output'];
};

export type TeeTimeRoundV2 = {
  readonly __typename: 'TeeTimeRoundV2';
  readonly groups: ReadonlyArray<GroupV2>;
  readonly id: Scalars['ID']['output'];
  readonly roundDisplay: Scalars['String']['output'];
  readonly roundInt: Scalars['Int']['output'];
  readonly roundStatus: RoundStatus;
  readonly roundStatusColor: RoundStatusColor;
  readonly roundStatusDisplay: Scalars['String']['output'];
};

export type TeeTimes = {
  readonly __typename: 'TeeTimes';
  readonly courses: ReadonlyArray<Course>;
  readonly defaultRound: Scalars['Int']['output'];
  readonly drawersEnabled: Scalars['Boolean']['output'];
  readonly hideSov: Scalars['Boolean']['output'];
  readonly id: Scalars['ID']['output'];
  readonly informationSections: ReadonlyArray<InformationSection>;
  readonly rounds: ReadonlyArray<TeeTimeRound>;
  readonly timezone: Scalars['String']['output'];
};

export type TeeTimesCompressed = {
  readonly __typename: 'TeeTimesCompressed';
  readonly id: Scalars['ID']['output'];
  readonly payload: Scalars['String']['output'];
};

export type TeeTimesFeature =
  | 'GROUPINGS'
  | 'GROUP_TRACKER';

export type TeeTimesV2 = {
  readonly __typename: 'TeeTimesV2';
  readonly courses: ReadonlyArray<Course>;
  readonly defaultRound: Scalars['Int']['output'];
  readonly drawersEnabled: Scalars['Boolean']['output'];
  readonly hideSov: Scalars['Boolean']['output'];
  readonly id: Scalars['ID']['output'];
  readonly informationSections: ReadonlyArray<InformationSection>;
  readonly rounds: ReadonlyArray<TeeTimeRoundV2>;
  readonly teeTimesFeatures: ReadonlyArray<TeeTimesFeature>;
  readonly timezone: Scalars['String']['output'];
};

export type ThreeUpPhoto = {
  readonly __typename: 'ThreeUpPhoto';
  readonly photoFour?: Maybe<Scalars['String']['output']>;
  readonly photoFourAccessibilityText?: Maybe<Scalars['String']['output']>;
  readonly photoFourUrl?: Maybe<Scalars['String']['output']>;
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

export type ThreeUpStats = {
  readonly __typename: 'ThreeUpStats';
  readonly header?: Maybe<Scalars['String']['output']>;
  readonly statsDescriptionOne?: Maybe<Scalars['String']['output']>;
  readonly statsDescriptionThree?: Maybe<Scalars['String']['output']>;
  readonly statsDescriptionTwo?: Maybe<Scalars['String']['output']>;
  readonly valueOne?: Maybe<Scalars['String']['output']>;
  readonly valueThree?: Maybe<Scalars['String']['output']>;
  readonly valueTwo?: Maybe<Scalars['String']['output']>;
};

export type TicketCards = {
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

export type TicketSectionContainer = {
  readonly __typename: 'TicketSectionContainer';
  readonly bottomCta?: Maybe<CallToAction>;
  readonly cards?: Maybe<ReadonlyArray<TicketCards>>;
  readonly layout?: Maybe<Scalars['String']['output']>;
  readonly sectionTitle?: Maybe<Scalars['String']['output']>;
  readonly topCta?: Maybe<CallToAction>;
};

export type ToolTipComponent = {
  readonly __typename: 'ToolTipComponent';
  readonly detailCopy?: Maybe<Scalars['String']['output']>;
  readonly detailCopyRichText?: Maybe<ReadonlyArray<Maybe<NewsArticleNode>>>;
  readonly header: Scalars['String']['output'];
  readonly id?: Maybe<Ryder_Cup_Ranking_Tooltip>;
  readonly logo: Scalars['String']['output'];
};

export type TopicStoriesPillConfig = {
  readonly __typename: 'TopicStoriesPillConfig';
  readonly label: Scalars['String']['output'];
};

export type ToughestCourseRoundPills = {
  readonly __typename: 'ToughestCourseRoundPills';
  readonly display: Scalars['String']['output'];
  readonly queryVal: ToughestRound;
};

export type ToughestRound =
  | 'ALL'
  | 'FOUR'
  | 'ONE'
  | 'THREE'
  | 'TWO';

export type TourBoundAsset = {
  readonly __typename: 'TourBoundAsset';
  readonly tourBoundLogo?: Maybe<Scalars['String']['output']>;
  readonly tourBoundLogoDark?: Maybe<Scalars['String']['output']>;
};

export type TourCategories = {
  readonly __typename: 'TourCategories';
  readonly categories: ReadonlyArray<Category>;
  readonly tourCode: TourCode;
};

export type TourCode =
  | 'C'
  | 'D'
  | 'E'
  | 'H'
  | 'I'
  | 'M'
  | 'P'
  | 'R'
  | 'S'
  | 'U'
  | 'Y';

export type TourCupCombined = {
  readonly __typename: 'TourCupCombined';
  readonly bannerMessage?: Maybe<LeaderboardMessage>;
  readonly columnHeaders: ReadonlyArray<Scalars['String']['output']>;
  readonly cutOffButtonText?: Maybe<Scalars['String']['output']>;
  readonly cutOffNumber?: Maybe<Scalars['Int']['output']>;
  readonly description: Scalars['String']['output'];
  readonly detailCopy: Scalars['String']['output'];
  readonly fixedHeaders: Scalars['Int']['output'];
  readonly id: Scalars['ID']['output'];
  /** @deprecated Use logoAsset */
  readonly logo: Scalars['String']['output'];
  readonly logoAsset: ImageAsset;
  readonly message?: Maybe<Scalars['String']['output']>;
  readonly options: TourCupType;
  readonly partner?: Maybe<Scalars['String']['output']>;
  readonly partnerLink?: Maybe<Scalars['String']['output']>;
  readonly players: ReadonlyArray<TourCupCombinedRow>;
  readonly pointsEyebrow?: Maybe<Scalars['String']['output']>;
  readonly projectedLive: Scalars['Boolean']['output'];
  readonly projectedTitle: Scalars['String']['output'];
  readonly rankEyebrow?: Maybe<Scalars['String']['output']>;
  readonly rankingsHeader: Scalars['String']['output'];
  readonly season: Scalars['String']['output'];
  readonly title: Scalars['String']['output'];
  readonly tournamentPills: ReadonlyArray<StatTournamentPill>;
  readonly winner?: Maybe<TourCupCombinedWinner>;
  readonly yearPills: ReadonlyArray<StatYearPills>;
};

export type TourCupCombinedData = {
  readonly __typename: 'TourCupCombinedData';
  readonly event: Scalars['String']['output'];
  /** @deprecated Use logoAsset */
  readonly logo?: Maybe<Scalars['String']['output']>;
  readonly logoAsset?: Maybe<ImageAsset>;
  /** @deprecated Use logoDarkAsset */
  readonly logoDark?: Maybe<Scalars['String']['output']>;
  readonly logoDarkAsset?: Maybe<ImageAsset>;
  readonly movement: CupRankMovementDirection;
  readonly movementAmount: Scalars['String']['output'];
  readonly official: Scalars['String']['output'];
  readonly projected: Scalars['String']['output'];
};

export type TourCupCombinedInfo = {
  readonly __typename: 'TourCupCombinedInfo';
  /** @deprecated Use logoAsset */
  readonly logo?: Maybe<Scalars['String']['output']>;
  readonly logoAsset?: Maybe<ImageAsset>;
  /** @deprecated Use logoDarkAsset */
  readonly logoDark?: Maybe<Scalars['String']['output']>;
  readonly logoDarkAsset?: Maybe<ImageAsset>;
  readonly sortValue: Scalars['Int']['output'];
  readonly text: Scalars['String']['output'];
  readonly toolTip?: Maybe<Scalars['String']['output']>;
};

export type TourCupCombinedPlayer = {
  readonly __typename: 'TourCupCombinedPlayer';
  readonly columnData: ReadonlyArray<Scalars['String']['output']>;
  readonly country: Scalars['String']['output'];
  readonly countryFlag: Scalars['String']['output'];
  readonly displayName: Scalars['String']['output'];
  readonly firstName: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
  readonly lastName: Scalars['String']['output'];
  readonly officialSort: Scalars['Int']['output'];
  readonly pointData?: Maybe<TourCupCombinedData>;
  readonly previousWeekRank: Scalars['String']['output'];
  readonly projectedSort: Scalars['Int']['output'];
  /** @deprecated Use rankLogoDarkAsset */
  readonly rankLogoDark?: Maybe<Scalars['String']['output']>;
  readonly rankLogoDarkAsset?: Maybe<ImageAsset>;
  /** @deprecated Use rankLogoLightAsset */
  readonly rankLogoLight?: Maybe<Scalars['String']['output']>;
  readonly rankLogoLightAsset?: Maybe<ImageAsset>;
  readonly rankingData?: Maybe<TourCupCombinedData>;
  readonly shortName: Scalars['String']['output'];
  readonly thisWeekRank: Scalars['String']['output'];
  readonly tourBound?: Maybe<Scalars['Boolean']['output']>;
};

export type TourCupCombinedRow = TourCupCombinedInfo | TourCupCombinedPlayer;

export type TourCupCombinedTotal = {
  readonly __typename: 'TourCupCombinedTotal';
  readonly label: Scalars['String']['output'];
  readonly value: Scalars['String']['output'];
};

export type TourCupCombinedWinner = {
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
  readonly totals: ReadonlyArray<TourCupCombinedTotal>;
};

export type TourCupRankingData = SegmentedCupRankingWrapper | StandardCupRanking;

export type TourCupRankingEvent = {
  readonly __typename: 'TourCupRankingEvent';
  readonly bannerMessage?: Maybe<LeaderboardMessage>;
  readonly description: Scalars['String']['output'];
  readonly detailCopy?: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly live: Scalars['Boolean']['output'];
  /** @deprecated Use logoAsset */
  readonly logo: Scalars['String']['output'];
  readonly logoAsset: ImageAsset;
  /** @deprecated Use logoDarkAsset */
  readonly logoDark: Scalars['String']['output'];
  readonly logoDarkAsset: ImageAsset;
  readonly options: TourCupType;
  readonly partner?: Maybe<Scalars['String']['output']>;
  readonly partnerLink?: Maybe<Scalars['String']['output']>;
  readonly rankings: ReadonlyArray<CupRankingPlayerWrapper>;
  readonly rankingsHeader: Scalars['String']['output'];
  readonly showInLeaderboard: Scalars['Boolean']['output'];
  readonly standings: TourCupRankingData;
  readonly title: Scalars['String']['output'];
  readonly webviewBrowserControls?: Maybe<Scalars['Boolean']['output']>;
  readonly webviewUrl?: Maybe<Scalars['String']['output']>;
  readonly winner?: Maybe<TourCupWinner>;
};

export type TourCupSplit = {
  readonly __typename: 'TourCupSplit';
  readonly bannerMessage?: Maybe<LeaderboardMessage>;
  readonly columnHeaders: ReadonlyArray<Scalars['String']['output']>;
  readonly cutOffButtonText?: Maybe<Scalars['String']['output']>;
  readonly cutOffNumber?: Maybe<Scalars['Int']['output']>;
  readonly description: Scalars['String']['output'];
  readonly detailCopy: Scalars['String']['output'];
  readonly fixedHeaders: Scalars['Int']['output'];
  readonly id: Scalars['ID']['output'];
  /** @deprecated Use logoAsset */
  readonly logo: Scalars['String']['output'];
  readonly logoAsset: ImageAsset;
  readonly message?: Maybe<Scalars['String']['output']>;
  readonly officialPlayers: ReadonlyArray<TourCupCombinedRow>;
  readonly options: TourCupType;
  readonly partner?: Maybe<Scalars['String']['output']>;
  readonly partnerLink?: Maybe<Scalars['String']['output']>;
  readonly pointsEyebrow?: Maybe<Scalars['String']['output']>;
  readonly projectedLive: Scalars['Boolean']['output'];
  readonly projectedPlayers: ReadonlyArray<TourCupCombinedRow>;
  readonly projectedTitle: Scalars['String']['output'];
  readonly rankEyebrow?: Maybe<Scalars['String']['output']>;
  readonly rankingsHeader: Scalars['String']['output'];
  readonly season: Scalars['String']['output'];
  readonly title: Scalars['String']['output'];
  readonly tournamentPills: ReadonlyArray<StatTournamentPill>;
  readonly winner?: Maybe<TourCupCombinedWinner>;
  readonly yearPills: ReadonlyArray<StatYearPills>;
};

export type TourCupType =
  | 'OFFICIAL'
  | 'OFFICIAL_AND_PROJECTED'
  | 'PROJECTED';

export type TourCupWinner = {
  readonly __typename: 'TourCupWinner';
  readonly id: Scalars['String']['output'];
  readonly name: Scalars['String']['output'];
  readonly playerCountry: Scalars['String']['output'];
  readonly totalLabel: Scalars['String']['output'];
  readonly totalValue: Scalars['String']['output'];
};

export type TourPills = {
  readonly __typename: 'TourPills';
  readonly displayName: Scalars['String']['output'];
  readonly tourCode?: Maybe<TourCode>;
};

export type TourSponsor = {
  readonly __typename: 'TourSponsor';
  readonly _path?: Maybe<Scalars['String']['output']>;
  readonly sponsorDescription: ReadonlyArray<TourSponsorDescription>;
  readonly sponsorImage?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use sponsorLogoAsset */
  readonly sponsorLogo?: Maybe<Scalars['String']['output']>;
  readonly sponsorLogoAsset: ImageAsset;
  readonly sponsorName?: Maybe<Scalars['String']['output']>;
  readonly sponsorWebsiteUrl?: Maybe<Scalars['String']['output']>;
};

export type TourSponsorDescription = NewsArticleImage | NewsArticleLineBreak | NewsArticleLink | NewsArticleParagraph | NewsArticleText;

export type TourcastCourse = {
  readonly __typename: 'TourcastCourse';
  readonly courseId: Scalars['String']['output'];
  readonly holes: ReadonlyArray<TourcastHole>;
  readonly playoff?: Maybe<TourcastPlayoff>;
};

export type TourcastGroup = {
  readonly __typename: 'TourcastGroup';
  readonly groupName: Scalars['String']['output'];
  readonly groupNum: Scalars['Int']['output'];
  readonly location: Scalars['String']['output'];
  readonly players: ReadonlyArray<TourcastPlayer>;
  readonly roundNum: Scalars['Int']['output'];
  readonly teeTime: Scalars['AWSTimestamp']['output'];
  readonly tourcastURI?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastURL?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastURLWeb?: Maybe<Scalars['String']['output']>;
};

export type TourcastHole = {
  readonly __typename: 'TourcastHole';
  readonly cupMatches?: Maybe<ReadonlyArray<CupLeaderboardMatch>>;
  readonly displayRank: Scalars['String']['output'];
  readonly groups: ReadonlyArray<TourcastGroup>;
  readonly holeNum: Scalars['Int']['output'];
  readonly matches: ReadonlyArray<HoleMatch>;
  readonly par: Scalars['String']['output'];
  readonly rank: Scalars['Int']['output'];
  readonly round: Scalars['String']['output'];
  readonly scoringAvg: Scalars['String']['output'];
  readonly teamGroups: ReadonlyArray<TourcastTeamGroup>;
  readonly yardage: Scalars['String']['output'];
};

export type TourcastPlayer = {
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

export type TourcastPlayoff = {
  readonly __typename: 'TourcastPlayoff';
  readonly holeNum: Scalars['Int']['output'];
  readonly playOffHole: Scalars['Int']['output'];
  readonly players: ReadonlyArray<TourcastPlayoffPlayer>;
  readonly tourcastURI?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastURL?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastURLWeb?: Maybe<Scalars['String']['output']>;
};

export type TourcastPlayoffPlayer = {
  readonly __typename: 'TourcastPlayoffPlayer';
  readonly countryCode: Scalars['String']['output'];
  readonly displayName: Scalars['String']['output'];
  readonly playerId: Scalars['ID']['output'];
  readonly shortName: Scalars['String']['output'];
};

export type TourcastTable = {
  readonly __typename: 'TourcastTable';
  readonly courses: ReadonlyArray<TourcastCourse>;
  readonly informationSections: ReadonlyArray<InformationSection>;
  readonly tournamentId: Scalars['ID']['output'];
  readonly winner?: Maybe<TcWinner>;
};

export type TourcastTeam = {
  readonly __typename: 'TourcastTeam';
  readonly backNine: Scalars['Boolean']['output'];
  readonly players: ReadonlyArray<TourcastPlayer>;
  readonly roundScore: Scalars['String']['output'];
  readonly teamId: Scalars['ID']['output'];
  readonly thru: Scalars['String']['output'];
  readonly total: Scalars['String']['output'];
};

export type TourcastTeamGroup = {
  readonly __typename: 'TourcastTeamGroup';
  readonly groupName: Scalars['String']['output'];
  readonly groupNum: Scalars['Int']['output'];
  readonly location: Scalars['String']['output'];
  readonly roundNum: Scalars['Int']['output'];
  readonly teams: ReadonlyArray<TourcastTeam>;
  readonly teeTime: Scalars['AWSTimestamp']['output'];
  readonly tourcastURI?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastURL?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastURLWeb?: Maybe<Scalars['String']['output']>;
};

export type Tournament = {
  readonly __typename: 'Tournament';
  /** @deprecated Use beautyImageAsset */
  readonly beautyImage: Scalars['String']['output'];
  readonly beautyImageAsset: ImageAsset;
  readonly city: Scalars['String']['output'];
  readonly conductedByLabel?: Maybe<Scalars['String']['output']>;
  readonly conductedByLink?: Maybe<Scalars['String']['output']>;
  readonly country: Scalars['String']['output'];
  readonly courses: ReadonlyArray<Course>;
  readonly currentRound: Scalars['Int']['output'];
  readonly disabledScorecardTabs: ReadonlyArray<ScorecardTabFeature>;
  readonly displayDate: Scalars['String']['output'];
  readonly events: ReadonlyArray<Event>;
  readonly features?: Maybe<ReadonlyArray<TournamentFeature>>;
  readonly formatType: FormatType;
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
  readonly rightRailConfig?: Maybe<TournamentRightRailConfig>;
  readonly roundDisplay: Scalars['String']['output'];
  readonly roundStatus: RoundStatus;
  readonly roundStatusColor: RoundStatusColor;
  readonly roundStatusDisplay: Scalars['String']['output'];
  readonly scoredLevel: ScoringLevel;
  readonly seasonYear: Scalars['String']['output'];
  readonly shouldSubscribe?: Maybe<Scalars['Boolean']['output']>;
  readonly state: Scalars['String']['output'];
  readonly ticketsEnabled: Scalars['Boolean']['output'];
  readonly ticketsURL?: Maybe<Scalars['String']['output']>;
  readonly timezone: Scalars['String']['output'];
  readonly tournamentCategoryInfo?: Maybe<TournamentCategoryInfo>;
  readonly tournamentLocation: Scalars['String']['output'];
  /** @deprecated use tournamentLogoAsset */
  readonly tournamentLogo: ReadonlyArray<Scalars['String']['output']>;
  readonly tournamentLogoAsset: ReadonlyArray<ImageAsset>;
  readonly tournamentName: Scalars['String']['output'];
  readonly tournamentSiteURL?: Maybe<Scalars['String']['output']>;
  readonly tournamentStatus: TournamentStatus;
  readonly useTournamentSiteURL: Scalars['Boolean']['output'];
  readonly weather?: Maybe<TournamentWeather>;
};

export type TournamentActivation = {
  readonly __typename: 'TournamentActivation';
  readonly data: Scalars['String']['output'];
  readonly description: Scalars['String']['output'];
  readonly detail?: Maybe<Scalars['String']['output']>;
  /** @deprecated use sponsorLogoAsset */
  readonly sponsorLogo: Scalars['String']['output'];
  readonly sponsorLogoAsset: ImageAsset;
  /** @deprecated use sponsorLogoDarkAsset */
  readonly sponsorLogoDark: Scalars['String']['output'];
  readonly sponsorLogoDarkAsset: ImageAsset;
  readonly title: Scalars['String']['output'];
};

export type TournamentCategory =
  | 'PLAYOFF'
  | 'SIGNATURE';

export type TournamentCategoryInfo = {
  readonly __typename: 'TournamentCategoryInfo';
  readonly label: Scalars['String']['output'];
  /** @deprecated use logoDarkAsset */
  readonly logoDark: Scalars['String']['output'];
  readonly logoDarkAsset: ImageAsset;
  /** @deprecated use logoLightAsset */
  readonly logoLight: Scalars['String']['output'];
  readonly logoLightAsset: ImageAsset;
  readonly type: TournamentCategory;
};

export type TournamentChampion = {
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

export type TournamentCourse = {
  readonly __typename: 'TournamentCourse';
  readonly city?: Maybe<Scalars['String']['output']>;
  readonly country?: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly image: Scalars['String']['output'];
  readonly name: Scalars['String']['output'];
  readonly overview: ReadonlyArray<InformationData>;
  readonly state?: Maybe<Scalars['String']['output']>;
};

export type TournamentFeature =
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

export type TournamentGroupLocation = {
  readonly __typename: 'TournamentGroupLocation';
  readonly groupLocations: ReadonlyArray<GroupLocationData>;
  readonly round: Scalars['Int']['output'];
  readonly tournamentId: Scalars['String']['output'];
};

export type TournamentHistory = {
  readonly __typename: 'TournamentHistory';
  readonly courses: TournamentHistoryCourseTable;
  readonly defendingChampion: TournamentHistoryPlayerTable;
  readonly pastChampions: TournamentHistoryPlayerTable;
  readonly tourCode: TourCode;
  readonly tournamentName: Scalars['String']['output'];
  readonly tournamentNum: Scalars['String']['output'];
};

export type TournamentHistoryCourse = {
  readonly __typename: 'TournamentHistoryCourse';
  readonly courseId: Scalars['String']['output'];
  readonly courseImage: Scalars['String']['output'];
  readonly courseName: Scalars['String']['output'];
  readonly displaySeason: Scalars['String']['output'];
  readonly par: Scalars['String']['output'];
  readonly yardage: Scalars['String']['output'];
  readonly year: Scalars['Int']['output'];
};

export type TournamentHistoryCourseTable = {
  readonly __typename: 'TournamentHistoryCourseTable';
  readonly courses: ReadonlyArray<TournamentHistoryCourse>;
  readonly header: Scalars['String']['output'];
};

export type TournamentHistoryPlayer = {
  readonly __typename: 'TournamentHistoryPlayer';
  readonly countryFlag: Scalars['String']['output'];
  readonly displaySeason: Scalars['String']['output'];
  readonly playerId: Scalars['String']['output'];
  readonly playerName: Scalars['String']['output'];
  readonly relativeToPar: Scalars['String']['output'];
  readonly totalScore: Scalars['String']['output'];
  readonly year: Scalars['Int']['output'];
};

export type TournamentHistoryPlayerTable = {
  readonly __typename: 'TournamentHistoryPlayerTable';
  readonly header: Scalars['String']['output'];
  readonly players: ReadonlyArray<TournamentHistoryPlayer>;
};

export type TournamentHoleStats = {
  readonly __typename: 'TournamentHoleStats';
  readonly courses: ReadonlyArray<CourseStat>;
  readonly tournamentId: Scalars['ID']['output'];
};

export type TournamentLocation = {
  readonly __typename: 'TournamentLocation';
  readonly city?: Maybe<Scalars['String']['output']>;
  readonly country?: Maybe<Scalars['String']['output']>;
  readonly state?: Maybe<Scalars['String']['output']>;
};

export type TournamentOdds = {
  readonly __typename: 'TournamentOdds';
  readonly availableMarkets: ReadonlyArray<AvailableMarket>;
  readonly country: Scalars['String']['output'];
  readonly drawersEnabled: Scalars['Boolean']['output'];
  readonly id: Scalars['ID']['output'];
  /** @deprecated Use banners from config these values are incorrect */
  readonly oddsBanner: OddsBanner;
  readonly oddsMessage?: Maybe<OddsMessage>;
  readonly oddsProvider: OddsProvider;
};

export type TournamentOddsCompressed = {
  readonly __typename: 'TournamentOddsCompressed';
  readonly id: Scalars['ID']['output'];
  readonly tournamentOddsPayload: Scalars['String']['output'];
};

export type TournamentOddsCompressedV2 = {
  readonly __typename: 'TournamentOddsCompressedV2';
  readonly id: Scalars['ID']['output'];
  readonly oddsPayload: Scalars['String']['output'];
};

export type TournamentOddsPlayer = {
  readonly __typename: 'TournamentOddsPlayer';
  readonly oddsOptionId?: Maybe<Scalars['String']['output']>;
  readonly oddsSort: Scalars['Float']['output'];
  readonly oddsSwing?: Maybe<OddsSwing>;
  readonly oddsToWin: Scalars['String']['output'];
  readonly playerId: Scalars['ID']['output'];
};

export type TournamentOddsToWin = {
  readonly __typename: 'TournamentOddsToWin';
  readonly players: ReadonlyArray<TournamentOddsPlayer>;
  readonly tournamentId: Scalars['ID']['output'];
  /** @deprecated use tournamentLogoAsset */
  readonly tournamentLogo: Scalars['String']['output'];
  readonly tournamentLogoAsset: ImageAsset;
  readonly tournamentName: Scalars['String']['output'];
};

export type TournamentOddsV2 = {
  readonly __typename: 'TournamentOddsV2';
  readonly drawersEnabled: Scalars['Boolean']['output'];
  readonly id: Scalars['ID']['output'];
  readonly marketPills: ReadonlyArray<MarketPill>;
  readonly markets: ReadonlyArray<Market>;
  readonly message?: Maybe<OddsMessage>;
  /**   tournamentId-provider */
  readonly provider: OddsProvider;
  /**   other markets you can */
  readonly round: Scalars['String']['output'];
  readonly tournamentId: Scalars['String']['output'];
};

export type TournamentOverview = {
  readonly __typename: 'TournamentOverview';
  readonly activation?: Maybe<TournamentActivation>;
  readonly androidTicketmasterApiKey?: Maybe<Scalars['String']['output']>;
  readonly androidTicketmasterScheme?: Maybe<Scalars['String']['output']>;
  readonly augmentedReality?: Maybe<AugmentedRealityConfig>;
  /** @deprecated Use beautyImageAsset */
  readonly beautyImage: Scalars['String']['output'];
  readonly beautyImageAsset: ImageAsset;
  readonly courses: ReadonlyArray<TournamentCourse>;
  readonly defendingChampion?: Maybe<TournamentChampion>;
  readonly defendingTeamChampion?: Maybe<ReadonlyArray<Maybe<TournamentChampion>>>;
  readonly eventGuideURL?: Maybe<Scalars['String']['output']>;
  readonly formatType: FormatType;
  readonly iosTicketmasterApiKey?: Maybe<Scalars['String']['output']>;
  readonly overview: ReadonlyArray<InformationData>;
  readonly pastChampions: ReadonlyArray<TournamentChampion>;
  readonly pastTeamChampions?: Maybe<ReadonlyArray<Maybe<TournamentTeamChampion>>>;
  readonly shareURL?: Maybe<Scalars['String']['output']>;
  readonly ticketmasterAttractionId?: Maybe<Scalars['String']['output']>;
  readonly ticketsURL?: Maybe<Scalars['String']['output']>;
  readonly tourcastURI?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastURL?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastURLWeb?: Maybe<Scalars['String']['output']>;
  readonly tournamentCategoryInfo?: Maybe<TournamentCategoryInfo>;
  readonly tournamentResultsMessage?: Maybe<TournamentResultsMessage>;
  readonly webviewBrowserControls: Scalars['Boolean']['output'];
};

export type TournamentOverviewInfo = {
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

export type TournamentPlayoffScorecards = {
  readonly __typename: 'TournamentPlayoffScorecards';
  readonly playoffs: ReadonlyArray<PlayoffScorecard>;
  readonly tournamentId: Scalars['ID']['output'];
};

export type TournamentRecap = {
  readonly __typename: 'TournamentRecap';
  readonly courses: ReadonlyArray<TournamentRecapCourse>;
  readonly durationDate: Scalars['String']['output'];
  readonly newsArticles: ReadonlyArray<NewsArticle>;
  readonly tournamentId: Scalars['String']['output'];
  readonly videos: ReadonlyArray<Video>;
};

export type TournamentRecapCourse = {
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

export type TournamentResultOverview = {
  readonly __typename: 'TournamentResultOverview';
  readonly courseCity: Scalars['String']['output'];
  readonly courseCountry: Scalars['String']['output'];
  readonly courseName: Scalars['String']['output'];
  readonly courseState?: Maybe<Scalars['String']['output']>;
  readonly displaySeason: Scalars['String']['output'];
  readonly tournamentId: Scalars['String']['output'];
  readonly tournamentLogo: Scalars['String']['output'];
  readonly tournamentLogoAsset: ImageAsset;
  readonly tournamentName: Scalars['String']['output'];
};

export type TournamentResultPill = {
  readonly __typename: 'TournamentResultPill';
  readonly tournamentName: Scalars['String']['output'];
  readonly tournamentNum: Scalars['ID']['output'];
};

export type TournamentResults = {
  readonly __typename: 'TournamentResults';
  readonly cupEyebrowText: Scalars['String']['output'];
  readonly overview: ReadonlyArray<PlayerProfileInfoItem>;
  readonly overviewInfo?: Maybe<TournamentOverviewInfo>;
  readonly tournamentNum: Scalars['ID']['output'];
  readonly tournamentOverview?: Maybe<TournamentResultOverview>;
  readonly tournaments: ReadonlyArray<PlayerProfileTournamentRow>;
};

export type TournamentResultsMessage = {
  readonly __typename: 'TournamentResultsMessage';
  readonly message?: Maybe<Scalars['String']['output']>;
};

export type TournamentRightRailConfig = {
  readonly __typename: 'TournamentRightRailConfig';
  readonly buttonLink?: Maybe<Scalars['String']['output']>;
  readonly buttonText?: Maybe<Scalars['String']['output']>;
  readonly imageAltText: Scalars['String']['output'];
  readonly imageUrl: Scalars['String']['output'];
};

export type TournamentStatus =
  | 'COMPLETED'
  | 'IN_PROGRESS'
  | 'NOT_STARTED';

export type TournamentTeamChampion = {
  readonly __typename: 'TournamentTeamChampion';
  readonly players: ReadonlyArray<TournamentChampion>;
};

export type TournamentWeather = {
  readonly __typename: 'TournamentWeather';
  readonly condition: WeatherCondition;
  readonly humidity: Scalars['String']['output'];
  /** @deprecated use logoAsset */
  readonly logo?: Maybe<Scalars['String']['output']>;
  readonly logoAccessibility: Scalars['String']['output'];
  readonly logoAsset: ImageAsset;
  /** @deprecated use logoDarkAsset */
  readonly logoDark?: Maybe<Scalars['String']['output']>;
  readonly logoDarkAsset: ImageAsset;
  readonly precipitation: Scalars['String']['output'];
  readonly tempC: Scalars['String']['output'];
  readonly tempF: Scalars['String']['output'];
  readonly windDirection: WindDirection;
  readonly windSpeedKPH: Scalars['String']['output'];
  readonly windSpeedMPH: Scalars['String']['output'];
};

export type TournamentsPillConfig = {
  readonly __typename: 'TournamentsPillConfig';
  readonly currentSeason: Scalars['Int']['output'];
};

export type TspPlayer = {
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
  readonly rankingMovement: CupRankMovementDirection;
  readonly rankingMovementAmount: Scalars['String']['output'];
  readonly shortName: Scalars['String']['output'];
};

export type TspPlayerHole = {
  readonly __typename: 'TspPlayerHole';
  readonly inTheHoleTimestamp?: Maybe<Scalars['AWSTimestamp']['output']>;
  readonly playComplete?: Maybe<Scalars['Boolean']['output']>;
  readonly playerId: Scalars['ID']['output'];
  readonly playerTotal?: Maybe<Scalars['String']['output']>;
  readonly statsScoreId?: Maybe<Scalars['String']['output']>;
  readonly status?: Maybe<HoleScoreStatus>;
  readonly strokes: Scalars['Int']['output'];
  readonly strokesValue: Scalars['String']['output'];
};

export type TspPlayoff = {
  readonly __typename: 'TspPlayoff';
  readonly currentHole: Scalars['Int']['output'];
  readonly holes: ReadonlyArray<PlayoffHole>;
  readonly location?: Maybe<Scalars['String']['output']>;
  readonly teams: ReadonlyArray<PlayoffTeams>;
  readonly thru?: Maybe<Scalars['String']['output']>;
};

export type TspScPlayer = {
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

export type TspStrokePlayer = {
  readonly __typename: 'TspStrokePlayer';
  readonly color?: Maybe<Scalars['String']['output']>;
  readonly displayName?: Maybe<Scalars['String']['output']>;
  readonly firstName?: Maybe<Scalars['String']['output']>;
  readonly lastName?: Maybe<Scalars['String']['output']>;
  readonly playerId?: Maybe<Scalars['Int']['output']>;
  readonly playerIdString?: Maybe<Scalars['String']['output']>;
  readonly shortName?: Maybe<Scalars['String']['output']>;
};

export type TspTeamHole = {
  readonly __typename: 'TspTeamHole';
  readonly inTheHoleTimestamp?: Maybe<Scalars['AWSTimestamp']['output']>;
  readonly playComplete?: Maybe<Scalars['Boolean']['output']>;
  readonly statsScoreId?: Maybe<Scalars['String']['output']>;
  readonly status?: Maybe<HoleScoreStatus>;
  readonly strokes: Scalars['Int']['output'];
  readonly strokesValue: Scalars['String']['output'];
  readonly teamId: Scalars['ID']['output'];
  readonly teamTotal?: Maybe<Scalars['String']['output']>;
};

export type TspTeamRow = {
  readonly __typename: 'TspTeamRow';
  readonly backNine: Scalars['Boolean']['output'];
  readonly courseId: Scalars['String']['output'];
  readonly currentRound: Scalars['Int']['output'];
  readonly groupNumber: Scalars['Int']['output'];
  readonly leaderboardSortOrder: Scalars['Int']['output'];
  readonly movementAmount: Scalars['String']['output'];
  readonly movementDirection: LeaderboardMovement;
  readonly oddsOptionId?: Maybe<Scalars['String']['output']>;
  readonly oddsSort?: Maybe<Scalars['Float']['output']>;
  readonly oddsSwing?: Maybe<OddsSwing>;
  readonly oddsToWin?: Maybe<Scalars['String']['output']>;
  readonly players: ReadonlyArray<TspPlayer>;
  readonly position: Scalars['String']['output'];
  readonly rounds: ReadonlyArray<Scalars['String']['output']>;
  readonly score: Scalars['String']['output'];
  readonly scoreSort: Scalars['Int']['output'];
  readonly startHole?: Maybe<Scalars['String']['output']>;
  readonly status?: Maybe<PlayerState>;
  readonly teamId: Scalars['ID']['output'];
  readonly teamName: Scalars['String']['output'];
  readonly teamStoryContentInfo: ReadonlyArray<TeamStoryContentInfo>;
  readonly teeTime: Scalars['AWSTimestamp']['output'];
  readonly thru: Scalars['String']['output'];
  readonly thruSort: Scalars['Int']['output'];
  readonly total: Scalars['String']['output'];
  readonly totalSort: Scalars['Int']['output'];
  readonly totalStrokes: Scalars['String']['output'];
};

export type TspWinner = {
  readonly __typename: 'TspWinner';
  readonly points?: Maybe<Scalars['String']['output']>;
  readonly purse?: Maybe<Scalars['String']['output']>;
  readonly teamId: Scalars['ID']['output'];
  readonly totalScore: Scalars['String']['output'];
  readonly totalStrokes: Scalars['Int']['output'];
  readonly winningTeam: ReadonlyArray<TspWinningPlayer>;
};

export type TspWinningPlayer = {
  readonly __typename: 'TspWinningPlayer';
  readonly countryFlag: Scalars['String']['output'];
  readonly countryName: Scalars['String']['output'];
  readonly firstName: Scalars['String']['output'];
  /** @deprecated URL should be built using player ID */
  readonly headshot: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
  readonly lastName: Scalars['String']['output'];
};

export type TwoColumn = {
  readonly __typename: 'TwoColumn';
  readonly sectionOne?: Maybe<ReadonlyArray<Maybe<NewsArticleNode>>>;
  readonly sectionOneTitle?: Maybe<Scalars['String']['output']>;
  readonly sectionTwo?: Maybe<ReadonlyArray<Maybe<NewsArticleNode>>>;
  readonly sectionTwoTitle?: Maybe<Scalars['String']['output']>;
};

export type UniversityRankColor =
  | 'BLACK'
  | 'BLUE'
  | 'GOLD'
  | 'GRAY';

export type UniversityRankingPlayer = {
  readonly __typename: 'UniversityRankingPlayer';
  readonly avg: Scalars['String']['output'];
  readonly country: Scalars['String']['output'];
  readonly displayName: Scalars['String']['output'];
  readonly events: Scalars['Int']['output'];
  readonly playerId: Scalars['ID']['output'];
  readonly rank: Scalars['Int']['output'];
  readonly rankColor: UniversityRankColor;
  readonly rankingMovement: CupRankMovementDirection;
  readonly rankingMovementAmount: Scalars['String']['output'];
  readonly rankingMovementAmountSort: Scalars['Int']['output'];
  readonly schoolName: Scalars['String']['output'];
  readonly top10: Scalars['Int']['output'];
  readonly tournaments: ReadonlyArray<UniversityRankingsTournament>;
  readonly wins: Scalars['Int']['output'];
};

export type UniversityRankings = {
  readonly __typename: 'UniversityRankings';
  readonly description: Scalars['String']['output'];
  readonly disclaimer?: Maybe<Scalars['String']['output']>;
  readonly displayYear: Scalars['String']['output'];
  readonly players: ReadonlyArray<UniversityRankingPlayer>;
  readonly sponsorImage?: Maybe<Scalars['String']['output']>;
  readonly sponsorName: Scalars['String']['output'];
  readonly throughText: Scalars['String']['output'];
  readonly title: Scalars['String']['output'];
  readonly weekNum: Scalars['Int']['output'];
  readonly weekPills: ReadonlyArray<StatWeekPill>;
  readonly year: Scalars['Int']['output'];
  readonly yearPills: ReadonlyArray<StatYearPills>;
};

export type UniversityRankingsTournament = {
  readonly __typename: 'UniversityRankingsTournament';
  readonly finishPosition: Scalars['String']['output'];
  readonly name: Scalars['String']['output'];
  readonly playedYear: Scalars['Int']['output'];
  readonly points: Scalars['String']['output'];
  readonly week: Scalars['Int']['output'];
};

export type UniversityTotalPoints = {
  readonly __typename: 'UniversityTotalPoints';
  readonly description: Scalars['String']['output'];
  readonly footerInfo?: Maybe<NewsArticleParagraph>;
  readonly headerInfo?: Maybe<NewsArticleParagraph>;
  readonly headers: ReadonlyArray<Scalars['String']['output']>;
  readonly players: ReadonlyArray<UniversityTotalPointsPlayer>;
  readonly season: Scalars['Int']['output'];
  readonly seasonNavigation: ReadonlyArray<UniversityTotalPointsPill>;
  /** @deprecated use sponsorLogoAsset */
  readonly sponsorLogo?: Maybe<Scalars['String']['output']>;
  readonly sponsorLogoAsset: ImageAsset;
  readonly sponsorText?: Maybe<Scalars['String']['output']>;
  readonly title: Scalars['String']['output'];
  readonly week: Scalars['Int']['output'];
  readonly weekNavigation: ReadonlyArray<UniversityTotalPointsPill>;
};

export type UniversityTotalPointsPill = {
  readonly __typename: 'UniversityTotalPointsPill';
  readonly displayText: Scalars['String']['output'];
  readonly value: Scalars['Int']['output'];
};

export type UniversityTotalPointsPlayer = {
  readonly __typename: 'UniversityTotalPointsPlayer';
  readonly data: ReadonlyArray<Scalars['String']['output']>;
  readonly playerId: Scalars['ID']['output'];
  readonly playerName: Scalars['String']['output'];
  readonly rank: Scalars['String']['output'];
  readonly rankSort: Scalars['Int']['output'];
  readonly rankingMovement: CupRankMovementDirection;
  readonly rankingMovementAmount: Scalars['String']['output'];
  readonly rankingMovementAmountSort: Scalars['Int']['output'];
  readonly tournaments: ReadonlyArray<UniversityRankingsTournament>;
};

export type UnorderedListNode = {
  readonly __typename: 'UnorderedListNode';
  readonly historicalTournamentOddsArgs?: Maybe<HistoricalTournamentOddsArgs>;
  readonly items: ReadonlyArray<ListItem>;
  readonly ordered?: Maybe<Scalars['Boolean']['output']>;
};

export type UnsubscribeResponse = {
  readonly __typename: 'UnsubscribeResponse';
  readonly ok: Scalars['Boolean']['output'];
};

export type UpcomingBroadcastNetwork = {
  readonly __typename: 'UpcomingBroadcastNetwork';
  readonly networks: ReadonlyArray<BroadcastNetwork>;
  readonly tournamentId: Scalars['String']['output'];
};

export type UpcomingBroadcastNetworks = {
  readonly __typename: 'UpcomingBroadcastNetworks';
  readonly upcomingNetworks: ReadonlyArray<UpcomingBroadcastNetwork>;
};

export type UpcomingMatch = {
  readonly __typename: 'UpcomingMatch';
  readonly isConsolationMatch: Scalars['Boolean']['output'];
  readonly matchId: Scalars['String']['output'];
  readonly potentialPlayers: ReadonlyArray<UpcomingMatchPotentialPlayer>;
};

export type UpcomingMatchPotentialPlayer = {
  readonly __typename: 'UpcomingMatchPotentialPlayer';
  readonly isKnown: Scalars['Boolean']['output'];
  readonly nameLabel: Scalars['String']['output'];
  readonly players: ReadonlyArray<MpLeaderboardPlayer>;
  readonly relationshipLabel?: Maybe<Scalars['String']['output']>;
};

export type Video = {
  readonly __typename: 'Video';
  /** @deprecated No longer supported */
  readonly accountId?: Maybe<Scalars['String']['output']>;
  readonly categories?: Maybe<ReadonlyArray<RyderCupContentCategories>>;
  readonly category: Scalars['String']['output'];
  readonly categoryDisplayName: Scalars['String']['output'];
  readonly contentTournamentId?: Maybe<Scalars['String']['output']>;
  readonly created?: Maybe<Scalars['AWSTimestamp']['output']>;
  readonly description?: Maybe<Scalars['String']['output']>;
  readonly descriptionNode?: Maybe<ReadonlyArray<VideoDescription>>;
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
  readonly playerVideos?: Maybe<ReadonlyArray<PlayerVideo>>;
  readonly players?: Maybe<ReadonlyArray<RyderCupContentPlayer>>;
  readonly poster: Scalars['String']['output'];
  readonly pubdate: Scalars['AWSTimestamp']['output'];
  readonly publishDate?: Maybe<Scalars['String']['output']>;
  readonly rating?: Maybe<Scalars['String']['output']>;
  readonly roundNumber?: Maybe<Scalars['String']['output']>;
  readonly seqHoleNumber?: Maybe<Scalars['String']['output']>;
  readonly shareUrl?: Maybe<Scalars['String']['output']>;
  readonly shotNumber?: Maybe<Scalars['String']['output']>;
  readonly sponsor?: Maybe<VideoSponsor>;
  readonly startsAt?: Maybe<Scalars['AWSTimestamp']['output']>;
  readonly tags?: Maybe<ReadonlyArray<RyderCupContentTags>>;
  readonly team?: Maybe<RyderCupTeamType>;
  /** @deprecated Use thumbnailAsset */
  readonly thumbnail: Scalars['String']['output'];
  readonly thumbnailAsset: ImageAsset;
  readonly title: Scalars['String']['output'];
  readonly topics?: Maybe<ReadonlyArray<ContentTopics>>;
  readonly tourCode: Scalars['String']['output'];
  readonly tournamentId?: Maybe<Scalars['String']['output']>;
  readonly videoAccountId?: Maybe<Scalars['String']['output']>;
  readonly year?: Maybe<Scalars['String']['output']>;
  readonly years?: Maybe<ReadonlyArray<Maybe<Scalars['String']['output']>>>;
};

export type VideoDescription = NewsArticleLink | NewsArticleText;

export type VideoFilterPillConfig = {
  readonly __typename: 'VideoFilterPillConfig';
  readonly franchises: ReadonlyArray<Franchise>;
  readonly pinnedFranchises: ReadonlyArray<Franchise>;
};

export type VideoHero = {
  readonly __typename: 'VideoHero';
  readonly gtmAssetKey?: Maybe<Scalars['String']['output']>;
  readonly partnershipAsset?: Maybe<Scalars['String']['output']>;
  readonly partnershipText?: Maybe<Scalars['String']['output']>;
  readonly sectionTitle?: Maybe<Scalars['String']['output']>;
  readonly tourcastWebviewLink?: Maybe<Scalars['String']['output']>;
  readonly video?: Maybe<Video>;
  readonly videos: ReadonlyArray<Video>;
};

export type VideoLanguage =
  | 'ENGLISH'
  | 'FRENCH';

export type VideoNavigation = {
  readonly __typename: 'VideoNavigation';
  readonly items: ReadonlyArray<VideoPill>;
  readonly liveOverride: LiveOverride;
  readonly tourCode: TourCode;
};

export type VideoPill = {
  readonly __typename: 'VideoPill';
  readonly defaultView: Scalars['Boolean']['output'];
  readonly displayText: Scalars['String']['output'];
  readonly enabledCompanionPills?: Maybe<ReadonlyArray<VideoPillType>>;
  readonly pillConfig?: Maybe<VideoPillConfig>;
  readonly videoPillType: VideoPillType;
};

export type VideoPillConfig = FranchisePillConfig | TopicStoriesPillConfig | TournamentsPillConfig | VideoFilterPillConfig;

export type VideoPillType =
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

export type VideoSponsor = {
  readonly __typename: 'VideoSponsor';
  readonly description?: Maybe<Scalars['String']['output']>;
  readonly gam?: Maybe<Scalars['String']['output']>;
  readonly image?: Maybe<Scalars['String']['output']>;
  /** @deprecated use logoAsset */
  readonly logo: Scalars['String']['output'];
  readonly logoAsset: ImageAsset;
  /** @deprecated use logoDarkAsset */
  readonly logoDark: Scalars['String']['output'];
  readonly logoDarkAsset: ImageAsset;
  readonly logoPrefix?: Maybe<Scalars['String']['output']>;
  readonly name: Scalars['String']['output'];
  readonly websiteUrl?: Maybe<Scalars['String']['output']>;
};

export type WatchLanding = {
  readonly __typename: 'WatchLanding';
  /** @deprecated Use featuredVideos array */
  readonly featuredVideo?: Maybe<Video>;
  readonly featuredVideos?: Maybe<ReadonlyArray<Video>>;
  readonly landingSections: ReadonlyArray<WatchLandingSection>;
  readonly mobileVideos?: Maybe<ReadonlyArray<Video>>;
  readonly mobileWebVideoLimit: Scalars['Int']['output'];
  readonly tourCode: TourCode;
};

export type WatchLandingSection = {
  readonly __typename: 'WatchLandingSection';
  readonly pillConfig?: Maybe<VideoPillConfig>;
  readonly title: Scalars['String']['output'];
  readonly videoPillType: VideoPillType;
  readonly videos: ReadonlyArray<Video>;
};

export type WeatherCondition =
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

export type WeatherDetails = {
  readonly __typename: 'WeatherDetails';
  readonly condition: WeatherCondition;
  readonly humidity: Scalars['String']['output'];
  readonly precipitation: Scalars['String']['output'];
  readonly temperature: WeatherTemp;
  readonly title: Scalars['String']['output'];
  readonly windDirection: WindDirection;
  readonly windSpeedKPH: Scalars['String']['output'];
  readonly windSpeedMPH: Scalars['String']['output'];
};

export type WeatherNotes = {
  readonly __typename: 'WeatherNotes';
  readonly notes: ReadonlyArray<Scalars['String']['output']>;
  readonly weather: ReadonlyArray<DayWeather>;
};

export type WeatherSummary = {
  readonly __typename: 'WeatherSummary';
  readonly accessibilityText?: Maybe<Scalars['String']['output']>;
  readonly daily: ReadonlyArray<WeatherDetails>;
  readonly hourly: ReadonlyArray<WeatherDetails>;
  /** @deprecated use modalSponsorLogoAsset */
  readonly modalSponsorLogo?: Maybe<Scalars['String']['output']>;
  readonly modalSponsorLogoAsset: ImageAsset;
  /** @deprecated use modalSponsorLogoDarkAsset */
  readonly modalSponsorLogoDark?: Maybe<Scalars['String']['output']>;
  readonly modalSponsorLogoDarkAsset: ImageAsset;
  readonly sponsorDescription?: Maybe<Scalars['String']['output']>;
  readonly sponsorLink?: Maybe<Scalars['String']['output']>;
  /** @deprecated use sponsorLogoAsset */
  readonly sponsorLogo?: Maybe<Scalars['String']['output']>;
  readonly sponsorLogoAsset: ImageAsset;
  /** @deprecated use sponsorLogoDarkAsset */
  readonly sponsorLogoDark?: Maybe<Scalars['String']['output']>;
  readonly sponsorLogoDarkAsset: ImageAsset;
  readonly title: Scalars['String']['output'];
};

export type WeatherTemp = RangeWeatherTemp | StandardWeatherTemp;

export type WindDirection =
  | 'EAST'
  | 'NORTH'
  | 'NORTH_EAST'
  | 'NORTH_WEST'
  | 'SOUTH'
  | 'SOUTH_EAST'
  | 'SOUTH_WEST'
  | 'WEST';

export type Winner = {
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
  readonly roundScores?: Maybe<ReadonlyArray<WinnerRoundScore>>;
  readonly seed?: Maybe<Scalars['String']['output']>;
  readonly totalScore: Scalars['String']['output'];
  readonly totalStrokes: Scalars['Int']['output'];
  readonly winnerIcon?: Maybe<WinnerIcon>;
};

export type WinnerIcon = {
  readonly __typename: 'WinnerIcon';
  readonly color: Scalars['String']['output'];
  readonly label: Scalars['String']['output'];
  readonly title: Scalars['String']['output'];
  readonly type: WinnerIconType;
};

export type WinnerIconType =
  | 'BRONZE'
  | 'GOLD'
  | 'SILVER';

export type WinnerRoundScore = {
  readonly __typename: 'WinnerRoundScore';
  readonly label: Scalars['String']['output'];
  readonly total: Scalars['String']['output'];
};

export type YtActivationData = {
  readonly __typename: 'YTActivationData';
  readonly data: Scalars['String']['output'];
  readonly description?: Maybe<Scalars['String']['output']>;
  readonly title?: Maybe<Scalars['String']['output']>;
};

export type YtAdInterstitialCard = {
  readonly __typename: 'YTAdInterstitialCard';
  readonly adUrl: Scalars['String']['output'];
  readonly props: YtCardProps;
};

export type YtArticleCard = {
  readonly __typename: 'YTArticleCard';
  readonly props: YtCardProps;
  readonly title: Scalars['String']['output'];
};

export type YtCardCtaProps = {
  readonly __typename: 'YTCardCtaProps';
  readonly color?: Maybe<Scalars['String']['output']>;
  readonly isTourCastCta: Scalars['Boolean']['output'];
  readonly link: Scalars['String']['output'];
  readonly text: Scalars['String']['output'];
};

export type YtCardProps = {
  readonly __typename: 'YTCardProps';
  readonly backgroundColor?: Maybe<Scalars['String']['output']>;
  readonly cardFranchise?: Maybe<ReadonlyArray<Scalars['String']['output']>>;
  readonly cardHeading?: Maybe<Scalars['String']['output']>;
  readonly cardName?: Maybe<Scalars['String']['output']>;
  readonly cardSubHead?: Maybe<Scalars['String']['output']>;
  readonly cta?: Maybe<YtCardCtaProps>;
  readonly ctaText?: Maybe<Scalars['String']['output']>;
  readonly date: Scalars['AWSTimestamp']['output'];
  readonly deepLink: Scalars['String']['output'];
  readonly deepLinkCard: Scalars['Boolean']['output'];
  readonly disableSlowZoom: Scalars['Boolean']['output'];
  /** @deprecated use imageAsset */
  readonly image?: Maybe<Scalars['String']['output']>;
  readonly imageAsset?: Maybe<ImageAsset>;
  readonly link: Scalars['String']['output'];
  readonly opacity: Scalars['Float']['output'];
  /** @deprecated use sponsorLogoAsset */
  readonly sponsorLogo?: Maybe<Scalars['String']['output']>;
  readonly sponsorLogoAsset: ImageAsset;
  readonly sponsorText?: Maybe<Scalars['String']['output']>;
  readonly textColor: Scalars['String']['output'];
  readonly textPosition: YtTextPosition;
  readonly tourCastCta: Scalars['Boolean']['output'];
  readonly videoId?: Maybe<Scalars['String']['output']>;
};

export type YtCardSponsorProps = {
  readonly __typename: 'YTCardSponsorProps';
  readonly activationData: ReadonlyArray<YtActivationData>;
  readonly activationSubtitle: Scalars['String']['output'];
  readonly activationTitle: Scalars['String']['output'];
  /** @deprecated use sponsorLogoAsset */
  readonly sponsorLogo: Scalars['String']['output'];
  readonly sponsorLogoAsset: ImageAsset;
  /** @deprecated use tournamentLogoAsset */
  readonly tournamentLogo: Scalars['String']['output'];
  readonly tournamentLogoAsset: ImageAsset;
  readonly tournamentName: Scalars['String']['output'];
};

export type YtCoverCard = {
  readonly __typename: 'YTCoverCard';
  readonly props: YtCardProps;
  readonly subTitle?: Maybe<Scalars['String']['output']>;
  readonly title: Scalars['String']['output'];
};

export type YtHighlightCard = {
  readonly __typename: 'YTHighlightCard';
  readonly hole?: Maybe<Scalars['String']['output']>;
  readonly props: YtCardProps;
  readonly title: Scalars['String']['output'];
};

export type YtLeaderboardCard = {
  readonly __typename: 'YTLeaderboardCard';
  readonly players: ReadonlyArray<YtPlayer>;
  readonly props: YtCardProps;
  readonly title: Scalars['String']['output'];
  readonly tournament: YtTournament;
};

export type YtNuggetCard = {
  readonly __typename: 'YTNuggetCard';
  readonly props: YtCardProps;
  readonly subText: Scalars['String']['output'];
  readonly title: Scalars['String']['output'];
};

export type YtPlayer = {
  readonly __typename: 'YTPlayer';
  readonly id: Scalars['String']['output'];
  readonly name: Scalars['String']['output'];
};

export type YtRound = {
  readonly __typename: 'YTRound';
  readonly roundDisplay: Scalars['String']['output'];
  readonly roundNumber: Scalars['Int']['output'];
};

export type YtScorecardCard = {
  readonly __typename: 'YTScorecardCard';
  readonly player: YtPlayer;
  readonly props: YtCardProps;
  readonly title: Scalars['String']['output'];
  readonly tournament: YtTournament;
};

export type YtSponsorActivationCard = {
  readonly __typename: 'YTSponsorActivationCard';
  readonly props: YtCardProps;
  readonly sponsorProps: YtCardSponsorProps;
  readonly subTitle?: Maybe<Scalars['String']['output']>;
  readonly title: Scalars['String']['output'];
};

export type YtTextPosition =
  | 'BOTTOM'
  | 'TOP';

export type YtTournament = {
  readonly __typename: 'YTTournament';
  readonly id: Scalars['String']['output'];
  readonly round: YtRound;
};

export type YtTournamentUpdateCard = {
  readonly __typename: 'YTTournamentUpdateCard';
  readonly props: YtCardProps;
  readonly title: Scalars['String']['output'];
};

export type YourTourCard = YtAdInterstitialCard | YtArticleCard | YtCoverCard | YtHighlightCard | YtLeaderboardCard | YtNuggetCard | YtScorecardCard | YtSponsorActivationCard | YtTournamentUpdateCard;

export type YourTourNews = NewsArticle | Video;

export type YourTourStory = {
  readonly __typename: 'YourTourStory';
  readonly cardTopic?: Maybe<Scalars['String']['output']>;
  readonly cards: ReadonlyArray<YourTourCard>;
  readonly homeCard?: Maybe<YourTourCard>;
  readonly id: Scalars['ID']['output'];
  readonly tglMatchIds?: Maybe<ReadonlyArray<Scalars['String']['output']>>;
  readonly videoStories: ReadonlyArray<YtVideoStory>;
};

export type YtVideoStory = {
  readonly __typename: 'YtVideoStory';
  readonly topicLabel?: Maybe<Scalars['String']['output']>;
  readonly type: YtVideoStoryType;
};

export type YtVideoStoryType =
  | 'PLAYER_STORIES'
  | 'TOPIC_STORIES';


type Properties<T> = Required<{
  [K in keyof T]: z.ZodType<T[K]>;
}>;

type definedNonNullAny = {};

export const isDefinedNonNullAny = (v: any): v is definedNonNullAny => v !== undefined && v !== null;

export const definedNonNullAnySchema = z.any().refine((v) => isDefinedNonNullAny(v));

export const ArticleFormTypeSchema = z.enum(['External', 'Standard']);

export const ArticleSponsorSchema = z.enum(['GOLFWRX']);

export const BubbleTypeSchema = z.enum(['PLAYOFFS', 'SIGNATURE_EVENTS']);

export const CategoryStatTypeSchema = z.enum(['EVENT', 'YTD']);

export const ContentTypeSchema = z.enum(['CONTENT_FRAGMENTS', 'CONTENT_TABS', 'GENERIC_CONTENT', 'NEWS_ARTICLE', 'RYDER_CUP_CONTENT_FRAGMENTS', 'RYDER_CUP_CONTENT_TABS', 'RYDER_CUP_GENERIC_CONTENT', 'RYDER_CUP_NEWS_ARTICLE']);

export const CourseStatsIdSchema = z.enum(['TOUGHEST_COURSE', 'TOUGHEST_HOLES']);

export const CupLeaderboardTeamStatusSchema = z.enum(['BEHIND', 'LEADS', 'TIED', 'UNKNOWN', 'WINS']);

export const CupOverviewDisplayTypeSchema = z.enum(['POINTS_ONLY', 'PROGRESS']);

export const CupRankMovementDirectionSchema = z.enum(['CONSTANT', 'DOWN', 'UNKNOWN', 'UP']);

export const CupRoundFormatSchema = z.enum(['ALTERNATE_SHOT', 'BEST_BALL', 'SINGLES']);

export const DrawerDisplayStateSchema = z.enum(['HOLE_ONLY', 'PLAY_BY_PLAY', 'ROUND_COMPLETE', 'TEE_TIME']);

export const EventRegionSchema = z.enum(['EUROPE', 'INTERNATIONAL', 'US']);

export const FieldStatTypeSchema = z.enum(['COURSE_FIT', 'CURRENT_FORM', 'TOURNAMENT_HISTORY']);

export const FormatTypeSchema = z.enum(['MATCH_PLAY', 'STABLEFORD', 'STROKE_PLAY', 'TEAM_CUP', 'TEAM_STROKE']);

export const GroupHoleLocationSchema = z.enum(['COMPLETE', 'FAIRWAY', 'GREEN', 'NOT_STARTED', 'TEE', 'UNKNOWN']);

export const HeaderTypeSchema = z.enum(['LONG', 'SHORT']);

export const HistoricalOddsIdSchema = z.enum(['TOP_RANKED_3', 'TOP_RANKED_5', 'TOP_RANKED_10', 'TOP_RANKED_20', 'WINNER']);

export const HoleDetailsAvailabilitySchema = z.enum(['NONE', 'SHOT_DETAILS', 'STATS']);

export const HolePickleTypeSchema = z.enum(['STANDARD', 'TOURCAST_2D']);

export const HolePlayedStatusSchema = z.enum(['PLAYED', 'UNPLAYED']);

export const HoleScoreStatusSchema = z.enum(['BIRDIE', 'BOGEY', 'CONCEDED', 'DOUBLE_BOGEY', 'EAGLE', 'NONE', 'PAR']);

export const HoleStrokeTypeSchema = z.enum(['DROP', 'PENALTY', 'PROVISIONAL', 'STROKE']);

export const HomePageLeadLayoutSchema = z.enum(['HALF_HERO', 'HALF_HERO_STACK', 'HERO_STATUS', 'HERO_STORY', 'PLAYER_STORIES', 'TOPIC_STORIES']);

export const HomePageNewsLayoutSchema = z.enum(['THREE_UP_ASSET', 'TWO_UP_LARGE', 'TWO_UP_SMALL', 'TWO_UP_TEXT_ONLY']);

export const HomePageProgramStandingLayoutSchema = z.enum(['FIELD_PROMO_SECTION', 'NORMAL', 'SHORT', 'SIGNATURE_EVENT_STANDINGS', 'TWO_STANDINGS']);

export const IconSchema = z.enum(['AMATEUR', 'BACKNINE', 'CUSTOM_ICON', 'DISQUALIFIED', 'FAVORITES', 'HOT_STREAK', 'LIVE', 'ODDS_IMPROVED', 'ODDS_WORSENED', 'PLAYOFF_WIN', 'PREVIOUSROUND', 'SPONSOR', 'SUDDEN_DEATH', 'TOP_FEDEX_FALL_PLAYER', 'TOUR_BOUND', 'UPCOMING', 'WITHDRAW']);

export const IntegrationPartnerSchema = z.enum(['GOLFWRX']);

export const LeaderboardFeatureSchema = z.enum(['HOLE_BY_HOLE', 'ODDS', 'PROBABILITIES', 'SHOT_DETAILS', 'STROKES_GAINED']);

export const LeaderboardMessageIconSchema = z.enum(['DELAY', 'NONE', 'WEATHER']);

export const LeaderboardMovementSchema = z.enum(['CONSTANT', 'DOWN', 'UP']);

export const LeaderboardPlayerIconSchema = z.enum(['HOT_STREAK']);

export const LeaderboardStatsTypeSchema = z.enum(['ODDS', 'PROBABILITY', 'STROKES_GAINED']);

export const LiveOverrideSchema = z.enum(['FORCE_OFF', 'FORCE_ON', 'NORMAL']);

export const LiveStatusSchema = z.enum(['LIVE', 'NONE', 'UPCOMING']);

export const MatchStatusSchema = z.enum(['COMPLETE', 'IN_PROGRESS', 'UPCOMING']);

export const NewsArticleStatTypeSchema = z.enum(['BY_NUMBERS', 'DOT_CHART', 'LINE_CHART']);

export const NewsLetterTypeSchema = z.enum(['GLOBAL', 'TOURNAMENT']);

export const OddsFormatSchema = z.enum(['DECIMAL', 'FRACTIONAL', 'MONEYLINE']);

export const OddsMarketTypeSchema = z.enum(['FINISHES', 'GROUP_WINNER', 'MATCHUP', 'NATIONALITY', 'PLAYER_PROPS', 'WINNER']);

export const OddsProviderSchema = z.enum(['BET365', 'DRAFTKINGS', 'ESPNBET', 'FANDUEL', 'MGM']);

export const OddsSwingSchema = z.enum(['CONSTANT', 'DOWN', 'UP']);

export const OddsTimeTypeSchema = z.enum(['HOLE']);

export const OrientationSchema = z.enum(['Landscape', 'Portrait']);

export const PlatformSchema = z.enum(['ANDROID', 'IOS', 'WEB']);

export const PlayerComparisonCategorySchema = z.enum(['APPROACH_GREEN', 'AROUND_GREEN', 'OFF_TEE', 'PUTTING', 'SCORING', 'STROKES_GAINED']);

export const PlayerComparisonDisplaySchema = z.enum(['GRAPH', 'TABLE']);

export const PlayerHubLeaderboardWidgetDisplaySchema = z.enum(['INACTIVE', 'IN_PROGRESS', 'TOURNAMENT_OFFICIAL']);

export const PlayerHubMessageBannerActionSchema = z.enum(['LEADERBOARD', 'NONE', 'PROFILE', 'SCORECARD']);

export const PlayerHubWidgetIconSchema = z.enum(['AI', 'CALENDAR', 'CLOCK', 'LEADERBOARD', 'NEWS', 'NONE', 'PIE_CHART', 'PROFILE', 'SCORECARD', 'TOURCAST']);

export const PlayerProfileStatCategoryItemSchema = z.enum(['ALL', 'APPROACH', 'AROUND_GREEN', 'DRIVING', 'MONEY_FINISHES', 'PACE_OF_PLAY', 'POINTS_RANKINGS', 'PUTTING', 'SCORING', 'STREAKS', 'STROKES_GAINED']);

export const PlayerSponsorBrandSchema = z.enum(['ACE', 'ADAM_SCOTT', 'ADIDAS', 'ADP', 'AMAZON', 'AON', 'BONOBOS', 'BRANDT_SNEDEKER', 'BRIDGESTONE_GOLF', 'CALLAWAY', 'CALLAWAY_FEED', 'CAMERON_PERCY', 'CLEVELANDGOLF', 'CLEVELANDGOLF_FEED', 'COBRA', 'COBRAPUMA', 'CONCUR', 'COUNTRYINNS', 'EMPOWER_RETIREMENT', 'FEDEX', 'GOLDMAN_SACHS', 'GOLFFOREVER', 'GREYGOOSE', 'HONMA', 'IAN_POULTER', 'JORDAN_SPIETH', 'LEVELWEAR', 'MASSAGE_ENVY', 'MASTERCARD', 'MATT_KUCHAR', 'MERCEDES', 'METLIFE', 'MIZUNO', 'NIKE', 'NIKE_FEED', 'OAKLEY', 'OSTEO_BIFLEX', 'PACIFICLIFE', 'PERRY_ELLIS', 'PGATOURLIVEFRI', 'PGATOURLIVETHURS', 'PHIL_MICKELSON', 'PING', 'PUMA', 'PUTNAM', 'PUTNAM_BRADLEY', 'PUTNAM_CURRAN', 'PUTNAM_STEELE', 'QUICKENLOANS', 'RICKIE_FOWLER', 'RORY_MCILROY', 'SERGIO_GARCIA', 'SIKGOLF', 'SKECHERS', 'STRYKER_FRED', 'STRYKER_HAL', 'SUPERSTROKE', 'TAYLORMADE', 'TEST1', 'TEST2', 'TGLTEAMATL', 'TGLTEAMBOS', 'TGLTEAMJUP', 'TGLTEAMLA', 'TGLTEAMNY', 'TGLTEAMSF', 'TIGER_WOODS', 'TITLEIST', 'TITLEIST_BALL', 'TITLEIST_FULL', 'TMAG', 'TP5', 'UNITED_RENTALS', 'VERITEX', 'ZACH_JOHNSON', 'ZURICH']);

export const PlayerStateSchema = z.enum(['ACTIVE', 'BETWEEN_ROUNDS', 'COMPLETE', 'CUT', 'DISQUALIFIED', 'NOT_STARTED', 'WITHDRAWN']);

export const PlayerTournamentStatusDisplayModeSchema = z.enum(['IN_PROGRESS', 'OFFICIAL', 'TEE_TIMES']);

export const PlayoffDisplayTypeSchema = z.enum(['ALL', 'NONE', 'PLAY_BY_PLAY', 'SCORECARD']);

export const PlayoffScoredTypeSchema = z.enum(['AGGREGATE', 'SUDDEN_DEATH']);

export const PromoSectionTypeSchema = z.enum(['GAMING', 'MORE', 'WEBGOLFBET']);

export const Ryder_Cup_Ranking_TooltipSchema = z.enum(['CAPTAIN_PICK', 'OUTCOME_IQ', 'QUALIFICATION_INFO', 'QUALIFIED_LOGO']);

export const RankingsTeamsSchema = z.enum(['EUROPE', 'USA']);

export const RcBroadcastTypeSchema = z.enum(['AUDIO', 'VIDEO']);

export const RoundFormatSchema = z.enum(['ALTERNATE_SHOT', 'BEST_BALL']);

export const RoundStatusSchema = z.enum(['COMPLETE', 'GROUPINGS_OFFICIAL', 'IN_PROGRESS', 'OFFICIAL', 'SUSPENDED', 'UPCOMING']);

export const RoundStatusColorSchema = z.enum(['BLUE', 'GRAY', 'GREEN', 'RED', 'YELLOW']);

export const RyderCupContentTypeSchema = z.enum(['ALL', 'ARTICLES', 'PHOTO_GALLERY', 'VIDEOS', 'VIDEO_ARTICLES']);

export const RyderCupEventStateSchema = z.enum(['LIVE_WEEK', 'LIVE_WEEKEND', 'OFF_SEASON', 'POINTS_RACE', 'POST_EVENT', 'PRE_EVENT']);

export const RyderCupTeamTypeSchema = z.enum(['BOTH', 'EUROPE', 'USA']);

export const Story_TypeSchema = z.enum(['MOMENTS', 'PLAYER_STORIES', 'TOPIC_STORIES']);

export const ScheduleDisplaySchema = z.enum(['SHOW', 'SHOW_NO_LINK']);

export const ScorecardTabFeatureSchema = z.enum(['EQUIPMENT', 'HIGHLIGHTS', 'ODDS', 'SCORECARD', 'STATS']);

export const ScoringLevelSchema = z.enum(['BASIC', 'STATS', 'TOURCAST']);

export const ScoringTendencySchema = z.enum(['ABOVE', 'BELOW', 'EVEN']);

export const ShotDetailsDisplayTypeSchema = z.enum(['ALL', 'NONE', 'PLAY_BY_PLAY']);

export const SocialTypeSchema = z.enum(['facebook', 'instagram', 'twitter', 'youtube']);

export const StatCategorySchema = z.enum(['APPROACH_GREEN', 'AROUND_GREEN', 'FACTS_AND_FIGURES', 'MONEY_FINISHES', 'OFF_TEE', 'POINTS_RANKINGS', 'PUTTING', 'SCORING', 'STREAKS', 'STROKES_GAINED']);

export const StatCategoryConfigTypeSchema = z.enum(['ALL_TIME_RECORDS', 'TRADITIONAL_STAT']);

export const StatColorSchema = z.enum(['BLACK', 'GRAY', 'GREEN', 'RED']);

export const StatDetailQueryTypeSchema = z.enum(['EVENT_ONLY', 'THROUGH_EVENT']);

export const StatRankMovementSchema = z.enum(['CONSTANT', 'DOWN', 'UP']);

export const SummaryRowTypeSchema = z.enum(['IN', 'OUT', 'TOTAL']);

export const TglMatchStatusSchema = z.enum(['COMPLETE', 'IN_PROGRESS', 'UNKNOWN', 'UPCOMING']);

export const TeeTimesFeatureSchema = z.enum(['GROUPINGS', 'GROUP_TRACKER']);

export const ToughestRoundSchema = z.enum(['ALL', 'FOUR', 'ONE', 'THREE', 'TWO']);

export const TourCodeSchema = z.enum(['C', 'D', 'E', 'H', 'I', 'M', 'P', 'R', 'S', 'U', 'Y']);

export const TourCupTypeSchema = z.enum(['OFFICIAL', 'OFFICIAL_AND_PROJECTED', 'PROJECTED']);

export const TournamentCategorySchema = z.enum(['PLAYOFF', 'SIGNATURE']);

export const TournamentFeatureSchema = z.enum(['COURSE_STATS', 'CUP_TEAMS', 'FEDEXFALL_STANDINGS', 'FIELD', 'GROUP_STAGE', 'LEADERBOARD', 'ODDS', 'OVERVIEW', 'PAST_RESULTS', 'RECAP', 'SIGNATURE_STANDINGS', 'STANDINGS', 'TEE_TIMES', 'TOURCAST']);

export const TournamentStatusSchema = z.enum(['COMPLETED', 'IN_PROGRESS', 'NOT_STARTED']);

export const UniversityRankColorSchema = z.enum(['BLACK', 'BLUE', 'GOLD', 'GRAY']);

export const VideoLanguageSchema = z.enum(['ENGLISH', 'FRENCH']);

export const VideoPillTypeSchema = z.enum(['ALL', 'FAVORITES', 'FEATURES', 'FILTER', 'INTERVIEWS', 'PLAYER_SEARCH', 'PLAYER_STORIES', 'TOPIC_STORIES', 'TOP_SHOTS', 'TOURNAMENTS', 'TRENDING']);

export const WeatherConditionSchema = z.enum(['DAY_CLOUDY', 'DAY_FOG_MIST', 'DAY_MOSTLY_CLOUDY', 'DAY_MOSTLY_SUNNY', 'DAY_PARTLY_CLOUDY', 'DAY_RAINY', 'DAY_SCATTERED_SHOWERS', 'DAY_SNOW', 'DAY_SUNNY', 'DAY_THUNDERSTORMS', 'NIGHT_CLEAR', 'NIGHT_ISOLATED_CLOUDS', 'NIGHT_MOSTLY_CLOUDY', 'NIGHT_PARTLY_CLOUDY']);

export const WindDirectionSchema = z.enum(['EAST', 'NORTH', 'NORTH_EAST', 'NORTH_WEST', 'SOUTH', 'SOUTH_EAST', 'SOUTH_WEST', 'WEST']);

export const WinnerIconTypeSchema = z.enum(['BRONZE', 'GOLD', 'SILVER']);

export const YtTextPositionSchema = z.enum(['BOTTOM', 'TOP']);

export const YtVideoStoryTypeSchema = z.enum(['PLAYER_STORIES', 'TOPIC_STORIES']);

export function ArticleOddsMarketsInputSchema(): z.ZodObject<Properties<ArticleOddsMarketsInput>> {
  return z.object({
    class: z.string(),
    market: HistoricalOddsIdSchema
  })
}

export function ArticleOddsPlayerInputSchema(): z.ZodObject<Properties<ArticleOddsPlayerInput>> {
  return z.object({
    playerId: z.string(),
    playerName: z.string().nullish()
  })
}

export function FavoritePlayerInputSchema(): z.ZodObject<Properties<FavoritePlayerInput>> {
  return z.object({
    id: z.string()
  })
}

export function NotificationTagInputSchema(): z.ZodObject<Properties<NotificationTagInput>> {
  return z.object({
    tag: z.string()
  })
}

export function OddsUpdateInputSchema(): z.ZodObject<Properties<OddsUpdateInput>> {
  return z.object({
    oddsFormat: OddsFormatSchema,
    provider: OddsProviderSchema
  })
}

export function RyderCupRankingsQueryInputSchema(): z.ZodObject<Properties<RyderCupRankingsQueryInput>> {
  return z.object({
    team: RankingsTeamsSchema,
    tournamentId: z.string()
  })
}

export function ShotCommentaryItemInputSchema(): z.ZodObject<Properties<ShotCommentaryItemInput>> {
  return z.object({
    active: z.boolean(),
    commentary: z.string(),
    hole: z.number(),
    shot: z.number(),
    strokeId: z.number()
  })
}

export function StatDetailEventQuerySchema(): z.ZodObject<Properties<StatDetailEventQuery>> {
  return z.object({
    queryType: StatDetailQueryTypeSchema,
    tournamentId: z.string()
  })
}

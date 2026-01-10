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
  AWSDateTime: { input: any; output: any; }
  /** The `AWSTimestamp` scalar type provided by AWS AppSync, represents the number of seconds that have elapsed since `1970-01-01T00:00Z`. Negative values are also accepted and these represent the number of seconds till `1970-01-01T00:00Z`.  Timestamps are serialized and deserialized as integers. The minimum supported timestamp value is **`-31557014167219200`** which corresponds to `-1000000000-01-01T00:00Z`. The maximum supported timestamp value is **`31556889864403199`** which corresponds to `1000000000-12-31T23:59:59.999999999Z`. */
  AWSTimestamp: { input: any; output: any; }
};

export type DomainArHole = {
  readonly __typename: 'ARHole';
  readonly holeNumber: Scalars['Int']['output'];
};

export type DomainAbbreviations = {
  readonly __typename: 'Abbreviations';
  readonly description?: Maybe<Scalars['String']['output']>;
  readonly key: Scalars['String']['output'];
  readonly title: Scalars['String']['output'];
};

export type DomainAdConfig = {
  readonly __typename: 'AdConfig';
  readonly aon?: Maybe<DomainAdTagConfig>;
  readonly aonSection?: Maybe<DomainAdTagConfig>;
  readonly audio?: Maybe<DomainAdTagConfig>;
  readonly comcastSection?: Maybe<DomainAdTagConfig>;
  readonly comcastTop10?: Maybe<DomainAdTagConfig>;
  readonly config: DomainGlobalAdConfig;
  readonly course?: Maybe<DomainAdTagConfig>;
  readonly cupLeaderboardGroup?: Maybe<DomainAdTagConfig>;
  readonly cupLeaderboardSingles?: Maybe<DomainAdTagConfig>;
  readonly cupTeeTimesGroup?: Maybe<DomainAdTagConfig>;
  readonly cupTeeTimesSingles?: Maybe<DomainAdTagConfig>;
  readonly dpwtRankings?: Maybe<DomainAdTagConfig>;
  readonly fantasy?: Maybe<DomainAdTagConfig>;
  readonly fedexCup?: Maybe<DomainAdTagConfig>;
  readonly fedexcupSection?: Maybe<DomainAdTagConfig>;
  readonly fortinetCup?: Maybe<DomainAdTagConfig>;
  readonly fortinetcupSection?: Maybe<DomainAdTagConfig>;
  readonly golfBet?: Maybe<DomainAdTagConfig>;
  readonly groupScorecard?: Maybe<DomainAdTagConfig>;
  readonly groupStageLeaderboard?: Maybe<DomainAdTagConfig>;
  readonly groupStageStandings?: Maybe<DomainAdTagConfig>;
  readonly groupstageStandings?: Maybe<DomainAdTagConfig>;
  readonly homepage?: Maybe<DomainAdTagConfig>;
  readonly knockoutLeaderboard?: Maybe<DomainAdTagConfig>;
  readonly leaderboard?: Maybe<DomainAdTagConfig>;
  readonly leaderboardCutline?: Maybe<DomainAdTagConfig>;
  readonly leaderboardFavorites?: Maybe<DomainAdTagConfig>;
  readonly leaderboardHoleByHole?: Maybe<DomainAdTagConfig>;
  readonly leaderboardLandscape?: Maybe<DomainAdTagConfig>;
  readonly leaderboardLandscapeHoleByHole?: Maybe<DomainAdTagConfig>;
  readonly leaderboardLandscapeOdds?: Maybe<DomainAdTagConfig>;
  readonly leaderboardLandscapeProbability?: Maybe<DomainAdTagConfig>;
  readonly leaderboardLandscapeShotDetails?: Maybe<DomainAdTagConfig>;
  readonly leaderboardLandscapeStrokesGained?: Maybe<DomainAdTagConfig>;
  readonly leaderboardOdds?: Maybe<DomainAdTagConfig>;
  readonly leaderboardProbability?: Maybe<DomainAdTagConfig>;
  readonly leaderboardRow50?: Maybe<DomainAdTagConfig>;
  readonly leaderboardShotDetails?: Maybe<DomainAdTagConfig>;
  readonly leaderboardStrokesGained?: Maybe<DomainAdTagConfig>;
  readonly liveLeaderboard?: Maybe<DomainAdTagConfig>;
  readonly mobileHeroStory?: Maybe<DomainAdTagConfig>;
  readonly mobilePlayerStory?: Maybe<DomainAdTagConfig>;
  readonly mobileTopicStory?: Maybe<DomainAdTagConfig>;
  readonly mobileYourTourHomeStory?: Maybe<DomainAdTagConfig>;
  readonly more?: Maybe<DomainAdTagConfig>;
  readonly netflix?: Maybe<DomainAdTagConfig>;
  readonly news?: Maybe<DomainAdTagConfig>;
  readonly newsArticlemidcontent?: Maybe<DomainAdTagConfig>;
  readonly newsArticles?: Maybe<DomainAdTagConfig>;
  readonly odds?: Maybe<DomainAdTagConfig>;
  readonly payneStewartaward?: Maybe<DomainAdTagConfig>;
  readonly playerProfile?: Maybe<DomainAdTagConfig>;
  readonly playerProfileBio?: Maybe<DomainAdTagConfig>;
  readonly playerProfileEquipment?: Maybe<DomainAdTagConfig>;
  readonly playerProfileResults?: Maybe<DomainAdTagConfig>;
  readonly playerProfileStats?: Maybe<DomainAdTagConfig>;
  readonly playerScorecard?: Maybe<DomainAdTagConfig>;
  readonly players?: Maybe<DomainAdTagConfig>;
  readonly playoffScorecard?: Maybe<DomainAdTagConfig>;
  readonly rsm?: Maybe<DomainAdTagConfig>;
  readonly rsmSection?: Maybe<DomainAdTagConfig>;
  readonly schedule?: Maybe<DomainAdTagConfig>;
  readonly schwabCup?: Maybe<DomainAdTagConfig>;
  readonly schwabcupSection?: Maybe<DomainAdTagConfig>;
  readonly scorecard?: Maybe<DomainAdTagConfig>;
  readonly scorecardOdds?: Maybe<DomainAdTagConfig>;
  readonly sidebarTicker?: Maybe<DomainAdTagConfig>;
  readonly standings?: Maybe<DomainAdTagConfig>;
  readonly stats?: Maybe<DomainAdTagConfig>;
  readonly statsSection?: Maybe<DomainAdTagConfig>;
  readonly studios?: Maybe<DomainAdTagConfig>;
  readonly teeTimes?: Maybe<DomainAdTagConfig>;
  readonly the25Section?: Maybe<DomainAdTagConfig>;
  readonly the25pointsList?: Maybe<DomainAdTagConfig>;
  readonly tickets?: Maybe<DomainAdTagConfig>;
  readonly totalPlayCup?: Maybe<DomainAdTagConfig>;
  readonly totalplaycupSection?: Maybe<DomainAdTagConfig>;
  readonly tourcast?: Maybe<DomainAdTagConfig>;
  readonly tournament?: Maybe<DomainAdTagConfig>;
  readonly tournamentSection?: Maybe<DomainAdTagConfig>;
  readonly training?: Maybe<DomainAdTagConfig>;
  readonly university?: Maybe<DomainAdTagConfig>;
  readonly watch?: Maybe<DomainAdTagConfig>;
  readonly webPlayerStories?: Maybe<DomainAdTagConfig>;
  readonly webTopicStories?: Maybe<DomainAdTagConfig>;
  readonly yahooLeaderboard?: Maybe<DomainAdTagConfig>;
};

export type DomainAdSize = {
  readonly __typename: 'AdSize';
  readonly height: Scalars['Int']['output'];
  readonly width: Scalars['Int']['output'];
};

export type DomainAdTagConfig = {
  readonly __typename: 'AdTagConfig';
  readonly actRefresh?: Maybe<Scalars['Boolean']['output']>;
  readonly adTest?: Maybe<Scalars['String']['output']>;
  readonly environment?: Maybe<Scalars['String']['output']>;
  readonly injectAds?: Maybe<Scalars['Boolean']['output']>;
  readonly refresh?: Maybe<Scalars['Int']['output']>;
  readonly rows: ReadonlyArray<DomainAdTagRowConfig>;
  readonly s1: Scalars['String']['output'];
  readonly s2?: Maybe<Scalars['String']['output']>;
  readonly timedRefresh?: Maybe<Scalars['Boolean']['output']>;
  readonly uniqueId: Scalars['String']['output'];
};

export type DomainAdTagRowConfig = {
  readonly __typename: 'AdTagRowConfig';
  readonly container?: Maybe<DomainAdSize>;
  readonly containerLarge?: Maybe<DomainAdSize>;
  readonly containerMedium?: Maybe<DomainAdSize>;
  readonly containerSmall?: Maybe<DomainAdSize>;
  readonly fluid?: Maybe<Scalars['Boolean']['output']>;
  readonly index: Scalars['Int']['output'];
  readonly playerSponsorship?: Maybe<Scalars['Boolean']['output']>;
  readonly pos: Scalars['String']['output'];
  readonly sizes?: Maybe<ReadonlyArray<DomainAdSize>>;
};

export type DomainAllTimeRecordCategories = {
  readonly __typename: 'AllTimeRecordCategories';
  readonly categories: ReadonlyArray<DomainAllTimeRecordCategory>;
  readonly tourCode: DomainTourCode;
};

export type DomainAllTimeRecordCategory = {
  readonly __typename: 'AllTimeRecordCategory';
  readonly categoryId: Scalars['String']['output'];
  readonly displayText: Scalars['String']['output'];
  readonly subCategories: ReadonlyArray<DomainAllTimeRecordSubCategory>;
};

export type DomainAllTimeRecordStat = {
  readonly __typename: 'AllTimeRecordStat';
  readonly categoryId: Scalars['String']['output'];
  readonly categoryName: Scalars['String']['output'];
  readonly isPlayerBased: Scalars['Boolean']['output'];
  readonly primaryColumnIndex?: Maybe<Scalars['Int']['output']>;
  readonly recordId: Scalars['String']['output'];
  readonly rows?: Maybe<ReadonlyArray<DomainAllTimeRecordStatRow>>;
  readonly statHeaders: ReadonlyArray<Scalars['String']['output']>;
  readonly subCategoryName: Scalars['String']['output'];
  /**   1-17 */
  readonly title: Scalars['String']['output'];
};

export type DomainAllTimeRecordStatRow = {
  readonly __typename: 'AllTimeRecordStatRow';
  readonly playerId?: Maybe<Scalars['String']['output']>;
  readonly values: ReadonlyArray<Scalars['String']['output']>;
};

export type DomainAllTimeRecordStatistic = {
  readonly __typename: 'AllTimeRecordStatistic';
  readonly displayText: Scalars['String']['output'];
  readonly recordId: Scalars['String']['output'];
};

export type DomainAllTimeRecordSubCategory = {
  readonly __typename: 'AllTimeRecordSubCategory';
  readonly displayText: Scalars['String']['output'];
  readonly statistics: ReadonlyArray<DomainAllTimeRecordStatistic>;
};

export type DomainAon = {
  readonly __typename: 'Aon';
  readonly description: Scalars['String']['output'];
  readonly leaders: ReadonlyArray<DomainAonPlayer>;
  readonly logo: Scalars['String']['output'];
  readonly pastTournaments: ReadonlyArray<DomainAonHole>;
  readonly players: ReadonlyArray<DomainAonPlayer>;
  readonly title: Scalars['String']['output'];
  readonly upcomingTournaments: ReadonlyArray<DomainAonHole>;
};

export type DomainAonHole = {
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

export type DomainAonPlayer = {
  readonly __typename: 'AonPlayer';
  readonly countryCode: Scalars['String']['output'];
  readonly displayName: Scalars['String']['output'];
  readonly playerId: Scalars['ID']['output'];
  readonly position: Scalars['String']['output'];
  readonly roundsPlayed: Scalars['String']['output'];
  readonly roundsToGo: Scalars['String']['output'];
  readonly score: Scalars['String']['output'];
};

export type DomainArticleFormType =
  | 'External'
  | 'Standard';

export type DomainArticleOddsMarkets = {
  readonly __typename: 'ArticleOddsMarkets';
  readonly class: Scalars['String']['output'];
  readonly market: DomainHistoricalOddsId;
};

export type DomainArticleOddsMarketsInput = {
  readonly class: Scalars['String']['input'];
  readonly market: DomainHistoricalOddsId;
};

export type DomainArticleOddsPlayer = {
  readonly __typename: 'ArticleOddsPlayer';
  readonly playerId: Scalars['String']['output'];
  readonly playerName?: Maybe<Scalars['String']['output']>;
};

export type DomainArticleOddsPlayerInput = {
  readonly playerId: Scalars['String']['input'];
  readonly playerName?: InputMaybe<Scalars['String']['input']>;
};

export type DomainArticleOddsTableQuery = {
  readonly __typename: 'ArticleOddsTableQuery';
  readonly markets?: Maybe<ReadonlyArray<DomainArticleOddsMarkets>>;
  readonly players?: Maybe<ReadonlyArray<DomainArticleOddsPlayer>>;
  readonly timeStamp?: Maybe<Scalars['String']['output']>;
  readonly tournamentId: Scalars['String']['output'];
  readonly tournamentName: Scalars['String']['output'];
};

export type DomainArticlePlayer = {
  readonly __typename: 'ArticlePlayer';
  readonly id: Scalars['String']['output'];
  readonly name: Scalars['String']['output'];
};

export type DomainArticleSponsor =
  | 'GOLFWRX';

export type DomainAudio = {
  readonly __typename: 'Audio';
  readonly id: Scalars['ID']['output'];
  readonly imageUrl: Scalars['String']['output'];
  readonly latestPubDate: Scalars['AWSTimestamp']['output'];
  readonly numEpisodes: Scalars['Int']['output'];
  readonly rssFeed: Scalars['String']['output'];
  readonly shareUrl: Scalars['String']['output'];
  readonly streamUrls: DomainStreamUrls;
  readonly summary: Scalars['String']['output'];
  readonly title: Scalars['String']['output'];
};

export type DomainAudioStream = {
  readonly __typename: 'AudioStream';
  readonly id: Scalars['ID']['output'];
  readonly live: Scalars['Boolean']['output'];
  readonly posterImage: Scalars['String']['output'];
  readonly shareUrl: Scalars['String']['output'];
  readonly streamTitle: Scalars['String']['output'];
  readonly streamUrl: Scalars['String']['output'];
};

export type DomainAugmentedRealityConfig = {
  readonly __typename: 'AugmentedRealityConfig';
  readonly holes: ReadonlyArray<DomainArHole>;
};

export type DomainAvailableMarket = {
  readonly __typename: 'AvailableMarket';
  readonly market: Scalars['String']['output'];
  readonly oddsOptions: ReadonlyArray<DomainOddsOption>;
  readonly subMarket?: Maybe<Scalars['String']['output']>;
};

export type DomainBallPath = {
  readonly __typename: 'BallPath';
  readonly path: ReadonlyArray<DomainBallPathCoordinate>;
};

export type DomainBallPathCoordinate = {
  readonly __typename: 'BallPathCoordinate';
  readonly secondsSinceStart: Scalars['Float']['output'];
  readonly x: Scalars['Float']['output'];
  readonly y: Scalars['Float']['output'];
  readonly z: Scalars['Float']['output'];
};

/**   Odds Options Types */
export type DomainBaseOddsOption = {
  readonly entity: DomainOddsEntity;
  readonly odds: DomainOddsValues;
};

export type DomainBioRank = {
  readonly __typename: 'BioRank';
  readonly rank: Scalars['Int']['output'];
  readonly statName: Scalars['String']['output'];
};

export type DomainBroadcastAudioStream = {
  readonly __typename: 'BroadcastAudioStream';
  readonly channelTitle: Scalars['String']['output'];
  readonly endTime: Scalars['AWSTimestamp']['output'];
  readonly id: Scalars['String']['output'];
  readonly liveStatus: DomainLiveStatus;
  readonly network: DomainBroadcastNetwork;
  readonly roundDisplay: Scalars['String']['output'];
  readonly roundNumber: Scalars['Int']['output'];
  readonly startTime: Scalars['AWSTimestamp']['output'];
  readonly streamTitle: Scalars['String']['output'];
};

export type DomainBroadcastCoverage = {
  readonly __typename: 'BroadcastCoverage';
  readonly countryCode: Scalars['String']['output'];
  readonly coverageType: ReadonlyArray<DomainBroadcastCoverageType>;
  readonly id: Scalars['String']['output'];
  readonly livePillLabel: Scalars['String']['output'];
  readonly tournamentName: Scalars['String']['output'];
};

export type DomainBroadcastCoverageCarousel = {
  readonly __typename: 'BroadcastCoverageCarousel';
  readonly carousel: ReadonlyArray<DomainBroadcastCoverageVideo>;
};

export type DomainBroadcastCoverageItem = DomainBroadcastAudioStream | DomainBroadcastFeaturedGroup | DomainBroadcastFeaturedHole | DomainBroadcastFullTelecast;

export type DomainBroadcastCoverageType = DomainBroadcastAudioStream | DomainBroadcastCoverageCarousel | DomainBroadcastFeaturedGroup | DomainBroadcastFeaturedHole | DomainBroadcastFullTelecast;

export type DomainBroadcastCoverageVideo = DomainBroadcastFeaturedGroup | DomainBroadcastFeaturedHole | DomainBroadcastFullTelecast;

export type DomainBroadcastFeaturedGroup = {
  readonly __typename: 'BroadcastFeaturedGroup';
  readonly channelTitle: Scalars['String']['output'];
  readonly courseId?: Maybe<Scalars['String']['output']>;
  readonly endTime: Scalars['AWSTimestamp']['output'];
  readonly groups: ReadonlyArray<DomainBroadcastGroup>;
  readonly id: Scalars['String']['output'];
  readonly liveStatus: DomainLiveStatus;
  readonly network: DomainBroadcastNetwork;
  readonly promoImage?: Maybe<Scalars['String']['output']>;
  readonly promoImages: ReadonlyArray<Scalars['String']['output']>;
  readonly roundDisplay: Scalars['String']['output'];
  readonly roundNumber: Scalars['Int']['output'];
  readonly startTime: Scalars['AWSTimestamp']['output'];
  readonly streamTitle: Scalars['String']['output'];
};

export type DomainBroadcastFeaturedHole = {
  readonly __typename: 'BroadcastFeaturedHole';
  readonly channelTitle: Scalars['String']['output'];
  readonly courseId?: Maybe<Scalars['String']['output']>;
  readonly endTime: Scalars['AWSTimestamp']['output'];
  readonly featuredHoles: ReadonlyArray<Scalars['Int']['output']>;
  readonly id: Scalars['String']['output'];
  readonly liveStatus: DomainLiveStatus;
  readonly network: DomainBroadcastNetwork;
  readonly promoImage?: Maybe<Scalars['String']['output']>;
  readonly promoImages: ReadonlyArray<Scalars['String']['output']>;
  readonly roundDisplay: Scalars['String']['output'];
  readonly roundNumber: Scalars['Int']['output'];
  readonly startTime: Scalars['AWSTimestamp']['output'];
  readonly streamTitle: Scalars['String']['output'];
};

export type DomainBroadcastFullTelecast = {
  readonly __typename: 'BroadcastFullTelecast';
  readonly channelTitle: Scalars['String']['output'];
  readonly endTime: Scalars['AWSTimestamp']['output'];
  readonly id: Scalars['String']['output'];
  readonly liveStatus: DomainLiveStatus;
  readonly network: DomainBroadcastNetwork;
  readonly promoImage?: Maybe<Scalars['String']['output']>;
  readonly promoImages: ReadonlyArray<Scalars['String']['output']>;
  readonly roundDisplay: Scalars['String']['output'];
  readonly roundNumber: Scalars['Int']['output'];
  readonly startTime: Scalars['AWSTimestamp']['output'];
  readonly streamTitle: Scalars['String']['output'];
};

export type DomainBroadcastGroup = {
  readonly __typename: 'BroadcastGroup';
  readonly extendedCoverage?: Maybe<Scalars['Boolean']['output']>;
  readonly id: Scalars['String']['output'];
  readonly liveStatus: DomainLiveStatus;
  readonly playerLastNames?: Maybe<ReadonlyArray<Maybe<Scalars['String']['output']>>>;
};

export type DomainBroadcastNetwork = {
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
  readonly networkLogoAsset?: Maybe<DomainImageAsset>;
  /** @deprecated Use networkLogoDarkAsset */
  readonly networkLogoDark?: Maybe<Scalars['String']['output']>;
  readonly networkLogoDarkAsset?: Maybe<DomainImageAsset>;
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

export type DomainBroadcastNetworks = {
  readonly __typename: 'BroadcastNetworks';
  readonly networks: ReadonlyArray<DomainBroadcastNetwork>;
};

export type DomainBroadcastTableFragment = {
  readonly __typename: 'BroadcastTableFragment';
  readonly path: Scalars['String']['output'];
  readonly webviewUrl: Scalars['String']['output'];
};

export type DomainBubblePill = {
  readonly __typename: 'BubblePill';
  readonly iconDark: DomainImageAsset;
  readonly iconLight: DomainImageAsset;
  readonly pillText: Scalars['String']['output'];
};

export type DomainBubbleType =
  | 'PLAYOFFS'
  | 'SIGNATURE_EVENTS';

export type DomainBubbleWatch = {
  readonly __typename: 'BubbleWatch';
  readonly bubbleId: Scalars['ID']['output'];
  readonly bubbleType: DomainBubbleType;
  readonly items: ReadonlyArray<DomainBubbleWatchItem>;
};

export type DomainBubbleWatchItem = {
  readonly __typename: 'BubbleWatchItem';
  readonly info?: Maybe<Scalars['String']['output']>;
  readonly infoDesc?: Maybe<Scalars['String']['output']>;
  readonly standings: DomainTourCupRankingEvent;
};

export type DomainCallToAction = {
  readonly __typename: 'CallToAction';
  readonly color?: Maybe<Scalars['String']['output']>;
  readonly fontColor?: Maybe<Scalars['String']['output']>;
  readonly link: Scalars['String']['output'];
  readonly target?: Maybe<Scalars['String']['output']>;
  readonly text: Scalars['String']['output'];
  readonly webViewLink?: Maybe<Scalars['String']['output']>;
};

export type DomainCategory = {
  readonly __typename: 'Category';
  readonly displayName: Scalars['String']['output'];
  readonly franchises: ReadonlyArray<DomainFranchise>;
  readonly queryValue: Scalars['String']['output'];
};

export type DomainCategoryPlayerStat = {
  readonly __typename: 'CategoryPlayerStat';
  readonly color: DomainStatColor;
  readonly statName: Scalars['String']['output'];
  readonly statValue: Scalars['String']['output'];
};

export type DomainCategoryStat = {
  readonly __typename: 'CategoryStat';
  readonly displaySeason: Scalars['String']['output'];
  readonly lastProcessed: Scalars['String']['output'];
  readonly players: ReadonlyArray<DomainCategoryStatPlayer>;
  readonly statDescription: Scalars['String']['output'];
  readonly statHeaders: ReadonlyArray<Scalars['String']['output']>;
  readonly statTitle: Scalars['String']['output'];
  readonly tourAvg?: Maybe<Scalars['String']['output']>;
  readonly year: Scalars['Int']['output'];
};

export type DomainCategoryStatPlayer = {
  readonly __typename: 'CategoryStatPlayer';
  readonly playerId: Scalars['String']['output'];
  readonly playerName: Scalars['String']['output'];
  readonly rank: Scalars['Int']['output'];
  readonly rankChangeTendency?: Maybe<DomainStatRankMovement>;
  readonly rankDiff: Scalars['String']['output'];
  readonly stats: ReadonlyArray<DomainCategoryPlayerStat>;
};

export type DomainCategoryStatType =
  | 'EVENT'
  | 'YTD';

export type DomainCerosEmbedPlugin = {
  readonly __typename: 'CerosEmbedPlugin';
  readonly aspectRatio: Scalars['Float']['output'];
  readonly id: Scalars['ID']['output'];
  readonly mobileAspectRatio: Scalars['Float']['output'];
  readonly padding: Scalars['Float']['output'];
  readonly title: Scalars['String']['output'];
  readonly url: Scalars['String']['output'];
};

export type DomainContentCarousel = DomainImage | DomainVideo;

export type DomainContentFragment = {
  readonly __typename: 'ContentFragment';
  readonly fragments: ReadonlyArray<DomainContentFragments>;
  readonly pageMetadata: DomainPageMetadata;
  readonly totalLength: Scalars['Int']['output'];
};

export type DomainContentFragmentTab = {
  readonly __typename: 'ContentFragmentTab';
  readonly contentType: DomainContentType;
  readonly label?: Maybe<Scalars['String']['output']>;
  readonly path: Scalars['String']['output'];
  readonly webview?: Maybe<Scalars['String']['output']>;
};

export type DomainContentFragmentTabs = {
  readonly __typename: 'ContentFragmentTabs';
  readonly pageHeader: Scalars['String']['output'];
  readonly partnerShipAssets?: Maybe<ReadonlyArray<Scalars['String']['output']>>;
  readonly path: Scalars['String']['output'];
  readonly tabs: ReadonlyArray<DomainContentFragmentTab>;
};

export type DomainContentFragmentType = {
  readonly __typename: 'ContentFragmentType';
  readonly contentType: DomainContentType;
  readonly path: Scalars['String']['output'];
};

export type DomainContentFragments = DomainDropdownFragment | DomainHomepageLead | DomainHomepageNews | DomainHomepageProgramStanding | DomainKopHeader | DomainKopSignUp | DomainKopStandingsList | DomainKopSubheader | DomainKopUpcomingTournament | DomainKopZigZag | DomainMediaGallery | DomainOddsToWinTracker | DomainTglBoxScoreFragment | DomainThreeUpPhoto | DomainThreeUpStats | DomainTwoColumn | DomainVideoHero;

export type DomainContentFragmentsCompressed = {
  readonly __typename: 'ContentFragmentsCompressed';
  readonly limit?: Maybe<Scalars['Int']['output']>;
  readonly offset?: Maybe<Scalars['Int']['output']>;
  readonly path?: Maybe<Scalars['String']['output']>;
  readonly payload: Scalars['String']['output'];
  readonly tourCode: DomainTourCode;
};

export type DomainContentStat = {
  readonly __typename: 'ContentStat';
  readonly statId: Scalars['String']['output'];
  readonly statName: Scalars['String']['output'];
};

export type DomainContentStory = {
  readonly __typename: 'ContentStory';
  readonly desktopLatestNewsIndex?: Maybe<Scalars['Int']['output']>;
  readonly mobileLatestNewsIndex?: Maybe<Scalars['Int']['output']>;
  readonly path: Scalars['String']['output'];
  readonly sectionHeader?: Maybe<Scalars['String']['output']>;
  readonly storyType?: Maybe<DomainStory_Type>;
  readonly topicLabels?: Maybe<ReadonlyArray<Scalars['String']['output']>>;
};

export type DomainContentTopics = {
  readonly __typename: 'ContentTopics';
  readonly displayValue?: Maybe<Scalars['String']['output']>;
  readonly value?: Maybe<Scalars['String']['output']>;
};

export type DomainContentType =
  | 'CONTENT_FRAGMENTS'
  | 'CONTENT_TABS'
  | 'GENERIC_CONTENT'
  | 'NEWS_ARTICLE'
  | 'RYDER_CUP_CONTENT_FRAGMENTS'
  | 'RYDER_CUP_CONTENT_TABS'
  | 'RYDER_CUP_GENERIC_CONTENT'
  | 'RYDER_CUP_NEWS_ARTICLE';

export type DomainContentVideoCarousel = {
  readonly __typename: 'ContentVideoCarousel';
  readonly bottomCta?: Maybe<DomainCallToAction>;
  readonly sectionTitle?: Maybe<Scalars['String']['output']>;
  readonly topCta?: Maybe<DomainCallToAction>;
  readonly videos?: Maybe<ReadonlyArray<DomainVideo>>;
};

export type DomainCourse = {
  readonly __typename: 'Course';
  readonly courseCode: Scalars['String']['output'];
  readonly courseName: Scalars['String']['output'];
  readonly enabled?: Maybe<Scalars['Boolean']['output']>;
  readonly features?: Maybe<ReadonlyArray<DomainTeeTimesFeature>>;
  readonly hostCourse: Scalars['Boolean']['output'];
  readonly id: Scalars['ID']['output'];
  readonly scoringLevel: DomainScoringLevel;
};

export type DomainCourseDetailRowValue = {
  readonly __typename: 'CourseDetailRowValue';
  readonly tendency?: Maybe<DomainScoringTendency>;
  readonly value: Scalars['String']['output'];
};

export type DomainCourseFilter = {
  readonly __typename: 'CourseFilter';
  readonly courseId: Scalars['Int']['output'];
  readonly courseName: Scalars['String']['output'];
};

export type DomainCourseHoleHeader = {
  readonly __typename: 'CourseHoleHeader';
  readonly courseId: Scalars['ID']['output'];
  readonly holeHeaders: ReadonlyArray<DomainHoleHeaderV2>;
};

export type DomainCourseHoleStats = {
  readonly __typename: 'CourseHoleStats';
  readonly averagePaceOfPlay?: Maybe<Scalars['String']['output']>;
  readonly birdies?: Maybe<Scalars['Int']['output']>;
  readonly bogeys?: Maybe<Scalars['Int']['output']>;
  readonly courseHoleNum: Scalars['Int']['output'];
  readonly doubleBogey?: Maybe<Scalars['Int']['output']>;
  readonly eagles?: Maybe<Scalars['Int']['output']>;
  readonly holeImage: Scalars['String']['output'];
  readonly holePickle?: Maybe<DomainHolePickle>;
  /** @deprecated Use holePickleGreenLeftToRightAsset */
  readonly holePickleGreenLeftToRight: Scalars['String']['output'];
  readonly holePickleGreenLeftToRightAsset: DomainImageAsset;
  /** @deprecated Use broadcast api indication instead of this. */
  readonly live: Scalars['Boolean']['output'];
  readonly parValue: Scalars['String']['output'];
  readonly pars?: Maybe<Scalars['Int']['output']>;
  readonly pinGreen: DomainPointOfInterestCoords;
  readonly rank?: Maybe<Scalars['Int']['output']>;
  readonly scoringAverage: Scalars['String']['output'];
  readonly scoringAverageDiff: Scalars['String']['output'];
  readonly scoringDiffTendency: DomainScoringTendency;
  readonly yards: Scalars['Int']['output'];
};

export type DomainCourseInfo = {
  readonly __typename: 'CourseInfo';
  readonly bottomCta?: Maybe<DomainCallToAction>;
  readonly coursePhotos?: Maybe<ReadonlyArray<Scalars['String']['output']>>;
  readonly cta1?: Maybe<DomainCallToAction>;
  readonly cta2?: Maybe<DomainCallToAction>;
  readonly subhead?: Maybe<Scalars['String']['output']>;
  readonly title?: Maybe<Scalars['String']['output']>;
  readonly topCta?: Maybe<DomainCallToAction>;
};

export type DomainCourseOverviewInfo = {
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

export type DomainCourseOverviewItem = {
  readonly __typename: 'CourseOverviewItem';
  readonly details: ReadonlyArray<DomainCourseOverviewItemDetails>;
  readonly displayName: Scalars['String']['output'];
  readonly image: Scalars['String']['output'];
  readonly rank: Scalars['Int']['output'];
};

export type DomainCourseOverviewItemDetails = {
  readonly __typename: 'CourseOverviewItemDetails';
  readonly label: Scalars['String']['output'];
  readonly value: Scalars['String']['output'];
};

export type DomainCoursePills = {
  readonly __typename: 'CoursePills';
  readonly courseId: Scalars['String']['output'];
  readonly courseName: Scalars['String']['output'];
};

export type DomainCourseResultsTournament = {
  readonly __typename: 'CourseResultsTournament';
  readonly points: Scalars['String']['output'];
  readonly position: Scalars['String']['output'];
  readonly roundScores: ReadonlyArray<DomainRoundScoreItem>;
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

export type DomainCourseRound = {
  readonly __typename: 'CourseRound';
  readonly enablePaceOfPlay?: Maybe<Scalars['Boolean']['output']>;
  readonly holeStats: ReadonlyArray<DomainHoleStat>;
  readonly live: Scalars['Boolean']['output'];
  readonly paceOfPlayDescription?: Maybe<Scalars['String']['output']>;
  readonly paceOfPlayLabelTitle?: Maybe<Scalars['String']['output']>;
  readonly roundHeader: Scalars['String']['output'];
  readonly roundNum?: Maybe<Scalars['Int']['output']>;
};

export type DomainCourseStat = {
  readonly __typename: 'CourseStat';
  readonly courseCode: Scalars['String']['output'];
  readonly courseId: Scalars['String']['output'];
  readonly courseImage: Scalars['String']['output'];
  readonly courseName: Scalars['String']['output'];
  readonly courseOverview: DomainTournamentCourse;
  readonly holeDetailsAvailability: DomainHoleDetailsAvailability;
  readonly hostCourse: Scalars['Boolean']['output'];
  readonly par: Scalars['Int']['output'];
  readonly roundHoleStats: ReadonlyArray<DomainCourseRound>;
  readonly roundPills?: Maybe<ReadonlyArray<Scalars['String']['output']>>;
  readonly shotlinkLogo?: Maybe<Scalars['String']['output']>;
  readonly tournamentId: Scalars['ID']['output'];
  readonly yardage: Scalars['String']['output'];
};

export type DomainCourseStatsCategory = {
  readonly __typename: 'CourseStatsCategory';
  readonly detailId: DomainCourseStatsId;
  readonly header: Scalars['String']['output'];
  readonly items: ReadonlyArray<DomainCourseOverviewItem>;
};

export type DomainCourseStatsDetails = {
  readonly __typename: 'CourseStatsDetails';
  readonly displayName: Scalars['String']['output'];
  readonly displayYear: Scalars['String']['output'];
  readonly headers: ReadonlyArray<Scalars['String']['output']>;
  readonly round: DomainToughestRound;
  readonly roundPills: ReadonlyArray<DomainToughestCourseRoundPills>;
  readonly rows: ReadonlyArray<DomainCourseStatsDetailsRow>;
  readonly seasons: ReadonlyArray<DomainStatYearPills>;
  readonly shareURL?: Maybe<Scalars['String']['output']>;
  readonly tableName: Scalars['String']['output'];
  readonly tourCode: DomainTourCode;
  readonly year: Scalars['Int']['output'];
};

export type DomainCourseStatsDetailsRow = {
  readonly __typename: 'CourseStatsDetailsRow';
  readonly displayName: Scalars['String']['output'];
  readonly rank: Scalars['Int']['output'];
  readonly tournamentId: Scalars['String']['output'];
  readonly tournamentName: Scalars['String']['output'];
  readonly values: ReadonlyArray<DomainCourseDetailRowValue>;
};

export type DomainCourseStatsId =
  | 'TOUGHEST_COURSE'
  | 'TOUGHEST_HOLES';

export type DomainCourseStatsOverview = {
  readonly __typename: 'CourseStatsOverview';
  readonly categories: ReadonlyArray<DomainCourseStatsCategory>;
  readonly tourCode: DomainTourCode;
  readonly year: Scalars['Int']['output'];
};

export type DomainCupLeaderboardMatch = {
  readonly __typename: 'CupLeaderboardMatch';
  readonly displayScore: Scalars['String']['output'];
  readonly euMatchWin?: Maybe<Scalars['Float']['output']>;
  readonly holeScores?: Maybe<ReadonlyArray<DomainCupLeaderboardMatchHoles>>;
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
  readonly teams: ReadonlyArray<DomainCupLeaderboardMatchTeam>;
  readonly teeTime: Scalars['AWSTimestamp']['output'];
  readonly tourcastURI?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastURL?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastURLWeb?: Maybe<Scalars['String']['output']>;
  readonly usMatchWin?: Maybe<Scalars['Float']['output']>;
};

export type DomainCupLeaderboardMatchHoles = {
  readonly __typename: 'CupLeaderboardMatchHoles';
  readonly holeNumber: Scalars['String']['output'];
  readonly holeNumberColor: Scalars['String']['output'];
  readonly holeOutlineColor?: Maybe<Scalars['String']['output']>;
  readonly holePlayedStatus: DomainHolePlayedStatus;
};

export type DomainCupLeaderboardMatchPlayer = {
  readonly __typename: 'CupLeaderboardMatchPlayer';
  readonly color?: Maybe<Scalars['String']['output']>;
  readonly displayName: Scalars['String']['output'];
  readonly firstName?: Maybe<Scalars['String']['output']>;
  readonly hideHeadshot?: Maybe<Scalars['Boolean']['output']>;
  readonly lastName?: Maybe<Scalars['String']['output']>;
  readonly playerId: Scalars['ID']['output'];
  readonly results?: Maybe<DomainCupLeaderboardMatchPlayerResults>;
  readonly shortName: Scalars['String']['output'];
};

export type DomainCupLeaderboardMatchPlayerResults = {
  readonly __typename: 'CupLeaderboardMatchPlayerResults';
  readonly losses: Scalars['String']['output'];
  readonly ties: Scalars['String']['output'];
  readonly total: Scalars['String']['output'];
  readonly wins: Scalars['String']['output'];
};

export type DomainCupLeaderboardMatchTeam = {
  readonly __typename: 'CupLeaderboardMatchTeam';
  readonly flagSurroundColor?: Maybe<Scalars['String']['output']>;
  readonly flagSurroundColorDark?: Maybe<Scalars['String']['output']>;
  readonly players: ReadonlyArray<DomainCupLeaderboardMatchPlayer>;
  readonly status: DomainCupLeaderboardTeamStatus;
  readonly teamColor: Scalars['String']['output'];
  readonly teamFlag: Scalars['String']['output'];
  readonly teamId: Scalars['ID']['output'];
  readonly teamName: Scalars['String']['output'];
  readonly teamScore?: Maybe<Scalars['String']['output']>;
  readonly teamStoryContentInfo?: Maybe<ReadonlyArray<DomainTeamStoryContentInfo>>;
  readonly textColor?: Maybe<Scalars['String']['output']>;
};

export type DomainCupLeaderboardTeamStatus =
  | 'BEHIND'
  | 'LEADS'
  | 'TIED'
  | 'UNKNOWN'
  | 'WINS';

export type DomainCupLiveActivitySponsor = {
  readonly __typename: 'CupLiveActivitySponsor';
  readonly sponsorLogo?: Maybe<Scalars['String']['output']>;
  readonly sponsorText?: Maybe<Scalars['String']['output']>;
};

export type DomainCupMatchesCompleteData = {
  readonly __typename: 'CupMatchesCompleteData';
  readonly completedMatches: Scalars['Int']['output'];
  readonly totalMatches: Scalars['Int']['output'];
};

export type DomainCupOverviewDisplayType =
  | 'POINTS_ONLY'
  | 'PROGRESS';

export type DomainCupPastResults = {
  readonly __typename: 'CupPastResults';
  readonly permId: Scalars['ID']['output'];
  readonly years: ReadonlyArray<DomainCupPastResultsYear>;
};

export type DomainCupPastResultsTeam = {
  readonly __typename: 'CupPastResultsTeam';
  readonly badgeText?: Maybe<Scalars['String']['output']>;
  readonly color: Scalars['String']['output'];
  readonly score: Scalars['String']['output'];
  readonly teamId: Scalars['ID']['output'];
  readonly teamLogo: Scalars['String']['output'];
  readonly teamName: Scalars['String']['output'];
};

export type DomainCupPastResultsYear = {
  readonly __typename: 'CupPastResultsYear';
  readonly displayYear: Scalars['String']['output'];
  readonly teams: ReadonlyArray<DomainCupPastResultsTeam>;
  readonly year: Scalars['Int']['output'];
};

export type DomainCupRankMovementDirection =
  | 'CONSTANT'
  | 'DOWN'
  | 'UNKNOWN'
  | 'UP';

export type DomainCupRankingPlayer = {
  readonly __typename: 'CupRankingPlayer';
  readonly id: Scalars['String']['output'];
  readonly movement: Scalars['String']['output'];
  readonly movementDirection: DomainCupRankMovementDirection;
  readonly name: Scalars['String']['output'];
  readonly playerCountry: Scalars['String']['output'];
  readonly position: Scalars['String']['output'];
  readonly rankLogoDark?: Maybe<Scalars['String']['output']>;
  readonly rankLogoLight?: Maybe<Scalars['String']['output']>;
  readonly total: Scalars['String']['output'];
  readonly totals: ReadonlyArray<DomainCupRankingTotal>;
  readonly tourBound?: Maybe<Scalars['Boolean']['output']>;
  readonly winner?: Maybe<Scalars['Boolean']['output']>;
};

export type DomainCupRankingPlayerInfoRow = {
  readonly __typename: 'CupRankingPlayerInfoRow';
  readonly image?: Maybe<Scalars['String']['output']>;
  readonly imageDark?: Maybe<Scalars['String']['output']>;
  readonly text: Scalars['String']['output'];
};

export type DomainCupRankingPlayerWrapper = DomainCupRankingPlayer | DomainCupRankingPlayerInfoRow;

export type DomainCupRankingTotal = {
  readonly __typename: 'CupRankingTotal';
  readonly display: Scalars['String']['output'];
  readonly value: Scalars['String']['output'];
};

export type DomainCupRound = {
  readonly __typename: 'CupRound';
  readonly roundDisplayName: Scalars['String']['output'];
  readonly roundNum: Scalars['Int']['output'];
};

export type DomainCupRoundFormat =
  | 'ALTERNATE_SHOT'
  | 'BEST_BALL'
  | 'SINGLES';

export type DomainCupScorecard = {
  readonly __typename: 'CupScorecard';
  readonly currentHole?: Maybe<Scalars['Int']['output']>;
  readonly displayScore: Scalars['String']['output'];
  readonly format: DomainCupRoundFormat;
  readonly id: Scalars['ID']['output'];
  readonly infoWebUrl?: Maybe<Scalars['String']['output']>;
  readonly matchHoleScores: ReadonlyArray<DomainMatchHole>;
  readonly matchName: Scalars['String']['output'];
  readonly matchStatus: Scalars['String']['output'];
  readonly matchStatusColor: Scalars['String']['output'];
  readonly matchStatusFlag?: Maybe<Scalars['String']['output']>;
  readonly messages: ReadonlyArray<DomainMessage>;
  readonly scorecardTitle: Scalars['String']['output'];
  readonly teams: ReadonlyArray<DomainCupTeam>;
  readonly teeTime: Scalars['AWSTimestamp']['output'];
  readonly tourcastURI?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastUrl?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastUrlWeb?: Maybe<Scalars['String']['output']>;
};

export type DomainCupTeam = {
  readonly __typename: 'CupTeam';
  readonly flagSurroundColor?: Maybe<Scalars['String']['output']>;
  readonly flagSurroundColorDark?: Maybe<Scalars['String']['output']>;
  readonly players?: Maybe<ReadonlyArray<DomainMpScorecardPlayer>>;
  readonly status: DomainCupLeaderboardTeamStatus;
  readonly teamColor: Scalars['String']['output'];
  readonly teamFlag: Scalars['String']['output'];
  readonly teamId: Scalars['ID']['output'];
  readonly teamName: Scalars['String']['output'];
  readonly teamPoints?: Maybe<Scalars['String']['output']>;
  readonly teamShortName: Scalars['String']['output'];
  readonly textColor?: Maybe<Scalars['String']['output']>;
};

export type DomainCupTeamRoster = {
  readonly __typename: 'CupTeamRoster';
  readonly flagSurroundColor?: Maybe<Scalars['String']['output']>;
  readonly flagSurroundColorDark?: Maybe<Scalars['String']['output']>;
  readonly sections: ReadonlyArray<DomainCupTeamRosterSection>;
  readonly teamColor: Scalars['String']['output'];
  readonly teamFlag: Scalars['String']['output'];
  readonly teamId: Scalars['ID']['output'];
  readonly teamLogo?: Maybe<Scalars['String']['output']>;
  readonly teamName: Scalars['String']['output'];
};

export type DomainCupTeamRosterSection = {
  readonly __typename: 'CupTeamRosterSection';
  readonly players: ReadonlyArray<DomainCupLeaderboardMatchPlayer>;
  readonly sectionTitle: Scalars['String']['output'];
  readonly showResults: Scalars['Boolean']['output'];
};

export type DomainCupTeamRosters = {
  readonly __typename: 'CupTeamRosters';
  readonly teams: ReadonlyArray<DomainCupTeamRoster>;
  readonly tournamentId: Scalars['ID']['output'];
};

export type DomainCupTeeTimes = {
  readonly __typename: 'CupTeeTimes';
  readonly currentRound: Scalars['Int']['output'];
  readonly drawersEnabled: Scalars['Boolean']['output'];
  readonly id: Scalars['ID']['output'];
  readonly rounds: ReadonlyArray<DomainCupTeeTimesRound>;
};

export type DomainCupTeeTimesRound = {
  readonly __typename: 'CupTeeTimesRound';
  readonly adConfig: Scalars['String']['output'];
  readonly completedMatches: Scalars['Int']['output'];
  readonly matches: ReadonlyArray<DomainCupLeaderboardMatch>;
  readonly roundDisplay: Scalars['String']['output'];
  readonly roundNum: Scalars['Int']['output'];
  readonly totalMatches: Scalars['Int']['output'];
};

export type DomainCupTournamentLeaderboard = {
  readonly __typename: 'CupTournamentLeaderboard';
  readonly allRounds: ReadonlyArray<DomainCupRound>;
  readonly completedMatches: Scalars['Int']['output'];
  readonly currentId: Scalars['String']['output'];
  readonly currentRound: Scalars['Int']['output'];
  readonly drawersEnabled: Scalars['Boolean']['output'];
  readonly format: DomainCupRoundFormat;
  readonly id: Scalars['ID']['output'];
  readonly liveActivitySponsor?: Maybe<DomainCupLiveActivitySponsor>;
  readonly matches: ReadonlyArray<DomainCupLeaderboardMatch>;
  readonly outcomeIqLogo?: Maybe<Scalars['String']['output']>;
  readonly rounds: ReadonlyArray<DomainCupTournamentRound>;
  readonly title: Scalars['String']['output'];
  readonly totalMatches: Scalars['Int']['output'];
  readonly tourcastURI?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastURL?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastURLWeb?: Maybe<Scalars['String']['output']>;
};

export type DomainCupTournamentLeaderboardCompressed = {
  readonly __typename: 'CupTournamentLeaderboardCompressed';
  readonly currentId: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
  readonly payload: Scalars['String']['output'];
};

export type DomainCupTournamentRound = {
  readonly __typename: 'CupTournamentRound';
  readonly adConfig: Scalars['String']['output'];
  readonly description: Scalars['String']['output'];
  readonly format: DomainCupRoundFormat;
  readonly roundNumber: Scalars['Int']['output'];
};

export type DomainCupTournamentStatus = {
  readonly __typename: 'CupTournamentStatus';
  readonly heroImage?: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly infoPath?: Maybe<Scalars['String']['output']>;
  readonly matchesComplete?: Maybe<DomainCupMatchesCompleteData>;
  readonly messages: ReadonlyArray<DomainLeaderboardMessage>;
  readonly miniLeaderboardOverride?: Maybe<Scalars['String']['output']>;
  readonly scorecardEnabled: Scalars['Boolean']['output'];
  readonly stickyBanner: Scalars['Boolean']['output'];
  readonly teams: ReadonlyArray<DomainCupTournamentTeam>;
  readonly tournamentId: Scalars['String']['output'];
  readonly type: DomainCupOverviewDisplayType;
};

export type DomainCupTournamentTeam = {
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

export type DomainCurrentLeaderPlayer = {
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
  readonly playerIcon?: Maybe<DomainLeaderboardPlayerIcon>;
  readonly playerState?: Maybe<DomainPlayerState>;
  readonly position: Scalars['String']['output'];
  readonly roundHeader: Scalars['String']['output'];
  readonly roundScore: Scalars['String']['output'];
  readonly shortName: Scalars['String']['output'];
  readonly teeTime?: Maybe<Scalars['AWSTimestamp']['output']>;
  readonly thru: Scalars['String']['output'];
  readonly totalScore: Scalars['String']['output'];
};

export type DomainCurrentLeaderSponsors = {
  readonly __typename: 'CurrentLeaderSponsors';
  readonly images: ReadonlyArray<DomainSponsorImage>;
  readonly text: Scalars['String']['output'];
};

export type DomainCurrentLeaders = {
  readonly __typename: 'CurrentLeaders';
  readonly hideRolexClock: Scalars['Boolean']['output'];
  readonly hideSov: Scalars['Boolean']['output'];
  readonly id: Scalars['ID']['output'];
  readonly miniatureLeaderboardExternalLinkOverride?: Maybe<Scalars['String']['output']>;
  readonly miniatureLeaderboardImgOverride?: Maybe<Scalars['String']['output']>;
  readonly players: ReadonlyArray<DomainCurrentLeaderPlayer>;
  readonly profileEnabled: Scalars['Boolean']['output'];
  readonly roundDisplay: Scalars['String']['output'];
  readonly roundStatus: DomainRoundStatus;
  readonly roundStatusColor: DomainRoundStatusColor;
  readonly roundStatusDisplay: Scalars['String']['output'];
  readonly sponsor?: Maybe<DomainCurrentLeaderSponsors>;
  readonly tournamentName: Scalars['String']['output'];
};

export type DomainCurrentLeadersCompressed = {
  readonly __typename: 'CurrentLeadersCompressed';
  readonly id: Scalars['ID']['output'];
  readonly payload: Scalars['String']['output'];
};

export type DomainCutLineInfo = {
  readonly __typename: 'CutLineInfo';
  readonly lastUpdated: Scalars['AWSTimestamp']['output'];
  readonly new?: Maybe<Scalars['Boolean']['output']>;
  readonly possibleCutLines: ReadonlyArray<DomainCutLinePossibility>;
  readonly probableCutLine: Scalars['String']['output'];
  readonly projectedCutLine: Scalars['String']['output'];
  readonly sponsorLogo?: Maybe<DomainImageAsset>;
  readonly sponsorName?: Maybe<Scalars['String']['output']>;
};

export type DomainCutLinePossibility = {
  readonly __typename: 'CutLinePossibility';
  readonly displayProbability: Scalars['String']['output'];
  readonly probability: Scalars['Float']['output'];
  readonly score: Scalars['String']['output'];
};

export type DomainDayWeather = {
  readonly __typename: 'DayWeather';
  readonly day: Scalars['String']['output'];
  readonly text: Scalars['String']['output'];
};

export type DomainDeleteAccountResponse = {
  readonly __typename: 'DeleteAccountResponse';
  readonly ok: Scalars['Boolean']['output'];
};

export type DomainDrawerDisplayState =
  | 'HOLE_ONLY'
  | 'PLAY_BY_PLAY'
  | 'ROUND_COMPLETE'
  | 'TEE_TIME';

export type DomainDropdownFragment = {
  readonly __typename: 'DropdownFragment';
  readonly bottomCta?: Maybe<DomainCallToAction>;
  readonly header: Scalars['String']['output'];
  readonly rows: ReadonlyArray<DomainDropdownRow>;
  readonly subheader?: Maybe<Scalars['String']['output']>;
  readonly topCta?: Maybe<DomainCallToAction>;
};

export type DomainDropdownRow = {
  readonly __typename: 'DropdownRow';
  readonly content?: Maybe<ReadonlyArray<Maybe<DomainNewsArticleNode>>>;
  readonly cta?: Maybe<DomainCallToAction>;
  readonly header: Scalars['String']['output'];
};

export type DomainEfiHole = {
  readonly __typename: 'EFIHole';
  readonly count: Scalars['String']['output'];
  readonly hole: Scalars['String']['output'];
};

export type DomainEfiPlayer = {
  readonly __typename: 'EFIPlayer';
  readonly displayName: Scalars['String']['output'];
  readonly history: ReadonlyArray<DomainEfiPlayerEagle>;
  readonly playerId: Scalars['ID']['output'];
  readonly totalEagles: Scalars['String']['output'];
};

export type DomainEfiPlayerEagle = {
  readonly __typename: 'EFIPlayerEagle';
  readonly hole: Scalars['Int']['output'];
  readonly round: Scalars['Int']['output'];
  readonly videoId?: Maybe<Scalars['String']['output']>;
};

export type DomainEaglesForImpact = {
  readonly __typename: 'EaglesForImpact';
  readonly charity: Scalars['String']['output'];
  readonly donation: Scalars['String']['output'];
  readonly eaglesTitle: Scalars['String']['output'];
  readonly holes: ReadonlyArray<DomainEfiHole>;
  readonly linkText?: Maybe<Scalars['String']['output']>;
  readonly linkUrl?: Maybe<Scalars['String']['output']>;
  readonly players: ReadonlyArray<DomainEfiPlayer>;
  readonly sponsorDescription: Scalars['String']['output'];
  /** @deprecated use sponsorLogoAsset */
  readonly sponsorLogo: Scalars['String']['output'];
  readonly sponsorLogoAsset: DomainImageAsset;
  readonly title: Scalars['String']['output'];
  readonly totalEagles: Scalars['String']['output'];
  readonly tournamentId: Scalars['ID']['output'];
};

/**   Player Odds V2 */
export type DomainEntityOdds = {
  readonly __typename: 'EntityOdds';
  readonly bettingProfile?: Maybe<Scalars['String']['output']>;
  readonly entityId: Scalars['ID']['output'];
  readonly marketPills: ReadonlyArray<DomainMarketPill>;
  /**   others available to request */
  readonly markets: ReadonlyArray<DomainMarket>;
  readonly message?: Maybe<DomainOddsMessage>;
  readonly provider: DomainOddsProvider;
  /**   playerId or teamId */
  readonly tournamentId: Scalars['String']['output'];
};

export type DomainEpisode = {
  readonly __typename: 'Episode';
  readonly date: Scalars['AWSTimestamp']['output'];
  readonly description: Scalars['String']['output'];
  readonly duration: Scalars['Int']['output'];
  readonly podcastId: Scalars['String']['output'];
  readonly streamUrl: Scalars['String']['output'];
  readonly title: Scalars['String']['output'];
};

export type DomainEvent = {
  readonly __typename: 'Event';
  readonly eventName: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
  readonly leaderboardId: Scalars['String']['output'];
};

export type DomainEventGuideConfig = {
  readonly __typename: 'EventGuideConfig';
  readonly augmentedReality?: Maybe<DomainAugmentedRealityConfig>;
  readonly eventGuideMap?: Maybe<Scalars['String']['output']>;
  readonly eventGuideURL?: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
};

export type DomainEventHub = {
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

export type DomainEventHubTable = {
  readonly __typename: 'EventHubTable';
  readonly cta?: Maybe<DomainCallToAction>;
  readonly mapCtaText?: Maybe<Scalars['String']['output']>;
  readonly mapIframe?: Maybe<Scalars['String']['output']>;
  readonly mapPdf?: Maybe<Scalars['String']['output']>;
  readonly mapSectionTitle?: Maybe<Scalars['String']['output']>;
  readonly notSharingLocationCta?: Maybe<DomainCallToAction>;
  readonly notSharingLocationFallbackDescriptionText?: Maybe<Scalars['String']['output']>;
  readonly notSharingLocationFallbackTitle?: Maybe<Scalars['String']['output']>;
  readonly outOfRangeCta?: Maybe<DomainCallToAction>;
  readonly outOfRangeFallbackDescriptionText?: Maybe<Scalars['String']['output']>;
  readonly outOfRangeFallbackPromoImg?: Maybe<Scalars['String']['output']>;
  readonly outOfRangeFallbackTitle?: Maybe<Scalars['String']['output']>;
  readonly partnershipAsset?: Maybe<Scalars['String']['output']>;
  readonly partnershipText?: Maybe<Scalars['String']['output']>;
  readonly path: Scalars['String']['output'];
  readonly radius?: Maybe<Scalars['Float']['output']>;
  readonly sectionTitle?: Maybe<Scalars['String']['output']>;
};

export type DomainEventRegion =
  | 'EUROPE'
  | 'INTERNATIONAL'
  | 'US';

export type DomainExpertPicks = {
  readonly __typename: 'ExpertPicks';
  readonly expertPicksTableRows: ReadonlyArray<DomainExpertPicksTableRow>;
  readonly tournamentName: Scalars['String']['output'];
};

export type DomainExpertPicksNode = {
  readonly __typename: 'ExpertPicksNode';
  readonly isPowerRankings: Scalars['Boolean']['output'];
  readonly path: Scalars['String']['output'];
};

export type DomainExpertPicksTableRow = {
  readonly __typename: 'ExpertPicksTableRow';
  readonly comment: ReadonlyArray<DomainTourSponsorDescription>;
  readonly expertName?: Maybe<Scalars['String']['output']>;
  readonly expertTitle?: Maybe<Scalars['String']['output']>;
  readonly lineup: ReadonlyArray<DomainPlayerInfo>;
  readonly percentSelected?: Maybe<Scalars['String']['output']>;
  readonly percentSelectedColor?: Maybe<DomainStatColor>;
  readonly winner?: Maybe<DomainPlayerInfo>;
};

export type DomainFavoritePlayer = {
  readonly __typename: 'FavoritePlayer';
  readonly id: Scalars['ID']['output'];
};

export type DomainFavoritePlayerInput = {
  readonly id: Scalars['ID']['input'];
};

export type DomainFavoriteTourResponse = {
  readonly __typename: 'FavoriteTourResponse';
  readonly ok: Scalars['Boolean']['output'];
  readonly tourCode?: Maybe<DomainTourCode>;
};

export type DomainFeatureItem = {
  readonly __typename: 'FeatureItem';
  readonly fieldStatType?: Maybe<DomainFieldStatType>;
  readonly leaderboardFeatures?: Maybe<DomainLeaderboardFeature>;
  readonly name: Scalars['String']['output'];
  readonly new: Scalars['Boolean']['output'];
  readonly sponsor?: Maybe<DomainFeatureSponsor>;
  readonly tooltipText?: Maybe<Scalars['String']['output']>;
  readonly tooltipTitle?: Maybe<Scalars['String']['output']>;
};

export type DomainFeatureSponsor = {
  readonly __typename: 'FeatureSponsor';
  /** @deprecated use sponsorLogoAsset */
  readonly sponsorLogo: Scalars['String']['output'];
  readonly sponsorLogoAsset: DomainImageAsset;
  /** @deprecated use sponsorLogoDarkAsset */
  readonly sponsorLogoDark: Scalars['String']['output'];
  readonly sponsorLogoDarkAsset: DomainImageAsset;
  readonly sponsorText: Scalars['String']['output'];
};

export type DomainField = {
  readonly __typename: 'Field';
  readonly alternates: ReadonlyArray<DomainPlayerField>;
  readonly features: ReadonlyArray<DomainFeatureItem>;
  readonly hideSov: Scalars['Boolean']['output'];
  readonly id: Scalars['ID']['output'];
  readonly lastUpdated?: Maybe<Scalars['AWSTimestamp']['output']>;
  readonly message?: Maybe<Scalars['String']['output']>;
  readonly players: ReadonlyArray<DomainPlayerField>;
  readonly standingsHeader: Scalars['String']['output'];
  readonly tournamentName: Scalars['String']['output'];
};

export type DomainFieldGroup = {
  readonly __typename: 'FieldGroup';
  readonly groupId?: Maybe<Scalars['String']['output']>;
  readonly groupTitle: Scalars['String']['output'];
  readonly players: ReadonlyArray<DomainPlayerField>;
};

export type DomainFieldPromoSection = {
  readonly __typename: 'FieldPromoSection';
  readonly title: Scalars['String']['output'];
  readonly tournamentIds: ReadonlyArray<Scalars['String']['output']>;
};

export type DomainFieldStatCourseFit = {
  readonly __typename: 'FieldStatCourseFit';
  readonly playerId: Scalars['String']['output'];
  readonly score: Scalars['String']['output'];
  readonly stats: ReadonlyArray<DomainFieldStatCourseFitStat>;
  readonly totalRounds: Scalars['String']['output'];
};

export type DomainFieldStatCourseFitStat = {
  readonly __typename: 'FieldStatCourseFitStat';
  readonly statColor: DomainStatColor;
  readonly statRank: Scalars['String']['output'];
  readonly statValue: Scalars['String']['output'];
};

export type DomainFieldStatCurrentForm = {
  readonly __typename: 'FieldStatCurrentForm';
  readonly playerId: Scalars['String']['output'];
  readonly strokesGained: ReadonlyArray<DomainFieldStatStrokesGained>;
  readonly strokesGainedHeader: ReadonlyArray<Scalars['String']['output']>;
  readonly totalRounds: Scalars['String']['output'];
  readonly tournamentResults: ReadonlyArray<DomainFieldStatTournamentResult>;
};

export type DomainFieldStatPlayer = DomainFieldStatCourseFit | DomainFieldStatCurrentForm;

export type DomainFieldStatStrokesGained = {
  readonly __typename: 'FieldStatStrokesGained';
  readonly statColor: DomainStatColor;
  readonly statId: Scalars['String']['output'];
  readonly statValue: Scalars['String']['output'];
};

export type DomainFieldStatTournamentResult = {
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

export type DomainFieldStatType =
  | 'COURSE_FIT'
  | 'CURRENT_FORM'
  | 'TOURNAMENT_HISTORY';

export type DomainFieldStats = {
  readonly __typename: 'FieldStats';
  readonly fieldStatType: DomainFieldStatType;
  readonly players: ReadonlyArray<DomainFieldStatPlayer>;
  readonly statHeaders?: Maybe<ReadonlyArray<Scalars['String']['output']>>;
  readonly tournamentId: Scalars['ID']['output'];
  readonly tournamentSeasonHeaders?: Maybe<ReadonlyArray<DomainSeasonDisplayHeader>>;
};

export type DomainFinishStatValue = {
  readonly __typename: 'FinishStatValue';
  readonly date: Scalars['Int']['output'];
  readonly displayDate: Scalars['String']['output'];
  readonly displayValue: Scalars['String']['output'];
  readonly tournamentName: Scalars['String']['output'];
  readonly value: Scalars['Float']['output'];
};

export type DomainFormatType =
  | 'MATCH_PLAY'
  | 'STABLEFORD'
  | 'STROKE_PLAY'
  | 'TEAM_CUP'
  | 'TEAM_STROKE';

export type DomainFranchise = {
  readonly __typename: 'Franchise';
  readonly displayName: Scalars['String']['output'];
  readonly queryValue: Scalars['String']['output'];
};

export type DomainFranchisePillConfig = {
  readonly __typename: 'FranchisePillConfig';
  readonly category?: Maybe<Scalars['String']['output']>;
  readonly franchises: ReadonlyArray<DomainFranchise>;
  readonly rating?: Maybe<Scalars['Int']['output']>;
};

export type DomainFutureVenuesCard = {
  readonly __typename: 'FutureVenuesCard';
  readonly course?: Maybe<Scalars['String']['output']>;
  readonly coursePhoto?: Maybe<Scalars['String']['output']>;
  readonly cta?: Maybe<DomainCallToAction>;
  readonly location?: Maybe<Scalars['String']['output']>;
  readonly venueLink?: Maybe<Scalars['String']['output']>;
  readonly year?: Maybe<Scalars['String']['output']>;
};

export type DomainFutureVenuesFragment = {
  readonly __typename: 'FutureVenuesFragment';
  readonly bottomCta?: Maybe<DomainCallToAction>;
  readonly cards?: Maybe<ReadonlyArray<DomainFutureVenuesCard>>;
  readonly sectionTitle?: Maybe<Scalars['String']['output']>;
  readonly topCta?: Maybe<DomainCallToAction>;
};

export type DomainFutureVenuesRow = {
  readonly __typename: 'FutureVenuesRow';
  /** @deprecated Use beautyImageAsset */
  readonly beautyImage?: Maybe<Scalars['String']['output']>;
  readonly beautyImageAsset?: Maybe<DomainImageAsset>;
  readonly course?: Maybe<Scalars['String']['output']>;
  readonly eventDates?: Maybe<Scalars['String']['output']>;
  readonly hospitalityLink?: Maybe<Scalars['String']['output']>;
  readonly hospitalityLinkTarget?: Maybe<Scalars['String']['output']>;
  readonly location?: Maybe<Scalars['String']['output']>;
  readonly moreInfoDescription?: Maybe<ReadonlyArray<Maybe<DomainNewsArticleNode>>>;
  readonly ticketLink?: Maybe<Scalars['String']['output']>;
  readonly ticketLinkTarget?: Maybe<Scalars['String']['output']>;
  readonly volunteersLink?: Maybe<Scalars['String']['output']>;
  readonly volunteersLinkTarget?: Maybe<Scalars['String']['output']>;
  readonly year?: Maybe<Scalars['String']['output']>;
};

export type DomainFutureVenuesTableFragment = {
  readonly __typename: 'FutureVenuesTableFragment';
  readonly rows: ReadonlyArray<DomainFutureVenuesRow>;
};

export type DomainGenericContent = {
  readonly __typename: 'GenericContent';
  readonly adConfigNode?: Maybe<Scalars['String']['output']>;
  readonly authorReference?: Maybe<DomainNewsArticleAuthor>;
  readonly datePublished: Scalars['AWSTimestamp']['output'];
  readonly headline: Scalars['String']['output'];
  readonly metadata?: Maybe<DomainNewsArticleMetadata>;
  readonly nodes: ReadonlyArray<DomainNewsArticleNode>;
  readonly path: Scalars['String']['output'];
};

export type DomainGenericContentCompressed = {
  readonly __typename: 'GenericContentCompressed';
  readonly path: Scalars['String']['output'];
  readonly payload: Scalars['String']['output'];
};

export type DomainGlobalAdConfig = {
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

export type DomainGroup = {
  readonly __typename: 'Group';
  readonly backNine: Scalars['Boolean']['output'];
  readonly courseId?: Maybe<Scalars['String']['output']>;
  readonly courseName?: Maybe<Scalars['String']['output']>;
  readonly groupHole: Scalars['Int']['output'];
  readonly groupLocation: Scalars['String']['output'];
  readonly groupLocationCode: Scalars['String']['output'];
  readonly groupNumber: Scalars['Int']['output'];
  readonly groupSort: Scalars['String']['output'];
  readonly groupStatus: DomainPlayerState;
  readonly holeLocation: Scalars['String']['output'];
  readonly players: ReadonlyArray<DomainPlayer>;
  readonly showScorecard: Scalars['Boolean']['output'];
  readonly startTee: Scalars['Int']['output'];
  readonly teeTime: Scalars['AWSTimestamp']['output'];
  readonly tourcastURI?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastURL?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastURLWeb?: Maybe<Scalars['String']['output']>;
};

export type DomainGroupHoleLocation =
  | 'COMPLETE'
  | 'FAIRWAY'
  | 'GREEN'
  | 'NOT_STARTED'
  | 'TEE'
  | 'UNKNOWN';

export type DomainGroupLocation = {
  readonly __typename: 'GroupLocation';
  readonly courses: ReadonlyArray<DomainGroupLocationCourse>;
  readonly tournamentId: Scalars['ID']['output'];
};

export type DomainGroupLocationCourse = {
  readonly __typename: 'GroupLocationCourse';
  readonly courseId: Scalars['String']['output'];
  readonly courseName: Scalars['String']['output'];
  readonly holes: ReadonlyArray<DomainGroupLocationHole>;
  readonly round: Scalars['Int']['output'];
  readonly tournamentAndCourseId: Scalars['ID']['output'];
  readonly tournamentId: Scalars['String']['output'];
};

export type DomainGroupLocationData = {
  readonly __typename: 'GroupLocationData';
  readonly backNinePaceOfPlayTime?: Maybe<Scalars['String']['output']>;
  readonly courseId: Scalars['String']['output'];
  readonly currentHole?: Maybe<Scalars['String']['output']>;
  readonly frontNinePaceOfPlayTime?: Maybe<Scalars['String']['output']>;
  readonly group: Scalars['Int']['output'];
  readonly location: Scalars['String']['output'];
  readonly locationCode: DomainGroupHoleLocation;
  readonly locationSort: Scalars['String']['output'];
  readonly teeTime?: Maybe<Scalars['AWSTimestamp']['output']>;
};

export type DomainGroupLocationGroup = {
  readonly __typename: 'GroupLocationGroup';
  readonly color?: Maybe<Scalars['String']['output']>;
  readonly groupNum: Scalars['Int']['output'];
  readonly groupSort: Scalars['String']['output'];
  readonly location: DomainGroupHoleLocation;
  readonly playerData?: Maybe<DomainGroupLocationPlayerData>;
  readonly round: Scalars['Int']['output'];
};

export type DomainGroupLocationHole = {
  readonly __typename: 'GroupLocationHole';
  readonly groups: ReadonlyArray<DomainGroupLocationGroup>;
  readonly holeNumber: Scalars['Int']['output'];
  readonly par: Scalars['Int']['output'];
  readonly yardage: Scalars['Int']['output'];
};

export type DomainGroupLocationPlayerData = {
  readonly __typename: 'GroupLocationPlayerData';
  readonly addressingBall?: Maybe<Scalars['String']['output']>;
  readonly nextToHit?: Maybe<Scalars['String']['output']>;
};

export type DomainGroupRoundScore = {
  readonly __typename: 'GroupRoundScore';
  readonly holes: ReadonlyArray<DomainGroupScoreHeader>;
  readonly parTotal: Scalars['Int']['output'];
  readonly players: ReadonlyArray<DomainGroupScorePlayer>;
  readonly totalLabel: Scalars['String']['output'];
};

export type DomainGroupScoreHeader = {
  readonly __typename: 'GroupScoreHeader';
  readonly holeNumber: Scalars['Int']['output'];
  readonly par: Scalars['Int']['output'];
};

export type DomainGroupScorePlayer = {
  readonly __typename: 'GroupScorePlayer';
  readonly active: Scalars['Boolean']['output'];
  readonly player: DomainPlayer;
  readonly roundTotal: Scalars['String']['output'];
  readonly roundTotalHeader: Scalars['String']['output'];
  readonly rowTotal: Scalars['String']['output'];
  readonly scores: ReadonlyArray<DomainSimpleScore>;
};

export type DomainGroupScorecard = {
  readonly __typename: 'GroupScorecard';
  readonly backNine: Scalars['Boolean']['output'];
  readonly courseId?: Maybe<Scalars['String']['output']>;
  readonly courseName: Scalars['String']['output'];
  readonly currentHole: Scalars['Int']['output'];
  readonly firstNine: DomainGroupRoundScore;
  readonly holeDetail: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
  readonly locationDetail: Scalars['String']['output'];
  readonly players: ReadonlyArray<DomainScorecardHeaderPlayer>;
  readonly roundHeader: Scalars['String']['output'];
  readonly secondNine: DomainGroupRoundScore;
  readonly teeTime: Scalars['AWSTimestamp']['output'];
  readonly tourcastURL?: Maybe<Scalars['String']['output']>;
};

export type DomainGroupShotDetails = {
  readonly __typename: 'GroupShotDetails';
  readonly defaultHolePickle: DomainHolePickleType;
  readonly displayType: DomainShotDetailsDisplayType;
  readonly groupNumber: Scalars['Int']['output'];
  readonly holes: ReadonlyArray<DomainGroupShotDetailsHole>;
  readonly id: Scalars['ID']['output'];
  readonly message: Scalars['String']['output'];
  readonly players: ReadonlyArray<DomainGroupShotDetailsPlayer>;
  readonly round: Scalars['Int']['output'];
  readonly shotVideo?: Maybe<DomainVideo>;
  readonly shotVideos?: Maybe<ReadonlyArray<DomainVideo>>;
  readonly tournamentId: Scalars['String']['output'];
};

export type DomainGroupShotDetailsCompressed = {
  readonly __typename: 'GroupShotDetailsCompressed';
  readonly id: Scalars['ID']['output'];
  readonly payload: Scalars['String']['output'];
};

export type DomainGroupShotDetailsHole = {
  readonly __typename: 'GroupShotDetailsHole';
  readonly activePlayers: ReadonlyArray<Scalars['String']['output']>;
  readonly displayHoleNumber: Scalars['String']['output'];
  readonly enhancedPickle?: Maybe<DomainHolePickle>;
  readonly fairwayCenter: DomainStrokeCoordinates;
  readonly green: Scalars['Boolean']['output'];
  readonly holeNumber: Scalars['Int']['output'];
  /** @deprecated Use holePickleBottomToTopAsset */
  readonly holePickleBottomToTop: Scalars['String']['output'];
  readonly holePickleBottomToTopAsset: DomainImageAsset;
  /** @deprecated Use holePickleGreenBottomToTopAsset */
  readonly holePickleGreenBottomToTop: Scalars['String']['output'];
  readonly holePickleGreenBottomToTopAsset: DomainImageAsset;
  /** @deprecated Use holePickleGreenLeftToRightAsset */
  readonly holePickleGreenLeftToRight: Scalars['String']['output'];
  readonly holePickleGreenLeftToRightAsset: DomainImageAsset;
  /** @deprecated Use holePickleLeftToRightAsset */
  readonly holePickleLeftToRight: Scalars['String']['output'];
  readonly holePickleLeftToRightAsset: DomainImageAsset;
  readonly par: Scalars['Int']['output'];
  readonly pinGreen: DomainPointOfInterestCoords;
  readonly pinOverview: DomainPointOfInterestCoords;
  readonly rank?: Maybe<Scalars['String']['output']>;
  readonly strokes: ReadonlyArray<DomainGroupShotDetailsStroke>;
  readonly teeGreen: DomainPointOfInterestCoords;
  readonly teeOverview: DomainPointOfInterestCoords;
  readonly yardage: Scalars['Int']['output'];
};

export type DomainGroupShotDetailsPlayer = {
  readonly __typename: 'GroupShotDetailsPlayer';
  readonly displayName: Scalars['String']['output'];
  readonly firstName: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
  readonly lastName: Scalars['String']['output'];
  readonly lineColor: Scalars['String']['output'];
  readonly shortName: Scalars['String']['output'];
};

export type DomainGroupShotDetailsStroke = {
  readonly __typename: 'GroupShotDetailsStroke';
  readonly playByPlayLabel: Scalars['String']['output'];
  readonly players: ReadonlyArray<DomainGroupShotDetailsStrokePlayer>;
  readonly strokeNumber: Scalars['Int']['output'];
};

export type DomainGroupShotDetailsStrokePlayer = {
  readonly __typename: 'GroupShotDetailsStrokePlayer';
  readonly ballPath?: Maybe<DomainBallPath>;
  readonly displayName: Scalars['String']['output'];
  readonly distance: Scalars['String']['output'];
  readonly distanceRemaining: Scalars['String']['output'];
  readonly finalShot: Scalars['Boolean']['output'];
  readonly fromLocation: Scalars['String']['output'];
  readonly fromLocationCode: Scalars['String']['output'];
  readonly green: DomainShotLinkCoordWrapper;
  readonly markerText: Scalars['String']['output'];
  readonly overview: DomainShotLinkCoordWrapper;
  readonly playByPlay: Scalars['String']['output'];
  readonly playerId: Scalars['String']['output'];
  readonly radarData?: Maybe<DomainRadarData>;
  readonly score: Scalars['String']['output'];
  readonly shortName: Scalars['String']['output'];
  readonly showMarker: Scalars['Boolean']['output'];
  readonly status: DomainHoleScoreStatus;
  readonly strokeType: DomainHoleStrokeType;
  readonly toLocation: Scalars['String']['output'];
  readonly toLocationCode: Scalars['String']['output'];
  readonly videoId?: Maybe<Scalars['String']['output']>;
};

export type DomainGroupShotDetailsTeam = {
  readonly __typename: 'GroupShotDetailsTeam';
  readonly players?: Maybe<ReadonlyArray<DomainGroupShotDetailsPlayer>>;
  readonly teamId: Scalars['String']['output'];
  readonly teamName: Scalars['String']['output'];
};

export type DomainGroupStageGroup = {
  readonly __typename: 'GroupStageGroup';
  readonly groupHeader: Scalars['String']['output'];
  readonly groupPlayers: ReadonlyArray<DomainGroupStagePlayer>;
};

export type DomainGroupStageHeader = {
  readonly __typename: 'GroupStageHeader';
  readonly lost: Scalars['String']['output'];
  readonly player: Scalars['String']['output'];
  readonly points: Scalars['String']['output'];
  readonly tied: Scalars['String']['output'];
  readonly type: DomainHeaderType;
  readonly won: Scalars['String']['output'];
};

export type DomainGroupStagePlayer = {
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
  readonly previousMatches: DomainPreviousMatches;
  readonly record: DomainPlayerRecord;
  readonly shortName: Scalars['String']['output'];
  readonly tournamentSeed: Scalars['String']['output'];
};

export type DomainGroupStageRankings = {
  readonly __typename: 'GroupStageRankings';
  readonly groupStageHeaders: ReadonlyArray<DomainGroupStageHeader>;
  readonly groups: ReadonlyArray<DomainGroupStageGroup>;
  readonly informationSections: ReadonlyArray<DomainInformationSection>;
  readonly title: Scalars['String']['output'];
  readonly tournamentId: Scalars['ID']['output'];
};

export type DomainGroupV2 = {
  readonly __typename: 'GroupV2';
  readonly backNine: Scalars['Boolean']['output'];
  readonly courseId?: Maybe<Scalars['String']['output']>;
  readonly courseName?: Maybe<Scalars['String']['output']>;
  readonly groupNumber: Scalars['Int']['output'];
  readonly players: ReadonlyArray<DomainPlayer>;
  readonly showScorecard: Scalars['Boolean']['output'];
  readonly startTee: Scalars['Int']['output'];
  readonly teeTime: Scalars['AWSTimestamp']['output'];
  readonly tourcastURI?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastURL?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastURLWeb?: Maybe<Scalars['String']['output']>;
};

export type DomainGroupedField = {
  readonly __typename: 'GroupedField';
  readonly alternates: DomainPlayerGroup;
  readonly features: ReadonlyArray<DomainFeatureItem>;
  readonly id: Scalars['ID']['output'];
  readonly lastUpdated?: Maybe<Scalars['AWSTimestamp']['output']>;
  readonly message?: Maybe<Scalars['String']['output']>;
  readonly players: DomainPlayerGroup;
  readonly standingsHeader: Scalars['String']['output'];
  readonly tournamentName: Scalars['String']['output'];
};

export type DomainHeaderType =
  | 'LONG'
  | 'SHORT';

export type DomainHeroCarousel = {
  readonly __typename: 'HeroCarousel';
  readonly displayInline: Scalars['Boolean']['output'];
  readonly slides: ReadonlyArray<DomainHeroCarouselItem>;
};

export type DomainHeroCarouselItem = {
  readonly __typename: 'HeroCarouselItem';
  readonly articleContent?: Maybe<DomainNewsArticle>;
  readonly autoplay?: Maybe<Scalars['Boolean']['output']>;
  readonly cta1?: Maybe<DomainCallToAction>;
  readonly cta2?: Maybe<DomainCallToAction>;
  readonly heroImage?: Maybe<Scalars['String']['output']>;
  readonly slideHeadline?: Maybe<Scalars['String']['output']>;
  readonly slideSubhead?: Maybe<Scalars['String']['output']>;
  readonly videoContent?: Maybe<DomainVideo>;
};

export type DomainHistoricalLeaderboard = {
  readonly __typename: 'HistoricalLeaderboard';
  readonly additionalDataHeaders: ReadonlyArray<Scalars['String']['output']>;
  readonly availableSeasons: ReadonlyArray<DomainStatYearPills>;
  readonly id: Scalars['ID']['output'];
  readonly players: ReadonlyArray<DomainHistoricalLeaderboardRow>;
  readonly recap?: Maybe<DomainWeatherNotes>;
  readonly rounds: ReadonlyArray<Scalars['String']['output']>;
  readonly teams?: Maybe<ReadonlyArray<Maybe<DomainHistoricalLeaderboardTeamRow>>>;
  readonly tournamentResultsMessage?: Maybe<DomainTournamentResultsMessage>;
  readonly winner?: Maybe<DomainWinner>;
  readonly winningTeam?: Maybe<ReadonlyArray<Maybe<DomainWinner>>>;
};

export type DomainHistoricalLeaderboardRow = {
  readonly __typename: 'HistoricalLeaderboardRow';
  readonly additionalData: ReadonlyArray<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly parRelativeScore: Scalars['String']['output'];
  readonly player: DomainPlayer;
  readonly position: Scalars['String']['output'];
  readonly rounds: ReadonlyArray<DomainHistoricalRoundScore>;
  readonly total: Scalars['String']['output'];
};

export type DomainHistoricalLeaderboardTeamRow = {
  readonly __typename: 'HistoricalLeaderboardTeamRow';
  readonly additionalData: ReadonlyArray<Scalars['String']['output']>;
  readonly parRelativeScore: Scalars['String']['output'];
  readonly players: ReadonlyArray<DomainPlayer>;
  readonly position: Scalars['String']['output'];
  readonly rounds?: Maybe<ReadonlyArray<DomainHistoricalRoundScore>>;
  readonly teamId: Scalars['String']['output'];
  readonly total: Scalars['String']['output'];
};

export type DomainHistoricalOddsId =
  | 'TOP_RANKED_3'
  | 'TOP_RANKED_5'
  | 'TOP_RANKED_10'
  | 'TOP_RANKED_20'
  | 'WINNER';

export type DomainHistoricalPlayerOdds = {
  readonly __typename: 'HistoricalPlayerOdds';
  readonly marketName: Scalars['String']['output'];
  readonly message?: Maybe<DomainOddsMessage>;
  readonly odds: Scalars['String']['output'];
  readonly oddsSwing: DomainOddsSwing;
  readonly optionId: Scalars['String']['output'];
  readonly playerId: Scalars['String']['output'];
  readonly season: Scalars['Int']['output'];
  readonly timeStamp: Scalars['AWSTimestamp']['output'];
  readonly tournamentId: Scalars['String']['output'];
};

export type DomainHistoricalPlayerScorecards = {
  readonly __typename: 'HistoricalPlayerScorecards';
  readonly playerId: Scalars['ID']['output'];
  readonly tours: ReadonlyArray<DomainHistoricalScorecardTour>;
};

export type DomainHistoricalRoundScore = {
  readonly __typename: 'HistoricalRoundScore';
  readonly parRelativeScore: Scalars['String']['output'];
  readonly score: Scalars['String']['output'];
};

export type DomainHistoricalScorecardTour = {
  readonly __typename: 'HistoricalScorecardTour';
  readonly tourCode: DomainTourCode;
  readonly years: ReadonlyArray<DomainHistoricalScorecardYear>;
};

export type DomainHistoricalScorecardYear = {
  readonly __typename: 'HistoricalScorecardYear';
  readonly displayYear: Scalars['String']['output'];
  readonly tournamentPills: ReadonlyArray<DomainStatTournamentPill>;
  readonly year: Scalars['Int']['output'];
};

/**
 *   End
 *  Market Abstractions
 */
export type DomainHistoricalTournamentOdds = {
  readonly __typename: 'HistoricalTournamentOdds';
  readonly id: Scalars['ID']['output'];
  readonly market?: Maybe<DomainMarket>;
  readonly message?: Maybe<DomainOddsMessage>;
  /**   tournamentId-provider */
  readonly provider: DomainOddsProvider;
  readonly tournamentId: Scalars['String']['output'];
};

export type DomainHistoricalTournamentOddsArgs = {
  readonly __typename: 'HistoricalTournamentOddsArgs';
  readonly marketId: DomainOddsMarketType;
  readonly timeStamp?: Maybe<Scalars['AWSDateTime']['output']>;
  readonly tournamentId: Scalars['String']['output'];
};

export type DomainHistoryInfo = {
  readonly __typename: 'HistoryInfo';
  readonly contentCarousel: ReadonlyArray<Maybe<DomainContentCarousel>>;
  readonly cta?: Maybe<DomainCallToAction>;
  readonly displayCta?: Maybe<Scalars['Boolean']['output']>;
  readonly europeCaptain?: Maybe<Scalars['String']['output']>;
  readonly infoText?: Maybe<ReadonlyArray<Maybe<DomainNewsArticleNode>>>;
  readonly usCaptain?: Maybe<Scalars['String']['output']>;
};

export type DomainHistoryScore = {
  readonly __typename: 'HistoryScore';
  readonly bottomCta?: Maybe<DomainCallToAction>;
  readonly leftFlagIcon?: Maybe<Scalars['String']['output']>;
  readonly leftScore?: Maybe<Scalars['String']['output']>;
  readonly leftTeam?: Maybe<Scalars['String']['output']>;
  readonly rightFlagIcon?: Maybe<Scalars['String']['output']>;
  readonly rightScore?: Maybe<Scalars['String']['output']>;
  readonly rightTeam?: Maybe<Scalars['String']['output']>;
  readonly sectionSubhead: Scalars['String']['output'];
  readonly sectionTitle: Scalars['String']['output'];
  readonly topCta?: Maybe<DomainCallToAction>;
  readonly trophyIcon?: Maybe<Scalars['String']['output']>;
};

export type DomainHoleDetail = {
  readonly __typename: 'HoleDetail';
  readonly courseId: Scalars['String']['output'];
  readonly holeImage: Scalars['String']['output'];
  readonly holeImageLandscape: Scalars['String']['output'];
  readonly holeInfo: DomainHoleDetailInfo;
  readonly holeNum: Scalars['Int']['output'];
  readonly id: Scalars['ID']['output'];
  readonly rounds: ReadonlyArray<DomainHoleDetailRound>;
  readonly statsAvailability: DomainHoleDetailsAvailability;
  readonly statsSummary: DomainHoleStatSummary;
  readonly tourcastURI?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastURL?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastURLWeb?: Maybe<Scalars['String']['output']>;
  readonly tournamentId: Scalars['ID']['output'];
};

export type DomainHoleDetailInfo = {
  readonly __typename: 'HoleDetailInfo';
  readonly aboutThisHole: Scalars['String']['output'];
  /** @deprecated Use holePickleGreenLeftToRightAsset */
  readonly greenPickle: Scalars['String']['output'];
  readonly holeNum: Scalars['Int']['output'];
  /** @deprecated Use holePickleLeftToRightAsset */
  readonly holePickle: Scalars['String']['output'];
  /** @deprecated Use holePickleBottomToTopAsset */
  readonly holePickleBottomToTop: Scalars['String']['output'];
  readonly holePickleBottomToTopAsset: DomainImageAsset;
  /** @deprecated Use holePickleGreenBottomToTopAsset */
  readonly holePickleGreenBottomToTop: Scalars['String']['output'];
  readonly holePickleGreenBottomToTopAsset: DomainImageAsset;
  readonly holePickleGreenLeftToRightAsset: DomainImageAsset;
  readonly holePickleLeftToRightAsset: DomainImageAsset;
  readonly par: Scalars['Int']['output'];
  readonly pinGreen: DomainPointOfInterestCoords;
  readonly rank?: Maybe<Scalars['Int']['output']>;
  readonly rounds?: Maybe<Scalars['Int']['output']>;
  readonly scoringAverageDiff: Scalars['String']['output'];
  readonly yards: Scalars['Int']['output'];
};

export type DomainHoleDetailRound = {
  readonly __typename: 'HoleDetailRound';
  readonly groups: ReadonlyArray<DomainHoleGroup>;
  readonly matches?: Maybe<ReadonlyArray<DomainHoleMatch>>;
  readonly roundNum: Scalars['Int']['output'];
  readonly teamGroups?: Maybe<ReadonlyArray<DomainTeamHoleGroups>>;
};

export type DomainHoleDetailsAvailability =
  | 'NONE'
  | 'SHOT_DETAILS'
  | 'STATS';

export type DomainHoleGroup = {
  readonly __typename: 'HoleGroup';
  readonly groupLocation: Scalars['String']['output'];
  readonly groupLocationCode: Scalars['String']['output'];
  readonly groupNumber: Scalars['Int']['output'];
  readonly players: ReadonlyArray<DomainHoleGroupPlayer>;
  readonly tourcastURI?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastURL?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastURLWeb?: Maybe<Scalars['String']['output']>;
};

export type DomainHoleGroupPlayer = {
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

export type DomainHoleGroupTeam = {
  readonly __typename: 'HoleGroupTeam';
  readonly players: ReadonlyArray<DomainHoleGroupPlayer>;
};

export type DomainHoleHeader = {
  readonly __typename: 'HoleHeader';
  readonly hole: Scalars['String']['output'];
  readonly holeNumber: Scalars['Int']['output'];
  readonly par: Scalars['String']['output'];
};

export type DomainHoleHeaderV2 = {
  readonly __typename: 'HoleHeaderV2';
  readonly displayValue: Scalars['String']['output'];
  readonly holeNumber?: Maybe<Scalars['Int']['output']>;
  readonly order: Scalars['Int']['output'];
  readonly par: Scalars['String']['output'];
};

export type DomainHoleMatch = {
  readonly __typename: 'HoleMatch';
  readonly groupName?: Maybe<Scalars['String']['output']>;
  readonly match?: Maybe<DomainMpLeaderboardMatch>;
  readonly matchLocation: Scalars['String']['output'];
  readonly matchLocationCode: Scalars['String']['output'];
  readonly tourcastURI?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastURL?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastURLWeb?: Maybe<Scalars['String']['output']>;
};

export type DomainHolePickle = {
  readonly __typename: 'HolePickle';
  readonly bottomToTop: Scalars['String']['output'];
  readonly bottomToTopAsset: DomainImageAsset;
  readonly greenBottomToTop: Scalars['String']['output'];
  readonly greenBottomToTopAsset: DomainImageAsset;
  readonly greenLeftToRight: Scalars['String']['output'];
  readonly greenLeftToRightAsset: DomainImageAsset;
  readonly leftToRight: Scalars['String']['output'];
  readonly leftToRightAsset: DomainImageAsset;
};

export type DomainHolePickleType =
  | 'STANDARD'
  | 'TOURCAST_2D';

export type DomainHolePlayedStatus =
  | 'PLAYED'
  | 'UNPLAYED';

export type DomainHoleScore = {
  readonly __typename: 'HoleScore';
  readonly holeNumber: Scalars['Int']['output'];
  readonly par: Scalars['Int']['output'];
  readonly roundScore: Scalars['String']['output'];
  readonly score: Scalars['String']['output'];
  readonly sequenceNumber: Scalars['Int']['output'];
  readonly status: DomainHoleScoreStatus;
  readonly yardage: Scalars['Int']['output'];
};

export type DomainHoleScoreStatus =
  | 'BIRDIE'
  | 'BOGEY'
  | 'CONCEDED'
  | 'DOUBLE_BOGEY'
  | 'EAGLE'
  | 'NONE'
  | 'PAR';

export type DomainHoleStat = DomainCourseHoleStats | DomainSummaryRow;

export type DomainHoleStatSummary = {
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

export type DomainHoleStroke = {
  readonly __typename: 'HoleStroke';
  readonly ballPath?: Maybe<DomainBallPath>;
  readonly distance: Scalars['String']['output'];
  readonly distanceRemaining: Scalars['String']['output'];
  readonly finalStroke: Scalars['Boolean']['output'];
  readonly fromLocation: Scalars['String']['output'];
  readonly fromLocationCode: Scalars['String']['output'];
  readonly green: DomainShotLinkCoordWrapper;
  readonly groupShowMarker: Scalars['Boolean']['output'];
  readonly markerText: Scalars['String']['output'];
  readonly overview: DomainShotLinkCoordWrapper;
  readonly playByPlay: Scalars['String']['output'];
  readonly playByPlayLabel: Scalars['String']['output'];
  readonly player?: Maybe<DomainTspStrokePlayer>;
  readonly radarData?: Maybe<DomainRadarData>;
  readonly showMarker: Scalars['Boolean']['output'];
  readonly strokeNumber: Scalars['Int']['output'];
  readonly strokeType: DomainHoleStrokeType;
  readonly toLocation: Scalars['String']['output'];
  readonly toLocationCode: Scalars['String']['output'];
  readonly videoId?: Maybe<Scalars['String']['output']>;
};

export type DomainHoleStrokeType =
  | 'DROP'
  | 'PENALTY'
  | 'PROVISIONAL'
  | 'STROKE';

export type DomainHomePageLeadLayout =
  | 'HALF_HERO'
  | 'HALF_HERO_STACK'
  | 'HERO_STATUS'
  | 'HERO_STORY'
  | 'PLAYER_STORIES'
  | 'TOPIC_STORIES';

export type DomainHomePageNewsLayout =
  | 'THREE_UP_ASSET'
  | 'TWO_UP_LARGE'
  | 'TWO_UP_SMALL'
  | 'TWO_UP_TEXT_ONLY';

export type DomainHomePageProgramStandingLayout =
  | 'FIELD_PROMO_SECTION'
  | 'NORMAL'
  | 'SHORT'
  | 'SIGNATURE_EVENT_STANDINGS'
  | 'TWO_STANDINGS';

export type DomainHomePageStanding = {
  readonly __typename: 'HomePageStanding';
  readonly country: Scalars['String']['output'];
  readonly countryFlag: Scalars['String']['output'];
  readonly firstName: Scalars['String']['output'];
  readonly image: Scalars['String']['output'];
  readonly lastName: Scalars['String']['output'];
  readonly playerId: Scalars['String']['output'];
  readonly rank?: Maybe<Scalars['Int']['output']>;
  readonly stats: ReadonlyArray<DomainProgramStat>;
};

export type DomainHomepage = {
  readonly __typename: 'Homepage';
  readonly fragments: ReadonlyArray<DomainHomepageFragment>;
};

export type DomainHomepageAssets = DomainNewsArticle | DomainVideo;

export type DomainHomepageCta = {
  readonly __typename: 'HomepageCta';
  readonly link: Scalars['String']['output'];
  readonly text: Scalars['String']['output'];
  readonly topText: Scalars['String']['output'];
};

export type DomainHomepageFragment = DomainHomepageLead | DomainHomepageNews | DomainHomepageProgramStanding | DomainMediaGallery | DomainOddsToWinTracker | DomainThreeUpPhoto;

export type DomainHomepageLead = {
  readonly __typename: 'HomepageLead';
  readonly ambientVideo?: Maybe<DomainVideo>;
  readonly content: ReadonlyArray<DomainHomepageAssets>;
  readonly cta?: Maybe<DomainHomepageCta>;
  readonly displayDateTime?: Maybe<Scalars['Boolean']['output']>;
  readonly displayPlayerPromoStats?: Maybe<Scalars['Boolean']['output']>;
  readonly halfHeroShortHeadline?: Maybe<Scalars['Boolean']['output']>;
  readonly headlineColor?: Maybe<Scalars['String']['output']>;
  readonly headlineJustification?: Maybe<Scalars['String']['output']>;
  readonly headshot?: Maybe<DomainProfileHeadshot>;
  readonly leadLayout: DomainHomePageLeadLayout;
  readonly location?: Maybe<DomainTournamentLocation>;
  readonly photoJustification?: Maybe<Scalars['String']['output']>;
  readonly playerId: Scalars['String']['output'];
  readonly playerScore?: Maybe<DomainHomepagePlayerScore>;
  readonly sectionTitle?: Maybe<Scalars['String']['output']>;
  readonly topStats?: Maybe<ReadonlyArray<Maybe<DomainPlayerProfileStatItem>>>;
  readonly topicLabel?: Maybe<Scalars['String']['output']>;
  readonly weather?: Maybe<DomainTournamentWeather>;
};

export type DomainHomepageNews = {
  readonly __typename: 'HomepageNews';
  readonly content: ReadonlyArray<DomainHomepageAssets>;
  readonly cta?: Maybe<DomainHomepageCta>;
  readonly displayDateTime?: Maybe<Scalars['Boolean']['output']>;
  readonly franchises: ReadonlyArray<Scalars['String']['output']>;
  readonly limit: Scalars['String']['output'];
  readonly newsLayout: DomainHomePageNewsLayout;
  readonly title: Scalars['String']['output'];
};

export type DomainHomepagePlayerScore = {
  readonly __typename: 'HomepagePlayerScore';
  readonly playerId: Scalars['ID']['output'];
  readonly round: Scalars['String']['output'];
  readonly roundScore: Scalars['String']['output'];
  readonly score: Scalars['String']['output'];
  readonly total?: Maybe<Scalars['String']['output']>;
};

export type DomainHomepageProgramStanding = {
  readonly __typename: 'HomepageProgramStanding';
  readonly backgroundImg?: Maybe<Scalars['String']['output']>;
  readonly cta?: Maybe<DomainHomepageCta>;
  readonly lastProcessed?: Maybe<Scalars['String']['output']>;
  readonly pullFieldUpdates?: Maybe<Scalars['Boolean']['output']>;
  readonly secondaryStandings?: Maybe<ReadonlyArray<Maybe<DomainHomePageStanding>>>;
  readonly secondaryStandingsTitle?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use sponsorImgAsset */
  readonly sponsorImg?: Maybe<Scalars['String']['output']>;
  readonly sponsorImgAsset?: Maybe<DomainImageAsset>;
  readonly standingLayout: DomainHomePageProgramStandingLayout;
  readonly standings?: Maybe<ReadonlyArray<Maybe<DomainHomePageStanding>>>;
  readonly standingsTitle?: Maybe<Scalars['String']['output']>;
  readonly title: Scalars['String']['output'];
};

export type DomainHomepageScoring = {
  readonly __typename: 'HomepageScoring';
  readonly desktopCta?: Maybe<DomainCallToAction>;
  readonly path: Scalars['String']['output'];
  readonly pillCta?: Maybe<DomainCallToAction>;
  readonly sectionTitle?: Maybe<Scalars['String']['output']>;
  readonly tournamentId?: Maybe<Scalars['String']['output']>;
};

export type DomainHospitalityCard = {
  readonly __typename: 'HospitalityCard';
  readonly blueBackground: Scalars['Boolean']['output'];
  readonly cardDescription?: Maybe<ReadonlyArray<Maybe<DomainNewsArticleNode>>>;
  readonly cardPhoto?: Maybe<Scalars['String']['output']>;
  readonly cardTitle?: Maybe<Scalars['String']['output']>;
  readonly cta?: Maybe<DomainCallToAction>;
  readonly cta2?: Maybe<DomainCallToAction>;
  readonly photoSubtitle?: Maybe<Scalars['String']['output']>;
};

export type DomainIcon =
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

export type DomainImage = {
  readonly __typename: 'Image';
  readonly imageCreator?: Maybe<Scalars['String']['output']>;
  readonly imageDescription?: Maybe<Scalars['String']['output']>;
  readonly imageOrientation?: Maybe<DomainOrientation>;
  readonly url?: Maybe<Scalars['String']['output']>;
};

export type DomainImageAsset = {
  readonly __typename: 'ImageAsset';
  readonly assetType?: Maybe<Scalars['String']['output']>;
  /**   will always be image */
  readonly deliveryType?: Maybe<Scalars['String']['output']>;
  /**   either "upload" or "fetch" */
  readonly fallbackImage?: Maybe<Scalars['String']['output']>;
  readonly imageOrg: Scalars['String']['output'];
  readonly imagePath: Scalars['String']['output'];
};

export type DomainImageBlock = {
  readonly __typename: 'ImageBlock';
  readonly backgroundImage?: Maybe<Scalars['String']['output']>;
  readonly cta?: Maybe<DomainCallToAction>;
  readonly textNodes?: Maybe<ReadonlyArray<Maybe<DomainNewsArticleNode>>>;
};

export type DomainInformationData = {
  readonly __typename: 'InformationData';
  readonly detail?: Maybe<Scalars['String']['output']>;
  readonly label: Scalars['String']['output'];
  readonly secondaryDetail?: Maybe<Scalars['String']['output']>;
  readonly smallCopy?: Maybe<Scalars['Boolean']['output']>;
  readonly value: Scalars['String']['output'];
  readonly wide?: Maybe<Scalars['Boolean']['output']>;
};

export type DomainInformationRow = {
  readonly __typename: 'InformationRow';
  readonly displayText: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
  readonly leaderboardSortOrder: Scalars['Int']['output'];
  readonly mobileDisplayText: Scalars['String']['output'];
  readonly sponsorLogo?: Maybe<DomainImageAsset>;
  readonly sponsorName?: Maybe<Scalars['String']['output']>;
};

export type DomainInformationSection = {
  readonly __typename: 'InformationSection';
  readonly items: ReadonlyArray<DomainInformationSectionItem>;
  readonly sponsorImages?: Maybe<ReadonlyArray<DomainSponsorImage>>;
  readonly title: Scalars['String']['output'];
};

export type DomainInformationSectionItem = DomainAbbreviations | DomainLegend;

export type DomainIntegratedComponent = {
  readonly __typename: 'IntegratedComponent';
  readonly index: Scalars['Int']['output'];
  readonly partner: DomainIntegrationPartner;
};

export type DomainIntegrationPartner =
  | 'GOLFWRX';

export type DomainJumpToSection = {
  readonly __typename: 'JumpToSection';
  readonly anchorHtmlId?: Maybe<ReadonlyArray<Scalars['String']['output']>>;
  readonly dropdownText?: Maybe<ReadonlyArray<Scalars['String']['output']>>;
};

export type DomainKopContentType = DomainNewsArticleHeader | DomainNewsArticleImage | DomainNewsArticleLineBreak | DomainNewsArticleLink | DomainNewsArticleParagraph | DomainNewsArticleText | DomainTableFragment | DomainUnorderedListNode;

export type DomainKitOfParts = {
  readonly __typename: 'KitOfParts';
  readonly fragments: ReadonlyArray<DomainKopFragment>;
};

export type DomainKopFragment = DomainHomepageNews | DomainKopHeader | DomainKopSignUp | DomainKopStandingsList | DomainKopSubheader | DomainKopUpcomingTournament | DomainKopZigZag | DomainThreeUpPhoto | DomainThreeUpStats | DomainTwoColumn | DomainVideoHero;

export type DomainKopHeader = {
  readonly __typename: 'KopHeader';
  readonly cta?: Maybe<DomainCallToAction>;
  readonly headerTitle: Scalars['String']['output'];
  readonly headlineColor?: Maybe<Scalars['String']['output']>;
  readonly image?: Maybe<Scalars['String']['output']>;
  readonly logo?: Maybe<Scalars['String']['output']>;
  readonly opacity?: Maybe<Scalars['String']['output']>;
  readonly titleJustification?: Maybe<Scalars['String']['output']>;
};

export type DomainKopSignUp = {
  readonly __typename: 'KopSignUp';
  readonly backgroundColor?: Maybe<Scalars['String']['output']>;
  readonly backgroundImage?: Maybe<Scalars['String']['output']>;
  readonly cta?: Maybe<DomainCallToAction>;
  readonly ctaColor?: Maybe<Scalars['String']['output']>;
  readonly header?: Maybe<Scalars['String']['output']>;
  readonly logo?: Maybe<Scalars['String']['output']>;
  readonly signUpText?: Maybe<Scalars['String']['output']>;
  readonly textColor?: Maybe<Scalars['String']['output']>;
};

export type DomainKopStandingsList = {
  readonly __typename: 'KopStandingsList';
  readonly cta?: Maybe<DomainCallToAction>;
  readonly sectionTitle: Scalars['String']['output'];
  readonly standings?: Maybe<ReadonlyArray<Maybe<DomainHomePageStanding>>>;
  readonly type?: Maybe<Scalars['String']['output']>;
};

export type DomainKopSubheader = {
  readonly __typename: 'KopSubheader';
  readonly cta?: Maybe<DomainCallToAction>;
  readonly displayCta?: Maybe<Scalars['Boolean']['output']>;
  readonly logo?: Maybe<Scalars['String']['output']>;
  readonly subHeaderText?: Maybe<ReadonlyArray<Maybe<DomainNewsArticleNode>>>;
  readonly type?: Maybe<Scalars['String']['output']>;
};

export type DomainKopUpcomingTournament = {
  readonly __typename: 'KopUpcomingTournament';
  readonly title: Scalars['String']['output'];
};

export type DomainKopZigZag = {
  readonly __typename: 'KopZigZag';
  readonly backgroundColorOne?: Maybe<Scalars['String']['output']>;
  readonly backgroundColorTwo?: Maybe<Scalars['String']['output']>;
  readonly ctaOne?: Maybe<DomainCallToAction>;
  readonly ctaTwo?: Maybe<DomainCallToAction>;
  readonly descriptionBackgroundColorOne?: Maybe<Scalars['String']['output']>;
  readonly descriptionBackgroundColorTwo?: Maybe<Scalars['String']['output']>;
  readonly descriptionOne?: Maybe<ReadonlyArray<Maybe<DomainNewsArticleNode>>>;
  readonly descriptionTwo?: Maybe<ReadonlyArray<Maybe<DomainNewsArticleNode>>>;
  readonly imageOne?: Maybe<Scalars['String']['output']>;
  readonly imageTwo?: Maybe<Scalars['String']['output']>;
  readonly subHeader?: Maybe<Scalars['String']['output']>;
  readonly zigZaHeader: Scalars['String']['output'];
};

export type DomainLbRound = {
  readonly __typename: 'LBRound';
  readonly displayText: Scalars['String']['output'];
  readonly roundNumber: Scalars['Int']['output'];
};

export type DomainLeaderStat = {
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

export type DomainLeaderboardCompressed = {
  readonly __typename: 'LeaderboardCompressed';
  readonly id: Scalars['ID']['output'];
  readonly payload: Scalars['String']['output'];
};

export type DomainLeaderboardCompressedV2 = {
  readonly __typename: 'LeaderboardCompressedV2';
  readonly id: Scalars['ID']['output'];
  readonly payload: Scalars['String']['output'];
};

/**   Returns the leaderboard for a tournament where payload contains the leaderboard data in Base64 encoding. */
export type DomainLeaderboardCompressedV3 = {
  readonly __typename: 'LeaderboardCompressedV3';
  /**   The tournament ID */
  readonly id: Scalars['ID']['output'];
  /**   The full leaderboard payload/response. Will need to be Base64 decoded by clients */
  readonly payload: Scalars['String']['output'];
};

export type DomainLeaderboardDrawerV2 = {
  readonly __typename: 'LeaderboardDrawerV2';
  readonly backNine: Scalars['Boolean']['output'];
  readonly currentHole?: Maybe<Scalars['Int']['output']>;
  readonly currentRound: Scalars['Int']['output'];
  readonly groupNumber: Scalars['Int']['output'];
  readonly id: Scalars['ID']['output'];
  readonly player: DomainPlayer;
  readonly playerState?: Maybe<DomainPlayerState>;
  readonly roundScores: ReadonlyArray<DomainRoundScore>;
  readonly teeTime: Scalars['AWSTimestamp']['output'];
  readonly tournamentName: Scalars['String']['output'];
};

export type DomainLeaderboardFeature =
  | 'HOLE_BY_HOLE'
  | 'ODDS'
  | 'PROBABILITIES'
  | 'SHOT_DETAILS'
  | 'STROKES_GAINED';

export type DomainLeaderboardHoleByHole = {
  readonly __typename: 'LeaderboardHoleByHole';
  readonly courseHoleHeaders: ReadonlyArray<DomainCourseHoleHeader>;
  readonly courses: ReadonlyArray<DomainCourse>;
  readonly currentRound: Scalars['Int']['output'];
  /** @deprecated use courseHoleHeaders */
  readonly holeHeaders: ReadonlyArray<DomainHoleHeader>;
  readonly playerData: ReadonlyArray<DomainPlayerRowHoleByHole>;
  readonly rounds: ReadonlyArray<DomainLbRound>;
  readonly tournamentId: Scalars['ID']['output'];
  readonly tournamentName: Scalars['String']['output'];
};

export type DomainLeaderboardInfo = {
  readonly __typename: 'LeaderboardInfo';
  /** @deprecated can ignore, we remove sponship in MW */
  readonly disableCdw: Scalars['Boolean']['output'];
  readonly informationSections: ReadonlyArray<DomainInformationSection>;
  readonly odds: Scalars['Boolean']['output'];
  readonly tournamentId: Scalars['ID']['output'];
};

export type DomainLeaderboardMessage = {
  readonly __typename: 'LeaderboardMessage';
  readonly externalLink?: Maybe<Scalars['Boolean']['output']>;
  readonly messageIcon: DomainLeaderboardMessageIcon;
  readonly messageLink?: Maybe<Scalars['String']['output']>;
  readonly messageText: Scalars['String']['output'];
  readonly platforms: ReadonlyArray<DomainPlatform>;
  readonly timing?: Maybe<Scalars['Int']['output']>;
  readonly webViewLink?: Maybe<Scalars['String']['output']>;
};

export type DomainLeaderboardMessageIcon =
  | 'DELAY'
  | 'NONE'
  | 'WEATHER';

export type DomainLeaderboardMovement =
  | 'CONSTANT'
  | 'DOWN'
  | 'UP';

export type DomainLeaderboardOddsSwing = {
  readonly __typename: 'LeaderboardOddsSwing';
  readonly swing: DomainOddsSwing;
};

/**   new enum of possible player icon values, limited to hot streak at first creation */
export type DomainLeaderboardPlayerIcon =
  | 'HOT_STREAK';

export type DomainLeaderboardRoundStats = {
  readonly __typename: 'LeaderboardRoundStats';
  readonly players: ReadonlyArray<DomainLeaderboardStatsPlayer>;
  readonly roundDisplayText: Scalars['String']['output'];
  readonly roundNumber: Scalars['Int']['output'];
};

export type DomainLeaderboardRowV2 = DomainInformationRow | DomainPlayerRowV2;

export type DomainLeaderboardRowV3 = DomainInformationRow | DomainPlayerRowV3 | DomainPuttingPalsPlayerRowV3;

export type DomainLeaderboardScoringDataV3 = {
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
  readonly movementDirection: DomainLeaderboardMovement;
  readonly movementSort?: Maybe<Scalars['Int']['output']>;
  readonly oddsOptionId?: Maybe<Scalars['String']['output']>;
  readonly oddsSort?: Maybe<Scalars['Float']['output']>;
  readonly oddsSwing?: Maybe<DomainOddsSwing>;
  /**   ODDS */
  readonly oddsToWin?: Maybe<Scalars['String']['output']>;
  /**   POINTS */
  readonly official: Scalars['String']['output'];
  readonly officialSort: Scalars['Int']['output'];
  /**   Player icon, first us is for hot streak */
  readonly playerIcon?: Maybe<DomainLeaderboardPlayerIcon>;
  readonly playerState: DomainPlayerState;
  readonly position: Scalars['String']['output'];
  readonly projected: Scalars['String']['output'];
  readonly projectedSort: Scalars['Int']['output'];
  readonly rankLogoDark?: Maybe<Scalars['String']['output']>;
  readonly rankLogoLight?: Maybe<Scalars['String']['output']>;
  readonly rankingMovement: DomainCupRankMovementDirection;
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

export type DomainLeaderboardStatItem = {
  readonly __typename: 'LeaderboardStatItem';
  readonly color: Scalars['String']['output'];
  readonly rank: Scalars['String']['output'];
  readonly sortValue: Scalars['Float']['output'];
  readonly statId: Scalars['String']['output'];
  readonly supportValues?: Maybe<ReadonlyArray<DomainLeaderboardStatSupportValues>>;
  readonly value: Scalars['String']['output'];
};

export type DomainLeaderboardStatSupportValues = DomainLeaderboardOddsSwing | DomainLeaderboardSupportingString;

export type DomainLeaderboardStats = {
  readonly __typename: 'LeaderboardStats';
  readonly id: Scalars['String']['output'];
  readonly players: ReadonlyArray<DomainLeaderboardStatsPlayer>;
  readonly rounds?: Maybe<ReadonlyArray<DomainLeaderboardRoundStats>>;
  readonly statIds?: Maybe<ReadonlyArray<Scalars['String']['output']>>;
  readonly titles: ReadonlyArray<Scalars['String']['output']>;
  readonly type: DomainLeaderboardStatsType;
};

export type DomainLeaderboardStatsPlayer = {
  readonly __typename: 'LeaderboardStatsPlayer';
  readonly playerId: Scalars['String']['output'];
  readonly stats: ReadonlyArray<DomainLeaderboardStatItem>;
};

export type DomainLeaderboardStatsType =
  | 'ODDS'
  | 'PROBABILITY'
  | 'STROKES_GAINED';

export type DomainLeaderboardStroke = {
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
  readonly scoreStatus: DomainHoleScoreStatus;
  readonly strokeId: Scalars['String']['output'];
  readonly yardage: Scalars['String']['output'];
  readonly yardageSort: Scalars['Int']['output'];
};

export type DomainLeaderboardStrokes = {
  readonly __typename: 'LeaderboardStrokes';
  readonly id: Scalars['ID']['output'];
  readonly playoffs?: Maybe<ReadonlyArray<DomainLeaderboardStroke>>;
  readonly strokes: ReadonlyArray<DomainLeaderboardStroke>;
};

export type DomainLeaderboardStrokesCompressed = {
  readonly __typename: 'LeaderboardStrokesCompressed';
  readonly id: Scalars['ID']['output'];
  readonly payload: Scalars['String']['output'];
};

export type DomainLeaderboardSupportingString = {
  readonly __typename: 'LeaderboardSupportingString';
  readonly data: Scalars['String']['output'];
};

export type DomainLeaderboardUpdateCompressed = {
  readonly __typename: 'LeaderboardUpdateCompressed';
  readonly id: Scalars['ID']['output'];
  readonly payload: Scalars['String']['output'];
};

export type DomainLeaderboardUpdateCompressedV3 = {
  readonly __typename: 'LeaderboardUpdateCompressedV3';
  readonly id: Scalars['ID']['output'];
  readonly payload: Scalars['String']['output'];
};

export type DomainLeaderboardUpdatePlayerV3 = {
  readonly __typename: 'LeaderboardUpdatePlayerV3';
  readonly id: Scalars['ID']['output'];
  readonly leaderboardSortOrder: Scalars['Int']['output'];
  readonly scoringData: DomainLeaderboardScoringDataV3;
};

export type DomainLeaderboardUpdateRowV3 = DomainInformationRow | DomainLeaderboardUpdatePlayerV3;

export type DomainLeaderboardUpdateV3 = {
  readonly __typename: 'LeaderboardUpdateV3';
  readonly cutLineProbabilities?: Maybe<DomainCutLineInfo>;
  readonly id: Scalars['ID']['output'];
  readonly isPlayoffActive: Scalars['Boolean']['output'];
  readonly leaderboardRoundHeader: Scalars['String']['output'];
  readonly messages: ReadonlyArray<DomainLeaderboardMessage>;
  readonly players: ReadonlyArray<DomainLeaderboardUpdateRowV3>;
  readonly rounds: ReadonlyArray<DomainLbRound>;
  readonly subEvent: Scalars['Boolean']['output'];
  readonly tournamentStatus: DomainTournamentStatus;
  readonly winner?: Maybe<DomainWinner>;
  readonly winners?: Maybe<ReadonlyArray<DomainWinner>>;
};

export type DomainLeaderboardV2 = {
  readonly __typename: 'LeaderboardV2';
  readonly courses: ReadonlyArray<DomainCourse>;
  readonly disableLeaderboard: Scalars['Boolean']['output'];
  /** @deprecated use leaderboardFeatures */
  readonly features?: Maybe<ReadonlyArray<DomainLeaderboardFeature>>;
  readonly formatType: DomainFormatType;
  readonly id: Scalars['ID']['output'];
  /** @deprecated Use the leaderboard legend query */
  readonly informationSections: ReadonlyArray<DomainInformationSection>;
  readonly isPlayoffActive: Scalars['Boolean']['output'];
  readonly leaderboardFeatures?: Maybe<ReadonlyArray<DomainFeatureItem>>;
  readonly leaderboardRoundHeader: Scalars['String']['output'];
  readonly messages: ReadonlyArray<DomainLeaderboardMessage>;
  readonly players: ReadonlyArray<DomainLeaderboardRowV2>;
  readonly profileEnabled: Scalars['Boolean']['output'];
  readonly roundDisplay: Scalars['String']['output'];
  readonly roundStatus: DomainRoundStatus;
  readonly roundStatusColor: DomainRoundStatusColor;
  readonly roundStatusDisplay: Scalars['String']['output'];
  readonly rounds: ReadonlyArray<DomainLbRound>;
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
  readonly tournamentStatus: DomainTournamentStatus;
  readonly winner?: Maybe<DomainWinner>;
};

export type DomainLeaderboardV3 = {
  readonly __typename: 'LeaderboardV3';
  readonly bubblePill?: Maybe<DomainBubblePill>;
  readonly courses: ReadonlyArray<DomainCourse>;
  readonly cutLineProbabilities?: Maybe<DomainCutLineInfo>;
  readonly disableBettingProfileColumn: Scalars['Boolean']['output'];
  readonly disableLeaderboard: Scalars['Boolean']['output'];
  readonly disableOdds: Scalars['Boolean']['output'];
  readonly formatType: DomainFormatType;
  readonly hideSov: Scalars['Boolean']['output'];
  readonly id: Scalars['ID']['output'];
  readonly isPlayoffActive: Scalars['Boolean']['output'];
  readonly leaderboardFeatures?: Maybe<ReadonlyArray<DomainFeatureItem>>;
  readonly leaderboardRoundHeader: Scalars['String']['output'];
  readonly messages: ReadonlyArray<DomainLeaderboardMessage>;
  readonly players: ReadonlyArray<DomainLeaderboardRowV3>;
  readonly profileEnabled: Scalars['Boolean']['output'];
  readonly rounds: ReadonlyArray<DomainLbRound>;
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
  readonly tournamentStatus: DomainTournamentStatus;
  /** @deprecated use winners */
  readonly winner?: Maybe<DomainWinner>;
  readonly winners?: Maybe<ReadonlyArray<DomainWinner>>;
};

export type DomainLegend = {
  readonly __typename: 'Legend';
  readonly accessibilityText?: Maybe<Scalars['String']['output']>;
  readonly icon: DomainIcon;
  readonly iconUrl?: Maybe<Scalars['String']['output']>;
  readonly subText?: Maybe<Scalars['String']['output']>;
  readonly text?: Maybe<Scalars['String']['output']>;
  readonly title: Scalars['String']['output'];
};

export type DomainListItem = {
  readonly __typename: 'ListItem';
  readonly segments: ReadonlyArray<Maybe<DomainListNodeItems>>;
};

export type DomainListNodeItems = DomainNewsArticleContentSegment | DomainNewsArticleParagraph | DomainNewsArticlePlayerTournamentOdds | DomainUnorderedListNode;

export type DomainLiveOverride =
  | 'FORCE_OFF'
  | 'FORCE_ON'
  | 'NORMAL';

export type DomainLiveStatus =
  | 'LIVE'
  | 'NONE'
  | 'UPCOMING';

export type DomainLiveVideoOverride = {
  readonly __typename: 'LiveVideoOverride';
  readonly simulcast?: Maybe<DomainBroadcastFullTelecast>;
  readonly tourCode: DomainTourCode;
  readonly videos: ReadonlyArray<DomainVideo>;
};

export type DomainMpHolePlayer = {
  readonly __typename: 'MPHolePlayer';
  readonly holePoints?: Maybe<Scalars['String']['output']>;
  readonly holeScore?: Maybe<Scalars['String']['output']>;
  /**   used for four ball type scoring */
  readonly holeScoreStatus?: Maybe<DomainHoleScoreStatus>;
  readonly holeScores?: Maybe<ReadonlyArray<DomainMatchHoleScore>>;
  readonly playerId: Scalars['ID']['output'];
};

export type DomainMpLeaderboard = {
  readonly __typename: 'MPLeaderboard';
  readonly courses: ReadonlyArray<DomainCourse>;
  readonly currentRound: Scalars['Int']['output'];
  readonly drawersEnabled: Scalars['Boolean']['output'];
  readonly formatType: DomainFormatType;
  readonly id: Scalars['ID']['output'];
  readonly infoWebUrl: Scalars['String']['output'];
  readonly informationSections: ReadonlyArray<DomainInformationSection>;
  readonly messages: ReadonlyArray<DomainLeaderboardMessage>;
  readonly roundFilters: ReadonlyArray<DomainRoundFilter>;
  readonly rounds: ReadonlyArray<DomainMpLeaderboardRound>;
  readonly shortTimezone: Scalars['String']['output'];
  readonly timezone: Scalars['String']['output'];
  readonly tourcastURI?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastURL?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastUrlWeb?: Maybe<Scalars['String']['output']>;
  readonly winner?: Maybe<DomainMpLeaderboardPlayer>;
};

export type DomainMpLeaderboardBracket = {
  readonly __typename: 'MPLeaderboardBracket';
  readonly bracketHeader: Scalars['String']['output'];
  readonly bracketNum?: Maybe<Scalars['Int']['output']>;
  readonly matches: ReadonlyArray<DomainMpLeaderboardMatch>;
  readonly upcomingMatches?: Maybe<ReadonlyArray<DomainUpcomingMatch>>;
};

export type DomainMpLeaderboardMatch = {
  readonly __typename: 'MPLeaderboardMatch';
  readonly bracketPlayerSwap?: Maybe<Scalars['Boolean']['output']>;
  readonly matchId: Scalars['ID']['output'];
  readonly matchScore?: Maybe<Scalars['String']['output']>;
  readonly matchScoreColor?: Maybe<Scalars['String']['output']>;
  readonly matchScoreColorDark?: Maybe<Scalars['String']['output']>;
  readonly matchStatus: DomainMatchStatus;
  readonly players: ReadonlyArray<DomainMpLeaderboardPlayer>;
  readonly teeTime: Scalars['AWSTimestamp']['output'];
  readonly thru?: Maybe<Scalars['String']['output']>;
  readonly thruNumberOfHoles?: Maybe<Scalars['Int']['output']>;
};

export type DomainMpLeaderboardPlayer = {
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

export type DomainMpLeaderboardRound = {
  readonly __typename: 'MPLeaderboardRound';
  readonly brackets: ReadonlyArray<DomainMpLeaderboardBracket>;
  readonly round: Scalars['Int']['output'];
  readonly roundHeader: Scalars['String']['output'];
  readonly roundStatusSubHead: Scalars['String']['output'];
  readonly roundTypeSubHead: Scalars['String']['output'];
};

export type DomainMpMatchTeeTimes = {
  readonly __typename: 'MPMatchTeeTimes';
  readonly matchId: Scalars['ID']['output'];
  readonly players: ReadonlyArray<DomainMpTeeTimePlayer>;
  readonly status: Scalars['String']['output'];
  readonly tee: Scalars['String']['output'];
  readonly teeTime: Scalars['AWSTimestamp']['output'];
  readonly timezone: Scalars['String']['output'];
};

export type DomainMpPlayoffScorecard = {
  readonly __typename: 'MPPlayoffScorecard';
  readonly currentHole?: Maybe<Scalars['Int']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly infoWebUrl?: Maybe<Scalars['String']['output']>;
  readonly playoff: DomainPlayoff;
  readonly scorecardTitle: Scalars['String']['output'];
  readonly tourcastURI?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastURL?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastUrlWeb?: Maybe<Scalars['String']['output']>;
};

export type DomainMpRoundTeeTimes = {
  readonly __typename: 'MPRoundTeeTimes';
  readonly matchTeeTimes: ReadonlyArray<DomainMpMatchTeeTimes>;
  readonly roundNumber: Scalars['Int']['output'];
};

export type DomainMpScorecard = {
  readonly __typename: 'MPScorecard';
  readonly currentHole?: Maybe<Scalars['Int']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly infoWebUrl?: Maybe<Scalars['String']['output']>;
  readonly matchHoleScores: ReadonlyArray<DomainMatchHole>;
  readonly matchName: Scalars['String']['output'];
  readonly matchPlayers: ReadonlyArray<DomainMpScorecardPlayer>;
  readonly messages: ReadonlyArray<DomainMessage>;
  readonly scorecardTitle: Scalars['String']['output'];
  readonly tourcastURI?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastUrl?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastUrlWeb?: Maybe<Scalars['String']['output']>;
};

export type DomainMpScorecardPlayer = {
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

export type DomainMpScorecardResults = {
  readonly __typename: 'MPScorecardResults';
  readonly matchId: Scalars['String']['output'];
  readonly messages?: Maybe<ReadonlyArray<DomainMessage>>;
  readonly players: ReadonlyArray<DomainMpScorecardResultsPlayer>;
  readonly roundNum: Scalars['Int']['output'];
  readonly tournamentId: Scalars['String']['output'];
};

export type DomainMpScorecardResultsPlayer = {
  readonly __typename: 'MPScorecardResultsPlayer';
  readonly displayName: Scalars['String']['output'];
  readonly playerId: Scalars['ID']['output'];
  readonly previousRounds: ReadonlyArray<DomainPreviousRounds>;
};

export type DomainMpTeeTimePlayer = {
  readonly __typename: 'MPTeeTimePlayer';
  readonly countryFlag: Scalars['String']['output'];
  readonly displayName: Scalars['String']['output'];
  /** @deprecated URL should be built using player ID */
  readonly headshot: Scalars['String']['output'];
  readonly playerId: Scalars['ID']['output'];
  readonly shortName: Scalars['String']['output'];
};

export type DomainMpTeeTimes = {
  readonly __typename: 'MPTeeTimes';
  readonly defaultRound: Scalars['Int']['output'];
  readonly drawersEnabled: Scalars['Boolean']['output'];
  readonly id: Scalars['ID']['output'];
  readonly roundFilters: ReadonlyArray<DomainRoundFilter>;
  readonly rounds: ReadonlyArray<DomainMpRoundTeeTimes>;
  readonly teeTimeHeaders: ReadonlyArray<DomainTeeTimeHeader>;
  readonly title: Scalars['String']['output'];
};

export type DomainMajorResultsTournament = {
  readonly __typename: 'MajorResultsTournament';
  readonly courseName: Scalars['String']['output'];
  readonly date: Scalars['String']['output'];
  readonly money: Scalars['String']['output'];
  readonly position: Scalars['String']['output'];
  readonly roundScores: ReadonlyArray<DomainRoundScoreItem>;
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

export type DomainMajorTimeline = {
  readonly __typename: 'MajorTimeline';
  readonly finishes: ReadonlyArray<Scalars['String']['output']>;
  readonly tournamentName: Scalars['String']['output'];
  readonly tournamentNum: Scalars['String']['output'];
};

export type DomainMarket = {
  readonly __typename: 'Market';
  readonly header: Scalars['String']['output'];
  /**   used for switching between submarkets like "Group A" */
  readonly marketType: DomainOddsMarketType;
  /**   Tournament Winner */
  readonly subMarketPills?: Maybe<ReadonlyArray<Scalars['String']['output']>>;
  readonly subMarkets: ReadonlyArray<DomainSubMarket>;
};

export type DomainMarketPill = {
  readonly __typename: 'MarketPill';
  readonly displayText: Scalars['String']['output'];
  readonly marketType: DomainOddsMarketType;
};

export type DomainMatchCard = {
  readonly __typename: 'MatchCard';
  readonly matchId?: Maybe<Scalars['String']['output']>;
  readonly path: Scalars['String']['output'];
  readonly round?: Maybe<Scalars['String']['output']>;
  readonly tourcastWebview?: Maybe<Scalars['String']['output']>;
  readonly tournamentId?: Maybe<Scalars['String']['output']>;
};

export type DomainMatchHole = {
  readonly __typename: 'MatchHole';
  readonly courseHoleNumber: Scalars['String']['output'];
  readonly holeNumber: Scalars['String']['output'];
  readonly holeNumberColor: Scalars['String']['output'];
  readonly holeOutlineColor?: Maybe<Scalars['String']['output']>;
  readonly holePlayedStatus: DomainHolePlayedStatus;
  readonly matchHolePlayers: ReadonlyArray<DomainMpHolePlayer>;
  readonly matchScore?: Maybe<Scalars['String']['output']>;
  readonly matchScoreColor: Scalars['String']['output'];
  readonly parValue: Scalars['String']['output'];
};

export type DomainMatchHoleScore = {
  readonly __typename: 'MatchHoleScore';
  readonly holeScore?: Maybe<Scalars['String']['output']>;
  readonly holeScoreStatus?: Maybe<DomainHoleScoreStatus>;
  readonly playerId: Scalars['ID']['output'];
};

export type DomainMatchStatus =
  | 'COMPLETE'
  | 'IN_PROGRESS'
  | 'UPCOMING';

export type DomainMatchupOptionV2 = DomainBaseOddsOption & {
  readonly __typename: 'MatchupOptionV2';
  readonly entity: DomainOddsEntity;
  readonly isTie: Scalars['Boolean']['output'];
  readonly odds: DomainOddsValues;
};

export type DomainMatchupsPlayer = {
  readonly __typename: 'MatchupsPlayer';
  readonly countryFlag?: Maybe<Scalars['String']['output']>;
  readonly currentRound?: Maybe<Scalars['Int']['output']>;
  readonly displayName: Scalars['String']['output'];
  readonly firstName: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
  readonly lastName: Scalars['String']['output'];
  readonly matchId?: Maybe<Scalars['Int']['output']>;
  readonly odds: Scalars['String']['output'];
  readonly oddsSwing?: Maybe<DomainOddsSwing>;
  readonly optionsId: Scalars['String']['output'];
  readonly seed?: Maybe<Scalars['Int']['output']>;
};

export type DomainMediaGallery = {
  readonly __typename: 'MediaGallery';
  readonly contentDescription?: Maybe<ReadonlyArray<Maybe<Scalars['String']['output']>>>;
  readonly cta?: Maybe<DomainHomepageCta>;
  readonly mediaGallery?: Maybe<ReadonlyArray<Maybe<Scalars['String']['output']>>>;
  readonly mediaGalleryObjs?: Maybe<ReadonlyArray<Maybe<DomainMediaGalleryItems>>>;
  readonly sectionTitle?: Maybe<Scalars['String']['output']>;
};

export type DomainMediaGalleryItem = {
  readonly __typename: 'MediaGalleryItem';
  readonly orientation?: Maybe<DomainOrientation>;
  readonly path?: Maybe<Scalars['String']['output']>;
};

export type DomainMediaGalleryItems = DomainMediaGalleryItem | DomainVideo;

export type DomainMessage = {
  readonly __typename: 'Message';
  readonly body: ReadonlyArray<Scalars['String']['output']>;
  readonly title?: Maybe<Scalars['String']['output']>;
};

export type DomainMessageBanner = {
  readonly __typename: 'MessageBanner';
  readonly messageLink?: Maybe<Scalars['String']['output']>;
  readonly messageText?: Maybe<Scalars['String']['output']>;
  readonly path: Scalars['String']['output'];
};

export type DomainMobileCategoryPill = {
  readonly __typename: 'MobileCategoryPill';
  readonly category?: Maybe<DomainStatCategory>;
  readonly displayName: Scalars['String']['output'];
};

export type DomainMobileStat = {
  readonly __typename: 'MobileStat';
  readonly statId: Scalars['String']['output'];
  readonly statTitle: Scalars['String']['output'];
};

export type DomainMobileStatCategoryLeaders = {
  readonly __typename: 'MobileStatCategoryLeaders';
  readonly category: DomainStatCategory;
  readonly categoryHeader: Scalars['String']['output'];
  readonly leaders: ReadonlyArray<DomainLeaderStat>;
  readonly stats: ReadonlyArray<DomainMobileStat>;
};

export type DomainMobileStatLeaders = {
  readonly __typename: 'MobileStatLeaders';
  readonly categories: ReadonlyArray<DomainMobileStatCategoryLeaders>;
  readonly categoryPills: ReadonlyArray<DomainMobileCategoryPill>;
  readonly tourCode: DomainTourCode;
  readonly year: Scalars['Int']['output'];
};

export type DomainMutation = {
  readonly __typename: 'Mutation';
  readonly addFavoriteTour: DomainFavoriteTourResponse;
  readonly addFavorites: ReadonlyArray<DomainFavoritePlayer>;
  readonly addNotificationTags: DomainNotificationTagResponse;
  readonly deleteAccount: DomainDeleteAccountResponse;
  readonly deleteFavorites: ReadonlyArray<DomainFavoritePlayer>;
  readonly deleteNotificationTags: DomainNotificationTagResponse;
  readonly unsubscribe: DomainUnsubscribeResponse;
  readonly updateBubble?: Maybe<DomainBubbleWatch>;
  readonly updateBubbleWatch?: Maybe<DomainTourCupRankingEvent>;
  readonly updateCourseStats?: Maybe<DomainTournamentHoleStats>;
  readonly updateCoverage?: Maybe<DomainBroadcastCoverage>;
  readonly updateCupOverviewLeaderboard?: Maybe<DomainCupTournamentStatus>;
  readonly updateCupRoundLeaderboard?: Maybe<DomainCupTournamentLeaderboard>;
  readonly updateCupRoundLeaderboardCompressed?: Maybe<DomainCupTournamentLeaderboardCompressed>;
  readonly updateCupScorecard?: Maybe<DomainCupScorecard>;
  readonly updateCurrentLeadersCompressed?: Maybe<DomainCurrentLeadersCompressed>;
  readonly updateGroupLocations?: Maybe<DomainGroupLocationCourse>;
  readonly updateGroupLocationsEnhanced?: Maybe<DomainGroupLocationCourse>;
  readonly updateHoleDetails?: Maybe<DomainHoleDetail>;
  readonly updateLeaderboardCompressedV2?: Maybe<DomainLeaderboardCompressedV2>;
  readonly updateLeaderboardCompressedV3?: Maybe<DomainLeaderboardUpdateCompressedV3>;
  readonly updateLeaderboardStrokes?: Maybe<DomainLeaderboardStrokes>;
  readonly updateLeaderboardStrokesCompressed?: Maybe<DomainLeaderboardStrokesCompressed>;
  readonly updateLeaderboardV2?: Maybe<DomainLeaderboardV2>;
  readonly updateMatchOutcomeIq?: Maybe<DomainRyderCupMatchOutcomeIq>;
  readonly updateMatchPlayLeaderboard?: Maybe<DomainMpLeaderboard>;
  readonly updateMatchPlayLeaderboardCompressed?: Maybe<DomainLeaderboardCompressed>;
  readonly updateMatchPlayPlayoffScorecard?: Maybe<DomainMpPlayoffScorecard>;
  readonly updateMatchPlayScorecard?: Maybe<DomainMpScorecard>;
  readonly updateMatchPlayTeeTimes: DomainMpTeeTimes;
  readonly updateMatchPlayTeeTimesCompressed?: Maybe<DomainTeeTimesCompressed>;
  readonly updateOddsToWinMarket?: Maybe<DomainOddsToWinMarket>;
  readonly updateOddsToWinMarketCompressed?: Maybe<DomainOddsToWinMarketCompressed>;
  readonly updatePlayerHub?: Maybe<DomainPlayerHubPlayerCompressed>;
  readonly updatePlayerTournamentStatus?: Maybe<DomainPlayerTournamentStatus>;
  readonly updatePlayoffScorecard?: Maybe<DomainPlayoffScorecard>;
  readonly updatePlayoffScorecardV2: ReadonlyArray<DomainPlayoffScorecard>;
  readonly updatePlayoffScorecardV3: DomainTournamentPlayoffScorecards;
  readonly updatePlayoffShotDetails: DomainGroupShotDetails;
  readonly updatePlayoffShotDetailsCompressed: DomainGroupShotDetailsCompressed;
  readonly updateScorecardCompressedV3?: Maybe<DomainScorecardUpdateCompressedV3>;
  readonly updateScorecardStats?: Maybe<DomainPlayerScorecardStats>;
  readonly updateScorecardStatsCompressedV3?: Maybe<DomainPlayerScorecardStatsCompressed>;
  readonly updateScorecardV2?: Maybe<DomainLeaderboardDrawerV2>;
  readonly updateShotCommentary?: Maybe<DomainShotCommentary>;
  readonly updateShotDetailsCompressedV3?: Maybe<DomainShotDetailsCompressedV3>;
  readonly updateTGLMatch?: Maybe<DomainTglMatch>;
  readonly updateTSPPlayoffShotDetails: DomainTeamShotDetails;
  readonly updateTSPPlayoffShotDetailsCompressed: DomainTeamShotDetailsCompressed;
  readonly updateTeamPlayLeaderboard?: Maybe<DomainTspLeaderboard>;
  readonly updateTeamPlayLeaderboardCompressed?: Maybe<DomainLeaderboardCompressed>;
  readonly updateTeamPlayScorecard?: Maybe<DomainTspScorecard>;
  readonly updateTeamPlayScorecardRounds?: Maybe<DomainTspScorecardRounds>;
  readonly updateTeamStrokePlayTeeTimes?: Maybe<DomainTspTeeTimes>;
  readonly updateTeamStrokePlayTeeTimesCompressed?: Maybe<DomainTeeTimesCompressed>;
  readonly updateTeeTimes?: Maybe<DomainTeeTimes>;
  readonly updateTeeTimesCompressed?: Maybe<DomainTeeTimesCompressed>;
  readonly updateTeeTimesCompressedV2?: Maybe<DomainTeeTimesCompressed>;
  readonly updateTeeTimesV2?: Maybe<DomainTeeTimesV2>;
  readonly updateTourCup?: Maybe<DomainTourCupRankingEvent>;
  readonly updateTourcastTable?: Maybe<DomainTourcastTable>;
  readonly updateTournament?: Maybe<DomainTournament>;
  readonly updateTournamentGroupLocations?: Maybe<DomainTournamentGroupLocation>;
  readonly updateUpcomingSchedule?: Maybe<DomainScheduleUpcoming>;
};


export type DomainMutationAddFavoriteTourArgs = {
  tourCode: DomainTourCode;
};


export type DomainMutationAddFavoritesArgs = {
  favorites: ReadonlyArray<DomainFavoritePlayerInput>;
};


export type DomainMutationAddNotificationTagsArgs = {
  notificationTags: ReadonlyArray<DomainNotificationTagInput>;
};


export type DomainMutationDeleteFavoritesArgs = {
  favorites: ReadonlyArray<DomainFavoritePlayerInput>;
};


export type DomainMutationDeleteNotificationTagsArgs = {
  notificationTags: ReadonlyArray<DomainNotificationTagInput>;
};


export type DomainMutationUnsubscribeArgs = {
  email: Scalars['String']['input'];
  subscriptionIds: ReadonlyArray<InputMaybe<Scalars['String']['input']>>;
};


export type DomainMutationUpdateBubbleArgs = {
  bubbleId: Scalars['ID']['input'];
};


export type DomainMutationUpdateBubbleWatchArgs = {
  tourCode: DomainTourCode;
};


export type DomainMutationUpdateCourseStatsArgs = {
  tournamentId: Scalars['ID']['input'];
};


export type DomainMutationUpdateCoverageArgs = {
  tournamentId: Scalars['ID']['input'];
};


export type DomainMutationUpdateCupOverviewLeaderboardArgs = {
  id: Scalars['ID']['input'];
};


export type DomainMutationUpdateCupRoundLeaderboardArgs = {
  round?: InputMaybe<Scalars['Int']['input']>;
  tournamentId: Scalars['String']['input'];
};


export type DomainMutationUpdateCupRoundLeaderboardCompressedArgs = {
  round?: InputMaybe<Scalars['Int']['input']>;
  tournamentId: Scalars['String']['input'];
};


export type DomainMutationUpdateCupScorecardArgs = {
  matchId: Scalars['Int']['input'];
  round: Scalars['Int']['input'];
  tournamentId: Scalars['ID']['input'];
};


export type DomainMutationUpdateCurrentLeadersCompressedArgs = {
  tournamentId: Scalars['ID']['input'];
};


export type DomainMutationUpdateGroupLocationsArgs = {
  courseId: Scalars['String']['input'];
  round: Scalars['Int']['input'];
  tournamentId: Scalars['ID']['input'];
};


export type DomainMutationUpdateGroupLocationsEnhancedArgs = {
  courseId: Scalars['String']['input'];
  round: Scalars['Int']['input'];
  tournamentId: Scalars['ID']['input'];
};


export type DomainMutationUpdateHoleDetailsArgs = {
  courseId: Scalars['ID']['input'];
  hole: Scalars['Int']['input'];
  tournamentId: Scalars['ID']['input'];
};


export type DomainMutationUpdateLeaderboardCompressedV2Args = {
  id: Scalars['ID']['input'];
};


export type DomainMutationUpdateLeaderboardCompressedV3Args = {
  odds?: InputMaybe<DomainOddsUpdateInput>;
  tournamentId: Scalars['ID']['input'];
};


export type DomainMutationUpdateLeaderboardStrokesArgs = {
  id: Scalars['ID']['input'];
};


export type DomainMutationUpdateLeaderboardStrokesCompressedArgs = {
  id: Scalars['ID']['input'];
};


export type DomainMutationUpdateLeaderboardV2Args = {
  id: Scalars['ID']['input'];
};


export type DomainMutationUpdateMatchOutcomeIqArgs = {
  matchId: Scalars['Int']['input'];
  roundNumber?: InputMaybe<Scalars['Int']['input']>;
  tournamentId: Scalars['ID']['input'];
};


export type DomainMutationUpdateMatchPlayLeaderboardArgs = {
  id: Scalars['ID']['input'];
};


export type DomainMutationUpdateMatchPlayLeaderboardCompressedArgs = {
  id: Scalars['ID']['input'];
};


export type DomainMutationUpdateMatchPlayPlayoffScorecardArgs = {
  id: Scalars['ID']['input'];
};


export type DomainMutationUpdateMatchPlayScorecardArgs = {
  id: Scalars['ID']['input'];
};


export type DomainMutationUpdateMatchPlayTeeTimesArgs = {
  id: Scalars['ID']['input'];
};


export type DomainMutationUpdateMatchPlayTeeTimesCompressedArgs = {
  id: Scalars['ID']['input'];
};


export type DomainMutationUpdateOddsToWinMarketArgs = {
  oddsToWinId: Scalars['ID']['input'];
};


export type DomainMutationUpdateOddsToWinMarketCompressedArgs = {
  oddsToWinId: Scalars['ID']['input'];
};


export type DomainMutationUpdatePlayerHubArgs = {
  id: Scalars['ID']['input'];
};


export type DomainMutationUpdatePlayerTournamentStatusArgs = {
  playerId: Scalars['ID']['input'];
  tournamentId: Scalars['String']['input'];
};


export type DomainMutationUpdatePlayoffScorecardArgs = {
  id: Scalars['ID']['input'];
};


export type DomainMutationUpdatePlayoffScorecardV2Args = {
  id: Scalars['ID']['input'];
};


export type DomainMutationUpdatePlayoffScorecardV3Args = {
  tournamentId: Scalars['ID']['input'];
};


export type DomainMutationUpdatePlayoffShotDetailsArgs = {
  tournamentId: Scalars['ID']['input'];
};


export type DomainMutationUpdatePlayoffShotDetailsCompressedArgs = {
  tournamentId: Scalars['ID']['input'];
};


export type DomainMutationUpdateScorecardCompressedV3Args = {
  id: Scalars['ID']['input'];
  rounds?: InputMaybe<ReadonlyArray<Scalars['Int']['input']>>;
};


export type DomainMutationUpdateScorecardStatsArgs = {
  id: Scalars['ID']['input'];
  playerId: Scalars['String']['input'];
};


export type DomainMutationUpdateScorecardStatsCompressedV3Args = {
  id: Scalars['ID']['input'];
  playerId: Scalars['String']['input'];
  rounds: ReadonlyArray<Scalars['Int']['input']>;
};


export type DomainMutationUpdateScorecardV2Args = {
  id: Scalars['ID']['input'];
};


export type DomainMutationUpdateShotCommentaryArgs = {
  commentary: ReadonlyArray<DomainShotCommentaryItemInput>;
  playerId: Scalars['String']['input'];
  round: Scalars['Int']['input'];
  tournamentId: Scalars['String']['input'];
};


export type DomainMutationUpdateShotDetailsCompressedV3Args = {
  holes: ReadonlyArray<Scalars['Int']['input']>;
  isUs: Scalars['Boolean']['input'];
  playerId: Scalars['String']['input'];
  round: Scalars['Int']['input'];
  tourcast: Scalars['Boolean']['input'];
  tournamentId: Scalars['String']['input'];
};


export type DomainMutationUpdateTglMatchArgs = {
  matchID: Scalars['ID']['input'];
};


export type DomainMutationUpdateTspPlayoffShotDetailsArgs = {
  tournamentId: Scalars['ID']['input'];
};


export type DomainMutationUpdateTspPlayoffShotDetailsCompressedArgs = {
  tournamentId: Scalars['ID']['input'];
};


export type DomainMutationUpdateTeamPlayLeaderboardArgs = {
  id: Scalars['ID']['input'];
  provider: Scalars['String']['input'];
};


export type DomainMutationUpdateTeamPlayLeaderboardCompressedArgs = {
  id: Scalars['ID']['input'];
  provider: Scalars['String']['input'];
};


export type DomainMutationUpdateTeamPlayScorecardArgs = {
  id: Scalars['ID']['input'];
};


export type DomainMutationUpdateTeamPlayScorecardRoundsArgs = {
  id: Scalars['ID']['input'];
};


export type DomainMutationUpdateTeamStrokePlayTeeTimesArgs = {
  id: Scalars['ID']['input'];
};


export type DomainMutationUpdateTeamStrokePlayTeeTimesCompressedArgs = {
  id: Scalars['ID']['input'];
};


export type DomainMutationUpdateTeeTimesArgs = {
  id: Scalars['ID']['input'];
};


export type DomainMutationUpdateTeeTimesCompressedArgs = {
  id: Scalars['ID']['input'];
};


export type DomainMutationUpdateTeeTimesCompressedV2Args = {
  id: Scalars['ID']['input'];
};


export type DomainMutationUpdateTeeTimesV2Args = {
  id: Scalars['ID']['input'];
};


export type DomainMutationUpdateTourCupArgs = {
  id: Scalars['ID']['input'];
  type?: InputMaybe<DomainTourCupType>;
};


export type DomainMutationUpdateTourcastTableArgs = {
  tournamentId: Scalars['ID']['input'];
};


export type DomainMutationUpdateTournamentArgs = {
  id: Scalars['ID']['input'];
};


export type DomainMutationUpdateTournamentGroupLocationsArgs = {
  round: Scalars['Int']['input'];
  tournamentId: Scalars['ID']['input'];
};


export type DomainMutationUpdateUpcomingScheduleArgs = {
  tourCode: Scalars['String']['input'];
  year?: InputMaybe<Scalars['String']['input']>;
};

export type DomainNewsArticle = {
  readonly __typename: 'NewsArticle';
  readonly aiGenerated?: Maybe<Scalars['Boolean']['output']>;
  readonly analyticsTags?: Maybe<ReadonlyArray<Scalars['String']['output']>>;
  readonly articleFormType?: Maybe<DomainArticleFormType>;
  /** @deprecated Use articleImageAsset */
  readonly articleImage?: Maybe<Scalars['String']['output']>;
  readonly articleImageAlt: Scalars['String']['output'];
  readonly articleImageAsset?: Maybe<DomainImageAsset>;
  readonly articleLabel?: Maybe<Scalars['String']['output']>;
  readonly author?: Maybe<DomainNewsArticleAuthor>;
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
  readonly players?: Maybe<ReadonlyArray<DomainArticlePlayer>>;
  readonly publishDate?: Maybe<Scalars['AWSTimestamp']['output']>;
  readonly shareURL: Scalars['String']['output'];
  readonly sponsor?: Maybe<DomainNewsArticleSponsor>;
  readonly team?: Maybe<DomainRyderCupTeamType>;
  readonly teaserContent?: Maybe<Scalars['String']['output']>;
  readonly teaserHeadline?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use teaserImageOverrideAsset */
  readonly teaserImageOverride?: Maybe<Scalars['String']['output']>;
  readonly teaserImageOverrideAsset?: Maybe<DomainImageAsset>;
  readonly topics?: Maybe<ReadonlyArray<DomainContentTopics>>;
  readonly updateDate?: Maybe<Scalars['AWSTimestamp']['output']>;
  readonly url: Scalars['String']['output'];
};

export type DomainNewsArticleAuthor = {
  readonly __typename: 'NewsArticleAuthor';
  readonly byLine?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use byLineIconAsset */
  readonly byLineIcon?: Maybe<Scalars['String']['output']>;
  readonly byLineIconAsset?: Maybe<DomainImageAsset>;
  readonly byLineLink?: Maybe<Scalars['String']['output']>;
  readonly byLineLinkDisplay?: Maybe<Scalars['String']['output']>;
  readonly firstName: Scalars['String']['output'];
  /** @deprecated Use headshotAsset */
  readonly headshot?: Maybe<Scalars['String']['output']>;
  readonly headshotAsset?: Maybe<DomainImageAsset>;
  readonly lastName: Scalars['String']['output'];
  readonly twitter?: Maybe<Scalars['String']['output']>;
};

export type DomainNewsArticleBlockQuote = {
  readonly __typename: 'NewsArticleBlockQuote';
  readonly class?: Maybe<Scalars['String']['output']>;
  readonly otherAttribute?: Maybe<Scalars['String']['output']>;
  readonly playerId?: Maybe<Scalars['String']['output']>;
  readonly playerName?: Maybe<Scalars['String']['output']>;
  readonly quote?: Maybe<Scalars['String']['output']>;
};

export type DomainNewsArticleContentSegment = {
  readonly __typename: 'NewsArticleContentSegment';
  readonly data?: Maybe<Scalars['String']['output']>;
  readonly format?: Maybe<DomainNewsArticleFormat>;
  readonly id?: Maybe<Scalars['String']['output']>;
  readonly imageAsset?: Maybe<DomainImageAsset>;
  readonly imageDescription?: Maybe<Scalars['String']['output']>;
  readonly imageOrientation?: Maybe<DomainOrientation>;
  readonly type: Scalars['String']['output'];
  readonly value?: Maybe<Scalars['String']['output']>;
  readonly webViewLink?: Maybe<Scalars['String']['output']>;
};

export type DomainNewsArticleDetails = {
  readonly __typename: 'NewsArticleDetails';
  readonly aiGenerated?: Maybe<Scalars['Boolean']['output']>;
  readonly analyticsTags?: Maybe<ReadonlyArray<Scalars['String']['output']>>;
  readonly articleImageAlt: Scalars['String']['output'];
  readonly articleLabel?: Maybe<Scalars['String']['output']>;
  readonly articleSponsor?: Maybe<Scalars['String']['output']>;
  readonly authorReference?: Maybe<DomainNewsArticleAuthor>;
  readonly brandedContent: Scalars['Boolean']['output'];
  readonly canonicalUrl?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tournaments.contentTournamentId */
  readonly contentTournamentId?: Maybe<Scalars['String']['output']>;
  readonly cta?: Maybe<DomainCallToAction>;
  readonly datePublished: Scalars['AWSTimestamp']['output'];
  readonly disableAds: Scalars['Boolean']['output'];
  readonly franchise: Scalars['String']['output'];
  readonly franchiseDisplayName: Scalars['String']['output'];
  readonly headline: Scalars['String']['output'];
  readonly hero?: Maybe<DomainNewsArticleHero>;
  readonly isBreakingNews?: Maybe<Scalars['Boolean']['output']>;
  readonly isLive: Scalars['Boolean']['output'];
  readonly leadVideoId?: Maybe<Scalars['String']['output']>;
  readonly leadVideoTitle?: Maybe<Scalars['String']['output']>;
  readonly longForm?: Maybe<Scalars['Boolean']['output']>;
  readonly metadata?: Maybe<DomainNewsArticleMetadata>;
  readonly moreNewsItems: ReadonlyArray<DomainNewsArticle>;
  readonly moreNewsTitle?: Maybe<Scalars['String']['output']>;
  readonly nodes: ReadonlyArray<DomainNewsArticleNode>;
  readonly overviewNodes?: Maybe<ReadonlyArray<DomainNewsArticleNode>>;
  readonly path: Scalars['String']['output'];
  readonly photoPosition?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use players field that contains name and id */
  readonly playerNames?: Maybe<ReadonlyArray<Scalars['String']['output']>>;
  readonly players?: Maybe<ReadonlyArray<DomainArticlePlayer>>;
  readonly readTime: Scalars['String']['output'];
  readonly relatedFacts?: Maybe<ReadonlyArray<Scalars['String']['output']>>;
  readonly shareURL: Scalars['String']['output'];
  readonly sponsor?: Maybe<DomainNewsArticleSponsor>;
  readonly tags?: Maybe<ReadonlyArray<Maybe<Scalars['String']['output']>>>;
  readonly team?: Maybe<DomainRyderCupTeamType>;
  readonly teaserAsset?: Maybe<Scalars['String']['output']>;
  readonly topics?: Maybe<ReadonlyArray<DomainContentTopics>>;
  /** @deprecated Use tournaments.tourName */
  readonly tourName?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tournaments.tournamentName */
  readonly tournamentName?: Maybe<Scalars['String']['output']>;
  readonly tournaments?: Maybe<ReadonlyArray<DomainNewsArticleDetailsTournament>>;
  readonly url: Scalars['String']['output'];
};

export type DomainNewsArticleDetailsCompressed = {
  readonly __typename: 'NewsArticleDetailsCompressed';
  readonly path: Scalars['String']['output'];
  readonly payload: Scalars['String']['output'];
};

export type DomainNewsArticleDetailsTournament = {
  readonly __typename: 'NewsArticleDetailsTournament';
  readonly contentTournamentId: Scalars['String']['output'];
  readonly tourName: Scalars['String']['output'];
  readonly tournamentName: Scalars['String']['output'];
};

export type DomainNewsArticleDivider = {
  readonly __typename: 'NewsArticleDivider';
  readonly value?: Maybe<Scalars['String']['output']>;
};

export type DomainNewsArticleEmbedded = {
  readonly __typename: 'NewsArticleEmbedded';
  readonly class?: Maybe<Scalars['String']['output']>;
  readonly frameborder?: Maybe<Scalars['Boolean']['output']>;
  readonly height?: Maybe<Scalars['String']['output']>;
  readonly mobileHeight?: Maybe<Scalars['String']['output']>;
  readonly scroll?: Maybe<Scalars['Boolean']['output']>;
  readonly url?: Maybe<Scalars['String']['output']>;
};

export type DomainNewsArticleFormat = {
  readonly __typename: 'NewsArticleFormat';
  readonly styles?: Maybe<ReadonlyArray<DomainStyle>>;
  readonly variants?: Maybe<ReadonlyArray<Scalars['String']['output']>>;
};

export type DomainNewsArticleHeader = {
  readonly __typename: 'NewsArticleHeader';
  readonly headerSegments?: Maybe<ReadonlyArray<DomainNewsArticleHeaderSegment>>;
  readonly id?: Maybe<Scalars['String']['output']>;
  readonly style?: Maybe<Scalars['String']['output']>;
};

export type DomainNewsArticleHeaderSegment = {
  readonly __typename: 'NewsArticleHeaderSegment';
  readonly class?: Maybe<Scalars['String']['output']>;
  readonly headerType: Scalars['String']['output'];
  readonly segments?: Maybe<ReadonlyArray<DomainNewsArticleContentSegment>>;
};

export type DomainNewsArticleHero = {
  readonly __typename: 'NewsArticleHero';
  /** @deprecated Use imageAsset */
  readonly image?: Maybe<Scalars['String']['output']>;
  readonly imageAsset?: Maybe<DomainImageAsset>;
  readonly imageDescription?: Maybe<Scalars['String']['output']>;
  readonly video?: Maybe<DomainVideo>;
};

export type DomainNewsArticleHowToWatch = {
  readonly __typename: 'NewsArticleHowToWatch';
  readonly class?: Maybe<Scalars['String']['output']>;
  readonly round?: Maybe<Scalars['Int']['output']>;
  readonly season?: Maybe<Scalars['String']['output']>;
  readonly tournamentId?: Maybe<Scalars['String']['output']>;
};

export type DomainNewsArticleImage = {
  readonly __typename: 'NewsArticleImage';
  readonly segments: ReadonlyArray<DomainNewsArticleContentSegment>;
};

export type DomainNewsArticleInlineOdds = {
  readonly __typename: 'NewsArticleInlineOdds';
  readonly marketId: DomainHistoricalOddsId;
  readonly playerId: Scalars['String']['output'];
  readonly playerName: Scalars['String']['output'];
  readonly timeStamp?: Maybe<Scalars['AWSDateTime']['output']>;
  readonly tournamentId: Scalars['String']['output'];
};

export type DomainNewsArticleInstagram = {
  readonly __typename: 'NewsArticleInstagram';
  readonly class?: Maybe<Scalars['String']['output']>;
  readonly url?: Maybe<Scalars['String']['output']>;
};

export type DomainNewsArticleLineBreak = {
  readonly __typename: 'NewsArticleLineBreak';
  readonly breakValue?: Maybe<Scalars['String']['output']>;
};

export type DomainNewsArticleLink = {
  readonly __typename: 'NewsArticleLink';
  readonly segments: ReadonlyArray<DomainNewsArticleContentSegment>;
};

export type DomainNewsArticleMetadata = {
  readonly __typename: 'NewsArticleMetadata';
  readonly metadata?: Maybe<ReadonlyArray<DomainNewsArticleMetadataSegment>>;
};

export type DomainNewsArticleMetadataSegment = {
  readonly __typename: 'NewsArticleMetadataSegment';
  readonly name: Scalars['String']['output'];
  readonly value?: Maybe<Scalars['String']['output']>;
};

export type DomainNewsArticleNode = DomainArticleOddsTableQuery | DomainCerosEmbedPlugin | DomainExpertPicksNode | DomainNewsArticleBlockQuote | DomainNewsArticleDivider | DomainNewsArticleEmbedded | DomainNewsArticleHeader | DomainNewsArticleHowToWatch | DomainNewsArticleImage | DomainNewsArticleInstagram | DomainNewsArticleLineBreak | DomainNewsArticleLink | DomainNewsArticleOddsGraph | DomainNewsArticleOddsParagraph | DomainNewsArticleParagraph | DomainNewsArticlePhotoGallery | DomainNewsArticlePlayerComparison | DomainNewsArticleScoreCard | DomainNewsArticleStats | DomainNewsArticleText | DomainNewsArticleTweetNode | DomainNewsArticleVideo | DomainNewsArticleWeather | DomainRelatedFactsNode | DomainTglBoxScore | DomainTableFragment | DomainUnorderedListNode;

export type DomainNewsArticleOddsGraph = {
  readonly __typename: 'NewsArticleOddsGraph';
  readonly marketId?: Maybe<DomainHistoricalOddsId>;
  readonly oddsTimeType?: Maybe<DomainOddsTimeType>;
  readonly playerIds?: Maybe<ReadonlyArray<Scalars['String']['output']>>;
  readonly round?: Maybe<Scalars['Int']['output']>;
  readonly tournamentId: Scalars['String']['output'];
};

export type DomainNewsArticleOddsParagraph = {
  readonly __typename: 'NewsArticleOddsParagraph';
  readonly content: ReadonlyArray<DomainOddsParagraphContent>;
};

export type DomainNewsArticleParagraph = {
  readonly __typename: 'NewsArticleParagraph';
  readonly id?: Maybe<Scalars['String']['output']>;
  readonly segments: ReadonlyArray<DomainNewsArticleContentSegment>;
};

export type DomainNewsArticlePhotoGallery = {
  readonly __typename: 'NewsArticlePhotoGallery';
  readonly images: ReadonlyArray<DomainNewsArticleImage>;
};

export type DomainNewsArticlePlayerComparison = {
  readonly __typename: 'NewsArticlePlayerComparison';
  readonly class?: Maybe<Scalars['String']['output']>;
  readonly playerIds?: Maybe<ReadonlyArray<Scalars['String']['output']>>;
  readonly playerNames?: Maybe<ReadonlyArray<Scalars['String']['output']>>;
  readonly season?: Maybe<Scalars['String']['output']>;
  readonly statCategory?: Maybe<Scalars['String']['output']>;
  readonly tournamentId?: Maybe<Scalars['String']['output']>;
  readonly type: DomainPlayerComparisonDisplay;
};

export type DomainNewsArticlePlayerTournamentOdds = {
  readonly __typename: 'NewsArticlePlayerTournamentOdds';
  readonly playerId: Scalars['String']['output'];
  readonly timeStamp?: Maybe<Scalars['AWSDateTime']['output']>;
  readonly tournamentId: Scalars['String']['output'];
  readonly tournamentMarketType?: Maybe<DomainOddsMarketType>;
};

export type DomainNewsArticleScoreCard = {
  readonly __typename: 'NewsArticleScoreCard';
  readonly class?: Maybe<Scalars['String']['output']>;
  readonly playerId?: Maybe<Scalars['String']['output']>;
  readonly playerName?: Maybe<Scalars['String']['output']>;
  readonly round?: Maybe<Scalars['String']['output']>;
  readonly season?: Maybe<Scalars['String']['output']>;
  readonly tournamentId?: Maybe<Scalars['String']['output']>;
};

export type DomainNewsArticleSponsor = {
  readonly __typename: 'NewsArticleSponsor';
  readonly description?: Maybe<Scalars['String']['output']>;
  readonly gam?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use imageAsset */
  readonly image?: Maybe<Scalars['String']['output']>;
  readonly imageAsset?: Maybe<DomainImageAsset>;
  /** @deprecated Use logoAsset */
  readonly logo: Scalars['String']['output'];
  readonly logoAsset: DomainImageAsset;
  /** @deprecated Use logoDarkAsset */
  readonly logoDark: Scalars['String']['output'];
  readonly logoDarkAsset: DomainImageAsset;
  readonly name: Scalars['String']['output'];
  readonly sponsorPrefix?: Maybe<Scalars['String']['output']>;
  readonly websiteUrl?: Maybe<Scalars['String']['output']>;
};

export type DomainNewsArticleStatType =
  | 'BY_NUMBERS'
  | 'DOT_CHART'
  | 'LINE_CHART';

export type DomainNewsArticleStats = {
  readonly __typename: 'NewsArticleStats';
  readonly playerId?: Maybe<Scalars['String']['output']>;
  readonly playerName?: Maybe<Scalars['String']['output']>;
  readonly season?: Maybe<Scalars['String']['output']>;
  readonly statType: DomainNewsArticleStatType;
  readonly stats: ReadonlyArray<DomainContentStat>;
  readonly tournamentId?: Maybe<Scalars['String']['output']>;
};

export type DomainNewsArticleTeaserAsset = {
  readonly __typename: 'NewsArticleTeaserAsset';
  readonly value?: Maybe<Scalars['String']['output']>;
};

export type DomainNewsArticleText = {
  readonly __typename: 'NewsArticleText';
  readonly value?: Maybe<Scalars['String']['output']>;
};

export type DomainNewsArticleTweetNode = {
  readonly __typename: 'NewsArticleTweetNode';
  readonly tweetId: Scalars['String']['output'];
};

export type DomainNewsArticleVideo = {
  readonly __typename: 'NewsArticleVideo';
  readonly video?: Maybe<DomainVideo>;
};

export type DomainNewsArticleWeather = {
  readonly __typename: 'NewsArticleWeather';
  readonly class?: Maybe<Scalars['String']['output']>;
  readonly season?: Maybe<Scalars['String']['output']>;
  readonly tour?: Maybe<Scalars['String']['output']>;
  readonly tournamentId?: Maybe<Scalars['String']['output']>;
};

export type DomainNewsArticles = {
  readonly __typename: 'NewsArticles';
  readonly articles: ReadonlyArray<DomainNewsArticle>;
  readonly franchiseSponsors?: Maybe<ReadonlyArray<DomainNewsSponsor>>;
  /** @deprecated not needed */
  readonly integratedComponents: ReadonlyArray<DomainIntegratedComponent>;
};

export type DomainNewsFranchise = {
  readonly __typename: 'NewsFranchise';
  readonly franchise: Scalars['String']['output'];
  readonly franchiseLabel: Scalars['String']['output'];
};

export type DomainNewsLetterType =
  | 'GLOBAL'
  | 'TOURNAMENT';

export type DomainNewsSponsor = {
  readonly __typename: 'NewsSponsor';
  readonly accessibilityText: Scalars['String']['output'];
  readonly backgroundColor: Scalars['String']['output'];
  readonly franchise: Scalars['String']['output'];
  /** @deprecated Use imageAsset */
  readonly image: Scalars['String']['output'];
  readonly imageAsset: DomainImageAsset;
  readonly label: Scalars['String']['output'];
};

export type DomainNewsletter = {
  readonly __typename: 'Newsletter';
  readonly ctaText: Scalars['String']['output'];
  readonly description?: Maybe<Scalars['String']['output']>;
  readonly gigyaSubscriptionId: Scalars['String']['output'];
  readonly image: Scalars['String']['output'];
  readonly newsLetterType: DomainNewsLetterType;
  readonly title: Scalars['String']['output'];
  readonly tourCode?: Maybe<DomainTourCode>;
};

export type DomainNotificationTag = {
  readonly __typename: 'NotificationTag';
  readonly tag: Scalars['String']['output'];
};

export type DomainNotificationTagInput = {
  readonly tag: Scalars['String']['input'];
};

export type DomainNotificationTagResponse = {
  readonly __typename: 'NotificationTagResponse';
  readonly ok: Scalars['Boolean']['output'];
  readonly tags: ReadonlyArray<Maybe<DomainNotificationTag>>;
};

export type DomainOddsBanner = {
  readonly __typename: 'OddsBanner';
  readonly cta?: Maybe<DomainCallToAction>;
  readonly disclaimer: Scalars['String']['output'];
  readonly image: Scalars['String']['output'];
  readonly label: Scalars['String']['output'];
};

export type DomainOddsCutsOption = {
  readonly __typename: 'OddsCutsOption';
  readonly entity: DomainOddsEntity;
  readonly noOdds: DomainOddsValues;
  readonly yesOdds: DomainOddsValues;
};

export type DomainOddsCutsPlayers = {
  readonly __typename: 'OddsCutsPlayers';
  readonly countryFlag?: Maybe<Scalars['String']['output']>;
  readonly currentRound?: Maybe<Scalars['Int']['output']>;
  readonly displayName: Scalars['String']['output'];
  readonly firstName: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
  readonly lastName: Scalars['String']['output'];
  readonly matchId?: Maybe<Scalars['Int']['output']>;
  readonly noOdds: Scalars['String']['output'];
  readonly noOddsSwing?: Maybe<DomainOddsSwing>;
  readonly noOptionsId: Scalars['String']['output'];
  readonly position: Scalars['String']['output'];
  readonly seed?: Maybe<Scalars['Int']['output']>;
  readonly total: Scalars['String']['output'];
  readonly yesOdds: Scalars['String']['output'];
  readonly yesOddsSwing?: Maybe<DomainOddsSwing>;
  readonly yesOptionsId: Scalars['String']['output'];
};

/**   Odds Primitives */
export type DomainOddsEntity = {
  readonly __typename: 'OddsEntity';
  readonly color?: Maybe<Scalars['String']['output']>;
  readonly entityFlagUrl?: Maybe<Scalars['String']['output']>;
  readonly entityId: Scalars['ID']['output'];
  readonly flagSurroundColor?: Maybe<Scalars['String']['output']>;
  readonly flagSurroundColorDark?: Maybe<Scalars['String']['output']>;
  readonly groupNum: Scalars['Int']['output'];
  readonly maxRound: Scalars['Int']['output'];
  readonly players: ReadonlyArray<DomainOddsPlayer>;
  readonly position: Scalars['String']['output'];
  readonly score: Scalars['String']['output'];
  readonly seed?: Maybe<Scalars['Int']['output']>;
  readonly thru?: Maybe<Scalars['String']['output']>;
  readonly total: Scalars['String']['output'];
  readonly totalSort: Scalars['Int']['output'];
};

export type DomainOddsFinishes = {
  readonly __typename: 'OddsFinishes';
  readonly countryFlag?: Maybe<Scalars['String']['output']>;
  readonly currentRound?: Maybe<Scalars['Int']['output']>;
  readonly displayName: Scalars['String']['output'];
  readonly firstName: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
  readonly lastName: Scalars['String']['output'];
  readonly matchId?: Maybe<Scalars['Int']['output']>;
  readonly odds: Scalars['String']['output'];
  readonly oddsSwing?: Maybe<DomainOddsSwing>;
  readonly optionsId: Scalars['String']['output'];
  readonly seed?: Maybe<Scalars['Int']['output']>;
};

export type DomainOddsFinishesOption = DomainBaseOddsOption & {
  readonly __typename: 'OddsFinishesOption';
  readonly entity: DomainOddsEntity;
  readonly odds: DomainOddsValues;
};

export type DomainOddsFormat =
  | 'DECIMAL'
  | 'FRACTIONAL'
  | 'MONEYLINE';

export type DomainOddsGroup = {
  readonly __typename: 'OddsGroup';
  readonly id: Scalars['ID']['output'];
  readonly matchupPlayers: ReadonlyArray<DomainMatchupsPlayer>;
  readonly subMarket: Scalars['String']['output'];
};

export type DomainOddsGroupOptionV2 = DomainBaseOddsOption & {
  readonly __typename: 'OddsGroupOptionV2';
  readonly entity: DomainOddsEntity;
  readonly odds: DomainOddsValues;
};

export type DomainOddsLeadersOption = DomainBaseOddsOption & {
  readonly __typename: 'OddsLeadersOption';
  readonly entity: DomainOddsEntity;
  readonly odds: DomainOddsValues;
};

export type DomainOddsLeadersPlayers = {
  readonly __typename: 'OddsLeadersPlayers';
  readonly countryFlag?: Maybe<Scalars['String']['output']>;
  readonly currentRound?: Maybe<Scalars['Int']['output']>;
  readonly displayName: Scalars['String']['output'];
  readonly firstName: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
  readonly lastName: Scalars['String']['output'];
  readonly matchId?: Maybe<Scalars['Int']['output']>;
  readonly odds: Scalars['String']['output'];
  readonly oddsSwing?: Maybe<DomainOddsSwing>;
  readonly optionsId: Scalars['String']['output'];
  readonly seed?: Maybe<Scalars['Int']['output']>;
};

/**   End Market Abstractions */
export type DomainOddsMarketType =
  | 'FINISHES'
  | 'GROUP_WINNER'
  | 'MATCHUP'
  | 'NATIONALITY'
  | 'PLAYER_PROPS'
  | 'WINNER';

export type DomainOddsMatchupOptionGroup = {
  readonly __typename: 'OddsMatchupOptionGroup';
  readonly options: ReadonlyArray<DomainMatchupOptionV2>;
};

export type DomainOddsMatchups = {
  readonly __typename: 'OddsMatchups';
  readonly id: Scalars['ID']['output'];
  readonly matchupPlayers: ReadonlyArray<DomainMatchupsPlayer>;
  readonly subMarket: Scalars['String']['output'];
};

export type DomainOddsMessage = {
  readonly __typename: 'OddsMessage';
  readonly body: Scalars['String']['output'];
  readonly header: Scalars['String']['output'];
};

export type DomainOddsNationality = {
  readonly __typename: 'OddsNationality';
  readonly countryFlag?: Maybe<Scalars['String']['output']>;
  readonly currentRound?: Maybe<Scalars['Int']['output']>;
  readonly displayName: Scalars['String']['output'];
  readonly firstName: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
  readonly lastName: Scalars['String']['output'];
  readonly matchId?: Maybe<Scalars['Int']['output']>;
  readonly odds: Scalars['String']['output'];
  readonly oddsSwing?: Maybe<DomainOddsSwing>;
  readonly optionsId: Scalars['String']['output'];
  readonly seed?: Maybe<Scalars['Int']['output']>;
};

export type DomainOddsNationalityOption = DomainBaseOddsOption & {
  readonly __typename: 'OddsNationalityOption';
  readonly entity: DomainOddsEntity;
  readonly odds: DomainOddsValues;
};

export type DomainOddsOption = DomainOddsCutsPlayers | DomainOddsFinishes | DomainOddsGroup | DomainOddsLeadersPlayers | DomainOddsMatchups | DomainOddsNationality | DomainOddsToWin;

export type DomainOddsOptionV2 = DomainOddsCutsOption | DomainOddsFinishesOption | DomainOddsGroupOptionV2 | DomainOddsLeadersOption | DomainOddsMatchupOptionGroup | DomainOddsNationalityOption | DomainOddsToWinV2;

export type DomainOddsParagraphContent = DomainNewsArticleInlineOdds | DomainNewsArticleText;

export type DomainOddsPlayer = {
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

export type DomainOddsProvider =
  | 'BET365'
  | 'DRAFTKINGS'
  | 'ESPNBET'
  | 'FANDUEL'
  | 'MGM';

export type DomainOddsSwing =
  | 'CONSTANT'
  | 'DOWN'
  | 'UP';

/**   Odds Table */
export type DomainOddsTable = {
  readonly __typename: 'OddsTable';
  readonly markets: ReadonlyArray<DomainArticleOddsMarkets>;
  readonly players: ReadonlyArray<DomainPlayerMarketsRow>;
  readonly provider?: Maybe<DomainOddsProvider>;
  readonly tournamentId: Scalars['String']['output'];
  readonly tournamentName: Scalars['String']['output'];
};

/**  Odds Graph */
export type DomainOddsTimeType =
  | 'HOLE';

export type DomainOddsTimeline = {
  readonly __typename: 'OddsTimeline';
  readonly countryCode: Scalars['String']['output'];
  readonly oddsProvider: DomainOddsProvider;
  readonly players: ReadonlyArray<DomainOddsTimelinePlayer>;
  readonly round: Scalars['String']['output'];
  readonly tournamentId: Scalars['String']['output'];
};

export type DomainOddsTimelinePlayer = {
  readonly __typename: 'OddsTimelinePlayer';
  readonly data: ReadonlyArray<DomainOddsTimelinePoint>;
  readonly playerColor: Scalars['String']['output'];
  readonly playerId: Scalars['String']['output'];
  readonly playerName: Scalars['String']['output'];
};

export type DomainOddsTimelinePoint = {
  readonly __typename: 'OddsTimelinePoint';
  readonly holeNumber?: Maybe<Scalars['Int']['output']>;
  readonly holeSequence?: Maybe<Scalars['Int']['output']>;
  readonly odds: Scalars['String']['output'];
  readonly oddsSwing?: Maybe<DomainOddsSwing>;
  readonly round?: Maybe<Scalars['Int']['output']>;
  readonly time: Scalars['AWSTimestamp']['output'];
};

export type DomainOddsToWin = {
  readonly __typename: 'OddsToWin';
  readonly countryFlag?: Maybe<Scalars['String']['output']>;
  readonly currentRound?: Maybe<Scalars['Int']['output']>;
  readonly displayName: Scalars['String']['output'];
  readonly firstName: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
  readonly lastName: Scalars['String']['output'];
  readonly matchId?: Maybe<Scalars['Int']['output']>;
  readonly odds: Scalars['String']['output'];
  readonly oddsSwing?: Maybe<DomainOddsSwing>;
  readonly optionsId: Scalars['String']['output'];
  readonly position: Scalars['String']['output'];
  readonly score: Scalars['String']['output'];
  readonly seed?: Maybe<Scalars['Int']['output']>;
  readonly thru?: Maybe<Scalars['String']['output']>;
  readonly total: Scalars['String']['output'];
};

export type DomainOddsToWinMarket = {
  readonly __typename: 'OddsToWinMarket';
  readonly message?: Maybe<DomainOddsMessage>;
  readonly oddsEnabled: Scalars['Boolean']['output'];
  readonly oddsToWinId: Scalars['ID']['output'];
  readonly players: ReadonlyArray<DomainOddsToWinPlayer>;
};

/**  Odds V3 */
export type DomainOddsToWinMarketCompressed = {
  readonly __typename: 'OddsToWinMarketCompressed';
  readonly id: Scalars['ID']['output'];
  readonly payload: Scalars['String']['output'];
};

export type DomainOddsToWinPlayer = {
  readonly __typename: 'OddsToWinPlayer';
  readonly odds: Scalars['String']['output'];
  readonly oddsDirection: DomainOddsSwing;
  readonly oddsSort: Scalars['Float']['output'];
  readonly optionId?: Maybe<Scalars['String']['output']>;
  readonly playerId: Scalars['ID']['output'];
  readonly url?: Maybe<Scalars['String']['output']>;
};

export type DomainOddsToWinTracker = {
  readonly __typename: 'OddsToWinTracker';
  readonly title: Scalars['String']['output'];
  /** @deprecated use new tournamentIds array */
  readonly tournamentId?: Maybe<Scalars['String']['output']>;
  readonly tournamentIds?: Maybe<ReadonlyArray<Scalars['String']['output']>>;
};

export type DomainOddsToWinV2 = DomainBaseOddsOption & {
  readonly __typename: 'OddsToWinV2';
  readonly entity: DomainOddsEntity;
  readonly odds: DomainOddsValues;
};

export type DomainOddsUpdateInput = {
  readonly oddsFormat: DomainOddsFormat;
  readonly provider: DomainOddsProvider;
};

export type DomainOddsValues = {
  readonly __typename: 'OddsValues';
  readonly odds: Scalars['String']['output'];
  readonly oddsSwing: DomainOddsSwing;
  readonly optionId: Scalars['ID']['output'];
};

export type DomainOrientation =
  | 'Landscape'
  | 'Portrait';

export type DomainOutComeIqHole = {
  readonly __typename: 'OutComeIQHole';
  readonly euMatchWin: Scalars['Float']['output'];
  readonly holeNum: Scalars['Int']['output'];
  readonly matchDraw: Scalars['Float']['output'];
  readonly usMatchWin: Scalars['Float']['output'];
};

export type DomainOverviewStat = {
  readonly __typename: 'OverviewStat';
  readonly players: ReadonlyArray<DomainLeaderStat>;
  readonly statId: Scalars['String']['output'];
  readonly statName: Scalars['String']['output'];
  readonly tourAvg?: Maybe<Scalars['String']['output']>;
};

export type DomainOverviewStats = {
  readonly __typename: 'OverviewStats';
  readonly categories: ReadonlyArray<DomainStatCategoryConfig>;
  readonly stats: ReadonlyArray<DomainOverviewStat>;
  readonly tourCode: DomainTourCode;
  readonly year: Scalars['Int']['output'];
};

export type DomainPageMetadata = {
  readonly __typename: 'PageMetadata';
  readonly metadata: ReadonlyArray<DomainPageMetadataSegment>;
};

export type DomainPageMetadataSegment = {
  readonly __typename: 'PageMetadataSegment';
  readonly name: Scalars['String']['output'];
  readonly value: Scalars['String']['output'];
};

export type DomainPaginationDetails = {
  readonly __typename: 'PaginationDetails';
  readonly limit?: Maybe<Scalars['Int']['output']>;
  readonly offset?: Maybe<Scalars['Int']['output']>;
};

export type DomainPlatform =
  | 'ANDROID'
  | 'IOS'
  | 'WEB';

export type DomainPlayer = {
  readonly __typename: 'Player';
  readonly abbreviations: Scalars['String']['output'];
  readonly abbreviationsAccessibilityText: Scalars['String']['output'];
  readonly amateur: Scalars['Boolean']['output'];
  readonly assets?: Maybe<ReadonlyArray<DomainPlayerAsset>>;
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

export type DomainPlayerAsset = DomainTourBoundAsset;

export type DomainPlayerBio = {
  readonly __typename: 'PlayerBio';
  readonly age?: Maybe<Scalars['String']['output']>;
  readonly birthplace: DomainPlayerBioLocation;
  readonly born?: Maybe<Scalars['String']['output']>;
  readonly bornAccessibilityText?: Maybe<Scalars['String']['output']>;
  readonly careerEarnings?: Maybe<Scalars['String']['output']>;
  readonly deceased: Scalars['Boolean']['output'];
  readonly deceasedDate?: Maybe<Scalars['String']['output']>;
  readonly degree?: Maybe<Scalars['String']['output']>;
  readonly exemptions?: Maybe<ReadonlyArray<DomainPlayerBioExemption>>;
  readonly family?: Maybe<Scalars['String']['output']>;
  readonly graduationYear?: Maybe<Scalars['String']['output']>;
  readonly heightImperial?: Maybe<Scalars['String']['output']>;
  readonly heightImperialAccessibilityText?: Maybe<Scalars['String']['output']>;
  readonly heightMeters?: Maybe<Scalars['String']['output']>;
  readonly overview?: Maybe<Scalars['String']['output']>;
  readonly personal?: Maybe<ReadonlyArray<Scalars['String']['output']>>;
  readonly playsFrom: DomainPlayerBioLocation;
  readonly primaryTour?: Maybe<Scalars['String']['output']>;
  readonly pronunciation?: Maybe<Scalars['String']['output']>;
  readonly residence: DomainPlayerBioLocation;
  readonly school?: Maybe<Scalars['String']['output']>;
  readonly social?: Maybe<ReadonlyArray<DomainPlayerBioSocial>>;
  /** @deprecated No data for this field, use primaryTour */
  readonly tours: ReadonlyArray<DomainTourCode>;
  readonly turnedPro?: Maybe<Scalars['String']['output']>;
  readonly websiteURL?: Maybe<Scalars['String']['output']>;
  readonly weightImperial?: Maybe<Scalars['String']['output']>;
  readonly weightKilograms?: Maybe<Scalars['String']['output']>;
};

export type DomainPlayerBioExemption = {
  readonly __typename: 'PlayerBioExemption';
  readonly description?: Maybe<Scalars['String']['output']>;
  readonly expirationDate?: Maybe<Scalars['String']['output']>;
  readonly tour?: Maybe<DomainTourCode>;
};

export type DomainPlayerBioLocation = {
  readonly __typename: 'PlayerBioLocation';
  readonly city?: Maybe<Scalars['String']['output']>;
  readonly country?: Maybe<Scalars['String']['output']>;
  readonly countryCode?: Maybe<Scalars['String']['output']>;
  readonly state?: Maybe<Scalars['String']['output']>;
  readonly stateCode?: Maybe<Scalars['String']['output']>;
};

export type DomainPlayerBioSocial = {
  readonly __typename: 'PlayerBioSocial';
  readonly type: DomainSocialType;
  readonly url: Scalars['String']['output'];
};

export type DomainPlayerBioWrapper = {
  readonly __typename: 'PlayerBioWrapper';
  readonly bioLink: Scalars['String']['output'];
  readonly country: Scalars['String']['output'];
  readonly countryFlag: Scalars['String']['output'];
  readonly displayName: Scalars['String']['output'];
  readonly firstName: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
  readonly lastName: Scalars['String']['output'];
  readonly owgr?: Maybe<Scalars['Int']['output']>;
  readonly playerBio?: Maybe<DomainPlayerBio>;
  readonly rank?: Maybe<DomainBioRank>;
};

export type DomainPlayerComparison = {
  readonly __typename: 'PlayerComparison';
  readonly category: DomainPlayerComparisonCategory;
  readonly categoryPills: ReadonlyArray<DomainPlayerComparisonCategoryPill>;
  readonly displaySeason: Scalars['String']['output'];
  readonly noDataMessage: Scalars['String']['output'];
  readonly seasonPills: ReadonlyArray<DomainStatYearPills>;
  readonly table: DomainPlayerComparisonTable;
  readonly tourCode: DomainTourCode;
  readonly tournamentId?: Maybe<Scalars['String']['output']>;
  readonly year: Scalars['Int']['output'];
};

export type DomainPlayerComparisonCategory =
  | 'APPROACH_GREEN'
  | 'AROUND_GREEN'
  | 'OFF_TEE'
  | 'PUTTING'
  | 'SCORING'
  | 'STROKES_GAINED';

export type DomainPlayerComparisonCategoryPill = {
  readonly __typename: 'PlayerComparisonCategoryPill';
  readonly category: DomainPlayerComparisonCategory;
  readonly displayText: Scalars['String']['output'];
};

export type DomainPlayerComparisonDisplay =
  | 'GRAPH'
  | 'TABLE';

export type DomainPlayerComparisonHeader = {
  readonly __typename: 'PlayerComparisonHeader';
  readonly country?: Maybe<Scalars['String']['output']>;
  readonly displayText: Scalars['String']['output'];
  readonly playerId: Scalars['ID']['output'];
  readonly yearData: Scalars['Boolean']['output'];
};

export type DomainPlayerComparisonOdds = {
  readonly __typename: 'PlayerComparisonOdds';
  readonly color: Scalars['String']['output'];
  readonly country: Scalars['String']['output'];
  readonly countryName: Scalars['String']['output'];
  readonly displayName: Scalars['String']['output'];
  readonly oddsSwing: DomainOddsSwing;
  readonly oddsToWin: Scalars['String']['output'];
  readonly playerId: Scalars['ID']['output'];
  readonly provider: DomainOddsProvider;
};

export type DomainPlayerComparisonRow = {
  readonly __typename: 'PlayerComparisonRow';
  readonly statId: Scalars['String']['output'];
  readonly statName: Scalars['String']['output'];
  readonly values: ReadonlyArray<DomainPlayerComparisonValue>;
};

export type DomainPlayerComparisonTable = {
  readonly __typename: 'PlayerComparisonTable';
  readonly header: Scalars['String']['output'];
  readonly headerRow: ReadonlyArray<DomainPlayerComparisonHeader>;
  readonly rows: ReadonlyArray<DomainPlayerComparisonRow>;
};

export type DomainPlayerComparisonValue = {
  readonly __typename: 'PlayerComparisonValue';
  readonly bold: Scalars['Boolean']['output'];
  readonly displayValue: Scalars['String']['output'];
  readonly rank: Scalars['String']['output'];
  readonly rankDeviation?: Maybe<Scalars['Float']['output']>;
};

export type DomainPlayerCourse = {
  readonly __typename: 'PlayerCourse';
  readonly courseCity: Scalars['String']['output'];
  readonly courseCountry: Scalars['String']['output'];
  readonly courseCountryCode: Scalars['String']['output'];
  readonly courseId: Scalars['String']['output'];
  readonly courseImage: Scalars['String']['output'];
  readonly courseName: Scalars['String']['output'];
  readonly courseState?: Maybe<Scalars['String']['output']>;
  readonly cupEyebrowText: Scalars['String']['output'];
  readonly overview: ReadonlyArray<DomainPlayerProfileOverviewItem>;
  readonly overviewInfo?: Maybe<DomainCourseOverviewInfo>;
  readonly tournaments: ReadonlyArray<DomainCourseResultsTournament>;
};

export type DomainPlayerDirectory = {
  readonly __typename: 'PlayerDirectory';
  readonly players: ReadonlyArray<DomainPlayerDirectoryPlayer>;
  readonly tourCode: DomainTourCode;
};

export type DomainPlayerDirectoryBio = {
  readonly __typename: 'PlayerDirectoryBio';
  readonly age?: Maybe<Scalars['String']['output']>;
  readonly education?: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly turnedPro?: Maybe<Scalars['String']['output']>;
};

export type DomainPlayerDirectoryPlayer = {
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
  readonly playerBio: DomainPlayerDirectoryBio;
  readonly shortName: Scalars['String']['output'];
};

export type DomainPlayerField = {
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
  readonly teammate?: Maybe<DomainPlayerFieldTeammate>;
  readonly withdrawn: Scalars['Boolean']['output'];
};

export type DomainPlayerFieldTeammate = {
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

export type DomainPlayerFinishStats = {
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
  readonly statValues: ReadonlyArray<DomainFinishStatValue>;
  readonly tourAvg: Scalars['String']['output'];
};

export type DomainPlayerGroup = {
  readonly __typename: 'PlayerGroup';
  readonly fieldGroups: ReadonlyArray<DomainFieldGroup>;
  readonly title: Scalars['String']['output'];
};

export type DomainPlayerHubArticleLink = {
  readonly __typename: 'PlayerHubArticleLink';
  readonly aiGenerated?: Maybe<Scalars['Boolean']['output']>;
  readonly analyticsTags?: Maybe<ReadonlyArray<Scalars['String']['output']>>;
  /**   AEM ID */
  readonly contentId: Scalars['String']['output'];
  readonly contentTournamentIds?: Maybe<ReadonlyArray<Scalars['String']['output']>>;
  readonly franchise: Scalars['String']['output'];
  readonly franchiseDisplayName: Scalars['String']['output'];
  readonly players?: Maybe<ReadonlyArray<DomainArticlePlayer>>;
  /**   Optional sponsor for sponsored articles */
  readonly sponsor?: Maybe<DomainNewsArticleSponsor>;
  readonly thumbnail?: Maybe<DomainImageAsset>;
  readonly title: Scalars['String']['output'];
  readonly webviewUrl: Scalars['String']['output'];
};

export type DomainPlayerHubArticlesWidget = {
  readonly __typename: 'PlayerHubArticlesWidget';
  readonly articles: ReadonlyArray<DomainPlayerHubArticleLink>;
  readonly icon: DomainPlayerHubWidgetIcon;
  /**   Optional widget sponsor */
  readonly sponsor?: Maybe<DomainPlayerHubWidgetSponsor>;
  readonly subTitle?: Maybe<Scalars['String']['output']>;
  readonly title: Scalars['String']['output'];
};

export type DomainPlayerHubDetailData = {
  readonly __typename: 'PlayerHubDetailData';
  readonly data: Scalars['String']['output'];
  readonly title: Scalars['String']['output'];
};

export type DomainPlayerHubFooter = {
  readonly __typename: 'PlayerHubFooter';
  readonly logoAsset: DomainImageAsset;
  readonly logoAssetDark: DomainImageAsset;
  readonly sponsor?: Maybe<DomainPlayerHubWidgetSponsor>;
};

export type DomainPlayerHubHeader = {
  readonly __typename: 'PlayerHubHeader';
  readonly sponsor?: Maybe<DomainPlayerHubWidgetSponsor>;
  readonly text: Scalars['String']['output'];
};

export type DomainPlayerHubHoleDetailShotTrail = {
  readonly __typename: 'PlayerHubHoleDetailShotTrail';
  readonly color: Scalars['String']['output'];
  readonly finalShot: Scalars['Boolean']['output'];
  readonly from: DomainPlayerHubHoleDetailShotTrailCoordinates;
  readonly markerText: Scalars['String']['output'];
  readonly shotNumber: Scalars['Int']['output'];
  readonly showMarker: Scalars['Boolean']['output'];
  readonly strokeType: DomainHoleStrokeType;
  readonly to: DomainPlayerHubHoleDetailShotTrailCoordinates;
};

export type DomainPlayerHubHoleDetailShotTrailCoordinates = {
  readonly __typename: 'PlayerHubHoleDetailShotTrailCoordinates';
  readonly x: Scalars['Float']['output'];
  readonly y: Scalars['Float']['output'];
};

export type DomainPlayerHubHoleDetailWidget = {
  readonly __typename: 'PlayerHubHoleDetailWidget';
  readonly dataElements: ReadonlyArray<DomainPlayerHubDetailData>;
  readonly flagCoords?: Maybe<DomainPlayerHubHoleDetailShotTrailCoordinates>;
  readonly holePickleAsset: DomainImageAsset;
  readonly icon: DomainPlayerHubWidgetIcon;
  readonly shots: ReadonlyArray<DomainPlayerHubHoleDetailShotTrail>;
  /**   Optional widget sponsor */
  readonly sponsor?: Maybe<DomainPlayerHubWidgetSponsor>;
  readonly subTitle?: Maybe<Scalars['String']['output']>;
  readonly tourcastURL?: Maybe<Scalars['String']['output']>;
};

export type DomainPlayerHubLeaderboardWidget = {
  readonly __typename: 'PlayerHubLeaderboardWidget';
  readonly action: DomainPlayerHubMessageBannerAction;
  readonly earnings?: Maybe<Scalars['String']['output']>;
  /**   Used to show if there are player stories available for this player or not */
  readonly hasStoryContent: Scalars['Boolean']['output'];
  readonly icon: DomainPlayerHubWidgetIcon;
  readonly movementAmount: Scalars['String']['output'];
  /**   Leaderboard movement amount */
  readonly movementDirection: DomainLeaderboardMovement;
  /**   Player Icon used for Hot Streak identification */
  readonly playerIcon?: Maybe<DomainLeaderboardPlayerIcon>;
  /**   Standard leaderboard position data */
  readonly position: Scalars['String']['output'];
  readonly rankLogos?: Maybe<DomainSignatureEventsRankLogos>;
  readonly round?: Maybe<Scalars['String']['output']>;
  readonly roundDisplay: Scalars['String']['output'];
  readonly roundHeader: Scalars['String']['output'];
  readonly roundNum: Scalars['Int']['output'];
  /**   Final scores by round */
  readonly roundScores: ReadonlyArray<Scalars['String']['output']>;
  readonly roundStatus: DomainRoundStatus;
  readonly roundStatusColor: DomainRoundStatusColor;
  /**   Round Status and display information */
  readonly roundStatusDisplay: Scalars['String']['output'];
  readonly subTitle: Scalars['String']['output'];
  readonly teeTime?: Maybe<Scalars['AWSTimestamp']['output']>;
  readonly thru?: Maybe<Scalars['String']['output']>;
  readonly total?: Maybe<Scalars['String']['output']>;
  /**   Tells the widget what structure to display in */
  readonly widgetDisplay: DomainPlayerHubLeaderboardWidgetDisplay;
};

export type DomainPlayerHubLeaderboardWidgetDisplay =
  | 'INACTIVE'
  | 'IN_PROGRESS'
  | 'TOURNAMENT_OFFICIAL';

/**   Possible message banner targets */
export type DomainPlayerHubMessageBannerAction =
  | 'LEADERBOARD'
  | 'NONE'
  | 'PROFILE'
  | 'SCORECARD';

export type DomainPlayerHubMessageBannerWidget = {
  readonly __typename: 'PlayerHubMessageBannerWidget';
  /**   optional action should the message have a click target */
  readonly action: DomainPlayerHubMessageBannerAction;
  /**   optional background color override */
  readonly background?: Maybe<Scalars['String']['output']>;
  /**   Message to display */
  readonly message: Scalars['String']['output'];
  /**   optional text color override */
  readonly textColor?: Maybe<Scalars['String']['output']>;
};

export type DomainPlayerHubPlayer = {
  readonly __typename: 'PlayerHubPlayer';
  readonly country: Scalars['String']['output'];
  readonly countryCode: Scalars['String']['output'];
  readonly footer?: Maybe<DomainPlayerHubFooter>;
  readonly header?: Maybe<DomainPlayerHubHeader>;
  readonly playerId: Scalars['ID']['output'];
  readonly playerName: Scalars['String']['output'];
  readonly tournamentId: Scalars['String']['output'];
  readonly widgets: ReadonlyArray<DomainPlayerHubWidget>;
};

/**  PLAYER HUB */
export type DomainPlayerHubPlayerCompressed = {
  readonly __typename: 'PlayerHubPlayerCompressed';
  readonly id: Scalars['ID']['output'];
  readonly payload: Scalars['String']['output'];
};

export type DomainPlayerHubRecapWidget = {
  readonly __typename: 'PlayerHubRecapWidget';
  readonly icon: DomainPlayerHubWidgetIcon;
  readonly recap: Scalars['String']['output'];
  readonly roundDisplay: Scalars['String']['output'];
  readonly roundStatus: DomainRoundStatus;
  readonly roundStatusColor: DomainRoundStatusColor;
  /**   Round Status and display information */
  readonly roundStatusDisplay: Scalars['String']['output'];
  /**   Optional widget sponsor */
  readonly sponsor?: Maybe<DomainPlayerHubWidgetSponsor>;
  readonly subTitle?: Maybe<Scalars['String']['output']>;
};

export type DomainPlayerHubShotCommentaryWidget = {
  readonly __typename: 'PlayerHubShotCommentaryWidget';
  readonly commentary: Scalars['String']['output'];
  readonly icon: DomainPlayerHubWidgetIcon;
  readonly shotTitle: Scalars['String']['output'];
  readonly shotTitleBackgroundColor: Scalars['String']['output'];
  /**   Optional widget sponsor */
  readonly sponsor?: Maybe<DomainPlayerHubWidgetSponsor>;
  readonly subTitle: Scalars['String']['output'];
  readonly tourcastURL?: Maybe<Scalars['String']['output']>;
};

export type DomainPlayerHubStatisticsWidget = {
  readonly __typename: 'PlayerHubStatisticsWidget';
  readonly icon: DomainPlayerHubWidgetIcon;
  /**   Optional widget sponsor */
  readonly sponsor?: Maybe<DomainPlayerHubWidgetSponsor>;
  readonly stats: ReadonlyArray<DomainPlayerHubDetailData>;
  readonly subTitle: Scalars['String']['output'];
  readonly title: Scalars['String']['output'];
};

export type DomainPlayerHubTeeTimesWidget = {
  readonly __typename: 'PlayerHubTeeTimesWidget';
  readonly currentLocation?: Maybe<Scalars['String']['output']>;
  readonly displayTeeTime: Scalars['Boolean']['output'];
  readonly icon: DomainPlayerHubWidgetIcon;
  /**   Players and the group tee time */
  readonly players: ReadonlyArray<DomainPlayer>;
  readonly roundDisplay: Scalars['String']['output'];
  readonly roundStatus: DomainRoundStatus;
  readonly roundStatusColor: DomainRoundStatusColor;
  /**   Round Status and display information */
  readonly roundStatusDisplay: Scalars['String']['output'];
  /**   Optional widget sponsor */
  readonly sponsor?: Maybe<DomainPlayerHubWidgetSponsor>;
  readonly teeTime?: Maybe<Scalars['AWSTimestamp']['output']>;
  readonly timezone: Scalars['String']['output'];
};

export type DomainPlayerHubTournamentWidget = {
  readonly __typename: 'PlayerHubTournamentWidget';
  readonly course: Scalars['String']['output'];
  readonly icon: DomainPlayerHubWidgetIcon;
  readonly logoAsset?: Maybe<DomainImageAsset>;
  readonly logoAssetDark?: Maybe<DomainImageAsset>;
  readonly name: Scalars['String']['output'];
};

export type DomainPlayerHubWidget = DomainPlayerHubArticlesWidget | DomainPlayerHubHoleDetailWidget | DomainPlayerHubLeaderboardWidget | DomainPlayerHubMessageBannerWidget | DomainPlayerHubRecapWidget | DomainPlayerHubShotCommentaryWidget | DomainPlayerHubStatisticsWidget | DomainPlayerHubTeeTimesWidget | DomainPlayerHubTournamentWidget | DomainPlayerStoriesWidget;

export type DomainPlayerHubWidgetIcon =
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

export type DomainPlayerHubWidgetSponsor = {
  readonly __typename: 'PlayerHubWidgetSponsor';
  readonly logoAsset: DomainImageAsset;
  readonly logoAssetDark: DomainImageAsset;
  readonly name: Scalars['String']['output'];
  readonly websiteUrl: Scalars['String']['output'];
};

export type DomainPlayerInfo = {
  readonly __typename: 'PlayerInfo';
  readonly countryFlag: Scalars['String']['output'];
  readonly countryName: Scalars['String']['output'];
  readonly firstName: Scalars['String']['output'];
  /** @deprecated URL should be built using player ID */
  readonly headshot: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
  readonly lastName: Scalars['String']['output'];
};

export type DomainPlayerMarketsRow = {
  readonly __typename: 'PlayerMarketsRow';
  readonly country: Scalars['String']['output'];
  readonly countryFlag: Scalars['String']['output'];
  readonly markets: ReadonlyArray<DomainHistoricalPlayerOdds>;
  readonly playerId: Scalars['String']['output'];
  readonly playerName: Scalars['String']['output'];
};

export type DomainPlayerOddsMarket = {
  readonly __typename: 'PlayerOddsMarket';
  readonly id: Scalars['ID']['output'];
  readonly market: Scalars['String']['output'];
  readonly playerOddsOptions: ReadonlyArray<DomainOddsOption>;
  readonly subMarket?: Maybe<Scalars['String']['output']>;
};

export type DomainPlayerOverviewStandings = {
  readonly __typename: 'PlayerOverviewStandings';
  readonly displaySeason: Scalars['String']['output'];
  readonly standings: ReadonlyArray<DomainProfileStandings>;
  readonly tour: DomainTourCode;
};

export type DomainPlayerProfileAchievement = {
  readonly __typename: 'PlayerProfileAchievement';
  readonly title: Scalars['String']['output'];
  readonly value: Scalars['String']['output'];
};

export type DomainPlayerProfileCareer = {
  readonly __typename: 'PlayerProfileCareer';
  readonly achievements: ReadonlyArray<DomainPlayerProfileAchievement>;
  readonly cutsMade?: Maybe<Scalars['String']['output']>;
  readonly events?: Maybe<Scalars['String']['output']>;
  readonly internationalWins?: Maybe<Scalars['String']['output']>;
  readonly majorWins?: Maybe<Scalars['String']['output']>;
  readonly officialMoney?: Maybe<Scalars['String']['output']>;
  readonly playerId: Scalars['ID']['output'];
  readonly runnerUp?: Maybe<Scalars['String']['output']>;
  readonly second?: Maybe<Scalars['String']['output']>;
  readonly tables: ReadonlyArray<DomainPlayerProfileTable>;
  readonly third?: Maybe<Scalars['String']['output']>;
  readonly top5?: Maybe<Scalars['String']['output']>;
  readonly top10?: Maybe<Scalars['String']['output']>;
  readonly top25?: Maybe<Scalars['String']['output']>;
  readonly tourCode?: Maybe<DomainTourCode>;
  readonly tourPills: ReadonlyArray<DomainTourPills>;
  readonly wins?: Maybe<Scalars['String']['output']>;
  readonly winsTitle?: Maybe<Scalars['String']['output']>;
  readonly years: ReadonlyArray<DomainPlayerProfileCareerYear>;
};

export type DomainPlayerProfileCareerResults = {
  readonly __typename: 'PlayerProfileCareerResults';
  readonly playerId: Scalars['ID']['output'];
  readonly tourPills: ReadonlyArray<DomainTourPills>;
  readonly yearResults: ReadonlyArray<DomainPlayerProfileCareerYear>;
};

export type DomainPlayerProfileCareerYear = {
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
  readonly tourCode: DomainTourCode;
  readonly wins?: Maybe<Scalars['String']['output']>;
  readonly withdrawn?: Maybe<Scalars['String']['output']>;
  readonly year: Scalars['Int']['output'];
};

export type DomainPlayerProfileCourseResults = {
  readonly __typename: 'PlayerProfileCourseResults';
  readonly coursePills: ReadonlyArray<DomainCoursePills>;
  readonly courses: ReadonlyArray<DomainPlayerCourse>;
  readonly playerId: Scalars['String']['output'];
  readonly tourCode: DomainTourCode;
  readonly tourPills: ReadonlyArray<DomainTourCode>;
};

/**   Player Profile Tournament Results */
export type DomainPlayerProfileInfoItem = {
  readonly __typename: 'PlayerProfileInfoItem';
  readonly logo?: Maybe<Scalars['String']['output']>;
  readonly title: Scalars['String']['output'];
  readonly value: Scalars['String']['output'];
  readonly wide: Scalars['Boolean']['output'];
};

export type DomainPlayerProfileMajors = {
  readonly __typename: 'PlayerProfileMajors';
  readonly playerId: Scalars['String']['output'];
  readonly timelineHeaders: ReadonlyArray<Scalars['String']['output']>;
  readonly timelineTournaments: ReadonlyArray<DomainMajorTimeline>;
  readonly tournaments: ReadonlyArray<DomainMajorResultsTournament>;
};

export type DomainPlayerProfileMessage = {
  readonly __typename: 'PlayerProfileMessage';
  readonly message?: Maybe<Scalars['String']['output']>;
};

export type DomainPlayerProfileOverviewItem = {
  readonly __typename: 'PlayerProfileOverviewItem';
  readonly title: Scalars['String']['output'];
  readonly value: Scalars['String']['output'];
};

export type DomainPlayerProfileRows = {
  readonly __typename: 'PlayerProfileRows';
  readonly rowContent: ReadonlyArray<Scalars['String']['output']>;
  readonly rowTitle: Scalars['String']['output'];
  readonly rowTitleDetail?: Maybe<Scalars['String']['output']>;
  readonly secondContent?: Maybe<ReadonlyArray<Scalars['String']['output']>>;
};

export type DomainPlayerProfileStat = {
  readonly __typename: 'PlayerProfileStat';
  readonly categories: ReadonlyArray<DomainPlayerProfileStatCategory>;
  readonly stats: ReadonlyArray<DomainPlayerProfileStatItem>;
  readonly tour: DomainTourCode;
};

export type DomainPlayerProfileStatCategory = {
  readonly __typename: 'PlayerProfileStatCategory';
  readonly category: DomainPlayerProfileStatCategoryItem;
  readonly displayTitle: Scalars['String']['output'];
};

export type DomainPlayerProfileStatCategoryItem =
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

export type DomainPlayerProfileStatFull = {
  readonly __typename: 'PlayerProfileStatFull';
  readonly categories: ReadonlyArray<DomainPlayerProfileStatCategory>;
  readonly displaySeason: Scalars['String']['output'];
  readonly overview: ReadonlyArray<DomainPlayerProfileStatItem>;
  readonly season: Scalars['String']['output'];
  readonly stats: ReadonlyArray<DomainPlayerProfileStatItem>;
  readonly topStats: ReadonlyArray<DomainPlayerProfileStatItem>;
  readonly tour: DomainTourCode;
};

export type DomainPlayerProfileStatItem = {
  readonly __typename: 'PlayerProfileStatItem';
  readonly aboveOrBelow: DomainScoringTendency;
  readonly category: ReadonlyArray<DomainPlayerProfileStatCategoryItem>;
  readonly fieldAverage: Scalars['String']['output'];
  readonly noDetail?: Maybe<Scalars['Boolean']['output']>;
  readonly rank: Scalars['String']['output'];
  readonly rankDeviation?: Maybe<Scalars['Float']['output']>;
  readonly statId: Scalars['String']['output'];
  readonly supportingStat?: Maybe<DomainPlayerProfileStatItemDetail>;
  readonly supportingValue?: Maybe<DomainPlayerProfileStatItemDetail>;
  readonly title: Scalars['String']['output'];
  readonly value: Scalars['String']['output'];
};

export type DomainPlayerProfileStatItemDetail = {
  readonly __typename: 'PlayerProfileStatItemDetail';
  readonly description: Scalars['String']['output'];
  readonly value: Scalars['String']['output'];
};

export type DomainPlayerProfileStatYear = {
  readonly __typename: 'PlayerProfileStatYear';
  readonly season: Scalars['String']['output'];
  readonly tours: ReadonlyArray<DomainTourCode>;
  readonly year: Scalars['Int']['output'];
};

export type DomainPlayerProfileStatsFullV2 = {
  readonly __typename: 'PlayerProfileStatsFullV2';
  readonly messages?: Maybe<ReadonlyArray<DomainPlayerProfileMessage>>;
  readonly playerProfileStatsFull: ReadonlyArray<DomainPlayerProfileStatFull>;
};

export type DomainPlayerProfileTable = {
  readonly __typename: 'PlayerProfileTable';
  readonly rows: ReadonlyArray<DomainPlayerProfileRows>;
  readonly tableDetail?: Maybe<Scalars['String']['output']>;
  readonly tableName: Scalars['String']['output'];
};

export type DomainPlayerProfileTournamentResults = {
  readonly __typename: 'PlayerProfileTournamentResults';
  readonly playerId: Scalars['ID']['output'];
  readonly tourPills: ReadonlyArray<DomainTourPills>;
  readonly tournamentPills: ReadonlyArray<DomainTournamentResultPill>;
  readonly tournaments: ReadonlyArray<DomainTournamentResults>;
};

export type DomainPlayerProfileTournamentRow = {
  readonly __typename: 'PlayerProfileTournamentRow';
  readonly courseName: Scalars['String']['output'];
  readonly date: Scalars['String']['output'];
  readonly fedexFallPoints: Scalars['String']['output'];
  readonly fedexFallRank: Scalars['String']['output'];
  readonly points: Scalars['String']['output'];
  readonly pointsRank: Scalars['String']['output'];
  readonly position: Scalars['String']['output'];
  readonly roundScores: ReadonlyArray<DomainRoundScoreItem>;
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

export type DomainPlayerRecord = {
  readonly __typename: 'PlayerRecord';
  readonly losses: Scalars['String']['output'];
  readonly points: Scalars['String']['output'];
  readonly ties: Scalars['String']['output'];
  readonly wins: Scalars['String']['output'];
};

export type DomainPlayerResultTournament = {
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

export type DomainPlayerResults = {
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
  readonly seasonPills: ReadonlyArray<DomainPlayerResultsSeasonPills>;
  readonly seasonRecap?: Maybe<DomainSeasonRecap>;
  /** @deprecated use standingsDetails */
  readonly secondaryCup?: Maybe<DomainSecondaryCupDetails>;
  readonly standingsDetails: ReadonlyArray<DomainResultsStandingsDetail>;
  readonly thirds?: Maybe<Scalars['String']['output']>;
  readonly top5?: Maybe<Scalars['String']['output']>;
  readonly top10?: Maybe<Scalars['String']['output']>;
  readonly top25?: Maybe<Scalars['String']['output']>;
  readonly tour: DomainTourCode;
  readonly tourcastEligible: Scalars['Boolean']['output'];
  readonly tournaments: ReadonlyArray<DomainPlayerResultTournament>;
  readonly wins?: Maybe<Scalars['String']['output']>;
  readonly withdrew?: Maybe<Scalars['String']['output']>;
  readonly year: Scalars['Int']['output'];
};

export type DomainPlayerResultsSeasonPills = {
  readonly __typename: 'PlayerResultsSeasonPills';
  readonly tourCode: DomainTourCode;
  readonly years: ReadonlyArray<DomainStatYearPills>;
};

export type DomainPlayerRowHoleByHole = {
  readonly __typename: 'PlayerRowHoleByHole';
  readonly courseCode: Scalars['String']['output'];
  readonly courseId: Scalars['String']['output'];
  readonly in?: Maybe<Scalars['String']['output']>;
  readonly out?: Maybe<Scalars['String']['output']>;
  readonly playerId: Scalars['String']['output'];
  readonly scores: ReadonlyArray<DomainHoleScore>;
  readonly total?: Maybe<Scalars['String']['output']>;
  readonly totalToPar: Scalars['String']['output'];
};

export type DomainPlayerRowV2 = {
  readonly __typename: 'PlayerRowV2';
  readonly backNine: Scalars['Boolean']['output'];
  readonly courseId: Scalars['String']['output'];
  readonly currentRound: Scalars['Int']['output'];
  readonly groupNumber: Scalars['Int']['output'];
  readonly hasStoryContent: Scalars['Boolean']['output'];
  readonly id: Scalars['ID']['output'];
  readonly leaderboardSortOrder: Scalars['Int']['output'];
  readonly movementAmount: Scalars['String']['output'];
  readonly movementDirection: DomainLeaderboardMovement;
  readonly oddsOptionId?: Maybe<Scalars['String']['output']>;
  readonly oddsSort?: Maybe<Scalars['Float']['output']>;
  readonly oddsSwing?: Maybe<DomainOddsSwing>;
  readonly oddsToWin?: Maybe<Scalars['String']['output']>;
  readonly oddsUrl?: Maybe<Scalars['String']['output']>;
  readonly official: Scalars['String']['output'];
  readonly officialSort: Scalars['Int']['output'];
  readonly player: DomainPlayer;
  readonly playerState: DomainPlayerState;
  readonly position: Scalars['String']['output'];
  readonly projected: Scalars['String']['output'];
  readonly projectedSort: Scalars['Int']['output'];
  readonly rankLogoDark?: Maybe<Scalars['String']['output']>;
  readonly rankLogoLight?: Maybe<Scalars['String']['output']>;
  readonly rankingMovement: DomainCupRankMovementDirection;
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

export type DomainPlayerRowV3 = {
  readonly __typename: 'PlayerRowV3';
  readonly id: Scalars['ID']['output'];
  readonly leaderboardSortOrder: Scalars['Int']['output'];
  /**   PLAYER INFO */
  readonly player: DomainPlayer;
  readonly scoringData: DomainLeaderboardScoringDataV3;
};

export type DomainPlayerScorecardRoundStats = {
  readonly __typename: 'PlayerScorecardRoundStats';
  readonly displayName: Scalars['String']['output'];
  readonly performance: ReadonlyArray<DomainScorecardStatsItem>;
  readonly round: Scalars['String']['output'];
  readonly roundStatus: DomainRoundStatus;
  readonly scoring: ReadonlyArray<DomainScorecardStatsItem>;
  readonly strokesGained: ReadonlyArray<DomainStrokesGainedStats>;
};

export type DomainPlayerScorecardStats = {
  readonly __typename: 'PlayerScorecardStats';
  readonly id: Scalars['ID']['output'];
  readonly rounds: ReadonlyArray<DomainPlayerScorecardRoundStats>;
};

export type DomainPlayerScorecardStatsCompressed = {
  readonly __typename: 'PlayerScorecardStatsCompressed';
  readonly id: Scalars['ID']['output'];
  readonly payload: Scalars['String']['output'];
};

export type DomainPlayerSponsorBrand =
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

export type DomainPlayerSponsors = {
  readonly __typename: 'PlayerSponsors';
  readonly defaultSponsor?: Maybe<DomainSponsor>;
  readonly playerId: Scalars['String']['output'];
  readonly sponsors: ReadonlyArray<DomainSponsor>;
};

export type DomainPlayerSponsorship = {
  readonly __typename: 'PlayerSponsorship';
  readonly playerId: Scalars['String']['output'];
  readonly sponsor?: Maybe<DomainPlayerSponsorBrand>;
};

export type DomainPlayerState =
  | 'ACTIVE'
  | 'BETWEEN_ROUNDS'
  | 'COMPLETE'
  | 'CUT'
  | 'DISQUALIFIED'
  | 'NOT_STARTED'
  | 'WITHDRAWN';

export type DomainPlayerStoriesWidget = {
  readonly __typename: 'PlayerStoriesWidget';
  readonly playerSponsorships?: Maybe<ReadonlyArray<DomainPlayerStorySponsorship>>;
  readonly storyRounds: ReadonlyArray<Scalars['String']['output']>;
  readonly subTitle: Scalars['String']['output'];
  readonly title: Scalars['String']['output'];
  readonly tournamentId: Scalars['String']['output'];
};

export type DomainPlayerStorySponsorship = {
  readonly __typename: 'PlayerStorySponsorship';
  readonly logoDarkUrl: Scalars['String']['output'];
  readonly logoUrl: Scalars['String']['output'];
  readonly sponsor: Scalars['String']['output'];
  readonly type: Scalars['String']['output'];
};

export type DomainPlayerTournamentStatus = {
  readonly __typename: 'PlayerTournamentStatus';
  readonly displayMode: DomainPlayerTournamentStatusDisplayMode;
  readonly playerId: Scalars['ID']['output'];
  readonly position: Scalars['String']['output'];
  readonly roundDisplay: Scalars['String']['output'];
  readonly roundStatus: DomainRoundStatus;
  readonly roundStatusColor: DomainRoundStatusColor;
  readonly roundStatusDisplay: Scalars['String']['output'];
  readonly score: Scalars['String']['output'];
  readonly teeTime?: Maybe<Scalars['AWSTimestamp']['output']>;
  readonly thru: Scalars['String']['output'];
  readonly total: Scalars['String']['output'];
  readonly tournamentId: Scalars['String']['output'];
  readonly tournamentName: Scalars['String']['output'];
};

export type DomainPlayerTournamentStatusDisplayMode =
  | 'IN_PROGRESS'
  | 'OFFICIAL'
  | 'TEE_TIMES';

export type DomainPlayerVideo = {
  readonly __typename: 'PlayerVideo';
  readonly firstName?: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly lastName?: Maybe<Scalars['String']['output']>;
  readonly shortName?: Maybe<Scalars['String']['output']>;
};

export type DomainPlayoff = {
  readonly __typename: 'Playoff';
  readonly currentHole: Scalars['Int']['output'];
  readonly holes: ReadonlyArray<DomainPlayoffHole>;
  readonly players: ReadonlyArray<DomainPlayoffPlayer>;
  readonly thru?: Maybe<Scalars['String']['output']>;
};

export type DomainPlayoffDisplayType =
  | 'ALL'
  | 'NONE'
  | 'PLAY_BY_PLAY'
  | 'SCORECARD';

export type DomainPlayoffHole = {
  readonly __typename: 'PlayoffHole';
  readonly courseHole: Scalars['String']['output'];
  readonly format?: Maybe<Scalars['String']['output']>;
  readonly isTotal?: Maybe<Scalars['Boolean']['output']>;
  readonly par: Scalars['String']['output'];
  readonly playoffHole: Scalars['String']['output'];
};

export type DomainPlayoffPlayer = {
  readonly __typename: 'PlayoffPlayer';
  readonly active: Scalars['Boolean']['output'];
  readonly player: DomainPlayer;
  readonly position: Scalars['String']['output'];
  readonly scores: ReadonlyArray<DomainSimpleScore>;
};

export type DomainPlayoffScorecard = {
  readonly __typename: 'PlayoffScorecard';
  readonly courseId: Scalars['String']['output'];
  readonly courseName: Scalars['String']['output'];
  readonly detailViewEnabled: Scalars['Boolean']['output'];
  readonly drawersEnabled: Scalars['Boolean']['output'];
  readonly holeDetail: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
  readonly locationDetail: Scalars['String']['output'];
  readonly players: ReadonlyArray<DomainScorecardHeaderPlayer>;
  readonly playoff: DomainPlayoff;
  readonly playoffScoredType: DomainPlayoffScoredType;
  readonly title: Scalars['String']['output'];
  readonly tourcastURI?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastURL?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastURLWeb?: Maybe<Scalars['String']['output']>;
};

export type DomainPlayoffScoredType =
  | 'AGGREGATE'
  | 'SUDDEN_DEATH';

export type DomainPlayoffTeams = {
  readonly __typename: 'PlayoffTeams';
  readonly active: Scalars['Boolean']['output'];
  readonly players: ReadonlyArray<DomainTspScPlayer>;
  readonly position: Scalars['String']['output'];
  readonly scores: ReadonlyArray<DomainSimpleScore>;
  readonly teamId: Scalars['String']['output'];
};

export type DomainPointOfInterestCoords = {
  readonly __typename: 'PointOfInterestCoords';
  readonly bottomToTopCoords: DomainStrokeCoordinates;
  readonly leftToRightCoords: DomainStrokeCoordinates;
};

export type DomainPowerRankings = {
  readonly __typename: 'PowerRankings';
  readonly ascendingOrder: Scalars['Boolean']['output'];
  readonly powerRankingsTableRow: ReadonlyArray<DomainPowerRankingsTableRow>;
  readonly tableTitle: Scalars['String']['output'];
  readonly tournamentName: Scalars['String']['output'];
  readonly unorderedList: Scalars['Boolean']['output'];
};

export type DomainPowerRankingsTableRow = {
  readonly __typename: 'PowerRankingsTableRow';
  readonly comment: Scalars['String']['output'];
  readonly commentNodes?: Maybe<ReadonlyArray<DomainTourSponsorDescription>>;
  readonly player?: Maybe<DomainPlayerInfo>;
  readonly rank?: Maybe<Scalars['Int']['output']>;
};

export type DomainPresentedByConfig = {
  readonly __typename: 'PresentedByConfig';
  readonly presentedBy: DomainSponsor;
  readonly splashScreen: DomainSponsor;
};

export type DomainPreviousMatch = {
  readonly __typename: 'PreviousMatch';
  readonly matchId: Scalars['ID']['output'];
  readonly matchResult: Scalars['String']['output'];
  readonly matchScore: Scalars['String']['output'];
  readonly matchStatus: Scalars['String']['output'];
  readonly opponent: DomainPreviousMatchOpponent;
  readonly roundDisplayText: Scalars['String']['output'];
  readonly roundNumber: Scalars['Int']['output'];
};

export type DomainPreviousMatchOpponent = {
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

export type DomainPreviousMatches = {
  readonly __typename: 'PreviousMatches';
  readonly header: Scalars['String']['output'];
  readonly matches?: Maybe<ReadonlyArray<DomainPreviousMatch>>;
  readonly messages?: Maybe<ReadonlyArray<DomainMessage>>;
};

export type DomainPreviousRounds = {
  readonly __typename: 'PreviousRounds';
  readonly matches?: Maybe<ReadonlyArray<DomainPreviousMatch>>;
  readonly roundHeader: Scalars['String']['output'];
  readonly roundNumber: Scalars['Int']['output'];
};

export type DomainPriorityCategory = {
  readonly __typename: 'PriorityCategory';
  readonly detail?: Maybe<Scalars['String']['output']>;
  readonly displayName: Scalars['String']['output'];
  readonly players: ReadonlyArray<DomainPriorityPlayer>;
};

export type DomainPriorityPlayer = {
  readonly __typename: 'PriorityPlayer';
  readonly displayName: Scalars['String']['output'];
  readonly playerId: Scalars['String']['output'];
};

export type DomainPriorityRankings = {
  readonly __typename: 'PriorityRankings';
  readonly categories: ReadonlyArray<DomainPriorityCategory>;
  readonly displayYear: Scalars['String']['output'];
  readonly throughText: Scalars['String']['output'];
  readonly tourCode: DomainTourCode;
  readonly year: Scalars['Int']['output'];
  readonly yearPills: ReadonlyArray<DomainStatYearPills>;
};

export type DomainProfileFedExFallStandings = {
  readonly __typename: 'ProfileFedExFallStandings';
  readonly description: Scalars['String']['output'];
  readonly detailCopy?: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  /** @deprecated Use logoAsset */
  readonly logo: Scalars['String']['output'];
  readonly logoAsset: DomainImageAsset;
  /** @deprecated Use logoDarkAsset */
  readonly logoDark: Scalars['String']['output'];
  readonly logoDarkAsset: DomainImageAsset;
  readonly rank: Scalars['String']['output'];
  /** @deprecated Use rankLogoAsset */
  readonly rankLogo?: Maybe<Scalars['String']['output']>;
  readonly rankLogoAsset?: Maybe<DomainImageAsset>;
  /** @deprecated Use rankLogoDarkAsset */
  readonly rankLogoDark?: Maybe<Scalars['String']['output']>;
  readonly rankLogoDarkAsset?: Maybe<DomainImageAsset>;
  readonly title: Scalars['String']['output'];
  readonly total: Scalars['String']['output'];
  readonly totalLabel: Scalars['String']['output'];
  readonly totals?: Maybe<ReadonlyArray<DomainProfileStandingsTotal>>;
  readonly webview?: Maybe<Scalars['String']['output']>;
  readonly webviewBrowserControls?: Maybe<Scalars['Boolean']['output']>;
};

export type DomainProfileHeadshot = {
  readonly __typename: 'ProfileHeadshot';
  readonly country: Scalars['String']['output'];
  readonly countryFlag: Scalars['String']['output'];
  readonly firstName: Scalars['String']['output'];
  readonly image: Scalars['String']['output'];
  readonly lastName: Scalars['String']['output'];
};

export type DomainProfileOverview = {
  readonly __typename: 'ProfileOverview';
  /** @deprecated use profileStandings */
  readonly fedexFallStandings?: Maybe<DomainProfileFedExFallStandings>;
  readonly headshot: DomainProfileHeadshot;
  readonly id: Scalars['ID']['output'];
  readonly performance: ReadonlyArray<DomainProfilePerformance>;
  readonly profileStandings: ReadonlyArray<DomainProfileStandings>;
  readonly snapshot: ReadonlyArray<DomainProfileSnapshotItem>;
  /** @deprecated use profileStandings */
  readonly standings: DomainProfileStandings;
  readonly tglTeamLogo?: Maybe<Scalars['String']['output']>;
  readonly tglTeamName?: Maybe<Scalars['String']['output']>;
};

export type DomainProfilePerformance = {
  readonly __typename: 'ProfilePerformance';
  readonly displaySeason: Scalars['String']['output'];
  readonly season: Scalars['String']['output'];
  readonly stats: ReadonlyArray<DomainProfilePerformanceStat>;
  readonly tour: DomainTourCode;
};

export type DomainProfilePerformanceStat = {
  readonly __typename: 'ProfilePerformanceStat';
  readonly career?: Maybe<Scalars['String']['output']>;
  readonly title: Scalars['String']['output'];
  readonly value: Scalars['String']['output'];
  readonly wide?: Maybe<Scalars['Boolean']['output']>;
};

export type DomainProfileSnapshotItem = {
  readonly __typename: 'ProfileSnapshotItem';
  readonly description?: Maybe<Scalars['String']['output']>;
  readonly title: Scalars['String']['output'];
  readonly value: Scalars['String']['output'];
};

export type DomainProfileStandings = {
  readonly __typename: 'ProfileStandings';
  readonly description: Scalars['String']['output'];
  readonly detailCopy?: Maybe<Scalars['String']['output']>;
  readonly detailUrl?: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  /** @deprecated Use logoAsset */
  readonly logo: Scalars['String']['output'];
  readonly logoAsset: DomainImageAsset;
  /** @deprecated Use logoDarkAsset */
  readonly logoDark: Scalars['String']['output'];
  readonly logoDarkAsset: DomainImageAsset;
  readonly owgr?: Maybe<Scalars['String']['output']>;
  readonly rank: Scalars['String']['output'];
  /** @deprecated Use rankLogoAsset */
  readonly rankLogo?: Maybe<Scalars['String']['output']>;
  readonly rankLogoAsset?: Maybe<DomainImageAsset>;
  /** @deprecated Use rankLogoDarkAsset */
  readonly rankLogoDark?: Maybe<Scalars['String']['output']>;
  readonly rankLogoDarkAsset?: Maybe<DomainImageAsset>;
  readonly title: Scalars['String']['output'];
  readonly total: Scalars['String']['output'];
  readonly totalLabel: Scalars['String']['output'];
  readonly totals?: Maybe<ReadonlyArray<DomainProfileStandingsTotal>>;
  readonly webview?: Maybe<Scalars['String']['output']>;
  readonly webviewBrowserControls?: Maybe<Scalars['Boolean']['output']>;
};

export type DomainProfileStandingsTotal = {
  readonly __typename: 'ProfileStandingsTotal';
  readonly total: Scalars['String']['output'];
  readonly totalLabel: Scalars['String']['output'];
};

export type DomainProgramStat = {
  readonly __typename: 'ProgramStat';
  readonly statName?: Maybe<Scalars['String']['output']>;
  readonly value?: Maybe<Scalars['String']['output']>;
};

export type DomainPromoItem = DomainFieldPromoSection | DomainPromoSection | DomainPromoSectionNewsSection;

export type DomainPromoSection = {
  readonly __typename: 'PromoSection';
  readonly items: ReadonlyArray<DomainPromoSectionItem>;
  readonly title: Scalars['String']['output'];
};

export type DomainPromoSectionContainer = {
  readonly __typename: 'PromoSectionContainer';
  readonly sections: ReadonlyArray<DomainPromoItem>;
};

export type DomainPromoSectionItem = {
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

export type DomainPromoSectionNewsSection = {
  readonly __typename: 'PromoSectionNewsSection';
  readonly franchises: ReadonlyArray<Scalars['String']['output']>;
  readonly title: Scalars['String']['output'];
};

export type DomainPromoSectionType =
  | 'GAMING'
  | 'MORE'
  | 'WEBGOLFBET';

export type DomainPuttingPalsPlayerRowV3 = {
  readonly __typename: 'PuttingPalsPlayerRowV3';
  readonly id: Scalars['ID']['output'];
  readonly leaderboardSortOrder: Scalars['Int']['output'];
  readonly picks: ReadonlyArray<Scalars['ID']['output']>;
  readonly player: DomainPuttingPalsPlayerV3;
  readonly scoringData: DomainPuttingPalsPlayerScoringDataV3;
};

export type DomainPuttingPalsPlayerScoringDataV3 = {
  readonly __typename: 'PuttingPalsPlayerScoringDataV3';
  readonly position: Scalars['String']['output'];
  readonly total: Scalars['String']['output'];
  readonly totalSort: Scalars['Int']['output'];
};

export type DomainPuttingPalsPlayerV3 = {
  readonly __typename: 'PuttingPalsPlayerV3';
  readonly countryFlag: Scalars['String']['output'];
  readonly displayName: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
  readonly shortName: Scalars['String']['output'];
};

export type DomainQuery = {
  readonly __typename: 'Query';
  /**
   *   Returns the AdConfig for the given optionally supplied tour and/or tournament
   * @deprecated use REST API
   */
  readonly adTagConfig: DomainAdConfig;
  readonly allTimeRecordCategories: DomainAllTimeRecordCategories;
  readonly allTimeRecordStat: DomainAllTimeRecordStat;
  readonly alltoursponsors: ReadonlyArray<Maybe<DomainTourSponsor>>;
  readonly aon: DomainAon;
  /** @deprecated use REST API */
  readonly articleAdConfig: DomainAdTagConfig;
  /** @deprecated Use articleDetailsCompressed */
  readonly articleDetails: DomainNewsArticleDetails;
  readonly articleDetailsCompressed: DomainNewsArticleDetailsCompressed;
  readonly broadcastTimes: DomainBroadcastCoverage;
  /**   Note this is optional on purpose */
  readonly bubble?: Maybe<DomainBubbleWatch>;
  /** @deprecated use bubble */
  readonly bubbleWatch?: Maybe<DomainTourCupRankingEvent>;
  readonly completeSchedule: ReadonlyArray<DomainSchedule>;
  readonly contentFragmentTabs: DomainContentFragmentTabs;
  readonly contentFragmentType?: Maybe<DomainContentFragmentType>;
  readonly contentFragmentsCompressed: DomainContentFragmentsCompressed;
  readonly courseHolesStats: ReadonlyArray<DomainHoleStatSummary>;
  readonly courseStats: DomainTournamentHoleStats;
  readonly courseStatsDetails: DomainCourseStatsDetails;
  readonly courseStatsOverview: DomainCourseStatsOverview;
  readonly coverage: DomainBroadcastCoverage;
  readonly cupPastResults: DomainCupPastResults;
  readonly cupPlayOverviewLeaderboard: DomainCupTournamentStatus;
  readonly cupRoundLeaderboard: DomainCupTournamentLeaderboard;
  readonly cupRoundLeaderboardCompressed: DomainCupTournamentLeaderboardCompressed;
  readonly cupScorecard: DomainCupScorecard;
  readonly cupTeamRoster: DomainCupTeamRosters;
  readonly cupTeeTimes: DomainCupTeeTimes;
  readonly currentLeadersCompressed?: Maybe<DomainCurrentLeadersCompressed>;
  readonly defaultTourCup: DomainTourCupRankingEvent;
  readonly eaglesForImpact: DomainEaglesForImpact;
  readonly eventGuideConfig: DomainEventGuideConfig;
  readonly field: DomainField;
  readonly fieldStats: DomainFieldStats;
  readonly franchises: ReadonlyArray<Scalars['String']['output']>;
  readonly genericContent: DomainGenericContent;
  readonly genericContentCompressed: DomainGenericContentCompressed;
  readonly getExpertPicksTable: DomainExpertPicks;
  readonly getPowerRankingsTable: DomainPowerRankings;
  readonly getRCPhotoGallery: DomainRcPhotoGallery;
  readonly getRelatedFact: DomainRelatedFact;
  readonly getShotCommentary: DomainShotCommentary;
  /**   Returns full details for a match based on supplied matchId */
  readonly groupLocations: DomainGroupLocation;
  readonly groupStageRankings: DomainGroupStageRankings;
  readonly groupedField: DomainGroupedField;
  readonly historicalOdds?: Maybe<DomainHistoricalPlayerOdds>;
  readonly historicalScorecardStats: DomainHistoricalPlayerScorecards;
  readonly historicalTournamentsOdds?: Maybe<DomainHistoricalTournamentOdds>;
  readonly holeDetails: DomainHoleDetail;
  readonly leaderboardCompressedV2: DomainLeaderboardCompressedV2;
  /**   Get the leaderboard for a tournament by tournamentID. The data in the payload property will be Base64 encoded. */
  readonly leaderboardCompressedV3: DomainLeaderboardCompressedV3;
  readonly leaderboardHoleByHole: DomainLeaderboardHoleByHole;
  readonly leaderboardLegend: DomainLeaderboardInfo;
  readonly leaderboardStats: DomainLeaderboardStats;
  readonly leaderboardStrokes: DomainLeaderboardStrokes;
  readonly leaderboardStrokesCompressed: DomainLeaderboardStrokesCompressed;
  readonly leaderboardV2: DomainLeaderboardV2;
  readonly leaderboardV3: DomainLeaderboardV3;
  readonly legalDocsCompressed: DomainGenericContentCompressed;
  readonly liveAudioStream: DomainAudioStream;
  readonly liveVideoOverride: DomainLiveVideoOverride;
  readonly matchOutcomeIq: DomainRyderCupMatchOutcomeIq;
  readonly matchPlayLeaderboard: DomainMpLeaderboard;
  readonly matchPlayLeaderboardCompressed: DomainLeaderboardCompressed;
  readonly matchPlayPlayoffScorecard: DomainMpPlayoffScorecard;
  readonly matchPlayScorecard: DomainMpScorecard;
  readonly matchPlayScorecardResults: DomainMpScorecardResults;
  readonly matchPlayTeeTimes: DomainMpTeeTimes;
  readonly matchPlayTeeTimesCompressed: DomainTeeTimesCompressed;
  readonly networks: DomainBroadcastNetworks;
  readonly newletterSubscriptions: ReadonlyArray<DomainNewsletter>;
  readonly newsArticles: DomainNewsArticles;
  readonly newsFranchises: ReadonlyArray<DomainNewsFranchise>;
  readonly oddsGraph: DomainOddsTimeline;
  readonly oddsTable: DomainOddsTable;
  readonly oddsToWin: DomainOddsToWinMarket;
  readonly oddsToWinCompressed: DomainOddsToWinMarketCompressed;
  readonly player: DomainPlayerBioWrapper;
  readonly playerComparison: DomainPlayerComparison;
  readonly playerDirectory: DomainPlayerDirectory;
  readonly playerFinishStats?: Maybe<DomainPlayerFinishStats>;
  readonly playerHub?: Maybe<DomainPlayerHubPlayerCompressed>;
  /** @deprecated use REST API */
  readonly playerProfileCareer: DomainPlayerProfileCareer;
  /** @deprecated use REST API */
  readonly playerProfileCareerResults: DomainPlayerProfileCareerResults;
  readonly playerProfileCourseResults?: Maybe<DomainPlayerProfileCourseResults>;
  readonly playerProfileMajorResults?: Maybe<DomainPlayerProfileMajors>;
  /** @deprecated use REST API */
  readonly playerProfileOverview: DomainProfileOverview;
  readonly playerProfileScorecards: DomainHistoricalPlayerScorecards;
  /** @deprecated use REST API */
  readonly playerProfileSeasonResults: DomainPlayerResults;
  /** @deprecated use REST API */
  readonly playerProfileStandings: ReadonlyArray<DomainPlayerOverviewStandings>;
  readonly playerProfileStats: ReadonlyArray<DomainPlayerProfileStat>;
  /** @deprecated use REST API */
  readonly playerProfileStatsFull: ReadonlyArray<DomainPlayerProfileStatFull>;
  /** @deprecated use REST API */
  readonly playerProfileStatsFullV2: DomainPlayerProfileStatsFullV2;
  /** @deprecated use REST API */
  readonly playerProfileStatsYears: ReadonlyArray<DomainPlayerProfileStatYear>;
  readonly playerProfileTournamentResults: DomainPlayerProfileTournamentResults;
  /** @deprecated use REST API */
  readonly playerSponsorships: ReadonlyArray<DomainPlayerSponsorship>;
  readonly playerTournamentStatus?: Maybe<DomainPlayerTournamentStatus>;
  readonly players: ReadonlyArray<DomainPlayerBioWrapper>;
  readonly playersOddsComparison: ReadonlyArray<DomainPlayerComparisonOdds>;
  readonly playoffScorecard: DomainPlayoffScorecard;
  /** @deprecated use v3 */
  readonly playoffScorecardV2?: Maybe<ReadonlyArray<DomainPlayoffScorecard>>;
  readonly playoffScorecardV3: DomainTournamentPlayoffScorecards;
  readonly playoffShotDetails: DomainGroupShotDetails;
  readonly playoffShotDetailsCompressed: DomainGroupShotDetailsCompressed;
  readonly podcastEpisodes: ReadonlyArray<DomainEpisode>;
  readonly podcasts: ReadonlyArray<DomainAudio>;
  readonly presentedBy: DomainPresentedByConfig;
  readonly priorityRankings: DomainPriorityRankings;
  readonly promoSection: DomainPromoSectionContainer;
  readonly rankingsWinners: ReadonlyArray<DomainRankingsPastWinner>;
  readonly rsm: DomainRsmStandings;
  readonly rsmLeaderboard: DomainRsmLeaderboard;
  readonly ryderCupArticleDetailsCompressed: DomainNewsArticleDetailsCompressed;
  readonly ryderCupBroadcastCoverage: DomainRyderCupBroadcastCoverage;
  readonly ryderCupContentFragmentsCompressed: DomainContentFragmentsCompressed;
  readonly ryderCupContentOptions: DomainRyderCupMediaSearchOptions;
  readonly ryderCupContentPageTabs: DomainContentFragmentTabs;
  readonly ryderCupMixedMedia: ReadonlyArray<DomainRyderCupContent>;
  readonly ryderCupMixedMediaCompressed: DomainRyderCupContentCompressed;
  readonly ryderCupPlayerProfileCompressed: DomainRyderCupPlayerProfileCompressed;
  /** @deprecated use ryderCupTeamRankingsV2 */
  readonly ryderCupTeamRankings?: Maybe<DomainRyderCupTeamRankings>;
  /** @deprecated use ryderCupTeamRankingsCompressedV2 */
  readonly ryderCupTeamRankingsCompressed?: Maybe<DomainRyderCupTeamRankingsCompressed>;
  readonly ryderCupTeamRankingsCompressedV2?: Maybe<DomainRyderCupTeamRankingsCompressed>;
  readonly ryderCupTeamRankingsV2?: Maybe<DomainRyderCupRankingsV2>;
  readonly ryderCupTournament?: Maybe<DomainRyderCupTournament>;
  readonly ryderCupTournaments: ReadonlyArray<DomainRyderCupTournamentOverview>;
  readonly ryderCupVideoById?: Maybe<DomainRcVideoPage>;
  readonly scatterData: DomainScatterData;
  readonly scatterDataCompressed: DomainScatterDataCompressed;
  readonly schedule: DomainSchedule;
  readonly scheduleYears: DomainScheduleYears;
  readonly scorecardCompressedV3: DomainScorecardCompressedV3;
  readonly scorecardStats: DomainPlayerScorecardStats;
  readonly scorecardStatsComparison?: Maybe<DomainScorecardStatsComparison>;
  readonly scorecardStatsV3: DomainPlayerScorecardStats;
  readonly scorecardStatsV3Compressed: DomainPlayerScorecardStatsCompressed;
  readonly scorecardV2: DomainLeaderboardDrawerV2;
  readonly scorecardV3: DomainScorecardV3;
  readonly searchBarFeatures: DomainSearchBarFeatures;
  /** @deprecated No longer supported */
  readonly searchPlayers: ReadonlyArray<DomainPlayer>;
  readonly shotDetailsCompressedV3: DomainShotDetailsCompressedV3;
  readonly shotDetailsV3: DomainShotDetails;
  readonly signatureStandings: DomainSignatureStandings;
  readonly sponsoredArticles: ReadonlyArray<DomainNewsArticle>;
  readonly sponsoredArticlesV2: DomainSponsoredArticles;
  /** @deprecated use REST API */
  readonly sponsorships: DomainPlayerSponsors;
  readonly statDetails: DomainStatDetails;
  readonly statLeaders: DomainStatLeaderCategory;
  readonly statOverview: DomainOverviewStats;
  readonly statsLeadersMobile: DomainMobileStatLeaders;
  readonly teamStrokePlayLeaderboard: DomainTspLeaderboard;
  readonly teamStrokePlayLeaderboardCompressed: DomainLeaderboardCompressed;
  readonly teamStrokePlayScorecard: DomainTspScorecard;
  readonly teamStrokePlayScorecardRounds: DomainTspScorecardRounds;
  readonly teamStrokePlayTeeTimes: DomainTspTeeTimes;
  readonly teamStrokePlayTeeTimesCompressed: DomainTeeTimesCompressed;
  readonly teeTimes: DomainTeeTimes;
  readonly teeTimesCompressed: DomainTeeTimesCompressed;
  readonly teeTimesCompressedV2: DomainTeeTimesCompressed;
  readonly teeTimesV2: DomainTeeTimesV2;
  /**   Returns full details for matches based on supplied matchIds */
  readonly tglMatch?: Maybe<DomainTglMatch>;
  /**   return a season from TGL based on supplied year, if year is ommitted current year returned, used by AEM */
  readonly tglMatches: ReadonlyArray<DomainTglMatch>;
  /**  ## TGL queries */
  readonly tglSchedule: DomainTglSchedule;
  readonly tourCup: DomainTourCupRankingEvent;
  readonly tourCupCombined: DomainTourCupCombined;
  readonly tourCupSplit?: Maybe<DomainTourCupSplit>;
  readonly tourCups: ReadonlyArray<DomainTourCupRankingEvent>;
  readonly tourcastTable: DomainTourcastTable;
  readonly tourcastVideos: ReadonlyArray<DomainVideo>;
  readonly tournamentGroupLocations: DomainTournamentGroupLocation;
  readonly tournamentHistory?: Maybe<DomainTournamentHistory>;
  /** @deprecated DOES NOT WORK USE oddsWin / REST APIs */
  readonly tournamentOddsCompressedV2: DomainTournamentOddsCompressedV2;
  readonly tournamentOddsToWin: DomainTournamentOddsToWin;
  /** @deprecated DOES NOT WORK USE oddsToWin / REST APIs */
  readonly tournamentOddsV2: DomainTournamentOddsV2;
  readonly tournamentOverview: DomainTournamentOverview;
  readonly tournamentPastResults: DomainHistoricalLeaderboard;
  readonly tournamentRecap: DomainTournamentRecap;
  /**   Get tournament information for the given tournament IDs */
  readonly tournaments: ReadonlyArray<DomainTournament>;
  readonly tspPlayoffShotDetails: DomainTeamShotDetails;
  readonly tspPlayoffShotDetailsCompressed: DomainTeamShotDetailsCompressed;
  readonly universityRankings: DomainUniversityRankings;
  readonly universityTotalPoints: DomainUniversityTotalPoints;
  readonly upcomingNetworks: DomainUpcomingBroadcastNetworks;
  readonly upcomingSchedule: DomainScheduleUpcoming;
  readonly videoById?: Maybe<DomainVideo>;
  readonly videoFranchises?: Maybe<DomainTourCategories>;
  readonly videoHero: DomainVideoHero;
  readonly videoLandingPage?: Maybe<DomainWatchLanding>;
  readonly videoNavigation?: Maybe<DomainVideoNavigation>;
  readonly videoRecommendations: ReadonlyArray<DomainVideo>;
  readonly videos: ReadonlyArray<DomainVideo>;
  readonly weather: DomainWeatherSummary;
  readonly yourTour: DomainYourTourStory;
  readonly yourTourNews: ReadonlyArray<DomainYourTourNews>;
};


export type DomainQueryAdTagConfigArgs = {
  tour?: InputMaybe<DomainTourCode>;
  tournamentId?: InputMaybe<Scalars['String']['input']>;
};


export type DomainQueryAllTimeRecordCategoriesArgs = {
  tourCode: DomainTourCode;
};


export type DomainQueryAllTimeRecordStatArgs = {
  recordId: Scalars['String']['input'];
  tourCode: DomainTourCode;
};


export type DomainQueryAlltoursponsorsArgs = {
  tourCode: DomainTourCode;
};


export type DomainQueryAonArgs = {
  year?: InputMaybe<Scalars['Int']['input']>;
};


export type DomainQueryArticleAdConfigArgs = {
  franchise?: InputMaybe<Scalars['String']['input']>;
};


export type DomainQueryArticleDetailsArgs = {
  path: Scalars['String']['input'];
};


export type DomainQueryArticleDetailsCompressedArgs = {
  path: Scalars['String']['input'];
};


export type DomainQueryBroadcastTimesArgs = {
  pastResults?: InputMaybe<Scalars['Boolean']['input']>;
  tournamentId: Scalars['ID']['input'];
};


export type DomainQueryBubbleArgs = {
  tourCode: DomainTourCode;
  tournamentId: Scalars['ID']['input'];
};


export type DomainQueryBubbleWatchArgs = {
  tourCode: DomainTourCode;
};


export type DomainQueryCompleteScheduleArgs = {
  filter?: InputMaybe<DomainTournamentCategory>;
  tourCode: DomainTourCode;
};


export type DomainQueryContentFragmentTabsArgs = {
  path: Scalars['String']['input'];
};


export type DomainQueryContentFragmentTypeArgs = {
  path: Scalars['String']['input'];
};


export type DomainQueryContentFragmentsCompressedArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  tourCode: DomainTourCode;
};


export type DomainQueryCourseHolesStatsArgs = {
  courseId: Scalars['ID']['input'];
  tournamentId: Scalars['ID']['input'];
};


export type DomainQueryCourseStatsArgs = {
  tournamentId: Scalars['ID']['input'];
};


export type DomainQueryCourseStatsDetailsArgs = {
  queryType: DomainCourseStatsId;
  round?: InputMaybe<DomainToughestRound>;
  tourCode: DomainTourCode;
  year?: InputMaybe<Scalars['Int']['input']>;
};


export type DomainQueryCourseStatsOverviewArgs = {
  tourCode: DomainTourCode;
  year?: InputMaybe<Scalars['Int']['input']>;
};


export type DomainQueryCoverageArgs = {
  pastResults?: InputMaybe<Scalars['Boolean']['input']>;
  tournamentId: Scalars['ID']['input'];
};


export type DomainQueryCupPastResultsArgs = {
  tournamentId: Scalars['ID']['input'];
};


export type DomainQueryCupPlayOverviewLeaderboardArgs = {
  id: Scalars['ID']['input'];
};


export type DomainQueryCupRoundLeaderboardArgs = {
  round?: InputMaybe<Scalars['Int']['input']>;
  tournamentId: Scalars['String']['input'];
};


export type DomainQueryCupRoundLeaderboardCompressedArgs = {
  round?: InputMaybe<Scalars['Int']['input']>;
  tournamentId: Scalars['String']['input'];
};


export type DomainQueryCupScorecardArgs = {
  matchId: Scalars['Int']['input'];
  round: Scalars['Int']['input'];
  tournamentId: Scalars['ID']['input'];
};


export type DomainQueryCupTeamRosterArgs = {
  tournamentId: Scalars['ID']['input'];
};


export type DomainQueryCupTeeTimesArgs = {
  tournamentId: Scalars['ID']['input'];
};


export type DomainQueryCurrentLeadersCompressedArgs = {
  tourCode?: InputMaybe<DomainTourCode>;
  tournamentId?: InputMaybe<Scalars['ID']['input']>;
};


export type DomainQueryDefaultTourCupArgs = {
  tour: DomainTourCode;
  year?: InputMaybe<Scalars['Int']['input']>;
};


export type DomainQueryEaglesForImpactArgs = {
  tournamentId: Scalars['ID']['input'];
};


export type DomainQueryEventGuideConfigArgs = {
  tournamentId: Scalars['String']['input'];
};


export type DomainQueryFieldArgs = {
  changesOnly?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
  includeWithdrawn?: InputMaybe<Scalars['Boolean']['input']>;
};


export type DomainQueryFieldStatsArgs = {
  fieldStatType?: InputMaybe<DomainFieldStatType>;
  tournamentId: Scalars['ID']['input'];
};


export type DomainQueryFranchisesArgs = {
  tourCode?: InputMaybe<Scalars['String']['input']>;
};


export type DomainQueryGenericContentArgs = {
  path: Scalars['String']['input'];
};


export type DomainQueryGenericContentCompressedArgs = {
  path: Scalars['String']['input'];
};


export type DomainQueryGetExpertPicksTableArgs = {
  path: Scalars['String']['input'];
  year?: InputMaybe<Scalars['Int']['input']>;
};


export type DomainQueryGetPowerRankingsTableArgs = {
  path: Scalars['String']['input'];
};


export type DomainQueryGetRcPhotoGalleryArgs = {
  path: Scalars['String']['input'];
};


export type DomainQueryGetRelatedFactArgs = {
  path: Scalars['String']['input'];
};


export type DomainQueryGetShotCommentaryArgs = {
  playerId: Scalars['String']['input'];
  round: Scalars['Int']['input'];
  tournamentId: Scalars['String']['input'];
};


export type DomainQueryGroupLocationsArgs = {
  round: Scalars['Int']['input'];
  tournamentId: Scalars['ID']['input'];
};


export type DomainQueryGroupStageRankingsArgs = {
  tournamentId: Scalars['ID']['input'];
};


export type DomainQueryGroupedFieldArgs = {
  changesOnly?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
  includeWithdrawn?: InputMaybe<Scalars['Boolean']['input']>;
};


export type DomainQueryHistoricalOddsArgs = {
  marketId: DomainHistoricalOddsId;
  playerId: Scalars['String']['input'];
  timeStamp?: InputMaybe<Scalars['AWSDateTime']['input']>;
  tournamentId: Scalars['String']['input'];
};


export type DomainQueryHistoricalScorecardStatsArgs = {
  playerId: Scalars['ID']['input'];
};


export type DomainQueryHistoricalTournamentsOddsArgs = {
  marketId: DomainOddsMarketType;
  timeStamp?: InputMaybe<Scalars['AWSDateTime']['input']>;
  tournamentId: Scalars['String']['input'];
};


export type DomainQueryHoleDetailsArgs = {
  courseId: Scalars['ID']['input'];
  hole: Scalars['Int']['input'];
  tournamentId: Scalars['ID']['input'];
};


export type DomainQueryLeaderboardCompressedV2Args = {
  id: Scalars['ID']['input'];
};


export type DomainQueryLeaderboardCompressedV3Args = {
  id: Scalars['ID']['input'];
};


export type DomainQueryLeaderboardHoleByHoleArgs = {
  round?: InputMaybe<Scalars['Int']['input']>;
  tournamentId: Scalars['ID']['input'];
};


export type DomainQueryLeaderboardLegendArgs = {
  odds: Scalars['Boolean']['input'];
  tournamentId: Scalars['ID']['input'];
};


export type DomainQueryLeaderboardStatsArgs = {
  id: Scalars['ID']['input'];
  statsType?: InputMaybe<DomainLeaderboardStatsType>;
};


export type DomainQueryLeaderboardStrokesArgs = {
  id: Scalars['ID']['input'];
};


export type DomainQueryLeaderboardStrokesCompressedArgs = {
  id: Scalars['ID']['input'];
};


export type DomainQueryLeaderboardV2Args = {
  id: Scalars['ID']['input'];
};


export type DomainQueryLeaderboardV3Args = {
  id: Scalars['ID']['input'];
};


export type DomainQueryLegalDocsCompressedArgs = {
  path: Scalars['String']['input'];
};


export type DomainQueryLiveAudioStreamArgs = {
  id: Scalars['ID']['input'];
};


export type DomainQueryLiveVideoOverrideArgs = {
  tourCode: DomainTourCode;
  tournamentId: Scalars['String']['input'];
};


export type DomainQueryMatchOutcomeIqArgs = {
  matchId: Scalars['Int']['input'];
  roundNumber?: InputMaybe<Scalars['Int']['input']>;
  tournamentId: Scalars['String']['input'];
};


export type DomainQueryMatchPlayLeaderboardArgs = {
  id: Scalars['ID']['input'];
};


export type DomainQueryMatchPlayLeaderboardCompressedArgs = {
  id: Scalars['ID']['input'];
};


export type DomainQueryMatchPlayPlayoffScorecardArgs = {
  matchId: Scalars['ID']['input'];
  roundNum: Scalars['Int']['input'];
  tournamentId: Scalars['ID']['input'];
};


export type DomainQueryMatchPlayScorecardArgs = {
  matchId: Scalars['ID']['input'];
  roundNum: Scalars['Int']['input'];
  tournamentId: Scalars['ID']['input'];
};


export type DomainQueryMatchPlayScorecardResultsArgs = {
  matchId: Scalars['ID']['input'];
  roundNum: Scalars['Int']['input'];
  tournamentId: Scalars['ID']['input'];
};


export type DomainQueryMatchPlayTeeTimesArgs = {
  tournamentId: Scalars['ID']['input'];
};


export type DomainQueryMatchPlayTeeTimesCompressedArgs = {
  tournamentId: Scalars['ID']['input'];
};


export type DomainQueryNetworksArgs = {
  tournamentId: Scalars['ID']['input'];
};


export type DomainQueryNewletterSubscriptionsArgs = {
  includeTournaments?: InputMaybe<Scalars['Boolean']['input']>;
};


export type DomainQueryNewsArticlesArgs = {
  franchise?: InputMaybe<Scalars['String']['input']>;
  franchises?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  playerId?: InputMaybe<Scalars['ID']['input']>;
  playerIds?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
  sectionName?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  targetYear?: InputMaybe<Scalars['String']['input']>;
  tour?: InputMaybe<DomainTourCode>;
  tournamentNum?: InputMaybe<Scalars['String']['input']>;
};


export type DomainQueryNewsFranchisesArgs = {
  allFranchises?: InputMaybe<Scalars['Boolean']['input']>;
  tourCode?: InputMaybe<Scalars['String']['input']>;
};


export type DomainQueryOddsGraphArgs = {
  marketId?: InputMaybe<DomainHistoricalOddsId>;
  oddsTimeType?: InputMaybe<DomainOddsTimeType>;
  playerIds: ReadonlyArray<Scalars['String']['input']>;
  round?: InputMaybe<Scalars['Int']['input']>;
  tournamentId: Scalars['String']['input'];
};


export type DomainQueryOddsTableArgs = {
  markets?: InputMaybe<ReadonlyArray<DomainArticleOddsMarketsInput>>;
  players?: InputMaybe<ReadonlyArray<DomainArticleOddsPlayerInput>>;
  timeStamp?: InputMaybe<Scalars['String']['input']>;
  tournamentId: Scalars['String']['input'];
  tournamentName: Scalars['String']['input'];
};


export type DomainQueryOddsToWinArgs = {
  oddsToWinId: Scalars['ID']['input'];
};


export type DomainQueryOddsToWinCompressedArgs = {
  oddsToWinId: Scalars['ID']['input'];
};


export type DomainQueryPlayerArgs = {
  id: Scalars['ID']['input'];
};


export type DomainQueryPlayerComparisonArgs = {
  category?: InputMaybe<DomainPlayerComparisonCategory>;
  playerIds: ReadonlyArray<Scalars['String']['input']>;
  tourCode: DomainTourCode;
  tournamentId?: InputMaybe<Scalars['String']['input']>;
  year?: InputMaybe<Scalars['Int']['input']>;
};


export type DomainQueryPlayerDirectoryArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  tourCode: DomainTourCode;
};


export type DomainQueryPlayerFinishStatsArgs = {
  playerId: Scalars['ID']['input'];
  statId: Scalars['String']['input'];
  tourCode: DomainTourCode;
};


export type DomainQueryPlayerHubArgs = {
  playerId: Scalars['ID']['input'];
};


export type DomainQueryPlayerProfileCareerArgs = {
  playerId: Scalars['String']['input'];
  tourCode?: InputMaybe<DomainTourCode>;
};


export type DomainQueryPlayerProfileCareerResultsArgs = {
  playerId: Scalars['ID']['input'];
};


export type DomainQueryPlayerProfileCourseResultsArgs = {
  playerId: Scalars['String']['input'];
  tourCode?: InputMaybe<DomainTourCode>;
};


export type DomainQueryPlayerProfileMajorResultsArgs = {
  playerId: Scalars['String']['input'];
};


export type DomainQueryPlayerProfileOverviewArgs = {
  currentTour?: InputMaybe<DomainTourCode>;
  playerId: Scalars['ID']['input'];
};


export type DomainQueryPlayerProfileScorecardsArgs = {
  playerId: Scalars['ID']['input'];
};


export type DomainQueryPlayerProfileSeasonResultsArgs = {
  playerId: Scalars['ID']['input'];
  tourCode?: InputMaybe<DomainTourCode>;
  year?: InputMaybe<Scalars['Int']['input']>;
};


export type DomainQueryPlayerProfileStandingsArgs = {
  playerId: Scalars['ID']['input'];
};


export type DomainQueryPlayerProfileStatsArgs = {
  playerId: Scalars['ID']['input'];
};


export type DomainQueryPlayerProfileStatsFullArgs = {
  playerId: Scalars['ID']['input'];
  year?: InputMaybe<Scalars['Int']['input']>;
};


export type DomainQueryPlayerProfileStatsFullV2Args = {
  playerId: Scalars['ID']['input'];
  year?: InputMaybe<Scalars['Int']['input']>;
};


export type DomainQueryPlayerProfileStatsYearsArgs = {
  playerId: Scalars['ID']['input'];
};


export type DomainQueryPlayerProfileTournamentResultsArgs = {
  playerId: Scalars['ID']['input'];
  tourCode?: InputMaybe<DomainTourCode>;
};


export type DomainQueryPlayerSponsorshipsArgs = {
  sponsors?: InputMaybe<ReadonlyArray<DomainPlayerSponsorBrand>>;
  tour: DomainTourCode;
};


export type DomainQueryPlayerTournamentStatusArgs = {
  playerId: Scalars['ID']['input'];
};


export type DomainQueryPlayersArgs = {
  ids: ReadonlyArray<Scalars['ID']['input']>;
};


export type DomainQueryPlayersOddsComparisonArgs = {
  playerIds: ReadonlyArray<Scalars['String']['input']>;
};


export type DomainQueryPlayoffScorecardArgs = {
  id: Scalars['ID']['input'];
};


export type DomainQueryPlayoffScorecardV2Args = {
  id: Scalars['ID']['input'];
};


export type DomainQueryPlayoffScorecardV3Args = {
  tournamentId: Scalars['ID']['input'];
};


export type DomainQueryPlayoffShotDetailsArgs = {
  includeRadar?: InputMaybe<Scalars['Boolean']['input']>;
  tournamentId: Scalars['ID']['input'];
};


export type DomainQueryPlayoffShotDetailsCompressedArgs = {
  includeRadar?: InputMaybe<Scalars['Boolean']['input']>;
  tournamentId: Scalars['ID']['input'];
};


export type DomainQueryPodcastEpisodesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  podcastId: Scalars['String']['input'];
};


export type DomainQueryPriorityRankingsArgs = {
  tourCode: DomainTourCode;
  year?: InputMaybe<Scalars['Int']['input']>;
};


export type DomainQueryPromoSectionArgs = {
  section: DomainPromoSectionType;
};


export type DomainQueryRankingsWinnersArgs = {
  tourCode?: InputMaybe<DomainTourCode>;
};


export type DomainQueryRsmArgs = {
  year?: InputMaybe<Scalars['Int']['input']>;
};


export type DomainQueryRsmLeaderboardArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  tournamentId?: InputMaybe<Scalars['ID']['input']>;
};


export type DomainQueryRyderCupArticleDetailsCompressedArgs = {
  path: Scalars['String']['input'];
};


export type DomainQueryRyderCupBroadcastCoverageArgs = {
  eventRegion?: InputMaybe<DomainEventRegion>;
};


export type DomainQueryRyderCupContentFragmentsCompressedArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  tourCode: DomainTourCode;
};


export type DomainQueryRyderCupContentPageTabsArgs = {
  path: Scalars['String']['input'];
};


export type DomainQueryRyderCupMixedMediaArgs = {
  articleTags?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  ascending: Scalars['Boolean']['input'];
  categories?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  currentContentId?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  playerIds?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  team?: InputMaybe<DomainRyderCupTeamType>;
  topic?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<DomainRyderCupContentType>;
  videoTags?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  year?: InputMaybe<Scalars['Int']['input']>;
};


export type DomainQueryRyderCupMixedMediaCompressedArgs = {
  articleTags?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  ascending: Scalars['Boolean']['input'];
  categories?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  currentContentId?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  playerIds?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  team?: InputMaybe<DomainRyderCupTeamType>;
  topic?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<DomainRyderCupContentType>;
  videoTags?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  year?: InputMaybe<Scalars['Int']['input']>;
};


export type DomainQueryRyderCupPlayerProfileCompressedArgs = {
  playerId: Scalars['String']['input'];
};


export type DomainQueryRyderCupTeamRankingsArgs = {
  eventQuery?: InputMaybe<DomainRyderCupRankingsQueryInput>;
  year?: InputMaybe<Scalars['Int']['input']>;
};


export type DomainQueryRyderCupTeamRankingsCompressedArgs = {
  eventQuery?: InputMaybe<DomainRyderCupRankingsQueryInput>;
  year?: InputMaybe<Scalars['Int']['input']>;
};


export type DomainQueryRyderCupTeamRankingsCompressedV2Args = {
  eventQuery?: InputMaybe<DomainRyderCupRankingsQueryInput>;
  year?: InputMaybe<Scalars['Int']['input']>;
};


export type DomainQueryRyderCupTeamRankingsV2Args = {
  eventQuery?: InputMaybe<DomainRyderCupRankingsQueryInput>;
  year?: InputMaybe<Scalars['Int']['input']>;
};


export type DomainQueryRyderCupTournamentArgs = {
  year: Scalars['Int']['input'];
};


export type DomainQueryRyderCupVideoByIdArgs = {
  brightcoveId: Scalars['ID']['input'];
};


export type DomainQueryScatterDataArgs = {
  course: Scalars['Int']['input'];
  hole: Scalars['Int']['input'];
  tournamentId: Scalars['String']['input'];
};


export type DomainQueryScatterDataCompressedArgs = {
  course: Scalars['Int']['input'];
  hole: Scalars['Int']['input'];
  tournamentId: Scalars['String']['input'];
};


export type DomainQueryScheduleArgs = {
  filter?: InputMaybe<DomainTournamentCategory>;
  tourCode: Scalars['String']['input'];
  year?: InputMaybe<Scalars['String']['input']>;
};


export type DomainQueryScheduleYearsArgs = {
  tourCode: DomainTourCode;
};


export type DomainQueryScorecardCompressedV3Args = {
  officialEventData?: InputMaybe<Scalars['Boolean']['input']>;
  playerId: Scalars['ID']['input'];
  tournamentId: Scalars['ID']['input'];
};


export type DomainQueryScorecardStatsArgs = {
  id: Scalars['ID']['input'];
  playerId: Scalars['ID']['input'];
};


export type DomainQueryScorecardStatsComparisonArgs = {
  category: DomainPlayerComparisonCategory;
  playerIds: ReadonlyArray<Scalars['String']['input']>;
  round?: InputMaybe<Scalars['Int']['input']>;
  tournamentId: Scalars['String']['input'];
};


export type DomainQueryScorecardStatsV3Args = {
  id: Scalars['ID']['input'];
  playerId: Scalars['ID']['input'];
};


export type DomainQueryScorecardStatsV3CompressedArgs = {
  id: Scalars['ID']['input'];
  playerId: Scalars['ID']['input'];
};


export type DomainQueryScorecardV2Args = {
  id: Scalars['ID']['input'];
  playerId: Scalars['ID']['input'];
};


export type DomainQueryScorecardV3Args = {
  officialEventData?: InputMaybe<Scalars['Boolean']['input']>;
  playerId: Scalars['ID']['input'];
  tournamentId: Scalars['ID']['input'];
};


export type DomainQuerySearchBarFeaturesArgs = {
  tourCode?: InputMaybe<DomainTourCode>;
};


export type DomainQuerySearchPlayersArgs = {
  lastName?: InputMaybe<Scalars['String']['input']>;
};


export type DomainQueryShotDetailsCompressedV3Args = {
  includeRadar?: InputMaybe<Scalars['Boolean']['input']>;
  playerId: Scalars['ID']['input'];
  round: Scalars['Int']['input'];
  tournamentId: Scalars['ID']['input'];
};


export type DomainQueryShotDetailsV3Args = {
  includeRadar?: InputMaybe<Scalars['Boolean']['input']>;
  playerId: Scalars['ID']['input'];
  round: Scalars['Int']['input'];
  tournamentId: Scalars['ID']['input'];
};


export type DomainQuerySignatureStandingsArgs = {
  tourCode: DomainTourCode;
};


export type DomainQuerySponsoredArticlesArgs = {
  sponsor: DomainArticleSponsor;
};


export type DomainQuerySponsoredArticlesV2Args = {
  sponsor: DomainArticleSponsor;
};


export type DomainQuerySponsorshipsArgs = {
  playerId: Scalars['ID']['input'];
};


export type DomainQueryStatDetailsArgs = {
  eventQuery?: InputMaybe<DomainStatDetailEventQuery>;
  statId: Scalars['String']['input'];
  tourCode: DomainTourCode;
  year?: InputMaybe<Scalars['Int']['input']>;
};


export type DomainQueryStatLeadersArgs = {
  category: DomainStatCategory;
  tourCode: DomainTourCode;
  year?: InputMaybe<Scalars['Int']['input']>;
};


export type DomainQueryStatOverviewArgs = {
  tourCode: DomainTourCode;
  year?: InputMaybe<Scalars['Int']['input']>;
};


export type DomainQueryStatsLeadersMobileArgs = {
  tourCode: DomainTourCode;
  year?: InputMaybe<Scalars['Int']['input']>;
};


export type DomainQueryTeamStrokePlayLeaderboardArgs = {
  id: Scalars['ID']['input'];
};


export type DomainQueryTeamStrokePlayLeaderboardCompressedArgs = {
  id: Scalars['ID']['input'];
};


export type DomainQueryTeamStrokePlayScorecardArgs = {
  roundNum: Scalars['Int']['input'];
  teamId: Scalars['ID']['input'];
  tournamentId: Scalars['ID']['input'];
};


export type DomainQueryTeamStrokePlayScorecardRoundsArgs = {
  teamId: Scalars['ID']['input'];
  tournamentId: Scalars['ID']['input'];
};


export type DomainQueryTeamStrokePlayTeeTimesArgs = {
  tournamentId: Scalars['ID']['input'];
};


export type DomainQueryTeamStrokePlayTeeTimesCompressedArgs = {
  tournamentId: Scalars['ID']['input'];
};


export type DomainQueryTeeTimesArgs = {
  id: Scalars['ID']['input'];
};


export type DomainQueryTeeTimesCompressedArgs = {
  id: Scalars['ID']['input'];
};


export type DomainQueryTeeTimesCompressedV2Args = {
  id: Scalars['ID']['input'];
};


export type DomainQueryTeeTimesV2Args = {
  id: Scalars['ID']['input'];
};


export type DomainQueryTglMatchArgs = {
  matchId: Scalars['ID']['input'];
};


export type DomainQueryTglMatchesArgs = {
  matchIds: ReadonlyArray<Scalars['ID']['input']>;
};


export type DomainQueryTglScheduleArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  year?: InputMaybe<Scalars['Int']['input']>;
};


export type DomainQueryTourCupArgs = {
  id: Scalars['ID']['input'];
  type?: InputMaybe<DomainTourCupType>;
};


export type DomainQueryTourCupCombinedArgs = {
  eventQuery?: InputMaybe<DomainStatDetailEventQuery>;
  id?: InputMaybe<Scalars['String']['input']>;
  tourCode: DomainTourCode;
  year?: InputMaybe<Scalars['Int']['input']>;
};


export type DomainQueryTourCupSplitArgs = {
  eventQuery?: InputMaybe<DomainStatDetailEventQuery>;
  id?: InputMaybe<Scalars['String']['input']>;
  tourCode: DomainTourCode;
  year?: InputMaybe<Scalars['Int']['input']>;
};


export type DomainQueryTourCupsArgs = {
  tour: DomainTourCode;
  year: Scalars['Int']['input'];
};


export type DomainQueryTourcastTableArgs = {
  tournamentId: Scalars['ID']['input'];
};


export type DomainQueryTourcastVideosArgs = {
  hole?: InputMaybe<Scalars['Int']['input']>;
  playerId: Scalars['ID']['input'];
  round: Scalars['Int']['input'];
  shot?: InputMaybe<Scalars['Int']['input']>;
  tournamentId: Scalars['ID']['input'];
};


export type DomainQueryTournamentGroupLocationsArgs = {
  round: Scalars['Int']['input'];
  tournamentId: Scalars['ID']['input'];
};


export type DomainQueryTournamentHistoryArgs = {
  tournamentId: Scalars['String']['input'];
};


export type DomainQueryTournamentOddsCompressedV2Args = {
  oddsFormat?: InputMaybe<DomainOddsFormat>;
  provider?: InputMaybe<DomainOddsProvider>;
  tournamentId: Scalars['ID']['input'];
};


export type DomainQueryTournamentOddsToWinArgs = {
  tournamentId: Scalars['ID']['input'];
};


export type DomainQueryTournamentOddsV2Args = {
  oddsFormat?: InputMaybe<DomainOddsFormat>;
  provider?: InputMaybe<DomainOddsProvider>;
  tournamentId: Scalars['ID']['input'];
};


export type DomainQueryTournamentOverviewArgs = {
  tournamentId: Scalars['ID']['input'];
};


export type DomainQueryTournamentPastResultsArgs = {
  id: Scalars['ID']['input'];
  year?: InputMaybe<Scalars['Int']['input']>;
};


export type DomainQueryTournamentRecapArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  tournamentId: Scalars['String']['input'];
};


export type DomainQueryTournamentsArgs = {
  ids?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
};


export type DomainQueryTspPlayoffShotDetailsArgs = {
  includeRadar?: InputMaybe<Scalars['Boolean']['input']>;
  tournamentId: Scalars['ID']['input'];
};


export type DomainQueryTspPlayoffShotDetailsCompressedArgs = {
  includeRadar?: InputMaybe<Scalars['Boolean']['input']>;
  tournamentId: Scalars['ID']['input'];
};


export type DomainQueryUniversityRankingsArgs = {
  tourCode?: InputMaybe<DomainTourCode>;
  week?: InputMaybe<Scalars['Int']['input']>;
  year?: InputMaybe<Scalars['Int']['input']>;
};


export type DomainQueryUniversityTotalPointsArgs = {
  season?: InputMaybe<Scalars['Int']['input']>;
  week?: InputMaybe<Scalars['Int']['input']>;
};


export type DomainQueryUpcomingNetworksArgs = {
  tourCode?: InputMaybe<DomainTourCode>;
  tournamentIds: ReadonlyArray<Scalars['ID']['input']>;
};


export type DomainQueryUpcomingScheduleArgs = {
  filter?: InputMaybe<DomainTournamentCategory>;
  tourCode: Scalars['String']['input'];
  year?: InputMaybe<Scalars['String']['input']>;
};


export type DomainQueryVideoByIdArgs = {
  brightcoveId: Scalars['ID']['input'];
  tourcast: Scalars['Boolean']['input'];
};


export type DomainQueryVideoFranchisesArgs = {
  tourCode?: InputMaybe<DomainTourCode>;
};


export type DomainQueryVideoHeroArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
  tourCode: DomainTourCode;
};


export type DomainQueryVideoLandingPageArgs = {
  tourCode: DomainTourCode;
};


export type DomainQueryVideoNavigationArgs = {
  tourCode: DomainTourCode;
};


export type DomainQueryVideoRecommendationsArgs = {
  brightcoveId?: InputMaybe<Scalars['ID']['input']>;
  franchise?: InputMaybe<Scalars['String']['input']>;
  language?: InputMaybe<DomainVideoLanguage>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  playerId?: InputMaybe<Scalars['String']['input']>;
  season?: InputMaybe<Scalars['String']['input']>;
  tour?: InputMaybe<Scalars['String']['input']>;
  tourCode?: InputMaybe<DomainTourCode>;
  tournamentId?: InputMaybe<Scalars['String']['input']>;
};


export type DomainQueryVideosArgs = {
  category?: InputMaybe<Scalars['String']['input']>;
  franchise?: InputMaybe<Scalars['String']['input']>;
  franchises?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  holeNumber?: InputMaybe<Scalars['String']['input']>;
  language?: InputMaybe<DomainVideoLanguage>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  playerId?: InputMaybe<Scalars['String']['input']>;
  playerIds?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  rating?: InputMaybe<Scalars['Int']['input']>;
  season?: InputMaybe<Scalars['String']['input']>;
  tour?: InputMaybe<Scalars['String']['input']>;
  tourCode?: InputMaybe<DomainTourCode>;
  tournamentId?: InputMaybe<Scalars['String']['input']>;
};


export type DomainQueryWeatherArgs = {
  tournamentId: Scalars['ID']['input'];
};


export type DomainQueryYourTourArgs = {
  tourCode: DomainTourCode;
};


export type DomainQueryYourTourNewsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  tourCode: DomainTourCode;
};

export type DomainRcContentTypeParent = {
  readonly __typename: 'RCContentTypeParent';
  readonly displayValue: Scalars['String']['output'];
  readonly queryValue: DomainRyderCupContentType;
};

export type DomainRcHomepageAssets = DomainNewsArticle | DomainRcPhotoGallery | DomainVideo;

export type DomainRcPhotoGallery = {
  readonly __typename: 'RCPhotoGallery';
  readonly authorReference?: Maybe<DomainNewsArticleAuthor>;
  readonly cta?: Maybe<DomainCallToAction>;
  readonly date?: Maybe<Scalars['AWSTimestamp']['output']>;
  readonly eventYears?: Maybe<ReadonlyArray<Scalars['String']['output']>>;
  readonly id: Scalars['String']['output'];
  readonly images?: Maybe<ReadonlyArray<DomainImage>>;
  readonly sectionTitle?: Maybe<Scalars['String']['output']>;
  readonly shareUrl?: Maybe<Scalars['String']['output']>;
  readonly sponsor?: Maybe<DomainNewsArticleSponsor>;
  readonly subhead?: Maybe<Scalars['String']['output']>;
  readonly tags?: Maybe<ReadonlyArray<Maybe<Scalars['String']['output']>>>;
  readonly team?: Maybe<DomainRyderCupTeamType>;
  readonly teaserImageOverride?: Maybe<Scalars['String']['output']>;
  readonly topics?: Maybe<ReadonlyArray<DomainContentTopics>>;
  readonly url?: Maybe<Scalars['String']['output']>;
};

/**
 *   type RCPlayerProfileContent {
 *      header: String!
 *      content: [NewsArticleNode]
 *  }
 */
export type DomainRcPlayerTournamentRecord = {
  readonly __typename: 'RCPlayerTournamentRecord';
  readonly fourBallPoints: Scalars['Int']['output'];
  readonly foursomesPoints: Scalars['Int']['output'];
  readonly matchesPlayed: Scalars['Int']['output'];
  readonly pointsEarned: Scalars['Int']['output'];
  readonly sectionTitle?: Maybe<Scalars['String']['output']>;
  readonly singlesPoints: Scalars['Int']['output'];
};

export type DomainRcTeamTypeParent = {
  readonly __typename: 'RCTeamTypeParent';
  readonly displayValue: Scalars['String']['output'];
  readonly queryValue: DomainRyderCupTeamType;
};

export type DomainRcVideoPage = {
  readonly __typename: 'RCVideoPage';
  readonly upNextVideos?: Maybe<ReadonlyArray<DomainVideo>>;
  readonly video?: Maybe<DomainVideo>;
};

export type DomainRsmEventWinner = {
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

export type DomainRsmHistoricalWinner = {
  readonly __typename: 'RSMHistoricalWinner';
  readonly displaySeason: Scalars['String']['output'];
  readonly winners: ReadonlyArray<DomainRsmEventWinner>;
  readonly year: Scalars['Int']['output'];
};

export type DomainRsmLeaderboard = {
  readonly __typename: 'RSMLeaderboard';
  readonly dateText?: Maybe<Scalars['String']['output']>;
  readonly isLive?: Maybe<Scalars['Boolean']['output']>;
  readonly livePlayers: ReadonlyArray<DomainRsmLeaderboardPlayer>;
  readonly players: ReadonlyArray<DomainRsmLeaderboardPlayer>;
  readonly round?: Maybe<Scalars['String']['output']>;
  readonly tournamentId: Scalars['ID']['output'];
  readonly tournamentName: Scalars['String']['output'];
};

export type DomainRsmLeaderboardPlayer = {
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

export type DomainRsmPlayer = {
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

export type DomainRsmStandings = {
  readonly __typename: 'RSMStandings';
  readonly currentLeaderboard: ReadonlyArray<DomainRsmPlayer>;
  readonly previousWinners: ReadonlyArray<DomainRsmHistoricalWinner>;
  readonly weeklyWinners: ReadonlyArray<DomainRsmEventWinner>;
};

export type DomainRyder_Cup_Ranking_Tooltip =
  | 'CAPTAIN_PICK'
  | 'OUTCOME_IQ'
  | 'QUALIFICATION_INFO'
  | 'QUALIFIED_LOGO';

export type DomainRadarBallTracjectory = {
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

export type DomainRadarData = {
  readonly __typename: 'RadarData';
  readonly actualFlightTime: Scalars['Int']['output'];
  readonly apexHeight: Scalars['Float']['output'];
  readonly apexRange: Scalars['Float']['output'];
  readonly apexSide: Scalars['Float']['output'];
  readonly ballImpactMeasured?: Maybe<Scalars['String']['output']>;
  readonly ballSpeed: Scalars['Float']['output'];
  readonly ballTrajectory: ReadonlyArray<DomainRadarBallTracjectory>;
  readonly clubSpeed: Scalars['Float']['output'];
  readonly horizontalLaunchAngle: Scalars['Float']['output'];
  readonly launchSpin: Scalars['Float']['output'];
  /** @deprecated use normalizedTrajectoryV2 */
  readonly normalizedTrajectory: ReadonlyArray<DomainRadarNormalizedTrajectory>;
  readonly normalizedTrajectoryV2: ReadonlyArray<DomainRadarNormalizedTrajectoryV2>;
  readonly smashFactor: Scalars['Float']['output'];
  readonly spinAxis: Scalars['Float']['output'];
  readonly verticalLaunchAngle: Scalars['Float']['output'];
};

export type DomainRadarNormalizedTrajectory = {
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

export type DomainRadarNormalizedTrajectoryV2 = {
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

export type DomainRangeWeatherTemp = {
  readonly __typename: 'RangeWeatherTemp';
  readonly maxTempC: Scalars['String']['output'];
  readonly maxTempF: Scalars['String']['output'];
  readonly minTempC: Scalars['String']['output'];
  readonly minTempF: Scalars['String']['output'];
};

export type DomainRankingsPastWinner = {
  readonly __typename: 'RankingsPastWinner';
  readonly description: Scalars['String']['output'];
  readonly displayName: Scalars['String']['output'];
  /** @deprecated Use imageAsset */
  readonly image: Scalars['String']['output'];
  readonly imageAsset: DomainImageAsset;
  readonly playerId: Scalars['ID']['output'];
  readonly season: Scalars['String']['output'];
};

export type DomainRankingsTeams =
  | 'EUROPE'
  | 'USA';

export type DomainRcBroadcastPrograms = {
  readonly __typename: 'RcBroadcastPrograms';
  readonly broadcastDate: Scalars['String']['output'];
  readonly programs: ReadonlyArray<DomainRcProgram>;
};

export type DomainRcBroadcastType =
  | 'AUDIO'
  | 'VIDEO';

export type DomainRcProducts = {
  readonly __typename: 'RcProducts';
  readonly cta?: Maybe<DomainCallToAction>;
  readonly header?: Maybe<Scalars['String']['output']>;
  readonly imageGallery?: Maybe<ReadonlyArray<Scalars['String']['output']>>;
  readonly path: Scalars['String']['output'];
  readonly productDescription?: Maybe<ReadonlyArray<Maybe<DomainNewsArticleNode>>>;
};

export type DomainRcProgram = {
  readonly __typename: 'RcProgram';
  readonly androidLink?: Maybe<Scalars['String']['output']>;
  readonly appleAppStore?: Maybe<Scalars['String']['output']>;
  readonly brightcoveId?: Maybe<Scalars['String']['output']>;
  readonly broadcastType: DomainRcBroadcastType;
  readonly cta1?: Maybe<DomainCallToAction>;
  readonly cta2?: Maybe<DomainCallToAction>;
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
  readonly networkLogoAsset?: Maybe<DomainImageAsset>;
  readonly networkLogoDark?: Maybe<Scalars['String']['output']>;
  readonly networkLogoDarkAsset?: Maybe<DomainImageAsset>;
  readonly networkName?: Maybe<Scalars['String']['output']>;
  readonly posterImage?: Maybe<Scalars['String']['output']>;
  readonly posterImageAsset?: Maybe<DomainImageAsset>;
  readonly regions?: Maybe<ReadonlyArray<Maybe<Scalars['String']['output']>>>;
  readonly roundNum?: Maybe<Scalars['String']['output']>;
  readonly shortDescription?: Maybe<Scalars['String']['output']>;
  readonly startTime?: Maybe<Scalars['String']['output']>;
  readonly startTimeUtc?: Maybe<Scalars['AWSTimestamp']['output']>;
  readonly streamUrl?: Maybe<Scalars['String']['output']>;
  readonly thumbnailImage?: Maybe<Scalars['String']['output']>;
  readonly thumbnailImageAsset?: Maybe<DomainImageAsset>;
  readonly title: Scalars['String']['output'];
  readonly url: Scalars['String']['output'];
};

export type DomainRelatedFact = {
  readonly __typename: 'RelatedFact';
  readonly factText?: Maybe<ReadonlyArray<DomainTourSponsorDescription>>;
  readonly photo?: Maybe<Scalars['String']['output']>;
};

export type DomainRelatedFactsNode = {
  readonly __typename: 'RelatedFactsNode';
  readonly path: Scalars['String']['output'];
};

export type DomainResultsStandingsDetail = {
  readonly __typename: 'ResultsStandingsDetail';
  /** @deprecated Use cupLogoAsset */
  readonly cupLogo?: Maybe<Scalars['String']['output']>;
  readonly cupLogoAccessibilityText?: Maybe<Scalars['String']['output']>;
  readonly cupLogoAsset?: Maybe<DomainImageAsset>;
  /** @deprecated Use cupLogoDarkAsset */
  readonly cupLogoDark?: Maybe<Scalars['String']['output']>;
  readonly cupLogoDarkAsset?: Maybe<DomainImageAsset>;
  readonly cupName?: Maybe<Scalars['String']['output']>;
  readonly cupPoints?: Maybe<Scalars['String']['output']>;
  readonly cupRank?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use rankLogoAsset */
  readonly rankLogo?: Maybe<Scalars['String']['output']>;
  readonly rankLogoAccessibilityText?: Maybe<Scalars['String']['output']>;
  readonly rankLogoAsset?: Maybe<DomainImageAsset>;
  /** @deprecated Use rankLogoDarkAsset */
  readonly rankLogoDark?: Maybe<Scalars['String']['output']>;
  readonly rankLogoDarkAsset?: Maybe<DomainImageAsset>;
};

export type DomainResultsYears = {
  readonly __typename: 'ResultsYears';
  readonly tour: DomainTourCode;
  readonly years: ReadonlyArray<Scalars['String']['output']>;
};

export type DomainRolexClock = {
  readonly __typename: 'RolexClock';
  readonly height?: Maybe<Scalars['Float']['output']>;
  readonly width?: Maybe<Scalars['Float']['output']>;
};

export type DomainRoundFilter = {
  readonly __typename: 'RoundFilter';
  readonly displayText: Scalars['String']['output'];
  readonly roundNumbers: ReadonlyArray<Scalars['Int']['output']>;
};

export type DomainRoundFormat =
  | 'ALTERNATE_SHOT'
  | 'BEST_BALL';

export type DomainRoundScore = {
  readonly __typename: 'RoundScore';
  readonly complete: Scalars['Boolean']['output'];
  readonly courseAbbreviation?: Maybe<Scalars['String']['output']>;
  readonly courseId?: Maybe<Scalars['String']['output']>;
  readonly courseName: Scalars['String']['output'];
  readonly currentHole: Scalars['Int']['output'];
  readonly currentRound: Scalars['Boolean']['output'];
  readonly firstNine: DomainScorecardRow;
  readonly groupNumber: Scalars['Int']['output'];
  readonly parTotal: Scalars['Int']['output'];
  readonly roundNumber: Scalars['Int']['output'];
  readonly scoreToPar: Scalars['String']['output'];
  readonly secondNine: DomainScorecardRow;
  readonly total: Scalars['String']['output'];
  readonly tourcastURI?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastURL?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastURLWeb?: Maybe<Scalars['String']['output']>;
};

export type DomainRoundScoreItem = {
  readonly __typename: 'RoundScoreItem';
  readonly roundDisplay: Scalars['String']['output'];
  readonly roundNum: Scalars['Int']['output'];
  readonly roundScore: Scalars['String']['output'];
};

export type DomainRoundStatus =
  | 'COMPLETE'
  | 'GROUPINGS_OFFICIAL'
  | 'IN_PROGRESS'
  | 'OFFICIAL'
  | 'SUSPENDED'
  | 'UPCOMING';

export type DomainRoundStatusColor =
  | 'BLUE'
  | 'GRAY'
  | 'GREEN'
  | 'RED'
  | 'YELLOW';

export type DomainRyderCupBio = {
  readonly __typename: 'RyderCupBio';
  readonly bio?: Maybe<ReadonlyArray<Maybe<DomainNewsArticleNode>>>;
};

export type DomainRyderCupBroadcastCoverage = {
  readonly __typename: 'RyderCupBroadcastCoverage';
  readonly broadcastPrograms: ReadonlyArray<DomainRcBroadcastPrograms>;
};

export type DomainRyderCupCaptain = {
  readonly __typename: 'RyderCupCaptain';
  readonly displayName: Scalars['String']['output'];
  readonly firstName: Scalars['String']['output'];
  readonly lastName: Scalars['String']['output'];
  readonly playerId: Scalars['String']['output'];
};

export type DomainRyderCupContent = DomainNewsArticle | DomainRcPhotoGallery | DomainVideo;

export type DomainRyderCupContentCategories = {
  readonly __typename: 'RyderCupContentCategories';
  readonly id: Scalars['Int']['output'];
  readonly name: Scalars['String']['output'];
};

export type DomainRyderCupContentCompressed = {
  readonly __typename: 'RyderCupContentCompressed';
  readonly input?: Maybe<DomainPaginationDetails>;
  readonly payload: Scalars['String']['output'];
};

export type DomainRyderCupContentFragment = {
  readonly __typename: 'RyderCupContentFragment';
  readonly fragments: ReadonlyArray<DomainRyderCupContentFragments>;
  readonly pageMetadata: DomainPageMetadata;
  readonly totalLength: Scalars['Int']['output'];
};

export type DomainRyderCupContentFragments = DomainBroadcastTableFragment | DomainContentFragmentTabs | DomainContentStory | DomainContentVideoCarousel | DomainCourseInfo | DomainDropdownFragment | DomainEventHub | DomainEventHubTable | DomainFutureVenuesFragment | DomainFutureVenuesTableFragment | DomainGenericContent | DomainHeroCarousel | DomainHistoryInfo | DomainHistoryScore | DomainHomepageLead | DomainHomepageNews | DomainHomepageProgramStanding | DomainHomepageScoring | DomainHospitalityCard | DomainImageBlock | DomainJumpToSection | DomainKopHeader | DomainKopSignUp | DomainKopStandingsList | DomainKopSubheader | DomainKopUpcomingTournament | DomainKopZigZag | DomainMatchCard | DomainMediaGallery | DomainMessageBanner | DomainOddsToWinTracker | DomainRcProducts | DomainRolexClock | DomainRyderCupCourseModel | DomainRyderCupLatestNewsSection | DomainRyderCupPlayerBios | DomainSecondaryHero | DomainTeamRankings | DomainThreeUpPhoto | DomainThreeUpStats | DomainTicketSectionContainer | DomainTwoColumn | DomainVideoHero;

export type DomainRyderCupContentPlayer = {
  readonly __typename: 'RyderCupContentPlayer';
  readonly displayName: Scalars['String']['output'];
  readonly id: Scalars['String']['output'];
  readonly name: Scalars['String']['output'];
};

export type DomainRyderCupContentTags = {
  readonly __typename: 'RyderCupContentTags';
  readonly id: Scalars['Int']['output'];
  readonly name: Scalars['String']['output'];
};

export type DomainRyderCupContentType =
  | 'ALL'
  | 'ARTICLES'
  | 'PHOTO_GALLERY'
  | 'VIDEOS'
  | 'VIDEO_ARTICLES';

export type DomainRyderCupCourse = {
  readonly __typename: 'RyderCupCourse';
  readonly countryCode?: Maybe<Scalars['String']['output']>;
  readonly courseCity?: Maybe<Scalars['String']['output']>;
  readonly courseCountry?: Maybe<Scalars['String']['output']>;
  readonly courseName?: Maybe<Scalars['String']['output']>;
  readonly courseState?: Maybe<Scalars['String']['output']>;
};

export type DomainRyderCupCourseModel = {
  readonly __typename: 'RyderCupCourseModel';
  readonly city?: Maybe<Scalars['String']['output']>;
  readonly country?: Maybe<Scalars['String']['output']>;
  readonly courseDescription?: Maybe<ReadonlyArray<Maybe<DomainNewsArticleNode>>>;
  readonly courseId?: Maybe<Scalars['String']['output']>;
  readonly courseName?: Maybe<Scalars['String']['output']>;
  readonly courseYardage?: Maybe<Scalars['String']['output']>;
  readonly holes?: Maybe<ReadonlyArray<DomainRyderCupCourseModelHole>>;
  readonly par?: Maybe<Scalars['Int']['output']>;
  readonly state?: Maybe<Scalars['String']['output']>;
};

export type DomainRyderCupCourseModelHole = {
  readonly __typename: 'RyderCupCourseModelHole';
  readonly holeBeautyImage?: Maybe<Scalars['String']['output']>;
  readonly holeDescription?: Maybe<ReadonlyArray<Maybe<DomainNewsArticleNode>>>;
  readonly holeFlyoverVideo?: Maybe<DomainVideo>;
  readonly holeNumber: Scalars['Int']['output'];
  readonly holePickleImage?: Maybe<Scalars['String']['output']>;
  readonly par: Scalars['Int']['output'];
  readonly yardage: Scalars['Int']['output'];
};

/**  ## Ryder Cup */
export type DomainRyderCupEventState =
  | 'LIVE_WEEK'
  | 'LIVE_WEEKEND'
  | 'OFF_SEASON'
  | 'POINTS_RACE'
  | 'POST_EVENT'
  | 'PRE_EVENT';

export type DomainRyderCupLatestNewsSection = {
  readonly __typename: 'RyderCupLatestNewsSection';
  readonly bottomCta?: Maybe<DomainCallToAction>;
  readonly content?: Maybe<ReadonlyArray<DomainRcHomepageAssets>>;
  readonly franchiseTags?: Maybe<ReadonlyArray<Scalars['String']['output']>>;
  readonly limit?: Maybe<Scalars['Int']['output']>;
  readonly sectionTitle?: Maybe<Scalars['String']['output']>;
  readonly topCta?: Maybe<DomainCallToAction>;
};

export type DomainRyderCupMatchOutcomeIq = {
  readonly __typename: 'RyderCupMatchOutcomeIQ';
  readonly euMatchWin: Scalars['Float']['output'];
  readonly holes: ReadonlyArray<DomainOutComeIqHole>;
  readonly id: Scalars['String']['output'];
  readonly logo?: Maybe<Scalars['String']['output']>;
  readonly matchDraw: Scalars['Float']['output'];
  readonly matchId: Scalars['Int']['output'];
  readonly roundNum: Scalars['Int']['output'];
  readonly toolTip?: Maybe<DomainToolTipComponent>;
  readonly usMatchWin: Scalars['Float']['output'];
};

export type DomainRyderCupMediaSearchOptions = {
  readonly __typename: 'RyderCupMediaSearchOptions';
  readonly contentTypes: ReadonlyArray<DomainRcContentTypeParent>;
  readonly playerOptions: ReadonlyArray<DomainRyderCupPlayerOption>;
  readonly teamOptions: ReadonlyArray<DomainRcTeamTypeParent>;
  readonly topicOptions: ReadonlyArray<DomainRyderCupTopicOption>;
  readonly yearOptions: ReadonlyArray<Scalars['String']['output']>;
};

export type DomainRyderCupPlayer = {
  readonly __typename: 'RyderCupPlayer';
  readonly countryCode?: Maybe<Scalars['String']['output']>;
  readonly countryName?: Maybe<Scalars['String']['output']>;
  readonly displayName: Scalars['String']['output'];
  readonly firstName: Scalars['String']['output'];
  readonly lastName: Scalars['String']['output'];
  readonly playerId: Scalars['String']['output'];
};

export type DomainRyderCupPlayerBios = {
  readonly __typename: 'RyderCupPlayerBios';
  readonly bios?: Maybe<ReadonlyArray<Maybe<DomainRyderCupBio>>>;
  readonly headshots?: Maybe<ReadonlyArray<Scalars['String']['output']>>;
};

export type DomainRyderCupPlayerOption = {
  readonly __typename: 'RyderCupPlayerOption';
  readonly displayName: Scalars['String']['output'];
  readonly id: Scalars['String']['output'];
  readonly name: Scalars['String']['output'];
};

export type DomainRyderCupPlayerProfile = {
  readonly __typename: 'RyderCupPlayerProfile';
  readonly playerId: Scalars['String']['output'];
  readonly playerProfileHeader: DomainRyderCupPlayerProfileHeader;
  readonly profileContentSections: ReadonlyArray<DomainRyderCupPlayerProfileSection>;
  readonly team: DomainRankingsTeams;
};

export type DomainRyderCupPlayerProfileCompressed = {
  readonly __typename: 'RyderCupPlayerProfileCompressed';
  readonly payload: Scalars['String']['output'];
  readonly playerId: Scalars['String']['output'];
};

export type DomainRyderCupPlayerProfileHeader = {
  readonly __typename: 'RyderCupPlayerProfileHeader';
  readonly age?: Maybe<Scalars['String']['output']>;
  readonly appearances?: Maybe<Scalars['Int']['output']>;
  readonly headshot: DomainProfileHeadshot;
  readonly wins?: Maybe<Scalars['Int']['output']>;
};

export type DomainRyderCupPlayerProfileSection = DomainGenericContent | DomainRcPlayerTournamentRecord | DomainRolexClock | DomainRyderCupLatestNewsSection | DomainThreeUpStats;

export type DomainRyderCupRankingsQueryInput = {
  readonly team: DomainRankingsTeams;
  readonly tournamentId: Scalars['String']['input'];
};

export type DomainRyderCupRankingsRow = DomainInformationRow | DomainStatDetailsPlayer;

export type DomainRyderCupRankingsTeam = {
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
  readonly rankings: ReadonlyArray<DomainRyderCupRankingsRow>;
  readonly teamName: Scalars['String']['output'];
  readonly toolTips: ReadonlyArray<DomainToolTipComponent>;
  readonly tournamentPills: ReadonlyArray<DomainStatTournamentPill>;
  readonly usInfoBlurb?: Maybe<Scalars['String']['output']>;
  readonly viceCaptain?: Maybe<Scalars['String']['output']>;
  readonly viceCaptainLabel?: Maybe<Scalars['String']['output']>;
  readonly year?: Maybe<Scalars['Int']['output']>;
  readonly years: ReadonlyArray<DomainStatYearPills>;
};

export type DomainRyderCupRankingsV2 = {
  readonly __typename: 'RyderCupRankingsV2';
  readonly defaultUS: Scalars['Boolean']['output'];
  readonly teams: ReadonlyArray<DomainRyderCupRankingsTeam>;
};

export type DomainRyderCupTeam = {
  readonly __typename: 'RyderCupTeam';
  readonly captain: DomainRyderCupCaptain;
  readonly players: ReadonlyArray<DomainRyderCupPlayer>;
  readonly teamLogo: Scalars['String']['output'];
  readonly teamName: Scalars['String']['output'];
};

export type DomainRyderCupTeamRankings = {
  readonly __typename: 'RyderCupTeamRankings';
  readonly defaultUS: Scalars['Boolean']['output'];
  readonly euroBanner: Scalars['String']['output'];
  readonly euroCaptainLabel?: Maybe<Scalars['String']['output']>;
  readonly euroDisplaySeason?: Maybe<Scalars['String']['output']>;
  readonly euroHeader: Scalars['String']['output'];
  readonly euroLastUpdated: Scalars['String']['output'];
  readonly euroRankings: ReadonlyArray<DomainRyderCupRankingsRow>;
  readonly euroToolTips?: Maybe<ReadonlyArray<DomainToolTipComponent>>;
  readonly euroTournamentPills?: Maybe<ReadonlyArray<DomainStatTournamentPill>>;
  readonly euroViceCaptainLabel?: Maybe<Scalars['String']['output']>;
  readonly euroYear?: Maybe<Scalars['Int']['output']>;
  readonly euroYears?: Maybe<ReadonlyArray<DomainStatYearPills>>;
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
  readonly usRankings: ReadonlyArray<DomainRyderCupRankingsRow>;
  readonly usToolTips?: Maybe<ReadonlyArray<DomainToolTipComponent>>;
  readonly usTournamentPills?: Maybe<ReadonlyArray<DomainStatTournamentPill>>;
  readonly usViceCaptain?: Maybe<Scalars['String']['output']>;
  readonly usViceCaptainLabel?: Maybe<Scalars['String']['output']>;
  readonly usYear?: Maybe<Scalars['Int']['output']>;
  readonly usYears?: Maybe<ReadonlyArray<DomainStatYearPills>>;
};

export type DomainRyderCupTeamRankingsCompressed = {
  readonly __typename: 'RyderCupTeamRankingsCompressed';
  readonly payload: Scalars['String']['output'];
};

export type DomainRyderCupTeamType =
  | 'BOTH'
  | 'EUROPE'
  | 'USA';

export type DomainRyderCupTopicOption = {
  readonly __typename: 'RyderCupTopicOption';
  readonly displayValue: Scalars['String']['output'];
  readonly value: Scalars['String']['output'];
};

export type DomainRyderCupTournament = {
  readonly __typename: 'RyderCupTournament';
  readonly course?: Maybe<DomainRyderCupCourse>;
  readonly euroScore: Scalars['String']['output'];
  readonly euroTeam: DomainRyderCupTeam;
  readonly historyInfo?: Maybe<DomainHistoryInfo>;
  readonly usScore: Scalars['String']['output'];
  readonly usTeam: DomainRyderCupTeam;
  readonly winner: Scalars['String']['output'];
  readonly year: Scalars['Int']['output'];
};

export type DomainRyderCupTournamentOverview = {
  readonly __typename: 'RyderCupTournamentOverview';
  readonly course?: Maybe<DomainRyderCupCourse>;
  readonly endDate?: Maybe<Scalars['String']['output']>;
  readonly euroScore: Scalars['String']['output'];
  readonly euroTeamLogo: Scalars['String']['output'];
  /** @deprecated logoAsset */
  readonly logo?: Maybe<Scalars['String']['output']>;
  readonly logoAsset: DomainImageAsset;
  readonly startDate?: Maybe<Scalars['String']['output']>;
  readonly tournamentName: Scalars['String']['output'];
  readonly usScore: Scalars['String']['output'];
  readonly usTeamLogo: Scalars['String']['output'];
  readonly winner?: Maybe<Scalars['String']['output']>;
  readonly year: Scalars['Int']['output'];
};

export type DomainStory_Type =
  | 'MOMENTS'
  | 'PLAYER_STORIES'
  | 'TOPIC_STORIES';

export type DomainScatterCoord = {
  readonly __typename: 'ScatterCoord';
  readonly player: DomainScatterPlayer;
  readonly result: DomainHoleScoreStatus;
  readonly shotCoords: DomainScatterShotData;
};

export type DomainScatterData = {
  readonly __typename: 'ScatterData';
  readonly courseId: Scalars['Int']['output'];
  readonly hole: Scalars['Int']['output'];
  readonly holePickle?: Maybe<DomainHolePickle>;
  readonly id: Scalars['ID']['output'];
  readonly rounds: ReadonlyArray<DomainScatterRound>;
  /**   Recommend combo of tournamentID, course and hole */
  readonly tournamentId: Scalars['String']['output'];
};

export type DomainScatterDataCompressed = {
  readonly __typename: 'ScatterDataCompressed';
  readonly courseId: Scalars['Int']['output'];
  readonly hole: Scalars['Int']['output'];
  readonly payload: Scalars['String']['output'];
  readonly tournamentId: Scalars['String']['output'];
};

export type DomainScatterPlayer = {
  readonly __typename: 'ScatterPlayer';
  readonly id: Scalars['String']['output'];
  readonly name: Scalars['String']['output'];
};

export type DomainScatterRound = {
  readonly __typename: 'ScatterRound';
  readonly display?: Maybe<Scalars['String']['output']>;
  readonly num: Scalars['Int']['output'];
  readonly pinCoords: DomainScatterShotData;
  readonly strokes: ReadonlyArray<DomainScatterStroke>;
};

export type DomainScatterShotCoordData = {
  readonly __typename: 'ScatterShotCoordData';
  readonly landscapeCoords?: Maybe<DomainScattterXyData>;
  readonly portraitCoords?: Maybe<DomainScattterXyData>;
};

export type DomainScatterShotData = {
  readonly __typename: 'ScatterShotData';
  readonly green: DomainScatterShotCoordData;
  readonly overview: DomainScatterShotCoordData;
};

export type DomainScatterStroke = {
  readonly __typename: 'ScatterStroke';
  readonly playerShots: ReadonlyArray<DomainScatterCoord>;
  readonly strokeNumber: Scalars['Int']['output'];
};

export type DomainScattterXyData = {
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

export type DomainSchedule = {
  readonly __typename: 'Schedule';
  readonly completed: ReadonlyArray<DomainScheduleMonth>;
  readonly filters?: Maybe<ReadonlyArray<DomainScheduleTournamentFilter>>;
  readonly seasonYear: Scalars['String']['output'];
  readonly tour: Scalars['String']['output'];
  readonly upcoming: ReadonlyArray<DomainScheduleMonth>;
};

export type DomainScheduleChampion = {
  readonly __typename: 'ScheduleChampion';
  readonly displayName: Scalars['String']['output'];
  readonly playerId: Scalars['String']['output'];
};

export type DomainScheduleDisplay =
  | 'SHOW'
  | 'SHOW_NO_LINK';

export type DomainScheduleMonth = {
  readonly __typename: 'ScheduleMonth';
  readonly month: Scalars['String']['output'];
  readonly monthSort?: Maybe<Scalars['Int']['output']>;
  readonly tournaments: ReadonlyArray<DomainScheduleTournament>;
  readonly year: Scalars['String']['output'];
};

export type DomainScheduleTournament = {
  readonly __typename: 'ScheduleTournament';
  readonly androidTicketmasterApiKey?: Maybe<Scalars['String']['output']>;
  readonly androidTicketmasterScheme?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use beautyImageAsset */
  readonly beautyImage?: Maybe<Scalars['String']['output']>;
  readonly beautyImageAsset?: Maybe<DomainImageAsset>;
  readonly champion: Scalars['String']['output'];
  readonly championEarnings?: Maybe<Scalars['String']['output']>;
  readonly championId: Scalars['String']['output'];
  readonly champions: ReadonlyArray<DomainScheduleChampion>;
  readonly city: Scalars['String']['output'];
  readonly country: Scalars['String']['output'];
  readonly countryCode: Scalars['String']['output'];
  readonly courseName: Scalars['String']['output'];
  readonly date: Scalars['String']['output'];
  readonly dateAccessibilityText: Scalars['String']['output'];
  readonly display: DomainScheduleDisplay;
  readonly id: Scalars['ID']['output'];
  readonly iosTicketmasterApiKey?: Maybe<Scalars['String']['output']>;
  readonly purse?: Maybe<Scalars['String']['output']>;
  readonly sequenceNumber: Scalars['Int']['output'];
  readonly sortDate?: Maybe<Scalars['String']['output']>;
  readonly startDate: Scalars['AWSTimestamp']['output'];
  readonly state: Scalars['String']['output'];
  readonly stateCode: Scalars['String']['output'];
  readonly status?: Maybe<DomainScheduleTournamentStatus>;
  /** @deprecated Name does not reflect intent, use ticketmasterAttractionId */
  readonly ticketmasterApiKey?: Maybe<Scalars['String']['output']>;
  readonly ticketmasterAttractionId?: Maybe<Scalars['String']['output']>;
  readonly ticketsEnabled: Scalars['Boolean']['output'];
  readonly ticketsURL?: Maybe<Scalars['String']['output']>;
  readonly tourStandingHeading?: Maybe<Scalars['String']['output']>;
  readonly tourStandingValue?: Maybe<Scalars['String']['output']>;
  readonly tournamentCategoryInfo?: Maybe<DomainTournamentCategoryInfo>;
  /** @deprecated use tournamentLogoAsset */
  readonly tournamentLogo: Scalars['String']['output'];
  readonly tournamentLogoAsset: DomainImageAsset;
  readonly tournamentName: Scalars['String']['output'];
  readonly tournamentSiteURL?: Maybe<Scalars['String']['output']>;
  readonly tournamentStatus: DomainTournamentStatus;
  readonly useTournamentSiteURL: Scalars['Boolean']['output'];
};

export type DomainScheduleTournamentFilter = {
  readonly __typename: 'ScheduleTournamentFilter';
  readonly name: Scalars['String']['output'];
  readonly type: DomainTournamentCategory;
};

export type DomainScheduleTournamentStatus = {
  readonly __typename: 'ScheduleTournamentStatus';
  readonly leaderboardTakeover: Scalars['Boolean']['output'];
  readonly roundDisplay: Scalars['String']['output'];
  readonly roundStatus: DomainRoundStatus;
  readonly roundStatusColor: DomainRoundStatusColor;
  readonly roundStatusDisplay: Scalars['String']['output'];
};

export type DomainScheduleUpcoming = {
  readonly __typename: 'ScheduleUpcoming';
  readonly filters?: Maybe<ReadonlyArray<DomainScheduleTournamentFilter>>;
  readonly id: Scalars['ID']['output'];
  readonly tournaments: ReadonlyArray<DomainScheduleTournament>;
};

export type DomainScheduleYear = {
  readonly __typename: 'ScheduleYear';
  readonly default: Scalars['Boolean']['output'];
  readonly displayValue: Scalars['String']['output'];
  readonly queryValue: Scalars['String']['output'];
};

export type DomainScheduleYears = {
  readonly __typename: 'ScheduleYears';
  readonly years: ReadonlyArray<DomainScheduleYear>;
};

export type DomainScorecardCompressedV3 = {
  readonly __typename: 'ScorecardCompressedV3';
  readonly id: Scalars['ID']['output'];
  readonly payload: Scalars['String']['output'];
};

export type DomainScorecardHeaderPlayer = {
  readonly __typename: 'ScorecardHeaderPlayer';
  readonly active: Scalars['Boolean']['output'];
  readonly finalRoundTotal: Scalars['String']['output'];
  readonly player: DomainPlayer;
  readonly position: Scalars['String']['output'];
  readonly roundDisplay: Scalars['String']['output'];
  readonly total: Scalars['String']['output'];
};

export type DomainScorecardRow = {
  readonly __typename: 'ScorecardRow';
  readonly holes: ReadonlyArray<DomainHoleScore>;
  readonly parTotal: Scalars['Int']['output'];
  readonly total: Scalars['String']['output'];
  readonly totalLabel: Scalars['String']['output'];
};

export type DomainScorecardStandings = {
  readonly __typename: 'ScorecardStandings';
  readonly logo?: Maybe<DomainImageAsset>;
  readonly logoDark?: Maybe<DomainImageAsset>;
  readonly points: Scalars['String']['output'];
};

export type DomainScorecardStatsComparison = {
  readonly __typename: 'ScorecardStatsComparison';
  readonly category: DomainPlayerComparisonCategory;
  readonly categoryPills: ReadonlyArray<DomainPlayerComparisonCategoryPill>;
  readonly disabled?: Maybe<Scalars['Boolean']['output']>;
  readonly noDataMessage: Scalars['String']['output'];
  readonly roundDisplay?: Maybe<Scalars['String']['output']>;
  readonly roundNum?: Maybe<Scalars['Int']['output']>;
  readonly table: DomainPlayerComparisonTable;
  readonly tournamentId: Scalars['ID']['output'];
};

export type DomainScorecardStatsItem = {
  readonly __typename: 'ScorecardStatsItem';
  readonly label: Scalars['String']['output'];
  readonly rank: Scalars['String']['output'];
  readonly statId: Scalars['String']['output'];
  readonly total: Scalars['String']['output'];
  readonly yearToDate: Scalars['String']['output'];
};

export type DomainScorecardTabFeature =
  | 'EQUIPMENT'
  | 'HIGHLIGHTS'
  | 'ODDS'
  | 'SCORECARD'
  | 'STATS';

export type DomainScorecardUpdateCompressedV3 = {
  readonly __typename: 'ScorecardUpdateCompressedV3';
  readonly id: Scalars['ID']['output'];
  readonly payload: Scalars['String']['output'];
};

export type DomainScorecardUpdateV3 = {
  readonly __typename: 'ScorecardUpdateV3';
  readonly backNine: Scalars['Boolean']['output'];
  readonly currentHole?: Maybe<Scalars['Int']['output']>;
  readonly currentHoleDisplay: Scalars['String']['output'];
  readonly currentRound: Scalars['Int']['output'];
  readonly currentShotDisplay?: Maybe<Scalars['String']['output']>;
  readonly drawerDisplayState: DomainDrawerDisplayState;
  readonly groupNumber: Scalars['Int']['output'];
  readonly hideSov: Scalars['Boolean']['output'];
  readonly id: Scalars['ID']['output'];
  readonly playByPlay?: Maybe<Scalars['String']['output']>;
  readonly playerId: Scalars['String']['output'];
  readonly playerState?: Maybe<DomainPlayerState>;
  readonly profileEnabled: Scalars['Boolean']['output'];
  readonly roundScores: ReadonlyArray<DomainRoundScore>;
  readonly teeTime?: Maybe<Scalars['AWSTimestamp']['output']>;
  readonly tournamentName: Scalars['String']['output'];
};

export type DomainScorecardV3 = {
  readonly __typename: 'ScorecardV3';
  readonly backNine: Scalars['Boolean']['output'];
  readonly currentHole?: Maybe<Scalars['Int']['output']>;
  readonly currentHoleDisplay: Scalars['String']['output'];
  readonly currentRound: Scalars['Int']['output'];
  readonly currentShotDisplay?: Maybe<Scalars['String']['output']>;
  readonly drawerDisplayState: DomainDrawerDisplayState;
  readonly groupNumber: Scalars['Int']['output'];
  readonly hideSov: Scalars['Boolean']['output'];
  readonly id: Scalars['ID']['output'];
  readonly playByPlay?: Maybe<Scalars['String']['output']>;
  readonly player: DomainPlayer;
  readonly playerState?: Maybe<DomainPlayerState>;
  readonly profileEnabled: Scalars['Boolean']['output'];
  readonly roundScores: ReadonlyArray<DomainRoundScore>;
  readonly standings?: Maybe<DomainScorecardStandings>;
  readonly teeTime?: Maybe<Scalars['AWSTimestamp']['output']>;
  readonly totalStrokes?: Maybe<Scalars['String']['output']>;
  readonly tournamentName: Scalars['String']['output'];
};

export type DomainScoringLevel =
  | 'BASIC'
  | 'STATS'
  | 'TOURCAST';

export type DomainScoringTendency =
  | 'ABOVE'
  | 'BELOW'
  | 'EVEN';

export type DomainSearchBarFeatures = {
  readonly __typename: 'SearchBarFeatures';
  readonly playerFeatures: DomainSearchBarPlayerFeatures;
};

export type DomainSearchBarPlayer = {
  readonly __typename: 'SearchBarPlayer';
  readonly displayName: Scalars['String']['output'];
  readonly playerId: Scalars['ID']['output'];
};

export type DomainSearchBarPlayerFeatures = {
  readonly __typename: 'SearchBarPlayerFeatures';
  readonly playerHeader: Scalars['String']['output'];
  readonly players: ReadonlyArray<DomainSearchBarPlayer>;
};

export type DomainSeasonDisplayHeader = {
  readonly __typename: 'SeasonDisplayHeader';
  readonly endYear?: Maybe<Scalars['Int']['output']>;
  readonly startYear: Scalars['Int']['output'];
};

export type DomainSeasonRecap = {
  readonly __typename: 'SeasonRecap';
  readonly displayMostRecentSeason?: Maybe<Scalars['String']['output']>;
  readonly items?: Maybe<ReadonlyArray<DomainSeasonRecapSeason>>;
  readonly mostRecentRecapYear?: Maybe<Scalars['Int']['output']>;
  readonly tourCode: DomainTourCode;
};

export type DomainSeasonRecapItems = {
  readonly __typename: 'SeasonRecapItems';
  readonly body: Scalars['String']['output'];
  readonly title: Scalars['String']['output'];
  readonly tournamentId: Scalars['String']['output'];
  readonly year: Scalars['Int']['output'];
};

export type DomainSeasonRecapSeason = {
  readonly __typename: 'SeasonRecapSeason';
  readonly displaySeason: Scalars['String']['output'];
  readonly items: ReadonlyArray<DomainSeasonRecapItems>;
  readonly year: Scalars['Int']['output'];
};

export type DomainSecondaryCupDetails = {
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

export type DomainSecondaryHero = {
  readonly __typename: 'SecondaryHero';
  readonly backgroundPhoto?: Maybe<Scalars['String']['output']>;
  readonly photoPosition?: Maybe<Scalars['String']['output']>;
  /** @deprecated use sponsorLogoAsset */
  readonly sponsorLogo?: Maybe<Scalars['String']['output']>;
  readonly sponsorLogoAsset: DomainImageAsset;
  readonly subheader?: Maybe<Scalars['String']['output']>;
  readonly title: Scalars['String']['output'];
};

export type DomainSegmentedCupRanking = {
  readonly __typename: 'SegmentedCupRanking';
  readonly defaultSelection: Scalars['Boolean']['output'];
  readonly rankings: ReadonlyArray<DomainCupRankingPlayer>;
  readonly title: Scalars['String']['output'];
};

export type DomainSegmentedCupRankingWrapper = {
  readonly __typename: 'SegmentedCupRankingWrapper';
  readonly segments?: Maybe<ReadonlyArray<Maybe<DomainSegmentedCupRanking>>>;
};

export type DomainShotCommentary = {
  readonly __typename: 'ShotCommentary';
  readonly commentary: ReadonlyArray<DomainShotCommentaryItem>;
  readonly playerId: Scalars['String']['output'];
  readonly round: Scalars['Int']['output'];
  readonly tournamentId: Scalars['String']['output'];
};

export type DomainShotCommentaryItem = {
  readonly __typename: 'ShotCommentaryItem';
  readonly active: Scalars['Boolean']['output'];
  readonly commentary: Scalars['String']['output'];
  readonly hole: Scalars['Int']['output'];
  readonly shot: Scalars['Int']['output'];
  readonly strokeId: Scalars['Int']['output'];
};

export type DomainShotCommentaryItemInput = {
  readonly active: Scalars['Boolean']['input'];
  readonly commentary: Scalars['String']['input'];
  readonly hole: Scalars['Int']['input'];
  readonly shot: Scalars['Int']['input'];
  readonly strokeId: Scalars['Int']['input'];
};

export type DomainShotDetailHole = {
  readonly __typename: 'ShotDetailHole';
  readonly displayHoleNumber: Scalars['String']['output'];
  readonly enhancedPickle?: Maybe<DomainHolePickle>;
  readonly fairwayCenter: DomainStrokeCoordinates;
  readonly green: Scalars['Boolean']['output'];
  readonly holeNumber: Scalars['Int']['output'];
  /** @deprecated Use holePickleBottomToTopAsset */
  readonly holePickleBottomToTop: Scalars['String']['output'];
  readonly holePickleBottomToTopAsset: DomainImageAsset;
  /** @deprecated Use holePickleGreenBottomToTopAsset */
  readonly holePickleGreenBottomToTop: Scalars['String']['output'];
  readonly holePickleGreenBottomToTopAsset: DomainImageAsset;
  /** @deprecated Use holePickleGreenLeftToRightAsset */
  readonly holePickleGreenLeftToRight: Scalars['String']['output'];
  readonly holePickleGreenLeftToRightAsset: DomainImageAsset;
  /** @deprecated Use holePickleLeftToRightAsset */
  readonly holePickleLeftToRight: Scalars['String']['output'];
  readonly holePickleLeftToRightAsset: DomainImageAsset;
  readonly par: Scalars['Int']['output'];
  readonly pinGreen: DomainPointOfInterestCoords;
  readonly pinOverview: DomainPointOfInterestCoords;
  readonly rank?: Maybe<Scalars['String']['output']>;
  readonly score: Scalars['String']['output'];
  readonly status: DomainHoleScoreStatus;
  readonly strokes: ReadonlyArray<DomainHoleStroke>;
  readonly teeGreen: DomainPointOfInterestCoords;
  readonly teeOverview: DomainPointOfInterestCoords;
  readonly yardage: Scalars['Int']['output'];
};

export type DomainShotDetailVideo = {
  readonly __typename: 'ShotDetailVideo';
  readonly duration: Scalars['Int']['output'];
  readonly holeNumber: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
  readonly pubDate: Scalars['AWSTimestamp']['output'];
  readonly shotNumber: Scalars['String']['output'];
  /** @deprecated Use thumbnailAsset */
  readonly thumbnail: Scalars['String']['output'];
  readonly thumbnailAsset: DomainImageAsset;
  readonly title: Scalars['String']['output'];
};

export type DomainShotDetails = {
  readonly __typename: 'ShotDetails';
  readonly defaultHolePickle: DomainHolePickleType;
  readonly displayType: DomainShotDetailsDisplayType;
  readonly groupPlayers: ReadonlyArray<Scalars['String']['output']>;
  readonly holes: ReadonlyArray<DomainShotDetailHole>;
  readonly id: Scalars['ID']['output'];
  readonly lineColor: Scalars['String']['output'];
  readonly message: Scalars['String']['output'];
  readonly playerId: Scalars['ID']['output'];
  readonly round: Scalars['Int']['output'];
  /** @deprecated Use tourcastVideos */
  readonly shotVideo?: Maybe<DomainVideo>;
  /** @deprecated Use tourcastVideos */
  readonly shotVideos?: Maybe<ReadonlyArray<DomainVideo>>;
  readonly textColor?: Maybe<Scalars['String']['output']>;
  readonly tournamentId: Scalars['ID']['output'];
};

export type DomainShotDetailsCompressed = {
  readonly __typename: 'ShotDetailsCompressed';
  readonly id: Scalars['ID']['output'];
  readonly payload: Scalars['String']['output'];
};

export type DomainShotDetailsCompressedV3 = {
  readonly __typename: 'ShotDetailsCompressedV3';
  readonly id: Scalars['ID']['output'];
  readonly payload: Scalars['String']['output'];
};

export type DomainShotDetailsDisplayType =
  | 'ALL'
  | 'NONE'
  | 'PLAY_BY_PLAY';

export type DomainShotLinkCoordWrapper = {
  readonly __typename: 'ShotLinkCoordWrapper';
  readonly bottomToTopCoords: DomainShotLinkCoordinates;
  readonly leftToRightCoords: DomainShotLinkCoordinates;
};

export type DomainShotLinkCoordinates = {
  readonly __typename: 'ShotLinkCoordinates';
  readonly fromCoords: DomainStrokeCoordinates;
  readonly toCoords: DomainStrokeCoordinates;
};

export type DomainSignatureEventsRankLogos = {
  readonly __typename: 'SignatureEventsRankLogos';
  readonly dark: Scalars['String']['output'];
  readonly darkAsset: DomainImageAsset;
  readonly light: Scalars['String']['output'];
  readonly lightAsset: DomainImageAsset;
  readonly tooltipText: Scalars['String']['output'];
  readonly tooltipTitle: Scalars['String']['output'];
};

export type DomainSignatureInfoLine = {
  readonly __typename: 'SignatureInfoLine';
  readonly text: Scalars['String']['output'];
};

export type DomainSignaturePlayer = {
  readonly __typename: 'SignaturePlayer';
  readonly countryFlag: Scalars['String']['output'];
  readonly countryName: Scalars['String']['output'];
  readonly displayName: Scalars['String']['output'];
  readonly movementAmount: Scalars['String']['output'];
  readonly movementDirection: DomainLeaderboardMovement;
  readonly playerId: Scalars['ID']['output'];
  readonly projected: Scalars['String']['output'];
  readonly projectedPoints: Scalars['String']['output'];
  readonly shortName: Scalars['String']['output'];
  readonly started: Scalars['String']['output'];
};

export type DomainSignaturePlayerRow = DomainSignatureInfoLine | DomainSignaturePlayer;

export type DomainSignatureStandings = {
  readonly __typename: 'SignatureStandings';
  readonly infoDescription: Scalars['String']['output'];
  readonly infoTitle: Scalars['String']['output'];
  readonly interim: DomainSignatureStandingsData;
  readonly linktoField: Scalars['Boolean']['output'];
  /** @deprecated Use mobileLogoAsset */
  readonly mobileLogo: Scalars['String']['output'];
  readonly mobileLogoAsset: DomainImageAsset;
  readonly noFieldText?: Maybe<Scalars['String']['output']>;
  readonly noFieldToolTipText?: Maybe<Scalars['String']['output']>;
  readonly noFieldToolTipTitle?: Maybe<Scalars['String']['output']>;
  readonly official: DomainSignatureStandingsData;
  readonly tournamentID: Scalars['ID']['output'];
  readonly tournamentInfo: DomainSignatureStandingsTournamentInfo;
};

export type DomainSignatureStandingsData = {
  readonly __typename: 'SignatureStandingsData';
  readonly description?: Maybe<Scalars['String']['output']>;
  readonly emptyTableDescription?: Maybe<Scalars['String']['output']>;
  readonly emptyTableTitle?: Maybe<Scalars['String']['output']>;
  readonly eyebrowText?: Maybe<Scalars['String']['output']>;
  readonly players: ReadonlyArray<DomainSignaturePlayerRow>;
  /** @deprecated use sponsorLogoAsset */
  readonly sponsorLogo?: Maybe<Scalars['String']['output']>;
  readonly sponsorLogoAsset: DomainImageAsset;
  readonly sponsorName?: Maybe<Scalars['String']['output']>;
  readonly title: Scalars['String']['output'];
  readonly tooltipText?: Maybe<Scalars['String']['output']>;
};

export type DomainSignatureStandingsTournamentInfo = {
  readonly __typename: 'SignatureStandingsTournamentInfo';
  readonly displayDate: Scalars['String']['output'];
  readonly roundStatus: DomainRoundStatus;
  readonly roundStatusColor: DomainRoundStatusColor;
  readonly roundStatusDisplay: Scalars['String']['output'];
  /** @deprecated use tournamentLogoAsset */
  readonly tournamentLogo: ReadonlyArray<Scalars['String']['output']>;
  readonly tournamentLogoAsset: ReadonlyArray<DomainImageAsset>;
  readonly tournamentName: Scalars['String']['output'];
  readonly tournamentStatus: DomainTournamentStatus;
};

export type DomainSimpleScore = {
  readonly __typename: 'SimpleScore';
  readonly holeNumber: Scalars['Int']['output'];
  readonly isTotal?: Maybe<Scalars['Boolean']['output']>;
  readonly score: Scalars['String']['output'];
  readonly status: DomainHoleScoreStatus;
};

export type DomainSocialType =
  | 'facebook'
  | 'instagram'
  | 'twitter'
  | 'youtube';

export type DomainSponsor = {
  readonly __typename: 'Sponsor';
  readonly accessibilityText: Scalars['String']['output'];
  /** @deprecated use logoAsset */
  readonly logo?: Maybe<Scalars['String']['output']>;
  readonly logoAsset: DomainImageAsset;
  /** @deprecated use logoDarkAsset */
  readonly logoDark?: Maybe<Scalars['String']['output']>;
  readonly logoDarkAsset: DomainImageAsset;
  /** @deprecated use logoTabletAsset */
  readonly logoTablet?: Maybe<Scalars['String']['output']>;
  readonly logoTabletAsset: DomainImageAsset;
  /** @deprecated use logoTabletDarkAsset */
  readonly logoTabletDark?: Maybe<Scalars['String']['output']>;
  readonly logoTabletDarkAsset: DomainImageAsset;
  readonly sponsor: DomainPlayerSponsorBrand;
};

export type DomainSponsorImage = {
  readonly __typename: 'SponsorImage';
  readonly accessibilityText: Scalars['String']['output'];
  readonly link?: Maybe<Scalars['String']['output']>;
  /** @deprecated use logoAsset */
  readonly logo: Scalars['String']['output'];
  readonly logoAsset: DomainImageAsset;
  /** @deprecated use logoDarkAsset */
  readonly logoDark: Scalars['String']['output'];
  readonly logoDarkAsset: DomainImageAsset;
};

export type DomainSponsoredArticles = {
  readonly __typename: 'SponsoredArticles';
  readonly articleSponsor: DomainArticleSponsor;
  readonly articles: ReadonlyArray<DomainNewsArticle>;
  readonly cta?: Maybe<DomainCallToAction>;
  readonly moreNewsTitle?: Maybe<Scalars['String']['output']>;
};

export type DomainStandardCupRanking = {
  readonly __typename: 'StandardCupRanking';
  readonly rankings: ReadonlyArray<DomainCupRankingPlayer>;
};

export type DomainStandardWeatherTemp = {
  readonly __typename: 'StandardWeatherTemp';
  readonly tempC: Scalars['String']['output'];
  readonly tempF: Scalars['String']['output'];
};

export type DomainStandingStat = {
  readonly __typename: 'StandingStat';
  readonly statName: Scalars['String']['output'];
  readonly statValue: Scalars['String']['output'];
};

export type DomainStatCategory =
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

export type DomainStatCategoryConfig = {
  readonly __typename: 'StatCategoryConfig';
  readonly category: Scalars['String']['output'];
  readonly categoryType?: Maybe<DomainStatCategoryConfigType>;
  readonly displayName: Scalars['String']['output'];
  readonly subCategories: ReadonlyArray<DomainStatSubCategory>;
};

export type DomainStatCategoryConfigType =
  | 'ALL_TIME_RECORDS'
  | 'TRADITIONAL_STAT';

export type DomainStatCategoryStat = {
  readonly __typename: 'StatCategoryStat';
  readonly statId: Scalars['String']['output'];
  readonly statTitle: Scalars['String']['output'];
};

export type DomainStatColor =
  | 'BLACK'
  | 'GRAY'
  | 'GREEN'
  | 'RED';

export type DomainStatDetailEventQuery = {
  readonly queryType: DomainStatDetailQueryType;
  readonly tournamentId: Scalars['String']['input'];
};

export type DomainStatDetailQueryType =
  | 'EVENT_ONLY'
  | 'THROUGH_EVENT';

export type DomainStatDetailTourAvg = {
  readonly __typename: 'StatDetailTourAvg';
  readonly displayName: Scalars['String']['output'];
  readonly value: Scalars['String']['output'];
};

export type DomainStatDetails = {
  readonly __typename: 'StatDetails';
  readonly cutOffButtonText?: Maybe<Scalars['String']['output']>;
  readonly cutOffNumber?: Maybe<Scalars['Int']['output']>;
  readonly displaySeason: Scalars['String']['output'];
  readonly lastProcessed: Scalars['String']['output'];
  readonly rows: ReadonlyArray<DomainStatDetailsRow>;
  /** @deprecated use sponsorLogoAsset */
  readonly sponsorLogo?: Maybe<Scalars['String']['output']>;
  readonly sponsorLogoAsset: DomainImageAsset;
  readonly statCategories: ReadonlyArray<DomainStatCategoryConfig>;
  readonly statDescription: Scalars['String']['output'];
  readonly statHeaders: ReadonlyArray<Scalars['String']['output']>;
  readonly statId: Scalars['String']['output'];
  readonly statTitle: Scalars['String']['output'];
  readonly statType: DomainCategoryStatType;
  readonly tourAvg?: Maybe<Scalars['String']['output']>;
  readonly tourCode: DomainTourCode;
  readonly tournamentPills: ReadonlyArray<DomainStatTournamentPill>;
  readonly year: Scalars['Int']['output'];
  readonly yearPills: ReadonlyArray<DomainStatYearPills>;
};

export type DomainStatDetailsPlayer = {
  readonly __typename: 'StatDetailsPlayer';
  readonly country: Scalars['String']['output'];
  readonly countryFlag: Scalars['String']['output'];
  readonly filter?: Maybe<Scalars['String']['output']>;
  readonly playerId: Scalars['String']['output'];
  readonly playerName: Scalars['String']['output'];
  readonly rank: Scalars['Int']['output'];
  readonly rankChangeTendency?: Maybe<DomainStatRankMovement>;
  readonly rankDiff: Scalars['String']['output'];
  readonly rankLogoDark?: Maybe<Scalars['String']['output']>;
  readonly rankLogoLight?: Maybe<Scalars['String']['output']>;
  readonly stats: ReadonlyArray<DomainCategoryPlayerStat>;
};

export type DomainStatDetailsRow = DomainStatDetailTourAvg | DomainStatDetailsPlayer;

export type DomainStatLeaderCategory = {
  readonly __typename: 'StatLeaderCategory';
  readonly categoryHeader: Scalars['String']['output'];
  readonly displayYear: Scalars['String']['output'];
  readonly otherCategories: ReadonlyArray<DomainStatCategoryConfig>;
  readonly statCategory: DomainStatCategory;
  readonly subCategories: ReadonlyArray<DomainStatLeaderSubCategory>;
  readonly tourCode: DomainTourCode;
  readonly year: Scalars['Int']['output'];
};

export type DomainStatLeaderSubCategory = {
  readonly __typename: 'StatLeaderSubCategory';
  readonly stats: ReadonlyArray<DomainLeaderStat>;
  readonly subCatPromo?: Maybe<DomainStatLeaderSubCategoryPromo>;
  readonly subCategoryName: Scalars['String']['output'];
};

export type DomainStatLeaderSubCategoryPromo = {
  readonly __typename: 'StatLeaderSubCategoryPromo';
  readonly image: Scalars['String']['output'];
  readonly link: Scalars['String']['output'];
  readonly title: Scalars['String']['output'];
};

export type DomainStatRankMovement =
  | 'CONSTANT'
  | 'DOWN'
  | 'UP';

export type DomainStatSubCategory = {
  readonly __typename: 'StatSubCategory';
  readonly displayName?: Maybe<Scalars['String']['output']>;
  readonly stats: ReadonlyArray<DomainStatCategoryStat>;
};

export type DomainStatTournamentPill = {
  readonly __typename: 'StatTournamentPill';
  readonly displayName: Scalars['String']['output'];
  readonly endDateDisplay?: Maybe<Scalars['String']['output']>;
  readonly tournamentId: Scalars['String']['output'];
};

export type DomainStatWeekPill = {
  readonly __typename: 'StatWeekPill';
  readonly displayWeek: Scalars['String']['output'];
  readonly week: Scalars['Int']['output'];
};

export type DomainStatYearPills = {
  readonly __typename: 'StatYearPills';
  readonly displaySeason: Scalars['String']['output'];
  readonly year: Scalars['Int']['output'];
};

export type DomainStats = {
  readonly __typename: 'Stats';
  readonly id: Scalars['ID']['output'];
  readonly statAvg?: Maybe<Scalars['String']['output']>;
  readonly statName: Scalars['String']['output'];
  readonly statRank: Scalars['Int']['output'];
  readonly statValue: Scalars['String']['output'];
};

export type DomainStreamUrls = {
  readonly __typename: 'StreamUrls';
  readonly applePodcast: Scalars['String']['output'];
  readonly googlePodcast: Scalars['String']['output'];
  readonly spotify: Scalars['String']['output'];
  readonly stitcher: Scalars['String']['output'];
  readonly tuneIn: Scalars['String']['output'];
};

export type DomainStrokeCoordinates = {
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

export type DomainStrokesGainedStats = {
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

export type DomainStyle = {
  readonly __typename: 'Style';
  readonly key: Scalars['String']['output'];
  readonly value: Scalars['String']['output'];
};

export type DomainSubMarket = {
  readonly __typename: 'SubMarket';
  readonly header: Scalars['String']['output'];
  readonly id: Scalars['String']['output'];
  readonly options: ReadonlyArray<DomainOddsOptionV2>;
};

export type DomainSubscription = {
  readonly __typename: 'Subscription';
  readonly onUpdateBubble?: Maybe<DomainBubbleWatch>;
  readonly onUpdateBubbleWatch?: Maybe<DomainTourCupRankingEvent>;
  readonly onUpdateCourseStats?: Maybe<DomainTournamentHoleStats>;
  readonly onUpdateCoverage?: Maybe<DomainBroadcastCoverage>;
  readonly onUpdateCupOverviewLeaderboard?: Maybe<DomainCupTournamentStatus>;
  readonly onUpdateCupRoundLeaderboard?: Maybe<DomainCupTournamentLeaderboard>;
  readonly onUpdateCupRoundLeaderboardCompressed?: Maybe<DomainCupTournamentLeaderboardCompressed>;
  readonly onUpdateCupScorecard?: Maybe<DomainCupScorecard>;
  readonly onUpdateCurrentLeadersCompressed?: Maybe<DomainCurrentLeadersCompressed>;
  readonly onUpdateGroupLocations?: Maybe<DomainGroupLocationCourse>;
  readonly onUpdateGroupLocationsEnhanced?: Maybe<DomainGroupLocationCourse>;
  readonly onUpdateHoleDetails?: Maybe<DomainHoleDetail>;
  readonly onUpdateLeaderboardCompressedV2?: Maybe<DomainLeaderboardCompressedV2>;
  readonly onUpdateLeaderboardCompressedV3?: Maybe<DomainLeaderboardUpdateCompressedV3>;
  readonly onUpdateLeaderboardStrokes?: Maybe<DomainLeaderboardStrokes>;
  readonly onUpdateLeaderboardStrokesCompresssed?: Maybe<DomainLeaderboardStrokesCompressed>;
  readonly onUpdateLeaderboardV2?: Maybe<DomainLeaderboardV2>;
  readonly onUpdateMatchOutcomeIq?: Maybe<DomainRyderCupMatchOutcomeIq>;
  readonly onUpdateMatchPlayLeaderboard?: Maybe<DomainMpLeaderboard>;
  readonly onUpdateMatchPlayLeaderboardCompressed?: Maybe<DomainLeaderboardCompressed>;
  readonly onUpdateMatchPlayPlayoffScorecard?: Maybe<DomainMpPlayoffScorecard>;
  readonly onUpdateMatchPlayScorecard?: Maybe<DomainMpScorecard>;
  readonly onUpdateMatchPlayTeeTimes?: Maybe<DomainMpTeeTimes>;
  readonly onUpdateMatchPlayTeeTimesCompressed?: Maybe<DomainTeeTimesCompressed>;
  readonly onUpdateOddsToWinMarket?: Maybe<DomainOddsToWinMarket>;
  readonly onUpdateOddsToWinMarketCompressed?: Maybe<DomainOddsToWinMarketCompressed>;
  readonly onUpdatePlayerHub?: Maybe<DomainPlayerHubPlayerCompressed>;
  readonly onUpdatePlayerTournamentStatus?: Maybe<DomainPlayerTournamentStatus>;
  readonly onUpdatePlayoffScorecard?: Maybe<DomainPlayoffScorecard>;
  /** @deprecated Use onUpdatePlayoffScorecardV3. This sub does not work */
  readonly onUpdatePlayoffScorecardV2?: Maybe<ReadonlyArray<Maybe<DomainPlayoffScorecard>>>;
  readonly onUpdatePlayoffScorecardV3?: Maybe<DomainTournamentPlayoffScorecards>;
  readonly onUpdatePlayoffShotDetails?: Maybe<DomainGroupShotDetails>;
  readonly onUpdatePlayoffShotDetailsCompressed?: Maybe<DomainGroupShotDetailsCompressed>;
  readonly onUpdateScorecardCompressedV3?: Maybe<DomainScorecardUpdateCompressedV3>;
  readonly onUpdateScorecardStatsCompressedV3?: Maybe<DomainPlayerScorecardStatsCompressed>;
  readonly onUpdateScorecardV2?: Maybe<DomainLeaderboardDrawerV2>;
  readonly onUpdateShotCommentary?: Maybe<DomainShotCommentary>;
  /**    V2 version that only sends updated holes */
  readonly onUpdateShotDetailsCompressedV3?: Maybe<DomainShotDetailsCompressedV3>;
  readonly onUpdateTGLMatch?: Maybe<DomainTglMatch>;
  readonly onUpdateTSPPlayoffShotDetails?: Maybe<DomainTeamShotDetails>;
  readonly onUpdateTSPPlayoffShotDetailsCompressed?: Maybe<DomainTeamShotDetailsCompressed>;
  readonly onUpdateTeamPlayLeaderboard?: Maybe<DomainTspLeaderboard>;
  readonly onUpdateTeamPlayLeaderboardCompressed?: Maybe<DomainLeaderboardCompressed>;
  readonly onUpdateTeamPlayScorecard?: Maybe<DomainTspScorecard>;
  readonly onUpdateTeamPlayScorecardRounds?: Maybe<DomainTspScorecardRounds>;
  readonly onUpdateTeamStrokePlayTeeTimes?: Maybe<DomainTspTeeTimes>;
  readonly onUpdateTeamStrokePlayTeeTimesCompressed?: Maybe<DomainTeeTimesCompressed>;
  readonly onUpdateTeeTimes?: Maybe<DomainTeeTimes>;
  readonly onUpdateTeeTimesCompressed?: Maybe<DomainTeeTimesCompressed>;
  readonly onUpdateTeeTimesCompressedV2?: Maybe<DomainTeeTimesCompressed>;
  readonly onUpdateTeeTimesV2?: Maybe<DomainTeeTimesV2>;
  readonly onUpdateTourCup?: Maybe<DomainTourCupRankingEvent>;
  readonly onUpdateTourcastTable?: Maybe<DomainTourcastTable>;
  readonly onUpdateTournament?: Maybe<DomainTournament>;
  readonly onUpdateTournamentGroupLocations?: Maybe<DomainTournamentGroupLocation>;
  readonly onUpdateUpcomingSchedule?: Maybe<DomainScheduleUpcoming>;
};


export type DomainSubscriptionOnUpdateBubbleArgs = {
  bubbleId: Scalars['ID']['input'];
};


export type DomainSubscriptionOnUpdateBubbleWatchArgs = {
  id: Scalars['ID']['input'];
};


export type DomainSubscriptionOnUpdateCourseStatsArgs = {
  tournamentId: Scalars['ID']['input'];
};


export type DomainSubscriptionOnUpdateCoverageArgs = {
  id: Scalars['ID']['input'];
};


export type DomainSubscriptionOnUpdateCupOverviewLeaderboardArgs = {
  id: Scalars['ID']['input'];
};


export type DomainSubscriptionOnUpdateCupRoundLeaderboardArgs = {
  id: Scalars['ID']['input'];
};


export type DomainSubscriptionOnUpdateCupRoundLeaderboardCompressedArgs = {
  id: Scalars['ID']['input'];
};


export type DomainSubscriptionOnUpdateCupScorecardArgs = {
  id: Scalars['ID']['input'];
};


export type DomainSubscriptionOnUpdateCurrentLeadersCompressedArgs = {
  id: Scalars['ID']['input'];
};


export type DomainSubscriptionOnUpdateGroupLocationsArgs = {
  courseId: Scalars['String']['input'];
  round: Scalars['Int']['input'];
  tournamentId: Scalars['ID']['input'];
};


export type DomainSubscriptionOnUpdateGroupLocationsEnhancedArgs = {
  courseId: Scalars['String']['input'];
  round: Scalars['Int']['input'];
  tournamentId: Scalars['ID']['input'];
};


export type DomainSubscriptionOnUpdateHoleDetailsArgs = {
  id: Scalars['ID']['input'];
};


export type DomainSubscriptionOnUpdateLeaderboardCompressedV2Args = {
  id: Scalars['ID']['input'];
};


export type DomainSubscriptionOnUpdateLeaderboardCompressedV3Args = {
  id: Scalars['ID']['input'];
};


export type DomainSubscriptionOnUpdateLeaderboardStrokesArgs = {
  id: Scalars['ID']['input'];
};


export type DomainSubscriptionOnUpdateLeaderboardStrokesCompresssedArgs = {
  id: Scalars['ID']['input'];
};


export type DomainSubscriptionOnUpdateLeaderboardV2Args = {
  id: Scalars['ID']['input'];
};


export type DomainSubscriptionOnUpdateMatchOutcomeIqArgs = {
  id: Scalars['ID']['input'];
};


export type DomainSubscriptionOnUpdateMatchPlayLeaderboardArgs = {
  id: Scalars['ID']['input'];
};


export type DomainSubscriptionOnUpdateMatchPlayLeaderboardCompressedArgs = {
  id: Scalars['ID']['input'];
};


export type DomainSubscriptionOnUpdateMatchPlayPlayoffScorecardArgs = {
  id: Scalars['ID']['input'];
};


export type DomainSubscriptionOnUpdateMatchPlayScorecardArgs = {
  id: Scalars['ID']['input'];
};


export type DomainSubscriptionOnUpdateMatchPlayTeeTimesArgs = {
  id: Scalars['ID']['input'];
};


export type DomainSubscriptionOnUpdateMatchPlayTeeTimesCompressedArgs = {
  id: Scalars['ID']['input'];
};


export type DomainSubscriptionOnUpdateOddsToWinMarketArgs = {
  oddsToWinId: Scalars['ID']['input'];
};


export type DomainSubscriptionOnUpdateOddsToWinMarketCompressedArgs = {
  id: Scalars['ID']['input'];
};


export type DomainSubscriptionOnUpdatePlayerHubArgs = {
  id: Scalars['ID']['input'];
};


export type DomainSubscriptionOnUpdatePlayerTournamentStatusArgs = {
  playerId: Scalars['ID']['input'];
};


export type DomainSubscriptionOnUpdatePlayoffScorecardArgs = {
  id: Scalars['ID']['input'];
};


export type DomainSubscriptionOnUpdatePlayoffScorecardV2Args = {
  id: Scalars['ID']['input'];
};


export type DomainSubscriptionOnUpdatePlayoffScorecardV3Args = {
  tournamentId: Scalars['ID']['input'];
};


export type DomainSubscriptionOnUpdatePlayoffShotDetailsArgs = {
  id: Scalars['ID']['input'];
};


export type DomainSubscriptionOnUpdatePlayoffShotDetailsCompressedArgs = {
  id: Scalars['ID']['input'];
};


export type DomainSubscriptionOnUpdateScorecardCompressedV3Args = {
  id: Scalars['ID']['input'];
};


export type DomainSubscriptionOnUpdateScorecardStatsCompressedV3Args = {
  id: Scalars['ID']['input'];
};


export type DomainSubscriptionOnUpdateScorecardV2Args = {
  id: Scalars['ID']['input'];
};


export type DomainSubscriptionOnUpdateShotCommentaryArgs = {
  playerId: Scalars['String']['input'];
  round: Scalars['Int']['input'];
  tournamentId: Scalars['String']['input'];
};


export type DomainSubscriptionOnUpdateShotDetailsCompressedV3Args = {
  id: Scalars['ID']['input'];
};


export type DomainSubscriptionOnUpdateTglMatchArgs = {
  id: Scalars['ID']['input'];
};


export type DomainSubscriptionOnUpdateTspPlayoffShotDetailsArgs = {
  id: Scalars['ID']['input'];
};


export type DomainSubscriptionOnUpdateTspPlayoffShotDetailsCompressedArgs = {
  id: Scalars['ID']['input'];
};


export type DomainSubscriptionOnUpdateTeamPlayLeaderboardArgs = {
  id: Scalars['ID']['input'];
};


export type DomainSubscriptionOnUpdateTeamPlayLeaderboardCompressedArgs = {
  id: Scalars['ID']['input'];
};


export type DomainSubscriptionOnUpdateTeamPlayScorecardArgs = {
  id: Scalars['ID']['input'];
};


export type DomainSubscriptionOnUpdateTeamPlayScorecardRoundsArgs = {
  id: Scalars['ID']['input'];
};


export type DomainSubscriptionOnUpdateTeamStrokePlayTeeTimesArgs = {
  id: Scalars['ID']['input'];
};


export type DomainSubscriptionOnUpdateTeamStrokePlayTeeTimesCompressedArgs = {
  id: Scalars['ID']['input'];
};


export type DomainSubscriptionOnUpdateTeeTimesArgs = {
  id: Scalars['ID']['input'];
};


export type DomainSubscriptionOnUpdateTeeTimesCompressedArgs = {
  id: Scalars['ID']['input'];
};


export type DomainSubscriptionOnUpdateTeeTimesCompressedV2Args = {
  id: Scalars['ID']['input'];
};


export type DomainSubscriptionOnUpdateTeeTimesV2Args = {
  id: Scalars['ID']['input'];
};


export type DomainSubscriptionOnUpdateTourCupArgs = {
  id: Scalars['ID']['input'];
};


export type DomainSubscriptionOnUpdateTourcastTableArgs = {
  tournamentId: Scalars['ID']['input'];
};


export type DomainSubscriptionOnUpdateTournamentArgs = {
  id: Scalars['ID']['input'];
};


export type DomainSubscriptionOnUpdateTournamentGroupLocationsArgs = {
  round: Scalars['Int']['input'];
  tournamentId: Scalars['ID']['input'];
};


export type DomainSubscriptionOnUpdateUpcomingScheduleArgs = {
  id: Scalars['ID']['input'];
};

export type DomainSummaryRow = {
  readonly __typename: 'SummaryRow';
  readonly averagePaceOfPlay?: Maybe<Scalars['String']['output']>;
  readonly birdies?: Maybe<Scalars['Int']['output']>;
  readonly bogeys?: Maybe<Scalars['Int']['output']>;
  readonly doubleBogey?: Maybe<Scalars['Int']['output']>;
  readonly eagles?: Maybe<Scalars['Int']['output']>;
  readonly par: Scalars['Int']['output'];
  readonly pars?: Maybe<Scalars['Int']['output']>;
  readonly rowType: DomainSummaryRowType;
  readonly scoringAverage: Scalars['String']['output'];
  readonly scoringAverageDiff: Scalars['String']['output'];
  readonly scoringDiffTendency: DomainScoringTendency;
  readonly yardage: Scalars['Int']['output'];
};

export type DomainSummaryRowType =
  | 'IN'
  | 'OUT'
  | 'TOTAL';

export type DomainTcWinner = DomainMpLeaderboardPlayer | DomainTspWinner | DomainWinner;

export type DomainTglBoxScore = {
  readonly __typename: 'TGLBoxScore';
  readonly matchId: Scalars['String']['output'];
};

export type DomainTglBoxScoreFragment = {
  readonly __typename: 'TGLBoxScoreFragment';
  readonly matchIds?: Maybe<ReadonlyArray<Scalars['String']['output']>>;
};

export type DomainTglMatch = {
  readonly __typename: 'TGLMatch';
  readonly currentHole?: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly isOvertime: Scalars['Boolean']['output'];
  readonly matchDate: Scalars['AWSTimestamp']['output'];
  readonly matchStatus: DomainTglMatchStatus;
  readonly matchStatusColor: Scalars['String']['output'];
  readonly matchStatusDisplay: Scalars['String']['output'];
  readonly matchUrl?: Maybe<Scalars['String']['output']>;
  readonly subscriptionsActive: Scalars['Boolean']['output'];
  readonly teams: ReadonlyArray<DomainTglTeam>;
  readonly tglLogo?: Maybe<Scalars['String']['output']>;
  readonly tglLogoDark?: Maybe<Scalars['String']['output']>;
  readonly tglLogoFallback: Scalars['String']['output'];
  readonly watchLabel?: Maybe<Scalars['String']['output']>;
  readonly watchLogo?: Maybe<Scalars['String']['output']>;
  readonly watchUrl?: Maybe<Scalars['String']['output']>;
};

/**  ## TGL Types */
export type DomainTglMatchStatus =
  | 'COMPLETE'
  | 'IN_PROGRESS'
  | 'UNKNOWN'
  | 'UPCOMING';

export type DomainTglPlayer = {
  readonly __typename: 'TGLPlayer';
  readonly displayName: Scalars['String']['output'];
  readonly playerHeadshot: Scalars['String']['output'];
  readonly playerId: Scalars['ID']['output'];
};

export type DomainTglSchedule = {
  readonly __typename: 'TGLSchedule';
  readonly matches: ReadonlyArray<DomainTglMatch>;
  readonly season: Scalars['Int']['output'];
};

export type DomainTglTeam = {
  readonly __typename: 'TGLTeam';
  readonly losses: Scalars['Int']['output'];
  readonly matchWinner?: Maybe<Scalars['Boolean']['output']>;
  readonly players: ReadonlyArray<DomainTglPlayer>;
  readonly score: Scalars['String']['output'];
  readonly teamLogo: Scalars['String']['output'];
  readonly teamName: Scalars['String']['output'];
  readonly wins: Scalars['Int']['output'];
};

export type DomainTspLeaderboard = {
  readonly __typename: 'TSPLeaderboard';
  readonly currentRound: Scalars['Int']['output'];
  readonly currentRoundScoringFormat?: Maybe<Scalars['String']['output']>;
  readonly disableOdds: Scalars['Boolean']['output'];
  readonly formatType: DomainFormatType;
  readonly id: Scalars['ID']['output'];
  readonly infoUrl: Scalars['String']['output'];
  readonly informationSections: ReadonlyArray<DomainInformationSection>;
  readonly leaderboard: ReadonlyArray<DomainTspLeaderboardRow>;
  readonly messages: ReadonlyArray<DomainLeaderboardMessage>;
  readonly playoff?: Maybe<DomainTspPlayoff>;
  readonly rounds: ReadonlyArray<DomainTspLeaderboardRound>;
  readonly scorecardEnabled: Scalars['Boolean']['output'];
  readonly shortTimezone: Scalars['String']['output'];
  readonly timezone?: Maybe<Scalars['String']['output']>;
  readonly tourcastURI?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastUrl?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastUrlWeb?: Maybe<Scalars['String']['output']>;
  readonly tournamentStatus: DomainTournamentStatus;
  readonly winner?: Maybe<DomainTspWinner>;
};

export type DomainTspLeaderboardRound = {
  readonly __typename: 'TSPLeaderboardRound';
  readonly round: Scalars['Int']['output'];
  readonly roundHeader: Scalars['String']['output'];
  readonly roundHeaderShort: Scalars['String']['output'];
  readonly roundStatusSubHead: Scalars['String']['output'];
  readonly roundTypeSubHead: Scalars['String']['output'];
};

export type DomainTspLeaderboardRow = DomainInformationRow | DomainTspTeamRow;

export type DomainTspScorecard = {
  readonly __typename: 'TSPScorecard';
  readonly backNine: Scalars['Boolean']['output'];
  readonly courseId?: Maybe<Scalars['Int']['output']>;
  readonly currentHole?: Maybe<Scalars['Int']['output']>;
  readonly currentRound: Scalars['Int']['output'];
  readonly currentRoundTotal: Scalars['String']['output'];
  readonly firstNine?: Maybe<DomainTeamPlayScoreCardRow>;
  readonly groupNumber: Scalars['Int']['output'];
  readonly groupState: DomainPlayerState;
  readonly id: Scalars['ID']['output'];
  readonly locationDetail: Scalars['String']['output'];
  readonly parTotal: Scalars['Int']['output'];
  readonly players: ReadonlyArray<DomainTspScPlayer>;
  readonly position: Scalars['String']['output'];
  readonly roundDisplay: Scalars['String']['output'];
  readonly roundFormat: DomainRoundFormat;
  readonly roundNumber: Scalars['Int']['output'];
  readonly scorecardTitle: Scalars['String']['output'];
  readonly secondNine?: Maybe<DomainTeamPlayScoreCardRow>;
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

export type DomainTspScorecardRounds = {
  readonly __typename: 'TSPScorecardRounds';
  readonly id: Scalars['ID']['output'];
  readonly scorecards: ReadonlyArray<DomainTspScorecard>;
};

export type DomainTspTeeTimeGroup = {
  readonly __typename: 'TSPTeeTimeGroup';
  readonly courseId?: Maybe<Scalars['String']['output']>;
  readonly groupNumber: Scalars['Int']['output'];
  readonly groupState: DomainPlayerState;
  readonly groupStatus: Scalars['String']['output'];
  readonly holeLocation?: Maybe<Scalars['String']['output']>;
  readonly startTee: Scalars['Int']['output'];
  readonly teams: ReadonlyArray<DomainTspTeeTimeTeam>;
  readonly teeTime: Scalars['AWSTimestamp']['output'];
};

export type DomainTspTeeTimeHeaders = {
  readonly __typename: 'TSPTeeTimeHeaders';
  readonly status: Scalars['String']['output'];
  readonly team: Scalars['String']['output'];
  readonly tee: Scalars['String']['output'];
  readonly time: Scalars['String']['output'];
};

export type DomainTspTeeTimePlayer = {
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

export type DomainTspTeeTimeRound = {
  readonly __typename: 'TSPTeeTimeRound';
  readonly groups: ReadonlyArray<DomainTspTeeTimeGroup>;
  readonly roundFormat: Scalars['String']['output'];
  readonly roundNumber: Scalars['Int']['output'];
};

export type DomainTspTeeTimeTeam = {
  readonly __typename: 'TSPTeeTimeTeam';
  readonly players: ReadonlyArray<DomainTspTeeTimePlayer>;
  readonly teamId: Scalars['ID']['output'];
};

export type DomainTspTeeTimes = {
  readonly __typename: 'TSPTeeTimes';
  readonly courseFilters: ReadonlyArray<DomainCourseFilter>;
  readonly courses: ReadonlyArray<DomainCourse>;
  readonly defaultRound: Scalars['Int']['output'];
  readonly drawersEnabled: Scalars['Boolean']['output'];
  readonly id: Scalars['ID']['output'];
  readonly informationSections: ReadonlyArray<DomainInformationSection>;
  readonly roundFilters: ReadonlyArray<DomainRoundFilter>;
  readonly rounds: ReadonlyArray<DomainTspTeeTimeRound>;
  readonly teeTimeHeaders: DomainTspTeeTimeHeaders;
  readonly timezone: Scalars['String']['output'];
};

export type DomainTableBody = {
  readonly __typename: 'TableBody';
  readonly rows: ReadonlyArray<DomainTableRows>;
};

export type DomainTableColumn = {
  readonly __typename: 'TableColumn';
  readonly class?: Maybe<Scalars['String']['output']>;
  readonly colspan?: Maybe<Scalars['String']['output']>;
  readonly height?: Maybe<Scalars['String']['output']>;
  readonly rowspan?: Maybe<Scalars['String']['output']>;
  readonly valign?: Maybe<Scalars['String']['output']>;
  readonly value?: Maybe<ReadonlyArray<DomainTableColumnValue>>;
  readonly width?: Maybe<Scalars['String']['output']>;
};

export type DomainTableColumnSegment = {
  readonly __typename: 'TableColumnSegment';
  readonly data?: Maybe<Scalars['String']['output']>;
  readonly format?: Maybe<DomainNewsArticleFormat>;
  readonly oddsSwing?: Maybe<DomainOddsSwing>;
  readonly type: Scalars['String']['output'];
  readonly value?: Maybe<Scalars['String']['output']>;
};

export type DomainTableColumnValue = DomainTableColumnSegment | DomainUnorderedListNode;

export type DomainTableDataRow = {
  readonly __typename: 'TableDataRow';
  readonly class?: Maybe<Scalars['String']['output']>;
  readonly columns?: Maybe<ReadonlyArray<Maybe<DomainTableColumn>>>;
};

export type DomainTableFragment = {
  readonly __typename: 'TableFragment';
  readonly border?: Maybe<Scalars['String']['output']>;
  readonly cellpadding?: Maybe<Scalars['String']['output']>;
  readonly cellspacing?: Maybe<Scalars['String']['output']>;
  readonly class?: Maybe<Scalars['String']['output']>;
  readonly id?: Maybe<Scalars['String']['output']>;
  readonly table?: Maybe<DomainTableBody>;
  readonly width?: Maybe<Scalars['String']['output']>;
};

export type DomainTableHeaderRow = {
  readonly __typename: 'TableHeaderRow';
  readonly class?: Maybe<Scalars['String']['output']>;
  readonly columns?: Maybe<ReadonlyArray<Maybe<DomainTableColumn>>>;
};

export type DomainTableRows = DomainTableDataRow | DomainTableHeaderRow;

export type DomainTeamHoleGroups = {
  readonly __typename: 'TeamHoleGroups';
  readonly groupLocation: Scalars['String']['output'];
  readonly groupLocationCode: Scalars['String']['output'];
  readonly groupNumber: Scalars['Int']['output'];
  readonly teams: ReadonlyArray<DomainHoleGroupTeam>;
  readonly tourcastURI?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastURL?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastURLWeb?: Maybe<Scalars['String']['output']>;
};

export type DomainTeamPlayHole = {
  readonly __typename: 'TeamPlayHole';
  readonly holeNumber: Scalars['String']['output'];
  readonly parValue: Scalars['String']['output'];
  readonly playerScores: ReadonlyArray<DomainTspPlayerHole>;
  readonly round: Scalars['Int']['output'];
  readonly teamplayHoleScore: DomainTspTeamHole;
  readonly yardage: Scalars['String']['output'];
};

export type DomainTeamPlayScoreCardRow = {
  readonly __typename: 'TeamPlayScoreCardRow';
  readonly holes: ReadonlyArray<DomainTeamPlayHole>;
  readonly parTotal: Scalars['Int']['output'];
  readonly total: Scalars['String']['output'];
  readonly totalLabel: Scalars['String']['output'];
};

export type DomainTeamRankings = {
  readonly __typename: 'TeamRankings';
  readonly defaultEuropeRankings: Scalars['Boolean']['output'];
  readonly defaultUsRankings: Scalars['Boolean']['output'];
  readonly displayRoster: Scalars['Boolean']['output'];
  readonly euroCaptainLabel?: Maybe<Scalars['String']['output']>;
  readonly euroHeader: Scalars['String']['output'];
  readonly euroViceCaptainLabel?: Maybe<Scalars['String']['output']>;
  readonly europeCaptain?: Maybe<Scalars['String']['output']>;
  readonly europeCta?: Maybe<DomainCallToAction>;
  readonly europeInfoBlurb?: Maybe<Scalars['String']['output']>;
  readonly europeViceCaptain?: Maybe<Scalars['String']['output']>;
  readonly sectionHeader: Scalars['String']['output'];
  readonly usCaptain?: Maybe<Scalars['String']['output']>;
  readonly usCaptainLabel?: Maybe<Scalars['String']['output']>;
  readonly usCta?: Maybe<DomainCallToAction>;
  readonly usHeader: Scalars['String']['output'];
  readonly usInfoBlurb?: Maybe<Scalars['String']['output']>;
  readonly usViceCaptain?: Maybe<Scalars['String']['output']>;
  readonly usViceCaptainLabel?: Maybe<Scalars['String']['output']>;
};

export type DomainTeamShotDetails = {
  readonly __typename: 'TeamShotDetails';
  readonly defaultHolePickle: DomainHolePickleType;
  readonly displayType: DomainShotDetailsDisplayType;
  readonly groupNumber: Scalars['Int']['output'];
  readonly holes: ReadonlyArray<DomainGroupShotDetailsHole>;
  readonly id: Scalars['ID']['output'];
  readonly message: Scalars['String']['output'];
  readonly round: Scalars['Int']['output'];
  readonly shotVideo?: Maybe<DomainVideo>;
  readonly shotVideos?: Maybe<ReadonlyArray<DomainVideo>>;
  readonly teams: ReadonlyArray<DomainGroupShotDetailsTeam>;
  readonly tournamentId: Scalars['String']['output'];
};

export type DomainTeamShotDetailsCompressed = {
  readonly __typename: 'TeamShotDetailsCompressed';
  readonly id: Scalars['ID']['output'];
  readonly payload: Scalars['String']['output'];
};

export type DomainTeamStoryContentInfo = {
  readonly __typename: 'TeamStoryContentInfo';
  readonly hasStoryContent: Scalars['Boolean']['output'];
  readonly playerId: Scalars['String']['output'];
  readonly storyContentRound?: Maybe<Scalars['Int']['output']>;
  readonly storyContentRounds: ReadonlyArray<Scalars['Int']['output']>;
};

export type DomainTeamplayHolePlayer = {
  readonly __typename: 'TeamplayHolePlayer';
  readonly holeScore?: Maybe<Scalars['String']['output']>;
  readonly holeScoreStatus?: Maybe<DomainHoleScoreStatus>;
  readonly playerId: Scalars['ID']['output'];
};

export type DomainTeeTimeHeader = {
  readonly __typename: 'TeeTimeHeader';
  readonly players: Scalars['String']['output'];
  readonly status: Scalars['String']['output'];
  readonly tee: Scalars['String']['output'];
  readonly time: Scalars['String']['output'];
};

export type DomainTeeTimeRound = {
  readonly __typename: 'TeeTimeRound';
  readonly groups: ReadonlyArray<DomainGroup>;
  readonly id: Scalars['ID']['output'];
  readonly roundDisplay: Scalars['String']['output'];
  readonly roundInt: Scalars['Int']['output'];
  readonly roundStatus: DomainRoundStatus;
  readonly roundStatusColor: DomainRoundStatusColor;
  readonly roundStatusDisplay: Scalars['String']['output'];
};

export type DomainTeeTimeRoundV2 = {
  readonly __typename: 'TeeTimeRoundV2';
  readonly groups: ReadonlyArray<DomainGroupV2>;
  readonly id: Scalars['ID']['output'];
  readonly roundDisplay: Scalars['String']['output'];
  readonly roundInt: Scalars['Int']['output'];
  readonly roundStatus: DomainRoundStatus;
  readonly roundStatusColor: DomainRoundStatusColor;
  readonly roundStatusDisplay: Scalars['String']['output'];
};

export type DomainTeeTimes = {
  readonly __typename: 'TeeTimes';
  readonly courses: ReadonlyArray<DomainCourse>;
  readonly defaultRound: Scalars['Int']['output'];
  readonly drawersEnabled: Scalars['Boolean']['output'];
  readonly hideSov: Scalars['Boolean']['output'];
  readonly id: Scalars['ID']['output'];
  readonly informationSections: ReadonlyArray<DomainInformationSection>;
  readonly rounds: ReadonlyArray<DomainTeeTimeRound>;
  readonly timezone: Scalars['String']['output'];
};

export type DomainTeeTimesCompressed = {
  readonly __typename: 'TeeTimesCompressed';
  readonly id: Scalars['ID']['output'];
  readonly payload: Scalars['String']['output'];
};

export type DomainTeeTimesFeature =
  | 'GROUPINGS'
  | 'GROUP_TRACKER';

export type DomainTeeTimesV2 = {
  readonly __typename: 'TeeTimesV2';
  readonly courses: ReadonlyArray<DomainCourse>;
  readonly defaultRound: Scalars['Int']['output'];
  readonly drawersEnabled: Scalars['Boolean']['output'];
  readonly hideSov: Scalars['Boolean']['output'];
  readonly id: Scalars['ID']['output'];
  readonly informationSections: ReadonlyArray<DomainInformationSection>;
  readonly rounds: ReadonlyArray<DomainTeeTimeRoundV2>;
  readonly teeTimesFeatures: ReadonlyArray<DomainTeeTimesFeature>;
  readonly timezone: Scalars['String']['output'];
};

export type DomainThreeUpPhoto = {
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

export type DomainThreeUpStats = {
  readonly __typename: 'ThreeUpStats';
  readonly header?: Maybe<Scalars['String']['output']>;
  readonly statsDescriptionOne?: Maybe<Scalars['String']['output']>;
  readonly statsDescriptionThree?: Maybe<Scalars['String']['output']>;
  readonly statsDescriptionTwo?: Maybe<Scalars['String']['output']>;
  readonly valueOne?: Maybe<Scalars['String']['output']>;
  readonly valueThree?: Maybe<Scalars['String']['output']>;
  readonly valueTwo?: Maybe<Scalars['String']['output']>;
};

export type DomainTicketCards = {
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

export type DomainTicketSectionContainer = {
  readonly __typename: 'TicketSectionContainer';
  readonly bottomCta?: Maybe<DomainCallToAction>;
  readonly cards?: Maybe<ReadonlyArray<DomainTicketCards>>;
  readonly layout?: Maybe<Scalars['String']['output']>;
  readonly sectionTitle?: Maybe<Scalars['String']['output']>;
  readonly topCta?: Maybe<DomainCallToAction>;
};

export type DomainToolTipComponent = {
  readonly __typename: 'ToolTipComponent';
  readonly detailCopy?: Maybe<Scalars['String']['output']>;
  readonly detailCopyRichText?: Maybe<ReadonlyArray<Maybe<DomainNewsArticleNode>>>;
  readonly header: Scalars['String']['output'];
  readonly id?: Maybe<DomainRyder_Cup_Ranking_Tooltip>;
  readonly logo: Scalars['String']['output'];
};

export type DomainTopicStoriesPillConfig = {
  readonly __typename: 'TopicStoriesPillConfig';
  readonly label: Scalars['String']['output'];
};

export type DomainToughestCourseRoundPills = {
  readonly __typename: 'ToughestCourseRoundPills';
  readonly display: Scalars['String']['output'];
  readonly queryVal: DomainToughestRound;
};

export type DomainToughestRound =
  | 'ALL'
  | 'FOUR'
  | 'ONE'
  | 'THREE'
  | 'TWO';

export type DomainTourBoundAsset = {
  readonly __typename: 'TourBoundAsset';
  readonly tourBoundLogo?: Maybe<Scalars['String']['output']>;
  readonly tourBoundLogoDark?: Maybe<Scalars['String']['output']>;
};

export type DomainTourCategories = {
  readonly __typename: 'TourCategories';
  readonly categories: ReadonlyArray<DomainCategory>;
  readonly tourCode: DomainTourCode;
};

export type DomainTourCode =
  | 'C'
  | 'E'
  | 'H'
  | 'I'
  | 'M'
  | 'P'
  | 'R'
  | 'S'
  | 'U'
  | 'Y';

export type DomainTourCupCombined = {
  readonly __typename: 'TourCupCombined';
  readonly bannerMessage?: Maybe<DomainLeaderboardMessage>;
  readonly columnHeaders: ReadonlyArray<Scalars['String']['output']>;
  readonly cutOffButtonText?: Maybe<Scalars['String']['output']>;
  readonly cutOffNumber?: Maybe<Scalars['Int']['output']>;
  readonly description: Scalars['String']['output'];
  readonly detailCopy: Scalars['String']['output'];
  readonly fixedHeaders: Scalars['Int']['output'];
  readonly id: Scalars['ID']['output'];
  /** @deprecated Use logoAsset */
  readonly logo: Scalars['String']['output'];
  readonly logoAsset: DomainImageAsset;
  readonly message?: Maybe<Scalars['String']['output']>;
  readonly options: DomainTourCupType;
  readonly partner?: Maybe<Scalars['String']['output']>;
  readonly partnerLink?: Maybe<Scalars['String']['output']>;
  readonly players: ReadonlyArray<DomainTourCupCombinedRow>;
  readonly pointsEyebrow?: Maybe<Scalars['String']['output']>;
  readonly projectedLive: Scalars['Boolean']['output'];
  readonly projectedTitle: Scalars['String']['output'];
  readonly rankEyebrow?: Maybe<Scalars['String']['output']>;
  readonly rankingsHeader: Scalars['String']['output'];
  readonly season: Scalars['String']['output'];
  readonly title: Scalars['String']['output'];
  readonly tournamentPills: ReadonlyArray<DomainStatTournamentPill>;
  readonly winner?: Maybe<DomainTourCupCombinedWinner>;
  readonly yearPills: ReadonlyArray<DomainStatYearPills>;
};

export type DomainTourCupCombinedData = {
  readonly __typename: 'TourCupCombinedData';
  readonly event: Scalars['String']['output'];
  /** @deprecated Use logoAsset */
  readonly logo?: Maybe<Scalars['String']['output']>;
  readonly logoAsset?: Maybe<DomainImageAsset>;
  /** @deprecated Use logoDarkAsset */
  readonly logoDark?: Maybe<Scalars['String']['output']>;
  readonly logoDarkAsset?: Maybe<DomainImageAsset>;
  readonly movement: DomainCupRankMovementDirection;
  readonly movementAmount: Scalars['String']['output'];
  readonly official: Scalars['String']['output'];
  readonly projected: Scalars['String']['output'];
};

export type DomainTourCupCombinedInfo = {
  readonly __typename: 'TourCupCombinedInfo';
  /** @deprecated Use logoAsset */
  readonly logo?: Maybe<Scalars['String']['output']>;
  readonly logoAsset?: Maybe<DomainImageAsset>;
  /** @deprecated Use logoDarkAsset */
  readonly logoDark?: Maybe<Scalars['String']['output']>;
  readonly logoDarkAsset?: Maybe<DomainImageAsset>;
  readonly sortValue: Scalars['Int']['output'];
  readonly text: Scalars['String']['output'];
  readonly toolTip?: Maybe<Scalars['String']['output']>;
};

export type DomainTourCupCombinedPlayer = {
  readonly __typename: 'TourCupCombinedPlayer';
  readonly columnData: ReadonlyArray<Scalars['String']['output']>;
  readonly country: Scalars['String']['output'];
  readonly countryFlag: Scalars['String']['output'];
  readonly displayName: Scalars['String']['output'];
  readonly firstName: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
  readonly lastName: Scalars['String']['output'];
  readonly officialSort: Scalars['Int']['output'];
  readonly pointData?: Maybe<DomainTourCupCombinedData>;
  readonly previousWeekRank: Scalars['String']['output'];
  readonly projectedSort: Scalars['Int']['output'];
  /** @deprecated Use rankLogoDarkAsset */
  readonly rankLogoDark?: Maybe<Scalars['String']['output']>;
  readonly rankLogoDarkAsset?: Maybe<DomainImageAsset>;
  /** @deprecated Use rankLogoLightAsset */
  readonly rankLogoLight?: Maybe<Scalars['String']['output']>;
  readonly rankLogoLightAsset?: Maybe<DomainImageAsset>;
  readonly rankingData?: Maybe<DomainTourCupCombinedData>;
  readonly shortName: Scalars['String']['output'];
  readonly thisWeekRank: Scalars['String']['output'];
  readonly tourBound?: Maybe<Scalars['Boolean']['output']>;
};

export type DomainTourCupCombinedRow = DomainTourCupCombinedInfo | DomainTourCupCombinedPlayer;

export type DomainTourCupCombinedTotal = {
  readonly __typename: 'TourCupCombinedTotal';
  readonly label: Scalars['String']['output'];
  readonly value: Scalars['String']['output'];
};

export type DomainTourCupCombinedWinner = {
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
  readonly totals: ReadonlyArray<DomainTourCupCombinedTotal>;
};

export type DomainTourCupRankingData = DomainSegmentedCupRankingWrapper | DomainStandardCupRanking;

export type DomainTourCupRankingEvent = {
  readonly __typename: 'TourCupRankingEvent';
  readonly bannerMessage?: Maybe<DomainLeaderboardMessage>;
  readonly description: Scalars['String']['output'];
  readonly detailCopy?: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly live: Scalars['Boolean']['output'];
  /** @deprecated Use logoAsset */
  readonly logo: Scalars['String']['output'];
  readonly logoAsset: DomainImageAsset;
  /** @deprecated Use logoDarkAsset */
  readonly logoDark: Scalars['String']['output'];
  readonly logoDarkAsset: DomainImageAsset;
  readonly options: DomainTourCupType;
  readonly partner?: Maybe<Scalars['String']['output']>;
  readonly partnerLink?: Maybe<Scalars['String']['output']>;
  readonly rankings: ReadonlyArray<DomainCupRankingPlayerWrapper>;
  readonly rankingsHeader: Scalars['String']['output'];
  readonly showInLeaderboard: Scalars['Boolean']['output'];
  readonly standings: DomainTourCupRankingData;
  readonly title: Scalars['String']['output'];
  readonly webviewBrowserControls?: Maybe<Scalars['Boolean']['output']>;
  readonly webviewUrl?: Maybe<Scalars['String']['output']>;
  readonly winner?: Maybe<DomainTourCupWinner>;
};

export type DomainTourCupSplit = {
  readonly __typename: 'TourCupSplit';
  readonly bannerMessage?: Maybe<DomainLeaderboardMessage>;
  readonly columnHeaders: ReadonlyArray<Scalars['String']['output']>;
  readonly cutOffButtonText?: Maybe<Scalars['String']['output']>;
  readonly cutOffNumber?: Maybe<Scalars['Int']['output']>;
  readonly description: Scalars['String']['output'];
  readonly detailCopy: Scalars['String']['output'];
  readonly fixedHeaders: Scalars['Int']['output'];
  readonly id: Scalars['ID']['output'];
  /** @deprecated Use logoAsset */
  readonly logo: Scalars['String']['output'];
  readonly logoAsset: DomainImageAsset;
  readonly message?: Maybe<Scalars['String']['output']>;
  readonly officialPlayers: ReadonlyArray<DomainTourCupCombinedRow>;
  readonly options: DomainTourCupType;
  readonly partner?: Maybe<Scalars['String']['output']>;
  readonly partnerLink?: Maybe<Scalars['String']['output']>;
  readonly pointsEyebrow?: Maybe<Scalars['String']['output']>;
  readonly projectedLive: Scalars['Boolean']['output'];
  readonly projectedPlayers: ReadonlyArray<DomainTourCupCombinedRow>;
  readonly projectedTitle: Scalars['String']['output'];
  readonly rankEyebrow?: Maybe<Scalars['String']['output']>;
  readonly rankingsHeader: Scalars['String']['output'];
  readonly season: Scalars['String']['output'];
  readonly title: Scalars['String']['output'];
  readonly tournamentPills: ReadonlyArray<DomainStatTournamentPill>;
  readonly winner?: Maybe<DomainTourCupCombinedWinner>;
  readonly yearPills: ReadonlyArray<DomainStatYearPills>;
};

export type DomainTourCupType =
  | 'OFFICIAL'
  | 'OFFICIAL_AND_PROJECTED'
  | 'PROJECTED';

export type DomainTourCupWinner = {
  readonly __typename: 'TourCupWinner';
  readonly id: Scalars['String']['output'];
  readonly name: Scalars['String']['output'];
  readonly playerCountry: Scalars['String']['output'];
  readonly totalLabel: Scalars['String']['output'];
  readonly totalValue: Scalars['String']['output'];
};

export type DomainTourPills = {
  readonly __typename: 'TourPills';
  readonly displayName: Scalars['String']['output'];
  readonly tourCode?: Maybe<DomainTourCode>;
};

export type DomainTourSponsor = {
  readonly __typename: 'TourSponsor';
  readonly _path?: Maybe<Scalars['String']['output']>;
  readonly sponsorDescription: ReadonlyArray<DomainTourSponsorDescription>;
  readonly sponsorImage?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use sponsorLogoAsset */
  readonly sponsorLogo?: Maybe<Scalars['String']['output']>;
  readonly sponsorLogoAsset: DomainImageAsset;
  readonly sponsorName?: Maybe<Scalars['String']['output']>;
  readonly sponsorWebsiteUrl?: Maybe<Scalars['String']['output']>;
};

export type DomainTourSponsorDescription = DomainNewsArticleImage | DomainNewsArticleLineBreak | DomainNewsArticleLink | DomainNewsArticleParagraph | DomainNewsArticleText;

export type DomainTourcastCourse = {
  readonly __typename: 'TourcastCourse';
  readonly courseId: Scalars['String']['output'];
  readonly holes: ReadonlyArray<DomainTourcastHole>;
  readonly playoff?: Maybe<DomainTourcastPlayoff>;
};

export type DomainTourcastGroup = {
  readonly __typename: 'TourcastGroup';
  readonly groupName: Scalars['String']['output'];
  readonly groupNum: Scalars['Int']['output'];
  readonly location: Scalars['String']['output'];
  readonly players: ReadonlyArray<DomainTourcastPlayer>;
  readonly roundNum: Scalars['Int']['output'];
  readonly teeTime: Scalars['AWSTimestamp']['output'];
  readonly tourcastURI?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastURL?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastURLWeb?: Maybe<Scalars['String']['output']>;
};

export type DomainTourcastHole = {
  readonly __typename: 'TourcastHole';
  readonly cupMatches?: Maybe<ReadonlyArray<DomainCupLeaderboardMatch>>;
  readonly displayRank: Scalars['String']['output'];
  readonly groups: ReadonlyArray<DomainTourcastGroup>;
  readonly holeNum: Scalars['Int']['output'];
  readonly matches: ReadonlyArray<DomainHoleMatch>;
  readonly par: Scalars['String']['output'];
  readonly rank: Scalars['Int']['output'];
  readonly round: Scalars['String']['output'];
  readonly scoringAvg: Scalars['String']['output'];
  readonly teamGroups: ReadonlyArray<DomainTourcastTeamGroup>;
  readonly yardage: Scalars['String']['output'];
};

export type DomainTourcastPlayer = {
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

export type DomainTourcastPlayoff = {
  readonly __typename: 'TourcastPlayoff';
  readonly holeNum: Scalars['Int']['output'];
  readonly playOffHole: Scalars['Int']['output'];
  readonly players: ReadonlyArray<DomainTourcastPlayoffPlayer>;
  readonly tourcastURI?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastURL?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastURLWeb?: Maybe<Scalars['String']['output']>;
};

export type DomainTourcastPlayoffPlayer = {
  readonly __typename: 'TourcastPlayoffPlayer';
  readonly countryCode: Scalars['String']['output'];
  readonly displayName: Scalars['String']['output'];
  readonly playerId: Scalars['ID']['output'];
  readonly shortName: Scalars['String']['output'];
};

export type DomainTourcastTable = {
  readonly __typename: 'TourcastTable';
  readonly courses: ReadonlyArray<DomainTourcastCourse>;
  readonly informationSections: ReadonlyArray<DomainInformationSection>;
  readonly tournamentId: Scalars['ID']['output'];
  readonly winner?: Maybe<DomainTcWinner>;
};

export type DomainTourcastTeam = {
  readonly __typename: 'TourcastTeam';
  readonly backNine: Scalars['Boolean']['output'];
  readonly players: ReadonlyArray<DomainTourcastPlayer>;
  readonly roundScore: Scalars['String']['output'];
  readonly teamId: Scalars['ID']['output'];
  readonly thru: Scalars['String']['output'];
  readonly total: Scalars['String']['output'];
};

export type DomainTourcastTeamGroup = {
  readonly __typename: 'TourcastTeamGroup';
  readonly groupName: Scalars['String']['output'];
  readonly groupNum: Scalars['Int']['output'];
  readonly location: Scalars['String']['output'];
  readonly roundNum: Scalars['Int']['output'];
  readonly teams: ReadonlyArray<DomainTourcastTeam>;
  readonly teeTime: Scalars['AWSTimestamp']['output'];
  readonly tourcastURI?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastURL?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastURLWeb?: Maybe<Scalars['String']['output']>;
};

export type DomainTournament = {
  readonly __typename: 'Tournament';
  /** @deprecated Use beautyImageAsset */
  readonly beautyImage: Scalars['String']['output'];
  readonly beautyImageAsset: DomainImageAsset;
  readonly city: Scalars['String']['output'];
  readonly conductedByLabel?: Maybe<Scalars['String']['output']>;
  readonly conductedByLink?: Maybe<Scalars['String']['output']>;
  readonly country: Scalars['String']['output'];
  readonly courses: ReadonlyArray<DomainCourse>;
  readonly currentRound: Scalars['Int']['output'];
  readonly disabledScorecardTabs: ReadonlyArray<DomainScorecardTabFeature>;
  readonly displayDate: Scalars['String']['output'];
  readonly events: ReadonlyArray<DomainEvent>;
  readonly features?: Maybe<ReadonlyArray<DomainTournamentFeature>>;
  readonly formatType: DomainFormatType;
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
  readonly rightRailConfig?: Maybe<DomainTournamentRightRailConfig>;
  readonly roundDisplay: Scalars['String']['output'];
  readonly roundStatus: DomainRoundStatus;
  readonly roundStatusColor: DomainRoundStatusColor;
  readonly roundStatusDisplay: Scalars['String']['output'];
  readonly scoredLevel: DomainScoringLevel;
  readonly seasonYear: Scalars['String']['output'];
  readonly shouldSubscribe?: Maybe<Scalars['Boolean']['output']>;
  readonly state: Scalars['String']['output'];
  readonly ticketsEnabled: Scalars['Boolean']['output'];
  readonly ticketsURL?: Maybe<Scalars['String']['output']>;
  readonly timezone: Scalars['String']['output'];
  readonly tournamentCategoryInfo?: Maybe<DomainTournamentCategoryInfo>;
  readonly tournamentLocation: Scalars['String']['output'];
  /** @deprecated use tournamentLogoAsset */
  readonly tournamentLogo: ReadonlyArray<Scalars['String']['output']>;
  readonly tournamentLogoAsset: ReadonlyArray<DomainImageAsset>;
  readonly tournamentName: Scalars['String']['output'];
  readonly tournamentSiteURL?: Maybe<Scalars['String']['output']>;
  readonly tournamentStatus: DomainTournamentStatus;
  readonly useTournamentSiteURL: Scalars['Boolean']['output'];
  readonly weather?: Maybe<DomainTournamentWeather>;
};

export type DomainTournamentActivation = {
  readonly __typename: 'TournamentActivation';
  readonly data: Scalars['String']['output'];
  readonly description: Scalars['String']['output'];
  readonly detail?: Maybe<Scalars['String']['output']>;
  /** @deprecated use sponsorLogoAsset */
  readonly sponsorLogo: Scalars['String']['output'];
  readonly sponsorLogoAsset: DomainImageAsset;
  /** @deprecated use sponsorLogoDarkAsset */
  readonly sponsorLogoDark: Scalars['String']['output'];
  readonly sponsorLogoDarkAsset: DomainImageAsset;
  readonly title: Scalars['String']['output'];
};

export type DomainTournamentCategory =
  | 'PLAYOFF'
  | 'SIGNATURE';

export type DomainTournamentCategoryInfo = {
  readonly __typename: 'TournamentCategoryInfo';
  readonly label: Scalars['String']['output'];
  /** @deprecated use logoDarkAsset */
  readonly logoDark: Scalars['String']['output'];
  readonly logoDarkAsset: DomainImageAsset;
  /** @deprecated use logoLightAsset */
  readonly logoLight: Scalars['String']['output'];
  readonly logoLightAsset: DomainImageAsset;
  readonly type: DomainTournamentCategory;
};

export type DomainTournamentChampion = {
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

export type DomainTournamentCourse = {
  readonly __typename: 'TournamentCourse';
  readonly city?: Maybe<Scalars['String']['output']>;
  readonly country?: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly image: Scalars['String']['output'];
  readonly name: Scalars['String']['output'];
  readonly overview: ReadonlyArray<DomainInformationData>;
  readonly state?: Maybe<Scalars['String']['output']>;
};

export type DomainTournamentFeature =
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

export type DomainTournamentGroupLocation = {
  readonly __typename: 'TournamentGroupLocation';
  readonly groupLocations: ReadonlyArray<DomainGroupLocationData>;
  readonly round: Scalars['Int']['output'];
  readonly tournamentId: Scalars['String']['output'];
};

export type DomainTournamentHistory = {
  readonly __typename: 'TournamentHistory';
  readonly courses: DomainTournamentHistoryCourseTable;
  readonly defendingChampion: DomainTournamentHistoryPlayerTable;
  readonly pastChampions: DomainTournamentHistoryPlayerTable;
  readonly tourCode: DomainTourCode;
  readonly tournamentName: Scalars['String']['output'];
  readonly tournamentNum: Scalars['String']['output'];
};

export type DomainTournamentHistoryCourse = {
  readonly __typename: 'TournamentHistoryCourse';
  readonly courseId: Scalars['String']['output'];
  readonly courseImage: Scalars['String']['output'];
  readonly courseName: Scalars['String']['output'];
  readonly displaySeason: Scalars['String']['output'];
  readonly par: Scalars['String']['output'];
  readonly yardage: Scalars['String']['output'];
  readonly year: Scalars['Int']['output'];
};

export type DomainTournamentHistoryCourseTable = {
  readonly __typename: 'TournamentHistoryCourseTable';
  readonly courses: ReadonlyArray<DomainTournamentHistoryCourse>;
  readonly header: Scalars['String']['output'];
};

export type DomainTournamentHistoryPlayer = {
  readonly __typename: 'TournamentHistoryPlayer';
  readonly countryFlag: Scalars['String']['output'];
  readonly displaySeason: Scalars['String']['output'];
  readonly playerId: Scalars['String']['output'];
  readonly playerName: Scalars['String']['output'];
  readonly relativeToPar: Scalars['String']['output'];
  readonly totalScore: Scalars['String']['output'];
  readonly year: Scalars['Int']['output'];
};

export type DomainTournamentHistoryPlayerTable = {
  readonly __typename: 'TournamentHistoryPlayerTable';
  readonly header: Scalars['String']['output'];
  readonly players: ReadonlyArray<DomainTournamentHistoryPlayer>;
};

export type DomainTournamentHoleStats = {
  readonly __typename: 'TournamentHoleStats';
  readonly courses: ReadonlyArray<DomainCourseStat>;
  readonly tournamentId: Scalars['ID']['output'];
};

export type DomainTournamentLocation = {
  readonly __typename: 'TournamentLocation';
  readonly city?: Maybe<Scalars['String']['output']>;
  readonly country?: Maybe<Scalars['String']['output']>;
  readonly state?: Maybe<Scalars['String']['output']>;
};

export type DomainTournamentOdds = {
  readonly __typename: 'TournamentOdds';
  readonly availableMarkets: ReadonlyArray<DomainAvailableMarket>;
  readonly country: Scalars['String']['output'];
  readonly drawersEnabled: Scalars['Boolean']['output'];
  readonly id: Scalars['ID']['output'];
  /** @deprecated Use banners from config these values are incorrect */
  readonly oddsBanner: DomainOddsBanner;
  readonly oddsMessage?: Maybe<DomainOddsMessage>;
  readonly oddsProvider: DomainOddsProvider;
};

export type DomainTournamentOddsCompressed = {
  readonly __typename: 'TournamentOddsCompressed';
  readonly id: Scalars['ID']['output'];
  readonly tournamentOddsPayload: Scalars['String']['output'];
};

export type DomainTournamentOddsCompressedV2 = {
  readonly __typename: 'TournamentOddsCompressedV2';
  readonly id: Scalars['ID']['output'];
  readonly oddsPayload: Scalars['String']['output'];
};

export type DomainTournamentOddsPlayer = {
  readonly __typename: 'TournamentOddsPlayer';
  readonly oddsOptionId?: Maybe<Scalars['String']['output']>;
  readonly oddsSort: Scalars['Float']['output'];
  readonly oddsSwing?: Maybe<DomainOddsSwing>;
  readonly oddsToWin: Scalars['String']['output'];
  readonly playerId: Scalars['ID']['output'];
};

export type DomainTournamentOddsToWin = {
  readonly __typename: 'TournamentOddsToWin';
  readonly players: ReadonlyArray<DomainTournamentOddsPlayer>;
  readonly tournamentId: Scalars['ID']['output'];
  /** @deprecated use tournamentLogoAsset */
  readonly tournamentLogo: Scalars['String']['output'];
  readonly tournamentLogoAsset: DomainImageAsset;
  readonly tournamentName: Scalars['String']['output'];
};

export type DomainTournamentOddsV2 = {
  readonly __typename: 'TournamentOddsV2';
  readonly drawersEnabled: Scalars['Boolean']['output'];
  readonly id: Scalars['ID']['output'];
  readonly marketPills: ReadonlyArray<DomainMarketPill>;
  readonly markets: ReadonlyArray<DomainMarket>;
  readonly message?: Maybe<DomainOddsMessage>;
  /**   tournamentId-provider */
  readonly provider: DomainOddsProvider;
  /**   other markets you can */
  readonly round: Scalars['String']['output'];
  readonly tournamentId: Scalars['String']['output'];
};

export type DomainTournamentOverview = {
  readonly __typename: 'TournamentOverview';
  readonly activation?: Maybe<DomainTournamentActivation>;
  readonly androidTicketmasterApiKey?: Maybe<Scalars['String']['output']>;
  readonly androidTicketmasterScheme?: Maybe<Scalars['String']['output']>;
  readonly augmentedReality?: Maybe<DomainAugmentedRealityConfig>;
  /** @deprecated Use beautyImageAsset */
  readonly beautyImage: Scalars['String']['output'];
  readonly beautyImageAsset: DomainImageAsset;
  readonly courses: ReadonlyArray<DomainTournamentCourse>;
  readonly defendingChampion?: Maybe<DomainTournamentChampion>;
  readonly defendingTeamChampion?: Maybe<ReadonlyArray<Maybe<DomainTournamentChampion>>>;
  readonly eventGuideURL?: Maybe<Scalars['String']['output']>;
  readonly formatType: DomainFormatType;
  readonly iosTicketmasterApiKey?: Maybe<Scalars['String']['output']>;
  readonly overview: ReadonlyArray<DomainInformationData>;
  readonly pastChampions: ReadonlyArray<DomainTournamentChampion>;
  readonly pastTeamChampions?: Maybe<ReadonlyArray<Maybe<DomainTournamentTeamChampion>>>;
  readonly shareURL?: Maybe<Scalars['String']['output']>;
  readonly ticketmasterAttractionId?: Maybe<Scalars['String']['output']>;
  readonly ticketsURL?: Maybe<Scalars['String']['output']>;
  readonly tourcastURI?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastURL?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use tourcastURI */
  readonly tourcastURLWeb?: Maybe<Scalars['String']['output']>;
  readonly tournamentCategoryInfo?: Maybe<DomainTournamentCategoryInfo>;
  readonly tournamentResultsMessage?: Maybe<DomainTournamentResultsMessage>;
  readonly webviewBrowserControls: Scalars['Boolean']['output'];
};

export type DomainTournamentOverviewInfo = {
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

export type DomainTournamentPlayoffScorecards = {
  readonly __typename: 'TournamentPlayoffScorecards';
  readonly playoffs: ReadonlyArray<DomainPlayoffScorecard>;
  readonly tournamentId: Scalars['ID']['output'];
};

export type DomainTournamentRecap = {
  readonly __typename: 'TournamentRecap';
  readonly courses: ReadonlyArray<DomainTournamentRecapCourse>;
  readonly durationDate: Scalars['String']['output'];
  readonly newsArticles: ReadonlyArray<DomainNewsArticle>;
  readonly tournamentId: Scalars['String']['output'];
  readonly videos: ReadonlyArray<DomainVideo>;
};

export type DomainTournamentRecapCourse = {
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

export type DomainTournamentResultOverview = {
  readonly __typename: 'TournamentResultOverview';
  readonly courseCity: Scalars['String']['output'];
  readonly courseCountry: Scalars['String']['output'];
  readonly courseName: Scalars['String']['output'];
  readonly courseState?: Maybe<Scalars['String']['output']>;
  readonly displaySeason: Scalars['String']['output'];
  readonly tournamentId: Scalars['String']['output'];
  readonly tournamentLogo: Scalars['String']['output'];
  readonly tournamentLogoAsset: DomainImageAsset;
  readonly tournamentName: Scalars['String']['output'];
};

export type DomainTournamentResultPill = {
  readonly __typename: 'TournamentResultPill';
  readonly tournamentName: Scalars['String']['output'];
  readonly tournamentNum: Scalars['ID']['output'];
};

export type DomainTournamentResults = {
  readonly __typename: 'TournamentResults';
  readonly cupEyebrowText: Scalars['String']['output'];
  readonly overview: ReadonlyArray<DomainPlayerProfileInfoItem>;
  readonly overviewInfo?: Maybe<DomainTournamentOverviewInfo>;
  readonly tournamentNum: Scalars['ID']['output'];
  readonly tournamentOverview?: Maybe<DomainTournamentResultOverview>;
  readonly tournaments: ReadonlyArray<DomainPlayerProfileTournamentRow>;
};

export type DomainTournamentResultsMessage = {
  readonly __typename: 'TournamentResultsMessage';
  readonly message?: Maybe<Scalars['String']['output']>;
};

export type DomainTournamentRightRailConfig = {
  readonly __typename: 'TournamentRightRailConfig';
  readonly buttonLink?: Maybe<Scalars['String']['output']>;
  readonly buttonText?: Maybe<Scalars['String']['output']>;
  readonly imageAltText: Scalars['String']['output'];
  readonly imageUrl: Scalars['String']['output'];
};

export type DomainTournamentStatus =
  | 'COMPLETED'
  | 'IN_PROGRESS'
  | 'NOT_STARTED';

export type DomainTournamentTeamChampion = {
  readonly __typename: 'TournamentTeamChampion';
  readonly players: ReadonlyArray<DomainTournamentChampion>;
};

export type DomainTournamentWeather = {
  readonly __typename: 'TournamentWeather';
  readonly condition: DomainWeatherCondition;
  readonly humidity: Scalars['String']['output'];
  /** @deprecated use logoAsset */
  readonly logo?: Maybe<Scalars['String']['output']>;
  readonly logoAccessibility: Scalars['String']['output'];
  readonly logoAsset: DomainImageAsset;
  /** @deprecated use logoDarkAsset */
  readonly logoDark?: Maybe<Scalars['String']['output']>;
  readonly logoDarkAsset: DomainImageAsset;
  readonly precipitation: Scalars['String']['output'];
  readonly tempC: Scalars['String']['output'];
  readonly tempF: Scalars['String']['output'];
  readonly windDirection: DomainWindDirection;
  readonly windSpeedKPH: Scalars['String']['output'];
  readonly windSpeedMPH: Scalars['String']['output'];
};

export type DomainTournamentsPillConfig = {
  readonly __typename: 'TournamentsPillConfig';
  readonly currentSeason: Scalars['Int']['output'];
};

export type DomainTspPlayer = {
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
  readonly rankingMovement: DomainCupRankMovementDirection;
  readonly rankingMovementAmount: Scalars['String']['output'];
  readonly shortName: Scalars['String']['output'];
};

export type DomainTspPlayerHole = {
  readonly __typename: 'TspPlayerHole';
  readonly inTheHoleTimestamp?: Maybe<Scalars['AWSTimestamp']['output']>;
  readonly playComplete?: Maybe<Scalars['Boolean']['output']>;
  readonly playerId: Scalars['ID']['output'];
  readonly playerTotal?: Maybe<Scalars['String']['output']>;
  readonly statsScoreId?: Maybe<Scalars['String']['output']>;
  readonly status?: Maybe<DomainHoleScoreStatus>;
  readonly strokes: Scalars['Int']['output'];
  readonly strokesValue: Scalars['String']['output'];
};

export type DomainTspPlayoff = {
  readonly __typename: 'TspPlayoff';
  readonly currentHole: Scalars['Int']['output'];
  readonly holes: ReadonlyArray<DomainPlayoffHole>;
  readonly location?: Maybe<Scalars['String']['output']>;
  readonly teams: ReadonlyArray<DomainPlayoffTeams>;
  readonly thru?: Maybe<Scalars['String']['output']>;
};

export type DomainTspScPlayer = {
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

export type DomainTspStrokePlayer = {
  readonly __typename: 'TspStrokePlayer';
  readonly color?: Maybe<Scalars['String']['output']>;
  readonly displayName?: Maybe<Scalars['String']['output']>;
  readonly firstName?: Maybe<Scalars['String']['output']>;
  readonly lastName?: Maybe<Scalars['String']['output']>;
  readonly playerId?: Maybe<Scalars['Int']['output']>;
  readonly playerIdString?: Maybe<Scalars['String']['output']>;
  readonly shortName?: Maybe<Scalars['String']['output']>;
};

export type DomainTspTeamHole = {
  readonly __typename: 'TspTeamHole';
  readonly inTheHoleTimestamp?: Maybe<Scalars['AWSTimestamp']['output']>;
  readonly playComplete?: Maybe<Scalars['Boolean']['output']>;
  readonly statsScoreId?: Maybe<Scalars['String']['output']>;
  readonly status?: Maybe<DomainHoleScoreStatus>;
  readonly strokes: Scalars['Int']['output'];
  readonly strokesValue: Scalars['String']['output'];
  readonly teamId: Scalars['ID']['output'];
  readonly teamTotal?: Maybe<Scalars['String']['output']>;
};

export type DomainTspTeamRow = {
  readonly __typename: 'TspTeamRow';
  readonly backNine: Scalars['Boolean']['output'];
  readonly courseId: Scalars['String']['output'];
  readonly currentRound: Scalars['Int']['output'];
  readonly groupNumber: Scalars['Int']['output'];
  readonly leaderboardSortOrder: Scalars['Int']['output'];
  readonly movementAmount: Scalars['String']['output'];
  readonly movementDirection: DomainLeaderboardMovement;
  readonly oddsOptionId?: Maybe<Scalars['String']['output']>;
  readonly oddsSort?: Maybe<Scalars['Float']['output']>;
  readonly oddsSwing?: Maybe<DomainOddsSwing>;
  readonly oddsToWin?: Maybe<Scalars['String']['output']>;
  readonly players: ReadonlyArray<DomainTspPlayer>;
  readonly position: Scalars['String']['output'];
  readonly rounds: ReadonlyArray<Scalars['String']['output']>;
  readonly score: Scalars['String']['output'];
  readonly scoreSort: Scalars['Int']['output'];
  readonly startHole?: Maybe<Scalars['String']['output']>;
  readonly status?: Maybe<DomainPlayerState>;
  readonly teamId: Scalars['ID']['output'];
  readonly teamName: Scalars['String']['output'];
  readonly teamStoryContentInfo: ReadonlyArray<DomainTeamStoryContentInfo>;
  readonly teeTime: Scalars['AWSTimestamp']['output'];
  readonly thru: Scalars['String']['output'];
  readonly thruSort: Scalars['Int']['output'];
  readonly total: Scalars['String']['output'];
  readonly totalSort: Scalars['Int']['output'];
  readonly totalStrokes: Scalars['String']['output'];
};

export type DomainTspWinner = {
  readonly __typename: 'TspWinner';
  readonly points?: Maybe<Scalars['String']['output']>;
  readonly purse?: Maybe<Scalars['String']['output']>;
  readonly teamId: Scalars['ID']['output'];
  readonly totalScore: Scalars['String']['output'];
  readonly totalStrokes: Scalars['Int']['output'];
  readonly winningTeam: ReadonlyArray<DomainTspWinningPlayer>;
};

export type DomainTspWinningPlayer = {
  readonly __typename: 'TspWinningPlayer';
  readonly countryFlag: Scalars['String']['output'];
  readonly countryName: Scalars['String']['output'];
  readonly firstName: Scalars['String']['output'];
  /** @deprecated URL should be built using player ID */
  readonly headshot: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
  readonly lastName: Scalars['String']['output'];
};

export type DomainTwoColumn = {
  readonly __typename: 'TwoColumn';
  readonly sectionOne?: Maybe<ReadonlyArray<Maybe<DomainNewsArticleNode>>>;
  readonly sectionOneTitle?: Maybe<Scalars['String']['output']>;
  readonly sectionTwo?: Maybe<ReadonlyArray<Maybe<DomainNewsArticleNode>>>;
  readonly sectionTwoTitle?: Maybe<Scalars['String']['output']>;
};

export type DomainUniversityRankColor =
  | 'BLACK'
  | 'BLUE'
  | 'GOLD'
  | 'GRAY';

export type DomainUniversityRankingPlayer = {
  readonly __typename: 'UniversityRankingPlayer';
  readonly avg: Scalars['String']['output'];
  readonly country: Scalars['String']['output'];
  readonly displayName: Scalars['String']['output'];
  readonly events: Scalars['Int']['output'];
  readonly playerId: Scalars['ID']['output'];
  readonly rank: Scalars['Int']['output'];
  readonly rankColor: DomainUniversityRankColor;
  readonly rankingMovement: DomainCupRankMovementDirection;
  readonly rankingMovementAmount: Scalars['String']['output'];
  readonly rankingMovementAmountSort: Scalars['Int']['output'];
  readonly schoolName: Scalars['String']['output'];
  readonly top10: Scalars['Int']['output'];
  readonly tournaments: ReadonlyArray<DomainUniversityRankingsTournament>;
  readonly wins: Scalars['Int']['output'];
};

export type DomainUniversityRankings = {
  readonly __typename: 'UniversityRankings';
  readonly description: Scalars['String']['output'];
  readonly disclaimer?: Maybe<Scalars['String']['output']>;
  readonly displayYear: Scalars['String']['output'];
  readonly players: ReadonlyArray<DomainUniversityRankingPlayer>;
  readonly sponsorImage?: Maybe<Scalars['String']['output']>;
  readonly sponsorName: Scalars['String']['output'];
  readonly throughText: Scalars['String']['output'];
  readonly title: Scalars['String']['output'];
  readonly weekNum: Scalars['Int']['output'];
  readonly weekPills: ReadonlyArray<DomainStatWeekPill>;
  readonly year: Scalars['Int']['output'];
  readonly yearPills: ReadonlyArray<DomainStatYearPills>;
};

export type DomainUniversityRankingsTournament = {
  readonly __typename: 'UniversityRankingsTournament';
  readonly finishPosition: Scalars['String']['output'];
  readonly name: Scalars['String']['output'];
  readonly playedYear: Scalars['Int']['output'];
  readonly points: Scalars['String']['output'];
  readonly week: Scalars['Int']['output'];
};

export type DomainUniversityTotalPoints = {
  readonly __typename: 'UniversityTotalPoints';
  readonly description: Scalars['String']['output'];
  readonly footerInfo?: Maybe<DomainNewsArticleParagraph>;
  readonly headerInfo?: Maybe<DomainNewsArticleParagraph>;
  readonly headers: ReadonlyArray<Scalars['String']['output']>;
  readonly players: ReadonlyArray<DomainUniversityTotalPointsPlayer>;
  readonly season: Scalars['Int']['output'];
  readonly seasonNavigation: ReadonlyArray<DomainUniversityTotalPointsPill>;
  /** @deprecated use sponsorLogoAsset */
  readonly sponsorLogo?: Maybe<Scalars['String']['output']>;
  readonly sponsorLogoAsset: DomainImageAsset;
  readonly sponsorText?: Maybe<Scalars['String']['output']>;
  readonly title: Scalars['String']['output'];
  readonly week: Scalars['Int']['output'];
  readonly weekNavigation: ReadonlyArray<DomainUniversityTotalPointsPill>;
};

export type DomainUniversityTotalPointsPill = {
  readonly __typename: 'UniversityTotalPointsPill';
  readonly displayText: Scalars['String']['output'];
  readonly value: Scalars['Int']['output'];
};

export type DomainUniversityTotalPointsPlayer = {
  readonly __typename: 'UniversityTotalPointsPlayer';
  readonly data: ReadonlyArray<Scalars['String']['output']>;
  readonly playerId: Scalars['ID']['output'];
  readonly playerName: Scalars['String']['output'];
  readonly rank: Scalars['String']['output'];
  readonly rankSort: Scalars['Int']['output'];
  readonly rankingMovement: DomainCupRankMovementDirection;
  readonly rankingMovementAmount: Scalars['String']['output'];
  readonly rankingMovementAmountSort: Scalars['Int']['output'];
  readonly tournaments: ReadonlyArray<DomainUniversityRankingsTournament>;
};

export type DomainUnorderedListNode = {
  readonly __typename: 'UnorderedListNode';
  readonly historicalTournamentOddsArgs?: Maybe<DomainHistoricalTournamentOddsArgs>;
  readonly items: ReadonlyArray<DomainListItem>;
  readonly ordered?: Maybe<Scalars['Boolean']['output']>;
};

export type DomainUnsubscribeResponse = {
  readonly __typename: 'UnsubscribeResponse';
  readonly ok: Scalars['Boolean']['output'];
};

export type DomainUpcomingBroadcastNetwork = {
  readonly __typename: 'UpcomingBroadcastNetwork';
  readonly networks: ReadonlyArray<DomainBroadcastNetwork>;
  readonly tournamentId: Scalars['String']['output'];
};

export type DomainUpcomingBroadcastNetworks = {
  readonly __typename: 'UpcomingBroadcastNetworks';
  readonly upcomingNetworks: ReadonlyArray<DomainUpcomingBroadcastNetwork>;
};

export type DomainUpcomingMatch = {
  readonly __typename: 'UpcomingMatch';
  readonly isConsolationMatch: Scalars['Boolean']['output'];
  readonly matchId: Scalars['String']['output'];
  readonly potentialPlayers: ReadonlyArray<DomainUpcomingMatchPotentialPlayer>;
};

export type DomainUpcomingMatchPotentialPlayer = {
  readonly __typename: 'UpcomingMatchPotentialPlayer';
  readonly isKnown: Scalars['Boolean']['output'];
  readonly nameLabel: Scalars['String']['output'];
  readonly players: ReadonlyArray<DomainMpLeaderboardPlayer>;
  readonly relationshipLabel?: Maybe<Scalars['String']['output']>;
};

export type DomainVideo = {
  readonly __typename: 'Video';
  /** @deprecated No longer supported */
  readonly accountId?: Maybe<Scalars['String']['output']>;
  readonly categories?: Maybe<ReadonlyArray<DomainRyderCupContentCategories>>;
  readonly category: Scalars['String']['output'];
  readonly categoryDisplayName: Scalars['String']['output'];
  readonly contentTournamentId?: Maybe<Scalars['String']['output']>;
  readonly created?: Maybe<Scalars['AWSTimestamp']['output']>;
  readonly description?: Maybe<Scalars['String']['output']>;
  readonly descriptionNode?: Maybe<ReadonlyArray<DomainVideoDescription>>;
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
  readonly playerVideos?: Maybe<ReadonlyArray<DomainPlayerVideo>>;
  readonly players?: Maybe<ReadonlyArray<DomainRyderCupContentPlayer>>;
  readonly poster: Scalars['String']['output'];
  readonly pubdate: Scalars['AWSTimestamp']['output'];
  readonly publishDate?: Maybe<Scalars['String']['output']>;
  readonly rating?: Maybe<Scalars['String']['output']>;
  readonly roundNumber?: Maybe<Scalars['String']['output']>;
  readonly seqHoleNumber?: Maybe<Scalars['String']['output']>;
  readonly shareUrl?: Maybe<Scalars['String']['output']>;
  readonly shotNumber?: Maybe<Scalars['String']['output']>;
  readonly sponsor?: Maybe<DomainVideoSponsor>;
  readonly startsAt?: Maybe<Scalars['AWSTimestamp']['output']>;
  readonly tags?: Maybe<ReadonlyArray<DomainRyderCupContentTags>>;
  readonly team?: Maybe<DomainRyderCupTeamType>;
  /** @deprecated Use thumbnailAsset */
  readonly thumbnail: Scalars['String']['output'];
  readonly thumbnailAsset: DomainImageAsset;
  readonly title: Scalars['String']['output'];
  readonly topics?: Maybe<ReadonlyArray<DomainContentTopics>>;
  readonly tourCode: Scalars['String']['output'];
  readonly tournamentId?: Maybe<Scalars['String']['output']>;
  readonly videoAccountId?: Maybe<Scalars['String']['output']>;
  readonly year?: Maybe<Scalars['String']['output']>;
  readonly years?: Maybe<ReadonlyArray<Maybe<Scalars['String']['output']>>>;
};

export type DomainVideoDescription = DomainNewsArticleLink | DomainNewsArticleText;

export type DomainVideoFilterPillConfig = {
  readonly __typename: 'VideoFilterPillConfig';
  readonly franchises: ReadonlyArray<DomainFranchise>;
  readonly pinnedFranchises: ReadonlyArray<DomainFranchise>;
};

export type DomainVideoHero = {
  readonly __typename: 'VideoHero';
  readonly gtmAssetKey?: Maybe<Scalars['String']['output']>;
  readonly partnershipAsset?: Maybe<Scalars['String']['output']>;
  readonly partnershipText?: Maybe<Scalars['String']['output']>;
  readonly sectionTitle?: Maybe<Scalars['String']['output']>;
  readonly tourcastWebviewLink?: Maybe<Scalars['String']['output']>;
  readonly video?: Maybe<DomainVideo>;
  readonly videos: ReadonlyArray<DomainVideo>;
};

export type DomainVideoLanguage =
  | 'ENGLISH'
  | 'FRENCH';

export type DomainVideoNavigation = {
  readonly __typename: 'VideoNavigation';
  readonly items: ReadonlyArray<DomainVideoPill>;
  readonly liveOverride: DomainLiveOverride;
  readonly tourCode: DomainTourCode;
};

export type DomainVideoPill = {
  readonly __typename: 'VideoPill';
  readonly defaultView: Scalars['Boolean']['output'];
  readonly displayText: Scalars['String']['output'];
  readonly enabledCompanionPills?: Maybe<ReadonlyArray<DomainVideoPillType>>;
  readonly pillConfig?: Maybe<DomainVideoPillConfig>;
  readonly videoPillType: DomainVideoPillType;
};

export type DomainVideoPillConfig = DomainFranchisePillConfig | DomainTopicStoriesPillConfig | DomainTournamentsPillConfig | DomainVideoFilterPillConfig;

export type DomainVideoPillType =
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

export type DomainVideoSponsor = {
  readonly __typename: 'VideoSponsor';
  readonly description?: Maybe<Scalars['String']['output']>;
  readonly gam?: Maybe<Scalars['String']['output']>;
  readonly image?: Maybe<Scalars['String']['output']>;
  /** @deprecated use logoAsset */
  readonly logo: Scalars['String']['output'];
  readonly logoAsset: DomainImageAsset;
  /** @deprecated use logoDarkAsset */
  readonly logoDark: Scalars['String']['output'];
  readonly logoDarkAsset: DomainImageAsset;
  readonly logoPrefix?: Maybe<Scalars['String']['output']>;
  readonly name: Scalars['String']['output'];
  readonly websiteUrl?: Maybe<Scalars['String']['output']>;
};

export type DomainWatchLanding = {
  readonly __typename: 'WatchLanding';
  /** @deprecated Use featuredVideos array */
  readonly featuredVideo?: Maybe<DomainVideo>;
  readonly featuredVideos?: Maybe<ReadonlyArray<DomainVideo>>;
  readonly landingSections: ReadonlyArray<DomainWatchLandingSection>;
  readonly mobileVideos?: Maybe<ReadonlyArray<DomainVideo>>;
  readonly mobileWebVideoLimit: Scalars['Int']['output'];
  readonly tourCode: DomainTourCode;
};

export type DomainWatchLandingSection = {
  readonly __typename: 'WatchLandingSection';
  readonly pillConfig?: Maybe<DomainVideoPillConfig>;
  readonly title: Scalars['String']['output'];
  readonly videoPillType: DomainVideoPillType;
  readonly videos: ReadonlyArray<DomainVideo>;
};

export type DomainWeatherCondition =
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

export type DomainWeatherDetails = {
  readonly __typename: 'WeatherDetails';
  readonly condition: DomainWeatherCondition;
  readonly humidity: Scalars['String']['output'];
  readonly precipitation: Scalars['String']['output'];
  readonly temperature: DomainWeatherTemp;
  readonly title: Scalars['String']['output'];
  readonly windDirection: DomainWindDirection;
  readonly windSpeedKPH: Scalars['String']['output'];
  readonly windSpeedMPH: Scalars['String']['output'];
};

export type DomainWeatherNotes = {
  readonly __typename: 'WeatherNotes';
  readonly notes: ReadonlyArray<Scalars['String']['output']>;
  readonly weather: ReadonlyArray<DomainDayWeather>;
};

export type DomainWeatherSummary = {
  readonly __typename: 'WeatherSummary';
  readonly accessibilityText?: Maybe<Scalars['String']['output']>;
  readonly daily: ReadonlyArray<DomainWeatherDetails>;
  readonly hourly: ReadonlyArray<DomainWeatherDetails>;
  /** @deprecated use modalSponsorLogoAsset */
  readonly modalSponsorLogo?: Maybe<Scalars['String']['output']>;
  readonly modalSponsorLogoAsset: DomainImageAsset;
  /** @deprecated use modalSponsorLogoDarkAsset */
  readonly modalSponsorLogoDark?: Maybe<Scalars['String']['output']>;
  readonly modalSponsorLogoDarkAsset: DomainImageAsset;
  readonly sponsorDescription?: Maybe<Scalars['String']['output']>;
  readonly sponsorLink?: Maybe<Scalars['String']['output']>;
  /** @deprecated use sponsorLogoAsset */
  readonly sponsorLogo?: Maybe<Scalars['String']['output']>;
  readonly sponsorLogoAsset: DomainImageAsset;
  /** @deprecated use sponsorLogoDarkAsset */
  readonly sponsorLogoDark?: Maybe<Scalars['String']['output']>;
  readonly sponsorLogoDarkAsset: DomainImageAsset;
  readonly title: Scalars['String']['output'];
};

export type DomainWeatherTemp = DomainRangeWeatherTemp | DomainStandardWeatherTemp;

export type DomainWindDirection =
  | 'EAST'
  | 'NORTH'
  | 'NORTH_EAST'
  | 'NORTH_WEST'
  | 'SOUTH'
  | 'SOUTH_EAST'
  | 'SOUTH_WEST'
  | 'WEST';

export type DomainWinner = {
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
  readonly roundScores?: Maybe<ReadonlyArray<DomainWinnerRoundScore>>;
  readonly seed?: Maybe<Scalars['String']['output']>;
  readonly totalScore: Scalars['String']['output'];
  readonly totalStrokes: Scalars['Int']['output'];
  readonly winnerIcon?: Maybe<DomainWinnerIcon>;
};

export type DomainWinnerIcon = {
  readonly __typename: 'WinnerIcon';
  readonly color: Scalars['String']['output'];
  readonly label: Scalars['String']['output'];
  readonly title: Scalars['String']['output'];
  readonly type: DomainWinnerIconType;
};

export type DomainWinnerIconType =
  | 'BRONZE'
  | 'GOLD'
  | 'SILVER';

export type DomainWinnerRoundScore = {
  readonly __typename: 'WinnerRoundScore';
  readonly label: Scalars['String']['output'];
  readonly total: Scalars['String']['output'];
};

export type DomainYtActivationData = {
  readonly __typename: 'YTActivationData';
  readonly data: Scalars['String']['output'];
  readonly description?: Maybe<Scalars['String']['output']>;
  readonly title?: Maybe<Scalars['String']['output']>;
};

export type DomainYtAdInterstitialCard = {
  readonly __typename: 'YTAdInterstitialCard';
  readonly adUrl: Scalars['String']['output'];
  readonly props: DomainYtCardProps;
};

export type DomainYtArticleCard = {
  readonly __typename: 'YTArticleCard';
  readonly props: DomainYtCardProps;
  readonly title: Scalars['String']['output'];
};

export type DomainYtCardCtaProps = {
  readonly __typename: 'YTCardCtaProps';
  readonly color?: Maybe<Scalars['String']['output']>;
  readonly isTourCastCta: Scalars['Boolean']['output'];
  readonly link: Scalars['String']['output'];
  readonly text: Scalars['String']['output'];
};

export type DomainYtCardProps = {
  readonly __typename: 'YTCardProps';
  readonly backgroundColor?: Maybe<Scalars['String']['output']>;
  readonly cardFranchise?: Maybe<ReadonlyArray<Scalars['String']['output']>>;
  readonly cardHeading?: Maybe<Scalars['String']['output']>;
  readonly cardName?: Maybe<Scalars['String']['output']>;
  readonly cardSubHead?: Maybe<Scalars['String']['output']>;
  readonly cta?: Maybe<DomainYtCardCtaProps>;
  readonly ctaText?: Maybe<Scalars['String']['output']>;
  readonly date: Scalars['AWSTimestamp']['output'];
  readonly deepLink: Scalars['String']['output'];
  readonly deepLinkCard: Scalars['Boolean']['output'];
  readonly disableSlowZoom: Scalars['Boolean']['output'];
  /** @deprecated use imageAsset */
  readonly image?: Maybe<Scalars['String']['output']>;
  readonly imageAsset?: Maybe<DomainImageAsset>;
  readonly link: Scalars['String']['output'];
  readonly opacity: Scalars['Float']['output'];
  /** @deprecated use sponsorLogoAsset */
  readonly sponsorLogo?: Maybe<Scalars['String']['output']>;
  readonly sponsorLogoAsset: DomainImageAsset;
  readonly sponsorText?: Maybe<Scalars['String']['output']>;
  readonly textColor: Scalars['String']['output'];
  readonly textPosition: DomainYtTextPosition;
  readonly tourCastCta: Scalars['Boolean']['output'];
  readonly videoId?: Maybe<Scalars['String']['output']>;
};

export type DomainYtCardSponsorProps = {
  readonly __typename: 'YTCardSponsorProps';
  readonly activationData: ReadonlyArray<DomainYtActivationData>;
  readonly activationSubtitle: Scalars['String']['output'];
  readonly activationTitle: Scalars['String']['output'];
  /** @deprecated use sponsorLogoAsset */
  readonly sponsorLogo: Scalars['String']['output'];
  readonly sponsorLogoAsset: DomainImageAsset;
  /** @deprecated use tournamentLogoAsset */
  readonly tournamentLogo: Scalars['String']['output'];
  readonly tournamentLogoAsset: DomainImageAsset;
  readonly tournamentName: Scalars['String']['output'];
};

export type DomainYtCoverCard = {
  readonly __typename: 'YTCoverCard';
  readonly props: DomainYtCardProps;
  readonly subTitle?: Maybe<Scalars['String']['output']>;
  readonly title: Scalars['String']['output'];
};

export type DomainYtHighlightCard = {
  readonly __typename: 'YTHighlightCard';
  readonly hole?: Maybe<Scalars['String']['output']>;
  readonly props: DomainYtCardProps;
  readonly title: Scalars['String']['output'];
};

export type DomainYtLeaderboardCard = {
  readonly __typename: 'YTLeaderboardCard';
  readonly players: ReadonlyArray<DomainYtPlayer>;
  readonly props: DomainYtCardProps;
  readonly title: Scalars['String']['output'];
  readonly tournament: DomainYtTournament;
};

export type DomainYtNuggetCard = {
  readonly __typename: 'YTNuggetCard';
  readonly props: DomainYtCardProps;
  readonly subText: Scalars['String']['output'];
  readonly title: Scalars['String']['output'];
};

export type DomainYtPlayer = {
  readonly __typename: 'YTPlayer';
  readonly id: Scalars['String']['output'];
  readonly name: Scalars['String']['output'];
};

export type DomainYtRound = {
  readonly __typename: 'YTRound';
  readonly roundDisplay: Scalars['String']['output'];
  readonly roundNumber: Scalars['Int']['output'];
};

export type DomainYtScorecardCard = {
  readonly __typename: 'YTScorecardCard';
  readonly player: DomainYtPlayer;
  readonly props: DomainYtCardProps;
  readonly title: Scalars['String']['output'];
  readonly tournament: DomainYtTournament;
};

export type DomainYtSponsorActivationCard = {
  readonly __typename: 'YTSponsorActivationCard';
  readonly props: DomainYtCardProps;
  readonly sponsorProps: DomainYtCardSponsorProps;
  readonly subTitle?: Maybe<Scalars['String']['output']>;
  readonly title: Scalars['String']['output'];
};

export type DomainYtTextPosition =
  | 'BOTTOM'
  | 'TOP';

export type DomainYtTournament = {
  readonly __typename: 'YTTournament';
  readonly id: Scalars['String']['output'];
  readonly round: DomainYtRound;
};

export type DomainYtTournamentUpdateCard = {
  readonly __typename: 'YTTournamentUpdateCard';
  readonly props: DomainYtCardProps;
  readonly title: Scalars['String']['output'];
};

export type DomainYourTourCard = DomainYtAdInterstitialCard | DomainYtArticleCard | DomainYtCoverCard | DomainYtHighlightCard | DomainYtLeaderboardCard | DomainYtNuggetCard | DomainYtScorecardCard | DomainYtSponsorActivationCard | DomainYtTournamentUpdateCard;

export type DomainYourTourNews = DomainNewsArticle | DomainVideo;

export type DomainYourTourStory = {
  readonly __typename: 'YourTourStory';
  readonly cardTopic?: Maybe<Scalars['String']['output']>;
  readonly cards: ReadonlyArray<DomainYourTourCard>;
  readonly homeCard?: Maybe<DomainYourTourCard>;
  readonly id: Scalars['ID']['output'];
  readonly tglMatchIds?: Maybe<ReadonlyArray<Scalars['String']['output']>>;
  readonly videoStories: ReadonlyArray<DomainYtVideoStory>;
};

export type DomainYtVideoStory = {
  readonly __typename: 'YtVideoStory';
  readonly topicLabel?: Maybe<Scalars['String']['output']>;
  readonly type: DomainYtVideoStoryType;
};

export type DomainYtVideoStoryType =
  | 'PLAYER_STORIES'
  | 'TOPIC_STORIES';

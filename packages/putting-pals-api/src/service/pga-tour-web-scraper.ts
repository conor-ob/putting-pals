export interface PgaTourWebScraper {
  getCurrentTournamentId(): Promise<string | undefined>;
}

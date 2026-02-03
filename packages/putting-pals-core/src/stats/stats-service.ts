import type {
  CompetitionService,
  Competitor,
} from "@putting-pals/putting-pals-api";
import type { TournamentService } from "../tournament/interfaces/inbound/tournament-service";

export class StatsService {
  constructor(
    private readonly competitionService: CompetitionService,
    private readonly tournamentService: TournamentService,
  ) {
    this.competitionService = competitionService;
    this.tournamentService = tournamentService;
  }

  async getEarnings() {
    const competitions = this.competitionService
      .getCompetitions()
      .filter(
        (competition) =>
          (competition.winnerId !== undefined &&
            competition.runnerUpId !== undefined) ||
          competition.competitors.length > 0,
      );
    const tournaments = await this.tournamentService.getTournaments(
      competitions.map((competition) => competition.tournamentId),
    );

    // const completedCompetitions = competitions.filter(
    //   (competition) =>
    //     competition.winnerId !== undefined &&
    //     competition.runnerUpId !== undefined,
    // );
    // const activeCompetitions = competitions.filter(
    //   (competition) =>
    //     competition.winnerId === undefined &&
    //     competition.runnerUpId === undefined &&
    //     competition.competitors.length > 0,
    // );

    // // TODO: handle multiple active competitions
    // if (activeCompetitions[0]?.tournamentId !== undefined) {
    //   const leaderboard = await new LeaderboardService().getLeaderboard(
    //     "P",
    //     activeCompetitions[0].tournamentId,
    //   );
    //   const competitors = leaderboard.rows
    //     .filter((row) => row.__typename === "PuttingPalsPlayerRowV3")
    //     .sort((a, b) => a.leaderboardSortOrder - b.leaderboardSortOrder);
    //   const winnerId = leaderboard.rows[0]?.id;
    //   const runnerUpId = leaderboard.rows[1]?.id;
    //   return [];
    // }
    // return [];
    const statsByCompetitorId = competitions
      .filter(
        (competition) =>
          competition.winnerId !== undefined &&
          competition.runnerUpId !== undefined,
      )
      // .map(async (competition) => {
      //   if (
      //     competition.winnerId !== undefined &&
      //     competition.runnerUpId !== undefined
      //   ) {
      //     const leaderboard = await new LeaderboardService().getLeaderboard(
      //       "P",
      //       competition.tournamentId,
      //     );
      //     // TODO: check if winner exists
      //   }
      //   return competition;
      // })
      .reduce(
        (accumulator, competition) => {
          for (const competitor of competition.competitors) {
            const competitorStats = accumulator.get(competitor.id);
            if (competitorStats === undefined) {
              accumulator.set(competitor.id, {
                competitor: {
                  country: competitor.country,
                  countryFlag: competitor.countryFlag,
                  displayName: competitor.displayName,
                  id: competitor.id,
                  shortName: competitor.shortName,
                },
                stats: {
                  events: 1,
                  earningsSort:
                    competitor.id === competition.winnerId
                      ? competition.winnerPayout
                      : competitor.id === competition.runnerUpId
                        ? competition.runnerUpPayout
                        : 0,
                  entryFeesSort: competition.entryFee,
                  wins:
                    competitor.id === competition.winnerId
                      ? [competition.tournamentId]
                      : [],
                  runnerUps:
                    competitor.id === competition.runnerUpId
                      ? [competition.tournamentId]
                      : [],
                },
              });
            } else {
              competitorStats.stats.events += 1;
              competitorStats.stats.earningsSort +=
                competitor.id === competition.winnerId
                  ? competition.winnerPayout
                  : competitor.id === competition.runnerUpId
                    ? competition.runnerUpPayout
                    : 0;
              competitorStats.stats.entryFeesSort += competition.entryFee;
              competitor.id === competition.winnerId &&
                competitorStats.stats.wins.push(competition.tournamentId);
              competitor.id === competition.runnerUpId &&
                competitorStats.stats.runnerUps.push(competition.tournamentId);
            }
          }
          return accumulator;
        },
        new Map<
          string,
          {
            competitor: Omit<Competitor, "picks">;
            stats: {
              events: number;
              earningsSort: number;
              entryFeesSort: number;
              wins: string[];
              runnerUps: string[];
            };
          }
        >(),
      );

    const result = Array.from(statsByCompetitorId.values())
      .map((entry) => ({
        ...entry,
        stats: {
          ...entry.stats,
          returnsSort: entry.stats.earningsSort - entry.stats.entryFeesSort,
          wins: {
            total: entry.stats.wins.length,
            tournaments: entry.stats.wins,
          },
          runnerUps: {
            total: entry.stats.runnerUps.length,
            tournaments: entry.stats.runnerUps,
          },
        },
      }))
      .map((entry) => ({
        ...entry,
        stats: {
          ...entry.stats,
          earnings:
            entry.stats.earningsSort < 0
              ? `-€${entry.stats.earningsSort * -1}`
              : `€${entry.stats.earningsSort}`,
          entryFees:
            entry.stats.entryFeesSort < 0
              ? `-€${entry.stats.entryFeesSort * -1}`
              : `€${entry.stats.entryFeesSort}`,
          returns:
            entry.stats.returnsSort < 0
              ? `-€${entry.stats.returnsSort * -1}`
              : `€${entry.stats.returnsSort}`,
        },
      }))
      .sort((a, b) => b.stats.earningsSort - a.stats.earningsSort);
    return {
      competitors: result,
      tournaments: tournaments,
    };
  }
}

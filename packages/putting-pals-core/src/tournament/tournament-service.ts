import { TournamentClient } from "@putting-pals/pga-tour-api/tournament";
import { PgaTourWebScraper } from "@putting-pals/pga-tour-scaper/scraper";

export class TournamentService {
  private readonly pgaTourApiKey: string;

  constructor(pgaTourApiKey: string) {
    this.pgaTourApiKey = pgaTourApiKey;
  }

  // TODO: get by tournament id or competition id
  async getTournament(id?: string) {
    if (id) {
      return this.getTournamentById(id);
    } else {
      return new PgaTourWebScraper()
        .getCurrentTournamentId()
        .then((id) => this.getTournamentById(id));
    }
  }

  private async getTournamentById(id: string) {
    return this.getTournaments([id]).then((tournaments) => {
      const tournament = tournaments[0];
      if (tournament) {
        return tournament;
      } else {
        // TODO: error handling
        throw new Error(`Tournament with id=${id} not found`);
      }
    });
  }

  private async getTournaments(ids: string[]) {
    return (
      await new TournamentClient(this.pgaTourApiKey).getTournaments(ids)
    ).map(
      (tournament) =>
        ({
          ...tournament,
          tournamentName: this.sanitizeTournamentName(
            tournament.tournamentName,
          ),
        }) satisfies typeof tournament,
    );
  }

  private sanitizeTournamentName(name: string) {
    const isNumeric = (val: string): boolean => {
      return !Number.isNaN(Number(val));
    };

    let adjustedName = name;
    const parts = adjustedName.split("(");
    if (parts.length > 1) {
      const remainder = parts[1]?.split(")");
      if (
        remainder !== undefined &&
        remainder.length > 1 &&
        isNumeric(remainder[0] ?? "")
      ) {
        adjustedName = `${parts[0]?.trim()} ${remainder[1]?.trim()}`;
      }
    }
    return adjustedName;
  }
}

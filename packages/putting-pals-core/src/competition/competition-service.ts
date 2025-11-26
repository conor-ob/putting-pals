import { FileReader } from "@putting-pals/putting-pals-data/file-reader";
import { CompetitionSchema } from "@putting-pals/putting-pals-schema/schemas";

export class CompetitionService {
  getCompetition(id: string) {
    const competition = this.getAllCompetitions().find(
      (competition) => competition.tournamentId === id,
    );
    if (!competition) {
      // TODO: error handling
      throw new Error(`Competition with id=${id} not found`);
    }
    return competition;
  }

  getAllCompetitions() {
    return new FileReader()
      .readAllCompetitionFiles()
      .map((fileContent) => CompetitionSchema.parse(fileContent));
  }
}

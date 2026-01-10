import { FileReader } from "@putting-pals/putting-pals-data/file-reader";
import { CompetitionSchema } from "@putting-pals/putting-pals-schema";
import { NotFoundError } from "../utils/service-error";

export class CompetitionService {
  getCompetition(id: string) {
    const competition = this.getCompetitions().find(
      (competition) => competition.tournamentId === id,
    );
    if (competition === undefined) {
      throw new NotFoundError(`Competition with id=${id} not found`);
    }
    return competition;
  }

  getCompetitions() {
    return new FileReader()
      .readCompetitionFiles()
      .map((fileContent) => CompetitionSchema.parse(fileContent));
  }
}

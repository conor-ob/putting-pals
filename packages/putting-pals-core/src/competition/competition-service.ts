import { FileReader } from "@putting-pals/putting-pals-data/file-reader";
import { CompetitionSchema } from "@putting-pals/putting-pals-schema/schemas";
import { NotFoundError } from "../utils/service-error";

export class CompetitionService {
  getCompetition(id: string) {
    const competition = this.getAllCompetitions().find(
      (competition) => competition.tournamentId === id,
    );
    if (!competition) {
      throw new NotFoundError(`Competition with id=${id} not found`);
    }
    return competition;
  }

  getAllCompetitions() {
    return new FileReader()
      .readAllCompetitionFiles()
      .map((fileContent) => CompetitionSchema.parse(fileContent));
  }
}

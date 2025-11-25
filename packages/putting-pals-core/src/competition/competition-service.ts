import { FileReader } from "@putting-pals/putting-pals-data/file-reader";
import { CompetitionSchema } from "@putting-pals/putting-pals-schema/schemas";

export class CompetitionService {
  getAllCompetitions() {
    return new FileReader()
      .readAllCompetitionFiles()
      .map((fileContent) => CompetitionSchema.parse(fileContent));
  }
}

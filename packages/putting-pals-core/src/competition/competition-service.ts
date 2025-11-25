import { FileReader } from "@putting-pals/putting-pals-data/file-reader";
import { CompetitionSchema } from "@putting-pals/putting-pals-schema/schemas";

export class CompetitionService {
  async getAllCompetitions() {
    return new FileReader().readAllCompetitionFiles().then((fileContents) => {
      return fileContents.map((fileContent) =>
        CompetitionSchema.parse(fileContent),
      );
    });
  }
}

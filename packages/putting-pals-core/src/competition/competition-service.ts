import { FileReader } from "@putting-pals/putting-pals-data/file-reader";
import {
  type Competition,
  CompetitionSchema,
  type CompetitionService,
} from "@putting-pals/putting-pals-schema";
import { NotFoundError } from "../utils/service-error";

export class CompetitionServiceImpl implements CompetitionService {
  getCompetition(id: string): Competition {
    const competition = this.getCompetitions().find(
      (competition) => competition.tournamentId === id,
    );
    if (competition === undefined) {
      throw new NotFoundError(`Competition with id=${id} not found`);
    }
    return competition;
  }

  getCompetitions(): Competition[] {
    return new FileReader()
      .readCompetitionFiles()
      .map((fileContent) => CompetitionSchema.parse(fileContent));
  }
}

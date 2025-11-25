import { Database } from "@putting-pals/putting-pals-data/database";
import { CompetitionSchema } from "@putting-pals/putting-pals-schema/schemas";

export class CompetitionService {
  async getAllCompetitions() {
    const database = new Database();
    return database.getAllCompetitions().then((competitions) => {
      return competitions.map((competition) =>
        CompetitionSchema.parse(competition),
      );
    });
  }
}

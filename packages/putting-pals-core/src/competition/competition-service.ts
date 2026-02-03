import type { Competition } from "@putting-pals/putting-pals-api";
import { NotFoundError } from "@putting-pals/putting-pals-api";
import type { CompetitionService } from "./interfaces/inbound/competition-service";
import type { CompetitionRepository } from "./interfaces/outbound/competition-repository";

export class CompetitionServiceImpl implements CompetitionService {
  constructor(private readonly competitionRepository: CompetitionRepository) {
    this.competitionRepository = competitionRepository;
  }

  getCompetition(id: string): Competition {
    const competition = this.competitionRepository.getCompetition(id);
    if (competition === undefined) {
      throw new NotFoundError(`Competition with id=${id} not found`);
    }
    return competition;
  }

  getCompetitions(): Competition[] {
    return this.competitionRepository.getCompetitions();
  }
}

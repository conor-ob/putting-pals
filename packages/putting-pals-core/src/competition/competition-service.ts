import type {
  Competition,
  CompetitionRepository,
  CompetitionService,
} from "@putting-pals/putting-pals-api";
import { NotFoundError } from "@putting-pals/putting-pals-api";

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

import type { CompetitionRepository } from "@putting-pals/putting-pals-core";
import { CompetitionRepositoryImpl } from "../repository/competition-repository";

export function injectDependencies(): {
  competitionRepository: CompetitionRepository;
} {
  return {
    competitionRepository: new CompetitionRepositoryImpl(),
  };
}

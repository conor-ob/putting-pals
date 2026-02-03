import {
  type Competition,
  CompetitionSchema,
} from "@putting-pals/putting-pals-api";
import type { CompetitionRepository } from "@putting-pals/putting-pals-core";
import mastersTournament2021 from "./data/2021/01-masters-tournament";
import pgaChampionship2021 from "./data/2021/02-pga-championship";
import usOpen2021 from "./data/2021/03-us-open";
import theOpenChampionship2021 from "./data/2021/04-the-open-championship";
import mastersTournament2022 from "./data/2022/01-masters-tournament";
import pgaChampionship2022 from "./data/2022/02-pga-championship";
import usOpen2022 from "./data/2022/03-us-open";
import theOpenChampionship2022 from "./data/2022/04-the-open-championship";
import mastersTournament2023 from "./data/2023/01-masters-tournament";
import pgaChampionship2023 from "./data/2023/02-pga-championship";
import usOpen2023 from "./data/2023/03-us-open";
import theOpenChampionship2023 from "./data/2023/04-the-open-championship";
import mastersTournament2024 from "./data/2024/01-masters-tournament";
import pgaChampionship2024 from "./data/2024/02-pga-championshi";
import usOpen2024 from "./data/2024/03-us-open";
import theOpenChampionship2024 from "./data/2024/04-the-open-championship";
import mastersTournament2025 from "./data/2025/01-masters-tournament";
import pgaChampionship2025 from "./data/2025/02-pga-championship";
import usOpen2025 from "./data/2025/03-us-open";
import theOpenChampionship2025 from "./data/2025/04-the-open-championship";
import mastersTournament2026 from "./data/2026/01-masters-tournament";
import pgaChampionship2026 from "./data/2026/02-pga-championship";
import usOpen2026 from "./data/2026/03-us-open";
import theOpenChampionship2026 from "./data/2026/04-the-open-championship";

export class CompetitionRepositoryImpl implements CompetitionRepository {
  getCompetition(id: string): Competition | undefined {
    return this.getCompetitions().find(
      (competition) => competition.tournamentId === id,
    );
  }

  getCompetitions(): Competition[] {
    return this.readCompetitionFiles();
  }

  private readCompetitionFiles(): Competition[] {
    return [
      mastersTournament2021,
      pgaChampionship2021,
      usOpen2021,
      theOpenChampionship2021,
      mastersTournament2022,
      pgaChampionship2022,
      usOpen2022,
      theOpenChampionship2022,
      mastersTournament2023,
      pgaChampionship2023,
      usOpen2023,
      theOpenChampionship2023,
      mastersTournament2024,
      pgaChampionship2024,
      usOpen2024,
      theOpenChampionship2024,
      mastersTournament2025,
      pgaChampionship2025,
      usOpen2025,
      theOpenChampionship2025,
      mastersTournament2026,
      pgaChampionship2026,
      usOpen2026,
      theOpenChampionship2026,
    ].map((fileContent) => CompetitionSchema.parse(fileContent));
  }
}

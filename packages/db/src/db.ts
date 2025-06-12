import mastersTournament2021 from "./data/2021/mastersTournament";
import pgaChampionship2021 from "./data/2021/pgaChampionship";
import theOpenChampionship2021 from "./data/2021/theOpenChampionship";
import usOpen2021 from "./data/2021/usOpen";
import mastersTournament2022 from "./data/2022/mastersTournament";
import pgaChampionship2022 from "./data/2022/pgaChampionship";
import theOpenChampionship2022 from "./data/2022/theOpenChampionship";
import usOpen2022 from "./data/2022/usOpen";
import mastersTournament2023 from "./data/2023/mastersTournament";
import pgaChampionship2023 from "./data/2023/pgaChampionship";
import theOpenChampionship2023 from "./data/2023/theOpenChampionship";
import usOpen2023 from "./data/2023/usOpen";
import mastersTournament2024 from "./data/2024/mastersTournament";
import pgaChampionship2024 from "./data/2024/pgaChampionship";
import theOpenChampionship2024 from "./data/2024/theOpenChampionship";
import usOpen2024 from "./data/2024/usOpen";
import mastersTournament2025 from "./data/2025/mastersTournament";
import pgaChampionship2025 from "./data/2025/pgaChampionship";
import theOpenChampionship2025 from "./data/2025/theOpenChampionship";
import usOpen2025 from "./data/2025/usOpen";

const majorCompetitions2021 = [
  mastersTournament2021,
  pgaChampionship2021,
  usOpen2021,
  theOpenChampionship2021,
];
const majorCompetitions2022 = [
  mastersTournament2022,
  pgaChampionship2022,
  usOpen2022,
  theOpenChampionship2022,
];
const majorCompetitions2023 = [
  mastersTournament2023,
  pgaChampionship2023,
  usOpen2023,
  theOpenChampionship2023,
];
const majorCompetitions2024 = [
  mastersTournament2024,
  pgaChampionship2024,
  usOpen2024,
  theOpenChampionship2024,
];
const majorCompetitions2025 = [
  mastersTournament2025,
  pgaChampionship2025,
  usOpen2025,
  theOpenChampionship2025,
];
const competitions = [
  ...majorCompetitions2021,
  ...majorCompetitions2022,
  ...majorCompetitions2023,
  ...majorCompetitions2024,
  ...majorCompetitions2025,
].map((it) => ({
  ...it,
  seasonId: getSeasonId(it.tournamentId),
  name: getName(it.tournamentId),
  shortName: getShortName(it.tournamentId),
  scoringRules: getScoringRules(it.tournamentId),
}));

export class CompetitionDatabase {
  public getCompetition(tournamentId: string) {
    const competition = competitions.find(
      (it) => it.tournamentId === tournamentId,
    );
    if (competition === undefined) {
      throw new Error("Competition not found");
    } else {
      return competition;
    }
  }

  public getCompetitions(seasonId?: string) {
    return competitions.filter((it) => {
      if (seasonId === undefined) {
        return true;
      } else {
        return it.seasonId === seasonId;
      }
    });
  }

  public getCurrentTournamentId() {
    const competitions = this.getCompetitions();

    const competitionsWithPicks = competitions.filter(
      (it) => it.competitors.flatMap((it) => it.picks).length > 0,
    );

    const competitionsWithoutPicks = competitions.filter(
      (it) => it.competitors.flatMap((it) => it.picks).length === 0,
    );

    const oddsAvailable =
      competitionsWithoutPicks.length > 0 &&
      competitionsWithoutPicks[0]?.paddyPowerId !== undefined;

    let tournamentId;
    if (oddsAvailable) {
      tournamentId = competitionsWithoutPicks[0]?.tournamentId;
    } else {
      tournamentId =
        competitionsWithPicks[competitionsWithPicks.length - 1]?.tournamentId;
    }

    if (tournamentId === undefined) {
      throw new Error("Tournament not found");
    } else {
      return tournamentId;
    }
  }
}

function getSeasonId(tournamentId: string) {
  if (tournamentId.startsWith("R2021")) {
    return "2021";
  } else if (tournamentId.startsWith("R2022")) {
    return "2022";
  } else if (tournamentId.startsWith("R2023")) {
    return "2023";
  } else if (tournamentId.startsWith("R2024")) {
    return "2024";
  } else if (tournamentId.startsWith("R2025")) {
    return "2025";
  } else {
    throw new Error("Invalid tournamentId");
  }
}

function getName(tournamentId: string) {
  if (tournamentId.endsWith("536") || tournamentId.endsWith("014")) {
    return "Masters Tournament";
  } else if (tournamentId.endsWith("033")) {
    return "PGA Championship";
  } else if (tournamentId.endsWith("535") || tournamentId.endsWith("026")) {
    return "U.S. Open";
  } else if (tournamentId.endsWith("100")) {
    return "The Open Championship";
  } else {
    throw new Error("Invalid tournamentId");
  }
}

function getShortName(tournamentId: string) {
  if (tournamentId.endsWith("536") || tournamentId.endsWith("014")) {
    return "Masters";
  } else if (tournamentId.endsWith("033")) {
    return "PGA";
  } else if (tournamentId.endsWith("535") || tournamentId.endsWith("026")) {
    return "US Open";
  } else if (tournamentId.endsWith("100")) {
    return "Open";
  } else {
    throw new Error("Invalid tournamentId");
  }
}

function getScoringRules(tournamentId: string) {
  if (tournamentId === "R2025026") {
    return "MISSED_CUT";
  }

  return undefined;
}

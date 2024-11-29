import { mastersTournament2021 } from "./data/2021/mastersTournament2021";
import { pgaChampionship2021 } from "./data/2021/pgaChampionship2021";
import { theOpenChampionship2021 } from "./data/2021/theOpenChampionship2021";
import { usOpen2021 } from "./data/2021/usOpen2021";
import { mastersTournament2022 } from "./data/2022/mastersTournament2022";
import { pgaChampionship2022 } from "./data/2022/pgaChampionship2022";
import { theOpenChampionship2022 } from "./data/2022/theOpenChampionship2022";
import { usOpen2022 } from "./data/2022/usOpen2022";
import { mastersTournament2023 } from "./data/2023/mastersTournament2023";
import { pgaChampionship2023 } from "./data/2023/pgaChampionship2023";
import { theOpenChampionship2023 } from "./data/2023/theOpenChampionship2023";
import { usOpen2023 } from "./data/2023/usOpen2023";
import { mastersTournament2024 } from "./data/2024/mastersTournament2024";
import { pgaChampionship2024 } from "./data/2024/pgaChampionship2024";
import { theOpenChampionship2024 } from "./data/2024/theOpenChampionship2024";
import { usOpen2024 } from "./data/2024/usOpen2024";

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
const competitions = [
  ...majorCompetitions2021,
  ...majorCompetitions2022,
  ...majorCompetitions2023,
  ...majorCompetitions2024,
];

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

    // const tournamentsWithoutPicks = tournaments.filter(
    //   (it) => it.players.flatMap((it) => it.picks).length === 0,
    // );

    const id =
      competitionsWithPicks[competitionsWithPicks.length - 1]?.tournamentId;
    if (id === undefined) {
      throw new Error("No competition found");
    } else {
      return id;
    }

    // const oddsAvailable =
    //   tournamentsWithoutPicks.length > 0 &&
    //   tournamentsWithoutPicks[0].paddyPowerId;

    // if (oddsAvailable) {
    //   return {
    //     currentTournamentId: tournamentsWithoutPicks[0].id,
    //   };
    // } else {
    //   return {
    //     currentTournamentId:
    //       tournamentsWithPicks[tournamentsWithPicks.length - 1].id,
    //   };
    // }
  }
}

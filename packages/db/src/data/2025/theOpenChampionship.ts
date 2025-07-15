import {
  aimeeOhanlon,
  brianObrolchain,
  conorObrien,
  johnHannaway,
  richByrne,
  robJoy,
} from "../competitors/puttingPalsCompetitors";
import {
  aldrichPotgieter,
  brianHarman,
  coreyConners,
  harrisEnglish,
  justinThomas,
  ludvigAberg,
  mattFitzpatrick,
  roryMcilroy,
  scottieScheffler,
  shaneLowry,
  tomMcKibbin,
  tommyFleetwood,
  xanderSchauffele,
} from "../players/pgaTourPlayers";

export default {
  tournamentId: "R2025100",
  paddyPowerId: undefined,
  winnerId: undefined,
  runnerUpId: undefined,
  competitors: [
    {
      ...robJoy,
      picks: [scottieScheffler, roryMcilroy, aldrichPotgieter], // 4.5 + 7 + 175 = 186.5/1
    },
    {
      ...conorObrien,
      picks: [roryMcilroy, xanderSchauffele, brianHarman], // 7 + 25 + 110 = 142/1
    },
    {
      ...richByrne,
      picks: [scottieScheffler, roryMcilroy, tomMcKibbin], // 4.5 + 7 + 125 = 136.5/1
    },
    {
      ...johnHannaway,
      picks: [scottieScheffler, ludvigAberg, harrisEnglish], // 4.5 + 28 + 100 = 132.5/1
    },
    {
      ...brianObrolchain,
      picks: [tommyFleetwood, shaneLowry, coreyConners], // 28 + 33 + 66 = 127/1
    },
    {
      ...aimeeOhanlon,
      picks: [xanderSchauffele, mattFitzpatrick, justinThomas], // 25 + 50 + 50 = 125/1
    },
  ],
};

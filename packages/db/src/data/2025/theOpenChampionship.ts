import {
  aidanWalsh,
  aimeeOhanlon,
  brianObrolchain,
  cameronFolens,
  conorObrien,
  davidHynes,
  johnHannaway,
  karlCurran,
  phelimOconnor,
  richByrne,
  robJoy,
  robKeartland,
  stephenDevine,
} from "../competitors/puttingPalsCompetitors";
import {
  aldrichPotgieter,
  brianHarman,
  coreyConners,
  danielBrown,
  harrisEnglish,
  jonRahm,
  jordanSpieth,
  justinRose,
  justinThomas,
  keeganBradley,
  ludvigAberg,
  marcoPenge,
  mattFitzpatrick,
  padraigHarrington,
  roryMcilroy,
  scottieScheffler,
  shaneLowry,
  tomMcKibbin,
  tommyFleetwood,
  viktorHovland,
  xanderSchauffele,
} from "../players/pgaTourPlayers";

export default {
  tournamentId: "R2025100",
  paddyPowerId: undefined,
  winnerId: undefined,
  runnerUpId: undefined,
  competitors: [
    {
      ...davidHynes,
      picks: [roryMcilroy, shaneLowry, padraigHarrington], // 7 + 33 + 275 = 315/1
    },
    {
      ...stephenDevine,
      picks: [roryMcilroy, ludvigAberg, danielBrown], // 7 + 28 + 250 = 285/1
    },
    {
      ...robJoy,
      picks: [scottieScheffler, roryMcilroy, aldrichPotgieter], // 4.5 + 7 + 175 = 186.5/1
    },
    {
      ...aidanWalsh,
      picks: [jonRahm, tommyFleetwood, marcoPenge], // 12 + 28 + 125 = 165/1
    },
    {
      ...conorObrien,
      picks: [roryMcilroy, xanderSchauffele, brianHarman], // 7 + 25 + 110 = 142/1
    },
    {
      ...robKeartland,
      picks: [jonRahm, tommyFleetwood, harrisEnglish], // 12 + 28 + 100 = 140/1
    },
    {
      ...richByrne,
      picks: [scottieScheffler, roryMcilroy, tomMcKibbin], // 4.5 + 7 + 125 = 136.5/1
    },
    {
      ...phelimOconnor,
      picks: [viktorHovland, mattFitzpatrick, jordanSpieth], // 30 + 50 + 55 = 135/1
    },
    {
      ...johnHannaway,
      picks: [scottieScheffler, ludvigAberg, harrisEnglish], // 4.5 + 28 + 100 = 132.5/1
    },
    {
      ...karlCurran,
      picks: [roryMcilroy, mattFitzpatrick, justinRose], // 7 + 50 + 75 = 132/1
    },
    {
      ...cameronFolens,
      picks: [jonRahm, tommyFleetwood, keeganBradley], // 12 + 28 + 90 = 130/1
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

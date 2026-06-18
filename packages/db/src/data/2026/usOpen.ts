import {
  aidanWalsh,
  aimeeOhanlon,
  brianObrolchain,
  cameronFolens,
  conorObrien,
  davidHynes,
  johnHannaway,
  phelimOconnor,
  richByrne,
  robJoy,
  robKeartland,
} from "../competitors/puttingPalsCompetitors";
import {
  aaronRai,
  adamScott,
  alexNoren,
  cameronYoung,
  collinMorikawa,
  garyWoodland,
  jacobBridgeman,
  jonRahm,
  jordanSpieth,
  jtPoston,
  justinRose,
  mattFitzpatrick,
  rickieFowler,
  robertMacIntyre,
  roryMcilroy,
  ryanGerard,
  scottieScheffler,
  shaneLowry,
  tommyFleetwood,
  tyrrellHatton,
  wyndhamClark,
  xanderSchauffele,
} from "../players/pgaTourPlayers";

export default {
  tournamentId: "R2026026",
  paddyPowerId: undefined,
  winnerId: undefined,
  runnerUpId: undefined,
  competitors: [
    {
      ...conorObrien,
      picks: [mattFitzpatrick, cameronYoung, jacobBridgeman], // 18 + 20 + 100 = 138/1
    },
    {
      ...aidanWalsh,
      picks: [mattFitzpatrick, tommyFleetwood, garyWoodland], // 18 + 20 + 100 = 138/1
    },
    {
      ...phelimOconnor,
      picks: [roryMcilroy, shaneLowry, adamScott], // 11 + 60 + 66 = 137/1
    },
    {
      ...brianObrolchain,
      picks: [xanderSchauffele, shaneLowry, robertMacIntyre], // 16 + 60 + 60 = 136/1
    },
    {
      ...robKeartland,
      picks: [jonRahm, jordanSpieth, shaneLowry], // 14 + 55 + 66 = 135/1
    },
    {
      ...davidHynes,
      picks: [collinMorikawa, justinRose, shaneLowry], // 35 + 40 + 60 = 135/1
    },
    {
      ...aimeeOhanlon,
      picks: [scottieScheffler, xanderSchauffele, rickieFowler], // 5.5 + 16 + 110 = 131.5/1
    },
    {
      ...johnHannaway,
      picks: [scottieScheffler, shaneLowry, aaronRai], // 5.5 + 60 + 66 = 131.5/1
    },
    {
      ...richByrne,
      picks: [roryMcilroy, tyrrellHatton, ryanGerard], // 11 + 40 + 80 = 131/1
    },
    {
      ...robJoy,
      picks: [scottieScheffler, roryMcilroy, jtPoston], // 5.5 + 11 + 110 = 126.5/1
    },
    {
      ...cameronFolens,
      picks: [scottieScheffler, wyndhamClark, alexNoren], // 5.5 + 40 + 80 = 125.5/1
    },
  ],
};

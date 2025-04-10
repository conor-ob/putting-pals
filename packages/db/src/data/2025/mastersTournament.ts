import {
  aidanWalsh,
  aimeeOhanlon,
  brianObrolchain,
  cameronFolens,
  ciaranTighe,
  conorObrien,
  davidHynes,
  johnHannaway,
  karlCurran,
  markByrne,
  niallCronin,
  phelimOconnor,
  richByrne,
  robJoy,
  stephenDevine,
} from "../competitors/puttingPalsCompetitors";
import {
  aaronRai,
  akshayBhatia,
  brysonDeChambeau,
  cameronSmith,
  cameronYoung,
  collinMorikawa,
  joaquinNiemann,
  justinRose,
  justinThomas,
  lucasGlover,
  ludvigAberg,
  mattFitzpatrick,
  minWooLee,
  patrickReed,
  rasmusHojgaard,
  robertMacIntyre,
  roryMcilroy,
  sahithTheegala,
  scottieScheffler,
  sergioGarcia,
  shaneLowry,
  tomKim,
  tommyFleetwood,
  tonyFinau,
  viktorHovland,
  xanderSchauffele,
} from "../players/pgaTourPlayers";

export default {
  tournamentId: "R2025014",
  paddyPowerId: undefined,
  winnerId: undefined,
  runnerUpId: undefined,
  competitors: [
    {
      ...brianObrolchain,
      picks: [scottieScheffler, roryMcilroy, rasmusHojgaard], // 5 + 6 + 150 = 161/1
    },
    {
      ...cameronFolens,
      picks: [scottieScheffler, roryMcilroy, lucasGlover], // 5 + 6 + 140 = 151/1
    },
    {
      ...richByrne,
      picks: [scottieScheffler, robertMacIntyre, justinRose], // 5 + 45 + 90 = 140/1
    },
    {
      ...robJoy,
      picks: [roryMcilroy, justinThomas, sahithTheegala], // 6 + 21 + 110 = 137/1
    },
    {
      ...davidHynes,
      picks: [tommyFleetwood, shaneLowry, tonyFinau], // 33 + 33 + 66 = 132/1
    },
    {
      ...markByrne,
      picks: [scottieScheffler, collinMorikawa, mattFitzpatrick], // 5 + 15 + 110 = 130/1
    },
    {
      ...ciaranTighe,
      picks: [scottieScheffler, ludvigAberg, aaronRai], // 5 + 15 + 110 = 130/1
    },
    {
      ...niallCronin,
      picks: [roryMcilroy, shaneLowry, justinRose], // 6 + 33 + 90 = 129/1
    },
    {
      ...karlCurran,
      picks: [roryMcilroy, shaneLowry, justinRose], // 6 + 33 + 90 = 129/1
    },
    {
      ...aimeeOhanlon,
      picks: [scottieScheffler, shaneLowry, justinRose], // 5 + 33 + 90 = 128/1
    },
    {
      ...conorObrien,
      picks: [brysonDeChambeau, xanderSchauffele, tomKim], // 17 + 19 + 90 = 126/1
    },
    {
      ...stephenDevine,
      picks: [roryMcilroy, minWooLee, sergioGarcia], // 6 + 50 + 70 = 126/1
    },
    {
      ...johnHannaway,
      picks: [joaquinNiemann, viktorHovland, akshayBhatia], // 25 + 35 + 66 = 126/1
    },
    {
      ...phelimOconnor,
      picks: [scottieScheffler, cameronSmith, patrickReed], // 5 + 50 + 70 = 125/1
    },
    {
      ...aidanWalsh,
      picks: [scottieScheffler, roryMcilroy, cameronYoung], // 5 + 6 + 110 = 121/1
    },
  ],
};

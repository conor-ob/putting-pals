import {
  aidanWalsh,
  aimeeOhanlon,
  brianObrolchain,
  cameronFolens,
  cianMoynihan,
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
  roryCoffey,
  stephenDevine,
} from "../../competitors/putting-pals-competitors";
import {
  aaronRai,
  akshayBhatia,
  brysonDeChambeau,
  cameronSmith,
  collinMorikawa,
  coreyConners,
  joaquinNiemann,
  justinRose,
  justinThomas,
  keeganBradley,
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
  seppStraka,
  sergioGarcia,
  shaneLowry,
  tomKim,
  tommyFleetwood,
  tonyFinau,
  viktorHovland,
  xanderSchauffele,
} from "../../players/pga-tour-players";

export default {
  tournamentId: "R2025014",
  paddyPowerId: undefined,
  winnerId: roryCoffey.id,
  runnerUpId: brianObrolchain.id,
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
      ...aidanWalsh,
      picks: [collinMorikawa, minWooLee, seppStraka], // 15 + 50 + 70 = 135/1
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
      picks: [roryMcilroy, shaneLowry, keeganBradley], // 6 + 33 + 90 = 129/1
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
      ...cianMoynihan,
      picks: [ludvigAberg, robertMacIntyre, tonyFinau], // 15 + 45 + 66 = 126/1
    },
    {
      ...phelimOconnor,
      picks: [scottieScheffler, cameronSmith, patrickReed], // 5 + 50 + 70 = 125/1
    },
    {
      ...roryCoffey,
      picks: [scottieScheffler, coreyConners, patrickReed], // 5 + 50 + 70 = 125/1
    },
  ],
};

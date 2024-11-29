import {
  aidanWalsh,
  aimeeOhanlon,
  brianObrolchain,
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
  robKeartland,
  stephenDevine,
} from "../competitors/puttingPalsCompetitors";
import {
  adamScott,
  akshayBhatia,
  brysonDeChambeau,
  chrisKirk,
  christiaanBezuidenhout,
  jasonDay,
  joaquinNiemann,
  ludvigAberg,
  maxHoma,
  rickieFowler,
  roryMcilroy,
  scottieScheffler,
  seppStraka,
  shaneLowry,
  sungjaeIm,
  taylorPendrith,
  tigerWoods,
  tomKim,
  tommyFleetwood,
  tonyFinau,
  viktorHovland,
  xanderSchauffele,
} from "../players/pgaTourPlayers";

export const pgaChampionship2024 = {
  tournamentId: "R2024033",
  seasonId: "2024",
  shortName: "PGA",
  name: "PGA Championship",
  paddyPowerId: "12593099",
  winnerId: davidHynes.id,
  runnerUpId: aimeeOhanlon.id,
  competitors: [
    {
      ...markByrne,
      picks: [roryMcilroy, ludvigAberg, rickieFowler], // 6 + 11 + 150 = 167/1
    },
    {
      ...richByrne,
      picks: [scottieScheffler, xanderSchauffele, chrisKirk], // 3 + 10 + 150 = 163/1
    },
    {
      ...brianObrolchain,
      picks: [roryMcilroy, brysonDeChambeau, christiaanBezuidenhout], // 6 + 81 + 125 = 140/1
    },
    {
      ...robKeartland,
      picks: [xanderSchauffele, jasonDay, sungjaeIm], // 10 + 60 + 70 = 140/1
    },
    {
      ...johnHannaway,
      picks: [scottieScheffler, ludvigAberg, tigerWoods], // 3 + 11 + 125 = 139/1
    },
    {
      ...robJoy,
      picks: [roryMcilroy, tonyFinau, sungjaeIm], // 6 + 60 + 70 = 136/1
    },
    {
      ...niallCronin,
      picks: [scottieScheffler, roryMcilroy, tigerWoods], // 3 + 6 + 125 = 134
    },
    {
      ...conorObrien,
      picks: [scottieScheffler, roryMcilroy, christiaanBezuidenhout], // 3 + 6 + 125 = 134/1
    },
    {
      ...karlCurran,
      picks: [roryMcilroy, maxHoma, adamScott], // 6 + 28 + 100 = 134/1
    },
    {
      ...aidanWalsh,
      picks: [roryMcilroy, maxHoma, taylorPendrith], // 6 + 28 + 100 = 134/1
    },
    {
      ...stephenDevine,
      picks: [roryMcilroy, viktorHovland, seppStraka], // 6 + 45 + 80 = 131/1
    },
    {
      ...davidHynes,
      picks: [tommyFleetwood, viktorHovland, tonyFinau], // 25 + 45 + 60 = 130/1
    },
    {
      ...phelimOconnor,
      picks: [roryMcilroy, ludvigAberg, tomKim], // 6 + 11 + 110 = 127/1
    },
    {
      ...aimeeOhanlon,
      picks: [scottieScheffler, joaquinNiemann, shaneLowry], // 3 + 33 + 90 = 126/1
    },
    {
      ...ciaranTighe,
      picks: [ludvigAberg, tommyFleetwood, akshayBhatia], // 11 + 25 + 90 = 126/1
    },
  ],
};

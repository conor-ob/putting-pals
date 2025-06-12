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
  roryCoffey,
  stephenDevine,
} from "../competitors/puttingPalsCompetitors";
import {
  aaronRai,
  akshayBhatia,
  benGriffin,
  brysonDeChambeau,
  cameronYoung,
  harrisEnglish,
  hidekiMatsuyama,
  jonRahm,
  patrickCantlay,
  roryMcilroy,
  ryanFox,
  scottieScheffler,
  seppStraka,
  shaneLowry,
  tonyFinau,
  viktorHovland,
  xanderSchauffele,
} from "../players/pgaTourPlayers";

export default {
  tournamentId: "R2025026",
  paddyPowerId: undefined,
  winnerId: undefined,
  runnerUpId: undefined,
  competitors: [
    {
      ...stephenDevine,
      picks: [jonRahm, benGriffin, harrisEnglish], // 12 + 66 + 80 = 158/1
    },
    {
      ...robJoy,
      picks: [scottieScheffler, hidekiMatsuyama, ryanFox], // 2.75 + 50 + 100 = 152.75/1
    },
    {
      ...conorObrien,
      picks: [roryMcilroy, patrickCantlay, tonyFinau], // 11 + 40 + 100 = 151/1
    },
    {
      ...davidHynes,
      picks: [roryMcilroy, shaneLowry, tonyFinau], // 11 + 40 + 100 = 151/1
    },
    {
      ...aidanWalsh,
      picks: [brysonDeChambeau, jonRahm, cameronYoung], // 7 + 12 + 125 = 144/1
    },
    {
      ...richByrne,
      picks: [scottieScheffler, jonRahm, cameronYoung], // 2.75 + 12 + 125 = 139.75/1
    },
    {
      ...brianObrolchain,
      picks: [scottieScheffler, brysonDeChambeau, akshayBhatia], // 2.75 + 7 + 125 = 134.75/1
    },
    {
      ...robKeartland,
      picks: [scottieScheffler, brysonDeChambeau, cameronYoung], // 2.75 + 7 + 125 = 134.75/1,
    },
    {
      ...aimeeOhanlon,
      picks: [scottieScheffler, viktorHovland, harrisEnglish], // 2.75 + 50 + 80 = 132.75/1
    },
    {
      ...phelimOconnor,
      picks: [scottieScheffler, seppStraka, harrisEnglish], // 2.75 + 50 + 80 = 132.75/1
    },
    {
      ...roryCoffey,
      picks: [brysonDeChambeau, xanderSchauffele, aaronRai], // 7 + 22 + 100 = 129/1
    },
    {
      ...cameronFolens,
      picks: [brysonDeChambeau, shaneLowry, harrisEnglish], // 7 + 40 + 80 = 127/1
    },
    {
      ...johnHannaway,
      picks: [brysonDeChambeau, shaneLowry, harrisEnglish], // 7 + 40 + 80 = 127/1
    },
  ],
};

import {
  aidanWalsh,
  aimeeOhanlon,
  brianObrolchain,
  cameronFolens,
  conorObrien,
  davidHynes,
  johnHannaway,
  markByrne,
  phelimOconnor,
  richByrne,
  robJoy,
  robKeartland,
  stephenDevine,
} from "../competitors/puttingPalsCompetitors";
import {
  alexFitzpatrick,
  brooksKoepka,
  cameronYoung,
  chrisGotterup,
  coreyConners,
  davidPuig,
  harryHall,
  hidekiMatsuyama,
  jasonDay,
  jonRahm,
  justinRose,
  justinThomas,
  ludvigAberg,
  mattFitzpatrick,
  maxGreyserman,
  maxHoma,
  nicolaiHojgaard,
  roryMcilroy,
  scottieScheffler,
  shaneLowry,
  tyrrellHatton,
  wyndhamClark,
  xanderSchauffele,
} from "../players/pgaTourPlayers";

export default {
  tournamentId: "R2026033",
  paddyPowerId: undefined,
  winnerId: undefined,
  runnerUpId: undefined,
  competitors: [
    {
      ...stephenDevine,
      picks: [roryMcilroy, cameronYoung, maxGreyserman], // 8 + 12 + 250 = 270/1
    },
    {
      ...johnHannaway,
      picks: [scottieScheffler, jonRahm, maxHoma], // 4.5 + 12 + 175 = 191.5/1
    },
    {
      ...markByrne,
      picks: [ludvigAberg, chrisGotterup, alexFitzpatrick], // 16 + 50 + 80 = 146/1
    },
    {
      ...cameronFolens,
      picks: [cameronYoung, mattFitzpatrick, coreyConners], // 12 + 20 + 110 = 142/1
    },
    {
      ...robJoy,
      picks: [scottieScheffler, roryMcilroy, wyndhamClark], // 4.5 + 8 + 125 = 137.5/1
    },
    {
      ...robKeartland,
      picks: [scottieScheffler, nicolaiHojgaard, davidPuig], // 4.5 + 40 + 90 = 134.5
    },
    {
      ...conorObrien,
      picks: [xanderSchauffele, brooksKoepka, jasonDay], // 14 + 30 + 90 = 134/1
    },
    {
      ...aimeeOhanlon,
      picks: [cameronYoung, justinThomas, alexFitzpatrick], // 12 + 40 + 80 = 132/1
    },
    {
      ...phelimOconnor,
      picks: [scottieScheffler, ludvigAberg, coreyConners], // 4.5 + 16 + 110 = 130.5/1
    },
    {
      ...brianObrolchain,
      picks: [roryMcilroy, mattFitzpatrick, harryHall], // 8 + 20 + 100 = 128/1
    },
    {
      ...richByrne,
      picks: [scottieScheffler, cameronYoung, coreyConners], // 4.5 + 12 + 110 = 126.5/1
    },
    {
      ...aidanWalsh,
      picks: [ludvigAberg, justinRose, hidekiMatsuyama], // 16 + 40 + 70 = 126/1
    },
    {
      ...davidHynes,
      picks: [mattFitzpatrick, tyrrellHatton, shaneLowry], // 20 + 45 + 60 = 125/1
    },
  ],
};

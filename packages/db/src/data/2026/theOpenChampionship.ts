import {
  aidanWalsh,
  aimeeOhanlon,
  cameronFolens,
  conorObrien,
  davidHynes,
  johnHannaway,
  niallCronin,
  phelimOconnor,
  richByrne,
  robKeartland,
} from "../competitors/puttingPalsCompetitors";
import {
  aaronRai,
  adamScott,
  alexNoren,
  brianHarman,
  chrisGotterup,
  collinMorikawa,
  harrisEnglish,
  joaquinNiemann,
  justinRose,
  kurtKitayama,
  mattFitzpatrick,
  maxHoma,
  robertMacIntyre,
  roryMcilroy,
  russellHenley,
  scottieScheffler,
  tomKim,
  tommyFleetwood,
} from "../players/pgaTourPlayers";

export default {
  tournamentId: "R2026100",
  paddyPowerId: undefined,
  winnerId: undefined,
  runnerUpId: undefined,
  competitors: [
    {
      ...cameronFolens,
      picks: [mattFitzpatrick, tommyFleetwood, maxHoma], // 14 + 14 + 125 = 153/1
    },
    {
      ...robKeartland,
      picks: [roryMcilroy, collinMorikawa, adamScott], // 9 + 30 + 100 = 139/1
    },
    {
      ...conorObrien,
      picks: [scottieScheffler, robertMacIntyre, alexNoren], // 8 + 28 + 100 = 136/1
    },
    {
      ...richByrne,
      picks: [robertMacIntyre, justinRose, harrisEnglish], // 28 + 30 + 75 = 133/1
    },
    {
      ...phelimOconnor,
      picks: [robertMacIntyre, russellHenley, aaronRai], // 28 + 45 + 60 = 133/1
    },
    {
      ...niallCronin,
      picks: [mattFitzpatrick, joaquinNiemann, aaronRai], // 14 + 55 + 60 = 129/1
    },
    {
      ...davidHynes,
      picks: [tommyFleetwood, mattFitzpatrick, adamScott], // 14 + 14 + 100 = 128/1
    },
    {
      ...aimeeOhanlon,
      picks: [scottieScheffler, chrisGotterup, kurtKitayama], // 8 + 30 + 90 = 128/1
    },
    {
      ...johnHannaway,
      picks: [robertMacIntyre, tomKim, aaronRai], // 28 + 40 + 60 = 128/1
    },
    {
      ...aidanWalsh,
      picks: [mattFitzpatrick, justinRose, brianHarman], // 14 + 30 + 80 = 124/1
    },
  ],
};

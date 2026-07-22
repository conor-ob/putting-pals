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
  robJoy,
  robKeartland,
} from "../competitors/puttingPalsCompetitors";
import {
  aaronRai,
  adamScott,
  alexNoren,
  chrisGotterup,
  collinMorikawa,
  harrisEnglish,
  joaquinNiemann,
  jordanSpieth,
  justinRose,
  kurtKitayama,
  mattFitzpatrick,
  maxHoma,
  robertMacIntyre,
  roryMcilroy,
  russellHenley,
  samBurns,
  scottieScheffler,
  tomKim,
  tommyFleetwood,
} from "../players/pgaTourPlayers";

export default {
  tournamentId: "R2026100",
  paddyPowerId: undefined,
  winnerId: conorObrien.id,
  runnerUpId: aimeeOhanlon.id,
  competitors: [
    {
      ...cameronFolens,
      picks: [mattFitzpatrick, tommyFleetwood, maxHoma], // 14 + 14 + 125 = 153/1
    },
    {
      ...aidanWalsh,
      picks: [mattFitzpatrick, justinRose, adamScott], // 14 + 30 + 100 = 144/1
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
      ...robJoy,
      picks: [mattFitzpatrick, samBurns, jordanSpieth], // 14 + 45 + 66 = 125/1
    },
  ],
};

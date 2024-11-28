import {
  adamHadwin,
  billyHorschel,
  brianHarman,
  brysonDeChambeau,
  collinMorikawa,
  justinRose,
  mattFitzpatrick,
  nickDunlap,
  robertMacIntyre,
  roryMcilroy,
  sahithTheegala,
  scottieScheffler,
  shaneLowry,
  thomasDetry,
  tomKim,
  tommyFleetwood,
  tonyFinau,
  viktorHovland,
  xanderSchauffele,
} from "../players/pgaTourPlayers";
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
  phelimOconnor,
  richByrne,
  robJoy,
  stephenDevine,
} from "../players/puttingPalsPlayers";

export const usOpen2024 = {
  id: "R2024026",
  seasonId: "2024",
  shortName: "US Open",
  name: "U.S. Open",
  paddyPowerId: "12593221",
  winnerId: brianObrolchain.id,
  runnerUpId: davidHynes.id,
  players: [
    {
      ...davidHynes,
      picks: [tommyFleetwood, tonyFinau, shaneLowry], // 25 + 60 + 90 = 145/1
    },
    {
      ...cameronFolens,
      picks: [scottieScheffler, collinMorikawa, nickDunlap], // 3 + 11 + 125 = 139/1
    },
    {
      ...aimeeOhanlon,
      picks: [scottieScheffler, collinMorikawa, justinRose], // 3 + 11 + 125 = 139/1
    },
    {
      ...johnHannaway,
      picks: [scottieScheffler, collinMorikawa, justinRose], // 3 + 11 + 125 = 139/1
    },
    {
      ...robJoy,
      picks: [scottieScheffler, roryMcilroy, adamHadwin], // 3 + 10 + 125 = 138/1
    },
    {
      ...phelimOconnor,
      picks: [scottieScheffler, roryMcilroy, justinRose], // 3 + 10 + 125 = 138/1
    },
    {
      ...richByrne,
      picks: [scottieScheffler, brysonDeChambeau, billyHorschel], // 3 + 18 + 110 = 131/1
    },
    {
      ...conorObrien,
      picks: [xanderSchauffele, mattFitzpatrick, robertMacIntyre], // 8 + 33 + 90 = 131/1
    },
    {
      ...brianObrolchain,
      picks: [collinMorikawa, brysonDeChambeau, thomasDetry], // 11 + 18 + 100 = 129/1
    },
    {
      ...stephenDevine,
      picks: [viktorHovland, sahithTheegala, brianHarman], // 16 + 22 + 90 = 128/1
    },
    {
      ...aidanWalsh,
      picks: [tommyFleetwood, mattFitzpatrick, tomKim], // 25 + 33 + 70 = 128/1
    },
    {
      ...karlCurran,
      picks: [scottieScheffler, mattFitzpatrick, robertMacIntyre], // 3 + 33 + 90 = 126/1
    },
    {
      ...ciaranTighe,
      picks: [collinMorikawa, tommyFleetwood, robertMacIntyre], // 11 + 25 + 90 = 126/1
    },
  ],
};

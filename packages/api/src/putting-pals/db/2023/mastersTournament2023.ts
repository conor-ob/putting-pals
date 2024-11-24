import {
  brooksKoepka,
  cameronChamp,
  cameronSmith,
  cameronYoung,
  collinMorikawa,
  coreyConners,
  dannyWillett,
  jasonDay,
  jonRahm,
  jordanSpieth,
  justinThomas,
  keeganBradley,
  keithMitchell,
  kurtKitayama,
  maxHoma,
  minWooLee,
  mitoPereira,
  roryMcilroy,
  sahithTheegala,
  scottieScheffler,
  seamusPower,
  shaneLowry,
  siWooKim,
  tommyFleetwood,
  tonyFinau,
  tyrrellHatton,
} from "../pgaTourPlayers";
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
  phelimOconnor,
  richByrne,
  robJoy,
  robKeartland,
  stephenDevine,
} from "../puttingPalsPlayers";

export const mastersTournament2023 = {
  id: "R2023014",
  seasonId: "2023",
  shortName: "Masters",
  name: "Masters Tournament",
  winnerId: brianObrolchain.id,
  runnerUpId: phelimOconnor.id,
  players: [
    {
      ...aidanWalsh,
      picks: [roryMcilroy, jasonDay, kurtKitayama],
    },
    {
      ...aimeeOhanlon,
      picks: [scottieScheffler, tonyFinau, kurtKitayama],
    },
    {
      ...brianObrolchain,
      picks: [jordanSpieth, shaneLowry, sahithTheegala],
    },
    {
      ...cameronFolens,
      picks: [cameronSmith, cameronYoung, cameronChamp],
    },
    {
      ...conorObrien,
      picks: [cameronSmith, justinThomas, keeganBradley],
    },
    {
      ...ciaranTighe,
      picks: [maxHoma, minWooLee, tyrrellHatton],
    },
    {
      ...stephenDevine,
      picks: [roryMcilroy, minWooLee, seamusPower],
    },
    {
      ...davidHynes,
      picks: [tonyFinau, tommyFleetwood, seamusPower],
    },
    {
      ...johnHannaway,
      picks: [tonyFinau, tommyFleetwood, siWooKim],
    },
    {
      ...karlCurran,
      picks: [roryMcilroy, brooksKoepka, kurtKitayama],
    },
    {
      ...markByrne,
      picks: [roryMcilroy, cameronSmith, seamusPower],
    },
    {
      ...phelimOconnor,
      picks: [scottieScheffler, jonRahm, dannyWillett],
    },
    {
      ...richByrne,
      picks: [roryMcilroy, tonyFinau, kurtKitayama],
    },
    {
      ...robJoy,
      picks: [roryMcilroy, collinMorikawa, mitoPereira],
    },
    {
      ...robKeartland,
      picks: [roryMcilroy, coreyConners, keithMitchell],
    },
  ],
};

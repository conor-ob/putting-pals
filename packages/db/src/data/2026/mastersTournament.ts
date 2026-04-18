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
  stephenDevine,
} from "../competitors/puttingPalsCompetitors";
import {
  aldrichPotgieter,
  alexNoren,
  brysonDeChambeau,
  cameronYoung,
  carlosOrtiz,
  chrisGotterup,
  collinMorikawa,
  danielBerger,
  jacobBridgeman,
  jasonDay,
  jonRahm,
  ludvigAberg,
  mattFitzpatrick,
  maxHoma,
  michaelKim,
  patrickReed,
  rasmusHojgaard,
  roryMcilroy,
  ryanFox,
  scottieScheffler,
  shaneLowry,
  siWooKim,
  tomMcKibbin,
  tommyFleetwood,
  viktorHovland,
  wyndhamClark,
} from "../players/pgaTourPlayers";

export default {
  tournamentId: "R2026014",
  paddyPowerId: undefined,
  winnerId: cameronFolens.id,
  runnerUpId: robJoy.id,
  competitors: [
    {
      ...robKeartland,
      picks: [chrisGotterup, jasonDay, jacobBridgeman],
    },
    {
      ...robJoy,
      picks: [scottieScheffler, roryMcilroy, tomMcKibbin],
    },
    {
      ...cameronFolens,
      picks: [cameronYoung, mattFitzpatrick, alexNoren],
    },
    {
      ...aimeeOhanlon,
      picks: [scottieScheffler, cameronYoung, ryanFox],
    },
    {
      ...brianObrolchain,
      picks: [ludvigAberg, mattFitzpatrick, carlosOrtiz],
    },
    {
      ...stephenDevine,
      picks: [collinMorikawa, siWooKim, rasmusHojgaard],
    },
    {
      ...davidHynes,
      picks: [tommyFleetwood, shaneLowry, maxHoma],
    },
    {
      ...johnHannaway,
      picks: [aldrichPotgieter, brysonDeChambeau, scottieScheffler],
    },
    {
      ...richByrne,
      picks: [jonRahm, brysonDeChambeau, wyndhamClark],
    },
    {
      ...phelimOconnor,
      picks: [michaelKim, brysonDeChambeau, roryMcilroy],
    },
    {
      ...aidanWalsh,
      picks: [patrickReed, chrisGotterup, danielBerger],
    },
    {
      ...conorObrien,
      picks: [viktorHovland, rasmusHojgaard, scottieScheffler],
    },
  ],
};

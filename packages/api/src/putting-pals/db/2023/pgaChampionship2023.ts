import {
  adamScott,
  collinMorikawa,
  garyWoodland,
  jonRahm,
  jordanSpieth,
  justinRose,
  mattFitzpatrick,
  maxHoma,
  mitoPereira,
  rickieFowler,
  roryMcilroy,
  russellHenley,
  scottieScheffler,
  seamusPower,
  shaneLowry,
  siWooKim,
  sungjaeIm,
  tommyFleetwood,
  viktorHovland,
  xanderSchauffele,
} from "../pgaTourPlayers";
import {
  aidanWalsh,
  aimeeOhanlon,
  brianObrolchain,
  ciaranTighe,
  conorObrien,
  davidHynes,
  johnHannaway,
  phelimOconnor,
  richByrne,
  robJoy,
  robKeartland,
  stephenDevine,
} from "../puttingPalsPlayers";

export const pgaChampionship2023 = {
  id: "R2023033",
  seasonId: "2023",
  shortName: "PGA",
  name: "PGA Championship",
  winnerId: davidHynes.id,
  runnerUpId: robJoy.id,
  players: [
    {
      ...stephenDevine,
      picks: [jonRahm, garyWoodland, mitoPereira],
    },
    {
      ...richByrne,
      picks: [roryMcilroy, xanderSchauffele, russellHenley],
    },
    {
      ...conorObrien,
      picks: [viktorHovland, maxHoma, adamScott],
    },
    {
      ...brianObrolchain,
      picks: [justinRose, mattFitzpatrick, sungjaeIm],
    },
    {
      ...johnHannaway,
      picks: [scottieScheffler, tommyFleetwood, siWooKim],
    },
    {
      ...robKeartland,
      picks: [seamusPower, jonRahm, scottieScheffler],
    },
    {
      ...ciaranTighe,
      picks: [maxHoma, jordanSpieth, adamScott],
    },
    {
      ...phelimOconnor,
      picks: [seamusPower, jonRahm, scottieScheffler],
    },
    {
      ...robJoy,
      picks: [scottieScheffler, roryMcilroy, seamusPower],
    },
    {
      ...aidanWalsh,
      picks: [jordanSpieth, rickieFowler, garyWoodland],
    },
    {
      ...aimeeOhanlon,
      picks: [viktorHovland, shaneLowry, garyWoodland],
    },
    {
      ...davidHynes,
      picks: [viktorHovland, collinMorikawa, justinRose],
    },
  ],
};

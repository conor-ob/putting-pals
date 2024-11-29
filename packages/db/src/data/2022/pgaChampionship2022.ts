import {
  aidanWalsh,
  brianObrolchain,
  ciaranTighe,
  conorObrien,
  cormacObrolchain,
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
  adamScott,
  brooksKoepka,
  cameronChamp,
  cameronSmith,
  coreyConners,
  garyWoodland,
  hidekiMatsuyama,
  jasonDay,
  jordanSpieth,
  mackenzieHughes,
  maxHoma,
  patrickReed,
  roryMcilroy,
  samBurns,
  scottieScheffler,
  shaneLowry,
  tigerWoods,
  tommyFleetwood,
  tonyFinau,
  viktorHovland,
  willZalatoris,
} from "../players/pgaTourPlayers";

export const pgaChampionship2022 = {
  tournamentId: "R2022033",
  seasonId: "2022",
  shortName: "PGA",
  name: "PGA Championship",
  winnerId: ciaranTighe.id,
  runnerUpId: markByrne.id,
  competitors: [
    {
      ...conorObrien,
      picks: [adamScott, viktorHovland, roryMcilroy],
    },
    {
      ...brianObrolchain,
      picks: [scottieScheffler, tommyFleetwood, cameronChamp],
    },
    {
      ...cormacObrolchain,
      picks: [jasonDay, tigerWoods, shaneLowry],
    },
    {
      ...johnHannaway,
      picks: [shaneLowry, coreyConners, tommyFleetwood],
    },
    {
      ...aidanWalsh,
      picks: [roryMcilroy, jordanSpieth, adamScott],
    },
    {
      ...robKeartland,
      picks: [roryMcilroy, cameronChamp, samBurns],
    },
    {
      ...phelimOconnor,
      picks: [brooksKoepka, adamScott, roryMcilroy],
    },
    {
      ...richByrne,
      picks: [adamScott, shaneLowry, hidekiMatsuyama],
    },
    {
      ...stephenDevine,
      picks: [scottieScheffler, hidekiMatsuyama, mackenzieHughes],
    },
    {
      ...robJoy,
      picks: [cameronSmith, tonyFinau, patrickReed],
    },
    {
      ...davidHynes,
      picks: [shaneLowry, tommyFleetwood, tonyFinau],
    },
    {
      ...markByrne,
      picks: [garyWoodland, willZalatoris, shaneLowry],
    },
    {
      ...ciaranTighe,
      picks: [maxHoma, shaneLowry, tommyFleetwood],
    },
  ],
};

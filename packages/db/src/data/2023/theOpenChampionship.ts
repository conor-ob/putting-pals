import {
  aidanWalsh,
  aimeeOhanlon,
  cameronFolens,
  ciaranTighe,
  davidHynes,
  johnHannaway,
  phelimOconnor,
  richByrne,
  robKeartland,
  stephenDevine,
} from "../competitors/puttingPalsCompetitors";
import {
  byeongHunAn,
  cameronSmith,
  dustinJohnson,
  jonRahm,
  mattFitzpatrick,
  matthewJordan,
  padraigHarrington,
  rickieFowler,
  roryMcilroy,
  scottieScheffler,
  seamusPower,
  shaneLowry,
  siWooKim,
  tommyFleetwood,
  viktorHovland,
} from "../players/pgaTourPlayers";

export default {
  tournamentId: "R2023100",
  paddyPowerId: undefined,
  winnerId: phelimOconnor.id,
  runnerUpId: ciaranTighe.id,
  competitors: [
    {
      ...stephenDevine,
      picks: [roryMcilroy, mattFitzpatrick, siWooKim],
    },
    {
      ...aimeeOhanlon,
      picks: [roryMcilroy, shaneLowry, siWooKim],
    },
    {
      ...aidanWalsh,
      picks: [scottieScheffler, rickieFowler, padraigHarrington],
    },
    {
      ...phelimOconnor,
      picks: [scottieScheffler, tommyFleetwood, byeongHunAn],
    },
    {
      ...davidHynes,
      picks: [padraigHarrington, rickieFowler, tommyFleetwood],
    },
    {
      ...robKeartland,
      picks: [seamusPower, roryMcilroy, scottieScheffler],
    },
    {
      ...richByrne,
      picks: [roryMcilroy, dustinJohnson, padraigHarrington],
    },
    {
      ...ciaranTighe,
      picks: [cameronSmith, rickieFowler, matthewJordan],
    },
    {
      ...johnHannaway,
      picks: [siWooKim, viktorHovland, jonRahm],
    },
    {
      ...cameronFolens,
      picks: [roryMcilroy, shaneLowry, padraigHarrington],
    },
  ],
};

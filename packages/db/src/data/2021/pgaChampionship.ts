import {
  aidanWalsh,
  cameronFolens,
  ciaranTighe,
  conorObrien,
  davidHynes,
  johnHannaway,
  karlCurran,
  phelimOconnor,
  richByrne,
  robJoy,
  robKeartland,
  stephenDevine,
} from "../competitors/puttingPalsCompetitors";
import {
  brandenGrace,
  danielBerger,
  dustinJohnson,
  jordanSpieth,
  justinRose,
  keeganBradley,
  leeWestwood,
  mattJones,
  mattWallace,
  patrickReed,
  paulCasey,
  robertMacIntyre,
  roryMcilroy,
  shaneLowry,
  siWooKim,
  stewartCink,
  tommyFleetwood,
  tonyFinau,
  viktorHovland,
  webbSimpson,
  willZalatoris,
  xanderSchauffele,
} from "../players/pgaTourPlayers";

export default {
  tournamentId: "R2021033",
  paddyPowerId: undefined,
  winnerId: richByrne.id,
  runnerUpId: davidHynes.id,
  competitors: [
    {
      ...conorObrien,
      picks: [danielBerger, tommyFleetwood, keeganBradley],
    },
    {
      ...robKeartland,
      picks: [stewartCink, danielBerger, jordanSpieth],
    },
    {
      ...stephenDevine,
      picks: [xanderSchauffele, viktorHovland, brandenGrace],
    },
    {
      ...cameronFolens,
      picks: [jordanSpieth, shaneLowry, siWooKim],
    },
    {
      ...johnHannaway,
      picks: [tonyFinau, viktorHovland, robertMacIntyre],
    },
    {
      ...karlCurran,
      picks: [xanderSchauffele, webbSimpson, leeWestwood],
    },
    {
      ...phelimOconnor,
      picks: [mattJones, jordanSpieth, dustinJohnson],
    },
    {
      ...aidanWalsh,
      picks: [jordanSpieth, paulCasey, mattWallace],
    },
    {
      ...ciaranTighe,
      picks: [tommyFleetwood, patrickReed, shaneLowry],
    },
    {
      ...richByrne,
      picks: [dustinJohnson, shaneLowry, justinRose],
    },
    {
      ...davidHynes,
      picks: [tommyFleetwood, tonyFinau, paulCasey],
    },
    {
      ...robJoy,
      picks: [mattWallace, willZalatoris, roryMcilroy],
    },
  ],
};

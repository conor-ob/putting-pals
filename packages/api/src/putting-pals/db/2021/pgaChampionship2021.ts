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
} from "../pgaTourPlayers";
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
} from "../puttingPalsPlayers";

export const pgaChampionship2021 = {
  id: "R2021033",
  seasonId: "2021",
  shortName: "PGA",
  name: "PGA Championship",
  winnerId: richByrne.id,
  runnerUpId: davidHynes.id,
  players: [
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

import {
  adamScott,
  brandenGrace,
  brooksKoepka,
  ianPoulter,
  jonRahm,
  jordanSpieth,
  louisOosthuizen,
  lucasHerbert,
  marcLeishman,
  martinKaymer,
  mattWallace,
  minWooLee,
  paulCasey,
  richardBland,
  rickieFowler,
  robertMacIntyre,
  roryMcilroy,
  sergioGarcia,
  shaneLowry,
  tommyFleetwood,
  tonyFinau,
  tyrrellHatton,
} from "../pga-tour-players";
import {
  aidanWalsh,
  cameronFolens,
  conorObrien,
  davidHynes,
  johnHannaway,
  niallCronin,
  phelimOconnor,
  richByrne,
  robJoy,
  robKeartland,
  stephenDevine,
} from "../putting-pals-competitors";

export default {
  tournamentId: "R2021100",
  paddyPowerId: undefined,
  winnerId: phelimOconnor.id,
  runnerUpId: robKeartland.id,
  competitors: [
    {
      ...conorObrien,
      picks: [adamScott, louisOosthuizen, paulCasey],
    },
    {
      ...cameronFolens,
      picks: [jordanSpieth, tyrrellHatton, richardBland],
    },
    {
      ...phelimOconnor,
      picks: [martinKaymer, jonRahm, brooksKoepka],
    },
    {
      ...stephenDevine,
      picks: [brooksKoepka, louisOosthuizen, minWooLee],
    },
    {
      ...richByrne,
      picks: [tyrrellHatton, brandenGrace, lucasHerbert],
    },
    {
      ...robKeartland,
      picks: [robertMacIntyre, rickieFowler, louisOosthuizen],
    },
    {
      ...aidanWalsh,
      picks: [sergioGarcia, marcLeishman, louisOosthuizen],
    },
    {
      ...davidHynes,
      picks: [ianPoulter, tonyFinau, tommyFleetwood],
    },
    {
      ...johnHannaway,
      picks: [brandenGrace, shaneLowry, robertMacIntyre],
    },
    {
      ...niallCronin,
      picks: [shaneLowry, tommyFleetwood, adamScott],
    },
    {
      ...robJoy,
      picks: [jonRahm, roryMcilroy, mattWallace],
    },
  ],
};

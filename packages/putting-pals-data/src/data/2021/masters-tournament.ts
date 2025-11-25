import {
  aidanWalsh,
  brianObrolchain,
  cameronFolens,
  ciaranTighe,
  conorObrien,
  davidHynes,
  johnHannaway,
  karlCurran,
  markByrne,
  niallCronin,
  phelimOconnor,
  richByrne,
  robJoy,
  robKeartland,
  stephenDevine,
} from "../../competitors/putting-pals-competitors";
import {
  abrahamAncer,
  adamScott,
  brooksKoepka,
  bubbaWatson,
  cameronSmith,
  collinMorikawa,
  coreyConners,
  dustinJohnson,
  francescoMolinari,
  ianPoulter,
  jonRahm,
  justinRose,
  justinThomas,
  kevinKisner,
  louisOosthuizen,
  matthewWolff,
  mattKuchar,
  patrickCantlay,
  roryMcilroy,
  scottieScheffler,
  sergioGarcia,
  shaneLowry,
  siWooKim,
  tommyFleetwood,
  victorPerez,
  willZalatoris,
} from "../../players/pga-tour-players";

export default {
  tournamentId: "R2021536",
  paddyPowerId: undefined,
  winnerId: stephenDevine.id,
  runnerUpId: conorObrien.id,
  competitors: [
    {
      ...conorObrien,
      picks: [cameronSmith, scottieScheffler, coreyConners],
    },
    {
      ...stephenDevine,
      picks: [jonRahm, collinMorikawa, siWooKim],
    },
    {
      ...richByrne,
      picks: [dustinJohnson, roryMcilroy, ianPoulter],
    },
    {
      ...brianObrolchain,
      picks: [willZalatoris, patrickCantlay, sergioGarcia],
    },
    {
      ...cameronFolens,
      picks: [justinThomas, shaneLowry, mattKuchar],
    },
    {
      ...robJoy,
      picks: [dustinJohnson, roryMcilroy, victorPerez],
    },
    {
      ...niallCronin,
      picks: [francescoMolinari, brooksKoepka, justinThomas],
    },
    {
      ...phelimOconnor,
      picks: [coreyConners, bubbaWatson, justinThomas],
    },
    {
      ...karlCurran,
      picks: [brooksKoepka, sergioGarcia, justinRose],
    },
    {
      ...davidHynes,
      picks: [adamScott, tommyFleetwood, shaneLowry],
    },
    {
      ...aidanWalsh,
      picks: [roryMcilroy, sergioGarcia, justinRose],
    },
    {
      ...robKeartland,
      picks: [dustinJohnson, justinThomas, kevinKisner],
    },
    {
      ...ciaranTighe,
      picks: [justinThomas, collinMorikawa, matthewWolff],
    },
    {
      ...markByrne,
      picks: [cameronSmith, bubbaWatson, louisOosthuizen],
    },
    {
      ...johnHannaway,
      picks: [collinMorikawa, abrahamAncer, cameronSmith],
    },
  ],
};

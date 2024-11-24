import {
  billyHorschel,
  brooksKoepka,
  bubbaWatson,
  cameronSmith,
  collinMorikawa,
  coreyConners,
  danielBerger,
  dustinJohnson,
  joaquinNiemann,
  jonRahm,
  justinThomas,
  kevinKisner,
  leeWestwood,
  louisOosthuizen,
  marcLeishman,
  maxHoma,
  robertMacIntyre,
  scottieScheffler,
  seamusPower,
  sergioGarcia,
  shaneLowry,
  siWooKim,
  tomHoge,
  tommyFleetwood,
  viktorHovland,
} from "../pgaTourPlayers";
import {
  aidanWalsh,
  brianObrolchain,
  cameronFolens,
  ciaranTighe,
  conorObrien,
  davidHynes,
  johnHannaway,
  markByrne,
  phelimOconnor,
  richByrne,
  robJoy,
  robKeartland,
  stephenDevine,
} from "../puttingPalsPlayers";

export const mastersTournament2022 = {
  id: "R2022014",
  seasonId: "2022",
  shortName: "Masters",
  name: "Masters Tournament",
  winnerId: richByrne.id,
  runnerUpId: johnHannaway.id,
  players: [
    {
      ...conorObrien,
      picks: [jonRahm, brooksKoepka, robertMacIntyre],
    },
    {
      ...stephenDevine,
      picks: [scottieScheffler, siWooKim, seamusPower],
    },
    {
      ...johnHannaway,
      picks: [siWooKim, scottieScheffler, tommyFleetwood],
    },
    {
      ...brianObrolchain,
      picks: [kevinKisner, scottieScheffler, brooksKoepka],
    },
    {
      ...ciaranTighe,
      picks: [justinThomas, cameronSmith, kevinKisner],
    },
    {
      ...aidanWalsh,
      picks: [shaneLowry, bubbaWatson, danielBerger],
    },
    {
      ...robJoy,
      picks: [tomHoge, viktorHovland, dustinJohnson],
    },
    {
      ...richByrne,
      picks: [justinThomas, scottieScheffler, robertMacIntyre],
    },
    {
      ...robKeartland,
      picks: [shaneLowry, joaquinNiemann, maxHoma],
    },
    {
      ...davidHynes,
      picks: [shaneLowry, tommyFleetwood, billyHorschel],
    },
    {
      ...phelimOconnor,
      picks: [justinThomas, sergioGarcia, tommyFleetwood],
    },
    {
      ...cameronFolens,
      picks: [coreyConners, marcLeishman, louisOosthuizen],
    },
    {
      ...markByrne,
      picks: [dustinJohnson, collinMorikawa, leeWestwood],
    },
  ],
};

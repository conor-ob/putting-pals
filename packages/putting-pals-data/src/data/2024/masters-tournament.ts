import {
  aidanWalsh,
  aimeeOhanlon,
  brianObrolchain,
  cameronFolens,
  cianMoynihan,
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
  adamScott,
  brooksKoepka,
  chrisKirk,
  collinMorikawa,
  dustinJohnson,
  harrisEnglish,
  hidekiMatsuyama,
  jonRahm,
  jordanSpieth,
  justinRose,
  justinThomas,
  ludvigAberg,
  maxHoma,
  minWooLee,
  patrickReed,
  philMickelson,
  rickieFowler,
  roryMcilroy,
  scottieScheffler,
  seppStraka,
  sergioGarcia,
  shaneLowry,
  siWooKim,
  taylorMoore,
  tomKim,
  tommyFleetwood,
  tonyFinau,
  viktorHovland,
  wyndhamClark,
  xanderSchauffele,
} from "../../players/pga-tour-players";

export default {
  tournamentId: "R2024014",
  paddyPowerId: "12571448",
  winnerId: richByrne.id,
  runnerUpId: brianObrolchain.id,
  competitors: [
    {
      ...robJoy,
      picks: [scottieScheffler, roryMcilroy, taylorMoore], // 3 + 9 + 225 = 237/1
    },
    {
      ...markByrne,
      picks: [tommyFleetwood, patrickReed, harrisEnglish], // 33 + 50 + 100 = 183/1
    },
    {
      ...stephenDevine,
      picks: [xanderSchauffele, shaneLowry, chrisKirk], // 12 + 33 + 125 = 170/1
    },
    {
      ...aimeeOhanlon,
      picks: [scottieScheffler, jordanSpieth, chrisKirk], // 3 + 18 + 125 = 146/1
    },
    {
      ...ciaranTighe,
      picks: [wyndhamClark, minWooLee, adamScott], // 25 + 50 + 66 = 141/1
    },
    {
      ...phelimOconnor,
      picks: [scottieScheffler, jonRahm, chrisKirk], // 3 + 10 + 125 = 138/1
    },
    {
      ...brianObrolchain,
      picks: [scottieScheffler, roryMcilroy, chrisKirk], // 3 + 8 + 125 = 136/1
    },
    {
      ...niallCronin,
      picks: [jonRahm, siWooKim, adamScott], // 9 + 60 + 66 = 135/1
    },
    {
      ...davidHynes,
      picks: [tonyFinau, maxHoma, siWooKim], // 25 + 50 + 60 = 135/1
    },
    {
      ...aidanWalsh,
      picks: [brooksKoepka, hidekiMatsuyama, philMickelson], // 14 + 16 + 100 = 130/1
    },
    {
      ...cameronFolens,
      picks: [jonRahm, collinMorikawa, justinRose], // 9 + 50 + 70 = 129/1
    },
    {
      ...robKeartland,
      picks: [scottieScheffler, brooksKoepka, seppStraka], // 7 + 14 + 110 = 127/1
    },
    {
      ...conorObrien,
      picks: [roryMcilroy, dustinJohnson, tomKim], // 9 + 28 + 90 = 127/1
    },
    {
      ...johnHannaway,
      picks: [justinThomas, viktorHovland, rickieFowler], // 22 + 25 + 80 = 127/1
    },
    {
      ...karlCurran,
      picks: [ludvigAberg, dustinJohnson, rickieFowler], // 18 + 28 + 80 = 126/1
    },
    {
      ...richByrne,
      picks: [scottieScheffler, xanderSchauffele, seppStraka], // 3 + 12 + 110 = 125/1
    },
    {
      ...cianMoynihan,
      picks: [jonRahm, tonyFinau, sergioGarcia], // 10 + 25 + 90 = 125/1
    },
  ],
};

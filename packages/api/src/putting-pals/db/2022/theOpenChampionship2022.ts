import {
  billyHorschel,
  collinMorikawa,
  coreyConners,
  dylanFrittelli,
  francescoMolinari,
  joaquinNiemann,
  jonRahm,
  jordanSmith,
  kevinKisner,
  louisOosthuizen,
  mattFitzpatrick,
  mitoPereira,
  padraigHarrington,
  patrickCantlay,
  paulCasey,
  robertMacIntyre,
  roryMcilroy,
  scottieScheffler,
  seamusPower,
  shaneLowry,
  thomasPieters,
  tigerWoods,
  viktorHovland,
  willZalatoris,
  xanderSchauffele,
} from "../pgaTourPlayers";
import {
  aidanWalsh,
  aimeeOhanlon,
  brianObrolchain,
  cameronFolens,
  ciaranTighe,
  conorObrien,
  davidHynes,
  johnHannaway,
  karlCurran,
  markByrne,
  phelimOconnor,
  richByrne,
  robJoy,
  robKeartland,
  stephenDevine,
} from "../puttingPalsPlayers";

export const theOpenChampionship2022 = {
  id: "R2022100",
  seasonId: "2022",
  shortName: "Open",
  name: "The Open Championship",
  winnerId: richByrne.id,
  runnerUpId: brianObrolchain.id,
  players: [
    {
      ...conorObrien,
      picks: [xanderSchauffele, mattFitzpatrick, francescoMolinari],
    },
    {
      ...johnHannaway,
      picks: [shaneLowry, thomasPieters, robertMacIntyre],
    },
    {
      ...karlCurran,
      picks: [willZalatoris, seamusPower, viktorHovland],
    },
    {
      ...richByrne,
      picks: [roryMcilroy, shaneLowry, kevinKisner],
    },
    {
      ...brianObrolchain,
      picks: [roryMcilroy, dylanFrittelli, xanderSchauffele],
    },
    {
      ...robJoy,
      picks: [coreyConners, collinMorikawa, patrickCantlay],
    },
    {
      ...ciaranTighe,
      picks: [robertMacIntyre, jonRahm, seamusPower],
    },
    {
      ...aidanWalsh,
      picks: [xanderSchauffele, seamusPower, tigerWoods],
    },
    {
      ...robKeartland,
      picks: [roryMcilroy, robertMacIntyre, billyHorschel],
    },
    {
      ...cameronFolens,
      picks: [willZalatoris, joaquinNiemann, robertMacIntyre],
    },
    {
      ...davidHynes,
      picks: [viktorHovland, collinMorikawa, padraigHarrington],
    },
    {
      ...aimeeOhanlon,
      picks: [roryMcilroy, louisOosthuizen, mitoPereira],
    },
    {
      ...markByrne,
      picks: [paulCasey, collinMorikawa, shaneLowry],
    },
    {
      ...stephenDevine,
      picks: [kevinKisner, xanderSchauffele, mattFitzpatrick],
    },
    {
      ...phelimOconnor,
      picks: [jordanSmith, xanderSchauffele, scottieScheffler],
    },
  ],
};

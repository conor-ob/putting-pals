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
} from "../competitors/puttingPalsCompetitors";
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
} from "../players/pgaTourPlayers";

export default {
  tournamentId: "R2022100",
  paddyPowerId: undefined,
  winnerId: richByrne.id,
  runnerUpId: brianObrolchain.id,
  competitors: [
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

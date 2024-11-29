import {
  aidanWalsh,
  cameronFolens,
  conorObrien,
  davidHynes,
  johnHannaway,
  karlCurran,
  markByrne,
  niallCronin,
  phelimOconnor,
  richByrne,
  robJoy,
  stephenDevine,
} from "../competitors/puttingPalsCompetitors";
import {
  adamScott,
  brianHarman,
  brooksKoepka,
  brysonDeChambeau,
  christiaanBezuidenhout,
  collinMorikawa,
  coreyConners,
  garyWoodland,
  jasonKokrak,
  jonRahm,
  justinThomas,
  leeWestwood,
  louisOosthuizen,
  mattFitzpatrick,
  maxHoma,
  patrickReed,
  paulCasey,
  philMickelson,
  scottieScheffler,
  shaneLowry,
  stewartCink,
  tonyFinau,
  viktorHovland,
  wilcoNienaber,
  willZalatoris,
  xanderSchauffele,
} from "../players/pgaTourPlayers";

export const usOpen2021 = {
  tournamentId: "R2021535",
  seasonId: "2021",
  shortName: "US Open",
  name: "U.S. Open",
  winnerId: cameronFolens.id,
  runnerUpId: markByrne.id,
  competitors: [
    {
      ...conorObrien,
      picks: [viktorHovland, willZalatoris, adamScott],
    },
    {
      ...aidanWalsh,
      picks: [jonRahm, brysonDeChambeau, wilcoNienaber],
    },
    {
      ...markByrne,
      picks: [brooksKoepka, louisOosthuizen, leeWestwood],
    },
    {
      ...stephenDevine,
      picks: [tonyFinau, viktorHovland, stewartCink],
    },
    {
      ...davidHynes,
      picks: [leeWestwood, shaneLowry, patrickReed],
    },
    {
      ...cameronFolens,
      picks: [xanderSchauffele, brianHarman, brooksKoepka],
    },
    {
      ...richByrne,
      picks: [xanderSchauffele, collinMorikawa, christiaanBezuidenhout],
    },
    {
      ...phelimOconnor,
      picks: [jasonKokrak, garyWoodland, jonRahm],
    },
    {
      ...johnHannaway,
      picks: [coreyConners, scottieScheffler, viktorHovland],
    },
    {
      ...robJoy,
      picks: [maxHoma, shaneLowry, brooksKoepka],
    },
    {
      ...karlCurran,
      picks: [brooksKoepka, paulCasey, adamScott],
    },
    {
      ...niallCronin,
      picks: [justinThomas, philMickelson, mattFitzpatrick],
    },
  ],
};
